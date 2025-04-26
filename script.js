let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#newbtn");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

let turnO = true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
}
)
const disableBoxes=()=>{
      for(let box of boxes){
        box.disabled=true;
      }
}
const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
}

const showWinner=(winner)=> {
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner=()=>{
    for(let patterns of winpatterns){
           let pos1= boxes[patterns[0]].innerText;
           let pos2= boxes[patterns[1]].innerText;
           let pos3= boxes[patterns[2]].innerText;
           if(pos1!="" & pos2!="" & pos3!=""){
            if(pos1===pos2 & pos2===pos3){
                showWinner(pos1);
            }
           }
    }
}
newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);