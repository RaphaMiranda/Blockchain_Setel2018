// Import a Classe blockchain
const Blockchain = require('./blockchain');
const Block = require('./block');
//Inicializar o encadeamento
const myChain = new Blockchain();
myChain.addBlock('2');
myChain.addBlock('2');
myChain.addBlock('1');
myChain.printChain();
myChain.IsChainValid(myChain);


