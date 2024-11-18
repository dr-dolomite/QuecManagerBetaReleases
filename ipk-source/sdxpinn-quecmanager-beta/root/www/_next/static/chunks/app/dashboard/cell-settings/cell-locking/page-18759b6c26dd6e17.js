(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{63542:function(e,t,a){Promise.resolve().then(a.bind(a,61830))},61830:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(20881),l=a(64149),r=a(94920),i=a(22989),c=a(78580),n=a(47657),o=a(33335),d=a(21501),h=a(64433),u=a(45306),C=a(79442),N=l.forwardRef((e,t)=>{let{pressed:a,defaultPressed:l=!1,onPressedChange:r,...i}=e,[c=!1,n]=(0,u.T)({prop:a,onChange:r,defaultProp:l});return(0,s.jsx)(C.WV.button,{type:"button","aria-pressed":c,"data-state":c?"on":"off","data-disabled":e.disabled?"":void 0,...i,ref:t,onClick:(0,h.M)(e.onClick,()=>{e.disabled||n(!c)})})});N.displayName="Toggle";var m=a(20116),g=a(90270);let p=(0,m.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),x=l.forwardRef((e,t)=>{let{className:a,variant:l,size:r,...i}=e;return(0,s.jsx)(N,{ref:t,className:(0,g.cn)(p({variant:l,size:r,className:a})),...i})});x.displayName=N.displayName;var w=a(5501),f=a(24052),R=a(7357),v=a(46646),j=()=>{let{toast:e}=(0,v.pm)(),[t,a]=(0,l.useState)(!1),[h,u]=(0,l.useState)(!1),[C,N]=(0,l.useState)(!1),[m,g]=(0,l.useState)(!1),[p,j]=(0,l.useState)({EARFCN1:"",PCI1:"",EARFCN2:"",PCI2:"",EARFCN3:"",PCI3:""}),[A,P]=(0,l.useState)({NRARFCN:"",NRPCI:"",SCS:"",NRBAND:""}),E=async e=>{let t=encodeURIComponent(e);try{let e=await fetch("/cgi-bin/atinout_handler.sh",{method:"POST",headers:{"Content-Type":"application/json"},body:"command=".concat(t)}),a=await e.json();if(!e.ok)throw Error(a.error||"Failed to execute AT command");return a}catch(e){if(e instanceof Error)throw Error("AT command failed: ".concat(e.message));throw Error("AT command failed with unknown error")}},F=e=>{let t=e.match(/\+QNWLOCK:\s*(.+?)\n/);return t?t[1].replace(/"/g,"").split(",").map(e=>e.trim()):null},y=async()=>{try{let e=await E('AT+QNWLOCK="save_ctrl"');if(e&&e.output){let t=F(e.output);console.log("Persist status:",t),t&&t.length>=2&&(N("1"===t[1]),g("1"===t[2]))}}catch(e){console.error("Error fetching persist status:",e)}},I=async()=>{try{a(!0),await y(),await new Promise(e=>setTimeout(e,1e3));let e=await E('AT+QNWLOCK="common/4g"');if(e&&e.output){let t=F(e.output);if(t){let e=parseInt(t[1]),a={EARFCN1:e>=1?t[2]:"",PCI1:e>=1?t[3]:"",EARFCN2:e>=2?t[4]:"",PCI2:e>=2?t[5]:"",EARFCN3:e>=3?t[6]:"",PCI3:e>=3?t[7]:""};j(a),e>0&&u(!0)}}let t=await E('AT+QNWLOCK="common/5g"');if(console.log("Current NR5G lock status:",t),t&&t.output){let e=F(t.output);if(e&&e.length>=5){let t={NRPCI:e[1],NRARFCN:e[2],SCS:e[3],NRBAND:e[4]};P(t),parseInt(e[1])>0&&u(!0)}}}catch(t){console.error("Error fetching current status:",t),e({title:"Error",description:"Failed to fetch current cell locking status",variant:"destructive"})}finally{a(!1)}};(0,l.useEffect)(()=>{I()},[]);let S=async()=>{try{a(!0);let t=[];if(p.EARFCN1&&p.PCI1&&t.push([p.EARFCN1,p.PCI1]),p.EARFCN2&&p.PCI2&&t.push([p.EARFCN2,p.PCI2]),p.EARFCN3&&p.PCI3&&t.push([p.EARFCN3,p.PCI3]),0===t.length)throw Error("Please fill at least one EARFCN and PCI pair");let s='AT+QNWLOCK="common/4g",'.concat(t.length);t.forEach(e=>{let[t,a]=e;s+=",".concat(t,",").concat(a)}),await E(s),await new Promise(e=>setTimeout(e,1e3)),await E('AT+QNWLOCK="save_ctrl",1,0'),await I(),e({title:"Success",description:"LTE cells locked successfully with ".concat(t.length," pair").concat(t.length>1?"s":"")})}catch(t){a(!1),e({title:"Error",description:t instanceof Error?t.message:"Failed to lock LTE cells",variant:"destructive"})}},b=async()=>{try{if(a(!0),!A.NRPCI||!A.NRARFCN||!A.SCS||!A.NRBAND)throw Error("Please fill all NR5G fields");let t='AT+QNWLOCK="common/5g",'.concat(A.NRPCI,",").concat(A.NRARFCN,",").concat(A.SCS,",").concat(A.NRBAND);await E(t),await new Promise(e=>setTimeout(e,1e3)),await E('AT+QNWLOCK="save_ctrl",0,1'),await I(),e({title:"Success",description:"NR5G cell locked successfully"})}catch(t){a(!1),e({title:"Error",description:t instanceof Error?t.message:"Failed to lock NR5G cell",variant:"destructive"})}},k=async()=>{try{a(!0),await E('AT+QNWLOCK="common/4g",0'),await new Promise(e=>setTimeout(e,1e3)),await E('AT+QNWLOCK="save_ctrl",1,0'),await E("AT+COPS=2"),await new Promise(e=>setTimeout(e,2e3)),await E("AT+COPS=0"),await I(),e({title:"Success",description:"LTE cell locking reset to default"})}catch(t){a(!1),e({title:"Error",description:"Failed to reset LTE cell locking",variant:"destructive"})}},T=async()=>{try{a(!0),await E('AT+QNWLOCK="common/5g",0'),await E('AT+QNWLOCK="save_ctrl",0,1'),await E("AT+COPS=2"),await new Promise(e=>setTimeout(e,2e3)),await E("AT+COPS=0"),await I(),e({title:"Success",description:"NR5G cell locking reset to default"})}catch(t){a(!1),e({title:"Error",description:"Failed to reset NR5G cell locking",variant:"destructive"})}},L=async t=>{try{a(!0),await E('AT+QNWLOCK="save_ctrl",'.concat(t?"1":"0",",").concat(m?"1":"0")),await y(),e({title:"Success",description:"LTE persist on boot ".concat(t?"enabled":"disabled")}),await new Promise(e=>setTimeout(e,2e3)),window.location.reload()}catch(t){e({title:"Error",description:"Failed to update LTE persist setting",variant:"destructive"})}finally{a(!1)}},_=async t=>{try{a(!0),await E('AT+QNWLOCK="save_ctrl",'.concat(C?"1":"0",",").concat(t?"1":"0")),await y(),e({title:"Success",description:"NR5G persist on boot ".concat(t?"enabled":"disabled")}),await new Promise(e=>setTimeout(e,2e3)),window.location.reload()}catch(t){e({title:"Error",description:"Failed to update NR5G persist setting",variant:"destructive"})}finally{a(!1)}};return(0,s.jsxs)("div",{className:"grid gap-6",children:[(0,s.jsxs)(r.Zb,{children:[(0,s.jsxs)(r.Ol,{children:[(0,s.jsx)(r.ll,{children:"4G LTE Cellular Locking"}),(0,s.jsx)(r.SZ,{children:"Lock the device to specific LTE Physical Cell IDs."})]}),(0,s.jsx)(r.aY,{children:(0,s.jsxs)("form",{className:"grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-6",children:[(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"EARFCN1",children:"EARFCN 1"}),(0,s.jsx)(o.I,{type:"text",id:"EARFCN1",placeholder:"EARFCN 1",value:p.EARFCN1,onChange:e=>j(t=>({...t,EARFCN1:e.target.value}))})]}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"PCI1",children:"PCI 1"}),(0,s.jsx)(o.I,{type:"text",id:"PCI1",placeholder:"PCI 1",value:p.PCI1,onChange:e=>j(t=>({...t,PCI1:e.target.value}))})]}),(0,s.jsx)(n.Z,{className:"my-1 col-span-2 w-full"}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"EARFCN2",children:"EARFCN 2"}),(0,s.jsx)(o.I,{type:"text",id:"EARFCN2",placeholder:"EARFCN 2",value:p.EARFCN2,onChange:e=>j(t=>({...t,EARFCN2:e.target.value}))})]}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"PCI2",children:"PCI 2"}),(0,s.jsx)(o.I,{type:"text",id:"PCI2",placeholder:"PCI 2",value:p.PCI2,onChange:e=>j(t=>({...t,PCI2:e.target.value}))})]}),(0,s.jsx)(n.Z,{className:"my-1 col-span-2 w-full"}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"EARFCN3",children:"EARFCN 3"}),(0,s.jsx)(o.I,{type:"text",id:"EARFCN3",placeholder:"EARFCN 3",value:p.EARFCN3,onChange:e=>j(t=>({...t,EARFCN3:e.target.value}))})]}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"PCI3",children:"PCI 3"}),(0,s.jsx)(o.I,{type:"text",id:"PCI3",placeholder:"PCI 3",value:p.PCI3,onChange:e=>j(t=>({...t,PCI3:e.target.value}))})]})]})}),(0,s.jsxs)(r.eW,{className:"border-t py-4 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-4",children:[(0,s.jsxs)(c.z,{onClick:S,disabled:t,children:[(0,s.jsx)(w.Z,{className:"h-4 w-4"}),"Lock LTE Cells"]}),(0,s.jsxs)(x,{pressed:C,onPressedChange:L,disabled:t,children:[(0,s.jsx)(f.Z,{className:"h-4 w-4 mr-2"}),"Persist on Reboot"]}),(0,s.jsxs)(c.z,{variant:"secondary",onClick:k,disabled:t||!h,children:[(0,s.jsx)(R.Z,{className:"h-4 w-4"}),"Reset to Default"]})]})]}),(0,s.jsxs)(r.Zb,{children:[(0,s.jsxs)(r.Ol,{children:[(0,s.jsx)(r.ll,{children:"NR5G-SA Cellular Locking"}),(0,s.jsx)(r.SZ,{children:"Lock the device to a specific NR5G-SA Physical Cell ID."})]}),(0,s.jsx)(r.aY,{children:(0,s.jsxs)("form",{className:"grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-6",children:[(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"NR-ARFCN",children:"NR ARFCN"}),(0,s.jsx)(o.I,{type:"text",id:"NR-ARFCN",placeholder:"NR ARFCN",value:A.NRARFCN,onChange:e=>P(t=>({...t,NRARFCN:e.target.value}))})]}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"NR-PCI",children:"NR PCI"}),(0,s.jsx)(o.I,{type:"text",id:"NR-PCI",placeholder:"NR PCI",value:A.NRPCI,onChange:e=>P(t=>({...t,NRPCI:e.target.value}))})]}),(0,s.jsx)(n.Z,{className:"my-0.5 col-span-2 w-full"}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"SCS",children:"SCS"}),(0,s.jsxs)(i.Ph,{value:A.SCS,onValueChange:e=>P(t=>({...t,SCS:e})),children:[(0,s.jsx)(i.i4,{id:"SCS",children:(0,s.jsx)(i.ki,{placeholder:"SCS"})}),(0,s.jsx)(i.Bw,{children:(0,s.jsxs)(i.DI,{children:[(0,s.jsx)(i.n5,{children:"SCS"}),(0,s.jsx)(i.Ql,{value:"15",children:"15 kHz"}),(0,s.jsx)(i.Ql,{value:"30",children:"30 kHz"}),(0,s.jsx)(i.Ql,{value:"60",children:"60 kHz"}),(0,s.jsx)(i.Ql,{value:"120",children:"120 kHz"}),(0,s.jsx)(i.Ql,{value:"240",children:"240 kHz"})]})})]})]}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,s.jsx)(d._,{htmlFor:"NRBAND",children:"NR Band"}),(0,s.jsx)(o.I,{type:"text",id:"NRBAND",placeholder:"NR BAND",value:A.NRBAND,onChange:e=>P(t=>({...t,NRBAND:e.target.value}))})]})]})}),(0,s.jsxs)(r.eW,{className:"border-t py-4 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-4",children:[(0,s.jsxs)(c.z,{onClick:b,disabled:t,children:[(0,s.jsx)(w.Z,{className:"h-4 w-4"}),"Lock NR5G-SA Cell"]}),(0,s.jsxs)(x,{pressed:m,onPressedChange:_,disabled:t,children:[(0,s.jsx)(f.Z,{className:"h-4 w-4 mr-2"}),"Persist on Reboot"]}),(0,s.jsxs)(c.z,{variant:"secondary",onClick:T,disabled:t||!h,children:[(0,s.jsx)(R.Z,{className:"h-4 w-4"}),"Reset to Default"]})]})]})]})}},5501:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});let s=(0,a(92093).Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},7357:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});let s=(0,a(92093).Z)("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]])}},function(e){e.O(0,[792,366,714,217,420,72,247,985,330,744],function(){return e(e.s=63542)}),_N_E=e.O()}]);