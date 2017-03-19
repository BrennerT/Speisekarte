// submit button click event with wikipedia api request
$('#submitButton')
		.on(
				'click',
				function() {
					var suche = "Banane";
					var url = "https://de.wikipedia.org/w/api.php?action=query&grnnamespace=0&prop=extracts&exsentences=10&format=json&titles="
							+ suche + "&callback=?";
					$(document)
							.ready(
									function() {
										$
												.ajax({
													type : "GET",
													url : url,
													contentType : "application/json; charset=utf-8",
													async : false,
													dataType : "json",
													success : function(data) {
														var pages = data.query.pages;
														var text = pages[Object
																.keys(pages)[0]].extract;
														$('#wikifield').html = text;
														console.log(text);
														console.log(pages);
													},
													error : function(
															errorMessage) {
													}
												});
									});
				});
// draw map then ready 
$(document).ready(function() {
    google.charts.load('current', {'packages': ['geochart']});
    google.charts.setOnLoadCallback(drawRegionsMap);
});