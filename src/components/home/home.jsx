import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap/';
import Navbar from './navbar';
import background from '../../assets/background.svg';
import bicycle from '../../assets/bicycle.svg';

export default function Home() {
  let words = 0;
  // eslint-disable-next-line camelcase
  let change_word = useRef(null);
  const change = () => {
    change_word.style.opacity = 1;
    TweenMax.from(change_word, 0.1, { opacity: 1, y: -2, ease: Power3.easeOut });
    if (words === 0) {
      change_word.innerHTML = 'YES';
      TweenMax.from(change_word, 0.9, { opacity: 0, y: 19, ease: Power3.easeOut });
      words += 1;
    } else if (words === 1) {
      change_word.innerHTML = 'NO';
      TweenMax.from(change_word, 0.9, { opacity: 0, y: 19, ease: Power3.easeOut });
      words += 1;
    } else {
      change_word.innerHTML = 'WOOW';
      TweenMax.from(change_word, 0.9, { opacity: 0, y: 19, ease: Power3.easeOut });
      words = 0;
    }
  };

  // repetir con el intervalo de 2 segundos
  // setInterval(change, 1000);

  // después de 5 segundos parar
  // setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

  return (
    <div>
      <div className="container-fluid m-0 p-0">
        <img src={background} alt="Background" className="background" />
        <img src={bicycle} alt="Bicycle" className="bicycle animate__animated animate__slideInLeft animate__slow" />
      </div>
      <div className="container-fluid">
        <Navbar />
        <div className="quote">
          <h3>
            There are three responses to a piece of design
          </h3>
          <h1 ref={(item) => { change_word = item; }}>
            YES
          </h1>
          <h3>
            -Milton Glaser
          </h3>
        </div>

      </div>
    </div>
  );
}
