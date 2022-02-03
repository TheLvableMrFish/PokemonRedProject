import Map from "./map.js";
import Poke from "./pokemon.js";
import Inventory from "./inv.js";


const grid = document.querySelector('.grid');
let menu = document.getElementById('menu');
const CurrMap = new Map();
const POKEMON = new Poke();
const battle = document.getElementById('battle');
let layout = [];
let currLayout = parseInt(localStorage.getItem('currMap')) || 0;
switch(currLayout){
    case 0:
        layout = [...CurrMap.map0];
        break;
    case 1:
        layout = [...CurrMap.map1];
        break;
    case 2:
        layout = [...CurrMap.map2];
        break;
    case 3:
        layout = [...CurrMap.map3];
        break;
    case 4:
        layout = [...CurrMap.map4];
        break;
    case 5:
        layout = [...CurrMap.map5];
        break;
    case 6:
        layout = [...CurrMap.map6];
        break;
    case 7:
        layout = [...CurrMap.map7];
        break;
    case 8:
        layout = [...CurrMap.map8];
        break;
    case 9:
        layout = [...CurrMap.map9];
        break;
    case 10:
        layout = [...CurrMap.map10];
        break;
}
// layout = [...CurrMap.map0];
let mapIdx = parseInt(localStorage.getItem('currMap')) || 0;
const width = 28;
//Text
let txtBox = document.getElementById('textBox');
let txt = document.getElementById('text');




console.log(POKEMON.pokemon[3].name)

let squares = []
//draw the grid and render it
function createBoard(){
    for(let i = 0; i < layout.length; i++){
        const square = document.createElement('div');
        grid.append(square)
        squares.push(square)

        //add layout to the board
        if(layout[i] === 0) {
            squares[i].classList.add('tallGrass');
        } else if (layout[i] === 1){
            squares[i].classList.add('grass');
        } else if (layout[i] === 2){
            squares[i].classList.add('black');
        } else if (layout[i] === 3){
            squares[i].classList.add('ground');
        } else if (layout[i] === 4){
            squares[i].classList.add('flowerDR');
        } else if (layout[i] === 5){
            squares[i].classList.add('flowerUL');
        } else if (layout[i] === 6){
            squares[i].classList.add('houseFloor');
        } else if (layout[i] === 7){
            squares[i].classList.add('land');
        } else if (layout[i] === 8){
            squares[i].classList.add('blank');
        } else if (layout[i] === 9){
            squares[i].classList.add('smallGrass');
        } else if (layout[i] === 10){
            squares[i].classList.add('groundWStairs');
        } else if (layout[i] === 11){
            squares[i].classList.add('ledgeL');
        } else if (layout[i] === 12){
            squares[i].classList.add('ledgeR');
        } else if (layout[i] === 13){
            squares[i].classList.add('ledgeLightR');
        } else if (layout[i] === 14){
            squares[i].classList.add('ledgeLightL');
        } else if (layout[i] === 15){
            squares[i].classList.add('tree');
        } else if (layout[i] === 16){
            squares[i].classList.add('rock');
        } else if (layout[i] === 17){
            squares[i].classList.add('sign');
        } else if (layout[i] === 18){
            squares[i].classList.add('wood');
        } else if (layout[i] === 19){
            squares[i].classList.add('water');
        } else if (layout[i] === 20){
            squares[i].classList.add('stairsUp');
        } else if (layout[i] === 21){
            squares[i].classList.add('stairsDown');
        } else if (layout[i] === 22){
            squares[i].classList.add('bookCaseD');
        } else if (layout[i] === 23){
            squares[i].classList.add('bookCaseU');
        } else if (layout[i] === 24){
            squares[i].classList.add('bedT');
        } else if (layout[i] === 25){
            squares[i].classList.add('bedB');
        } else if (layout[i] === 26){
            squares[i].classList.add('plantT');
        } else if (layout[i] === 27){
            squares[i].classList.add('plantB');
        } else if (layout[i] === 28){
            squares[i].classList.add('chair');
        } else if (layout[i] === 29){
            squares[i].classList.add('keyboard');
        } else if (layout[i] === 30){
            squares[i].classList.add('pc');
        } else if (layout[i] === 31){
            squares[i].classList.add('rug');
        } else if (layout[i] === 32){
            squares[i].classList.add('snes');
        } else if (layout[i] === 33){
            squares[i].classList.add('tv');
        } else if (layout[i] === 34){
            squares[i].classList.add('tableBL');
        } else if (layout[i] === 35){
            squares[i].classList.add('tableBR');
        } else if (layout[i] === 36){
            squares[i].classList.add('tableBLFloor');
        } else if (layout[i] === 37){
            squares[i].classList.add('tableBRFloor');
        } else if (layout[i] === 38){
            squares[i].classList.add('tableTRWall');
        } else if (layout[i] === 39){
            squares[i].classList.add('tableTLWall');
        } else if (layout[i] === 40){
            squares[i].classList.add('tableTLFlower');
        } else if (layout[i] === 41){
            squares[i].classList.add('tableTRFlower');
        } else if (layout[i] === 42){
            squares[i].classList.add('borderL');
        } else if (layout[i] === 43){
            squares[i].classList.add('borderLU');
        } else if (layout[i] === 44){
            squares[i].classList.add('borderR');
        } else if (layout[i] === 45){
            squares[i].classList.add('borderRU');
        } else if (layout[i] === 46){
            squares[i].classList.add('btmRoof');
        } else if (layout[i] === 47){
            squares[i].classList.add('buildBL');
        } else if (layout[i] === 48){
            squares[i].classList.add('buildBR');
        } else if (layout[i] === 49){
            squares[i].classList.add('door');
        } else if (layout[i] === 50){
            squares[i].classList.add('houseDL');
        } else if (layout[i] === 51){
            squares[i].classList.add('houseDR');
        } else if (layout[i] === 52){
            squares[i].classList.add('houseTwoWindows');
        } else if (layout[i] === 53){
            squares[i].classList.add('buildRoofLD');
        } else if (layout[i] === 54){
            squares[i].classList.add('roofL');
        } else if (layout[i] === 55){
            squares[i].classList.add('buildRoofL');
        } else if (layout[i] === 56){
            squares[i].classList.add('buildRoofLS');
        } else if (layout[i] === 57){
            squares[i].classList.add('buildLWindow');
        } else if (layout[i] === 58){
            squares[i].classList.add('buildRWindow');
        } else if (layout[i] === 59){
            squares[i].classList.add('roofBR');
        } else if (layout[i] === 60){
            squares[i].classList.add('roofR');
        } else if (layout[i] === 61){
            squares[i].classList.add('buildRoofR');
        } else if (layout[i] === 62){
            squares[i].classList.add('buildRSRoof');
        } else if (layout[i] === 63){
            squares[i].classList.add('buildRoof');
        } else if (layout[i] === 64){
            squares[i].classList.add('houseTOneWindow');
        } else if (layout[i] === 65){
            squares[i].classList.add('houseTTwoWindow');
        } else if (layout[i] === 66){
            squares[i].classList.add('houseTL');
        } else if (layout[i] === 67){
            squares[i].classList.add('houseTR');
        } else if (layout[i] === 68){
            squares[i].classList.add('roofT');
        } else if (layout[i] === 69){
            squares[i].classList.add('buildTRoof');
        } else if (layout[i] === 70){
            squares[i].classList.add('buildTwoWindow');
        } else if (layout[i] === 71){
            squares[i].classList.add('buildTwoWindowBrick');
        } else if (layout[i] === 72){
            squares[i].classList.add('houseWall');
        } else if (layout[i] === 73){
            squares[i].classList.add('houseWindow');
        } else if (layout[i] === 74){
            squares[i].classList.add('borderU');
        } else if (layout[i] === 75){
            squares[i].classList.add('doorWay');
        } else if (layout[i] === 76){
            squares[i].classList.add('med11');
        } else if (layout[i] === 77){
            squares[i].classList.add('med12');
        } else if (layout[i] === 78){
            squares[i].classList.add('med13');
        } else if (layout[i] === 79){
            squares[i].classList.add('med14');
        } else if (layout[i] === 80){
            squares[i].classList.add('med21');
        } else if (layout[i] === 81){
            squares[i].classList.add('med22');
        } else if (layout[i] === 82){
            squares[i].classList.add('med23');
        } else if (layout[i] === 83){
            squares[i].classList.add('med24');
        } else if (layout[i] === 84){
            squares[i].classList.add('med31');
        } else if (layout[i] === 85){
            squares[i].classList.add('med32');
        } else if (layout[i] === 86){
            squares[i].classList.add('med33');
        } else if (layout[i] === 87){
            squares[i].classList.add('med34');
        } else if (layout[i] === 88){
            squares[i].classList.add('med41');
        } else if (layout[i] === 89){
            squares[i].classList.add('med42');
        } else if (layout[i] === 90){
            squares[i].classList.add('med43');
        } else if (layout[i] === 91){
            squares[i].classList.add('med44');
        } else if (layout[i] === 92){
            squares[i].classList.add('mart');
        } else if (layout[i] === 93){
            squares[i].classList.add('mountainSide');
        } else if (layout[i] === 94){
            squares[i].classList.add('mountainDown');
        } else if (layout[i] === 95){
            squares[i].classList.add('bolder');
        } else if (layout[i] === 96){
            squares[i].classList.add('medComputerL');
        } else if (layout[i] === 97){
            squares[i].classList.add('medComputerR');
        } else if (layout[i] === 98){
            squares[i].classList.add('healL');
        } else if (layout[i] === 99){
            squares[i].classList.add('healR');
        } else if (layout[i] === -1){
            squares[i].classList.add('register');
        } else if (layout[i] === -2){
            squares[i].classList.add('shelf');
        } else if (layout[i] === -3){
            squares[i].classList.add('ball');
        }
    }
    
}

