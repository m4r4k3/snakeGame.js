
let snake = document.querySelectorAll(".part");
let headdir = "right"
const board = document.querySelector(".board")
const head = snake[0]
let score = 0
head.style.left = "100px"
head.style.top = "100px"
generatefood()

function movehead(){
    index= headdir == "left" || headdir ==  "right" ? "left" : "top"
    if(headdir == "right" || headdir == "down"){
        head.style[index] = `${parseInt( head.style[index].split("px")[0]) + 20 }px`
    }else{
        head.style[index] = `${ parseInt( head.style[index].split("px")[0]) - 20 }px`
    }
    checkboard()
    checkfood()
    checkloss()
}

function move(){
    for ( i = snake.length - 1  ; i>=1 ; i--){
        snake[i].style.left =  snake[i-1].style.left
        snake[i].style.top =  snake[i-1].style.top   
    }
    movehead()
}


addEventListener("keydown"
,(e)=>{
if (e.key == "ArrowLeft")
{
    if(headdir != "right"){
        headdir = "left"
    }
}
else if (e.key == "ArrowUp")
{ if(headdir != "down"){
    headdir = "top"
}
}
else if (e.key == "ArrowDown")
{ if(headdir != "top"){
    headdir = "down"
}
}
else if (e.key == "ArrowRight")
{
    if(headdir != "left"){
    headdir = "right"
    }
}
})

function checkboard(){
    if(head.style.top.split("px")[0] <= -10){
        head.style.top = "580px"
    }else if(head.style.top.split("px")[0] >= 588){
        head.style.top = "10px"
    }
    else if(head.style.left.split("px")[0] >= 590){
        head.style.left = "10px"
    }
    else if(head.style.left.split("px")[0] <= -10){
        head.style.left = "580px"
    }
}

function generatefood(){
    let l = Math.round(Math.random() * 580)
    let t = Math.round(Math.random() * 580)
    let f =document.createElement("div")
    f.setAttribute("class" , "food")
    f.style.left = l+"px"
    f.style.top = t+"px"
    board.appendChild(f)
}

function  checkfood(){
    let f = document.querySelector(".food")
    if((-20<= f.style.top.split("px")[0] - head.style.top.split("px")[0] && f.style.top.split("px")[0] - head.style.top.split("px")[0] <= 20) && (-20<= f.style.left.split("px")[0] - head.style.left.split("px")[0] && f.style.left.split("px")[0] - head.style.left.split("px")[0] <= 20)){
        board.removeChild(f)
        generatefood()
        score += 1
        setScore()
        bigger ()
    }
}


function setScore(){
    document.querySelector(".scoreboard").innerHTML =  score
}





function bigger (){
  let n = document.createElement("div")
  n.setAttribute("class" , "part")
  n.style.left =  snake[snake.length - 1 ].style.left
  n.style.top = snake[snake.length - 1].style.top
  document.querySelector(".snake").appendChild(n)
  snake = document.querySelectorAll(".part")
}

function checkloss(){
    for(let i = 3 ; i<snake.length ; i++){
        let fi = snake[i]
        if(fi.style.top.split("px")[0] ==  head.style.top.split("px")[0] && fi.style.left.split("px")[0] == head.style.left.split("px")[0]){
            clearInterval(interval)
            alert("you lost")
        }
    }
}


const interval = setInterval(
   ()=>{
       move () 
}  , 50
)