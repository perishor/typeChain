/* interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name: "sgwankim",
    age: 32,
    gender: "male"
}; */

/* class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const smiKim = new Human("smi", 35, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}

console.log(sayHi(smiKim)); */

import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;

    static calculateBlockHash = (
        index:number,
        previousHash:string,
        data:string,
        timeStamp:number
    ): string => CryptoJS.SHA256(index + previousHash + data + timeStamp).toString();

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timeStamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}

const genesisBlock:Block = new Block(0, "2022020202020202","","Hello",123456);

let blockChain: Block[] = [genesisBlock];

const getblockChain = () : Block[] => blockChain;

const getLatestBlock = () : Block => blockChain[blockChain.length-1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

export {};