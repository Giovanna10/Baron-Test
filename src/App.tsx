import { FC } from "react";
import "./App.css";
import { Stepper } from "./components/stepper/Stepper";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Simon Baron Test</p>
        <p className="App-subtitle">Reading the Mind in the Eyes</p>
        <Stepper />
      </header>
    </div>
  );
};

export default App;
