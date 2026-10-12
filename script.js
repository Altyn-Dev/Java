// Создание списка заданий
const tasks = [
[111, "Проверка уровня сигнала Wi-Fi", `
<input id="v111" type="number" value="65" placeholder="Сигнал %">
<button data-action="111">Проверить</button>`],

[112, "Проверка доступа к онлайн-курсу", `
<label><input id="completed112" type="checkbox" checked> Предыдущий модуль завершён</label>
<input id="score112" type="number" value="75" placeholder="Баллы">
<button data-action="112">Проверить доступ</button>`],

[113, "Расчёт тарифа мобильного интернета", `
<input id="v113" type="number" value="12" placeholder="Трафик в ГБ">
<button data-action="113">Рассчитать тариф</button>`],

[114, "Определение типа файла", `
<input id="v114" type="text" value="pdf" placeholder="Расширение файла">
<button data-action="114">Определить тип</button>`],

[115, "Определение победителя соревнования", `
<input id="p1115" type="number" value="87" placeholder="Участник 1">
<input id="p2115" type="number" value="92" placeholder="Участник 2">
<button data-action="115">Сравнить</button>`],

[116, "Сумма чисел, кратных семи", `
<button data-action="116">Рассчитать</button>`],

[117, "Анализ продаж магазина", `
<button data-action="117">Показать статистику</button>`],

[118, "Подсчёт пробелов в тексте", `
<button data-action="118">Подсчитать пробелы</button>`],

[119, "Замена отрицательных чисел нулями", `
<button data-action="119">Заменить числа</button>`],

[120, "Поиск самого длинного слова", `
<button data-action="120">Найти слово</button>`],

[121, "Генератор последовательности Фибоначчи", `
<button data-action="121">Создать последовательность</button>`],

[122, "Определение повторяющихся имён", `
<button data-action="122">Найти повторы</button>`],

[123, "Подсчёт количества цифр в строке", `
<button data-action="123">Посчитать цифры</button>`],

[124, "Расчёт стоимости электроэнергии", `
<input id="kwh124" type="number" value="250" placeholder="кВт·ч">
<input id="rate124" type="number" value="25" placeholder="Тариф ₸">
<button data-action="124">Рассчитать</button>`],

[125, "Проверка имени пользователя", `
<input id="v125" type="text" value="student_2026" placeholder="Имя пользователя">
<button data-action="125">Проверить</button>`],

[126, "Расчёт успеваемости учебной группы", `
<button data-action="126">Анализировать группу</button>`],

[127, "Поиск товара по названию", `
<input id="v127" type="text" value="монитор" placeholder="Название товара">
<button data-action="127">Найти товар</button>`],

[128, "Расчёт времени выполнения задач", `
<button data-action="128">Рассчитать время</button>`],

[129, "Система начисления бонусных баллов", `
<input id="v129" type="number" value="15000" placeholder="Сумма покупки ₸">
<button data-action="129">Рассчитать бонус</button>`],

[130, "Рейтинг IT-проектов", `
<button data-action="130">Показать рейтинг</button>`],

[131, "Калькулятор потребления воды", `
<p>Учебная формула: 30 мл на 1 кг массы тела.</p>
<input id="weight131" type="number" min="1" max="500" step="0.1" placeholder="Масса тела, кг">
<button data-action="131">Рассчитать</button>
<div class="water-track"><div id="waterBar131" class="water-bar"></div></div>`],

[132, "Генератор QR-кода", `
<input id="url132" type="text" placeholder="Введите ссылку или текст">
<button data-action="132">Создать QR</button>
<button data-action="clear132">Очистить</button>
<button data-action="download132">Скачать PNG</button>
<div id="qr132"></div>`],

[133, "Интерактивная таблица умножения", `
<p id="question133">Нажмите «Начать тест».</p>
<input id="answer133" type="number" placeholder="Ваш ответ">
<button data-action="start133">Начать тест</button>
<button data-action="check133">Проверить</button>`],

[134, "Менеджер расходов", `
<input id="expenseName134" type="text" placeholder="Название расхода">
<input id="expenseAmount134" type="number" min="0.01" step="0.01" placeholder="Сумма ₸">
<button data-action="add134">Добавить</button>
<div id="expenses134"></div>
<p id="expenseTotal134">Общая сумма: 0 ₸</p>`],

[135, "Электронный журнал оценок", `
<input id="studentName135" type="text" placeholder="ФИО студента">
<input id="studentScore135" type="number" min="0" max="100" placeholder="Баллы 0–100">
<button data-action="addStudent135">Добавить студента</button>
<p>
<input id="search135" type="search" placeholder="Поиск по имени">
<button data-action="search135">Найти</button>
<button data-action="sort135">Сортировать по баллам</button>
<button data-action="export135">Экспорт CSV</button>
</p>
<div id="students135"></div>
<p id="average135">Средний балл: 0</p>`]
];

