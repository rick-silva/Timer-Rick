import React from "react"
import {Timer} from './assets/components/timer.jsx'
import { Player } from "./assets/components/player.jsx"
import { BackgroundBTN } from "./assets/components/backgroundBTN.jsx"

function App() {
  

  return (
    <div id="body" className="bg-dark w-screen h-screen flex flex-col justify-center relative">
      <BackgroundBTN />
      <Timer />
      <Player />
    </div>
  )
}

export default App
