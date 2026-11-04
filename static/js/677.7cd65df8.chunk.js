"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[677],{3636:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(5043),a=n(9281),r=n(2646),l=n(8714),o=n(8887),s=n(1517),d=n(2955);const c=(0,o.Ay)("section")`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas: ${e=>e.$reverse?'"body media"':'"media body"'};
  align-items: center;
  gap: 4.5rem;
  padding: 3.5rem 0;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    grid-template-areas: "media" "body";
    gap: 1.75rem;
    padding: 2rem 0;
  }
`,p=(0,o.Ay)("div")`
  grid-area: media;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: ${s.T.blush};
  aspect-ratio: 4 / 3;
`,m=(0,o.Ay)("div")`
  position: absolute;
  inset: -8% 0;
  transform: translate3d(0, var(--parallax, 0%), 0);
  will-change: transform;
`,g=(0,o.Ay)("div")`
  width: 100%;
  height: 100%;
  transition: transform 1.2s ${d.Rl};

  ${p}:hover & {
    transform: scale(1.04);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }
`,x=(0,o.Ay)("div")`
  grid-area: body;
  max-width: 480px;
`,h=(0,o.Ay)("span")`
  display: block;
  font-family: ${s.l.display};
  font-size: 15px;
  letter-spacing: 0.2em;
  color: ${s.T.pink};
  margin-bottom: 0.75rem;
`,u=(0,o.Ay)("h2")`
  font-size: 40px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`,f=(0,o.Ay)("span")`
  display: block;
  width: 64px;
  height: 2px;
  background: ${s.T.pink};
  margin-bottom: 1.25rem;
`,y=(0,o.Ay)("p")`
  margin-bottom: 0;
`;var v=n(579);const b=["clip","clip-circle","clip-left","zoom","clip-right"],w=(0,a.C)()((e=>{let{title:t,content:n,icon:a,id:o,index:s,t:d}=e;const w=s%2===0,C=s%3===0?w?"right":"left":"up",j=(0,i.useRef)(null);return(0,i.useEffect)((()=>{var e;const t=j.current;if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let n=0;const i=()=>{n=0;const e=t.getBoundingClientRect(),i=(e.top+e.height/2)/window.innerHeight-.5;t.style.setProperty("--parallax",6*Math.max(-1,Math.min(1,i))+"%")},a=()=>{n||(n=requestAnimationFrame(i))};let r=!1;const l=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&!r?(window.addEventListener("scroll",a,{passive:!0}),r=!0,i()):!t.isIntersecting&&r&&(window.removeEventListener("scroll",a),r=!1)}));return l.observe(null!==(e=t.parentElement)&&void 0!==e?e:t),()=>{l.disconnect(),window.removeEventListener("scroll",a),cancelAnimationFrame(n)}}),[]),(0,v.jsxs)(c,{id:o,$reverse:w,children:[(0,v.jsx)(p,{"data-reveal":b[(s-1)%b.length],children:(0,v.jsx)(m,{ref:j,children:(0,v.jsx)(g,{children:(0,v.jsx)("img",{src:(0,r.d)(a),alt:d(t),loading:"lazy"})})})}),(0,v.jsxs)(x,{children:[(0,v.jsx)(h,{"data-reveal":C,style:(0,l.pL)(200),children:String(s).padStart(2,"0")}),(0,v.jsx)(u,{"data-reveal":C,style:(0,l.pL)(280),children:d(t)}),(0,v.jsx)(f,{"data-reveal":"line",style:(0,l.pL)(520)}),(0,v.jsx)(y,{"data-reveal":C,style:(0,l.pL)(380),children:d(n)})]})]})}))},7677:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var i=n(5043),a=n(9927),r=n(3636),l=n(9281),o=n(8714),s=n(8887),d=n(1517),c=n(2955);const p=(0,s.Ay)("nav")`
  position: sticky;
  top: 92px;
  z-index: 800;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 1rem;
  pointer-events: none;

  @media only screen and (max-width: 890px) {
    top: 84px;
  }
`,m=(0,s.Ay)("div")`
  position: relative;
  display: inline-flex;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid ${d.T.blushDeep};
  box-shadow: 0 10px 30px -18px rgba(24, 33, 109, 0.45);
  pointer-events: auto;
