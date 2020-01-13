'use strict';
let money,
//функция для получения месячного дохода с валидацией.
    start = function () {
        do {
            money = +prompt("Ваш месячный доход", 80000);
        }
        while (isNaN(money) || money === "" || money === null)
        {
            money = +prompt("Ваш месячный доход", 80000);
        }
    };
start();
////

let appData = {
    income: {},
    addIncome: {},
    expenses: {},
    addExpenses: false,
    mission: 250000,
    period: 6,
    asking: function () {
        let addExpenses = prompt("Перечислите возможные расходы через запятую!", "Интернет, телефон, бензин");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");

    }
};

appData.budget = money;
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;


//получаем дневной бюджет
let days = 30;
appData.budgetDay = (appData.budget / days) + " " + (appData.budget % days);
// console.log(budgetDay);
////


//создаём функцию формата вопрос-ответ
let costs,
    costs2;
appData.getExpensesMonth = function () {
    let howMuchSum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            costs = prompt("Введите обязательную статью расходов?", "интернет")
        }
        if (i === 1) {
            costs2 = prompt("Введите обязательную статью расходов?", "бензин")
        }
        howMuchSum += validHowMuch();
    }
    return howMuchSum;
};

//создаём валидацию для функции формата вопрос-ответ
let validHowMuch = function () {
    let validHowMuch = +prompt("Во сколько это обойдёться?", 3000);
    while (isNaN(validHowMuch) || validHowMuch === "" || validHowMuch === null) {
        validHowMuch = +prompt("Во сколько это обойдёться?", 3000);
    }
    return validHowMuch;
};
appData.expenses = appData.getExpensesMonth();
// console.log(appData.expenses);
////////

//создаём функцию для высчитывания месячного бюджета: доход минус расходы
function budgetMonthSum(money, expensesAmount) {
    return money - expensesAmount;
}
appData.budgetMonth = budgetMonthSum(appData.budget, appData.expenses);
////

//количество месяцев которое потребуеться для достижения цели
function missionAccomplishment(mission, budgetMonth) {
    return appData.mission / appData.budgetMonth;
}
let getMissionAccomplishment = missionAccomplishment(appData.mission, appData.budgetMonth);
////

//создаём функцию для получения дневного бюджета и округляем в меньшую сторону
function budgetDaySum(budgetMonth, days) {
    return appData.budgetMonth / days;
}
appData.budgetDay = budgetDaySum(appData.budgetMonth, days);
// console.log(Math.floor(appData.budgetDay));
////

//создаём функцию которая будет выводить наш уровень дохода
appData.getStatusIncome = function () {
    if (appData.budgetDay >= 800) {
        return ("Высокий уровень дохода!");
    } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
        return ("Средний уровень дохода!");
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
        return ("Низкий уровень дохода!");
    } else {
        return ("Что то пошло не так!");
    }
};
// console.log(appData.getStatusIncome());
////


//getAccumulatedMonth
appData.accumulatedMonth = appData.budgetMonth;
// console.log(appData.accumulatedMonth);

//Если нам будет возвращаться отрицательное число от missionAccomplishment(цель - месячный доход) то будет выводиться
// "Цель не будет достигнута!"
let targetMonth = function () {
    if (missionAccomplishment(appData.mission, appData.budgetMonth) <= 0) {
        return ("Цель не будет достигнута!");
    } else {
        return (Math.floor(missionAccomplishment(appData.mission, appData.budgetMonth)) + " месяца для достижения" +
                " цели!");
    }
};
appData.getTargetMonth = targetMonth();
// console.log(appData.getTargetMonth);

function accumulatedPeriod(period, accumulatedMonth) {
    return appData.period * accumulatedMonth;
}
// console.log(
//     Math.ceil(accumulatedPeriod(appData.period, appData.accumulatedMonth)) + " накопишь за " + Math.floor(appData.period) +
//     " месяцев");

console.log(appData.expenses);