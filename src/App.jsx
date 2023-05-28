import './App.css'
import {Route, Routes } from "react-router-dom";
import DashboardPage from "./DashboardPage.jsx";

function App() {
  return(
    <>
      <Routes>
        <Route
          element={<DashboardPage />}
          path="/dashboard"
        />
      </Routes>
    </>
  )
}
export default App
