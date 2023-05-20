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
  