let str='javascript';
console.log(str);
console.log(str.length);

let str1=str.concat(' Technology');
console.log(str1);

console.log(str1.toLocaleUpperCase());
console.log(str1.toLocaleLowerCase());
console.log(str[9]);
console.log(str.charAt(4));

console.log(str +' is a frontend technology.');

let obj={
    item:'pen',
    price:10,

}
console.log('The price of ',obj.item ,'is',obj.price,'rupees.');
console.log(`The price of ${obj.item} is ${obj.price} rupees.` );//string interpolation

//slice 

let str2='Frontend Technologies';
console.log(str2);
console.log(str.slice(5,9));
console.log(str2.replace('r','d'));
console.log(str2.replaceAll('o','d'));