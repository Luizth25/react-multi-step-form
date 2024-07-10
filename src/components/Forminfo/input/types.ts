export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  placeholder: string;
  value: string;
}
