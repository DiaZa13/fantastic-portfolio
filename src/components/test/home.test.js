/**
 * @jest-environment jsdom
 /
 / eslint-disable */
import React from 'react';
import {
  screen, render, cleanup, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from '../aboutMe/aboutMe';
import Quote from "../home/quote";

// QUERIA HACER MÁS PRUEBAS PERO NO ME DEJA PORQUE JEST NO PUEDE CONGIRUAR IMÁGENES
// INTENTE AGREGAR UN LAODER PARA QUE CARGARÁ LAS IMÁGENES, SIN EMBARGO TAMPOCO FUNCIONÓ

describe('AboutMe', () => {
  afterEach(cleanup);

  // it('Correcta rederización de animación inicial', () => {
  //   render(<Introducing />);
  //   const animation = screen.getByTestId('animation');
  //   expect(animation).not.toBeNull();
  // });

  it('Redireccionamiento a Github', () => {
    render(<AboutMe />);
    const github = screen.getByTestId('github');
    expect(github.href).toBe('https://github.com/DiaZa13');
  });

  it('Redireccionamiento a Instagram', () => {
    render(<AboutMe />);
    const ig = screen.getByTestId('ig');
    expect(ig.href).toBe('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  });

  it('Redireccionamiento a WhatsApp', () => {
    render(<AboutMe />);
    const whats = screen.getByTestId('whats');
    expect(whats.href).toBe('https://wa.link/u4ips5');
  });

  it('Redireccionamiento a Video en lugar de correo', () => {
    render(<AboutMe />);
    const email = screen.getByTestId('email');
    expect(email.href).toBe('https://www.youtube.com/watch?v=Mfu9jgj_z18');
  });

  it('Correcta rederización para mostrar los proyectos', () => {
    render(<Quote />);
    const project = screen.getByTestId('projects');
    expect(project).not.toBeNull();
  });


});
