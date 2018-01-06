// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
	      apiKey: "AIzaSyArDzzjKKjk3cV_b3ZkcqjYrj41mVN6bbQ",
	      authDomain: "test-project-51173.firebaseapp.com",
	      databaseURL: "https://test-project-51173.firebaseio.com",
	      projectId: "test-project-51173",
	      storageBucket: "test-project-51173.appspot.com",
	      messagingSenderId: "100168544247"
	    };

// Assign the reference to the database to a variable named 'database'
//var database = ...
firebase.initializeApp(config);
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------
//to initialize properties in database when recycling databases
// database.ref().set({
// 	price: highPrice,
// 	bidder: highBidder
// });

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
	if (snapshot.child("bidder").exists() && snapshot.child("price").exists()) {
	// If Firebase has a highPrice and highBidder stored (first case)
		if (snapshot.val().price!="" && snapshot.val().bidder!="") {

	// Set the variables for highBidder/highPrice equal to the stored values in firebase.
			highPrice = snapshot.val().price;
			highBidder = snapshot.val().bidder;
			
	// Change the HTML to reflect the stored values
			$("#highest-bidder").text(highBidder);
			$("#highest-price").text(highPrice);

	// Print the data to the console.
			console.log(highBidder, highPrice);
		}

	// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
		else {

	// Change the HTML to reflect the initial values
			$("#highest-bidder").text(highBidder);
			$("#highest-price").text(highPrice);

	// Print the data to the console.
			console.log(highBidder, highPrice);
		}
	}
});



// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {

// prevent form from submitting with event.preventDefault() or returning false
	event.preventDefault();
// Get the input values
	var nameInput = $("#bidder-name").val().trim();
	var priceInput = $("#bidder-price").val().trim();

// Log the Bidder and Price (Even if not the highest)
	console.log(nameInput, priceInput);

// If Then statements to compare against previous high bidder
	if (priceInput > highPrice) {

// Alert that they are High Bidder
		alert("You are the highest bidder!");

// Save the new price in Firebase
		database.ref().set({
			price: priceInput,
			bidder: nameInput
		});

// Log the new High Price
		console.log(priceInput);

// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
		highPrice = priceInput;
		highBidder = nameInput;

// Change the HTML to reflect the new high price and bidder
		$("#bidder-name").text(highBidder);
		$("#bidder-price").text(highPrice);
	}
// Else tell user their bid was too low via alert
	else {
		alert("Your bid was too low!");
	}
});