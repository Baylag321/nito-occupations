import{y as f,z as r,A as d,C as c,D as i,I as m,H as u,F as h,E as v,B as o,a9 as x,an as C}from"./BsiC3VYZ.js";import{_ as k,j as U}from"./C_206FfQ.js";import"./Ds1lc8d-.js";import{a as b}from"./BHcF-zQ5.js";const w={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data(){return{searchModel:null}},computed:{lang(){const s=["_save","re_call","_print","download_file","excelUpload"];return s.reduce((e,t,_)=>(e[t]=this.$t("crud."+s[_]),e),{})}},methods:{searchGrid(s){s.preventDefault(),this.$props.search(this.searchModel)}}},I={class:"crud-page-header-right-inside action"},E=o("i",{class:"ti-save"},null,-1),L=[E],S=o("i",{class:"ti-reload"},null,-1),M=[S],D={class:"svg-icon"},$=["href"],B={class:"svg-icon"},F={class:"svg-icon"},V={key:0,class:"btnLine",href:"javascript:void(0)"},N={class:"svg-icon"},z={class:"right-search"},A=["placeholder"],G=o("i",{class:"ti-search"},null,-1);function P(s,e,t,_,l,n){const p=f("a-tooltip"),g=f("inline-svg"),y=f("a-spin");return r(),d("div",I,[c(p,null,{title:i(()=>[m(u(n.lang._save),1)]),default:i(()=>[t.isSave?(r(),d("a",{key:0,onClick:e[0]||(e[0]=(...a)=>s.$props.save&&s.$props.save(...a)),class:"btnLine"},L)):h("",!0)]),_:1}),c(p,null,{title:i(()=>[m(u(n.lang.re_call),1)]),default:i(()=>[t.isRefresh?(r(),d("a",{key:0,onClick:e[1]||(e[1]=(...a)=>s.$props.refresh&&s.$props.refresh(...a)),class:"btnLine"},M)):h("",!0)]),_:1}),t.isPrint?(r(),v(p,{key:0},{title:i(()=>[m(u(n.lang._print),1)]),default:i(()=>[o("span",{class:"btn btn-icon",onClick:e[2]||(e[2]=(...a)=>s.$props.print&&s.$props.print(...a))},[o("span",D,[c(g,{src:"/assets/icons/duotone/Devices/Printer.svg"})])])]),_:1})):h("",!0),t.isExcelUpload?(r(),v(p,{key:1},{title:i(()=>[m(u(n.lang.excelUpload),1)]),default:i(()=>[s.$props.excelUploadCustomUrl?(r(),d("span",{key:0,class:"btn btn-icon",href:s.$props.excelUploadCustomUrl},[o("span",B,[c(g,{src:"/assets/icons/duotone/Files/Upload.svg"})])],8,$)):(r(),d("span",{key:1,class:"btn btn-icon",onClick:e[3]||(e[3]=(...a)=>s.$props.excelUploadMethod&&s.$props.excelUploadMethod(...a))},[o("span",F,[c(g,{src:"/assets/icons/duotone/Files/Upload.svg"})])]))]),_:1})):h("",!0),t.isExcel?(r(),v(p,{key:2},{title:i(()=>[m(u(n.lang.download_file),1)]),default:i(()=>[s.$props.exportLoading?(r(),d("a",V,[c(y)])):(r(),d("span",{key:1,class:"btn btn-icon",onClick:e[4]||(e[4]=(...a)=>s.$props.exportExcel&&s.$props.exportExcel(...a))},[o("span",N,[c(g,{src:"/assets/icons/duotone/Files/Download.svg"})])]))]),_:1})):h("",!0),t.isSearch?(r(),d("form",{key:3,onSubmit:e[6]||(e[6]=(...a)=>n.searchGrid&&n.searchGrid(...a))},[o("div",z,[x(o("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>l.searchModel=a),placeholder:s.$t("dataForm.search"),class:"right-search-input"},null,8,A),[[C,l.searchModel]]),G])],32)):h("",!0)])}const W=k(w,[["render",P]]),T={name:"crudLog",props:["form","grid","rowId"],data(){return{logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",dataIndex:"action",key:"action"},{title:"Хэрэглэгч",dataIndex:"user",key:"user"},{title:"Огноо",dataIndex:"created_at",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",dataIndex:"user",key:"user"},{title:"Огноо",dataIndex:"created_at",key:"created_at"}]}},computed:{lang(){const s=["registration_history","Information_viewing_history"];return s.reduce((e,t,_)=>(e[t]=this.$t("crud."+s[_]),e),{})}},methods:{getLog(){this.logs=[],this.reads=[],U.post("/crud_log/history",{schemaId:this.form,rowId:this.rowId}).then(s=>{s.data.forEach(e=>{let t=b(e.created_at);e.action!=="view"&&this.logs.push({action:e.action=="store"?"Бүртгэсэн":"Зассан",user:e.last_name.charAt(0)+"."+e.first_name,created_at:t}),e.action==="view"&&this.reads.push({user:e.last_name.charAt(0)+"."+e.first_name,created_at:t})})})}},watch:{rowId(){this.getLog()}},mounted(){this.getLog()}},K={class:"crud-log"},R={class:"fieldset"},H={class:"fieldset"};function j(s,e,t,_,l,n){const p=f("a-table");return r(),d("div",K,[o("div",R,[o("legend",null,u(n.lang.registration_history),1),c(p,{columns:l.logColumns,dataSource:l.logs,size:"small",height:l.logs.length>=3?200:100},null,8,["columns","dataSource","height"])]),o("div",H,[o("legend",null,u(n.lang.Information_viewing_history),1),c(p,{columns:l.readColumns,dataSource:l.reads,size:"small",height:l.reads.length>=3?200:80},null,8,["columns","dataSource","height"])])])}const X=k(T,[["render",j]]);export{W as K,X as c};