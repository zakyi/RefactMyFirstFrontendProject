import Panel from "../components/Panel";
import Button from "../components/Button";

function RegisterPage() {
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
              <Button type="success"> Register </Button>
            </div>
          </form>
        </Panel>
      </div>
    </div>
  );
}

export default RegisterPage;
