
import { useState } from "react";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const logado = () => setLoggedIn(!loggedIn);

  const [transactions, setTransactions] = useState([]);

  const transactionsLog = { transactions, setTransactions };

  const convertToBRL = (value) =>
    value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  return (
    <>
      {
        !loggedIn ? (<LoginPage {...{ logado }} />) 
         : 
        (<HomePage {...{ logado, convertToBRL, transactionsLog }} />)
      }
    </>
  );
}

export default App;
