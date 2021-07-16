const counter=(function(){
    let v_counter=0;
    
    function changeValueBy(value){
        v_counter=v_counter+value;
    }

    return{
        increment:function(){ 
            changeValueBy(1); 
            // console.log(v_counter);
        },
        decrement:function(){ 
            changeValueBy(-1); 
            // console.log(v_counter);
        },
        value:function(){return v_counter;}
    };
})();
// const result=counter();
// console.log(result);

function onClick(event){
    const id=event.target.id;
    switch(id){
        case "b1":
            counter.increment();
            break;
        case "b2":
            counter.decrement();
            break;
    }
    const result=document.getElementById("result");
    result.innerHTML="<h5>"+counter.value()+"</h5>";
}