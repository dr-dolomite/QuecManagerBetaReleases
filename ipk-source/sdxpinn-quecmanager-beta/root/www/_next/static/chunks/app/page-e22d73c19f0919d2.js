(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{32012:function(e,t,r){Promise.resolve().then(r.bind(r,40449))},40449:function(e,t,r){"use strict";r.d(t,{default:function(){return F}});var a=r(20881),n=r(64149),s=r(28423),l=r(35095),o=r(52349),i=r(95403),d=r(94920),c=r(88766),u=r(78580),m=r(26509),f=r(82997),x=r(27450),h=r(20839),p=r(90270);let g={light:"",dark:".dark"},v=n.createContext(null);function N(){let e=n.useContext(v);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let b=n.forwardRef((e,t)=>{let{id:r,className:s,children:l,config:o,...i}=e,d=n.useId(),c="chart-".concat(r||d.replace(/:/g,""));return(0,a.jsx)(v.Provider,{value:{config:o},children:(0,a.jsxs)("div",{"data-chart":c,ref:t,className:(0,p.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",s),...i,children:[(0,a.jsx)(j,{id:c,config:o}),(0,a.jsx)(f.h,{children:l})]})})});b.displayName="Chart";let j=e=>{let{id:t,config:r}=e,n=Object.entries(r).filter(e=>{let[t,r]=e;return r.theme||r.color});return n.length?(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(g).map(e=>{let[r,a]=e;return"\n".concat(a," [data-chart=").concat(t,"] {\n").concat(n.map(e=>{var t;let[a,n]=e,s=(null===(t=n.theme)||void 0===t?void 0:t[r])||n.color;return s?"  --color-".concat(a,": ").concat(s,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null};function y(e,t,r){if("object"!=typeof t||null===t)return;let a="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,n=r;return r in t&&"string"==typeof t[r]?n=t[r]:a&&r in a&&"string"==typeof a[r]&&(n=a[r]),n in e?e[n]:e[r]}x.u,n.forwardRef((e,t)=>{let{active:r,payload:s,className:l,indicator:o="dot",hideLabel:i=!1,hideIndicator:d=!1,label:c,labelFormatter:u,labelClassName:m,formatter:f,color:x,nameKey:h,labelKey:g}=e,{config:v}=N(),b=n.useMemo(()=>{var e;if(i||!(null==s?void 0:s.length))return null;let[t]=s,r="".concat(g||t.dataKey||t.name||"value"),n=y(v,t,r),l=g||"string"!=typeof c?null==n?void 0:n.label:(null===(e=v[c])||void 0===e?void 0:e.label)||c;return u?(0,a.jsx)("div",{className:(0,p.cn)("font-medium",m),children:u(l,s)}):l?(0,a.jsx)("div",{className:(0,p.cn)("font-medium",m),children:l}):null},[c,u,s,i,m,v,g]);if(!r||!(null==s?void 0:s.length))return null;let j=1===s.length&&"dot"!==o;return(0,a.jsxs)("div",{ref:t,className:(0,p.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",l),children:[j?null:b,(0,a.jsx)("div",{className:"grid gap-1.5",children:s.map((e,t)=>{let r="".concat(h||e.name||e.dataKey||"value"),n=y(v,e,r),s=x||e.payload.fill||e.color;return(0,a.jsx)("div",{className:(0,p.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===o&&"items-center"),children:f&&(null==e?void 0:e.value)!==void 0&&e.name?f(e.value,e.name,e,t,e.payload):(0,a.jsxs)(a.Fragment,{children:[(null==n?void 0:n.icon)?(0,a.jsx)(n.icon,{}):!d&&(0,a.jsx)("div",{className:(0,p.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":j&&"dashed"===o}),style:{"--color-bg":s,"--color-border":s}}),(0,a.jsxs)("div",{className:(0,p.cn)("flex flex-1 justify-between leading-none",j?"items-end":"items-center"),children:[(0,a.jsxs)("div",{className:"grid gap-1.5",children:[j?b:null,(0,a.jsx)("span",{className:"text-muted-foreground",children:(null==n?void 0:n.label)||e.name})]}),e.value&&(0,a.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})}).displayName="ChartTooltip",h.D,n.forwardRef((e,t)=>{let{className:r,hideIcon:n=!1,payload:s,verticalAlign:l="bottom",nameKey:o}=e,{config:i}=N();return(null==s?void 0:s.length)?(0,a.jsx)("div",{ref:t,className:(0,p.cn)("flex items-center justify-center gap-4","top"===l?"pb-3":"pt-3",r),children:s.map(e=>{let t="".concat(o||e.dataKey||"value"),r=y(i,e,t);return(0,a.jsxs)("div",{className:(0,p.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==r?void 0:r.icon)&&!n?(0,a.jsx)(r.icon,{}):(0,a.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==r?void 0:r.label]},e.value)})}):null}).displayName="ChartLegend";var w=r(47657),k=r(35935),_=r(89448),R=r(71036);function C(){let{setTheme:e}=(0,_.F)();return(0,a.jsxs)(R.h_,{children:[(0,a.jsx)(R.$F,{asChild:!0,children:(0,a.jsxs)(u.z,{variant:"outline",size:"icon",children:[(0,a.jsx)(k.NWY,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(k.kLh,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,a.jsxs)(R.AW,{align:"end",children:[(0,a.jsx)(R.Xi,{onClick:()=>e("light"),children:"Light"}),(0,a.jsx)(R.Xi,{onClick:()=>e("dark"),children:"Dark"}),(0,a.jsx)(R.Xi,{onClick:()=>e("system"),children:"System"})]})]})}let S={rsrp:{min:-140,max:-70},rsrq:{min:-20,max:-10},sinr:{min:0,max:20}},z=(e,t)=>{let r=S[e];return Math.min(Math.max(Math.round((Math.max(Math.min(t,r.max),r.min)-r.min)/(r.max-r.min)*1e3)/10,0),100)},O=e=>{if(!e)return null;let t=e.map(Number).filter(e=>-32768!==e&&5!==e&&-140!==e);return 0===t.length?null:Math.round(t.reduce((e,t)=>e+t,0)/t.length)};function F(){var e,t,r;let[f,x]=(0,n.useState)({rsrp:null,rsrq:null,sinr:null,networkType:"",bands:null,networkName:""}),[h,p]=(0,n.useState)(!0),g=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("/cgi-bin/fetch_data.sh?set=5"),t=await e.json();if(console.log(t),t){let e={rsrp:O(t[0].response.match(/-?\d+/g)),rsrq:O(t[1].response.match(/-?\d+/g)),sinr:O(t[2].response.match(/-?\d+/g)),networkType:"",bands:null,networkName:""};console.log(e);let r=t[3].response.match(/"LTE BAND \d+"|"NR5G BAND \d+"/g),a=null==r?void 0:r.some(e=>e.includes("LTE")),n=null==r?void 0:r.some(e=>e.includes("NR5G"));e.networkType=a&&n?"NR5G-NSA":a?"LTE":n?"NR5G-SA":"No Signal";let s=null==r?void 0:r.map(e=>e.includes("LTE")?"B".concat(e.match(/\d+/)):e.includes("NR5G")?"N".concat(e.split(" ")[2].replace(/"/g,"").trim()):void 0);e.bands=s?s.join(", "):"No Signal",e.networkName=t[4].response.split("\n")[1].split(":")[1].split(",")[1].replace(/"/g,"").trim()||"No Signal",x(e),g.current=e}}catch(e){console.error("Error fetching stats:",e)}finally{h&&p(!1)}};e();let t=setInterval(e,2e3);return()=>clearInterval(t)},[h]);let v=[{activity:"rsrp",value:null!==f.rsrp?z("rsrp",f.rsrp):0,label:null!==f.rsrp?"".concat(f.rsrp.toFixed(1)," dBm"):"No Signal",fill:"hsl(var(--chart-1))"},{activity:"rsrq",value:null!==f.rsrq?z("rsrq",f.rsrq):0,label:null!==f.rsrq?"".concat(f.rsrq.toFixed(1)," dB"):"No Signal",fill:"hsl(var(--chart-2))"},{activity:"sinr",value:null!==f.sinr?z("sinr",f.sinr):0,label:null!==f.sinr?"".concat(f.sinr.toFixed(1)," dB"):"No Signal",fill:"hsl(var(--chart-3))"}];return(0,a.jsxs)(d.Zb,{className:"xl:max-w-xl xl:w-[800px] max-w-sm",children:[(0,a.jsx)(d.Ol,{children:(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,a.jsx)(d.ll,{children:"QuecManager Quick Stats"}),(0,a.jsx)(C,{})]})}),(0,a.jsxs)(d.aY,{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-evenly items-center w-full p-2 border-t border-b",children:[h?(0,a.jsx)(c.O,{className:"h-8 w-24"}):(0,a.jsx)("div",{children:f.networkName}),(0,a.jsx)(w.Z,{orientation:"vertical",className:"mx-2 h-10 w-px"}),h?(0,a.jsx)(c.O,{className:"h-8 w-24"}):(0,a.jsx)("div",{children:f.networkType}),(0,a.jsx)(w.Z,{orientation:"vertical",className:"mx-2 h-10 w-px"}),h?(0,a.jsx)(c.O,{className:"h-8 w-24"}):(0,a.jsx)("div",{children:f.bands})]}),(0,a.jsx)("div",{className:"flex gap-4 xl:p-4 p-2 pb-2",children:h?(0,a.jsx)(c.O,{className:"h-[140px] w-full"}):(0,a.jsx)(b,{config:{sinr:{label:"sinr",color:"hsl(var(--chart-1))"},rsrp:{label:"rsrp",color:"hsl(var(--chart-2))"},rsrq:{label:"rsrq",color:"hsl(var(--chart-3))"}},className:"h-[140px] w-full",children:(0,a.jsxs)(s.v,{margin:{left:0,right:0,top:0,bottom:10},data:v,layout:"vertical",barSize:32,barGap:2,children:[(0,a.jsx)(l.K,{type:"number",dataKey:"value",hide:!0}),(0,a.jsx)(o.B,{dataKey:"activity",type:"category",tickLine:!1,tickMargin:4,axisLine:!1,className:"uppercase"}),(0,a.jsx)(i.$,{dataKey:"value",radius:5})]})})})]}),(0,a.jsxs)(d.eW,{className:"flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"flex flex-row border-t border-b xl:p-4 p-2 w-full",children:(0,a.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,a.jsxs)("div",{className:"grid flex-1 auto-rows-min gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:"RSRP"}),h?(0,a.jsx)(c.O,{className:"h-8 w-24"}):(0,a.jsxs)("div",{className:"flex items-baseline gap-1 xl:text-2xl text-md font-bold tabular-nums leading-none",children:[null===(e=f.rsrp)||void 0===e?void 0:e.toFixed(1),(0,a.jsx)("span",{className:"text-sm font-normal text-muted-foreground",children:"dBm"})]})]}),(0,a.jsx)(w.Z,{orientation:"vertical",className:"mx-2 h-10 w-px"}),(0,a.jsxs)("div",{className:"grid flex-1 auto-rows-min gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:"RSRQ"}),h?(0,a.jsx)(c.O,{className:"h-8 w-24"}):(0,a.jsxs)("div",{className:"flex items-baseline gap-1 xl:text-2xl text-md font-bold tabular-nums leading-none",children:[null===(t=f.rsrq)||void 0===t?void 0:t.toFixed(1),(0,a.jsx)("span",{className:"text-sm font-normal text-muted-foreground",children:"dB"})]})]}),(0,a.jsx)(w.Z,{orientation:"vertical",className:"mx-2 h-10 w-px"}),(0,a.jsxs)("div",{className:"grid flex-1 auto-rows-min gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:"SINR"}),h?(0,a.jsx)(c.O,{className:"h-8 w-24"}):(0,a.jsxs)("div",{className:"flex items-baseline gap-1 xl:text-2xl text-md font-bold tabular-nums leading-none",children:[null===(r=f.sinr)||void 0===r?void 0:r.toFixed(1),(0,a.jsx)("span",{className:"text-sm font-normal text-muted-foreground",children:"dB"})]})]})]})}),(0,a.jsx)(u.z,{asChild:!0,children:(0,a.jsxs)(m.default,{href:"/login",children:["Login to QuecManager",(0,a.jsx)(k.LZ3,{className:"w-4 h-4 ml-2"})]})})]})]})}},78580:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return d}});var a=r(20881),n=r(64149),s=r(54098),l=r(20116),o=r(90270);let i=(0,l.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:l,className:r})),ref:t,...c})});d.displayName="Button"},94920:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return i}});var a=r(20881),n=r(64149),s=r(90270);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});l.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});c.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},71036:function(e,t,r){"use strict";r.d(t,{$F:function(){return d},AW:function(){return c},Ju:function(){return m},VD:function(){return f},Xi:function(){return u},h_:function(){return i}});var a=r(20881),n=r(64149),s=r(67293),l=r(35935),o=r(90270);let i=s.fC,d=s.xz;s.ZA,s.Uv,s.Tr,s.Ee,n.forwardRef((e,t)=>{let{className:r,inset:n,children:i,...d}=e;return(0,a.jsxs)(s.fF,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",r),...d,children:[i,(0,a.jsx)(l.XCv,{className:"ml-auto h-4 w-4"})]})}).displayName=s.fF.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.tu,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n})}).displayName=s.tu.displayName;let c=n.forwardRef((e,t)=>{let{className:r,sideOffset:n=4,...l}=e;return(0,a.jsx)(s.Uv,{children:(0,a.jsx)(s.VY,{ref:t,sideOffset:n,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});c.displayName=s.VY.displayName;let u=n.forwardRef((e,t)=>{let{className:r,inset:n,...l}=e;return(0,a.jsx)(s.ck,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",r),...l})});u.displayName=s.ck.displayName,n.forwardRef((e,t)=>{let{className:r,children:n,checked:i,...d}=e;return(0,a.jsxs)(s.oC,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:i,...d,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(l.nQG,{className:"h-4 w-4"})})}),n]})}).displayName=s.oC.displayName,n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,a.jsxs)(s.Rk,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(l.jXb,{className:"h-4 w-4 fill-current"})})}),n]})}).displayName=s.Rk.displayName;let m=n.forwardRef((e,t)=>{let{className:r,inset:n,...l}=e;return(0,a.jsx)(s.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",r),...l})});m.displayName=s.__.displayName;let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",r),...n})});f.displayName=s.Z0.displayName},47657:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(20881),n=r(64149),s=r(48897),l=r(90270);let o=n.forwardRef((e,t)=>{let{className:r,orientation:n="horizontal",decorative:o=!0,...i}=e;return(0,a.jsx)(s.f,{ref:t,decorative:o,orientation:n,className:(0,l.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",r),...i})});o.displayName=s.f.displayName},88766:function(e,t,r){"use strict";r.d(t,{O:function(){return s}});var a=r(20881),n=r(90270);function s(e){let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)("animate-pulse rounded-md bg-primary/10",t),...r})}},90270:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(33958),n=r(61779);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}}},function(e){e.O(0,[792,366,714,217,420,509,136,396,985,330,744],function(){return e(e.s=32012)}),_N_E=e.O()}]);