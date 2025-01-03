/*! For license information please see krud-edit.9f9f42477e4bb42b.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[616],{39379:(t,r,e)=>{"use strict";e.d(r,{X:()=>o});var n=e(18678),i=e.n(n),o=function(t,r){var e=i().apply(t,r);return Array.isArray(e)?!(e.length>=1)||!e[0]:!e}},36807:(t,r,e)=>{"use strict";e.d(r,{A:()=>u});const n={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:function(){return{searchModel:null}},computed:{lang:function(){var t=this,r=["_save","re_call","_print","download_file","excelUpload"];return r.reduce((function(e,n,i){return e[n]=t.$t("crud."+r[i]),e}),{})}},methods:{searchGrid:function(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const i=(0,e(14486).A)(n,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"crud-page-header-right-inside"},[r("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?r("a",{staticClass:"btnLine",on:{click:t.$props.save}},[r("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),r("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?r("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[r("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?r("Tooltip",{attrs:{content:t.lang._print}},[r("a",{staticClass:"btnLine",on:{click:t.$props.print}},[r("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?r("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?r("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[r("i",{staticClass:"ti-layers"})]):r("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[r("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?r("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?r("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[r("Spin",[r("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):r("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[r("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?r("form",{on:{submit:t.searchGrid}},[r("div",{staticClass:"right-search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(r){r.target.composing||(t.searchModel=r.target.value)}}}),t._v(" "),r("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var o=e(39379);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(){s=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function p(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:$(t,e,s)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var d="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function w(){}function _(){}function x(){}var E={};f(E,c,(function(){return this}));var b=Object.getPrototypeOf,S=b&&b(b(j([])));S&&S!==e&&n.call(S,c)&&(E=S);var A=x.prototype=w.prototype=Object.create(E);function C(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(i,o,s,c){var u=h(t[i],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==a(f)&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,s,c)}),(function(t){e("throw",t,s,c)})):r.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return e("throw",t,s,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,i){e(t,n,r,i)}))}return o=o?o.then(i,i):i()}})}function $(r,e,n){var i=d;return function(o,a){if(i===v)throw Error("Generator is already running");if(i===g){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=M(s,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var u=h(r,e,n);if("normal"===u.type){if(i=n.done?g:y,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=g,n.method="throw",n.arg=u.arg)}}}function M(r,e){var n=e.method,i=r.iterator[n];if(i===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,M(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=h(i,r.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,o=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(a(r)+" is not iterable")}return _.prototype=x,i(A,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:_,configurable:!0}),_.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===_||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},r.awrap=function(t){return{__await:t}},C(L.prototype),f(L.prototype,u,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var a=new L(p(t,e,n,i),o);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(A),f(A,l,"Generator"),f(A,c,(function(){return this})),f(A,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function i(n,i){return s.type="throw",s.arg=r,e.next=n,i&&(e.method="next",e.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;k(e)}return i}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:j(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function c(t,r,e,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,i)}const u={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","hideInfo","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id","exportSelectedRows","exportPath","exportLabel"],components:{krudtools:i},data:function(){return{closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadSample:null,excelUploadCustomUrl:null,isRefresh:!0,isSave:!1,isSearch:!1,rowId:null,row:null,selectedData:[]}},computed:{hasVNavSlot:function(){return!!this.$slots["v-nav"]},hasNavSlot:function(){return!!this.$slots.nav}},methods:{view:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit:function(t,r){if((this.rowId=t,this.row=r,this.permissions)&&(""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&!(0,o.X)(this.permissions.gridEditConditionJS,r)))return;this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},editOnModal:function(t,r){var e,n=this;return(e=s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.rowId=t,n.row=t,n.$modal.show("krud-modal");case 3:case"end":return r.stop()}}),r)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(t){c(o,n,i,a,s,"next",t)}function s(t){c(o,n,i,a,s,"throw",t)}a(void 0)}))})()},fillModalForm:function(){if(this.permissions&&(""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&!(0,o.X)(this.permissions.gridEditConditionJS,row)))return;this.editMode=!0,this.$refs.form.editModel(this.rowId),this.templateEdit&&this.templateEdit()},clone:function(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},refresh:function(){this.searchModel=null,this.$refs.grid.refresh()},search:function(t){this.$refs.grid.searchData(t,1)},stopLoading:function(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel:function(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print:function(){this.$refs.grid.print()},excelUploadMethod:function(){this.$refs.grid.importExcel()},save:function(){this.$refs.grid.saveGridData()},onSuccess:function(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onSuccessWindow:function(t){var r=this;this.$router.push({path:this.$route.path,query:{window:"list"}}),setTimeout((function(){void 0!==r.mode&&r.mode&&"refresh"==r.mode?r.$refs.grid.refresh():r.editMode?r.$refs.grid.update(t):r.$refs.grid.append(t),r.editMode=!1,r.templateOnSuccess&&r.templateOnSuccess(t),r.onPropertySuccess&&r.onPropertySuccess()}),500)},onError:function(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()},onRowSelectedEvent:function(t,r){this.exportSelectedRows?this.selectedData=t:this.$props.onRowSelect&&this.$props.onRowSelect(t,r)},exportByPath:function(){var t=this;if(this.exportPath&&this.selectedData){var r=this.selectedData.map((function(r){return r[t.$refs.grid.identity]}));window.open(this.exportPath+r.join(","),"_blank").focus()}}}}},18678:function(t,r,e){var n,i;n=function(){"use strict";function t(t){for(var r=[],e=0,n=t.length;e<n;e++)-1===r.indexOf(t[e])&&r.push(t[e]);return r}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var r={},e={"==":function(t,r){return t==r},"===":function(t,r){return t===r},"!=":function(t,r){return t!=r},"!==":function(t,r){return t!==r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"<":function(t,r,e){return void 0===e?t<r:t<r&&r<e},"<=":function(t,r,e){return void 0===e?t<=r:t<=r&&r<=e},"!!":function(t){return r.truthy(t)},"!":function(t){return!r.truthy(t)},"%":function(t,r){return t%r},log:function(t){return console.log(t),t},in:function(t,r){return!(!r||void 0===r.indexOf)&&-1!==r.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,r,e){if(e<0){var n=String(t).substr(r);return n.substr(0,n.length+e)}return String(t).substr(r,e)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)+parseFloat(r,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)*parseFloat(r,10)}))},"-":function(t,r){return void 0===r?-t:t-r},"/":function(t,r){return t/r},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,r){return t.concat(r)}),[])},var:function(t,r){var e=void 0===r?null:r,n=this;if(void 0===t||""===t||null===t)return n;for(var i=String(t).split("."),o=0;o<i.length;o++){if(null==n)return e;if(void 0===(n=n[i[o]]))return e}return n},missing:function(){for(var t=[],e=Array.isArray(arguments[0])?arguments[0]:arguments,n=0;n<e.length;n++){var i=e[n],o=r.apply({var:i},this);null!==o&&""!==o||t.push(i)}return t},missing_some:function(t,e){var n=r.apply({missing:e},this);return e.length-n.length>=t?[]:n}};return r.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},r.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},r.get_operator=function(t){return Object.keys(t)[0]},r.get_values=function(t){return t[r.get_operator(t)]},r.apply=function(t,n){if(Array.isArray(t))return t.map((function(t){return r.apply(t,n)}));if(!r.is_logic(t))return t;var i,o,a,s,c,u=r.get_operator(t),l=t[u];if(Array.isArray(l)||(l=[l]),"if"===u||"?:"==u){for(i=0;i<l.length-1;i+=2)if(r.truthy(r.apply(l[i],n)))return r.apply(l[i+1],n);return l.length===i+1?r.apply(l[i],n):null}if("and"===u){for(i=0;i<l.length;i+=1)if(o=r.apply(l[i],n),!r.truthy(o))return o;return o}if("or"===u){for(i=0;i<l.length;i+=1)if(o=r.apply(l[i],n),r.truthy(o))return o;return o}if("filter"===u)return s=r.apply(l[0],n),a=l[1],Array.isArray(s)?s.filter((function(t){return r.truthy(r.apply(a,t))})):[];if("map"===u)return s=r.apply(l[0],n),a=l[1],Array.isArray(s)?s.map((function(t){return r.apply(a,t)})):[];if("reduce"===u)return s=r.apply(l[0],n),a=l[1],c=void 0!==l[2]?r.apply(l[2],n):null,Array.isArray(s)?s.reduce((function(t,e){return r.apply(a,{current:e,accumulator:t})}),c):c;if("all"===u){if(s=r.apply(l[0],n),a=l[1],!Array.isArray(s)||!s.length)return!1;for(i=0;i<s.length;i+=1)if(!r.truthy(r.apply(a,s[i])))return!1;return!0}if("none"===u){if(s=r.apply(l[0],n),a=l[1],!Array.isArray(s)||!s.length)return!0;for(i=0;i<s.length;i+=1)if(r.truthy(r.apply(a,s[i])))return!1;return!0}if("some"===u){if(s=r.apply(l[0],n),a=l[1],!Array.isArray(s)||!s.length)return!1;for(i=0;i<s.length;i+=1)if(r.truthy(r.apply(a,s[i])))return!0;return!1}if(l=l.map((function(t){return r.apply(t,n)})),e.hasOwnProperty(u)&&"function"==typeof e[u])return e[u].apply(n,l);if(u.indexOf(".")>0){var f=String(u).split("."),p=e;for(i=0;i<f.length;i++){if(!p.hasOwnProperty(f[i]))throw new Error("Unrecognized operation "+u+" (failed at "+f.slice(0,i+1).join(".")+")");p=p[f[i]]}return p.apply(n,l)}throw new Error("Unrecognized operation "+u)},r.uses_data=function(e){var n=[];if(r.is_logic(e)){var i=r.get_operator(e),o=e[i];Array.isArray(o)||(o=[o]),"var"===i?n.push(o[0]):o.forEach((function(t){n.push.apply(n,r.uses_data(t))}))}return t(n)},r.add_operation=function(t,r){e[t]=r},r.rm_operation=function(t){delete e[t]},r.rule_like=function(t,e){if(e===t)return!0;if("@"===e)return!0;if("number"===e)return"number"==typeof t;if("string"===e)return"string"==typeof t;if("array"===e)return Array.isArray(t)&&!r.is_logic(t);if(r.is_logic(e)){if(r.is_logic(t)){var n=r.get_operator(e),i=r.get_operator(t);if("@"===n||n===i)return r.rule_like(r.get_values(t,!1),r.get_values(e,!1))}return!1}if(Array.isArray(e)){if(Array.isArray(t)){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o+=1)if(!r.rule_like(t[o],e[o]))return!1;return!0}return!1}return!1},r},void 0===(i="function"==typeof n?n.call(r,e,r,t):n)||(t.exports=i)},72333:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>i});const n={props:["schema","id"],mixins:[e(36807).A],mounted:function(){var t=this;setTimeout((function(){t.$refs.form.editModel(t.$props.id?t.$props.id:1)}),500)},methods:{onSuccess:function(t){},onError:function(t){}}};const i=(0,e(14486).A)(n,(function(){var t=this,r=t._self._c;return r("section",{staticClass:"offcanvas-template"},[r("div",{staticClass:"crud-page"},[r("div",{staticClass:"crud-page-header"},[r("div",{staticClass:"crud-page-header-left"},[r("h3",[t._v(t._s(t.title))]),t._v(" "),t._t("nav")],2),t._v(" "),r("div",{staticClass:"crud-page-header-right"},[t._t("tooloptions"),t._v(" "),t._t("right")],2)]),t._v(" "),r("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?r("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),r("div",{staticClass:"dg-flex"},[r("dataform",{ref:"form",attrs:{schemaID:t.schema,editMode:!0,onSuccess:t.onSuccess,onError:t.onError}})],1)])])])}),[],!1,null,null,null).exports}}]);