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

    //var country_dim = ndx.dimension(dc.pluck('country'));
    var year_group = ndx.dimension(dc.pluck('year'));
    
    var groupingData = year_group.dim().reduceSum(function(d){
        if (d.country === 'year') {
            return +d.country;
        } else {
            return 0;
        }
    });

    show_year_selector(ndx);
    
    dc.renderAll();
}

function show_year_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('year'));
    var group = dim.group();

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group);
}










