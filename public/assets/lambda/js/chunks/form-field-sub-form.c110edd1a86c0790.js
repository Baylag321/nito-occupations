"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8714],{51431:(t,e,o)=>{o.d(e,{A:()=>r});const r={data:function(){return{preSource:[],modal_grid_show:!1,user_condition:null,custom_condition:null,sourceGridParentBasedCondition:null}},mounted:function(){void 0!==this.form.sourceGridUserCondition&&null!==this.form.sourceGridUserCondition&&""!=this.form.sourceGridUserCondition&&(this.user_condition=JSON.parse(this.form.sourceGridUserCondition)),void 0!==this.form.sourceGridParentBasedCondition&&null!==this.form.sourceGridParentBasedCondition&&""!=this.form.sourceGridParentBasedCondition&&(this.sourceGridParentBasedCondition=JSON.parse(this.form.sourceGridParentBasedCondition))},methods:{showAddSourceModal:function(){var t=this;if(this.sourceGridParentBasedCondition){this.custom_condition={};var e=!1;this.sourceGridParentBasedCondition.forEach((function(o){void 0!==t.model.form[o.parent_field]&&null!==t.model.form[o.parent_field]?t.custom_condition[o.grid_field]=t.model.form[o.parent_field]:(e=!0,t.$Notice.error({title:o.message}))})),e||this.showAddSourceModalReal()}else this.showAddSourceModalReal()},showAddSourceModalReal:function(){this.modal_grid_show=!0,this.$modal.show("grid-modal-".concat(this.form.sourceGridID))},closeSourceModal:function(){this.modal_grid_show=!1,this.$modal.hide("grid-modal-".concat(this.form.sourceGridID))},addFromPreSource:function(){var t=this;this.preSource&&this.form.sourceGridTargetColumns&&this.preSource.forEach((function(e){t.createDataFromSource(e)})),this.closeSourceModal()},createDataFromSource:function(t){var e=this,o=_.cloneDeep(this.form),r={};o.schema.forEach((function(t){o.identity!=t.model&&null!=t.formType&&(!o.timestamp||"created_at"!=t.model&&t.model)})),this.form.sourceGridTargetColumns.forEach((function(e){Vue.set(r,e.selfColumn,t[e.sourceColumn])}));var i={form:o,model:r};if(null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),""!==this.form.sourceUniqueField&&void 0!==this.form.sourceUniqueField&&null!==this.form.sourceUniqueField){var n=this.model.form[this.model.component].findIndex((function(t){return t[e.form.sourceUniqueField]===r[e.form.sourceUniqueField]}));if(-1!==n)return}this.model.form[this.model.component].push(r),this.listData.push(i),this.rowLength=this.model.form[this.model.component].length},onRowSelect:function(t){this.preSource=t},sourceGridUrl:function(){var t=this;if(window.init.microserviceSettings){var e=window.init.microserviceSettings.findIndex((function(e){return e.project_id==t.form.sourceMicroserviceID}));return e>=0?window.init.microserviceSettings[e].production_url:""}return""}}}},14193:(t,e,o)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e),o.d(e,{default:()=>m});var n=o(83110),a=o(11141);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,e||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const c={props:["form","model","editMode","relations","formula","url"],mixins:[o(51431).A],components:{"grid-form":a.A,dataform:function(){return o.e(4517).then(o.bind(o,84514))}},mounted:function(){this.equationRenderer(),this.form.schema.forEach((function(t){t.disabled=!0}))},computed:{lang:function(){var t=this,e=["pleaseCompleteFirstLine"];return e.reduce((function(o,r,i){return o[r]=t.$t("dataForm."+e[i]),o}),{})},subStyle:function(){return this.form.min_height?{minHeight:this.form.min_height+"px",background:"#f3f4f5"}:void 0},Lang:function(){var t=this,e=["add"];return e.reduce((function(o,r,i){return o[r]=t.$t("dataForm."+e[i]),o}),{})}},watch:{listData:{handler:function(t,e){this.hasEq&&this.equationData.map((function(e){if(e.hasEquation){e.data=-1;var o=0;switch(e.equation){case"SUM":e.data=0,t.map((function(t){e.data+=Number(isNaN(parseInt(t.model[e.model],10))?0:t.model[e.model])}));break;case"COUNT":e.data=0,t.map((function(t){e.data+=Number(1)}));break;case"MIN":t.map((function(t){-1==e.data?e.data=t.model[e.model]:e.data=Math.min(e.data,t.model[e.model])}));break;case"MAX":e.data=0,t.map((function(t){e.data=Math.max(e.data,t.model[e.model])}));break;case"AVG":e.data=0,t.map((function(t){o++,e.data+=Number(t.model[e.model])})),e.data=Number(e.data/o)}}}))},deep:!0}},data:function(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,modal_show:!1,editIndex:-1}},methods:{showAddModal:function(){this.modal_show=!0},closeModal:function(){this.modal_show=!1,this.editIndex=-1},formReady:function(t,e){var o=this,r=e.findIndex((function(t){return t.model==o.form.parent}));r>0&&(e[r].hidden=!0),this.editIndex>=0&&this.$nextTick((function(){o.$refs.form.editModel(o.listData[o.editIndex].model[o.form.identity],function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},o.listData[o.editIndex].model))}))},onError:function(){},onSuccess:function(t){var e=this;if(this.editIndex>=0)Object.keys(t).forEach((function(o){e.listData[e.editIndex].form.identity!=o&&"created_at"!=o&&"updated_at"!=o&&Vue.set(e.listData[e.editIndex].model,o,t[o])}));else{var o=_.cloneDeep(this.form),r={};Object.keys(t).forEach((function(e){var i=o.schema.findIndex((function(t){return"key"==t.model}));if(i>=0){if(o.identity==o.schema[i].model||null==o.schema[i].formType)return;if(o.timestamp&&("created_at"==o.schema[i].model||"updated_at"==o.schema[i].model))return}Vue.set(r,e,t[e])}));var i={form:o,model:r},n=this.model.form[this.model.component];null==n&&(n=[]),n.push(r),Vue.set(this.model.form,this.model.component,n),this.listData.push(i)}this.closeModal()},element:n.ND,checkAddable:function(){var t=this;return new Promise((function(e,o){var r=t.listData[t.listData.length-1];if(r){var i=!1,n=r.model;for(var a in n)null!=s(n[a])&&null!=n[a]&&""!=n[a]&&0!=n[a]&&(i=!0);i?e(!0):(alert(t.lang.pleaseCompleteFirstLine),o(!1))}else e(!0)}))},addSubForm:function(){var t=_.cloneDeep(this.form),e={};t.schema.forEach((function(o){t.identity!=o.model&&null!=o.formType&&(!t.timestamp||"created_at"!=o.model&&"updated_at"!=o.model)&&Vue.set(e,o.model,o.default)}));var o={form:t,model:e};null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(e),this.listData.push(o)},add:function(){this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.addByFrom()},addByFrom:function(){this.closeSourceModal(),this.editIndex=-1,this.showAddModal()},fillData:function(){var t=this;this.listData=[],setTimeout((function(){t.model.form[t.model.component].forEach((function(e){var o={form:_.cloneDeep(t.form),model:e};t.listData.push(o)})),console.log("sun form fill",t.model.form[t.model.component])}),100)},equationRenderer:function(){var t=this;this.equationData=[],this.form.schema.map((function(e){""==e.label||e.hidden||(e.hasEquation&&(t.hasEq=!0),t.equationData.push({hasEquation:e.hasEquation,equation:e.equations,prefix:e.prefix,model:e.model,preStaticWord:e.preStaticWord,data:0}))}))},edit:function(t){this.model.form[this.form.model][t],this.editIndex=t,this.showAddModal()},remove:function(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1)},reset:function(){this.model.form[this.form.model]=[],this.listData=[]},sort:function(t){var e=this,o=1;this.currentSortDir="asc"===this.currentSortDir?"desc":"asc",this.currentSort="desc"===this.currentSortDir?-1:1,this.currentSort=t.model,this.listData.sort((function(t,r){return"desc"===e.currentSortDir&&(o=-1),t.model[e.currentSort]<r.model[e.currentSort]?-1*o:t.model[e.currentSort]>r.model[e.currentSort]?1*o:0}))}}};const m=(0,o(14486).A)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"subform-grid sub-modal-form",style:t.subStyle},[t.form.min_height||t.form.disableCreate?t._e():e("div",{staticClass:"subform-header"},[t._v("\n        "+t._s(t.form.name)+"\n        "),e("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",icon:"md-add"},on:{click:t.add}})],1),t._v(" "),e("div",{staticClass:"sub-form-table-wrap"},[t.form.min_height||this.listData.length>=1?e("table",{staticClass:"sub-form-grid",attrs:{border:"1"}},[e("thead",[e("tr",[t.form.showRowNumber?e("th",{staticClass:"row-number"},[t._v("ДД")]):t._e(),t._v(" "),t._l(t.form.schema,(function(o){return""==o.label||o.hidden?t._e():e("th",{key:o.index,on:{click:function(e){return t.sort(o)}}},[e("div",{staticClass:"th-title"},[t._v("\n                        "+t._s(o.label)+" "),e("i",{staticClass:"ti-exchange-vertical"})])])})),t._v(" "),e("th",{staticClass:"action"},[t._v("...")])],2)]),t._v(" "),e("tbody",t._l(t.listData,(function(o,r){return e("grid-form",{key:r,attrs:{f:o.form,model:o.model,editMode:t.editMode,relations:t.relations,formula:t.formula,schema:t.form.schema}},[e("template",{slot:"action"},[t.form.disableEdit?t._e():e("a",{staticClass:"sub-edit",attrs:{href:"javscript:void(0)"},on:{click:function(){return t.edit(r)}}},[e("Icon",{attrs:{type:"md-create"}})],1),t._v(" "),t.form.disableDelete?t._e():e("a",{attrs:{href:"javscript:void(0)"},on:{click:function(){return t.remove(r)}}},[e("Icon",{attrs:{type:"ios-trash"}})],1)]),t._v(" "),t.form.showRowNumber?e("template",{slot:"rowNumber"},[e("span",[t._v(t._s(r+1))])]):t._e()],2)})),1),t._v(" "),t.hasEq?e("tfoot",[e("tr",[t._l(t.equationData,(function(o,r){return e("td",{key:r},[null!=o.preStaticWord&&""!=o.preStaticWord?e("span",[t._v(t._s(o.preStaticWord)+" ")]):t._e(),t._v(" "),o.hasEquation?e("span",[t._v(t._s(o.data.toLocaleString()))]):t._e(),t._v(" "),null!=o.prefix&&""!=o.prefix?e("span",[t._v(" "+t._s(o.prefix))]):t._e()])})),t._v(" "),e("td")],2)]):t._e()]):t._e()]),t._v(" "),t.form.min_height?e("a",{staticClass:"sub-grid-add",attrs:{href:"javascript:void(0)"},on:{click:t.add}},[e("Icon",{attrs:{type:"plus"}}),t._v("\n        "+t._s(t.lang.save)+"\n    ")],1):t._e(),t._v(" "),e("Modal",{staticClass:"dataform-model-form",attrs:{"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:t.form.name,width:"80vw"},model:{value:t.modal_show,callback:function(e){t.modal_show=e},expression:"modal_show"}},[e("section",{staticClass:"form-modal"},[e("div",{staticClass:"form-body"},[t.modal_show?e("dataform",{ref:"form",attrs:{schemaID:t.form.formId,do_render:t.modal_show,editMode:t.editIndex>=0,isSubForm:!0,onSuccess:t.onSuccess,url:t.url,onReady:t.formReady,onError:t.onError}}):t._e()],1)])]),t._v(" "),e("paper-modal",{staticClass:"form-modal",attrs:i(i(i({name:"grid-modal-".concat(t.form.sourceGridID),"min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0},"draggable",".form-tool"),"width","85%"),"height","80%")},[e("section",{staticClass:"form-modal source-grid"},[e("div",{staticClass:"form-tool"},[e("h4",[t._v(t._s(t.form.sourceGridModalTitle))]),t._v(" "),e("div",{staticClass:"form-tool-actions"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeSourceModal}},[e("i",{staticClass:"ti-close"})])])]),t._v(" "),t.modal_grid_show?e("div",{staticClass:"form-body"},[t.form.sourceGridTitle&&t.form.sourceGridDescription?e("div",{staticClass:"source-grid-description"},[e("h3",[t._v("\n                        "+t._s(t.form.sourceGridTitle)+"\n                    ")]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.form.sourceGridDescription)}})]):t._e(),t._v(" "),e("datagrid",{attrs:{schemaID:t.form.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,user_condition:t.user_condition,paginate:50,hasSelection:!0,permissions:{c:!1,r:!0,u:!1,d:!1}}}),t._v(" "),e("div",{staticClass:"add-from-pre-source"},[e("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"primary",size:"small",disabled:t.preSource.length>=1,icon:"md-add"},on:{click:t.addByFrom}},[t._v("Шинээр бүртгэх\n                    ")]),t._v(" "),e("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",disabled:0==t.preSource.length,icon:"md-add"},on:{click:t.addFromPreSource}},[t._v("Сонгох\n                    ")])],1)],1):t._e()])])],1)}),[],!1,null,null,null).exports},11141:(t,e,o)=>{o.d(e,{A:()=>s});var r=o(83110),i=(o(19670),o(89407)),n=o(45705);const a={props:["f","model","editMode","relations","formula","schema"],created:function(){var t=this;this.f.data={},this.f.schema.forEach((function(e){t.f.identity!=e.model&&null!=e.formType&&(!t.f.timestamp||"created_at"!=e.model&&"updated_at"!=e.model)&&(t.editMode?t.setModel(e.model,t.model[e.model],e.formType):t.setModel(e.model,e.default,e.formType),t.$watch("model."+e.model,{handler:function(o,r){t.afterChange(e.model,o,r)},deep:!0}))}))},methods:{isShowAble:function(t){if(this.schema){var e=this.schema.findIndex((function(e){return e.model==t}));return e>=0&&!this.schema[e].hidden}return!0},element:r.ND,setModel:function(t,e,o){switch(o){case"Switch":"true"!=e&&1!=e||!0,this.model[t]=r,this.f.data[t]=r;break;case"Checkbox":var r=0;"true"!=e&&1!=e||(r=1),this.model[t]=r,this.f.data[t]=r;break;default:this.f.data[t]=e}},setMeta:function(t){return delete t.table,delete t.rules,delete t.label,delete t.span,delete t.default,t},getSchemaIndex:function(t){return this.f.schema.findIndex((function(e){return e.model==t}))},afterChange:function(t,e,o){(0,i.QL)(t,e,this.model,this.f.schema,this.$refs,this.$Notice),(0,i.EY)(this.formula,t,this.model,this.f.schema,this.f.rule,this.f.model)},getSchemaRelationByModel:function(t){var e=this.f.schema.findIndex((function(e){return e.model==t}));return e>=0?(0,n.Jx)(this.f.schema[e],this.relations):null},getRelation:function(t){return(0,n.Jx)(t,this.relations)}}};const s=(0,o(14486).A)(a,(function(){var t=this,e=t._self._c;return e("tr",[t.f.showRowNumber?e("td",{staticClass:"row-number"},[t._t("rowNumber")],2):t._e(),t._v(" "),t._l(t.f.schema,(function(o){return void 0!==o.formType&&null!==o.formType&&o.model&&t.isShowAble(o.model)&&o.model!=t.f.identity&&o.model!=t.f.parent&&"updated_at"!=o.model&&"created_at"!=o.model&&!o.hidden?e("td",{key:o.index},[t.model?e(t.element(o.formType),{tag:"component",attrs:{model:{form:t.model,component:o.model},size:"small",label:o.label?o.label:"[".concat(o.model,"]"),meta:t.setMeta(o),getSchemaRelationByModel:t.getSchemaRelationByModel,relation_data:t.getRelation(o)}}):t._e()],1):t._e()})),t._v(" "),e("td",{staticClass:"action"},[t._t("action")],2)],2)}),[],!1,null,null,null).exports}}]);