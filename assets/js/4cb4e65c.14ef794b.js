"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[4850],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>h});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(n),h=a,f=g["".concat(c,".").concat(h)]||g[h]||u[h]||i;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6850:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>p});var t=n(7462),a=(n(7294),n(3905));const i={id:"search-sharing-configs",title:"searchSharingConfigs"},o=void 0,s={unversionedId:"sharing/queries/search-sharing-configs",id:"sharing/queries/search-sharing-configs",title:"searchSharingConfigs",description:"No description",source:"@site/graphql/sharing/queries/search-sharing-configs.mdx",sourceDirName:"sharing/queries",slug:"/sharing/queries/search-sharing-configs",permalink:"/graphql/sharing/queries/search-sharing-configs",tags:[],version:"current",frontMatter:{id:"search-sharing-configs",title:"searchSharingConfigs"},sidebar:"tutorialSidebar",previous:{title:"getSharingConfig",permalink:"/graphql/sharing/queries/get-sharing-config"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (SearchInput)",id:"input-searchinput",children:[],level:4},{value:"<code>lastEvaluatedKey</code> (String)",id:"lastevaluatedkey-string",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SharingConfig",id:"sharingconfig",children:[],level:4}],level:3}],l={toc:c};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"searchSharingConfigs(\n  input: SearchInput!\n  lastEvaluatedKey: String\n): [SharingConfig]\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-searchinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/graphql/sharing/inputs/search-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SearchInput")),")"),(0,a.kt)("h4",{id:"lastevaluatedkey-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"lastEvaluatedKey")," (",(0,a.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"sharingconfig"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/sharing/objects/sharing-config"},(0,a.kt)("inlineCode",{parentName:"a"},"SharingConfig"))))}p.isMDXComponent=!0}}]);