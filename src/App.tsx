import { useState } from "react";

// Components
import StateSwitcher from "./components/StateSwitcher";
import TextInput from "./components/TextInput";

function App() {
  const [state, setState] = useState("default");
  const [description, setDescription] = useState("");

  const handleClick = (currentState: string) => {
    setState(currentState);
  };

  const showDescription = () => {
    if (description === "") {
      setDescription("This is a description.");
    } else {
      setDescription("");
    }
  };

  return (
    <div className="App">
      <StateSwitcher
        handleClick={handleClick}
        showDescription={showDescription}
      />
      <TextInput
        label={"Input"}
        optional={"Optional"}
        description={description}
        placeholder={"Placeholder"}
        state={state}
      />
    </div>
  );
}

export default App;