const main = document.getElementById("tasks");

tasks.forEach(([id, title, html]) => {
    const section = document.createElement("section");
    section.className = "task";
    section.id = "task" + id;

    const heading = document.createElement("h2");
    heading.textContent = `Задание ${id}. ${title}`;

    const controls = document.createElement("div");
    controls.innerHTML = html;

    const result = document.createElement("div");
    result.className = "result";
    result.id = "result" + id;

    section.append(heading, controls, result);
    main.appendChild(section);
});

function show(id, message) {
    document.getElementById("result" + id).textContent = message;
}

function readNumber(id) {
    const input = document.getElementById(id);
    if (!input || input.value.trim() === "") return NaN;
    return Number(input.value);
}

// Задание 111
function wifiQuality(signal) {
    if (!Number.isFinite(signal) || signal < 0 || signal > 100) {
        return "Ошибка: введите значение от 0 до 100";
    }
    if (signal === 0) return "Нет сигнала";
    if (signal <= 30) return "Слабый";
    if (signal <= 70) return "Средний";
    return "Сильный";
}

// Задание 112
function courseAccess(completed, score) {
    return completed === true && score >= 70
        ? "Следующий модуль доступен"
        : "Доступ закрыт";
}

// Задание 113
function internetCost(gb) {
    if (!Number.isFinite(gb) || gb < 0) return "Некорректный объём трафика";
    if (gb <= 5) return 1500;
    if (gb <= 15) return 3000;
    if (gb <= 30) return 5000;
    return 7000;
}

// Задание 114
function fileType(extension) {
    switch (extension.trim().toLowerCase().replace(/^\./, "")) {
        case "jpg":
        case "png": return "Изображение";
        case "mp4":
        case "avi": return "Видео";
        case "pdf":
        case "docx": return "Документ";
        case "js":
        case "html": return "Исходный код";
        default: return "Неизвестный тип";
    }
}

// Задание 115
function winner(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return "Введите оба результата";
    }
    if (a > b) return "Победил участник 1";
    if (b > a) return "Победил участник 2";
    return "Ничья";
}

// Задание 117
const sales117 = [12000, 18500, 9700, 25000, 16300, 21000, 14000];

function analyzeSales(sales) {
    const total = sales.reduce((sum, n) => sum + n, 0);
    return {
        total,
        average: sales.length ? total / sales.length : 0,
        max: Math.max(...sales),
        min: Math.min(...sales),
        over20000: sales.filter(n => n > 20000).length
    };
}

// Задание 119
const numbers119 = [12, -4, 7, -9, 18, -2, 5];
const fixed119 = numbers119.map(n => n < 0 ? 0 : n);

// Задание 120
const words120 = ["HTML", "JavaScript", "CSS", "Programming", "SQL"];
const longest120 = words120.reduce((a, b) => a.length >= b.length ? a : b);

// Задание 122
const names122 = ["Алия", "Арман", "Данияр", "Алия", "Мадина", "Арман"];
const duplicates122 = [...new Set(names122.filter(
    (name, i) => names122.indexOf(name) !== i
))];

