'''
Name: Aarshee Rahman
Start Date: 2/8/24
End Date: 2/8/24
Description: This program will carry out arithmetic calculations based on two numbers that the user will input.
'''

#Statements 
print("Welcome to Basic Calculations");
num1 = int(input("First value: "));
num2 = int(input("Second Value: "));

#Arithmetic Calculations 
add = num1 + num2;
diff = num1 - num2;
quot = num1 / num2;
prod = num1 * num2;
modnum1 = num1 % 2;
modnum2 = num2 % 1;
exp = num1 ** num2;

print("The sum of " + str(num1) + " and " + str(num2) + " is " + str(add));
print("The difference of " + str(num1) + " and " + str(num2) + " is " + str(diff));
print("The quotient of " + str(num1) + " and " + str(num2) + " is " + str(quot));
print("The product of " + str(num1) + " and " + str(num2) + " is " + str(prod));
print("The modulus value of " + str(num1) + " is " + str(modnum1));
print("The modulus value of " + str(num2) + " is " + str(modnum2));
print("The exponent value of " + str(num1) + " and " + str(num2) + " is " + str(exp));