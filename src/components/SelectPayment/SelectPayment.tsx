import cn from "classnames";
import React, { ForwardedRef, forwardRef } from "react";
import Select, {
  components,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
} from "react-select";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { SelectProps } from "./SelectPayment.props";
import * as styles from "./SelectPayment.style";

export const SelectPayment = forwardRef(
  (
    { className, name, error, onChange, ...props }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    const options = [
      { value: "cash", label: "Cash" },
      { value: "checks", label: "Checks" },
      { value: "credit cards", label: "Credit cards" },
    ];

    const DropdownIndicator = (props: DropdownIndicatorProps) => {
      return (
        <components.DropdownIndicator {...props}>
          <ArrowIcon />
        </components.DropdownIndicator>
      );
    };

    const indicatorSeparatorStyle = {
      display: "none",
    };

    const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
      return <span style={indicatorSeparatorStyle} {...innerProps} />;
    };

    return (
      <div className={cn(className)}>
        <Select
          placeholder={"Choose payment method"}
          components={{ DropdownIndicator, IndicatorSeparator }}
          styles={{
            placeholder: (base) => ({
              ...base,
              ...styles.placeholder,
            }),
            container: (base) => ({
              ...base,
              ...styles.select,
            }),
            control: (base) => ({
              ...base,
              ...styles.control,
            }),
            option: (base, { isDisabled, isFocused, isSelected }) => {
              return {
                ...base,
                ...styles.options,
                backgroundColor: isDisabled
                  ? undefined
                  : isSelected
                  ? "var(--primary)"
                  : isFocused
                  ? "var(--primary)"
                  : undefined,
                color: isDisabled
                  ? "#ccc"
                  : isSelected
                  ? "var(--white)"
                  : "var(--black)",

                cursor: isDisabled ? "not-allowed" : "default",
              };
            },
          }}
          options={options}
        />
        {/* {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )} */}
      </div>
    );
  }
);
