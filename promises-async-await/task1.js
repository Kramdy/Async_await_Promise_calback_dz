/*
Завдання 1

Створіть функцію processArray(array, callback), яка виконує операцію над кожним елементом масиву:
- Функція повинна проходити по кожному елементу масиву і передавати його в callback.
- Створіть два callback: doubleElement(element) — повертає подвоєне значення елемента; reverseElement(element) — повертає строкове значення елемента у зворотному порядку.
- Передайте масив і обидва callback у processArray для перевірки.

Приклад використання:
processArray([1, 2, 3, 4, 5], doubleElement); // [2, 4, 6, 8, 10]
processArray(["hello", "world"], reverseElement); // ["olleh", "dlrow"]
*/
function processArray(array, callback) { return array.map(callback); }
function doubleElement(element) { return element * 2; }
function reverseElement(element) { return String(element).split("").reverse().join(""); }
var doubled = processArray([1, 2, 3, 4, 5], doubleElement);
var reversed = processArray(["hello", "world"], reverseElement);
console.log(doubled, reversed); showResult("Завдання 1", JSON.stringify(doubled) + "\n" + JSON.stringify(reversed));
