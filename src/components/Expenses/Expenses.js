import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../Expenses/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter fixed={filteredYear} onChangeYear={filterYearHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
