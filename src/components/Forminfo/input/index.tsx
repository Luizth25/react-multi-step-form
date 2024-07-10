import { InputProps } from "./types";

const Input = ({ placeholder, value, type, onChange }: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
