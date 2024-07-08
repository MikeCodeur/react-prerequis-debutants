"use client"

//DO NOT EDIT THIS FILE !!!!!
import { useEffect } from "react"

const EXO = "exo"

export const App = ({ exercice }: { exercice?: () => void }) => {
  useEffect(() => {
    if (exercice) {
      exercice()
    }
  }, [exercice])
}
export const init = (label = "Exercice") => {
  if (!document) return console.error("document not found")

  const el = document.getElementById(EXO)
  if (el) {
    document.getElementById(EXO)?.parentNode?.removeChild(el)
  }
  let rootDiv = document.getElementById("root")

  if (!rootDiv) return console.error("root element not found")

  const exoDiv = document.createElement("div")
  const h2 = document.createElement("h2")
  h2.innerText = label
  exoDiv.setAttribute("id", EXO)
  exoDiv.appendChild(h2)
  rootDiv.appendChild(exoDiv)
}

const displayText = (label: string) => {
  const exoDiv = document.getElementById(EXO)
  const p = document.createElement("p")
  p.innerText = label

  if (!exoDiv) return console.error("exoDiv not found")

  exoDiv.appendChild(p)
}
export default displayText