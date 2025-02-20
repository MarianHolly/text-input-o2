import { useState } from "react";
import PrimaryTextInput from "./components/PrimaryTextInput";
import StateSwitcher from "./components/StateSwitcher";

function App() {
  const [state, setState] = useState("default");

  const handleClick = (currentState: string) => {
    setState(currentState);
  };

  return (
    <div className="App">
      <StateSwitcher handleClick={handleClick} />
      <PrimaryTextInput
        label={"Input"}
        optional={"Optional"}
        description={"Description for input."}
        placeholder={"Placeholder"}
        state={state}
      />
    </div>
  );
}

export default App;
