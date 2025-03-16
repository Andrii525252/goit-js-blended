
                       // First Task//


// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().


// const number = prompt("Enter your number!");
// const transform = Number(number);
// if (transform === 10) {
//     alert("Вірно!");
// } else {
//     alert("Невірно!")
// }


                        // Second Task

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min >= 0 && min < 15) {
//     alert(`${min} входить в першу чверть`)
// } else if (min >= 15 && min < 30) {
//     alert(`${min} входить в другу чверть`)
// } else if (min >= 30 && min < 45) {
//     alert(`${min} входить в третю чверть`)
// } else if (min >= 45 && min < 59) {
//     alert(`${min} входить в четверту чверть`)
// }

                        // Third Task



// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.


// const num = prompt("Введи число від 1 до 4");
// const transform = Number(num)
// switch (transform) {
//     case 1:
//         alert('зима')
//         break;
//     case 2:
//         alert('весна')
//         break;
//     case 3:
//         alert('літо')
//         break;
//     case 4:
//         alert('осінь')
//         break;
//     default:
//         alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно")
//         break;
// }


                        // Fourth Task




// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const time = prompt('Введи число!')

// const transformTime = Number(time);
// const hours = Math.floor(transformTime / 60);
// const minutes = transformTime % 60;
// const formattedHours = hours < 10 ? "0" + hours : hours;
// const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
// alert(`${formattedHours}:${formattedMinutes}`);

                        // Fifth Task




// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const askLog = prompt('Enter your login')
// console.log(askLog);

// if (askLog === "Адмін") {
//     const askPass = prompt("Enter your password!!!")
//     if (askPass == null) {
//         alert("Скасовано")
//     } else if (askPass === "Я головний") {
//         alert("Добрий день!")
//     } else {
//         alert("Невірний пароль!")
//     }
// } else {
//     alert("Я вас не знаю")
// }

                        // Sixth Task
                        







// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let num = 0;

// while (num <= 20) {
//     console.log(num);
//     num++;
// }

                        // Seventh Task





// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


function getNumbers(min, max) {
    let sumNumbers = 0;

    for (let i = max; i >= min; i--) {
        console.log(i)

        if (i % 2 === 0) {
            sumNumbers += i;
        }
    }

    return sumNumbers
}

// getNumbers(5, 24)
let result = getNumbers(3, 10);
console.log("Сума парних чисел:", result);







