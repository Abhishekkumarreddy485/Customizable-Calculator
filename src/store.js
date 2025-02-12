import { create } from "zustand";

export const useCalculatorStore = create((set, get) => ({
  components: JSON.parse(localStorage.getItem("calculatorComponents")) || [
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "÷", value: "/" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "×", value: "*" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "−", value: "-" },
    { label: "0", value: "0" },
    { label: ".", value: "." },
    { label: "C", value: "C", className: "clear-btn" },
    { label: "=", value: "=", className: "equals-btn" },
    { label: "+", value: "+" },
    { label: "%", value: "%" },
    { label: "√", value: "sqrt" },
    { label: "M+", value: "M+" },
  ],
  history: [],
  redoStack: [],
  isDarkMode: JSON.parse(localStorage.getItem("darkMode")) || false,

  setComponents: (components) => {
    set((state) => ({
      history: [...state.history, state.components],
      components,
    }));
    localStorage.setItem("calculatorComponents", JSON.stringify(components));
  },

  removeComponent: (index) => {
    set((state) => {
      const newComponents = state.components.filter((_, i) => i !== index);
      localStorage.setItem("calculatorComponents", JSON.stringify(newComponents));
      return {
        history: [...state.history, state.components],
        components: newComponents,
      };
    });
  },

  undo: () => {
    set((state) => {
      if (state.history.length === 0) return state;
      const prev = state.history.pop();
      localStorage.setItem("calculatorComponents", JSON.stringify(prev));
      return {
        redoStack: [...state.redoStack, state.components],
        components: prev,
      };
    });
  },

  redo: () => {
    set((state) => {
      if (state.redoStack.length === 0) return state;
      const next = state.redoStack.pop();
      localStorage.setItem("calculatorComponents", JSON.stringify(next));
      return {
        history: [...state.history, state.components],
        components: next,
      };
    });
  },

  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.isDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return { isDarkMode: newMode };
    });
  },
}));