// Задание 124
function calculateElectricity(kwh, rate) {
    if (!Number.isFinite(kwh) || !Number.isFinite(rate) ||
        kwh < 0 || rate < 0) {
        return null;
    }
    return kwh * rate;
}

// Задание 125
function validateUsername(username) {
    return username.length >= 5 &&
        username.length <= 15 &&
        /^[a-zA-Z0-9_]+$/.test(username);
}

// Задание 126
const students126 = [
    {name: "Алия", score: 95},
    {name: "Арман", score: 76},
    {name: "Данияр", score: 48},
    {name: "Мадина", score: 88},
    {name: "Руслан", score: 35}
];

function analyzeStudents(students) {
    const passed = students.filter(s => s.score >= 50);
    const failed = students.length - passed.length;
    const sum = students.reduce((total, s) => total + s.score, 0);

    return {
        average: students.length ? sum / students.length : 0,
        passed: passed.map(s => s.name),
        failed,
        successRate: students.length
            ? passed.length / students.length * 100
            : 0
    };
}

// Задание 127
const products127 = [
    {name: "Ноутбук", price: 280000},
    {name: "Монитор", price: 95000},
    {name: "Мышь", price: 7500},
    {name: "Клавиатура", price: 18000}
];

function findProduct(name) {
    return products127.find(
        p => p.name.toLowerCase() === name.trim().toLowerCase()
    );
}

// Задание 128
const tasks128 = [
    {name: "HTML", minutes: 45},
    {name: "CSS", minutes: 60},
    {name: "JavaScript", minutes: 90},
    {name: "Testing", minutes: 30}
];

function calculateTotalTime(tasks) {
    const total = tasks.reduce((sum, task) => sum + task.minutes, 0);
    const longest = tasks.reduce((a, b) => a.minutes > b.minutes ? a : b);
    return {
        total,
        hours: Math.floor(total / 60),
        minutes: total % 60,
        longest
    };
}

// Задание 129
function calculatePoints(amount) {
    if (!Number.isFinite(amount) || amount < 0) return null;

    let rate;
    if (amount < 10000) rate = 0.01;
    else if (amount < 30000) rate = 0.03;
    else rate = 0.05;

    return Math.round(amount * rate);
}

// Задание 130
const projects130 = [
    {title: "Smart Campus", score: 85},
    {title: "AI Assistant", score: 97},
    {title: "Eco Monitor", score: 78},
    {title: "Digital Library", score: 91}
];

