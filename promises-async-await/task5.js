/*
Завдання 5

Створіть функцію multiplyAsync(a, b), яка виконує множення двох чисел із затримкою у 2 секунди.
- Функція має повертати Promise, який завершує виконання з результатом множення.
- Якщо передано некоректні значення (наприклад, рядки), викиньте помилку "Некоректні значення".
- Напишіть асинхронну функцію main(), яка викликає multiplyAsync для чисел 6 і 9 і виводить результат.
*/
function multiplyAsync(a, b) { return new Promise(function (resolve, reject) { setTimeout(function () { if (typeof a !== "number" || typeof b !== "number") { reject("Некоректні значення"); return; } resolve(a * b); }, 2000); }); }
async function mainMultiply() { try { var result = await multiplyAsync(6, 9); console.log(result); showResult("Завдання 5", String(result)); } catch (error) { showResult("Завдання 5", error); } }
mainMultiply();
