import React from 'react';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
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
      <div className="tutorship-container">
        <WorkItem
          title="Google Store Imitation"
          description="Imitación de la página principal de Google Store de Estados Unidos"
          redirect="http://stw-uvg.site:3167/"
          position=""
          img={p2}
        />
        <WorkItem
          title="Calculadora responsive"
          description="Calculadora con operaciones básicas, hechas a base de componentes de react y testeada cada función con pruebas unitarias"
          redirect="http://stw-uvg.site/labs/lab10/zaray/"
          position=""
          img={p5}
        />
        <WorkItem
          title="Meeting"
          description="Meeting es una aplicación web que permite la recomendación de grupos sociales a estudiantes de primer año de la Universidad del Valle de Guatemala"
          redirect="https://github.com/El-Mendez/ISW_Frontend"
          position=""
          img={p3}
        />
        <WorkItem
          title="Zoa"
          description="Proyecto desarrollado en el curso de Bases de Datos. Zoa es una aplicación de streaming de música que permite esucchar cualquiera de las canciones dentro de la plataforma así como una variedad de funciones para usuarios administradores"
          redirect="https://github.com/El-Mendez/BD_Proyecto1"
          position=""
          img={p4}
        />
      </div>

    </div>
  );
}
