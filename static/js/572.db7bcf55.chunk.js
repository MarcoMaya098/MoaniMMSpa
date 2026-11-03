"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[572],{6572:(e,r,i)=>{i.r(r),i.d(r,{default:()=>$});var n=i(9281),t=i(2646),a=i(8714),o=i(5406),d=i(8887),l=i(1517),s=i(2955);const p=(0,d.Ay)("section")`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  align-items: center;
  padding: 3rem 0 6rem;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`,m=(0,d.Ay)("img")`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid ${l.T.white};

  @media only screen and (max-width: 890px) {
    width: 80%;
    justify-self: center;
    margin-bottom: -4rem;
  }
`,c=(0,d.Ay)("div")`
  background: ${l.T.blush};
  border-radius: 0 240px 240px 0;
  margin-left: -6rem;
  padding: 3.5rem 5rem 3.5rem 8.5rem;

  @media only screen and (max-width: 890px) {
    margin-left: 0;
    border-radius: 28px;
    padding: 5.5rem 1.5rem 2.5rem;
    text-align: center;
  }
`,x=(0,d.Ay)("h2")`
  font-size: 40px;
  margin-bottom: 0.75rem;

  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`,h=(0,d.Ay)("p")`
  max-width: 40ch;

  @media only screen and (max-width: 890px) {
    margin: 0 auto 1rem;
  }
`,g=(0,d.Ay)("ol")`
  counter-reset: step;
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: grid;
  gap: 0.75rem;

  li {
    counter-increment: step;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    color: ${l.T.ink};
    font-size: 16px;
    text-align: left;
  }

  li::before {
    content: counter(step);
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${l.T.pink};
    color: ${l.T.pink};
    font-family: ${l.l.display};
    font-size: 15px;
  }

  @media only screen and (max-width: 890px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`,f=(0,d.Ay)("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: center;
  margin-top: 1.5rem;

  @media only screen and (max-width: 890px) {
    justify-content: center;
  }
`,y=d.AH`
  display: inline-block;
  border-radius: 999px;
  padding: 13px 28px;
  font-weight: 500;
  ${s.yY}
`,b=(0,d.Ay)("a")`
  ${y}
  background: ${l.T.pink};
  color: ${l.T.white};

  &:hover {
    background: ${l.T.pinkHover};
    color: ${l.T.white};
  }
`,u=(0,d.Ay)("a")`
  color: ${l.T.navy};
  font-weight: 500;
  border-bottom: 1px solid ${l.T.pink};

  &:hover {
    color: ${l.T.pink};
  }
`;var k=i(579);const w=["bookStep1","bookStep2","bookStep3"],$=(0,n.C)()((e=>{let{icon:r,id:i,t:n}=e;return(0,k.jsxs)(p,{id:i,children:[(0,k.jsx)(m,{src:(0,t.d)(r),alt:"",loading:"lazy","data-reveal":"left"}),(0,k.jsxs)(c,{"data-reveal":"right",style:(0,a.pL)(120),children:[(0,k.jsx)(x,{children:n("bookTitle")}),(0,k.jsx)(h,{children:n("bookText")}),(0,k.jsx)(g,{children:w.map(((e,r)=>(0,k.jsx)("li",{"data-reveal":!0,style:(0,a.pL)(400+120*r),children:n(e)},e)))}),(0,k.jsxs)(f,{children:[(0,k.jsx)(b,{href:o.dm,target:"_blank",rel:"noopener noreferrer",children:n("bookWhatsApp")}),(0,k.jsxs)(u,{href:o.PN,children:[n("bookCall")," ",o.Gx]})]})]})]})}))}}]);
//# sourceMappingURL=572.db7bcf55.chunk.js.map