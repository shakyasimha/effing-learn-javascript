let button = document.querySelector('#timer-button');
let buttonText1 = 'Start';
let buttonText2 = 'Stop';

let counterPara = document.querySelector('#counter-para');

counterPara.addEventListener('click', ()=>{
    counterPara.innerText = Number(counterPara.innerText) + 1;
});

/*
button.addEventListener('click', ()=>{
    if(button.innerText == buttonText1) {
        button.innerText = buttonText2;
    }
    else {
        button.innerText = buttonText1;
    }
});*/