// Задание 134: хранение расходов
function loadExpenses() {
    try {
        const data = JSON.parse(localStorage.getItem("expenses134") || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

let expenses134 = loadExpenses();
let nextExpenseId = expenses134.reduce(
    (max, item) => Math.max(max, Number(item.id) || 0), 0
) + 1;

function renderExpenses() {
    const container = document.getElementById("expenses134");
    container.replaceChildren();

    expenses134.forEach(item => {
        const row = document.createElement("p");
        const label = document.createElement("span");
        const button = document.createElement("button");

        label.textContent = `${item.name}: ${Number(item.amount).toLocaleString("ru-RU")} ₸ `;
        button.textContent = "Удалить";
        button.dataset.action = "deleteExpense134";
        button.dataset.id = item.id;

        row.append(label, button);
        container.appendChild(row);
    });

    const total = expenses134.reduce((sum, item) => sum + item.amount, 0);
    document.getElementById("expenseTotal134").textContent =
        `Общая сумма: ${total.toLocaleString("ru-RU")} ₸`;

    localStorage.setItem("expenses134", JSON.stringify(expenses134));
}

// Задание 135: журнал оценок
function loadStudents() {
    try {
        const data = JSON.parse(localStorage.getItem("students135") || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

let students135 = loadStudents();
let sortStudents135 = false;
let searchStudents135 = "";

function studentLevel(score) {
    if (score < 50) return "Не сдал";
    if (score < 70) return "Удовлетворительно";
    if (score < 90) return "Хорошо";
    return "Отлично";
}

function renderStudents() {
    const container = document.getElementById("students135");
    container.replaceChildren();

    const filtered = students135.filter(s =>
        s.name.toLowerCase().includes(searchStudents135.toLowerCase())
    );

    if (sortStudents135) {
        filtered.sort((a, b) => b.score - a.score);
    }

    if (filtered.length === 0) {
        container.textContent = "Студенты не найдены";
    } else {
        const table = document.createElement("table");
        const header = document.createElement("tr");

        ["ФИО", "Баллы", "Результат", "Действие"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            header.appendChild(th);
        });

        table.appendChild(header);

        filtered.forEach(student => {
            const tr = document.createElement("tr");

            [student.name, student.score, studentLevel(student.score)].forEach(text => {
                const td = document.createElement("td");
                td.textContent = text;
                tr.appendChild(td);
            });

            const td = document.createElement("td");
            const button = document.createElement("button");
            button.textContent = "Удалить";
            button.dataset.action = "deleteStudent135";
            button.dataset.id = student.id;
            td.appendChild(button);
            tr.appendChild(td);
            table.appendChild(tr);
        });

        container.appendChild(table);
    }

    const average = students135.length
        ? students135.reduce((sum, s) => sum + s.score, 0) / students135.length
        : 0;

    document.getElementById("average135").textContent =
        `Средний балл группы: ${average.toFixed(2)}`;

    localStorage.setItem("students135", JSON.stringify(students135));
}

renderExpenses();
renderStudents();

// Обработка кнопок
document.addEventListener("click", function(event) {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const action = button.dataset.action;

    switch (action) {
        case "111": {
            const n = readNumber("v111");
            show(111, wifiQuality(n));
            break;
        }

        case "112": {
            const completed = document.getElementById("completed112").checked;
            const score = readNumber("score112");
            show(112, Number.isFinite(score)
                ? courseAccess(completed, score)
                : "Введите корректные баллы");
            break;
        }

        case "113": {
            const n = readNumber("v113");
            const cost = internetCost(n);
            show(113, typeof cost === "number" ? `Стоимость: ${cost} ₸` : cost);
            break;
        }

        case "114":
            show(114, fileType(document.getElementById("v114").value));
            break;

        case "115": {
            const a = readNumber("p1115");
            const b = readNumber("p2115");
            show(115, winner(a, b));
            break;
        }

        case "116": {
            let sum = 0, count = 0;
            for (let i = 1; i <= 100; i++) {
                if (i % 7 === 0) {
                    sum += i;
                    count++;
                }
            }
            show(116, `Количество: ${count}\nСумма: ${sum}`);
            break;
        }

        case "117": {
            const s = analyzeSales(sales117);
            show(117, `Продажи за неделю: ${s.total} ₸\n` +
                `Средняя выручка: ${s.average.toFixed(2)} ₸\n` +
                `Максимум: ${s.max} ₸\nМинимум: ${s.min} ₸\n` +
                `Дней выше 20000 ₸: ${s.over20000}`);
            break;
        }

        case "118": {
            const text = "I am learning JavaScript today";
            let count = 0;
            for (const char of text) {
                if (char === " ") count++;
            }
            show(118, `Текст: ${text}\nКоличество пробелов: ${count}`);
            break;
        }

        case "119":
            show(119, `Исходный массив: ${numbers119.join(", ")}\n` +
                `Новый массив: ${fixed119.join(", ")}`);
            break;

        case "120":
            show(120, `Самое длинное слово: ${longest120}\n` +
                `Количество символов: ${longest120.length}`);
            break;

        case "121": {
            const fib = [0, 1];
            for (let i = 2; i < 10; i++) {
                fib.push(fib[i - 1] + fib[i - 2]);
            }
            show(121, fib.join(", "));
            break;
        }

        case "122":
            show(122, duplicates122.join(", "));
            break;

        case "123": {
            const text = "Group RPO-23-1 Room 21";
            const digits = text.match(/[0-9]/g) || [];
            show(123, `Текст: ${text}\nКоличество цифр: ${digits.length}`);
            break;
        }

        case "124": {
            const kwh = readNumber("kwh124");
            const rate = readNumber("rate124");
            const cost = calculateElectricity(kwh, rate);
            show(124, cost === null
                ? "Введите неотрицательные числа"
                : `Стоимость электроэнергии: ${cost.toLocaleString("ru-RU")} ₸`);
            break;
        }

        case "125": {
            const username = document.getElementById("v125").value;
            show(125, validateUsername(username)
                ? "Имя пользователя допустимо"
                : "Ошибка: 5–15 символов, только латинские буквы, цифры и _");
            break;
        }

        case "126": {
            const result = analyzeStudents(students126);
            show(126, `Средний балл: ${result.average.toFixed(2)}\n` +
                `Сдали: ${result.passed.join(", ")}\n` +
                `Не сдали: ${result.failed}\n` +
                `Успеваемость: ${result.successRate.toFixed(2)}%`);
            break;
        }

        case "127": {
            const product = findProduct(document.getElementById("v127").value);
            show(127, product
                ? `${product.name}: ${product.price.toLocaleString("ru-RU")} ₸`
                : "Товар не найден");
            break;
        }

        case "128": {
            const result = calculateTotalTime(tasks128);
            show(128, `Общее время: ${result.hours} ч ${result.minutes} мин\n` +
                `Самая продолжительная задача: ${result.longest.name} (${result.longest.minutes} мин)`);
            break;
        }

        case "129": {
            const amount = readNumber("v129");
            const points = calculatePoints(amount);
            show(129, points === null
                ? "Введите неотрицательную сумму"
                : `Начислено бонусов: ${points}`);
            break;
        }

        case "130": {
            const sorted = [...projects130].sort((a, b) => b.score - a.score);
            const average = projects130.reduce((sum, p) => sum + p.score, 0) /
                projects130.length;

            show(130, `Рейтинг:\n${sorted.map((p, i) =>
                `${i + 1}. ${p.title} — ${p.score} баллов`).join("\n")}\n` +
                `Победитель: ${sorted[0].title}\n` +
                `Средний балл: ${average.toFixed(2)}\n` +
                `Проекты с 90 баллами и выше: ${
                    sorted.filter(p => p.score >= 90).map(p => p.title).join(", ")
                }`);
            break;
        }

        case "131": {
            const weight = readNumber("weight131");
            if (!Number.isFinite(weight) || weight <= 0 || weight > 500) {
                show(131, "Введите массу больше 0 и не более 500 кг");
                document.getElementById("waterBar131").style.width = "0";
                break;
            }

            const liters = weight * 30 / 1000;
            show(131, `Результат по учебной формуле: ${liters.toFixed(2)} л в день.\n` +
                "Это упрощённый расчёт, а не индивидуальная медицинская рекомендация.");

            document.getElementById("waterBar131").style.width =
                Math.min(liters / 4 * 100, 100) + "%";
            break;
        }

        case "132": {
            const text = document.getElementById("url132").value.trim();
            const container = document.getElementById("qr132");
            container.replaceChildren();

            if (!text) {
                show(132, "Введите ссылку или текст");
                break;
            }

            if (typeof QRCode === "undefined") {
                show(132, "Не удалось загрузить библиотеку QR. Проверьте интернет.");
                break;
            }

            new QRCode(container, {
                text,
                width: 200,
                height: 200
            });
            show(132, "QR-код создан");
            break;
        }

        case "clear132":
            document.getElementById("url132").value = "";
            document.getElementById("qr132").replaceChildren();
            show(132, "");
            break;

        case "download132": {
            const qr = document.querySelector("#qr132 canvas") ||
                document.querySelector("#qr132 img");

            if (!qr) {
                show(132, "Сначала создайте QR-код");
                break;
            }

            const link = document.createElement("a");
            link.download = "qr-code.png";
            link.href = qr.tagName === "CANVAS"
                ? qr.toDataURL("image/png")
                : qr.src;
            link.click();
            break;
        }

        case "start133":
            quiz133 = {
                count: 0,
                correct: 0,
                a: Math.floor(Math.random() * 10) + 1,
                b: Math.floor(Math.random() * 10) + 1,
                active: true
            };
            document.getElementById("answer133").value = "";
            document.getElementById("question133").textContent =
                `Пример 1 из 10: ${quiz133.a} × ${quiz133.b} = ?`;
            show(133, "Введите ответ и нажмите «Проверить»");
            break;

        case "check133": {
            if (!quiz133 || !quiz133.active) {
                show(133, "Сначала нажмите «Начать тест»");
                break;
            }

            const input = document.getElementById("answer133");
            const answer = Number(input.value);

            if (input.value.trim() === "" || !Number.isFinite(answer)) {
                show(133, "Введите ответ");
                break;
            }

            if (answer === quiz133.a * quiz133.b) quiz133.correct++;
            quiz133.count++;

            if (quiz133.count >= 10) {
                quiz133.active = false;
                document.getElementById("question133").textContent =
                    "Тест завершён";
                show(133, `Результат: ${quiz133.correct} из 10 правильных ответов`);
            } else {
                quiz133.a = Math.floor(Math.random() * 10) + 1;
                quiz133.b = Math.floor(Math.random() * 10) + 1;
                document.getElementById("question133").textContent =
                    `Пример ${quiz133.count + 1} из 10: ${quiz133.a} × ${quiz133.b} = ?`;
                show(133, `Правильных ответов: ${quiz133.correct}`);
            }

            input.value = "";
            break;
        }

        case "add134": {
            const name = document.getElementById("expenseName134").value.trim();
            const amount = readNumber("expenseAmount134");

            if (!name || !Number.isFinite(amount) || amount <= 0) {
                document.getElementById("expenseTotal134").textContent =
                    "Введите название и сумму больше 0";
                break;
            }

            expenses134.push({id: nextExpenseId++, name, amount});
            document.getElementById("expenseName134").value = "";
            document.getElementById("expenseAmount134").value = "";
            renderExpenses();
            break;
        }

        case "deleteExpense134":
            expenses134 = expenses134.filter(
                item => String(item.id) !== button.dataset.id
            );
            renderExpenses();
            break;

        case "addStudent135": {
            const name = document.getElementById("studentName135").value.trim();
            const scoreInput = document.getElementById("studentScore135");
            const score = readNumber("studentScore135");

            if (!name || scoreInput.value.trim() === "" ||
                !Number.isInteger(score) || score < 0 || score > 100) {
                document.getElementById("average135").textContent =
                    "Введите ФИО и целые баллы от 0 до 100";
                break;
            }

            students135.push({
                id: Date.now() + Math.random(),
                name,
                score
            });

            document.getElementById("studentName135").value = "";
            scoreInput.value = "";
            renderStudents();
            break;
        }

        case "search135":
            searchStudents135 = document.getElementById("search135").value.trim();
            renderStudents();
            break;

        case "sort135":
            sortStudents135 = !sortStudents135;
            renderStudents();
            break;

        case "deleteStudent135":
            students135 = students135.filter(
                s => String(s.id) !== button.dataset.id
            );
            renderStudents();
            break;

        case "export135": {
            const escapeCSV = value =>
                '"' + String(value).replace(/"/g, '""') + '"';

            const rows = [
                ["ФИО", "Баллы", "Результат"],
                ...students135.map(s => [
                    s.name, s.score, studentLevel(s.score)
                ])
            ];

            const csv = "\uFEFF" + rows.map(row =>
                row.map(escapeCSV).join(";")
            ).join("\r\n");

            const blob = new Blob([csv], {
                type: "text/csv;charset=utf-8;"
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "students.csv";
            link.click();
            URL.revokeObjectURL(url);
            break;
        }
    }
});

let quiz133 = null;