'''
Name: Aarshee Rahman
Start Date: 2/26/24
End Date: 2/26/24
Description: This tutorial is to learn how to use functions.
'''

# Definitions
def Addition():
    print("I add.");
    
def Subtraction():
    print("I subtract.");

def main():
    print("This tutorial will demonstrate how functions work.");
    print("In addition, it will show you how to make a decision.");
    whichone = int(input("Type 1 to Add, 2 to Subtract: "));
    
    if (whichone == 1):
        Addition();
    else: 
        Subtraction();
        
    main()
    
# MAIN Statement
if __name__ == "__main__":
    main()
    
    