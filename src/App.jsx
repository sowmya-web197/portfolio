import React from 'react'
import Home from '../Home'
import About from './About'

const App = () => {
  console.log('app about to load')
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Home />
      <About />
    </div>
  )
}

export default App
