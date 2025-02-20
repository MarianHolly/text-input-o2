import { useState } from "react";

// Components
import StateSwitcher from "./components/StateSwitcher";
import PrimaryTextInput from "./components/PrimaryTextInput";
import SecondaryTextInput from "./components/SecondaryTextInput";

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
      <SecondaryTextInput
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
