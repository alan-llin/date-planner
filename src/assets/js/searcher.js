function getSearchValues() {
	searchInterest = $("#searchbar").val();
	searchLocation = $("#searchbarlocation").val();
}

/*
function createBusinessObject(business_json){

	var business = {
		id : business_json.id,
		alias : business_json.alias,
		price : business_json.price,
		is_closed : business_json.is_closed,
		phone : business_json.display_phone,
		image : business_json.image_url,
		name : business_json.name,
		rating : business_json.rating,
		reviewcount : business_json.review_count,
		address : business_json.location.address1,
		city : business_json.location.city,
		state : business_json.location.state,
		zipcode : business_json.location.zip_code
	};

	return business
}
*/

function createResultHeader(totalresults){
	$('#resultsDiv').append(
		$("<div>",{
			"id":"resultsHeader",
			"text":"We found " + totalresults + " results!",
		})
	);
}

function createResultDiv(business){

	var result_div =
	$("<div>", {
		"id":business.id,
		"class":"result-item",
		"style":"margin-top:50px;margin-bottom:50px;border-style:solid;border-width:thin;border-color:#FFFFFF;",
	}).append(
		$("<img>", {
			"src":business.image_url,
			"style":"width:200px;height:150px;"
		}),
		$("<div>", {
			"text":business.name + " (" + business.alias + ")" + " Business_id: "+ business.id
		}),
		$("<div>", {
			"text":"Price: " + business.price
		}),
		$("<div>", {
			"text":"Located at: "+ business.location.address1 + ' ' + business.location.city + ', ' + business.location.state + ' ' + business.location.zip_code
		}),
		$("<div>", {
			"text":"The phone number for this business is: " + business.display_phone
		}),
		$("<div>", {
			"text":"This business has a rating of " + business.rating + " with " + business.review_count + " reviews"
		})
	);

	result_div.data("business_object", business);

	return result_div;
}


function appendResults(offset, limit){
	//console.log(process.env.yelp_api_key);
	var myurl = "https://api.yelp.com/v3/businesses/search?term="+searchInterest+"&location="+searchLocation+"&offset="+offset+"&limit="+limit;
	console.log(myurl);
	$.ajax({
		url: myurl,
		headers: {
			'Authorization': 'Bearer ' + process.env.yelp_api_key,
		},
		method: 'GET',
		dataType: 'json',
		success: function(data) {
			var totalresults = data.total;
			// If our results are greater than 0, continue
			if (totalresults > 0){
				// initialize header
				if (offset == 0) {
					createResultHeader(totalresults);
				}
				// Itirate through the JSON array of 'businesses' which was returned by the API
				$.each(data.businesses, function(i, item) {
					// Store each business's object in a variable
					// Append our result into our page
					if(item.is_closed == false){
						var result_div = createResultDiv(item);
						$('#resultsDiv').append(result_div);
					}
				});
			}
		}
	});
}
