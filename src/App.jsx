import './App.css'
import {Route, Routes } from "react-router-dom";
import DashboardPage from "./DashboardPage.jsx";
import DetailPage from "./DetailPage.jsx";

function App() {
  return(
    <>
      <Routes>
        <Route
          element={<DashboardPage />}
          path="/"
        />
        <Route
          element={<DetailPage />}
          path="/bio/:characterid"
        />
      </Routes>
    </>
  )
}
export default App
