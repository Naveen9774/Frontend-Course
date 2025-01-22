let arr=[1,2,3,4];
console.log(arr);
console.log(arr.length);

let student={
    study(){
        console.log("student will study");
    }
}

console.log(student);
console.log(typeof student);


let abc={
    sid:1,
    age:22,
    marks:93,

}


abc.___proto___=student;