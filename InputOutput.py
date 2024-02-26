'''
Name: Aarshee Rahman
Start Date: 2/5/24
End Date: 2/5/24
Description: This program will combine the user's first and last name and add two numbers (provided by the user) together. 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
1) User inputs values to be stored in variables
2) + sign is used to concatenate (join) two string variables together
3) Output a message with values from the variables
'''

firstname = str(input("Enter your first name: "));
lastname = str(input("Enter your last name: "));
fullname = firstname + " " + lastname;
print("Hello " + fullname + ". Pleasure to meet you!");

num1 = int(input("Enter a number: "));
num2 = int(input("Enter a second number: "));
answer = num1 + num2;
print("The sum of " + str(num1) + " and " + str(num2) + " is " + str(answer));