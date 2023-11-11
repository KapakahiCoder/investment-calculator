import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setannualInvestment] = useState(0);
  const [expectedReturn, setexpectedReturn] = useState(0);
  const [duration, setduration] = useState(0);

  function initialInvestmentChangeHandler(amount) {
    setInitialInvestment(amount);
  }

  function annualInvestmentChangeHandler(amount) {
    setannualInvestment(amount);
  }
  function expectedReturnChangeHandler(amount) {
    setexpectedReturn(amount);
  }
  function durationChangeHandler(amount) {
    setduration(amount);
  }

  return (
    <>
      <Header />
      <UserInput
        onChangeInitialInvestment={initialInvestmentChangeHandler}
        onChangeAnnualInvestment={annualInvestmentChangeHandler}
        onChangeExpectedReturn={expectedReturnChangeHandler}
        onChangeDuration={durationChangeHandler}
      />
      ;
    </>
  );
}

export default App;
