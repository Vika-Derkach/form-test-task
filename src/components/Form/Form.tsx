import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../Button/Button";
import { Devider } from "../Devider/Devider";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { SelectPayment } from "../SelectPayment/SelectPayment";
import { Textarea } from "../Textarea/Textarea";
import { ReactComponent as CloseIcon } from "./close.svg";
import { IReviewForm } from "./Form.interface";
import styles from "./Form.module.css";
import { FormProps } from "./Form.props";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Enter a name")
    .min(1, "Must be bigger than one letter")
    .max(20, "Must be shorted"),
  EIN: yup.string().matches(phoneRegExp, "EIN is not valid"),
  notes: yup.string(),
});

export const Form = ({
  isOpened,
  setIsOpened,
  className,
  defaultValues,
  ...props
}: FormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>({
    defaultValues,
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = async (formData: IReviewForm) => {
    try {
      console.log(formData);
      setIsOpened(false);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={cn(styles.form, className)} {...props}>
        <div className={styles.formTitle}>
          Create new customer
          <button
            aria-label="Close the form"
            className={styles.close}
            onClick={() => setIsOpened(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className={styles.formContent}>
          <Label>
            Customer name<span className={styles.asterisk}>*</span>
          </Label>
          <Input
            {...register("name")}
            placeholder="Enter cusomer name"
            error={errors.name}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.name ? true : false}
          />
          <Label>Customers EIN</Label>
          <Input
            {...register("EIN")}
            className={styles.EIN}
            placeholder="Enter cusomer EIN"
            error={errors.EIN}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.EIN ? true : false}
          />
          <Label>Notes</Label>
          <Textarea
            {...register("notes")}
            className={styles.notes}
            placeholder="Notes visible only to you and your team"
            error={errors.notes}
            tabIndex={isOpened ? 0 : -1}
            aria-label="Notes"
            aria-invalid={errors.notes ? true : false}
          />
          <Label size="m">Payment and billing:</Label>
          <Label>Primary payment method</Label>
          <SelectPayment
            {...register("paymentMethod")}
            aria-label="paymentMethod"
            tabIndex={isOpened ? 0 : -1}
            control={control}
          />
        </div>

        <Devider className={styles.hr} />
        <div className={styles.submit}>
          <Button
            appearance="white"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => setIsOpened(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            appearance="primary"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => clearErrors()}
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};
