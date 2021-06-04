import React, { useRef, useEffect } from 'react';
import gsap, { Power3 } from 'gsap/';
import AboutMe from '../aboutMe/aboutMe';
import Introducing from './introducing';

export default function Home() {
  const about = useRef(null);
  const container = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    const element = about.current;
    const cont = container.current;

    tl.add(gsap.to(element, {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: {
        id: 'horizontal-slider',
        trigger: cont,
        pin: true,
        scrub: 1,
        snap: 1 / 2,
        start: 'top top',
        end: () => `+=${cont.offsetWidth}`,
      },
    }));
  }, []);

  return (
    <div className="scroll-container" ref={container}>
      <Introducing />

      <section ref={about} className="section-container">
        <AboutMe />
      </section>
    </div>

  );
}
