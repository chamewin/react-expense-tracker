import React, { useState } from 'react';

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');
  const filterSelectHandler = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };
  return (
    <div>
      <Card className="expenses">
         <ExpenseFilter filterYear={filterYear} onFilterSelect={filterSelectHandler} />
        {props.items.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
