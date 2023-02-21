import Button from "./Button";

function Form({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  formType,
  emailValid,
  passwordValid,
  message,
}) {
  console.log(message);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input
          onChange={handleEmailChange}
          value={email}
          className="login-input"
          placeholder="Email"
        />
        {emailValid || (
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
        />
        {passwordValid || (
          <div className="invalid-message">
            <p>Password must be 8 to 20 digit number, letter, _ or .</p>
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
