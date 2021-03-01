import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <button onClick={openModalClick}>Modal</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
