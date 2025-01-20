"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5315],{39997:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(20107);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:a,className:s="",children:c,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:r,strokeWidth:a?24*Number(u)/Number(o):u,className:i("lucide",s),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),a=(e,t)=>{let r=(0,n.forwardRef)((r,l)=>{let{className:a,...s}=r;return(0,n.createElement)(u,{ref:l,iconNode:t,className:i("lucide-".concat(o(e)),a),...s})});return r.displayName="".concat(e),r}},29475:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(39997).A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},91994:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(39997).A)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},94521:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},32044:(e,t,r)=>{r.d(t,{C1:()=>C,bL:()=>x});var n=r(20107),o=r(74111),i=r(80938),l=r(94521),u=r(81255),a=r(48543),s=r(26783),c=r(62796),d=r(4589),f=r(20475),p="Checkbox",[m,v]=(0,i.A)(p),[h,y]=m(p),N=n.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:i,checked:a,defaultChecked:s,required:c,disabled:p,value:m="on",onCheckedChange:v,form:y,...N}=e,[b,w]=n.useState(null),x=(0,o.s)(t,e=>w(e)),C=n.useRef(!1),A=!b||y||!!b.closest("form"),[O=!1,R]=(0,u.i)({prop:a,defaultProp:s,onChange:v}),M=n.useRef(O);return n.useEffect(()=>{let e=null==b?void 0:b.form;if(e){let t=()=>R(M.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[b,R]),(0,f.jsxs)(h,{scope:r,state:O,disabled:p,children:[(0,f.jsx)(d.sG.button,{type:"button",role:"checkbox","aria-checked":E(O)?"mixed":O,"aria-required":c,"data-state":k(O),"data-disabled":p?"":void 0,disabled:p,value:m,...N,ref:x,onKeyDown:(0,l.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.m)(e.onClick,e=>{R(e=>!!E(e)||!e),A&&(C.current=e.isPropagationStopped(),C.current||e.stopPropagation())})}),A&&(0,f.jsx)(g,{control:b,bubbles:!C.current,name:i,value:m,checked:O,required:c,disabled:p,form:y,style:{transform:"translateX(-100%)"},defaultChecked:!E(s)&&s})]})});N.displayName=p;var b="CheckboxIndicator",w=n.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:n,...o}=e,i=y(b,r);return(0,f.jsx)(c.C,{present:n||E(i.state)||!0===i.state,children:(0,f.jsx)(d.sG.span,{"data-state":k(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});w.displayName=b;var g=e=>{let{control:t,checked:r,bubbles:o=!0,defaultChecked:i,...l}=e,u=n.useRef(null),c=(0,a.Z)(r),d=(0,s.X)(t);n.useEffect(()=>{let e=u.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==r&&t){let n=new Event("click",{bubbles:o});e.indeterminate=E(r),t.call(e,!E(r)&&r),e.dispatchEvent(n)}},[c,r,o]);let p=n.useRef(!E(r)&&r);return(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=i?i:p.current,...l,tabIndex:-1,ref:u,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function E(e){return"indeterminate"===e}function k(e){return E(e)?"indeterminate":e?"checked":"unchecked"}var x=N,C=w},74111:(e,t,r)=>{r.d(t,{s:()=>i,t:()=>o});var n=r(20107);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return n.useCallback(o(...e),e)}},80938:(e,t,r)=>{r.d(t,{A:()=>l,q:()=>i});var n=r(20107),o=r(20475);function i(e,t){let r=n.createContext(t),i=e=>{let{children:t,...i}=e,l=n.useMemo(()=>i,Object.values(i));return(0,o.jsx)(r.Provider,{value:l,children:t})};return i.displayName=e+"Provider",[i,function(o){let i=n.useContext(r);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,t=[]){let r=[],i=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return i.scopeName=e,[function(t,i){let l=n.createContext(i),u=r.length;r=[...r,i];let a=t=>{let{scope:r,children:i,...a}=t,s=r?.[e]?.[u]||l,c=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:c,children:i})};return a.displayName=t+"Provider",[a,function(r,o){let a=o?.[e]?.[u]||l,s=n.useContext(a);if(s)return s;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(i,...t)]}},62796:(e,t,r)=>{r.d(t,{C:()=>l});var n=r(20107),o=r(74111),i=r(58013),l=e=>{let{present:t,children:r}=e,l=function(e){var t,r;let[o,l]=n.useState(),a=n.useRef({}),s=n.useRef(e),c=n.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=u(a.current);c.current="mounted"===d?e:"none"},[d]),(0,i.N)(()=>{let t=a.current,r=s.current;if(r!==e){let n=c.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,i.N)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=u(a.current).includes(e.animationName);if(e.target===o&&n&&(f("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(c.current=u(a.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),l(e)},[])}}(t),a="function"==typeof r?r({present:l.isPresent}):n.Children.only(r),s=(0,o.s)(l.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||l.isPresent?n.cloneElement(a,{ref:s}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},4589:(e,t,r)=>{r.d(t,{hO:()=>a,sG:()=>u});var n=r(20107),o=r(25642),i=r(61837),l=r(20475),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,u=n?i.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(u,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},61837:(e,t,r)=>{r.d(t,{DX:()=>l,xV:()=>a});var n=r(20107),o=r(74111),i=r(20475),l=n.forwardRef((e,t)=>{let{children:r,...o}=e,l=n.Children.toArray(r),a=l.find(s);if(a){let e=a.props.children,r=l.map(t=>t!==a?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(u,{...o,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,i.jsx)(u,{...o,ref:t,children:r})});l.displayName="Slot";var u=n.forwardRef((e,t)=>{let{children:r,...i}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,o.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});u.displayName="SlotClone";var a=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function s(e){return n.isValidElement(e)&&e.type===a}},85547:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(20107);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},81255:(e,t,r)=>{r.d(t,{i:()=>i});var n=r(20107),o=r(85547);function i({prop:e,defaultProp:t,onChange:r=()=>{}}){let[i,l]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[i]=r,l=n.useRef(i),u=(0,o.c)(t);return n.useEffect(()=>{l.current!==i&&(u(i),l.current=i)},[i,l,u]),r}({defaultProp:t,onChange:r}),u=void 0!==e,a=u?e:i,s=(0,o.c)(r);return[a,n.useCallback(t=>{if(u){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else l(t)},[u,e,l,s])]}},58013:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(20107),o=globalThis?.document?n.useLayoutEffect:()=>{}},48543:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(20107);function o(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},26783:(e,t,r)=>{r.d(t,{X:()=>i});var n=r(20107),o=r(58013);function i(e){let[t,r]=n.useState(void 0);return(0,o.N)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,o=t.blockSize}else n=e.offsetWidth,o=e.offsetHeight;r({width:n,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}},29395:(e,t,r)=>{r.d(t,{F:()=>i});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n},i=(e,t)=>r=>{var i;if((null==t?void 0:t.variants)==null)return o(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:l,defaultVariants:u}=t,a=Object.keys(l).map(e=>{let t=null==r?void 0:r[e],o=null==u?void 0:u[e];if(null===t)return null;let i=n(t)||n(o);return l[e][i]}),s=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return o(e,a,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...u,...s}[t]):({...u,...s})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}}]);