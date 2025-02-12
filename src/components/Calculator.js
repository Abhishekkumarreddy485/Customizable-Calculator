import React, { useState } from "react";
import { useCalculatorStore } from "../store";
import { create, all } from "mathjs";
import "../styles/Calculator.css";

const math = create(all);

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const { components } = useCalculatorStore();

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setExpression(math.evaluate(expression).toString());
      } catch {
        setExpression("Error");
      }
    } else if (value === "C") {
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{expression || "0"}</div>
      <div className="buttons">
        {components.map((component, index) => (
          <button key={index} className={`btn ${component.className}`} onClick={() => handleClick(component.value)}>
            {component.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
