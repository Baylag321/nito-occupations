import{m as g}from"./DugTeqwv.js";import{_}from"./C_206FfQ.js";import{L}from"./DsAggExp.js";import{P as b}from"./Bfegjd5j.js";import{a7 as w,y as i,z as t,E as r,D as d,B as h,C as k,A as l,H as y}from"./BsiC3VYZ.js";import"./2tDPZFmp.js";import"./BgMGjKYI.js";import"./BYTvHWBW.js";const C={mixins:[g],components:{LoadingOutlined:L,PlusOutlined:b},computed:{lang(){const e=["viewPhotos","_delete"];return e.reduce((o,m,n)=>(o[m]=this.$t("dataForm."+e[n]),o),{})}},mounted(){this.init()},data(){return{defaultList:[],uploadList:[],showImage:!1,showImageUrl:"",loading:!1}},watch:{itemValue(e,o){(o&&!e||e&&!o)&&e&&this.init()}},methods:{init(){this.model.form[this.model.component]&&(this.uploadList.length>=1?this.uploadList[0].response!==this.model.form[this.model.component]&&(this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}]):this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component]}])},onVisibleChange(e){this.showImage=e},handleView(e){this.showImage=!0,this.showImageUrl=e.response},handleChange(e){if(e.file.status==="uploading"){this.loading=!0;return}e.file.status==="done"&&(this.model.form[this.model.component]=e.file.response,this.uploadList=[{status:"done",thumbUrl:this.url+this.model.form[this.model.component],response:this.model.form[this.model.component],name:e.file.name}],this.loading=!1),e.file.status==="error"&&(this.uploadList=this.uploadList.filter(o=>o.status==="done"),this.loading=!1,w.error(this.$t("alertMessage.errorMsg")))},success(e){this.meta.file.isMultiple?(this.uploadList=this.$refs.upload.fileList,this.model.form[this.model.component]=JSON.stringify(this.uploadList.map(o=>({name:o.name,response:o.response})))):this.model.form[this.model.component]=e},handleRemove(e){this.meta.file.isMultiple?this.model.form[this.model.component]=JSON.stringify(this.uploadList.filter(o=>o.response!==e.response)):this.model.form[this.model.component]=null}}},v={class:"sub-form-image"},I=["src"],U={key:1},B={key:1,class:"ti ti-camera"},M={class:"ant-upload-text"};function N(e,o,m,n,s,a){const p=i("loading-outlined"),u=i("a-upload"),f=i("lambda-form-item");return t(),r(f,{label:e.label,name:e.model.component,meta:e.meta},{default:d(()=>[h("div",v,[k(u,{"file-list":s.uploadList,"onUpdate:fileList":o[0]||(o[0]=c=>s.uploadList=c),name:"file",action:`${e.url?e.url:""}/lambda/krud/upload`,onChange:a.handleChange,onRemove:a.handleRemove},{default:d(()=>[this.model.form[this.model.component]?(t(),l("img",{key:0,src:this.url+this.model.form[this.model.component],alt:"image sub form"},null,8,I)):(t(),l("div",U,[s.loading?(t(),r(p,{key:0})):(t(),l("i",B)),h("div",M,y(e.label),1)]))]),_:1},8,["file-list","action","onChange","onRemove"])])]),_:1},8,["label","name","meta"])}const J=_(C,[["render",N]]);export{J as default};
