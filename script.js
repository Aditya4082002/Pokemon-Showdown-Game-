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

const TypeChart = {
    bug: {
        bug: 0,
		dark: 0,
		dragon: 0,
		electric: 0,
		fairy: 0,
		fighting: 2,
		fire: 1,
		flying: 1,
		ghost: 0,
		grass: 2,
		ground: 2,
		ice: 0,
		normal: 0,
		poison: 0,
		psychic: 0,
		rock: 1,
		steel: 0,
		water: 0,
    },
    dark: {
        prankster: 3,
		bug: 1,
		dark: 2,
		dragon: 0,
		electric: 0,
		fairy: 1,
		fighting: 1,
		fire: 0,
		flying: 0,
		ghost: 2,
		grass: 0,
		ground: 0,
		ice: 0,
		normal: 0,
		poison: 0,
		psychic: 3,
		rock: 0,
		steel: 0,
		water: 0,
    },
    dragon: {
        bug: 0,
		dark: 0,
		dragon: 1,
		electric: 2,
		fairy: 1,
		fighting: 0,
		fire: 2,
		flying: 0,
		ghost: 0,
		grass: 2,
		ground: 0,
		ice: 1,
		normal: 0,
		poison: 0,
		psychic: 0,
		rock: 0,
		steel: 0,
		water: 2,
    },
    electric: {
        par: 3,
		bug: 0,
		dark: 0,
		dragon: 0,
		electric: 2,
		fairy: 0,
		fighting: 0,
		fire: 0,
		flying: 2,
		ghost: 0,
		grass: 0,
		ground: 1,
		ice: 0,
		normal: 0,
		poison: 0,
		psychic: 0,
		rock: 0,
		steel: 2,
		water: 0,
    },
    fairy: {
        bug: 2,
		dark: 2,
		dragon: 3,
		electric: 0,
		fairy: 0,
		fighting: 2,
		fire: 0,
		flying: 0,
		ghost: 0,
		grass: 0,
		ground: 0,
		ice: 0,
		normal: 0,
		poison: 1,
		psychic: 0,
		rock: 0,
		steel: 1,
		water: 0,
    },
    fighting: {
        bug: 2,
		dark: 2,
		dragon: 0,
		electric: 0,
		fairy: 1,
		fighting: 0,
		fire: 0,
		flying: 1,
		ghost: 0,
		grass: 0,
		ground: 0,
		ice: 0,
		normal: 0,
		poison: 0,
		psychic: 1,
		rock: 2,
		steel: 0,
		water: 0,
    },
    fire: {
        brn: 3,
		bug: 2,
		dark: 0,
		dragon: 0,
		electric: 0,
		fairy: 2,
		fighting: 0,
		fire: 2,
		flying: 0,
		ghost: 0,
		grass: 2,
		ground: 1,
		ice: 2,
		normal: 0,
		poison: 0,
		psychic: 0,
		rock: 1,
		steel: 2,
		water: 1,
    },
    flying: {
        bug: 2,
		dark: 0,
		dragon: 0,
		electric: 1,
		fairy: 0,
		fighting: 2,
		fire: 0,
		flying: 0,
		ghost: 0,
		grass: 2,
		ground: 3,
		ice: 1,
		normal: 0,
		poison: 0,
		psychic: 0,
		rock: 1,
		steel: 0,
		water: 0,
    },
    ghost: {
        trapped: 3,
		bug: 2,
		dark: 1,
		dragon: 0,
		electric: 0,
		fairy: 0,
		fighting: 3,
		fire: 0,
		flying: 0,
		ghost: 1,
		grass: 0,
		ground: 0,
		ice: 0,
		normal: 3,
		poison: 2,
		psychic: 0,
		rock: 0,
		steel: 0,
		water: 0,
    },
    grass: {
        powder: 3,
        bug: 1,
        dark: 0,
        dragon: 0,
        electric: 2,
        fairy: 0,
        fighting: 0,
        fire: 1,
        flying: 1,
        ghost: 0,
        grass: 2,
        ground: 2,
        ice: 1,
        normal: 0,
        poison: 1,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 2,    
    },
    ground: {
        sandstorm: 3,
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 3,
        fairy: 0,
        fighting: 0,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 1,
        ground: 0,
        ice: 1,
        normal: 0,
        poison: 2,
        psychic: 0,
        rock: 2,
        steel: 0,
        water: 1,
    },
    ice: {
        hail: 3,
        frz: 3,
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 1,
        flying: 0,
        ghost: 0,
        grass: 0,
        ground: 0,
        ice: 2,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 1,
        steel: 1,
        water: 0,
    },
    normal: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 0,
        flying: 0,
        ghost: 3,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 0,
        water: 0,
    },
    poison: {
        psn: 3,
        tox: 3,
        bug: 2,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 2,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 0,
        normal: 0,
        poison: 2,
        psychic: 1,
        rock: 0,
        steel: 0,
        water: 0,
    },
    psychic: {
        bug: 1,
        dark: 1,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 2,
        fire: 0,
        flying: 0,
        ghost: 1,
        grass: 0,
        ground: 0,
        ice: 0,
        normal: 0,
        poison: 0,
        psychic: 2,
        rock: 0,
        steel: 0,
        water: 0,
    },
    rock: {
        sandstorm: 3,
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 0,
        fairy: 0,
        fighting: 1,
        fire: 2,
        flying: 2,
        ghost: 0,
        grass: 1,
        ground: 1,
        ice: 0,
        normal: 2,
        poison: 2,
        psychic: 0,
        rock: 0,
        steel: 1,
        water: 1,
    },
    steel: {
        psn: 3,
        tox: 3,
        sandstorm: 3,
        bug: 2,
        dark: 0,
        dragon: 2,
        electric: 0,
        fairy: 2,
        fighting: 1,
        fire: 1,
        flying: 2,
        ghost: 0,
        grass: 2,
        ground: 1,
        ice: 2,
        normal: 2,
        poison: 3,
        psychic: 2,
        rock: 2,
        steel: 2,
        water: 0,
    },
    water: {
        bug: 0,
        dark: 0,
        dragon: 0,
        electric: 1,
        fairy: 0,
        fighting: 0,
        fire: 2,
        flying: 0,
        ghost: 0,
        grass: 1,
        ground: 0,
        ice: 2,
        normal: 0,
        poison: 0,
        psychic: 0,
        rock: 0,
        steel: 2,
        water: 2,
    }
};

