class BankAccount {
    
    #balance

    constructor(accId,ownerName){
        this.accId = accId;
        this.ownerName = ownerName;
        this.#balance = 0;
    }

    deposit(amount){
        this.#balance+= amount;
        console.log(`Depositted $${amount}. Current Balance : $${this.#balance}`);
        return " ";
    }

    withdraw(amount){
        if(amount>this.#balance){
            console.log("Insufficient ammount");
        }
        else{
        this.#balance-= amount;
        console.log(`You have Withdrawn $${amount}. Current Balance : $${this.#balance}`);
        }
    }

    getBalance(){
        console.log(`Your Bank Balance is $${this.#balance}`);
    }

    getAccountinfo(){
        console.log(`Account Id : ${this.accId}`);
        console.log(`Account Owner : ${this.ownerName}`);
        console.log(`Account Balance : ${this.#balance}`);
        return "Thank You";
    }
}

const acc1 = new BankAccount(1001,"Minhazul Mahmud")
const acc2 = new BankAccount(1002,"Abid Rahman")

// console.log(acc1.deposit(100));
console.log(acc2.getAccountinfo());