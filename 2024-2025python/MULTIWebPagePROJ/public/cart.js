window.addEventListener("load", initializeCart);

function initializeCart() {
    var productsRow = document.getElementById("products");
    var totalPriceLabel = document.getElementById("finalprice");
    var totalPrice = 0;  
    productsRow.innerHTML = ""; 
	
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
		
        if (key.startsWith("item")) {
            var productname = localStorage.getItem(key);
            var size = localStorage.getItem("size" + key);
            var price = parseFloat(localStorage.getItem("price" + key)); 
            var quantity = parseFloat(localStorage.getItem("quantity" + key));

            totalPrice = totalPrice + price; 

            var row = document.createElement("tr");
            row.id = "product-" + i;
			
			
            var nameCell = document.createElement("td");
            nameCell.textContent = productname + " (Size: " + size + ")";
            row.appendChild(nameCell);

            var quantityCell = document.createElement("td");
            quantityCell.textContent = "Qty: " + quantity;
            row.appendChild(quantityCell);

            var priceCell = document.createElement("td");
            priceCell.id = "price-" + i;
            priceCell.textContent = "Price: $" + price;
            row.appendChild(priceCell);

            productsRow.appendChild(row);

        }
    }
	
	var clrbtnRow = document.getElementById("clearbtncell");
	var clearexist = document.getElementById("clearAllButton")
	if (clearexist == null) 
		{
	    var clearAllButton = document.createElement("button");
	    clearAllButton.textContent = "Clear All";
	    clearAllButton.id = "clearAllButton"; 
	    clearAllButton.addEventListener("click", clearAllCartItems);
	    clrbtnRow.appendChild(clearAllButton);
		localStorage.setItem("totalp", "00.00");
	}
		
    totalPrice = Math.round(totalPrice * 100) / 100; 
    totalPriceLabel.textContent = totalPrice;
	localStorage.setItem("totalp", totalPrice);

    if (productsRow.innerHTML == "") {
        productsRow.innerHTML = "<td>Your cart is empty!</td>";
        totalPriceLabel.textContent = "00.00";
		localStorage.setItem("totalp", "00.00");
    }
}

function clearAllCartItems() {
    for (var i = localStorage.length - 1; i >= 0; i--) {
        var key = localStorage.key(i);
        if (key.startsWith("item")) 
		{
            localStorage.removeItem(key);
            localStorage.removeItem("size" + key);
            localStorage.removeItem("price" + key);
            localStorage.removeItem("quantity" + key);
	     }
	    }
	
	    initializeCart();  
}