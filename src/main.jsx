import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Products from './Products.jsx';
import Aboutus from './Aboutus.jsx';
import Contact from './Contact.jsx';
import Pricing from './Pricing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
