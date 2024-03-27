let sear = document.getElementById("sear");
let elm = document.querySelector(".sea");
let a = 0;
let d = document.querySelector("main");
let cut = document.querySelector(".cut");



// let gh = d.addEventListener("click", function () {
//     elm.style.display = "none";
//     a = 0;
// })
sear.addEventListener("click", function () {
    if (a == 0) {
        elm.style.display = "flex";
        a = 1;
    }
    else {
        gh()
        elm.style.display = "none";
        a = 0;
    }


})
cut.addEventListener("click",()=>{
    elm.style.display = "none";
    a=0
})
// like
let heart = document.querySelectorAll(".heart");
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

