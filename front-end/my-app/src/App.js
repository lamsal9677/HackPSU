import logo from './logo.svg';
import './App.css';
import CompactCalendar from './Components/compactCalendar';
import 'rsuite/Calendar/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import MyCalendar from './Components/Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <MyCalendar />
      </header>
    </div>
  );
}

export default App;
