import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [displayStatus, setDisplayStatus] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const onClickHandler = () => {
    setDisplayStatus(!displayStatus);
  }
  
  let addExpenseDisplay = <button onClick={onClickHandler}>Add New Expense</button>

  if (displayStatus) {
    addExpenseDisplay = <ExpenseForm onHideForm={onClickHandler} onSaveExpenseData={saveExpenseDataHandler} />
  } 

  return (
    <div className="new-expense">
      {addExpenseDisplay}
    </div>
  );
};

export default NewExpense;
