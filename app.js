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
  
  