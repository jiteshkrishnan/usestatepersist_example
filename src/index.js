import { createRoot } from "react-dom/client";
import App from "./App";
import { AppContext } from "./AppContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContext.Provider
    value={{ appName: "internal-booking", shouldPersist: true }}
  >
    <App />
  </AppContext.Provider>
);
