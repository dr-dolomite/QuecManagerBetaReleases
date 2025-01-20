(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{80631:(e,t,r)=>{Promise.resolve().then(r.bind(r,92040))},92040:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var a=r(20475),s=r(20107),o=r(72167),l=r(36824),n=r(42541),i=r(49153),d=r(31739),c=r(64219),m=r(51873),u=r(39997);let p=(0,u.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var f=r(66698);let x=(0,u.A)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var h=r(76554),g=r(32857),y=r(76837),v=r(51303);let w=()=>{let e=(0,g.dj)(),[t,r]=(0,s.useState)(""),[u,w]=(0,s.useState)(""),[j,b]=(0,s.useState)([]),[N,A]=(0,s.useState)([]),[C,T]=(0,s.useState)([]),[R,S]=(0,s.useState)(!1),[k,E]=(0,s.useState)([]),[O,D]=(0,s.useState)(!0);(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/cgi-bin/advance/fetch_commands.sh"),t=await e.json(),r=Object.entries(t).filter(e=>{let[t]=e;return"error"!==t}).map(e=>{let[t,r]=e;return{description:t,command:r}});if(0===r.length&&t.error)throw Error(t.error);E(r)}catch(t){console.error("Failed to fetch AT commands:",t),e.toast({title:"Error",description:t instanceof Error?t.message:"Failed to load common AT commands",variant:"destructive"})}finally{D(!1)}})()},[]),(0,s.useEffect)(()=>{let e=window.localStorage.getItem("atCommandHistory"),t=window.localStorage.getItem("atCommands");if(e)try{b(JSON.parse(e))}catch(e){console.error("Failed to parse command history:",e),b([])}if(t)try{T(JSON.parse(t))}catch(e){console.error("Failed to parse previous commands:",e),T([])}},[]),(0,s.useEffect)(()=>{j.length>0&&window.localStorage.setItem("atCommandHistory",JSON.stringify(j))},[j]),(0,s.useEffect)(()=>{C.length>0&&window.localStorage.setItem("atCommands",JSON.stringify(C))},[C]);let I=async()=>{if(u.trim()){S(!0),w(""),r("> ".concat(u,"\nExecuting command, please wait..."));try{let t=encodeURIComponent(u),a=await fetch("/cgi-bin/at_command.sh?command=".concat(t)),s=await a.json(),o="> ".concat(u,"\n");s.response&&(o+=s.response),"error"===s.status&&s.message&&(o+="\nError: ".concat(s.message)),r(o);let l={command:u,response:s.response||"No output",timestamp:s.timestamp,status:s.status,message:s.message};b(e=>[l,...e]),"success"!==s.status||C.includes(u)||T(e=>[...e,u]),"error"===s.status&&e.toast({title:"Command Error",description:s.message||"Command execution failed",variant:"destructive"})}catch(a){let t=a instanceof Error?a.message:"An unknown error occurred";r("> ".concat(u,"\nError: ").concat(t)),e.toast({title:"Error",description:t,variant:"destructive"})}finally{S(!1)}}},F=e=>{w(e),A([])},_=e=>{b(t=>{let r=[...t];return r.splice(e,1),0===r.length&&window.localStorage.removeItem("atCommandHistory"),r})},z=e=>{T(t=>{let r=t.filter(t=>t!==e);return window.localStorage.setItem("atCommands",JSON.stringify(r)),r}),A(t=>t.filter(t=>t!==e))},H=async t=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(t);else{let e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}catch(e){throw console.error("Fallback: Oops, unable to copy",e),Error("Copy failed")}finally{e.remove()}}e.toast({title:"Copied!",description:'Command "'.concat(t,'" copied to clipboard'),duration:2e3})}catch(t){console.error("Failed to copy command:",t),e.toast({title:"Error",description:"Failed to copy command to clipboard",variant:"destructive",duration:3e3})}};return(0,a.jsxs)("div",{className:"grid gap-6",children:[(0,a.jsxs)(o.Zp,{children:[(0,a.jsxs)(o.aR,{children:[(0,a.jsx)(o.ZB,{children:"AT Terminal"}),(0,a.jsx)(o.BT,{children:"Send AT commands to your device"})]}),(0,a.jsx)(o.Wu,{children:(0,a.jsxs)("div",{className:"grid gap-8 w-full max-w-screen p-4",children:[(0,a.jsxs)("div",{className:"grid gap-1.5",children:[(0,a.jsx)(i.J,{htmlFor:"ATOutput",children:"AT Command Output"}),(0,a.jsx)(d.T,{value:t,placeholder:"AT command output will appear here...",readOnly:!0,className:"h-[240px] font-mono",id:"ATOutput"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h.w,{className:"mb-2"}),0===j.length?(0,a.jsx)("p",{className:"italic text-sm text-muted-foreground font-medium text-center",children:"Command History is Empty"}):(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)(i.J,{children:"Command History"}),(0,a.jsxs)(y.Lt,{children:[(0,a.jsx)(y.tv,{asChild:!0,children:(0,a.jsxs)(n.$,{variant:"outline",size:"sm",children:[(0,a.jsx)(m.A,{className:"h-4 w-4 text-rose-500"}),"Clear All"]})}),(0,a.jsxs)(y.EO,{children:[(0,a.jsxs)(y.wd,{children:[(0,a.jsx)(y.r7,{children:"Clear Command History"}),(0,a.jsx)(y.$v,{children:"This action cannot be undone. This will permanently delete your command history."})]}),(0,a.jsxs)(y.ck,{children:[(0,a.jsx)(y.Zr,{children:"Cancel"}),(0,a.jsx)(y.Rx,{onClick:()=>{b([]),window.localStorage.removeItem("atCommandHistory")},children:"Continue"})]})]})]})]}),(0,a.jsx)(l.F,{className:"h-[180px] p-4",children:(0,a.jsx)("div",{className:"grid gap-y-2",children:j.map((e,t)=>(0,a.jsx)(o.Zp,{children:(0,a.jsx)(o.Wu,{className:"p-3 relative",children:(0,a.jsxs)(l.F,{className:"max-w-xs md:max-w-full",children:[(0,a.jsx)(n.$,{variant:"ghost",size:"icon",className:"absolute right-2 top-2 h-4 w-4",onClick:()=>_(t),children:(0,a.jsx)(p,{className:"h-4 w-4"})}),(0,a.jsxs)("div",{className:"grid gap-2",children:[(0,a.jsxs)("p",{className:"text-sm font-medium flex items-center gap-2",children:[e.command,"error"===e.status&&(0,a.jsx)("span",{className:"text-xs text-red-500",children:e.message})]}),e.response&&"No output"!==e.response&&(0,a.jsx)("p",{className:"whitespace-pre-wrap font-mono",children:e.response})]}),(0,a.jsx)(l.$,{orientation:"horizontal"})]})})},"".concat(e.timestamp,"-").concat(t)))})})]}),(0,a.jsx)(h.w,{className:"mt-2"})]}),(0,a.jsxs)("div",{className:"grid gap-1.5 relative",children:[(0,a.jsx)(i.J,{htmlFor:"ATInput",children:"AT Command Input"}),(0,a.jsx)(c.p,{value:u,onChange:e=>{let t=e.target.value;w(t),t.trim()?A(C.filter(e=>e.toLowerCase().includes(t.toLowerCase()))):A([])},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),I())},placeholder:"ATI",id:"ATInput",disabled:R,autoComplete:"off"}),N.length>0&&(0,a.jsx)("div",{className:"absolute top-full mt-1 bg-background border rounded-md shadow-lg z-10",children:(0,a.jsx)(l.F,{className:"h-24",children:N.map((e,t)=>(0,a.jsxs)("div",{className:"p-2 hover:bg-accent cursor-pointer flex items-center justify-between group",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-muted-foreground flex-grow",onClick:()=>F(e),children:e}),(0,a.jsx)(n.$,{variant:"ghost",size:"icon",className:"h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity",onClick:t=>{t.stopPropagation(),z(e)},children:(0,a.jsx)(p,{className:"h-4 w-4"})})]},t))})}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Your successful commands will be saved for autocomplete."})]})]})}),(0,a.jsx)(o.wL,{className:"grid border-t py-4",children:(0,a.jsxs)(n.$,{onClick:I,disabled:R,children:[(0,a.jsx)(f.A,{className:"mr-2"}),R?"Sending...":"Send Command"]})})]}),(0,a.jsxs)(o.Zp,{children:[(0,a.jsxs)(o.aR,{children:[(0,a.jsx)(o.ZB,{children:"Common AT Commands List"}),(0,a.jsx)(o.BT,{children:"Here are some common AT commands you can try:"})]}),(0,a.jsx)(o.Wu,{children:(0,a.jsxs)(v.XI,{children:[(0,a.jsx)(v.r6,{children:"AT Command List"}),(0,a.jsx)(v.A0,{children:(0,a.jsxs)(v.Hj,{children:[(0,a.jsx)(v.nd,{children:"AT Command"}),(0,a.jsx)(v.nd,{className:"text-right",children:"Description"})]})}),(0,a.jsx)(v.BF,{children:O?(0,a.jsx)(v.Hj,{children:(0,a.jsx)(v.nA,{colSpan:3,className:"text-center",children:"Loading commands..."})}):0===k.length?(0,a.jsx)(v.Hj,{children:(0,a.jsx)(v.nA,{colSpan:3,className:"text-center",children:"No commands available"})}):k.map((e,t)=>(0,a.jsxs)(v.Hj,{children:[(0,a.jsxs)(v.nA,{className:"flex items-center gap-x-2",children:[(0,a.jsx)("p",{className:"font-mono truncate max-w-6 md:max-w-md",children:e.command}),(0,a.jsx)(x,{className:"w-3 h-3 hover:text-purple-300 cursor-pointer",onClick:()=>H(e.command)})]}),(0,a.jsx)(v.nA,{className:"text-right max-w-10 md:max-w-lg",children:e.description})]},t))})]})})]})]})}},76837:(e,t,r)=>{"use strict";r.d(t,{Lt:()=>D,Rx:()=>$,Zr:()=>B,EO:()=>_,$v:()=>M,ck:()=>H,wd:()=>z,r7:()=>L,tv:()=>I});var a=r(20475),s=r(20107),o=r(80938),l=r(74111),n=r(71827),i=r(94521),d=r(61837),c="AlertDialog",[m,u]=(0,o.A)(c,[n.Hs]),p=(0,n.Hs)(),f=e=>{let{__scopeAlertDialog:t,...r}=e,s=p(t);return(0,a.jsx)(n.bL,{...s,...r,modal:!0})};f.displayName=c;var x=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...s}=e,o=p(r);return(0,a.jsx)(n.l9,{...o,...s,ref:t})});x.displayName="AlertDialogTrigger";var h=e=>{let{__scopeAlertDialog:t,...r}=e,s=p(t);return(0,a.jsx)(n.ZL,{...s,...r})};h.displayName="AlertDialogPortal";var g=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...s}=e,o=p(r);return(0,a.jsx)(n.hJ,{...o,...s,ref:t})});g.displayName="AlertDialogOverlay";var y="AlertDialogContent",[v,w]=m(y),j=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,children:o,...c}=e,m=p(r),u=s.useRef(null),f=(0,l.s)(t,u),x=s.useRef(null);return(0,a.jsx)(n.G$,{contentName:y,titleName:b,docsSlug:"alert-dialog",children:(0,a.jsx)(v,{scope:r,cancelRef:x,children:(0,a.jsxs)(n.UC,{role:"alertdialog",...m,...c,ref:f,onOpenAutoFocus:(0,i.m)(c.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=x.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,a.jsx)(d.xV,{children:o}),(0,a.jsx)(k,{contentRef:u})]})})})});j.displayName=y;var b="AlertDialogTitle",N=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...s}=e,o=p(r);return(0,a.jsx)(n.hE,{...o,...s,ref:t})});N.displayName=b;var A="AlertDialogDescription",C=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...s}=e,o=p(r);return(0,a.jsx)(n.VY,{...o,...s,ref:t})});C.displayName=A;var T=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...s}=e,o=p(r);return(0,a.jsx)(n.bm,{...o,...s,ref:t})});T.displayName="AlertDialogAction";var R="AlertDialogCancel",S=s.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...s}=e,{cancelRef:o}=w(R,r),i=p(r),d=(0,l.s)(t,o);return(0,a.jsx)(n.bm,{...i,...s,ref:d})});S.displayName=R;var k=e=>{let{contentRef:t}=e,r="`".concat(y,"` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(y,"` by passing a `").concat(A,"` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(y,"`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");return s.useEffect(()=>{var e;document.getElementById(null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},E=r(22250),O=r(42541);let D=f,I=x,F=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(g,{className:(0,E.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s,ref:t})});F.displayName=g.displayName;let _=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsxs)(h,{children:[(0,a.jsx)(F,{}),(0,a.jsx)(j,{ref:t,className:(0,E.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...s})]})});_.displayName=j.displayName;let z=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,E.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};z.displayName="AlertDialogHeader";let H=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,E.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};H.displayName="AlertDialogFooter";let L=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(N,{ref:t,className:(0,E.cn)("text-lg font-semibold",r),...s})});L.displayName=N.displayName;let M=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(C,{ref:t,className:(0,E.cn)("text-sm text-muted-foreground",r),...s})});M.displayName=C.displayName;let $=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(T,{ref:t,className:(0,E.cn)((0,O.r)(),r),...s})});$.displayName=T.displayName;let B=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(S,{ref:t,className:(0,E.cn)((0,O.r)({variant:"outline"}),"mt-2 sm:mt-0",r),...s})});B.displayName=S.displayName},42541:(e,t,r)=>{"use strict";r.d(t,{$:()=>d,r:()=>i});var a=r(20475),s=r(20107),o=r(61837),l=r(29395),n=r(22250);let i=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:d=!1,...c}=e,m=d?o.DX:"button";return(0,a.jsx)(m,{className:(0,n.cn)(i({variant:s,size:l,className:r})),ref:t,...c})});d.displayName="Button"},72167:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>i,Zp:()=>l,aR:()=>n,wL:()=>m});var a=r(20475),s=r(20107),o=r(22250);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...s})});l.displayName="Card";let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",r),...s})});n.displayName="CardHeader";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,o.cn)("font-semibold leading-none tracking-tight",r),...s})});i.displayName="CardTitle";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",r),...s})});m.displayName="CardFooter"},64219:(e,t,r)=>{"use strict";r.d(t,{p:()=>l});var a=r(20475),s=r(20107),o=r(22250);let l=s.forwardRef((e,t)=>{let{className:r,type:s,...l}=e;return(0,a.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input"},49153:(e,t,r)=>{"use strict";r.d(t,{J:()=>d});var a=r(20475),s=r(20107),o=r(73725),l=r(29395),n=r(22250);let i=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.b,{ref:t,className:(0,n.cn)(i(),r),...s})});d.displayName=o.b.displayName},36824:(e,t,r)=>{"use strict";r.d(t,{$:()=>i,F:()=>n});var a=r(20475),s=r(20107),o=r(34568),l=r(22250);let n=s.forwardRef((e,t)=>{let{className:r,children:s,...n}=e;return(0,a.jsxs)(o.bL,{ref:t,className:(0,l.cn)("relative overflow-hidden",r),...n,children:[(0,a.jsx)(o.LM,{className:"h-full w-full rounded-[inherit]",children:s}),(0,a.jsx)(i,{}),(0,a.jsx)(o.OK,{})]})});n.displayName=o.bL.displayName;let i=s.forwardRef((e,t)=>{let{className:r,orientation:s="vertical",...n}=e;return(0,a.jsx)(o.VM,{ref:t,orientation:s,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...n,children:(0,a.jsx)(o.lr,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=o.VM.displayName},76554:(e,t,r)=>{"use strict";r.d(t,{w:()=>n});var a=r(20475),s=r(20107),o=r(78190),l=r(22250);let n=s.forwardRef((e,t)=>{let{className:r,orientation:s="horizontal",decorative:n=!0,...i}=e;return(0,a.jsx)(o.b,{ref:t,decorative:n,orientation:s,className:(0,l.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",r),...i})});n.displayName=o.b.displayName},51303:(e,t,r)=>{"use strict";r.d(t,{A0:()=>n,BF:()=>i,Hj:()=>d,XI:()=>l,nA:()=>m,nd:()=>c,r6:()=>u});var a=r(20475),s=r(20107),o=r(22250);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,o.cn)("w-full caption-bottom text-sm",r),...s})})});l.displayName="Table";let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("thead",{ref:t,className:(0,o.cn)("[&_tr]:border-b",r),...s})});n.displayName="TableHeader";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,o.cn)("[&_tr:last-child]:border-0",r),...s})});i.displayName="TableBody",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...s})}).displayName="TableFooter";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("tr",{ref:t,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...s})});d.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("th",{ref:t,className:(0,o.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...s})});c.displayName="TableHead";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("td",{ref:t,className:(0,o.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...s})});m.displayName="TableCell";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("caption",{ref:t,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",r),...s})});u.displayName="TableCaption"},31739:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var a=r(20475),s=r(20107),o=r(22250);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,o.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...s})});l.displayName="Textarea"},32857:(e,t,r)=>{"use strict";r.d(t,{dj:()=>u,oR:()=>m});var a=r(20107);let s=0,o=new Map,l=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?l(r):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],d={toasts:[]};function c(e){d=n(d,e),i.forEach(e=>{e(d)})}function m(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||a()}}}),{id:r,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function u(){let[e,t]=a.useState(d);return a.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var a=r(64901),s=r(868);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}},39997:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(20107);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:s=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:d="",children:c,iconNode:m,...u}=e;return(0,a.createElement)("svg",{ref:t,...l,width:s,height:s,stroke:r,strokeWidth:i?24*Number(n)/Number(s):n,className:o("lucide",d),...u},[...m.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),i=(e,t)=>{let r=(0,a.forwardRef)((r,l)=>{let{className:i,...d}=r;return(0,a.createElement)(n,{ref:l,iconNode:t,className:o("lucide-".concat(s(e)),i),...d})});return r.displayName="".concat(e),r}},66698:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(39997).A)("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]])},51873:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(39997).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},73725:(e,t,r)=>{"use strict";r.d(t,{b:()=>n});var a=r(20107),s=r(4589),o=r(20475),l=a.forwardRef((e,t)=>(0,o.jsx)(s.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));l.displayName="Label";var n=l},78190:(e,t,r)=>{"use strict";r.d(t,{b:()=>d});var a=r(20107),s=r(4589),o=r(20475),l="horizontal",n=["horizontal","vertical"],i=a.forwardRef((e,t)=>{let{decorative:r,orientation:a=l,...i}=e,d=n.includes(a)?a:l;return(0,o.jsx)(s.sG.div,{"data-orientation":d,...r?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...i,ref:t})});i.displayName="Separator";var d=i}},e=>{var t=t=>e(e.s=t);e.O(0,[4736,1617,5011,1827,4568,191,6035,7358],()=>t(80631)),_N_E=e.O()}]);