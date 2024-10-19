/* eslint-disable react/prop-types */
function Button({ onClick, children, className, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
