//Inheritance
class Parent{
    work(){
        console.log("Farmer");
    }
    eat(){
        console.log("Eats Veg");

    }
}

class Child extends Parent{
    work(){
      
        console.log("Software Engineer");
    }
    
}

let c=new Child();
c.work();
c.eat();




//Super();
class Parent1{
    constructor(){
        

        console.log("This is parent constructor");

    }
    work(){
        console.log("Farmer");
    }
    eat(){
        console.log("Eats Veg");

    }
}

class Child1 extends Parent1{
    constructor(cname){
        super(cname);
        this.cname=cname;
        console.log("This is child constructor");

    }
    work(){
      
        console.log("Software Engineer");
    }
    
}
console.log("  ");
console.log("  ");
let r=new Child1("Naveen");
console.log("Child name : ",r.cname);