let arr=[1,2,3,4,5];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4])

arr.push[6];
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(6);
console.log(arr);

let double;
 double=arr.map(num => num*2);
console.log(double);

let even;
even=arr.filter(function(num){
return num%2===0});
console.log(even);

let arr2 = [1, 2, 3, 4, 5]; // Example array, replace with your actual array

const sum = arr2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
},0);

console.log(sum); // This will print the sum of the array elements
let sum2=0;
function a(){
    for(let i=0;i<arr.length;i++){
        sum2=sum2+arr[i];
    }
    return sum;
}
console.log(sum);



for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


arr.forEach(arr=>{
    console.log(arr);
})


let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);
console.log(matrix[0][2]);