"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87],{2087:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(5043),a=i(9927),r=i(3636),o=i(579);const l=(0,n.lazy)((()=>Promise.resolve().then(i.bind(i,1766)))),s=(0,n.lazy)((()=>i.e(538).then(i.bind(i,8538)))),d=[{title:"titleHifuContent",content:"titleHifuContentText",icon:"hifu.png",id:"hifu"},{title:"titleMorpheusContent",content:"titleMorpheusContentText",icon:"morpheous.jpeg",id:"morpheus"},{title:"titleDepilationContent",content:"titleDepilationContentText",icon:"diodo.png",id:"depilation"}],m=()=>(0,o.jsxs)(l,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(a.A,{title:"titleSpecialServiceContent2",content:"titleSpecialServiceContentText2"}),d.map(((e,t)=>(0,o.jsx)(r.A,{...e,index:t+1},e.id)))]})},3636:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(5043),a=i(9281),r=i(2646),o=i(8714),l=i(8887),s=i(1517),d=i(2955);const m=(0,l.Ay)("section")`
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
`,p=(0,l.Ay)("div")`
  grid-area: media;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: ${s.T.blush};
  aspect-ratio: 4 / 3;
`,c=(0,l.Ay)("div")`
  position: absolute;
  inset: -8% 0;
  transform: translate3d(0, var(--parallax, 0%), 0);
  will-change: transform;
`,h=(0,l.Ay)("div")`
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
`,x=(0,l.Ay)("div")`
  grid-area: body;
  max-width: 480px;
`,g=(0,l.Ay)("span")`
  display: block;
  font-family: ${s.l.display};
  font-size: 15px;
  letter-spacing: 0.2em;
  color: ${s.T.pink};
  margin-bottom: 0.75rem;
`,y=(0,l.Ay)("h2")`
  font-size: 40px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`,f=(0,l.Ay)("span")`
  display: block;
  width: 64px;
  height: 2px;
  background: ${s.T.pink};
  margin-bottom: 1.25rem;
`,u=(0,l.Ay)("p")`
  margin-bottom: 0;
`;var b=i(579);const v=["clip","clip-circle","clip-left","zoom","clip-right"],w=(0,a.C)()((e=>{let{title:t,content:i,icon:a,id:l,index:s,t:d}=e;const w=s%2===0,j=s%3===0?w?"right":"left":"up",A=(0,n.useRef)(null);return(0,n.useEffect)((()=>{var e;const t=A.current;if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let i=0;const n=()=>{i=0;const e=t.getBoundingClientRect(),n=(e.top+e.height/2)/window.innerHeight-.5;t.style.setProperty("--parallax",6*Math.max(-1,Math.min(1,n))+"%")},a=()=>{i||(i=requestAnimationFrame(n))};let r=!1;const o=new IntersectionObserver((e=>{let[t]=e;t.isIntersecting&&!r?(window.addEventListener("scroll",a,{passive:!0}),r=!0,n()):!t.isIntersecting&&r&&(window.removeEventListener("scroll",a),r=!1)}));return o.observe(null!==(e=t.parentElement)&&void 0!==e?e:t),()=>{o.disconnect(),window.removeEventListener("scroll",a),cancelAnimationFrame(i)}}),[]),(0,b.jsxs)(m,{id:l,$reverse:w,children:[(0,b.jsx)(p,{"data-reveal":v[(s-1)%v.length],children:(0,b.jsx)(c,{ref:A,children:(0,b.jsx)(h,{children:(0,b.jsx)("img",{src:(0,r.d)(a),alt:d(t),loading:"lazy"})})})}),(0,b.jsxs)(x,{children:[(0,b.jsx)(g,{"data-reveal":j,style:(0,o.pL)(200),children:String(s).padStart(2,"0")}),(0,b.jsx)(y,{"data-reveal":j,style:(0,o.pL)(280),children:d(t)}),(0,b.jsx)(f,{"data-reveal":"line",style:(0,o.pL)(520)}),(0,b.jsx)(u,{"data-reveal":j,style:(0,o.pL)(380),children:d(i)})]})]})}))},9927:(e,t,i)=>{i.d(t,{W:()=>w,A:()=>j});var n=i(9281),a=i(8714),r=i(8887),o=i(1517),l=i(2955);const s=r.i7`
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
`,m=r.i7`
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
`,c=(0,r.Ay)("span")`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${o.T.pink};
  margin-bottom: 1rem;
  animation: ${d} 0.8s ${l.Rl} both;
`,h=(0,r.Ay)("h1")`
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
    animation: ${s} 1s ${l.Rl} both;
    animation-delay: inherit;
  }
`,g=(0,r.Ay)("p")`
  max-width: 56ch;
  margin: 0 auto;
  animation: ${d} 0.9s ${l.Rl} both;

  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    margin: 2rem auto 0;
    background: ${o.T.pink};
    transform-origin: center;
    animation: ${m} 0.9s ${l.Rl} both;
    animation-delay: inherit;
  }
`,y=(0,r.Ay)("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3.5rem 0 1rem;

  /* Clear both the site header and the sticky group tabs when scrolled to. */
  && {
    scroll-margin-top: 150px;
  }
`,f=(0,r.Ay)("span")`
  font-family: ${o.l.display};
  font-size: 88px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px ${o.T.pink};

  @media only screen and (max-width: 890px) {
    font-size: 60px;
  }
`,u=(0,r.Ay)("h2")`
  font-family: ${o.l.display};
  font-size: 32px;
  margin: 0;
  white-space: nowrap;
`,b=(0,r.Ay)("span")`
  flex: 1;
  height: 1px;
  background: ${o.T.blushDeep};
`;var v=i(579);const w=(0,n.C)()((e=>{let{title:t,id:i,count:n,t:r}=e;return(0,v.jsxs)(y,{id:i,children:[void 0!==n&&(0,v.jsx)(f,{"data-reveal":"zoom","aria-hidden":"true",children:String(n).padStart(2,"0")}),(0,v.jsx)(u,{"data-reveal":"left",style:(0,a.pL)(120),children:r(t)}),(0,v.jsx)(b,{"data-reveal":"line",style:(0,a.pL)(300)})]})})),j=(0,n.C)()((e=>{let{title:t,content:i,t:n}=e;const a=n(t).split(" ");return(0,v.jsxs)(p,{children:[(0,v.jsx)(c,{children:"Moani Spa"}),(0,v.jsx)(h,{"aria-label":n(t),children:a.map(((e,t)=>(0,v.jsx)(x,{"aria-hidden":"true",style:{animationDelay:150+110*t+"ms"},children:(0,v.jsx)("span",{children:e})},t)))}),(0,v.jsx)(g,{style:{animationDelay:300+110*a.length+"ms"},children:n(i)})]})}))}}]);
//# sourceMappingURL=87.34e715e0.chunk.js.map