let book={
    title:"C++",
    author:"E-balaguswamy",
    year:2024
}
console.log(book);


console.log(book.title);
console.log(book.author);
console.log(book.year);


let question=function(){
return book.title;
}
console.log(question());



function question2(year){
    x=book.year+1;
    console.log(x);
}
question2(book.year);


let book2={
    title:"C++",
    author:"E-balaguswamy",
    year:2024,
     number:[{what:1
        ,section:2},
    {what:1,section:2}]
}
console.log(book2);


book2.number.forEach(a=>{
    console.log(a.section);
})

book2.title=function(){
    return this.title;
}
console.log( book.title);

    let diya=function(){
        console.log("Hello");
    };
    diya();


    let a;
    let diya2=(a)=>{
        console.log(a);
    }
    diya2(7);

