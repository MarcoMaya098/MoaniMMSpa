"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[295,676],{1319:(e,t,r)=>{r.d(t,{A:()=>O});var n,a=r(8168),o=r(4467),i=r(2284),s=r(5544),c=r(8139),l=r.n(c),d=r(5043),u=r(5296),p=r(2931),m=function(){if(!(0,p.A)()||!window.document.documentElement)return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n};var f=["xxl","xl","lg","md","sm","xs"],h={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=new Map,g=-1,v={};const y={matchHandlers:{},dispatch:function(e){return v=e,x.forEach((function(e){return e(v)})),x.size>=1},subscribe:function(e){return x.size||this.register(),g+=1,x.set(g,e),e(v),g},unsubscribe:function(e){x.delete(e),x.size||this.unregister()},unregister:function(){var e=this;Object.keys(h).forEach((function(t){var r=h[t],n=e.matchHandlers[r];null===n||void 0===n||n.mql.removeListener(null===n||void 0===n?void 0:n.listener)})),x.clear()},register:function(){var e=this;Object.keys(h).forEach((function(t){var r=h[t],n=function(r){var n=r.matches;e.dispatch((0,a.A)((0,a.A)({},v),(0,o.A)({},t,n)))},i=window.matchMedia(r);i.addListener(n),e.matchHandlers[r]={mql:i,listener:n},n(i)}))}};var A=r(9592),b=r(5150),j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};(0,A.P)("top","middle","bottom","stretch"),(0,A.P)("start","end","center","space-around","space-between","space-evenly");function w(e,t){var r=d.useState("string"===typeof e?e:""),n=(0,s.A)(r,2),a=n[0],o=n[1];return d.useEffect((function(){!function(){if("string"===typeof e&&o(e),"object"===(0,i.A)(e))for(var r=0;r<f.length;r++){var n=f[r];if(t[n]){var a=e[n];if(void 0!==a)return void o(a)}}}()}),[JSON.stringify(e),t]),a}var C=d.forwardRef((function(e,t){var r=e.prefixCls,n=e.justify,c=e.align,p=e.className,h=e.style,x=e.children,g=e.gutter,v=void 0===g?0:g,A=e.wrap,C=j(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=d.useContext(u.QO),E=O.getPrefixCls,k=O.direction,S=d.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,s.A)(S,2),T=P[0],N=P[1],$=d.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),z=(0,s.A)($,2),q=z[0],F=z[1],H=w(c,q),M=w(n,q),R=function(){var e=d.useState(!1),t=(0,s.A)(e,2),r=t[0],n=t[1];return d.useEffect((function(){n(m())}),[]),r}(),G=d.useRef(v);d.useEffect((function(){var e=y.subscribe((function(e){F(e);var t=G.current||0;(!Array.isArray(t)&&"object"===(0,i.A)(t)||Array.isArray(t)&&("object"===(0,i.A)(t[0])||"object"===(0,i.A)(t[1])))&&N(e)}));return function(){return y.unsubscribe(e)}}),[]);var L=E("row",r),Y=function(){var e=[void 0,void 0];return(Array.isArray(v)?v:[v,void 0]).forEach((function(t,r){if("object"===(0,i.A)(t))for(var n=0;n<f.length;n++){var a=f[n];if(T[a]&&void 0!==t[a]){e[r]=t[a];break}}else e[r]=t})),e}(),B=l()(L,(0,o.A)((0,o.A)((0,o.A)((0,o.A)({},"".concat(L,"-no-wrap"),!1===A),"".concat(L,"-").concat(M),M),"".concat(L,"-").concat(H),H),"".concat(L,"-rtl"),"rtl"===k),p),D={},I=null!=Y[0]&&Y[0]>0?Y[0]/-2:void 0,J=null!=Y[1]&&Y[1]>0?Y[1]/-2:void 0;if(I&&(D.marginLeft=I,D.marginRight=I),R){var Q=(0,s.A)(Y,2);D.rowGap=Q[1]}else J&&(D.marginTop=J,D.marginBottom=J);var W=(0,s.A)(Y,2),K=W[0],U=W[1],V=d.useMemo((function(){return{gutter:[K,U],wrap:A,supportFlexGap:R}}),[K,U,A,R]);return d.createElement(b.A.Provider,{value:V},d.createElement("div",(0,a.A)({},C,{className:B,style:(0,a.A)((0,a.A)({},D),h),ref:t}),x))}));const O=C},1676:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(1319),a=r(4647),o=r(9281),i=r(3614),s=r(5043),c=r(6545);const l={name:"",email:"",message:""};function d(e){let t={};return e.name||(t.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email address is required",e.message||(t.message="Message is required"),t}var u=r(5639),p=r(9);const m=(0,p.Ay)("p")`
  margin-top: 1.5rem;
`,f=(0,p.Ay)("div")`
  position: relative;
  max-width: 700px;
`,h=(0,p.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var x=r(579);const g=(0,o.C)()((e=>{let{title:t,content:r,t:n}=e;return(0,x.jsxs)(f,{children:[(0,x.jsx)("h6",{children:n(t)}),(0,x.jsx)(h,{children:(0,x.jsx)(m,{children:n(r)})})]})})),v=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,y=(0,p.Ay)("input")`
  font-size: 0.875rem;
`,A=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,b=(0,p.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,j=(0,p.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,o.C)()((e=>{let{name:t,placeholder:r,onChange:n,t:a}=e;return(0,x.jsxs)(v,{children:[(0,x.jsx)(j,{htmlFor:t,children:a(t)}),(0,x.jsx)(y,{placeholder:a(r),name:t,id:t,onChange:n})]})})),C=(0,o.C)()((e=>{let{name:t,placeholder:r,onChange:n,t:a}=e;return(0,x.jsxs)(A,{children:[(0,x.jsx)(j,{htmlFor:t,children:a(t)}),(0,x.jsx)(b,{placeholder:a(r),id:t,name:t,onChange:n})]})})),O=(0,p.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,E=(0,p.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,k=(0,p.Ay)("span")`
  display: block;
  font-weight: 600;
  color: #F36898;
  height: 0.775rem;
  padding: 0 0.675rem;
`,S=(0,p.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,P=(0,o.C)()((e=>{let{title:t,content:r,id:o,t:p}=e;const{values:m,errors:f,handleChange:h,handleSubmit:v}=(e=>{const[t,r]=(0,s.useState)({values:{...l},errors:{...l}});return{handleChange:e=>{e.persist();const{name:t,value:n}=e.target;r((e=>({...e,values:{...e.values,[t]:n},errors:{...e.errors,[t]:""}})))},handleSubmit:async n=>{n.preventDefault();const a=t.values,o=e(a);r((e=>({...e,errors:o})));try{Object.values(o).every((e=>""===e))&&((await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).ok?(n.target.reset(),r((()=>({values:{...l},errors:{...l}}))),c.A.success({message:"Success",description:"Your message has been sent!"})):c.A.error({message:"Error",description:"There was an error sending your message, please try again later."}))}catch(i){c.A.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:t.values,errors:t.errors}})(d),y=e=>{let{type:t}=e;const r=f[t];return(0,x.jsx)(k,{children:r})};return(0,x.jsx)(O,{id:o,children:(0,x.jsxs)(n.A,{justify:"space-between",align:"middle",children:[(0,x.jsx)(a.A,{lg:12,md:11,sm:24,xs:24,children:(0,x.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,x.jsx)(g,{title:t,content:r})})}),(0,x.jsx)(a.A,{lg:12,md:12,sm:24,xs:24,children:(0,x.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,x.jsxs)(E,{autoComplete:"off",onSubmit:v,children:[(0,x.jsxs)(a.A,{span:24,children:[(0,x.jsx)(w,{type:"text",name:"name",placeholder:"Your Name",value:m.name||"",onChange:h}),(0,x.jsx)(y,{type:"name"})]}),(0,x.jsxs)(a.A,{span:24,children:[(0,x.jsx)(w,{type:"text",name:"email",placeholder:"Your Email",value:m.email||"",onChange:h}),(0,x.jsx)(y,{type:"email"})]}),(0,x.jsxs)(a.A,{span:24,children:[(0,x.jsx)(C,{placeholder:"Your Message",value:m.message||"",name:"message",onChange:h}),(0,x.jsx)(y,{type:"message"})]}),(0,x.jsx)(S,{children:(0,x.jsx)(u.$,{name:"submit",children:p("Submit")})})]})})})]})})}))},4647:(e,t,r)=>{r.d(t,{A:()=>m});var n=r(4467),a=r(8168),o=r(2284),i=r(8139),s=r.n(i),c=r(5043),l=r(5296),d=r(5150),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var p=["xs","sm","md","lg","xl","xxl"];const m=c.forwardRef((function(e,t){var r=c.useContext(l.QO),i=r.getPrefixCls,m=r.direction,f=c.useContext(d.A),h=f.gutter,x=f.wrap,g=f.supportFlexGap,v=e.prefixCls,y=e.span,A=e.order,b=e.offset,j=e.push,w=e.pull,C=e.className,O=e.children,E=e.flex,k=e.style,S=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=i("col",v),T={};p.forEach((function(t){var r={},i=e[t];"number"===typeof i?r.span=i:"object"===(0,o.A)(i)&&(r=i||{}),delete S[t],T=(0,a.A)((0,a.A)({},T),(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)({},"".concat(P,"-").concat(t,"-").concat(r.span),void 0!==r.span),"".concat(P,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),"".concat(P,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),"".concat(P,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),"".concat(P,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),"".concat(P,"-rtl"),"rtl"===m))}));var N=s()(P,(0,n.A)((0,n.A)((0,n.A)((0,n.A)((0,n.A)({},"".concat(P,"-").concat(y),void 0!==y),"".concat(P,"-order-").concat(A),A),"".concat(P,"-offset-").concat(b),b),"".concat(P,"-push-").concat(j),j),"".concat(P,"-pull-").concat(w),w),C,T),$={};if(h&&h[0]>0){var z=h[0]/2;$.paddingLeft=z,$.paddingRight=z}if(h&&h[1]>0&&!g){var q=h[1]/2;$.paddingTop=q,$.paddingBottom=q}return E&&($.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),!1!==x||$.minWidth||($.minWidth=0)),c.createElement("div",(0,a.A)({},S,{style:(0,a.A)((0,a.A)({},$),k),className:N,ref:t}),O)}))},5150:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(5043).createContext)({})},5639:(e,t,r)=>{r.d(t,{$:()=>s});var n=r(9),a=r(1517);const o=(0,n.Ay)("button")`
  background: ${e=>e.color||a.T.pink};
  color: ${e=>e.color?a.T.navy:a.T.white};
  font-family: ${a.l.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  width: 100%;
  border: 1px solid ${a.T.pink};
  border-radius: 999px;
  padding: 13px 28px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 220px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${a.T.white};
    border-color: ${a.T.pinkHover};
    background-color: ${a.T.pinkHover};
  }
`;var i=r(579);const s=e=>{let{color:t,children:r,onClick:n}=e;return(0,i.jsx)(o,{color:t,onClick:n,children:r})}}}]);
//# sourceMappingURL=676.94ba9913.chunk.js.map