"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[7282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={id:"delete-sharing-config",title:"deleteSharingConfig"},o=void 0,l={unversionedId:"sharing/mutations/delete-sharing-config",id:"sharing/mutations/delete-sharing-config",title:"deleteSharingConfig",description:"No description",source:"@site/graphql/sharing/mutations/delete-sharing-config.mdx",sourceDirName:"sharing/mutations",slug:"/sharing/mutations/delete-sharing-config",permalink:"/graphql/sharing/mutations/delete-sharing-config",tags:[],version:"current",frontMatter:{id:"delete-sharing-config",title:"deleteSharingConfig"},sidebar:"tutorialSidebar",previous:{title:"WorkflowExecutionInput",permalink:"/graphql/sharing/inputs/workflow-execution-input"},next:{title:"putSharingConfig",permalink:"/graphql/sharing/mutations/put-sharing-config"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SharingConfig",id:"sharingconfig",children:[],level:4}],level:3}],p={toc:c};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSharingConfig(\n  id: ID!\n): SharingConfig\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"sharingconfig"},(0,i.kt)("a",{parentName:"h4",href:"/graphql/sharing/objects/sharing-config"},(0,i.kt)("inlineCode",{parentName:"a"},"SharingConfig"))))}s.isMDXComponent=!0}}]);