import React, { useState } from "react";

const InvestmentForm = (props) => {
    
    const [state, setState] = useState({
        currentSavings: "",
        yearlySavings: "",
        expectedInterest: "",
        investmentDuration: ""
    });

    const changeHandler = (event) => {
        const value = event.target.value;
        setState((prevState) => {
            return {
                ...prevState,
                [event.target.name]: +value
            }});
    }

    const submitHandler = (event) => {
      event.preventDefault();

      props.onSaveFormData(state);
    };

    const resetClickHandler = () => {
      props.onCancel(null);
    };
    
    return (
        <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" name="currentSavings" value={state['currentSavings']} onChange={changeHandler} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" name="yearlySavings" value={state['yearlySavings']} onChange={changeHandler} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%, per year)</label>
            <input type="number" id="expected-return" name="expectedInterest" value={state['expectedInterest']} onChange={changeHandler} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" name="investmentDuration" value={state['investmentDuration']} onChange={changeHandler} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetClickHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
};

export default InvestmentForm;