import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

import './App.css'

import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Slider from './components/mainSlider/Slider';

import AllCategories from './components/pages/AllCategories';
import Aaaa from './components/pages/submenu/Aaaa';
import Bbbb from './components/pages/submenu/Bbbb';
import Jobs from './components/pages/Jobs';
import Service from './components/pages/Service';
import RealEstate from './components/pages/RealEstate';
import Electronics from './components/pages/Electronics';
import ClotingFashion from './components/pages/ClotingFashion';
import HomeGarden from './components/pages/HomeGarden';

import Footer from './components/footer/Footer'; 
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';



function App() {

  return (
    <div className="App">
        <Router>
        <Header />

        <Navbar/>    
        <Routes>        
          <Route path="/AllCategories" element={<AllCategories />}/>
          <Route path="/" element={<Jobs />}/>
          <Route path="/Aaaa" element={<Aaaa />}/>
          <Route path="/Bbbb" element={<Bbbb />}/>
          <Route path="/Service" element={<Service />}/>
          <Route path="/RealEstate" element={<RealEstate />}/>
          <Route path="/Electronics" element={<Electronics />}/>
          <Route path="/HomeGarden" element={<HomeGarden/>}/>
          <Route path="/ClotingFashion" element={<ClotingFashion />}/>
          <Route path="/LogIn" element={<LogIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>

        </Routes>
    
      </Router>  
      <Slider />
       <Footer />  
      </div>
  )
}

export default App
