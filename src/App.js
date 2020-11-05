import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA'
export const CounterContext = React.createContext()
const initialState = {
  counter: 0
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload }
    case 'decrement':
      return { ...state, counter: state.counter - action.payload }
    case 'reset':
      return initialState
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value={{ counter: state.counter, dispatch }}>
    <div className="App">
      App js {state.counter}
      <ComponentA />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
