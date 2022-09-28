"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[8455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=i,g=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8828:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>c,toc:()=>p,default:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={id:"search-input",title:"SearchInput"},o=void 0,c={unversionedId:"sharing/inputs/search-input",id:"sharing/inputs/search-input",title:"SearchInput",description:"No description",source:"@site/graphql/sharing/inputs/search-input.mdx",sourceDirName:"sharing/inputs",slug:"/sharing/inputs/search-input",permalink:"/graphql/sharing/inputs/search-input",tags:[],version:"current",frontMatter:{id:"search-input",title:"SearchInput"},sidebar:"tutorialSidebar",previous:{title:"EntityResourceInput",permalink:"/graphql/sharing/inputs/entity-resource-input"},next:{title:"SharingConfigInput",permalink:"/graphql/sharing/inputs/sharing-config-input"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>q</code> (String)",id:"q-string",children:[],level:4},{value:"<code>schema</code> (String)",id:"schema-string",children:[],level:4},{value:"<code>entity_ids</code> (ID)",id:"entity_ids-id",children:[],level:4},{value:"<code>workflow_execution_ids</code> (ID)",id:"workflow_execution_ids-id",children:[],level:4},{value:"<code>sharing_config_ids</code> (ID)",id:"sharing_config_ids-id",children:[],level:4},{value:"<code>recipient</code> (SharingRecipientInput)",id:"recipient-sharingrecipientinput",children:[],level:4}],level:3}],l={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SearchInput {\n  q: String\n  schema: String\n  entity_ids: [ID!]\n  workflow_execution_ids: [ID!]\n  sharing_config_ids: [ID!]\n  recipient: [SharingRecipientInput!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"q-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"q")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"schema-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"schema")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"entity_ids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"entity_ids")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"workflow_execution_ids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"workflow_execution_ids")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"sharing_config_ids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"sharing_config_ids")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"recipient-sharingrecipientinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"recipient")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/inputs/sharing-recipient-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SharingRecipientInput")),")"))}s.isMDXComponent=!0}}]);