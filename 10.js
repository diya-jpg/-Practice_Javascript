//Rest
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
   }
   
   console.log(sum(1, 2, 3)); 
   console.log(sum(4, 5, 6, 7));
   



function multiply(a,b=2){
    console.log(a*b);
}
multiply(3,4);

//Enchanced object literals

const n = "John";
const a = 30;
const person={
    n,
a,
greet (){
    console.log(`Hello,My name is ${n}.My age is ${a}`);
}
}
person.greet();


//Create a object with computed property names
const prop="Dynamic Property";
const object={
    [prop]:"This is the dynamic property"
}
console.log(object);



