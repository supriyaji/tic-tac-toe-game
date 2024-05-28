//1. TO ACCESS ALL THE BOXES AND BUTTON 

// let boxes= document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");

//2. WHICH PLAYERS TURN IT IS ? 

// made variable turn to track k kis player 
// ki turn hai.

// let turn0 =true; // playerX, player0 , true hoga toh player 0 print hoga 
// false hoga toh player0

//3. Store All the winning patterns 

// 2d array means array of array.
//2D ARRAY -
// let arr2 =[["apple","litchi"],["potato","mushroom"],["pants","shirts"]];

//to add event listener for each box


let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 =true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText ="0";
            box.style.color="pink";
            turn0 = false;
        }else{
            box.innerText ="X";
            box.style.color="plum";
            turn0 =true;
        }
        box.disabled =true;
        
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = ""
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    
        let pasi1Val = boxes[pattern[0]].innerText;
        let pasi2Val = boxes[pattern[1]].innerText;
        let pasi3Val = boxes[pattern[2]].innerText;
        
        if(pasi1Val !="" && pasi2Val !="" && pasi3Val !=""){
            if(pasi1Val === pasi2Val && pasi2Val ===pasi3Val){
                console.log("winner")
                showWinner(pasi1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);