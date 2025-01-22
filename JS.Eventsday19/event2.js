let btn=document.querySelector("button");
btn.onclick=(evt)=>{
    console.log("The button is clicked handled1");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}

//syntax for eventlistener
//node.addEventlistener(event,callbackfunction)
//node.removeEventlistener(event,callbackfunction)

btn.addEventListener=("click",()=>{
    console.log("The button is clicked-handled1");
})


btn.addEventListener=("click",()=>{
    console.log("The button is clicked-handled2");
})

let handler3=()=>{
    console.log("button is clicked-handled3");
}

btn.addEventListener("click",handler3);

btn.addEventListener=("click",()=>{
    console.log("The button is clicked-handled4");
})

btn.removeEventListener=("click",handler3);