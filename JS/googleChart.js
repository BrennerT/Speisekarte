/**
 * Created by Lukas on 12.03.2017.
 */
function drawRegionsMap(data) {
    alert("Script start");
    console.log(data);
    var data = google.visualization.arrayToDataTable(data);
    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}
