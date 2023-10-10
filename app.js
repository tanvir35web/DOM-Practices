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

// let h1 = document.createElement('h1');
// h1.textContent = 'Here are list items: ';

// let ul = document.createElement('ul');
// ul.id = 'id1';

// let li1 = document.createElement('li');
// li1.textContent = 'Home';
// ul.appendChild(li1);

// let li2 = document.createElement('li');
// li2.textContent = 'About';
// ul.appendChild(li2);

// let li3 = document.createElement('li');
// li3.textContent = 'Contact';
// ul.appendChild(li3);

// let script = document.createElement('script');
// script.src = "./application.js"

// document.body.appendChild(h1);
// document.body.appendChild(ul);
// document.body.appendChild(script);



// let menu = document.querySelector("#menu");

// function createMenu(name){
//     let li = document.createElement("li");
//     li.textContent = name;
//     return li;
// }

// menu.appendChild(createMenu("Tanvir"));
// menu.appendChild(createMenu("Tarek"));
// menu.appendChild(createMenu("Tasrif"));


// let languages = ['C', 'Python', 'PHP', 'Java', 'JavaScript', 'Android', 'TypeScript', 'C#', 'Ruby', 'HTML', 'CSS', 'React JS'];

// let menu = document.querySelector('#menu');
// let fragment = new DocumentFragment();

// languages.forEach((x) => {
//     let li = document.createElement('li');
//     li.innerHTML = x;
//     fragment.appendChild(li);
// })

// menu.appendChild(fragment);

let languages = ['C', 'Python', 'PHP', 'Java', 'JavaScript', 'Android', 'TypeScript', 'C#', 'Ruby', 'HTML', 'CSS', 'React JS'];

let menu = document.querySelector('#menu');


let list = languages.map((x) => {
    let li = document.createElement('li');
    li.textContent = x;
    return li;
})

menu.append(...list);

menu.insertAdjacentHTML('beforebegin', '<h2>Web Technology</h2>');
menu.insertAdjacentHTML('afterbegin', '<li>Dart</li>');
menu.insertAdjacentHTML('beforeend', '<li>IOS</li>');
menu.insertAdjacentHTML('afterend', '<p>Thanks for Stay with us.</p>')

let li = document.createElement('li');
li.textContent = "Linux OS";

menu.replaceChild(li, menu.lastElementChild);