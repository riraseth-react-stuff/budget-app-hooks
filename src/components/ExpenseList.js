import React from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
const ExpenseList = ({ expenses }) => {
  console.log(expenses);
  return (
    <React.Fragment>
      <ul className="list">
        {expenses.map(expense => {
          return <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">
          clear expenses
          <MdDelete className="btn-icon"></MdDelete>
        </button>
      )}
    </React.Fragment>
  );
};

export default ExpenseList;
