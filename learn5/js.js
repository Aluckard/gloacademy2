'use strict';

let money = 50000,
    income = "фриланс",
    addExpenses = "Интернет, Телефон, Бензин",
    deposit = true,
    mission = 250000,
    period = 6;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


showTypeOf(income.length);
showTypeOf("за " + period + " месяцев " + mission + " рублей на отпуск");
showTypeOf(addExpenses.toLowerCase().split(", "));

let days = 30;

let budgetDay = function (money, days) {
    return (money / days) + " " + (money % days);
}
showTypeOf(budgetDay(money, days));


money = +prompt("Ваш месячный доход?", "80000");

addExpenses = prompt ("Перечислите возможные расходы за расчитываемый период через запятую!", "Интернет, телефон, бензин");
showTypeOf(addExpenses.split(", "));

deposit = confirm("Есть ли у вас депозит в банке?");

showTypeOf(typeof (money));
showTypeOf(typeof (income));
showTypeOf(typeof (deposit));

let costs = prompt("Какие обязательные ежемесячные расходы у вас есть?", "бензин");
let howMuch = +prompt("Во сколько это обойдёться?", "3000");
let costs2 = prompt("Какие обязательные ежемесячные расходы у вас есть?", "интерет");
let howMuch2 = +prompt("Во сколько это обойдёться?", "1000");

function sum(howMuch, howMuch2, money) {
    return money-(howMuch + howMuch2);
}
let budgetMonth = sum(howMuch, howMuch2, money);
showTypeOf(budgetMonth);

function missionAccomplishment(mission, budgetMonth) {
    return mission / budgetMonth;
}

let getMissionAccomplishment = missionAccomplishment(mission, budgetMonth);
showTypeOf(Math.ceil(getMissionAccomplishment));

function sum3(budgetMonth, days) {
    return budgetMonth / days;
}
budgetDay = sum3(budgetMonth, days);

showTypeOf(Math.floor(budgetDay));

let getStatusIncome = function () {
    if (budgetDay >= 800){return ("Высокий уровень дохода!");}
    else if (budgetDay >= 300 && budgetDay < 800){return ("Средний уровень дохода!");}
    else if (budgetDay >= 0 && budgetDay < 300){return ("Низкий уровень дохода!");}
    else  {return ("Что то пошло не так!");}
};

showTypeOf(getStatusIncome());

function getExpensesMonth(howMuch, howMuch2) {
    return howMuch + howMuch2;
}
showTypeOf(getExpensesMonth(howMuch, howMuch2));

let accumulatedMonth = budgetMonth;
showTypeOf(accumulatedMonth);

let getTargetMonth = missionAccomplishment(mission, budgetMonth);
showTypeOf(Math.floor(getTargetMonth) + " месяца для достижения цели!");

function accumulatedPeriod (period, accumulatedMonth) {
    return period * accumulatedMonth;
}

showTypeOf(Math.ceil(accumulatedPeriod(period, accumulatedMonth)) + " накопишь за " + Math.floor(period) + " месяцев");