`,g=(0,s.Ay)("span")`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 0;
  border-radius: 999px;
  background: ${d.T.pink};
  transition: transform 0.55s ${c.Rl}, width 0.55s ${c.Rl};
`,x=(0,s.Ay)("button")`
  position: relative;
  z-index: 1;
  border: 0;
  background: none;
  padding: 10px 26px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: ${e=>e.$active?d.T.white:d.T.navy};
  transition: color 0.35s ease;

  &:hover {
    color: ${e=>e.$active?d.T.white:d.T.pink};
  }
`;var h=n(579);const u=(0,l.C)()((e=>{let{groups:t,t:n}=e;const[a,r]=(0,i.useState)(0),[l,s]=(0,i.useState)({left:0,width:0}),d=(0,i.useRef)([]);return(0,i.useEffect)((()=>{let e=0;const n=()=>{e=0;const n=.4*window.innerHeight;let i=0;t.forEach(((e,t)=>{const a=document.getElementById(e.id);a&&a.getBoundingClientRect().top<n&&(i=t)})),r(i)},i=()=>{e||(e=requestAnimationFrame(n))};return n(),window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(e)}}),[t]),(0,i.useLayoutEffect)((()=>{var e;const t=()=>{const e=d.current[a];e&&s({left:e.offsetLeft,width:e.offsetWidth})};return t(),null===(e=document.fonts)||void 0===e||e.ready.then(t),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[a,n]),(0,h.jsx)(p,{"data-reveal":!0,style:(0,o.pL)(500),children:(0,h.jsxs)(m,{children:[(0,h.jsx)(g,{style:{transform:`translateX(${l.left}px)`,width:l.width},"aria-hidden":"true"}),t.map(((e,t)=>(0,h.jsx)(x,{ref:e=>{d.current[t]=e},type:"button",$active:t===a,"aria-current":t===a?"true":void 0,onClick:()=>{var t;return null===(t=document.getElementById(e.id))||void 0===t?void 0:t.scrollIntoView({behavior:"smooth"})},children:n(e.label)},e.id)))]})})})),f=(0,i.lazy)((()=>Promise.resolve().then(n.bind(n,1766)))),y=(0,i.lazy)((()=>n.e(538).then(n.bind(n,8538)))),v=[{title:"titleHydraulicFacialContent",content:"titleHydraulicFacialContentText",icon:"facialH.png",id:"HydraulicFacial"},{title:"titlecleanFacialContent",content:"titlecleanFacialContentText",icon:"facialC.png",id:"cleanFacial"},{title:"titleSpecialFacialDermapenContent",content:"titleSpecialFacialDermapenContentText",icon:"facialDermapen.png",id:"SpecialFacialDermapen"},{title:"titleSpecialFacialRadioFContent",content:"titleSpecialFacialRadioFContentText",icon:"facialRF.png",id:"SpecialFacialRadioF"},{title:"titleDespigmentFacialContent",content:"titleDespigmentFacialContentText",icon:"facialDespig.jpg",id:"DespigmentFacial"},{title:"titleAcneFacialContent",content:"titleAcneFacialContentText",icon:"facialAcne.png",id:"AcneFacial"},{title:"titleDermaplaningFacialContent",content:"titleDermaplaningFacialContentText",icon:"dermaplaning.png",id:"DermaplaningFacial"},{title:"titleRegenerativeFacialContent",content:"titleRegenerativeFacialContentText",icon:"facial.png",id:"RegenerativeFacial"},{title:"titlePdrnFacialContent",content:"titlePdrnFacialContentText",icon:"mascarilla.png",id:"PdrnFacial"}],b=[{title:"titlerelaxMassageContent",content:"titlerelaxMassageContentText",icon:"massageRelaxing.png",id:"relaxMassage"},{title:"titleDescMassageContent",content:"titleDescMassageContentText",icon:"massageDesco.png",id:"descMassage"},{title:"titleReductMassageContent",content:"titleReductMassageContentText",icon:"massageReduce.png",id:"reductMassage"},{title:"titleLNMassageContent",content:"titleLNMassageContentText",icon:"massageDL.png",id:"LNMassage"}],w=[{id:"facials",label:"facialsGroup"},{id:"massage",label:"massagesGroup"}],C=()=>(0,h.jsxs)(f,{children:[(0,h.jsx)(y,{}),(0,h.jsx)(a.A,{title:"titleBasicServiceContent2",content:"titleBasicServiceContentText2"}),(0,h.jsx)(u,{groups:w}),(0,h.jsx)(a.W,{title:"facialsGroup",id:"facials",count:v.length}),v.map(((e,t)=>(0,h.jsx)(r.A,{...e,index:t+1},e.id))),(0,h.jsx)(a.W,{title:"massagesGroup",id:"massage",count:b.length}),b.map(((e,t)=>(0,h.jsx)(r.A,{...e,index:t+1},e.id)))]})},9927:(e,t,n)=>{n.d(t,{W:()=>w,A:()=>C});var i=n(9281),a=n(8714),r=n(8887),l=n(1517),o=n(2955);const s=r.i7`
  from {
    transform: translate3d(0, 105%, 0);
  }
  to {
    transform: none;
  }
