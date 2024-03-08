// let pen = 15;       // yha ham simple variable lay rahy thy, lakin jab hamny conditions bnai to hamy ak promt ma pochna hoga ka ham knsa pen cahty hain neechy dekhy;

let pen = Number(prompt("Put Your Budget Here"));   //promt bh alert ki trha hi kam karta ha bus ismy ham conditions ko sai sa use kar skty hian, or yah asy samjh lay ka 'modal' ki trha kam karta ha taqreeban.

// console.log(pen);

//jab bh hamy conditions lagani hti hain kisi bh chex ma to ham JS ki conditional statments ka use karty hain;

//agar apky pas 2 yah 3 conditions hain to ap simple 'if, else, else if ' use karty hain agar bht zyada conditions hain to ham simply
// 'Switch Case ' use karty hain


 // yha '=' equal to, '==' campare karo, '===' equal karo campare karo or type bh check karo. sab sa achi approach '===' wali ha.


// if(pen === 15){              

//     console.log("This is the pen of skill");

// }else if(pen === 20){
//     console.log("This is the pen of Dollor");
// }else{
//     console.log("This pen is Random");
// }

//   -------------------------------------------------------------------

switch(pen){
    case 35:
        console.log("the color of pen is red");
        break;

        case 40:
            console.log("the color of pen is blue");
            break;

            case 50:
                console.log(" the color of pen is yellow");
                break;

                default :
                console.log(" The color of Pen is Random");
                break;

}