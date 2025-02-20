import { JSX } from "react";
import { TextInputProps } from "../types";
import styles from "./SecondaryTextInput.module.scss";

export default function SecondaryTextInput({
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
        className={`${styles.inputForm} ${
          state !== "danger" ? styles.inputForm__danger : ""
        } ${state !== "warning" ? styles.inputForm__warning : ""}`}
      >
        <input
          type="text"
          className={`${styles.inputForm__form}`}
          placeholder={placeholder}
        />
        <button className={styles.inputForm__button}></button>
      </div>
    </div>
  );
}
