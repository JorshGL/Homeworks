import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FirstApp from './components/FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value={0}/>
  </React.StrictMode>,
)
