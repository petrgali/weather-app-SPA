import "./InputField.css";
import { informer } from "../../common/constant";

export default function Input({ callback }) {
  return (
    <input
      className="input"
      placeholder={informer.placeholder}
      onChange={callback}
    />
  );
}
