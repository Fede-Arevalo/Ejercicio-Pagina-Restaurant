import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reserva from "./components/Reserva/Reserva";
import Carta from "./components/Carta/Carta";
import Footer from "./components/Footer/Footer";

const dishes  = [
  {
    id: 1,
    name: "Paella valenciana",
    description: "Traditional valencian paella",
    price: 10,
  },
  {
    id: 2,
    name: "Arroz del senyoret",
    description: "Seafood paella",
    price: 20,
  },
  {
    id: 3,
    name: "Paella de pollo y setas",
    description: "Chicken and mushrooms paella",
    price: 15,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta dishes={dishes}/>} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
