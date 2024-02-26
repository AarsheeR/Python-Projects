'''
Name: Aarshee Rahman
Start Date: 2/7/24
End Date: 2/7/24
Description: This program will ask a user to enter a temperature and calculate the Fahrenheit and Celsius equivalent.
'''

print("Welcome to my temperature conversion program!");
tempF = int(input("Enter a temperature in Fahrenheit: "));
tempFtoC = (tempF-32)*5/9
print(str(tempF) + "°F converted to Celsius is " + str(tempFtoC) + "°C. \n")

tempC = int(input("Enter a temperature in Celsius: "));
tempCtoF = (tempC*9/5)+32
print(str(tempC) + "°C converted to Fahrenheit is " + str(tempCtoF) + "°F.")
