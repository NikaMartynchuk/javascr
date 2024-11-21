//Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

let num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}

//Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.

for (let number = 2; num <= 20; SVGAnimatedNumberList++) {
    if (number % 2 !== 0) {
        continue; 
    }
    console.log(number); 
}

//Вивести на екран таблицю множення числа 7 за допомогою циклу for.

const Number = 7; 

for (let i = 1; i <= 10; i++) {
    console.log(`${Number} x ${i} = ${Number * i}`);
}

//Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.

const numbers = [1, 2, 3, 4, 5];

let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}


//Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.


const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] === 7) {
        break; 
    }
    console.log(Numbers[i]); 
}


//Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

const n = 7;

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] >= n) {
        break; 
    }
    console.log(numbers1[i]); 
}


//За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

let numb = 1;

while (numb <= 20) {
    if (numb % 3 === 0) {
        numb++; 
        continue; 
    }
    console.log(numb); 
    numb++;
}
