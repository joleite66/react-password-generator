import "./App.css";
import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const [options, setOptions] = useState({
    Symbol: false,
    Number: false,
    LowerCase: false,
    UpperCase: false,
  });

  const changeValue = (key) => {
    setOptions((options) => ({ ...options, [key]: !options[key] }));
  };
  console.log(options);
  return (
    <div className="wrapper">
      <div>
        <Checkbox
          value={options.Symbol}
          changeValue={changeValue}
          label="Symbol"
        />
        <Checkbox
          value={options.Number}
          changeValue={changeValue}
          label="Number"
        />
        <Checkbox
          value={options.LowerCase}
          changeValue={changeValue}
          label="LowerCase"
        />
        <Checkbox
          value={options.UpperCase}
          changeValue={changeValue}
          label="UpperCase"
        />
      </div>
    </div>
  );
}

export default App;
