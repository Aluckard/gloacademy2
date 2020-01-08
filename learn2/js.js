
let money = 50000,
    income = "фриланс",
    addExpenses = "Интернет, Телефон, Бензин",
    deposit = true,
    mission = 250000,
    period = 6;

console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));
console.log(income.length);
console.log("за " + period + " месяцев " + mission + " рублей на отпуск");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));

let budgetDay = function (a, b) {
    a = money;
    b = 30;
    return (a / b) + " " + (a % b);
}
console.log(budgetDay());


//////Усложнённое задание

let num = 266219;

function sum(a, b, c, d, f, e, g){
    return a * b * c * d * f * e;
}

let result = sum(2, 6, 6,2,1,9);
console.log(result);

function pow(a, b) {
    return result ** b;
}

let powLog = pow(result, 3);
console.log(powLog);
