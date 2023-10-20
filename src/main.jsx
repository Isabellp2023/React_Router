import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Simbolo from './components/pages/Simbolo/Simbolo';
import Paleta from './components/pages/Paleta/Paleta';
import Botones from './components/pages/Botones/Botones';
import NotFound from './components/pages/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
         <Route index element={<Paleta />}/>
         <Route path='/simbolo' element={<Simbolo />}/>
         <Route path='/botones' element={<Botones />}/>
        <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
