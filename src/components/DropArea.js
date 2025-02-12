import React from "react";
import { useDrop } from "react-dnd";
import { useCalculatorStore } from "../store";
import DraggableComponent from "./DraggableComponent";

const DropArea = () => {
  const { components, setComponents, removeComponent, undo, redo } = useCalculatorStore();

  const [, drop] = useDrop({
    accept: "COMPONENT",
    drop: (item) => {
      setComponents([...components, item.component]);
    },
  });

  return (
    <div ref={drop} className="drop-area p-4 border rounded">
      {components.length === 0 ? "Drag components here" : null}
      {components.map((component, index) => (
        <div key={index} className="inline-block m-2">
          <DraggableComponent component={component} index={index} />
          <button onClick={() => removeComponent(index)} className="ml-2">✖</button>
        </div>
      ))}
      <div className="mt-4">
        <button onClick={undo} className="p-2 border rounded mr-2">Undo</button>
        <button onClick={redo} className="p-2 border rounded">Redo</button>
      </div>
    </div>
  );
};

export default DropArea;
