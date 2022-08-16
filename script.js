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

let pokeHealth;
let pokeHealthPerc;
let pcPokeHealth;
let pcPokeHealthPerc;
let hpbox; 

let battleLog;
let turn_counter = 1;

let activePokeData ={};
const poke1Data ={
    Move1:{},
    Move2:{},
    Move3:{},
    Move4:{},
};
const poke2Data ={
    Move1:{},
    Move2:{},
    Move3:{},
    Move4:{},
};
const poke3Data ={
    Move1:{},
    Move2:{},
    Move3:{},
    Move4:{},
};
const poke4Data ={
    Move1:{},
    Move2:{},
    Move3:{},
    Move4:{},
};
const poke5Data ={
    Move1:{},
    Move2:{},
    Move3:{},
    Move4:{},
};
const poke6Data ={
    Move1:{},
    Move2:{},
    Move3:{},
    Move4:{},
};

let activePcPokeData ={};
const pcPoke1Data = {
    pcMove1:{},
    pcMove2:{},
    pcMove3:{},
    pcMove4:{},
};
const pcPoke2Data = {
    pcMove1:{},
    pcMove2:{},
    pcMove3:{},
    pcMove4:{},
};
const pcPoke3Data = {
    pcMove1:{},
    pcMove2:{},
    pcMove3:{},
    pcMove4:{},
};
const pcPoke4Data = {
    pcMove1:{},
    pcMove2:{},
    pcMove3:{},
    pcMove4:{},
};
const pcPoke5Data = {
    pcMove1:{},
    pcMove2:{},
    pcMove3:{},
    pcMove4:{},
};
const pcPoke6Data = {
    pcMove1:{},
    pcMove2:{},
    pcMove3:{},
    pcMove4:{},
};

const screen = document.getElementById("screen");
let btn = document.getElementById("start-btn");

let startGame = () => {
    turn_counter = 1;
    GenerateBattleField();
    loadPokemons();
};

btn.addEventListener("click", startGame);

