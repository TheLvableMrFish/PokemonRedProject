export default class MakePokemon{
    constructor(poke){
        this.pokemon = {
            1:{
                id: 1,
                name: 'Bulbasaur',
                type: 'water',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/bulbasaur.png',
                partyImg: 'media/pokemon/bulbasaur2.png',
                evolveLvl: 16,
                evolvePkm: 0
            },
            2:{
                id:4,
                name: 'Charmander',
                type: 'fire',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/charmander.png',
                partyImg: 'media/pokemon/charmander2.png',
                evolveLvl: 16,
                evolvePkm: 2

            },
            3:{
                id:7,
                name: 'Squirtle',
                type: 'water',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/squirtle.png',
                partyImg: 'media/pokemon/squirtle2.png',
                evolveLvl: 16,
                evolvePkm: 4
            },
            4:{
                id:10,
                name: 'Caterpie',
                type: 'bug',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/caterpie.png',
                partyImg: 'media/pokemon/caterpie2.png',
                evolveLvl: 7,
                evolvePkm: 6
            },
            5:{
                id:13,
                name: 'Weedle',
                type: 'bug',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/weedle.png',
                partyImg: 'media/pokemon/weedle2.png',
                evolveLvl: 7,
                evolvePkm: 8
            },
            6:{
                id:16,
                name: 'Pidgey',
                type: 'flying',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/pidgey.png',
                partyImg: 'media/pokemon/pidgey2.png',
                evolveLvl: 18,
                evolvePkm: 10
            },
            7:{
                id:19,
                name: 'Rattata',
                type: 'normal',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/rattata.png',
                partyImg: 'media/pokemon/rattata2.png',
                evolveLvl: 20,
                evolvePkm: 12
            },
        }
        this.evolution = [
        {
            id:2,
                name: 'Venusaur',
                type: 'grass',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/ivysaur.png',
                partyImg: 'media/pokemon/ivysaur2.png',
                evolveLvl: 32,
                evolvePkm: 1 //0
        },
        {
            id:3,
                name: 'Venusaur',
                type: 'grass',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/venusaur.png',
                partyImg: 'media/pokemon/venusaur2.png',
                evolveLvl: 0,
                evolvePkm: 0 //1
        },
        {
            id:5,
                name: 'Charmeleon',
                type: 'fire',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/charmeleon.png',
                partyImg: 'media/pokemon/charmeleon2.png',
                evolveLvl: 36,
                evolvePkm: 3 //2
        },
        {
            id:6,
                name: 'Charizard',
                type: 'fire',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/charizard.png',
                partyImg: 'media/pokemon/charizard2.png',
                evolveLvl: 0,
                evolvePkm: 0 //3
        },
        {
            id:8,
                name: 'Wartortle',
                type: 'water',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/wartortle.png',
                partyImg: 'media/pokemon/wartortle2.png',
                evolveLvl: 36,
                evolvePkm: 5 //4
        },
        {
            id:9,
                name: 'Blastoise',
                type: 'water',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/blastoise.png',
                partyImg: 'media/pokemon/blastoise2.png',
                evolveLvl: 0,
                evolvePkm: 0 //5
        },
        {
            id:11,
                name: 'Metapod',
                type: 'bug',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/metapod.png',
                partyImg: 'media/pokemon/metapod2.png',
                evolveLvl: 10,
                evolvePkm: 7 //6
        },
        {
            id:12,
                name: 'Butterfree',
                type: 'bug',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/butterfree.png',
                partyImg: 'media/pokemon/butterfree2.png',
                evolveLvl: 0,
                evolvePkm: 0 //7
        },
        {
            id:14,
                name: 'Kakuna',
                type: 'fire',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/kakuna.png',
                partyImg: 'media/pokemon/kakuna2.png',
                evolveLvl: 10,
                evolvePkm: 9 //8
        },
        {
            id:15,
                name: 'Beedrill',
                type: 'bug',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/beedrill.png',
                partyImg: 'media/pokemon/beedrill2.png',
                evolveLvl: 0,
                evolvePkm: 0 //9
        },
        {
            id:17,
                name: 'Pidgeotto',
                type: 'flying',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/pidgeotto.png',
                partyImg: 'media/pokemon/pidgeotto2.png',
                evolveLvl: 36,
                evolvePkm: 11 //10
        },
        {
            id:18,
                name: 'Pidgeot',
                type: 'flying',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/pidgeot.png',
                partyImg: 'media/pokemon/pidgeot2.png',
                evolveLvl: 0,
                evolvePkm: 0 //11
        },
        {
            id:20,
                name: 'Raticate',
                type: 'normal',
                moves: ['TACKLE', 'SLAM'],
                enemyImg: 'media/pokemon/raticate.png',
                partyImg: 'media/pokemon/raticate2.png',
                evolveLvl: 0,
                evolvePkm: 0 //12
        }
    ]
    }
}
