window.addEventListener("load",addListener);
var numone, numtwo, result = "";
function addListener()
{
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
		document.getElementById("lblmessage").textContent = "The sum is " + result; 
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
		document.getElementById("lblmessage").textContent = "The difference is " + result; 
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
		document.getElementById("lblmessage").textContent = "The product is " + result; 
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
		document.getElementById("lblmessage").textContent = "The quotient is " + result; 
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
	document.getElementById("lblmessage").textContent = "";
	document.getElementById("txtnumone").focus();
}