//event listners in js

let heading = document.querySelector("h1");
let box = document.getElementById("box");
let btn = document.querySelector("button");
let body = document.querySelector("body");
let span = document.getElementsByTagName("span");

btn.addEventListener("click",function(){

    heading.style.backgroundColor = "#18658c";
    heading.style.color = "white";

    box.style.backgroundColor = "#c9690e";
       if(box.style.backgroundColor = "#c9690e"){
       
span.style.backgroundColor = "white";
       }else{
        span.style.backgroundColor = "red";
        span.style.color = "white";
       }
})

//yha tak ham ny simply dekha ka event listner ksy kam karta ha 

//ab ma cahta hoky jab koi usr right click kary to usy kuch dekhy jasy ham simple dekhty hain ka by default hamy right click karny par kuch dekhny ko milta ha like side bar kah skty hian but kych bh khair;

//  preventDefault(); -----> isy ham use karty hian ka jab ap cahty hain ka kisi bh jga ap click hony par koi event perform na karway example ap ny isy ab button par lagaya or button par apny ak event listner bh lagaya haka jis sa right click hony par hamy kych side ma dkhta ha but 
//phy apny preventDefault lagaya ka jab user right click kary to usy kuch event perform na ho, 
//isy ap pori site ma bh laga skty hian ka jis sa user agar right click kary apki site par to ak restriction lagi hoky usy kuch na mily

//isy use karny ka liya hamy function ma ak variable pss karna hta ha.

btn.addEventListener("contextmenu",function(e){
    e.preventDefault();

})

//ab ap cahty hain ka jab user kahi bh apki site par click kary right to usy wo menu yah side ma jo ata ha wo na aata dekhy to ap asy kary gay

addEventListener("contextmenu", function(e){
    e.preventDefault();

})      //ab apki site ma user kahi bh right click kary ga to usy kuch bh implement hota nh dekhy ga, 
        // iski help sa ap apni site ma asa samjh lay ka security laga rahy hia shyd

//        window objects

// window object darasal yah sab hain jo ham document.something likhty hain, ab document ho yah .ka bad sab kuch wo sab window ma hi aty hain to ham isy window objects kahty hain,
// window objects ko ham jasa ka document.getElementbyId ko ham kisi specific id yah element ko select karwany ka liya use karty hain
//just window ko use karny ka mtlab haka pori site ka jitny bh objects hain, jasy ka mnay uper example ma kia ha

//----------------------------------------------------------------*

// double click event in js
//is event ko use kar ka ham double click par apni site ka theme bh change karwa skty hian or phr sa single click par change karwa skty hian example dekhy;

addEventListener("dblclick",function(){
     body.style.backgroundColor = "#242d42";
}) // ab yha many pori body par bg color change karwaya ha, window object ki help sa manyh kisi bh object ko select nh kia ha many direct pori window par apply kia ha

// click
// ma cahta hoky jab user phr sa 1 click kary to wohi default color mily theme ka 

addEventListener("click",function(){
    body.style.backgroundColor = "white";

})
