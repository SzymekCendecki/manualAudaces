import { racesPlTxt, racesENTxt, humanPl, humanEn, halforc, orc, halfelv, elv, dwarf, gnome, halfling, goblin, troll, semigiant } from './races.js';

console.log(racesPlTxt, racesENTxt);


document.querySelector("#languageBtn").addEventListener("click", () =>{

    let langTxt = document.querySelector("#languageBtn").textContent;

    if(langTxt == "en"){
        document.querySelector("#languageBtn").innerHTML = "pl";
    }else{
        document.querySelector("#languageBtn").innerHTML = "en";
    }

})

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

    document.querySelector("#human").addEventListener("click", () =>{
        let langTxt = document.querySelector("#languageBtn").textContent;

        console.log(humanPl);

          
        switch (langTxt) {
            case 'en':
                document.querySelector("#mainContainer").innerHTML = humanPl;
                break;
    
            case 'pl':
                document.querySelector("#mainContainer").innerHTML = humanEn;
                break;
    
        }
    })

})



