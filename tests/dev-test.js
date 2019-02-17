const  Block = require("../js_files/block");
const Blockchain = require("../js_files/blockchain");

var block = Block.mineBlock(Block.genesis(), "First mined block");
console.log(block.toString());
var data = [];
for (var i = 0; i < 10; i++){
    data.push(i);
    var newBlock = Block.mineBlock(block, data);
    console.log(newBlock.toString());
    block = newBlock;
}