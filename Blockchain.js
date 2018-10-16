const Block = require('./Block');
const Transaction = require('./Transaction');

class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 2.25;
    }

    createGenesisBlock() {
        return new Block(Date().toString(), [], "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
    	console.log('\nIniciando o Script Minerador...\n');

    	if (this.pendingTransactions.length !== 0 ){
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardTx);
        
        let block = new Block(Date().toString(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);

        console.log('Bloco Minerado com Sucesso!!');
        this.chain.push(block);

        this.pendingTransactions = [];
    	}
    	else{
    		console.log('\nNão tem transação Pendente\n');
    	}
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }

    printChain() {
    	console.log('\n===================\nLista do Blockchain\n===================')
		console.log(this.chain);
	}
}
module.exports = Blockchain;
