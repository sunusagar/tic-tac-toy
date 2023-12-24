let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let truno=true;
const winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        count++;
        console.log(count);
        if(count===9)
        {
            Draw();
            count=0;
            
        }
        else if(truno)
        {
            box.innerText="O";
            box.style.color="red";
            truno=false;
        }
        else{
            box.innerText="X";
            box.style.color="#F8D210";
            truno=true;
        }
        box.disabled=true;
        checkWinner();

    });
});
Draw=()=>{
    msg.innerText="match draw";
    msgcontainer.classList.remove("hide");
    count=0;
}
checkWinner=()=>{
    for (let pattern of winPattern)
     {
        
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val !="" && pos2Val !="" && pos3Val !="")
            {
                if(pos1Val===pos2Val && pos2Val===pos3Val)
                {
                    console.log("winner",pos1Val)
                    winner(pos1Val);
                    
                }

            }
    }
};
const winner=(winner)=>{
    msg.innerText=`congratulation ! , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const disabledBoxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
reset.addEventListener("click",()=>{
for (const box of boxes) {
    box.innerText="";
    box.disabled=false;
    msgcontainer.classList.add("hide");
    count=0;
}
});
newgame.addEventListener("click",()=>{
    for (const box of boxes) {
        box.innerText="";
        box.disabled=false;
        msgcontainer.classList.add("hide");
        count=0;
        
    }
});