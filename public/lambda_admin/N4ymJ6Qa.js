import{m as h}from"./DugTeqwv.js";import{_ as d}from"./C_206FfQ.js";import{y as i,z as g,E as v,D as u,C as o,B as p}from"./BsiC3VYZ.js";import"./2tDPZFmp.js";import"./BgMGjKYI.js";import"./BYTvHWBW.js";const c={mixins:[h],data(){return{registerNumber:null,registerChar1:"А",registerChar2:"А",characters:[{value:"А",label:"А"},{value:"Б",label:"Б"},{value:"В",label:"В"},{value:"Г",label:"Г"},{value:"Д",label:"Д"},{value:"Е",label:"Е"},{value:"Ё",label:"Ё"},{value:"Ж",label:"Ж"},{value:"З",label:"З"},{value:"И",label:"И"},{value:"Й",label:"Й"},{value:"К",label:"К"},{value:"Л",label:"Л"},{value:"М",label:"М"},{value:"Н",label:"Н"},{value:"О",label:"О"},{value:"Ө",label:"Ө"},{value:"П",label:"П"},{value:"Р",label:"Р"},{value:"С",label:"С"},{value:"Т",label:"Т"},{value:"У",label:"У"},{value:"Ү",label:"Ү"},{value:"Ф",label:"Ф"},{value:"Х",label:"Х"},{value:"Ц",label:"Ц"},{value:"Ч",label:"Ч"},{value:"Ш",label:"Ш"},{value:"Щ",label:"Щ"},{value:"Ъ",label:"Ъ"},{value:"Ы",label:"Ы"},{value:"Ь",label:"Ь"},{value:"Э",label:"Э"},{value:"Ю",label:"Ю"},{value:"Я",label:"Я"}]}},computed:{registerLocal(){return this.model.form[this.model.component]}},mounted(){this.init(this.model.form[this.model.component])},watch:{registerLocal(e,l){this.init(e)}},methods:{onlyNumbers(e){return/^[0-9]+$/.test(e)},init(e){if(e){let l=e.charAt(0);this.registerChar1={value:l,label:l};let r=e.charAt(1);this.registerChar2={value:r,label:r},this.registerNumber=e.substring(2,10)}else this.registerNumber=null,this.registerChar1="А",this.registerChar2="А"},registerChanged(){if(this.registerNumber&&this.registerChar1&&this.registerChar2){let e=this.registerChar1+this.registerChar2;if(this.onlyNumbers(this.registerNumber)){let l=this.registerNumber.substring(0,8),r=e+l;this.registerNumber.length>8?this.registerNumber=l:r.length===10?this.model.form[this.model.component]=r:this.model.form[this.model.component]=null}else this.model.form[this.model.component]=null,this.registerNumber=null}else this.model.form[this.model.component]=null}}},C=p("div",{style:{width:"20px",display:"inline-block"}},null,-1);function f(e,l,r,N,a,s){const n=i("a-select"),m=i("a-input"),b=i("lambda-form-item");return g(),v(b,{label:e.label,name:e.model.component,meta:e.meta},{default:u(()=>[o(m,{disabled:e.disabled,onChange:s.registerChanged,class:"register-field",value:a.registerNumber,"onUpdate:value":l[2]||(l[2]=t=>a.registerNumber=t)},{addonBefore:u(()=>[o(n,{value:a.registerChar1,"onUpdate:value":l[0]||(l[0]=t=>a.registerChar1=t),disabled:e.disabled,options:a.characters,onChange:s.registerChanged,"show-search":""},null,8,["value","disabled","options","onChange"]),C,o(n,{value:a.registerChar2,"onUpdate:value":l[1]||(l[1]=t=>a.registerChar2=t),disabled:e.disabled,options:a.characters,onChange:s.registerChanged,"show-search":""},null,8,["value","disabled","options","onChange"])]),_:1},8,["disabled","onChange","value"])]),_:1},8,["label","name","meta"])}const V=d(c,[["render",f]]);export{V as default};
