import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // wanna use event.target.value INSTEAD of enteredName b/c there is a lag in state-update w/ enteredName
    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName('');
  }

  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          value={enteredName} 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler} 
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
