const nav = document.createElement("nav");

const languageBtn = document.querySelector("button");
languageBtn.innerHTML = "en";

const racesBtn = document.querySelector("button");
racesBtn.innerHTML = "rasy";

const weaponBtn = document.querySelector("button");
weaponBtn.innerHTML = "broń";

const magicBtn = document.querySelector("button");
magicBtn.innerHTML = "magia";

const talesBtn = document.querySelector("button");
talesBtn.innerHTML = "legendy";

document.querySelector("body").appendChild(nav);
document.querySelector("nav").appendChild(languageBtn);
document.querySelector("nav").appendChild(racesBtn);
document.querySelector("nav").appendChild(weaponBtn);
document.querySelector("nav").appendChild(magicBtn);
document.querySelector("nav").appendChild(talesBtn);

export const btnsPL = {
    "languageBtn":"en",
    "races":"rasy",
    "weapon":"broń",
    "magic":"magia",
    "tales":"legendy"
}

export const btnsEN = {
    "languageBtn":"pl",
    "races":"races",
    "weapon":"weapon",
    "magic":"magic",
    "tales":"tales"
}