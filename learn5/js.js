'use strict';

let money = 50000,
    income = "фриланс",
    addExpenses = "Интернет, Телефон, Бензин",
    deposit = true,
    mission = 250000,
    period = 6;

// let start = function(){
//     money = +prompt("Ваш месячный доход", 80000);
//
//     while (isNaN(money) || money === "" || money === null){
//         money = +prompt("Ваш месячный доход", 80000);
//     }
// };

let start = function (){
    do {
        money = +prompt("Ваш месячный доход", 80000);
    }
    while (isNaN(money) || money === "" || money === null){
        money = +prompt("Ваш месячный доход", 80000);
    }
};

start();

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
};
showTypeOf(budgetDay(money, days));


// money = +prompt("Ваш месячный доход?", "80000");

addExpenses = prompt ("Перечислите возможные расходы за расчитываемый период через запятую!", "Интернет, телефон, бензин");
showTypeOf(addExpenses.split(", "));

deposit = confirm("Есть ли у вас депозит в банке?");

showTypeOf(typeof (money));
showTypeOf(typeof (income));
showTypeOf(typeof (deposit));

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


let validHowMuch = function(){
    let validHowMuch = +prompt("Во сколько это обойдёться?", "3000");
        while (isNaN(validHowMuch) || validHowMuch === "" || validHowMuch === null){
        validHowMuch = +prompt("Во сколько это обойдёться?", "3000");
    }
    return validHowMuch;
};


let expensesAmount = getExpensesMonth();

function sum(money, expensesAmount) {
    return money - expensesAmount;
}
let budgetMonth = sum(money, expensesAmount);
showTypeOf(budgetMonth);

function missionAccomplishment(mission, budgetMonth) {
    return mission / budgetMonth;
}
//количество месяцев которое потребуеться для достижения цели
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