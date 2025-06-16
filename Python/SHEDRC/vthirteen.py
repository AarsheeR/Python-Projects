'''
Name: Aarshee Rahman, Shiqi Wu
Start Date: 5/8/24
End Date: 5/24/24
Description: This program will produce a student's report card and schedule based on the user inputs.
'''

import os.path
from os import path

def main():
    Startup();

def Startup():
    global studentid
    studentid = str(input("What is the student's ID? "));
    idlen = len(studentid)
    if (idlen != 9):
        print("Invalid. Please input your nine digit ID in numbers: ");
        Startup();

    TFstudentid = CheckNum(studentid)
    if (TFstudentid == "false"):
        print("Invalid input. Please enter a positive whole number.");
        Startup();
    else:
        studentid = str(studentid) + ".txt";

    ifexists = bool(path.exists(str(studentid)));

    if (ifexists == False):
        print("A file for this student does not exist.");
        Createfile();
    else: 
        print("File already exists. You specify the desired file and be guided to the menu.")
        SorR();

def Createfile():
    global pythfile
    createfile = str(input("Would you like to create a new file for the student? 1 for no or 2 for yes: "))
    match createfile:
        case "1": 
            print("A file will not be created. You will be guided to the beginning.")
            main();
        case "2":
            pythfile = open(studentid, "w"); 
            print("Student Information files created."); 
            pythfile.close(); 
            Name();
        case _:
            print("Invalid. Please only input 1 for no or 2 for yes.");
            Createfile();
            

def Name():
    global InfoArray
    InfoArray = []
    sname = str(input("What is the student's name? Please only input letters: "));    
    TrueFalse = CheckName(sname);   
    if (TrueFalse == "false"):
        print("Invalid input. Please input the student's name in only letters.");
        Name(); 
    else:
        InfoArray.append("Name: " + sname)
        Grade();

def Grade():
    sgrade = str(input("What grade is this student in? Please only input numbers(1-12): "));   
    TrueFalse = CheckWhatGrade(sgrade);
    if (TrueFalse == "false"):
        print("Invalid input. Please only input numbers(1-12).");
        Grade(); 
    else:
        InfoArray.append("Grade Level (1-12): " + sgrade)

        pythfile = open(studentid, "a");  
        for i in range(0,len(InfoArray)): 
            newwork = InfoArray[i];
            pythfile.write("\n" + newwork);
        pythfile.close()
    TrueFalse = CheckExist()
    if (TrueFalse == False):
        Which();
    else:
        print("Student Information updated successfully. You will be guided to the beginning.")
        Startup();


def CheckExist():
    ifexists = bool(path.exists(str("s" + studentid)));
    if (ifexists == True):
        return ifexists
    else: 
        ifexists = bool(path.exists(str("r" + studentid)));
        if (ifexists == True):
            return ifexists
        else:
            ifexists = False
            return ifexists

def CheckWhatGrade(num): 
    length = len(num)
    eachnum = []
    eachnum.extend(num)
    for i in range(0,length):
        newnum = ord(eachnum[i])
        if (newnum > 47 and newnum < 58):
            iscorrect = "true"
        else:
            iscorrect = "false"
            return iscorrect
    if (int(num) > 12 or int(num) < 1):
        iscorrect = "false"
    else:
        iscorrect = "true"
    return iscorrect

def Which():
    whichone = str(input("Would you like to...\n1. Create a schedule\n2. Create a report card\nPlease type 1 or 2. "))
    match whichone:
        case "1": 
            Schedule();
        case "2": 
            ReportCard();
        case _:
            print("Invalid. Please only input 1 or 2.");
            Which();

def Schedule():
    global studentid2
    ifexists = bool(path.exists(str("s" + studentid)))
    if (ifexists == False):
        studentid2 = "s" + studentid;  
        pythfile = open(studentid2, "w");
        print("Schedule file created."); 
        InfoSched()
    else:
        InfoSched()


def InfoSched():
    global numdays, schooldays, ref
    numdays = str(input("Enter how many days the student goes to school? Please enter a number between 1-7: "))
    numdayslen = len(numdays)
    numdayslist = []
    if (numdayslen > 2 ):
        print("Please enter a whole number between 1 and 7.")
        InfoSched()

    for i in numdays:
        numdayslist.append(i)

    for i in range(0,numdayslen):
        daysascii = ord(numdayslist[i])  
        if (daysascii < 48 or daysascii > 55): 
            print("Please enter a whole number between 1 and 7.")
            InfoSched()

    print("Enter the day(s) of the week that the student goes to school: ")
    print("Input 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday, and 7 for Sunday.")
    schooldays = []
    ref = 0
    Days()

