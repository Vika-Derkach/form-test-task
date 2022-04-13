import cn from "classnames";
import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Form } from "./components";
import { IReviewForm } from "./components/Form/Form.interface";
import { SelectEnum } from "./components/SelectPayment/SelectPayment.props";

function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isOpenedDefault, setIsOpenedDefault] = useState<boolean>(false);

  const defaultValues: IReviewForm = {
    name: "string",
    EIN: "string",
    notes: "string",
    paymentMethod: SelectEnum.Cash,
  };

  return (
    <div className={cn(styles.app)}>
      <div
        className={cn(styles.layout, {
          [styles.blockDisplay]: isOpened,
          [styles.hiddenDisplay]: !isOpened,
        })}
      ></div>
      <div
        className={cn(styles.layout, {
          [styles.blockDisplay]: isOpenedDefault,
          [styles.hiddenDisplay]: !isOpenedDefault,
        })}
      ></div>
      <div className={styles.buttons}>
        <Button appearance="white" onClick={() => setIsOpenedDefault(true)}>
          Edit
        </Button>
        <Button appearance="primary" onClick={() => setIsOpened(true)}>
          Open
        </Button>
      </div>

      <Form
        defaultValues={defaultValues}
        isOpened={isOpenedDefault}
        setIsOpened={setIsOpenedDefault}
        className={cn({
          [styles.blockDisplay]: isOpenedDefault,
          [styles.hiddenDisplay]: !isOpenedDefault,
        })}
      />

      <Form
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        className={cn({
          [styles.blockDisplay]: isOpened,
          [styles.hiddenDisplay]: !isOpened,
        })}
      />
    </div>
  );
}

export default App;
