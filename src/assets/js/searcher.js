var searchInterest = "";
var searchLocation = "";

function getSearchValues() {
	searchInterest = $("#searchbar").val();
	searchLocation = $("#searchbarlocation").val();
}

function appendResults(offset, limit){
	//console.log(process.env.yelp_api_key);
	var myurl = "https://api.yelp.com/v3/businesses/search?term="+searchInterest+"&location="+searchLocation+"&offset="+offset+"&limit="+limit;
	console.log(myurl);
	$.ajax({
		url: myurl,
		headers: {
			'Authorization': 'Bearer '+process.env.yelp_api_key,
		},
		method: 'GET',
		dataType: 'json',
		success: function(data) {
			var totalresults = data.total;
			// If our results are greater than 0, continue
			if (totalresults > 0){
				// initialize header
				if (offset == 0) {
					$('#resultsDiv').append(
						$("<div>",{
							"id":"resultsHeader",
							"text":"We found " + totalresults + " results!",
						})
					);
				}
				// Itirate through the JSON array of 'businesses' which was returned by the API
				$.each(data.businesses, function(i, item) {
					// Store each business's object in a variable
					var id = item.id;
					var alias = item.alias;
					var price = item.price;
					var is_closed = item.is_closed;
					var phone = item.display_phone;
					var image = item.image_url;
					var name = item.name;
					var rating = item.rating;
					var reviewcount = item.review_count;
					var address = item.location.address1;
					var city = item.location.city;
					var state = item.location.state;
					var zipcode = item.location.zip_code;
					// Append our result into our page
					if(is_closed == false){
						$('#resultsDiv').append(
							'<div id="' + id +
							'" style="margin-top:50px;margin-bottom:50px;"><img src="' + image +
							'" style="width:200px;height:150px;"><br>We found <b>' + name +
							'</b> (' + alias + ')<br>Business ID: ' + id +
							'<br> Price: ' + price +
							'<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode +
							'<br>The phone number for this business is: ' + phone +
							'<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
						}
					});
				}
			}
		});
}
