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

const screen = document.getElementById("screen");
const btn = document.getElementById("start-btn");

let startGame = () => {
    GenerateBattleField();
    loadPokemons();
}

btn.addEventListener("click", startGame);

let GenerateBattleField = () =>{
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
                <div class="turn-counter" id="turn-counter">Turn 1</div>
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
}

let goPokemonPlayer = (data) =>{
    const playerPoke = document.getElementById("activePlayerPokemon");
    const Level = Math.floor((Math.random() * 35 ) + 60);
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
    let pokeData ={
        Level : Level,
        IV : IV,
        pokeName : pokeName,
        Base_hp : Base_hp,
        Final_HP : Final_HP,
        health : health,
        healthPerc : healthPerc,
        Base_Attack : Base_Attack,
        Final_Attack : Final_Attack,
        Base_Defence : Base_Defence,
        Final_Defence : Final_Defence,
        Base_Speed : Base_Speed,
        Final_Speed : Final_Speed,
        Base_SpecialAttack : Base_SpecialAttack,
        Final_SpecialAttack : Final_SpecialAttack,
        Base_SpecialDefence : Base_SpecialDefence,
        Final_SpecialDefence : Final_SpecialDefence,
        ability : ability
    }

    playerPoke.innerHTML=`
    <p class="pokeName">${pokeName} - L${Level}</p>
    <div class ="health">
        <progress id="health" value="${health}" max="${Final_HP}"></progress>
        <span>${healthPerc}%</span>
    </div>
    <img src="${imgSrc}" style="height: 180px; width: 180px;">
    `;

    GenerateActionField(pokeData);
    moveSelector(data);
}

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

    let pcPokeData ={
        pcLevel : pcLevel,
        pcIV : pcIV,
        pcPokeName : pcPokeName,
        pcBase_hp : pcBase_hp,
        pcFinal_HP : pcFinal_HP,
        pchealth : pchealth,
        pchealthPerc : pchealthPerc,
        pcBase_Attack : pcBase_Attack,
        pcFinal_Attack : pcFinal_Attack,
        pcBase_Defence : pcBase_Defence,
        pcFinal_Defence : pcFinal_Defence,
        pcBase_Speed : pcBase_Speed,
        pcFinal_Speed : pcFinal_Speed,
        pcBase_SpecialAttack : pcBase_SpecialAttack,
        pcFinal_SpecialAttack : pcFinal_SpecialAttack,
        pcBase_SpecialDefence : pcBase_SpecialDefence,
        pcFinal_SpecialDefence : pcFinal_SpecialDefence,
        pcability : pcability
    }

    pcPoke.innerHTML=`
    <p class="pokeName">${pcPokeData.pcPokeName} - L${pcPokeData.pcLevel}</p>
    <div class ="health"><span>${pchealthPerc}%</span><progress id="health" value="${pcPokeData.pchealth}" max="${pcPokeData.pcFinal_HP}"></progress></div>
    <img src="${pcImgSrc}" style="height: 180px; width: 180px;">
    `;
}

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
            let move1Data = Data;
            designMove1(move1Data);
        });
        
    fetch(finalUrlMove2)
    .then((Response) => Response.json())
    .then((Data) => {
            let move2Data = Data;
            designMove2(move2Data);
        });
        
    fetch(finalUrlMove3)
    .then((Response) => Response.json())
    .then((Data) => {
            let move3Data = Data;
            designMove3(move3Data);
        });
        
    fetch(finalUrlMove4)
    .then((Response) => Response.json())
    .then((Data) => {
            let move4Data = Data;
            designMove4(move4Data);
        });
}

let designMove1 = (move1Data) => {
    const btn1 = document.getElementById("move1");
    const themeColor1 = typeColor[move1Data.type.name]; 
    btn1.innerHTML = `
    <p>${move1Data.name}</p>
    <small>${move1Data.type.name}</small>
    <small class="pp">pp ${move1Data.pp}/${move1Data.pp}</small>
    `;

    btn1.style.background = `linear-gradient(to top, ${themeColor1}, white)`;
    btn1.style.borderColor = `${themeColor1}`;
}

let designMove2 = (move2Data) => {
    const btn2 = document.getElementById("move2");
    const themeColor2 = typeColor[move2Data.type.name]; 
    btn2.innerHTML = `
    <p>${move2Data.name}</p>
    <small>${move2Data.type.name}</small>
    <small class="pp">pp ${move2Data.pp}/${move2Data.pp}</small>
    `;

    btn2.style.background = `linear-gradient(to top, ${themeColor2}, white)`;
    btn2.style.borderColor = `${themeColor2}`;
}

let designMove3 = (move3Data) => {
    const btn3 = document.getElementById("move3");
    const themeColor3 = typeColor[move3Data.type.name]; 
    btn3.innerHTML = `
    <p>${move3Data.name}</p>
    <small>${move3Data.type.name}</small>
    <small class="pp">pp ${move3Data.pp}/${move3Data.pp}</small>
    `;

    btn3.style.background = `linear-gradient(to top, ${themeColor3}, white)`;
    btn3.style.borderColor = `${themeColor3}`;
}

let designMove4 = (move4Data) => {
    const btn4 = document.getElementById("move4");
    const themeColor4 = typeColor[move4Data.type.name]; 
    btn4.innerHTML = `
    <p>${move4Data.name}</p>
    <small>${move4Data.type.name}</small>
    <small class="pp">pp ${move4Data.pp}/${move4Data.pp}</small>
    `;

    btn4.style.background = `linear-gradient(to top, ${themeColor4}, white)`;
    btn4.style.borderColor = `${themeColor4}`;
}

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
}

let loadPokemons = () =>{
    const url = "https://pokeapi.co/api/v2/pokemon/";

    let id = Math.floor(Math.random() * 905) + 1;
    const finalUrl = url + id;
    fetch(finalUrl)
    .then((Response) => Response.json())
    .then((data) => {
        goPokemonPlayer(data);
    });

    let idPc = Math.floor(Math.random() * 905) + 1;
    const finalUrlPc = url + idPc;
    fetch(finalUrlPc)
    .then((Response) => Response.json())
    .then((data1) => {
        goPokemonPc(data1);
    });
}

// let health = document.getElementById("health")
// health.value -= 10; //Or whatever you want to do with it.