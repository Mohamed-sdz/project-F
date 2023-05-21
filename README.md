#  MY Finance Tracker App
 
This is a simple budget tracker app that allows users to add multiple transactions (income or expense) and view their current balance. This app uses a RESTful API hosted on http://localhost:3000/transactions to store and retrieve transactions.

#Features
View all transactions including their descriptions, amounts, and types (income or expense)
Add a new income transaction
Add a new expense transaction
Delete a transaction from the list
Reset all transactions to start over
Technologies Used
HTML5
CSS3
JavaScript (ES6)
RESTful API
Fetch API
Getting Started
Clone the repository to your local machine:
git clone <repository_url>

Copy
Install the dependencies using npm:
npm install

Copy
Start the app:
npm start

Copy
Open your web browser and go to http://localhost:3001 to view the app.
Using the App
To add a new income transaction, click on the "Add Income" button and fill out the modal form.
To add a new expense transaction, click on the "Add Expense" button and fill out the modal form.
To delete a transaction, click on the "Delete" button next to the transaction in the list.
To reset all transactions, click on the "Reset" button at the bottom of the page.
 Contributing
Please feel free to fork the repository and submit pull requests with your improvements or bug fixes.
  example from my CLI 
 Resources
  http://localhost:3000/transactions

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...


+2
GET /transactions 200 32.126 ms - 484
POST /transactions 201 61.349 ms - 76
GET /transactions 200 5.979 ms - 574
+5
POST /transactions 201 8.842 ms - 85
GET /transactions 200 7.960 ms - 673