let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset");
let MsgContainer = document.querySelector(".msg-container");
let Msg = document.querySelector("#msg");
let NewGame = document.querySelector("#new-btn");
let turnO =true;   //for player of turn


const WinPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const reset = ()=>{
    turnO =true;
    inableBoxes();
    MsgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO === true){
            box.innerText="O";  // palyer O
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText="X";
            box.style.color = "orange";
            turnO = true;
        }


        box.disabled = true;

        checkWinner();


        checkTie();
    });
});


const inableBoxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
        
    }
}



const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const  showWinner=(Winner) =>{
    Msg.innerText=`Congrtulation , winner is ${Winner}`;
    MsgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for ( let pattern of WinPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !=0 && pos2val !=0 && pos3val !=0 ){
            if(pos1val === pos2val && pos2val === pos3val){ 
                console.log("Winner" , pos1val);

                showWinner(pos1val);

            }
        }

    }
};
 

const checkTie = () => {
    if ([...boxes].every((box) => box.innerText !== "")) {
        Msg.innerText = "The Game Was Draw!";
        MsgContainer.classList.remove("hide");
        disableBoxes();
    }
};


NewGame.addEventListener("click",reset);
ResetBtn.addEventListener("click",reset);