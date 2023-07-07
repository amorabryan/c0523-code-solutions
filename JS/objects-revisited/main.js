const business = {
  opens: '10:00',
  closes: '18:00',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    Adam: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'W', 'Th'],
    },
    Steven: {
      position: 'Manager',
      daysOfWeekWorking: ['T', 'Th', 'F'],
    },
    Ashley: {
      position: 'Sales Rep',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    Paul: {
      position: 'Sales Rep',
      daysOfWeekWorking: ['T', 'Th'],
    },
  },
};
console.log('New Business:', business);

function addWeekends() {
  business.daysOpen.push('Sat', 'Sun');
  for (const employeeName in business.employees) {
    business.employees[employeeName].daysOfWeekWorking.push('Sat', 'Sun');
  }
}

function createEmployee(employeeObj) {
  business.employees[employeeObj] = {
    position: '',
    daysOfWeekWorking: '',
  };
}

function randomWorkdays(daysOpen) {
  const numDaysWorking = Math.floor(Math.random() * 5 + 1);
  const daysWorking = [];
  for (let i = 0; i < numDaysWorking; i++) {
    const randomDayIndex = Math.floor(Math.random() * daysOpen.length);
    if (!daysWorking.includes(daysOpen[randomDayIndex])) {
      daysWorking.push(daysOpen[randomDayIndex]);
    }
  }
  return daysWorking;
}

function checkIfFT(employeeObj) {
  if (employeeObj.daysOfWeekWorking.length >= 5) {
    return true;
  } else {
    return false;
  }
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', (event) => {
    for (let i = 0; i < 4; i++) {
      const newEmployee = xhr.response[i].name;
      createEmployee(newEmployee);
      business.employees[newEmployee].daysOfWeekWorking = randomWorkdays(
        business.daysOpen
      );
      business.employees[newEmployee].fullTime = checkIfFT(
        business.employees[newEmployee]
      );
      if (i === 0) {
        business.employees[newEmployee].position = 'HR';
      } else if (i === 1) {
        business.employees[newEmployee].position = 'Janitor';
      } else if (i === 2) {
        business.employees[newEmployee].position = 'PR Rep';
      } else if (i === 3) {
        business.employees[newEmployee].position = 'Sales Rep';
      }
      business.totalEmployees++;
    }
  });
  xhr.send();
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

function checkIfFTCurrent() {
  for (const employeeName in business.employees) {
    if (business.employees[employeeName].daysOfWeekWorking.length >= 5) {
      business.employees[employeeName].fullTime = true;
    } else {
      business.employees[employeeName].fullTime = false;
    }
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  addWeekends();
  checkIfFTCurrent();
  addEmployees();
  deleteEmployee('Paul');
});
