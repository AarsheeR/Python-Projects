window.addEventListener("load", addListener);
var periodsnum = 1, coursename = 0, cteacher = 0, roomnum = 0, days = 0, weekday = "Monday";
function addListener()
{
	document.getElementById("txtcoursename").disabled = false;
	document.getElementById("txtcourseteacher").disabled = false;
	document.getElementById("txtroomnum").disabled = false;
	document.getElementById("btnsubmit").addEventListener("click",SaveInfo);
}

function SaveInfo()
{
	document.getElementById("txtcoursename").focus();
	coursename = document.getElementById("txtcoursename").value;
	courseteacher = document.getElementById("txtcourseteacher").value;
	roomnum = document.getElementById("txtroomnum").value;
	if (coursename == "Lunch" || coursename == "LUNCH" ) 
	{
	    courseteacher = "Bon Appetit";
	}
	if (coursename == "")
	{
		alert("Course Name is required.");
		document.getElementById("txtcoursename").focus();
		return;
	}
	if (courseteacher == "" && coursename !== "Lunch" && coursename !== "LUNCH")
	{
		alert("Course Teacher is required.");
		document.getElementById("txtcourseteacher").focus();
		return;
	}
	if (roomnum == "")
		{
			alert("Room Number is required.");
			document.getElementById("txtroomnum").focus();
			return;
		}
	
	localStorage.setItem(weekday + "p" + periodsnum + "Name", coursename);
	localStorage.setItem(weekday + "p" + periodsnum + "Teacher", courseteacher);
	localStorage.setItem(weekday + "p" + periodsnum + "Room", roomnum);

	alert("Saved for " + weekday + "\nPeriod " + periodsnum + ": " + coursename + "\nTeacher: " + courseteacher + "\nRoom: " + roomnum);

	document.getElementById("txtcoursename").value = "";
	document.getElementById("txtcourseteacher").value = "";
	document.getElementById("txtroomnum").value = "";

	if (periodsnum < 8) 
	{
	    periodsnum++; 
	} 
	else 
	{
	    periodsnum = 1;
	    days++;
		if (days > 4) 
		{
		    alert("You have completed entering courses for all days.");
		    Last();
		}		
		else
		{
			alert("Moving on to next day...");
		}
	}
	updatelabels();
}

function updatelabels()
{
	if (days == 0) 
	{
	    weekday = "Monday";
	} 
	if (days == 1) 
	{
	    weekday = "Tuesday";
	} 	
	if (days == 2) 
	{
	    weekday = "Wednesday";
	} 	
	if (days == 3) 
	{
	    weekday = "Thursday";
	} 	
	if (days == 4) 
	{
	    weekday = "Friday";
	}
	
	document.getElementById("lblday").textContent = weekday;
	document.getElementById("lblperiod").textContent = "Period " + periodsnum;

}


function Last()
{
	alert("Course information saved! Generating schedule now!");
	window.location.href = "gensched.html";
}