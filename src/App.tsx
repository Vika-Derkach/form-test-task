import React from "react";
import styles from "./App.module.css";
import { Button, Form } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.layout}></div>
      <Button appearance="white">Edit</Button>
      <Button appearance="primary">Open</Button>

      <Form isOpened={true} />
    </div>
  );
}

export default App;
