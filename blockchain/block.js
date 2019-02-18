const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hashValue, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hashValue = hashValue;
        this.data = data;
    }

    toString(){
        // We are returning a template string, it is similar with the basic string, except we can print it in multiple lines
        // and we can use
        return `Block - 
            Timestamp : ${this.timestamp}
            Last hash : ${this.lastHash.substring(0, 10)}
            Hash      : ${this.hashValue.substring(0, 10)}
            Data      : ${this.data}`;
    }

    static genesis(){
        var date = new Date();
        return new this(date.getHours()+ ":" + date.getMinutes()+ ":" + date.getSeconds(), "----------", "f1r5t-h45h", []);
    }

    static mineBlock(lastBlock, data){
        var timestamp = Date.now();
        var lastHash = lastBlock.hashValue;
        var hashVal = Block.hash(timestamp, lastHash, data);
        return new Block(timestamp, lastHash, hashVal, data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data }`).toString();
    }

    static blockHash(block){
        const {timestamp, lastHash, data} = block;
        return this.hash(timestamp, lastHash, data);
    }

}

    module.exports = Block;