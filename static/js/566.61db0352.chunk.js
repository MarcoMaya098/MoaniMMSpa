"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[185,566],{1319:(e,t,n)=>{n.d(t,{A:()=>C});var r,o=n(8168),i=n(4467),c=n(2284),a=n(5544),s=n(8139),l=n.n(s),d=n(5043),p=n(5296),u=n(2931),f=function(){if(!(0,u.A)()||!window.document.documentElement)return!1;if(void 0!==r)return r;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r};var m=["xxl","xl","lg","md","sm","xs"],h={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=new Map,v=-1,y={};const A={matchHandlers:{},dispatch:function(e){return y=e,x.forEach((function(e){return e(y)})),x.size>=1},subscribe:function(e){return x.size||this.register(),v+=1,x.set(v,e),e(y),v},unsubscribe:function(e){x.delete(e),x.size||this.unregister()},unregister:function(){var e=this;Object.keys(h).forEach((function(t){var n=h[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),x.clear()},register:function(){var e=this;Object.keys(h).forEach((function(t){var n=h[t],r=function(n){var r=n.matches;e.dispatch((0,o.A)((0,o.A)({},y),(0,i.A)({},t,r)))},c=window.matchMedia(n);c.addListener(r),e.matchHandlers[n]={mql:c,listener:r},r(c)}))}};var g=n(9592),b=n(5150),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};(0,g.P)("top","middle","bottom","stretch"),(0,g.P)("start","end","center","space-around","space-between","space-evenly");function j(e,t){var n=d.useState("string"===typeof e?e:""),r=(0,a.A)(n,2),o=r[0],i=r[1];return d.useEffect((function(){!function(){if("string"===typeof e&&i(e),"object"===(0,c.A)(e))for(var n=0;n<m.length;n++){var r=m[n];if(t[r]){var o=e[r];if(void 0!==o)return void i(o)}}}()}),[JSON.stringify(e),t]),o}var O=d.forwardRef((function(e,t){var n=e.prefixCls,r=e.justify,s=e.align,u=e.className,h=e.style,x=e.children,v=e.gutter,y=void 0===v?0:v,g=e.wrap,O=w(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=d.useContext(p.QO),k=C.getPrefixCls,E=C.direction,$=d.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,a.A)($,2),P=S[0],T=S[1],z=d.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),N=(0,a.A)(z,2),H=N[0],M=N[1],L=j(s,H),R=j(r,H),B=function(){var e=d.useState(!1),t=(0,a.A)(e,2),n=t[0],r=t[1];return d.useEffect((function(){r(f())}),[]),n}(),G=d.useRef(y);d.useEffect((function(){var e=A.subscribe((function(e){M(e);var t=G.current||0;(!Array.isArray(t)&&"object"===(0,c.A)(t)||Array.isArray(t)&&("object"===(0,c.A)(t[0])||"object"===(0,c.A)(t[1])))&&T(e)}));return function(){return A.unsubscribe(e)}}),[]);var I=k("row",n),W=function(){var e=[void 0,void 0];return(Array.isArray(y)?y:[y,void 0]).forEach((function(t,n){if("object"===(0,c.A)(t))for(var r=0;r<m.length;r++){var o=m[r];if(P[o]&&void 0!==t[o]){e[n]=t[o];break}}else e[n]=t})),e}(),q=l()(I,(0,i.A)((0,i.A)((0,i.A)((0,i.A)({},"".concat(I,"-no-wrap"),!1===g),"".concat(I,"-").concat(R),R),"".concat(I,"-").concat(L),L),"".concat(I,"-rtl"),"rtl"===E),u),F={},Q=null!=W[0]&&W[0]>0?W[0]/-2:void 0,D=null!=W[1]&&W[1]>0?W[1]/-2:void 0;if(Q&&(F.marginLeft=Q,F.marginRight=Q),B){var J=(0,a.A)(W,2);F.rowGap=J[1]}else D&&(F.marginTop=D,F.marginBottom=D);var V=(0,a.A)(W,2),_=V[0],K=V[1],U=d.useMemo((function(){return{gutter:[_,K],wrap:g,supportFlexGap:B}}),[_,K,g,B]);return d.createElement(b.A.Provider,{value:U},d.createElement("div",(0,o.A)({},O,{className:q,style:(0,o.A)((0,o.A)({},F),h),ref:t}),x))}));const C=O},4647:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(4467),o=n(8168),i=n(2284),c=n(8139),a=n.n(c),s=n(5043),l=n(5296),d=n(5150),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var u=["xs","sm","md","lg","xl","xxl"];const f=s.forwardRef((function(e,t){var n=s.useContext(l.QO),c=n.getPrefixCls,f=n.direction,m=s.useContext(d.A),h=m.gutter,x=m.wrap,v=m.supportFlexGap,y=e.prefixCls,A=e.span,g=e.order,b=e.offset,w=e.push,j=e.pull,O=e.className,C=e.children,k=e.flex,E=e.style,$=p(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=c("col",y),P={};u.forEach((function(t){var n={},c=e[t];"number"===typeof c?n.span=c:"object"===(0,i.A)(c)&&(n=c||{}),delete $[t],P=(0,o.A)((0,o.A)({},P),(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)({},"".concat(S,"-").concat(t,"-").concat(n.span),void 0!==n.span),"".concat(S,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),"".concat(S,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),"".concat(S,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),"".concat(S,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),"".concat(S,"-rtl"),"rtl"===f))}));var T=a()(S,(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)({},"".concat(S,"-").concat(A),void 0!==A),"".concat(S,"-order-").concat(g),g),"".concat(S,"-offset-").concat(b),b),"".concat(S,"-push-").concat(w),w),"".concat(S,"-pull-").concat(j),j),O,P),z={};if(h&&h[0]>0){var N=h[0]/2;z.paddingLeft=N,z.paddingRight=N}if(h&&h[1]>0&&!v){var H=h[1]/2;z.paddingTop=H,z.paddingBottom=H}return k&&(z.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(k),!1!==x||z.minWidth||(z.minWidth=0)),s.createElement("div",(0,o.A)({},$,{style:(0,o.A)((0,o.A)({},z),E),className:T,ref:t}),C)}))},5150:(e,t,n)=>{n.d(t,{A:()=>r});const r=(0,n(5043).createContext)({})},5639:(e,t,n)=>{n.d(t,{$:()=>a});var r=n(9),o=n(1517);const i=(0,r.Ay)("button")`
  background: ${e=>e.color||o.T.pink};
  color: ${e=>e.color?o.T.navy:o.T.white};
  font-family: ${o.l.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  width: 100%;
  border: 1px solid ${o.T.pink};
  border-radius: 999px;
  padding: 13px 28px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 220px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${o.T.white};
    border-color: ${o.T.pinkHover};
    background-color: ${o.T.pinkHover};
  }
