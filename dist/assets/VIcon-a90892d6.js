import{c,ac as f,am as m,an as g,ao as h,ap as y,p as v,ab as S,a4 as I,d as o,W as V,n as T,l as P,r as $,q as B,aq as F,t as N,ar as R,as as q,m as w}from"./index-712c10c8.js";import{m as D,a as U,u as W}from"./VContainer-651c2863.js";function k(e){return m(()=>{const s=[],t={};if(e.value.background)if(g(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text){const a=h(e.value.background);if(a.a==null||a.a===1){const n=y(a);t.color=n,t.caretColor=n}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(g(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:t}})}function j(e,s){const t=c(()=>({text:f(e)?e.value:s?e[s]:null})),{colorClasses:a,colorStyles:n}=k(t);return{textColorClasses:a,textColorStyles:n}}function L(e,s){const t=c(()=>({background:f(e)?e.value:s?e[s]:null})),{colorClasses:a,colorStyles:n}=k(t);return{backgroundColorClasses:a,backgroundColorStyles:n}}const A=["x-small","small","default","large","x-large"],E=v({size:{type:[String,Number],default:"default"}},"size");function G(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S();return m(()=>{let t,a;return I(A,e.size)?t=`${s}--size-${e.size}`:e.size&&(a={width:o(e.size),height:o(e.size)}),{sizeClasses:t,sizeStyles:a}})}const H=v({color:String,start:Boolean,end:Boolean,icon:V,...D(),...E(),...U({tag:"i"}),...T()},"VIcon"),M=P()({name:"VIcon",props:H(),setup(e,s){let{attrs:t,slots:a}=s;const n=$(),{themeClasses:x}=B(e),{iconData:r}=F(c(()=>n.value||e.icon)),{sizeClasses:i}=G(e),{textColorClasses:z,textColorStyles:b}=j(N(e,"color"));return W(()=>{var d,C;const l=(d=a.default)==null?void 0:d.call(a);return l&&(n.value=(C=R(l).filter(u=>u.type===q&&u.children&&typeof u.children=="string")[0])==null?void 0:C.children),w(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",x.value,i.value,z.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[i.value?void 0:{fontSize:o(e.size),height:o(e.size),width:o(e.size)},b.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[l]})}),{}}});export{M as V,G as a,k as b,j as c,E as m,L as u};
