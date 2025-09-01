import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Aboutus from '../EvenEveCleaning/Pages/About/Aboutus';
// const Home = React.lazy(() => import('../pages/Home'));
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/contact';
import Services from '../pages/Services/Services';
import HSE from '../pages/HSE/HSE';
import Pegear from '../pages/HSE/Pegear';
import GCompliance from '../pages/HSE/GCompliance';
import ProjectPartner from '../pages/ProjectPartner/ProjectPartner';
import BlogPage from '../pages/BlogPage/BlogPage';
import BlogDetails from '../pages/BlogPage/BlogDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about_us" caseSensitive={false} element={<About />} />
            <Route exact path="/contact_us" caseSensitive={false} element={<Contact />} />
            <Route exact path="/services" caseSensitive={false} element={<Services />} />
            <Route exact path="/sustainability" caseSensitive={false} element={<HSE />} />
            <Route exact path="/pegear" caseSensitive={false} element={<Pegear />} />
            <Route exact path="/governance_compliance" caseSensitive={false} element={<GCompliance />} />
            <Route exact path="/project_partnership" caseSensitive={false} element={<ProjectPartner />} />
            <Route exact path="/blogs" caseSensitive={false} element={<BlogPage />} />
            <Route exact path="/blogs/:title" caseSensitive={false} element={<BlogDetails />} />
            {/* Add more routes as needed */}

            {/* 👇 Catch-all route for undefined paths */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
export default Router
