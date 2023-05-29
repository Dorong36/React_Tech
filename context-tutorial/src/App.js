import './App.css';
import ColorContext, { ColorProvider } from './contexts/color';
import ColorBox from './Components/ColorBox';
import ColorBox01 from './Components/ColorBox01';
import SetColors from './Components/SetColors';
import SetColors01 from './Components/SetColors01';

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SetColors01/>
        <ColorBox/>
      </div>
    </ColorProvider>
  );
}

export default App;
