import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import HomePage from "./pages/home"
import AboutUs from "./pages/about us"
import styles from "./app.module.scss"


function App() {

  return (
   <div className={styles.wrapper}>
    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
    </Routes>
   </div>
  )
}

export default App