//starting postion of character
// let currentIndex = 344;
let currentIndex = parseInt(localStorage.getItem('charIdx')) || 344;

function moveChar(e){

    //was origianlly for solid but there were to many solid vs passable objects
    let solidObj = 
    ['tallGrass', 'grass', 'ground', 'flowerDR', 'flowerUL',
     'houseFloor', 'land', 'blank', 'smallGrass', 'chair',
      'rug', 'door', 'doorWay', 'stairsUp', 'stairsDown',
      'groundWStairs', 'med42'
    ];
    let solidTrue = true;

    function removeChar(){
        squares[currentIndex].classList.remove('char');
        squares[currentIndex].classList.remove('charU');
        squares[currentIndex].classList.remove('charR');
        squares[currentIndex].classList.remove('charL');
        // was a easy catch all without removing any classes that i didn't want to remove
    }
    // had issues with opening the menu && character disapearing, but didn't want to write this each time

    let sqrL = squares[currentIndex - 1];
    let sqrU = squares[currentIndex - width];
    let sqrR = squares[currentIndex + 1];
    let sqrD = squares[currentIndex + width];
    
    //local stoarage
    // let facing = localStorage.getItem('currFacing') || "charU";

   
    switch(e.keyCode){
        // Left
        case 37:
        case 65:
            removeChar();
            for(let i = 0; i < solidObj.length; i++){
                if (sqrL.classList.contains(`${solidObj[i]}`)){
                    solidTrue = false;
                }
            }
            if(!solidTrue && currentIndex % width !==0 && battle.innerText==''){
                currentIndex -=1
            }
            squares[currentIndex].classList.add('charL');
            break
        // Up
        case 38:
        case 87:
            removeChar()
            for(let i = 0; i < solidObj.length; i++){
                if (sqrU.classList.contains(`${solidObj[i]}`)){
                    solidTrue = false;
                }
            }
            if(!solidTrue && currentIndex % width !==0 && battle.innerText==''){
                currentIndex -= width
            }
            squares[currentIndex].classList.add('charU');
            break
        // Right
        case 39:
        case 68:
            removeChar()
            for(let i = 0; i < solidObj.length; i++){
                if (sqrR.classList.contains(`${solidObj[i]}`)){
                    solidTrue = false;
                }
            }
            if(!solidTrue && currentIndex % width !==0 && battle.innerText==''){
                currentIndex +=1
            }
            squares[currentIndex].classList.add('charR');
            break
        // Down
        case 40:
        case 83:
            removeChar()
            for(let i = 0; i < solidObj.length; i++){
                if (sqrD.classList.contains(`${solidObj[i]}`)){
                    solidTrue = false;
                }
            }
            if(!solidTrue && currentIndex % width !==0 && battle.innerText==''){
                currentIndex += width
            }
            //for ledges to jump down
            else if(sqrD.classList.contains('ledgeL')||sqrD.classList.contains('ledgeR')||sqrD.classList.contains('ledgeLightR')||sqrD.classList.contains('ledgeLightL')){
                currentIndex += (width + width);
            }
            squares[currentIndex].classList.add('char');
            break
        case 69: //E for Menu/Inventory
            if(menu.classList.contains('displayNone')){
                menu.classList = 'menu';
            } else {menu.classList = 'displayNone menu'}
            break;
        case 78:
            //new file letter N
            clear();
            break;
        case 80:
            //save file letter P
            save();
            break;
        case 32:
            //action space button

            //while at pokemon center to heal(only in two spots)
            if ((sqrU.classList.contains(`healL`)||sqrU.classList.contains('healR')) && squares[currentIndex].classList.contains('charU')){
                console.log('heal');
                for(let i = 0; i < inv.PokeInv.length; i++){
                    inv.PokeInv[i].currHealth = inv.PokeInv[i].maxHealth;
                    pokemon2 = inv.PokeInv[0];
                    pokemonName = pokemon2.name;
                    PKMLVL2 = pokemon2.level;
                    health = pokemon2.maxHealth;
                    currHealth = pokemon2.currHealth;
                    pokemonImg = pokemon2.img;
                    eveLvl = pokemon2.eveLvl;
                    evePkm = pokemon2.evePkm;
                    

                }
                j = 1;
            }

            break;
    }

    
    
    
    txt.innerText = ``

    pokeUpdateStats();
    detectPoke(squares[currentIndex]);
    MapChange(currentIndex, mapIdx);



    console.log(currentIndex, mapIdx);
    // was in the way of making my case for the E button
    // squares[currentIndex].classList.add('char');
    
}

