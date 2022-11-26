import "./index.css";

import ReactDOM from "react-dom/client";

import { App } from "./app";

const $root = document.getElementById("root") as HTMLElement;

$root.className = "bg-light dark:bg-dark";

ReactDOM.createRoot($root).render(<App />);
