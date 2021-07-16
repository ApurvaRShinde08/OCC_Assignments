// let counter=0;

// function incrCounter(){
//     counter=counter+1;
//     const result_01=document.getElementById("result_01");
//     result_01.innerHTML="<h1>"+counter+"</h1>";
// }

// let counter1=0;
// function incrCounter1(){
//     counter1=counter1+1;
//     const result_01=document.getElementById("result_01");
//     result_01.innerHTML="<h1>"+counter1+"</h1>";
// }

// let counter2=0;
// function incrCounter2(){
//     counter2=counter2+1;
//     const result_02=document.getElementById("result_02");
//     result_02.innerHTML="<h1>"+counter2+"</h1>";
// }


// let counter3=0;
// function incrCounter3(){
//     counter3=counter3+1;
//     const result_03=document.getElementById("result_03");
//     result_03.innerHTML="<h1>"+counter3+"</h1>";
// }

// let counter4=0;
// function incrCounter4(){
//     counter4=counter4+1;
//     const result_04=document.getElementById("result_04");
//     result_04.innerHTML="<h1>"+counter4+"</h1>";
// }



// let counter=[0,0,0,0];

// function incrCounter(event){
//     const id=event.target.id;
//     console.log(id);
//     const rid=id.slice(-2);
//     console.log(rid);
//     console.log("result_"+rid);
//     const result=document.getElementById("result_"+rid);
//     switch(id){
//        case "b_01":
//             counter[0]=counter[0]+1;                
//             result.innerHTML="<h1>"+counter[0]+"</h1>";
//            break;
//         case "b_02":
//             counter[1]=counter[1]+1;                
//             result.innerHTML="<h1>"+counter[1]+"</h1>";
//             break;
//         case "b_03":
//             counter[2]=counter[2]+1;                
//             result.innerHTML="<h1>"+counter[2]+"</h1>";
//             break;
//         case "b_04":
//             counter[3]=counter[3]+1;                
//             result.innerHTML="<h1>"+counter[3]+"</h1>";
//             break;
//         }
    
     
// }

// #### using slice which will work fines for <10 values
// let counter=[0,0,0,0];
// counter[29]=0;
// console.log(counter);
// function incrCounter(event){
//     const id=event.target.id;
//     console.log(id);
//     const rid=id.slice(-1);
//     console.log(rid);
//     console.log("result_"+rid);
    
//     console.log("split "+splitdata);   
//     const result=document.getElementById("result_"+rid);
//     counter[rid]=counter[rid]+1;                
//     result.innerHTML="<h1>"+counter[rid]+"</h1>";     
// }




// #### using split method of string
let counter=[0,0,0,0];
counter[29]=0;
counter[111]=0;
console.log(counter);
function incrCounter(event){
    const id=event.target.id;
    console.log(id);
    const rid=id.split("_")[1];
    console.log(rid);
    console.log("result_"+rid);
    
    const result=document.getElementById("result_"+rid);
    counter[rid]=counter[rid]+1;                
    result.innerHTML="<h1>"+counter[rid]+"</h1>";     
}