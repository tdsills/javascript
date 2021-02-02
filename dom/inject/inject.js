/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document.
 */
let injectDiv = document.querySelector("#inject");
let center = document.createElement("center");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
let hr = document.createElement("hr");
let p = document.createElement("p");
let ol = document.createElement("ol");
let hr2 = document.createElement("hr2");
let p2 = document.createElement("p2");
let h1Fin = document.createElement("h1Fin");
let pFin = document.createElement("pFin");

h1.innerHTML = `<i>HTML Practice Exercise TEKcamp.</i>`;
h2.innerHTML = `<a href="">TEKsystems "TEKcamp"</a>`;
p.innerHTML = `I love <i>HTML</i> for the following reasons:`;
ol.innerHTML = `<li>I learned it quickly.</li>
<li>I can make web pages using code. </li>
<li> It’s fun.</li>`;
p2.innerHTML = `My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.`;
h1Fin.innerHTML = "Have a great day!";
pFin.innerHTML = `I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]`;

injectDiv.appendChild(center);
center.appendChild(h1);
center.appendChild(h2);
injectDiv.appendChild(hr);
injectDiv.appendChild(p);
injectDiv.appendChild(ol);
injectDiv.appendChild(hr2);
injectDiv.appendChild(p2);
injectDiv.appendChild(h1Fin);
injectDiv.appendChild(pFin);
