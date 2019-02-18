const Block = require('./block');

class Index{
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


    replaceChain(newChain){
        if(newChain.length <= this.chain.length){
                console.log("The received chain is not longer than the current chain.");
                return;
            } else if(!this.isChainValid(newChain)){
                console.log("The received chain is not valid!");
                return;
            }
        console.log("The current chain is being replaced!");
        this.chain = newChain;
        }
}

module.exports = Index;