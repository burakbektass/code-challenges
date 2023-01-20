import { useState } from "react";
import "./App.css";
import ColorRenderer from "./color-renderer/ColorRenderer";
import DarkMode from "./dark-mode-toggle/DarkMode";
import FormValidator from "./form-validator/FormValidator";
import DogPics from "./dog-pics/DogPics";
import ScoreKeeper from "./score-keeper/ScoreKeeper";
import ToggleWindowEvent from "./window-event/ToggleWindowEvent";
import ColorPicker from "./color-picker/ColorPicker";
import PixelArt from "./pixel-art/PixelArt";
import SimpleCalculator from "./simple-calc/SimpleCalculator";
import FocusInput from "./focus-input/FocusInput";
import ShoppingCart from "./shopping-cart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <h1>React Code Challenges From LinkedIn</h1>
      <h4>Please uncommand the component in App.jsx you want to see !!</h4>
      {/* <ColorRenderer/> */}
      {/* <DarkMode/> */}
      {/* <FormValidator/> */}
      {/* <DogPics/> */}
      {/* <ScoreKeeper/> */}
      {/* <ToggleWindowEvent/> */}
      {/* <ColorPicker/> */}
      {/* <PixelArt/> */}
      {/* <SimpleCalculator/> */}
      {/* <FocusInput/> */}
      {/* <ShoppingCart/> */}
    </div>
  );
}

export default App;
