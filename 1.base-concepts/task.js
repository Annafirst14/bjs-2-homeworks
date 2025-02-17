"use strict"
// task 1
function solveEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c
  const roots = []

  if (discriminant < 0) {
    return roots
  } else if (discriminant === 0) {
    const root = -b / (2 * a)
    roots.push(root)
  } else {
    let sqrtDiscriminant = Math.sqrt(discriminant)
    const root1 = (-b + sqrtDiscriminant) / (2 * a)
    const root2 = (-b - sqrtDiscriminant) / (2 * a)
    roots.push(root1, root2)
  }

  return roots
}

let a = 1
let b = -3
let c = 2
let result = solveEquation(a, b, c)
console.log(result)
// Output: [1, 2]

// task 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = percent / 100
  var monthlyRate = percent / 12
  var creditAmount = amount - contribution
  var monthlyPayment =
    creditAmount *
    (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1))
  var totalPayment = monthlyPayment * countMonths
  totalPayment = parseFloat(totalPayment.toFixed(2))

  return totalPayment
}

console.log(calculateTotalMortgage(10, 0, 50000, 12))
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
console.log(calculateTotalMortgage(10, 0, 20000, 24))
console.log(calculateTotalMortgage(10, 1000, 20000, 24))
console.log(calculateTotalMortgage(10, 20000, 20000, 24))
console.log(calculateTotalMortgage(10, 0, 10000, 36))
console.log(calculateTotalMortgage(15, 0, 10000, 36))

//function solveEquation(a, b, c) {
//  let arr = [x1];
//  let D=b**4*a*c;
//if (D > 0) {
 //   double x1, x2;
   // x1 = (-b - Math.sqrt(D)) / (2 * a);
   // x2 = (-b + Math.sqrt(D)) / (2 * a);
   // console.log ("Корни уравнения: x1 = " + x1 + ", x2 = " + x2);
//}
//else if (D === 0) {
  //  double x;
  //  x = -b / (2 * a);
   // console.log("Уравнение имеет единственный корень: x = " + x);
//}
//else {
 //   console.log("Уравнение не имеет действительныхкорней!");
//}
  //return arr;
//}


//function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 //let p = percent / 1200;
   //  console.log(p);
    // let body = amount-contribution;
    // let credit = body*(p + (p/(((1+p)**countMonth)-1)));
   //  console.log(credit);
   //  let total = contribution + credit;
  //   return total.toFixed(2);
// }