document.addEventListener('DOMContentLoaded', () =>{
    document.addEventListener('keyup', moveChar);
    createBoard();
    squares[currentIndex].classList.add(localStorage.getItem('currFacing')|| "char");
})

//define pokemon outside
// your pokemon
const inv = new Inventory();

// let pokemon2 = inv.PokeInv[0];
//inv.PokeInv.0 (create array)



//setting up the poke Inv
// pokemon list save
let saveCheck = parseInt(localStorage.getItem('invIdx')) || 0;
console.log(saveCheck);
if(saveCheck > 0){
    inv.PokeInv[0] = (JSON.parse(localStorage.getItem('poke1')));
}
if(saveCheck > 1){
    inv.PokeInv[1] = (JSON.parse(localStorage.getItem('poke2')));
}
if(saveCheck > 2){
    inv.PokeInv[2] = (JSON.parse(localStorage.getItem('poke3')));
}
if(saveCheck > 3){
    inv.PokeInv[3] = (JSON.parse(localStorage.getItem('poke4')));
}
if(saveCheck > 4){
    inv.PokeInv[4] = (JSON.parse(localStorage.getItem('poke5')));
}
if(saveCheck > 5){
    inv.PokeInv[5] = (JSON.parse(localStorage.getItem('poke6')));
}
console.log(inv.PokeInv);



let j = 1;
let pokemon2 = inv.PokeInv[0];
while(pokemon2.currHealth <= 0 && j < 6){
    console.log()
    pokemon2 = inv.PokeInv[j];
    j++;
}


let xpMulti = 7; //fix later
let lvlUp = false;


let pokemonName = pokemon2.name;
let PKMLVL2 = pokemon2.level;
let health = pokemon2.maxHealth;
let currHealth = pokemon2.currHealth;
let pokemonImg = pokemon2.img;
let eveLvl  = pokemon2.eveLvl;
let evePkm  = pokemon2.evePkm;



