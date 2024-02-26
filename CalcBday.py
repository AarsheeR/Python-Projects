'''
Name: Aarshee Rahman
Start Date: 2/5/24
End Date: 2/5/24
Description: This program will calculate the user's age.

'''

firstname = str(input("Enter your first name: "))
lastname = str(input("Enter your last name: "))

fullname = firstname + " " + lastname
print("Hello " + fullname + "! \n")

birthday = int(input("Enter the year that you were born: "))
age = 2024 - (birthday)
print("You are " + str(age) + " years old.")