import Button from "../components/Button";
import Form from "./Form";
import { useState, useEffect } from "react";
import { useAddUserMutation } from "../store";
import { useValidationHook } from "../hooks/useValidationHook";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addUser, addUserResults] = useAddUserMutation();
  const { verifyEmail, verifyPassword } = useValidationHook();
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    console.log(addUserResults);
  }, [addUserResults.isLoading]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verifyEmail(email)) {
      setEmailValid(false);
      return;
    } else if (!verifyPassword(password)) {
      setPasswordValid(false);
      return;
    } else {
      setEmailValid(true);
      setPasswordValid(true);
      addUser(email, password);
    }
  };
  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        handleEmailChange={handleChangeEmail}
        handlePasswordChange={handleChangePassword}
        email={email}
        password={password}
        formType="Register"
        emailValid={emailValid}
        passwordValid={passwordValid}
      />
    </div>
  );
}

export default RegisterForm;
