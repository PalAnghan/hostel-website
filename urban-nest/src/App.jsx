import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} /> 

      </Route>
    </Routes>
  );
}

export default App;
