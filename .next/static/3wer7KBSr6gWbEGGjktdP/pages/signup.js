(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{OUKs:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t("vL9u")}])},Pmoa:function(e,r){e.exports=next},vL9u:function(e,r,t){"use strict";t.r(r);var n=t("q1tI"),a=t.n(n),o=t("5Yp1"),s=t("rePB"),c=t("iuBY"),l=t("nOHt"),i=t.n(l),u=a.a.createElement;function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){Object(s.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",loading:!1,message:"",showForm:!0}),r=e[0],t=e[1],o=r.name,l=r.email,m=r.password,f=r.error,d=r.loading,g=r.message,b=r.showForm;Object(n.useEffect)((function(){Object(c.e)()&&i.a.push("/")}),[]);var v=function(e){e.preventDefault(),t(p(p({},r),{},{loading:!0,error:!1}));var n={name:o,email:l,password:m};Object(c.f)(n).then((function(e){console.log(e),e.json().then((function(e){e.error?t(p(p({},r),{},{error:e.error})):t(p(p({},r),{},{name:"",email:"",password:"",error:"",loading:!1,message:e.message,showForm:!1}))}))}))},w=function(e){return function(n){n.preventDefault(),t(p(p({},r),{},Object(s.a)({error:!1},e,n.target.value)))}};return u("div",{className:"content"},u(a.a.Fragment,null,f?u("div",{className:"alert alert-danger"},f):"",d?u("div",{className:"alert alert-info"},"Loading..."):"",g?u("div",{className:"alert alert-info"},g):"",b&&u("form",{onSubmit:v},u("h2",{style:{textAlign:"center"}},"SIGN UP"),u("div",{className:"form-group"},u("input",{value:o,onChange:w("name"),type:"text",className:"form-control",placeholder:"Enter name"})),u("div",{className:"form-group"},u("input",{value:l,onChange:w("email"),type:"email",className:"form-control",placeholder:"Enter email"})),u("div",{className:"form-group"},u("input",{value:m,onChange:w("password"),type:"password",className:"form-control",placeholder:"Enter password"})),u("div",null,u("button",{className:"btn btn-primary btn-block"},"Signup")))))},d=a.a.createElement;r.default=function(){return d(o.a,null,d("div",{className:"container-fluid"},d("h2",{className:"text-center pt-4 pb-4"},"Signup"),d("div",{className:"row"},d("div",{className:"col-md-6 offset-md-3"},d(f,null)))))}}},[["OUKs",1,0,2,3]]]);