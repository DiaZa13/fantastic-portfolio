import React, { useEffect, useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import joke from '../../assets/joke.png';

export default function Jokes() {
  const image = useRef(null);
  const imageReveal = CSSRulePlugin.getRule('.image-container:after');

  useEffect(() => {
    const img = image.current;
    gsap.to(imageReveal, {
      scrollTrigger: {
        trigger: '.alg-container',
        start: 'top center',
        end: 'center 30%',
        toggleActions: 'restart none none none',
      },
      duration: 1.4,
      width: '0%',
      ease: Power2.easeInOut,
    });

    gsap.from(img, {
      scrollTrigger: {
        trigger: '.alg-container',
        start: 'top center',
        end: 'center 30%',
        toggleActions: 'restart pause reverse pause',
      },
      duration: 1.4,
      scale: 1.6,
      ease: Power2.easeInOut,
    });
  });

  return (
    <div className="alg-container">
      <div className="image-container">
        <img src={joke} alt="Jokes" className="joke m-auto" ref={image} />
      </div>
    </div>
  );
}
