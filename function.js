


// get class and id from index.html

let addBtn = document.querySelector('.addbtn');
let addInput = document.querySelector('.addinput');
let todolist = document.querySelector('.todo-list');


let alldelet =document.createElement("button");
alldelet.setAttribute('class','button')


// event 

function add() {

    if (addInput.value === "") {
        alert("Enter your text");
        listbox.classList.add('hide')
    }

    // create three Element btnbox, listbox and ul

    let btnBox = document.createElement('div');
    let listbox = document.createElement('div');
    let ul = document.createElement('ul');

    listbox.setAttribute('class', 'listbox');
    listbox.appendChild(ul)
    listbox.appendChild(btnBox);
    todolist.appendChild(listbox)


    // create li and p

    let li = document.createElement('li');
    let para = document.createElement('p');

    para.innerText = addInput.value;

    // appendChild to li on ul

    ul.appendChild(li);

    // appendChild to p on li

    li.appendChild(para);

    // create edit and delete button 

    let button1 = document.createElement('button');
    let button2 = document.createElement('button');

    // create edit input
    let input = document.createElement('input');

    // setAttribute on button  edit and delete
    button1.setAttribute('class', 'buttons');
    button2.setAttribute('class', 'buttons');

    // Event 
    button2.addEventListener('click', () => {
        listbox.classList.add('hide');
    });
    // Event 
    button1.addEventListener('click', () => {
        button1.classList.add('hide');
        button2.classList.add('hide');
        listbox.classList.add('listboxcolor')
        li.appendChild(input)
        para.value = ""
        para.classList.add('hide')
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'text');
        input.setAttribute('placeholder', 'Enter your text');
        // create save button
        let btnsave = document.createElement('button');
        btnsave.setAttribute('class', 'button');
        let btntext = document.createTextNode('save')
        btnsave.appendChild(btntext);
        btnBox.appendChild(btnsave)


        btnsave.addEventListener('click', () => {
            input.classList.add('hide');
            para.classList.remove('hide');
            para.innerText = input.value;
            li.appendChild(para);
            listbox.classList.remove('listboxcolor')
            button1.classList.remove('hide');
            button2.classList.remove('hide');
            btnsave.classList.add('hide');

        })

    });

    // create two icons

    let icons1 = document.createElement('i');
    let icons2 = document.createElement('i');
    icons1.setAttribute('class', 'fa-solid fa-pen-to-square');
    icons2.setAttribute('class', 'fa-solid fa-trash');

    // appendChild to icons on buttons

    button1.appendChild(icons1);
    button2.appendChild(icons2);

    // appendChild to buttons on btnbox
    btnBox.appendChild(button1)
    btnBox.appendChild(button2)
    addInput.value = ""
}
