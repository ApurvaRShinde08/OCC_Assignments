//Variable
//What value we will store?:Data
//String or Number or Boolean
//JS is not type safe
//At runtime as per the value stored in variable 
//data type of variable is decided
//a="1" => string
//a=1 =>whole number integer
//a=1.0=>floating value => float
//a=true=> boolean 
//What operations we will perform?
//Scope of Variable
//ES6-> let,const 
//for(initialization;condtion;inc/decr)
//variable can have undefined/null
//undefined-> variable is not declared
// #### var example
// console.log("Before for loop i= "+i);
// for(var i=0;i<11;i++){
//     console.log("i= "+i);
// }

// console.log("After for loop i= "+i);
// #### let example: scope function scope block-Local -> let
// // console.log("Before for loop i= "+i);
// for(let i=0;i<11;i++){
//     console.log("i= "+i);
// }
// // console.log("After for loop i= "+i);

// #### const
// //console.log("Before for loop i= "+i);
// //for(const i=0;i<11;i++){
//  //   console.log("i= "+i);
// //}


// const i=10;
// console.log("After i= "+i);

// // #### 2.Operators

// let num1=120;
// let num2="120";

// // === : L.H.S Value must be equal to R.H.s Value
// if(num1==num2){
//     console.log("num1==num2 True");
// }else{
//     console.log("num1==num2 False");
// }
// // === : L.H.S Value as well as Datatype must be equal to R.H.s Value as well as Datatype

// if(num1===num2){
//     console.log("num1===num2 True");
// }else{
//     console.log("num1===num2 False");
// }


// #### 3. Looping & Conditional construct

let color=['red','blue','green','black','white','teal','navy'];
//Old way using traditional for loop
console.log("Old way using traditional for loop");
for(let i=0;i<color.length;i++){
    console.log(color[i]);
}

console.log("For each element at index i");
for(let i in color){
    console.log(color[i]);
}

// let myColor="teal";

let myColor="cyan";

switch(myColor){

    case 'red':
        console.log("You choosed : red");
        break;
        case 'green':
            console.log("You choosed : red");
        break;
        case 'blue':
            console.log("You choosed : green");
        break;
        case 'black':
            console.log("You choosed : blue");
        break;
        case 'white':
            console.log("You choosed : white");
        break;
        case 'navy':
            console.log("You choosed : navy");
        break;
        case 'teal':
            console.log("You choosed : teal");
        break;

        default:
            console.log("Color not available!");
            break;

}
console.log("while");
let i=0;
while(i<11){
    console.log("i = "+i);
    i++;
}
console.log("Do while");
do{
    console.log("i = "+i);
    i++;
}while(i<11);
//  Ternary (condition)?true:false;
let msg=(i>11)?"i is greater than 11":"i is less than 11";
console.log("msg "+msg);
