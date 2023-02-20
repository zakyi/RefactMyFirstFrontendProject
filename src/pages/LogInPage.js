import Link from "../components/Link";
import Panel from "../components/Panel";
import Button from "../components/Button";

function LogInPage() {
  return (
    <div>
      <div className="login-container">
        <Panel>
          <form>
            <div>Email</div>
            <input className="login-input" placeholder="Email" />
            <div>Password</div>
            <input className="login-input" type="password" />
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
