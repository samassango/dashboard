

$(document).ready(function(){
    // alert("Testing the reports");
    queue()

        .defer(d3.json, "https://tshwanesafetyapi.herokuapp.com/api/Incidents?filter={%22include%22:[%22incident_channel%22,%22incident_status%22,%22incident_category%22,%22incident_subcategory%22,%22incident_region%22]}")
        .await(makeGraphs);

    function makeGraphs(error, recordsJson) {
        
        //Clean data
        var records = recordsJson;
        // console.log("records:", records[0]);
        var dateFormat = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ");
        var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        var map = L.map('map');
        var markers = [];
        var markerOn = false;
        var detail = null;      // Marker on the map

        $('#datetimepicker1').datetimepicker({defaultDate: "1/1/2018"});
        $('#datetimepicker2').datetimepicker({
           defaultDate:{
            useCurrent: false //Important! See issue #1075
           } 
        });

        records.forEach(function(d) {
            console.log("date:", d["reportedOn"]);
            d["reportedOn"] = dateFormat.parse(d["reportedOn"]);
            d["full_time"] = new Date(d["reportedOn"]);
            d["reportedOn"].setMinutes(0);
            d["reportedOn"].setSeconds(0);
            d["lot"] = +d["lot"];
            d["lat"] = +d["lat"];
            d["hour"] = +d["reportedOn"].getHours();
            d["day"] = +d["reportedOn"].getDay();
        });

        //Create a Crossfilter instance
        var ndx = crossfilter(records);

        var adjustX = 20, adjustY = 40;

        //Define Dimensions
        var dateDim = ndx.dimension(function(d) { return d["reportedOn"]; });
        var areaDim = ndx.dimension(function(d) { return d["incident_category"]["name"];});
        // console.log("results", areaDim);
        var typeDim = ndx.dimension(function(d) { return d["incident_subcategory"]["name"]; });
        var regionDim = ndx.dimension(function(d) { return d["incident_region"]["name"]; });
        var channelDim = ndx.dimension(function(d) { return d["incident_channel"]["name"]; });
        var heatmapDim = ndx.dimension(function(d) { return [d["hour"], d["day"]]; });
        var allDim = ndx.dimension(function(d) {return d;});

        //Group Data
        var numRecordsByDate = dateDim.group();
        var areaGroup = areaDim.group();

        var typeGroup = typeDim.group();
        var regionGroup = regionDim.group();
        var channelGroup = channelDim.group();
        var heatmapGroup = heatmapDim.group();
        var all = ndx.groupAll();
        var locGroup = allDim.group().reduce(
            function(p, v, nf) {
                if (v.lat && v.lot)
                    return p + 1;
                return p;
            },
            function(p, v, nf) {
                if (v.lat && v.lot)
                    return p - 1;
                return p;
            },
            function() {
                return 0;
            }
        );
        
        //Define values (to be used in charts)
        var minDate = dateDim.bottom(1)[0]["reportedOn"];
        var maxDate = dateDim.top(1)[0]["reportedOn"];

        //Charts
        var numberRecordsND = dc.numberDisplay("#number-records-nd");
        var numberIncidentsWithLoc = dc.numberDisplay("#number-incidents-loc");
        var timeChart = dc.barChart("#time-chart");
        var areaChart = dc.rowChart("#area-row-chart");

        var typeChart = dc.rowChart("#type-row-chart");
        var regionChart = dc.rowChart("#region-row-chart");
        var channelChart = dc.pieChart("#channel-pie-chart");
        var heatmapChart = dc.heatMap("#heatmap-chart");
        var top = 10;
        var rowBarHieight = 30;

        timeChart.name = "time";
        areaChart.name = "area";

        typeChart.name = "type";
        regionChart.name = "region";
        channelChart.name = "channel";
        heatmapChart.name = "heatmap";

        percentageTitle = function(d) {
            return d.key +": " + d.value +
                " [ " + Math.round(d.value / parseFloat(all.value()) * 1000) / 10 +
                "% ]";
        };

        numberRecordsND
            .formatNumber(d3.format("d"))
            .valueAccessor(function(d){return d; })
            .group(all);

        numberIncidentsWithLoc
            .formatNumber(d3.format("d"))
            .valueAccessor(function(d){ return d.value; })
            .group(locGroup);

        timeChart
            .width(screen.width - 260 -30 -30 -15-15)
            .height(320)
            .margins({top: 10, right: 50, bottom: 20, left: 25})
            .dimension(dateDim)
            .group(numRecordsByDate)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .elasticY(true)
            .yAxis().ticks(4);
        timeChart.render();

        areaChart
            .data(function(group) { return group.top(top); })
            .width(360)
            .height(top * rowBarHieight)
            .dimension(areaDim)
            .group(areaGroup)
            .ordering(function(d) { return -d.value })
            .elasticX(true)
            .title(percentageTitle)
            .xAxis().ticks(4);
        areaChart.render();

        typeChart
            .data(function(group) { return group.top(top); })
            .width(360)
            .height(top * rowBarHieight)
            .dimension(typeDim)
            .group(typeGroup)
            .title(percentageTitle)
            .elasticX(true)
            .labelOffsetY(10)
            .xAxis().ticks(4);
        typeChart.render();

        regionChart
            .width(360)
            .data(function(group) { return group.top(top); })
            .height(top * rowBarHieight)
            .dimension(regionDim)
            .group(regionGroup)
            .ordering(function(d) { return -d.value })
            .title(percentageTitle)
            .elasticX(true)
            .xAxis().ticks(4);
        regionChart.render();

        channelChart
            .width(400)
            .height(300)
            .dimension(channelDim)
            .group(channelGroup)
            .legend(dc.legend())
            .innerRadius(50)
            .title(percentageTitle);
        channelChart.render();


        var heatColorMapping = d3.scale.linear()
            .domain([0, heatmapGroup.top(1)[0].value])
            .range(["#d3d3d3", "red", "green"]);

        heatmapChart
            .width(800)
            .height(350)
            .margins({ top: 40, right: 40, bottom: 40, left: 40 })
            .dimension(heatmapDim)
            .group(heatmapGroup)
            .rowsLabel( function(d){ return weekday[d]; } )
            .rowOrdering(d3.descending)
            .colsLabel( function(d){ return d+"h"; } )
            .keyAccessor(function(d) { return +d.key[0]; })
            .valueAccessor(function(d) { return +d.key[1]; })
            .colorAccessor(function(d) { return +d.value; })
            .colors(heatColorMapping)
            //.legend(dc.legend().x(10).y(380).gap(5))
            .on('renderlet', function (chart) {
                // console.log(chart.selectAll("g.box-group"));
                chart.selectAll("g.box-group")
                .append("text")
                .attr("text", function(d) { return d.value; })
                .attr("x", function(d) {
                    var parentBox = $(this)[0].parentNode;
                    var x =  parseInt(parentBox.childNodes[0].attributes["x"].value);
                    return x+20;
                })
                .attr("y", function(d) { return d.key[1] * 38 + 2 + 25; })
                .html(function(d) { return d.value; });

                // Remove redundant text tags
                var g = chart.selectAll("g.box-group")[0];
                var data = chart.data();
                var text = null;
                g.forEach(function(item, i) {
                    var found = false; 
                    for (var j = 0; j < item.children.length; j++) {
                        if (item.children[j].tagName == 'text' && !found) {
                            found = true;
                            item.children[j].innerHTML = data[i].value;
                        } else if (item.children[j].tagName == 'text' && found) {
                            item.removeChild(item.children[j]); 
                        }
                    }
                });
            })
            .on('preRedraw', function() {
                heatmapChart.calculateColorDomain();
            })
            .boxOnClick(function (d) {
                var filter = d.key;
                dc.events.trigger(function () {
                    heatmapChart.filter(filter);
                    heatmapChart.redrawGroup();
                });
            })
            .title(function(d) {
                return "  Hour:   " + d.key[0] + "h\n" +
                       "  Week Day:   " + weekday[d.key[1]] + "\n" +
                       "  Value:   " + d.value + "\n";});

        heatmapChart.render();

        var drawMap = function(){

            map.setView([-25.746018, 28.280983], 10);
            mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
            L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; ' + mapLink + ' Contributors',
                    maxZoom: 15,
                }).addTo(map);

            //HeatMap
            var geoData = [];
            markers = [];
            _.each(allDim.top(Infinity), function (d) {
                if (d["lat"] != '' && d["lot"] != '') {
                    geoData.push([d["lat"], d["lot"], 1]);
                    var marker = L.marker([d["lat"], d["lot"]]);
                    var time = d["reportedOn"].toString().substring(0, 24);
                    marker.bindPopup(
                        "Ref number: " + d["refNumber"] + "<br>" +
                        "Incident type: " + d["incident_subcategory"]["name"] + "<br>" +
                        "Reported on: " + time
                    );
                    markers.push(marker);
                }
            });

            var heat = L.heatLayer(geoData,{
                radius: 10,
                blur: 20, 
                maxZoom: 1,
            }).addTo(map);
        };

        map.on('zoomend', function(ev) {
            var target = ev.target;

            if (target._zoom == target._layersMaxZoom) {
                detail = L.layerGroup(markers);
                detail.addTo(map);
                markerOn = true;
            } else if (detail) {
                map.removeLayer(detail); 
            }
        });

        var filtered = false;



        reset_dates = function(date1, date2) {
            console.log("Date1: ", date1);
            console.log("Date2: ", date2);
            var str_date1 = date1.toString().substring(0,15);
            var str_date2 = date2.toString().substring(0,15);
            $("#date1").html("From:<br> " + str_date1);
            $("#date2").html("To:<br> " + str_date2);
            filtered = true;

        };

        var allDates = numRecordsByDate.all();
        var date1 = allDates[0].key
        var date2 = allDates[allDates.length - 1].key;
        $('#datetimepicker1').data("DateTimePicker").date(moment(date1).format('DD/MM/YYYY'));
        $('#datetimepicker2').data("DateTimePicker").date(moment(date2).format('DD/MM/YYYY'));
    
        reset_dates(date1, date2);
        filtered = false;
        
     
        //Draw Map
         drawMap();

        //Update the heatmap if any dc chart get filtered
        dcCharts = [timeChart, areaChart, typeChart, regionChart, heatmapChart,
                    channelChart];

        _.each(dcCharts, function (dcChart) {
            // console.log("Testing testing");
            dcChart.on("filtered", function (chart, filter) {
                switch(chart.name) {
                    case "time":
                        if (filter) {
                            reset_dates(filter[0], filter[1]);
                        }
                        break;
                }
                map.eachLayer(function (layer) {
                    map.removeLayer(layer)
                }); 
                drawMap();
            });
        });
       


        dc.renderAll();

        // register handlers
        $('#map_all').on('click', function () {
            reset_dates(date1, date2);
            dc.filterAll();
            dc.redrawAll();

        });
      
        d3.selectAll('#time').on('click', function () {
            reset_dates(date1, date2);
            timeChart.filterAll();
            dc.redrawAll();
           
        });

        d3.selectAll('#area').on('click', function () {
            areaChart.filterAll();
            dc.redrawAll();
        });
        d3.selectAll('#type').on('click', function () {
            typeChart.filterAll();
            dc.redrawAll();
        });

        d3.selectAll('#region').on('click', function () {
            regionChart.filterAll();
            dc.redrawAll();
        });
        
        d3.selectAll('#channel').on('click', function () {
            channelChart.filterAll();
            dc.redrawAll();
        });

        d3.selectAll('#heatmap').on('click', function () {
            heatmapChart.filterAll();
            dc.redrawAll();
        });

        $("#type_top").click(function(el) {
            typeChart.data(function(group) { return group.top(top); });
            typeChart.height(top * rowBarHieight);
            typeChart.redraw();
          
        });
        $("#type_all").click(function(el) {
            typeChart.data(function(group) { return group.top(Infinity); });
            typeChart.height(720);
            typeChart.redraw();
           
        });
        $("#area_top").click(function(el) {
            areaChart.data(function(group) { return group.top(top); });
            areaChart.height(top * rowBarHieight);
            areaChart.redraw();
          
        });
        $("#area_all").click(function(el) {
            areaChart.data(function(group) { return group.top(Infinity); });
            areaChart.height(430);
            areaChart.redraw();
           
        });
        $("#region_top").click(function(el) {
            regionChart.data(function(group) { return group.top(top); })
            regionChart.height(top * rowBarHieight);
            regionChart.redraw();
           
        });
        $("#region_all").click(function(el) {
        
            regionChart.data(function(group) {console.log("group.top: ",  group.top(Infinity)); return group.top(Infinity); });
            console.log(" regionChart.data: ",  regionChart.data());
            regionChart.height(430);
            regionChart.redraw();
           
        });

        filterByDays = function(callback) {
            var date1 = new Date();
            date1.setHours(0);
            date1.setMinutes(0);
            date1.setSeconds(0);
            date1.setMilliseconds(0);
            var date2 = new Date(date1);

            date2.setDate(callback(date1));
            timeChart.replaceFilter(dc.filters.RangedFilter(date2, date1));
            dc.redrawAll();
        };

        $("#filterDays").on("change", function(){
            var val = $(this).val();
            console.log("filters: ", val);
                switch(val){
                    case "filterDay": 
                    filterByDays(function(date){ 
                        return date.getDate() - 1
                    });
                    break;
                    case "filterWeek": 
                    filterByDays(function(date){ 
                        return date.getDate() - 7
                    });
                    break;
                    case "filterMonth": 
                    filterByDays(function(date){ 
                        return date.getMonth() - 1
                    });
                    break;
                    case "filter90Days": 
                    filterByDays(function(date){ 
                        return date.getDate() - 90
                    });
                    break;
                  }
            
               
        });
    
        // Date time picker
        $("#datetimepicker1").on("dp.change", function (e) {
            $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
            if (!filtered) {
                var date1 = e.date._d;
                var date2 = new Date($('#datetimepicker2').data().date);

                timeChart.replaceFilter(dc.filters.RangedFilter(date1, date2));
                dc.redrawAll();
            }
            filtered = false;
        });
        $("#datetimepicker2").on("dp.change", function (e) {
            $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
            if (!filtered) {
                var date1 = new Date($('#datetimepicker1').data().date);
                var date2 = e.date._d;
                timeChart.replaceFilter(dc.filters.RangedFilter(date1, date2));
                dc.redrawAll();
            }
            filtered = false;
        });

    };
});