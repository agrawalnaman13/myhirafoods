"use strict";(self.webpackChunktimpwebapp=self.webpackChunktimpwebapp||[]).push([[123],{9123:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var l=a(5043),t=a(6161),i=a(7616),n=a(3216),c=a(5475),d=a(6337),r=a(9011),o=a(7323),h=a(5528),m=a(9954),x=a(579);const j=function(){const[e,s]=(0,l.useState)(""),[a,t]=(0,l.useState)(""),[i,j]=(0,l.useState)(""),[u,p]=(0,l.useState)(!1),[v,b]=(0,l.useState)(""),[g,N]=(0,l.useState)(1),[f]=(0,l.useState)(10),y=(0,h.MW)(),_=(0,n.zy)(),w=(0,n.Zp)(),S=new URLSearchParams(_.search),k=S.get("tab");(0,l.useEffect)((()=>{const e=S.get("page")||1;e>=1&&N(e)}),[g,_.search]);const{data:C,refetch:M}=(0,r.I)({queryKey:["merchantList",e,i,a,g,k],queryFn:async()=>{const s={search:e,year:i,month:a,page:g,pageSize:f};return(0,d.uI)(s)},onError:e=>{console.log(e)},select:e=>e.results}),A=(null===C||void 0===C?void 0:C.merchants)||[],U=(null===C||void 0===C?void 0:C.totalPages)||0,I=(null===C||void 0===C?void 0:C.page)||1,$=e=>{e>=1&&e<=U&&(N(e),S.set("page",e),w({search:S.toString()},{replace:!0}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"row comman_design mx-0",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)("div",{className:"row align-items-center justify-content-between py-md-4 py-3 px-md-3 px-2",children:[(0,x.jsx)("div",{className:"col-md-auto mb-md-0 mb-3",children:(0,x.jsx)("div",{className:"headleft",children:(0,x.jsx)("h2",{children:"Merchants Management"})})}),(0,x.jsxs)("div",{className:"col-md-4 d-flex align-items-center justify-content-end",children:[(0,x.jsxs)("div",{className:"searchh_box position-relative",children:[(0,x.jsx)("input",{className:"form-control",type:"search",placeholder:"Search",value:e,onChange:e=>s(e.target.value)}),(0,x.jsx)("button",{children:(0,x.jsx)("i",{className:"fas fa-search"})})]}),(0,x.jsxs)("div",{className:"dropdown filterdropdown",children:[(0,x.jsx)("button",{className:"btn btn-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,x.jsx)("i",{className:"fas fa-filter"})}),(0,x.jsx)("div",{className:"dropdown-menu",children:(0,x.jsxs)("form",{className:"form-design row mx-0",children:[(0,x.jsxs)("div",{className:"col-12 form-group",children:[(0,x.jsx)("label",{children:"Year"}),(0,x.jsxs)("select",{className:"form-select",onChange:e=>j(e.target.value),value:i,children:[(0,x.jsx)("option",{value:2001,children:"2001"}),(0,x.jsx)("option",{value:2002,children:"2002"}),(0,x.jsx)("option",{value:2003,children:"2003"}),(0,x.jsx)("option",{value:2004,children:"2004"}),(0,x.jsx)("option",{value:2005,children:"2005"}),(0,x.jsx)("option",{value:2006,children:"2006"}),(0,x.jsx)("option",{value:2007,children:"2007"}),(0,x.jsx)("option",{value:2008,children:"2008"}),(0,x.jsx)("option",{value:2009,children:"2009"}),(0,x.jsx)("option",{value:2010,children:"2010"})]})]}),(0,x.jsxs)("div",{className:"col-12 form-group",children:[(0,x.jsx)("label",{children:"Months"}),(0,x.jsxs)("select",{className:"form-select",onChange:e=>t(e.target.value),value:a,children:[(0,x.jsx)("option",{value:"01",children:"Jan"}),(0,x.jsx)("option",{value:"02",children:"Feb"}),(0,x.jsx)("option",{value:"03",children:"Mar"}),(0,x.jsx)("option",{value:"04",children:"Apr"}),(0,x.jsx)("option",{value:"05",children:"May"}),(0,x.jsx)("option",{value:"06",children:"Jun"}),(0,x.jsx)("option",{value:"07",children:"July"}),(0,x.jsx)("option",{value:"08",children:"August"}),(0,x.jsx)("option",{value:"09",children:"Sep"}),(0,x.jsx)("option",{value:"10",children:"Oct"}),(0,x.jsx)("option",{value:"11",children:"Nov"}),(0,x.jsx)("option",{value:"12",children:"Dec"})]})]})]})})]})]})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("div",{className:"row comman_table pt-md-3 pb-md-4 pb-3 px-md-3 px-2",children:(0,x.jsxs)("div",{className:"col-12 position-relative",children:[(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table  table-hover",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No."}),(0,x.jsx)("th",{children:"Image"}),(0,x.jsx)("th",{children:"Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile Number"}),(0,x.jsx)("th",{children:"Restaurant Name"}),(0,x.jsx)("th",{children:"Location"}),(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:null===A||void 0===A?void 0:A.map(((e,s)=>{var a;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(I-1)*f+s+1}),(0,x.jsx)("td",{children:(0,x.jsx)("div",{className:"user-img",children:(0,x.jsx)("img",{src:e.profile||"../assets/img/user1.png",alt:"",className:"w-100 h-100"})})}),(0,x.jsx)("td",{children:e.name}),(0,x.jsx)("td",{children:e.email}),(0,x.jsx)("td",{children:e.mobileNumber}),(0,x.jsx)("td",{children:null===e||void 0===e||null===(a=e.restaurant)||void 0===a?void 0:a.map((e=>e.name)).join(", ")}),(0,x.jsx)("td",{children:e.location}),(0,x.jsx)("td",{children:(0,x.jsx)("span",{className:null!==e&&void 0!==e&&e.status?"status_accepted":"status_declained",children:null!==e&&void 0!==e&&e.status?"Active":"Inactive"})}),(0,x.jsx)("td",{children:(0,x.jsxs)("div",{className:"d-flex",children:[(0,x.jsx)(c.N_,{to:`/admin/merchant-details/${e._id}?tab=${S.get("tab")||1}&page=${g}`,className:"Table_btn me-2",children:(0,x.jsx)("i",{className:"fa fa-eye"})}),(0,x.jsx)(c.N_,{to:"",className:"Table_btn",onClick:()=>b(e._id),"data-bs-toggle":"modal","data-bs-target":"#popUp2",children:(0,x.jsx)("i",{className:"fa fa-trash"})})]})})]},e._id)}))})]})}),(0,x.jsxs)("div",{className:"pagination row mt-4",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsx)("span",{children:`Showing ${I} to ${U}  of ${U}`})}),(0,x.jsxs)("div",{className:"col-auto d-flex",children:[(0,x.jsx)("button",{className:"bg-main status_accepted_bg",disabled:1==I,onClick:()=>$(I-1),children:"Prev"}),(()=>{const e=[],s=Math.max(1,g-2),a=Math.min(U,g+2);for(let l=s;l<=a;l++)console.log(g,l),e.push((0,x.jsx)("button",{className:`btn ${g==l?"bg-custom-secondary":"btn-light"} ms-1`,onClick:()=>$(l),children:l},l));return e})(),(0,x.jsx)("button",{className:"bg-main status_accepted_bg  ms-1",disabled:I==U,onClick:()=>$(I+1),children:"Next"})]})]})]})})})]}),(0,x.jsx)("div",{className:"modal fade popUp ",id:"popUp2","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:-1,"aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,x.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,x.jsx)("div",{className:"modal-content",children:(0,x.jsx)("div",{className:"modal-body border-0 py-4 px-3",children:(0,x.jsxs)("div",{className:"popUp_main text-center",children:[(0,x.jsx)("img",{className:"main_icon",src:"../assets/img/reject_imgg.webp",alt:""}),(0,x.jsx)("h3",{children:"Are You sure, you want to delete?"}),(0,x.jsxs)("div",{className:"row mx-0 mt-4 mb-2",children:[(0,x.jsx)("div",{className:"col-6",children:(0,x.jsx)(c.N_,{className:"bg-main  status_accepted_bg w-100 d-block","data-bs-dismiss":"modal",to:"",onClick:()=>b(""),id:"popUpClose2",children:"No"})}),(0,x.jsx)("div",{className:"col-6",children:(0,x.jsx)("button",{className:"bg-custom-secondary status_accepted_bg w-100",onClick:()=>(async e=>{p(!0);const s=await(0,d.qt)(e);s.error?(p(!1),(0,o.S)(y,s.message,{timeout:3e3})):(p(!1),document.getElementById("popUpClose2").click(),(0,o.S)(y,s.message,{timeout:3e3}),M())})(v),disabled:u,children:u?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:"me-2",children:"Wait"}),(0,x.jsx)(m.IN,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"18",visible:!0})]}):"Yes"})})]})]})})})})})]})};const u=function(){const[e,s]=(0,l.useState)(""),[a,t]=(0,l.useState)(""),[i,j]=(0,l.useState)(""),[u,p]=(0,l.useState)(!1),[v,b]=(0,l.useState)(""),[g,N]=(0,l.useState)(""),[f,y]=(0,l.useState)(1),[_]=(0,l.useState)(10),w=(0,h.MW)(),S=(0,n.zy)(),k=(0,n.Zp)(),C=new URLSearchParams(S.search);(0,l.useEffect)((()=>{const e=C.get("page")||1;e>=1&&y(e)}),[f,S.search]);const{data:M,refetch:A}=(0,r.I)({queryKey:["newMerchantList",e,i,a,f],queryFn:async()=>{const s={search:e,year:i,month:a,page:f,pageSize:_};return(0,d.Nj)(s)},onError:e=>{console.log(e)},select:e=>e.results}),U=(null===M||void 0===M?void 0:M.merchants)||[],I=(null===M||void 0===M?void 0:M.totalPages)||0,$=(null===M||void 0===M?void 0:M.page)||1,E=async(e,s)=>{if("Declined"===s&&!g)return void(0,o.S)(w,"Please add a reason",{timeout:3e3});p(!0);const a={action:s,reason:g},l=await(0,d.Aw)(a,e);l.error?(p(!1),(0,o.S)(w,l.message,{timeout:3e3})):(p(!1),"Declined"===s&&document.getElementById("popUpClose").click(),(0,o.S)(w,l.message,{timeout:3e3}),A())},D=e=>{e>=1&&e<=I&&(y(e),C.set("page",e),k({search:C.toString()},{replace:!0}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"row comman_design mx-0",children:[(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)("div",{className:"row align-items-center justify-content-between py-md-4 py-3 px-md-3 px-2",children:[(0,x.jsx)("div",{className:"col-md-auto mb-md-0 mb-3",children:(0,x.jsx)("div",{className:"headleft",children:(0,x.jsx)("h2",{children:"New Merchant Registration Details"})})}),(0,x.jsxs)("div",{className:"col-md-4 d-flex align-items-center justify-content-end",children:[(0,x.jsxs)("div",{className:"searchh_box position-relative",children:[(0,x.jsx)("input",{className:"form-control",type:"search",placeholder:"Search",value:e,onChange:e=>s(e.target.value)}),(0,x.jsx)("button",{children:(0,x.jsx)("i",{className:"fas fa-search"})})]}),(0,x.jsxs)("div",{className:"dropdown filterdropdown",children:[(0,x.jsx)("button",{className:"btn btn-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,x.jsx)("i",{className:"fas fa-filter"})}),(0,x.jsx)("div",{className:"dropdown-menu",children:(0,x.jsxs)("form",{className:"form-design row mx-0",children:[(0,x.jsxs)("div",{className:"col-12 form-group",children:[(0,x.jsx)("label",{children:"Year"}),(0,x.jsxs)("select",{className:"form-select",onChange:e=>j(e.target.value),value:i,children:[(0,x.jsx)("option",{value:2001,children:"2001"}),(0,x.jsx)("option",{value:2002,children:"2002"}),(0,x.jsx)("option",{value:2003,children:"2003"}),(0,x.jsx)("option",{value:2004,children:"2004"}),(0,x.jsx)("option",{value:2005,children:"2005"}),(0,x.jsx)("option",{value:2006,children:"2006"}),(0,x.jsx)("option",{value:2007,children:"2007"}),(0,x.jsx)("option",{value:2008,children:"2008"}),(0,x.jsx)("option",{value:2009,children:"2009"}),(0,x.jsx)("option",{value:2010,children:"2010"})]})]}),(0,x.jsxs)("div",{className:"col-12 form-group",children:[(0,x.jsx)("label",{children:"Months"}),(0,x.jsxs)("select",{className:"form-select",onChange:e=>t(e.target.value),value:a,children:[(0,x.jsx)("option",{value:"01",children:"Jan"}),(0,x.jsx)("option",{value:"02",children:"Feb"}),(0,x.jsx)("option",{value:"03",children:"Mar"}),(0,x.jsx)("option",{value:"04",children:"Apr"}),(0,x.jsx)("option",{value:"05",children:"May"}),(0,x.jsx)("option",{value:"06",children:"Jun"}),(0,x.jsx)("option",{value:"07",children:"July"}),(0,x.jsx)("option",{value:"08",children:"August"}),(0,x.jsx)("option",{value:"09",children:"Sep"}),(0,x.jsx)("option",{value:"10",children:"Oct"}),(0,x.jsx)("option",{value:"11",children:"Nov"}),(0,x.jsx)("option",{value:"12",children:"Dec"})]})]})]})})]})]})]})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("div",{className:"row comman_table pt-md-3 pb-md-4 pb-3 px-md-3 px-2",children:(0,x.jsxs)("div",{className:"col-12 position-relative",children:[(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table  table-hover",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"S.No."}),(0,x.jsx)("th",{children:"Image"}),(0,x.jsx)("th",{children:"Name"}),(0,x.jsx)("th",{children:"Email"}),(0,x.jsx)("th",{children:"Mobile Number"}),(0,x.jsx)("th",{children:"Action"})]})}),(0,x.jsx)("tbody",{children:null===U||void 0===U?void 0:U.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:($-1)*_+s+1}),(0,x.jsx)("td",{children:(0,x.jsx)("div",{className:"user-img",children:(0,x.jsx)("img",{src:e.profile||"../assets/img/user1.png",alt:"",className:"w-100 h-100"})})}),(0,x.jsx)("td",{children:e.name}),(0,x.jsx)("td",{children:e.email}),(0,x.jsx)("td",{children:e.mobileNumber}),(0,x.jsx)("td",{children:(0,x.jsxs)("div",{className:"d-flex justify-content-start gap-2",children:[(0,x.jsx)(c.N_,{to:`/admin/merchant-details/${e._id}?tab=${C.get("tab")||1}&page=${f}`,className:"bg-main px-2 status_accepted_bg text-white",children:"View"}),(0,x.jsx)(c.N_,{to:"",className:"status_accepted_bg",onClick:()=>E(e._id,"Accept"),children:"Accept"}),(0,x.jsx)(c.N_,{to:"",className:"status_declained_bg",onClick:()=>b(e._id),"data-bs-toggle":"modal","data-bs-target":"#popUp",children:"Decline"})]})})]},e._id)))})]})}),(0,x.jsxs)("div",{className:"pagination row mt-4",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsx)("span",{children:`Showing ${$} to ${I}  of ${I}`})}),(0,x.jsxs)("div",{className:"col-auto d-flex",children:[(0,x.jsx)("button",{className:"bg-main status_accepted_bg",disabled:1==$,onClick:()=>D($-1),children:"Prev"}),(()=>{const e=[],s=Math.max(1,f-2),a=Math.min(I,f+2);for(let l=s;l<=a;l++)console.log(f,l),e.push((0,x.jsx)("button",{className:`btn ${f==l?"bg-custom-secondary":"btn-light"} ms-1`,onClick:()=>D(l),children:l},l));return e})(),(0,x.jsx)("button",{className:"bg-main status_accepted_bg  ms-1",disabled:$==I,onClick:()=>D($+1),children:"Next"})]})]})]})})})]}),(0,x.jsx)("div",{className:"modal fade popUp ",id:"popUp","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:-1,"aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,x.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,x.jsx)("div",{className:"modal-content",children:(0,x.jsx)("div",{className:"modal-body border-0 py-4 px-3",children:(0,x.jsxs)("div",{className:"form-design",children:[(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{className:"mb-2",children:"Give a Reason To Delcine User"}),(0,x.jsx)("textarea",{className:"form-control",name:"reason",id:"reason",value:g,onChange:e=>N(e.target.value),style:{height:"120px"}})]})}),(0,x.jsxs)("div",{className:"row mt-4 mb-2 text-center",children:[(0,x.jsx)("div",{className:"col-6",children:(0,x.jsx)(c.N_,{className:"bg-main  status_accepted_bg w-100 d-block","data-bs-dismiss":"modal",to:"",onClick:()=>{b(""),N("")},id:"popUpClose",children:"Cancel"})}),(0,x.jsx)("div",{className:"col-6",children:(0,x.jsx)("button",{className:"bg-custom-secondary status_accepted_bg status_declained_bg w-100",onClick:()=>E(v,"Declined"),disabled:u,children:u?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:"me-2",children:"Wait"}),(0,x.jsx)(m.IN,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"18",visible:!0})]}):"Decline"})})]})]})})})})})]})};const p=function(){const e=(0,n.zy)(),s=(0,n.Zp)(),a=new URLSearchParams(e.search),d=a.get("tab")||1;(0,l.useEffect)((()=>{if(2==d){const e=document.querySelectorAll(".tab-pane"),s=document.querySelectorAll(".nav-item");e.forEach((e=>e.classList.remove("show","active"))),s.forEach((e=>e.classList.remove("active"))),document.getElementById("users-tab").classList.add("active"),document.getElementById("users").classList.add("show","active")}}),[d]);const r=e=>{a.set("tab",e),a.delete("page"),s({search:a.toString()},{replace:!0})};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.A,{}),(0,x.jsxs)("div",{className:"admin_main",children:[(0,x.jsx)(i.A,{}),(0,x.jsx)("div",{className:"admin_contentpart",children:(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,x.jsxs)("div",{className:"tabs nav nav-tabs common_tabs",id:"reportsTab",role:"tablist",children:[(0,x.jsx)("label",{className:"tab nav-item active",htmlFor:"radio-1",id:"sales-tab","data-bs-toggle":"tab",href:"#sales",role:"tab","aria-controls":"sales","aria-selected":"true",onClick:()=>r(1),children:"New Merchant Registration Details"}),(0,x.jsx)("label",{className:"tab nav-item",htmlFor:"radio-2",id:"users-tab","data-bs-toggle":"tab",href:"#users",role:"tab","aria-controls":"users","aria-selected":"false",onClick:()=>r(2),children:"Merchants Management"})]}),(0,x.jsx)("div",{children:(0,x.jsx)(c.N_,{to:"/admin/add-merchant",className:"comman_btn w-fit",children:"Add Merchant"})})]}),(0,x.jsxs)("div",{className:"tab-content mt-4",id:"reportsTabContent",children:[(0,x.jsx)("div",{className:"tab-pane common_table fade show active",id:"sales",role:"tabpanel","aria-labelledby":"sales-tab",children:(0,x.jsx)(u,{})}),(0,x.jsx)("div",{className:"tab-pane common_table fade",id:"users",role:"tabpanel","aria-labelledby":"users-tab",children:(0,x.jsx)(j,{})})]})]})})]})]})}}}]);
//# sourceMappingURL=123.1ba70f26.chunk.js.map