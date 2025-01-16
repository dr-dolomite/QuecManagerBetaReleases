(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974],{47143:(e,t,r)=>{Promise.resolve().then(r.bind(r,69363))},69363:(e,t,r)=>{"use strict";r.d(t,{default:()=>R});var a=r(20475),n=r(20107),s=r(90805),l=r(17255),o=r(4538),i=r(41797),d=r(98456),c=(0,s.gu)({chartName:"BarChart",GraphicalChild:l.y,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:o.W},{axisType:"yAxis",AxisComp:i.h}],formatAxisMap:d.pr}),u=r(72167),m=r(36760),f=r(42541),x=r(9477),p=r.n(x),h=r(1307),v=r(76554),g=r(7197),N=r(39524),b=r(86118);function y(){let{setTheme:e}=(0,N.D)();return(0,a.jsxs)(b.rI,{children:[(0,a.jsx)(b.ty,{asChild:!0,children:(0,a.jsxs)(f.$,{variant:"outline",size:"icon",children:[(0,a.jsx)(g.gLX,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(g.rRK,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,a.jsxs)(b.SQ,{align:"end",children:[(0,a.jsx)(b._2,{onClick:()=>e("light"),children:"Light"}),(0,a.jsx)(b._2,{onClick:()=>e("dark"),children:"Dark"}),(0,a.jsx)(b._2,{onClick:()=>e("system"),children:"System"})]})]})}let j={rsrp:{min:-140,max:-70},rsrq:{min:-20,max:-10},sinr:{min:0,max:20}},w=(e,t)=>{let r=j[e];return Math.min(Math.max(Math.round(10*((Math.max(Math.min(t,r.max),r.min)-r.min)/(r.max-r.min)*100))/10,0),100)},k=e=>{if(!e)return null;let t=e.map(Number).filter(e=>-32768!==e&&5!==e&&-140!==e);return 0===t.length?null:Math.round(t.reduce((e,t)=>e+t,0)/t.length)};function R(){var e,t,r;let[s,d]=(0,n.useState)({rsrp:null,rsrq:null,sinr:null,networkType:"",bands:null,networkName:""}),[x,N]=(0,n.useState)(!0),b=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("/cgi-bin/fetch_data.sh?set=5"),t=await e.json();if(console.log(t),t){let e={rsrp:k(t[0].response.match(/-?\d+/g)),rsrq:k(t[1].response.match(/-?\d+/g)),sinr:k(t[2].response.match(/-?\d+/g)),networkType:"",bands:null,networkName:""};console.log(e);let r=t[3].response.match(/"LTE BAND \d+"|"NR5G BAND \d+"/g),a=null==r?void 0:r.some(e=>e.includes("LTE")),n=null==r?void 0:r.some(e=>e.includes("NR5G"));e.networkType=a&&n?"NR5G-NSA":a?"LTE":n?"NR5G-SA":"No Signal";let s=null==r?void 0:r.map(e=>e.includes("LTE")?"B".concat(e.match(/\d+/)):e.includes("NR5G")?"N".concat(e.split(" ")[2].replace(/"/g,"").trim()):void 0);e.bands=s?s.join(", "):"No Signal",e.networkName=t[4].response.split("\n")[1].split(":")[1].split(",")[1].replace(/"/g,"").trim()||"No Signal",d(e),b.current=e}}catch(e){console.error("Error fetching stats:",e)}finally{x&&N(!1)}};e();let t=setInterval(e,2e3);return()=>clearInterval(t)},[x]);let j=[{activity:"rsrp",value:null!==s.rsrp?w("rsrp",s.rsrp):0,label:null!==s.rsrp?"".concat(s.rsrp.toFixed(1)," dBm"):"No Signal",fill:"hsl(var(--chart-1))"},{activity:"rsrq",value:null!==s.rsrq?w("rsrq",s.rsrq):0,label:null!==s.rsrq?"".concat(s.rsrq.toFixed(1)," dB"):"No Signal",fill:"hsl(var(--chart-2))"},{activity:"sinr",value:null!==s.sinr?w("sinr",s.sinr):0,label:null!==s.sinr?"".concat(s.sinr.toFixed(1)," dB"):"No Signal",fill:"hsl(var(--chart-3))"}];return(0,a.jsxs)(u.Zp,{className:"xl:max-w-xl xl:w-[800px] max-w-sm",children:[(0,a.jsx)(u.aR,{children:(0,a.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,a.jsx)(u.ZB,{children:"QuecManager Quick Stats"}),(0,a.jsx)(y,{})]})}),(0,a.jsxs)(u.Wu,{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-row justify-evenly items-center w-full p-2 border-t border-b",children:[x?(0,a.jsx)(m.E,{className:"h-8 w-24"}):(0,a.jsx)("div",{children:s.networkName}),(0,a.jsx)(v.w,{orientation:"vertical",className:"mx-2 h-10 w-px"}),x?(0,a.jsx)(m.E,{className:"h-8 w-24"}):(0,a.jsx)("div",{children:s.networkType}),(0,a.jsx)(v.w,{orientation:"vertical",className:"mx-2 h-10 w-px"}),x?(0,a.jsx)(m.E,{className:"h-8 w-24"}):(0,a.jsx)("div",{children:s.bands})]}),(0,a.jsx)("div",{className:"flex gap-4 xl:p-4 p-2 pb-2",children:x?(0,a.jsx)(m.E,{className:"h-[140px] w-full"}):(0,a.jsx)(h.at,{config:{sinr:{label:"sinr",color:"hsl(var(--chart-1))"},rsrp:{label:"rsrp",color:"hsl(var(--chart-2))"},rsrq:{label:"rsrq",color:"hsl(var(--chart-3))"}},className:"h-[140px] w-full",children:(0,a.jsxs)(c,{margin:{left:0,right:0,top:0,bottom:10},data:j,layout:"vertical",barSize:32,barGap:2,children:[(0,a.jsx)(o.W,{type:"number",dataKey:"value",hide:!0}),(0,a.jsx)(i.h,{dataKey:"activity",type:"category",tickLine:!1,tickMargin:4,axisLine:!1,className:"uppercase"}),(0,a.jsx)(l.y,{dataKey:"value",radius:5})]})})})]}),(0,a.jsxs)(u.wL,{className:"flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"flex flex-row border-t border-b xl:p-4 p-2 w-full",children:(0,a.jsxs)("div",{className:"flex w-full items-center gap-2",children:[(0,a.jsxs)("div",{className:"grid flex-1 auto-rows-min gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:"RSRP"}),x?(0,a.jsx)(m.E,{className:"h-8 w-24"}):(0,a.jsxs)("div",{className:"flex items-baseline gap-1 xl:text-2xl text-md font-bold tabular-nums leading-none",children:[null===(e=s.rsrp)||void 0===e?void 0:e.toFixed(1),(0,a.jsx)("span",{className:"text-sm font-normal text-muted-foreground",children:"dBm"})]})]}),(0,a.jsx)(v.w,{orientation:"vertical",className:"mx-2 h-10 w-px"}),(0,a.jsxs)("div",{className:"grid flex-1 auto-rows-min gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:"RSRQ"}),x?(0,a.jsx)(m.E,{className:"h-8 w-24"}):(0,a.jsxs)("div",{className:"flex items-baseline gap-1 xl:text-2xl text-md font-bold tabular-nums leading-none",children:[null===(t=s.rsrq)||void 0===t?void 0:t.toFixed(1),(0,a.jsx)("span",{className:"text-sm font-normal text-muted-foreground",children:"dB"})]})]}),(0,a.jsx)(v.w,{orientation:"vertical",className:"mx-2 h-10 w-px"}),(0,a.jsxs)("div",{className:"grid flex-1 auto-rows-min gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs text-muted-foreground",children:"SINR"}),x?(0,a.jsx)(m.E,{className:"h-8 w-24"}):(0,a.jsxs)("div",{className:"flex items-baseline gap-1 xl:text-2xl text-md font-bold tabular-nums leading-none",children:[null===(r=s.sinr)||void 0===r?void 0:r.toFixed(1),(0,a.jsx)("span",{className:"text-sm font-normal text-muted-foreground",children:"dB"})]})]})]})}),(0,a.jsx)(f.$,{asChild:!0,children:(0,a.jsxs)(p(),{href:"/login",children:["Login to QuecManager",(0,a.jsx)(g.flY,{className:"w-4 h-4 ml-2"})]})})]})]})}},42541:(e,t,r)=>{"use strict";r.d(t,{$:()=>d,r:()=>i});var a=r(20475),n=r(20107),s=r(61837),l=r(29395),o=r(22250);let i=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:d=!1,...c}=e,u=d?s.DX:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:l,className:r})),ref:t,...c})});d.displayName="Button"},72167:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>i,Zp:()=>l,aR:()=>o,wL:()=>u});var a=r(20475),n=r(20107),s=r(22250);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});l.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});c.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})});u.displayName="CardFooter"},1307:(e,t,r)=>{"use strict";r.d(t,{II:()=>x,Nt:()=>p,at:()=>m});var a=r(20475),n=r(20107),s=r(81155),l=r(80982),o=r(58736),i=r(22250);let d={light:"",dark:".dark"},c=n.createContext(null);function u(){let e=n.useContext(c);if(!e)throw Error("useChart must be used within a <ChartContainer />");return e}let m=n.forwardRef((e,t)=>{let{id:r,className:l,children:o,config:d,...u}=e,m=n.useId(),x="chart-".concat(r||m.replace(/:/g,""));return(0,a.jsx)(c.Provider,{value:{config:d},children:(0,a.jsxs)("div",{"data-chart":x,ref:t,className:(0,i.cn)("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",l),...u,children:[(0,a.jsx)(f,{id:x,config:d}),(0,a.jsx)(s.u,{children:o})]})})});m.displayName="Chart";let f=e=>{let{id:t,config:r}=e,n=Object.entries(r).filter(e=>{let[t,r]=e;return r.theme||r.color});return n.length?(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:Object.entries(d).map(e=>{let[r,a]=e;return"\n".concat(a," [data-chart=").concat(t,"] {\n").concat(n.map(e=>{var t;let[a,n]=e,s=(null===(t=n.theme)||void 0===t?void 0:t[r])||n.color;return s?"  --color-".concat(a,": ").concat(s,";"):null}).join("\n"),"\n}\n")}).join("\n")}}):null},x=l.m,p=n.forwardRef((e,t)=>{let{active:r,payload:s,className:l,indicator:o="dot",hideLabel:d=!1,hideIndicator:c=!1,label:m,labelFormatter:f,labelClassName:x,formatter:p,color:v,nameKey:g,labelKey:N}=e,{config:b}=u(),y=n.useMemo(()=>{var e;if(d||!(null==s?void 0:s.length))return null;let[t]=s,r="".concat(N||t.dataKey||t.name||"value"),n=h(b,t,r),l=N||"string"!=typeof m?null==n?void 0:n.label:(null===(e=b[m])||void 0===e?void 0:e.label)||m;return f?(0,a.jsx)("div",{className:(0,i.cn)("font-medium",x),children:f(l,s)}):l?(0,a.jsx)("div",{className:(0,i.cn)("font-medium",x),children:l}):null},[m,f,s,d,x,b,N]);if(!r||!(null==s?void 0:s.length))return null;let j=1===s.length&&"dot"!==o;return(0,a.jsxs)("div",{ref:t,className:(0,i.cn)("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",l),children:[j?null:y,(0,a.jsx)("div",{className:"grid gap-1.5",children:s.map((e,t)=>{let r="".concat(g||e.name||e.dataKey||"value"),n=h(b,e,r),s=v||e.payload.fill||e.color;return(0,a.jsx)("div",{className:(0,i.cn)("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground","dot"===o&&"items-center"),children:p&&(null==e?void 0:e.value)!==void 0&&e.name?p(e.value,e.name,e,t,e.payload):(0,a.jsxs)(a.Fragment,{children:[(null==n?void 0:n.icon)?(0,a.jsx)(n.icon,{}):!c&&(0,a.jsx)("div",{className:(0,i.cn)("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",{"h-2.5 w-2.5":"dot"===o,"w-1":"line"===o,"w-0 border-[1.5px] border-dashed bg-transparent":"dashed"===o,"my-0.5":j&&"dashed"===o}),style:{"--color-bg":s,"--color-border":s}}),(0,a.jsxs)("div",{className:(0,i.cn)("flex flex-1 justify-between leading-none",j?"items-end":"items-center"),children:[(0,a.jsxs)("div",{className:"grid gap-1.5",children:[j?y:null,(0,a.jsx)("span",{className:"text-muted-foreground",children:(null==n?void 0:n.label)||e.name})]}),e.value&&(0,a.jsx)("span",{className:"font-mono font-medium tabular-nums text-foreground",children:e.value.toLocaleString()})]})]})},e.dataKey)})})]})});function h(e,t,r){if("object"!=typeof t||null===t)return;let a="payload"in t&&"object"==typeof t.payload&&null!==t.payload?t.payload:void 0,n=r;return r in t&&"string"==typeof t[r]?n=t[r]:a&&r in a&&"string"==typeof a[r]&&(n=a[r]),n in e?e[n]:e[r]}p.displayName="ChartTooltip",o.s,n.forwardRef((e,t)=>{let{className:r,hideIcon:n=!1,payload:s,verticalAlign:l="bottom",nameKey:o}=e,{config:d}=u();return(null==s?void 0:s.length)?(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center justify-center gap-4","top"===l?"pb-3":"pt-3",r),children:s.map(e=>{let t="".concat(o||e.dataKey||"value"),r=h(d,e,t);return(0,a.jsxs)("div",{className:(0,i.cn)("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),children:[(null==r?void 0:r.icon)&&!n?(0,a.jsx)(r.icon,{}):(0,a.jsx)("div",{className:"h-2 w-2 shrink-0 rounded-[2px]",style:{backgroundColor:e.color}}),null==r?void 0:r.label]},e.value)})}):null}).displayName="ChartLegend"},86118:(e,t,r)=>{"use strict";r.d(t,{SQ:()=>c,_2:()=>u,lp:()=>m,mB:()=>f,rI:()=>i,ty:()=>d});var a=r(20475),n=r(20107),s=r(33169),l=r(7197),o=r(22250);let i=s.bL,d=s.l9;s.YJ,s.ZL,s.Pb,s.z6,n.forwardRef((e,t)=>{let{className:r,inset:n,children:i,...d}=e;return(0,a.jsxs)(s.ZP,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",r),...d,children:[i,(0,a.jsx)(l.vKP,{className:"ml-auto h-4 w-4"})]})}).displayName=s.ZP.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.G5,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...n})}).displayName=s.G5.displayName;let c=n.forwardRef((e,t)=>{let{className:r,sideOffset:n=4,...l}=e;return(0,a.jsx)(s.ZL,{children:(0,a.jsx)(s.UC,{ref:t,sideOffset:n,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});c.displayName=s.UC.displayName;let u=n.forwardRef((e,t)=>{let{className:r,inset:n,...l}=e;return(0,a.jsx)(s.q7,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",r),...l})});u.displayName=s.q7.displayName,n.forwardRef((e,t)=>{let{className:r,children:n,checked:i,...d}=e;return(0,a.jsxs)(s.H_,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:i,...d,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.VF,{children:(0,a.jsx)(l.Srz,{className:"h-4 w-4"})})}),n]})}).displayName=s.H_.displayName,n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,a.jsxs)(s.hN,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.VF,{children:(0,a.jsx)(l.RiX,{className:"h-4 w-4 fill-current"})})}),n]})}).displayName=s.hN.displayName;let m=n.forwardRef((e,t)=>{let{className:r,inset:n,...l}=e;return(0,a.jsx)(s.JU,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",r),...l})});m.displayName=s.JU.displayName;let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.wv,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",r),...n})});f.displayName=s.wv.displayName},76554:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var a=r(20475),n=r(20107),s=r(55809),l=r(22250);let o=n.forwardRef((e,t)=>{let{className:r,orientation:n="horizontal",decorative:o=!0,...i}=e;return(0,a.jsx)(s.b,{ref:t,decorative:o,orientation:n,className:(0,l.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",r),...i})});o.displayName=s.b.displayName},36760:(e,t,r)=>{"use strict";r.d(t,{E:()=>s});var a=r(20475),n=r(22250);function s(e){let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)("animate-pulse rounded-md bg-primary/10",t),...r})}},22250:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(64901),n=r(868);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}},62796:(e,t,r)=>{"use strict";r.d(t,{C:()=>l});var a=r(20107),n=r(74111),s=r(58013),l=e=>{let{present:t,children:r}=e,l=function(e){var t,r;let[n,l]=a.useState(),i=a.useRef({}),d=a.useRef(e),c=a.useRef("none"),[u,m]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},a.useReducer((e,t)=>{let a=r[e][t];return null!=a?a:e},t));return a.useEffect(()=>{let e=o(i.current);c.current="mounted"===u?e:"none"},[u]),(0,s.N)(()=>{let t=i.current,r=d.current;if(r!==e){let a=c.current,n=o(t);e?m("MOUNT"):"none"===n||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):r&&a!==n?m("ANIMATION_OUT"):m("UNMOUNT"),d.current=e}},[e,m]),(0,s.N)(()=>{if(n){var e;let t;let r=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,a=e=>{let a=o(i.current).includes(e.animationName);if(e.target===n&&a&&(m("ANIMATION_END"),!d.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},s=e=>{e.target===n&&(c.current=o(i.current))};return n.addEventListener("animationstart",s),n.addEventListener("animationcancel",a),n.addEventListener("animationend",a),()=>{r.clearTimeout(t),n.removeEventListener("animationstart",s),n.removeEventListener("animationcancel",a),n.removeEventListener("animationend",a)}}m("ANIMATION_END")},[n,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:a.useCallback(e=>{e&&(i.current=getComputedStyle(e)),l(e)},[])}}(t),i="function"==typeof r?r({present:l.isPresent}):a.Children.only(r),d=(0,n.s)(l.ref,function(e){var t,r;let a=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,n=a&&"isReactWarning"in a&&a.isReactWarning;return n?e.ref:(n=(a=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in a&&a.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof r||l.isPresent?a.cloneElement(i,{ref:d}):null};function o(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},55809:(e,t,r)=>{"use strict";r.d(t,{b:()=>d});var a=r(20107),n=r(4589),s=r(20475),l="horizontal",o=["horizontal","vertical"],i=a.forwardRef((e,t)=>{let{decorative:r,orientation:a=l,...i}=e,d=o.includes(a)?a:l;return(0,s.jsx)(n.sG.div,{"data-orientation":d,...r?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...i,ref:t})});i.displayName="Separator";var d=i}},e=>{var t=t=>e(e.s=t);e.O(0,[9980,7780,1617,5011,4673,9477,1074,9700,191,6035,7358],()=>t(47143)),_N_E=e.O()}]);