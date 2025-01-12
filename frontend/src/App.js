import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Genre from "./features/genre";
import MovieList from "./features/movielist.jsx"

import Landingpage from './features/landingpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/movielist/:genre" element={<Genre />} />
      </Routes>
    </BrowserRouter>
  );
}
