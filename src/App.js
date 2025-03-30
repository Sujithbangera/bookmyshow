import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import CarouselComponent from "./components/CarouselComponent";
import MovieListings from "./components/MovieListings";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage";
import SportsPage from "./pages/SportsPage";
import OffersPage from "./pages/OffersPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <CarouselComponent />
        <Routes>
          <Route path="/movies" element={<MovieListings />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/signin" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
