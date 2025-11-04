import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root")!;
const root = createRoot(rootEl);

root.render(<App />);

// After first render, fade out and remove the splash loader
queueMicrotask(() => {
	const loader = document.getElementById("app-loader");
	if (!loader) return;
	// Wait a tick to ensure transition applies
	requestAnimationFrame(() => {
		loader.classList.add("app-loader--hide");
		const remove = () => loader.remove();
		loader.addEventListener("transitionend", remove, { once: true });
		// Fallback removal in case transitionend doesn't fire
		window.setTimeout(remove, 600);
	});
});
