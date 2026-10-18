

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import DestinationList from './components/DestinationList';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';




function App() {

const [destinations, setdestinations] = useState([
   {
    id:Math.random(),
    title: "Paris, France",
    description: "Discover the Eiffel Tower and beautiful streets.",
    image: "/images/paris.jpg",
    price: 1200,
    rating: 5
  },
  { 
    id:Math.random(),
    title: "Santorini, Greece",
    description: "Enjoy beautiful beaches and amazing sunsets.",
    image: "/images/santorini.jpg",
    price: 950,
    rating: 5
  },
  {
    id:Math.random(),
    title: "Bali, Indonesia",
    description: "Explore tropical beaches and beautiful landscapes.",
    image: "/images/bali.jpg",
    price: 1100,
    rating: 4
  },
  {
    id:Math.random(),
    title: "Rome, Italy",
    description: "Visit the Colosseum and discover Roman history.",
    image: "/images/rome.jpg",
    price: 850,
    rating: 4
  },
  {
    id:Math.random(), 
    title: "Dubai, UAE",
    description: "Discover modern architecture and luxury attractions.",
    image: "/images/dubai.jpg",
    price: 1000,
    rating: 4
  },
  { id:Math.random(),
    title: "Maldives",
    description: "Relax on beautiful beaches and enjoy crystal-clear water.",
    image: "/images/maldives.jpg",
    price: 1500,
    rating: 5
  }

])

const [text, settext] = useState("")
  return (
  <div>
<Navbarr destinations={destinations} setdestinations={setdestinations} settext={settext} />


      <Routes>
        <Route path="/" element={<DestinationList destinations={destinations} text={text}/>  } />
        <Route path="/about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
            <Route path="/details/:id" element={ <Details destinations={destinations}/> } />
      </Routes>

     

  




  </div>
  )
}

export default App
