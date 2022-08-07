const typeColor = {
    normal: "#95afc0",
    ice: "#74b9ff",
    water: "#0190FF",
    poison: "#da79db",
    bug: "#c2d45f",
    dragon: "#a267d6",
    electric: "#faf143",
    fairy: "#f587ec",
    fighting: "#de2e21",
    fire: "#fc5f26",
    grass: "#34d93a",
    ground: "#b3642d",
    ghost: "#9e6bc7",
    psychic: "#d61cc4",
    rock: "#e39b3d",
    dark: "#665f57",
    flying: "#e0d8ce",
    steel: "#a69e94"
};

let pokeData = {};
let move1 = {};
let move2 = {};
let move3 = {};
let move4 = {};

let pcPokeData ={};
let pcMove1 = {};
let pcMove2 = {};
let pcMove3 = {};
let pcMove4 = {};

let moveBtn1;
let moveBtn2;
let moveBtn3;
let moveBtn4;

const screen = document.getElementById("screen");
const btn = document.getElementById("start-btn");

let startGame = () => {
    GenerateBattleField();
    loadPokemons();
};

btn.addEventListener("click", startGame);

let GenerateBattleField = () =>{
    let turn_counter = 1;
    screen.innerHTML = `
    <div>
    <div class="battleField">
            <div class="player1Box">
                <div class="player1Info">
                    <strong>TLE_Pheonix</strong>
                    <div class="player1Img">
                    </div>
                    </div>
            </div>
            <div class="field">
                <div class="turn-counter" id="turn-counter">Turn ${turn_counter}</div>
                <div id="activePlayerPokemon"></div>
                <div id="activePcPokemon"></div>
            </div>
            <div class="player2Box">
                <div class="player2Info">
                    <strong>Player Pc</strong>
                    <div class="player2Img">
                    </div>
                </div>
            </div>
            </div>
        <div class="actionField" id="actionField">

        </div>
    </div>
    <div class="battleRecord">

    </div>
    `;
};

let goPokemonPlayer = (data) =>{
    const playerPoke = document.getElementById("activePlayerPokemon");
    var Level = Math.floor((Math.random() * 35 ) + 60);
    const IV = Math.floor(Math.random() * 31);
    const imgSrc = data.sprites.back_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const Base_hp = data.stats[0].base_stat;
    const Final_HP = Math.floor(0.01 * (2 * Base_hp + IV + Math.floor(0.25 * 88)) * Level) + Level + 10;
    let health = Final_HP;
    let healthPerc = 100;
    const Base_Attack = data.stats[1].base_stat;
    const Final_Attack = (Math.floor(0.01 * (2 * Base_Attack + IV + Math.floor(0.25 * 84)) * Level) + 5);
    const Base_Defence = data.stats[2].base_stat;
    const Final_Defence = (Math.floor(0.01 * (2 * Base_Defence + IV + Math.floor(0.25 * 84)) * Level) + 5);
    const Base_Speed = data.stats[5].base_stat;
    const Final_Speed = (Math.floor(0.01 * (2 * Base_Speed + IV + Math.floor(0.25 * 84)) * Level) + 5);
    const Base_SpecialAttack = data.stats[3].base_stat;
    const Final_SpecialAttack = (Math.floor(0.01 * (2 * Base_SpecialAttack + IV + Math.floor(0.25 * 84)) * Level) + 5);
    const Base_SpecialDefence = data.stats[4].base_stat;
    const Final_SpecialDefence = (Math.floor(0.01 * (2 * Base_SpecialDefence + IV + Math.floor(0.25 * 84)) * Level) + 5);
    const ability = data.abilities[0].ability.name;
    pokeData.Level = Level;
    pokeData.IV = IV;
    pokeData.pokeName = pokeName;
    pokeData.Base_hp = Base_hp;
    pokeData.Final_HP = Final_HP;
    pokeData.health = health;
    pokeData.healthPerc = healthPerc;
    pokeData.Base_Attack = Base_Attack;
    pokeData.Final_Attack = Final_Attack;
    pokeData.Base_Defence =Base_Defence;
    pokeData.Final_Defence =Final_Defence;
    pokeData.Base_Speed = Base_Speed;
    pokeData.Final_Speed = Final_Speed;
    pokeData.Base_SpecialAttack = Base_SpecialAttack;
    pokeData.Final_SpecialAttack = Final_SpecialAttack;
    pokeData.Base_SpecialDefence = Base_SpecialDefence;
    pokeData.Final_SpecialDefence = Final_SpecialDefence;
    pokeData.ability = ability;

    playerPoke.innerHTML=`
    <p class="pokeName">${pokeData.pokeName} - L${pokeData.Level}</p>
    <div class ="health">
        <progress id="health" value="${pokeData.health}" max="${pokeData.Final_HP}"></progress>
        <span>${pokeData.healthPerc}%</span>
    </div>
    <img src="${imgSrc}" style="height: 180px; width: 180px;">
    `;

    GenerateActionField(pokeData);
    moveSelector(data);
};

