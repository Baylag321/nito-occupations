/*! For license information please see chart-pie.8f77a72e176ab376.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[8808],{45997:(t,e,r)=>{"use strict";r.d(e,{WZ:()=>a});var n=r(99227),i=r.n(n);function a(t){return i()(t).format("0,0")}},99227:function(t,e,r){var n,i;n=function(){var t,e,r,n,i,a="2.0.6",o={},l={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function c(t,e){this._input=t,this._value=e}return(t=function(r){var n,i,a,l;if(t.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||e.isNaN(r))n=null;else if("string"==typeof r)if(u.zeroFormat&&r===u.zeroFormat)n=0;else if(u.nullFormat&&r===u.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(i in o)if((l="function"==typeof o[i].regexps.unformat?o[i].regexps.unformat():o[i].regexps.unformat)&&r.match(l)){a=o[i].unformat;break}n=(a=a||t._.stringToNumber)(r)}else n=Number(r)||null;return new c(r,n)}).version=a,t.isNumeral=function(t){return t instanceof c},t._=e={numberToFormat:function(e,r,n){var i,a,o,s,u,c,f,h=l[t.options.currentLocale],m=!1,d=!1,p=0,b="",g=1e12,v=1e9,y=1e6,_=1e3,w="",F=!1;if(e=e||0,a=Math.abs(e),t._.includes(r,"(")?(m=!0,r=r.replace(/[\(|\)]/g,"")):(t._.includes(r,"+")||t._.includes(r,"-"))&&(u=t._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),t._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],t._.includes(r," a")&&(b=" "),r=r.replace(new RegExp(b+"a[kmbt]?"),""),a>=g&&!i||"t"===i?(b+=h.abbreviations.trillion,e/=g):a<g&&a>=v&&!i||"b"===i?(b+=h.abbreviations.billion,e/=v):a<v&&a>=y&&!i||"m"===i?(b+=h.abbreviations.million,e/=y):(a<y&&a>=_&&!i||"k"===i)&&(b+=h.abbreviations.thousand,e/=_)),t._.includes(r,"[.]")&&(d=!0,r=r.replace("[.]",".")),o=e.toString().split(".")[0],s=r.split(".")[1],c=r.indexOf(","),p=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(t._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),w=t._.toFixed(e,s[0].length+s[1].length,n,s[1].length)):w=t._.toFixed(e,s.length,n),o=w.split(".")[0],w=t._.includes(w,".")?h.delimiters.decimal+w.split(".")[1]:"",d&&0===Number(w.slice(1))&&(w="")):o=t._.toFixed(e,0,n),b&&!i&&Number(o)>=1e3&&b!==h.abbreviations.trillion)switch(o=String(Number(o)/1e3),b){case h.abbreviations.thousand:b=h.abbreviations.million;break;case h.abbreviations.million:b=h.abbreviations.billion;break;case h.abbreviations.billion:b=h.abbreviations.trillion}if(t._.includes(o,"-")&&(o=o.slice(1),F=!0),o.length<p)for(var x=p-o.length;x>0;x--)o="0"+o;return c>-1&&(o=o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),0===r.indexOf(".")&&(o=""),f=o+w+(b||""),m?f=(m&&F?"(":"")+f+(m&&F?")":""):u>=0?f=0===u?(F?"-":"+")+f:f+(F?"-":"+"):F&&(f="-"+f),f},stringToNumber:function(t){var e,r,n,i=l[u.currentLocale],a=t,o={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&t===u.zeroFormat)r=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)r=null;else{for(e in r=1,"."!==i.delimiters.decimal&&(t=t.replace(/\./g,"").replace(i.delimiters.decimal,".")),o)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[e]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),a.match(n)){r*=Math.pow(10,o[e]);break}r*=(t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1,t=t.replace(/[^0-9\.]+/g,""),r*=Number(t)}return r},isNaN:function(t){return"number"==typeof t&&isNaN(t)},includes:function(t,e){return-1!==t.indexOf(e)},insert:function(t,e,r){return t.slice(0,r)+e+t.slice(r)},reduce:function(t,e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var r,n=Object(t),i=n.length>>>0,a=0;if(3===arguments.length)r=arguments[2];else{for(;a<i&&!(a in n);)a++;if(a>=i)throw new TypeError("Reduce of empty array with no initial value");r=n[a++]}for(;a<i;a++)a in n&&(r=e(r,n[a],a,n));return r},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(t,r){var n=e.multiplier(r);return t>n?t:n}),1)},toFixed:function(t,e,r,n){var i,a,o,l,s=t.toString().split("."),u=e-(n||0);return i=2===s.length?Math.min(Math.max(s[1].length,u),e):u,o=Math.pow(10,i),l=(r(t+"e+"+i)/o).toFixed(i),n>e-i&&(a=new RegExp("\\.?0{1,"+(n-(e-i))+"}$"),l=l.replace(a,"")),l}},t.options=u,t.formats=o,t.locales=l,t.locale=function(t){return t&&(u.currentLocale=t.toLowerCase()),u.currentLocale},t.localeData=function(t){if(!t)return l[u.currentLocale];if(t=t.toLowerCase(),!l[t])throw new Error("Unknown locale : "+t);return l[t]},t.reset=function(){for(var t in s)u[t]=s[t]},t.zeroFormat=function(t){u.zeroFormat="string"==typeof t?t:null},t.nullFormat=function(t){u.nullFormat="string"==typeof t?t:null},t.defaultFormat=function(t){u.defaultFormat="string"==typeof t?t:"0.0"},t.register=function(t,e,r){if(e=e.toLowerCase(),this[t+"s"][e])throw new TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=r,r},t.validate=function(e,r){var n,i,a,o,l,s,u,c;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{u=t.localeData(r)}catch(e){u=t.localeData(t.locale())}return a=u.currency.symbol,l=u.abbreviations,n=u.delimiters.decimal,i="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(c=e.match(/^[^\d]+/))&&(e=e.substr(1),c[0]!==a)||null!==(c=e.match(/[^\d]+$/))&&(e=e.slice(0,-1),c[0]!==l.thousand&&c[0]!==l.million&&c[0]!==l.billion&&c[0]!==l.trillion)||(s=new RegExp(i+"{2}"),e.match(/[^\d.,]/g)||(o=e.split(n)).length>2||(o.length<2?!o[0].match(/^\d+.*\d$/)||o[0].match(s):1===o[0].length?!o[0].match(/^\d+$/)||o[0].match(s)||!o[1].match(/^\d+$/):!o[0].match(/^\d+.*\d$/)||o[0].match(s)||!o[1].match(/^\d+$/))))},t.fn=c.prototype={clone:function(){return t(this)},format:function(e,r){var n,i,a,l=this._value,s=e||u.defaultFormat;if(r=r||Math.round,0===l&&null!==u.zeroFormat)i=u.zeroFormat;else if(null===l&&null!==u.nullFormat)i=u.nullFormat;else{for(n in o)if(s.match(o[n].regexps.format)){a=o[n].format;break}i=(a=a||t._.numberToFormat)(l,s,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){var r=e.correctionFactor.call(null,this._value,t);function n(t,e,n,i){return t+Math.round(r*e)}return this._value=e.reduce([this._value,t],n,0)/r,this},subtract:function(t){var r=e.correctionFactor.call(null,this._value,t);function n(t,e,n,i){return t-Math.round(r*e)}return this._value=e.reduce([t],n,Math.round(this._value*r))/r,this},multiply:function(t){function r(t,r,n,i){var a=e.correctionFactor(t,r);return Math.round(t*a)*Math.round(r*a)/Math.round(a*a)}return this._value=e.reduce([this._value,t],r,1),this},divide:function(t){function r(t,r,n,i){var a=e.correctionFactor(t,r);return Math.round(t*a)/Math.round(r*a)}return this._value=e.reduce([this._value,t],r),this},difference:function(e){return Math.abs(t(this._value).subtract(e).value())}},t.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),t.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,n){var i,a=t._.includes(r," BPS")?" ":"";return e*=1e4,r=r.replace(/\s?BPS/,""),i=t._.numberToFormat(e,r,n),t._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"BPS"),i=i.join("")):i=i+a+"BPS",i},unformat:function(e){return+(1e-4*t._.stringToNumber(e)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},i="("+(i=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(t){return r.suffixes.indexOf(t)<0}))).join("|")).replace("B","B(?!PS)")+")",t.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(e,i,a){var o,l,s,u=t._.includes(i,"ib")?n:r,c=t._.includes(i," b")||t._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),o=0;o<=u.suffixes.length;o++)if(l=Math.pow(u.base,o),s=Math.pow(u.base,o+1),null===e||0===e||e>=l&&e<s){c+=u.suffixes[o],l>0&&(e/=l);break}return t._.numberToFormat(e,i,a)+c},unformat:function(e){var i,a,o=t._.stringToNumber(e);if(o){for(i=r.suffixes.length-1;i>=0;i--){if(t._.includes(e,r.suffixes[i])){a=Math.pow(r.base,i);break}if(t._.includes(e,n.suffixes[i])){a=Math.pow(n.base,i);break}}o*=a||1}return o}}),t.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,n){var i,a,o=t.locales[t.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=t._.numberToFormat(e,r,n),e>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):e<0&&!t._.includes(l.before,"-")&&!t._.includes(l.before,"(")&&(l.before="-"+l.before),a=0;a<l.before.length;a++)switch(l.before[a]){case"$":i=t._.insert(i,o.currency.symbol,a);break;case" ":i=t._.insert(i," ",a+o.currency.symbol.length-1)}for(a=l.after.length-1;a>=0;a--)switch(l.after[a]){case"$":i=a===l.after.length-1?i+o.currency.symbol:t._.insert(i,o.currency.symbol,-(l.after.length-(1+a)));break;case" ":i=a===l.after.length-1?i+" ":t._.insert(i," ",-(l.after.length-(1+a)+o.currency.symbol.length-1))}return i}}),t.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,n){var i=("number"!=typeof e||t._.isNaN(e)?"0e+0":e.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),t._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(e){var r=t._.includes(e,"e+")?e.split("e+"):e.split("e-"),n=Number(r[0]),i=Number(r[1]);function a(e,r,n,i){var a=t._.correctionFactor(e,r);return e*a*(r*a)/(a*a)}return i=t._.includes(e,"e-")?i*=-1:i,t._.reduce([n,Math.pow(10,i)],a,1)}}),t.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,n){var i=t.locales[t.options.currentLocale],a=t._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),a+=i.ordinal(e),t._.numberToFormat(e,r,n)+a}}),t.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,n){var i,a=t._.includes(r," %")?" ":"";return t.options.scalePercentBy100&&(e*=100),r=r.replace(/\s?\%/,""),i=t._.numberToFormat(e,r,n),t._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"%"),i=i.join("")):i=i+a+"%",i},unformat:function(e){var r=t._.stringToNumber(e);return t.options.scalePercentBy100?.01*r:r}}),t.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,r){var n=Math.floor(t/60/60),i=Math.floor((t-60*n*60)/60),a=Math.round(t-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)},unformat:function(t){var e=t.split(":"),r=0;return 3===e.length?(r+=60*Number(e[0])*60,r+=60*Number(e[1]),r+=Number(e[2])):2===e.length&&(r+=60*Number(e[0]),r+=Number(e[1])),Number(r)}}),t},void 0===(i="function"==typeof n?n.call(e,r,e,t):n)||(t.exports=i)},65606:t=>{var e,r,n=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var l,s=[],u=!1,c=-1;function f(){u&&l&&(u=!1,l.length?s=l.concat(s):c=-1,s.length&&h())}function h(){if(!u){var t=o(f);u=!0;for(var e=s.length;e;){for(l=s,s=[];++c<e;)l&&l[c].run();c=-1,e=s.length}l=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function d(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new m(t,e)),1!==s.length||u||o(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},95111:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});var n=r(72505),i=r.n(n),a=r(45997);const o={props:["title","value","type","chart_title","id","chart_filter","filters","hideTitle","limit","projectDomain","isRest","xData","chartData"],methods:{getSeries:function(){},callData:function(){var t=this;if(this.value.length>=1&&this.title.length>=1){var e=[];this.filters&&this.filters.map((function(r){t.chart_filter&&t.chart_filter.map((function(t){r.name==t.field&&r.table==t.table&&e.push(t)}))})),null===this.instance?this.dataCaller([]):e.length>=1?(this.lastFilter=e,this.dataCaller(e)):this.lastFilter.length>=1&&(this.lastFilter=[],this.dataCaller([]))}},sourceUrl:function(){return window.init.projectSettings?window.init.projectSettings.production_url:""},dataCaller:function(t){var e=this,r=this.sourceUrl()+"/ve/get-data-pie";this.projectDomain&&(r=this.projectDomain+r),i().post(r,{value:this.value,title:this.title,filters:this.filters,limit:this.limit?this.limit.toString():void 0}).then((function(t){e.elementData=t.data,e.initChart()})).catch((function(t){console.log(t)}))},initChart:function(){var t=this;this.instance&&(this.instance.dispose(),this.instance=null);var e=this.$el,r=e.parentElement;e.style.height=r.offsetHeight+"px";var n=window.echarts.init(e,null,{renderer:"canvas",useDirtyRect:!1});this.instance=n;var i=[],o=[],l=0,s=this.value[0].name,u=this.title[0].name;this.elementData.map((function(t){null!==t[u]&&null!==t[s]&&(l+=t[s],o.push({value:t[s],name:t[u]}))})),"PieChart"==this.type&&i.push({name:this.chart_title,type:"pie",center:["50%","50%"],radius:["35%","70%"],itemStyle:{borderRadius:3,borderColor:"#fff",borderWidth:2},data:o,label:{normal:{formatter:function(t){return t.name.length>25?t.name.substring(0,22)+"...":t.name},show:!1,position:"top"}}}),"FunnelChart"==this.type&&i.push({name:this.chart_title,type:"funnel",radius:"70%",center:["50%","60%"],data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),"TreeMapChart"==this.type&&i.push({name:this.chart_title,type:"treemap",radius:"55%",center:["50%","60%"],data:o,levels:[{itemStyle:{borderColor:"#fff",borderWidth:2,gapWidth:1},emphasis:{itemStyle:{borderColor:"#fff"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}],roam:"move",itemStyle:{borderRadius:3,borderColor:"#fff",normal:{label:{formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"%, ").concat((0,a.WZ)(t.data.value))},textStyle:{baseline:"top"}}}}});var c=this.elementData.filter((function(t){return null!==t[u]})).map((function(t){return t[u]})),f={title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:"TreeMapChart"===this.type?{trigger:"item",formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"% <br> ").concat((0,a.WZ)(t.data.value))}}:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:5,bottom:0,type:"scroll",data:c},series:i};console.log(f),console.log(f),n.setOption(f),n.on("click",(function(e){e.data?t.$emit("changeFilter",{value:e.data.name,id:t.id,field:t.title[0].name,table:t.title[0].table}):t.$emit("unFilter")})),window.addEventListener("resize",n.resize)},initRest:function(){var t=this;this.instance&&(this.instance.dispose(),this.instance=null);var e=this.$el,r=e.parentElement;e.style.height=r.offsetHeight+"px";var n=window.echarts.init(e,"shine");this.instance=n;var i=[],o=[],l=0,s=this.xData.valueField,u=this.xData.labelField;this.chartData.map((function(t){l+=t[s],o.push({value:t[s],name:t[u]})})),"PieChart"==this.type&&i.push({name:this.chart_title,type:"pie",center:["50%","40%"],radius:["35%","70%"],itemStyle:{borderRadius:3,borderColor:"#fff",borderWidth:2},data:o,label:{normal:{formatter:function(t){return t.name.length>25?t.name.substring(0,22)+"...":t.name},show:!0,position:"top"}}}),"FunnelChart"==this.type&&i.push({name:this.chart_title,type:"funnel",radius:"70%",center:["50%","60%"],data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}),"TreeMapChart"==this.type&&i.push({name:this.chart_title,type:"treemap",radius:"55%",center:["50%","60%"],data:o,levels:[{itemStyle:{borderColor:"#fff",borderWidth:2,gapWidth:1},emphasis:{itemStyle:{borderColor:"#fff"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:2,gapWidth:1,borderColorSaturation:.6}}],roam:"move",itemStyle:{borderRadius:3,borderColor:"#fff",normal:{label:{formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"%, ").concat((0,a.WZ)(t.data.value))},textStyle:{baseline:"top"}}}}});var c=this.chartData.map((function(t){return t[u]}));n.setOption({theme:"shine",name:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},title:this.hideTitle?void 0:{text:this.chart_title,textStyle:{fontFamily:"Arial",fontWeight:"normal"}},toolbox:{feature:{saveAsImage:{title:"Татах"}}},tooltip:"TreeMapChart"==this.type?{trigger:"item",formatter:function(t){var e=Math.round(t.data.value/(l/100)*100)/100;return"".concat(t.data.name,": ").concat(e,"% <br> ").concat((0,a.WZ)(t.data.value))}}:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"horizontal",left:5,bottom:0,type:"scroll",data:c},series:i}),n.on("click",(function(e){e.data?t.$emit("changeFilter",{value:e.data.name,id:t.id,field:t.title[0].name,table:t.title[0].table}):t.$emit("unFilter")}))}},mounted:function(){this.isRest?this.initRest():this.callData()},data:function(){return{elementData:[],instance:null,timeout:null,lastFilter:[]}},watch:{type:function(t){this.initChart()},value:{handler:function(t,e){var r=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){r.callData()}),1200)},deep:!0},chart_filter:{handler:function(t,e){this.timeout&&clearTimeout(this.timeout),this.callData()},deep:!0},chart_title:{handler:function(t,e){var r=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){r.callData()}),1200)},deep:!0},title:{handler:function(t,e){var r=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){r.callData()}),1200)},deep:!0}}};const l=(0,r(14486).A)(o,(function(){return(0,this._self._c)("div",{staticStyle:{width:"100%",height:"100%"}})}),[],!1,null,null,null).exports}}]);