let GenerateBattleField = () => {
    let a = Math.floor(Math.random() * 17) + 1;
    screen.innerHTML = `
    <div id="battleField">
    <audio autoplay="autoplay" loop="true">
     <source src="Pokemon Music.mp3" />     
    </audio>
    <div class="battleField" id="background" style="background-image: url(images/battleground${a}.jpg)">
            <div class="player1Box">
                <div class="player1Info">
                    <center><strong>Pheonix</strong></center>
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
};

let showPcInfo = () => {
    document.getElementById("hover-pcPokeInfo").style.display = `block`;
};

let hidePcInfo = () => {
    document.getElementById("hover-pcPokeInfo").style.display = `none`;
};

let showInfo = () => {
    document.getElementById("hover-pokeInfo").style.display = `block`;
};

let hideInfo = () => {
    document.getElementById("hover-pokeInfo").style.display = `none`;
};

let loadPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    for (let i = 1; i < 7 ; i++) 
    {
        let id = Math.floor(Math.random() * 890) + 1;
        const finalUrl = url + id;
         fetch(finalUrl)
        .then((Response) => Response.json())
        .then((data) => {
            if (i==1) 
            {
                addAllPokemon(poke1Data,data);
                goPokemonPlayer(1);
            }
            else if (i==2) 
            {
                addAllPokemon(poke2Data,data);
            }
            else if (i==3) 
            {
                addAllPokemon(poke3Data,data);
            }
            else if (i==4) 
            {
                addAllPokemon(poke4Data,data);
            }
            else if (i==5) 
            {
                addAllPokemon(poke5Data,data);
            }
            else if (i==6) 
            {
                addAllPokemon(poke6Data,data);
            } 
        });    
    }

    for (let i = 1; i < 7 ; i++) 
    {
        let idPc = Math.floor(Math.random() * 890) + 1;
        const finalUrlPc = url + idPc;
        fetch(finalUrlPc)
        .then((Response) => Response.json())
        .then((data1) => {
            if (i==1) 
            {
                addAllPcPokemon(pcPoke1Data,data1);
                goPokemonPc(1);
            }
            else if (i==2) 
            {
                addAllPcPokemon(pcPoke2Data,data1);
            }
            else if (i==3) 
            {
                addAllPcPokemon(pcPoke3Data,data1);
            }
            else if (i==4) 
            {
                addAllPcPokemon(pcPoke4Data,data1);
            }
            else if (i==5) 
            {
                addAllPcPokemon(pcPoke5Data,data1);
            }
            else if (i==6) 
            {
                addAllPcPokemon(pcPoke6Data,data1);
            }
        });    
    }
};

let addAllPokemon = (pokevar,data) => {
    pokevar.icon = data.sprites.versions["generation-vii"].icons.front_default;
    pokevar.imgSrc = "https://play.pokemonshowdown.com/sprites/ani-back/"+data.name+".gif";
    pokevar.Level = Math.floor((Math.random() * 15 ) + 75);
    pokevar.Type =  data.types[0].type.name ;
    pokevar.IV = Math.floor(Math.random() * 31);
    pokevar.pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    pokevar.Base_hp = data.stats[0].base_stat;
    pokevar.Final_HP = Math.floor(0.01 * (2 * pokevar.Base_hp + pokevar.IV + Math.floor(0.25 * 88)) * pokevar.Level) + pokevar.Level + 10;
    pokevar.health = pokevar.Final_HP;
    pokevar.healthPerc = 100;
    pokevar.Base_Attack = data.stats[1].base_stat;
    pokevar.Final_Attack = Math.floor(0.01 * (2 * pokevar.Base_Attack + pokevar.IV + Math.floor(0.25 * 84)) * pokevar.Level) + 5;
    pokevar.Base_Defence = data.stats[2].base_stat;
    pokevar.Final_Defence = Math.floor(0.01 * (2 * pokevar.Base_Defence + pokevar.IV + Math.floor(0.25 * 84)) * pokevar.Level) + 5;
    pokevar.Base_Speed = data.stats[5].base_stat;
    pokevar.Final_Speed = Math.floor(0.01 * (2 * pokevar.Base_Speed + pokevar.IV + Math.floor(0.25 * 84)) * pokevar.Level) + 5;
    pokevar.Base_SpecialAttack = data.stats[3].base_stat;
    pokevar.Final_SpecialAttack = Math.floor(0.01 * (2 * pokevar.Base_SpecialAttack + pokevar.IV + Math.floor(0.25 * 84)) * pokevar.Level) + 5;
    pokevar.Base_SpecialDefence = data.stats[4].base_stat;
    pokevar.Final_SpecialDefence = Math.floor(0.01 * (2 * pokevar.Base_SpecialDefence + pokevar.IV + Math.floor(0.25 * 84)) * pokevar.Level) + 5;
    pokevar.ability = data.abilities[0].ability.name;

    let n = data.moves.length - 1;
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
        pokevar.Move1.name =  Data.name;
        pokevar.Move1.type =  Data.type.name;
        pokevar.Move1.power =  Data.power;
        pokevar.Move1.pp =  Data.pp;
        pokevar.Move1.accuracy =  Data.accuracy;
        pokevar.Move1.class =  Data.damage_class;
    });
        
    fetch(finalUrlMove2)
    .then((Response) => Response.json())
    .then((Data) => {
        pokevar.Move2.name =  Data.name;
        pokevar.Move2.type =  Data.type.name;
        pokevar.Move2.power =  Data.power;
        pokevar.Move2.pp =  Data.pp;
        pokevar.Move2.accuracy =  Data.accuracy;
        pokevar.Move2.class =  Data.damage_class;
    });
        
    fetch(finalUrlMove3)
    .then((Response) => Response.json())
    .then((Data) => {
        pokevar.Move3.name =  Data.name;
        pokevar.Move3.type =  Data.type.name;
        pokevar.Move3.power =  Data.power;
        pokevar.Move3.pp =  Data.pp;
        pokevar.Move3.accuracy =  Data.accuracy;
        pokevar.Move3.class =  Data.damage_class;
    });
        
    fetch(finalUrlMove4)
    .then((Response) => Response.json())
    .then((Data) => {
        pokevar.Move4.name =  Data.name;
        pokevar.Move4.type =  Data.type.name;
        pokevar.Move4.power =  Data.power;
        pokevar.Move4.pp =  Data.pp;
        pokevar.Move4.accuracy =  Data.accuracy;
        pokevar.Move4.class =  Data.damage_class;
    });
};

let addAllPcPokemon = (pokevar,data) => {
    pokevar.pcIcon = data.sprites.versions["generation-vii"].icons.front_default;
    pokevar.pcImgSrc = "https://play.pokemonshowdown.com/sprites/ani/"+data.name+".gif";
    pokevar.pcLevel = Math.floor((Math.random() * 15 ) + 75);
    pokevar.pcType =  data.types[0].type.name ;
    pokevar.pcIV = Math.floor(Math.random() * 31);
    pokevar.pcPokeName = data.name[0].toUpperCase() + data.name.slice(1);
    pokevar.pcBase_hp = data.stats[0].base_stat;
    pokevar.pcFinal_HP = Math.floor(0.01 * (2 * pokevar.pcBase_hp + pokevar.pcIV + Math.floor(0.25 * 88)) * pokevar.pcLevel) + pokevar.pcLevel + 10;
    pokevar.pchealth = pokevar.pcFinal_HP;
    pokevar.pchealthPerc = 100;
    pokevar.pcBase_Attack = data.stats[1].base_stat;
    pokevar.pcFinal_Attack = Math.floor(0.01 * (2 * pokevar.pcBase_Attack + pokevar.pcIV + Math.floor(0.25 * 84)) * pokevar.pcLevel) + 5;
    pokevar.pcBase_Defence = data.stats[2].base_stat;
    pokevar.pcFinal_Defence = Math.floor(0.01 * (2 * pokevar.pcBase_Defence + pokevar.pcIV + Math.floor(0.25 * 84)) * pokevar.pcLevel) + 5;
    pokevar.pcBase_Speed = data.stats[5].base_stat;
    pokevar.pcFinal_Speed = Math.floor(0.01 * (2 * pokevar.pcBase_Speed + pokevar.pcIV + Math.floor(0.25 * 84)) * pokevar.pcLevel) + 5;
    pokevar.pcBase_SpecialAttack = data.stats[3].base_stat;
    pokevar.pcFinal_SpecialAttack = Math.floor(0.01 * (2 * pokevar.pcBase_SpecialAttack + pokevar.pcIV + Math.floor(0.25 * 84)) * pokevar.pcLevel) + 5;
    pokevar.pcBase_SpecialDefence = data.stats[4].base_stat;
    pokevar.pcFinal_SpecialDefence = Math.floor(0.01 * (2 * pokevar.pcBase_SpecialDefence + pokevar.pcIV + Math.floor(0.25 * 84)) * pokevar.pcLevel) + 5;
    pokevar.pcability = data.abilities[0].ability.name;


    let n = data.moves.length - 1;
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
        pokevar.pcMove1.name =  Data.name;
        pokevar.pcMove1.type =  Data.type.name;
        pokevar.pcMove1.power =  Data.power;
        pokevar.pcMove1.pp =  Data.pp;
        pokevar.pcMove1.accuracy =  Data.accuracy;
        pokevar.pcMove1.class =  Data.damage_class;
    });
        
    fetch(finalUrlMove2)
    .then((Response) => Response.json())
    .then((Data) => {
        pokevar.pcMove1.name =  Data.name;
        pokevar.pcMove1.type =  Data.type.name;
        pokevar.pcMove1.power =  Data.power;
        pokevar.pcMove1.pp =  Data.pp;
        pokevar.pcMove1.accuracy =  Data.accuracy;
        pokevar.pcMove1.class =  Data.damage_class;
    });
        
    fetch(finalUrlMove3)
    .then((Response) => Response.json())
    .then((Data) => {
        pokevar.pcMove1.name =  Data.name;
        pokevar.pcMove1.type =  Data.type.name;
        pokevar.pcMove1.power =  Data.power;
        pokevar.pcMove1.pp =  Data.pp;
        pokevar.pcMove1.accuracy =  Data.accuracy;
        pokevar.pcMove1.class =  Data.damage_class;
    });
        
    fetch(finalUrlMove4)
    .then((Response) => Response.json())
    .then((Data) => {
        pokevar.pcMove1.name =  Data.name;
        pokevar.pcMove1.type =  Data.type.name;
        pokevar.pcMove1.power =  Data.power;
        pokevar.pcMove1.pp =  Data.pp;
        pokevar.pcMove1.accuracy =  Data.accuracy;
        pokevar.pcMove1.class =  Data.damage_class;
    });
};

let goPokemonPlayer = (n) => {
    switch (n) {
        case 1:
            activePokeData = poke1Data;
            break;
        case 2:
            activePokeData = poke2Data;
            break;
        case 3:
            activePokeData = poke3Data;
            break;
        case 4:
            activePokeData = poke4Data;
            break;
        case 5:
            activePokeData = poke5Data;
            break;
        case 6:
            activePokeData = poke6Data;
            break;
    }

    document.getElementById("activePlayerPokemon").innerHTML=`
    <p class="pokeName">${activePokeData.pokeName} - L${activePokeData.Level}</p>
    <div class ="health">
        <progress id="health1" value="${activePokeData.healthPerc}" max="100"></progress>
        <span id="health1perc">${activePokeData.healthPerc}%</span>
    </div>
    <img id="player-poke-Img" src="${activePokeData.imgSrc}" >
    <audio autoplay="autoplay">
     <source src="http://play.pokemonshowdown.com/audio/cries/${activePokeData.pokeName.toLowerCase()}.mp3"/>     
    </audio>
    `;

    pokeHealth = document.getElementById("health1");
    pokeHealthPerc = document.getElementById("health1perc");

    updateInfoBox();
    GenerateActionField(activePokeData);
};

let goPokemonPc = (n) => {
    switch (n) {
        case 1:
            activePcPokeData = pcPoke1Data;
            break;
        case 2:
            activePcPokeData = pcPoke2Data;
            break;
        case 3:
            activePcPokeData = pcPoke3Data;
            break;
        case 4:
            activePcPokeData = pcPoke4Data;
            break;
        case 5:
            activePcPokeData = pcPoke5Data;
            break;
        case 6:
            activePcPokeData = pcPoke6Data;
            break;
    }

    document.getElementById("activePcPokemon").innerHTML=`
    <p class="pokeName">${activePcPokeData.pcPokeName} - L${activePcPokeData.pcLevel}</p>
    <div class ="health"><span id="healthperc">100%</span><progress id="health" value="${activePcPokeData.pchealth}" max="100"></progress></div>
    <img id="pc-poke-Img" src="${activePcPokeData.pcImgSrc}" >
    `;
    pcPokeHealth = document.getElementById("health");
    pcPokeHealthPerc =document.getElementById("healthperc");

    updatePcInfoBox();
};

let GenerateActionField = (pokeData) => {
    setTimeout(function(){
    document.getElementById("actionField").innerHTML=`
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
    <div class="switchBox">
        <div class="switch-text">Switch</div>
        <div class="move-list">
            <button class="benched-pokemon" id="benched-pokemon1">
                <img src="${poke1Data.icon}">
                <span class="small-pokename">${poke1Data.pokeName}</span>
                <progress class="mini-health" id="health2" value="${poke1Data.healthPerc}" max="100"></progress>
            </button>
            <button class="benched-pokemon" id="benched-pokemon2">
                <img src="${poke2Data.icon}">
                <span class="small-pokename">${poke2Data.pokeName}</span>
                <progress class="mini-health" id="health2" value="${poke2Data.healthPerc}" max="100"></progress>
            </button>
            <button class="benched-pokemon" id="benched-pokemon3">
                <img src="${poke3Data.icon}">    
                <span class="small-pokename">${poke3Data.pokeName}</span>
                <progress class="mini-health" id="health2" value="${poke3Data.healthPerc}" max="100"></progress>
            </button>
            <button class="benched-pokemon" id="benched-pokemon4">
                <img src="${poke4Data.icon}">    
                <span class="small-pokename">${poke4Data.pokeName}</span>
                <progress class="mini-health" id="health2" value="${poke4Data.healthPerc}" max="100"></progress>
            </button>
            <button class="benched-pokemon" id="benched-pokemon5">
                <img src="${poke5Data.icon}">    
                <span class="small-pokename">${poke5Data.pokeName}</span>
                <progress class="mini-health" id="health2" value="${poke5Data.healthPerc}" max="100"></progress>
            </button>
            <button class="benched-pokemon" id="benched-pokemon6">
                <img src="${poke6Data.icon}">
                <span class="small-pokename">${poke6Data.pokeName}</span>
                <progress class="mini-health" id="health2" value="${poke6Data.healthPerc}" max="100"></progress>
            </button>
        </div>
    </div>
    `;
    hpbox = document.getElementById("hpBox");
    designMove1(activePokeData);
    designMove2(activePokeData);
    designMove3(activePokeData);
    designMove4(activePokeData);
    document.getElementById("move1").addEventListener("mouseover",function () { showMoveInfo("hover-move1");});
    document.getElementById("move1").addEventListener("mouseout",function () { hideMoveInfo("hover-move1");});
    document.getElementById("move2").addEventListener("mouseover",function () { showMoveInfo("hover-move2");});
    document.getElementById("move2").addEventListener("mouseout",function () { hideMoveInfo("hover-move2");});
    document.getElementById("move3").addEventListener("mouseover",function () { showMoveInfo("hover-move3");});
    document.getElementById("move3").addEventListener("mouseout",function () { hideMoveInfo("hover-move3");});
    document.getElementById("move4").addEventListener("mouseover",function () { showMoveInfo("hover-move4");});
    document.getElementById("move4").addEventListener("mouseout",function () { hideMoveInfo("hover-move4");});
    addEventListen();
    }, 500);
};

let updateInfoBox = () => {
    document.getElementById("mini-info-box").innerHTML = `
    <div>${activePokeData.pokeName} <img src="images/gender-m.png"> L${activePokeData.Level}</div>
    <div><img class="pixelated" src="images/${activePokeData.Type}.png"></div>
    `;
    document.getElementById("mini-info-box2").innerHTML = `
    <div class="space" id="hover-hp-box">HP: ${pokeHealth.value}%(${activePokeData.health}/${activePokeData.Final_HP})</div>
    <div class="space">Ability: ${activePokeData.ability}</div>
    <div class="space">Item: None</div>
    <div class="space">Atk ${activePokeData.Final_Attack} / Def ${activePokeData.Final_Defence} / SpA ${activePokeData.Final_SpecialAttack} / SpD ${activePokeData.Final_SpecialDefence} / Spe ${activePokeData.Final_Speed}</div>
    `;
};

let updatePcInfoBox = () => {
    document.getElementById("mini-info-box-pc").innerHTML = `
    <div>${activePcPokeData.pcPokeName} <img src="images/gender-m.png"> L${activePcPokeData.pcLevel}</div>
    <div><img class="pixelated" src="images/${activePcPokeData.pcType}.png"></div>
    `;
    document.getElementById("mini-info-box2-pc").innerHTML = `
    <div class="space" id="hover-hp-box">HP: ${pcPokeHealth.value}%</div>
    <div class="space">Possible abilities: ${activePcPokeData.pcability}</div>
    <div class="space">Spe: ${activePcPokeData.pcFinal_Speed}</div>
    `;
};

let addEventListen = () => {
    document.getElementById("move1").addEventListener("click", function () { Attack(1);});
    document.getElementById("move2").addEventListener("click", function () { Attack(2);});
    document.getElementById("move3").addEventListener("click", function () { Attack(3);});
    document.getElementById("move4").addEventListener("click", function () { Attack(4);});
    document.getElementById("benched-pokemon1").addEventListener("click", function () {switchPoke(1)});
    document.getElementById("benched-pokemon2").addEventListener("click", function () {switchPoke(2)});
    document.getElementById("benched-pokemon3").addEventListener("click", function () {switchPoke(3)});
    document.getElementById("benched-pokemon4").addEventListener("click", function () {switchPoke(4)});
    document.getElementById("benched-pokemon5").addEventListener("click", function () {switchPoke(5)});
    document.getElementById("benched-pokemon6").addEventListener("click", function () {switchPoke(6)});
};

let switchPoke = (n) => {
    switch (n) {
        case 1:
            activePokeData = poke1Data;
            goPokemonPlayer(1);
            blockActionField();
            break;
        case 2:
            activePokeData = poke2Data;
            goPokemonPlayer(2);
            blockActionField();
            break;
        case 3:
            activePokeData = poke3Data;
            goPokemonPlayer(3);
            blockActionField();
            break;
        case 4:
            activePokeData = poke4Data;
            goPokemonPlayer(4);
            blockActionField();
            break;
        case 5:
            activePokeData = poke5Data;
            goPokemonPlayer(5);
            blockActionField();
            break;
        case 6:
            activePokeData = poke6Data;
            goPokemonPlayer(6);
            blockActionField();
            break;
    }
    
};

let showMoveInfo = (id) => {
    document.getElementById(id).style.display = `block`;
};

let hideMoveInfo = (id) => {
    document.getElementById(id).style.display = `none`;
};

let designMove1 = (activePokeData) => {
    setTimeout(function(){
        const btn1 = document.getElementById("move1");
        const themeColor1 = typeColor[activePokeData.Move1.type]; 
        let leftpp1 = activePokeData.Move1.pp;
        btn1.innerHTML = `
        <p>${activePokeData.Move1.name}</p>
        <small>${activePokeData.Move1.type}</small>
        <small class="pp">pp ${leftpp1}/${activePokeData.Move1.pp}</small>
        `;

        btn1.style.background = `linear-gradient(to top, ${themeColor1}, white)`;
        btn1.style.borderColor = `${themeColor1}`; 
        updateMoveinfo(1);
    }, 500);
};

let designMove2 = (activePokeData) => {
    setTimeout(function(){
        const btn2 = document.getElementById("move2");
        const themeColor2 = typeColor[activePokeData.Move2.type]; 
        let leftpp2 = activePokeData.Move2.pp;
        btn2.innerHTML = `
        <p>${activePokeData.Move2.name}</p>
        <small>${activePokeData.Move2.type}</small>
        <small class="pp">pp ${leftpp2}/${activePokeData.Move2.pp}</small>
        `;

        btn2.style.background = `linear-gradient(to top, ${themeColor2}, white)`;
        btn2.style.borderColor = `${themeColor2}`; 
        updateMoveinfo(2);
    }, 500);
};

let designMove3 = (activePokeData) => {
    setTimeout(function(){
        const btn3 = document.getElementById("move3");
        const themeColor3 = typeColor[activePokeData.Move3.type]; 
        let leftpp3 = activePokeData.Move3.pp;
        btn3.innerHTML = `
        <p>${activePokeData.Move3.name}</p>
        <small>${activePokeData.Move3.type}</small>
        <small class="pp">pp ${leftpp3}/${activePokeData.Move3.pp}</small>
        `;

        btn3.style.background = `linear-gradient(to top, ${themeColor3}, white)`;
        btn3.style.borderColor = `${themeColor3}`; 
        updateMoveinfo(3);
    }, 500);
};

let designMove4 = (activePokeData) => {
    setTimeout(function(){
        const btn4 = document.getElementById("move4");
        const themeColor4 = typeColor[activePokeData.Move4.type]; 
        let leftpp4 = activePokeData.Move4.pp;
        btn4.innerHTML = `
        <p>${activePokeData.Move4.name}</p>
        <small>${activePokeData.Move4.type}</small>
        <small class="pp">pp ${leftpp4}/${activePokeData.Move4.pp}</small>
        `;

        btn4.style.background = `linear-gradient(to top, ${themeColor4}, white)`;
        btn4.style.borderColor = `${themeColor4}`; 
        updateMoveinfo(4);
    }, 500);
};

let updateMoveinfo = (id) => {
    let m ;
    let d ;
    switch (id) {
        case 1:
            m = activePokeData.Move1;
            d = "hover-move1";
            break;
    
        case 2:
            m = activePokeData.Move2;
            d = "hover-move2";
            break;
    
        case 3:
            m = activePokeData.Move3;
            d = "hover-move3";
            break;
    
        case 4:
            m = activePokeData.Move4;
            d = "hover-move4";
            break;
    }
    document.getElementById(d).innerHTML = `
    <div class="mini-info-box">
        <div>${m.name}</div>
        <div><img class="pixelated" src="images/${m.type}.png"></div>
    </div>
    <div class="mini-info-box-move">
        <div>Base power: ${m.power}</div>
        <div>Accuracy: ${m.accuracy}%</div>
    </div>
    <div>Effect: Null</div>
    `;
};

let effectivenessChecker = (mov) => {
    let a = 1;
    let b = TypeChart[activePcPokeData.pcType][mov.type];

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
    let b = TypeChart[activePokeData.Type][mov.type];

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

let updateBattlelog = () => {
    battleLog.innerHTML = battleLog.innerHTML + `
    <div class="turn-record">Turn ${turn_counter}</div>
    `;
};

let updateTurn = () => {
    const turn_count = document.getElementById("turn-counter");
    turn_count.innerHTML = `
    Turn ${turn_counter}
    `;
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

let attackTurn = (playerMove, pcMove) => {
    console.log(activePokeData);
    console.log(activePcPokeData);
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
        plyAtt = activePokeData.Final_SpecialAttack;
        pcDef = activePcPokeData.pcFinal_SpecialDefence;
    }
    else
    {
        plyAtt = activePokeData.Final_Attack;
        pcDef = activePcPokeData.pcFinal_Defence;
    }

    if (pcMove.damage_class == "special")
    {
        pcAtt = activePcPokeData.pcFinal_SpecialAttack;
        plyDef = activePokeData.Final_SpecialDefence;
    }
    else
    {
        pcAtt = activePcPokeData.pcFinal_Attack;
        plyDef = activePokeData.Final_Defence;
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

    let damage = Math.floor(((((((2*activePokeData.Level)/5)+2)*playerMove.power*(plyAtt/pcDef))/50)+2)*critical*random*type);
    let pcDamage = Math.floor(((((((2*activePcPokeData.pcLevel)/5)+2)*pcMove.power*(pcAtt/plyDef))/50)+2)*criticalPc*randomPc*pcType);

    let damageperc ;
    damageperc = Math.floor((damage/activePcPokeData.pcFinal_HP)*100);
    if(damageperc > pcPokeHealth.value)
    {
        damageperc = pcPokeHealth.value;
    }
    let pcDamageperc ;

    pcDamageperc = Math.floor((pcDamage/activePokeData.Final_HP)*100);
    if(pcDamageperc > pokeHealth.value)
    {
        pcDamageperc = pokeHealth.value;
    }

    updateBattlelog();

    if (activePcPokeData.pcFinal_Speed > activePokeData.Final_Speed)
    {
        pokeHealth.value -= pcDamageperc;
        pokeHealthPerc.innerHTML = `
        ${pokeHealth.value}%
        `;
        activePokeData.healthPerc -=pcDamageperc;

        updateInfoBox();

        if (criticalPc == 1.5)
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePokeData.pokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
        }
        else
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePokeData.pokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
        }
        
        activePokeData.health -= pcDamage;
        hpbox.innerHTML = `HP ${activePokeData.health}/${activePokeData.Final_HP}`;
        updateInfoBox();
        winnerCheck();

        pcPokeHealth.value -= damageperc;
        pcPokeHealthPerc.innerHTML = `
        ${pcPokeHealth.value}%
        `;
        activePcPokeData.pchealthPerc -=damageperc;
        activePcPokeData.pchealth -= damage;
        updatePcInfoBox();

        if (critical == 1.5)
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePcPokeData.pcPokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
        }
        else
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePcPokeData.pcPokeName}</div> 
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
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
        activePcPokeData.pchealthPerc -=damageperc;
        activePcPokeData.pchealth -=damage;
        updatePcInfoBox();

        if (critical == 1.5)
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                    break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePcPokeData.pcPokeName}</div>
                    `;
                    break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
        }
        else
        {
            switch(type) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;  
                  break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
                  break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePcPokeData.pcPokeName}</div>
                    `;
                  break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePokeData.pokeName} used <b>${playerMove.name}</b>!</div>
                    <div>(${activePcPokeData.pcPokeName} lost ${damageperc}% of its Hp)</div>
                    `;
              }
            
        }
        
        winnerCheck();
        
        pokeHealth.value -= pcDamageperc;
        pokeHealthPerc.innerHTML = `
        ${pokeHealth.value}%
        `;
        activePokeData.healthPerc -=pcDamageperc;
        activePokeData.health -=pcDamage;
        updateInfoBox();

        if (criticalPc == 1.5)
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>A critical hit!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>A critical hit!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePcPokeData.pcPokeName}</div>
                    `;
                  break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>A critical hit!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
            
        }
        else
        {
            switch(pcType) {
                case 2:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's super effective!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0.5:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It's not very effective...</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
                  break;
                case 0:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>It doesn't affect opposing ${activePcPokeData.pcPokeName}</div>
                    `;
                  break;
                default:
                    battleLog.innerHTML = battleLog.innerHTML + `
                    <div>${activePcPokeData.pcPokeName} used <b>${pcMove.name}</b>!</div>
                    <div>(${activePokeData.pokeName} lost ${pcDamageperc}% of its Hp)</div>
                    `;
              }
        }
        
        hpbox.innerHTML = `HP ${activePokeData.health}/${activePokeData.Final_HP}`;
        updateInfoBox();
        winnerCheck();
    }
    
    GenerateActionField(activePokeData);
    turn_counter++;
    updateTurn();
};

