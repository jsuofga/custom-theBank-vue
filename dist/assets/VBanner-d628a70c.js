import{_ as R,D as I,E as A,N as L,H as T,O as i,I as y,P as X,p as k,l as _,v as S,m as s,S as E,n as N,Z as z,q as F,t as x}from"./index-147ec99f.js";import{m as P,u as b,a as j}from"./VContainer-db82988a.js";import{c as q}from"./createSimpleFunctional-a30bb981.js";import{m as w,h as H,x as M,a as O,y as Z,z as G,b as J,c as K,j as Q,A as U,d as W,B as Y,C as $,e as p,w as ee,f as ae}from"./VAvatar-24a81339.js";const te={name:"DisplayRX",props:["rxLabel","rxID"],components:{},setup(){return{stateStore:I()}},data:()=>({}),methods:{selectRX(e,t){this.stateStore.rxSelectedLabel=`${e}`,this.stateStore.selectRX(t),this.$router.push("/videoinputs")}},computed:{}},ne={id:"rx-label"},se={id:"rx-ch-select"};function oe(e,t,a,n,l,o){return A(),L("button",{class:X(["button",{notDetected:n.stateStore.rxParams[a.rxID].chSelect=="not detected"||n.stateStore.rxParams[a.rxID].chSelect=="error"}]),onClick:t[0]||(t[0]=d=>o.selectRX(a.rxLabel,a.rxID))},[T(i(a.rxLabel)+" ",1),y("div",ne,i(a.rxID),1),y("div",se,i(n.stateStore.rxParams[a.rxID].chSelect),1)],2)}const ye=R(te,[["render",oe],["__scopeId","data-v-3a28d0e8"]]);const re=k({color:String,density:String,...P()},"VBannerActions"),ce=_()({name:"VBannerActions",props:re(),setup(e,t){let{slots:a}=t;return S({VBtn:{color:e.color,density:e.density,variant:"text"}}),b(()=>{var n;return s("div",{class:["v-banner-actions",e.class],style:e.style},[(n=a.default)==null?void 0:n.call(a)])}),{}}}),ie=q("v-banner-text"),le=k({avatar:String,color:String,icon:E,lines:String,stacked:Boolean,sticky:Boolean,text:String,...w(),...P(),...H(),...M(),...O(),...Z(),...G(),...J(),...j(),...N()},"VBanner"),xe=_()({name:"VBanner",props:le(),setup(e,t){let{slots:a}=t;const{borderClasses:n}=K(e),{densityClasses:l}=Q(e),{mobile:o}=z(),{dimensionStyles:d}=U(e),{elevationClasses:B}=W(e),{locationStyles:D}=Y(e),{positionClasses:V}=$(e),{roundedClasses:f}=p(e),{themeClasses:h}=F(e),r=x(e,"color"),c=x(e,"density");S({VBannerActions:{color:r,density:c}}),b(()=>{const g=!!(e.text||a.text),u=!!(e.avatar||e.icon),C=!!(u||a.prepend);return s(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||o.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},n.value,l.value,B.value,V.value,f.value,h.value,e.class],style:[d.value,D.value,e.style],role:"banner"},{default:()=>{var m;return[C&&s("div",{key:"prepend",class:"v-banner__prepend"},[a.prepend?s(ae,{key:"prepend-defaults",disabled:!u,defaults:{VAvatar:{color:r.value,density:c.value,icon:e.icon,image:e.avatar}}},a.prepend):s(ee,{key:"prepend-avatar",color:r.value,density:c.value,icon:e.icon,image:e.avatar},null)]),s("div",{class:"v-banner__content"},[g&&s(ie,{key:"text"},{default:()=>{var v;return[((v=a.text)==null?void 0:v.call(a))??e.text]}}),(m=a.default)==null?void 0:m.call(a)]),a.actions&&s(ce,{key:"actions"},a.actions)]}})})}});export{ye as D,xe as V};