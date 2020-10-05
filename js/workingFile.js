//import { header } from './header.js';
//import { nav } from './nav.js':
 import { racesPlTxt, racesPL } from './races.js';

document.querySelector("#races").addEventListener("click", ()=>{

    document.querySelector("#mainContainer").innerHTML = "";
    
    for(let i = 0; i<Object.keys(racesPlTxt).length; i++){
        const newP = document.createElement("p");
        newP.id = Object.keys(racesPlTxt)[i];
        newP.innerHTML = Object.values(racesPlTxt)[i];
        document.querySelector('#mainContainer').appendChild(newP);
    }

    for (let i = 0; i < Object.keys(racesPlTxt).length; i++){
        document.querySelector("#" + Object.keys(racesPlTxt)[i]).addEventListener("click", () =>{
            document.querySelector("#mainContainer").innerHTML = racesPL[i];
        })
    }
     
})