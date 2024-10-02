import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navagation from './component/Navagation';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Kids from './component/Kids';
import Man from './component/Man';
import  Woman from './component/Woman';

import SignIn from './component/SignIn';
import Footer from './component/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
 <BrowserRouter>
<Navagation/>
<Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/kids' element={<Kids/>}/>
    <Route path='/man' element={<Man/>}/>
    <Route path='/woman'element={<Woman/>}/>
   
    <Route path='signin'element={<SignIn/>}/>
</Routes>
<Footer/>
</BrowserRouter>

</>
);

