import{$ as Pe,a0 as pe,_ as Te,D as Ae,E as ce,N as Ve,H as ue,O as ee,I as Be,p as z,r as H,a1 as X,A as ve,a2 as F,x as p,a3 as Ke,c as P,a4 as oe,d as D,w as he,C as me,a5 as Re,i as De,a6 as Qe,g as ye,B as M,a7 as et,s as G,Z as tt,o as Fe,a as Ie,b as nt,y as ot,a8 as at,n as Me,l as Ne,z as He,q as je,u as lt,t as st,m as c,a9 as rt,V as We,X as it,W as ct,Y as ut,aa as ft,ab as dt,J as vt,F as mt,G as L}from"./index-4aecf1e9.js";import{m as yt,u as qe,V as gt}from"./VContainer-b0de3634.js";import{V as J,a as A}from"./VRow-df457fef.js";import{B as be,C as ae,D as le,E as xe,F as Se,v as ht,G as bt,y as xt,H as St,M as wt,I as kt,w as Et,x as Lt,b as _t,n as Ot,z as Ct,A as Pt,q as pt,e as Tt,t as At,V as Vt,f as Bt}from"./VBtn-6c8940eb.js";import{B as se,g as we,n as Rt,a as Dt,s as Ft,f as It}from"./forwardRefs-db20782f.js";import{u as Mt}from"./VIcon-c1f8b8b1.js";const K=new WeakMap;function Nt(e,t){Object.keys(t).forEach(n=>{if(Pe(n)){const o=pe(n),a=K.get(e);if(t[n]==null)a==null||a.forEach(s=>{const[l,r]=s;l===o&&(e.removeEventListener(o,r),a.delete(s))});else if(!a||![...a].some(s=>s[0]===o&&s[1]===t[n])){e.addEventListener(o,t[n]);const s=a||new Set;s.add([o,t[n]]),K.has(e)||K.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Ht(e,t){Object.keys(t).forEach(n=>{if(Pe(n)){const o=pe(n),a=K.get(e);a==null||a.forEach(s=>{const[l,r]=s;l===o&&(e.removeEventListener(o,r),a.delete(s))})}else e.removeAttribute(n)})}function ze(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Wt(e):ge(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ge(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Wt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function qt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const zt={name:"SourceTX",props:["txLabel","txID"],components:{},setup(){return{stateStore:Ae()}},data:()=>({}),methods:{selectTX(e){e.toString().length==1?e="00"+e:e.toString().length==2&&(e="0"+e),this.stateStore.switchRX(e),this.stateStore.txSelected=e,this.stateStore.snackbar=!0}}},Xt={id:"tx-label"};function $t(e,t,n,o,a,s){return ce(),Ve("button",{class:"button",onClick:t[0]||(t[0]=l=>s.selectTX(n.txID))},[ue(ee(n.txLabel)+" ",1),Be("div",Xt,ee(n.txID),1)])}const Gt=Te(zt,[["render",$t],["__scopeId","data-v-1908ad9e"]]);function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Yt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ke(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,s=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:s},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,s=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:s},t)}return re({x:t.width/2,y:t.height/2},t)}const Xe={static:Jt,connected:Qt},Ut=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Xe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Zt(e,t){const n=H({}),o=H();X&&(ve(()=>!!(t.isActive.value&&e.locationStrategy),s=>{var l,r;p(()=>e.locationStrategy,s),F(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(r=Xe[e.locationStrategy](t,e,n))==null?void 0:r.updateLocation}),window.addEventListener("resize",a,{passive:!0}),F(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(s){var l;(l=o.value)==null||l.call(o,s)}return{contentStyles:n,updateLocation:o}}function Jt(){}function Kt(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=Rt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Qt(e,t,n){qt(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:s}=Ke(()=>{const d=be(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?ae(d):be(t.origin,e.isRtl.value);return d.side===v.side&&d.align===le(v).align?{preferredAnchor:xe(d),preferredOrigin:xe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[l,r,u,m]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),f=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const h=new ResizeObserver(()=>{g&&_()});p([e.activatorEl,e.contentEl],(d,v)=>{let[w,E]=d,[S,i]=v;S&&h.unobserve(S),w&&h.observe(w),i&&h.unobserve(i),E&&h.observe(E)},{immediate:!0}),F(()=>{h.disconnect()});function _(){if(g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>g=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=Kt(e.contentEl.value,e.isRtl.value),w=te(e.contentEl.value),E=12;w.length||(w.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=w.reduce((O,k)=>{const y=k.getBoundingClientRect(),x=new se({x:k===document.documentElement?0:y.x,y:k===document.documentElement?0:y.y,width:k.clientWidth,height:k.clientHeight});return O?new se({x:Math.max(O.left,x.left),y:Math.max(O.top,x.top),width:Math.min(O.right,x.right)-Math.max(O.left,x.left),height:Math.min(O.bottom,x.bottom)-Math.max(O.top,x.top)}):x},void 0);S.x+=E,S.y+=E,S.width-=E*2,S.height-=E*2;let i={anchor:a.value,origin:s.value};function V(O){const k=new se(v),y=ke(O.anchor,d),x=ke(O.origin,k);let{x:B,y:R}=Yt(y,x);switch(O.anchor.side){case"top":R-=f.value[0];break;case"bottom":R+=f.value[0];break;case"left":B-=f.value[0];break;case"right":B+=f.value[0];break}switch(O.anchor.align){case"top":R-=f.value[1];break;case"bottom":R+=f.value[1];break;case"left":B-=f.value[1];break;case"right":B+=f.value[1];break}return k.x+=B,k.y+=R,k.width=Math.min(k.width,u.value),k.height=Math.min(k.height,m.value),{overflows:we(k,S),x:B,y:R}}let N=0,j=0;const W={x:0,y:0},Y={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:O,y:k,overflows:y}=V(i);N+=O,j+=k,v.x+=O,v.y+=k;{const x=Se(i.anchor),B=y.x.before||y.x.after,R=y.y.before||y.y.after;let $=!1;if(["x","y"].forEach(C=>{if(C==="x"&&B&&!Y.x||C==="y"&&R&&!Y.y){const b={anchor:{...i.anchor},origin:{...i.origin}},T=C==="x"?x==="y"?le:ae:x==="y"?ae:le;b.anchor=T(b.anchor),b.origin=T(b.origin);const{overflows:q}=V(b);(q[C].before<=y[C].before&&q[C].after<=y[C].after||q[C].before+q[C].after<(y[C].before+y[C].after)/2)&&(i=b,$=Y[C]=!0)}}),$)continue}y.x.before&&(N+=y.x.before,v.x+=y.x.before),y.x.after&&(N-=y.x.after,v.x-=y.x.after),y.y.before&&(j+=y.y.before,v.y+=y.y.before),y.y.after&&(j-=y.y.after,v.y-=y.y.after);{const x=we(v,S);W.x=S.width-x.x.before-x.x.after,W.y=S.height-x.y.before-x.y.after,N+=x.x.before,v.x+=x.x.before,j+=x.y.before,v.y+=x.y.before}break}const I=Se(i.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${i.anchor.side} ${i.anchor.align}`,transformOrigin:`${i.origin.side} ${i.origin.align}`,top:D(ie(j)),left:e.isRtl.value?void 0:D(ie(N)),right:e.isRtl.value?D(ie(-N)):void 0,minWidth:D(I==="y"?Math.min(l.value,d.width):l.value),maxWidth:D(Ee(he(W.x,l.value===1/0?0:l.value,u.value))),maxHeight:D(Ee(he(W.y,r.value===1/0?0:r.value,m.value)))}),{available:W,contentBox:v}}return p(()=>[a.value,s.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>_()),oe(()=>{const d=_();if(!d)return;const{available:v,contentBox:w}=d;w.height>v.y&&requestAnimationFrame(()=>{_(),requestAnimationFrame(()=>{_()})})}),{updateLocation:_}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let fe=!0;const ne=[];function en(e){!fe||ne.length?(ne.push(e),de()):(fe=!1,e(),de())}let Le=-1;function de(){cancelAnimationFrame(Le),Le=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?de():fe=!0})}const Q={none:null,close:on,block:an,reposition:ln},tn=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Q}},"VOverlay-scroll-strategies");function nn(e,t){if(!X)return;let n;me(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Re(),await oe(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=Q[e.scrollStrategy])==null||o.call(Q,t,e,n)}))}),F(()=>{n==null||n.stop()})}function on(e){function t(n){e.isActive.value=!1}$e(e.activatorEl.value??e.contentEl.value,t)}function an(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...te(e.activatorEl.value,t.contained?n:void 0),...te(e.contentEl.value,t.contained?n:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,s=(r=>ge(r)&&r)(n||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",D(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",D(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",D(a)),r.classList.add("v-overlay-scroll-blocked")}),F(()=>{o.forEach((r,u)=>{const m=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-m,r.scrollTop=-f}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ln(e,t,n){let o=!1,a=-1,s=-1;function l(r){en(()=>{var f,g;const u=performance.now();(g=(f=e.updateLocation).value)==null||g.call(f,r),o=(performance.now()-u)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{n.run(()=>{$e(e.activatorEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(r)})})):l(r)})})}),F(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(a)})}function $e(e,t){const n=[document,...te(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),F(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const sn=Symbol.for("vuetify:v-menu"),rn=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function cn(e,t){const n={},o=a=>()=>{if(!X)return Promise.resolve(!0);const s=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(l=>{const r=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(s),l(s)},r)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const un=z({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...rn()},"VOverlay-activator");function fn(e,t){let{isActive:n,isTop:o}=t;const a=H();let s=!1,l=!1,r=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),m=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:f,runCloseDelay:g}=cn(e,i=>{i===(e.openOnHover&&s||u.value&&l)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==i&&(r=!0),n.value=i)}),h={onClick:i=>{i.stopPropagation(),a.value=i.currentTarget||i.target,n.value=!n.value},onMouseenter:i=>{var V;(V=i.sourceCapabilities)!=null&&V.firesTouchEvents||(s=!0,a.value=i.currentTarget||i.target,f())},onMouseleave:i=>{s=!1,g()},onFocus:i=>{et(i.target,":focus-visible")!==!1&&(l=!0,i.stopPropagation(),a.value=i.currentTarget||i.target,f())},onBlur:i=>{l=!1,i.stopPropagation(),g()}},_=P(()=>{const i={};return m.value&&(i.onClick=h.onClick),e.openOnHover&&(i.onMouseenter=h.onMouseenter,i.onMouseleave=h.onMouseleave),u.value&&(i.onFocus=h.onFocus,i.onBlur=h.onBlur),i}),d=P(()=>{const i={};if(e.openOnHover&&(i.onMouseenter=()=>{s=!0,f()},i.onMouseleave=()=>{s=!1,g()}),u.value&&(i.onFocusin=()=>{l=!0,f()},i.onFocusout=()=>{l=!1,g()}),e.closeOnContentClick){const V=De(sn,null);i.onClick=()=>{n.value=!1,V==null||V.closeParents()}}return i}),v=P(()=>{const i={};return e.openOnHover&&(i.onMouseenter=()=>{r&&(s=!0,r=!1,f())},i.onMouseleave=()=>{s=!1,g()}),i});p(o,i=>{i&&(e.openOnHover&&!s&&(!u.value||!l)||u.value&&!l&&(!e.openOnHover||!s))&&(n.value=!1)});const w=H();me(()=>{w.value&&oe(()=>{a.value=Qe(w.value)})});const E=ye("useActivator");let S;return p(()=>!!e.activator,i=>{i&&X?(S=Re(),S.run(()=>{dn(e,E,{activatorEl:a,activatorEvents:_})})):S&&S.stop()},{flush:"post",immediate:!0}),F(()=>{S==null||S.stop()}),{activatorEl:a,activatorRef:w,activatorEvents:_,contentEvents:d,scrimEvents:v}}function dn(e,t,n){let{activatorEl:o,activatorEvents:a}=n;p(()=>e.activator,(u,m)=>{if(m&&u!==m){const f=r(m);f&&l(f)}u&&oe(()=>s())},{immediate:!0}),p(()=>e.activatorProps,()=>{s()}),F(()=>{l()});function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Nt(u,M(a.value,m))}function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ht(u,M(a.value,m))}function r(){var f,g;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,m;if(u)if(u==="parent"){let h=(g=(f=t==null?void 0:t.proxy)==null?void 0:f.$el)==null?void 0:g.parentNode;for(;h!=null&&h.hasAttribute("data-no-activator");)h=h.parentNode;m=h}else typeof u=="string"?m=document.querySelector(u):"$el"in u?m=u.$el:m=u;return o.value=(m==null?void 0:m.nodeType)===Node.ELEMENT_NODE?m:null,o.value}}function vn(){if(!X)return G(!1);const{ssr:e}=tt();if(e){const t=G(!1);return Fe(()=>{t.value=!0}),t}else return G(!0)}const mn=z({eager:Boolean},"lazy");function yn(e,t){const n=G(!1),o=P(()=>n.value||e.eager||t.value);p(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function Ge(){const t=ye("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const _e=Symbol.for("vuetify:stack"),Z=Ie([]);function gn(e,t,n){const o=ye("useStack"),a=!n,s=De(_e,void 0),l=Ie({activeChildren:new Set});nt(_e,l);const r=G(+t.value);ve(e,()=>{var g;const f=(g=Z.at(-1))==null?void 0:g[1];r.value=f?f+10:+t.value,a&&Z.push([o.uid,r.value]),s==null||s.activeChildren.add(o.uid),F(()=>{if(a){const h=at(Z).findIndex(_=>_[0]===o.uid);Z.splice(h,1)}s==null||s.activeChildren.delete(o.uid)})});const u=G(!0);a&&me(()=>{var g;const f=((g=Z.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=f)});const m=P(()=>!l.activeChildren.size);return{globalTop:ot(u),localTop:m,stackStyles:P(()=>({zIndex:r.value}))}}function hn(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!X)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function bn(){return!0}function Ye(e,t,n){if(!e||Ue(e,n)===!1)return!1;const o=ze(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(s=>s==null?void 0:s.contains(e.target))}function Ue(e,t){return(typeof t.value=="object"&&t.value.closeConditional||bn)(e)}function xn(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Ye(e,t,n)&&setTimeout(()=>{Ue(e,n)&&o&&o(e)},0)}function Oe(e,t){const n=ze(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Ze={mounted(e,t){const n=a=>xn(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Ye(a,e,t)};Oe(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Oe(e,n=>{var s;if(!n||!((s=e._clickOutside)!=null&&s[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Sn(e){const{modelValue:t,color:n,...o}=e;return c(ft,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&c("div",M({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Je=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...un(),...yt(),...ht(),...mn(),...Ut(),...tn(),...Me(),...bt()},"VOverlay"),Ce=Ne()({name:"VOverlay",directives:{ClickOutside:Ze},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Je()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const s=He(e,"modelValue"),l=P({get:()=>s.value,set:b=>{b&&e.disabled||(s.value=b)}}),{teleportTarget:r}=hn(P(()=>e.attach||e.contained)),{themeClasses:u}=je(e),{rtlClasses:m,isRtl:f}=lt(),{hasContent:g,onAfterLeave:h}=yn(e,l),_=Mt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:w}=gn(l,st(e,"zIndex"),e._disableGlobalStack),{activatorEl:E,activatorRef:S,activatorEvents:i,contentEvents:V,scrimEvents:N}=fn(e,{isActive:l,isTop:v}),{dimensionStyles:j}=xt(e),W=vn(),{scopeId:Y}=Ge();p(()=>e.disabled,b=>{b&&(l.value=!1)});const U=H(),I=H(),{contentStyles:O,updateLocation:k}=Zt(e,{isRtl:f,contentEl:I,activatorEl:E,isActive:l});nn(e,{root:U,contentEl:I,activatorEl:E,isActive:l,updateLocation:k});function y(b){a("click:outside",b),e.persistent?C():l.value=!1}function x(){return l.value&&d.value}X&&p(l,b=>{b?window.addEventListener("keydown",B):window.removeEventListener("keydown",B)},{immediate:!0});function B(b){var T,q;b.key==="Escape"&&d.value&&(e.persistent?C():(l.value=!1,(T=I.value)!=null&&T.contains(document.activeElement)&&((q=E.value)==null||q.focus())))}const R=St();ve(()=>e.closeOnBack,()=>{kt(R,b=>{d.value&&l.value?(b(!1),e.persistent?C():l.value=!1):b()})});const $=H();p(()=>l.value&&(e.absolute||e.contained)&&r.value==null,b=>{if(b){const T=jt(U.value);T&&T!==document.scrollingElement&&($.value=T.scrollTop)}});function C(){e.noClickAnimation||I.value&&Dt(I.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ft})}return qe(()=>{var b;return c(ut,null,[(b=n.activator)==null?void 0:b.call(n,{isActive:l.value,props:M({ref:S},i.value,e.activatorProps)}),W.value&&g.value&&c(rt,{disabled:!r.value,to:r.value},{default:()=>[c("div",M({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},u.value,m.value,e.class],style:[w.value,{top:D($.value)},e.style],ref:U},Y,o),[c(Sn,M({color:_,modelValue:l.value&&!!e.scrim},N.value),null),c(wt,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterLeave:()=>{h(),a("afterLeave")}},{default:()=>{var T;return[We(c("div",M({ref:I,class:["v-overlay__content",e.contentClass],style:[j.value,O.value]},V.value,e.contentProps),[(T=n.default)==null?void 0:T.call(n,{isActive:l})]),[[it,l.value],[ct("click-outside"),{handler:y,closeConditional:x,include:()=>[E.value]}]])]}})])]})])}),{activatorEl:E,animateClick:C,contentEl:I,globalTop:d,localTop:v,updateLocation:k}}}),wn=z({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Et({location:"bottom"}),...Lt(),..._t(),...Ot(),...Me(),...dt(Je({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),kn=Ne()({name:"VSnackbar",props:wn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const o=He(e,"modelValue"),{locationStyles:a}=Ct(e),{positionClasses:s}=Pt(e),{scopeId:l}=Ge(),{themeClasses:r}=je(e),{colorClasses:u,colorStyles:m,variantClasses:f}=pt(e),{roundedClasses:g}=Tt(e),h=H();p(o,d),p(()=>e.timeout,d),Fe(()=>{o.value&&d()});let _=-1;function d(){window.clearTimeout(_);const w=Number(e.timeout);!o.value||w===-1||(_=window.setTimeout(()=>{o.value=!1},w))}function v(){window.clearTimeout(_)}return qe(()=>{const[w]=Ce.filterProps(e);return c(Ce,M({ref:h,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},s.value,e.class],style:e.style},w,{modelValue:o.value,"onUpdate:modelValue":E=>o.value=E,contentProps:M({class:["v-snackbar__wrapper",r.value,u.value,g.value,f.value],style:[a.value,m.value],onPointerenter:v,onPointerleave:d},w.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},l),{default:()=>[At(!1,"v-snackbar"),n.default&&c("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&c(Vt,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[c("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),It({},h)}}),En={name:"Vault",components:{SourceTX:Gt},setup(){return{stateStore:Ae()}},data:()=>({active:!1}),methods:{onClickOutside(){this.$router.push(`/${this.stateStore.page}`),console.log("outside")}},created(){},beforeUnmount(){}},Ln={id:"inner-div"};function _n(e,t,n,o,a,s){const l=vt("SourceTX");return ce(),mt(gt,{class:"fill-height d-flex flex-column"},{default:L(()=>[We((ce(),Ve("div",Ln,[c(J,{id:"rx-label",class:"d-flex justify-center pa-9 myCol"},{default:L(()=>[ue(" Select Video for Display - "+ee(o.stateStore.rxSelectedLabel),1)]),_:1}),c(kn,{modelValue:o.stateStore.snackbar,"onUpdate:modelValue":t[0]||(t[0]=r=>o.stateStore.snackbar=r),timeout:3e3,color:"blue"},{default:L(()=>[ue(ee(` ${o.stateStore.rxSelectedLabel} to ${o.stateStore.sourceList[parseInt(o.stateStore.txSelected)-1]} `)+" ",1),Be("template",null,[c(Bt,{color:"white",variant:"text"})])]),_:1},8,["modelValue"]),c(J,{class:"myRow d-flex align-center"},{default:L(()=>[c(A,{class:"d-flex justify-center pl-0"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[0],txID:1},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[1],txID:2},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[2],txID:3},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center pr-0"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[3],txID:4},null,8,["txLabel"])]),_:1})]),_:1}),c(J,{class:"myRow"},{default:L(()=>[c(A,{class:"d-flex justify-center pl-0"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[4],txID:6},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[5],txID:6},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[6],txID:7},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center pr-0"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[7],txID:8},null,8,["txLabel"])]),_:1})]),_:1}),c(J,{class:"myRow"},{default:L(()=>[c(A,{class:"d-flex justify-center pl-0"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[8],txID:9},null,8,["txLabel"])]),_:1}),c(A,{c:"",class:"d-flex justify-center"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[9],txID:10},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[10],txID:11},null,8,["txLabel"])]),_:1}),c(A,{class:"d-flex justify-center pr-0"},{default:L(()=>[c(l,{txLabel:o.stateStore.sourceList[11],txID:12},null,8,["txLabel"])]),_:1})]),_:1})])),[[Ze,s.onClickOutside]])]),_:1})}const Vn=Te(En,[["render",_n],["__scopeId","data-v-7bd4cacd"]]);export{Vn as default};
