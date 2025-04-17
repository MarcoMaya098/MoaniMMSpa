"use strict";(self.webpackChunkmoani=self.webpackChunkmoani||[]).push([[538],{8538:(e,i,n)=>{n.r(i),n.d(i,{default:()=>a});var o=n(5043),t=n(2646);const s=(0,n(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=n(579);const a=()=>{const[e,i]=(0,o.useState)(!1),n=(0,o.useCallback)((()=>{const n=window.scrollY;!e&&n>350?i(!0):n<=350&&i(!1)}),[e]);(0,o.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[n]);return(0,r.jsx)(s,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(t.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.ce4998d7.chunk.js.map