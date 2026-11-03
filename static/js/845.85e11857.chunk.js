"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[845],{5845:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var i=n(5043),r=n(9927),a=n(9281),o=n(2646),l=n(8887),s=n(1517),c=n(2955);const d=l.i7`
  from {
    opacity: 0;
    transform: translate3d(48px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`,p=(0,l.Ay)("section")`
  padding: 1rem 0 5rem;
`,m=(0,l.Ay)("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,g=(0,l.Ay)("p")`
  margin: 0;
  font-size: 15px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`,h=(0,l.Ay)("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
`,u=(0,l.Ay)("span")`
  font-family: ${s.l.display};
  letter-spacing: 0.12em;
  color: ${s.T.navy};
  margin-right: 0.5rem;
  font-variant-numeric: tabular-nums;
`,x=(0,l.Ay)("button")`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${s.T.pink};
  background: transparent;
  color: ${s.T.navy};
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.35s ${c.Rl},
    opacity 0.25s ease;

  &:hover:not(:disabled) {
    background: ${s.T.pink};
    color: ${s.T.white};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`,f=(0,l.Ay)("div")`
  display: flex;
  column-gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: ${e=>e.$dragging?"none":"x mandatory"};
  scroll-behavior: ${e=>e.$dragging?"auto":"smooth"};
  cursor: ${e=>e.$dragging?"grabbing":"grab"};
  user-select: none;
  padding: 0.5rem 0.25rem 1.5rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (hover: none) {
    cursor: auto;
  }
`,y=(0,l.Ay)("div")`
  position: absolute;
  inset: auto 0 0 0;
  padding: 4rem 1.5rem 1.5rem;
  background: linear-gradient(to top, rgba(24, 33, 109, 0.88) 0%, rgba(24, 33, 109, 0.55) 55%, transparent 100%);
  color: ${s.T.white};
  transition: padding 0.6s ${c.Rl};
`,b=(0,l.Ay)("h3")`
  font-size: 24px;
  color: ${s.T.white};
  margin: 0;
`,v=(0,l.Ay)("div")`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.6s ${c.Rl}, opacity 0.4s ease;

  > * {
    overflow: hidden;
  }
`,w=(0,l.Ay)("p")`
  margin: 0;
  padding-top: 0.75rem;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.9);
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`,$=(0,l.Ay)("article")`
  position: relative;
  flex: 0 0 clamp(250px, 31%, 360px);
  aspect-ratio: 3 / 4;
  border-radius: 22px;
  overflow: hidden;
  scroll-snap-align: start;
  background: ${s.T.blush};
  opacity: 0;

  ${p}.is-revealed & {
    animation: ${d} 0.9s ${c.Rl} both;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    transition: transform 1.2s ${c.Rl}, filter 0.6s ease;
  }

  &:hover img,
  &:focus-within img {
    transform: scale(1.08);
    filter: saturate(1.1);
  }

  &:hover ${v}, &:focus-within ${v} {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  &:hover ${y}, &:focus-within ${y} {
    padding-top: 6rem;
  }

  &:focus-visible {
    outline: 2px solid ${s.T.navy};
    outline-offset: 3px;
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 78%;
  }
`,j=(0,l.Ay)("div")`
  height: 2px;
  background: ${s.T.blushDeep};
  border-radius: 2px;
  overflow: hidden;
`,k=(0,l.Ay)("div")`
  height: 100%;
  background: ${s.T.pink};
  transform-origin: left center;
  transition: transform 0.3s ease-out;
`;var A=n(579);const C=(0,a.C)()((e=>{let{items:t,t:n}=e;const r=(0,i.useRef)(null),a=(0,i.useRef)(null),[l,s]=(0,i.useState)(!1),[c,d]=(0,i.useState)(0),[C,T]=(0,i.useState)(1),P=()=>{const e=r.current,t=null===e||void 0===e?void 0:e.firstElementChild;return e&&t?t.offsetWidth+parseFloat(getComputedStyle(e).columnGap||"0"):0},S=(0,i.useCallback)((()=>{const e=r.current;if(!e)return;const n=e.scrollWidth-e.clientWidth;d(n>0?e.scrollLeft/n:1);const i=P(),a=n-e.scrollLeft<2;i&&T(a?t.length:Math.round(e.scrollLeft/i)+1)}),[t.length]);(0,i.useEffect)((()=>(S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S))),[S]);const z=e=>{var t;return null===(t=r.current)||void 0===t?void 0:t.scrollBy({left:e*P(),behavior:"smooth"})},R=()=>{a.current=null,s(!1)};return(0,A.jsxs)(p,{"data-reveal":!0,children:[(0,A.jsxs)(m,{children:[(0,A.jsx)(g,{children:n("productsHint")}),(0,A.jsxs)(h,{children:[(0,A.jsxs)(u,{children:[String(C).padStart(2,"0")," / ",String(t.length).padStart(2,"0")]}),(0,A.jsx)(x,{type:"button",onClick:()=>z(-1),disabled:c<=.01,"aria-label":n("carouselPrev"),children:"\u2190"}),(0,A.jsx)(x,{type:"button",onClick:()=>z(1),disabled:c>=.99,"aria-label":n("carouselNext"),children:"\u2192"})]})]}),(0,A.jsx)(f,{ref:r,$dragging:l,onScroll:S,onPointerDown:e=>{"mouse"===e.pointerType&&r.current&&(a.current={x:e.clientX,left:r.current.scrollLeft},r.current.setPointerCapture(e.pointerId),s(!0))},onPointerMove:e=>{a.current&&r.current&&(r.current.scrollLeft=a.current.left-(e.clientX-a.current.x))},onPointerUp:R,onPointerCancel:R,tabIndex:0,role:"region","aria-label":n("titleProductContent"),children:t.map(((e,t)=>(0,A.jsxs)($,{id:e.id,tabIndex:0,style:{animationDelay:90*Math.min(t,5)+"ms"},children:[(0,A.jsx)("img",{src:(0,o.d)(e.icon),alt:n(e.title),loading:"lazy",draggable:!1}),(0,A.jsxs)(y,{children:[(0,A.jsx)(b,{children:n(e.title)}),(0,A.jsx)(v,{children:(0,A.jsx)(w,{children:n(e.content)})})]})]},e.id)))}),(0,A.jsx)(j,{"aria-hidden":"true",children:(0,A.jsx)(k,{style:{transform:`scaleX(${Math.max(c,.04)})`}})})]})})),T=(0,i.lazy)((()=>Promise.resolve().then(n.bind(n,1766)))),P=(0,i.lazy)((()=>n.e(538).then(n.bind(n,8538)))),S=[{title:"D+S\xe9rum",content:"titleHydraulicFacialContentText",icon:"D+Serum.jpeg",id:"d-plus-serum"},{title:"M S\xe9rum",content:"titlecleanFacialContentText",icon:"M Serum.jpeg",id:"m-serum"},{title:"G\xe9nesis 1",content:"titleSpecialFacialDermapenContentText",icon:"G\xe9nesis 1.jpeg",id:"genesis-1"},{title:"G\xe9nesis 2",content:"titleSpecialFacialRadioFContentText",icon:"G\xe9nesis 2.jpeg",id:"genesis-2"},{title:"Yanka C",content:"titleDespigmentFacialContentText",icon:"Yanka C.jpeg",id:"yanka-c"},{title:"AH8 Axtaxantina",content:"titleAcneFacialContentText",icon:"AH8 Axtaxantina.jpeg",id:"ah8-axtaxantina"},{title:"Porcelaine 50+",content:"titleDermaplaningFacialContentText",icon:"Porcelaine 50+.jpeg",id:"porcelaine-50-plus"},{title:"Porcelaine 360",content:"titleAcneFacialContentText",icon:"Porcelaine 360.jpeg",id:"porcelaine-360"},{title:"Porcelaine Powder 30",content:"titleDermaplaningFacialContentText",icon:"Porcelaine Powder 30.jpeg",id:"porcelaine-powder-30"},{title:"Protector solar en Mousse 50+",content:"titleAcneFacialContentText",icon:"Protector solar en Mousse 50+.jpeg",id:"protector-solar-en-mousse-50-plus"},{title:"Protector solar URIAGE 50+",content:"titleDermaplaningFacialContentText",icon:"Protector solar URIAGE.jpeg",id:"protector-solar-uriage-50-plus"}],z=()=>(0,A.jsxs)(T,{children:[(0,A.jsx)(P,{}),(0,A.jsx)(r.A,{title:"titleProductContent",content:"titleProductContentText"}),(0,A.jsx)(C,{items:S})]})},9927:(e,t,n)=>{n.d(t,{W:()=>w,A:()=>$});var i=n(9281),r=n(8714),a=n(8887),o=n(1517),l=n(2955);const s=a.i7`
  from {
    transform: translate3d(0, 105%, 0);
  }
  to {
    transform: none;
  }
`,c=a.i7`
  from {
    opacity: 0;
    transform: translate3d(0, 14px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`,d=a.i7`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,p=(0,a.Ay)("header")`
  text-align: center;
  padding: 4.5rem 0 2.5rem;
  max-width: 720px;
  margin: 0 auto;

  @media only screen and (max-width: 890px) {
    padding: 3rem 0 1.5rem;
  }
`,m=(0,a.Ay)("span")`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${o.T.pink};
  margin-bottom: 1rem;
  animation: ${c} 0.8s ${l.Rl} both;
`,g=(0,a.Ay)("h1")`
  font-size: 64px;
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 890px) {
    font-size: 44px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 36px;
  }
