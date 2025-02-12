import React from "react";
import { useCalculatorStore } from "../store";

const components = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "+", value: "+" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "-", value: "-" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "*", value: "*" },
  { label: "C", value: "C" },
  { label: "0", value: "0" },
  { label: "=", value: "=" },
  { label: "/", value: "/" },
];

const Sidebar = () => {
  const { addComponent } = useCalculatorStore();

  return (
    <div className="sidebar">
      <h3>Components</h3>
      {components.map((component, index) => (
        <button key={index} className="button" onClick={() => addComponent(component)}>
          {component.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
