(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1942],{42554:(e,t,r)=>{Promise.resolve().then(r.bind(r,75808))},75808:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(20475),s=r(20107),n=r(72167),i=r(574),o=r(42541),c=r(32857),d=r(29475),l=r(91994);let u={lte:"lte_band",nsa:"nsa_nr5g_band",sa:"nr5g_band"},p=()=>{let{toast:e}=(0,c.dj)(),[t,r]=(0,s.useState)({lte:[],nsa:[],sa:[]}),[p,f]=(0,s.useState)({lte:[],nsa:[],sa:[]}),[h,m]=(0,s.useState)(!0),b=async e=>{try{let t=encodeURIComponent(e),r=await fetch("/cgi-bin/atinout_handler.sh",{method:"POST",headers:{"Content-Type":"application/json"},body:"command=".concat(t),signal:AbortSignal.timeout(5e3)});if(!r.ok)throw Error("HTTP error! status: ".concat(r.status));let a=await r.json();if(a.error)throw Error(a.error);return a}catch(e){throw console.error("AT Command error:",e),e}},g=(e,t)=>{for(let r of e.output.split("\n"))if(r.includes(t)){let e=r.match(/"([^"]+)",(.+)/);if(e&&e[2])return e[2].split(":").map(Number)}return[]},v=async()=>{try{let e=(await b('AT+QNWPREFCFG="policy_band"')).output.split("\n"),t={lte:[],nsa:[],sa:[]};e.forEach(e=>{var r,a,s;e.includes('"lte_band"')?t.lte=(null===(r=e.split(",")[1])||void 0===r?void 0:r.split(":").map(Number))||[]:e.includes('"nsa_nr5g_band"')?t.nsa=(null===(a=e.split(",")[1])||void 0===a?void 0:a.split(":").map(Number))||[]:e.includes('"nrdc_nr5g_band"')&&(t.sa=(null===(s=e.split(",")[1])||void 0===s?void 0:s.split(":").map(Number))||[])}),r(t)}catch(t){console.error("Error fetching bands:",t),e({title:"Error",description:"Failed to fetch available bands.",variant:"destructive"})}},x=async()=>{try{let e=await b('AT+QNWPREFCFG="lte_band";+QNWPREFCFG="nsa_nr5g_band";+QNWPREFCFG="nr5g_band"'),t={lte:g(e,"lte_band"),nsa:g(e,'+QNWPREFCFG: "nsa_nr5g_band"'),sa:g(e,'+QNWPREFCFG: "nr5g_band"')};console.log("New Checked Bands: ",t),f(t),m(!1)}catch(t){console.error("Error fetching checked bands:",t),e({title:"Error",description:"Failed to fetch checked bands.",variant:"destructive"}),m(!1)}};(0,s.useEffect)(()=>{(async()=>{await v(),await x()})()},[]);let y=(e,t)=>{f(r=>({...r,[e]:r[e].includes(t)?r[e].filter(e=>e!==t):[...r[e],t].sort((e,t)=>e-t)}))},N=async t=>{try{let r=p[t].join(":");await b('AT+QNWPREFCFG="'.concat(u[t],'",').concat(r)),e({title:"Band Locking",description:"Bands locked successfully."}),await x()}catch(r){console.error("Error locking ".concat(t," bands:"),r),e({title:"Error",description:"Failed to lock ".concat(t.toUpperCase()," bands."),variant:"destructive"})}},w=e=>{f(t=>({...t,[e]:[]}))},T=async r=>{try{let a=t[r].join(":");await b('AT+QNWPREFCFG="'.concat(u[r],'",').concat(a)),e({title:"Reset Successful",description:"".concat(r.toUpperCase()," bands reset to default.")}),await x()}catch(t){console.error("Error resetting ".concat(r," bands:"),t),e({title:"Error",description:"Failed to reset ".concat(r.toUpperCase()," bands."),variant:"destructive"})}},_=e=>{let{title:r,description:s,bandType:c,prefix:u}=e;return(0,a.jsxs)(n.Zp,{children:[(0,a.jsxs)(n.aR,{children:[(0,a.jsx)(n.ZB,{children:r}),(0,a.jsx)(n.BT,{children:s})]}),(0,a.jsx)(n.Wu,{className:"grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 grid-flow-row gap-4",children:h?(0,a.jsx)("div",{className:"col-span-8",children:"Fetching bands..."}):t[c].map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.S,{id:"".concat(c,"-").concat(e),checked:p[c].includes(e),onCheckedChange:()=>y(c,e)}),(0,a.jsxs)("label",{htmlFor:"".concat(c,"-").concat(e),className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:[u,e]})]},e))}),(0,a.jsxs)(n.wL,{className:"border-t py-4 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-3",children:[(0,a.jsxs)(o.$,{onClick:()=>N(c),children:[(0,a.jsx)(d.A,{className:"h-4 w-4"}),"Lock Selected Bands"]}),(0,a.jsx)(o.$,{variant:"secondary",onClick:()=>w(c),children:"Uncheck All"}),(0,a.jsxs)(o.$,{variant:"secondary",onClick:()=>T(c),children:[(0,a.jsx)(l.A,{className:"h-4 w-4"}),"Reset to Default"]})]})]})};return(0,a.jsxs)("div",{className:"grid gap-6",children:[(0,a.jsx)(_,{title:"4G LTE Band Locking",description:"Lock the device to specific LTE bands.",bandType:"lte",prefix:"B"}),(0,a.jsx)(_,{title:"NR5G-NSA Band Locking",description:"Lock the device to specific NR5G-NSA bands.",bandType:"nsa",prefix:"N"}),(0,a.jsx)(_,{title:"NR5G-SA Band Locking",description:"Lock the device to specific NR5G-SA bands.",bandType:"sa",prefix:"N"})]})}},42541:(e,t,r)=>{"use strict";r.d(t,{$:()=>d,r:()=>c});var a=r(20475),s=r(20107),n=r(61837),i=r(29395),o=r(22250);let c=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...l}=e,u=d?n.DX:"button";return(0,a.jsx)(u,{className:(0,o.cn)(c({variant:s,size:i,className:r})),ref:t,...l})});d.displayName="Button"},72167:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,Wu:()=>l,ZB:()=>c,Zp:()=>i,aR:()=>o,wL:()=>u});var a=r(20475),s=r(20107),n=r(22250);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...s})});i.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",r),...s})});c.displayName="CardTitle";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});d.displayName="CardDescription";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});l.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},574:(e,t,r)=>{"use strict";r.d(t,{S:()=>c});var a=r(20475),s=r(20107),n=r(32044),i=r(7197),o=r(22250);let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.bL,{ref:t,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:(0,a.jsx)(n.C1,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(i.Srz,{className:"h-4 w-4"})})})});c.displayName=n.bL.displayName},32857:(e,t,r)=>{"use strict";r.d(t,{dj:()=>p});var a=r(20107);let s=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},c=[],d={toasts:[]};function l(e){d=o(d,e),c.forEach(e=>{e(d)})}function u(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function p(){let[e,t]=a.useState(d);return a.useEffect(()=>(c.push(t),()=>{let e=c.indexOf(t);e>-1&&c.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(64901),s=r(868);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[9980,7780,5315,191,6035,7358],()=>t(42554)),_N_E=e.O()}]);