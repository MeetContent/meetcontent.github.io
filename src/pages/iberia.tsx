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
            <h1>Daniel Barrio Fierro</h1>
            <img src="img/iberia-daniel.png" alt="Daniel Barrio Fierro" style={
              max-width: "30%",
              float: "left",
              margin-right: "1em"
            }/>
            <p>
              Daniel viene del mundo del software y tiene más de una década de experiencia en contenidos técnicos, incluyendo la creación de taxonomías para Google o la generación de documentación y herramientas de publicación en Nokia y Dolby. Hasta 2020 Daniel fue coordinador de MeetContent Wrocław y uno de los creadores del primer curso de postgrado de comunicación técnica en Polonia.
            </p>
          </div>
          <div>
            <h1>Sara Sánchez</h1>
            <img src="img/iberia-sara.png" alt="Sara Sánchez" style={
              max-width: "30%",
              float: "left",
              margin-right: "1em"
            }/>
            <p>
              Sara tiene experiencia en traducción técnica, que abarca desde manuales técnicos hasta documentos de patentes y nuevas tecnologías, con un enfoque especial en el software. Actualmente desempeña un papel fundamental como Redactora Técnica en Omada, donde lidera el proyecto de Localización del software en ocho idiomas diferentes.
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

