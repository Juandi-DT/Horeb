import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { DataProvider } from "./context/DataProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DataProvider>
    <App />
  </DataProvider>
);
