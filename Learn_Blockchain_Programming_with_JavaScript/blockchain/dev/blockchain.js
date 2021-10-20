function Blockchain() {
    this.chain = []; // 블록체인
    this.newTransactoins = []; // 아직 저장되지 않은 트랜잭션 저장

    Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
        // 블록체인에 추가될 새로운 블록
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.newTransactoins,
            nonce: nonce, // proofOfWork
            hash: hash, // newTransactions의 hash 값
            previousBlockHash: previousBlockHash
        };
        this.newTransactoins = []; // newTransactions 초기화
        return newBlock;
    }
}

module.exports = Blockchain;
