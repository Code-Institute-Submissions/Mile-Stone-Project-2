queue()
    .defer(d3.csv, "data/project-two-data.csv")
    .await(makeGraphs);

//Call the defer() method, and this takes two arguments.
//The first is the format of the data that we want to load, in this case a CSV file.
//The second argument is the path to the CSV file.

//Call the await() method.
//The await method() takes 1 argument, which is the name of a function 
//that we want to call when the data is ready.

function makeGraphs(error, beerData) {
    var ndx = crossfilter(beerData);

    show_county_selector(ndx);
    show_category_selector(ndx);
    show_brewery_selector(ndx);
    show_volume_by_county(ndx);
    show_volume_by_category(ndx);
    pie_chart_category(ndx);

    dc.renderAll();
//must be called or charts wont render.    
}

//below, slection boxes
function show_county_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('brewery-location'));
    var group = dim.group();

    dc.selectMenu("#county-selector")
        .dimension(dim)
        .group(group);
}

function show_category_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('beer-type'));
    var group = dim.group();

    dc.selectMenu("#category-selector")
        .dimension(dim)
        .group(group);
}

function show_brewery_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('brewery-name'));
    var group = dim.group();

    dc.selectMenu("#brewery-selector")
        .dimension(dim)
        .group(group);
}

//below, code for graph rendering
function show_volume_by_category(ndx) {
    var dim = ndx.dimension(dc.pluck('brewery-location')); //at bottom
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));

    dc.barChart("#volume-county")
        .width(1000)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Location")
        .yAxisLabel("Volume")
        .elasticY(true)
        .xAxis(d3.svg.axis())
        .yAxis().ticks(10);
}

function show_volume_by_county(ndx) {
    var dim = ndx.dimension(dc.pluck('beer-type')); //at bottom
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));

    dc.barChart("#category-split")
        .width(1000)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Category")
        .yAxisLabel("Volume")
        .elasticY(true)
        .xAxis(d3.svg.axis())
        .yAxis().ticks(10);
}

//Pie chart
function pie_chart_category(ndx) {
    var dim = ndx.dimension(dc.pluck('beer-type'));
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));
    dc.pieChart('#category-percentage')
        .width(700)
        .height(360)
        .radius(180)
        .legend(dc.legend().x(50).y(30).itemHeight(15).gap(5))
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}
