import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Theme Context Provider                    
import ThemeContextProvider from "./context/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
