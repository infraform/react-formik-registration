
import { useState } from 'react';
import './App.css';
import FormSide from './components/Form';
import Patika from './components/Patika';
import  useWindowSize  from './hooks/useWindowSize';

function App() {
  const [, height] = useWindowSize();
  const [night, setNight] = useState(false)

  return (
    <div className="App">
      <Patika   height={height} isNight = {night} />
      <FormSide isNight={night} change={setNight}/>
    </div>
  );
}

export default App;
