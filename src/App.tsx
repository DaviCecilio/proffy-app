import React from "react"
import GlobalStyle from "./assets/styles/globalStyle"

import Landing from "./pages/Landing"

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Landing />
      </div>
    </>
  )
}

export default App
