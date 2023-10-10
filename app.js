// let div = document.createElement("div");

// div.innerHTML = "<h1>There are List Item</h1>"

// document.body.appendChild(div);

// let li = document.createElement("li");
// li.textContent = "About"
// menu.appendChild(li);

// li = document.createElement("li");
// li.textContent = "Contact";

// const menu = document.querySelector("#menu");
// menu.appendChild(li);

let h1 = document.createElement('h1');
h1.textContent = 'Here are list items: ';

let ul = document.createElement('ul');
ul.id = 'id1';

let li1 = document.createElement('li');
li1.textContent = 'Home';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.textContent = 'About';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.textContent = 'Contact';
ul.appendChild(li3);

let script = document.createElement('script');
script.src = "./application.js"

document.body.appendChild(h1);
document.body.appendChild(ul);
document.body.appendChild(script);

