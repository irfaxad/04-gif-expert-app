import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { GifExpertApp } from "./GifExpertApp";

console.log(import.meta.env);

const root = createRoot(document.getElementById("root"));

// if (import.meta.env.MODE === "development") {
//   root.render(
//     <StrictMode>
//       <GifExpertApp />
//     </StrictMode>
//   );
// } else {
root.render(<GifExpertApp />);
// }
