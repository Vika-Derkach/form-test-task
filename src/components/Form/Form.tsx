import cn from "classnames";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";
import { IReviewForm } from "./Form.interface";
import styles from "./Form.module.css";
import { FormProps } from "./Form.props";

export const Form = ({
  productId,
  isOpened,
  className,
  ...props
}: FormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      // const data = await submit({
      //   ...formData,
      //   productId,
      // });
      console.log(formData);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register("EIN", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          className={styles.EIN}
          placeholder="Заголовок отзыва"
          error={errors.EIN}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.EIN ? true : false}
        />
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label="Текст отзыва"
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button
            // type="submit"
            appearance="white"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => clearErrors()}
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
      {isSuccess && (
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
      )}
    </form>
  );
};
