// function outer(){
//     let a=6;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let x=outer();
// x();


// function counter() {
//     let count = 0;
  
//     return {
//       increment: function() {
//         count++;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   }
  
//   const counterInstance = counter();
//   counterInstance.increment();
//   counterInstance.increment();
//   console.log(counterInstance.getCount()); // Output: 2


// const funcs = [];

// for (let i = 0; i < 5; i++) {
//   funcs.push((function(index) {
//     return function() {
//       console.log(index);
//     };
//   })(i));
// }

// funcs[0](); // Output: 0
// funcs[1](); // Output: 1
// funcs[2](); // Output: 2



