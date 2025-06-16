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
        case "btnaddp17":
            Adding("p17");
            break;
        case "btnsubp17":
            Subtract("p17");
            break;
        case "btnaddp18":
            Adding("p18");
            break;
        case "btnsubp18":
            Subtract("p18");
            break;
        case "btnaddp19":
            Adding("p19");
            break;
        case "btnsubp19":
 			Subtract("p19");
            break;
        case "btnaddp20":
            Adding("p20");
            break;
        case "btnsubp20":
            Subtract("p20");
            break;
		case "btnp17cart":
			AddToCart("p17");
			break;
		case "btnp18cart":
			AddToCart("p18");
			break;
		case "btnp19cart":
			AddToCart("p19");
			break;
		case "btnp20cart":
			AddToCart("p20");
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