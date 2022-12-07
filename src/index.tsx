import { AppProviders } from "AppProviders";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { reportWebVitals } from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Router>
      <AppProviders />
    </Router>
  </StrictMode>
);

reportWebVitals();
