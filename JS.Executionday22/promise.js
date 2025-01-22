let promise=new Promise((resolve,reject)=>{
    console.log("This is a promise");
 

})

console.log(promise);

promise.then(()=>{
    console.log("In then function");
})
promise.catch(()=>{
    console.log("In catch function");
})