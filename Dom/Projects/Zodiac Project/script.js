const zodiac = document.getElementById("zodiac");
const body = document.querySelector("body");

const getColor = () => {
    switch (zodiac.value) {
        case "Cancer":
            body.style.backgroundColor = "#0e4287";
            break;

        case "Gemini":
            body.style.backgroundColor = "#7d3b09";
            break;

        case "Taurus":
            body.style.backgroundColor = "#b8ac0f";
            break;
        case "Aquarius":
            body.style.backgroundColor = "#cc3b0e";
            break;
        case "Libra":
            body.style.backgroundColor = "#bf1744";
            break;

        case "Pisces":
            body.style.backgroundColor = "#C8A2C8";
            break;

        case "Sagittarius":
            body.style.backgroundColor = "#f03c05";
            break;
        case "Aries":
            body.style.backgroundColor = "#f5a00c";
            break;


        case "Capricorn":
            body.style.backgroundColor = "#f21105";
            break;

        case "Capricorn":
            body.style.backgroundColor = "#16b5c7";
            break;

        case "Scorpio":
            body.style.backgroundColor = "#6b6578";
            break;
        case "Virgo":
            body.style.backgroundColor = "#3d2f59";
            break;





        default:
            break;
    }
}