import React, { useRef, useState } from 'react';
import { Power3, TweenMax } from 'gsap/';
import react from '../../assets/react.png';
import babel from '../../assets/babel.png';
import boostrap from '../../assets/boostrap.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import webpack from '../../assets/webpack.png';
import eslint from '../../assets/eslint.png';
import sass from '../../assets/sass.png';

export default function Tecnologias() {
  const changeImg = useRef(null);
  const [actual, setActual] = useState(react);

  const handleHover = (e) => {
    const newImg = changeImg.current;
    TweenMax.from(newImg, 0.1, {
      opacity: 1, x: 0, y: 0, ease: Power3.easeOut,
    });
    if (e.target.id === 'react') {
      setActual(react);
      TweenMax.from(newImg, 0.8, { opacity: 0, x: 20, ease: Power3.easeOut });
    } else if (e.target.id === 'boostrap') {
      setActual(boostrap);
      TweenMax.from(newImg, 0.8, { opacity: 0, x: -20, ease: Power3.easeOut });
    } else if (e.target.id === 'css') {
      setActual(css);
      TweenMax.from(newImg, 0.8, {
        opacity: 0, y: -20, ease: Power3.easeOut,
      });
    } else if (e.target.id === 'html') {
      setActual(html);
      TweenMax.from(newImg, 0.8, {
        opacity: 0, y: 20, ease: Power3.easeOut,
      });
    } else if (e.target.id === 'js') {
      setActual(js);
      TweenMax.from(newImg, 0.8, { opacity: 0, x: -20, ease: Power3.easeOut });
    } else if (e.target.id === 'webpack') {
      setActual(webpack);
      TweenMax.from(newImg, 0.8, { opacity: 0, x: 20, ease: Power3.easeOut });
    } else if (e.target.id === 'babel') {
      setActual(babel);
      TweenMax.from(newImg, 0.8, { opacity: 0, y: -20, ease: Power3.easeOut });
    } else if (e.target.id === 'eslint') {
      setActual(eslint);
      TweenMax.from(newImg, 0.8, { opacity: 0, y: 20, ease: Power3.easeOut });
    } else {
      setActual(sass);
      TweenMax.from(newImg, 0.8, { opacity: 0, x: -20, ease: Power3.easeOut });
    }
  };

  return (
    <section className="tec-container">
      <h1 className="mb-2">CONOCIMIENTO EN:</h1>
      <div id="images" className="img-store">
        <img src={actual} alt="React" className="h-100 w-100" ref={changeImg} />
      </div>
      <div id="tecnologias">
        <div
          className="border-bottom border-top border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="react"
        >
          REACT
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100 "
          onMouseOver={handleHover}
          id="boostrap"
        >
          BOOSTRAP
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100 "
          onMouseOver={handleHover}
          id="css"
        >
          CSS
        </div>

        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="html"
        >
          HTML
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="sass"
        >
          SASS
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="js"
        >
          JAVASCRIPT
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="webpack"
        >
          WEBPACK
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="babel"
        >
          BABEL
        </div>
        <div
          className="border-bottom border-primary tecnologia d-flex align-items-center w-100"
          onMouseOver={handleHover}
          id="eslint"
        >
          ESLINT
        </div>
      </div>
    </section>
  );
}
