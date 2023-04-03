import { useState } from 'react';
import './App.css';
import Info from './components/Info';
import Counter from './components/Counter';
import Average from './components/Average';


function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Counter></Counter>

      <br/><hr/><br/>

      <button
        onClick={()=>{
          setVisible(!visible)
        }}
      >{visible ? 'Hide' : 'Open'}</button>
      {visible && <Info></Info>}

      <br/><hr/><br/>
      
      <Average></Average>
    </div>
  );
}

export default App;
