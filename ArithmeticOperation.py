'''
Name: Aarshee Rahman
Start Date: 2/27/24
End Date: 2/28/24
Description: This program will calculate the result of an arithmetic operation using functions (or subprograms)
'''

# Definitions and Calculations 
def Addition():
    num1 = int(input("Enter a number: "));
    num2 = int(input("Enter another number: "));
    
    # Perform addition
    add = num1 + num2;
    
    # Print results
    print("The sum is " + str(add) + ".");
    
def Subtraction():
    num1 = int(input("Enter a number: "));
    num2 = int(input("Enter another number: "));
    
    # Perfrom subtraction
    diff = num1 - num2;
    
    # Print results
    print("The difference of " + str(num1) + " and " + str(num2) + " is " + str(diff) + ".");
    
def Multiplication():
    num1 = int(input("Enter a number: "));
    num2 = int(input("Enter another number: "));
    
    # Perform Multiplication
    prod = num1 * num2;
    
    # Print results
    print("The product of " + str(num1) + " and " + str(num2) + " is " + str(prod) + ".");
    
def Division():
    num1 = int(input("Enter a number: "));
    num2 = int(input("Enter another number: "));
    
    # Perform Division 
    quot = num1 / num2;
    
    # Print results
    print("The quotient of " + str(num1) + " and " + str(num2) + " is " + str(quot) + ".");
    
def Modulus():
    num1 = float(input("Enter a number: "))
    num2 = float(input("Enter another number: "))
    
    # Perform modulus operation
    modnum1 = num1 % num2
    modnum2 = num2 % num1
    
    # Print results
    print("The modulus value of " + str(num1) + " with respect to " + str(num2) + " is " + str(modnum1) + ".")
    print("The modulus value of " + str(num2) + " with respect to " + str(num1) + " is " + str(modnum2) + ".")


# Main Menu
def main():
    print("Welcome to the Arithmetic Calculator.");
    whichone = int(input("Type 1 to Add, 2 to Subtract, 3 to Multiply, 4 to Divide, 5 for Modulus: "));
    
    if (whichone == 1):
        Addition();
    if (whichone == 2): 
        Subtraction();
    if (whichone == 3): 
        Multiplication();
    if (whichone == 4): 
        Division();
    if (whichone == 5): 
        Modulus();               
        
    main()
    
# MAIN Statement
if __name__ == "__main__":
    main()