let goPokemonPc = (data1) =>{
    const pcPoke = document.getElementById("activePcPokemon");
    const pcLevel = Math.floor((Math.random() * 35 ) + 60);
    const pcIV = Math.floor(Math.random() * 31);
    const pcImgSrc = data1.sprites.front_default;
    const pcPokeName = data1.name[0].toUpperCase() + data1.name.slice(1);
    const pcBase_hp = data1.stats[0].base_stat;
    const pcFinal_HP = Math.floor(0.01 * (2 * pcBase_hp + pcIV + Math.floor(0.25 * 88)) * pcLevel) + pcLevel + 10;
    let pchealth = pcFinal_HP;
    let pchealthPerc = 100;
    const pcBase_Attack = data1.stats[1].base_stat;
    const pcFinal_Attack = (Math.floor(0.01 * (2 * pcBase_Attack + pcIV + Math.floor(0.25 * 84)) * pcLevel) + 5);
    const pcBase_Defence = data1.stats[2].base_stat;
    const pcFinal_Defence = (Math.floor(0.01 * (2 * pcBase_Defence + pcIV + Math.floor(0.25 * 84)) * pcLevel) + 5);
    const pcBase_Speed = data1.stats[5].base_stat;
    const pcFinal_Speed = (Math.floor(0.01 * (2 * pcBase_Speed + pcIV + Math.floor(0.25 * 84)) * pcLevel) + 5);
    const pcBase_SpecialAttack = data1.stats[3].base_stat;
    const pcFinal_SpecialAttack = (Math.floor(0.01 * (2 * pcBase_SpecialAttack + pcIV + Math.floor(0.25 * 84)) * pcLevel) + 5);
    const pcBase_SpecialDefence = data1.stats[4].base_stat;
    const pcFinal_SpecialDefence = (Math.floor(0.01 * (2 * pcBase_SpecialDefence + pcIV + Math.floor(0.25 * 84)) * pcLevel) + 5);
    const pcability = data1.abilities[0].ability.name;

    pcPokeData.pcLevel = pcLevel;
    pcPokeData.pcIV = pcIV;
    pcPokeData.pcPokeName = pcPokeName;
    pcPokeData.pcBase_hp = pcBase_hp;
    pcPokeData.pcFinal_HP = pcFinal_HP;
    pcPokeData.pchealth = pchealth;
    pcPokeData.pchealthPerc = pchealthPerc;
    pcPokeData.pcBase_Attack = pcBase_Attack;
    pcPokeData.pcFinal_Attack = pcFinal_Attack;
    pcPokeData.pcBase_Defence =pcBase_Defence;
    pcPokeData.pcFinal_Defence =pcFinal_Defence;
    pcPokeData.pcBase_Speed = pcBase_Speed;
    pcPokeData.pcFinal_Speed = pcFinal_Speed;
    pcPokeData.pcBase_SpecialAttack = pcBase_SpecialAttack;
    pcPokeData.pcFinal_SpecialAttack = pcFinal_SpecialAttack;
    pcPokeData.pcBase_SpecialDefence = pcBase_SpecialDefence;
    pcPokeData.pcFinal_SpecialDefence = pcFinal_SpecialDefence;
    pcPokeData.pcability = pcability;

    pcPoke.innerHTML=`
    <p class="pokeName">${pcPokeData.pcPokeName} - L${pcPokeData.pcLevel}</p>
    <div class ="health"><span>${pchealthPerc}%</span><progress id="health" value="${pcPokeData.pchealth}" max="${pcPokeData.pcFinal_HP}"></progress></div>
    <img src="${pcImgSrc}" style="height: 180px; width: 180px;">
    `;

    pcMoveSelector(data1);
};

