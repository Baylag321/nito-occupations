"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9242],{48397:(t,e,r)=>{function n(t){if(t.filterWithUser){if(t.filterWithUser&&t.filterWithUser.constructor===Array)t.filterWithUser.forEach((function(e){var r="".concat(e.tableField," = '").concat(window.init.user[e.userField],"'");""==t.filter||void 0===t.filter?t.filter=r:t.filter=t.filter+" AND "+r}));else{var e="".concat(t.filterWithUser.tableField," = '").concat(window.init.user[t.filterWithUser.userField],"'");""==t.filter||void 0===t.filter?t.filter=e:t.filter=t.filter+" AND "+e}t.filterWithUser=void 0}return t}r.d(e,{v:()=>n})},75282:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var n=r(66474),i=r.n(n),a=r(72505),s=r.n(a),l=r(25660),o=r(48397);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const f=i().extend({data:function(){return{options:[],selected:"",currentValue:null}},created:function(){var t=this;if(!this.params.isClient){var e="/lambda/krud/".concat(this.params.schemaID,"/options");s().post(e,(0,o.v)(this.params.column.filter.relation)).then((function(e){var r=e.data;t.options=r,t.loading=!1}))}},methods:{element:l.N,setMeta:function(t){return t.schemaID=this.params.schemaID,t},getValues:function(){var t=this;console.log("here"),console.log(this.params.api),this.params.api.forEachLeafNode((function(e){t.options.push(e.data[t.params.column.model])})),this.options=u(new Set(this.options))},setValue:function(t){this.selected=t,this.params.filterData(this.params.column.model,t,"equals")},valueChanged:function(t){this.params.isClient?this.params.filterData(this.params.column.model,t.target.value,"contains"):this.params.filterData(this.params.column.model,t.target.value)},onParentModelChanged:function(t){this.currentValue=t?t.filter:null}}});const d=(0,r(14486).A)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"selectable-input-filter"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],ref:"sinput",domProps:{value:t.selected},on:{input:[function(e){e.target.composing||(t.selected=e.target.value)},t.valueChanged]}}),t._v(" "),e("div",{staticClass:"selectable-input-filter-arrow"},[e("Poptip",{on:{"on-popper-show":t.getValues}},[e("div",{staticClass:"arrow-down"}),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("ul",{staticClass:"selectable-input-filter-list"},t._l(t.options,(function(r){return e("li",{key:r.index,on:{click:function(e){return t.setValue(r)}}},[t._v("\n                        "+t._s(r)+"\n                    ")])})),0)])])],1)])}),[],!1,null,null,null).exports}}]);