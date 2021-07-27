// STYLE CSS
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'
import '../02-styles.css'

// 🤖 Utilise className pour la taille et le style (backgroundColor) pour la couleur
// 🤖 chaque element doive avoir "container" className appliqué

// 🐶 ajoute un props className à chaque element avec le bon nonm 
// 🤖 Les class names dispo: container, container--large, container--medium, container--small

// 🐶 Ajoute egalement un prop style sur chaque element pour changer le backgroundColor 
// le text doit aussi etre en italique `fontStyle: 'italic'`
const smallBox = <div>petit lightskyblue box</div>
const mediumBox = <div>moyen lightpink box</div>
const largeBox = <div>grand lightsalmon box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
