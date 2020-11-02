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

var _weapon = __webpack_require__(3);

document.querySelector("#races").addEventListener("click", function () {

    document.querySelector("#mainContainer").innerHTML = "";

    for (var i = 0; i < Object.keys(_races.racesPlTxt).length; i++) {
        var newP = document.createElement("p");
        newP.id = Object.keys(_races.racesPlTxt)[i];
        newP.innerHTML = Object.values(_races.racesPlTxt)[i];
        document.querySelector('#mainContainer').appendChild(newP);
    }

    var _loop = function _loop(_i) {
        document.querySelector("#" + Object.keys(_races.racesPlTxt)[_i]).addEventListener("click", function () {
            document.querySelector("#mainContainer").innerHTML = _races.racesPL[_i];
        });
    };

    for (var _i = 0; _i < Object.keys(_races.racesPlTxt).length; _i++) {
        _loop(_i);
    }
});

document.querySelector("#weapon").addEventListener("click", function () {
    document.querySelector("#mainContainer").innerHTML = "";

    for (var i = 0; i < Object.keys(_weapon.weaponPl).length; i++) {
        var newP = document.createElement("p");
        newP.id = Object.keys(_weapon.weaponPl)[i];
        newP.innerHTML = Object.values(_weapon.weaponPl)[i];
        document.querySelector('#mainContainer').appendChild(newP);
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
    "gnome": "gnome",
    "halfling": "halfling",
    "goblin": "goblin",
    "troll": "troll",
    "semigiant": "semigiant"
};

var humanPL = "Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg. Wiek: do 100 lat. Profesja: każda. Modyfikatory rasowe: brak.";

var halforcPL = "Rasa ta posiada wymieszane cehy ludzi oraz orków. Są silniejsze i wytrzymasze niż przeciętny człowiek. Niestety od człowiek są mniej inteligentne i mniej charyzmatyczne. Wielu półorków stanowi ochronę karawan. Podstawowe cechy: wzrost: 170 - 220cm, waga: 50 - 140kg. Wiek: do 110 lat. Preferowana profesja: wojownik. Modyfikatory: siła +3, wytrzymałość +3, inteligencja -3, charyzma -3.";

var orcPL = "Orkowie to koczowniczy wojownicy. Z powodu ich ciągłego przemieszczania, niewiele wiadomo o ich zwyczajach. Wiadomo, iż tolerują jedynie magię szamanów własnych klanów. Są nieufni w handlu. Stałe orcze osady są nieliczne, usytuowane na obrzeżach cywilizowanych krain. Podstawowe cechy: wzrost: 170 - 240cm, waga: 80 - 180kg. Wiek: do 120 lat. Preferowana profesja: wojownik. Modyfikatory: siła +5, wytrzymałość +5, inteligencja -5, charyzma -5.";

var halfelvPL = "Podobnie ja półorki, półelfy powstały z dwóch różnych ras. Żyją dłużej niż przeciętny człowiek. Nie mają także taich zdolności do magii jak elfy. Podstawowe cechy: wzrost: 165 - 210cm, waga: 40 - 100kg. Wiek: do 350 lat. Preferowana profesja: skłonności do bycia czarodziejem. Modyfikatory: siła -3, wytrzymałość -3, inteligencja +3, charyzma +3.";

var elvPL = "Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg. Wiek: do 1500 lat. Preferowana profesja: czarodziej. Modyfikatory: siła -5, wytrzymałość -5, inteligencja +5, charyzma +5.";

var dwarfPL = "Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg. Wiek: do 500 lat. Preferowana profesja: wojownik. Modyfikatory: siła +4, wytrzymałość +4, inteligencja -2, charyzma -3.";

var gnomePL = "Gnomy to mistrzowie w tworzeniu przedziwnych urządzeń. Często przy ich tworzeniu korzystają z magii. Podstawowe cechy: wzrost: 100 - 145cm, waga: 50 - 80kg. Wiek: do 350 lat. Preferowana profesja: czarodziej. Modyfikatory: siła -2, wytrzymałość -2, zręczność +3, inteligencja +3.";

var halflingPL = "Nizołki to przeciwieństwo krasnoludów. Pokojowo nastawiona rasa, zajmująca się rolnictwem. Słyną z wytwarzania najlepszego ziela do fajek, oraz niesamowitej zręczności. Podstawowe cechy: wzrost: 105 - 150cm, waga: 60 - 100kg. Wiek: do 250 lat. Preferowana profesja: złoczyńca. Modyfikatory: siła -3, zręczność +6.";

var goblinPL = "Chyba najbardziej znienawidzona rasa na świecie. Mnożą się szybciej niż szczury w kanałach. Nie znają innego życia niż wojna i złodziejstwo. Nikt nie wie ile, dokładnie jest goblinich klanów. Główne z nich to klan: Pumy, Krokodyla, Węża, Pająka, Żaby oraz Skorpiona. Co 50 lat wybucha 5-cio letnia wojna pomiędzy głównymi klanami. Klan, który wygra obejmuje panowanie na kolejne 50 lat, a wódz zostaję kimś w rodzaju ojca chrzestnego goblinów. W trakcie tej wojny gobliny nie atakują innych krain. Organizacja każdego klanu goblinów to połączenie czegoś na kształt mafii oraz podziału na kasty. Podstawowe cechy: wzrost: 80 - 120cm, waga: 50 - 80kg. Wiek: do 40 lat. Preferowana profesja: złoczyńca lub wojownik. Modyfikatory: siła 2, wytrzymałość -2, zręczność +4, charyzma -4.";

var trollPL = "Półdzikie plemiona zamieszkują bagna oraz wrzosowiska. Podstawowe cechy: wzrost: 220 - 260cm, waga: 150 - 200kg. Wiek: do 150 lat. Preferowana profesja: wojownik lub czarodziej. Modyfikatory: siła 2, inteligencja -2, charyzma -2.";

var semigiantPL = "Pół dzika rasa. Legendy głoszą, że powstała z ludzi i olbrzymów. Ich osady najczęściej można znajdują się wśród wysokich wzgórz, pokrytych wrzosowisami. Podstawowe cechy: wzrost: 260 - 320cm, waga: 210 - 300kg. Wiek: do 200 lat. Preferowana profesja: wojownik. Modyfikatory: siła +7, wytrzymałość +7, zręczność: -5, inteligencja -3.";

var racesPL = exports.racesPL = [humanPL, halforcPL, orcPL, halfelvPL, elvPL, dwarfPL, gnomePL, halflingPL, goblinPL, trollPL, semigiantPL];

var humanEN = "Man is one of the most numerous races (second only to goblins). They are versatile and ubiquitous, therefore you can meet them on all continents, working in various professions. Basic features: height: 150 - 210 cm, weight: 40 - 120 kg. Age: up to 100 years. Profession: Any. Racial modifiers: none.";

var halforcEN = "This race has a mixed qualities of humans and orcs. They are stronger and more enduring than the average person. Unfortunately, they are less intelligent and less charismatic than humans. Many shelves protect the caravans. Basic features: height: 170 - 220 cm, weight: 50 - 140 kg. Age: up to 110 years. Preferred profession: warrior. Modifiers: strength +3, endurance +3, intelligence -3, charisma -3";

var orcEN = "Orcs are nomadic warriors. Due to their constant movement, little is known about their habits. It is known that they only tolerate the magic of the shamans of their own clans. They are wary of trading. Permanent orcish settlements are few, located on the outskirts of civilized lands. Basic features: height: 170 - 240 cm, weight: 80 - 180 kg. Age: up to 120 years. Preferred profession: warrior. Modifiers: strength +5, endurance +5, intelligence -5, charisma -5.";

var halfelvEN = "Similarly to the Half-orcs, the Half-Elves were made of two different races. They live longer than the average person. They also do not have the powers of magic as elves. Basic features: height: 165 - 210 cm, weight: 40 - 100 kg. Age: up to 350 years. Preferred profession: tendency to be a wizard. Modifiers: strength -3, endurance -3, intelligence +3, charisma +3.";

var elvEN = "Elves are very gifted wizards. Despite their enormous magical abilities, they are equally adept at using the bow. They are long-lived and are therefore mistakenly considered immortal. Basic features: height: 180 - 210 cm, weight: 40 - 90 kg. Age: up to 1500 years. Preferred profession: wizard. Modifiers: strength -5, endurance -5, intelligence +5, charisma +5.";

var dwarfEN = "Due to their specific approach to reality, they are seen as the roughest race in the world. However, they are excellent blacksmiths, miners and warriors. Very allergic to dwarven women, honor and their beards. Basic features: height: 100 - 145 cm, weight : 70-100 kg. Age: up to 500 years. Preferred profession: warrior. Modifiers: strength +4, endurance +4, intelligence -2, charisma -3.";

var gnomeEN = "Gnomes are masters of creating strange devices. They often use magic to create them. Basic features: height: 100 - 145 cm, weight: 50 - 80 kg. Age: up to 350 years. Preferred profession: wizard. Modifiers: strength - 2, stamina -2, dexterity +3, intelligence +3. ";

var halflingEN = "Halfling is the opposite of the Dwarves. A peaceful breed that deals with agriculture. They are famous for producing the best pipe herb and amazing dexterity. Basic features: height: 105 - 150 cm, weight: 60 - 100 kg. Age: up to 250 years. Preferred profession: villain. Modifiers: strength -3, dexterity +6. ";

var goblinEN = "Probably the most hated race in the world. They multiply faster than rats in the sewers. They know no other life than war and thievery. No one knows how many, exactly there are goblin clans. Spider, Frog and Scorpio Every 50 years a 5-year war breaks out between the main clans, the winning clan takes over another 50 years, and the chief becomes something like the godfather of the goblins. In this war, goblins do not attack other lands. The organization of each goblin clan is a combination of something like a mafia and caste division Basic features: height: 80 - 120 cm, weight: 50 - 80 kg. Age: up to 40 years. Preferred profession: villain or warrior. Modifiers: strength 2, endurance - 2, dexterity +4, charisma -4. ";

var trollEN = "Half-wild tribes inhabit swamps and moors. Basic features: height: 220 - 260 cm, weight: 150 - 200 kg. Age: up to 150 years. Preferred profession: warrior or wizard. Modifiers: strength 2, intelligence -2, charisma - 2. ";

var semigiantEN = "Half a wild race. Legends say that it was created from humans and giants. Their settlements are most often located among high hills, covered with heather. Basic features: height: 260 - 320 cm, weight: 210 - 300 kg. Age: up to 200 years. Preferred profession: warrior. Modifiers: strength +7, endurance +7, dexterity: -5, intelligence -3. ";

var racesEN = exports.racesEN = [humanEN, halforcEN, orcEN, halfelvEN, elvEN, dwarfEN, gnomeEN, halflingEN, goblinEN, trollEN, semigiantEN];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var weaponPl = exports.weaponPl = {
    "short": "krótka",
    "oneHand": "jednoręczna",
    "handAndHalf": "półtoraręczna",
    "twoHand": "dwuręczna",
    "distance": "dystansowa",
    "siege": "oblężnicza",
    "special": "specjalna",
    "magic": "magiczna"
};

var shortPl = "Broń krótka to wszystkie rodzaje noży, sztyletów, kozików, krótkich pałek, tasaków lub innych broni 'prowizorycznych', których długość nie przekracza 50 cm. Postać walcząca dwoma takimi broniami otrzymuje niewielkie kary do walki drugą bronią (jeżeli nie posiada umiejętności 'oburęczność').";

var oneHandPl = "Broń jednoręczna: miecze, topory, młoty. Jest podstawową bronią wszystkich profesji związanych z walką. Broń o długości 80 - 100 cm.";

var siegePl = "Machiny oblężnicze to wszelkiej maści kusze wałowe, balisty, katapulty, trebusze czy wieże oblężnicze. Do ich zbudowania oraz obsługi potrzebni są wykwalifikowani rzemieślnicy oraz specjalnie przeszkolona obsługa. Bez takiego sprzętu oraz osób nie sposób skutecznie prowadzić oblężenia oraz bronić murów. Mogą strzalać ogromnymi bełtami, kamiennymi kulami a czasem się zdarza, że truchłami padłych zwierząt.";

var weaponTypesPl = exports.weaponTypesPl = [shortPl, oneHandPl, siegePl];

/***/ })
/******/ ]);