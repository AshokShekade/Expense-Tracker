import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React,{useState} from "react";

const dummy_exp = [
  { id:"1",
    title: "toilet papper",
    amount: 9865,
    date: new Date(2021, 2, 8),
  },
  { id:"2",
    title: "grocery",
    amount: 95,
    date: new Date(2021, 2, 13),
  },
  { id:"3",
    title: "bike insurance",
    amount: 2000,
    date: new Date(2025, 2, 6),
  },
  { id:"4",
    title: "papper",
    amount: 9,
    date: new Date(2001, 2, 23),
  },
];

const App =() => {
  const[expenses,setExpenses] = useState(dummy_exp);

  const addExpenseHandler = (expense) =>{
    setExpenses( (prevExpenses) =>{
      return  [expense, ...prevExpenses]
    });
      
  };
  
  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
