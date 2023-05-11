// import { Button } from 'react-bootstrap';
import './App.css';
import Rightside from './components/right-side/right-side';
import Leftside from './components/left-side/left-side';

function App() {
  return (
    <div className="App container">
      <Leftside />
      <Rightside />
    </div>
  );
}

export default App;
