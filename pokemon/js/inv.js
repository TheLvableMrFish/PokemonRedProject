import Poke from "./pokemon.js";

const POKEMON = new Poke();
// console.log(POKEMON.pokemon[3].name)
let pokemon = POKEMON;


export default class Invtory{
    constructor(){
        this.PokeInv = [
            {
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

        ]

        
    }
    
    
    createPokemon(i, level, currHealth){
        if(this.PokeInv.length < 6){

        this.PokeInv.push(
            {name: POKEMON.pokemon[i].name,
            moves: POKEMON.pokemon[i].moves,
            level: level,
            maxHealth: level * 5,
            currHealth: currHealth,
            img: POKEMON.pokemon[i].partyImg,
            img2: POKEMON.pokemon[i].enemyImg,
            xp: 0,
            eveLvl: POKEMON.pokemon[i].evolveLvl,
            evePkm: POKEMON.pokemon[i].evolvePkm
            }
            );
    }}
}
