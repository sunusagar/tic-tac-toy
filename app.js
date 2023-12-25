let boxes=document.querySelectorAll(".box");
let cout=0;
let truno=true;
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
console.log("button was clicked");
cout++;
    if(cout===9)
    {
        draw();
        
    }
    if(truno){
        box.innerText="O"
        box.style.color="red";
        truno=false;
        
    }
    else{

        
        box.innerText="X";
        box.style.color="black";
        truno=true;
        
    }
    
    checkWinner();
    console.log(cout);
    //cout=checkWinner();
});
});
let winPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
let container=document.querySelector(".contatiner");
let msg=document.querySelector(".msg");
let newbtn=document.querySelector("#newbtn");
let reset=document.querySelector("#reset");
draw=()=>{
    msg.innerText="match is draw";
    container.classList.remove("hide");
    cout=0;

}
 let checkWinner=()=>{
    for (const pattern of winPattern) {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                winner(pos1val);
                
            }
        }
    }
    
}

const winner=(x)=>{
    msg.innerText=`winner is ${x}`;
    container.classList.remove("hide");
    boxdisable();

}
const boxdisable=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
const enable=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
}
newbtn.addEventListener("click",()=>{
    truno=true;
    container.classList.add("hide");
    enable();
    cout=0;

});
reset.addEventListener("click",()=>{
    truno=true;
    container.classList.add("hide");
    enable();
    cout=0;
    });


