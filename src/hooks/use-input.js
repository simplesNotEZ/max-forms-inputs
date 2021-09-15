import { useState } from 'react';

const useInput = (validationLogic) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [wasTouched, setWasTouched] = useState(false);

  const valueIsValid = validationLogic(enteredValue);
  const hasError = wasTouched && !valueIsValid;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setWasTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setWasTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset
  }
};

export default useInput;