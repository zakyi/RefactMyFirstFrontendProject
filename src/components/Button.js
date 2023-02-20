import "../index.css";

function Button({ type, decoration, children }) {
  return (
    <div className="button">
      <button type={type} decoration={decoration}>
        {children}
      </button>
    </div>
  );
}

export default Button;
