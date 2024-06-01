import logo from "./logo.ico";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Work from "./pages/Work";

function App() {
  const path = window.location.pathname;

  function Router(path) {
    switch (path) {
      case "/":
        return <Home />;
      case "/About":
        return <About />;
      case "/Contact":
        return <Contact />;
      case "/Experience":
        return <Experience />;
      case "/Work":
        return <Work />;

      default:
        window.location.pathname = "/";
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <a className="Main-logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="Pages-index">
          <a className="Index-link" href="About">
            <span className="Index-number">01. </span>
            About
          </a>
          <a className="Index-link" href="Experience">
            <span className="Index-number">02. </span>
            Experience
          </a>
          <a className="Index-link" href="Work">
            <span className="Index-number">03. </span>
            Work
          </a>
          <a className="Index-link" href="Contact">
            <span className="Index-number">04. </span>
            Contact
          </a>
          <a className="Button">Resume</a>
        </div>
      </header>
      {Router(path)}
    </div>
  );
}

export default App;
