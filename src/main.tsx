import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.css'
// import './index.css'
// and react native - mobile app dev
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // strictMode- no visual representation , just used to identify potential problems 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
