"use strict";

var accounts = require('./accounts');

exports.getBalance = function() {
    return accounts.balance;
}

exports.withDraw = function(amount) {
    amount = Number(amount); // convert string to number
    if( amount <= 0 )
    {
        console.log("Amount should be bigger than 0");
        return false;
    }
    if( accounts.balance < amount ) // amount is bigger than balance
    {
        console.log("You don't have the sufficient balance");
        return false;   
    }

    accounts.balance -= amount;

    return true;
    
}

exports.deposit = function(amount) {
    amount = Number(amount); // convert string to number
    if( amount <= 0 )
    {
        console.log("Amount should be bigger than 0");
        return false;
    }

    accounts.balance += amount;

    return true;


}

exports.validatePin = function(pin) {    
    return accounts.pin == pin;
}