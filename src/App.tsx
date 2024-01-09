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
import Confirmation from './pages/confirmation';
import About from './pages/about';
import Pricing from './pages/pricing';
import Revision from './pages/revision/revision';
import RevisionPreview from './pages/revision/revisionPreview';
import RevisionConfirmation from './pages/revision/submissionSuccess';
import MyArticle from './pages/myArticle';
import Examples from './pages/examples';

function App() {
  return (
  <>
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Input /> } />
      {/* <Route path='/generate' element={ <FakeGenerate /> } /> */}
      <Route path='/payment' element={ <Payment />} />
      {/* <Route path='/article' element={ <RealGenerate /> } /> */}
      <Route path='/preview/:slug' element={ <Preview /> } />
      <Route path='/link' element={ <Link /> } />
      <Route path='/publish' element={ <GenerateLink /> } />
      <Route path='/confirmation' element={ <Confirmation />} />
      <Route path='/about' element={ <About /> } />
      <Route path='/pricing' element={ <Pricing />} />
      <Route path='/revision' element={ <Revision /> } />
      <Route path='/revision/:slug' element={ <RevisionPreview /> } />
      <Route path='/revision/confirmation' element={ <RevisionConfirmation /> } />
      <Route path='/my-article/:slug' element={ <MyArticle /> } />
      <Route path='/examples' element={ <Examples />} />
    </Routes>
   </BrowserRouter>
 </>
  );
}

export default App;
