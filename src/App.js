import logo from "./mypicture.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          il faut <code>src/App.js </code>and save to reload.
        </p>
         <p>
          Bonjour and bienvenue dans mon first gmc projet react
        </p>
        <a
          className="App-link"
          href="https://github.com/Ayinde225"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github link
        </a>
      </header>
    </div>
  );
}

export default App;
