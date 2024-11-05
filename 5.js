for(let i=1;i<=10;i++){
    console.log(i);
}


let x=5;
for(let i=1;i<=10;i++){
    console.log(i*x);
}


let sum=0;
let i=1;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log(sum);


let j=10;
while(j>=1){
    j--;
    console.log(j);
}


let d=1;
do{
    console.log(d);
    d++;
}
while(d<=10)







for (let b = 0; b < 6; b++) {
    let line = "";
    for (let c = 0; c <= b; c++) {
        line += "*";
    }
    console.log(line);
}



for(let i=1;i<=10;i++){
    if(i==5)
        continue;
    console.log(i);
}


for(let i=1;i<=10;i++){
    if(i==7)
        break;
    console.log(i);
}




let result = 1;
    let f = 5;
    do {
        result *= f;
        f--;
    } while (f > 0);
    console.log(result);


   