// --For Loop Diye Double Korar System--//
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const doubled = [];
// for (const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }
// console.log(doubled);

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function doubleit(num){
//     console.log('num now',num)
//     return num *2;
// } 

//   const result = numbers.map(doubleit);
//   console.log(result);

//   const nilamNumber = [ 2, 4, 6, 8, 10];
  
//   function  numdigun (dgun) {
//     return dgun + 10;
//   }

//   const results = nilamNumber.map(numdigun);
//   console.log(results);
//  Evabeo shortcut e kora jay 
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const doubleTypeThree = n => n + 10;
  const outputThree = numbers.map(doubleTypeThree);
  console.log(outputThree);
// Aro Shortcut Version
  const outputFour = numbers.map(n => n - 10);
  console.log(outputFour);
