"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timeStamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}
Block.calculateBlockHash = (index, previousHash, data, timeStamp) => CryptoJS.SHA256(index + previousHash + data + timeStamp).toString();
const genesisBlock = new Block(0, "2022020202020202", "", "Hello", 123456);
let blockChain = [genesisBlock];
const getblockChain = () => blockChain;
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map