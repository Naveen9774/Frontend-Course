let item=['apple','papaya','orange','tomato','potato','mango'];
console.log(item);
console.log(item.slice(1,3));

let arr=[1,2,3,4,5,6,7,8,];
console.log(arr);
//deleting the arr in the index of 2 and the- 
//value is 0 given  its means value not delete index value 3 is like only available and adding the 96 and 97 values.
arr.splice(2,0,96,97);
console.log(arr);
//deteting the index of 4th value.its means its delete the value of 3. 
arr.splice(4,1);
console.log(arr);
//adding the array in the index of 2 and removing that index value and 
//adding the 98 and orange both values
arr.splice(2,2,98,'orange');
console.log(arr);
