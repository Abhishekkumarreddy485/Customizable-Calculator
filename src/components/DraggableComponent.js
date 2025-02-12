import React from "react";
import { useDrag } from "react-dnd";

const DraggableComponent = ({ component, index }) => {
  const [, ref] = useDrag({
    type: "COMPONENT",
    item: { index, component },
  });

  return (
    <button ref={ref} className="button">
      {component.label}
    </button>
  );
};

export default DraggableComponent;
