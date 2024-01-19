import React from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import "./App.css";

function App() {
  (function () {
     // Start of use strict

    function initParallax() {
      var parallaxItems = document.querySelectorAll("[data-bss-parallax]");

      //     if (!parallaxItems.length) return;

      var defaultSpeed = 0.5;
      var visible = [];
      var scheduled;

      window.addEventListener("scroll", scroll);
      window.addEventListener("resize", scroll);

      scroll();

      function scroll() {
        visible.length = 0;

        for (var i = 0; i < parallaxItems.length; i++) {
          var rect = parallaxItems[i].getBoundingClientRect();
          var speed =
            parseFloat(
              parallaxItems[i].getAttribute("data-bss-parallax-speed"),
              10
            ) || defaultSpeed;

          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            visible.push({
              speed: speed,
              node: parallaxItems[i],
            });
          }
        }

        cancelAnimationFrame(scheduled);

        if (visible.length) {
          scheduled = requestAnimationFrame(update);
        }
      }

      function update() {
        for (var i = 0; i < visible.length; i++) {
          var node = visible[i].node;
          var speed = visible[i].speed;

          node.style.transform =
            "translate3d(0, " + -window.scrollY * speed + "px, 0)";
        }
      }
    }

    initParallax();
  })(); // End of use strict
  return (
    <div className="App">
      <div className="col-12 col-lg-10 mx-auto">
        <div
          className="position-relative"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "0 0 45%",
              transform: "translate3d(35%, 35%, 0)",
            }}
          >
            <img
              className="img-fluid"
              data-bss-parallax
              data-bss-parallax-speed="0.8"
              src={img3} // Use the imported image
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div
            style={{
              position: "relative",
              flex: "0 0 45%",
              transform: "translate3d(-5%, 20%, 0)",
            }}
          >
            <img
              className="img-fluid"
              data-bss-parallax
              data-bss-parallax-speed="0.4"
              width={300}
              height={300}
              src={img2} // Use the imported image
              alt=""
            />
          </div>
          <div
            style={{
              position: "relative",
              flex: "0 0 60%",
              transform: "translate3d(0, 0%, 0)",
            }}
          >
            <img
              className="img-fluid"
              data-bss-parallax
              data-bss-parallax-speed="0.25"
              width={300}
              height={300}
              src={img1} // Use the imported image
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
