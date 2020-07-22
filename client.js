const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
let Scout = {
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
}
let Jem = {
  name: 'Jem',
  employeeNumber: '62347',
  annualSalary: '63500',
  reviewRating: 4
}
let Atticus = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
};

let Mayella = {
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
};


function employeeBonusCalc(employee) {
  let newEmployeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  };
  if (employee.employeeNumber.length === 4){
    newEmployeeBonus.bonusPercentage = 0.05;
  }
   if (employee.annualSalary > 65000){
    newEmployeeBonus.bonusPercentage -= 0.01;
   }
  if (employee.reviewRating <= 2) {
    newEmployeeBonus.bonusPercentage += 0;
    newEmployeeBonus.totalBonus = parseInt(newEmployeeBonus.bonusPercentage * employee.annualSalary);
    newEmployeeBonus.totalCompensation = Number(employee.annualSalary);

  } else if (employee.reviewRating === 3) {
    newEmployeeBonus.bonusPercentage += 0.04;
    newEmployeeBonus.totalBonus = parseInt(newEmployeeBonus.bonusPercentage * employee.annualSalary);
    newEmployeeBonus.totalCompensation = Number(employee.annualSalary) + newEmployeeBonus.totalBonus;

  } else if (employee.reviewRating === 4) {
    newEmployeeBonus.bonusPercentage += 0.06;
    newEmployeeBonus.totalBonus = parseInt(newEmployeeBonus.bonusPercentage * employee.annualSalary);
    newEmployeeBonus.totalCompensation = Number(employee.annualSalary) + newEmployeeBonus.totalBonus;
  } else if (employee.reviewRating === 5) {
    newEmployeeBonus.bonusPercentage += 0.10;
    newEmployeeBonus.totalBonus = parseInt(newEmployeeBonus.bonusPercentage * employee.annualSalary);
    newEmployeeBonus.totalCompensation = Number(employee.annualSalary) + newEmployeeBonus.totalBonus;
  }
  if (newEmployeeBonus.bonusPercentage > 0.13) {
    newEmployeeBonus.bonusPercentage = .13;
    newEmployeeBonus.totalBonus = parseInt(.13 * employee.annualSalary);
    newEmployeeBonus.totalCompensation = Number(employee.annualSalary) + newEmployeeBonus.totalBonus;
  } else if (newEmployeeBonus.bonusPercentage < 0) {
    newEmployeeBonus.bonusPercentage = 0;
    newEmployeeBonus.totalBonus = parseInt(newEmployeeBonus.bonusPercentage * employee.annualSalary);
    newEmployeeBonus.totalCompensation = Number(employee.annualSalary);
  }
  return newEmployeeBonus;
};

/*
function minMax(finalBonusPercentage) {
  if (finalBonusPercentage.bonusPercentage > .13) {
    finalBonusPercentage.bonusPercentage = .13;
    finalBonusPercentage.totalBonus = parseInt()
  } else if (finalBonusPercentage < 0 ) {
    finalBonusPercentage = 0;
  }
  return finalBonusPercentage ;
}
*/

console.log(employeeBonusCalc(Atticus));
