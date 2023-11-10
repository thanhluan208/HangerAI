import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import AppThemeProvider from "./providers/AppThemeProvider.jsx"
import AuthenticationProvider from "./providers/AuthenticationProvider.jsx"

import "./fonts/Gilroy-Bold.ttf"
import "./fonts/Gilroy-ExtraBold.ttf"
import "./fonts/Gilroy-Regular.ttf"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </AuthenticationProvider>
  </React.StrictMode>
)
