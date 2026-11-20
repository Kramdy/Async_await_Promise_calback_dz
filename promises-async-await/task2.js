/*
Завдання 2

Створіть функцію filterArray(array, callback), яка фільтрує масив на основі умов із callback:
- Функція має повертати новий масив, що містить тільки елементи, для яких callback повертає true.
- Створіть два callback: isEven(number) — повертає true, якщо число парне; isShortWord(word) — повертає true, якщо довжина рядка менше або дорівнює 4.
- Використовуйте filterArray для фільтрації масиву чисел і рядків.

Приклад використання:
filterArray([1, 2, 3, 4, 5], isEven); // [2, 4]
filterArray(["cat", "elephant", "dog", "bird"], isShortWord); // ["cat", "dog", "bird"]
*/
function filterArray(array, callback) { return array.filter(callback); }
function isEven(number) { return number % 2 === 0; }
function isShortWord(word) { return word.length <= 4; }
var evenNumbers = filterArray([1, 2, 3, 4, 5], isEven);
var shortWords = filterArray(["cat", "elephant", "dog", "bird"], isShortWord);
console.log(evenNumbers, shortWords); showResult("Завдання 2", JSON.stringify(evenNumbers) + "\n" + JSON.stringify(shortWords));
