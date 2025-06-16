window.addEventListener("load",addListener);
var numone = "", numtwo = "", result = "", numval = "", operation ="",ispi = "no", isdef = "", decimalCount = 0, angle = "", trig = "no";
function addListener()
{
	document.getElementById(id="txtnumone").disabled = true;
	document.getElementById("btnresult").addEventListener("click", Equals);
	document.getElementById("btnadd").addEventListener("click",Addition);
	document.getElementById("btnsub").addEventListener("click",Subtraction);
	document.getElementById("btnmulti").addEventListener("click",Multiplication);
	document.getElementById("btndiv").addEventListener("click",Division);
	
	document.getElementById("btnclr").addEventListener("click",Clear);
	
	document.getElementById("btnpi").addEventListener("click",Pi);
	document.getElementById("btnzero").addEventListener("click", Zero);
	document.getElementById("btnone").addEventListener("click", One);
	document.getElementById("btntwo").addEventListener("click", Two);
	document.getElementById("btnthree").addEventListener("click", Three);
	document.getElementById("btnfour").addEventListener("click", Four);
	document.getElementById("btnfive").addEventListener("click", Five);
	document.getElementById("btnsix").addEventListener("click", Six);
	document.getElementById("btnseven").addEventListener("click", Seven);
	document.getElementById("btneight").addEventListener("click", Eight);
	document.getElementById("btnnine").addEventListener("click", Nine);

    document.getElementById("btnsqrt").addEventListener("click", SquareRoot);
    document.getElementById("btnsq").addEventListener("click", Square);
    document.getElementById("btnpercent").addEventListener("click", Percent);
    document.getElementById("btnexpfunc").addEventListener("click", Exponential);
    document.getElementById("btnlog").addEventListener("click", Logarithm);
    document.getElementById("btnln").addEventListener("click", NaturalLog);

    document.getElementById("btnsin").addEventListener("click", Sine);
    document.getElementById("btncos").addEventListener("click", Cosine);
    document.getElementById("btntan").addEventListener("click", Tangent);
	    
    document.getElementById("btnltet").addEventListener("click", LessThan);
    document.getElementById("btnrad").addEventListener("click", toRadians);
    document.getElementById("btndeg").addEventListener("click", toDegrees);
	document.getElementById("btnnegpos").addEventListener("click", NegPos);
	document.getElementById("btnfactorial").addEventListener("click", factorial);
	document.getElementById("btnexponent").addEventListener("click", Exponents);
	document.getElementById("btndec").addEventListener("click", Decimals);

}


function Zero()
{
	numval = document.getElementById("txtnumone").value + "0";
	document.getElementById("txtnumone").value = numval;
}


function One()
{
	numval = document.getElementById("txtnumone").value + "1";
	document.getElementById("txtnumone").value = numval;
}


function Two()
{
	numval = document.getElementById("txtnumone").value + "2";
	document.getElementById("txtnumone").value = numval;
}


function Three()
{
	numval = document.getElementById("txtnumone").value + "3";
	document.getElementById("txtnumone").value = numval;
}

function Four()
{
	numval = document.getElementById("txtnumone").value + "4";
	document.getElementById("txtnumone").value = numval;
}


function Five()
{
	numval = document.getElementById("txtnumone").value + "5";
	document.getElementById("txtnumone").value = numval;
}


function Six()
{
	numval = document.getElementById("txtnumone").value + "6";
	document.getElementById("txtnumone").value = numval;
}


function Seven()
{
	numval = document.getElementById("txtnumone").value + "7";
	document.getElementById("txtnumone").value = numval;
}


function Eight()
{
	numval = document.getElementById("txtnumone").value + "8";
	document.getElementById("txtnumone").value = numval;
}


function Nine()
{
	numval = document.getElementById("txtnumone").value + "9";
	document.getElementById("txtnumone").value = numval;
}

function Pi()
{
	if (numval == "")
	{
		numval = Math.PI
	}
	else 
	{
		numval = parseFloat(numval) * Math.PI;
	}
	document.getElementById("txtnumone").value = numval;
	ispi = "yes";
}

