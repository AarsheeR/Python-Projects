'''
Name: Aarshee Rahman
Start Date: 2/9/24
End Date: 2/12/24
Description: This program will add two decimals provided by the user and determine if the whole number of those decimals are odd or even.
'''

decimal_input1 = str(input("Please enter a decimal number: "));

if decimal_input1.replace('.', '').isdigit():
    decimal_number1 = float(decimal_input1);
    print("Number entered: " + str(decimal_number1));
else:
    print("Error: Please enter a positive number.");

decimal_input2 = str(input("Please enter a decimal number: "));

if decimal_input2.replace('.', '').isdigit():
    decimal_number2 = float(decimal_input2);
    print("Number entered: " + str(decimal_number2));
else:
    print("Error: Please enter a positive number.");
    
#Calculations
add = decimal_number1 + decimal_number2;
print ("The sum of " + str (decimal_number1) + " and " + str (decimal_number2) + " is " + str (add) + ". \n");

moddec1 = decimal_number1 % 1;
dec1whole = decimal_number1 - moddec1;

moddec2 = decimal_number2 % 1;
dec2whole = decimal_number2 - moddec2;

modsum = add % 1;
sumwhole = add - modsum;

#If Else Statements
ifdec1 = dec1whole % 2;
ifdec2 = dec2whole % 2;
ifsum = sumwhole % 2;

if (ifdec1 == 0) :
    print (str (dec1whole) + " (first value) is even." );
else:
    print(str (dec1whole) + " (first value) is odd. ");   
if (ifdec2 == 0):
    print (str (dec2whole) + " (second value) is even." );
else:
    print (str (dec2whole) + " (second value) is odd. ");
    
if ( ifsum == 0) :
    print (str (sumwhole) + " (sum) is even." );
else:
    print (str (sumwhole) + " (sum) is odd.");

    