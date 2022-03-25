function solveEquation(a, b, c) {
  use strict
  let arr = [];
  
  let d = Math.pow(b, 2) - 4 * a * c; // код для задачи №1 писать здесь
  if (d < 0) {
      return arr;
  }
  if (d === 0) {
      arr.push(-b / (2 * a));
      return arr;
  }
  arr.push((-b + Math.sqrt(d)) / (2 * a));
  arr.push((-b - Math.sqrt(d)) / (2 * a)); 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
 
  use strict
  let currentDate = new Date();


  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}
  if (isNaN(percent)) {
      return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if (isNaN(contribution)) {
      return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  if (date <= currentDate) {
      return `Параметр "Дата" содержит неправильное значение "${date}"`;
  }

  const count = 2;
  let credit = amount - contribution;
  let months = (date.getFullYear() - currentDate.getFullYear()) * 12 - currentDate.getMonth() + date.getMonth();

  let p = (1 / 12) * (percent / 100);
  let payment = credit * (p + p / ((Math.pow(1 + p, months)) - 1));
  let totalAmount = payment * months;

  if (totalAmount !== 0) {
      return +totalAmount.toFixed(count);
  }

  return totalAmount;
}