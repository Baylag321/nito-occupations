import{m as p}from"./DugTeqwv.js";import{_ as u}from"./C_206FfQ.js";import{y as _,z as t,E as f,D as h,B as o,H as m,A as s,G as b,aj as w,F as g}from"./BsiC3VYZ.js";import"./2tDPZFmp.js";import"./BgMGjKYI.js";import"./BYTvHWBW.js";const k={mixins:[p],computed:{lang(){const e=["download"];return e.reduce((l,r,n)=>(l[r]=this.$t("dataForm."+e[n]),l),{})}},data(){return{uploadList:[]}},watch:{"model.form"(e){this.uploadList=JSON.parse(this.model.form[this.model.component])}}},v={class:"multi-upload"},B={class:"multi-upload-list"},y=["src"],L=["href"];function x(e,l,r,n,d,i){const c=_("lambda-form-item");return t(),f(c,{label:e.label,name:e.model.component,meta:e.meta},{default:h(()=>[o("div",v,[o("label",null,m(e.label),1),o("div",B,[(t(!0),s(b,null,w(d.uploadList,a=>(t(),s("div",{class:"upload-list",key:a.index},[o("template",null,[a?(t(),s("img",{key:0,src:a},null,8,y)):g("",!0),o("a",{class:"upload-control",href:a,download:""},m(i.lang.download),9,L)])]))),128))])])]),_:1},8,["label","name","meta"])}const S=u(k,[["render",x]]);export{S as default};