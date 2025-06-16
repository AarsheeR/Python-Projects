window.addEventListener("load", addListener);
var gpa = 0, lettergrade = "",howmanycourses = 0, course = 0,grade = 0,studentname = "", osisnumber="", average = 0;
var course1 = "N/A",grade1 = 0,course2 = "N/A",grade2 = 0,course3 = "N/A",grade3 = 0,course4 = "N/A",grade4 = 0;
var course5 = "N/A",grade5 = 0,course6 = "N/A",grade6 = 0,course7 = "N/A",grade7 = 0,course8 = "N/A",grade8 = 0;

function addListener()
{
	document.getElementById("txtcn").disabled = false;
	document.getElementById("txtcg").disabled = false;
	document.getElementById("btnsubmit").addEventListener("click",Submit);
	document.getElementById("btnaddcourse").addEventListener("click",addCourse);
	document.getElementById("btnclear").addEventListener("click", clearInputs);
}
	
function addCourse()
{
	document.getElementById("txtcn").focus();
	studentname = document.getElementById("txtname").value;
	osisnumber = document.getElementById("txtosis").value;
	if (studentname == "" || osisnumber == "") 
	{
	    alert("Please enter both the student's name and OSIS number!");
	}
	else
	{
		document.getElementById("txtname").disabled = true;
		document.getElementById("txtosis").disabled = true;
	}
	course = document.getElementById("txtcn").value;
	grade = document.getElementById("txtcg").value;

	if (course == "N/A" || grade == 0 && howmanycourses !== 8 && grade < 0 || grade > 100)
	{
		document.getElementById("txtcn").value = "";
		document.getElementById("txtcg").value = "";
	    alert("Please enter both a valid course name and grade!");
		return;
	}
	howmanycourses = parseInt(howmanycourses) + 1; 
	
	if (howmanycourses > 8)
	{
		alert("Cannot add more than 8 courses!");
		document.getElementById("txtcn").disabled = true;
		document.getElementById("txtcg").disabled = true;
	}
	switch (howmanycourses) 
	{
	    case 1:
	        course1 = course;
	        grade1 = parseFloat(grade);
	        break;
	    case 2:
	        course2 = course;
	        grade2 = parseFloat(grade);
	        break;
	    case 3:
	        course3 = course;
	        grade3 = parseFloat(grade);
	        break;
		case 4:
			course4 = course;
			grade4 = parseFloat(grade);
			break;
		case 5:
		    course5 = course;
		    grade5 = parseFloat(grade);
		    break;
		case 6:
			course6 = course;
			grade6 = parseFloat(grade);
			break;	
		case 7:
		    course7 = course;
		    grade7 = parseFloat(grade);
		    break;
	    case 8:
	        course8 = course;
	        grade8 = parseFloat(grade);
	        alert("You've added the maximum number of courses! Please press submit");
			document.getElementById("txtcn").disabled = true;
			document.getElementById("txtcg").disabled = true;
	        break;
	    default:
	        alert("Cannot add more than 8 courses!");
	}
	alert("Course " + howmanycourses + ": " + course + "\nGrade: " + grade);
	document.getElementById("txtcn").value = "";
	document.getElementById("txtcg").value = "";	
}

function calculateLetterGrade(avg) 
{
    switch (true) 
	{
        case (avg <= 100 && avg >= 90):
			lettergrade = "A";
            break;
        case (avg < 90 && avg >= 80):
            lettergrade = "B";
            break;
        case (avg < 80 && avg >= 70):
            lettergrade = "C";
            break;
        case (avg <70 && avg >= 60):
            lettergrade = "D";
            break;
        default:
            lettergrade = "F";
			break;
	}
}

function Calculation()
{
	average = (grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8)/parseFloat(howmanycourses);
	average = (average * 100)/100;
	lettergrade = average;
	gpa = (average * 4)/100;
	calculateLetterGrade(lettergrade);
}

function Submit()
{
	if (howmanycourses !== 8)
	{
		addCourse();
		if (course == "N/A" || grade == 0)
		{
			return;
		}
		if (howmanycourses < 2) 
		{
		    alert("Please add at least two courses!");
			return;
		} 
	}
	Calculation();
	document.getElementById("lbldisplay").innerHTML = "Student Name: " + studentname +
		"OSIS Number: " + osisnumber +
	    "<br>Course 1: " + course1 + ", Grade: " + grade1 +
	    "<br>Course 2: " + course2 + ", Grade: " + grade2 +
	    "<br>Course 3: " + course3 + ", Grade: " + grade3 +
	    "<br>Course 4: " + course4 + ", Grade: " + grade4 +
		"<br>Course 5: " + course5 + ", Grade: " + grade5 +
		"<br>Course 6: " + course6 + ", Grade: " + grade6 +
		"<br>Course 7: " + course7 + ", Grade: " + grade7 +
		"<br>Course 8: " + course8 + ", Grade: " + grade8 +
		"<br>Average: " + average + "<br>GPA: " + gpa + "<br>Letter Grade: " + lettergrade;
	
}

function clearInputs() 
{
    document.getElementById("txtname").value = "";
    document.getElementById("txtosis").value = "";
    document.getElementById("txtcn").value = "";
    document.getElementById("txtcg").value = "";
    
    document.getElementById("txtname").disabled = false;
    document.getElementById("txtosis").disabled = false;
    document.getElementById("txtcn").disabled = false;
    document.getElementById("txtcg").disabled = false;

    gpa = 0;
    lettergrade = "";
    howmanycourses = 0;
    course1 = "N/A"; grade1 = 0;
    course2 = "N/A"; grade2 = 0;
    course3 = "N/A"; grade3 = 0;
    course4 = "N/A"; grade4 = 0;
    course5 = "N/A"; grade5 = 0;
    course6 = "N/A"; grade6 = 0;
    course7 = "N/A"; grade7 = 0;
    course8 = "N/A"; grade8 = 0;
    average = 0;

    document.getElementById("lbldisplay").innerHTML = "";
}
