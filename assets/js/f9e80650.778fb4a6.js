"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[5775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5721:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>p,default:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Component Library",l={unversionedId:"architecture/component-library",id:"architecture/component-library",title:"Component Library",description:"[SDK]",source:"@site/docs/architecture/component-library.md",sourceDirName:"architecture",slug:"/architecture/component-library",permalink:"/docs/architecture/component-library",editUrl:"https://github.com/epilot-dev/docs/edit/main/docs/architecture/component-library.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Serverless",permalink:"/docs/architecture/serverless"},next:{title:"Authentication",permalink:"/docs/auth/authentication"}},p=[{value:"Usage",id:"usage",children:[],level:2}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"component-library"},"Component Library"),(0,o.kt)("p",null,"[",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@epilot/base-elements"},"SDK"),"]\n[",(0,o.kt)("a",{parentName:"p",href:"https://base-elements.dev.epilot.io/"},"Storybook"),"]"),(0,o.kt)("p",null,"We provide a shared React component library, based on ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI")," for shared frontend UI elements."),(0,o.kt)("p",null,"The component library is distributed as a set of npm packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@epilot/base-elements"},"@epilot/base-elements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@epilot/base-modules"},"@epilot/base-modules"))),(0,o.kt)("p",null,"The storybook documentation for the component library can be found under the following links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://base-elements.dev.epilot.io/"},"https://base-elements.dev.epilot.io/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://base-modules.dev.epilot.io/"},"https://base-modules.dev.epilot.io/"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Button, ThemeProvider } from '@epilot/base-elements'\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <Button>My Button</Button>\n    </ThemeProvider>\n  )\n}\n")))}s.isMDXComponent=!0}}]);