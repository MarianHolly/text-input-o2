import { JSX } from "react";
import { TextInputProps } from "../types";

export default function PrimaryTextInput({
  label,
  optional,
  description,
  placeholder,
}: TextInputProps): JSX.Element {
  return (
    <div className="text-input">
      <div className="header">
        <div className="label">
          <label className="label-text">{label}</label>
          <label className="label-optional">{optional}</label>
        </div>
        <label className="label-description">{description}</label>
      </div>
      <input type="text" className="input-form" placeholder={placeholder} />
    </div>
  );
}
