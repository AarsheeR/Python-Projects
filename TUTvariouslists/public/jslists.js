window.addEventListener("load",Initialize);



function Initialize()

{
	let carlst = ["Ford","GMC","BMW"];
	let listelement = document.getElementById("1storderlist");
	let listnum = document.getElementById("1stnumberlist");
	let listcap = document.getElementById("1stcaplist");
	let listlow = document.getElementById("1stlowlist");
	let listcaproman = document.getElementById("1stUpRomanlist");
	let listlowroman = document.getElementById("1stlowRomanlist") 
	let listlength = carlst.length;

	for(let i =0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listelement.appendChild(li);
	}


	for(let i =0; i<listlength; i++)
		{
			let li = document.createElement("li");
			li.innerText = carlst[i];
			listnum.appendChild(li);

		}

	
	for(let i =0; i<listlength; i++)

		{
			let li = document.createElement("li");
			li.innerText = carlst[i];
			listcap.appendChild(li);
		}
			

	for(let i =0; i<listlength; i++)

		{
			let li = document.createElement("li");
			li.innerText = carlst[i];
			listlow.appendChild(li);
		}	
	

	for(let i =0; i<listlength; i++)

		{

			let li = document.createElement("li");
			li.innerText = carlst[i];
			listcaproman.appendChild(li);

		}

	for(let i =0; i<listlength; i++)

		{

			let li = document.createElement("li");
			li.innerText = carlst[i];
			listlowroman.appendChild(li);

		}

}