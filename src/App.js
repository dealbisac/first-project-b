import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* make the two column  */}
      <div className="row">
        <div className="col-6">
          {/* make the image responsive */}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-6">
          <h1>React Bootstrap</h1>
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
          </a>
        </div>
      </div>
    </div>
      );
}

      export default App;
