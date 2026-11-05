import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import "./neon-theme.css";

createRoot(document.getElementById("root")!).render(<App />);
