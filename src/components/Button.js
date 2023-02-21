import "../index.css";

function Button({ type, decoration, children, handleClick }) {
  return (
    <div onClick={handleClick} className="button">
      <button type={type} decoration={decoration}>
        {children}
      </button>
    </div>
  );
}

export default Button;
