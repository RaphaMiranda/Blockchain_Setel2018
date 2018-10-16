


const Blockchain = require('./Blockchain');
const Transaction = require('./Transaction');


let PETCOIN = new Blockchain();
console.log('\n===============\n GENESIS BLOCK:\n===============');
PETCOIN.printChain();

PETCOIN.createTransaction(new Transaction('Bob', 'Alice', 100));

console.log('\n ================= \n|THIS IS PET_COIN |\n ================= ')

console.log('\n Saldo do Bob:', PETCOIN.getBalanceOfAddress('Bob'));
console.log('\n Saldo do Alice:', PETCOIN.getBalanceOfAddress('Alice'));
console.log('\n Saldo do Minerador:', PETCOIN.getBalanceOfAddress('Minerador'));



PETCOIN.minePendingTransactions('Minerador');

console.log('\n Saldo do Bob:', PETCOIN.getBalanceOfAddress('Bob'));
console.log('\n Saldo do Alice:', PETCOIN.getBalanceOfAddress('Alice'));
console.log('\n Saldo do Minerador:', PETCOIN.getBalanceOfAddress('Minerador'));


PETCOIN.minePendingTransactions('Joao');


PETCOIN.printChain();

console.log('\n Esse Blockchain é Válido?', PETCOIN.isChainValid());

//PETCOIN.chain[1].transactions = new Transaction('Bob','Alice', 200000);

//console.log('\n Is chain valid?', PETCOIN.isChainValid());