`,d=r.i7`
  from {
    opacity: 0;
    transform: translate3d(0, 14px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`,c=r.i7`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,p=(0,r.Ay)("header")`
  text-align: center;
  padding: 4.5rem 0 2.5rem;
  max-width: 720px;
  margin: 0 auto;

  @media only screen and (max-width: 890px) {
    padding: 3rem 0 1.5rem;
  }
`,m=(0,r.Ay)("span")`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${l.T.pink};
  margin-bottom: 1rem;
  animation: ${d} 0.8s ${o.Rl} both;
`,g=(0,r.Ay)("h1")`
  font-size: 64px;
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 890px) {
    font-size: 44px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 36px;
  }
`,x=(0,r.Ay)("span")`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  padding-bottom: 0.08em;
  margin-right: 0.25em;
  animation-delay: inherit;

  &:last-child {
    margin-right: 0;
  }

  span {
    display: inline-block;
    animation: ${s} 1s ${o.Rl} both;
    animation-delay: inherit;
  }
`,h=(0,r.Ay)("p")`
  max-width: 56ch;
  margin: 0 auto;
  animation: ${d} 0.9s ${o.Rl} both;

  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    margin: 2rem auto 0;
    background: ${l.T.pink};
    transform-origin: center;
    animation: ${c} 0.9s ${o.Rl} both;
    animation-delay: inherit;
  }
`,u=(0,r.Ay)("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3.5rem 0 1rem;

  /* Clear both the site header and the sticky group tabs when scrolled to. */
  && {
    scroll-margin-top: 150px;
  }
`,f=(0,r.Ay)("span")`
  font-family: ${l.l.display};
  font-size: 88px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px ${l.T.pink};

  @media only screen and (max-width: 890px) {
    font-size: 60px;
  }
`,y=(0,r.Ay)("h2")`
  font-family: ${l.l.display};
  font-size: 32px;
  margin: 0;
  white-space: nowrap;
`,v=(0,r.Ay)("span")`
  flex: 1;
  height: 1px;
  background: ${l.T.blushDeep};
`;var b=n(579);const w=(0,i.C)()((e=>{let{title:t,id:n,count:i,t:r}=e;return(0,b.jsxs)(u,{id:n,children:[void 0!==i&&(0,b.jsx)(f,{"data-reveal":"zoom","aria-hidden":"true",children:String(i).padStart(2,"0")}),(0,b.jsx)(y,{"data-reveal":"left",style:(0,a.pL)(120),children:r(t)}),(0,b.jsx)(v,{"data-reveal":"line",style:(0,a.pL)(300)})]})})),C=(0,i.C)()((e=>{let{title:t,content:n,t:i}=e;const a=i(t).split(" ");return(0,b.jsxs)(p,{children:[(0,b.jsx)(m,{children:"Moani Spa"}),(0,b.jsx)(g,{"aria-label":i(t),children:a.map(((e,t)=>(0,b.jsx)(x,{"aria-hidden":"true",style:{animationDelay:150+110*t+"ms"},children:(0,b.jsx)("span",{children:e})},t)))}),(0,b.jsx)(h,{style:{animationDelay:300+110*a.length+"ms"},children:i(n)})]})}))}}]);
//# sourceMappingURL=677.7cd65df8.chunk.js.map