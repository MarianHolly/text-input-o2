import { JSX } from "react";
import { TextInputProps } from "../types";

export default function TextInput({
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

      <div
        className={`input-form ${
          state !== "default" ? `input-form-${state}` : ""
        }`}
      >
        <input
          type="text"
          className="input-form__form"
          placeholder={placeholder}
        />
        <button
          className="input-form__alert"
          style={
            state === "default"
              ? { visibility: "collapse" }
              : { visibility: "visible" }
          }
        ></button>
      </div>
    </div>
  );
}
