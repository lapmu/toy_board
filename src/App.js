import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import { useSelector } from "react-redux";

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
  // work input
  const [search, setSearch] = useState("");
  const [isweather, setWeather] = useState("Clear");
  const state = useSelector((state) => state);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=6279bf02499d70eacd730c4b49f0e04b"
    )
      .then((data) => data.json())
      .then((data) => setWeather(data.weather[0].main));
  }, []);

  // work 검색 기능
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
                    <Work onChangeSearch={onChangeSearch} search={search} />
                  }
                />
                <Route path="/newpost" element={<NewPost />} />
                <Route path="/guest" element={<Guest />} />
                <Route path="/write" element={<Write />} />
                <Route path="/draw" element={<Draw />} />
                {state.post.map((el, idx) => {
                  return (
                    <Route
                      key={idx}
                      path={"/postitem" + idx}
                      element={<PostItem idx={idx} />}
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
