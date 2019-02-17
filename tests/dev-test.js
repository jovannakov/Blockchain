const  Block = require("../js_files/block");

const block = Block.mineBlock(Block.genesis().hashValue, "First mined block");
console.log(block.toString());