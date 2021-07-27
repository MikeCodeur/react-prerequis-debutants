// Styling
// 🚀 Creation d'un composant personalisé
// http://localhost:3000/isolated/final/05.bonus-1.js

import * as React from 'react'
import '../02-styles.css'

function Box({style, className = '', ...autresProps}) {
  return (
    <div
      className={`container ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...autresProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="container--small" style={{backgroundColor: 'lightskyblue'}}>
        small lightskyblue box
      </Box>
      <Box className="container--medium" style={{backgroundColor: 'lightpink'}}>
        medium lightpink box
      </Box>
      <Box className="container--large" style={{backgroundColor: 'lightsalmon'}}>
        large lightsalmon box
      </Box>
      <Box>sans taille box</Box>
    </div>
  )
}

export default App
