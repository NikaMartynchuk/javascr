
//Завдання 1
let list = prompt('Обери "Кава", "Чай" або "Сік"');
switch (list) {

    case 'Кава':
        alert('Ви обрали каву!')
        break;


    case 'Чай':
        alert('Ви обрали чай!')
        break;

    case 'Сік':
        alert('Ви обрали сік!')
        break;

    default:
        alert('На жаль Ви не обрали нічого')
}

//Завдання 2

let day = prompt('Введи день тижня').toLowerCase()
switch (day) {

    case 'понеділок':
        alert('Ви обрали понеділок!')
        break;


    case 'вівторок':
        alert('Ви обрали вівторок!')
        break;

    case 'середа':
        alert('Ви обрали середу!')
        break;

    case 'четвер':
        alert('Ви обрали четвер!')
        break;

    case 'пятниця':
        alert('Ви обрали пятницю!')
        break;


    case 'субота':
        alert('Ви обрали суботу!')
        break;


    case 'неділя':
        alert('Ви обрали неділю!')
        break;

    default:
        alert('На жаль Ви не вказали жодного')
}


//Завдання 3

let month = prompt('Введи номер місяця');
switch (month) {

    case '12': alert('Зима')
        break;
    case '1': alert('Зима')
        break;
    case '2': alert('Зима')
        break;


    case '3': alert('Весна')
        break;
    case '4': alert('Весна')
        break;
    case '5': alert('Весна')
        break;

    case '6': alert('Літо')
        break;
    case '7': alert('Літо')
        break;
    case '8': alert('Літо')
        break;

    case '9': alert('Осінь')
        break;
    case '10': alert('Осінь')
        break;
    case '11': alert('Осінь')
        break;

    default:
        alert("Невірний номер місяця. Введіть число від 1 до 12.")
        break;
}


//Завдання 4

let MonthDay = prompt('Введи номер місяця');
switch (month) {

    case '12': alert('31')
        break;
    case '1': alert('31')
        break;
    case '2': alert('28-29')
        break;


    case '3': alert('31')
        break;
    case '4': alert('30')
        break;
    case '5': alert('31')
        break;

    case '6': alert('30')
        break;
    case '7': alert('31')
        break;
    case '8': alert('31')
        break;

    case '9': alert('30')
        break;
    case '10': alert('31')
        break;
    case '11': alert('30')
        break;

    default:
        alert("Невірний номер місяця. Введіть число від 1 до 12.")
        break;
}


//Завдання 5

let color = prompt('Введи колір (червоний, жовтий або зелений)').toLowerCase();
switch (color) {

    case 'червоний': alert('стоп')
        break;
    case 'зелений': alert('йти')
        break;
    case 'жовтий': alert('чекати')
        break;

    default:
        alert("Невірний номер місяця. Введіть число від 1 до 12.")
        break;
}


