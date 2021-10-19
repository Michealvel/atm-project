"use strict";


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var atm = require('./atm');

function displayMenu() {
    console.log("============================");
    console.log("a: Get Balance");
    console.log("b: WithDraw");
    console.log("c: Deposit");
    console.log("exit: Exit Machine");
    console.log("============================");

    rl.question("Please select an action. ", function(option) {
        // rl.close();
        switch(option) {
            case 'a': // get balance                
                console.log(atm.getBalance());
                displayMenu();
                break;
            case 'b': // withdraw
                withDrawAction();
                break;
            case 'c': // Deposit
                depositAction();
                break;
            case 'exit':
                console.log("Exit ATM Machine");
                rl.close();
                break;
        }
    });
}

// validate pin
console.log("Start ATM Machine");

function askPin() {
    rl.question("What is your pin code? ", function(pin) {
        // validate pin code
        // rl.close();
        if( atm.validatePin(pin) ) // pin code is correct
        {
            console.log("Pin Code is correct");
            // move to atm menum
            displayMenu();
        }
        else
        {
            // ask pin code again
            console.log("Pin Code is wrong");
            askPin();
        }
    });
}

function withDrawAction() {
    rl.question("How much do you want to withdraw? ", function(amount) {
        // rl.close();
        var result = atm.withDraw(amount);
        
        displayMenu();

    } );
}

function depositAction() {
    rl.question("How much do you want to deposit? ", function(amount) {
        // rl.close();
        var result = atm.deposit(amount);
        
        displayMenu();
    } );
}
askPin();