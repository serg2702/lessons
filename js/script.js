"use strict";

/*if (4 == 9) {
    console.log('ok');
} else {
    console.log('error');
}

if (1) { // Бесконечный цикл
    console.log(true);
}

const num = 50;
if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('ok');
}


const numb = 50;
(numb === 50) ? console.log('ok') : console.log('error');


const a = 50; // Так же работает со строками ''
switch (a) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 50:
        console.log('verno');
        break;
    default:
        console.log('ne v etot raz');
        break;
}
    // Урок13 конец


let  n = 50;

while (n <= 55) {
    console.log(n);
    n++;
}

do {
    console.log(n);
    n++;
}
while (n < 55);

let f = 50;
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break; Полное прерывание цикла
        continue; // Пропуск одного шага цикла
    }

    console.log(i);
}
    // Урок14 конец*/


/*let num = 20; // Глобальная переменная

function showFirtsMessage(text) { // Может использовать глобальные переменные
    console.log(text);
    let num = 10; // Локальная переменная
    console.log(num); // Сначала будет локальная, потом, если её нет, то глобальная
}

showFirtsMessage("Hello world");
console.log(num);


console.log(calc(4, 3)); // Можно сначала вызвать функцию, а потом объявлять её (не будет ошибки)
console.log(calc(5, 6));
console.log(calc(10, 3));

function calc(a, b) {
    return (a + b); // После return функция заканчивается
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 3));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello");
}; // В таком случае обязательно точка с запятой. Такая функция создаётся только когда доходит код
    // Её нельзя сначала вызвать, а потом объявить
logger();


const calcc = (a, b ) => { 
    return a + b;
};
    // Урок16 конец*/



/*const str = "teSt";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);
console.log(str[2]);

console.log(str.toUpperCase()); // Всегда при действиях в конце ()
console.log(str.toLowerCase());
console.log(str);               // Действие не изменяет начальной строки


const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // Позиция искомого элемента
console.log(fruit.indexOf("w")); // Если нет такого, то -1


const logg = "Hello world";

console.log(logg.slice(6, 11)); // Начало и конец вырезания (11 не включительно)
console.log(logg.slice(4)); // Конец можно не указывать
console.log(logg.slice(-5, -1)); // Начнёт с другого конца считать

console.log(logg.substring(6, 11)); // Работает также как и slice

console.log(logg.substr(6, 5)); // Второе число - сколько нужно вырезать


const num = 12.2;
console.log(Math.round(num)); // Округление


const testt = "12.2px";
console.log(parseInt(testt));
console.log(parseFloat(testt));
    // Урок17 конец*/



/*function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Ya uchu: ${lang}`);
    callback();
}

function done() {
    console.log('Ya proshel etot urok');
}

learnJS('JavaScript', done);

    //Урок19 конец*/



/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

console.log(options.name);

delete options.name;
console.log(options);

//console.log(options['colors']['border']);

let counter = 0;

for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}  // Перебор объекта

console.log(counter); // Счётчик ключей в объекте


console.log(Object.keys(options)); // Создаёт массив со всеми ключами

console.log(Object.keys(options).length); // Кол-во элементов

options.makeTest(); // Вызов (запуск) функции из объекта

const {border, background} = options.colors; // Деструктуризация
console.log(border);

    // Урок20 конец*/



/*const arr = [1, 2, 3, 6, 8];

arr.pop(); // Удаление последнего элемента массива
console.log(arr);

arr.push(10); // Добавление элемента в конец массива
console.log(arr);


for (let i = 0; i < arr.length; i++) { // Перебор массива
    console.log(arr[i]);
}


for (let value of arr) { // Тот же перебор 
    console.log(value);
}


arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`); // Перебор
});



const arr1 = [2, 5, 6, 8,]

arr1[99] = 0;

console.log(arr1.length);
console.log(arr1);



const str = prompt("", "");
const products = str.split(", "); // Объединение в массив
products.sort(); // Сортировка по алфавиту (всегда сортирует как строку)
console.log(products.join('; ')); // Объединение в строку
console.log(products);



const array = [2, 13, 76, 45, 3];
array.sort(compareNum); // Сортировка чисел по порядку
console.log(array);

function compareNum (a, b) {
    return a - b; 
}

    // Урок21 конец*/
    


/*let a = 5,
    b = a; // Записывает сам объект

b = b + 5;
console.log(b);
console.log(a);



const obj = {
    a: 5,
    b: 1
};
const copy  = obj; // Записывает ссылку, а не сам объект

copy.a = 10;
console.log(copy);
console.log(obj);



function copy(mainObj) { // Копирование объекта 
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // Вложенный объект всё равно как ссылка
                     // Меняется в обоих объектах (поверхностная копия)

console.log(newNumbers);
console.log(numbers);



const add = {
    d: 17,
    e:20
};

console.log(Object.assign(numbers, add)); // Соединение двух объектов

const clone = Object.assign({}, add); // Копирование через пустой объект

clone.d = 20;
console.log(add);
console.log(clone);



const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); // Копирование массива

newArr[1] = 'aofn';
console.log(newArr);
console.log(oldArr);



const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
        // Spread оператор(...) разворачивает массив и копирует его

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // Разворачивает массив (передаёт по одному значению)


const array = ['a', 'b'];

const newArray = [...array]; // Копирование массива

const q = {
    one: 1,
    two: 2
};

const newq = {...q};*/

    // Урок22 конец



/*let str  = "some"; // Примитив(строка)
let str_obj = new String(str); // Объект (из-за действий над строкой)

console.log(typeof(str));
console.log(typeof(str_obj));

console.dir([1, 2, 3]);



const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100
};

john.__proto__ = soldier; // Старый способ "привязки" прототипов

Object.setPrototypeOf(john, soldier); // Новый способ

console.log(john.armor);
john.sayHello();


const mark = Object.create(soldier); // Тоже новый способ
mark.sayHello();*/

    //Урок23 конец



