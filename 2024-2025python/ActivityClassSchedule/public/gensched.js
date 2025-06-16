window.addEventListener("load", loadSchedule);

function loadSchedule() 
{
	schooldistrict = localStorage.getItem("schooldistrict");
	termid = localStorage.getItem("termid");
	officialclass = localStorage.getItem("officialclass");
	studentname = localStorage.getItem("studentlname") + ", " + localStorage.getItem("studentfname");
	studentid = localStorage.getItem("studentid");
	gradelvl = localStorage.getItem("gradelvl");
	counselorname = localStorage.getItem("counselorlname") + " " + localStorage.getItem("counselorfname");
	
	document.getElementById("lblschooldistrict").textContent = schooldistrict;
	document.getElementById("lblschoolterm").textContent = termid;
	document.getElementById("lbloffclass").textContent = officialclass;
	document.getElementById("lblstudentname").textContent = studentname;
	document.getElementById("lblstudentid").textContent = studentid;
	document.getElementById("lblgradelvl").textContent = gradelvl;
	document.getElementById("lblcname").textContent = counselorname;
	
    for (let day = 1; day <= 5; day++) 
	{
        let dayName;
        switch (day) 
		{
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
       }

        for (let period = 1; period <= 8; period++) 
		{
            let classKey = dayName + "p" + period + "Name";
            let teacherKey = dayName + "p" + period + "Teacher";
            let roomKey = dayName + "p" + period + "Room";

            let classValue = localStorage.getItem(classKey);
            let teacherValue = localStorage.getItem(teacherKey);
            let roomValue = localStorage.getItem(roomKey);

			
            let classLabelId = dayName + "p" + period + "class";
            let teacherLabelId = dayName + "p" + period + "teacher";
            let roomLabelId = dayName + "p" + period + "room";

            
            document.getElementById(classLabelId).textContent = classValue;
            document.getElementById(teacherLabelId).textContent = teacherValue;
            document.getElementById(roomLabelId).textContent = "Room " + roomValue;
        }
    }
}