let actionField ;
let battleLog ;

let turn_counter = 1;

let hpbox ;

let pokeData = {};
let pokeHealth ;
let pokeHealthPerc ;
let hover_pokeInfo ;
let move1 = {};
let move2 = {};
let move3 = {};
let move4 = {};

let pcPokeData ={};
let pcPokeHealth ;
let pcPokeHealthPerc ;
let hover_pcPokeInfo ;
let pcMove1 = {};
let pcMove2 = {};
let pcMove3 = {};
let pcMove4 = {};

let moveBtn1;
let moveBtn2;
let moveBtn3;
let moveBtn4;

const screen = document.getElementById("screen");
let btn = document.getElementById("start-btn");

let startGame = () => {
    turn_counter = 1;
    GenerateBattleField();
    loadPokemons();
};

btn.addEventListener("click", startGame);

let showPcInfo = () => {
    hover_pcPokeInfo.style.display = `block`;
};

let hidePcInfo = () => {
    hover_pcPokeInfo.style.display = `none`;
};
let showInfo = () => {
    hover_pokeInfo.style.display = `block`;
};

let hideInfo = () => {
    hover_pokeInfo.style.display = `none`;
};

let GenerateBattleField = () => {
    screen.innerHTML = `
    <div id="battleField">
    <div class="battleField" >
            <div class="player1Box">
                <div class="player1Info">
                    <strong>TLE_Pheonix</strong>
                    <div class="player1Img">
                    </div>
                    </div>
            </div>
            <div class="field">
                <div class="turn-counter" id="turn-counter">Turn ${turn_counter}</div>
                <div class="hover-pcPokeInfo" id="hover-pcPokeInfo">
                <div class="mini-info-box" id="mini-info-box-pc"></div>
                <div class="mini-info-box2" id="mini-info-box2-pc"></div>
                </div>
                <div class="hover-pokeInfo" id="hover-pokeInfo">
                <div class="mini-info-box" id="mini-info-box"></div>
                <div class="mini-info-box2" id="mini-info-box2"></div>
                </div>
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
    <div class="battleRecord" id="battleRecord">
    </div>
    <button class="chat-btn" id="chat-btn" >< chat</button>
    `;
    document.getElementById("chat-btn").addEventListener("click",switch_display);
    document.getElementById("chat-btn").addEventListener("click",switch_display);
    battleLog = document.getElementById("battleRecord");
    hover_pcPokeInfo = document.getElementById("hover-pcPokeInfo");
    hover_pokeInfo = document.getElementById("hover-pokeInfo");
    document.getElementById("activePcPokemon").addEventListener("mouseover",showPcInfo);
    document.getElementById("activePlayerPokemon").addEventListener("mouseover",showInfo);
    document.getElementById("activePcPokemon").addEventListener("mouseout",hidePcInfo);
    document.getElementById("activePlayerPokemon").addEventListener("mouseout",hideInfo);
};

