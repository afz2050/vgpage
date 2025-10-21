var vg_1 = "charts/inc_map.vg.json";
var vg_2 = "charts/exp_map.vg.json";
var vg_3 = "charts/cpi_grouped_bar.vg.json";
var vg_4 = "charts/cpi_over_time_strata.vg.json";
var vg_5 = "charts/cpi_over_time.vg.json";
var vg_6 = "charts/cpi_strata_radar.vg.json";

vegaEmbed("#income", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#expense", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#cpi_group", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#cpi_time_strata", vg_4).then(function(result) {}).catch(console.error);
vegaEmbed("#cpi_time", vg_5).then(function(result) {}).catch(console.error);
vegaEmbed("#cpi_radar", vg_6).then(function(result) {}).catch(console.error);