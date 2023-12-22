import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import WithSubnavigation from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import NotFound from './Components/Layout/NotFound/NotFound';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Services from './Components/ServicesPage/Services';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const renderHeader = element => {
    const isAuthenticated = true;
    const user = {
      name: 'Ali Nayab',
    };

    return (
      <>
        <WithSubnavigation isAuthenticated={isAuthenticated} user={user} />
        {element}
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderHeader(<Home />)} />
        <Route path="*" element={renderHeader(<NotFound />)} />
        <Route path="/login" element={renderHeader(<Login />)} />
        <Route path="/register" element={renderHeader(<Signup />)} />
        <Route path="/services" element={renderHeader(<Services />)} />
        <Route path="/dashboard" element={renderHeader(<Dashboard />)} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
