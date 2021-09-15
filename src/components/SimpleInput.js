import { useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [userEmailTouched, setUserEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;

  const userEmailIsValid = (userEmail.trim().length > 6 && userEmail.includes('@'));
  const emailInputIsInvalid = userEmailTouched && !userEmailIsValid;

  let formIsValid = false;

  if (enteredNameIsValid && userEmailIsValid) {
      formIsValid = true;
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setUserEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);

    setEnteredNameTouched(true);
    setUserEmailTouched(true);

    if (!enteredNameIsValid || !userEmailIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);

    setUserEmail('');
    setUserEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';


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
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          id='email' 
          value={userEmail} 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlurHandler} 
        />
        {emailInputIsInvalid && <p className="error-text">Invalid email address.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
