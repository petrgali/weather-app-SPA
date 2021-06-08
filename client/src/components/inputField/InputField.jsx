import "./InputField.css";

export default function Input({ callback }) {
  return <input className="input" onChange={callback} />;
}
