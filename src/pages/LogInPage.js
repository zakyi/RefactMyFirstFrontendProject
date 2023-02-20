import Link from "../components/Link";
import Panel from "../components/Panel";
import Button from "../components/Button";
import { useState } from "react";
import { useFetchUserMutation } from "../store";

function LogInPage() {
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
      <div className="login-container">
        <Panel>
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
        </Panel>
        <div>
          <Link
            label="Do not have an account? Go to register page."
            path="/register"
          />
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
