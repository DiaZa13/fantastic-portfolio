import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './home/home';
import Tecnologias from './teconologias/tecnologias';

export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div>
      <Home />
      <Tecnologias />
    </div>
  );
}
