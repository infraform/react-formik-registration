
import './App.css';
import Patika from './components/Patika';
import  useWindowSize  from './hooks/useWindowSize';

function App() {
  const [, height] = useWindowSize();

  return (
    <div className="App">
      <Patika   height={height} />
      <div className='form'></div>
    </div>
  );
}

export default App;
