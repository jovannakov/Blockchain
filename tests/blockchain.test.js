const Blockchain = require("../js_files/blockchain");
const  Block = require("../js_files/block");

describe("Blockchain" , ()  => {
   let bc, bc2;

   beforeEach(() => {
       bc = new Blockchain();
       bc2 = new Blockchain();
   });

   it ("starts with genesis block", () => {
      expect(bc.chain[0]).toEqual(Block.genesis());
   });

   it ("adds a new block properly", () => {
        const data = "Jovan";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
   });

   it ("tests if a chain is valid", ()=>{
        bc2.addBlock("foo");
        bc2.addBlock("bar");
        expect(bc.isChainValid(bc2.chain)).toBe(true);
   });

    it("tests if a chain has corrupt genesis block", ()=>{
         bc2.chain[0].data = "Pero";
        expect(bc.isChainValid(bc2.chain)).toBe(false);
    });

    it("tests if a chain has corrupt block on some point", ()=>{
        bc2.addBlock("foo");
        bc2.addBlock("bar");
        bc2.chain[2].data = "Pero";
        expect(bc.isChainValid(bc2.chain)).toBe(false);
    });

});