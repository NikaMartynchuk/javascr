// const num = 10;
// const result = num < 10 && num > 30
// console.log(result) //false

// const num1 = 50;
// const result1 = num1 < 10 || num1 > 30
// console.log(result1) //true

// if(10 && ''){rgb(217, 217, 217)
//     console.log(true)
// } else {
//     console.log(false)
// }


// const balance = 1000;
// let message = (balance >= 1) ? "Ваш баланс почувається добре!" : (balance === 0) ? "Ваш баланс на нулі!" : "Ваш баланс почувається погано!"
// console.log(message)



// const x1 = 10
// const x2 = 30
// const numb = 40

// let res = numb < x1 ? 'до x1' : numb > x2 ? 'після x2' : "від х1 до х2";
// console.log(res)

// let balance = prompt('Введіть свій баланс');
// let payment = prompt('Введіть суму бажанної покупки');
// alert("  Загальна вартість замовлення " + payment + " кредитів. Перевіряємо кількість доступних коштів на рахунку ");
// if (payment <= balance) {
//     balance - payment;
//     alert('На рахунку залишилося' + balance + ' кредитів')

// } else {
//     alert('На рахунку недостатньо коштів для проведення операції!')
// }
// alert('Операція Завершена!');

document.getElementById('task-one-button').addEventListener('click', function() {
    const firstname = document.getElementById('firstname').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (firstname && password) {
        alert("Обидва поля заповнені");
    } else {
        alert("Не всі поля заповнені");
    }
});


document.getElementById('task-two-button').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    const sum = number1 + number2;
    
    if (sum > 10) {
        alert("Сума більша за 10");
    } else {
        alert("Сума менша або дорівнює 10");
    }
});


document.getElementById('task-three-button').addEventListener('click', function() {
    const text = document.getElementById('textInput').value;
    
    if (text.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
});


document.getElementById('task-four-button').addEventListener('click', function() {
    const number = parseFloat(document.getElementById('numberInput').value);
    
    if (number > 10 && number < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
});

document.getElementById('submit-button').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (name.length < 3) {
        document.getElementById('error-message').textContent = "Ім’я повинно містити не менше 3 символів.";
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('error-message').textContent = "Email повинен містити символ '@' та крапку.";
    } else if (password.length < 6) {
        document.getElementById('error-message').textContent = "Пароль повинен містити не менше 6 символів.";
    } else {
        window.location.href = "https://www.example.com";  
    }
});