import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import WorkItem from './workItem';

export default function Work() {
  // const refSlider = useRef(null);
  // const tl = gsap.timeline();
  //
  // useEffect(() => {
  //   const slider = refSlider.current;
  //   const rect = slider.getBoundingClientRect();
  //   const totalScroll = slider.scrollWidth - rect.left;
  //   console.log(totalScroll);
  //   tl.add(gsap.to(slider, {
  //     x: () => -totalScroll,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: slider,
  //       pin: true,
  //       scrub: 1,
  //       markers: true,
  //       start: 'top top',
  //       end: () => `+=${totalScroll}`,
  //     },
  //
  //   }));
  // });

  return (
    <div>
      <h1 className="ps-5 mt-2">Proyectos elaborados</h1>
      <div className="tutorship-container">
        <WorkItem
          title="Google Store Imitation"
          description="Imitación de la página principal de Google Store de Estados Unidos"
          redirect="http://stw-uvg.site:3167/"
          position=""
          img={p2}
        />
        <WorkItem
            title="Google Store Imitation"
            description="Imitación de la página principal de Google Store de Estados Unidos"
            redirect="http://stw-uvg.site:3167/"
            position=""
            img={p3}
        />
      </div>

    </div>
  );
}
