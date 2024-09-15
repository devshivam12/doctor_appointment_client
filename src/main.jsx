import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <HelmetProvider>
        <ToastContainer theme='dark' position='bottom-center' autoClose={2000} closeOnClick pauseOnHover={false} />
        <App />
      </HelmetProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
