(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},144:function(e,a,t){e.exports=t(278)},149:function(e,a,t){},152:function(e,a,t){},273:function(e,a,t){},278:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(9),c=t.n(l),o=(t(149),t(32)),s=t(33),i=t(36),m=t(34),d=t(37),u=t(127),h=t.n(u),p=t(141),b=t(8),f=t.n(b),E=(t(151),t(285)),g=t(281),v=t(279),w=t(280),y=t(283),k=t(282),O=t(139),j=t(140),N=t(284),C=f()();function S(e){if(!(f()()-C<1e3)){C=f()();var a=document.getElementsByClassName("ant-tag");if(a.length){var t="dyt";switch(this.firstElementChild.attributes.lang.value){case"pt":t="oha"}var n=e.key.toLowerCase();if(-1!==t.indexOf(n)){var r=0;switch(n){case"d":case"h":r=1;break;case"t":case"a":r=2}a[r].click()}}}}t(152);var A=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={date:null},t.handleChange=function(e){E.a.info("-> ".concat(e?e.format("YYYY-MM-DD"):"None")),t.setState({date:e})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.date;return f.a.locale("pt"),r.a.createElement("div",null,r.a.createElement("p",null,"Adapted from\xa0",r.a.createElement("a",{href:"https://ant.design/docs/react/getting-started",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"antd")," Getting Started docs")),r.a.createElement("div",{className:"inwrap"},r.a.createElement(g.a,{onChange:this.handleChange}),r.a.createElement("div",{className:"msg"},r.a.createElement(v.a,{message:"Data: ".concat(e?e.format("YYYY-MM-DD"):"None"),type:"success"}))))}}]),a}(n.Component),T=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=g.a.MonthPicker;return r.a.createElement("div",{className:"inwrap"},r.a.createElement(e,null))}}]),a}(n.Component),Y=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=g.a.WeekPicker;return r.a.createElement("div",{className:"inwrap"},r.a.createElement(e,null))}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={dateFrom:null,dateTo:null},t.handleChange=function(e,a){E.a.info("From: ".concat(e[0]?a[0]:"None",", to: ").concat(e[1]?a[1]:"None")),t.setState({dateFrom:e[0],dateTo:e[1]})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=g.a.RangePicker;return document.addEventListener("keydown",S),r.a.createElement("div",null,r.a.createElement("p",null,"Adapted from\xa0",r.a.createElement("a",{href:"https://ant.design/components/date-picker",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"antd")," Date Picker docs")),r.a.createElement("p",null,"Shortcut keys to set date:  English (D-toDay; Y\u2013Yesterday; T-Tomorrow)",r.a.createElement("br",null),"Keys are localized to Portugal: H-Hoje; O-Ontem; A-Amanh\xe3"),r.a.createElement("div",{className:"inwrap"},r.a.createElement(e,{ranges:{Yesterday:[f()().subtract(1,"days"),f()()],Today:[f()(),f()()],Tomorrow:[f()(),f()().add(1,"days")],"Last month":[f()().startOf("month"),f()().endOf("month")]},onChange:this.handleChange})),r.a.createElement("div",{className:"inwrap"},r.a.createElement(e,{ranges:{Yesterday:[f()().subtract(1,"days"),f()()],Today:[f()(),f()()],Tomorrow:[f()(),f()().add(1,"days")],"Yesterday (since 0h)":[f()().subtract(1,"days").startOf("day"),f()()],"Today (since 0h)":[f()().startOf("day"),f()()],"Last month":[f()().startOf("month"),f()().endOf("month")]},showTime:!0,format:"YYYY/MM/DD HH:mm:ss",onChange:this.handleChange})))}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={number:{value:11}},t.validatePrimeNumber=function(e){return 11===e?{validateStatus:"success",errorMsg:null}:{validateStatus:"error",errorMsg:"The prime between 8 and 12 is 11!"}},t.handleNumberChange=function(e){t.setState({number:Object(p.a)({},t.validatePrimeNumber(e),{value:e})})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.number;return r.a.createElement("div",null,r.a.createElement("p",null,"Adapted from\xa0",r.a.createElement("a",{href:"https://ant.design/components/form/#components-form-demo-without-form-create",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"antd")," Primes example docs")),r.a.createElement(w.a,null,r.a.createElement(w.a.Item,Object.assign({},{labelCol:{span:7},wrapperCol:{span:12}},{label:"Prime between 8 & 12",validateStatus:e.validateStatus,help:e.errorMsg||"A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself."}),r.a.createElement(y.a,{min:8,max:12,value:e.value,onChange:this.handleNumberChange}))))}}]),a}(n.Component),F=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=k.a.Option;return r.a.createElement(w.a,{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:12}}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Adapted from\xa0",r.a.createElement("a",{href:"https://ant.design/components/form/#components-form-demo-validate-static",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"antd")," Validation options docs")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(w.a.Item,{label:"Fail",validateStatus:"error",help:"Should be combination of numbers & alphabets"},r.a.createElement(O.a,{placeholder:"unavailable choice",id:"error"})),r.a.createElement(w.a.Item,{label:"Warning",validateStatus:"warning"},r.a.createElement(O.a,{placeholder:"Warning",id:"warning"})),r.a.createElement(w.a.Item,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."},r.a.createElement(O.a,{placeholder:"Validating",id:"validating"})),r.a.createElement(w.a.Item,{label:"Success",hasFeedback:!0,validateStatus:"success"},r.a.createElement(O.a,{placeholder:"I'm the content",id:"success"}))),r.a.createElement("div",{className:"col"},r.a.createElement(w.a.Item,{label:"Warning",hasFeedback:!0,validateStatus:"warning"},r.a.createElement(O.a,{placeholder:"Warning",id:"warning2"})),r.a.createElement(w.a.Item,{label:"Fail",hasFeedback:!0,validateStatus:"error",help:"Should be combination of numbers & alphabets"},r.a.createElement(O.a,{placeholder:"unavailable choice",id:"error2"})),r.a.createElement(w.a.Item,{label:"Success",hasFeedback:!0,validateStatus:"success"},r.a.createElement(g.a,{style:{width:"100%"}})),r.a.createElement(w.a.Item,{label:"Warning",hasFeedback:!0,validateStatus:"warning"},r.a.createElement(j.a,{style:{width:"100%"}}))),r.a.createElement("div",{className:"col"},r.a.createElement(w.a.Item,{label:"Error",hasFeedback:!0,validateStatus:"error"},r.a.createElement(k.a,{defaultValue:"1"},r.a.createElement(e,{value:"1"},"Option 1"),r.a.createElement(e,{value:"2"},"Option 2"),r.a.createElement(e,{value:"3"},"Option 3"))),r.a.createElement(w.a.Item,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."},r.a.createElement(N.a,{defaultValue:["1"],options:[]})),r.a.createElement(w.a.Item,{label:"inline",style:{marginBottom:0}},r.a.createElement(w.a.Item,{validateStatus:"error",help:"Please select the correct date",style:{display:"inline-block",width:"calc(50% - 12px)"}},r.a.createElement(g.a,null)),r.a.createElement("span",{style:{display:"inline-block",width:"24px",textAlign:"center"}},"-"),r.a.createElement(w.a.Item,{style:{display:"inline-block",width:"calc(50% - 12px)"}},r.a.createElement(g.a,null))),r.a.createElement(w.a.Item,{label:"Success",hasFeedback:!0,validateStatus:"success"},r.a.createElement(y.a,{style:{width:"100%"}})))))}}]),a}(n.Component),M=(t(273),t(286)),W=t(138),D=t.n(W),P=(t(274),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),e.setAttribute("integrity","sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"),e.setAttribute("crossorigin","anonymous"),document.head.appendChild(e)}},{key:"render",value:function(){return r.a.createElement(M.a,{locale:D.a},r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:h.a,className:"logo",alt:"logo"}),r.a.createElement("div",{className:"fgrow"},r.a.createElement("span",null,"An\xa0",r.a.createElement("a",{className:"link",title:"React's antd",href:"https://ant.design/docs/react/introduce",target:"_blank",rel:"noopener noreferrer"},"Ant Design")," example created through\xa0",r.a.createElement("a",{className:"link",title:"single-page app generator",href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"create-react-app")))),r.a.createElement("div",null,r.a.createElement("a",{className:"link flex-grow",target:"_blank",rel:"noreferrer",href:"https://github.com/agap2-ag/antd-samples-app"},"GitHub"))),r.a.createElement("main",{className:"container"},r.a.createElement("h2",null,"Forms"),r.a.createElement("section",{className:"form"},r.a.createElement("h3",null,"Validation Samples"),r.a.createElement(F,null),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Dates, Times, Alerts"),r.a.createElement(A,null),r.a.createElement("h4",null,"Months"),r.a.createElement(T,null),r.a.createElement("h4",null,"Weeks"),r.a.createElement(Y,null),r.a.createElement("h4",null,"Ranges"),r.a.createElement(x,null)),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"Prime Validation"),r.a.createElement(I,null))))),r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{className:"link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))))}}]),a}(n.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/antd-samples-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/antd-samples-app","/service-worker.js");R?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):V(a,e)})}}()}},[[144,1,2]]]);
//# sourceMappingURL=main.b6792710.chunk.js.map