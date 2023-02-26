import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GifExpertApp from './components/GifExpertApp'
import MultipleCustomHooks from './components/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
