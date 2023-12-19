import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Input from './pages/input';
import FakeGenerate from './pages/loading/fakeGenerate'
import Payment from './pages/payment';
import Navbar from './components/navigation/navbar';
import RealGenerate from './pages/loading/realGenerate';
import Preview from './pages/preview';
import Link from './pages/link';
import GenerateLink from './pages/loading/generateLink';

function App() {
  return (
  <>
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Input /> } />
      <Route path='/generate' element={ <FakeGenerate /> } />
      <Route path='/payment' element={ <Payment />} />
      <Route path='/article' element={ <RealGenerate /> } />
      <Route path='/preview' element={ <Preview /> } />
      <Route path='/link' element={ <Link /> } />
      <Route path='/publish' element={ <GenerateLink /> } />
    </Routes>
   </BrowserRouter>
 </>
  );
}

export default App;
