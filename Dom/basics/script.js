
//dom manupolation

//4 pillars of dom 
//selection of an element
//changing html
//put styling or chaging styling 
//event listners

//selection of an element

//let a = document.querySelector("h1");     //is way sa ham kisi bh html element ko js ma select karty hain ;
//console.log(a);

// --------------------------------------------------------------------------------*

//changing html using dom

// let a = document.querySelector("h1")
// a.innerHTML = "this is the second pillar of dom";    //first method


// let a = document.querySelector("h1").innerHTML='this is the second pillar of dom';  // second method

//yah do methods hain jo apko easy lagy wo use kary;

//-----------------------------------------------------------------------------------*


//changing styling in dom

// let a = document.querySelector("h1")        //first method
// a.style.color="white";
// a.style.backgroundColor="blue"

//-------------------------------------------------------------------------------------------*

//changing html and styling

// let a = document.querySelector("h1")
// a.innerHTML= "this is kashif awan"
// a.style.color = "white"
// a.style.backgroundColor ="red"



//-----------------------------------------------------------------------------------------------*

//event listner in dom 
  
// let a = document.querySelector("h1")                              //this is the 4th pillar of dom 

// a.addEventListener("click", function(){

//     a.style.color  = "white"
//     a.style.backgroundColor = " blue"


// })

//example of event listner in dom

let btn = document.querySelector("button")
let bulb = document.querySelector(".bulb")

var flag = 0; 

btn.addEventListener("click", function(){

    if( flag == 0){   
    
        bulb.style.backgroundColor = "yellow";
        flag = 1;

}else{
    bulb.style.backgroundColor = "gray";

}

})
