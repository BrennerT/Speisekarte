/**
 * Created by Lukas on 12.03.2017.
 */
function drawRegionsMap(dataN) {

    console.log(data);
    var data = google.visualization.arrayToDataTable(dataN);
    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
    console.log("finished");
}
function loadGoogle(){
    google.charts.load('current', {'packages': ['geochart']});
    google.charts.setOnLoadCallback(drawRegionsMap);
}