`;var c=n(579);const a=e=>{let{color:t,children:n,onClick:r}=e;return(0,c.jsx)(i,{color:t,onClick:r,children:n})}},6566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(4647),o=n(1319),i=n(3614),c=n(9281),a=n(5639),s=n(2646),l=n(2582),d=n(9);const p=(0,d.Ay)("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`,u=(0,d.Ay)("p")`
  margin: 1.5rem 0 1rem 0;
`,f=(0,d.Ay)(o.A)`
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,m=(0,d.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 1rem;
  }
`,h=(0,d.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,x=(0,d.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,v=(0,d.Ay)("p")`
  font-size: 13px;
`,y=(0,d.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,A=(0,d.Ay)("section")`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 0rem 0 1rem;
  }
`,g=(0,d.Ay)(l.N_)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;var b=n(579);const w=(0,c.C)()((e=>{let{icon:t,title:n,content:c,section:l,button:d,buttonShowMore:w,t:j,id:O,direction:C}=e;return(0,b.jsx)(p,{style:{marginBottom:"30px"},children:(0,b.jsx)(i.zW,{direction:C,triggerOnce:!0,children:(0,b.jsxs)(f,{justify:"space-between",align:"middle",id:O,direction:C,children:[(0,b.jsxs)(r.A,{lg:11,md:11,sm:11,xs:24,children:[(0,b.jsxs)(m,{children:[(0,b.jsx)("h6",{children:j(n)}),(0,b.jsx)(u,{children:j(c)}),"right"===C?(0,b.jsx)(y,{children:"object"===typeof d&&d.map(((e,t)=>(0,b.jsx)(a.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})(e.toredirect),children:j(e.title)},t)))}):(0,b.jsx)(h,{children:(0,b.jsx)(o.A,{justify:"space-between",children:"object"===typeof l&&l.map(((e,t)=>(0,b.jsxs)(r.A,{span:11,children:[(0,b.jsx)(s.A,{src:e.icon,width:"60px",height:"60px"}),(0,b.jsx)(x,{children:j(e.title)}),(0,b.jsx)(v,{children:j(e.content)})]},t)))})})]}),w&&(0,b.jsx)(g,{to:`/${w}`,children:(0,b.jsx)(A,{children:(0,b.jsx)(a.$,{children:j("ShowMore")})})})]}),(0,b.jsx)(r.A,{lg:11,md:11,sm:12,xs:24,children:(0,b.jsx)(s.A,{src:t,width:"100%",height:"100%"})})]})})})}))}}]);
//# sourceMappingURL=566.61db0352.chunk.js.map