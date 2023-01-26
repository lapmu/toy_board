import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { lazy, Suspense, useState } from "react";
import classes from "./App.module.css";
import dummyData from "./data/dummyData";

const Work = lazy(() => import("./page/Work"));
const NewPost = lazy(() => import("./page/NewPost"));
const Write = lazy(() => import("./page/Write"));
const Visit = lazy(() => import("./page/Visit"));
const Draw = lazy(() => import("./page/Draw"));

function App() {
  const [data, setData] = useState(dummyData)
  
  return (
    <BrowserRouter>
      <div className={classes.main}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.body}>
          <div className={classes.nav}>
            <Nav />
          </div>
          <div className={classes.content}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Work />} />
                <Route path="/newpost" element={<NewPost />} />
                <Route path="/visit" element={<Visit visit={data.visit}/>} />
                <Route path="/write" element={<Write />} />
                <Route path="/draw" element={<Draw />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <div  className={classes.footer}>
        <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
