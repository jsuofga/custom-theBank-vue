import{p as D,R as H,n as R,l as L,q as z,v as J,t as r,m as l,S as C,T as B,U as Q,z as Z,c as V,V as _,W as ee,X as ae,Y as x,B as le}from"./index-4aecf1e9.js";import{a as te}from"./index-28ffc97f.js";import{m as E,a as T,u as ne}from"./VContainer-b0de3634.js";import{h as se,n as w,j as ie,m as ce,g as de,a as oe,o as ue,b as re,p as ve,R as fe,c as me,q as pe,i as ke,d as he,e as ye,r as Ce,s as Ve,t as be,V as v}from"./VBtn-6c8940eb.js";import{m as ge,a as Ie,V as f}from"./VIcon-c1f8b8b1.js";import{a as G}from"./VAvatar-61bef72d.js";const F=Symbol.for("vuetify:v-chip-group"),Pe=D({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:H},...E(),...se({selectedClass:"v-chip--selected"}),...T(),...R(),...w({variant:"tonal"})},"VChipGroup");L()({name:"VChipGroup",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:c}=m;const{themeClasses:o}=z(e),{isSelected:t,select:p,next:k,prev:h,selected:y}=ie(e,F);return J({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),ne(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:p,next:k,prev:h,selected:y.value})]}})),{}}});const Se=D({activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:B(),onClickOnce:B(),...ce(),...E(),...de(),...oe(),...ue(),...re(),...ve(),...ge(),...T({tag:"span"}),...R(),...w({variant:"tonal"})},"VChip"),Re=L()({name:"VChip",directives:{Ripple:fe},props:Se(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:c,emit:o,slots:t}=m;const{t:p}=Q(),{borderClasses:k}=me(e),{colorClasses:h,colorStyles:y,variantClasses:u}=pe(e),{densityClasses:$}=ke(e),{elevationClasses:q}=he(e),{roundedClasses:M}=ye(e),{sizeClasses:O}=Ie(e),{themeClasses:j}=z(e),b=Z(e,"modelValue"),a=Ce(e,F,!1),s=Ve(e,c),K=V(()=>e.link!==!1&&s.isLink.value),i=V(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),X=V(()=>({"aria-label":p(e.closeLabel),onClick(n){n.stopPropagation(),b.value=!1,o("click:close",n)}}));function g(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function N(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),g(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),U=!!(d||t.append),W=!!(t.close||e.closable),I=!!(t.filter||e.filter)&&a,P=!!(e.prependIcon||e.prependAvatar),Y=!!(P||t.prepend),S=!a||a.isSelected.value;return b.value&&_(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":I,"v-chip--pill":e.pill},j.value,k.value,S?h.value:void 0,$.value,q.value,M.value,O.value,u.value,a==null?void 0:a.selectedClass.value,e.class],style:[S?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:g,onKeydown:i.value&&!K.value&&N},{default:()=>{var A;return[be(i.value,"v-chip"),I&&l(te,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(v,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(f,{key:"filter-icon",icon:e.filterIcon},null)]),[[ae,a.isSelected.value]])]}),Y&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(v,{key:"prepend-defaults",disabled:!P,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(x,null,[e.prependIcon&&l(f,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(G,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content"},[((A=t.default)==null?void 0:A.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),U&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(v,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(f,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(G,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),W&&l("div",le({key:"close",class:"v-chip__close"},X.value),[t.close?l(v,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(f,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[ee("ripple"),i.value&&e.ripple,null]])}}});export{Re as V};
