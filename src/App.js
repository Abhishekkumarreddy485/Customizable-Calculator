import React from "react";
import Calculator from "./components/Calculator";
import { useCalculatorStore } from "./store";
import "./styles/App.css";

function App() {
  const { isDarkMode, toggleDarkMode } = useCalculatorStore();

  return (
    <div className={`app ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
      <button onClick={toggleDarkMode} className="p-2 border rounded mb-4">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Customizable Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;