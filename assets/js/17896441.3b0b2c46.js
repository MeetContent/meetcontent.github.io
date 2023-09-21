"use strict";(self.webpackChunkmeet_content=self.webpackChunkmeet_content||[]).push([[7918],{7534:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d,useEventMetadata:()=>c});var t=n(7294),i=n(5154);const o={wrapper:"wrapper_Dk5F",title:"title_pMHp",timeAndPlace:"timeAndPlace_KQvW"},r={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit",hourCycle:"h24",timeZone:"Europe/Warsaw"};function l(){const e=c();if(!e)return null;const{division:a,meetup_number:n,speakers:i,location:l,date:s}=e;return"Iberia"==e.division?t.createElement("div",{className:o.wrapper},t.createElement("div",{className:o.title},"MeetContent ",a," #",n),t.createElement("div",null,"Organizado por ",i?.join(", ")),t.createElement("div",{className:o.timeAndPlace},t.createElement("div",null,l),t.createElement("time",{dateTime:s},new Date(s).toLocaleString("es-ES",r)))):t.createElement("div",{className:o.wrapper},t.createElement("div",{className:o.title},"MeetContent ",a," #",n),t.createElement("div",null,"by ",i?.join(", ")),t.createElement("div",{className:o.timeAndPlace},t.createElement("div",null,l),t.createElement("time",{dateTime:s},new Date(s).toLocaleString("en-US",r))))}const s=(0,t.createContext)(null);function c(){return t.useContext(s)}function d(e){const{date:a,division:n,location:o,meetup_number:r,registration_link:c,speakers:d}=e.content.frontMatter;return t.createElement(s.Provider,{value:{date:a,division:n,location:o,meetup_number:r,registration_link:c,speakers:d}},t.createElement(l,null),t.createElement(i.Z,e))}},6384:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(7294),i=n(49),o=n(9960),r=n(7534);function l(){const e=(0,r.useEventMetadata)();return!e||new Date(e.date)<new Date?null:"Iberia"==e.division?t.createElement(o.Z,{className:"button button--contrast button--lg",href:e.registration_link,style:{marginTop:"2em"}},"Me Apunto"):t.createElement(o.Z,{className:"button button--contrast button--lg",href:e.registration_link,style:{marginTop:"2em"}},"Register")}var s=n(7462);const c={name:"name_X7_g",bio:"bio_Kmnh"};function d(e){let{name:a,bio:n}=e;return t.createElement("section",null,t.createElement("div",{className:c.name},a),t.createElement("div",{className:c.bio},n))}const m=[{name:"Marta Bartnicka",bio:t.createElement(t.Fragment,null,t.createElement("p",null,"For over 20 years in IBM Translation Center, Marta Bartnicka has gathered experience in translation and localization, verification, localization testing, localization projects management and terminology, as well as implementation of Machine Translation and integrating Continuous Delivery / Continuous Integration with the localization process."),t.createElement("p",null,"In 2019, Marta joined Dolby Laboratories, leveraging her expertise in Localization and exploring the world of Publishing Engineering. She runs training courses on software/documentation localization and the practical use of Machine Translation in cooperation with Localize.pl and All-Round Translator, and she is the co-author of Programmers and translators."," ",t.createElement("i",null,"Introduction to software localization with Dr. Agenor Hofmann-Delbor")," ","(published in Polish by Helion)."))},{name:"Wojciech Froelich",bio:t.createElement(t.Fragment,null,"Wojciech Froelich is the spokesperson for tekom Polska\u2014one of the country organizations within tekom Europe, the largest professional association for technical communication worldwide. Wojciech has 20 years\u2019 experience in localization engineering, and he is currently VP of Solutions Engineering at Argos Multilingual where he leads a team of experienced engineers who are responsible for building customer-oriented localization workflows and providing internationalization consultancy and software engineering support to Argos partners. He focuses on integrating authoring, automated translation management and multilingual publishing systems.")},{name:"Tomek Prus",bio:t.createElement(t.Fragment,null,"Tomek graduated from the Wroclaw University of Technology and currently works as Global Documentation Manager at Unit4. He has developed as a technical communication professional at LG Electronics and Nokia, holding a variety of different positions. His passion for content is coupled with curiosity, interest in technology, and daily operational management. He loves all kinds of sports, especially football.")},{name:"Rafa\u0142 Pawlicki",bio:t.createElement(t.Fragment,null,t.createElement("p",null,"Przez ponad 10 lat, Rafa\u0142 pracowa\u0142 jako deweloper, poch\u0142aniaj\u0105c tajemn\u0105 wiedz\u0119 na temat tworzenia oprogramowania, zdobywaj\u0105c umiej\u0119tno\u015bci programistyczne, by w ko\u0144cu rzuci\u0107 to wszystko i zosta\u0107\u2026 managerem do spraw dokumentacji."),t.createElement("p",null,"W DreamLabie, opiekuje si\u0119 procesem tworzenia dokument\xf3w, organizacj\u0105 bazy wiedzy i dostarczaniem narz\u0119dzi do pisania dokumentacji."))},{name:"Katarzyna Milewska",bio:t.createElement(t.Fragment,null,"Kasia po kilku latach studi\xf3w na Politechnice i pracy w biurach projektowych postanowi\u0142a zmieni\u0107 swoje \u017cycie i spr\xf3bowa\u0107 czego\u015b nowego. Los zaprowadzi\u0142 j\u0105 do Electroluxa, gdzie pr\xf3buj\u0105c ujarzmi\u0107 temat instrukcji dla urz\u0105dze\u0144 gazowych dosta\u0142a niez\u0142\u0105 w\u0142osk\u0105 szko\u0142\u0119 \u017cycia \u2013 Od 2015 roku pracuje w Sabre, gdzie zajmuje si\u0119 dokumentacj\u0105 API.")},{name:"\u0141ukasz Pieczyrak",bio:t.createElement(t.Fragment,null,"Dwuosobowy zesp\xf3\u0142 DevOps Engineers w ABB PG Business Services przy produktach do zarz\u0105dzania zasobami w sieci energetycznej. Swoj\u0105 prac\u0105 i wiedz\u0105 wspieraj\u0105 lokalne zespo\u0142y programistyczne i klient\xf3w ABB na ca\u0142ym \u015bwiecie. Ka\u017cdy dzie\u0144 pracy DevOpsa to nowe wyzwania i ciekawe do\u015bwiadczenia.")},{name:"Marcin Wilk",bio:t.createElement(t.Fragment,null,"Dwuosobowy zesp\xf3\u0142 DevOps Engineers w ABB PG Business Services przy produktach do zarz\u0105dzania zasobami w sieci energetycznej. Swoj\u0105 prac\u0105 i wiedz\u0105 wspieraj\u0105 lokalne zespo\u0142y programistyczne i klient\xf3w ABB na ca\u0142ym \u015bwiecie. Ka\u017cdy dzie\u0144 pracy DevOpsa to nowe wyzwania i ciekawe do\u015bwiadczenia.")},{name:"Piotr Sroka",bio:t.createElement(t.Fragment,null,"Z bycia nauczycielem j\u0119zyka angielskiego trafi\u0142 do technical writingu w 2012 roku. Pisz\u0105c dokumentacj\u0119 stara si\u0119 zrozumie\u0107 i nad\u0105\u017ca\u0107 za nowinkami w \u015bwiecie techniki.")},{name:"Pawe\u0142 Kowaluk",bio:t.createElement(t.Fragment,null,"Pracuje jako technical writer w krakowskim oddziale Guidewire Software. Jest w bran\u017cy od 2008 roku i planuje jeszcze troch\u0119 zosta\u0107 \ud83d\ude42")},{name:"Maciej Zasada",bio:t.createElement(t.Fragment,null,"Ever since he was six Maciej wanted to be a radio journalist. After almost five years of working in radio he realized he enjoyed figuring out how stuff should work way more than talking into a microphone. It took him another five years to understand that it is all about how people work, not the stuff. Former Business and Process Analyst, currently Engineering Manager, he is responsible for the Financial Aid module in Unit4 Student Management.")},{name:"Alicja Wojtkiewicz",bio:t.createElement(t.Fragment,null,"Alicja Wojtkiewicz started her work with technical documentation around 7 years ago. Beginning as a process engineer at Stelweld she provided work instructions and standards for a paint shop and assembly line. Since 2014 she has been working for DeLaval\u2014first as a Technical Writer and currently as an Article Editor, responsible for the creation of Spare Parts Catalogues.")},{name:"Paulina Drewniak",bio:t.createElement(t.Fragment,null,"PhD in applied linguistics, UX/UI enthusiast, interested in gaming and multimodal art forms. Paulina currently works as a multimedia designer at Nokia as a member of the UX/UI team developing experimental AR applications for Mobile Networks customer documentation.")},{name:"Grzegorz Rydz",bio:t.createElement(t.Fragment,null,"Grzegorz has been working as a technical writer for almost five years, primarily writing hardware and software documentation for multiple products. His work sometimes involves working on customer sites to collect input, organize processes, and document product deployments. Grzegorz is also experienced in project organization and roadmap planning.")},{name:"\u0141ukasz Rybka",bio:t.createElement(t.Fragment,null,t.createElement("p",null,"\u0141ukasz started his adventure with Technical Documentation 7 years ago."),t.createElement("p",null,"He is most interested in information architecture and the logic behind a given documentation deliverable."))},{name:"Nataliia Dobrochynska",bio:t.createElement(t.Fragment,null,"Nataliia graduated from L\u2019viv National University in Ukraine as a foreign language philologist, and her journey with tech documentation started in 2011 with a position at Ericsson. About two years ago she decided her life needed a little bit of change, and decided to move to Poland and join Etteplan as a technical writer. In her free time Nataliia takes up sports: running, cycling, snowboarding, hiking, and yoga.")},{name:"Martyna Toporek",bio:t.createElement(t.Fragment,null,"Martyna has several years of experience ensuring documentation quality at production companies, updating and collecting information about plant machinery. For the last 4.5 years she has created technical documentation for a variety customers, and her main area of interest is machine documentation. Martyna spends her free time riding a bicycle and hiking.")},{name:"Hanna Dobosz",bio:t.createElement(t.Fragment,null,"Hania is a Wroc\u0142aw University of Technology graduate and a project manager for technical documentation at Etteplan. She believes that communication is the key to success and is a sports addict\u2014particularly keen on climbing, yoga and triathlon.")},{name:"Nadzieja Maksymczak",bio:t.createElement(t.Fragment,null,"Nadzieja Maksymczak manages a Customer Documentation team at Nokia. She has extensive experience in technical writing, having driven numerous customer documentation projects as a Project Manager. She is interested in communication, project management and operational management. Horse riding is her passion.")},{name:"Panny Luo",bio:t.createElement(t.Fragment,null,"Panny is a documentation team manager at Nokia. She had her first job as a technical writer in Nokia China in 2008, and became manager of the team after one year. Embracing new challenges, she came to Poland in 2014 to lead a local documentation team and drive broader scale projects. With abundant experience in leading multicultural teams, she is known for her ability to transmute cultural differences into catalyst for efficiency and creativity in global projects.")},{name:"Marcelina Haftka",bio:t.createElement(t.Fragment,null,"Polish native working in French and English. Specializes in software localization, technical and environmental translations, interpreting at production plants. Enjoys helping global companies understand inflected languages in order to improve their UI designs and facilitate their UX management. Big fan of automotive & sustainability innovations and all sorts of multidisciplinary discussions.")},{name:"Micha\u0142 Skowron",bio:t.createElement(t.Fragment,null,t.createElement(t.Fragment,null,t.createElement("p",null,"Worked as a technical writer for 8 years. He worked in multiple software companies, big and small. He's a huge proponent of automation in content delivery. In 2020, he became a doc tools developer."),t.createElement("p",null,"In his daily work, Micha\u0142 focuses on creating and maintaining tools and solutions which allow people to create technical documentation according to best practices in the software industry. His favorite programming language is Python. He wrote a guidebook called"," ",t.createElement("i",null,"Tech Writer koduje w Pythonie. Przewodnik szybkiego startu.")," ","(in Polish).")))},{name:"Grzegorz Kossobudzki",bio:t.createElement(t.Fragment,null,"Grzegorz has been working as a tech writer since 2014, for companies such as Nokia and Unit4, with a bit of freelance translation on the side. He\u2019s leaning towards the technical part of technical writing, and enjoys using MadCap tools to solve all kinds of problems. He felt really weird writing this bio.")},{name:"Grzegorz Kopij",bio:t.createElement(t.Fragment,null,"Grzegorz is the CTO of NetworkedAssets and an ISAQB Advanced Certified Software Architect with over 20 years of experience creating, architecting and developing software. During this time he has come to find solutions on how to effectively create documentation, saving developers\u2019 time and effort while ensuring that the project continues to meet the needs of its stakeholders.")},{name:"Olga Stefaniuk",bio:t.createElement(t.Fragment,null,"Olga currently enjoys her work as a Developer Advocate at Box. She gained her experience by working as a front-end Developer with a focus on developing apps in the Vue.js framework and improving web accessibility. She's also a leader in a non-profit organisation called girls.js, which helps women learn the basics of JavaScript.")},{name:"Barbara Czy\u017c",bio:t.createElement(t.Fragment,null,"Barbara is a curious technical writer, passionate about the docs-as-code approach and the API world. After her adventures with DITA and Markdown, she joined Box to create developer documentation and tighten her relationship with APIs and code. She is also the co-organizer of MeetContentKRK.")},{name:"Daniel Barrio Fierro",bio:t.createElement(t.Fragment,null,"Daniel viene del mundo del software y tiene m\xe1s de una d\xe9cada de experiencia en contenidos t\xe9cnicos, incluyendo la creaci\xf3n de taxonom\xedas para Google o la generaci\xf3n de documentaci\xf3n y herramientas de publicaci\xf3n en Nokia y Dolby. Es uno de los creadores del primer curso de postgrado de comunicaci\xf3n t\xe9cnica en Polonia, y hasta 2020 fue coordinador de MeetContent Wroc\u0142aw.")},{name:"Pablo de Eguileor Astigarraga",bio:t.createElement(t.Fragment,null,"Generalista apasionado por las Publicaciones T\xe9cnicas y por crear el efecto \xa1aj\xe1! en el lector. +25 a\xf1os en Comunicaci\xf3n T\xe9cnica ejerciendo todo tipo de funciones (redactor t\xe9cnico, responsable de redacci\xf3n, comercial de servicios de externalizaci\xf3n, consultor y formador) y para diferentes tipos de sectores vinculados a fabricantes de producto f\xedsico (energ\xeda, maquinaria, automoci\xf3n, electr\xf3nica, electrodom\xe9stico, etc.).")},{name:"Sara S\xe1nchez Ortiz",bio:t.createElement(t.Fragment,null,"Sara tiene experiencia en traducci\xf3n y redacci\xf3n t\xe9cnica que abarca desde manuales t\xe9cnicos hasta documentos de patentes y nuevas tecnolog\xedas, con un enfoque especial en el software. Actualmente desempe\xf1a un papel fundamental como Redactora T\xe9cnica en Omada, donde lidera el proyecto de Localizaci\xf3n del software en ocho idiomas diferentes.")}],u={wrapper:"wrapper_wmcj"};function g(){const e=(0,r.useEventMetadata)();if(!e)return null;const a=e.speakers.map((e=>m.find((a=>a.name===e)))).filter(Boolean);return t.createElement("div",{className:u.wrapper},a.map((e=>t.createElement(d,(0,s.Z)({key:e.name},e)))))}function p(e){return t.createElement(t.Fragment,null,t.createElement(l,null),t.createElement(g,null),t.createElement(i.Z,e))}}}]);