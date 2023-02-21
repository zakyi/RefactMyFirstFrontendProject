import Button from "./Button";

function Form({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  handleRepeatPasswordChange,
  handleUserNameChange,
  passwordRepeat,
  userName,
  email,
  password,
  formType,
  emailValid,
  passwordValid,
  userNameValid,
  repeatPasswordValid,
  message,
}) {
  console.log(message);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>User Name</div>
        <input
          onChange={handleUserNameChange}
          value={userName}
          className="login-input password-input"
          placeholder="User Name"
        />
        {!userNameValid && (
          <div className="invalid-message">
            <p>Invalid user name</p>
          </div>
        )}
        <div>Email</div>
        <input
          onChange={handleEmailChange}
          value={email}
          className="login-input"
          placeholder="Email"
        />
        {!emailValid && (
          <div className="invalid-message">
            <p>Invalid email</p>
          </div>
        )}
        <div>Password</div>
        <input
          onChange={handlePasswordChange}
          value={password}
          className="login-input password-input"
          type="password"
          placeholder="Password"
        />
        {!passwordValid && (
          <div className="invalid-message">
            <p>Password must be 8 to 20 digit number, letter, _ or .</p>
          </div>
        )}
        {formType === "Register" && (
          <div className="mb-1">
            <div>Repeat Password</div>
            <input
              onChange={handleRepeatPasswordChange}
              value={passwordRepeat}
              className="login-input password-input"
              type="password"
              placeholder="Repeat Password"
            />
            {!repeatPasswordValid && (
              <div className="invalid-message">
                <p>Password and repeat password not match</p>
              </div>
            )}
          </div>
        )}
        <div className="invalid-message">
          <p>{message}</p>{" "}
        </div>
        <div>
          <Button type="success"> {formType} </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
