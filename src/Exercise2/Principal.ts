import BankMember from './BankMember';

const chuck = new BankMember(3000);
console.log('Depositing Funds');
chuck.deposit(150);
console.log(`Chuck's Savings balance: ${chuck.savingsBalance} \n`);

console.log('Using our set method to change Chuck\'s Savings Balance...\n');
chuck.savingsBalance = 0;

console.log('Withdrawing Funds');
chuck.withdraw(1650);
console.log(`Chuck's Savings balance: ${chuck.savingsBalance} \n`);
