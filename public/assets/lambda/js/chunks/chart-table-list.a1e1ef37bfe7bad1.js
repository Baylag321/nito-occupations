(self.webpackChunk=self.webpackChunk||[]).push([[6519],{14475:(e,t,n)=>{"use strict";n.d(t,{Q:()=>i});var i=function(e){var t="table"===e?window.init.dbSchema.tableList:window.init.dbSchema.viewList;if(window.init.project&&window.init.microservices&&window.init.microservices.length>=1){var n=window.init.microservices.findIndex((function(e){return e.microservice_id===window.init.project.id}));if(n>=0)return"table"===e?window.init.microservices[n].tableList:window.init.microservices[n].viewList}return t}},65606:e=>{var t,n,i=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{n="function"==typeof clearTimeout?clearTimeout:r}catch(e){n=r}}();var a,o=[],c=!1,u=-1;function d(){c&&a&&(c=!1,a.length?o=a.concat(o):u=-1,o.length&&_())}function _(){if(!c){var e=s(d);c=!0;for(var t=o.length;t;){for(a=o,o=[];++u<t;)a&&a[u].run();u=-1,t=o.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===r||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new f(e,t)),1!==o.length||c||s(_)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},71966:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var i=n(432),l=n.n(i),r=n(72505),s=n.n(r),a=n(95353),o=n(14475);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=c(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f={methods:{isShowAble:function(e,t,n){if(n)return e.table.indexOf(this.search)>=0},selectTable:function(e){var t=this;this.$store.commit("setTable",e),window.init.dbSchema.tableMeta&&window.init.dbSchema.tableMeta[e]?this.selectTableReal(window.init.dbSchema.tableMeta[e],e):s().get("/lambda/puzzle/table-schema/".concat(e)).then((function(n){t.selectTableReal(n.data,e)}))},selectTableReal:function(e,t){var n=e.map((function(e){return{name:e.model,title:e.model,type:e.dbType,table:e.table,alias:t+"_as_"+e.model,output:!0,sortType:"none",sortOrder:1,groupBy:!1,groupOrder:1,aggregate:"none"}}));this.$store.commit("setFields",n)}},data:function(){return{tableMeta:window.init.dbSchema.tableMeta,table_:"",selected_field:{}}},mounted:function(){this.table&&(this.table_=this.table)},components:{draggable:l()},computed:d(d({tableList:function(){return(0,o.Q)("table")},viewList:function(){return(0,o.Q)("view")}},(0,a.L8)({table:"table",fields:"fields"})),{},{lang:function(){var e=this,t=["data_table","selectTable","groupBy","aggregation","no","count","_max","_min","_avg","_sum","count_distinct","avg_distinct","sum_distinct","_sort","no_sort","grouping","_type","fictitious_name"];return t.reduce((function(n,i,l){return n[i]=e.$t("chart."+t[l]),n}),{})}}),watch:{table:function(e){this.table_=e}}};const v=(0,n(14486).A)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-list ve-column"},[t("div",{staticClass:"tables"},[t("label",[e._v(e._s(e.lang.data_table))]),e._v(" "),t("multiselect",{attrs:{placeholder:e.lang.selectTable,options:[{type:"table",list:e.tableList},{type:"view",list:e.viewList}],"group-values":"list","group-label":"type","group-select":!0},on:{select:e.selectTable},model:{value:e.table_,callback:function(t){e.table_=t},expression:"table_"}}),e._v(" "),t("div",{staticClass:"source-fields"},[t("draggable",{attrs:{options:{group:{name:"element",pull:"clone",put:!1},sort:!1}},model:{value:e.fields,callback:function(t){e.fields=t},expression:"fields"}},e._l(e.fields,(function(n,i){return t("Button",{key:i,staticClass:"data-element",on:{click:function(t){e.selected_field=n}}},[e._v("\n                    "+e._s(n.name)+"\n\n                    "),n.groupBy?t("span",{staticClass:"groupBy"},[e._v(e._s(e.lang.groupBy))]):e._e(),e._v(" "),"none"!=n.aggregate?t("span",{staticClass:"aggregation"},[e._v(e._s(n.aggregate))]):e._e()])})),1)],1),e._v(" "),t("br"),e._v(" "),e.selected_field.name?t("table",{staticClass:"column-options"},[t("tr",[t("td",[e._v("\n                    "+e._s(e.lang.aggregation)+":\n                ")]),e._v(" "),t("td",[t("div",{staticClass:"selector"},[t("Select",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.selected_field.aggregate,callback:function(t){e.$set(e.selected_field,"aggregate",t)},expression:"selected_field.aggregate"}},[t("Option",{attrs:{value:"none"}},[e._v(e._s(e.lang.no))]),e._v(" "),t("Option",{attrs:{value:"count"}},[e._v(e._s(e.lang.count))]),e._v(" "),t("Option",{attrs:{value:"max"}},[e._v(e._s(e.lang._max))]),e._v(" "),t("Option",{attrs:{value:"min"}},[e._v(e._s(e.lang._min))]),e._v(" "),t("Option",{attrs:{value:"avg"}},[e._v(e._s(e.lang._avg))]),e._v(" "),t("Option",{attrs:{value:"sum"}},[e._v(e._s(e.lang._sum))]),e._v(" "),t("Option",{attrs:{value:"countDistinct"}},[e._v(e._s(e.lang.count_distinct))]),e._v(" "),t("Option",{attrs:{value:"avgDistinct"}},[e._v(e._s(e.lang.avg_distinct))]),e._v(" "),t("Option",{attrs:{value:"sumDistinct"}},[e._v(e._s(e.lang.sum_distinct))])],1)],1)])]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._sort)+":\n                ")]),e._v(" "),t("td",[t("div",{staticClass:"selector"},[t("Select",{staticStyle:{width:"100px"},attrs:{size:"small"},model:{value:e.selected_field.sortType,callback:function(t){e.$set(e.selected_field,"sortType",t)},expression:"selected_field.sortType"}},[t("Option",{attrs:{value:"none"}},[e._v(e._s(e.lang.no_sort))]),e._v(" "),t("Option",{attrs:{value:"ASC"}},[e._v("A-Z")]),e._v(" "),t("Option",{attrs:{value:"DESC"}},[e._v("Z-A")])],1)],1)])]),e._v(" "),t("tr",[t("td",{attrs:{colspan:"2"}},[t("Checkbox",{attrs:{size:"small"},model:{value:e.selected_field.groupBy,callback:function(t){e.$set(e.selected_field,"groupBy",t)},expression:"selected_field.groupBy"}},[e._v(e._s(e.lang.grouping))])],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._type)+":\n                ")]),e._v(" "),t("td",[t("Input",{staticClass:"table-col-search",attrs:{disabled:"",size:"small"},model:{value:e.selected_field.type,callback:function(t){e.$set(e.selected_field,"type",t)},expression:"selected_field.type"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang.fictitious_name)+":\n                ")]),e._v(" "),t("td",[t("Input",{staticClass:"table-col-search",attrs:{disabled:"",placeholder:"",size:"small"},model:{value:e.selected_field.alias,callback:function(t){e.$set(e.selected_field,"alias",t)},expression:"selected_field.alias"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._color)+":\n                ")]),e._v(" "),t("td",[t("Input",{staticClass:"table-col-search",attrs:{placeholder:"",size:"small"},model:{value:e.selected_field.color,callback:function(t){e.$set(e.selected_field,"color",t)},expression:"selected_field.color"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang._sort)+" #:\n                ")]),e._v(" "),t("td",[t("InputNumber",{staticClass:"table-col-search",attrs:{min:1,disabled:"none"==e.selected_field.sortType,type:"number",size:"small"},model:{value:e.selected_field.sortOrder,callback:function(t){e.$set(e.selected_field,"sortOrder",t)},expression:"selected_field.sortOrder"}})],1)]),e._v(" "),t("tr",[t("td",[e._v("\n                    "+e._s(e.lang.grouping)+" #:\n                ")]),e._v(" "),t("td",[t("InputNumber",{staticClass:"table-col-search",attrs:{min:1,disabled:!e.selected_field.groupBy,type:"number",size:"small"},model:{value:e.selected_field.groupOrder,callback:function(t){e.$set(e.selected_field,"groupOrder",t)},expression:"selected_field.groupOrder"}})],1)])]):e._e()],1)])}),[],!1,null,null,null).exports}}]);