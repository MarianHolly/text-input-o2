import { JSX } from "react";
import { TextInputProps } from "../types";
import styles from "./PrimaryTextInput.module.scss"

export default function PrimaryTextInput({
  label,
  optional,
  description,
  placeholder,
  state = "default",
}: TextInputProps): JSX.Element {
  return (
    <div className="text-input">
      <div className="header">
        <div className="label">
          <label className="label-text">{label}</label>
          {optional && <label className="label-optional">{optional}</label>}
        </div>
        {description && <p className="label-description">{description}</p>}
      </div>
      <input
        type="text"
        className={`${styles.inputForm} ${
          state !== "default" ? `input-form-${state}` : ""
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}
