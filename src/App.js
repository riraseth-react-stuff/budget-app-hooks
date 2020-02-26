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
  console.log(useState());
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <React.Fragment>
      <Alert></Alert>
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm></ExpenseForm>
        <ExpenseList expenses={expenses}></ExpenseList>
      </main>
      <h1>
        total spendings:{' '}
        <span className="total">
          ${expenses.reduce((acc, curr) => acc + curr.amount, 0)}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default App;
