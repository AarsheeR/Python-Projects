window.addEventListener("load", initializeProduct);

var quantity = 1;

function initializeProduct() {
	var usercurrent = localStorage.getItem("currentuser");
	document.getElementById("usermsg").textContent = "Hello, " + usercurrent + "!";
}

function signOut() 
{
    localStorage.setItem("isGuest", "true");
	localStorage.setItem("currentuser", "guest");
    alert("You have been signed out.");
	
	for (var i = localStorage.length - 1; i >= 0; i--) 
	{
        var key = localStorage.key(i);
        if (key.startsWith("item")) 
		{
            localStorage.removeItem(key);
            localStorage.removeItem("size" + key);
            localStorage.removeItem("price" + key);
            localStorage.removeItem("quantity" + key);
	     }
	 }
    window.location.href = "login.html";
}

function myFunction(button) 
{
    var x = button;
    switch (x) {
        case "btnaddp15":
            Adding("p15");
            break;
        case "btnsubp15":
            Subtract("p15");
            break;
        case "btnaddp16":
            Adding("p16");
            break;
        case "btnsubp16":
            Subtract("p16");
            break;
		case "btnp15cart":
			AddToCart("p15");
			break;
		case "btnp16cart":
			AddToCart("p16");
			break;
        default:
            alert("Unknown button ID: " + x);
    }
}

function Adding(productid) 
{
	var quantityid = "lblquantity" + productid + "num" 
	quantity = document.getElementById(quantityid).textContent;
	document.getElementById("lblquantity" + productid + "num").innerText = parseFloat(quantity)+1;
}

function Subtract(productid) 
{
	var quantityid = "lblquantity" + productid + "num"
	quantity = document.getElementById(quantityid).textContent;
	document.getElementById("lblquantity" + productid + "num").innerText = parseFloat(quantity)-1;
}

function AddToCart(productid) {
    var size = document.getElementById("size-" + productid).value;
    var quantity = document.getElementById("lblquantity" + productid + "num").textContent;
    
    if (quantity <= 0) {
        alert("You must have 1 or more quantity.");
		return;
    }
	if (size == "size") 
	{  
        alert("Please pick a size."); 
    } else {
        var name = productid + size;
		var productname = document.getElementById("lbl" + productid).textContent;
        var eachprice = document.getElementById("lbl" + productid + "price").textContent;
		var price = parseFloat(eachprice) * parseFloat(quantity)
		
		checkrepetition = localStorage.getItem("size"+name);
		if (checkrepetition !== null)
			{
				quantity = parseFloat(localStorage.getItem("quantity"+name)) + parseFloat(quantity);
			}
			
		localStorage.setItem("item" + productid + size,productname);
		localStorage.setItem("priceitem" + name,price);
		localStorage.setItem("quantityitem" + name,quantity);
		localStorage.setItem("sizeitem" + name,size);

		var label = document.getElementById("lblconfirm" + productid);
		    label.textContent = productname + " in size: " + size + ", added to cart!";
		    label.style.display = "block";

		    setTimeout(function () {
		        label.style.display = "none";
		    }, 5000);		
	    }
}