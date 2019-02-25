const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY } = require("../config");



class Block {

    constructor(timestamp, lastHash, hashValue, data, nonce) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hashValue = hashValue;
        this.data = data;
        this.nonce=nonce;
    }

    toString(){
        // We are returning a template string, it is similar with the basic string, except we can print it in multiple lines
        // and we can use
        return `Block - 
            Timestamp : ${this.timestamp}
            Last hash : ${this.lastHash.substring(0, 10)}
            Hash      : ${this.hashValue.substring(0, 10)}
            Data      : ${this.data}
            Nonce     : ${this.nonce}`;
    }

    static genesis(){
        return new this('Genesis time', "----------", "f1r5t-h45h", [], 0);
    }

    static mineBlock(lastBlock, data){
        let start = Date.now();
        let timestamp;
        let lastHash = lastBlock.hashValue;
        let hashVal;
        let nonce = 0;
        do{
            console.log("nonce:",nonce);
            timestamp = Date.now();
            hashVal = Block.hash(timestamp, lastHash, data, nonce);
            nonce++;
        }while(hashVal.substring(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY));
        var timeElapsed = timestamp - start;
        console.log(`Time elapsed: ${timeElapsed} milliseconds`);
        return new Block(timestamp, lastHash, hashVal, data, nonce);
    }

    static hash(timestamp, lastHash, data, nonce){
        return SHA256(`${timestamp}${lastHash}${data}${nonce}`).toString();
    }

    static blockHash(block){
        const {timestamp, lastHash, data, nonce} = block;
        return this.hash(timestamp, lastHash, data, nonce);
    }

}

    module.exports = Block;