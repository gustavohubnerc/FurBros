import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}