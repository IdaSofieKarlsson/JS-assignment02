let input = prompt("Enter the prize. You must start with the symbol for your local currency and use . instead of ,: ");
let prizeAsText = input.slice(1);
let currencySymbol = input.slice(0,1);
let prizeAsNumber = parseFloat(prizeAsText);
let prizeAfterDiscount = 0.9 * prizeAsNumber;
console.log(`You have received a 10% discount! Your new prize is ${currencySymbol}${prizeAfterDiscount.toFixed(2)}`);