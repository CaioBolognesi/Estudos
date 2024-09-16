import Products from "./components/Products";
import MyButton from "./components/MyButton";
import { useState } from "react";

function App() {
  const [buttonStates, setButtonState] = useState({
    button: 16,
  });

  function increaseSize(button: "button") {
    setButtonState((prevStates) => ({
      ...prevStates,
      [button]: prevStates[button] + 10,
    }));
  }

  function resetSize() {
    setButtonState({
      button: 16,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Products />
      <MyButton
        size={buttonStates.button}
        increaseSize={() => increaseSize("button")}
        className={`w-auto h-auto transition-all duration-300 ease-in-out bg-violet-600 rounded-md p-3 font-medium text-violet-100`}
        style={{
          padding: `${buttonStates.button}px`,
          fontSize: `${buttonStates.button}px`,
        }}
      />
      <button
        onClick={resetSize}
        className="w-auto h-auto transition-all duration-300 ease-in-out bg-red-600 rounded-md p-3 font-medium text-white"
      >
        Resetar tamanho
      </button>
    </div>
  );
}

export default App;
