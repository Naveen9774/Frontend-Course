function displayName(dname){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dname);
            resolve("completed");
        },4000);
    })
}

displayName("Sacin").then((res)=>{
    return displayName("vinod");
}).then((res)=>{
    return displayName("akash");
}).then((res)=>{
   console.log(res);
})