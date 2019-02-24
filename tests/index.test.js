const Blockchain = require("../blockchain/index");
const  Block = require("../blockchain/block");

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
        bc2.addBlock("bar");
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
        bc2.addBlock("bar");
        bc2.addBlock("bar");
        bc2.chain[2].data = "Pero";
        expect(bc.isChainValid(bc2.chain)).toBe(false);
    });

    it("tests if the received chain is not longer than the current", () => {
       bc.addBlock('foo');
       bc.replaceChain(bc2.chain);

       expect(bc.chain).not.toEqual(bc2.chain);
    });

    it("tests if the received chain is not valid", () => {
        bc2.addBlock('foo');
        bc2.addBlock('boo');
        bc2.chain[1].data = 'cocoo';
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    });

    it("tests if the chain has been replaced", ()=>{
       bc2.addBlock("foo");
       bc.replaceChain(bc2.chain);

       expect(bc.chain).toEqual(bc2.chain);
    });

});