import React, { useState } from "react";

import "./Expenses.css";
import "./ExpenseItem.css"; 
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const filterSelectHandler = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterYear={filterYear}
          onFilterSelect={filterSelectHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
