import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const path = window.location.pathname;
  if (path == "/") {
    return <Home />;
  }
}

export default App;