let moveSelector = (data) => {
    let n = data.moves.length;
    let m1 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove1 = data.moves[m1].move.url;
    let m2 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove2 = data.moves[m2].move.url;
    let m3 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove3 = data.moves[m3].move.url;
    let m4 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove4 = data.moves[m4].move.url;

    fetch(finalUrlMove1)
    .then((Response) => Response.json())
    .then((Data) => {
        move1.name = Data.name;
        move1.type = Data.type.name;
        move1.power = Data.power;
        move1.pp = Data.pp;
        move1.accuracy = Data.accuracy;
        designMove1(Data);
        });
        
    fetch(finalUrlMove2)
    .then((Response) => Response.json())
    .then((Data) => {
        move2.name = Data.name;
        move2.type = Data.type.name;
        move2.power = Data.power;
        move2.pp = Data.pp;
        move2.accuracy = Data.accuracy;
        designMove2(Data);
        });
        
    fetch(finalUrlMove3)
    .then((Response) => Response.json())
    .then((Data) => {
        move3.name = Data.name;
        move3.type = Data.type.name;
        move3.power = Data.power;
        move3.pp = Data.pp;
        move3.accuracy = Data.accuracy;
        designMove3(Data);
        });
        
    fetch(finalUrlMove4)
    .then((Response) => Response.json())
    .then((Data) => {
        move4.name = Data.name;
        move4.type = Data.type.name;
        move4.power = Data.power;
        move4.pp = Data.pp;
        move4.accuracy = Data.accuracy;
        designMove4(Data);
        });
};

let pcMoveSelector = (data) => {
    let n = data.moves.length;
    let m1 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove1 = data.moves[m1].move.url;
    let m2 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove2 = data.moves[m2].move.url;
    let m3 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove3 = data.moves[m3].move.url;
    let m4 = Math.floor(Math.random() * n) + 1;
    const finalUrlMove4 = data.moves[m4].move.url;

    fetch(finalUrlMove1)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove1.name = Data.name;
        pcMove1.type = Data.type.name;
        pcMove1.power = Data.power;
        pcMove1.pp = Data.pp;
        pcMove1.accuracy = Data.accuracy;
        console.log(pcMove1);
        });
        
    fetch(finalUrlMove2)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove2.name = Data.name;
        pcMove2.type = Data.type.name;
        pcMove2.power = Data.power;
        pcMove2.pp = Data.pp;
        pcMove2.accuracy = Data.accuracy;
        console.log(pcMove2);
        });
        
    fetch(finalUrlMove3)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove3.name = Data.name;
        pcMove3.type = Data.type.name;
        pcMove3.power = Data.power;
        pcMove3.pp = Data.pp;
        pcMove3.accuracy = Data.accuracy;
        console.log(pcMove3);
        });
        
    fetch(finalUrlMove4)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove4.name = Data.name;
        pcMove4.type = Data.type.name;
        pcMove4.power = Data.power;
        pcMove4.pp = Data.pp;
        pcMove4.accuracy = Data.accuracy;
        console.log(pcMove4);
        });
};

let designMove1 = (move1Data) => {
    const btn1 = document.getElementById("move1");
    const themeColor1 = typeColor[move1Data.type.name]; 
    let leftpp1 = move1Data.pp;
    btn1.innerHTML = `
    <p>${move1Data.name}</p>
    <small>${move1Data.type.name}</small>
    <small class="pp">pp ${leftpp1}/${move1Data.pp}</small>
    `;

    btn1.style.background = `linear-gradient(to top, ${themeColor1}, white)`;
    btn1.style.borderColor = `${themeColor1}`;
};

