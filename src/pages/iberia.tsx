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
          <div>
            <h1>Daniel Barrios</h1>
            <img src="static/img/iberia-daniel.png" alt="Daniel Barrios" />
            <p>
              Daniel viene del mundo del software y tiene más de una década de experiencia en contenidos técnicos, que incluye la creación de taxonomías para Google, la generación de documentación y herramientas de publicación en empresas como Nokia y Dolby. Hasta 2020, Daniel fue coordinador de MeetContent Wrocław y uno de los creadores del primer curso de postgrado de comunicación técnica en Polonia.
            </p>
          </div>
          <div>
            <h2>Sara Sánchez</h2>
            <img src=".../static/img/iberia-sara.png" alt="Sara Sánchez" />
            <p>
              Sara tiene experiencia en traducción técnica, que abarca desde manuales técnicos hasta documentos de patentes y nuevas tecnologías, con un enfoque especial en el software. Actualmente, desempeña un papel fundamental como Redactora Técnica en Omada, donde lidera el proyecto de Localización del software en ocho idiomas diferentes.
            </p>
          </div>
        </>
      }
      blogLink="blog/tags/iberia"
      meetupsLink="events/iberia"
      newsletterLink=""
    />
  );
}

