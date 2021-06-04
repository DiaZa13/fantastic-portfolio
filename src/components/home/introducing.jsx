import React, { useRef } from 'react';
import { TweenMax, Power3 } from 'gsap/';
import Navbar from './navbar';
import background from '../../assets/background.svg';
import bicycle from '../../assets/bicycle.svg';

export default function Introducing() {
  let words = 0;

  const changeWord = useRef(null);
  const change = () => {
    const changeW = changeWord.current;
    changeW.style.opacity = 1;
    TweenMax.from(changeW, 0.1, { opacity: 1, y: -2, ease: Power3.easeOut });
    if (words === 0) {
      changeW.innerHTML = 'YES';
      TweenMax.from(changeW, 0.9, { opacity: 0, y: 19, ease: Power3.easeOut });
      words += 1;
    } else if (words === 1) {
      changeW.innerHTML = 'NO';
      TweenMax.from(changeW, 0.9, { opacity: 0, y: 19, ease: Power3.easeOut });
      words += 1;
    } else {
      changeW.innerHTML = 'WOOW';
      TweenMax.from(changeW, 0.9, { opacity: 0, y: 19, ease: Power3.easeOut });
      words = 0;
    }
  };

  // repetir con el intervalo de 2 segundos
  setInterval(change, 1000);

  // después de 5 segundos parar
  // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

  return (
    <div className="section-container">
      <div className="container-fluid m-0 p-0">
        <img src={background} alt="Background" className="background" />
        <img src={bicycle} alt="Bicycle" className="bicycle animate__animated animate__slideInLeft animate__slow" />
      </div>
      <div className="container-fluid">
        <Navbar />
        <div className="quote">
          <h3> There are three responses to a piece of design </h3>
          <h1 ref={changeWord}> YES </h1>
          <h3> -Milton Glaser </h3>
        </div>

      </div>
    </div>
  );
}
