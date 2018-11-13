queue()
    .defer(d3.csv, "data/project-two-data.csv")
    .await(makeGraphs);
    
function makeGraphs(error, beerData) {
    var ndx = crossfilter(beerData);

    beerData.forEach(function(d) {
        d.brewery = parseInt(d.brewery);
        d.beer_name = parseInt(d.beer_name);
        d.brewery_location = parseInt(d.brewery_location);
        d.pints_bottles_sold = parseInt(d.pints_bottles_sold)
        d.beer_type = parseInt(d.beer_type)
    })

    show_county_selector(ndx);
    show_category_selector(ndx);
    show_brewery_selector(ndx);
    show_volume_by_county(ndx);
    show_volume_by_category(ndx);

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
    var dim = ndx.dimension(dc.pluck('brewery'));
    var group = dim.group();

    dc.selectMenu("#brewery-selector")
        .dimension(dim)
        .group(group);
}

function show_volume_by_category(ndx) {
    var dim = ndx.dimension(dc.pluck('brewery-location')); //at bottom
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));

    dc.barChart("#volume-county")
        .width(500)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Location")
        .yAxisLabel("Volume")
        .yAxis().ticks(10);
}
//var total_spend_per_person = name_dim.group().reduceSum(dc.pluck('spend'));

function show_volume_by_county(ndx) {
    var dim = ndx.dimension(dc.pluck('beer-type')); //at bottom
    var group = dim.group().reduceSum(dc.pluck('pints-bottles-sold'));

    dc.barChart("#category-split")
        .width(500)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Category")
        .yAxisLabel("Volume")
        .yAxis().ticks(10);
}