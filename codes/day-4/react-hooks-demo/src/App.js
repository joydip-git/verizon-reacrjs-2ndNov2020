import './App.css';
// import ClickCounter from './ClickCounter';
// import HoverCounter from './HoverCounter';
import Parent from './Parent';

function App() {

  console.log('[App] rendered...')
  return (
    <div className="App">
      {/* <ClickCounter />
      <br />
      <br />
      <HoverCounter /> */}
      <Parent />
    </div>
  );
}

export default App;
