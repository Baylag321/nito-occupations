import{m as t}from"./DugTeqwv.js";import{_ as l}from"./C_206FfQ.js";import{y as r,z as p,E as s,D as d,C as i}from"./BsiC3VYZ.js";import"./2tDPZFmp.js";import"./BgMGjKYI.js";import"./BYTvHWBW.js";const f={mixins:[t]};function u(e,a,c,b,_,$){const m=r("a-input-number"),n=r("lambda-form-item");return p(),s(n,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[i(m,{value:e.model.form[e.model.component],"onUpdate:value":a[0]||(a[0]=o=>e.model.form[e.model.component]=o),formatter:o=>`${o}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:o=>o.replace(/\$\s?|(,*)/g,""),placeholder:e.placeholder,disabled:e.disabled},null,8,["value","formatter","parser","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const k=l(f,[["render",u]]);export{k as default};
