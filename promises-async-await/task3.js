/*
Завдання 3

Створіть три функції:
- washDishes() — повертає Promise, який виконується через 2 секунди з повідомленням "Посуд вимито".
- cleanRoom() — повертає Promise, який виконується через 4 секунди з повідомленням "Кімнату прибрано".
- makeDinner() — повертає Promise, який виконується через 7 секунд із повідомленням "Вечеря приготована".
- Використовуйте ланцюжок Promises для виконання завдань послідовно.
*/
function washDishes() { return new Promise(function (resolve) { setTimeout(function () { resolve("Посуд вимито"); }, 2000); }); }
function cleanRoom() { return new Promise(function (resolve) { setTimeout(function () { resolve("Кімнату прибрано"); }, 4000); }); }
function makeDinner() { return new Promise(function (resolve) { setTimeout(function () { resolve("Вечеря приготована"); }, 7000); }); }
washDishes().then(function (message) { showResult("Завдання 3", message); return cleanRoom(); }).then(function (message) { showResult("Завдання 3", message); return makeDinner(); }).then(function (message) { showResult("Завдання 3", message); console.log(message); });
