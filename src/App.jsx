import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
