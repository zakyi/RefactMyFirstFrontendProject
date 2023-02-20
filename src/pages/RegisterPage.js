import Panel from "../components/Panel";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div>
      <div className="login-container">
        <Panel>
          <RegisterForm />
        </Panel>
      </div>
    </div>
  );
}

export default RegisterPage;