function detectPoke(idx){
    let chance = Math.ceil(Math.random() * 4);
    if(idx.classList.contains('tallGrass') && chance == 1 && battle.innerText==''){

        // enemy pokemon
        // solidTrue = false;
const POKEMON = new Poke();
let randomPKM = Math.ceil(Math.random()*7)
let PKMLVL = Math.ceil(Math.random()*7)
let enemyHealth = PKMLVL * 5;
let enemeyCurHealth = enemyHealth;
let pokemon1 = POKEMON.pokemon[randomPKM];
let poke1Name = pokemon1.name;
let poke1Moves = [...pokemon1.moves]
let enemyImg = pokemon1.enemyImg;

let pokemonImg = pokemon2.img;



let switchImg0 ='';
let switchImg1 ='';
let switchImg2 ='';
let switchImg3 ='';
let switchImg4 ='';
let switchImg5 ='';
function dataFinderForPokemonSwitch(){
    let e = inv.PokeInv.length;
    switchImg0 = inv.PokeInv[0].img2;
    
    if(e > 1){
        switchImg1 = inv.PokeInv[1].img2;
    } else {switchImg1 = 'media/ground/groundBlank.png'}

    if(e > 2){
        switchImg2 = inv.PokeInv[2].img2;
    } else {switchImg2 = 'media/ground/groundBlank.png'}

    if(e > 3){
        switchImg3 = inv.PokeInv[3].img2;
    } else {switchImg3 = 'media/ground/groundBlank.png'}

    if(e > 4){
        switchImg4 = inv.PokeInv[4].img2;
    } else {switchImg4 = 'media/ground/groundBlank.png'}
    
    if(e > 5){
        switchImg5 = inv.PokeInv[5].img2;
    } else {switchImg5 = 'media/ground/groundBlank.png'}  
}
dataFinderForPokemonSwitch();



function battleField(){
    battle.innerHTML = `
<div  id="screen">
    <div class="tops">
            <div class="health1">
                <div class="name1">${poke1Name}</div>
                <p class="hp">LV:${PKMLVL} HP</p>
                <div class="totalHealth"><div class="currentHealth"></div></div>  
            </div>
            <img src="${enemyImg}" alt="" class="pokemon1">
    </div>
        <div class="bottoms">
            <img src="${pokemonImg}" alt="" class="pokemon2" id="inPlayImg">
            <div class="name2" id="inPlayName">${pokemonName}</div>
            <div class="health2"><p class="hp">LV:<span id="changeLvl">${PKMLVL2}<span> HP</p>
                <div class="totalHealth maxHp"><div class="currentHealth2"></div></div>
    </div>
</div></div>
            <div class="buttons options" id="options">
                <button class="atk btn" id="atk">FIGHT</button>
                <button class="bag btn" id="bag">ITEM</button>
                <button class="switchP btn" id="switchP">PKMN</button>
                <button class="run btn" id="run">RUN</button>
            </div>
            <div class="">
                <div class="buttons atkOptions displayNone" id="atkOptions">
                <button class="btn" id="${pokemon2.moves[0]}">${pokemon2.moves[0]}</button>
                <button class="btn" id="${pokemon2.moves[1]}">${pokemon2.moves[1]}</button>
                <button class="btn"></button>
                <button class="btn"></button>
            </div>
            <div class="">
                <div class="buttons bagOptions displayNone" id="bagOptions">
                <button class="btn" id="pokeBall">Catch</button>
                <button class="btn" id="potion">Potion</button>
                <button class="btn"></button>
                <button class="btn"></button>
            </div>
            <div class="buttons pOptions displayNone" id="pOptions">
                <button class="pBtn" id="pBtn0"> <img src="${switchImg0}" alt="" width="30px" height="30" id="PKMNBtn0"> </button>
                <button class="pBtn" id="pBtn1"> <img src="${switchImg1}" alt="" width="30px" height="30" id="PKMNBtn1"> </button>
                <button class="pBtn" id="pBtn2"> <img src="${switchImg2}" alt="" width="30px" height="30" id="PKMNBtn2"> </button>
                <button class="pBtn" id="pBtn3"> <img src="${switchImg3}" alt="" width="30px" height="30" id="PKMNBtn3"> </button>
                <button class="pBtn" id="pBtn4"> <img src="${switchImg4}" alt="" width="30px" height="30" id="PKMNBtn4"> </button>
                <button class="pBtn" id="pBtn5"> <img src="${switchImg5}" alt="" width="30px" height="30" id="PKMNBtn5"> </button>
            </div>
            
        </div>
        <style>
            .battle{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 300px;
            width: 500px;
            border: 1px solid #000;
            background: white;
            }
            .totalHealth{
                margin-top: 8%;
                margin-left:19.8%;
                height: 25px;
                width: 200px;
                background: lightgray;
                border: 1px solid #000;
            }
            .totalHealth .currentHealth{
                height: inherit;
                width: calc(100%*(${enemeyCurHealth}/${enemyHealth}));
                background: red;
            }
            .totalHealth .currentHealth2{
                height: inherit;
                width: calc(100%*(${currHealth}/${health}));
                background: red;
            }
            .hp{
                position: absolute;
                color: black;
                margin-top: 6px;
                right: 210px;
                font-weight: 600;
            }
            .pBtn{
                margin-left: 10px;
                margin-bottom: 2px;
            }
        </style>
`
grid.classList.add('displayNone');
}

setStats();
battleField();
battleMsg(poke1Name);
health = pokemon2.level * 5;

let options = document.getElementById('options');

let atk = document.getElementById('atk');
let atkOptions = document.getElementById('atkOptions');
let slam = document.getElementById('SLAM');
let tackle = document.getElementById('TACKLE');

let item = document.getElementById('bag');
let bagOptions = document.getElementById('bagOptions');
let pokeBall = document.getElementById('pokeBall');
let potion = document.getElementById('potion');

let PKMN = document.getElementById('switchP');
let pOptions = document.getElementById('pOptions');
let pBtn0 = document.getElementById('pBtn0');
let pBtn1 = document.getElementById('pBtn1');
let pBtn2 = document.getElementById('pBtn2');
let pBtn3 = document.getElementById('pBtn3');
let pBtn4 = document.getElementById('pBtn4');
let pBtn5 = document.getElementById('pBtn5');

function imgSwitcherPKMN(){
    document.getElementById('PKMNBtn0').src = inv.PokeInv[0].img2;
    if(inv.PokeInv.length > 1){
        document.getElementById('PKMNBtn1').src = inv.PokeInv[1].img2;
    }
    if(inv.PokeInv.length > 2){
        document.getElementById('PKMNBtn2').src = inv.PokeInv[2].img2;
    }
    if(inv.PokeInv.length > 3){
        document.getElementById('PKMNBtn3').src = inv.PokeInv[3].img2;
    }
    if(inv.PokeInv.length > 4){
        document.getElementById('PKMNBtn4').src = inv.PokeInv[4].img2;
    }
    if(inv.PokeInv.length > 5){
        document.getElementById('PKMNBtn5').src = inv.PokeInv[5].img2;   
    }
}

pBtn0.addEventListener('click', ()=>{
    // if(inv.PokeInv[1].currHealth > 0){
    //     switchPkm(1);
    //     chgLvl.innerText = pokemon2.level;
    //     let tempHp = currHealth/health * 100;
    //     hp.style.width = `${tempHp}%`;
    // }
    // dataFinderForPokemonSwitch();
    // imgSwitcherPKMN();
    restartPhase();
});
pBtn1.addEventListener('click', ()=>{
    if(inv.PokeInv[1]?.currHealth > 0){
        pkmSwitchTxt(pokemon2.name);
        switchPkm(1);
        chgLvl.innerText = pokemon2.level;
        let tempHp = currHealth/health * 100;
        hp.style.width = `${tempHp}%`;
        dataFinderForPokemonSwitch();
        imgSwitcherPKMN();
        pkmSwitchTxt2(pokemon2.name);
    }
    restartPhase();
});
pBtn2.addEventListener('click', ()=>{
    if(inv.PokeInv[2]?.currHealth > 0){
        pkmSwitchTxt(pokemon2.name);
        switchPkm(2);
        chgLvl.innerText = pokemon2.level;
        let tempHp = currHealth/health * 100;
        hp.style.width = `${tempHp}%`;
        dataFinderForPokemonSwitch();
        imgSwitcherPKMN();
        pkmSwitchTxt2(pokemon2.name);
    }
    restartPhase();
});
pBtn3.addEventListener('click', ()=>{
    if(inv.PokeInv[3]?.currHealth > 0){
        pkmSwitchTxt(pokemon2.name);
        switchPkm(3);
        chgLvl.innerText = pokemon2.level;
        let tempHp = currHealth/health * 100;
        hp.style.width = `${tempHp}%`;
        dataFinderForPokemonSwitch();
        imgSwitcherPKMN();
        pkmSwitchTxt2(pokemon2.name);
    }
    restartPhase();
});
pBtn4.addEventListener('click', ()=>{
    if(inv.PokeInv[4]?.currHealth > 0){
        pkmSwitchTxt(pokemon2.name);
        switchPkm(4);
        chgLvl.innerText = pokemon2.level;
        let tempHp = currHealth/health * 100;
        hp.style.width = `${tempHp}%`;
        dataFinderForPokemonSwitch();
        imgSwitcherPKMN();
        pkmSwitchTxt2(pokemon2.name);
    }
    restartPhase();
});
pBtn5.addEventListener('click', ()=>{
    if(inv.PokeInv[5]?.currHealth > 0){
        pkmSwitchTxt(pokemon2.name);
        switchPkm(5);
        chgLvl.innerText = pokemon2.level;
        let tempHp = currHealth/health * 100;
        hp.style.width = `${tempHp}%`;
        dataFinderForPokemonSwitch();
        imgSwitcherPKMN();
        pkmSwitchTxt2(pokemon2.name);
    }
    restartPhase();
});

let run = document.getElementById('run');

let enemyHp = document.querySelector('.currentHealth');
let hp = document.querySelector('.currentHealth2');
let chgLvl = document.getElementById('changeLvl');
let inPlayName = document.getElementById('inPlayName');

function fixHealthBug(){
        let temp = currHealth/health * 100;
        hp.style.width = `${temp}%`;

}
fixHealthBug();




function restartPhase(){
    options.classList.remove('displayNone');
    atkOptions.classList.add('displayNone');
    bagOptions.classList.add('displayNone');
    pOptions.classList.add('displayNone');

}


atk.addEventListener('click', ()=>{
    options.classList.add('displayNone');
    atkOptions.classList.remove('displayNone');
    txt.innerText = ``;
});

item.addEventListener('click', ()=>{
    txt.innerText = ``;
    options.classList.add('displayNone');
    bagOptions.classList.remove('displayNone');
    

});

slam.addEventListener('click', ()=>{
    enemeyCurHealth -= PKMLVL2 * 1.5;
    attackMsg(pokemon2.name, "slam", (PKMLVL2 * 1.5), poke1Name);
    let temp = enemeyCurHealth/enemyHealth * 100;
    if(temp <=0){
        temp = 0;
        pokemon2.xp += PKMLVL * xpMulti;
        if(pokemon2.xp >= pokemon2.maxHealth){
            pokemon2.xp -= parseInt(PKMLVL2 * 5);
            pokemon2.level += 1;
            pokemon2.maxHealth += 5;
            pokemon2.currHealth += 5;
            pokemon2.xp = parseInt(pokemon2.xp);
            chgLvl.innerText = pokemon2.level;
            lvlUp = true;
            setStats();
        }
    }
    enemyHp.style.width = `${temp}%`;
    if(enemeyCurHealth <= 0){
        win(pokemon2.name, pokemon1.name, (PKMLVL * xpMulti));
        if(lvlUp){
            levelUp(pokemon2.name, PKMLVL2);
        } 
        lvlUp = false;
        battle.innerHTML = ``;
        grid.classList.remove('displayNone');
        checkEvolution(pokemon2);
    } else{
        enemyHit(enemeyCurHealth, PKMLVL, health, currHealth);
    }
    restartPhase();
});

tackle.addEventListener('click', ()=>{
        enemeyCurHealth -= PKMLVL2 * 1.5;
        attackMsg(pokemon2.name, "tackle", (PKMLVL2 * 1.5), poke1Name);
        let temp = enemeyCurHealth/enemyHealth * 100;
        if(temp <=0){
            temp = 0;
            pokemon2.xp += PKMLVL * xpMulti;
            if(pokemon2.xp >= pokemon2.maxHealth){
                pokemon2.xp -= parseInt(PKMLVL2 * 5);
                pokemon2.level += 1;
                pokemon2.maxHealth += 5;
                pokemon2.currHealth += 5;
                pokemon2.xp = parseInt(pokemon2.xp);
                chgLvl.innerText = pokemon2.level;
                lvlUp = true;
                setStats();
            }
        }
        enemyHp.style.width = `${temp}%`;
        if(enemeyCurHealth <= 0){
            win(pokemon2.name, pokemon1.name, (PKMLVL * xpMulti));
            if(lvlUp){
                levelUp(pokemon2.name, PKMLVL2);
            }
            lvlUp = false;
            battle.innerHTML = ``;
            grid.classList.remove('displayNone');
            checkEvolution(pokemon2);
        } else{
            enemyHit(enemeyCurHealth, PKMLVL, health, currHealth);
        }
        restartPhase();
});

pokeBall.addEventListener('click', ()=>{
    console.log(inv.PokeInv)
    let caught = Math.ceil(Math.random() * 5)
    if(caught > 3){
            inv.createPokemon(randomPKM, PKMLVL, enemeyCurHealth);
            battle.innerHTML = ``;
            grid.classList.remove('displayNone'); 
        } else{

            enemyHit(enemeyCurHealth, PKMLVL, health, currHealth)
            restartPhase();
        }
    
});

PKMN.addEventListener('click', ()=>{
    options.classList.add('displayNone');
    pOptions.classList.remove('displayNone');
    txt.innerText = ``;
});

run.addEventListener('click', ()=>{
    txt.innerText = ``;
    let run = Math.ceil(Math.random() * 2)
    console.log(run);
    if(run == 2){
            battle.innerHTML = ``;
            grid.classList.remove('displayNone'); 
        } else{
            enemyHit(enemeyCurHealth, PKMLVL, health, currHealth)
            restartPhase();
        }
    
});

potion.addEventListener('click', ()=>{
    health = pokemon2.maxHealth;
    currHealth += 40;
    console.log(currHealth);
    let diff = 40 - (currHealth - health);
    if(currHealth > health){
        currHealth = health;
    }
    usePotion(pokemon2.name, diff);
    fixHealthBug();
    enemyHit(enemeyCurHealth, PKMLVL, health, currHealth)
    restartPhase();

    
});

function enemyHit(enemeyCurHealth, PKMLVL, health, HP){
    if(enemeyCurHealth > 0){
        HP -= PKMLVL * 1.5;
        enemyAtkMsg(pokemon2.name, "scratch", (PKMLVL * 1.5), poke1Name);
        health = pokemon2.level * 5;
        let temp = HP/health * 100;
        if(temp <=0){
            temp = 0;
        }
        hp.style.width = `${temp}%`;
        

        if(HP <= 0){
            HP = 0;
            faint(pokemon2.name);

        }
        currHealth = HP;
        pokemon2.currHealth = currHealth;
        
        if(pokemon2.currHealth <= 0 && j < inv.PokeInv.length){
            pokemon2 = inv.PokeInv[j];
            pokemonName = pokemon2.name;
            PKMLVL2 = pokemon2.level;
            health = pokemon2.maxHealth;
            currHealth = pokemon2.currHealth;
            pokemonImg = pokemon2.img;
            eveLvl = pokemon2.eveLvl;
            evePkm = pokemon2.evePkm;
            // exp = pokemon2.ex;
            chgLvl.innerText = pokemon2.level;
            inPlayName.innerText = pokemon2.name;
            document.getElementById('inPlayImg').src = pokemon2.img;
            let temp = currHealth/health * 100;
            hp.style.width = `${temp}%`;

            j++
            
        }


        if(currHealth <= 0 && j >= inv.PokeInv.length){
            battle.innerHTML = ``;
            grid.classList.remove('displayNone');
            grid.innerHTML = '';
            squares = [];
            layout = [...CurrMap.map9];
            mapIdx = 9;
            currentIndex = 315; 
            createBoard();
            squares[currentIndex].classList.add('charU');
            for(let i = 0; i < inv.PokeInv.length; i++){
                inv.PokeInv[i].currHealth = inv.PokeInv[i].maxHealth;
                pokemon2 = inv.PokeInv[0];
                pokemonName = pokemon2.name;
                PKMLVL2 = pokemon2.level;
                health = pokemon2.maxHealth;
                currHealth = pokemon2.currHealth;
                pokemonImg = pokemon2.img;
                eveLvl = pokemon2.eveLvl;
                evePkm = pokemon2.evePkm;
                
            }
            j = 1;
            
        }
    }
}

function setStats(){
    // for(let i = 0; i < inv.PokeInv.length; i++){
    for(let i = inv.PokeInv.length -1; i >= 0; i--){
        inv.PokeInv[i].currHealth = inv.PokeInv[i].currHealth;
        pokemon2 = inv.PokeInv[i];
        pokemonName = pokemon2.name;
        PKMLVL2 = pokemon2.level;
        health = pokemon2.maxHealth;
        currHealth = pokemon2.currHealth;
        pokemonImg = pokemon2.img;
        eveLvl = pokemon2.eveLvl;
        evePkm = pokemon2.evePkm;
    }
    for(let i = inv.PokeInv.length -1; i >= 0; i--){
        inv.PokeInv[i].currHealth = inv.PokeInv[i].currHealth;
        if(inv.PokeInv[i].currHealth > 0){
        pokemon2 = inv.PokeInv[i];
        pokemonName = pokemon2.name;
        PKMLVL2 = pokemon2.level;
        health = pokemon2.maxHealth;
        currHealth = pokemon2.currHealth;
        pokemonImg = pokemon2.img;
        eveLvl = pokemon2.eveLvl;
        evePkm = pokemon2.evePkm;
        }
    }
}



}

}


