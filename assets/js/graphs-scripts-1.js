queue()
    .defer(d3.csv, "data/project-two-data.csv")
    .await(makeGraphs);

function makeGraphs(error, beerData) {
    var ndx = crossfilter(beerData);

    show_county_selector(ndx);
    show_category_selector(ndx);
    show_brewery_selector(ndx);
    show_volume_by_county(ndx);
    show_volume_by_brewery(ndx);
    show_volume_by_category(ndx);
    pie_chart_category(ndx);

    dc.renderAll();
}

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

//does this need a custom reduce?
function show_brewery_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('brewery-name'));
    var group = dim.group();

    dc.selectMenu("#brewery-selector")
        .dimension(dim)
        .group(group);
}

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
        .xAxis(d3.svg.axis())
        .yAxis().ticks(10);
}
//var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('spend'));

function show_volume_by_brewery(ndx) {
    var dim = ndx.dimension(dc.pluck('brewery-name')); //at bottom
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));

    dc.barChart("#volume-by-brewery")
        .width(1000)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Brewery")
        .yAxisLabel("Volume")
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
        .xAxis(d3.svg.axis())
        .yAxis().ticks(10);
}

function pie_chart_category(ndx) {
    var dim = ndx.dimension(dc.pluck('beer-type'));
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));
    dc.pieChart('#category-percentage')
        .height(330)
        .radius(90)
        .legend(dc.legend().x(250).y(120).itemHeight(10).gap(5))
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}