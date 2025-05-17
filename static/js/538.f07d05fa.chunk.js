"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[538],{8538:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var i=o(5043),n=o(2646);const r=o(9).Ay.div`
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: rgb(241, 242, 243);  color: white;
  border-radius: 50%;
  display: ${e=>{let{show:t}=e;return t?"flex":"none"}};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease;

  &:hover {
    background: rgb(224, 224, 224);
  }

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 35px;
    height: 35px;
  }
`;var s=o(579);const c=()=>{const[e,t]=(0,i.useState)(!1),o=(0,i.useCallback)((()=>{const e=window.scrollY,o=document.querySelector("footer");let i=e>350;if(o){const e=o.getBoundingClientRect(),t=window.innerHeight;e.top<t&&(i=!1)}t(i)}),[]);(0,i.useEffect)((()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)})),[o]);return(0,s.jsx)(r,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},show:e,children:(0,s.jsx)(n.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.f07d05fa.chunk.js.map