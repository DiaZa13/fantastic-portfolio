import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './home/home';
import Tecnologias from './teconologias/tecnologias';
import Work from './work/work';
import Jokes from './work/jokes';
import Disciplinas from './teconologias/disciplinas';
import Quote from './home/quote';
import End from './home/end';

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div>
      <Home />
      <Tecnologias />
      <Disciplinas />
      <Quote />
      <Work />
      <Jokes />
      <End />
    </div>
  );
}
