let boxes=document.querySelectorAll(".box")
let restBtn=document.querySelector(".rest-btn")
let winnerDisplay=document.querySelector(".winner-display")
let check=true
let boxClass=[]

function WinnerTesting(){
    if(boxClass.length == 9){
            winnerDisplay.textContent="player have Drawn!!!"
    }
    let test=[]
    boxes.forEach((box)=>{
       test.push(box)
    })
    if(test[0].textContent==test[1].textContent && 
        test[0].textContent!="" &&
        test[0].textContent==test[2].textContent){
        winnerDisplay.textContent="Player " +test[0].textContent+" is winner!"
        check=null
    }
    else if(test[0].textContent==test[4].textContent && 
        test[0].textContent!="" &&
         test[0].textContent==test[8].textContent){
                    winnerDisplay.textContent="Player " +test[0].textContent+" is winner!"

                    check=null
    }
    else if(test[0].textContent==test[3].textContent && 
        test[0].textContent!="" &&
        test[0].textContent==test[6].textContent){
                    winnerDisplay.textContent="Player " +test[0].textContent+" is winner!"


                    check=null
    }
    else if(test[1].textContent==test[4].textContent && 
        test[1].textContent!="" &&
        test[1].textContent==test[7].textContent){
                    winnerDisplay.textContent="Player " +test[1].textContent+" is winner!"
                    
                    check=null
    }
    else if(test[2].textContent==test[5].textContent && 
        test[2].textContent!="" &&
        test[2].textContent==test[8].textContent){
                    winnerDisplay.textContent="Player " +test[2].textContent+" is winner!"
        
                    check=null
    }
    else if(test[2].textContent==test[4].textContent && 
        test[2].textContent!="" &&
        test[2].textContent==test[6].textContent){
                    winnerDisplay.textContent="Player " +test[2].textContent+" is winner!"

                    check=null
    }
    else if(test[3].textContent==test[4].textContent && 
        test[3].textContent!="" &&
         test[3].textContent==test[5].textContent){
                    winnerDisplay.textContent="Player " +test[3].textContent+" is winner!"
       
                    check=null
    }
    else if(test[6].textContent==test[7].textContent &&
         test[6].textContent!="" &&
         test[6].textContent==test[8].textContent){
                    winnerDisplay.textContent="Player " +test[6].textContent+" is winner!"
            
                    check=null
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(!boxClass.includes(box.classList[0]) && check!=null){
            winnerDisplay.textContent="Players has playing now!!!"
            if(check ==true){
                box.textContent="O"
                check=false
                boxClass.push(box.classList[0])
            }else if(check==false){
                box.textContent="X"
                check=true
                boxClass.push(box.classList[0])
            }
        
            WinnerTesting()
        }
    })
})
restBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.textContent=""
    })
    check=true
    boxClass=[]
    winnerDisplay.textContent="play Tic Tac Game"
})


