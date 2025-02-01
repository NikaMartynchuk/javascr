// 1
const button = document.getElementById('changeButton');
const textField = document.getElementById('textField');
button.addEventListener('click', function() {
    button.textContent = textField.value;
});

// 2
const image = document.getElementById('image');
image.src = 'istockphoto-1317323736-612x612.jpg';

// 3
const link = document.getElementById('link');
link.href = 'old.html';
image.alt = 'Опис нового зображення';

// 4
const firstListItem = document.querySelector('ul li');
firstListItem.textContent = 'Новий текст для першого елемента';
