export interface TextInputProps {
  label: string;
  optional?: string;
  description?: string;
  placeholder: string;
  state?: "default" | "warning" | "danger";
}
