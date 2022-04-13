import cn from "classnames";
import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Form } from "./components";
import { IReviewForm } from "./components/Form/Form.interface";

function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<IReviewForm | any>({});
  const handleOpen = () => {
    setIsOpened(true);
    setDefaultValues(() => ({
      name: "string",
      EIN: "string",
      notes: "string",
      paymentMethod: "string",
    }));
  };

  return (
    <div className={cn(styles.app)}>
      <div
        className={cn(styles.layout, {
          [styles.blockDisplay]: isOpened,
          [styles.hiddenDisplay]: !isOpened,
        })}
      ></div>
      <div className={styles.buttons}>
        <Button appearance="white" onClick={handleOpen}>
          Edit
        </Button>
        <Button appearance="primary" onClick={() => setIsOpened(true)}>
          Open
        </Button>
      </div>

      <Form
        defaultValues={defaultValues}
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
