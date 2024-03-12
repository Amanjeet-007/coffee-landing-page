let sear = document.getElementById("sear");
let elm = document.querySelector(".sea");
let a = 0;
let d = document.querySelector("main");
let gh = d.addEventListener("click",function(){
    elm.style.display = "none";
    a = 0;
})
sear.addEventListener("click",function(){
    if(a==0){
        elm.style.display = "flex";
        a = 1;
    }
    else{
        gh()
        elm.style.display = "none";
        a = 0;
    }
    
   
})