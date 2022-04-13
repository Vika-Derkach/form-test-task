import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import styles from "./Select.module.css";
import { SelectProps } from "./Select.props";

export const Select = forwardRef(
  (
    { className, name, error, onChange, ...props }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <select
          name={name}
          onChange={onChange}
          className={cn(styles.select, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        >
          <option className={styles.optionText} disabled selected>
            Choose payment method
          </option>
          <option className={styles.option} value="20">
            20
          </option>
          <option className={styles.option} value="30">
            30
          </option>
        </select>
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
