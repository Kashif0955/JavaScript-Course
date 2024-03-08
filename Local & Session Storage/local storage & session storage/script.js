//session storage and local storage ma difference bus itna haka jab ham page reload karty hian to session storage sa data hat jata ha but local sa nh 
//and second difference yah haka session ma ham agar wohi page dsri tab ma open kary to expire ho jaty hain session jabky local ma asa nh ha.

//sab sa phly ham nh yha id's ko select kia ha
const input = document.getElementById("myInput");
const addbtn = document.getElementById("add");
const deletebtn = document.getElementById("delete");

// const btnClick = () => {
//     // alert("clicked");
//     sessionStorage.setItem("key1", input.value);   //session storage ko use karny ka liya ham 2 parametre pass karny hoty hian ak "key" or second "value".

// };
// addbtn.addEventListener("click", btnClick);     
// // console.log(sessionStorage.getItem("key1"));

// deletebtn.addEventListener("click",()=>{
// sessionStorage.removeItem("key1");
// })

// if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1")); //ygha many condition laga kar yah kha haka agar session ma key1 ki value ha tabli alert kar ka dekhao warna nh q k yah har bar wasy alert kar ka dekahata reload par.

// }
// ========== local storage start ==============

//session or local ko likhty blkl ak hi jasy hian:


const btn = ()=>{
    localStorage.setItem("key2",input.value);
    }
addbtn.addEventListener("click",btn);



deletebtn.addEventListener("click", ()=>{
localStorage.removeItem("key2");
});

if(localStorage.getItem("key2")){
    alert(localStorage.getItem("key2"));
}

