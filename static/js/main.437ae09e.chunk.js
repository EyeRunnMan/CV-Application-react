(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(17),j=c.n(i),o=c(6),r=(c(26),c(5)),s=c(1),l=c(18),d=c.n(l),b=c(0),O=function(e){var t=e.setData,c=e.data;console.log(c);var n=c.firstName,i=c.lastName,j=c.title,o=c.address,l=c.phoneNumber,O=c.Email,u=c.Description,p=c.Experience,h=c.Education;return console.log(p),Object(b.jsxs)("div",{id:"edit-page",children:[Object(b.jsxs)("div",{className:"page-header",children:[Object(b.jsx)("span",{children:"Title"}),Object(b.jsx)("button",{onClick:function(){t({firstName:"",lastName:"",title:"",photo:"ASDF",address:"",phoneNumber:"",Email:"",Description:"",Experience:[{position:"",company:"",city:"",from:"",to:""}],Education:[{school:"",city:"",level:"",Core:"",from:"",to:""}]})},style:{background:"none",border:"0px"},children:Object(b.jsx)(d.a,{})})]}),Object(b.jsxs)("div",{id:"inputs-container",children:[Object(b.jsxs)("div",{className:"edit-info-container",children:[Object(b.jsx)("span",{children:"Personal Info"}),Object(b.jsx)("input",{placeholder:"First Name",value:n,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{firstName:e.target.value}))}}),Object(b.jsx)("input",{placeholder:"Last Name",value:i,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{lastName:e.target.value}))}}),Object(b.jsx)("input",{placeholder:"Title",value:j,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{title:e.target.value}))}}),Object(b.jsxs)("label",{children:["Photo",Object(b.jsx)("input",{type:"file",accept:"image/*,.pdf",style:{marginLeft:"20px"},onChange:function(e){var n=new FileReader;n.onload=function(e){t(Object(s.a)(Object(s.a)({},c),{},{photo:e.target.result}))},n.readAsDataURL(e.target.files[0])}})]}),Object(b.jsx)("input",{placeholder:"Address",value:o,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{address:e.target.value}))}}),Object(b.jsx)("input",{placeholder:"Phone Number",value:l,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{phoneNumber:e.target.value}))}}),Object(b.jsx)("input",{placeholder:"Email",value:O,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{Email:e.target.value}))}}),Object(b.jsx)("textarea",{style:{resize:"none"},placeholder:"Description",value:u,onChange:function(e){t(Object(s.a)(Object(s.a)({},c),{},{Description:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"edit-info-container",children:[Object(b.jsx)("span",{children:"Experience"}),p.map((function(e,n){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("input",{placeholder:"Position",value:e.position,onChange:function(e){p[n]=Object(s.a)(Object(s.a)({},p[n]),{},{position:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Experience:p}))}}),Object(b.jsx)("input",{placeholder:"Company",value:e.company,onChange:function(e){p[n]=Object(s.a)(Object(s.a)({},p[n]),{},{company:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Experience:p}))}}),Object(b.jsx)("input",{placeholder:"City",value:e.city,onChange:function(e){p[n]=Object(s.a)(Object(s.a)({},p[n]),{},{city:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Experience:p}))}}),Object(b.jsx)("input",{placeholder:"From",type:"date",value:e.from,onChange:function(e){p[n]=Object(s.a)(Object(s.a)({},p[n]),{},{from:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Experience:p}))}}),Object(b.jsx)("input",{placeholder:"To",type:"date",value:e.to,onChange:function(e){p[n]=Object(s.a)(Object(s.a)({},p[n]),{},{to:e.target.value}),console.log(p[n]),t(Object(s.a)(Object(s.a)({},c),{},{Experience:p}))}}),Object(b.jsx)("button",{className:"delete-btn",onClick:function(){var e=p.filter((function(e,t){return console.log(t!==n),t!==n}));console.log("AFTER FILER ",e),t(Object(s.a)(Object(s.a)({},c),{},{Experience:e}))},children:"Delete"})]},n)})),Object(b.jsx)("button",{className:"add-btn",onClick:function(){t(Object(s.a)(Object(s.a)({},c),{},{Experience:[].concat(Object(r.a)(p),[{position:"asdf",company:"asdf",city:"asdf",from:"asdf",to:"asdf"}])}))},children:"Add"})]}),Object(b.jsxs)("div",{className:"edit-info-container",children:[Object(b.jsx)("span",{children:"Education"}),h.map((function(e,n){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)("input",{placeholder:"University/School Name",value:e.school,onChange:function(e){h[n]=Object(s.a)(Object(s.a)({},h[n]),{},{school:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Education:h}))}}),Object(b.jsx)("input",{placeholder:"City",value:e.city,onChange:function(e){h[n]=Object(s.a)(Object(s.a)({},h[n]),{},{city:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Education:h}))}}),Object(b.jsx)("input",{placeholder:"Education level",value:e.level,onChange:function(e){h[n]=Object(s.a)(Object(s.a)({},h[n]),{},{level:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Education:h}))}}),Object(b.jsx)("input",{placeholder:"Core",value:e.Core,onChange:function(e){h[n]=Object(s.a)(Object(s.a)({},h[n]),{},{Core:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Education:h}))}}),Object(b.jsx)("input",{placeholder:"From",type:"date",value:e.from,onChange:function(e){h[n]=Object(s.a)(Object(s.a)({},h[n]),{},{from:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Education:h}))}}),Object(b.jsx)("input",{placeholder:"To",type:"date",value:e.to,onChange:function(e){h[n]=Object(s.a)(Object(s.a)({},h[n]),{},{to:e.target.value}),t(Object(s.a)(Object(s.a)({},c),{},{Education:h}))}}),Object(b.jsx)("button",{className:"delete-btn",onClick:function(){var e=h.filter((function(e,t){return t!==n}));t(Object(s.a)(Object(s.a)({},c),{},{Education:e}))},children:"Delete"})]})})),Object(b.jsx)("button",{className:"add-btn",onClick:function(){t(Object(s.a)(Object(s.a)({},c),{},{Education:[].concat(Object(r.a)(h),[{school:"",city:"",level:"",Core:"",from:"",to:""}])}))},children:"Add"})]})]})]})},u=function(){return Object(b.jsx)("div",{className:"header-div",children:Object(b.jsx)("h1",{children:"CV-Generator"})})},p=c(20),h=c.n(p),x=function(e){var t=e.data,c=t.firstName,n=t.lastName,i=t.title,j=t.photo,o=t.address,r=t.phoneNumber,s=t.Email,l=t.Description,d=t.Experience,O=t.Education;return Object(b.jsxs)("div",{id:"preview-page",children:[Object(b.jsxs)("div",{className:"page-header",children:[Object(b.jsx)("span",{children:"Preview Page"}),Object(b.jsx)("button",{style:{background:"none",border:"0px"},onClick:function(){return window.print()},children:Object(b.jsx)(h.a,{})})]}),Object(b.jsxs)("div",{id:"main-cv",children:[Object(b.jsxs)("div",{id:"cv-header",children:[Object(b.jsx)("span",{children:c+" "+n}),Object(b.jsx)("span",{children:i})]}),Object(b.jsxs)("div",{id:"cv-info",children:[Object(b.jsxs)("div",{id:"cv-info-left",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Description"}),Object(b.jsx)("p",{children:l})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Experience"}),d.map((function(e,t){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"exp-div",children:[Object(b.jsx)("span",{children:new Date(e.from).getFullYear()+" - "+new Date(e.to).getFullYear()}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:e.company}),Object(b.jsx)("span",{children:e.position}),Object(b.jsx)("span",{children:e.city})]})]})},t)}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Education"}),O.map((function(e,t){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"edu-div",children:[Object(b.jsx)("span",{children:new Date(e.from).getFullYear()+" - "+new Date(e.to).getFullYear()}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:e.school}),Object(b.jsx)("span",{children:e.city}),Object(b.jsxs)("span",{children:["Subject: ",e.Core]})]})]})},t)}))]})]}),Object(b.jsxs)("div",{id:"cv-info-right",children:[Object(b.jsx)("div",{id:"profile-pic-div",children:Object(b.jsx)("img",{src:j,alt:"Profile Pic"})}),Object(b.jsxs)("div",{id:"personal-info",children:[Object(b.jsx)("span",{children:"Personal Details"}),Object(b.jsx)("span",{children:"Address"}),Object(b.jsx)("p",{children:o}),Object(b.jsx)("span",{children:"Phone Number"}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("span",{children:"Email"}),Object(b.jsx)("p",{children:s})]})]})]})]})]})};var v=function(){var e=Object(n.useState)({firstName:"",lastName:"",title:"",photo:"ASDF",address:"",phoneNumber:"",Email:"",Description:"",Experience:[{position:"",company:"",city:"",from:"",to:""}],Education:[{school:"",city:"",level:"",Core:"",from:"",to:""}]}),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,1fr)"},children:[Object(b.jsx)(O,{setData:a,data:c}),Object(b.jsx)(x,{data:c})]})]})};j.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.437ae09e.chunk.js.map