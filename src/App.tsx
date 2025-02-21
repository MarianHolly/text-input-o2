import { useState } from "react";

// Components
import StateSwitcher from "./components/StateSwitcher";
import TextInput from "./components/TextInput";

function App() {
  const [state, setState] = useState("default");

  const handleClick = (currentState: string) => {
    setState(currentState);
  };

  return (
    <div className="App">
      <StateSwitcher handleClick={handleClick} />
      <TextInput
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