`,h=(0,a.Ay)("span")`
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
`,u=(0,a.Ay)("p")`
  max-width: 56ch;
  margin: 0 auto;
  animation: ${c} 0.9s ${l.Rl} both;

  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    margin: 2rem auto 0;
    background: ${o.T.pink};
    transform-origin: center;
    animation: ${d} 0.9s ${l.Rl} both;
    animation-delay: inherit;
  }
`,x=(0,a.Ay)("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3.5rem 0 1rem;

  /* Clear both the site header and the sticky group tabs when scrolled to. */
  && {
    scroll-margin-top: 150px;
  }
`,f=(0,a.Ay)("span")`
  font-family: ${o.l.display};
  font-size: 88px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px ${o.T.pink};

  @media only screen and (max-width: 890px) {
    font-size: 60px;
  }
`,y=(0,a.Ay)("h2")`
  font-family: ${o.l.display};
  font-size: 32px;
  margin: 0;
  white-space: nowrap;
`,b=(0,a.Ay)("span")`
  flex: 1;
  height: 1px;
  background: ${o.T.blushDeep};
`;var v=n(579);const w=(0,i.C)()((e=>{let{title:t,id:n,count:i,t:a}=e;return(0,v.jsxs)(x,{id:n,children:[void 0!==i&&(0,v.jsx)(f,{"data-reveal":"zoom","aria-hidden":"true",children:String(i).padStart(2,"0")}),(0,v.jsx)(y,{"data-reveal":"left",style:(0,r.pL)(120),children:a(t)}),(0,v.jsx)(b,{"data-reveal":"line",style:(0,r.pL)(300)})]})})),$=(0,i.C)()((e=>{let{title:t,content:n,t:i}=e;const r=i(t).split(" ");return(0,v.jsxs)(p,{children:[(0,v.jsx)(m,{children:"Moani Spa"}),(0,v.jsx)(g,{"aria-label":i(t),children:r.map(((e,t)=>(0,v.jsx)(h,{"aria-hidden":"true",style:{animationDelay:150+110*t+"ms"},children:(0,v.jsx)("span",{children:e})},t)))}),(0,v.jsx)(u,{style:{animationDelay:300+110*r.length+"ms"},children:i(n)})]})}))}}]);
//# sourceMappingURL=845.85e11857.chunk.js.map