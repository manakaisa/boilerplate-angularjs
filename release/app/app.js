!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={"/":{path:"home.html"}},r={name:"IndexController",annotation:["$scope"],controller:function(e){let t=this;e.$on("updatedPageInfo",(e,n)=>{t.title=n.title,t.description=n.description}),t.menu=["menu1","menu2","menu3"],t.menuloaded=(()=>{console.log("menuloaded")})}},l={name:"HomeController",annotation:["$scope"],controller:function(e){e.$emit("updatedPageInfo",{title:"Home",description:"Home - description"}),this.content="hello world"}},a=angular.module("controllers",[]).controller(r.name,[...r.annotation,r.controller]).controller(l.name,[...l.annotation,l.controller]).name,i={name:"mLayout",annotation:[],directive:function(){return{transclude:{top:"?mLayoutTop",left:"?mLayoutLeft",body:"?mLayoutBody",right:"?mLayoutRight",bottom:"?mLayoutBottom"},templateUrl:(e,t)=>t.href}}},u={name:"mOnloaded",annotation:["$timeout"],directive:function(e){return{restrict:"A",link:(t,n,o)=>{e(()=>{t.$apply(o.mOnloaded)})}}}},c=angular.module("directives",[]).directive(i.name,[...i.annotation,i.directive]).directive(u.name,[...u.annotation,u.directive]).name,m={name:"mMenu",component:{bindings:{data:"<"},templateUrl:"app/components/m-menu.html",controller:["$scope","$element","$attrs",function(e,t,n){let o=this;o.$onInit=(()=>{console.log(o.data)})}]}},d=angular.module("components",[]).component(m.name,m.component).name;angular.module("M-APP",["ngRoute",a,c,d]).config(["$routeProvider","$locationProvider","$compileProvider","$sceProvider",function(e,t,n,r){for(let t in o)e.when(t,{templateUrl:o[t].path});e.otherwise({templateUrl:"404.html"}),t.html5Mode({enabled:!0}),n.debugInfoEnabled(!1),n.commentDirectivesEnabled(!1),n.cssClassDirectivesEnabled(!1),r.enabled(!1)}])}]);
//# sourceMappingURL=app.js.map