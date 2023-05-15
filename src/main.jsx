import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LibraryProvider from "./context/libraryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </React.StrictMode>
);
