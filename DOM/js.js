// Get the expenses from local storage
 var expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Display the expenses in the table
function displayExpenses() {
  var expensesTable = document.getElementById('expenses-table');
  expensesTable.innerHTML = '';
  for (var i = 0; i < expenses.length; i++) {
    var expense = expenses[i];
    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.date}</td>
      <td>${expense.category}</td>
      <td>${expense.amount}</td>
      <td><button onclick="deleteExpense(${i})">Delete</button></td>
      <td><button onclick="editExpense(${i})">Edit</button></td>`;
    expensesTable.appendChild(row);
  }
}

// Add a new expense
function addExpense() {
  var date = document.getElementById('add-expense-form')['date'].value;
  var category = document.getElementById('add-expense-form')['category'].value;
  var amount = document.getElementById('add-expense-form')['amount'].value;

  expenses.push({
    date: date,
    category: category,
    amount: amount
  });

  // Save the expenses to local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Display the updated expenses table
  displayExpenses();
}

// Delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);

  // Save the updated expenses to local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Display the updated expenses table
  displayExpenses();
}

// Edit an expense
function editExpense(index) {
  var expense = expenses[index];

  // Prompt the user for the updated values
  var date = prompt('Enter the updated date:', expense.date);
  var category = prompt('Enter the updated category:', expense.category);
  var amount = prompt('Enter the updated amount:', expense.amount);

  // Update the expense
  expense.date = date;
  expense.category = category;
  expense.amount = amount;

  // Save the updated expenses to local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Display the updated expenses table
  displayExpenses();
}

// Display the expenses on page load
displayExpenses();