let n;
function number(n){
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }

}
number(6);


function square(n){
    console.log(n*n);
}
square(6);

let a=7;
let b=8;
function max(){
    console.log(a>b?a:b);
}
max();

let x="Diya",y="Bari";
function string(){
    console.log(x+y);
}
string();


 let num =(a,b)=>{
console.log(a+b);
}
num(6,7);

let char="e";
x="Hello";
let str=(x,char)=>{
    if(x.includes(char)){
        return true;
    }
    else{
        return false;
    }
}
console.log(str(x, char));

let arg=3;
function fun(){
    console.log("Hello");
}


function callback(fun,arg){
    for(let i=1;i<arg;i++){
        fun();
    }
}
callback(fun,2);


function callback2(fun,max,value){
   return max(fun(value));
}
callback2(fun,max,3)







































