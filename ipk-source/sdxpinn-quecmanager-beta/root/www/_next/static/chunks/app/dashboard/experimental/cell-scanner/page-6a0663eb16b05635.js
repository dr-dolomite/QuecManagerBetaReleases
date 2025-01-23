(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5014],{41126:(e,t,s)=>{Promise.resolve().then(s.bind(s,6982))},6982:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>N});var a=s(20475),r=s(20107),n=s(72167),l=s(51303),c=s(85014),i=s(42541),d=s(93069),o=s(22250);let u=r.forwardRef((e,t)=>{let{className:s,value:r,...n}=e;return(0,a.jsx)(d.bL,{ref:t,className:(0,o.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",s),...n,children:(0,a.jsx)(d.C1,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(r||0),"%)")}})})});u.displayName=d.bL.displayName;var m=s(59166),x=s(27720),f=s(91994),p=s(76076),h=s(51873),g=s(45934),j=s(38741),b=s(36824),v=s(32857);let N=()=>{let{toast:e}=(0,v.dj)(),[t,s]=(0,r.useState)(null),[d,o]=(0,r.useState)(null),[N,y]=(0,r.useState)(0),[w,C]=(0,r.useState)(!1),[S,T]=(0,r.useState)(null),[k,A]=(0,r.useState)([]),[R,I]=(0,r.useState)({status:"idle",progress:0,message:""});(0,r.useEffect)(()=>{if(!d){y(0);return}let e=()=>{let t=new Date(d).getTime(),s=Math.max(0,3e4-(new Date().getTime()-t));y(s),s>0&&requestAnimationFrame(e)};e()},[d]);let _=(0,r.useCallback)(async()=>{try{let e=await fetch("/cgi-bin/experimental/cell_scanner/fetch_mccmnc.sh"),t=await e.json();A(t)}catch(t){console.error("Failed to fetch MCC-MNC list:",t),e({title:"Warning",description:"Failed to load operator information",variant:"destructive"})}},[]);(0,r.useEffect)(()=>{_()},[_]);let E=(0,r.useCallback)(async()=>{try{let e=await fetch("/cgi-bin/experimental/quecwatch/quecwatch-fetch.sh"),t=await e.json();T(t)}catch(t){console.error("Failed to fetch Quecwatch status:",t),e({title:"Error",description:"Failed to check Quecwatch status",variant:"destructive"})}},[]),F=(0,r.useCallback)((e,t)=>k.find(s=>s.mcc===e&&s.mnc===t)||null,[k]),O=(0,r.useCallback)(e=>e.split("\n").filter(e=>e.trim().startsWith("+QSCAN:")).map(e=>{let[t,s,a,r,n,l,c,i,...d]=e.substring(e.indexOf(":")+1).split(",").map(e=>e.trim().replace(/["\r]/g,"")),o={type:t.trim(),mcc:s,mnc:a,freq:parseInt(r),pci:parseInt(n),rsrp:parseInt(l),rsrq:parseInt(c),srxlev:parseInt(i)};if("LTE"===t.trim()){let[e,t,s,a,r]=d;return{...o,type:"LTE",squal:parseInt(e),cellId:t,tac:s,bandwidth:parseInt(a),band:parseInt(r)}}{let[e,t,s,a,r,n,l,c]=d;return{...o,type:"NR5G",scs:parseInt(e),cellId:t,tac:s,carrierBandwidth:parseInt(a),band:parseInt(r),offsetToPointA:parseInt(n),ssbSubcarrierOffset:parseInt(l),ssbScs:parseInt(c)}}}),[]),D=(0,r.useCallback)(async()=>{try{let e=await fetch("/cgi-bin/experimental/cell_scanner/check_scan.sh"),t=await e.json();"success"===t.status&&t.output?(s(t),o(t.timestamp||null),I({status:"idle",progress:100,message:""})):"running"===t.status&&(I({status:"scanning",progress:50,message:"Scan in progress..."}),setTimeout(D,2e3))}catch(t){console.error("Failed to check scan status",t),e({title:"Error",description:"Failed to check scan status",variant:"destructive"})}},[]),M=(0,r.useCallback)(async()=>{if("scanning"!==R.status&&!w){C(!0),I({status:"scanning",progress:0,message:"Initiating scan..."}),s(null),o(null);try{let e=await fetch("/cgi-bin/experimental/cell_scanner/cell_scan.sh"),t=await e.json();if("running"===t.status)I({status:"scanning",progress:10,message:"Scan started..."}),setTimeout(D,2e3);else throw Error(t.message||"Failed to start scan")}catch(t){e({title:"Error",description:"Failed to start cell scan",variant:"destructive"}),I({status:"idle",progress:0,message:""})}finally{C(!1)}}},[R.status,w,D]),P=(0,r.useCallback)(e=>e.reduce((e,t)=>{let s="".concat(t.mcc).concat(t.mnc);if(!e[s]){let a=F(t.mcc,t.mnc);e[s]={cells:[],operatorInfo:a}}return e[s].cells.push(t),e},{}),[F]),B=(0,r.useCallback)(e=>[...e].sort((e,t)=>e.type!==t.type?"LTE"===e.type?-1:1:t.rsrp-e.rsrp),[]),L=(0,r.useCallback)(e=>e>=-65?(0,a.jsx)(j.z_q,{className:"text-xl"}):e>=-75?(0,a.jsx)(j.sRp,{className:"text-xl"}):e>=-85?(0,a.jsx)(j.ztD,{className:"text-xl"}):e>=-95?(0,a.jsx)(j.G7Q,{className:"text-xl"}):(0,a.jsx)(j.NJ4,{className:"text-xl"}),[]);(0,r.useEffect)(()=>{D(),E()},[D,E]);let q=(0,r.useCallback)(()=>{s(null),o(null),I({status:"idle",progress:0,message:""})},[]),$=(0,r.useCallback)(()=>{if(!(null==t?void 0:t.output))return;let e=new Blob([["Type,MCC,MNC,Frequency,PCI,RSRP,RSRQ,Band,Cell ID,TAC",...O(t.output).map(e=>"".concat(e.type,",").concat(e.mcc,",").concat(e.mnc,",").concat(e.freq,",").concat(e.pci,",").concat(e.rsrp,",").concat(e.rsrq,",").concat(e.band,",").concat(e.cellId,",").concat(e.tac))].join("\n")],{type:"text/csv;charset=utf-8;"}),s=document.createElement("a");s.href=URL.createObjectURL(e),s.setAttribute("download","cell_scan_".concat(new Date().toISOString(),".csv")),document.body.appendChild(s),s.click(),document.body.removeChild(s)},[t,O]),z=(0,r.useCallback)((e,t,s)=>s?"".concat(e).concat(t," - ").concat(s.brand," by ").concat(s.operator):"".concat(e).concat(t),[]),Z=(null==t?void 0:t.status)==="success"&&t.output?P(O(t.output)):{};return(0,a.jsx)("div",{className:"grid gap-5",children:(0,a.jsxs)(n.Zp,{children:[(0,a.jsxs)(n.aR,{children:[(0,a.jsx)(n.ZB,{children:"Full Network Cell Scan"}),(0,a.jsxs)(n.BT,{children:["Scan all available network cells, including those from other network providers.",d&&(0,a.jsxs)("div",{className:"mt-1 text-sm text-muted-foreground",children:["Last scan: ",d]})]})]}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)(b.F,{className:"h-96",children:[!t&&"idle"===R.status&&(0,a.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,a.jsx)("p",{className:"text-gray-500 text-center",children:"Click the button below to start scanning the network..."})}),"scanning"===R.status&&(0,a.jsxs)("div",{className:"flex flex-col space-y-2 items-center justify-center h-full w-full",children:[(0,a.jsx)(u,{value:R.progress,className:"w-full"}),(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("p",{className:"text-sm text-gray-500 text-center",children:R.message})})]}),(0,a.jsx)("div",{className:"grid gap-4",children:Object.entries(Z).map(e=>{let[t,{cells:s,operatorInfo:r}]=e;return(0,a.jsxs)(n.Zp,{className:"p-4 grid gap-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)(g.E,{children:z(s[0].mcc,s[0].mnc,r)})}),(0,a.jsxs)(l.XI,{children:[(0,a.jsx)(l.A0,{children:(0,a.jsxs)(l.Hj,{children:[(0,a.jsx)(l.nd,{children:"Type"}),(0,a.jsx)(l.nd,{children:"E/ARFCN"}),(0,a.jsx)(l.nd,{children:"PCI"}),(0,a.jsx)(l.nd,{children:"Band"}),(0,a.jsx)(l.nd,{children:"Cell ID"}),(0,a.jsx)(l.nd,{children:"TAC"}),(0,a.jsx)(l.nd,{children:"Signal"})]})}),(0,a.jsx)(l.BF,{children:B(s).map((e,t)=>(0,a.jsxs)(l.Hj,{children:[(0,a.jsx)(l.nA,{children:e.type}),(0,a.jsx)(l.nA,{children:e.freq}),(0,a.jsx)(l.nA,{children:e.pci}),(0,a.jsx)(l.nA,{children:e.band}),(0,a.jsx)(l.nA,{children:e.cellId}),(0,a.jsx)(l.nA,{children:e.tac}),(0,a.jsx)(l.nA,{children:(0,a.jsx)(c.TooltipProvider,{children:(0,a.jsxs)(c.m_,{children:[(0,a.jsx)(c.k$,{children:L(e.rsrp)}),(0,a.jsx)(c.ZI,{children:(0,a.jsxs)("div",{className:"grid gap-1",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-1",children:["RSRP"," ",(0,a.jsxs)("span",{className:"font-medium",children:[e.rsrp," dBm"]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-1",children:["RSRQ"," ",(0,a.jsxs)("span",{className:"font-medium",children:[e.rsrq," dB"]})]})]})})]})})})]},"".concat(e.cellId,"-").concat(t)))})]})]},t)})})]})}),(0,a.jsx)(n.wL,{className:"border-t py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(null==S?void 0:S.status)==="active"?(0,a.jsx)(c.TooltipProvider,{children:(0,a.jsxs)(c.m_,{children:[(0,a.jsx)(c.k$,{children:(0,a.jsx)(i.$,{disabled:!0,children:"scanning"===R.status?(0,a.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,a.jsx)(m.A,{className:"animate-spin w-4 h-4"}),(0,a.jsx)("span",{children:"Scanning Network..."})]}):t?(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(f.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"Run Cell Scan Again"})]}):(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(x.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"Start Cell Scan"})]})})}),(0,a.jsx)(c.ZI,{children:"Please disable Quecwatch first before proceeding."})]})}):(0,a.jsx)(c.TooltipProvider,{children:(0,a.jsxs)(c.m_,{children:[(0,a.jsx)(c.k$,{children:(0,a.jsx)(i.$,{onClick:M,disabled:"scanning"===R.status||w||N>0,children:"scanning"===R.status?(0,a.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,a.jsx)(m.A,{className:"animate-spin w-4 h-4"}),(0,a.jsx)("span",{children:"Scanning Network..."})]}):t?(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(f.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"Run Cell Scan Again"})]}):(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(x.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"Start Cell Scan"})]})})}),(0,a.jsx)(c.ZI,{children:N>0?(0,a.jsxs)("span",{children:["Please wait ",Math.ceil(N/1e3)," ","seconds before scanning again"]}):(0,a.jsx)("span",{children:"Start a new network scan"})})]})}),(null==t?void 0:t.status)==="success"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.$,{variant:"secondary",onClick:$,disabled:"scanning"===R.status,children:[(0,a.jsx)(p.A,{className:"w-4 h-4 mr-2"}),"Export to CSV"]}),(0,a.jsxs)(i.$,{variant:"destructive",onClick:q,disabled:"scanning"===R.status,children:[(0,a.jsx)(h.A,{className:"w-4 h-4 mr-2"}),"Clear Results"]})]})]})})]})})}},45934:(e,t,s)=>{"use strict";s.d(t,{E:()=>c});var a=s(20475);s(20107);var r=s(29395),n=s(22250);let l=(0,r.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function c(e){let{className:t,variant:s,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)(l({variant:s}),t),...r})}},42541:(e,t,s)=>{"use strict";s.d(t,{$:()=>d,r:()=>i});var a=s(20475),r=s(20107),n=s(61837),l=s(29395),c=s(22250);let i=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:d=!1,...o}=e,u=d?n.DX:"button";return(0,a.jsx)(u,{className:(0,c.cn)(i({variant:r,size:l,className:s})),ref:t,...o})});d.displayName="Button"},72167:(e,t,s)=>{"use strict";s.d(t,{BT:()=>d,Wu:()=>o,ZB:()=>i,Zp:()=>l,aR:()=>c,wL:()=>u});var a=s(20475),r=s(20107),n=s(22250);let l=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",s),...r})});l.displayName="Card";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",s),...r})});c.displayName="CardHeader";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",s),...r})});i.displayName="CardTitle";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",s),...r})});d.displayName="CardDescription";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",s),...r})});o.displayName="CardContent";let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",s),...r})});u.displayName="CardFooter"},36824:(e,t,s)=>{"use strict";s.d(t,{$:()=>i,F:()=>c});var a=s(20475),r=s(20107),n=s(34568),l=s(22250);let c=r.forwardRef((e,t)=>{let{className:s,children:r,...c}=e;return(0,a.jsxs)(n.bL,{ref:t,className:(0,l.cn)("relative overflow-hidden",s),...c,children:[(0,a.jsx)(n.LM,{className:"h-full w-full rounded-[inherit]",children:r}),(0,a.jsx)(i,{}),(0,a.jsx)(n.OK,{})]})});c.displayName=n.bL.displayName;let i=r.forwardRef((e,t)=>{let{className:s,orientation:r="vertical",...c}=e;return(0,a.jsx)(n.VM,{ref:t,orientation:r,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",s),...c,children:(0,a.jsx)(n.lr,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=n.VM.displayName},51303:(e,t,s)=>{"use strict";s.d(t,{A0:()=>c,BF:()=>i,Hj:()=>d,XI:()=>l,nA:()=>u,nd:()=>o,r6:()=>m});var a=s(20475),r=s(20107),n=s(22250);let l=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",s),...r})})});l.displayName="Table";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",s),...r})});c.displayName="TableHeader";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",s),...r})});i.displayName="TableBody",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...r})}).displayName="TableFooter";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...r})});d.displayName="TableRow";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("th",{ref:t,className:(0,n.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s),...r})});o.displayName="TableHead";let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("td",{ref:t,className:(0,n.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",s),...r})});u.displayName="TableCell";let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",s),...r})});m.displayName="TableCaption"},85014:(e,t,s)=>{"use strict";s.d(t,{TooltipProvider:()=>c,ZI:()=>o,k$:()=>d,m_:()=>i});var a=s(20475),r=s(20107),n=s(84623),l=s(22250);let c=n.Kq,i=n.bL,d=n.l9,o=r.forwardRef((e,t)=>{let{className:s,sideOffset:r=4,...c}=e;return(0,a.jsx)(n.UC,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...c})});o.displayName=n.UC.displayName},32857:(e,t,s)=>{"use strict";s.d(t,{dj:()=>m,oR:()=>u});var a=s(20107);let r=0,n=new Map,l=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),o({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},c=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?l(s):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],d={toasts:[]};function o(e){d=c(d,e),i.forEach(e=>{e(d)})}function u(e){let{...t}=e,s=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>o({type:"DISMISS_TOAST",toastId:s});return o({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>o({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function m(){let[e,t]=a.useState(d);return a.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>o({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(64901),r=s(868);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.QP)((0,a.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[2101,7780,1617,4673,4568,4623,3742,191,6035,7358],()=>t(41126)),_N_E=e.O()}]);