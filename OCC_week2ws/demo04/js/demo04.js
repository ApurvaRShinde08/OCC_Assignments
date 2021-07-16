//Part 1: using Object()
//new -> allocate dynamic memobry
//Object()
// let product=new Object();
// product.pid=1001;
// product.pname="Pepsi 500ML";
// product.price=30.0;
// product.display=function (){
//     return this.pid+" "+this.pname+" "+this.price;
// }

// console.log(product.pid);
// console.log(product.pname);
// console.log(product.price);
// console.log(product.display());

//document.getElementbyid()
// //Part 2: using constructor
// function Product(pid,pname,price){
//     this.pid=pid;
//     this.pname=pname;
//     this.price=price;
//     this.display=function (){
//         return this.pid+" "+this.pname+" "+this.price;
//     }
// }
// function Product(pname,price){
    
//     this.pname=pname;
//     this.price=price;
//     this.display=function (){
//         return this.pid+" "+this.pname+" "+this.price;
//     }
// }

/*
Below code is called as Anonymous function
function (){
    return this.pid+" "+this.pname+" "+this.price;
}
1. must be refered by some variable - called as function reference variable
2. you can call anonymous function using the function reference variable
3. short-hand method to acheive this behavior => 
Lambda or arrow functions
   this.display=()=>{
        return this.pid+" "+this.pname+" "+this.price;
    }


*/

//Part 3: using constructor
function Product(pid,pname,price){
    this.pid=pid;
    this.pname=pname;
    this.price=price;
    this.display=()=>{
        return this.pid+" "+this.pname+" "+this.price;
    }
}

// let product1=new Product(1001,"Pepsi",30.0);
// // console.log(product1.pid);
// // console.log(product1.pname);
// // console.log(product1.price);
// // console.log(product1.display());

// // function OrderItem(){

// // }

// const orderItem={
//     product:product1,
//     qauntity:1,
//     display:function(){
//         return this.product.display()+" "+this.qauntity;
//     }
// }
// console.log("order item");
// console.log(orderItem.display());
// console.log(orderItem.product.display());
// //you are accessing the html element
// const pnameInput=document.getElementById("pname");
// pnameInput.value=product1.pname;