function MapChange(curIdx, idx){
    // moving maps start

    //pallet town start

    //to get into Reds house
    if(currentIndex === 317 && mapIdx == 0){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map1];
        mapIdx = 1;
        currentIndex = 403;
        createBoard();
        squares[currentIndex].classList.add('charU');
    }
    //to leave Reds house
    if((currentIndex === 431 || currentIndex === 432) && mapIdx == 1){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map0];
        mapIdx = 0;
        currentIndex = 345;
        createBoard();
        squares[currentIndex].classList.add('char');
    }
    //to get into Reds room
    if((currentIndex === 268) && mapIdx == 1){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map2];
        mapIdx = 2;
        currentIndex = 267;
        createBoard();
        squares[currentIndex].classList.add('charL');
    }
    //to leave Reds room
    if((currentIndex === 268) && mapIdx == 2){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map1];
        mapIdx = 1;
        currentIndex = 267;
        createBoard();
        squares[currentIndex].classList.add('charL');
    }
    //to enter rivials house
    if(currentIndex === 325 && mapIdx == 0){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map3];
        mapIdx = 3;
        currentIndex = 403;
        createBoard();
        squares[currentIndex].classList.add('charU');
    }
    //to leave rivials house
    if((currentIndex === 431 || currentIndex === 432) && mapIdx == 3){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map0];
        mapIdx = 0;
        currentIndex = 353;
        createBoard();
        squares[currentIndex].classList.add('char');
    }
    //to Oaks office
    if(currentIndex === 492 && mapIdx == 0){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map4];
        mapIdx = 4;
        currentIndex = 545;
        createBoard();
        squares[currentIndex].classList.add('charU');
    }
    //to leave Oaks office
    if((currentIndex === 573 || currentIndex === 574) && mapIdx == 4){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map0];
        mapIdx = 0;
        currentIndex = 520;
        createBoard();
        squares[currentIndex].classList.add('char');
    }
    //pallet town ends

    //route 1 starts

    //to route 1 from pallet town
    if((currentIndex === 70 || currentIndex == 71) && mapIdx == 0){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map5];
        mapIdx = 5;
        currentIndex === 70 ? currentIndex = 937 : currentIndex = 938; 
        createBoard();
        squares[currentIndex].classList.add('charU');
    }

    //to pallet town from route 1
    if((currentIndex === 965 || currentIndex == 966) && mapIdx == 5){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map0];
        mapIdx = 0;
        currentIndex === 965 ? currentIndex = 98 : currentIndex = 99; 
        createBoard();
        squares[currentIndex].classList.add('char');
    }

    //to Viridian City from route 1
    if((currentIndex === 13 || currentIndex == 14) && mapIdx == 5){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map6];
        mapIdx = 6;
        currentIndex === 13 ? currentIndex = 992 : currentIndex = 993; 
        createBoard();
        squares[currentIndex].classList.add('charU');
    }

    //route 1 ends

    //Viridian City Start

    //to route 1 from Viridian City
    if((currentIndex === 1020 || currentIndex == 1021) && mapIdx == 6){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map5];
        mapIdx = 5;
        currentIndex === 1020 ? currentIndex = 41 : currentIndex = 42; 
        createBoard();
        squares[currentIndex].classList.add('char');
    }

    //to house one in Viridian City
    if(currentIndex == 433 && mapIdx == 6){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map7];
        mapIdx = 7;
        currentIndex = 403; 
        createBoard();
        squares[currentIndex].classList.add('charU');
    }

    //to Viridian City from house one 
    if((currentIndex == 431 || currentIndex == 432) && mapIdx == 7){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map6];
        mapIdx = 6;
        currentIndex = 461; 
        createBoard();
        squares[currentIndex].classList.add('char');
    }

    //to house two in Viridian City
    if(currentIndex == 265 && mapIdx == 6){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map8];
        mapIdx = 8;
        currentIndex = 403; 
        createBoard();
        squares[currentIndex].classList.add('charU');
    }
    
    //to Viridian City from house two
    if((currentIndex == 431 || currentIndex == 432) && mapIdx == 8){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map6];
        mapIdx = 6;
        currentIndex = 293; 
        createBoard();
        squares[currentIndex].classList.add('char');
    }

    //to Pokemon Center in Viridian City 
    if(currentIndex == 715 && mapIdx == 6){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map9];
        mapIdx = 9;
        currentIndex = 400; 
        createBoard();
        squares[currentIndex].classList.add('charU');
    }

    //from Pokemon Center to Viridian City 
    if((currentIndex == 428 || currentIndex == 429) && mapIdx == 9){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map6];
        mapIdx = 6;
        currentIndex = 743; 
        createBoard();
        squares[currentIndex].classList.add('char');
    }

    //to Mart in Viridian City 
    if(currentIndex == 553 && mapIdx == 6){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map10];
        mapIdx = 10;
        currentIndex = 372; 
        createBoard();
        squares[currentIndex].classList.add('charU');
    }

    //from Mart to Viridian City 
    if((currentIndex == 400 || currentIndex == 401) && mapIdx == 10){
        grid.innerHTML = '';
        squares = [];
        layout = [...CurrMap.map6];
        mapIdx = 6;
        currentIndex = 581; 
        createBoard();
        squares[currentIndex].classList.add('char');
    }    

    // Viridian City end

    // moving maps end
    curIdx = currentIndex;
    idx = mapIdx;

    
    
}

