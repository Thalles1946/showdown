import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
      </header>
      <body className="App-body">
        <h4 className="Body-minor-title">Hi, my name is</h4>{" "}
        <h1 className="Body-major-title">Thalles Augusto.</h1>
        <h2 className="Body-subtitle">I build software for the world.</h2>
        <p className="Body-description">
          I'm a software engineer specialing in building (and occasionally
          designing) exceptional digital experiences, Currently, I'm focused on
          building accessible, human-centered products at Usiminas.
        </p>
        <a
          href="https://www.linkedin.com/in/thalles-augusto-drumond-neves-917aa6186/"
          className="button-linkedin"
        >
          Check out my linkedin
        </a>
      </body>
    </div>
  );
}

export default App;
