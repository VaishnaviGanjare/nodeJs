const expenses=JSON.parse(localStorage.getItem('expenses')) || [];
console.log('hello');
//display expenses on screen
function displayExpenses(){
  let expensesTable = document.getElementById('expenses-table');
  expensesTable.innerHTML = '';
  
  for(let i=0;i<expenses.length;i++){
    let expense=expenses[i];
    let row=document.createElement('tr');
    row.innerHTML = `
      <td>${expense.number}</td>
      <td>${expense.text}</td>
      <td>${expense.category}</td>
      <td><button onclick="deleteExpense(${i})">Delete</button></td>
      <td><button onclick="editExpense(${i})">Edit</button></td>`;
    expensesTable.appendChild(row);
  } 
}

//add expense in localStorage
function addExpense(){
  var number = document.getElementById('add-expense-form')['number'].value;
  console.log(number);
  var text = document.getElementById('add-expense-form')['text'].value;
  var category = document.getElementById('add-expense-form')['category'].value;

  expenses.push({
    number:number,
    text:text,
    category: category
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

// window. prompt() instructs the browser to display a dialog with an optional 
// message prompting the user to input some text, and to wait until the user 
// either submits the text or cancels the dialog.

function editExpense(index) {
  var expense = expenses[index];

  // Prompt the user for the updated values
  var number = prompt('Enter the updated date:', expense.number);
  var text = prompt('Enter the updated amount:', expense.text);
  var category = prompt('Enter the updated category:', expense.category);

  // Update the expense
  expense.number = number;
  expense.text = text;
  expense.category = category;

  // Save the updated expenses to local storage
  localStorage.setItem('expenses', JSON.stringify(expenses));

  // Display the updated expenses table
  displayExpenses();
}

// Display the expenses on page load
displayExpenses();