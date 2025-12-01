import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchApi from './components/fetchapi.jsx'
import CreateItem from './components/addItem.jsx'

function App() {
  return (
    <>
      <CreateItem />
      <FetchApi />
    </>
  )
}

export default App
