import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "styled-components";
import {theme} from "./Utils/Theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    );
}

export default App;
