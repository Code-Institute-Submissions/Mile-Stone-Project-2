queue()
    .defer(d3.csv, "data/projectTwoBeerNumbers.csv")
    .await(makeGraphs);


function makeGraphs(error, countryData) {
    var ndx = crossfilter(countryData);

    countryData.forEach(function(d) {
        d.year = parseInt(d.year);
        d.country = parseInt(d["country"]);
        d.active_breweries = parseInt(d["active.breweries"]);
        d.volume = parseInt(d.volume);
    })

    show_year_selector(ndx);

    show_volume_by_country(ndx);
    //sales_growth_by_country(ndx);
    //number_of_active_breweries(ndx);
    
    dc.renderAll();
}

function show_year_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('year'));
    var group = dim.group();

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group);
}


function show_volume_by_country(ndx) {
    var dim = ndx.dimension(dc.pluck('volume'));
    var group = dim.group();

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
        .yAxisLabel("volume")
        .yAxis().ticks(20);
}

