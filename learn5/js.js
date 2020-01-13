'use strict';

let money = 50000,
    income = "фриланс",
    addExpenses = "Интернет, Телефон, Бензин",
    deposit = true,
    mission = 250000,
    period = 6;
//функция для получения месячного дохода с валидацией.
let start = function (){
    do {
        money = +prompt("Ваш месячный доход", 80000);
    }
    while (isNaN(money) || money === "" || money === null){
        money = +prompt("Ваш месячный доход", 80000);
    }
};
start();
////

//функция для замены консоль лога с получением типа данных
let showTypeOf = function(data) {
    console.log(data, typeof(data));
};
////

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
showTypeOf(income.length);
showTypeOf("за " + period + " месяцев " + mission + " рублей на отпуск");
showTypeOf(addExpenses.toLowerCase().split(", "));
//получаем дневной бюджет
let days = 30;
let budgetDay = (money / days) + " " + (money % days);
console.log(budgetDay);
////


addExpenses = prompt ("Перечислите возможные расходы за расчитываемый период через запятую!", "Интернет, телефон, бензин");
showTypeOf(addExpenses.split(", "));
deposit = confirm("Есть ли у вас депозит в банке?");

showTypeOf(typeof (money));
showTypeOf(typeof (income));
showTypeOf(typeof (deposit));

//создаём функцию формата вопрос-ответ
let costs,
    costs2;
let getExpensesMonth = function () {
    let howMuchSum = 0;
    for (let i = 0; i < 2; i++){
        if (i === 0){
            costs = prompt("Введите обязательную статью расходов?", "интернет")
        }
        if (i === 1){
            costs2 = prompt("Введите обязательную статью расходов?", "бензин")
        }
        howMuchSum += validHowMuch();
    }
    return howMuchSum;
};
//создаём валидацию для функции формата вопрос-ответ
let validHowMuch = function(){
    let validHowMuch = +prompt("Во сколько это обойдёться?", 3000);
    while (isNaN(validHowMuch) || validHowMuch === "" || validHowMuch === null){
        validHowMuch = +prompt("Во сколько это обойдёться?", 3000);
    }
    return validHowMuch;
};
let expensesAmount = getExpensesMonth();
////////

//создаём функцию для высчитывания месячного бюджета: доход минус расходы
function budgetMonthSum(money, expensesAmount) {
    return money - expensesAmount;
}
let budgetMonth = budgetMonthSum(money, expensesAmount);
showTypeOf(budgetMonth);
////

//количество месяцев которое потребуеться для достижения цели
function missionAccomplishment(mission, budgetMonth) {
    return mission / budgetMonth;
}
let getMissionAccomplishment = missionAccomplishment(mission, budgetMonth);
showTypeOf(Math.ceil(getMissionAccomplishment));

//создаём функцию для получения дневного бюджета и округляем в меньшую сторону
function budgetDaySum(budgetMonth, days) {
    return budgetMonth / days;
}
budgetDay = budgetDaySum(budgetMonth, days);
showTypeOf(Math.floor(budgetDay));
////

//создаём функцию которая будет выводить наш уровень дохода
let getStatusIncome = function () {
    if (budgetDay >= 800){return ("Высокий уровень дохода!");}
    else if (budgetDay >= 300 && budgetDay < 800){return ("Средний уровень дохода!");}
    else if (budgetDay >= 0 && budgetDay < 300){return ("Низкий уровень дохода!");}
    else  {return ("Что то пошло не так!");}
};
showTypeOf(getStatusIncome());
////

showTypeOf(expensesAmount);
let accumulatedMonth = budgetMonth;
showTypeOf(accumulatedMonth);

//Если нам будет возвращаться отрицательное число от missionAccomplishment(цель - месячный доход) то будет выводиться "Цель не будет достигнута!"
let targetMonth = function  (){
    if (missionAccomplishment(mission, budgetMonth) <= 0){return ("Цель не будет достигнута!");}
    else {return (Math.floor(missionAccomplishment(mission, budgetMonth)) + " месяца для достижения цели!");}
};
let getTargetMonth = targetMonth();
showTypeOf(getTargetMonth);
//

function accumulatedPeriod (period, accumulatedMonth) {
    return period * accumulatedMonth;
}

showTypeOf(Math.ceil(accumulatedPeriod(period, accumulatedMonth)) + " накопишь за " + Math.floor(period) + " месяцев");