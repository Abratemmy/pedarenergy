
import './App.css';
import Footer from './components/FOOTER/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from './components/Router'
import Navbar from './components/Navbar/Navbar'



function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <Router />
      <Footer />

      {/* password: fr enquiries@pedarenergy.com is @@Quality2025@@ */}
    </div>
  );
}

export default App;
