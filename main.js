 //з Цельсія в Фаренгейт
 const C = prompt('введіть значення температури за Цельсієм')
 const F = (C *9 / 5) + 32
 console.log(F)


 //з кількості днів у місяці в години та хвилини
 const days = prompt('введіть кількість днів у місяці')
 const hours = days*24
 const minutes = hours*60
 console.log(hours)
 console.log(minutes)


//рівень здоров'я та енергії
 const health = 100; 
 const energy = 50; 
 const updatedHealth = health - 20;
 const updatedEnergy = energy - 10; 
 console.log("Рівень здоров'я гравця: " + updatedHealth);
 console.log("Рівень енергії гравця: " + updatedEnergy);


 //знижка з суми
 const sum = Number(prompt("Введіть суму:")); 
 const sale = sum / 100 * 90; 
 console.log(sale);


//округлення числа  з плаваючою комою до меншого
const randomNumber = (Number(Math.random(16)*10)); 
const roundedNumber = Math.floor(randomNumber); 
console.log("Округлене число: " + roundedNumber); 


//перетворення рядка, який містить число з плаваючою комою у десяткове число
console.log(parseFloat('22.266617625px').toFixed(2)); 


//перетворення рядка, який містить ціле число у ціле число
const integerString = '42';  
const integerNumber = parseInt(integerString, 10); 
console.log("Перетворене ціле число: " + integerNumber);


//обчислення квадратного кореня числа
const number = 16; 
const squareRoot = Math.sqrt(number);
console.log("Квадратний корінь числа " + number + " дорівнює " + squareRoot);



//перетворення  рядка у ціле число та перетворення цілочисельного значення у рядок  
const integerValue = 25;
const stringValue = "42";
const parsedInteger = parseInt(stringValue, 10);
console.log("Перетворене ціле число: " + parsedInteger);
const stringFromInteger = integerValue.toString(); 
console.log("Цілочисельне значення як рядок: " + stringFromInteger);