import{e as F}from"./D7quCvSc.js";import{s as C,G as x}from"./BYejM6Ac.js";import{_ as G}from"./C_206FfQ.js";import{aI as N,y as g,z as l,A as n,I as k,H as f,C as h,D as b,B as i,F as m,G as D,aj as y,E as v,aG as T,a0 as R}from"./BsiC3VYZ.js";import"./2tDPZFmp.js";import"./CsFp_7X6.js";import"./Ds1lc8d-.js";import"./BHcF-zQ5.js";import"./BYTvHWBW.js";import"./BgMGjKYI.js";const A={props:["form","model","editMode","relations","formula","url","viewMode","validateWithSubForm"],mixins:[C],components:{"grid-form":x,"a-modal":N},mounted(){this.equationRenderer(),this.form.schema.forEach(t=>{t.disabled=!0})},computed:{lang(){const t=["pleaseCompleteFirstLine"];return t.reduce((o,e,a)=>(o[e]=this.$t("dataForm."+t[a]),o),{})},subStyle(){if(this.form.min_height)return{minHeight:this.form.min_height+"px",background:"#f3f4f5"}},Lang(){const t=["add"];return t.reduce((o,e,a)=>(o[e]=this.$t("dataForm."+t[a]),o),{})}},watch:{listData:{handler:function(t,o){this.hasEq&&this.equationData.map(e=>{if(e.hasEquation){e.data=-1;let a=0;switch(e.equation){case"SUM":{e.data=0,t.map(s=>{e.data+=Number(isNaN(parseInt(s.model[e.model],10))?0:s.model[e.model])});break}case"COUNT":{e.data=0,t.map(s=>{e.data+=1});break}case"MIN":{t.map(s=>{e.data==-1?e.data=s.model[e.model]:e.data=Math.min(e.data,s.model[e.model])});break}case"MAX":{e.data=0,t.map(s=>{e.data=Math.max(e.data,s.model[e.model])});break}case"AVG":{e.data=0,t.map(s=>{a++,e.data+=Number(s.model[e.model])}),e.data=Number(e.data/a);break}}}})},deep:!0}},data(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,modal_show:!1,filled:!1,editIndex:-1}},methods:{showAddModal(){this.modal_show=!0},closeModal(){this.modal_show=!1,this.editIndex=-1},formReady(t,o){let e=o.findIndex(a=>a.model===this.form.parent);e>0&&(o[e].hidden=!0),this.editIndex>=0&&this.$nextTick(()=>{this.viewMode&&(this.$refs.form.viewMode=!0),this.$refs.form.editModel(this.listData[this.editIndex].model[this.form.identity],{...this.listData[this.editIndex].model})})},onError(){},onSuccess(t){if(this.editIndex>=0)Object.keys(t).forEach(o=>{this.listData[this.editIndex].form.identity!=o&&(o=="created_at"||o=="updated_at"||(this.listData[this.editIndex].model[o]=t[o]))});else{let o=_.cloneDeep(this.form),e={};Object.keys(t).forEach(d=>{let c=o.schema.findIndex(p=>p.model=="key");c>=0&&(o.identity==o.schema[c].model||o.schema[c].formType==null||o.timestamp&&(o.schema[c].model=="created_at"||o.schema[c].model=="updated_at"))||(e[d]=t[d])});let a={form:o,model:e},s=this.model.form[this.model.component];s==null&&(s=[]),s.push(e),this.model.form[this.model.component]=s,this.listData.push(a)}this.editMode&&this.validateWithSubForm(!0),this.closeModal()},element:F,checkAddable(){return new Promise((t,o)=>{let e=this.listData[this.listData.length-1];if(e){let a=!1,s=e.model;for(let d in s)typeof s[d]!=null&&s[d]!=null&&s[d]!=""&&s[d]!=!1&&(a=!0);a?t(!0):(alert(this.lang.pleaseCompleteFirstLine),o(!1))}else t(!0)})},addSubForm(){let t=_.cloneDeep(this.form),o={};t.schema.forEach(a=>{t.identity==a.model||a.formType==null||t.timestamp&&(a.model=="created_at"||a.model=="updated_at")||(o[a.model]=a.default)});let e={form:t,model:o};this.model.form[this.model.component]==null&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(o),this.listData.push(e)},add(){this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.addByFrom()},addByFrom(){this.closeSourceModal(),this.editIndex=-1,this.showAddModal()},fillData(t){this.$nextTick(()=>{let o=[];t.forEach(e=>{o.push({form:_.cloneDeep(this.form),model:e})}),this.listData=o})},equationRenderer(){this.equationData=[],this.form.schema.map(t=>{t.label!=""&&!t.hidden&&(t.hasEquation&&(this.hasEq=!0),this.equationData.push({hasEquation:t.hasEquation,equation:t.equations,prefix:t.prefix,model:t.model,preStaticWord:t.preStaticWord,data:0}))})},edit(t){this.model.form[this.form.model][t],this.editIndex=t,this.showAddModal()},remove(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1)},reset(){this.model.form[this.form.model]=[],this.listData=[]},sort(t){let o=1;this.currentSortDir=this.currentSortDir==="asc"?"desc":"asc",this.currentSort=this.currentSortDir==="desc"?-1:1,this.currentSort=t.model,this.listData.sort((e,a)=>(this.currentSortDir==="desc"&&(o=-1),e.model[this.currentSort]<a.model[this.currentSort]?-1*o:e.model[this.currentSort]>a.model[this.currentSort]?1*o:0))}}},B={key:0,class:"subform-header"},L={class:"svg-icon"},W={key:1,class:"sub-form-grid",border:"1"},j={key:0,class:"row-number"},z=["onClick"],V={class:"th-title"},U=i("i",{class:"ti-exchange-vertical"},null,-1),H={key:1,class:"action"},O=["onClick"],P={class:"svg-icon"},X=["onClick"],J={class:"svg-icon"},Q={key:0},Y={key:0},Z={key:1},q={key:2},K=i("td",null,null,-1),$={class:"svg-icon"},ee={class:"form-modal"},te={class:"form-body"},oe={class:"form-modal source-grid"},se={class:"form-tool"},re={class:"form-tool-actions"},ae=i("i",{class:"ti-close"},null,-1),ie=[ae],de={key:0,class:"form-body"},le={key:0,class:"source-grid-description"},ne=["innerHTML"],me={class:"add-from-pre-source"};function ce(t,o,e,a,s,d){const c=g("inline-svg"),p=g("a-button"),w=g("grid-form"),M=g("dataform"),S=g("a-modal"),I=g("datagrid");return l(),n("div",{class:"subform-grid sub-modal-form",style:R(d.subStyle)},[!e.form.min_height&&!e.form.disableCreate&&!e.viewMode?(l(),n("div",B,[k(f(e.form.name)+" ",1),h(p,{shape:"circle",type:"success",size:"small",onClick:d.add,class:"sub-form-add-btn"},{icon:b(()=>[i("span",L,[h(c,{src:"/assets/icons/duotune/general/gen041.svg"})])]),_:1},8,["onClick"])])):m("",!0),e.form.min_height||this.listData.length>=1?(l(),n("table",W,[i("thead",null,[i("tr",null,[e.form.showRowNumber?(l(),n("th",j,"ДД")):m("",!0),(l(!0),n(D,null,y(e.form.schema.filter(r=>r.label!==""&&!r.hidden),r=>(l(),n("th",{onClick:u=>d.sort(r),key:r.index},[i("div",V,[k(f(r.label)+" ",1),U])],8,z))),128)),!e.form.disableEdit||!e.form.disableDelete?(l(),n("th",H,"...")):m("",!0)])]),i("tbody",null,[(l(!0),n(D,null,y(s.listData,(r,u)=>(l(),v(w,{key:u,rowIndex:u,f:r.form,model:r.model,editMode:e.editMode,relations:e.relations,formula:e.formula,schema:e.form.schema,onEdit:()=>d.edit(u)},T({action:b(()=>[e.form.disableEdit?m("",!0):(l(),n("a",{key:0,href:"javascript:void(0);",class:"btn btn-icon sub-edit",onClick:E=>d.edit(u)},[i("span",P,[h(c,{src:"/assets/icons/duotone/Design/Edit.svg"})])],8,O)),e.form.disableDelete?m("",!0):(l(),n("a",{key:1,href:"javascript:void(0);",class:"btn btn-icon",onClick:E=>d.remove(u)},[i("span",J,[h(c,{src:"/assets/icons/duotone/General/Trash.svg"})])],8,X))]),_:2},[e.form.showRowNumber?{name:"rowNumber",fn:b(()=>[i("span",null,f(u+1),1)]),key:"0"}:void 0]),1032,["rowIndex","f","model","editMode","relations","formula","schema","onEdit"]))),128))]),s.hasEq?(l(),n("tfoot",Q,[i("tr",null,[(l(!0),n(D,null,y(s.equationData,(r,u)=>(l(),n("td",{key:u},[r.preStaticWord!=null&&r.preStaticWord!=""?(l(),n("span",Y,f(r.preStaticWord),1)):m("",!0),r.hasEquation?(l(),n("span",Z,f(r.data.toLocaleString()),1)):m("",!0),r.prefix!=null&&r.prefix!=""?(l(),n("span",q,f(r.prefix),1)):m("",!0)]))),128)),K])])):m("",!0)])):m("",!0),e.form.min_height?(l(),n("a",{key:2,class:"sub-grid-add",href:"javascript:void(0)",onClick:o[0]||(o[0]=(...r)=>d.add&&d.add(...r))},[i("span",$,[h(c,{src:"/assets/icons/duotune/general/gen041.svg"})]),k(" "+f(d.lang.save),1)])):m("",!0),h(S,{"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:e.form.name,width:"85%",height:"85%",open:s.modal_show,"onUpdate:open":o[1]||(o[1]=r=>s.modal_show=r)},{footer:b(()=>[]),default:b(()=>[i("section",ee,[i("div",te,[s.modal_show?(l(),v(M,{key:0,ref:"form",schemaID:e.form.formId,do_render:s.modal_show,editMode:s.editIndex>=0,isSubForm:!0,onSuccess:d.onSuccess,url:e.url,onReady:d.formReady,onError:d.onError},null,8,["schemaID","do_render","editMode","onSuccess","url","onReady","onError"])):m("",!0)])])]),_:1},8,["title","open"]),h(S,{name:`grid-modal-${e.form.sourceGridID}`,open:t.modal_grid_show,"onUpdate:open":o[3]||(o[3]=r=>t.modal_grid_show=r),class:"form-modal","min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,width:"85%",height:"50%"},{footer:b(()=>[]),default:b(()=>[i("section",oe,[i("div",se,[i("h4",null,f(e.form.sourceGridModalTitle),1),i("div",re,[i("a",{href:"javascript:void(0)",onClick:o[2]||(o[2]=(...r)=>t.closeSourceModal&&t.closeSourceModal(...r))},ie)])]),t.modal_grid_show?(l(),n("div",de,[e.form.sourceGridTitle&&e.form.sourceGridDescription?(l(),n("div",le,[i("h3",null,f(e.form.sourceGridTitle),1),i("p",{innerHTML:e.form.sourceGridDescription},null,8,ne)])):m("",!0),h(I,{schemaID:e.form.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,user_condition:t.user_condition,paginate:50,hasSelection:!0,permissions:{c:!1,r:!0,u:!1,d:!1}},null,8,["schemaID","url","onRowSelect","user_condition"]),i("div",me,[h(p,{shape:"circle",type:"primary",size:"small",onClick:d.addByFrom,disabled:t.preSource.length>=1,icon:"md-add",class:"sub-form-add-btn"},{default:b(()=>[k("Шинээр бүртгэх")]),_:1},8,["onClick","disabled"]),h(p,{shape:"circle",type:"success",size:"small",onClick:t.addFromPreSource,disabled:t.preSource.length==0,icon:"md-add",class:"sub-form-add-btn"},{default:b(()=>[k("Сонгох")]),_:1},8,["onClick","disabled"])])])):m("",!0)])]),_:1},8,["name","open"])],4)}const Se=G(A,[["render",ce]]);export{Se as default};
