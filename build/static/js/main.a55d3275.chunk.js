(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,n,t){"use strict";(function(e){var t=e.window.localStorage,r={login:function(e){console.log("login data: ",e);var n=e.user,r=e.isSuccess,c=n.username,a=n._id;t.username=c,t.userId=a,t.isSuccess=r,t.role=n.role},setDatalogin:function(e){t.login=JSON.stringify(e)},getDataLogin:function(){return t.login?JSON.parse(t.login):void 0},isSuccess:function(){return t.isSuccess},userId:function(){return t.userId},username:function(){return t.userName},role:function(){return t.role},isMD:function(){return"MD"===t.role},isNurse:function(){return"NURSE"===t.role},logout:function(){t.clear()}};n.a=r}).call(this,t(20))},56:function(e,n,t){},60:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var r=t(5),c=t(1),a=t.n(c),o=t(24),i=t.n(o),u=t(39),s=t(36),O=t(15),l=t(16),j=t(18),b=t(17),p=(t.p,t(56),t(30)),d=t(6),f=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return console.log("mct report error"),Object(r.jsx)("div",{children:"Not Found"})}}]),t}(c.Component),E=t(13),v=function(e){var n=e.component,t=e.exact,c=void 0!==t&&t,a=e.path,o=e.authenticated;return Object(r.jsx)(d.b,{exact:c,path:a,render:function(e){return o?Object(r.jsx)(n,Object(E.a)({},e)):Object(r.jsx)(d.a,{to:{pathname:"/greeting"}})}})};v.defaultProps={exact:!1,authenticated:!1};var h=v,g=t(27),m=t(37),L=t.n(m),T=t(21),x=t.n(T),S=function(e){var n=function(e){var n=Object(c.useState)(e),t=Object(g.a)(n,2),r=t[0],a=t[1];return[r,function(e){return a((function(n){var t=x.a.assign(n,e);return Object(E.a)({},t)}))}]}({data:[]}),t=Object(g.a)(n,2),a=(t[0],t[1],e.className);return Object(r.jsx)("div",{className:L()("greeting-wrapper",a),children:Object(r.jsx)("span",{children:"my component"})})};S.defaultProps={className:""};var _=S,G=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"Sign In"})})},N=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(r.jsx)("main",{className:"div-root",children:Object(r.jsx)(p.a,{children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/sign-in",name:"Sign In",component:G}),Object(r.jsx)(d.b,{path:"/greeting",name:"Greeting",component:_}),Object(r.jsx)(h,{path:"/",name:"full",component:f}),Object(r.jsx)(d.b,{path:"*",name:"notFound",component:f})]})})})}}]),t}(a.a.Component);N.defaultProps={};var U=N,A=(t(59),t(60),function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){return Object(O.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(U,{})})}}]),t}(c.Component)),y=t(12),I=t(40),P={loading:{},login:{user:{}}},R=t(22),k={LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_COMPLETE:"LOGIN_COMPLETE",GET_ALL_DATA_REQUEST:"GET_ALL_DATA_REQUEST",GET_ALL_DATA_COMPLETE:"GET_ALL_DATA_COMPLETE",RELOAD_PAGE_REQUEST:"RELOAD_PAGE_REQUEST",LOGOUT_REQUEST:"LOGOUT_REQUEST",LOGOUT_COMPLETE:"LOGOUT_COMPLETE"};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.login,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k.LOGIN_COMPLETE:return n.data;case k.LOGOUT_COMPLETE:return n;default:return e}},C=Object(y.c)({login:w});var M=function(e,n){return n.type===k.LOGOUT_REQUEST?(R.a.logout(),P):C(e,n)},D=t(11),Q=t.n(D),J=t(19),F="http://service-cloud-1.appspot.com";"".concat(F,"/user/login"),"".concat(F,"/user/login"),"".concat(F,"/checkin/getall"),"".concat(F,"/booking/getall"),t(38);var B=Q.a.mark(z),q=Q.a.mark(H);function z(){var e,n,t,r,c;return Q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e=!0;case 1:if(!e){a.next=14;break}return a.next=4,Object(J.c)(k.LOGIN_REQUEST);case 4:return n=a.sent,t=n.data,r=t.email,"nhabanh@itrvn.com",(null===(c={isSuccess:!0,user:Object(E.a)({role:"nhabanh@itrvn.com"===r?"MD":"NURSE"},t)})||void 0===c?void 0:c.isSuccess)&&R.a.login(c),a.next=12,Object(J.b)({type:k.LOGIN_COMPLETE,data:c});case 12:a.next=1;break;case 14:case"end":return a.stop()}}),B)}function H(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)(z);case 2:case"end":return e.stop()}}),q)}var K=Q.a.mark(V);function V(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)(H);case 2:case"end":return e.stop()}}),K)}var W=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(n){return}}(),X=function(){var e=Object(I.a)();return Object(E.a)(Object(E.a)({},Object(y.e)(M,W,Object(y.a)(e))),{},{runSaga:e.run(V)})}();s.sessionService.initSessionService(X),i.a.render(Object(r.jsx)(u.a,{store:X,children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.a55d3275.chunk.js.map