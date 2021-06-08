import "./Button.css";

export default function Button({ placeholder, callback }) {
  return (
    <div className="button" onClick={callback}>
      {placeholder}
    </div>
  );
}
