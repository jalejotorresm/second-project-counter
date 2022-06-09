import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const restartCounter = () => {
    setClickCount(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter clickCount={clickCount} />
        <Button text="Click" isClickButton={true} handleClick={handleClick} />
        <Button
          text="Restart"
          isClickButton={false}
          handleClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
