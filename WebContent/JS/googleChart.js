/**
 * Created by Lukas on 12.03.2017.
 */

/**
 * After the initial drawRegionsMap we can simply change code by
 * @param data
 */
 function updateChart(data){
    var data = google.visualization.arrayToDataTable(data);
    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
 }

/**
 * Sets the default values for our world map
 */
function drawRegionsMap() {
    var datas = [
        ['Country', 'Number']];
    updateChart(datas);
}

