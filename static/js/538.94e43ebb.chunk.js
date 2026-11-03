"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[538],{8538:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var o=i(5043),r=i(2646);const s=i(8887).Ay.div`
  position: fixed;
  bottom: 100px;
  right: 34px;
  width: 40px;
  height: 40px;
  background: rgb(241, 242, 243);  color: white;
  border-radius: 50%;
  display: flex;
  opacity: ${t=>{let{show:e}=t;return e?1:0}};
  visibility: ${t=>{let{show:e}=t;return e?"visible":"hidden"}};
  transform: translateY(${t=>{let{show:e}=t;return e?"0":"12px"}});
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;

  &:hover {
    background: rgb(224, 224, 224);
  }

  @media (max-width: 768px) {
    right: 26px;
    bottom: 84px;
    width: 35px;
    height: 35px;
  }
`;var n=i(579);const l=()=>{const[t,e]=(0,o.useState)(!1),i=(0,o.useCallback)((()=>{const t=window.scrollY,i=document.querySelector("footer");let o=t>350;if(i){const t=i.getBoundingClientRect(),e=window.innerHeight;t.top<e&&(o=!1)}e(o)}),[]);(0,o.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[i]);return(0,n.jsx)(s,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},show:t,children:(0,n.jsx)(r.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.94e43ebb.chunk.js.map