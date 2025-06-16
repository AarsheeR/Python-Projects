window.addEventListener("load", addListener);
var howmany = "", grade = "", sum = 0, count = "", gradeList = "", display = "", gpa = "", check = "";
function addListener()
{
	document.getElementById("txtinp").disabled = false;
	document.getElementById("btnsubmit").addEventListener("click",SubmitHowMany);
}

function SubmitHowMany()
{
	document.getElementById("txtinp").focus();

	if (count == "")
	{
		howmany = document.getElementById("txtinp").value;
		check = parseFloat(howmany) % 1; 
	
		if (howmany == "" || howmany <= 1 || parseFloat(check) != 0)
		{ 
			alert("Please enter a valid number above 1.");
			howmany = "";
			document.getElementById("txtinp").value = "";
			return;
		}
		document.getElementById("txtinp").value = "";
		document.getElementById("lblinp").textContent = "Grade (0-100):";
		count = howmany;
		return;
	}
	else 
	{
		if (count != 1)
		{
			ginp = document.getElementById("txtinp").value;
			SaveGrade(ginp);
		}
		else
		{
			CalcGrades();
		}
	}
}

function SaveGrade(grade)
{
	if (grade == "" || grade < 0 || grade > 100)
	{
		document.getElementById("txtinp").value = "";
		alert("Please enter both a valid course name and grade!");
		return;
	}
	count = parseFloat(count) - 1;
	gradeList = gradeList + "," + grade;
	document.getElementById("txtinp").value = "";
	sum = parseFloat(sum) + parseFloat(grade);
	alert("Grade: " + grade);
}

function CalcGrades()
{
	ginp = document.getElementById("txtinp").value;
	SaveGrade(ginp);
	gradeList = gradeList + ",";
	if (count == 0)
	{
		document.getElementById("txtinp").disabled = true;
		alert("Calculting...");
		ForLoop();
		sum = parseFloat(sum)/parseFloat(howmany);
		sum = Math.round(sum * 100) / 100;
		gpa = (sum * 4) / 100;
		gpa = Math.round(gpa * 100) / 100;
		document.getElementById("lbldisp").innerHTML = document.getElementById("lbldisp").innerHTML + "Grade Average: " + sum + "<br>GPA: " + gpa;
		document.getElementById("txtinp").value = "";
	}
	else
	{
		return;
}	
	
function ForLoop()
{
	let howManyCommas = 0;   
	let start = 1;  
	let num = 0; 
	let count = howmany; 
	let gradelen = gradeList.length;

	for (let i = 1; i <= gradelen; i++) 
	{
	    if (gradeList.substring(i, i + 1) == "," ) 
		{
	        let currentGrade = gradeList.substring(start, i);
	        if (currentGrade !== "") 
			{
				num = howManyCommas + 1;
				display = "Grade " + num + ": " + currentGrade;
	            document.getElementById("lbldisp").innerHTML = document.getElementById("lbldisp").innerHTML + display + "<br>";
	        }
	        
	        start = i + 1;
	        if (howManyCommas <= count - 1) 
			{
	            howManyCommas++;
	        } 
			else 
			{
	            break;
	        }		
	    }
	}
}	

}


