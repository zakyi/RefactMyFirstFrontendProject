import Link from "../components/Link";
import Panel from "../components/Panel";
import LoginForm from "../components/LoginForm";

function LogInPage() {
  return (
    <div>
      <div className="login-container">
        <Panel>
          <LoginForm />
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
