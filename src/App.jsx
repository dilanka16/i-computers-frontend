
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/test'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import ResgisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'



function App() {
  
  return (
    <BrowserRouter>
      <Toaster position="top-right"/>
    <div className="w-full h-screen bg-primary text-secondary">
      <Routes path="/">
      <Route path="/*" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<ResgisterPage/>} />
      <Route path="/admin/*" element={<AdminPage/>} />
     

      </Routes>

    </div>
    </BrowserRouter>
  )

  
}

export default App
