import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import RegisterForm from './RegisterForm.jsx'
import HomePage from './pages/HomePage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import LessonsPage from './pages/LessonsPage.jsx'
import LessonsView from './pages/LessonsView.jsx'
import PostPage from './pages/PostsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/lessons' element={<LessonsPage />} />
        <Route path='/lessons/:id' element={<LessonsView />} />
        <Route path='/posts' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
