import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import dummyData from "./data/dummyData";
import { v4 as uuidv4 } from "uuid";
import PostItem from "./page/PostItem";

const Work = lazy(() => import("./page/Work"));
const NewPost = lazy(() => import("./page/NewPost"));
const Write = lazy(() => import("./page/Write"));
const Guest = lazy(() => import("./page/Guest"));
const Draw = lazy(() => import("./page/Draw"));

function App() {
  const [data, setData] = useState(dummyData);
  // work input
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState(data);

  const onPost = (body, title) => {
    const newPost = {
      id: uuidv4(),
      title,
      body,
      createAt: new Date().toLocaleDateString(),
    };
    const newData = { ...data };
    newData.post = [newPost, ...newData.post];
    setData(newData);
  };

  const onWrite = (author, text) => {
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

  // work 검색 기능
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onDraw = (author, img) => {
    const draw = {
      id: uuidv4(),
      author,
      text: "none",
      img,
    };
    const newData = { ...data };
    newData.guest = [draw, ...newData.guest];
    setData(newData);
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
                <Route
                  path="/"
                  element={
                    <Work data={data.post} onChangeSearch={onChangeSearch} search={search} />
                  }
                />
                <Route path="/newpost" element={<NewPost onPost={onPost} />} />
                <Route path="/guest" element={<Guest Guest={data.guest} />} />
                <Route path="/write" element={<Write onWrite={onWrite} />} />
                <Route path="/draw" element={<Draw onDraw={onDraw} />} />
                {data.post.map((el, idx) => {
                    return (
                      <Route
                        key={idx}
                        path={"/postitem" + idx}
                        element={<PostItem idx={idx} data={el} />}
                      />
                    );
                  })}
                <Route path="/postitem" element={<PostItem data={data.post} />} />
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
