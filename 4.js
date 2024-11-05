let a=6;
if(a>0){
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
}
else{
    console.log("a is 0");
}


let b=7;
let c=5;
if(a>b){
    if(a>c){
        console.log(a+" is greater")
    }
    else{
       console.log(c+" is the greater")
    }
}
else{
    if(b>c){
        console.log(b+" is greater");
    }
    else{
        console.log(c+" is greater")
    }
}
function week(daynum){
    let dayname;
    switch(daynum){
        case 1:
            dayname="Monday";
            break;
        
        case 2:
            dayname="Tuesday";
            break;
        
        case 3:
            dayname="Wednesday";
            break;
        
        case 4:
            dayname="Thursday";
            break;
        
        case 5:
            dayname="Friday";
            break;
        
        case 6:
            dayname="Saturaday";
            break;
        
        default:
            dayname="Sunday";
            break;
        
    }
   console.log(dayname);
}
week(6);
week(8);

let g="D";
switch(g){
    case "A":
        console.log(90);
        break;
        case "B":
        console.log(80);
        break;
        case "C":
        console.log(70);
        break;
        case "D":
        console.log(60);
        break;
        case "E":
        console.log(50);
        break;
        default:
            console.log("Failed");
            break;
}


let z=6;

console.log(z%2==0?"It is a even number":"It is an odd number");
z=7;
console.log(z%2==0?"It is a even number":"It is an odd number");

let year=2024;
if(year%100!=0&&year%4==0||year%400==0){
    console.log(year+" is a leap year");
}
else{
    console.log(year+" is not a leap year");
}