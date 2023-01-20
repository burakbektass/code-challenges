import { useState, useContext, createContext } from "react";

const ColorContext = createContext({
  color: "lightGrey",
  setColor: () => {},
});

function ColorPicker() {
  const { setColor } = useContext(ColorContext);
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setColor(color)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const { color } = useContext(ColorContext);
  const [pickedColor, setPickedColor] = useState("lightGrey");
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pickedColor,
        margin: "1px",
      }}
      onClick={() => setPickedColor(color)}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [color, setColor] = useState("lightGrey");
  return (
    <div>
      <ColorContext.Provider value={{ color, setColor }}>
        <ColorPicker />
        <Pixels />
      </ColorContext.Provider>
    </div>
  );
}