def Days():  
    global ref, schooldays      
    while (ref < int(numdays)):
        day = str(input("School day " + str(ref+1) + ": " ))
        daylen = len(day)
        daylist = []
        if (daylen > 2 ):
            print("Please enter a whole number between 1 and 7.")
            Days()
        daylist.extend(day)

        for i in range(0,daylen):
            dayascii = ord(daylist[i])  
            if (dayascii < 48 or dayascii > 55): 
                print("Please enter a whole number between 1 and 7.")
                Days()

        isduplicate = False
        count = 0
        while count < len(schooldays):
            if schooldays[count] == day:
                print("You have already entered this day. Please enter a different day.")
                isduplicate = True
                Days()
            count = 1 + count
        if (isduplicate == False):
            schooldays.append(day)
            ref = 1 + ref
    Daynames()

def Daynames():  
    global daynames, count2, coursesnameslist, cinfoformat, tnameformat , rnumformat, stimeformat, etimeformat, FinalArray, dayformat
    daynames = []
    for i in range(0,int(numdays)):
        daynum = schooldays[i]
        match daynum:
            case "1": 
                daynames.append("Monday ")
            case "2":
                daynames.append("Tuesday ")
            case "3":
                daynames.append("Wednesday ")
            case "4":
                daynames.append("Thursday ")
            case "5":
                daynames.append("Friday ")
            case "6":
                daynames.append("Saturday ")
            case "7":
                daynames.append("Sunday ")

    print("The day(s) of the week that the student goes to school are:", daynames)
    count2 = 0
    FinalArray = []
    coursesnameslist = []
    dayformat = []
    cinfoformat = []
    tnameformat = []
    rnumformat = []
    stimeformat = []
    etimeformat = []
    CoursesNum();

def CoursesNum():
    global coursenum, count2, count3, count4
    count3 = 0
    count4 = 0
    while (count2 < int(numdays)):
        coursenum = str(input("How many courses do you have on " + daynames[count2] + "? Please enter only whole numbers above 0: "))
        coursenumlist = []
        coursenumlen = len(coursenum)
        for i in coursenum:
            coursenumlist.append(i)

        for i in range(0,coursenumlen):
            pascii = ord(coursenumlist[i])
            if (pascii < 49 or pascii > 57):
                print("Invalid input. Please only input whole numbers above 0.")
                CoursesNum();
        count2 = count2 + 1
        CourseName1()
    infolen = len(cinfoformat)
    for i in range(0,infolen):
        FinalArray.append(dayformat[i])
        FinalArray.append(cinfoformat[i])
        FinalArray.append(tnameformat[i])
        FinalArray.append(rnumformat[i])
        FinalArray.append(stimeformat[i])
        FinalArray.append(etimeformat[i])
    filename = studentid2 
    pythfile = open(filename, "a");
    pythfile.write("-------------" + "\n" + "Schedule");

    pythfile = open(studentid, "r");       
    filecontent = (pythfile.readlines());
    pythfile = open(studentid2,"a");
    for i in range(0,len(filecontent)):  
        newwork = filecontent[i];
        pythfile.write(newwork);
    
    for i in range(0,len(FinalArray)):
        newwork = FinalArray[i];
        pythfile.write("\n" + newwork);
    pythfile.write("\n" + "-------------");
    pythfile = open(filename, "r");
    print(pythfile.read());
    
    TFexists = RCExist();
    if (TFexists == True):
        print("A Report Card for this student also exists. All information completed. You will be guided to the beginning.");
        Startup();
    else:
        print("Finished creating schedule. Would you like to 1. create a report card or 2. return to the beginning?"); 
        WhichChoiceSCHED()
        
def WhichChoiceSCHED():
    choice = str(input("Please only input 1 or 2 : "))
    match choice:
        case "1":
            ReportCard();
        case "2":
            Startup();
        case _:
            print("Invalid. Please only input 1 or 2. ")
            WhichChoiceSCHED()
        

def CourseName1():
    global count3, valid, count4
    print("For " + daynames[count3] + ":")
    count4 = 0
    CourseName2()
    count3 = count3 + 1


