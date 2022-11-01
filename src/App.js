import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Flexwrap from "./components/Flexwrap";
import RepeatingImage from "./components/RepeatingImage";
function App() {
  let rotation = "0deg";
  let zIndex = -1;
  let animate = "behind 1s ease 0s infinite";
  setTimeout(() => {
    let aside_div = document.getElementById("aside-div").style;
    let menu = document.getElementById("menu");
    let styles = menu.style;
    const asidehandler = () => {
      if (rotation === "0deg") {
        rotation = "90deg";
        zIndex = 0;
        animate = "front 1s ease 0s 1";
      } else {
        rotation = "0deg";
        zIndex = -1;
        animate = "behind 1s ease 0s 1";
      }
      styles.rotate = rotation;
      if (zIndex === -1) {
        setTimeout(() => {
          aside_div.zIndex = zIndex;
        }, 1001);
      } else {
        aside_div.zIndex = zIndex;
      }
      aside_div.animation = animate;
    };
    menu.addEventListener("click", asidehandler);
  }, 10);

  return (
    <div className="app-container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <header>
                <Navbar />
              </header>
              <main>
                <Aside />
              </main>
            </>
          }
        >
          <Route exact path="/" element={<Flexwrap />} />
          <Route exact path="/RepeatingImage" element={<RepeatingImage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
