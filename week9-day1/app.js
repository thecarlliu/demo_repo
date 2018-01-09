
$("#submitBtn").on("click", function() {
	var nameInput = $("#nameInput").val().trim();
	var roleInput = $("#roleInput").val().trim();
	var startDateInput = $("#startDateInput").val().trim();
	var monthlyRateInput = $("#monthlyRateInput").val().trim();

	var inputList = [nameInput, roleInput, startDateInput, monthlyRateInput];
	
	//calculate months worked
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
	if (currentMonth < inputMonth) {
		differenceMonth = 12 - (inputMonth-currentMonth);
	}
	else {
		differenceMonth = currentMonth - inputMonth;
	}
	var numMonthsWorked = (currentYear-inputYear)*12-(differenceMonth);
	console.log(numMonthsWorked);

	var totalBilled = monthlyRateInput * numMonthsWorked;

	//crreate row of info
	var tRow = document.createElement("TR");
	for (i=0;i<inputList.length;i++) {
		var tItem = document.createElement("TD");
		tItem.append(inputList[i]);
		if (i == 3) {
			var tItem2 = document.createElement("TD");
			tItem2.append(numMonthsWorked);
			tRow.append(tItem2);
		}
		tRow.append(tItem);
	}
	tRow.append(totalBilled);
	
	var tBody = document.getElementById("tableBody");
	tBody.append(tRow);

	$("#nameInput").val("");
	$("#roleInput").val("");
	$("#startDateInput").val("");
	$("#monthlyRateInput").val("");
});




































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
