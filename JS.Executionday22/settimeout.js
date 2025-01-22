/*Synchronous execution : by default java script having synchronous execution ,in synchronous execution it as line by line execution of the code.
This may create delay or waiting of other code execution.

Asynchronous execution : Asynchronous execution would be a diffent execution where there is dependency of code with one another.
settimeout method is used to Asynchronous execution*/
/*console.log('a');
console.log('b');
setTimeout(()=>{
    console.log('c');

},4000);
console.log('d');

displayName=(dname)=>{
    setTimeout(()=>{
        console.log(dname);
    },4000);
}
displayName("naveen");
displayName("Ganesh");
displayName("Vinod");*/

//call back function
function displayName(dname,displayName){
    setTimeout(()=>{
        console.log(dname);
        if(displayName){
            displayName();
        }
    },4000);
}
displayName("naveen",()=>{
    displayName("Ganesh",()=>{
        displayName("Vinod");
    });
});


