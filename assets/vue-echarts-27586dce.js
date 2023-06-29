import{a as K,r as Q}from"./resize-detector-a5205554.js";import{i as V,t as X}from"./echarts-b3faa40c.js";import{D as Y,s as k,x as z,a6 as ee,f as _,g as te,w as A,j as I,b as ne,z as ae,a9 as re,n as oe,u as ie}from"./@vue-eae790e7.js";var d=function(){return d=Object.assign||function(e){for(var a,n=1,s=arguments.length;n<s;n++)for(var t in a=arguments[n])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},d.apply(this,arguments)},ue=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function se(e){return a=Object.create(null),ue.forEach(function(n){a[n]=function(s){return function(){for(var t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[s].apply(e.value,t)}}(n)}),a;var a}var ce={autoresize:[Boolean,Object]},le=/^on[^a-z]/,fe=function(e){return le.test(e)};function T(e,a){var n=ie(e);return n&&typeof n=="object"&&"value"in n?n.value||a:n||a}var pe={loading:Boolean,loadingOptions:Object},E=null,N=[],x=[];(function(e,a){if(e&&typeof document<"u"){var n,s=a.prepend===!0?"prepend":"append",t=a.singleTag===!0,l=typeof a.container=="string"?document.querySelector(a.container):document.getElementsByTagName("head")[0];if(t){var p=N.indexOf(l);p===-1&&(p=N.push(l)-1,x[p]={}),n=x[p]&&x[p][s]?x[p][s]:x[p][s]=j()}else n=j();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function j(){var b=document.createElement("style");if(b.setAttribute("type","text/css"),a.attributes)for(var g=Object.keys(a.attributes),m=0;m<g.length;m++)b.setAttribute(g[m],a.attributes[g[m]]);var U=s==="prepend"?"afterbegin":"beforeend";return l.insertAdjacentElement(U,b),b}})(`x-vue-echarts{display:block;width:100%;height:100%;min-width:0}
`,{});var ve=function(){if(E!=null)return E;if(typeof HTMLElement>"u"||typeof customElements>"u")return E=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)("x-vue-echarts")}catch{return E=!1}return E=!0}(),me="ecTheme",Oe=Y({name:"echarts",props:d(d({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},ce),pe),emits:{},inheritAttrs:!1,setup:function(e,a){var n=a.attrs,s=k(),t=k(),l=k(),p=z("ecTheme",null),j=z("ecInitOptions",null),b=z("ecUpdateOptions",null),g=ee(e),m=g.autoresize,U=g.manualUpdate,q=g.loading,W=g.loadingOptions,Z=_(function(){return l.value||e.option||null}),S=_(function(){return e.theme||T(p,{})}),B=_(function(){return e.initOptions||T(j,{})}),R=_(function(){return e.updateOptions||T(b,{})}),$=_(function(){return function(c){var r={};for(var u in c)fe(u)||(r[u]=c[u]);return r}(n)}),G=te().proxy.$listeners;function w(c){if(s.value){var r=t.value=V(s.value,S.value,B.value);e.group&&(r.group=e.group);var u=G;u||(u={},Object.keys(n).filter(function(i){return i.indexOf("on")===0&&i.length>2}).forEach(function(i){var o=i.charAt(2).toLowerCase()+i.slice(3);o.substring(o.length-4)==="Once"&&(o="~".concat(o.substring(0,o.length-4))),u[o]=n[i]})),Object.keys(u).forEach(function(i){var o=u[i];if(o){var f=i.toLowerCase();f.charAt(0)==="~"&&(f=f.substring(1),o.__once__=!0);var h=r;if(f.indexOf("zr:")===0&&(h=r.getZr(),f=f.substring(3)),o.__once__){delete o.__once__;var L=o;o=function(){for(var y=[],O=0;O<arguments.length;O++)y[O]=arguments[O];L.apply(void 0,y),h.off(f,o)}}h.on(f,o)}}),m.value?oe(function(){r&&!r.isDisposed()&&r.resize(),v()}):v()}function v(){var i=c||Z.value;i&&r.setOption(i,R.value)}}function D(){t.value&&(t.value.dispose(),t.value=void 0)}var C=null;A(U,function(c){typeof C=="function"&&(C(),C=null),c||(C=A(function(){return e.option},function(r,u){r&&(t.value?t.value.setOption(r,d({notMerge:r!==u},R.value)):w())},{deep:!0}))},{immediate:!0}),A([S,B],function(){D(),w()},{deep:!0}),I(function(){e.group&&t.value&&(t.value.group=e.group)});var J=se(t);return function(c,r,u){var v=z("ecLoadingOptions",{}),i=_(function(){return d(d({},T(v,{})),u==null?void 0:u.value)});I(function(){var o=c.value;o&&(r.value?o.showLoading(i.value):o.hideLoading())})}(t,q,W),function(c,r,u){var v=null;A([u,c,r],function(i,o,f){var h=i[0],L=i[1],y=i[2];if(h&&L&&y){var O=y===!0?{}:y,M=O.throttle,P=M===void 0?100:M,H=O.onResize,F=function(){L.resize(),H==null||H()};v=P?X(F,P):F,K(h,v)}f(function(){h&&v&&Q(h,v)})})}(t,m,s),ne(function(){w()}),ae(function(){ve&&s.value?s.value.__dispose=D:D()}),d({chart:t,root:s,setOption:function(c,r){e.manualUpdate&&(l.value=c),t.value?t.value.setOption(c,r||{}):w(c)},nonEventAttrs:$},J)},render:function(){var e=d({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",re("x-vue-echarts",e)}});export{Oe as S,me as U};
