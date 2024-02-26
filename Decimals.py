'''
Name: Aarshee Rahman
Start Date: 2/9/24
End Date: 2/12/24
Description: This program will add two decimals provided by the user and determine if the whole number of those decimals are odd or even.
'''

#Statements
print("Welcome to my program!")
decimal1 = float(input("Enter a decimal: "));
decimal2 = float(input("Enter another decimal: "));

#accept as a string

#Calculations
moddec1 = decimal1 % 1;
moddec2 = decimal2 % 1;
dec1whole = decimal1 - moddec1
dec2whole = decimal2 - moddec2

add = decimal1 + decimal2;
print("The sum of " + str(decimal1) + " and " + str(decimal2) + " is " + str(add) + ". \n")

modsum = add % 1;
sumwhole = add - modsum

#If Else Statements
ifdec1 = dec1whole % 2
ifdec2 = dec2whole % 2
ifsum = sumwhole % 2

if ( ifdec1 == 0):
    print(str(dec1whole) + " is even." );
else: 
    print(str(dec1whole) + " is odd.");

if ( ifdec2 == 0):
    print(str(dec2whole) + " is even." );
else: 
    print(str(dec2whole) + " is odd.");
    
if ( ifsum == 0):
    print(str(sumwhole) + " is even." );
else: 
    print(str(sumwhole) + " is odd.");
    
    
    
'''
    if ( ifdec1 == 0):
    print(str(dec1whole) + " or " + str(decimal1) + " is even." );
else: 
    print(str(dec1whole) + " or " + str(decimal1) + " is odd.");

if ( ifdec2 == 0):
    print(str(dec2whole) + " or " + str(decimal2) + " is even." );
else: 
    print(str(dec2whole) + " or " + str(decimal2) + " is odd.");
    
if ( ifsum == 0):
    print(str(sumwhole) + " or " + str(add) + " is even." );
else: 
    print(str(sumwhole) + " or " + str(add) + " is odd.");
'''
