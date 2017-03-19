// Wait for resources to load
$(document).ready(function () {
	google.charts.load('current', { 'packages': ['geochart'] });
	google.charts.setOnLoadCallback(drawRegionsMap);
});
// test button
$('#button1').on('click', function () {
    updateChart([
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]]
    )
});
//example fruits
var banane = { titel: "Banane", text: "Bananen sind sehr lecker und Gesund für dich und miiieech!", herkunft: ["Afrika", "Panama", "Indonesien"] };
var apfel = { titel: "Apfel", text: "Äpfel gibt es fast überall auf der Welt und das gute steckt in der Schale, oderso", herkunft: ["Deutschland", "Italien", "Amerika"] }
var ananas = { titel: "Ananas", text: "Ananas (Ja, das ist der Plural), wachsen auf dem Boden und sind eigentlich eine Beere", herkunft: ["Indonesien", "Karibik"] }

//gefundene Funktion im Internet zum abschicken von PHP Request. Habe es mal aufgehoben
$(function () {
    $('#search').keyup(function () {
        if ($(this).val().length > 0) {
            $.get("mysqlabfrage.php", { search: $(this).val() }, function (data) {
                $("#results").html(data);
            });
        }
    });
});

function zurueckzurSuche() {
    $('#Suchfeld').fadeIn(1000);
    $('#Klappentext').hide();
    document.getElementById('herkunftsliste').innerHtml = null;
}

//Die Funktion, die der Suchknopf aufruft.
function suchfunktion(suche) {
    //hier kommen später SQL Abfragen über PHP hin, nicht so hartcodiert. Jedes frucht.titel wird durch den php request ersetzt, aber die Mechanik passt so
    if (suche == banane.titel) {
        var cntry = [
            ['Country', 'Anzahl'],
            ['Indonesia', 200],
            ['africa', 200],
            ['Panama', 200],
            ['Kongo', 200],
            ['Kongo', 200],
        ];
        $('#button1').hide();
        updateChart(cntry);
        $('#Suchfeld').hide();
        $('#Klappentext').fadeIn(1000);
        $('#fruchttitel').text(banane.titel);
        $('#fruchttext').text(banane.text);
        var herkunftsanzeige = new String();
        for (i = 0; i < banane.herkunft.length; i++) {
            herkunftsanzeige += "<li>" + banane.herkunft[i] + "</li>" + " ";
        }
        $('#herkunftsliste').html("<ul>" + herkunftsanzeige + "</ul>");
    }
    else if (suche == apfel.titel) {
        updateChart([
            ['Country', 'Popularity'],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]]
        );
        $('#Suchfeld').hide();
        $('#Klappentext').fadeIn(1000);
        $('#fruchttitel').text(apfel.titel);
        $('#fruchttext').text(apfel.text);
        var herkunftsanzeige = new String();
        for (i = 0; i < apfel.herkunft.length; i++) {
            herkunftsanzeige += "<li>" + apfel.herkunft[i] + "</li>" + " ";
        }
        $('#herkunftsliste').html("<ul>" + herkunftsanzeige + "</ul>");
    }
    //lasse ich mal so, damit wir nen vergleich haben ohne Jquery
    else if (suche == ananas.titel) {
        updateChart([
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]]
        );
        $('#Suchfeld').hide();
        $('#Klappentext').show();
        document.getElementById('fruchttitel').innerHTML = ananas.titel;
        document.getElementById('fruchttext').innerHTML = ananas.text;
        var herkunftsanzeige = new String();
        for (i = 0; i < ananas.herkunft.length; i++) {
            herkunftsanzeige += "<li>" + ananas.herkunft[i] + "</li>" + " ";
        }
        document.getElementById('herkunftsliste').innerHTML = herkunftsanzeige;
    }
}