def CourseName2():
    global count4, valid, count3, coursesnameslist, stime, etime, timecheck, tname, rnum
    tname = ""
    rnum = ""
    stime = ""
    etime = ""
    while (count4 < int(coursenum)):
        cname = str(input("Name of course " + str(count4+1) + " (Enter only letters): "))
        TrueFalsecn = CheckName(cname)
        if (TrueFalsecn == "true"):
            tname = TeachName(tname)
            rnum = RoomNum(rnum)
            timecheck = 1
            stime = TimeInfo(stime)
            for i in range(0,1):
                stimeformat.append("Start Time: " + str(alltimearary[i]))
            timecheck = 2
            etime = TimeInfo(etime)
            for i in range(0,1):
                etimeformat.append("End Time: " + str(alltimearary[i]))
            count4 = count4 + 1
            coursesnameslist.append(cname)
            dayformat.append("Day: " + daynames[count3])
            cinfoformat.append("Course: " + cname)
            tnameformat.append("Teacher: " + str(tname))
            rnumformat.append("Room Number: " + str(rnum))

        else:
            print("Invalid input. Please only enter letters.")
            CourseName2()
    return coursesnameslist

def TeachName(teachername):
    global tname
    teachername = str(input("Enter teacher's last name for course " + str(count4+1) + ": "))   
    TFteachname = CheckName(teachername)
    if (TFteachname == "false"):
        print("Invalid input. Please only enter letters.")
        TeachName(teachername)
    else:
        tname = teachername  
    return tname  

def RoomNum(roomnumber):
    global rnum
    roomnumber = str(input("Enter room number for course " + str(count4+1) + "(Please enter only numbers): "))
    TFroomnum = CheckNum(roomnumber)
    if (TFroomnum == "false"):
        print("Invalid input. Please only enter numbers.")
        RoomNum(roomnumber)
    else:
        rnum = roomnumber
    return rnum

def TimeInfo(timeinfo):
    global timeinfoarray, alltimearary
    timeinfoarray = []
    if (timeinfo == stime) and (timecheck == 1):
        timeinfo = str(input("Enter the start time for course " + str(count4+1) + " (military time in format 00:00): "))
    else:
        timeinfo = str(input("Enter the end time for course " + str(count4+1) + " (military time in format 00:00): "))
    timeinfoarray.extend(timeinfo)
    if (len(timeinfo) != 5 or timeinfoarray[2] != ':'):
        print("Invalid input. Please enter time in the format 00:00.")
        TimeInfo(timeinfo)
    else:
        valinp = Checktimeformat()
        if (valinp == True):
            print("Time format is valid. ")
            alltimearary = []
            alltimearary.append(timeinfo)
        else:
            print("Time format is not valid. Please enter time in the format 00:00.")
            TimeInfo(timeinfo)

def Checktimeformat():
    validcheck = True
    lentimearray = len(timeinfoarray)
    i = 0
    while (i < lentimearray):
        ordtime = ord(timeinfoarray[i])
        match i:
            case 0:
                if (ordtime < 48 or ordtime > 50):
                    validcheck = False
                    return validcheck
            case 1:
                if (ordtime < 48 or ordtime > 57):
                    validcheck = False
                    return validcheck
                if (timeinfoarray[0] == "2") and (ordtime > 52): 
                    validcheck = False
                    return validcheck
            case 2:
                if timeinfoarray[i] != ':':
                    validcheck = False
                    return validcheck
            case 3:
                if (ordtime < 48 or ordtime > 54):
                    validcheck = False
                    return validcheck
            case 4:
                if (ordtime < 48 or ordtime > 57):
                    validcheck = False
                    return validcheck

        i = i + 1
    return validcheck
    #END OF SCHEDULE 

#REPORT CARD CODE STARTING       

def ReportCard():
    global studentid2
    ifexists = bool(path.exists(str("r" + studentid)))
    if (ifexists == False):
        studentid2 = "r" + studentid;
        pythfile = open(studentid2, "w");
        print("Report Card file created."); 
        pythfile.close(); ##
        InfoRC();
    else:
        InfoRC();

def InfoRC():
    #####The Beginning of Report Card Section
    global coursearray, gradearray, gradearray2, numcourses
    coursearray = []
    gradearray = []
    gradearray2 =[]
    numcourses = str(input("How many courses do you have? "))
    TrueFalse = CheckNum(numcourses)
    if (TrueFalse == "false"):
        print("Input is invalid, please enter a nonnegative integer")
        InfoRC()
    else:
        AskCourse(numcourses);

