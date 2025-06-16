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
        case "btnaddp23":
            Adding("p23");
            break;
        case "btnsubp23":
            Subtract("p23");
            break;
        case "btnaddp24":
            Adding("p24");
            break;
        case "btnsubp24":
            Subtract("p24");
            break;
		case "btnp23cart":
			AddToCart("p23");
			break;
		case "btnp24cart":
			AddToCart("p24");
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
	var quantity = document.getElementById("lblquantity" + productid + "num").textContent;
	    
    if (quantity <= 0) {
        alert("You must have 1 or more quantity.");
		return;
    } else {
        var name = productid;
		var productname = document.getElementById("lbl" + productid).textContent;
        var eachprice = document.getElementById("lbl" + productid + "price").textContent;
		var price = parseFloat(eachprice) * parseFloat(quantity)
		
		checkrepetition = localStorage.getItem("size"+name);
		if (checkrepetition !== null)
			{
				quantity = parseFloat(localStorage.getItem("quantity"+name)) + parseFloat(quantity);
			}
			
			
		localStorage.setItem("item" + productid,productname);
		localStorage.setItem("priceitem" + name,price);
		localStorage.setItem("quantityitem" + name,quantity);
		localStorage.setItem("sizeitem" + name,"no size");

		var label = document.getElementById("lblconfirm" + productid);
				    label.textContent = productname + " added to cart!";
				    label.style.display = "block";

				    setTimeout(function () {
				        label.style.display = "none";
				    }, 5000);
	    }
}