let btn=document.querySelector("button");
let mode='light';

btn.addEventListener("click",()=>{
if(mode=='light'){
    
        document.querySelector("body").style.background='black';
        document.querySelector("button").style.background='red';
        mode='dark';
    }

else{
    document.querySelector("body").style.background='red';
    document.querySelector("button").style.background='green';
    mode='light';
    
    } console.log(mode);
})