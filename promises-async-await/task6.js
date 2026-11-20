/*
Завдання 6

Створіть функцію sortArrayAsync(array), яка асинхронно сортує масив чисел:
- Використовуйте setTimeout всередині Promise для реалізації затримки у 2 секунди.
- Якщо масив порожній, викиньте помилку з повідомленням "Масив порожній".
- Якщо масив не порожній, поверніть відсортований масив.
- Напишіть функцію main(), яка викликає sortArrayAsync із масивом.
Опис завдання: Async_await_Promise_calback.
*/
function sortArrayAsync(array) { return new Promise(function (resolve, reject) { if (array.length === 0) { reject("Масив порожній"); return; } setTimeout(function () { resolve(array.slice().sort(function (a, b) { return a - b; })); }, 2000); }); }
async function mainSort() { try { var result = await sortArrayAsync([9, 3, 6, 1, 8]); console.log(result); showResult("Завдання 6", JSON.stringify(result)); } catch (error) { showResult("Завдання 6", error); } }
mainSort();
