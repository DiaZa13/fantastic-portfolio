import React from 'react';
import { AiFillGithub, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export default function AboutMe() {
  return (
    <div className="container-fluid about-container align-items-center">
      <span className="name-container display-4 mt-5 pt-3 mx-4 d-flex flex-column">
        <div className="d-flex flex-nowrap">
          <span className="name">D</span>
          <span className="name">I</span>
          <span className="name">A</span>
          <span className="name">N</span>
          <span className="name">A</span>
        </div>
        <div className="d-flex flex-nowrap mt-4">
          <span className="name ms-4">Z</span>
          <span className="name">A</span>
          <span className="name">R</span>
          <span className="name">A</span>
          <span className="name">Y</span>
        </div>

        <div className="d-flex flex-nowrap mt-4">
          <span className="name ms-4">C</span>
          <span className="name">O</span>
          <span className="name">R</span>
          <span className="name">A</span>
          <span className="name">D</span>
          <span className="name">O</span>
        </div>

        <div className="d-flex flex-nowrap mt-4">
          <span className="name ms-4">L</span>
          <span className="name">Ó</span>
          <span className="name">P</span>
          <span className="name">E</span>
          <span className="name">Z</span>
        </div>

      </span>
      <h3 className="text-tertiary px-5 justify-text">
        Soy estudiante de la Ingeniería en Ciencias de la Computación  Tecnologías de la Información en la
        Universidad del Valle Guatemala, actualmente tengo 19 años (SOY ADULTO INDEPENDIENTE, CON GUSTOS BIEN DEMENTES)
        Soy una persona apasionada, entusiasta y creativa. Perfeccionista en el ámbito del diseño y amante de las
        animaciones en scroll.
        <hr className="text-tertiary mt-5 w-100" />
        <div className="d-flex justify-content-between text-tertiary">
          <a href="https://www.youtube.com/watch?v=Mfu9jgj_z18" className="is-hover" data-testid="email"><MdEmail /></a>
          <a href="https://github.com/DiaZa13" className="is-hover" data-testid="github"><AiFillGithub /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="is-hover" data-testid="ig"><AiOutlineInstagram /></a>
          <a href="https://wa.link/u4ips5" className="is-hover" data-testid="whats"><AiOutlineWhatsApp /></a>
        </div>
      </h3>

    </div>
  );
}
