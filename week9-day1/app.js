//_________________________________database stuff_______________________________
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

//_________________________________submitBtn stuff_____________________________
var nameInput;
var roleInput;
var startDateInput;
var monthlyRateInput;

var inputList =[];

var numMonthsWorked;
var totalBilled;

//retrieve unique ids and child values, then create employees using that data
database.ref().on("child_added", function(childSnapshot) {
	createEmployee(childSnapshot.val().name, childSnapshot.val().role, childSnapshot.val().startDate, childSnapshot.val().monthlyRate, inputList);
	console.log(totalBilled);
	//totalBilled appearing as NaN, and two copies of employee generated as submit btn is clicked, though the additional copy disappears, we know why this happens.
});

$("#submitBtn").on("click", function() {
	nameInput = $("#nameInput").val().trim();
	roleInput = $("#roleInput").val().trim();
	startDateInput = $("#startDateInput").val().trim();
	monthlyRateInput = $("#monthlyRateInput").val().trim();
	
	createEmployee(nameInput, roleInput, startDateInput, monthlyRateInput, inputList);

	database.ref().push({
		name: nameInput,
		role: roleInput,
		startDate: startDateInput,
		monthlyRate: monthlyRateInput
	});

	$("#nameInput").val("");
	$("#roleInput").val("");
	$("#startDateInput").val("");
	$("#monthlyRateInput").val("");
});

function createEmployee(name, role, startDate, monthlyRate, inputs) {
	doTheMath(startDate);
	//create row of info
	inputs = [];
	inputs.push(name, role, startDate, numMonthsWorked, monthlyRate, totalBilled);
	var tRow = document.createElement("TR");
	for (i=0;i<inputs.length;i++) {
		var tItem = document.createElement("TD");
		tItem.append(inputs[i]);
		tRow.append(tItem);
	}

	var tBody = document.getElementById("tableBody");
	tBody.append(tRow);
}

function doTheMath(startDateInput) {
	//calculate months worked and total billed
	var d = new Date();
	var currentMonth = d.getMonth() + 1;
	var currentYear = d.getYear()+1900;
	var inputMonth = startDateInput.charAt(0)+startDateInput.charAt(1);
	var inputYear = startDateInput.charAt(6)+startDateInput.charAt(7);
	if (inputYear > "18") {
		inputYear = "19"+inputYear;
	}
	else if (inputYear <= "18") {
		inputYear = "20"+inputYear;
	}
	var differenceMonth;
	if (currentMonth > inputMonth) {
		differenceMonth = 12 - (currentMonth-inputMonth);
	}
	else {
		differenceMonth = currentMonth - inputMonth;
	}
	numMonthsWorked = (currentYear-inputYear)*12+(differenceMonth);
	console.log(numMonthsWorked);

	totalBilled = monthlyRateInput * numMonthsWorked;
	console.log(totalBilled);
}

//___________________________________CSS______________________________

$(".jumbotron").css("background-color", "darkgreen");

$("#titleArea").css("margin-top", "20px");
$("#titleArea").css("margin-left", "20px");
$("#titleArea").css("margin-right", "20px");
$("#titleArea").css("margin-bottom", "20px");
$("#titleArea").css("border-radius", "50px");
$("#titleArea").css("padding-top", "50px");
$("#titleArea").css("padding-left", "50px");
$("#titleArea").css("padding-right", "50px");
$("#titleArea").css("padding-bottom", "50px");
$("#titleArea").css("background-color", "#fc6c85");
$("#titleArea").css("text-align", "center");
$("#titleArea").css("font-family", "Impact");
$("#titleArea").css("letter-spacing", "3px");


$("#tableArea").css("margin-top", "20px");
$("#tableArea").css("margin-left", "20px");
$("#tableArea").css("margin-right", "20px");
$("#tableArea").css("margin-bottom", "20px");
$("#tableArea").css("border-radius", "50px");
$("#tableArea").css("padding-top", "50px");
$("#tableArea").css("padding-left", "50px");
$("#tableArea").css("padding-right", "50px");
$("#tableArea").css("padding-bottom", "50px");
$("#tableArea").css("background-color", "#fc6c85");
$("#tableArea").css("letter-spacing", "3px");

$("#formArea").css("margin-top", "20px");
$("#formArea").css("margin-left", "20px");
$("#formArea").css("margin-right", "20px");
$("#formArea").css("margin-bottom", "20px");
$("#formArea").css("border-radius", "50px");
$("#formArea").css("padding-top", "50px");
$("#formArea").css("padding-left", "50px");
$("#formArea").css("padding-right", "50px");
$("#formArea").css("padding-bottom", "50px");
$("#formArea").css("background-color", "#fc6c85");

$("#submitBtn").css("background-color", "black");