function clear(){
    localStorage.clear('charIdx', 'currFacing', 'currMap', 'invIdx', 'poke1', 'poke2', 'poke3', 'poke4', 'poke5', 'poke6');
    localStorage.setItem('charIdx', 345);
    location.reload();
}
function save(){
    console.log('save');
    if(battle.innerText == ''){
    localStorage.setItem('charIdx', currentIndex);
    if(squares[currentIndex].classList.contains('char')){
        localStorage.setItem('currFacing', 'char');
    }
    else if(squares[currentIndex].classList.contains('charU')){
        localStorage.setItem('currFacing', 'charU');
    }
    else if(squares[currentIndex].classList.contains('charL')){
        localStorage.setItem('currFacing', 'charL');
    }
    else if(squares[currentIndex].classList.contains('charR')){
        localStorage.setItem('currFacing', 'charR');
    }
    localStorage.setItem('currMap', mapIdx);
    }
    localStorage.setItem('invIdx', inv.PokeInv.length);
    let i = parseInt(localStorage.getItem('invIdx'));
    if(i > 0){
        let poke1 = JSON.stringify(inv.PokeInv[0]);
        localStorage.setItem('poke1', poke1);
    }
    if(i > 1){
        let poke2 = JSON.stringify(inv.PokeInv[1]);
        localStorage.setItem('poke2', poke2);
    }
    if(i > 2){
        let poke3 = JSON.stringify(inv.PokeInv[2]);
        localStorage.setItem('poke3', poke3);
    }
    if(i > 3){
        let poke4 = JSON.stringify(inv.PokeInv[3]);
        localStorage.setItem('poke4', poke4);
    }
    if(i > 4){
        let poke5 = JSON.stringify(inv.PokeInv[4]);
        localStorage.setItem('poke5', poke5);
    }
    if(i > 5){
        let poke6 = JSON.stringify(inv.PokeInv[5]);
        localStorage.setItem('poke6', poke6);
    }
}

