let sear = document.getElementById("sear");
let elm = document.querySelector(".sea");
let a = 0;
let d = document.querySelector("main");
let cut = document.querySelectorAll(".cut");
let icon = document.querySelector("#shop");
let box =  document.querySelector(".cartbox");
let heart = document.querySelectorAll(".heart");
let count = document.querySelector(".count");
let num = 0;

let m = document.querySelector(".m");
function me(){
    m.style.visibility="visible";
    setTimeout(()=>{
        m.style.visibility="hidden";
    },800)
}

function add(){ 
    count.style.visibility = "visible";
    num = ++num
    count.textContent = `${num}`;
    // icon.textContent = `${num} Item added in cart.`
    me()
}






//search functionality
sear.addEventListener("click", function () {
    let a = 0;
    if (a == 0) {
        elm.style.display = "flex";
        elm.style.visibility = "visible";
        a = 1;
    }
    else {
        elm.style.visibility = "hidden";
        a = 0;
    }


})
function iconC(){
   box.style.visibility = "visible";
}
// X cut functionality
cut.forEach((el)=>{
    el.addEventListener("click",()=>{
    el.parentElement.style.visibility = "hidden";
    })
    
})
// like
heart.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(a==0){
            el.style.color = "red";
            a = 1 ;
        }
        else{
            el.style.color = "unset";
             a=0;
        }
        
    })
    
})

