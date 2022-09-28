"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[5205],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?n.createElement(h,o(o({ref:r},s),{},{components:t})):n.createElement(h,o({ref:r},s))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5466:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>c,toc:()=>l,default:()=>s});var n=t(7462),i=(t(7294),t(3905));const a={id:"sharing-recipient",title:"SharingRecipient"},o=void 0,c={unversionedId:"sharing/objects/sharing-recipient",id:"sharing/objects/sharing-recipient",title:"SharingRecipient",description:"No description",source:"@site/graphql/sharing/objects/sharing-recipient.mdx",sourceDirName:"sharing/objects",slug:"/sharing/objects/sharing-recipient",permalink:"/graphql/sharing/objects/sharing-recipient",tags:[],version:"current",frontMatter:{id:"sharing-recipient",title:"SharingRecipient"},sidebar:"tutorialSidebar",previous:{title:"SharingConfig",permalink:"/graphql/sharing/objects/sharing-config"},next:{title:"WorkflowExecution",permalink:"/graphql/sharing/objects/workflow-execution"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>org_id</code> (ID)",id:"org_id-id",children:[],level:4},{value:"<code>user_id</code> (ID)",id:"user_id-id",children:[],level:4}],level:3}],p={toc:l};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SharingRecipient {\n  org_id: ID!\n  user_id: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"org_id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"org_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"user_id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"user_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);