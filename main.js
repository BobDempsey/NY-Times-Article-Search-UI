application = {

	makeAJAXCall: function () {
		var apiKey = "7d49b89d3d7544dd9177af398e9a8e24";
    	var searchTerm = $('#search-term').val();
    	var recRecords = $('#number-records').val();
    	var startYear = $('#start-year').val();
    	var endYear = $('#end-year').val();
    	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "?q=" + searchTerm + "?page=" + recRecords + "?begin_date=" + startYear + "?end_date=" + endYear;
		$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {
			var arrayOfArticles = response.response.docs;
			console.log(arrayOfArticles);

			for (var i = 0; i < arrayOfArticles.length; i++) {
				var $newDiv = $('<div class="resultBox">');
				var $title = $('<h2 class="resultTitle">').html(arrayOfArticles[i].headline.main);
				var $sectionName = $("<p>").html(arrayOfArticles[i].section_name);
				var $webURL = $("<p>").html(arrayOfArticles[i].web_url);
				var $pubDate = $("<p>").html(arrayOfArticles[i].pub_date);
				$newDiv.append($title, $sectionName, $webURL, $pubDate);
				$("#top-articles").append($newDiv);
			}
			
		});
	},

	eventHandlers: {

		clickFormSubmission: function() {
			$('#form-submission').on('click', application.makeAJAXCall);
		}
	},
};

$(document).ready(function() {

	function setUpEventHandlers() {
		application.eventHandlers.clickFormSubmission();
	}

	
	setUpEventHandlers();
});



