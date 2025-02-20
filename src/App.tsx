import PrimaryTextInput from "./components/PrimaryTextInput";

function App() {
  return (
    <div className="App">
      <PrimaryTextInput
        label={"Input"}
        optional={"Optional"}
        description={"Description for input."}
        placeholder={"Placeholder"}
      />
    </div>
  );
}

export default App;
