import{H as p,T as m}from"./CmOINe3U.js";import{_ as u,b as f,s as h,U as g}from"./C_206FfQ.js";import{y as r,A as v,C as s,D as a,B as e,z as w,I as y,H as c}from"./BsiC3VYZ.js";import"./BKxVv8vw.js";import"./BgMGjKYI.js";import"./BYTvHWBW.js";const b={name:"profile",data(){return{editMode:!0,base_url:f}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=h.get(g);this.$refs.form.editModel(t.id)})}}},x={class:"card drawer-wrappper"},M={class:"page-title float-left"},S={class:"float-left pt-5"},T={class:"text-gray-700 dark:text-gray-200 text-base m-0"},k={class:"offcanvas-template"},B={class:"crud-page"},H={class:"crud-page-body"},N={class:""},U={class:"ant-drawer-content"},A={class:"ant-drawer-wrapper-body"},C={class:"ant-drawer-body"};function D(t,I,P,R,o,d){const n=m,i=p,_=r("portal"),l=r("dataform");return w(),v("div",x,[s(i,null,{default:a(()=>[s(n,null,{default:a(()=>[y(c(t.$t("appAdmin.changePassword")),1)]),_:1})]),_:1}),s(_,{to:"header-left"},{default:a(()=>[e("div",M,[e("div",S,[e("h1",T,c(t.$t("appAdmin.changePassword")),1)])])]),_:1}),e("section",k,[e("div",B,[e("div",H,[e("div",N,[e("div",U,[e("div",A,[e("div",C,[s(l,{ref:"form",url:o.base_url,hideTitle:!0,schemaID:"user_password",editMode:o.editMode,do_render:o.editMode,onReady:d.editUser,onSuccess:d.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const j=u(b,[["render",D]]);export{j as default};
