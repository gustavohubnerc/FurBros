import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage'
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import NewPetPage from "./pages/NewPetPage"
import ProfilePage from "./pages/ProfilePage"
import PetPage from "./pages/PetPage"
import AuthContext from "./contexts/AuthContext.jsx"
import { useState } from "react"

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/newpet" element={<NewPetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pets/:id" element={<PetPage />} />
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}