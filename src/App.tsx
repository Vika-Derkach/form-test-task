import cn from "classnames";
import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Form } from "./components";

function App() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div className={cn(styles.app)}>
      <div
        className={cn(styles.layout, {
          [styles.blockDisplay]: isOpened,
          [styles.hiddenDisplay]: !isOpened,
        })}
      ></div>
      <div className={styles.buttons}>
        <Button appearance="white">Edit</Button>
        <Button appearance="primary" onClick={() => setIsOpened(true)}>
          Open
        </Button>
      </div>

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
