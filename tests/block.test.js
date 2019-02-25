const Block = require('../blockchain/block');
const Blockchain = require("../blockchain");
const DIFFICULTY = require('../config');

describe('Block' , () => {
    let data, lastBlock, block;
    beforeEach(() => {
       data = 'bar';
       lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('sets the `data` to match the input ', ()=>{
        expect(block.data).toEqual(data);
    });

    it('sets the `lastHash` to match the hash of the last block', ()=>{
        expect(block.lastHash).toEqual(lastBlock.hashValue);
    });

    it("Test generates a hash that matches the difficulty", () => {
        expect(block.hashValue.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
    });

});
