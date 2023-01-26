import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer';
import { lazy, Suspense } from "react";

const Work = lazy(()=>import('./page/Work'))
const NewPost = lazy(()=> import('./page/NewPost'))
const Write = lazy(()=> import('./page/Write'))
const Visit = lazy(()=> import('./page/Visit'))
const Draw = lazy(()=> import('./page/Draw'))

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header/>
        <Nav />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Work/>}/>
          <Route path='/newpost' element={<NewPost/>}/>
          <Route path='/visit' element={<Visit/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/draw' element={<Draw/>}/>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
