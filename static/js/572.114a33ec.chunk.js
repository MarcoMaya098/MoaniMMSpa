"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[572],{6572:(e,i,r)=>{r.r(i),r.d(i,{default:()=>k});var n=r(9281),t=r(2646),o=r(5406),a=r(9),d=r(1517);const l=(0,a.Ay)("section")`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  align-items: center;
  padding: 3rem 0 6rem;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`,s=(0,a.Ay)("img")`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid ${d.T.white};

  @media only screen and (max-width: 890px) {
    width: 80%;
    justify-self: center;
    margin-bottom: -4rem;
  }
`,p=(0,a.Ay)("div")`
  background: ${d.T.blush};
  border-radius: 0 240px 240px 0;
  margin-left: -6rem;
  padding: 3.5rem 5rem 3.5rem 8.5rem;

  @media only screen and (max-width: 890px) {
    margin-left: 0;
    border-radius: 28px;
    padding: 5.5rem 1.5rem 2.5rem;
    text-align: center;
  }
`,m=(0,a.Ay)("h2")`
  font-size: 40px;
  margin-bottom: 0.75rem;

  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`,c=(0,a.Ay)("p")`
  max-width: 40ch;

  @media only screen and (max-width: 890px) {
    margin: 0 auto 1rem;
  }
`,x=(0,a.Ay)("ol")`
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
    color: ${d.T.ink};
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
    border: 1px solid ${d.T.pink};
    color: ${d.T.pink};
    font-family: ${d.l.display};
    font-size: 15px;
  }

  @media only screen and (max-width: 890px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`,h=(0,a.Ay)("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: center;
  margin-top: 1.5rem;

  @media only screen and (max-width: 890px) {
    justify-content: center;
  }
`,g=a.AH`
  display: inline-block;
  border-radius: 999px;
  padding: 13px 28px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`,f=(0,a.Ay)("a")`
  ${g}
  background: ${d.T.pink};
  color: ${d.T.white};

  &:hover {
    background: ${d.T.pinkHover};
    color: ${d.T.white};
  }
`,y=(0,a.Ay)("a")`
  color: ${d.T.navy};
  font-weight: 500;
  border-bottom: 1px solid ${d.T.pink};

  &:hover {
    color: ${d.T.pink};
  }
`;var b=r(579);const u=["bookStep1","bookStep2","bookStep3"],k=(0,n.C)()((e=>{let{icon:i,id:r,t:n}=e;return(0,b.jsxs)(l,{id:r,children:[(0,b.jsx)(s,{src:(0,t.d)(i),alt:"",loading:"lazy"}),(0,b.jsxs)(p,{children:[(0,b.jsx)(m,{children:n("bookTitle")}),(0,b.jsx)(c,{children:n("bookText")}),(0,b.jsx)(x,{children:u.map((e=>(0,b.jsx)("li",{children:n(e)},e)))}),(0,b.jsxs)(h,{children:[(0,b.jsx)(f,{href:o.dm,target:"_blank",rel:"noopener noreferrer",children:n("bookWhatsApp")}),(0,b.jsxs)(y,{href:o.PN,children:[n("bookCall")," ",o.Gx]})]})]})]})}))}}]);
//# sourceMappingURL=572.114a33ec.chunk.js.map