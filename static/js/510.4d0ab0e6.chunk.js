"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[510],{1319:(e,t,n)=>{n.d(t,{A:()=>F});var i,r=n(8168),a=n(4467),c=n(2284),o=n(5544),l=n(8139),s=n.n(l),d=n(5043),p=n(5296),u=n(2931),f=function(){if(!(0,u.A)()||!window.document.documentElement)return!1;if(void 0!==i)return i;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),i=1===e.scrollHeight,document.body.removeChild(e),i};var x=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=new Map,g=-1,v={};const y={matchHandlers:{},dispatch:function(e){return v=e,h.forEach((function(e){return e(v)})),h.size>=1},subscribe:function(e){return h.size||this.register(),g+=1,h.set(g,e),e(v),g},unsubscribe:function(e){h.delete(e),h.size||this.unregister()},unregister:function(){var e=this;Object.keys(m).forEach((function(t){var n=m[t],i=e.matchHandlers[n];null===i||void 0===i||i.mql.removeListener(null===i||void 0===i?void 0:i.listener)})),h.clear()},register:function(){var e=this;Object.keys(m).forEach((function(t){var n=m[t],i=function(n){var i=n.matches;e.dispatch((0,r.A)((0,r.A)({},v),(0,a.A)({},t,i)))},c=window.matchMedia(n);c.addListener(i),e.matchHandlers[n]={mql:c,listener:i},i(c)}))}};var A=n(9592),b=n(5150),j=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};(0,A.P)("top","middle","bottom","stretch"),(0,A.P)("start","end","center","space-around","space-between","space-evenly");function w(e,t){var n=d.useState("string"===typeof e?e:""),i=(0,o.A)(n,2),r=i[0],a=i[1];return d.useEffect((function(){!function(){if("string"===typeof e&&a(e),"object"===(0,c.A)(e))for(var n=0;n<x.length;n++){var i=x[n];if(t[i]){var r=e[i];if(void 0!==r)return void a(r)}}}()}),[JSON.stringify(e),t]),r}var C=d.forwardRef((function(e,t){var n=e.prefixCls,i=e.justify,l=e.align,u=e.className,m=e.style,h=e.children,g=e.gutter,v=void 0===g?0:g,A=e.wrap,C=j(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),F=d.useContext(p.QO),O=F.getPrefixCls,T=F.direction,E=d.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,o.A)(E,2),k=S[0],D=S[1],M=d.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),R=(0,o.A)(M,2),P=R[0],z=R[1],$=w(l,P),H=w(i,P),N=function(){var e=d.useState(!1),t=(0,o.A)(e,2),n=t[0],i=t[1];return d.useEffect((function(){i(f())}),[]),n}(),L=d.useRef(v);d.useEffect((function(){var e=y.subscribe((function(e){z(e);var t=L.current||0;(!Array.isArray(t)&&"object"===(0,c.A)(t)||Array.isArray(t)&&("object"===(0,c.A)(t[0])||"object"===(0,c.A)(t[1])))&&D(e)}));return function(){return y.unsubscribe(e)}}),[]);var B=O("row",n),G=function(){var e=[void 0,void 0];return(Array.isArray(v)?v:[v,void 0]).forEach((function(t,n){if("object"===(0,c.A)(t))for(var i=0;i<x.length;i++){var r=x[i];if(k[r]&&void 0!==t[r]){e[n]=t[r];break}}else e[n]=t})),e}(),I=s()(B,(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(B,"-no-wrap"),!1===A),"".concat(B,"-").concat(H),H),"".concat(B,"-").concat($),$),"".concat(B,"-rtl"),"rtl"===T),u),W={},q=null!=G[0]&&G[0]>0?G[0]/-2:void 0,Q=null!=G[1]&&G[1]>0?G[1]/-2:void 0;if(q&&(W.marginLeft=q,W.marginRight=q),N){var J=(0,o.A)(G,2);W.rowGap=J[1]}else Q&&(W.marginTop=Q,W.marginBottom=Q);var V=(0,o.A)(G,2),K=V[0],U=V[1],X=d.useMemo((function(){return{gutter:[K,U],wrap:A,supportFlexGap:N}}),[K,U,A,N]);return d.createElement(b.A.Provider,{value:X},d.createElement("div",(0,r.A)({},C,{className:I,style:(0,r.A)((0,r.A)({},W),m),ref:t}),h))}));const F=C},2510:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var i=n(5043),r=n(4647),a=n(1319),c=n(3614),o=n(9281),l=n(5639),s=n(2646),d=n(9);const p=(0,d.Ay)("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 2rem;
  }
