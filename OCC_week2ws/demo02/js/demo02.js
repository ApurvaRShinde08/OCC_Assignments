// As per user choice the background-color of the page should change
//Part 1: changing backgrond-color dynamically
//Document=>DOM=>Javascript 
//document object has predefined function like getElementById()
const div1=document.getElementById("div1");
const select=document.getElementById('colors');

//Part 2: On User interaction calling a function
function onClick(){
    const  color=select.options[select.selectedIndex].value;
    // alert("you selected: "+color);
    div1.style.backgroundColor=color;
}
