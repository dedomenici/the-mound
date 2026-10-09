import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoundApp } from "@/components/mound-app";
import { MoundGate } from "@/components/mound-gate";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MoundGate>
      <MoundApp />
    </MoundGate>
  </StrictMode>,
);
