import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import toastr from 'toastr'
import axios from 'axios';
import 'toastr/build/toastr.css'
import swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { MainProvider } from './routes/MainContext';
import DefaultRoute from './routes/DefaultRoute';
import HomePage from './views/pages/HomePage';
import EventPage from './views/pages/EventPage';
import ContactPage from './views/pages/ContactPage';
import AboutPage from './views/pages/AboutPage';
import SingleEventPage from './views/single-pages/SingleEventPage';
import GlsInnovation from './views/pages/departements/GlsInnovation';
import KtaAcademy from './views/pages/departements/KtaAcademy';

let headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin":"http://localhost:5173/"
}

window.BaseUrl = import.meta.env.VITE_API_URL;
window.ImageUrl = import.meta.env.VITE_IMAGE_URL;
window.toastr = toastr
window.swal = swal
window.axios = axios
window.headerRequest = headers

function App() {

  return (
    <>
      <MainProvider>
        <Router>
          <Routes>
            <Route element={<DefaultRoute />}>
              <Route path="/" index element={<HomePage />} />
              <Route path='/gls-inovation' element={<GlsInnovation />} />
              <Route path='/kta-academy' element={<KtaAcademy />} />
              <Route path='/events' element={<EventPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path="/single-event/:id" element={<SingleEventPage />} />
            </Route>
          </Routes>
        </Router>
      </MainProvider>
    </>
  )
}

export default App
