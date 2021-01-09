let tempo;
let bucaTalpa;
let bucaVolpe;
let isVolpe;
let contaVite = 3;
let vite = [document.getElementById("lf1"), document.getElementById("lf2"), document.getElementById("lf3")];
let talpe = [document.getElementById("talpa1"), document.getElementById("talpa2"), document.getElementById("talpa3"), document.getElementById("talpa4"), document.getElementById("talpa5"), document.getElementById("talpa6")];
let volpi = [document.getElementById("volpe1"), document.getElementById("volpe2"), document.getElementById("volpe3"), document.getElementById("volpe4"), document.getElementById("volpe5") ,document.getElementById("volpe6")];
document.getElementById("Button").onclick = async function(){
    console.log("START")
    document.getElementById("Points").innerHTML = 0;
    /*mostraVite*/
    livesReset();
    /*Ciclo rendering volpi e conigli*/
    
    while(contaVite > 0){

        isVolpe = Math.floor((Math.random() * (1 - 0 + 1)) + 0);
        bucaTalpa = Math.floor((Math.random() * (5 - 0 +1)) + 0); 
        tempo = Math.floor((Math.random() * (5 - 1 +1)) + 1);
        if(isVolpe == 0){
            bucaVolpe = Math.floor((Math.random() * (5 - 0 +1)) + 0);
            while(bucaTalpa == bucaVolpe) bucaVolpe = Math.floor((Math.random() * (5 - 0 +1)) + 0);
            talpe[bucaTalpa].hidden = false;
            volpi[bucaVolpe].hidden = false;
            await sleep(tempo*1000);
            hide();

        }else{
            talpe[bucaTalpa].hidden = false;
            await sleep(tempo*1000);
            hide();
        }
    }

    alert("Hai esaurito le vite, riprova!");
}

const sleep = (delay) => new Promise((resolve) =>setTimeout(resolve, delay));

const livesReset = () =>{
    vite.forEach(vita => {
        vita.hidden = false;
    });
}
const hide = () =>{
    talpe.forEach(talpa => {
        talpa.hidden = true;
    });

    volpi.forEach(volpe => {
        volpe.hidden = true;
    });
}

const addPoints = () =>{
    hide();
    let currentPoints = document.getElementById("Points").innerHTML * 1;
    document.getElementById("Points").innerHTML = currentPoints + 100;
}

const subPoints = () =>{
    hide();
    contaVite--;
    let currentPoints = document.getElementById("Points").innerHTML * 1;
    document.getElementById("Points").innerHTML = currentPoints - 100;
    vite[contaVite].hidden = true;
}