
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/test'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import ResgisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgetPasswordPage from './pages/forgetPasswordPage'

//406884428733-i397cel2d086fuvpet1ogr2natic5dvg.apps.googleusercontent.com

function App() {
  
  return (

    <GoogleOAuthProvider clientId="406884428733-i397cel2d086fuvpet1ogr2natic5dvg.apps.googleusercontent.com">
    <BrowserRouter>
      <Toaster position="top-right"/>
    <div className="w-full h-screen bg-primary text-secondary">
      <Routes path="/">
      <Route path="/*" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<ResgisterPage/>} />
      <Route path="/admin/*" element={<AdminPage/>} />
      <Route path="/forgot-password" element={<ForgetPasswordPage />} />
     

      </Routes>

    </div>
    </BrowserRouter>
    </GoogleOAuthProvider>
  )

  
}

export default App
