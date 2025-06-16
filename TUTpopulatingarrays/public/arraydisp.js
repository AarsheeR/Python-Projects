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
	document.getElementById("btnSubmit").addEventListener("click",InsertArray);
	document.getElementById("btnDisplay").addEventListener("click",DisplayArray);
}

function InsertArray()
{
	let inputvalue = "";
	inputvalue = document.getElementById("txtinput").value;
	infoarray.push(inputvalue);
	
	alert("Element: " + infoarray[countvalue] + " has been added.")
	countvalue = countvalue + 1;
	Initialize();
}

function DisplayArray()
{
	let disparray = "";
	let arraylen = infoarray.length;
	
	for(let i=0; i<arraylen; i++)
	{
		if (disparray == "")
		{
			disparray = infoarray[i];
		}
		else
		{
			disparray = disparray + " " + infoarray[i];
		}
		
	}
	alert(disparray)
	document.getElementById("lbldisresult").textContent = disparray;
	Initialize();
}