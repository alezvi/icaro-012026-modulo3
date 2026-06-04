import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import RegisterForm from './RegisterForm.jsx'
import LessonsList from './LessonsList.jsx'
import HomePage from './pages/HomePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
