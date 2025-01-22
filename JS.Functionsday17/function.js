
//let a=10;
//let b=20;
//function sum(a,b){
   // console.log(a+b);
//}

//sum =(a,b)=>{
  //  console.log(a+b);
//}


//let sum=(a,b)=>{
 //   return a+b;
//}
//console.log("The sum of number is :",sum(10,30));


let count=0;
let vowel=(str)=>{
    let str1=str.toLowerCase();
    for(let ch of str1){
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u');
        count++;
    }
    return count;
}
console.log("The vowel",count,"naveen");



let arr=[1,2,3,4,5];
arr.forEach((ar)=>{
    console.log(arr);
})



let arr1=arr.filter((val)=>{
    return val%2==1;
})
console.log(arr1);