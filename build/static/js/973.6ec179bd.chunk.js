"use strict";(self.webpackChunktimpwebapp=self.webpackChunktimpwebapp||[]).push([[973],{7973:(e,s,a)=>{a.r(s),a.d(s,{default:()=>b});var l=a(5043),t=a(6161),i=a(7616),n=a(3216),c=a(5475),d=a(5528),r=a(9011),o=a(6337),h=a(7323),m=a(9954),x=a(6178),p=a.n(x),j=a(3768),u=a.n(j),v=a(579);const b=function(){const[e,s]=(0,l.useState)(""),[a,x]=(0,l.useState)(""),[j,b]=(0,l.useState)(""),[N,g]=(0,l.useState)(!1),[f,y]=(0,l.useState)(""),[w,_]=(0,l.useState)(1),[S]=(0,l.useState)(10),k=(0,d.MW)(),C=(0,n.zy)(),M=(0,n.Zp)(),A=new URLSearchParams(C.search);(0,l.useEffect)((()=>{const e=A.get("page")||1;e>=1&&_(e)}),[w,C.search]);const{data:U,refetch:L}=(0,r.I)({queryKey:["helpList",e,j,a,w],queryFn:async()=>{const s={search:e,year:j,month:a,page:w,pageSize:S};return(0,o.qb)(s)},onError:e=>{console.log(e)},select:e=>e.results}),T=(null===U||void 0===U?void 0:U.helps)||[],Y=(null===U||void 0===U?void 0:U.totalPages)||0,$=(null===U||void 0===U?void 0:U.page)||1,D=e=>{e>=1&&e<=Y&&(_(e),A.set("page",e),M({search:A.toString()},{replace:!0}))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.A,{}),(0,v.jsxs)("div",{className:"admin_main",children:[(0,v.jsx)(i.A,{}),(0,v.jsx)("div",{className:"admin_contentpart",children:(0,v.jsxs)("div",{className:"row comman_design mx-0",children:[(0,v.jsx)("div",{className:"col-12",children:(0,v.jsxs)("div",{className:"row align-items-center justify-content-between py-md-4 py-3 px-md-3 px-2",children:[(0,v.jsx)("div",{className:"col-md-auto mb-md-0 mb-3",children:(0,v.jsx)("div",{className:"headleft",children:(0,v.jsx)("h2",{children:"Help & Support Management"})})}),(0,v.jsxs)("div",{className:"col-md-4 d-flex align-items-center justify-content-end",children:[(0,v.jsxs)("div",{className:"searchh_box position-relative",children:[(0,v.jsx)("input",{className:"form-control",type:"search",placeholder:"Search",value:e,onChange:e=>s(e.target.value)}),(0,v.jsx)("button",{children:(0,v.jsx)("i",{className:"fas fa-search"})})]}),(0,v.jsxs)("div",{className:"dropdown filterdropdown",children:[(0,v.jsx)("button",{className:"btn btn-secondary",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,v.jsx)("i",{className:"fas fa-filter"})}),(0,v.jsx)("div",{className:"dropdown-menu",children:(0,v.jsxs)("form",{className:"form-design row mx-0",children:[(0,v.jsxs)("div",{className:"col-12 form-group",children:[(0,v.jsx)("label",{children:"Year"}),(0,v.jsxs)("select",{className:"form-select",onChange:e=>b(e.target.value),value:j,children:[(0,v.jsx)("option",{value:2001,children:"2001"}),(0,v.jsx)("option",{value:2002,children:"2002"}),(0,v.jsx)("option",{value:2003,children:"2003"}),(0,v.jsx)("option",{value:2004,children:"2004"}),(0,v.jsx)("option",{value:2005,children:"2005"}),(0,v.jsx)("option",{value:2006,children:"2006"}),(0,v.jsx)("option",{value:2007,children:"2007"}),(0,v.jsx)("option",{value:2008,children:"2008"}),(0,v.jsx)("option",{value:2009,children:"2009"}),(0,v.jsx)("option",{value:2010,children:"2010"})]})]}),(0,v.jsxs)("div",{className:"col-12 form-group",children:[(0,v.jsx)("label",{children:"Months"}),(0,v.jsxs)("select",{className:"form-select",onChange:e=>x(e.target.value),value:a,children:[(0,v.jsx)("option",{value:"01",children:"Jan"}),(0,v.jsx)("option",{value:"02",children:"Feb"}),(0,v.jsx)("option",{value:"03",children:"Mar"}),(0,v.jsx)("option",{value:"04",children:"Apr"}),(0,v.jsx)("option",{value:"05",children:"May"}),(0,v.jsx)("option",{value:"06",children:"Jun"}),(0,v.jsx)("option",{value:"07",children:"July"}),(0,v.jsx)("option",{value:"08",children:"August"}),(0,v.jsx)("option",{value:"09",children:"Sep"}),(0,v.jsx)("option",{value:"10",children:"Oct"}),(0,v.jsx)("option",{value:"11",children:"Nov"}),(0,v.jsx)("option",{value:"12",children:"Dec"})]})]})]})})]})]})]})}),(0,v.jsx)("div",{className:"col-12",children:(0,v.jsx)("div",{className:"row comman_table pt-md-3 pb-md-4 pb-3 px-md-3 px-2",children:(0,v.jsxs)("div",{className:"col-12",children:[(0,v.jsx)("div",{className:"table-responsive",children:(0,v.jsxs)("table",{className:"table table-hover",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"S.No."}),(0,v.jsx)("th",{children:"Category"}),(0,v.jsx)("th",{children:"NAME"}),(0,v.jsx)("th",{children:"Date"}),(0,v.jsx)("th",{children:"Query Title"}),(0,v.jsx)("th",{children:"Status"}),(0,v.jsx)("th",{children:"Action"})]})}),(0,v.jsx)("tbody",{children:null===T||void 0===T?void 0:T.map(((e,s)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:($-1)*S+s+1}),(0,v.jsx)("td",{children:e.category}),(0,v.jsx)("td",{children:e.name}),(0,v.jsxs)("td",{children:[" ",p()(e.createdAt).format("DD MMM YYYY, hh:mm A")]}),(0,v.jsx)("td",{style:{whiteSpace:"unset"},children:(0,v.jsx)(u(),{charLimit:50,readMoreText:"See more \u25bc",readLessText:"See less \u25b2",readMoreClassName:"read-more-less--more",readLessClassName:"read-more-less--less",children:e.complainType})}),(0,v.jsx)("td",{children:(0,v.jsx)("span",{className:"Solved"===e.status?"status_accepted":"In Progress"===e.status?"in-progress":"status_declained",children:e.status})}),(0,v.jsx)("td",{children:(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)(c.N_,{to:`/admin/view-help-&-Support/${e._id}?page=${w}`,className:"Table_btn me-2",children:(0,v.jsx)("i",{className:"fa fa-eye"})}),(0,v.jsx)(c.N_,{to:"",className:"Table_btn",onClick:()=>y(e._id),"data-bs-toggle":"modal","data-bs-target":"#popUp2",children:(0,v.jsx)("i",{className:"fa fa-trash"})})]})})]},e._id)))})]})}),(0,v.jsxs)("div",{className:"pagination row mt-4",children:[(0,v.jsx)("div",{className:"col",children:(0,v.jsx)("span",{children:`Showing ${$} to ${Y}  of ${Y}`})}),(0,v.jsxs)("div",{className:"col-auto d-flex",children:[(0,v.jsx)("button",{className:"bg-main status_accepted_bg",disabled:1==$,onClick:()=>D($-1),children:"Prev"}),(()=>{const e=[],s=Math.max(1,w-2),a=Math.min(Y,w+2);for(let l=s;l<=a;l++)console.log(w,l),e.push((0,v.jsx)("button",{className:`btn ${w==l?"bg-custom-secondary":"btn-light"} ms-1`,onClick:()=>D(l),children:l},l));return e})(),(0,v.jsx)("button",{className:"bg-main status_accepted_bg  ms-1",disabled:$==Y,onClick:()=>D($+1),children:"Next"})]})]})]})})})]})})]}),(0,v.jsx)("div",{className:"modal fade popUp",id:"popUp2","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:-1,"aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:(0,v.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:(0,v.jsx)("div",{className:"modal-content",children:(0,v.jsx)("div",{className:"modal-body border-0 py-4 px-3",children:(0,v.jsxs)("div",{className:"popUp_main text-center",children:[(0,v.jsx)("img",{className:"main_icon",src:"../assets/img/reject_imgg.webp",alt:""}),(0,v.jsx)("h3",{children:"Are you sure you want to delete?"}),(0,v.jsxs)("div",{className:"row mx-0 mt-4 mb-2",children:[(0,v.jsx)("div",{className:"col-6",children:(0,v.jsx)(c.N_,{className:"bg-main status_accepted_bg w-100 d-block","data-bs-dismiss":"modal",to:"",onClick:()=>y(""),id:"popUpClose2",children:"No"})}),(0,v.jsx)("div",{className:"col-6",children:(0,v.jsx)("button",{className:"bg-custom-secondary status_accepted_bg w-100",onClick:()=>(async e=>{g(!0);const s=await(0,o.yN)(e);s.error?(g(!1),(0,h.S)(k,s.message,{timeout:3e3})):(g(!1),document.getElementById("popUpClose2").click(),(0,h.S)(k,s.message,{timeout:3e3}),L())})(f),disabled:N,children:N?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("span",{className:"me-2",children:"Wait"}),(0,v.jsx)(m.IN,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"18",visible:!0})]}):"Yes"})})]})]})})})})})]})}}}]);
//# sourceMappingURL=973.6ec179bd.chunk.js.map