import React, { useState } from "react";

import "./Expenses.css";
import "./ExpenseItem.css"; 
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(2022);

  const filterSelectHandler = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p className="expense-item text-center">No expense was found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterYear={filterYear}
          onFilterSelect={filterSelectHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
