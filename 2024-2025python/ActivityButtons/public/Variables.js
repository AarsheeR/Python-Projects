
window.addEventListener("load",addListener);
var numone, numtwo, result = "";
function addListener()
{
	document.getElementById(id="txtresult").disabled = true;
	document.getElementById("btnadd").addEventListener("click",Addition);
	document.getElementById("btnsub").addEventListener("click",Subtraction);
	document.getElementById("btnmulti").addEventListener("click",Multiplication);
	document.getElementById("btndiv").addEventListener("click",Division);
	document.getElementById("btnclr").addEventListener("click",Clear);
}

function Addition()
{
	numone = document.getElementById("txtnumone").value;
	numtwo = document.getElementById("txtnumtwo").value;
	if (numone == "" || numtwo == "")
	{
		alert("Either the number one and/or number two is missing! Please input a number!");
		CheckFocus();
	}
	else
	{
		result = parseInt(numone) + parseInt(numtwo);
		document.getElementById("txtresult").value = result; 
	}
}

function Subtraction()
{
	numone = document.getElementById("txtnumone").value;
	numtwo = document.getElementById("txtnumtwo").value;
	if (numone == "" || numtwo == "")
	{
		alert("Either the number one and/or number two is missing! Please input a number!");
		CheckFocus();
	}
	else
	{
		result = parseInt(numone) - parseInt(numtwo);
		document.getElementById("txtresult").value = result; 
	}
}

function Multiplication()
{
	numone = document.getElementById("txtnumone").value;
	numtwo = document.getElementById("txtnumtwo").value;
	if (numone == "" || numtwo == "")
	{
		alert("Either the number one and/or number two is missing! Please input a number!");
		CheckFocus();
	}
	else
	{
		result = parseInt(numone) * parseInt(numtwo);
		document.getElementById("txtresult").value = result; 
	}
}

function Division()
{
	numone = document.getElementById("txtnumone").value;
	numtwo = document.getElementById("txtnumtwo").value;
	if (numone == "" || numtwo == "")
	{
		alert("Either the number one and/or number two is missing! Please input a number!");
		CheckFocus();
	}
	else
	{
		result = parseInt(numone) / parseInt(numtwo);
		document.getElementById("txtresult").value = result; 
	}
}

function CheckFocus()
{
	if (numone == "")
	{
		document.getElementById("txtnumone").focus();
	}
	else
	{
		document.getElementById("txtnumtwo").focus();
	}
}

function Clear()
{
	document.getElementById("txtnumone").value = "";
	document.getElementById("txtnumtwo").value = "";
	document.getElementById("txtresult").value = "";
	document.getElementById("txtnumone").focus();
}