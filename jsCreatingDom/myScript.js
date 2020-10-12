let body = document.body;
let title = document.title = "Created using JS";

let h1 = document.createElement("h1");
h1.innerHTML = "Welcome to Nick's Page";
let p = document.createElement("p");
p.innerHTML = "On this page you will find different HTML related things I am practicing with and learning."

body.appendChild(h1);
body.appendChild(p);

h1.style.textAlign = "center";

console.log(body);