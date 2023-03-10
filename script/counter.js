let paraContent = document.querySelector('#counter-id');
let addButton = document.querySelector('#add');
let subButton = document.querySelector('#sub');

addButton.addEventListener('click', ()=>{
    paraContent.innerText = Number(paraContent.innerText)+1;
});

subButton.addEventListener('click', ()=>{
    if(Number(paraContent.innerText) == 0) {
        paraContent.innerText = 0;
    }
    else {
        paraContent.innerText = Number(paraContent.innerText)-1;
    }
});