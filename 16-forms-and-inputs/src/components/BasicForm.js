import useFormInput from "../hooks/use-form-input";
const BasicForm = (props) => {
    const {
        value: firstNameValue,
        inputValueChangeHandler: firstNameInputChangeHandler,
        inputIsTouchedChangeHandler: firstNameIsTouchedChangeHandler,
        error: firstNameError,
        reset: firstNameReset,
    } = useFormInput(value => value.trim() !== '');

    const {
        value: lastNameValue,
        inputValueChangeHandler: lastNameInputChangeHandler,
        inputIsTouchedChangeHandler: lastNameIsTouchedChangeHandler,
        error: lastNameError,
        reset: lastNameReset,
    } = useFormInput(value => value.trim() !== '');

    const {
        value: emailValue,
        inputValueChangeHandler: emailInputChangeHandler,
        inputIsTouchedChangeHandler: emailIsTouchedChangeHandler,
        error: emailError,
        reset: emailReset,
    } = useFormInput(value => value.includes('@'));

    const submitFormHandler = (event) => {
        event.preventDefault();

        firstNameReset();
        lastNameReset();
        emailReset();
    };

    const firstNameInputClasses = !firstNameError ? 'form-control': 'form-control invalid'
    const lastNameInputClasses = !lastNameError ? 'form-control': 'form-control invalid'
    const emailInputClasses = !emailError ? 'form-control': 'form-control invalid'

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='fname'>First Name</label>
          <input
              type='text'
              id='fname'
              onChange={firstNameInputChangeHandler}
              onBlur={firstNameIsTouchedChangeHandler}
              value={firstNameValue}
          />
            {firstNameError && <p className="error-text">First name field is invalid</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input
              type='text'
              id='lname'
              onChange={lastNameInputChangeHandler}
              onBlur={lastNameIsTouchedChangeHandler}
              value={lastNameValue}
          />
            {lastNameError && <p className="error-text">Last name field is invalid</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
            type='text'
            id='name'
            onChange={emailInputChangeHandler}
            onBlur={emailIsTouchedChangeHandler}
            value={emailValue}
        />
          {emailError && <p className="error-text">Email field is invalid</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
