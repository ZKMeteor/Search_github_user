(function(){"use strict";var e={3621:function(e,t,r){var n=r(6369),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box container-fuild"},[t("search"),t("list")],1)},i=[],o=function(){var e=this,t=e._self._c;return t("section",{staticClass:"junmbotron"},[t("h3",{staticClass:"jumbotron-heading"},[e._v("Search github user")]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"請輸入關鍵字"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),e._v(" "),t("button",{on:{click:e.search}},[e._v("搜尋")])])])},a=[],u=r(5939),l={name:"search",data(){return{keyword:""}},methods:{search(){this.$bus.$emit("updatelist",{isload:!0,errormsg:"",users:[],isfirst:!1}),u.Z.get(`https://api.github.com/search/users?q=${this.keyword}`).then((e=>{console.log("成功取得資料"),this.$bus.$emit("updatelist",{isload:!1,errormsg:"",users:e.data.items,isfirst:!1})}),(e=>{console.log("資料取的錯誤",e.message),this.$bus.$emit("updatelist",{isload:!1,errormsg:e.message,users:[],isfirst:!1})}))}}},c=l,f=r(1001),h=(0,f.Z)(c,o,a,!1,null,null,null),d=h.exports,v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row"},[t("transition-group",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInDown","leave-active-class":"animate__backOutDown",appear:""}},e._l(e.info.users,(function(r){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.info.users.length,expression:"info.users.length"}],key:r.login,staticClass:"card"},[t("a",{attrs:{href:r.html_url,target:"_blank"}},[t("img",{staticStyle:{width:"100px"},attrs:{src:r.avatar_url}})]),t("p",{staticClass:"card-text"},[e._v(e._s(r.login))])])})),0),t("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.isfirst,expression:"info.isfirst"}]},[e._v("你好，這邊是顯示區")]),t("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.isload,expression:"info.isload"}]},[e._v("更新頁面中。。。。。。")]),t("h1",{directives:[{name:"show",rawName:"v-show",value:e.info.errormsg,expression:"info.errormsg"}]},[e._v(e._s(e.info.errormsg))])],1)},p=[],m={name:"list",data(){return{info:{isfirst:!0,isload:!1,errormsg:"",users:[]}}},mounted(){this.$bus.$on("updatelist",(e=>{console.log("收到數據",e),this.info={...this.info,...e}}))}},g=m,w=(0,f.Z)(g,v,p,!1,null,null,null),b=w.exports,_={name:"App",components:{search:d,list:b}},y=_,x=(0,f.Z)(y,s,i,!1,null,null,null),k=x.exports;n.ZP.config.productionTip=!1,new n.ZP({render:e=>e(k),beforeCreate(){n.ZP.prototype.$bus=this}}).$mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,i){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],i=e[c][2];for(var a=!0,u=0;u<n.length;u++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(a=!1,i<o&&(o=i));if(a){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,s,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,o=n[0],a=n[1],u=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(u)var c=u(r)}for(t&&t(n);l<o.length;l++)i=o[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self["webpackChunkcli"]=self["webpackChunkcli"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3621)}));n=r.O(n)})();
//# sourceMappingURL=app.8e21bfd8.js.map