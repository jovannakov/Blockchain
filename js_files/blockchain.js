const Block = require('./block');

class Blockchain{
    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock(data){
        const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
        this.chain.push(block);

        return block;
    }

    isChainValid(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())){
         //   Console.log("The first block of the chain is not the Genesis block. The chain is not Valid.");
            return false;
        }
        for(let i = 1; i < chain.length; i++){
            const block = chain[i];
            const last = chain[i - 1];
            if(block.lastHash !== last.hashValue ||
                block.hashValue !== Block.blockHash(block)){
          //      Console.log(`The block on position ${i}  is failed the test!`);
                return false;
            }
        }
      //  Console.log("The chain is Valid!");
        return true;
    }
}

module.exports = Blockchain;