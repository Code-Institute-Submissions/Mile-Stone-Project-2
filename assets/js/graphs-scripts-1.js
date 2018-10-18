queue()
    .defer(d3.csv, "data/projectTwoBeerNumbers.csv")
    .await(makeGraphs);

function makeGraphs(error, projectTwoBeerNumbersData) {
    
    var ndx = crossfilter(projectTwoBeerNumbersData);
    var country_dim = ndx.dimension(dc.pluck('country'));
    var volume_by_country = country_dim.group().reduceSum(dc.pluck('volume'));
    console.log(ndx);
    dc.barChart("#volume-country")
            .width(600)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(country_dim)
            .group(volume_by_country)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("country")
            .yAxisLabel("volume")
            .yAxis().ticks(12);
        dc.renderAll();
}

