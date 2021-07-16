const Person=require('./person');
const Teacher=require('./teacher');

console.log("Person object ");
const p1=new Person("Amit","Jha");
console.log(p1.display());

console.log("Teacher object ");
const p2=new Teacher("Amit","Mahadik","Java");
console.log(p2.display());
