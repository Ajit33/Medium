
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Navbar from "./componets/Navbar"
import Footer from "./componets/Footer"
import Home from "./pages/Home"
function App() {


  return (
   <div>
    <Navbar />
    <Routes>
    <Route path="/" exact element={<Home />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
