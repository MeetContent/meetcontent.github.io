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
            <p>
            ¿Crees que la Redacción Técnica es un mundo de lobos solitarios?
¿Te imaginas charlando en tu lengua sobre los retos que tienes para sacar tus contenidos adelante?
¿Sabes que otras personas cerca de tí han pasado o están pasando por algo similar?</p>
<p>Pues para eso está MeetContent Iberia: para que profesionales de la Comunicación Técnica de la península ibérica compartan sus conocimientos e inquietudes.</p>
<p><b>¡Apúntate!</b> Te estamos esperando con los brazos abiertos.
            </p>
        </>
      }
      team={
        <>
          <h1>El equipo de MeetContent Iberia</h1>
          <div>
            <h2>Daniel Barrio Fierro</h2>
            <div style={display: "flex"}>
            <img src="/img/iberia-daniel.jpg" alt="Daniel Barrio Fierro" className="bio-picture"/>
            <p>
              Daniel viene del mundo del software y tiene más de una década de experiencia en contenidos técnicos, incluyendo la creación de taxonomías para Google o la generación de documentación y herramientas de publicación en Nokia y Dolby. Hasta 2020 Daniel fue coordinador de MeetContent Wrocław y uno de los creadores del primer curso de postgrado de comunicación técnica en Polonia.
            </p>
            </div>
          </div>
          <div>
            <h2>Sara Sánchez Ortiz</h2>
            <div style={display: "flex"}>
            <img src="/img/iberia-sara.jpg" alt="Sara Sánchez" className="bio-picture"/>
            <p>
              Sara tiene experiencia en traducción y redacción técnica que abarca desde manuales técnicos hasta documentos de patentes y nuevas tecnologías, con un enfoque especial en el software. Actualmente desempeña un papel fundamental como Redactora Técnica en Omada, donde lidera el proyecto de Localización del software en ocho idiomas diferentes.
            </p>
            </div>
          </div>
          <div>
            <h2>Pablo de Eguileor</h2>
            <div style={display: "flex"}>
            <img src="/img/iberia-pablo.jpg" alt="Pablo de Eguileor" className="bio-picture"/>
            <p>
            Generalista apasionado por las Publicaciones Técnicas y por crear el efecto ¡ajá! en el lector. +25 años en Comunicación Técnica ejerciendo todo tipo de funciones (redactor técnico, responsable de redacción, comercial de servicios de externalización, consultor y formador) y para diferentes tipos de sectores vinculados a fabricantes de producto físico (energía, maquinaria, automoción, electrónica, electrodoméstico, etc.).
            </p>
            </div>
          </div>
        </>
      }
      blogLink="blog/tags/iberia"
      meetupsLink="events/iberia"
      newsletterLink=""
    />
  );
}

