import "../index.css";

function Button({ type, decoration, children }) {
  return (
    <div>
      <button type={type} decoration={decoration}>
        {children}
      </button>
    </div>
  );
}

export default Button;
