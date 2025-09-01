import React, {useState,useEffect} from 'react';
import './App.css';
import Footer from './components/FOOTER/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from './components/Router'
import Navbar from './components/Navbar/Navbar'



function App() {
   const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Router />
      <Footer />

      {isVisible && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* password: fr enquiries@pedarenergy.com is @@Quality2025@@ */}
    </div>
  );
}

export default App;
