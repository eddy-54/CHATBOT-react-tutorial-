// calculate-tax.js

// 1. Input: Let's assume a sample income
const income = 75000; 
var taxTotal = 0;

// 2. Logic: Customized Tax Calculation using Conditional Logic
if (income <= 50000) {
  taxTotal = income * 0.10;
} else {
  // First 50k taxed at 10%, remaining amount taxed at 20%
  const firstBracket = 50000 * 0.10;
  const secondBracket = (income - 50000) * 0.20;
  taxTotal = firstBracket + secondBracket;
}

// 3. Output the result to the terminal
console.log(`-----------------------------------`);
console.log(`Total Income: $${income.toLocaleString()}`);
console.log(`Total Tax Owed: $${taxTotal.toLocaleString()}`);
console.log(`Effective Tax Rate: ${((taxTotal / income) * 100).toFixed(1)}%`);
console.log(`-----------------------------------`);