import React, { useState } from "react";

import Header from "./components/Header/Header";
import InvestmentForm from "./components/NewInvestment/InvestmentForm";
import TableData from "./components/InvestmentTable/TableData";

function App() {

  const [userData, setUserData] = useState(null);

  const calculateHandler = (userInput) => {
    setUserData(userInput);
  };

  const yearlyData = [];

  if (userData) {
    let currentSavings = +userData['currentSavings'];
    const yearlyContribution = +userData['yearlySavings'];
    const expectedReturn = +userData['expectedInterest'] / 100;
    const duration = +userData['investmentDuration'];

    let totalInterest = 0;
    let totalCapital = currentSavings;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;

      totalInterest += yearlyInterest;
      totalCapital += yearlyContribution;

      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        capital: totalCapital,
        id: Math.random().toString()
      });
    }
  } 

  const cancelHandler = (cancelValue) => {
    setUserData(cancelValue);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onSaveFormData={calculateHandler} onCancel={cancelHandler}/>
      
      {!userData && <h2>Found no expenses.</h2>}
      {userData && <TableData items={yearlyData}/>}
      
    </div>
  );
}

export default App;
