(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9065],{6507:(e,i,t)=>{Promise.resolve().then(t.bind(t,34268))},34268:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>b});var r=t(20475),s=t(20107),a=t(72167),o=t(62108),l=t(22250);let d=o.bL,n=o.l9,c=s.forwardRef((e,i)=>{let{className:t,align:s="center",sideOffset:a=4,...d}=e;return(0,r.jsx)(o.UC,{ref:i,align:s,sideOffset:a,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...d})});c.displayName=o.UC.displayName;var f=t(12607),p=t(51873),u=t(42541),m=t(64219),h=t(49153),v=t(36760),g=t(32857),I=t(76554);let x={imei:"",iccid:""},w={profile1:{...x},profile2:{...x}},b=()=>{let[e,i]=(0,s.useState)(!0),[t,o]=(0,s.useState)(!1),[l,x]=(0,s.useState)(!1),[b,y]=(0,s.useState)(""),[E,j]=(0,s.useState)(""),[N,C]=(0,s.useState)(w),[M,S]=(0,s.useState)(w),{profiles:T,hasActiveProfile:P,updateIMEIProfile:D,deleteIMEIProfiles:A}=function(){let[e,i]=(0,s.useState)({}),[t,r]=(0,s.useState)(!0),[a,o]=(0,s.useState)(!1),l=async()=>{try{r(!0);let e=await fetch("/cgi-bin/cell-settings/imei-profiles/fetch-profile.sh",{method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(1e4)});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));let t=await e.json();i(t),(t.profile1||t.profile2)&&o(!0)}catch(e){console.error("Error fetching IMEI profiles:",e)}finally{r(!1)}};(0,s.useEffect)(()=>{l()},[]);let d=async(t,r)=>{try{var s,a,o,l;let d=new URLSearchParams;"profile1"===t?(d.append("iccidProfile1",r.iccid),d.append("imeiProfile1",r.imei)):(d.append("iccidProfile1",(null===(s=e.profile1)||void 0===s?void 0:s.iccid)||""),d.append("imeiProfile1",(null===(a=e.profile1)||void 0===a?void 0:a.imei)||"")),("profile2"===t||e.profile2)&&(d.append("iccidProfile2","profile2"===t?r.iccid:(null===(o=e.profile2)||void 0===o?void 0:o.iccid)||""),d.append("imeiProfile2","profile2"===t?r.imei:(null===(l=e.profile2)||void 0===l?void 0:l.imei)||""));let n=await fetch("/cgi-bin/cell-settings/imei-profiles/save-profile.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:d.toString(),signal:AbortSignal.timeout(1e4)});if(!n.ok)throw Error("Failed to update profile");let c=await n.json();if("success"===c.status)return i(e=>({...e,[t]:r})),!0;throw Error(c.message||"Failed to update profile")}catch(e){return console.error("Error updating ".concat(t,":"),e),!1}};return{profiles:e,hasActiveProfile:a,updateIMEIProfile:d,deleteIMEIProfiles:async()=>{try{let e=await fetch("/cgi-bin/cell-settings/imei-profiles/delete-profile.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:AbortSignal.timeout(1e4)});if(!e.ok)throw Error("Failed to delete profiles");let t=await e.json();if("success"===t.status)return i({}),!0;throw Error(t.message||"Failed to delete profiles")}catch(e){return console.error("Error deleting IMEI profiles:",e),!1}}}}(),{toast:R}=(0,g.dj)(),_=(0,s.useCallback)(async()=>{try{i(!0);let e=await fetch("/cgi-bin/fetch_data.sh?set=3"),t=await e.json();console.log(t);let r=t[6].response.split("\n")[1];console.log(r);let s=r.match(/\d{15}/),a=s?s[0]:null;if(a)y(a),j(a);else throw Error("IMEI not found in response")}catch(e){R({title:"Failed to fetch IMEI",description:"Failed to fetch IMEI from the device",variant:"destructive"}),console.error(e)}finally{i(!1)}},[]);(0,s.useEffect)(()=>{if(_(),T){var e,i,t,r,s,a,o,l;S({profile1:{imei:(null===(e=T.profile1)||void 0===e?void 0:e.imei)||"",iccid:(null===(i=T.profile1)||void 0===i?void 0:i.iccid)||""},profile2:{imei:(null===(t=T.profile2)||void 0===t?void 0:t.imei)||"",iccid:(null===(r=T.profile2)||void 0===r?void 0:r.iccid)||""}}),C({profile1:{imei:(null===(s=T.profile1)||void 0===s?void 0:s.imei)||"",iccid:(null===(a=T.profile1)||void 0===a?void 0:a.iccid)||""},profile2:{imei:(null===(o=T.profile2)||void 0===o?void 0:o.imei)||"",iccid:(null===(l=T.profile2)||void 0===l?void 0:l.iccid)||""}})}},[_,T]);let F=async e=>{if(e.preventDefault(),i(!0),15!==E.length||isNaN(Number(E))){R({title:"Invalid IMEI",description:"IMEI must be 15 digits and numbers only",variant:"destructive"}),i(!1);return}try{let e='AT+EGMR=1,7,"'.concat(E,'";+QPOWD=1'),i=encodeURIComponent(e),t=await fetch("/cgi-bin/at_command.sh?command=".concat(i),{method:"GET",headers:{Accept:"application/json"},signal:AbortSignal.timeout(5e3)});if(console.log(t),!t.ok)throw Error("Failed to update IMEI");R({title:"Success",description:"IMEI has been updated successfully. Rebooting...",duration:9e4})}catch(e){R({title:"Failed to update IMEI",description:"Failed to update IMEI on the device",variant:"destructive"}),console.error(e)}finally{i(!1)}},O=()=>{if(!M.profile1.imei||!M.profile1.iccid)return R({variant:"destructive",title:"Invalid Profile 1",description:"Both IMEI and ICCID are required for Profile 1"}),!1;if(!/^\d{15}$/.test(M.profile1.imei))return R({variant:"destructive",title:"Invalid IMEI in Profile 1",description:"IMEI must be exactly 15 digits"}),!1;if(Object.values(M.profile2).some(e=>""!==e)){if(!M.profile2.imei||!M.profile2.iccid)return R({variant:"destructive",title:"Invalid Profile 2",description:"Both IMEI and ICCID are required if any Profile 2 field is filled"}),!1;if(!/^\d{15}$/.test(M.profile2.imei))return R({variant:"destructive",title:"Invalid IMEI in Profile 2",description:"IMEI must be exactly 15 digits"}),!1}return!0},k=async e=>{if(e.preventDefault(),O()){o(!0);try{await D("profile1",M.profile1),Object.values(M.profile2).some(e=>""!==e)&&await D("profile2",M.profile2),R({title:"Success",description:"IMEI profiles have been saved successfully. Rebooting...",duration:9e4}),setTimeout(()=>{window.location.reload()},9e4)}catch(e){R({variant:"destructive",title:"Error",description:"Failed to save IMEI profiles. Please try again."})}finally{o(!1)}}},z=async()=>{if(confirm("Are you sure you want to delete all IMEI profiles?")){x(!0);try{if(await A())S(w),R({title:"Success",description:"IMEI profiles have been deleted successfully"});else throw Error("Failed to delete profiles")}catch(e){R({variant:"destructive",title:"Error",description:"Failed to delete IMEI profiles. Please try again."})}finally{setTimeout(()=>{x(!1)},2e3)}}},B=(e,i,t)=>{S(r=>({...r,[e]:{...r[e],[i]:t}}))};return(0,r.jsxs)("div",{className:"grid gap-8",children:[(0,r.jsx)(a.Zp,{children:(0,r.jsxs)("form",{onSubmit:F,children:[(0,r.jsxs)(a.aR,{children:[(0,r.jsx)(a.ZB,{children:"IMEI Mangling"}),(0,r.jsxs)(a.BT,{className:"flex items-center justify-between",children:["Change the IMEI of the device.",(0,r.jsxs)("span",{className:"flex items-center text-orange-500",children:[(0,r.jsx)(f.A,{className:"size-4 mr-1"}),"Do at your own risk!"]})]})]}),(0,r.jsx)(a.Wu,{children:(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,r.jsx)(h.J,{htmlFor:"IMEI",children:"Change Current IMEI"}),e?(0,r.jsx)(v.E,{className:"h-8"}):(0,r.jsxs)("div",{className:"grid gap-1.5",children:[P?(0,r.jsx)("div",{className:"relative w-full",children:(0,r.jsxs)(d,{children:[(0,r.jsxs)(n,{children:[(0,r.jsx)(m.p,{className:"pr-9",placeholder:b,disabled:!0}),(0,r.jsx)(f.A,{className:"absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground"})]}),(0,r.jsx)(c,{className:"text-sm",children:"You cannot use this feature while IMEI profiles are active."})]})}):(0,r.jsx)(m.p,{type:"text",id:"IMEI",value:E,onChange:e=>j(e.target.value),placeholder:b}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground font-medium",children:"This will reboot the device."})]})]})}),(0,r.jsx)(a.wL,{className:"grid border-t py-4",children:(0,r.jsx)(u.$,{type:"submit",className:"w-full",disabled:e||E===b,children:e?"Processing...":"Change IMEI"})})]})}),(0,r.jsxs)(a.Zp,{children:[(0,r.jsxs)(a.aR,{children:[(0,r.jsx)(a.ZB,{children:"ICCID Based IMEI Mangling"}),(0,r.jsxs)(a.BT,{className:"flex items-center justify-between",children:["Change the IMEI of the device based on the ICCID.",(0,r.jsxs)("span",{className:"flex items-center text-orange-500",children:[(0,r.jsx)(f.A,{className:"size-4 mr-1"}),"Do at your own risk!"]})]})]}),(0,r.jsxs)("form",{onSubmit:k,children:[(0,r.jsx)(a.Wu,{children:(0,r.jsxs)("div",{className:"grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-4",children:[(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,r.jsx)(h.J,{htmlFor:"IMEI-prof1",children:"IMEI for Profile 1"}),e?(0,r.jsx)(v.E,{className:"h-8"}):(0,r.jsx)(m.p,{type:"text",id:"IMEI-prof1",placeholder:"IMEI for Profile 1",value:M.profile1.imei,onChange:e=>B("profile1","imei",e.target.value)})]}),(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,r.jsx)(h.J,{htmlFor:"ICCID-prof1",children:"ICCID for Profile 1"}),e?(0,r.jsx)(v.E,{className:"h-8"}):(0,r.jsx)(m.p,{type:"text",id:"ICCID-prof1",placeholder:"ICCID for Profile 1",value:M.profile1.iccid,onChange:e=>B("profile1","iccid",e.target.value)})]}),(0,r.jsx)(I.w,{className:"col-span-full my-2"}),(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,r.jsx)(h.J,{htmlFor:"IMEI-prof2",children:"IMEI for Profile 2"}),e?(0,r.jsx)(v.E,{className:"h-8"}):(0,r.jsx)(m.p,{type:"text",id:"IMEI-prof2",placeholder:"IMEI for Profile 2",value:M.profile2.imei,onChange:e=>B("profile2","imei",e.target.value)})]}),(0,r.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,r.jsx)(h.J,{htmlFor:"ICCID-prof2",children:"ICCID for Profile 2"}),e?(0,r.jsx)(v.E,{className:"h-8"}):(0,r.jsx)(m.p,{type:"text",id:"ICCID-prof2",placeholder:"ICCID for Profile 2",value:M.profile2.iccid,onChange:e=>B("profile2","iccid",e.target.value)})]})]})}),(0,r.jsxs)(a.wL,{className:"grid grid-cols-2 grid-flow-row gap-6 border-t py-4",children:[(0,r.jsx)(u.$,{type:"submit",className:"w-full",disabled:e||t||!(M.profile1.imei!==N.profile1.imei||M.profile1.iccid!==N.profile1.iccid||M.profile2.imei!==N.profile2.imei||M.profile2.iccid!==N.profile2.iccid),children:t?"Saving...":"Save IMEI Profiles"}),(0,r.jsxs)(u.$,{type:"button",variant:"secondary",className:"w-full",onClick:z,disabled:e||l,children:[(0,r.jsx)(p.A,{className:"h-4 w-4"}),l?"Deleting...":"Delete All Profiles"]})]})]})]})]})}},42541:(e,i,t)=>{"use strict";t.d(i,{$:()=>n,r:()=>d});var r=t(20475),s=t(20107),a=t(61837),o=t(29395),l=t(22250);let d=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),n=s.forwardRef((e,i)=>{let{className:t,variant:s,size:o,asChild:n=!1,...c}=e,f=n?a.DX:"button";return(0,r.jsx)(f,{className:(0,l.cn)(d({variant:s,size:o,className:t})),ref:i,...c})});n.displayName="Button"},72167:(e,i,t)=>{"use strict";t.d(i,{BT:()=>n,Wu:()=>c,ZB:()=>d,Zp:()=>o,aR:()=>l,wL:()=>f});var r=t(20475),s=t(20107),a=t(22250);let o=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:i,className:(0,a.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...s})});o.displayName="Card";let l=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:i,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});l.displayName="CardHeader";let d=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)("h3",{ref:i,className:(0,a.cn)("font-semibold leading-none tracking-tight",t),...s})});d.displayName="CardTitle";let n=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)("p",{ref:i,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});n.displayName="CardDescription";let c=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:i,className:(0,a.cn)("p-6 pt-0",t),...s})});c.displayName="CardContent";let f=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)("div",{ref:i,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});f.displayName="CardFooter"},64219:(e,i,t)=>{"use strict";t.d(i,{p:()=>o});var r=t(20475),s=t(20107),a=t(22250);let o=s.forwardRef((e,i)=>{let{className:t,type:s,...o}=e;return(0,r.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...o})});o.displayName="Input"},49153:(e,i,t)=>{"use strict";t.d(i,{J:()=>n});var r=t(20475),s=t(20107),a=t(73725),o=t(29395),l=t(22250);let d=(0,o.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),n=s.forwardRef((e,i)=>{let{className:t,...s}=e;return(0,r.jsx)(a.b,{ref:i,className:(0,l.cn)(d(),t),...s})});n.displayName=a.b.displayName},76554:(e,i,t)=>{"use strict";t.d(i,{w:()=>l});var r=t(20475),s=t(20107),a=t(55809),o=t(22250);let l=s.forwardRef((e,i)=>{let{className:t,orientation:s="horizontal",decorative:l=!0,...d}=e;return(0,r.jsx)(a.b,{ref:i,decorative:l,orientation:s,className:(0,o.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",t),...d})});l.displayName=a.b.displayName},36760:(e,i,t)=>{"use strict";t.d(i,{E:()=>a});var r=t(20475),s=t(22250);function a(e){let{className:i,...t}=e;return(0,r.jsx)("div",{className:(0,s.cn)("animate-pulse rounded-md bg-primary/10",i),...t})}},32857:(e,i,t)=>{"use strict";t.d(i,{dj:()=>p,oR:()=>f});var r=t(20107);let s=0,a=new Map,o=e=>{if(a.has(e))return;let i=setTimeout(()=>{a.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,i)},l=(e,i)=>{switch(i.type){case"ADD_TOAST":return{...e,toasts:[i.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===i.toast.id?{...e,...i.toast}:e)};case"DISMISS_TOAST":{let{toastId:t}=i;return t?o(t):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===t||void 0===t?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===i.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==i.toastId)}}},d=[],n={toasts:[]};function c(e){n=l(n,e),d.forEach(e=>{e(n)})}function f(e){let{...i}=e,t=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...i,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function p(){let[e,i]=r.useState(n);return r.useEffect(()=>(d.push(i),()=>{let e=d.indexOf(i);e>-1&&d.splice(e,1)}),[e]),{...e,toast:f,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,i,t)=>{"use strict";t.d(i,{cn:()=>a});var r=t(64901),s=t(868);function a(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return(0,s.QP)((0,r.$)(i))}}},e=>{var i=i=>e(e.s=i);e.O(0,[7780,1617,4673,3210,191,6035,7358],()=>i(6507)),_N_E=e.O()}]);