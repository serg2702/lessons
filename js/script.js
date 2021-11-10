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