let Attack = (n) => {
    let m = Math.floor(Math.random() * 4) + 1;
    let randomPcMove;
    if (m==1)
    {
        randomPcMove = activePcPokeData.pcMove1;

    }
    else if(m==2)
    {
        randomPcMove = activePcPokeData.pcMove2;
    }
    else if(m==3)
    {
        randomPcMove = activePcPokeData.pcMove3;
    }
    else if(m==4)
    {
        randomPcMove = activePcPokeData.pcMove4;
    }
    console.log(randomPcMove);

    if (n==1)
    {
        blockActionField();
        attackTurn(activePokeData.Move1, randomPcMove);
    }
    else if (n==2) {
        blockActionField();
        attackTurn(activePokeData.Move2, randomPcMove);
    } 
    else if (n==3) {
        blockActionField();
        attackTurn(activePokeData.Move3, randomPcMove);
    }
    else if (n==4) {
        blockActionField();
        attackTurn(activePokeData.Move4, randomPcMove);
    }
};

let blockActionField = () => {
    document.getElementById("actionField").innerHTML=`
    <p>Waiting for next turn...</p>
    `;
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

let winnerCheck = () => {
    if (pcPokeHealth.value == 0)
    {
        declareWinner("Pheonix",activePcPokeData.pcPokeName);
    }
    if (pokeHealth.value == 0)
    {
        declareWinner("PC",activePokeData.pokeName);
    }
};

//to disable a button
// document.getElementById("myBtn").disabled = true;