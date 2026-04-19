// ZAD 1
/*
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
sum = 0
for (let i = 0; i <= 10; i++) {
    console.log(i)
    sum += i
}
console.log(sum)
*/
// ZAD 2
/*
let count = 0;
while (count < 3) {
    console.log("Count:",count);
    count++;
}

num = 5
while (num) {
    num--;
    console.log(num)
}
*/

/*
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++; 
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}
*/

//ZAD4
/*
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if(i == 8) {
        break;
    }
    console.log(i)
}
*/

/*
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
*/


//ZAD5
/*
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j == i; j++) {
        console.log("*")
    }
    console.log()
}
*/

/*
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));

//zad1
function multiply(n1, n2) {
    return n1 * n2
}
console.log(multiply(2, 2));
*/

/*
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Timofey");

//zad2
function printInfo(name, age){
    console.log(`Hello, меня зовут ${name}, мне ${age} лет!`)
}
printInfo("Ринат", 19)
*/

/*
function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Анастасия");

//zad3
function calculateDiscount(price, discount = 10) {
    console.log(`Цена: ${price} P и скидка: ${discount} %`)
    sum = price * discount / 100
    sum1 = price - sum
    console.log(sum1) 
}
calculateDiscount(price = 500)
calculateDiscount(price = 500, discount = 25)
*/

const add = function (a, b) {
    return a + b;
}
console.log(add(2, 3));

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a, b) {
    return a + b;
}
const sumFunc2 = (a, b) => a + b;
const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}


