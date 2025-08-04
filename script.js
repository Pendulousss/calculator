const operands = document.querySelector("#operands");
const operators = document.querySelector('#operators')
const display = document.querySelector('#text')

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

function addition(n,m){return n+m;}
function subtraction(n,m){return n+m;}
function multiply(n,m){return n*m;}
function divide(n,m){return n/m;}
function exponentiation(n,m){return n**m;}

const numberkeysnl = document.querySelectorAll(".numbers");
const numberkeys = Array.from(numberkeysnl);