import Button from "../components/Button";
import { useState } from "react";
import { useFetchUserMutation } from "../store";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchUser, { data, error, isFetching }] = useFetchUserMutation();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    fetchUser(email);
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
          <Button type="success"> Login </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
