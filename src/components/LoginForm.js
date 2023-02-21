import { useState, useEffect } from "react";
import { useFetchUserMutation } from "../store";
import Form from "./Form";
import { useValidationHook } from "../hooks/useValidationHook";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchUser, fetchUserResults] = useFetchUserMutation();
  const { verifyEmail, verifyPassword } = useValidationHook();
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(fetchUserResults);
    if (fetchUserResults.isSuccess) {
      console.log(fetchUserResults.data.message);
      setMessage(fetchUserResults.data.message);
    } else if (fetchUserResults.isError) {
      setMessage(fetchUserResults.error.data.error);
    } else if (fetchUserResults.isLoading) {
      setMessage("loading...");
    }
    console.log(message);
  }, [fetchUserResults.status]);

  const handleChangeEmail = (e) => {
    console.log(email);
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
      fetchUser({ email, password });
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
        formType="Login"
        emailValid={emailValid}
        passwordValid={passwordValid}
        message={message}
      />
    </div>
  );
}

export default LoginForm;