let switch_display = () => {   
    if (document.getElementById("chat-btn").innerHTML == '&lt; chat')
    {
        document.getElementById("battleField").style.display = `none`;
        document.getElementById("battleRecord").style.display = `block`;
        document.getElementById("chat-btn").innerHTML= `battle >`;
    }
    else
    {
        document.getElementById("battleRecord").style.display = `none`;
        document.getElementById("battleField").style.display = `block`;
        document.getElementById("chat-btn").innerHTML= `< chat`;
    }
}

let updateTurn = () => {
    const turn_count = document.getElementById("turn-counter");
    turn_count.innerHTML = `
    Turn ${turn_counter}
    `;
};

let updateInfoBox = () => {
    document.getElementById("mini-info-box").innerHTML = `
    <div>${pokeData.pokeName} <img src="images/gender-m.PNG"> L${pokeData.Level}</div>
    <div><img src="images/${pokeData.Type}.PNG"></div>
    `;
    document.getElementById("mini-info-box2").innerHTML = `
    <div class="space" id="hover-hp-box">HP: ${pokeHealth.value}%(${pokeData.health}/${pokeData.Final_HP})</div>
    <div class="space">Ability: ${pokeData.ability}</div>
    <div class="space">Item: None</div>
    <div class="space">Atk ${pokeData.Final_Attack} / Def ${pokeData.Final_Defence} / SpA ${pokeData.Final_SpecialAttack} / SpD ${pokeData.Final_SpecialDefence} / Spe ${pokeData.Final_Speed}</div>
    `;
};

let updatePcInfoBox = () => {
    document.getElementById("mini-info-box-pc").innerHTML = `
    <div>${pcPokeData.pcPokeName} <img src="images/gender-m.PNG"> L${pcPokeData.pcLevel}</div>
    <div><img src="images/${pcPokeData.pcType}.PNG"></div>
    `;
    document.getElementById("mini-info-box2-pc").innerHTML = `
    <div class="space" id="hover-hp-box">HP: ${pcPokeHealth.value}%</div>
    <div class="space">Possible abilities: ${pcPokeData.pcability}</div>
    <div class="space">Spe: ${pcPokeData.pcFinal_Speed}</div>
    `;
};

