import {useState} from "react";

const useFormInput = (inputValidation) => {
    const [inputValue, setInputValue] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputIsValid = inputValidation(inputValue)
    const error = !inputIsValid && inputIsTouched;

    const inputValueChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const inputIsTouchedChangeHandler = () => {
        setInputIsTouched(true);
    }

    const reset = () => {
        setInputValue('');
        setInputIsTouched(false);
    }

    return {
        value: inputValue,
        inputIsValid: inputIsValid,
        error,
        inputValueChangeHandler,
        inputIsTouchedChangeHandler,
        reset,
    }
}

export default useFormInput;