import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { lazy, Suspense, useState } from "react";
import classes from "./App.module.css";
import dummyData from "./data/dummyData";
import { v4 as uuidv4 } from "uuid";

const Work = lazy(() => import("./page/Work"));
const NewPost = lazy(() => import("./page/NewPost"));
const Write = lazy(() => import("./page/Write"));
const Guest = lazy(() => import("./page/Guest"));
const Draw = lazy(() => import("./page/Draw"));

function App() {
  const [data, setData] = useState(dummyData);

  const onPost = (body, title, createAt) => {
    const newPost = {
      id: uuidv4(),
      title,
      body,
      createAt,
    };
    const newData = { ...data };
    newData.post = [newPost, ...newData.post];
    setData(newData);
  };

  const onWrite = (author, text) => {
    if (text === "" || author === "") {
      return alert("빈 칸을 작성해 주세요");
    } else {
      const write = {
        id: uuidv4(),
        author,
        text,
        img: "none",
      };
      const newData = { ...data };
      newData.guest = [write, ...newData.guest];
      setData(newData);
    }
  };


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
                <Route path="/" element={<Work data={data.post} />} />
                <Route path="/newpost" element={<NewPost onPost={onPost} />} />
                <Route path="/guest" element={<Guest Guest={data.guest} />} />
                <Route path="/write" element={<Write onWrite={onWrite} />} />
                <Route path="/draw" element={<Draw />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