let goPokemonPlayer = (data) => {
    const playerPoke = document.getElementById("activePlayerPokemon");
    var Level = Math.floor((Math.random() * 15 ) + 75);
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
    const type = data.types[0].type.name ;
    pokeData.Level = Level;
    pokeData.Type = type;
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
        <progress id="health1" value="100" max="100"></progress>
        <span id="health1perc">100%</span>
    </div>
    <img id="player-poke-Img" src="${imgSrc}" style="height: 180px; width: 180px;">
    `;

    pokeHealth = document.getElementById("health1");
    pokeHealthPerc = document.getElementById("health1perc");

    GenerateActionField(pokeData);
    updateInfoBox();
    moveSelector(data);
};

let goPokemonPc = (data1) => {
    const pcPoke = document.getElementById("activePcPokemon");
    const pcLevel = Math.floor((Math.random() * 15 ) + 75);
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
    const pcType = data1.types[0].type.name ;
    pcPokeData.pcLevel = pcLevel;
    pcPokeData.pcType = pcType;
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
    <div class ="health"><span id="healthperc">100%</span><progress id="health" value="${pcPokeData.pchealth}" max="100"></progress></div>
    <img id="pc-poke-Img" src="${pcImgSrc}" style="height: 180px; width: 180px;">
    `;
    pcPokeHealth = document.getElementById("health");
    pcPokeHealthPerc =document.getElementById("healthperc");

    updatePcInfoBox();
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
        move1.class = Data.damage_class.name;
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
        move2.class = Data.damage_class.name;
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
        move3.class = Data.damage_class.name;
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
        move4.class = Data.damage_class.name;
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
        pcMove1.class = Data.damage_class.name;
        });
        
    fetch(finalUrlMove2)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove2.name = Data.name;
        pcMove2.type = Data.type.name;
        pcMove2.power = Data.power;
        pcMove2.pp = Data.pp;
        pcMove2.accuracy = Data.accuracy;
        pcMove2.class = Data.damage_class.name;
        });
        
    fetch(finalUrlMove3)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove3.name = Data.name;
        pcMove3.type = Data.type.name;
        pcMove3.power = Data.power;
        pcMove3.pp = Data.pp;
        pcMove3.accuracy = Data.accuracy;
        pcMove3.class = Data.damage_class.name;
        });
        
    fetch(finalUrlMove4)
    .then((Response) => Response.json())
    .then((Data) => {
        pcMove4.name = Data.name;
        pcMove4.type = Data.type.name;
        pcMove4.power = Data.power;
        pcMove4.pp = Data.pp;
        pcMove4.accuracy = Data.accuracy;
        pcMove4.class = Data.damage_class.name;
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
    updateMoveinfo(1);
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
    updateMoveinfo(2);
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
    updateMoveinfo(3);
};

let designMove4 = (move4Data) => {
    const btn4 = document.getElementById("move4");
    const themeColor4 = typeColor[move4Data.type.name];
    let leftpp = move4Data.pp; 
    btn4.innerHTML = `
    <p>${move4Data.name}</p>
    <small>${move4Data.type.name}</small>
    <small class="pp">pp ${leftpp}/${move4Data.pp}</small>
    `;

    btn4.style.background = `linear-gradient(to top, ${themeColor4}, white)`;
    btn4.style.borderColor = `${themeColor4}`;
    updateMoveinfo(4);
};

let reDesignMove1 = (move1Data) => {
    const btn1 = document.getElementById("move1");
    const themeColor1 = typeColor[move1Data.type]; 
    let leftpp1 = move1Data.pp;
    btn1.innerHTML = `
    <p>${move1Data.name}</p>
    <small>${move1Data.type}</small>
    <small class="pp">pp ${leftpp1}/${move1Data.pp}</small>
    `;

    btn1.style.background = `linear-gradient(to top, ${themeColor1}, white)`;
    btn1.style.borderColor = `${themeColor1}`;
};

let reDesignMove2 = (move2Data) => {
    const btn2 = document.getElementById("move2");
    const themeColor2 = typeColor[move2Data.type]; 
    let leftpp2 = move2Data.pp;
    btn2.innerHTML = `
    <p>${move2Data.name}</p>
    <small>${move2Data.type}</small>
    <small class="pp">pp ${leftpp2}/${move2Data.pp}</small>
    `;

    btn2.style.background = `linear-gradient(to top, ${themeColor2}, white)`;
    btn2.style.borderColor = `${themeColor2}`;
};

let reDesignMove3 = (move3Data) => {
    const btn3 = document.getElementById("move3");
    const themeColor3 = typeColor[move3Data.type]; 
    let leftpp3 = move3Data.pp;
    btn3.innerHTML = `
    <p>${move3Data.name}</p>
    <small>${move3Data.type}</small>
    <small class="pp">pp ${leftpp3}/${move3Data.pp}</small>
    `;

    btn3.style.background = `linear-gradient(to top, ${themeColor3}, white)`;
    btn3.style.borderColor = `${themeColor3}`;
};

let reDesignMove4 = (move4Data) => {
    const btn4 = document.getElementById("move4");
    const themeColor4 = typeColor[move4Data.type];
    let leftpp = move4Data.pp; 
    btn4.innerHTML = `
    <p>${move4Data.name}</p>
    <small>${move4Data.type}</small>
    <small class="pp">pp ${leftpp}/${move4Data.pp}</small>
    `;

    btn4.style.background = `linear-gradient(to top, ${themeColor4}, white)`;
    btn4.style.borderColor = `${themeColor4}`;
};

let showMoveInfo = (id) => {
    document.getElementById(id).style.display = `block`;
};

let hideMoveInfo = (id) => {
    document.getElementById(id).style.display = `none`;
};

let updateMoveinfo = (id) => {
    let m ;
    let d ;
    switch (id) {
        case 1:
            m = move1;
            d = "hover-move1";
            break;
    
        case 2:
            m = move2;
            d = "hover-move2";
            break;
    
        case 3:
            m = move3;
            d = "hover-move3";
            break;
    
        case 4:
            m = move4;
            d = "hover-move4";
            break;
    }
    document.getElementById(d).innerHTML = `
    <div class="mini-info-box">
        <div>${m.name}</div>
        <div><img src="images/${m.type}.PNG"></div>
    </div>
    <div class="mini-info-box-move">
        <div>Base power: ${m.power}</div>
        <div>Accuracy: ${m.accuracy}%</div>
    </div>
    <div>Effect: Null</div>
    
    `;
};

let GenerateActionField = (pokeData) => {
    actionField = document.getElementById("actionField");
    actionField.innerHTML=`
    <div class="action-msg">
        <span>What will <b>${pokeData.pokeName}</b> do?</span>
        <div class="hpBox" id="hpBox">
            HP ${pokeData.health}/${pokeData.Final_HP}
        </div>
    </div>
    <div class="Attack-box">
        <div class="attack-text">Attack</div>
        <div class="attack-menu">
            <div class="move-list">
                <div class="hover-move" id="hover-move1"></div>
                <div class="hover-move" id="hover-move2"></div>
                <div class="hover-move" id="hover-move3"></div>
                <div class="hover-move" id="hover-move4"></div>
                <button class="move" id="move1">
                </button>
                <button class="move" id="move2">
                </button>
                <button class="move" id="move3">
                </button>
                <button class="move" id="move4">
                </button>
            </div>
        </div>
    </div>
    `;
    hpbox = document.getElementById("hpBox");
    document.getElementById("move1").addEventListener("mouseover",function () { showMoveInfo("hover-move1");});
    document.getElementById("move1").addEventListener("mouseout",function () { hideMoveInfo("hover-move1");});
    document.getElementById("move2").addEventListener("mouseover",function () { showMoveInfo("hover-move2");});
    document.getElementById("move2").addEventListener("mouseout",function () { hideMoveInfo("hover-move2");});
    document.getElementById("move3").addEventListener("mouseover",function () { showMoveInfo("hover-move3");});
    document.getElementById("move3").addEventListener("mouseout",function () { hideMoveInfo("hover-move3");});
    document.getElementById("move4").addEventListener("mouseover",function () { showMoveInfo("hover-move4");});
    document.getElementById("move4").addEventListener("mouseout",function () { hideMoveInfo("hover-move4");});
    addEventListen();

};

let addEventListen = () => {
    moveBtn1 = document.getElementById("move1");
    moveBtn1.addEventListener("click", function () { Attack(1);});
    moveBtn2 = document.getElementById("move2");
    moveBtn2.addEventListener("click", function () { Attack(2);});
    moveBtn3 = document.getElementById("move3");
    moveBtn3.addEventListener("click", function () { Attack(3);});
    moveBtn4 = document.getElementById("move4");
    moveBtn4.addEventListener("click", function () { Attack(4);});
};

let blockActionField = () => {
    actionField.innerHTML=`
    <p>Waiting for next turn...</p>
    `;
};

let updateBattlelog = () => {
    battleLog.innerHTML = battleLog.innerHTML + `
    <div class="turn-record">Turn ${turn_counter}</div>
    `;
};

let unblockActionField = (pokeData) => {
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
                <div class="hover-move" id="hover-move1"></div>
                <div class="hover-move" id="hover-move2"></div>
                <div class="hover-move" id="hover-move3"></div>
                <div class="hover-move" id="hover-move4"></div>
                <button class="move" id="move1">
                </button>
                <button class="move" id="move2">
                </button>
                <button class="move" id="move3">
                </button>
                <button class="move" id="move4">
                </button>
            </div>
        </div>
    </div>
    `;
    reDesignMove1(move1);
    reDesignMove2(move2);
    reDesignMove3(move3);
    reDesignMove4(move4);
    updateMoveinfo(1);
    updateMoveinfo(2);
    updateMoveinfo(3);
    updateMoveinfo(4);
    document.getElementById("move1").addEventListener("mouseover",function () { showMoveInfo("hover-move1");});
    document.getElementById("move1").addEventListener("mouseout",function () { hideMoveInfo("hover-move1");});
    document.getElementById("move2").addEventListener("mouseover",function () { showMoveInfo("hover-move2");});
    document.getElementById("move2").addEventListener("mouseout",function () { hideMoveInfo("hover-move2");});
    document.getElementById("move3").addEventListener("mouseover",function () { showMoveInfo("hover-move3");});
    document.getElementById("move3").addEventListener("mouseout",function () { hideMoveInfo("hover-move3");});
    document.getElementById("move4").addEventListener("mouseover",function () { showMoveInfo("hover-move4");});
    document.getElementById("move4").addEventListener("mouseout",function () { hideMoveInfo("hover-move4");});
    addEventListen();
};

let reload = () => {
    screen.innerHTML = `
    <div class="container" id="container">
        <div class="back"><button id="start-btn">Battle!<p class="white">Play with pc</p></button></div>
    </div>
    `;
    btn = document.getElementById("start-btn");
    btn.addEventListener("click", startGame);
};

let declareWinner = (Name,pokename) => {
    actionField.innerHTML = `
    <center><strong>${Name} Won The Battle</strong></center>
    <div class="afterMatchMenu">
        <button class="afterMatchBtn" id="rematch">Rematch</button>
        <button class="afterMatchBtn" id="mainMenu">Main menu</button>
    </div>
    `;
    battleLog.innerHTML = battleLog.innerHTML + `
    <div>${pokename} Fainted!</div>
    `;
    document.getElementById("rematch").addEventListener("click",startGame);
    document.getElementById("mainMenu").addEventListener("click",reload);
    throw 'Game End';
};

let winnerCheck = () => {
    if (pcPokeHealth.value == 0)
    {
        declareWinner("TLE_Pheonix",pcPokeData.pcPokeName);
    }
    if (pokeHealth.value == 0)
    {
        declareWinner("PC",pokeData.pokeName);
    }
};

let effectivenessChecker = (mov) => {
    let a = 1;
    let b = TypeChart[pcPokeData.pcType][mov.type];

    if(b == 1)
    {
        a = 2;
    }
    else if (b == 2)
    {
        a = 0.5;
    }
    else if (b == 3)
    {
        a = 0;
    }
    return a;
};

let pcEffectivenessChecker = (mov) => {
    let a = 1;
    let b = TypeChart[pokeData.Type][mov.type];

    if(b == 1)
    {
        a = 2;
    }
    else if (b == 2)
    {
        a = 0.5;
    }
    else if (b == 3)
    {
        a = 0;
    }
    return a;
};

let Turn = (playerMove, pcMove) => {
    winnerCheck();
    let plyAtt ;
    let plyDef ;
    let pcAtt ;
    let pcDef ;
    if (playerMove.power == null)
    {
        playerMove.power = (Math.floor(Math.random() * 10) + 1) * 5;
    }
    if (pcMove.power == null)
    {
        pcMove.power = (Math.floor(Math.random() * 10) + 1) * 5;
    }

    if (playerMove.damage_class == "special")
    {
        plyAtt = pokeData.Final_SpecialAttack;
        pcDef = pcPokeData.pcFinal_SpecialDefence;
    }
    else
    {
        plyAtt = pokeData.Final_Attack;
        pcDef = pcPokeData.pcFinal_Defence;
    }

    if (pcMove.damage_class == "special")
    {
        pcAtt = pcPokeData.pcFinal_SpecialAttack;
        plyDef = pokeData.Final_SpecialDefence;
    }
    else
    {
        pcAtt = pcPokeData.pcFinal_Attack;
        plyDef = pokeData.Final_Defence;
    }

    let type = effectivenessChecker(playerMove);

    let pcType = pcEffectivenessChecker(pcMove);

    let critical = 1;
    let criticalPc = 1;
    let criticalChance = Math.floor((Math.random() * 100)+1);
    let criticalChancePc = Math.floor((Math.random() * 100)+1);
    if (criticalChance >= 0 && criticalChance <=5)
    {
        critical = 1.5;
    }
    if (criticalChancePc >= 0 && criticalChancePc <=5)
    {
        criticalPc = 1.5;
    }

    let random = (Math.floor((Math.random() * 15) + 85))/100;
    let randomPc = (Math.floor((Math.random() * 15) + 85))/100;

    let damage = Math.floor(((((((2*pokeData.Level)/5)+2)*playerMove.power*(plyAtt/pcDef))/50)+2)*critical*random*type);
    let pcDamage = Math.floor(((((((2*pcPokeData.pcLevel)/5)+2)*pcMove.power*(pcAtt/plyDef))/50)+2)*criticalPc*randomPc*pcType);

    let damageperc ;
    damageperc = Math.floor((damage/pcPokeData.pcFinal_HP)*100);
    if(damageperc > pcPokeHealth.value)
    {
        damageperc = pcPokeHealth.value;
    }
    let pcDamageperc ;

    pcDamageperc = Math.floor((pcDamage/pokeData.Final_HP)*100);
    if(pcDamageperc > pokeHealth.value)
    {
        pcDamageperc = pokeHealth.value;
    }

    updateBattlelog();

    if (pcPokeData.pcFinal_Speed > pokeData.Final_Speed)
    {
        pokeHealth.value -= pcDamageperc;
        pokeHealthPerc.innerHTML = `
        ${pokeHealth.value}%
        `;
        updateInfoBox();

        if (criticalPc == 1.5)
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pokeData.pokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
        }
        else
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pokeData.pokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
        }
        
        pokeData.health -= pcDamage;
        hpbox.innerHTML = `HP ${pokeData.health}/${pokeData.Final_HP}`;
        updateInfoBox();
        winnerCheck();

        pcPokeHealth.value -= damageperc;
        pcPokeHealthPerc.innerHTML = `
        ${pcPokeHealth.value}%
        `;
        updatePcInfoBox();

        if (critical == 1.5)
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pcPokeData.pcPokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
        }
        else
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pcPokeData.pcPokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
        }
        
        winnerCheck();
    }
    else
    {
        pcPokeHealth.value -= damageperc;
        pcPokeHealthPerc.innerHTML = `
        ${pcPokeHealth.value}%
        `;
        updatePcInfoBox();

        if (critical == 1.5)
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pcPokeData.pcPokeName}</div>
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
        }
        else
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;  
                  break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                  break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pcPokeData.pcPokeName}</div>
                    `;
                  break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>(${pcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
            
        }
        
        winnerCheck();
        
        pokeHealth.value -= pcDamageperc;
        pokeHealthPerc.innerHTML = `
        ${pokeHealth.value}%
        `;
        updateInfoBox();

        if (criticalPc == 1.5)
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pcPokeData.pcPokeName}</div>
                    `;
                  break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
            
        }
        else
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${pcPokeData.pcPokeName}</div>
                    `;
                  break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${pcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>(${pokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
        }
        
        pokeData.health -= pcDamage;
        hpbox.innerHTML = `HP ${pokeData.health}/${pokeData.Final_HP}`;
        updateInfoBox();
        winnerCheck();
    }
    
    unblockActionField(pokeData);
    turn_counter++;
    updateTurn();
};

let Attack = (n) => {
    let m = Math.floor(Math.random() * 4) + 1;
    let randomPcMove;
    if (m==1)
    {
        randomPcMove = pcMove1;
    }
    else if(m==2)
    {
        randomPcMove = pcMove2;
    }
    else if(m==3)
    {
        randomPcMove = pcMove3;
    }
    else if(m==4)
    {
        randomPcMove = pcMove4;
    }

    if (n==1)
    {
        blockActionField();
        Turn(move1, randomPcMove);
    }
    else if (n==2) {
        blockActionField();
        Turn(move2, randomPcMove);
    } 
    else if (n==3) {
        blockActionField();
        Turn(move3, randomPcMove);
    }
    else if (n==4) {
        blockActionField();
        Turn(move4, randomPcMove);
    }
};

let loadPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    let id = Math.floor(Math.random() * 905) + 1;
    // let id = 3;
    const finalUrl = url + id;
    fetch(finalUrl)
    .then((Response) => Response.json())
    .then((data) => {
        goPokemonPlayer(data);
    });

    let idPc = Math.floor(Math.random() * 905) + 1;
    // let idPc = 6;
    const finalUrlPc = url + idPc;
    fetch(finalUrlPc)
    .then((Response) => Response.json())
    .then((data1) => {
        goPokemonPc(data1);
    });
};