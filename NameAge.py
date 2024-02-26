'''
Name: Aarshee Rahman
Start Date: 2/5/24
End Date: 2/5/24
Description: This program will combine the user's first and last name and ask for their age.
'''

firstname = str(input("Enter your first name: "))
lastname = str(input("Enter your last name: "))
age = int(input("Enter your age: "))

fullname = firstname + " " + lastname
print("Hello " + fullname + "!")
print("You are " + str(age) + " years old.")