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
  // alert
  const [alert, setAlert] = useState({ show: false });
  //**********functionality ****************/

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
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
      handleAlert({ type: 'success', text: 'item added' });
      setCharge('');
      setAmount('');
    } else {
      handleAlert({
        type: 'danger',
        text: `charge can't be empty value and amount has to be bigger than 0`
      });
    }
  };

  const clearItems = () => {
    console.log('items deleted');
    setExpenses([]);
  };

  const handleDelete = id => {
    console.log(`item deleted ${id}`);
  };

  const handleEdit = id => {
    console.log(`item edited ${id}`);
  };

  return (
    <React.Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        ></ExpenseForm>
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        ></ExpenseList>
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
