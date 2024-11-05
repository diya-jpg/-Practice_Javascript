let n="Diya";
let age=19;
let sentence=`My name is ${n} .My age is ${age} years`;
console.log(sentence);


const multiLineString = `This is the first line.
This is the second line.
This is the third line.`;
console.log(multiLineString);



let arr=[11,12,13,14,15];
let[,,,fourth]=arr;
console.log(fourth);


const book = {
    title1: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
const { author } = book;
console.log(title1);  // Output: To Kill a Mockingbird
console.log(author); // Output: Harper Lee

let originalarr=[1,2,3];
let newarray=[...originalarr,4,5,6];
console.log(newarray);

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
