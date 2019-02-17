const Blockchain = require("../js_files/blockchain");
const  Block = require("../js_files/block");

describe("Blockchain" , ()  => {
   let bc;

   beforeEach(() => {
       bc = new Blockchain();
   });

   it ("starts with genesis block", () => {
      expect(bc.chain[0]).toEqual(Block.genesis());
   });

   it ("adds a new block properly", () => {
        const data = "Jovan";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
   });
});