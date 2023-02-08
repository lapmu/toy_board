import dummyData from "./data/dummyData";
import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import classes from "./App.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PostItem from "./page/PostItem";
import Clear from "./img/weather/Clear.jpg";
import Clouds from "./img/weather/Clouds.jpg";
import Drizzle from "./img/weather/Drizzle.jpg";
import Mist from "./img/weather/Mist.jpg";
import Rain from "./img/weather/Rain.jpg";
import Snow from "./img/weather/Snow.jpg";
import Thunderstorm from "./img/weather/Thunderstorm.jpg";

const Main = lazy(() => import("./page/Main"));
const AboutUs = lazy(() => import("./page/AboutUs"));
const Menu = lazy(() => import("./page/Menu"));
const Work = lazy(() => import("./page/Work"));
const NewPost = lazy(() => import("./page/NewPost"));
const Write = lazy(() => import("./page/Write"));
const Guest = lazy(() => import("./page/Guest"));
const Draw = lazy(() => import("./page/Draw"));

function App() {
  const [data, setData] = useState(dummyData);
  // work input
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isweather, setWeather] = useState("Clear");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6279bf02499d70eacd730c4b49f0e04b"
    )
      .then((data) => data.json())
      .then((data) => setWeather(data.weather[0].main));
  }, []);

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

  // work 검색 기능
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onChangeSelectedPost = (post) => {
    setSelectedPost(post);
  };

  const onRemovePost = (idx) => {
    const newData = { ...data };
    const filtered = newData.post.filter((el, indx) => indx !== idx);
    newData.post = filtered;
    setData(newData);
  };

  const onRemoveGuest = (idx) => {
    const newData = { ...data };
    const filtered = newData.guest.filter((el, indx) => indx !== idx);
    newData.guest = filtered;
    setData(newData);
  };

  return (
    <BrowserRouter>
      <div className={classes.background}>
        <img
          src={
            isweather === "Clear"
              ? Clear
              : isweather === "Clouds"
              ? Clouds
              : isweather === "Drizzle"
              ? Drizzle
              : isweather === "Rain"
              ? Rain
              : isweather === "Snow"
              ? Snow
              : isweather === "Thunderstorm"
              ? Thunderstorm
              : Mist
          }
          alt={isweather}
        />
      </div>
      <div className={classes.main}>
        <div className={classes.header}>
          <Nav />
        </div>
        <div className={classes.body}>
          <div className={classes.content}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                  path="/work"
                  element={
                    <Work
                      data={data.post}
                      onChangeSearch={onChangeSearch}
                      search={search}
                    />
                  }
                />
                <Route path="/newpost" element={<NewPost onPost={onPost} />} />
                <Route
                  path="/guest"
                  element={
                    <Guest Guest={data.guest} onRemoveGuest={onRemoveGuest} />
                  }
                />
                <Route path="/write" element={<Write onWrite={onWrite} />} />
                <Route path="/draw" element={<Draw onDraw={onDraw} />} />
                {data.post.map((el, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={"/postitem" + idx}
                      element={
                        <PostItem
                          idx={idx}
                          data={el}
                          onRemovePost={onRemovePost}
                          selectedPost={selectedPost}
                        />
                      }
                    />
                  );
                })}
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
