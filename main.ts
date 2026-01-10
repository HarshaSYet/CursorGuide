import { add, subtract, multiply, divide } from './calculator';

const num1 = 10;
const num2 = 5;

console.log('Calculator Results:');
console.log('==================');

// Addition
const sum = add(num1, num2);
console.log(`${num1} + ${num2} = ${sum}`);

// Subtraction
const difference = subtract(num1, num2);
console.log(`${num1} - ${num2} = ${difference}`);

// Multiplication
const product = multiply(num1, num2);
console.log(`${num1} * ${num2} = ${product}`);

// Division
try {
  const quotient = divide(num1, num2);
  console.log(`${num1} / ${num2} = ${quotient}`);
} catch (error) {
  console.error(error);
}

