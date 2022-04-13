import cn from "classnames";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      // const data = await submit({
      //   ...formData,
      //   productId,
      // });
      console.log(formData);
      setIsOpened(false);

      // if (data.message) {
      //   setIsSuccess(true);
      //   reset();
      // } else {
      //   setError("something went wrong");
      // }
    } catch (e) {
      setError(e);
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
          <Label>Customer name</Label>
          <Input
            {...register("name", {
              required: { value: true, message: "Enter cusomer name" },
            })}
            placeholder="Enter cusomer name"
            error={errors.name}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.name ? true : false}
          />
          <Label>Customers EIN</Label>
          <Input
            {...register("EIN", {
              required: { value: true, message: "Enter cusomer EIN" },
            })}
            className={styles.EIN}
            placeholder="Enter cusomer EIN"
            error={errors.EIN}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.EIN ? true : false}
          />
          <Label>Notes</Label>
          <Textarea
            {...register("notes", {
              required: { value: true, message: "Enter notes" },
            })}
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
            name="hhh"
            tabIndex={isOpened ? 0 : -1}
            control={control}
          />
        </div>

        <Devider className={styles.hr} />
        <div className={styles.submit}>
          <Button
            // type="submit"
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
            // onClick={() => setIsOpened(false)}
          >
            Create
          </Button>
        </div>
      </div>
      {/* {isSuccess && (
        <div role="alert" className={cn(styles.success, styles.panel)}>
          <div className={styles.successEIN}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <button
            aria-label="Закрить оповещение"
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          >
            <CloseIcon />
          </button>
        </div>
      )}
      {error && (
        <div role="alert" className={cn(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу
          <button
            aria-label="Закрить оповещение"
            className={styles.close}
            onClick={() => setError(undefined)}
          >
            <CloseIcon />
          </button>
        </div>
      )} */}
    </form>
  );
};