function Calculate() 
{
	numone = parseFloat(numone);
    numtwo = parseFloat(numval);
	 
	
    if (operation == "+")
	{
		 result = numone + numtwo;
		 numone = result;
	}
	if (operation == "-") 
	{
		result = numone - numtwo;
		numone = result;
	}

    if (operation == "x") 
	{
		
        result = numone * numtwo;
        numone = result;
    }

    if (operation == "÷") 
	{
        if (numtwo == 0)
		{
	          alert("Cannot divide by zero!");
	    } 
		else 
		{
			  result = numone / numtwo;
			  numone = result;
	    }
		
	}
	
	if (operation == "ltet")
	{
		if (numone <= numval) 
		{
			alert("True: " + numone + " is less than or equal to " + numval);
        } 
		else 
		{
            alert("False: " + numone + " is not less than or equal to " + numval);
        }

	}
	
	if (operation == "^")
	{
		result = Math.pow(numone, numtwo);
		numone = result;
	}
	
	numtwo ="";
	document.getElementById("txtnumone").value = numone; 
	
}

function Equals() 
{
    if (numval !== "") 
	{
        Calculate(); 
    } 
	else 
	{
        alert("Please enter a number before pressing =");
    }
    operation = ""; 
}

function OperationSetUp()
{
	if (numone !== "" && numval !== "") 
	{
	    Calculate();
	}
	else
	{
		numone = numval;
	}
	if (numone == "" || numval == "") 
	{
	    alert("Please enter a number!");
	}
	numval = "";
	document.getElementById("txtnumone").value = ""; 
	decimalCount = 0;
}

function Addition() 
{
	OperationSetUp();
	operation = "+";
}

function Subtraction()
{
	OperationSetUp();
	operation = "-";
}

function Multiplication()
{
	OperationSetUp();
	operation = "x";
}

function Division()
{
	OperationSetUp();
	operation = "÷";
}

function Exponents()
{
	numone= numval;
	operation = "^";
	numval = "";
	document.getElementById("txtnumone").value = "";
	decimalCount = 0;
}

function LessThan() 
{
    OperationSetUp();
	operation = "ltet";
}


function Check()
{
	if (numval == "")
	{
		alert("Please enter a number!");	
	}
	else
	{
		if (trig == "yes")
		{
			Calculate3();
		}
		else
		{
			Calculate2();
			document.getElementById("txtnumone").value = result;
		}
	}
}

function Calculate2()
{
	if (operation == "sqrt")
	{
		result = Math.sqrt(parseFloat(numval));
		numval = result;
	}
	if (operation == "sq")
	{
		result = Math.pow(parseFloat(numval), 2);
		numval = result;	
	}
	if (operation == "percent")
	{
		result = parseFloat(numval) / 100;
		numval = result;
	}
	if (operation == "exponential")
	{
		result = Math.exp(parseFloat(numval));
		numval = result;
	}
	if (operation == "log")
	{	
		result = Math.log10(parseFloat(numval));
		numval = result;		
	}
	if (operation == "ln")
	{	
		result = Math.log(parseFloat(numval));
		numval = result;		
	}
}
	
