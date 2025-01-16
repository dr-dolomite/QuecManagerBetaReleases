(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3669],{27651:(e,t,r)=>{Promise.resolve().then(r.bind(r,34819))},34819:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(20475),n=r(20107),a=r(72167),i=r(64219),o=r(22631),l=r(42541),u=r(32857),c=r(114);let d=()=>{let[e,t]=(0,n.useState)("1500"),[r,d]=(0,n.useState)(!1),[f,m]=(0,n.useState)(!0),[p,h]=(0,n.useState)(""),v=(0,u.dj)();(0,n.useEffect)(()=>{(async()=>{try{let e=await fetch("/cgi-bin/advance/mtu.sh"),r=await e.json();d(r.isEnabled),t(r.currentValue.toString()),m(!1)}catch(e){h("Failed to fetch MTU settings"),m(!1),v.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:"Failed to fetch MTU settings",action:(0,s.jsx)(c.A,{})})}})()},[]);let b=async t=>{t.preventDefault(),h("");let n=r?e:"disable";try{let e=await fetch("/cgi-bin/advance/mtu.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"mtu=".concat(n)}),t=await e.json();!0===t.success?v.toast({title:"Success",description:t.message||"MTU settings saved successfully"}):v.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:t.error||"Failed to save MTU settings",action:(0,s.jsx)(c.A,{})})}catch(e){h("Failed to save MTU settings"),v.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:"Network error while saving MTU settings",action:(0,s.jsx)(c.A,{})})}};return f?(0,s.jsx)(a.Zp,{className:"w-full max-w-2xl mx-auto",children:(0,s.jsx)(a.Wu,{className:"p-6",children:(0,s.jsx)("div",{className:"text-center",children:"Loading MTU settings..."})})}):(0,s.jsxs)(a.Zp,{children:[(0,s.jsxs)(a.aR,{children:[(0,s.jsx)(a.ZB,{children:"MTU Settings"}),(0,s.jsx)(a.BT,{children:"Configure MTU for rmnet_data0 interface."})]}),(0,s.jsx)(a.Wu,{children:(0,s.jsxs)("form",{onSubmit:b,className:"space-y-8",children:[(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"text-sm font-medium",children:"MTU Value"}),(0,s.jsx)(i.p,{type:"number",value:e,onChange:e=>t(e.target.value),disabled:!r,className:"mt-1",min:"68",max:"9000"}),(0,s.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"Set the MTU value for your connection (default: 1500)."})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between rounded-lg border p-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"text-base font-medium",children:"MTU State"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Toggle to enable or disable custom MTU value."})]}),(0,s.jsx)(o.d,{checked:r,onCheckedChange:e=>{d(e),e||t("1500")}})]})]}),(0,s.jsx)(l.$,{type:"submit",className:"w-full",children:"Save Configuration"})]})})]})}},114:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(20475),n=r(42541),a=r(7197);let i=()=>(0,s.jsx)(n.$,{asChild:!0,variant:"outline",className:"ml-2",children:(0,s.jsxs)("a",{href:"https://github.com/iamromulan/quectel-rgmii-toolkit/tree/development-SDXPINN",children:[(0,s.jsx)(a.ERf,{className:"w-4 h-4 mr-2"}),"Get there!"]})})},42541:(e,t,r)=>{"use strict";r.d(t,{$:()=>u,r:()=>l});var s=r(20475),n=r(20107),a=r(61837),i=r(29395),o=r(22250);let l=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:u=!1,...c}=e,d=u?a.DX:"button";return(0,s.jsx)(d,{className:(0,o.cn)(l({variant:n,size:i,className:r})),ref:t,...c})});u.displayName="Button"},72167:(e,t,r)=>{"use strict";r.d(t,{BT:()=>u,Wu:()=>c,ZB:()=>l,Zp:()=>i,aR:()=>o,wL:()=>d});var s=r(20475),n=r(20107),a=r(22250);let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});i.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...n})});o.displayName="CardHeader";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("h3",{ref:t,className:(0,a.cn)("font-semibold leading-none tracking-tight",r),...n})});l.displayName="CardTitle";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...n})});u.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",r),...n})});c.displayName="CardContent";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",r),...n})});d.displayName="CardFooter"},64219:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var s=r(20475),n=r(20107),a=r(22250);let i=n.forwardRef((e,t)=>{let{className:r,type:n,...i}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},22631:(e,t,r)=>{"use strict";r.d(t,{d:()=>j});var s=r(20475),n=r(20107),a=r(94521),i=r(74111),o=r(80938),l=r(81255),u=r(48543),c=r(26783),d=r(4589),f="Switch",[m,p]=(0,o.A)(f),[h,v]=m(f),b=n.forwardRef((e,t)=>{let{__scopeSwitch:r,name:o,checked:u,defaultChecked:c,required:f,disabled:m,value:p="on",onCheckedChange:v,form:b,...g}=e,[x,N]=n.useState(null),j=(0,i.s)(t,e=>N(e)),S=n.useRef(!1),T=!x||b||!!x.closest("form"),[k=!1,A]=(0,l.i)({prop:u,defaultProp:c,onChange:v});return(0,s.jsxs)(h,{scope:r,checked:k,disabled:m,children:[(0,s.jsx)(d.sG.button,{type:"button",role:"switch","aria-checked":k,"aria-required":f,"data-state":w(k),"data-disabled":m?"":void 0,disabled:m,value:p,...g,ref:j,onClick:(0,a.m)(e.onClick,e=>{A(e=>!e),T&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})}),T&&(0,s.jsx)(y,{control:x,bubbles:!S.current,name:o,value:p,checked:k,required:f,disabled:m,form:b,style:{transform:"translateX(-100%)"}})]})});b.displayName=f;var g="SwitchThumb",x=n.forwardRef((e,t)=>{let{__scopeSwitch:r,...n}=e,a=v(g,r);return(0,s.jsx)(d.sG.span,{"data-state":w(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:t})});x.displayName=g;var y=e=>{let{control:t,checked:r,bubbles:a=!0,...i}=e,o=n.useRef(null),l=(0,u.Z)(r),d=(0,c.X)(t);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let s=new Event("click",{bubbles:a});t.call(e,r),e.dispatchEvent(s)}},[l,r,a]),(0,s.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...i,tabIndex:-1,ref:o,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w(e){return e?"checked":"unchecked"}var N=r(22250);let j=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(b,{className:(0,N.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...n,ref:t,children:(0,s.jsx)(x,{className:(0,N.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});j.displayName=b.displayName},32857:(e,t,r)=>{"use strict";r.d(t,{dj:()=>f});var s=r(20107);let n=0,a=new Map,i=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],u={toasts:[]};function c(e){u=o(u,e),l.forEach(e=>{e(u)})}function d(e){let{...t}=e,r=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=s.useState(u);return s.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var s=r(64901),n=r(868);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,s.$)(t))}},94521:(e,t,r)=>{"use strict";function s(e,t,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),!1===r||!s.defaultPrevented)return t?.(s)}}r.d(t,{m:()=>s})},80938:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,q:()=>a});var s=r(20107),n=r(20475);function a(e,t){let r=s.createContext(t),a=e=>{let{children:t,...a}=e,i=s.useMemo(()=>a,Object.values(a));return(0,n.jsx)(r.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(n){let a=s.useContext(r);if(a)return a;if(void 0!==t)return t;throw Error(`\`${n}\` must be used within \`${e}\``)}]}function i(e,t=[]){let r=[],a=()=>{let t=r.map(e=>s.createContext(e));return function(r){let n=r?.[e]||t;return s.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return a.scopeName=e,[function(t,a){let i=s.createContext(a),o=r.length;r=[...r,a];let l=t=>{let{scope:r,children:a,...l}=t,u=r?.[e]?.[o]||i,c=s.useMemo(()=>l,Object.values(l));return(0,n.jsx)(u.Provider,{value:c,children:a})};return l.displayName=t+"Provider",[l,function(r,n){let l=n?.[e]?.[o]||i,u=s.useContext(l);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:s})=>{let n=r(e)[`__scope${s}`];return{...t,...n}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(a,...t)]}},4589:(e,t,r)=>{"use strict";r.d(t,{hO:()=>l,sG:()=>o});var s=r(20107),n=r(25642),a=r(61837),i=r(20475),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...n}=e,o=s?a.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...n,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&n.flushSync(()=>e.dispatchEvent(t))}},85547:(e,t,r)=>{"use strict";r.d(t,{c:()=>n});var s=r(20107);function n(e){let t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...e)=>t.current?.(...e),[])}},81255:(e,t,r)=>{"use strict";r.d(t,{i:()=>a});var s=r(20107),n=r(85547);function a({prop:e,defaultProp:t,onChange:r=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let r=s.useState(e),[a]=r,i=s.useRef(a),o=(0,n.c)(t);return s.useEffect(()=>{i.current!==a&&(o(a),i.current=a)},[a,i,o]),r}({defaultProp:t,onChange:r}),o=void 0!==e,l=o?e:a,u=(0,n.c)(r);return[l,s.useCallback(t=>{if(o){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else i(t)},[o,e,i,u])]}},58013:(e,t,r)=>{"use strict";r.d(t,{N:()=>n});var s=r(20107),n=globalThis?.document?s.useLayoutEffect:()=>{}},48543:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(20107);function n(e){let t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},26783:(e,t,r)=>{"use strict";r.d(t,{X:()=>a});var s=r(20107),n=r(58013);function a(e){let[t,r]=s.useState(void 0);return(0,n.N)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let s,n;if(!Array.isArray(t)||!t.length)return;let a=t[0];if("borderBoxSize"in a){let e=a.borderBoxSize,t=Array.isArray(e)?e[0]:e;s=t.inlineSize,n=t.blockSize}else s=e.offsetWidth,n=e.offsetHeight;r({width:s,height:n})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}},29395:(e,t,r)=>{"use strict";r.d(t,{F:()=>a});let s=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,s,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(s=e(t[r]))&&(n&&(n+=" "),n+=s);else for(r in t)t[r]&&(n&&(n+=" "),n+=r)}return n}(e))&&(s&&(s+=" "),s+=t);return s},a=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return n(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:o}=t,l=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==o?void 0:o[e];if(null===t)return null;let a=s(t)||s(n);return i[e][a]}),u=r&&Object.entries(r).reduce((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e},{});return n(e,l,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:s,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...u}[t]):({...o,...u})[t]===r})?[...e,r,s]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[9980,7780,191,6035,7358],()=>t(27651)),_N_E=e.O()}]);