//$(object) or $("<selector>")
// CSS Selelctor
// Tag name
// id 
// class
// pseudo class

$(document).ready(function(){
    console.log("Dom REady");
//    $("input[type='submit']").click(function(){
//        alert("button click!");
//    }); 
$("#submitBtn").click(function(){
    alert("button click!");
    const firstName=$("#firstName").val();
    if(firstName==undefined || firstName.length==0){
        alert("Please enter value for first name");
    }else{
        alert("Welcome "+firstName);
    }
    
});


});


// const firstName=$("#firstName").value;
//     console.log("firstName "+firstName);
//     if(firstName.length==0){
//         alert("Must have enter first name");
//     }else{
//         alert("Welcome "+firstName);
//     }

// if(firstName!=undefined){
    //     console.log("firstName "+firstName);
    //     if(firstName.value!=undefined){
    //         alert("Welcome "+firstName.value);
    //     }
    //     else{
    //         alert("Please enter value for first name");
    //     }
    // }else{
    //     alert("firstName is "+firstName);
    // }