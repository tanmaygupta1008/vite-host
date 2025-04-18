import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";


// if ("serviceWorker" in navigator && import.meta.env.PROD) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js").then(
//       (registration) => {
//         console.log("Service Worker registered with scope:", registration.scope);
//       },
//       (error) => {
//         console.error("Service Worker registration failed:", error);
//       }
//     );
//   });
// }



if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/vite-host/service-worker.js").then(
      (registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      },
      (error) => {
        console.error("Service Worker registration failed:", error);
      }
    );
  });
}

// // main.jsx or index.jsx or App.jsx
// if ('serviceWorker' in navigator && import.meta.env.PROD) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js') // your service worker path
//       .then(reg => console.log('SW registered:', reg))
//       .catch(err => console.log('SW registration failed:', err));
//   });
// }


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/vite-host">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
