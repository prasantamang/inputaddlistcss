const myInput = document.querySelector('input');

const myButton = document.querySelector('button');
myButton.innerHTML ='ADD';

const myUl = document.querySelector('ul');

//creating listen eventer
myButton.addEventListener('click', () => {
    const Inside_list =document.createElement('li');
    myUl.appendChild(Inside_list);
    Inside_list.innerHTML = myInput.value
    myInput.value="";
});