// 
// Text based messages.
// 


function welcome(){
    let ifStarted = (parseInt(localStorage.getItem('currMap')) + 1) || 20;
    if(ifStarted == 20){
        txt.innerText = 
            `This is where you adventure begins, a few tips are:
            A is Left, S is Down, D is Right, and W is Up along with arrow keys
            To save is P, to start over is N, and space bar is to interact.
            Here is your starter. Hope you have a good time Catching them all!`;
        setInterval(() => {
            txt.innerText = ``;
        }, 15000);
    
    }
}
// welcome();

function battleMsg(enemyPkm){
    txt.innerText = `A wild ${enemyPkm} appeared! `;
}

function attackMsg(pkm, atk, dmg, enemyPkm){
    txt.innerText = `${pkm} used ${atk}. It did ${dmg} damage to ${enemyPkm}. `;
    // setInterval(() => {
    //     // txt.innerText = ``;
    // }, 3000);
}

function usePotion(pkm, diff){
    txt.innerText = `You used a potion on ${pkm} and restored ${diff} hp. `;
}

function enemyAtkMsg(pkm, atk, dmg, enemyPkm){
    txt.innerText += `Wild ${enemyPkm} used ${atk}. It did ${dmg} damage to ${pkm}. `;
    // setInterval(() => {
    //     txt.innerText = ``;
    // }, 8000);
}