def CheckNum(num): 
    if (num == "0"):
        iscorrect = "false"
    else:
        length = len(num)
        eachnum = []
        eachnum.extend(num)
        for i in range(0,length):
            newnum = ord(eachnum[i])
            if (newnum > 47 and newnum < 58):
                iscorrect = "true"
            else:
                iscorrect = "false"
                return iscorrect
    return iscorrect

def AskCourse(count):
    global average
    while (int(count) > 0):
        coursename = str(input("Enter name of the course: "))
        TrueFalse = CheckName(coursename)
        if (TrueFalse == "false"):
            print("Invalid input, please enter a name contains only letters")
            AskCourse(count)
        else:
            coursearray.append("Course: " + coursename)
            AskGrade();
            count = int(count) - 1;
    total = 0
    for i in range (0, int(numcourses)):
        total = total + gradearray[i]
    average = total / int(numcourses)
    average = str(format(average,".2f"))
    EndRC();

def EndRC():
    RCFinal =[];
    length = len(coursearray);
    for i in range(0,length):
        RCFinal.append(coursearray[i]);
        RCFinal.append(gradearray2[i]);

    pythfile = open(studentid2,"a");
    pythfile.write("-------------" + "\n" + "Report Card");

    pythfile = open(studentid, "r");       
    filecontent = (pythfile.readlines());


    pythfile = open(studentid2,"a");
    for i in range(0,len(filecontent)):  
        newwork = filecontent[i];
        pythfile.write(newwork);

    for i in range(0, len(RCFinal)):
        newwork = RCFinal[i];
        pythfile.write("\n" + newwork);

    pythfile.write("\n" + "Average: " + average + "\n" + "-------------");

    pythfile = open(studentid2, "r");
    print(pythfile.read());    
    
    pythfile.close(); 
    TFexists = SchExist();
    if (TFexists == True):
        print("A Schedule for this student also exists. All information completed. You will be guided to the beginning.");
        Startup();
    else:
        print("Finished creating report card. Would you like to 1. create a schedule or 2. return to the beginning?"); 
        WhichChoiceRC()
        
def WhichChoiceRC():
    choice = str(input("Please only input 1 or 2 : "))
    match choice:
        case "1":
            Schedule();
        case "2":
            Startup();
        case _:
            print("Invalid. Please only input 1 or 2.")
            WhichChoiceRC()
    

def CheckName(name):
    length = len(name)
    eachletter = []
    eachletter.extend(name)
    for i in range(0,length):
        newname = ord(name[i])
        if (newname >= 65 and newname <= 90) or (newname >= 97 and newname <= 122):
            iscorrect = "true"
        else:
            iscorrect = "false"
            return iscorrect
    return iscorrect

def AskGrade():
    grade = str(input("What is your grade? "))
    TrueFalse = CheckGrade(grade)
    if (TrueFalse == "false"):
        print("Invalid input, please enter a grade between 0 and 100")
        AskGrade()
    else:
        gradearray.append(float(grade));
        gradearray2.append("Grade: " + str(grade));

def CheckGrade(num):
    if (num == "."):
        iscorrect = "false"
        return iscorrect

    length = len(num)
    eachnum = []
    eachnum.extend(num)
    decimalchk = 0;
    for i in range(0,length):
        if ((eachnum[i]) == "."):
            decimalchk = decimalchk + 1
    if (decimalchk > 1):
        iscorrect = "false"
        return iscorrect

    for i in range(0,length):
        newnum = ord(eachnum[i])
        if (newnum > 47 and newnum < 58) or (newnum == 46):
            iscorrect = "true"
        else:
            iscorrect = "false"
            return iscorrect
    if (float(num) > 100 or float(num) < 0):
        iscorrect = "false"
    else:
        iscorrect = "true"
    return iscorrect

    #####The End of Report Card Section

def SorR(): 
    menuopt = str(input("Would you like to choose\n1. Schedule\n2. Report Card\n3. Student Information?\nPlease type 1, 2 or 3. "))
    match menuopt:
        case "1": 
            CheckSch();
        case "2": 
            CheckRC();
        case "3":
            CheckSI();
        case _:
            print("Invalid. Please only input 1,2, or 3.");
            SorR();
    return menuopt    

def CheckSI():
    global studentid2
    studentid2 = studentid
    Menu();

def CheckSch():   
    global studentid2
    TFexists = SchExist();
    if (TFexists == True):
        print("A Schedule for this student exists.");
        studentid2 = "s" + studentid
        Menu();
    else: 
        print("A Schedule for this student doesn't exist.");
        AskSched()       
    
