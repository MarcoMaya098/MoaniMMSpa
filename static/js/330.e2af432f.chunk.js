"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[330],{3330:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var i=t(9281),o=t(2646),a=t(8714),n=t(8887),s=t(2582),l=t(1517),d=t(2955);const c=(0,n.Ay)("section")`
  padding: 4rem 0 5rem;
`,m=(0,n.Ay)("h2")`
  margin-bottom: 0.75rem;
`,p=(0,n.Ay)("p")`
  max-width: 60ch;
  margin-bottom: 2.75rem;
`,h=(0,n.Ay)("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    gap: 2.75rem;
  }
`,x=(0,n.Ay)(s.N_)`
  display: flex;
  flex-direction: column;
  color: inherit;

  &:hover {
    color: inherit;
  }
`,f=(0,n.Ay)("div")`
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  aspect-ratio: 4 / 5;

  @media only screen and (max-width: 890px) {
    aspect-ratio: 4 / 3;
  }
`,b=(0,n.Ay)("img")`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.9s ${d.Rl};

  ${x}:hover &,
  ${x}:focus-visible & {
    transform: scale(1.06);
  }
`,y=(0,n.Ay)("h3")`
  font-size: 24px;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 890px) {
    font-size: 24px;
  }
`,g=(0,n.Ay)("p")`
  font-size: 16px;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,v=(0,n.Ay)("span")`
  margin-top: auto;
  align-self: flex-start;
  font-weight: 500;
  color: ${l.T.navy};
  padding-bottom: 2px;
  border-bottom: 1px solid ${l.T.pink};
  transition: color 0.25s ease;

  &::after {
    content: "→";
    display: inline-block;
    margin-left: 0.4rem;
    transition: transform 0.35s ${d.Rl};
  }

  ${x}:hover &,
  ${x}:focus-visible & {
    color: ${l.T.pink};
  }

  ${x}:hover &::after,
  ${x}:focus-visible &::after {
    transform: translateX(4px);
  }
`;var u=t(579);const w=(0,i.C)()((e=>{let{title:r,content:t,items:i,id:n,t:s}=e;return(0,u.jsxs)(c,{id:n,children:[(0,u.jsx)(m,{"data-reveal":!0,children:s(r)}),(0,u.jsx)(p,{"data-reveal":!0,style:(0,a.pL)(100),children:s(t)}),(0,u.jsx)(h,{children:i.map(((e,r)=>(0,u.jsxs)(x,{to:`/${e.redirect}`,"data-reveal":!0,style:(0,a.pL)(140*r),children:[(0,u.jsx)(f,{children:(0,u.jsx)(b,{src:(0,o.d)(e.icon),alt:"",loading:"lazy"})}),(0,u.jsx)(y,{children:s(e.title)}),(0,u.jsx)(g,{children:s(e.text)}),(0,u.jsx)(v,{children:s("ShowMore")})]},e.redirect)))})]})}))}}]);
//# sourceMappingURL=330.e2af432f.chunk.js.map