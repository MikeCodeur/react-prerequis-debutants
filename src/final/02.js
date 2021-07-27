// Styling
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'
import '../02-styles.css'

const smallBox = (
  <div
    className="container container--small"
    style={{fontStyle: 'italic', backgroundColor: 'lightskyblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="container container--medium"
    style={{fontStyle: 'italic', backgroundColor: 'lightpink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="container container--large"
    style={{fontStyle: 'italic', backgroundColor: 'lightsalmon'}}
  >
    large orange box
  </div>
)

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
