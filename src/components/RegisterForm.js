import Button from "../components/Button";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useAddUserMutation } from "../store";
import { useValidationHook } from "../hooks/useValidationHook";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [addUser, addUserResults] = useAddUserMutation();
  const { verifyEmail, verifyPassword, verifyRepeatPassword, verifyUserName } =
    useValidationHook();
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [repeatPasswordValid, setRepeatPasswordValid] = useState(true);
  const [userNameValid, setUserNameValid] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (addUserResults.isSuccess) {
      setMessage(addUserResults.data.message);
    } else if (addUserResults.isError) {
      setMessage(addUserResults.error.data.error);
    } else if (addUserResults.isLoading) {
      setMessage("loading...");
    }
    console.log(message);
  }, [addUserResults.status]);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setPasswordRepeat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailValid(verifyEmail(email));
    setPasswordValid(verifyPassword(password));
    setRepeatPasswordValid(verifyRepeatPassword(password, passwordRepeat));
    setUserNameValid(verifyUserName(userName));

    if (userNameValid && emailValid && passwordValid && repeatPasswordValid) {
      addUser({ email, password, userName });
    }
  };
  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        handleEmailChange={handleChangeEmail}
        handlePasswordChange={handleChangePassword}
        handleUserNameChange={handleUserNameChange}
        userName={userName}
        email={email}
        password={password}
        formType="Register"
        emailValid={emailValid}
        userNameValid={userNameValid}
        repeatPasswordValid={repeatPasswordValid}
        passwordValid={passwordValid}
        passwordRepeat={passwordRepeat}
        handleRepeatPasswordChange={handleRepeatPasswordChange}
        message={message}
      />
    </div>
  );
}

export default RegisterForm;
