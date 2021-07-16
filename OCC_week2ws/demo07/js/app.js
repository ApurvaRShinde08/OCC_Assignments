const app=(function(){
    console.log("Simple clousure");
})();

// (what you want to do for once )(call to the closure);
// function (i,j){return i+j}
let result=(function (i,j){return i+j})(10,20);
console.log(result);

result=(function (i,j){return i+j})("abcd"," pqr");
console.log(result);
