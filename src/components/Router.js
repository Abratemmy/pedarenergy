import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Aboutus from '../EvenEveCleaning/Pages/About/Aboutus';
// const Home = React.lazy(() => import('../pages/Home'));
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/contact';
import Services from '../pages/Services/Services';
import HSE from '../pages/HSE/HSE';

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about_us" caseSensitive={false} element={<About />} />
            <Route exact path="/contact_us" caseSensitive={false} element={<Contact />} />
            <Route exact path="/services" caseSensitive={false} element={<Services />} />
            <Route exact path="/hse" caseSensitive={false} element={<HSE />} />
        </Routes>
    )
}
export default Router