function faint(pkm){
    txt.innerText = `${pkm} fainted.`
}

function win(pkm, enemyPkm, xp){
    txt.innerText += `${pkm} defeated ${enemyPkm} and gained ${xp}exp! `;
}

function levelUp(pkm, lvl){
    txt.innerText += `${pkm} leveled up to ${lvl} `;
}

function pkmSwitchTxt(pkm){
    txt.innerText += `You brought back ${pkm}. `;
}

function pkmSwitchTxt2(pkm){
    txt.innerText += `Go ${pkm}! `;
}

function pokeUpdateStats(){
    menu.innerHTML = '';
    for(let i = 0; i < inv.PokeInv.length; i++){
        menu.innerHTML += `
        <div class="perPokemon">
        <img src="${inv.PokeInv[i].img2}" alt="" width="30px">
        <div class="pokemon">${inv.PokeInv[i].name}</div>
        <div class="level">Lvl: ${inv.PokeInv[i].level}</div>
        <div class="exp"> ${inv.PokeInv[i].currHealth}/${inv.PokeInv[i].maxHealth}</div>
        </div>
        `
    }
}

function game(){
    let ifStarted = (parseInt(localStorage.getItem('currMap')) + 1) || 20;
    if(ifStarted == 20){
    txt.innerHTML = `
    <div class="gameBox">
            <button class="pkmBtn1"><img src="media/pokemon/bulbasaur.png" alt=""></button>
            <button class="pkmBtn2"><img src="media/pokemon/charmander.png" alt=""></button>
            <button class="pkmBtn3"><img src="media/pokemon/squirtle.png" alt=""></button>
            </div>
            Welcome to the world of pokemon, this is were you chose your first companion on your jorney.
            <style>
                .gameBox{
                    display: flex;
                    justify-content: space-evenly;
                }
                .pkmBtn{
                    
                    height: 55px;
                    width: 55px;
                }
            </style>`
    let choice1 = document.querySelector('.pkmBtn1');
    choice1.addEventListener('click', ()=>{
        if(true){
            inv.PokeInv[0] = {
                name: POKEMON.pokemon[1].name,
                moves: POKEMON.pokemon[1].moves,
                level: 5,
                maxHealth: 25,
                currHealth: 25,
                img: POKEMON.pokemon[1].partyImg,
                img2: POKEMON.pokemon[1].enemyImg,
                xp: 0,
                eveLvl: POKEMON.pokemon[1].evolveLvl,
                evePkm: POKEMON.pokemon[1].evolvePkm
            }
            
            welcome();
            
        }
    })
    let choice2 = document.querySelector('.pkmBtn2');
    choice2.addEventListener('click', ()=>{
        if(true){
            inv.PokeInv[0] = {
                name: POKEMON.pokemon[2].name,
                moves: POKEMON.pokemon[2].moves,
                level: 5,
                maxHealth: 25,
                currHealth: 25,
                img: POKEMON.pokemon[2].partyImg,
                img2: POKEMON.pokemon[2].enemyImg,
                xp: 0,
                eveLvl: POKEMON.pokemon[2].evolveLvl,
                evePkm: POKEMON.pokemon[2].evolvePkm
            }
            welcome();
        }
    })
    let choice3 = document.querySelector('.pkmBtn3');
    choice3.addEventListener('click', ()=>{
        if(true){
            inv.PokeInv[0] = {
                name: POKEMON.pokemon[3].name,
                moves: POKEMON.pokemon[3].moves,
                level: 5,
                maxHealth: 25,
                currHealth: 25,
                img: POKEMON.pokemon[3].partyImg,
                img2: POKEMON.pokemon[3].enemyImg,
                xp: 0,
                eveLvl: POKEMON.pokemon[3].evolveLvl,
                evePkm: POKEMON.pokemon[3].evolvePkm
            }
            welcome();
        }
    })
    
}
}
game();



function checkEvolution(pkm){
    console.log("worked");
    console.log(pkm.level, pkm.eveLvl)
    if(pkm.level >= pkm.eveLvl && pkm.eveLvl != 0){
        const POKEMON = new Poke();
        
        pokemon2.name = POKEMON.evolution[pokemon2.evePkm].name;
        pokemon2.img = POKEMON.evolution[pokemon2.evePkm].partyImg;
        pokemon2.img2 = POKEMON.evolution[pokemon2.evePkm].enemyImg;
        pokemon2.eveLvl = POKEMON.evolution[pokemon2.evePkm].evolveLvl;
        pokemon2.evePkm = POKEMON.evolution[pokemon2.evePkm].evolvePkm;
    }
}
console.log(pokemon2.eveLvl);
console.log(POKEMON.evolution[0].partyImg);

function switchPkm(pkm){
    // let pokemonSwitch = document.getElementById('switchPkm');
    // let pkmDiv = document.createElement('div');
    let temp = inv.PokeInv[0];
    inv.PokeInv[0] = inv.PokeInv[pkm];
    inv.PokeInv[pkm] = temp;
    pokemon2 = inv.PokeInv[0];
    pokemonName = pokemon2.name;
    PKMLVL2 = pokemon2.level;
    health = pokemon2.maxHealth;
    currHealth = pokemon2.currHealth;
    pokemonImg = pokemon2.img;
    eveLvl = pokemon2.eveLvl;
    evePkm = pokemon2.evePkm;
    // exp = pokemon2.ex;
    inPlayName.innerText = pokemon2.name;
    document.getElementById('inPlayImg').src = pokemon2.img;
}

