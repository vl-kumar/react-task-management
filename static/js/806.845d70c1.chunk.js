"use strict";(self.webpackChunktask_manager_app=self.webpackChunktask_manager_app||[]).push([[806],{579:(t,e,o)=>{o.d(e,{Z:()=>c});var i=o(791),n=o(867);const r=n.ZP.div((t=>({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center"}))),s=n.ZP.div((t=>({backgroundColor:"white",padding:"20px",paddingTop:"30px",paddingBottom:"30px",borderRadius:"8px",position:"relative",width:"80%",maxWidth:"500px"})));n.ZP.div((t=>({position:"absolute",top:"10px",right:"10px",background:"transparent",border:"none",fontSize:"18px",cursor:"pointer"})));var a=o(184);const c=(0,i.memo)((t=>{let{children:e}=t;return(0,a.jsx)(r,{children:(0,a.jsx)(s,{children:e})})}))},324:(t,e,o)=>{o.d(e,{Z:()=>s});var i=o(791);const n=o(867).ZP.div((t=>({display:"flex",flexDirection:"column",width:"calc(100% - ".concat(t.theme.spacings.xl,")"),margin:"auto",height:"100%",backgroundColor:t.theme.colors.tertiary,minHeight:"calc(100vh - ".concat(t.theme.spacings.xl," - 60px)"),maxHeight:"calc(100vh - ".concat(t.theme.spacings.xl," - 60px)"),marginTop:t.theme.spacings.xmd,marginBottom:t.theme.spacings.xmd,borderRadius:t.theme.spacings.sm,overflowY:"auto"})));var r=o(184);const s=(0,i.memo)((t=>{let{children:e}=t;return(0,r.jsx)(n,{children:e})}))},564:(t,e,o)=>{o.d(e,{T:()=>n});var i=o(434);const n=()=>(0,i.I0)()},159:(t,e,o)=>{o.d(e,{C:()=>i});const i=o(434).v9},806:(t,e,o)=>{o.r(e),o.d(e,{default:()=>D});var i=o(159),n=o(867);const r=n.ZP.div((t=>({display:"flex",flexDirection:"column",maxWidth:"100%",minHeight:"100%",margin:t.theme.spacings.lg}))),s=n.ZP.div((t=>({display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",width:"100%",maxWidth:"100%",paddingBottom:t.theme.spacings.sm})));var a=o(791);const c=n.ZP.div((t=>({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",maxWidth:"100%",borderBottom:"1px solid ".concat(t.theme.colors.border),paddingTop:t.theme.spacings.sm,paddingBottom:t.theme.spacings.sm})));var d=o(755),l=o(564),m=o(439),p=o(184);const g=t=>{let{category:e,editCategoryItem:o}=t;const i=(0,l.T)();return(0,p.jsxs)(c,{children:[(0,p.jsx)("div",{children:e.title}),(0,p.jsxs)("div",{children:[(0,p.jsx)(d.dY,{width:"24px",className:"icon",onClick:function(){o(e)}}),(0,p.jsx)(d.pJ,{width:"24px",className:"icon",onClick:function(){i((0,m.uu)({id:e.id}))}})]})]})};var h=o(261),x=o(579);const u=n.ZP.form((t=>({display:"flex",flexDirection:"column",alignItems:"center"}))),f=n.ZP.input((t=>({display:"flex",width:"95%",fontSize:"14px",padding:"12px 15px",border:"1px solid #cecece",outline:"none",fontWeight:400,maxWidth:"95%"}))),y=n.ZP.h2((t=>({fontWeight:500}))),v=n.ZP.div((t=>({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"95%",marginBottom:t.theme.spacings.md}))),b=n.ZP.button((t=>({width:"60%",fontSize:t.theme.fontSizes.body2,padding:"12px 15px",alignItems:"center",backgroundColor:"#1644e2",marginTop:"1rem",backgroundImage:"linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",boxShadow:"rgba(0, 0, 0, 0.25) 0 3px 8px",color:t.theme.colors.textColor,borderRadius:t.theme.spacings.xs,fontWeight:600}))),C=n.ZP.h3((t=>({marginRight:t.theme.spacings.xmd}))),j=n.ZP.div((t=>({display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",width:"95%",marginBottom:t.theme.spacings.md}))),w={title:"",id:""},Z=(0,a.memo)((t=>{let{selectedEditCategory:e,resetEditCategory:o}=t;const[i,n]=(0,a.useState)(!1),[r,s]=(0,a.useState)(e||w);(0,a.useEffect)((()=>{e&&s(e)}),[e]);const c=(0,l.T)();return(0,p.jsxs)("div",{children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(C,{children:"Categories"}),(0,p.jsx)(d.dt,{onClick:()=>{n(!0)},width:"32px",height:"32px",className:"icon"})]}),(i||e)&&(0,p.jsx)(x.Z,{children:(0,p.jsxs)(u,{onSubmit:t=>{t.preventDefault(),e?(()=>{const t={...r};c((0,m.ht)({category:t})),o()})():(()=>{const t={...r,id:(0,h.Z)()};c((0,m.i8)({category:t}))})(),s(w),n(!1),s(w)},className:"form-container",children:[(0,p.jsxs)(v,{children:[(0,p.jsx)(y,{children:e?"Edit Category":"Add Category"}),(0,p.jsx)(d.Tw,{onClick:()=>{n(!1),o()},className:"icon",width:24,height:24})]}),(0,p.jsx)(f,{type:"text",placeholder:"Category",value:r.title,name:"title",onChange:t=>{s({...r,title:t.target.value})},maxLength:35}),(0,p.jsx)(b,{type:"submit",className:"button",disabled:!r.title,value:"Submit",children:"Submit"})]})})]})})),k=(0,a.memo)((()=>{const t=(0,i.C)((t=>t.category.categoryList)),[e,o]=(0,a.useState)(void 0),n=t=>{o(t)},c=(0,a.useMemo)((()=>t.map((t=>(0,p.jsx)(g,{category:t,editCategoryItem:n})))),[t]);return(0,p.jsxs)(r,{children:[(0,p.jsx)(s,{children:(0,p.jsx)(Z,{selectedEditCategory:e,resetEditCategory:()=>{o(void 0)}})}),c]})}));var I=o(324),S=o(383);const D=()=>{const t=(0,l.T)();return(0,a.useEffect)((()=>{if(localStorage.getItem("tasks")){const e=JSON.parse(localStorage.getItem("tasks")||"")||[],o=JSON.parse(localStorage.getItem("categories")||"")||[];t((0,S.hC)({taskList:e})),t((0,m.BG)({categoryList:o}))}}),[t]),(0,p.jsx)(I.Z,{children:(0,p.jsx)(k,{})})}},261:(t,e,o)=>{o.d(e,{Z:()=>d});const i={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let n;const r=new Uint8Array(16);function s(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}const a=[];for(let l=0;l<256;++l)a.push((l+256).toString(16).slice(1));function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]}const d=function(t,e,o){if(i.randomUUID&&!e&&!t)return i.randomUUID();const n=(t=t||{}).random||(t.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){o=o||0;for(let t=0;t<16;++t)e[o+t]=n[t];return e}return c(n)}}}]);
//# sourceMappingURL=806.845d70c1.chunk.js.map