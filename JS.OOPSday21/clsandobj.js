// class MarutiCar{

//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }


//Baleno  accessing MarutiCar
//when you create object ,it will access all the property of class

//object creation
// let Baleno=new MarutiCar();

// let Alto=new MarutiCar();
// console.log(Alto);

//constructor is a special method which will be present inside a class
//In js,constructor name as same as classname is not present in js,hence it is used as constructor only

//example:
class maruthicar{
    constructor(brand){
        console.log("This is a constructor");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let Baleno=new maruthicar("baleno");//because it is parametrized constructor
let Atlo=new maruthicar();
console.log(baleno);
console.log(Atlo);

let student={
    sid:101,
    marks:94,
    printMarks(){
        console.log("marks =",this.marks);
    }
}

console.log("  ");
console.log("  ");
console.log("  ");
console.log(student);


console.log("  ");
console.log("  ");
console.log("  ");

class Tata {
    constructor(brand) {
        this.brand=brand;
        console.log("Inside Construtor in a class Tata")
    }
    start(){
        console.log("Car Started");
    }
    stop(){
        console.log("Car Stopped");
    }

}

let t = new Tata("Jagvar");
t.start();
t.stop();
console.log("Car name is ",t.brand);

console.log("  ");
console.log("  ");
console.log("  ");