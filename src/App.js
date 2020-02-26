import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'uuid/dist/v4';

const initialExpenses = [
  {
    id: uuid(),
    charge: 'rent',
    amount: 1600
  },
  {
    id: uuid(),
    charge: 'car payment',
    amount: 400
  },
  {
    id: uuid(),
    charge: 'food',
    amount: 1000
  }
];
function App() {
  //**********state values ****************/
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  //**********functionality ****************/

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = {
        id: uuid(),
        charge,
        amount
      };
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');
    } else {
      // handle alert
    }
  };

  return (
    <React.Fragment>
      <Alert></Alert>
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        ></ExpenseForm>
        <ExpenseList expenses={expenses}></ExpenseList>
      </main>
      <h1>
        total spendings:{' '}
        <span className="total">
          ${expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0)}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default App;
