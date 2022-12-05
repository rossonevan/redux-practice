import {useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {

  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: 'INC'})
  }

  const decrease = () => {
    dispatch({type: 'DEC'})
  }

  const addBy = () => {
    dispatch({type:'ADD', payload: 10})
  }

  const subBy = () => {
    dispatch({type:'SUB', payload: 10})
  }

  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={addBy}>Add By 10</button>
      <button onClick={subBy}>Subtract By 10</button>
    </div>
  );
}

export default App;
