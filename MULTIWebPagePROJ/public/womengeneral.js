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
        case "btnaddp9":
            Adding("p9");
            break;
        case "btnsubp9":
            Subtract("p9");
            break;
        case "btnaddp10":
            Adding("p10");
            break;
        case "btnsubp10":
            Subtract("p10");
            break;
        case "btnaddp11":
            Adding("p11");
            break;
        case "btnsubp11":
 			Subtract("p11");
            break;
        case "btnaddp12":
            Adding("p12");
            break;
        case "btnsubp12":
            Subtract("p12");
            break;
		case "btnp9cart":
			AddToCart("p9");
			break;
		case "btnp10cart":
			AddToCart("p10");
			break;
		case "btnp11cart":
			AddToCart("p11");
			break;
		case "btnp12cart":
			AddToCart("p12");
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