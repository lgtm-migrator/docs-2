"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[6973],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>s});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),s=o,f=g["".concat(c,".").concat(s)]||g[s]||d[s]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5599:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={id:"get-public-portal-config",title:"getPublicPortalConfig"},i=void 0,l={unversionedId:"customer-portal/queries/get-public-portal-config",id:"customer-portal/queries/get-public-portal-config",title:"getPublicPortalConfig",description:"No description",source:"@site/graphql/customer-portal/queries/get-public-portal-config.mdx",sourceDirName:"customer-portal/queries",slug:"/customer-portal/queries/get-public-portal-config",permalink:"/graphql/customer-portal/queries/get-public-portal-config",tags:[],version:"current",frontMatter:{id:"get-public-portal-config",title:"getPublicPortalConfig"},sidebar:"tutorialSidebar",previous:{title:"getOrgPortalConfig",permalink:"/graphql/customer-portal/queries/get-org-portal-config"},next:{title:"Sharing API",permalink:"/graphql/sharing"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>brand_id</code> (String)",id:"brand_id-string",children:[],level:4},{value:"<code>org_id</code> (String)",id:"org_id-string",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Brand",id:"brand",children:[],level:4}],level:3}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"getPublicPortalConfig(\n  brand_id: String!\n  org_id: String!\n): Brand!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"brand_id-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"brand_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/graphql/customer-portal/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"org_id-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"org_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/graphql/customer-portal/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"brand"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/customer-portal/objects/brand"},(0,o.kt)("inlineCode",{parentName:"a"},"Brand"))))}u.isMDXComponent=!0}}]);