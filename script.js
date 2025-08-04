const operands = document.querySelector("#operands");
const operators = document.querySelector('#operators')

for (let i=1;i<10;i++){
    let newbtn = document.createElement("button");
    newbtn.classList=`numbers`;
    newbtn.textContent=i;
    newbtn.value=i
    operands.appendChild(newbtn)
}

let extrakeys = [0,`.`,`clear`]
extrakeys.forEach(element => {
    let newbtn = document.createElement("button");
    newbtn.classList=`numbers`;
    newbtn.textContent=element;
    newbtn.value=element;
    operands.appendChild(newbtn);
});

let operatorkeys = [`+`,`-`,`*`,`/`];
operatorkeys.forEach(element=>{
    let newbtn = document.createElement('button');
    newbtn.classList='operands';
    newbtn.textContent=element;
    newbtn.value=element;
    operators.appendChild(newbtn);
})