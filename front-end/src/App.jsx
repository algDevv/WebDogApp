
import "./index.css"
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Breed from './Pages/Breed';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {

  return (
    <div className="relative bg-gray-900 min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full gradient-background">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/breed' element={<Breed />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
