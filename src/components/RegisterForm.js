import Button from "../components/Button";
import { useState, useEffect } from "react";
import { useAddUserMutation } from "../store";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addUser, addUserResults] = useAddUserMutation();

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
    addUser({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input
          onChange={handleChangeEmail}
          value={email}
          className="login-input"
          placeholder="Email"
        />
        <div>Password</div>
        <input
          onChange={handleChangePassword}
          value={password}
          className="login-input"
          type="password"
        />
        <div>
          <Button type="success"> Register </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
