// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`আমার নাম ${this.name}, আমার বয়স ${this.age} বছর।`);
//     }
//   }
  
//   // Rahim নামের একজন মানুষ তৈরি করা হচ্ছে
//   const person1 = new Person("Rahim", 25);
//   person1.greet(); // Output: আমার নাম Rahim, আমার বয়স 25 বছর।

  class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    great() {
        console.log (`My Name Is ${this.name}, My age is ${this.age}`);
    }
  }
  const person2 = new Person('Shahadat', 25);
  person2.great();
 
  
