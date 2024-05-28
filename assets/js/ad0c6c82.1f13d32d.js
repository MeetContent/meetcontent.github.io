"use strict";(self.webpackChunkmeet_content=self.webpackChunkmeet_content||[]).push([[1436],{7184:(e,n,t)=>{t.d(n,{A:()=>N});var s=t(6540),i=t(4848);function o(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=n.filter((e=>e!==t)),r=t?.props.children;return{mdxAdmonitionTitle:r,rest:o.length>0?(0,i.jsx)(i.Fragment,{children:o}):null}}(e.children),o=e.title??n;return{...e,...o&&{title:o},children:t}}var r=t(8215),a=t(6297),l=t(9051);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:s}=e;return(0,i.jsx)("div",{className:(0,r.A)(l.G.common.admonition,l.G.common.admonitionType(n),c.admonition,t),children:s})}function h(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:c.admonitionContent,children:n}):null}function p(e){const{type:n,icon:t,title:s,children:o,className:r}=e;return(0,i.jsxs)(d,{type:n,className:r,children:[s||t?(0,i.jsx)(h,{title:s,icon:t}):null,(0,i.jsx)(u,{children:o})]})}function m(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,i.jsx)(m,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,i.jsx)(p,{...x,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}function w(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,i.jsx)(w,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function f(e){return(0,i.jsx)(p,{...g,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}function y(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,i.jsx)(y,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,i.jsx)(p,{...k,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}function v(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const A={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function T(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const M={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const I={...{note:j,tip:f,info:b,warning:function(e){return(0,i.jsx)(p,{...A,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...C,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(j,{title:"secondary",...e}),important:e=>(0,i.jsx)(b,{title:"important",...e}),success:e=>(0,i.jsx)(f,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{...M,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})}}};function N(e){const n=o(e),t=(s=n.type,I[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),I.info));var s;return(0,i.jsx)(t,{...n})}},9496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>w,frontMatter:()=>h,metadata:()=>p,toc:()=>x});var s,i,o=t(4848),r=t(8453),a=t(6540);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},l.apply(this,arguments)}const c=e=>{let{title:n,titleId:t,...o}=e;return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":t},o),n?a.createElement("title",{id:t},n):null,s||(s=a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),i||(i=a.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"})))};var d=t(7184);const h={},u="Hello, content community!",p={type:"mdx",permalink:"/full-day",source:"@site/src/pages/full-day.mdx",title:"Hello, content community!",description:"With a truly broken heart we received the news about the soap! conference not",frontMatter:{},unlisted:!1},m={},x=[{value:"Agenda",id:"agenda",level:2},{value:"Sign up",id:"sign-up",level:2},{value:"Workshops",id:"workshops",level:3},{value:"Presentations",id:"presentations",level:3},{value:"Let&#39;s stay in touch",id:"lets-stay-in-touch",level:2},{value:"About our sponsors",id:"about-our-sponsors",level:2},{value:"FAQ",id:"faq",level:2}];function j(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hello-content-community",children:"Hello, content community!"}),"\n",(0,o.jsx)(n.p,{children:"With a truly broken heart we received the news about the soap! conference not\nhappening this year. But once the first wave of sadness has passed, we wiped\naway our tears, blew off the dust from our keyboards, and decided we want to\nmeet all of you this year anyway!"}),"\n",(0,o.jsxs)(n.p,{children:["Join us at ",(0,o.jsx)(n.strong,{children:"#ContentDay"}),"!"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"What?"})," A full-day MeetContent event, with workshops and presentations."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"When?"})," June 8, 2024"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Where?"})," Institute of English Studies at Jagiellonian University, Al. Adama Mickiewicza 9A, Krak\xf3w"]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,o.jsxs)(d.A,{type:"note",icon:null,title:null,children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"10:00\u201312:00"})," ",(0,o.jsx)(n.a,{href:"#workshops",children:"Workshops"})]}),(0,o.jsxs)(n.p,{children:["\u2615 ",(0,o.jsx)(n.em,{children:"Coffee break"})]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"01:00\u201301:30"})," Introduction"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"01:35\u201302:20"})," Visual design in technical communication"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"02:25\u201303:10"})," To commit or not to commit \u2013 Considering estimation in a Teach Writing team"]}),(0,o.jsxs)(n.p,{children:["\u2615 ",(0,o.jsx)(n.em,{children:"Coffee break"})]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"03:35\u201304:20"})," Hats, snakes, and portals or how to DITA without DITA"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"04:25\u201305:10"})," Technical Authors and Illustrators Association"]}),(0,o.jsxs)(n.p,{children:["\u2615 ",(0,o.jsx)(n.em,{children:"Coffee break"})]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"05:35\u201305:55"})," The floor is yours!"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"06:00\u201306:45"})," Enterprise UX. How to design software that helps people do their jobs?"]}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"06:45\u201307:00"})," Closing remarks"]})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"sign-up",children:"Sign up"}),"\n",(0,o.jsx)(n.p,{children:"Are you as excited as we are? Join us for workshops and presentations!"}),"\n",(0,o.jsx)(n.h3,{id:"workshops",children:"Workshops"}),"\n",(0,o.jsx)(n.p,{children:"The workshops run in parallel, which means you can attend only one of them.\nThe number of spots is limited and on a first-come, first-serve basis."}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"Design (thinking) a doc site"})," with Pawe\u0142 Kowaluk (Guidewire Software)"]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the workshop"})," ",(0,o.jsx)("br",{}),"\nLearn how to apply design thinking to creating a doc website. We will create a persona and use that to create the sitemap for our documentation site.\nYou don't need to bring a laptop, we will work with traditional resources like post-it notes :)",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.strong,{children:"About the trainer"})," ",(0,o.jsx)("br",{}),"\nPawe\u0142 Kowaluk has been in the tech writing industry since 2008. He has worked as a tech writer, manager, project manager, consultant, salesman, instructor, and doc tools developer. Currently, he does technical writing for Guidewire Software and serves as a board member at ITCQF.\nAdditionally, Pawe\u0142 explores the technical side of content creation as a co-founder and host of the ",(0,o.jsx)(n.a,{href:"https://techwriterkoduje.pl",children:"https://techwriterkoduje.pl"})," podcast. ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/pawel-kowaluk/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Available spots"}),": 12 ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.strong,{children:"Sign up form"}),": ",(0,o.jsx)(n.a,{href:"https://forms.gle/cM5NFSK2Tyc9wmxe9",children:"https://forms.gle/cM5NFSK2Tyc9wmxe9"})]})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"Writing and designing"})," with Pawe\u0142 Ch\u0142odnicki (Docplanner)"]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the workshop"})," ",(0,o.jsx)("br",{}),"\nWe'll start with a blank page and leave the room with your first mobile app design. Along the way, you'll learn how words shape digital experiences and what tools are used to achieve that.\nFor this workshop, you need to bring a laptop. ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.strong,{children:"About the trainer"})," ",(0,o.jsx)("br",{}),"\nPawe\u0142 Ch\u0142odnicki is a T-shaped Content Designer, powered by content-first approach, Product Design skills, and entrepreneur history. He is especially interested in scaling style guides, design systems and patterns.\nPawe\u0142 loves sharing knowledge and networking! After work, Pawe\u0142 is a family guy, book worm, coffee geek, motorbike rider, and a rebel \ud83e\udd18\ud83e\udd18 ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/pawelchlodnicki/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"}),"\n",(0,o.jsx)(n.a,{href:"https://www.instagram.com/chlodno_design/",children:"Instagram"}),(0,o.jsx)(c,{className:"inlineSVG"}),"\n",(0,o.jsx)(n.a,{href:"https://www.chlodno.com",children:"Website"}),(0,o.jsx)(c,{className:"inlineSVG"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Available spots"}),": 20 ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.strong,{children:"Sign up form"}),": ",(0,o.jsx)(n.a,{href:"https://forms.gle/cM5NFSK2Tyc9wmxe9",children:"https://forms.gle/cM5NFSK2Tyc9wmxe9"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"presentations",children:"Presentations"}),"\n",(0,o.jsxs)(n.p,{children:["Missed the registration for the workshop? Don't like waking up in the morning? No worries, you can still attend the presentations in the afternoon!\nSign up at: ",(0,o.jsx)(n.a,{href:"https://forms.gle/ZQnfTGCLJr3MwM7s9",children:"https://forms.gle/ZQnfTGCLJr3MwM7s9"})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"Visual design in technical communication"})," with Maciej Chuda\u0144ski (Etteplan Poland)"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(n.p,{children:"In this presentation, we will explore the laws of human perception and their impact on technical documentation. We will discuss principles, patterns, and practices that can be leveraged to design and organize content in a more easy-to-understand manner."}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the speaker"}),": I'm a Visual Designer focused on technical communication, and I aim to enrich complex topics with easy-to-follow illustrations, 3D graphics, and animations.",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/maciekchudanski/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"})]})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"To commit or not to commit - Considering estimation in a Tech Writing team"})," with Monika Mrozek (Ocado Technology)"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(n.p,{children:"As a team we had no reliable measure to prove that we needed more people."}),(0,o.jsx)(n.p,{children:"We needed a method to confidently state our capacity and act as a predictable partner to the functions we cooperated with.\nWe had no way to prove how our workload changes over time - a simple 'closed task count' was not an option as we had no way to compare the task size."}),(0,o.jsx)(n.p,{children:"We set off with an assumption that although a writer\u2019s work varies greatly from task to task, there are repeatable components of that work that we can identify and isolate."}),(0,o.jsx)(n.p,{children:"We organized a workshop and made it into a team effort."}),(0,o.jsx)(n.p,{children:"We said that there are tasks that are smaller or larger than others. We then set the list of all the types of documentation updates we produce in an order: this is bigger than this, this is smaller and this is more less equal to that.\nWe now have 2 months worth of data."}),(0,o.jsx)(n.p,{children:"Main takeaways"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Solve real problems using estimation. Don't do this for the sake of doing it."}),"\n",(0,o.jsx)(n.li,{children:"Engage the team and agree this collectively."}),"\n",(0,o.jsx)(n.li,{children:"Estimation is a work in progress and you must be prepared to RECALIBRATE. Treat it as an ongoing experiment. Present your findings, draw conclusions, make hypotheses and confirm or refute them by continuing to gather data."}),"\n",(0,o.jsx)(n.li,{children:"This is a great opportunity for people to validate their thinking against the other views in the team."}),"\n"]}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the speaker"}),": A Lead Technical Writer and team manager, who is always keen on trying new things in technical communication. Most recently, a huge evangelist of using the Product Management perspective on docs, life and beyond.",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/monika-mrozek/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"})]})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"Hats, snakes, and portals or: How to DITA without DITA"})," with Pawe\u0142 Martin (Ocado Technology)"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(n.p,{children:"The presentation is about various technical aspects of implementing developer portal documentation, with special consideration to using Markdown snippets to replicate some DITA functionalities."}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the speaker"}),":"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"MA in cyberpunk literature."}),"\n",(0,o.jsx)(n.li,{children:"Translator and editor turned translation project manager turned technical writer."}),"\n",(0,o.jsx)(n.li,{children:"At work, obsessed with documentation structure, style guides, and synergy."}),"\n",(0,o.jsx)(n.li,{children:"After hours, obsessed with sci-fi, especially cyberpunk, prehistoric animals, and all things Korean..."}),"\n",(0,o.jsx)(n.li,{children:"... as well as more tangible things, such as coffee, tattoos, and skateboards."}),"\n",(0,o.jsx)(n.li,{children:"Has been known to write poetry and perform in a community theatre."}),"\n",(0,o.jsx)(n.li,{children:"Listens to all kinds of rock music, from psychedelic to heavy metal."}),"\n",(0,o.jsx)(n.li,{children:"Favorite places are Wroc\u0142aw, Poland, Marsaskala, Malta, and Lisbon, Portugal."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/pawel-martin/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"})]}),"\n"]})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"Technical Authors and Illustrators Association"})," with \u0141ukasz Rybka (inPoint - \u0141ukasz Rybka)"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(n.p,{children:"This presentation discusses starting a professional association for content creators. Such an association would not only create standards, best practices, and guidelines for content creation, but also ensure content creators and graphic designers are protected by law and recognized in the content world. During the presentation, we will go through its goals and potential steps we should take to kick off this initiative."}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the speaker"}),": Technical Writer and technical documentation specialist of over 10 years, now with his own company.",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/saiit-polska-03a008308/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"})]})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:[(0,o.jsx)(n.strong,{children:"Enterprise UX. How to design software that helps people do their jobs?"})," with Dominika \u0141acheta (Guidewire Software)"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(n.p,{children:"Every company needs software to operate and bring in money, so the user experience of these tools is essential to achieving the goals.\nDuring the meeting, I will talk about the importance and key challenges of designing enterprise UX from the perspective of a cloud platform designer.\nI will also present the main differences between enterprise and consumer UX, and explain why user interface should always be like... a good joke."}),(0,o.jsx)("hr",{}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"About the speaker"}),": I am a UX designer with a background in architecture.\nI\u2019ve been working in Guidewire Software for almost 3 years trying to transform challenges into user-friendly and intuitive designs.",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.a,{href:"https://www.linkedin.com/in/dominikalacheta/",children:"LinkedIn"}),(0,o.jsx)(c,{className:"inlineSVG"})]})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(n.strong,{children:"...and the floor is yours!"})}),(0,o.jsx)("div",{children:(0,o.jsx)(n.p,{children:"Have you discovered a great new tool? Read a fascinating book? Or maybe you're looking for a new team member?\nWhatever you want to share with the community, this is your time! Sign up at the event."})})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"lets-stay-in-touch",children:"Let's stay in touch"}),"\n",(0,o.jsx)(n.p,{children:"Our lovely content community and beautiful Cracow in June, can it get any better than\nthat? Well, who knows? We might have a few surprises up in our sleeve \ud83e\udd2b\nMore details coming soon, so keep this page bookmarked!"}),"\n",(0,o.jsx)("hr",{}),"\n",(0,o.jsxs)(n.p,{children:["Want to reach out to us directly? Drop us a message at ",(0,o.jsx)(n.a,{href:"mailto:krk.meetcontent@gmail.com",children:"krk.meetcontent@gmail.com"}),"."]}),"\n",(0,o.jsx)("hr",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"about-our-sponsors",children:"About our sponsors"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"#ContentDay"})," is sponsored by ",(0,o.jsx)(n.a,{href:"https://apify.com/",children:"Apify"})," and ",(0,o.jsx)(n.a,{href:"https://www.box.com",children:"Box"}),"!"]}),"\n",(0,o.jsx)(n.p,{children:"Apify is the only full-stack cloud platform where developers can build, deploy,\nand publish web scraping, data extraction, and web automation tools. Use 1,500+\nready-made tools from Apify Store or create your own and earn passive income from\nsharing them with other users. Apify is also behind open-source web scraping library Crawlee."}),"\n",(0,o.jsx)(n.p,{children:"Box dates back to 2005 when it started making it easy to access information from\nanywhere and collaborate with anyone. Today, Box is proud to call 97,000\ncompanies and 68% of the Fortune 500 our customers \u2014 but that\u2019s just the start.\nAs work continues to evolve, Box stays focused on delivering innovation to\norganizations across the globe and blowing their customers' minds every day."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:["Is ",(0,o.jsx)(n.strong,{children:"#ContentDay"})," a free event?"]}),(0,o.jsx)("div",{children:(0,o.jsx)(n.p,{children:"Yes! The event is completely free of charge but requires registration."})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Do I have to attend the entire event?"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"#ContentDay"})," consists of two parts:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"workshops in the morning,"}),"\n",(0,o.jsx)(n.li,{children:"presentations in the afternoon."}),"\n"]}),(0,o.jsx)(n.p,{children:"You can participate in both parts or only one of them.\nJust remember to register!"})]})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Is there a limited number of spots?"}),(0,o.jsx)("div",{children:(0,o.jsx)(n.p,{children:"For workshops, the number of spots is limited and on a first-come, first-serve basis.\nThe registration is now open!"})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsxs)("summary",{children:["How can I present a topic at ",(0,o.jsx)(n.strong,{children:"#ContentDay"}),"?"]}),(0,o.jsx)("div",{children:(0,o.jsxs)(n.p,{children:["The call for speakers and trainers is now closed. But why don't you speak at one of our future events instead?\nReach out to us at ",(0,o.jsx)(n.a,{href:"mailto:krk.meetcontent@gmail.com",children:"krk.meetcontent@gmail.com"})," and let's talk!"]})})]})]})}function w(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);