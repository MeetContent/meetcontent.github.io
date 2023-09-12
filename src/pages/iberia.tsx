import React from 'react';
import DivisionPage from '../components/DivisionPage/DivisionPage';
import DivisionPageIberia from '../components/DivisionPage/DivisionPageIberia';

export default function Iberia() {
  return (
    <DivisionPageIberia
      name="Iberia"
      description="Meetups en España y Portugal"
      about={
        <>
          <h1>Daniel Barrios</h1>
          <p>
            Daniel viene del mundo del software. Lleva trabajando más de una década en contenidos técnicos, desde la creación de taxonomías para Google a la creación de documentación y herramientas de publicación en Nokia o Dolby. Hasta 2020 Daniel fue coordinador de MeetContent Wrocław, y fue uno de los creadores del primer curso de postgrado de comunicación técnica en Polonia.
          </p>
          <img src="iberia-daniel.jpg" alt="DanielBarrios" />
        </>
         <h2>Sara Sánchez</h2>
        <img src="iberia-sara.jpg" alt="SaraSánchez" />
          <p>
           Sara posee experiencia en el ámbito de la traducción técnica, abarcando desde manuales técnicos hasta documentos de patentes, así como nuevas tecnologías, con un enfoque particular en el software. Actualmente, desempeña un papel fundamental como Redactora Técnica en Omada, donde lidera el proyecto de Localización del software en ocho idiomas diferentes.
          </p>
      }
      blogLink="blog/tags/iberia"
      meetupsLink="events/iberia"
      newsletterLink=""
    />
  );
}
