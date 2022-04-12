import React from "react";
import "./App.css";
import { Button, Input, Paragraph, Textarea } from "./components";

function App() {
  return (
    <div className="App">
      <Button appearance="white">Edit</Button>
      <Button appearance="primary">Open</Button>
      <Input placeholder="gdgdfg" />
      <Textarea placeholder="gdgdfg" />
      <Paragraph>dffdf</Paragraph>
    </div>
  );
}

export default App;
