const operands = document.querySelector("#operands");
const operators = document.querySelector('#operators')
const display = document.querySelector('#text')
const prevtxt = document.querySelector('#prevtxt')

for (let i=1;i<10;i++){
    let newbtn = document.createElement("button");
    newbtn.classList=`numbers`;
    newbtn.textContent=i;
    newbtn.value=i
    operands.appendChild(newbtn)
}

let extrakeys = [0,`.`]
extrakeys.forEach(element => {
    let newbtn = document.createElement("button");
    newbtn.classList=`numbers`;
    newbtn.textContent=element;
    newbtn.value=element;
    operands.appendChild(newbtn);
});

let clear = document.createElement("button");
clear.id = 'clear';
clear.textContent = `clear`;
operands.appendChild(clear);

let operatorkeys = [`+`,`-`,`*`,`/`,`=`];
operatorkeys.forEach(element=>{
    let newbtn = document.createElement('button');
    newbtn.classList='symbols';
    newbtn.textContent=element;
    newbtn.value=element;
    operators.appendChild(newbtn);
})

//let display = document.querySelector('#display');
//let eqbtn = document.createElement('button');
//eqbtn.id = `eqbtn`;
//eqbtn.textContent = `=`;
//eqbtn.value = `=`;
//display.appendChild(eqbtn);

function add(n,m){return +n + +m;}
function subtract(n,m){return +n - +m;}
function multiply(n,m){return n*m;}
function divide(n,m){return n/m;}
function exponentiate(n,m){return n**m;}

function operation(n,o,m){
    if (o ===`+`){result = add(n,m)}
    else if (o === `-`){result = subtract(n,m)}
    else if (o === `*`){result = multiply(n,m)}
    else if (o === `/`){result = divide(n,m)}
    return result;
    }

const numberkeysnl = document.querySelectorAll(".numbers");
const numberkeys = Array.from(numberkeysnl);
const symbolsnl = document.querySelectorAll('.symbols')
const symbols = Array.from(symbolsnl);

let currentinput = '';
let previnput = '';
let currentop = '';
numberkeysnl.forEach(key => {
    key.addEventListener('click',()=>{
        currentinput += key.value;
        display.textContent = currentinput;
    }) 
});
symbolsnl.forEach(key=>{
    key.addEventListener('click',()=>{
        if (key.value ===`=`){
           if ( previnput && currentinput && currentop){
            currentinput = operation(previnput,currentop,currentinput)
            display.textContent = currentinput
            previnput = '';
            currentop = '';
           }
        } else if (key.value !== `=`){
           previnput = currentinput;
           currentop = key.value;
           display.textContent = `${currentinput} ${currentop}`;
           currentinput = '';
        }
})
    })


clear.addEventListener('click',()=>{
    display.textContent = '';
    currentinput = '';
    currentop = '';
    previnput = '';
})