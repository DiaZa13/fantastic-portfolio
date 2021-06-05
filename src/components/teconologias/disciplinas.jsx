import React, { useEffect, useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import react from '../../assets/icon (1).png';
import babel from '../../assets/icon (2).png';
import boostrap from '../../assets/icon (3).png';
import icon4 from '../../assets/icon (4).png';
import icon5 from '../../assets/icon (5).png';
import icon6 from '../../assets/icon (6).png';

export default function Disciplinas() {
  const sreact = useRef(null);
  const sbabel = useRef(null);
  const sboostrap = useRef(null);
  const sicon4 = useRef(null);
  const sicon5 = useRef(null);
  const sicon6 = useRef(null);

  useEffect(() => {
    const creact = sreact.current;
    const cbabel = sbabel.current;
    const cboostrap = sboostrap.current;
    const icon4 = sicon4.current;
    const icon5 = sicon5.current;
    const icon6 = sicon6.current;

    gsap.from(creact, {
      scrollTrigger: {
        trigger: '.dis-container',
        start: '-10% top',
        end: 'center 30%',
        toggleActions: 'restart none reverse none',
      },
      duration: 1.4,
      opacity: 0,
      x: -150,
      rotate: -360,
      ease: Power2.easeInOut,
    });

    gsap.from(cbabel, {
      scrollTrigger: {
        trigger: '.dis-container',
        start: '-10% top',
        end: 'center 30%',
        toggleActions: 'restart none reverse none',
      },
      duration: 1.4,
      opacity: 0,
      y: -150,
      ease: Power2.easeInOut,
      delay: 2,
    });

    gsap.from(cboostrap, {
      scrollTrigger: {
        trigger: '.dis-container',
        start: '-10% top',
        end: 'center 30%',
        toggleActions: 'restart none reverse none',
      },
      duration: 1.6,
      opacity: 0,
      rotate: -360,
      x: 150,
      ease: Power2.easeInOuta,
      delay: 1.4,
    });

    gsap.from(icon4, {
      scrollTrigger: {
        trigger: '.dis-container',
        start: '-10% top',
        end: 'center 30%',
        toggleActions: 'restart none reverse none',
      },
      duration: 1.6,
      opacity: 0,
      x: 150,
      scale: 0.7,
      ease: Power2.easeIn,
      delay: 1.4,
    });

    gsap.from(icon5, {
      scrollTrigger: {
        trigger: '.dis-container',
        start: '-10% top',
        end: 'center 30%',
        toggleActions: 'restart none reverse none',
      },
      duration: 1.4,
      opacity: 0,
      y: 150,
      ease: Power2.easeInOut,
      delay: 2,
    });

    gsap.from(icon6, {
      scrollTrigger: {
        trigger: '.dis-container',
        start: '-10% top',
        end: 'center 30%',
        toggleActions: 'restart none reverse none',
      },
      duration: 1.6,
      opacity: 0,
      x: -150,
      scale: 0.2,
      ease: Power2.easeInOut,
      delay: 1.4,
    });
  });

  return (
    <div className="dis-container">
      <img src={react} alt="React" className="discipline-img" ref={sreact} />
      <img src={babel} alt="React" className="discipline-img" ref={sbabel} />
      <img src={boostrap} alt="React" className="discipline-img" ref={sboostrap} />
      <img src={icon5} alt="React" className="discipline-img" ref={sicon4} />
      <img src={icon6} alt="React" className="discipline-img" ref={sicon5} />
      <img src={icon4} alt="React" className="discipline-img" ref={sicon6} />
    </div>
  );
}
