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
}

    module.exports = Block;