`,u=(0,d.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,f=(0,d.Ay)(a.A)`
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,x=(0,d.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,m=(0,d.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,h=(0,d.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,g=(0,d.Ay)("p")`
  font-size: 13px;
`,v=(0,d.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var y=n(579);const A=(0,o.C)()((e=>{let{icon:t,title:n,content:i,section:o,button:d,t:A,id:b,direction:j}=e;return(0,y.jsx)(p,{children:(0,y.jsx)(c.zW,{direction:j,triggerOnce:!0,children:(0,y.jsxs)(f,{justify:"space-between",align:"middle",id:b,direction:j,children:[(0,y.jsx)(r.A,{lg:11,md:11,sm:12,xs:24,children:(0,y.jsx)(s.A,{src:t,width:"100%",height:"100%"})}),(0,y.jsx)(r.A,{lg:11,md:11,sm:11,xs:24,children:(0,y.jsxs)(x,{children:[(0,y.jsx)("h6",{children:A(n)}),(0,y.jsx)(u,{children:A(i)}),"right"===j?(0,y.jsx)(v,{children:"object"===typeof d&&d.map(((e,t)=>(0,y.jsx)(l.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})(e.toredirect),children:A(e.title)},t)))}):(0,y.jsx)(m,{children:(0,y.jsx)(a.A,{justify:"space-between",children:"object"===typeof o&&o.map(((e,t)=>(0,y.jsxs)(r.A,{span:11,children:[(0,y.jsx)(s.A,{src:e.icon,width:"60px",height:"60px"}),(0,y.jsx)(h,{children:A(e.title)}),(0,y.jsx)(g,{children:A(e.content)})]},t)))})})]})})]})})})})),b=(0,i.lazy)((()=>n.e(35).then(n.bind(n,9416)))),j=(0,i.lazy)((()=>Promise.resolve().then(n.bind(n,1766)))),w=(0,i.lazy)((()=>n.e(538).then(n.bind(n,8538)))),C=(0,i.lazy)((()=>n.e(185).then(n.bind(n,6566)))),F=()=>(0,y.jsxs)(j,{children:[(0,y.jsx)(w,{}),(0,y.jsx)(b,{title:"titleBasicServiceContent2",content:"titleBasicServiceContentText2"}),(0,y.jsx)(C,{direction:"left",title:"titleHydraulicFacialContent",content:"titleHydraulicFacialContentText",icon:"facialH.png",id:"HydraulicFacial"}),(0,y.jsx)(C,{direction:"right",title:"titlecleanFacialContent",content:"titlecleanFacialContentText",icon:"facialC.png",id:"cleanFacial"}),(0,y.jsx)(C,{direction:"left",title:"titleSpecialFacialDermapenContent",content:"titleSpecialFacialDermapenContentText",icon:"facialDermapen.png",id:"SpecialFacialDermapen"}),(0,y.jsx)(C,{direction:"right",title:"titleSpecialFacialRadioFContent",content:"titleSpecialFacialRadioFContentText",icon:"facialRF.png",id:"SpecialFacialRadioF"}),(0,y.jsx)(C,{direction:"left",title:"titleDespigmentFacialContent",content:"titleDespigmentFacialContentText",icon:"facialDespig.jpg",id:"DespigmentFacial"}),(0,y.jsx)(C,{direction:"right",title:"titleAcneFacialContent",content:"titleAcneFacialContentText",icon:"facialAcne.png",id:"AcneFacial"}),(0,y.jsx)(C,{direction:"left",title:"titleDermaplaningFacialContent",content:"titleDermaplaningFacialContentText",icon:"dermaplaning.png",id:"DermaplaningFacial"}),(0,y.jsx)("hr",{id:"massage"}),(0,y.jsx)(A,{direction:"right",title:"titlerelaxMassageContent",content:"titlerelaxMassageContentText",icon:"massageRelaxing.png",id:"relaxMassage"}),(0,y.jsx)(A,{direction:"left",title:"titleDescMassageContent",content:"titleDescMassageContentText",icon:"massageDesco.png",id:"descMassage"}),(0,y.jsx)(A,{direction:"right",title:"titleReductMassageContent",content:"titleReductMassageContentText",icon:"massageReduce.png",id:"reductMassage"}),(0,y.jsx)(A,{direction:"left",title:"titleLNMassageContent",content:"titleLNMassageContentText",icon:"massageDL.png",id:"LNMassage"})]})},4647:(e,t,n)=>{n.d(t,{A:()=>f});var i=n(4467),r=n(8168),a=n(2284),c=n(8139),o=n.n(c),l=n(5043),s=n(5296),d=n(5150),p=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};var u=["xs","sm","md","lg","xl","xxl"];const f=l.forwardRef((function(e,t){var n=l.useContext(s.QO),c=n.getPrefixCls,f=n.direction,x=l.useContext(d.A),m=x.gutter,h=x.wrap,g=x.supportFlexGap,v=e.prefixCls,y=e.span,A=e.order,b=e.offset,j=e.push,w=e.pull,C=e.className,F=e.children,O=e.flex,T=e.style,E=p(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=c("col",v),k={};u.forEach((function(t){var n={},c=e[t];"number"===typeof c?n.span=c:"object"===(0,a.A)(c)&&(n=c||{}),delete E[t],k=(0,r.A)((0,r.A)({},k),(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},"".concat(S,"-").concat(t,"-").concat(n.span),void 0!==n.span),"".concat(S,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),"".concat(S,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),"".concat(S,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),"".concat(S,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),"".concat(S,"-rtl"),"rtl"===f))}));var D=o()(S,(0,i.A)((0,i.A)((0,i.A)((0,i.A)((0,i.A)({},"".concat(S,"-").concat(y),void 0!==y),"".concat(S,"-order-").concat(A),A),"".concat(S,"-offset-").concat(b),b),"".concat(S,"-push-").concat(j),j),"".concat(S,"-pull-").concat(w),w),C,k),M={};if(m&&m[0]>0){var R=m[0]/2;M.paddingLeft=R,M.paddingRight=R}if(m&&m[1]>0&&!g){var P=m[1]/2;M.paddingTop=P,M.paddingBottom=P}return O&&(M.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(O),!1!==h||M.minWidth||(M.minWidth=0)),l.createElement("div",(0,r.A)({},E,{style:(0,r.A)((0,r.A)({},M),T),className:D,ref:t}),F)}))},5150:(e,t,n)=>{n.d(t,{A:()=>i});const i=(0,n(5043).createContext)({})},5639:(e,t,n)=>{n.d(t,{$:()=>o});var i=n(9),r=n(1517);const a=(0,i.Ay)("button")`
  background: ${e=>e.color||r.T.pink};
  color: ${e=>e.color?r.T.navy:r.T.white};
  font-family: ${r.l.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  width: 100%;
  border: 1px solid ${r.T.pink};
  border-radius: 999px;
  padding: 13px 28px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 220px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${r.T.white};
    border-color: ${r.T.pinkHover};
    background-color: ${r.T.pinkHover};
  }
`;var c=n(579);const o=e=>{let{color:t,children:n,onClick:i}=e;return(0,c.jsx)(a,{color:t,onClick:i,children:n})}}}]);
//# sourceMappingURL=510.4d0ab0e6.chunk.js.map