def SchExist():
    ifexists = bool(path.exists(str("s" + studentid)));
    return ifexists
    
    
def CheckRC():
    global studentid2
    TFexists = RCExist();
    if (TFexists == True):
        print("A Report Card for this student exists.");
        studentid2 = "r" + studentid
        Menu();
    else:
        print("A Report Card for this student doesn't exist.");
        AskRCard()
        
def RCExist():
    ifexists2 = bool(path.exists(str("r" + studentid)));
    return ifexists2

def AskSched():
    sch =  str(input("Would you like to 1. choose report card instead or 2. create a schedule?"))      
    match sch:
        case "1":
            CheckRC(); 
        case "2":
            Schedule();
        case _:
            print("Invalid. Please only input 1 or 2.");
            AskSched()

def AskRCard():
    rc =  str(input("Would you like to 1. choose schedule instead or 2. create a report card?"))
    match rc:
        case "1":
            CheckSch(); 
        case "2":
            ReportCard();
        case _:
            print("Invalid. Please only input 1 or 2.");
            AskRCard();

def Menu():
    menu = "Menu\n-----------------\n1 - Read current file for student\n2 - Remove existing file contents for new information\n3 - Remove the existing file entirely\n-----------------";
    print(menu);
    MenuSelection();

def MenuSelection():
    selection = str(input("Please select from the menu: "));
    match selection:
        case "1":
            Read();
        case "2":
            RemoveContent();
        case "3":
            RemoveFile();
        case _:
            print("Invalid. Please only input 1, 2 or 3.");
            MenuSelection();

def Read():
    length = IsBlank();
    if (length == 0):
        ForBlank();
    else:
        pythfile = open(studentid2, "r");
        print("File content: " + "\n" + pythfile.read() + "\nYou will be guided to the beginning.");
        pythfile.close();
    main();

def IsBlank():
    pythfile = open(studentid2, "r");
    filelen = pythfile.readlines();
    filelen2 = len(filelen);
    pythfile.close();
    return filelen2

def ForBlank():
    create = str(input("File is blank. Would you like to add information to it? 1 for no or 2 for yes: "));
    match create:
        case "1":
            print("You will be guided to the beginning.");
            main();
        case "2":
            WhichFile();
        case _:
            print("Invalid. Please only input 1 or 2.")
            ForBlank();

def WhichFile():
    if (studentid2 == "s" + studentid):
        Schedule();
    if (studentid2 == "r" + studentid):
        ReportCard();
    if (studentid2 == studentid):
        Name();

def RemoveContent():
    length = IsBlank();
    if (length == 0):
        ForBlank();
    else:
        yesno = str(input("Are you sure you want to remove the file content? Enter 1 for no or 2 for yes: "));
        match yesno:
            case "1":
                print("File content will not be removed. You will be guided to the menu.");
                Menu();
            case "2":
                pythfile = open(studentid2,"r+");
                pythfile.truncate();
                print("File content removed successfully.");
                pythfile.close();
                ForBlank();
            case _:
                print("Invalid. Please only input 1 or 2.");
                RemoveContent();

def RemoveFile():
    global studentid2
    if (studentid2 == studentid):
        print("Are you sure you want to remove the entire file? This will remove all files, including the schedule and report card for this student.")
    else:
        print("Are you sure you want to remove the entire file?")
    yesno = str(input("Enter 1 for no or 2 for yes: "));
    match yesno:
        case "1":
            print("File will not be removed. You will be guided to the menu.");
            Menu();
        case "2":
            file_path = os.getcwd();
            allfilename = os.path.join(file_path,studentid2);
            os.remove(allfilename);
            print("File removed successfully. You will be guided to the beginning.");
            if (studentid2 == studentid):
                RemoveALL();
            main();
        case _:
            print("Invalid. Please only input 1 or 2.")
            RemoveFile();

def RemoveALL():
    global studentid2
    ifexists = bool(path.exists(str("s" + studentid)));
    if (ifexists == True):
        studentid2 = "s" + studentid
        file_path = os.getcwd();
        allfilename = os.path.join(file_path,studentid2);
        os.remove(allfilename);
    ifexists2 = bool(path.exists(str("r" + studentid)));
    if (ifexists2 == True):
        studentid2 = "r" + studentid
        file_path = os.getcwd();
        allfilename = os.path.join(file_path,studentid2);
        os.remove(allfilename);

if __name__ == "__main__":
    main();