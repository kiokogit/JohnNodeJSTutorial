//transactions in an ATM

var balance = 0;

function depositAmount(amount) {
    balance += amount;
    console.log(`You have Deposited ${amount} KES. Your balance is ${balance}`);
}

function withdrawAmount(amount) {
    balance -= amount;
    console.log(`You have withdrawn ${amount} KES. Your balance is ${balance}`);
}

function checkBalance() {
    console.log(`Account Balance: KES`);
}

function miniStatement() {
    console.log('Nothing of statement to show today')
}

function login() {

    console.log('Just get in bro')
}


let choice = 4;

switch (choice) {
    case 1:
        login();
        break;

    case 2:
        checkBalance();
        break;

    case 3:
        withdrawAmount(100);
        break;

    case 4:
        depositAmount(5000);
        break;

    case 5: 
        miniStatement();
        break;

    default:
        login();
        break;
}