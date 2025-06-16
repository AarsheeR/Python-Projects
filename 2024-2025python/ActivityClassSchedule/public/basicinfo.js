window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",UseLocal);
}

function UseLocal()
{
	localStorage.clear();
	document.getElementById("txtstdid").focus();
	studentid = document.getElementById("txtstdid").value;
	studentfname = document.getElementById("txtstdfname").value;
	studentlname = document.getElementById("txtstdlname").value;
	gradelvl = parseInt(document.getElementById("txtgradelvl").value);
	counselorfname = document.getElementById("txtcfname").value;
	counselorlname = document.getElementById("txtclname").value;
	officialclass = document.getElementById("txtclass").value;	
	termid = parseInt(document.getElementById("txtterm").value);
	schoolname = document.getElementById("txtschool").value;
	empty = "false";
	
	idlen = studentid.length;
	offclasslen = officialclass.length;
	isStudentIdWhole = parseFloat(studentid) % 1;

	if (studentid == "" || idlen < 9 || isStudentIdWhole !== 0) 
	{
        alert("Invalid Student ID. Must be a whole number with at least 9 characters.");
        document.getElementById("txtstdid").focus();
        return;
	}
	if (studentfname == "") 
	{
	    alert("First name is required.");
	    document.getElementById("txtstdfname").focus();
	    return;
	}
	if (studentlname == "") 
	{
	    alert("Last name is required.");
	    document.getElementById("txtstdlname").focus();
	    return;
	}
	if (gradelvl == "" || (gradelvl !== 9 && gradelvl !== 10 && gradelvl !== 11 && gradelvl !== 12)) 
	{
	    alert("Grade level must be 9, 10, 11, or 12.");
	    document.getElementById("txtgradelvl").focus();
	    return;
	}
	if (counselorfname == "") 
	{
	    alert("Counselor first name is required.");
	    document.getElementById("txtcfname").focus();
	    return;
	}

	if (counselorlname == "") 
	{
	    alert("Counselor last name is required.");
	    document.getElementById("txtclname").focus();
	    return;
	}
	if (officialclass == "" || offclasslen < 3) 
	{
        alert("Class name must be at least 3 characters long.");
        document.getElementById("txtclass").focus();
        return;
    }
    if (termid == "" || (termid !== 1 && termid !== 2)) 
	{
        alert("Term must be 1 or 2.");
        document.getElementById("txtterm").focus();
        return;
    }
    if (schoolname == "") 
	{
        alert("School name is required.");
        document.getElementById("txtschool").focus();
        return;
    }
	

	localStorage.setItem("studentid",studentid);
	localStorage.setItem("studentfname",studentfname);
	localStorage.setItem("studentlname",studentlname);
	localStorage.setItem("gradelvl",gradelvl);
	localStorage.setItem("counselorfname",counselorfname);
	localStorage.setItem("counselorlname",counselorlname);
	localStorage.setItem("officialclass",officialclass);
	localStorage.setItem("termid",termid);
	localStorage.setItem("schooldistrict",schoolname);
			
	alert("Basic information saved!");
	window.location.href = "courses.html";
	
}
