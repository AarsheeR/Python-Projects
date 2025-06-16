window.addEventListener("load", initialize())

function initialize()
{
		totalprice = localStorage.getItem("totalp");
	    document.getElementById("total").textContent = "Total: $" + totalprice; 
}

document.getElementById("place-order-btn").onclick = function() {
	
	var shippingName = document.getElementById("shipping-name").value;
    var shippingAddress = document.getElementById("shipping-address").value;
    var shippingCity = document.getElementById("shipping-city").value;
    var shippingZip = document.getElementById("shipping-zip").value;
    var shippingPhone = document.getElementById("shipping-phone").value;


    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

    var fieldsFilled = true;

    function checkField(fieldValue, fieldName) {
        switch (fieldValue) {
            case "":
                alert("Please enter your " + fieldName + ".");
                fieldsFilled = false;
                break;
        }
    }
	

	 
    checkField(shippingName, "shipping name");
    checkField(shippingAddress, "shipping address");
    checkField(shippingCity, "shipping city");
    checkField(shippingZip, "shipping ZIP code");
    checkField(shippingPhone, "shipping phone number");

    checkField(cardNumber, "credit card number");
    checkField(expiryDate, "card expiry date");
    checkField(cvv, "card CVV");

    if (fieldsFilled) {
        alert("Order placed successfully!");
		window.location.href = "Checkoutpage.html";
    }
else{
	return;
}
};