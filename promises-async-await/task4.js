/*
Завдання 4

Вам необхідно провести сортування масиву з використанням Promise. Для цього створіть функцію sortArray(array), яка виконує сортування масиву:
- Якщо масив порожній, відхиліть Promise з повідомленням "Масив порожній".
- Якщо масив не порожній, виконайте Promise через 2 секунди, повертаючи відсортований масив.
- Додайте затримку сортування за допомогою setTimeout.
*/
function sortArray(array) { return new Promise(function (resolve, reject) { if (array.length === 0) { reject("Масив порожній"); return; } setTimeout(function () { resolve(array.slice().sort(function (a, b) { return a - b; })); }, 2000); }); }
sortArray([8, 2, 5, 1, 4]).then(function (result) { console.log(result); showResult("Завдання 4", JSON.stringify(result)); }).catch(function (error) { showResult("Завдання 4", error); });
