import { useReducer } from "react";
const initialState = {
  number1: 0,
  number2: 0,
  result: "There is no result !!",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NUMBER_1":
      return { ...state, number1: action.number };

    case "SET_NUMBER_2":
      return { ...state, number2: action.number };

    case "ADD":
      return { ...state, result: state.number1 + state.number2 };

    case "SUBTRACT":
      return { ...state, result: state.number1 - state.number2 };
    case "CLEAR":
      return initialState;
    default:
      break;
  }
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER_1", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            key={number}
            onClick={() => dispatch({ type: "SET_NUMBER_2", number })}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUBTRACT" })}>-</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>c</button>
      </div>
      <div>
        <h2>Result:</h2>
      </div>
    </div>
  );
}
