import{_ as n}from"./C_206FfQ.js";import{y as a,z as d,E as i,D as c,C as r}from"./BsiC3VYZ.js";import"./BgMGjKYI.js";import"./BYTvHWBW.js";const u={props:["model","rule","label","meta"]};function _(s,l,e,f,b,v){const t=a("a-input"),o=a("a-form-item");return d(),i(o,{rules:e.rule,label:e.label,name:e.model.component,style:{visibility:"hidden"}},{default:c(()=>[r(t,{value:e.model.form[e.model.component],"onUpdate:value":l[0]||(l[0]=m=>e.model.form[e.model.component]=m),placeholder:e.meta&&e.meta.placeHolder!==null?e.meta.placeHolder:e.label,disabled:e.meta&&e.meta.disabled?e.meta.disabled:!1},null,8,["value","placeholder","disabled"])]),_:1},8,["rules","label","name"])}const H=n(u,[["render",_]]);export{H as default};