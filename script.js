//your JS code here. If required.

let p = document.getElementById('status');
let btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
	p.innerHtml = "";
	let h1 = document.createElement('h1');
	h1.innerHTML = "Entered Metaverse";
	p.appendChild(h1);
});