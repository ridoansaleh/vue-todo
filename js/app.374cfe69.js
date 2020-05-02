(function(t){function e(e){for(var n,o,s=e[0],r=e[1],u=e[2],v=0,m=[];v<s.length;v++)o=s[v],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var r=i[s];0!==c[r]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},c={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-todo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),c=i.n(n);c.a},1908:function(t,e,i){},"279b":function(t,e,i){},"309b":function(t,e,i){"use strict";var n=i("279b"),c=i.n(n);c.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Main")],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container"},[i("h1",{staticClass:"title"},[t._v("What do you want to do ?")]),i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],staticClass:"input-task",attrs:{type:"text",placeholder:"Type a task"},domProps:{value:t.taskName},on:{input:function(e){e.target.composing||(t.taskName=e.target.value)}}}),i("button",{staticClass:"btn-save",attrs:{disabled:""===t.taskName},on:{click:t.showTime}},[t._v("Next")])]),i("TimePicker",{attrs:{pickTime:"saveTask"}}),i("div",{staticClass:"list-task"},[i("ul",t._l(t.listTask,(function(e){return i("li",{key:e.clock},[i("span",{staticClass:"delete-task",on:{click:function(i){return t.deleteTask(e.clock)}}},[t._v("×")]),t._v(" "+t._s(e.name)+" ")])})),0)])],1)},s=[],r=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timepicker-container",attrs:{id:"timepicker"}},[i("div",{staticClass:"modal-content"},[t.isHourActive?i("div",{staticClass:"clock"},[i("div",{staticClass:"dot-center"}),i("div",{staticClass:"time-box time-1",on:{click:function(e){return t.changeHour("01")}}},[t._v("1")]),i("div",{staticClass:"time-box time-2",on:{click:function(e){return t.changeHour("02")}}},[t._v("2")]),i("div",{staticClass:"time-box time-3",on:{click:function(e){return t.changeHour("03")}}},[t._v("3")]),i("div",{staticClass:"time-box time-4",on:{click:function(e){return t.changeHour("04")}}},[t._v("4")]),i("div",{staticClass:"time-box time-5",on:{click:function(e){return t.changeHour("05")}}},[t._v("5")]),i("div",{staticClass:"time-box time-6",on:{click:function(e){return t.changeHour("06")}}},[t._v("6")]),i("div",{staticClass:"time-box time-7",on:{click:function(e){return t.changeHour("07")}}},[t._v("7")]),i("div",{staticClass:"time-box time-8",on:{click:function(e){return t.changeHour("08")}}},[t._v("8")]),i("div",{staticClass:"time-box time-9",on:{click:function(e){return t.changeHour("09")}}},[t._v("9")]),i("div",{staticClass:"time-box time-10",on:{click:function(e){return t.changeHour("10")}}},[t._v("10")]),i("div",{staticClass:"time-box time-11",on:{click:function(e){return t.changeHour("11")}}},[t._v("11")]),i("div",{staticClass:"time-box time-12",on:{click:function(e){return t.changeHour("12")}}},[t._v("12")])]):i("div",{staticClass:"clock"},[i("div",{staticClass:"dot-center"}),i("div",{staticClass:"time-box time-1",on:{click:function(e){return t.changeMinute("05")}}},[t._v("05")]),i("div",{staticClass:"time-box time-2",on:{click:function(e){return t.changeMinute("10")}}},[t._v("10")]),i("div",{staticClass:"time-box time-3",on:{click:function(e){return t.changeMinute("15")}}},[t._v("15")]),i("div",{staticClass:"time-box time-4",on:{click:function(e){return t.changeMinute("20")}}},[t._v("20")]),i("div",{staticClass:"time-box time-5",on:{click:function(e){return t.changeMinute("25")}}},[t._v("25")]),i("div",{staticClass:"time-box time-6",on:{click:function(e){return t.changeMinute("30")}}},[t._v("30")]),i("div",{staticClass:"time-box time-7",on:{click:function(e){return t.changeMinute("35")}}},[t._v("35")]),i("div",{staticClass:"time-box time-8",on:{click:function(e){return t.changeMinute("40")}}},[t._v("40")]),i("div",{staticClass:"time-box time-9",on:{click:function(e){return t.changeMinute("45")}}},[t._v("45")]),i("div",{staticClass:"time-box time-10",on:{click:function(e){return t.changeMinute("50")}}},[t._v("50")]),i("div",{staticClass:"time-box time-11",on:{click:function(e){return t.changeMinute("55")}}},[t._v("55")]),i("div",{staticClass:"time-box time-12",on:{click:function(e){return t.changeMinute("00")}}},[t._v("00")])]),i("div",{staticClass:"time-selected"},[t._v(" "+t._s(t.hour)+" : "+t._s(t.minute)+" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.timeGroup,expression:"timeGroup"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.timeGroup=e.target.multiple?i:i[0]}}},[i("option",{domProps:{selected:!0}},[t._v("AM")]),i("option",[t._v("PM")])])]),i("button",{staticClass:"btn-ok",attrs:{type:"button",disabled:"00"===t.hour&&"00"===t.minute},on:{click:t.saveTask}},[t._v("Save Task")])])])}),u=[],l={name:"TimePicker",data:function(){return{hour:"00",minute:"00",isHourActive:!0,timeGroup:"AM"}},methods:{changeHour:function(t){this.hour=t,this.isHourActive=!1},changeMinute:function(t){this.minute=t,this.isHourActive=!0},saveTask:function(){this.isHourActive=!0;var t=this.hour+":"+this.minute+" "+this.timeGroup;this.$parent.saveTask(t)}},mounted:function(){var t=document.getElementById("timepicker");window.onclick=function(e){e.target==t&&(t.style.display="none")}}},v=l,m=(i("309b"),i("2877")),d=Object(m["a"])(v,r,u,!1,null,"ec8c3860",null),f=d.exports,p={name:"Main",components:{TimePicker:f},data:function(){return{listTask:[],taskName:""}},methods:{showTime:function(){var t=document.getElementById("timepicker");t.style.display="block"},saveTask:function(t){this.listTask.push({name:this.taskName,clock:t}),this.taskName="";var e=document.getElementById("timepicker");e.style.display="none"},deleteTask:function(t){var e=this.listTask.filter((function(e){if(e.clock!==t)return e}));this.listTask=e}}},k=p,h=(i("f88d"),Object(m["a"])(k,o,s,!1,null,"486b0106",null)),b=h.exports,_={name:"App",components:{Main:b}},g=_,C=(i("034f"),Object(m["a"])(g,c,a,!1,null,null,null)),x=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,i){},f88d:function(t,e,i){"use strict";var n=i("1908"),c=i.n(n);c.a}});
//# sourceMappingURL=app.374cfe69.js.map