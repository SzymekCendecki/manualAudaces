import { racesPlTxt, racesENTxt, human, halforc, orc, halfelv, elv, dwarf, gnome, halfling, goblin, troll, semigiant } from './races.js';

console.log(racesPlTxt, racesENTxt);

document.querySelector("#races").addEventListener("click", ()=>{
    console.log("działa");

    document.querySelector("#mainContainer").innerHTML = "";

    let langTxt = document.querySelector("#languageBtn").textContent;
   
    switch (langTxt) {
        case 'en':

            for(let i = 0; i<Object.keys(racesPlTxt).length; i++){
                const newP = document.createElement("p");
                newP.id = Object.keys(racesPlTxt)[i];
                newP.innerHTML = Object.values(racesPlTxt)[i];
                document.querySelector('#mainContainer').appendChild(newP);
            }
     
        
  
        break;

        case 'pl':

            for(let i = 0; i<Object.keys(racesENTxt).length; i++){
                const newP = document.createElement("p");
                newP.id = Object.keys(racesENTxt)[i];
                newP.innerHTML = Object.values(racesENTxt)[i];
                document.querySelector('#mainContainer').appendChild(newP);
            }
   
        break;

    }

})
