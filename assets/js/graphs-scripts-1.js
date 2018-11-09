queue()
    .defer(d3.json, "data/projectData.json")
    .await(makeGraphs);

function makeGraphs(error, countryData) {
    var ndx = crossfilter(countryData);

    countryData.forEach(function(d) {
        d.year = parseInt(d.year);
        d.country = parseInt(d.country);
        d.active_breweries = parseInt(d.active_breweries);
        d.volume = parseInt(d.volume);
       
    })

    show_year_selector(ndx);
    volume_by_country(ndx);
    active_breweries_per_country(ndx);
    
    dc.renderAll();
}

function show_year_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('year'));
    var group = dim.group(dc.pluck('volume'));

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group);
}

function volume_by_country(ndx) {
    var dim = ndx.dimension(dc.pluck('country')); //at bottom
    var group = dim.group(dc.pluck('volume'));

    dc.barChart("#volume-country")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxisLabel("Volume")
        .yAxis().ticks(20);
}      


function active_breweries_per_country(ndx) {
    var dim = ndx.dimension(dc.pluck('country')); //at bottom
    var group = dim.group(dc.pluck('active-breweries'));

    dc.barChart("#active-breweries-eu")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxisLabel("Active Breweries")
        .yAxis().ticks(20);
}






