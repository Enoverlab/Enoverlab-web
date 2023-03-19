import { useEffect } from "react";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Pay from "./Pages/Pay";
import Resources from "./Pages/Resources";
import Corporate from "./Pages/Corporate";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/Theme";
import BlogContentPage from "./Pages/BlogContentPage";
import AOS from "aos";
import CheckoutPage from "./Pages/CheckoutPage"
import Executive from "./Pages/Executive";
import Sales from "./Pages/Sales";
import Exclusive from "./Pages/Exclusive";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/programs" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
        <Route path="/pay/:id" element={<CheckoutPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/executive" element={<Executive/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/exclusive" element={<Exclusive/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