let designMove2 = (move2Data) => {
    const btn2 = document.getElementById("move2");
    const themeColor2 = typeColor[move2Data.type.name]; 
    let leftpp2 = move2Data.pp;
    btn2.innerHTML = `
    <p>${move2Data.name}</p>
    <small>${move2Data.type.name}</small>
    <small class="pp">pp ${leftpp2}/${move2Data.pp}</small>
    `;

    btn2.style.background = `linear-gradient(to top, ${themeColor2}, white)`;
    btn2.style.borderColor = `${themeColor2}`;
};

let designMove3 = (move3Data) => {
    const btn3 = document.getElementById("move3");
    const themeColor3 = typeColor[move3Data.type.name]; 
    let leftpp3 = move3Data.pp;
    btn3.innerHTML = `
    <p>${move3Data.name}</p>
    <small>${move3Data.type.name}</small>
    <small class="pp">pp ${leftpp3}/${move3Data.pp}</small>
    `;

    btn3.style.background = `linear-gradient(to top, ${themeColor3}, white)`;
    btn3.style.borderColor = `${themeColor3}`;
};

let designMove4 = (move4Data) => {
    const btn4 = document.getElementById("move4");
    const themeColor4 = typeColor[move4Data.type.name];
    let leftpp4 = move4Data.pp; 
    btn4.innerHTML = `
    <p>${move4Data.name}</p>
    <small>${move4Data.type.name}</small>
    <small class="pp">pp ${leftpp4}/${move4Data.pp}</small>
    `;

    btn4.style.background = `linear-gradient(to top, ${themeColor4}, white)`;
    btn4.style.borderColor = `${themeColor4}`;
};

let GenerateActionField = (pokeData) =>{
    const actionField = document.getElementById("actionField");
    actionField.innerHTML=`
    <div class="action-msg">
        <span>What will <b>${pokeData.pokeName}</b> do?</span>
        <div class="hpBox">
            HP ${pokeData.health}/${pokeData.Final_HP}
        </div>
    </div>
    <div class="Attack-box">
        <div class="attack-text">Attack</div>
        <div class="attack-menu">
            <div class="move-list">
                <button class="move" id="move1">
                   
                </button>
                <button class="move" id="move2">
                    <p>Name</p>
                    <small>type</small>
                    <small class="pp">pp 10/10</small>
                </button>
                <button class="move" id="move3">
                    <p>Name</p>
                    <small>type</small>
                    <small class="pp">pp 10/10</small>
                </button>
                <button class="move" id="move4">
                    <p>Name</p>
                    <small>type</small>
                    <small class="pp">pp 10/10</small>
                </button>
            </div>
        </div>
    </div>
    `;
    addEventListen();
};

let addEventListen = () =>{
    moveBtn1 = document.getElementById("move1");
    moveBtn1.addEventListener("click", function () { Attack(1);});
    moveBtn2 = document.getElementById("move2");
    moveBtn2.addEventListener("click", function () { Attack(2);});
    moveBtn3 = document.getElementById("move3");
    moveBtn3.addEventListener("click", function () { Attack(3);});
    moveBtn4 = document.getElementById("move4");
    moveBtn4.addEventListener("click", function () { Attack(4);});
};

let Attack = (n) => {
    if (n==1)
    {
        console.log(move1);
    }
    else if (n==2) {
        console.log(move2);
    } 
    else if (n==3) {
        console.log(move3);
    }
    else if (n==4) {
        console.log(move4);
    }
};

let loadPokemons = () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/";

    let id = Math.floor(Math.random() * 904) + 1;
    const finalUrl = url + id;
    fetch(finalUrl)
    .then((Response) => Response.json())
    .then((data) => {
        goPokemonPlayer(data);
    });

    let idPc = Math.floor(Math.random() * 904) + 1;
    const finalUrlPc = url + idPc;
    fetch(finalUrlPc)
    .then((Response) => Response.json())
    .then((data1) => {
        goPokemonPc(data1);
    });
};

// let health = document.getElementById("health")
// health.value -= 10; //Or whatever you want to do with it.