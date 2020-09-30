import { racesPlTxt, human, halforc, orc, halfelv, elv, dwarf, gnome, halfling, goblin, troll, semigiant } from './races.js';

//let clickOption = what => {
//    console.log(what);
//}  

document.querySelector("#races").addEventListener("click", ()=>{

    document.querySelector("#mainContainer").innerHTML = "";
    
    for(let i = 0; i<Object.keys(racesPlTxt).length; i++){
        const newP = document.createElement("p");
        newP.id = Object.keys(racesPlTxt)[i];
        newP.innerHTML = Object.values(racesPlTxt)[i];
        document.querySelector('#mainContainer').appendChild(newP);
    }
     
    document.querySelector("#human").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = human;
    })

    document.querySelector("#halforc").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = halforc;
    })

    document.querySelector("#orc").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = orc;
    })

    document.querySelector("#halfelv").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = halfelv;
    })

    document.querySelector("#elv").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = elv;
    })

    document.querySelector("#dwarf").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = dwarf;
    })

    document.querySelector("#gnome").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = gnome;
    })

    document.querySelector("#halfling").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = halfling;
    })

    document.querySelector("#goblin").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = goblin;
    })

    document.querySelector("#troll").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = troll;
    })

    document.querySelector("#semigiant").addEventListener("click", () =>{
        document.querySelector("#mainContainer").innerHTML = semigiant;
    })

})