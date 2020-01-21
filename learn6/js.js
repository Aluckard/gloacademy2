'use strict';
let money,
    days = 30,
//функция для получения месячного дохода с валидацией.
    start = function () {
        do {
            money = +prompt("Ваш месячный доход", 80000);
        }
        while (isNaN(money) || money === "" || money === null);
    };
start();
////

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 250000,
    period: 6,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt("Перечислите возможные расходы через запятую!", "Интернет, телефон, бензин");
        appData.addExpenses = addExpenses.toLowerCase().split(", ");
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
        function expenses () {
            for (let i = 0; i < 2; i++) {
                let costs = prompt("Цель расходов?", "инет");
                let howMuch = +prompt("Сколько нужно денег?", 1000);
                if (howMuch != null && howMuch != "") {appData.expenses[costs] = howMuch;}
                else if (howMuch == null || howMuch == "") {alert("Не правильные данные!")}}
        }
            expenses()
        },
    getExpensesMonth: function  (expenses) {
        let sum = 0;
        for (let expenses of Object.values(appData.expenses)){
            sum += expenses;
        }
        return appData.expensesMonth = sum
    },
    getBudget: function () {

        appData.budgetDay = Math.floor(appData.budget / days);
        // console.log(Math.floor(appData.budgetDay));
        appData.budgetMonth = appData.budget - appData.expensesMonth;
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

//количество месяцев которое потребуеться для достижения цели
function missionAccomplishment(mission, budgetMonth) {
    return appData.mission / appData.budgetMonth;
}

//создаём функцию которая будет выводить наш уровень дохода
let getStatusIncome = function () {
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
appData.getStatusIncome = getStatusIncome();

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


function accumulatedPeriod(period, accumulatedMonth) {
    return appData.period * accumulatedMonth;
}

console.log(appData);
console.log(appData.expensesMonth);
console.log(appData.getTargetMonth);
console.log(appData.getStatusIncome);
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " : " + appData[key]);
};
