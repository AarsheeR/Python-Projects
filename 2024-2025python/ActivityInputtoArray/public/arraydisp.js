window.addEventListener("load",Initialize);
window.addEventListener("load",addListener);

let countvalue = 0;
let infoarray = [];

function Initialize()
{
	document.getElementById("txtinput").focus();
	document.getElementById("txtinput").value = "";
}

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",InsertArray);
	document.getElementById("btndisplay").addEventListener("click",DisplayArray);
	document.getElementById("btnclr").addEventListener("click",Clear);
}

function Clear()
{
	inpvalue = document.getElementById("txtinput").value;
	display = document.getElementById("lstdispresult").textContent;

	if (infoarray == "" && inpvalue == ""  && display == "")
	{
		alert("No information to clear!");
		document.getElementById("txtinput").focus();
		return;
	}
	else
	{
		alert("All Info (saved and unsaved) Cleared!")
		document.getElementById("txtinput").value = "";
		document.getElementById("txtinput").focus();
		document.getElementById("lstdispresult").textContent = "";
		infoarray = [];
	}
	
	
}
function InsertArray()
{
	let inputvalue = "";
	inputvalue = document.getElementById("txtinput").value;
	if (inputvalue == "")
	{
		alert("You must enter an input!");
		document.getElementById("txtinput").focus();
		return;
	}
	else
	{
		infoarray.push(inputvalue);
		alert("The input has been saved.")
		countvalue = countvalue + 1;
	}
	Initialize();
}


function DisplayArray()
{
	inpvalue = document.getElementById("txtinput").value;
	if (inpvalue !== "")
	{
		alert("You must press Add Info before pressing display!");
		addListener();
		return;
	}
	if (infoarray == "")
	{
		alert("You must enter information before displaying!");
		document.getElementById("txtinput").focus();
		return;
	}
	let disparray = document.getElementById("lstdispresult");
	let arraylen = infoarray.length;
	for(let i=0; i<arraylen; i++)
	{
		let li = document.createElement("li");
		li.innerText = infoarray[i];
		disparray.appendChild(li);
	}
	infoarray = [];
	Initialize();
}