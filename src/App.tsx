import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";
import AuthModel from "./sections/AuthModel";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <AuthModel />
    </BrowserRouter>
  );
}

export default App;
