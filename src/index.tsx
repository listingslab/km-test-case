import React from "react"
import { createRoot } from "react-dom/client"
import { 
  Kingmakers,
} from "./Kingmakers"

const container = document.getElementById("km-test-case")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Kingmakers />
  </React.StrictMode>
)
