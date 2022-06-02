import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    props.onHideForm();
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={props.onHideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
