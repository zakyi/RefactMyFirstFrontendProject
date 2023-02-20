import Link from "../components/Link";

function LogInPage() {
  return (
    <div>
      Log In
      <div>
        <Link
          label="Do not have an account? Go to register page."
          path="register"
        />
      </div>
    </div>
  );
}

export default LogInPage;