function Checking()
{
	if (result == Infinity || result == -Infinity) 
	{
	    document.getElementById("txtnumone").value = "Undefined";
	} 

	if  (result < 1e-10 && result > -1e-10)
	{
		 document.getElementById("txtnumone").value = "0";
	}
	 
	else 
	{
	    document.getElementById("txtnumone").value = result;
	}
	numval = result;		
}
function Calculate3()
{
	if (operation == "sin")
	{	
		if (ispi == "yes")
		{
			result = Math.sin(parseFloat(numval));
		}
		if (ispi == "no")
		{
			result = Math.sin(parseFloat(numval) * (Math.PI / 180));
		}
		Checking();
	}
	if (operation == "cos")
	{
		if (ispi == "yes")
		{
			result = Math.cos(parseFloat(numval));
		}
		if (ispi == "no")
		{
			result = Math.cos(parseFloat(numval) * (Math.PI / 180));
		}
		Checking();
	}
	if (operation == "tan")
	{
		if (ispi == "yes") 
		{
		    angle = (parseFloat(numval) * 180) / Math.PI;
		}		
		else
		{
			angle = parseFloat(numval);
		}
		if (angle == 90 || angle == 270 || angle == 450 || angle == 630) 
		{
			isdef = "no"
		}

		if (ispi == "yes")
		{
			result = Math.tan(parseFloat(numval));
		}
		if (ispi == "no")
		{
			result = Math.tan(parseFloat(numval) * (Math.PI / 180));
		}
		if (result == Infinity || result == -Infinity) 
		{
		    document.getElementById("txtnumone").value = "Undefined (tan of " + numval + ")";
		} 

		if (isdef == "no") 
		{
			document.getElementById("txtnumone").value = "Undefined (tan of " + numval + ")";
		} 
		else 
		{
			if (result < 1e-10 && result > -1e-10) 
			{
				document.getElementById("txtnumone").value = "0";
			} 
			else 
			{
				document.getElementById("txtnumone").value = result;
			}
		}		
		numval = result;	
	}
	if (operation == "rad")
	{
		if (ispi == "no") 
		{ 
		    result = parseFloat(numval) * (Math.PI / 180);
			result = result / Math.PI
		    document.getElementById("txtnumone").value = result + "π (in radians)";
		} 
		else 
		{
		    alert("Input is already in radians!");
		}
		numval = result;
	}
	if (operation == "deg")
	{
		if (ispi == "yes") 
		{
			alert("Please enter a number without typing pi. Ex: type 2π with 2 only.");
		} 
		else 
		{
			numval = parseFloat(numval) * Math.PI;
			result = numval * (180 / Math.PI);
			document.getElementById("txtnumone").value = result + " (in degrees)";
		}
		numval = result;
	}
	
}

function SquareRoot() 
{
    operation = "sqrt";
	Check();
}

function Square() 
{
	operation = "sq";
	Check();
}

function Percent() 
{
	operation = "percent";
	Check();
}

function Exponential() 
{
	operation = "exponential";
	Check();
}

function Logarithm() 
{
	operation = "log";
	Check();
}

function NaturalLog() 
{
	operation = "ln";
	Check();
}

function Sine() 
{
	operation = "sin";
	trig = "yes";
	Check();
}

function Cosine() 
{
	operation = "cos";
	trig = "yes";
	Check();
}

function Tangent() 
{
	operation = "tan";
	trig = "yes";
	Check();
}


function toRadians() 
{
	operation = "rad";
	trig = "yes";
	Check();	
}


function toDegrees() 
{
	operation = "deg";
	trig = "yes";
	Check();
}

function factorial()
{
	numval = document.getElementById("txtnumone").value;
	numval = parseFloat(numval);
	    
   if (numval < 0) 
	{
        alert("Factorial is not defined for negative numbers.");
        document.getElementById("txtnumone").value = "";
    } 
	if (numval == 0 || numval == 1) 
	{
        document.getElementById("txtnumone").value = "1";
    } 
	else 
	{
        result = 1; 

		for (let i = 2; i <= numval; i++) 
		{
            result = result * i;
		}
	}

    document.getElementById("txtnumone").value = result; 
}

function NegPos()
{
	numval = document.getElementById("txtnumone").value;
	result = parseFloat(numval) * -1; 
	numval = result;
	document.getElementById("txtnumone").value = result; 
}

function Decimals() 
{
    numval = document.getElementById("txtnumone").value;
    if (decimalCount >= 1) 
	{
        alert("You can only use one decimal point!");
    } 
	else 
	{
        document.getElementById("txtnumone").value = numval + ".";
        decimalCount = decimalCount + 1;
    }
}


function Clear()
{
	numval="";
	numone="";
	numtwo="";
	result = "";
	isdef = "";
	ispi = "no";
	decimalCount = 0;
	document.getElementById("txtnumone").value = "";
}