/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _races = __webpack_require__(2);

console.log(_races.racesPlTxt, _races.racesENTxt);

document.querySelector("#races").addEventListener("click", function () {
    console.log("działa");

    document.querySelector("#mainContainer").innerHTML = "";

    var langTxt = document.querySelector("#languageBtn").textContent;

    switch (langTxt) {
        case 'en':

            for (var i = 0; i < Object.keys(_races.racesPlTxt).length; i++) {
                var newP = document.createElement("p");
                newP.id = Object.keys(_races.racesPlTxt)[i];
                newP.innerHTML = Object.values(_races.racesPlTxt)[i];
                document.querySelector('#mainContainer').appendChild(newP);
            }

            break;

        case 'pl':

            for (var _i = 0; _i < Object.keys(_races.racesENTxt).length; _i++) {
                var _newP = document.createElement("p");
                _newP.id = Object.keys(_races.racesENTxt)[_i];
                _newP.innerHTML = Object.values(_races.racesENTxt)[_i];
                document.querySelector('#mainContainer').appendChild(_newP);
            }

            break;

    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var racesPlTxt = exports.racesPlTxt = {
    "human": "człowiek",
    "halforc": "półork",
    "orc": "ork",
    "halfelv": "półelf",
    "elv": "elf",
    "dwarf": "krasnolud",
    "gnome": "gnom",
    "halfling": "niziołek",
    "goblin": "goblin",
    "troll": "trol",
    "semigiant": "półolbrzym"
};

var racesENTxt = exports.racesENTxt = {
    "human": "human",
    "halforc": "halforc",
    "orc": "orc",
    "halfelv": "halfelv",
    "elv": "elv",
    "dwarf": "dwarf",
    "gnome": "gmome",
    "halfling": "halfling",
    "goblin": "goblin",
    "troll": "troll",
    "semigiant": "semigiant"
};

var human = exports.human = {
    "human": "Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg. Wiek: do 100 lat. Profesja: każda. Modyfikatory rasowe: brak."
};

var halfOrc = exports.halfOrc = {
    "halfOrc": "Rasa ta posiada wymieszane cehy ludzi oraz orków. Są silniejsze i wytrzymasze niż przeciętny człowiek. Niestety od człowiek są mniej inteligentne i mniej charyzmatyczne. Wielu półorków stanowi ochronę karawan. Podstawowe cechy: wzrost: 170 - 220cm, waga: 50 - 140kg. Wiek: do 110 lat. Preferowana profesja: wojownik. Modyfikatory: siła +3, wytrzymałość +3, inteligencja -3, charyzma -3."
};

var orc = exports.orc = {
    "orc": "Orkowie to koczownicy wojownicy. Z powodu ich ciągłego przemieszczania, niewiele wiadomo o ich zwyczajach. Wiadomo, iż tolerują jedynie magię szamanów własnych klanów. Są nieufni w handlu. Stałe orcze osady są nieliczne, usytuowane na obrzeżach cywilizowanych krain. Podstawowe cechy: wzrost: 170 - 240cm, waga: 80 - 180kg. Wiek: do 120 lat. Preferowana profesja: wojownik. Modyfikatory: siła +5, wytrzymałość +5, inteligencja -5, charyzma -5."
};

var halfElv = exports.halfElv = {
    "halfElv": "Podobnie ja półorki, półelfy powstały z dwóch różnych ras. Żyją dłużej niż przeciętny człowiek. Nie mają także taich zdolności do magii jak elfy. Podstawowe cechy: wzrost: 165 - 210cm, waga: 40 - 100kg. Wiek: do 350 lat. Preferowana profesja: skłonności do bycia czarodziejem. Modyfikatory: siła -3, wytrzymałość -3, inteligencja +3, charyzma +3."
};

var elv = exports.elv = {
    "elv": "Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg. Wiek: do 1500 lat. Preferowana profesja: czarodziej. Modyfikatory: siła -5, wytrzymałość -5, inteligencja +5, charyzma +5."
};

var dwarf = exports.dwarf = {
    "dwarf": "Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg. Wiek: do 500 lat. Preferowana profesja: wojownik. Modyfikatory: siła +4, wytrzymałość +4, inteligencja -2, charyzma -3."
};

var gnome = exports.gnome = {
    "gnome": "Gnomy to mistrzowie w tworzeniu przedziwnych urządzeń. Często przy ich tworzeniu korzystają z magii. Podstawowe cechy: wzrost: 100 - 145cm, waga: 50 - 80kg. Wiek: do 350 lat. Preferowana profesja: czarodziej. Modyfikatory: siła -2, wytrzymałość -2, zręczność +3, inteligencja +3."
};

var halfling = exports.halfling = {
    "halfling": "Nizołki to przeciwieństwo krasnoludów. Pokojowo nastawiona rasa, zajmująca się rolnictwem. Słyną z wytwarzania najlepszego ziela do fajek, oraz niesamowitej zręczności. Podstawowe cechy: wzrost: 105 - 150cm, waga: 60 - 100kg. Wiek: do 250 lat. Preferowana profesja: złoczyńca. Modyfikatory: siła -3, zręczność +6."
};

var goblin = exports.goblin = {
    "goblin": "Chyba najbardziej znienawidzona rasa na świecie. Mnożą się szybciej niż szczury w kanałach. Nie znają innego życia niż wojna i złodziejstwo. Nikt nie wie ile, dokładnie jest goblinich klanów. Główne z nich to klan: Pumy, Krokodyla, Węża, Pająka, Żaby oraz Skorpiona. Co 50 lat wybucha 5-cio letnia wojna pomiędzy głównymi klanami. Klan, który wygra obejmuje panowanie na kolejne 50 lat, a wódz zostaję kimś w rodzaju ojca chrzestnego goblinów. W trakcie tej wojny gobliny nie atakują innych krain. Organizacja każdego klanu goblinów to połączenie czegoś na kształt mafii oraz podziału na kasty. Podstawowe cechy: wzrost: 80 - 120cm, waga: 50 - 80kg. Wiek: do 40 lat. Preferowana profesja: złoczyńca lub wojownik. Modyfikatory: siła 2, wytrzymałość -2, zręczność +4, charyzma -4."
};

var troll = exports.troll = {
    "troll": "Półdzikie plemiona zamieszkują bagna oraz wrzosowiska. Podstawowe cechy: wzrost: 220 - 260cm, waga: 150 - 200kg. Wiek: do 150 lat. Preferowana profesja: wojownik lub czarodziej. Modyfikatory: siła 2, inteligencja -2, charyzma -2."
};

var semiGiant = exports.semiGiant = {
    "semiGiant": "Pół dzika rasa. Legendy głoszą, że powstała z ludzi i olbrzymów. Ich osady najczęściej można znajdują się wśród wysokich wzgórz, pokrytych wrzosowisami. Podstawowe cechy: wzrost: 260 - 320cm, waga: 210 - 300kg. Wiek: do 200 lat. Preferowana profesja: wojownik. Modyfikatory: siła +7, wytrzymałość +7, zręczność: -5, inteligencja -3."
};

/***/ })
/******/ ]);