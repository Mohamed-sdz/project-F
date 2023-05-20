const balanceValueEl = document.getElementById('balance-value');
const transactionsListEl = document.getElementById('transactions-list');

// Fetch transactions from API
async function fetchTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const transactions = await response.json();
  
    return transactions;
  }
  // Display transactions and balance on the page
async function displayTransactions() {
    const transactions = await fetchTransactions();
    let totalIncome = 0;
    let totalExpenses = 0;
   
    // Create HTML for each transaction
  const transactionsHtml = transactions.map(transaction => {
    const { amount, description, id, type } = transaction;

    if (type === 'income') {
      totalIncome += parseFloat(amount);
    } else {
      totalExpenses += parseFloat(amount);
    }

    return `<li id="transaction-${id}" class="transaction transaction-${type}">
              <p class="transaction-description">${description}</p>
              <p class="transaction-amount">$${amount}</p>
              <button class="delete-button">Delete</button>
            </li>`;
  }).join('');

  transactionsListEl.innerHTML = transactionsHtml;

  // Calculate and display current balance
  const balanceValue = totalIncome - totalExpenses;
  balanceValueEl.textContent = `$${balanceValue.toFixed(2)}`;
}

displayTransactions();

// Add income modal functionality
const addIncomeModalEl = document.getElementById('add-income-modal');
const addIncomeFormEl = document.getElementById('add-income-form');

document.getElementById('add-income').addEventListener('click', () => {
  addIncomeModalEl.style.display = 'block';
});

addIncomeFormEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const amount = parseFloat(event.target.elements['income-amount'].value);
  const description = event.target.elements['income-description'].value;

  // Add transaction to API
  await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: 'income',
      description,
      amount
    })
  });