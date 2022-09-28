"use strict";(self.webpackChunkepilot_dev_handbook=self.webpackChunkepilot_dev_handbook||[]).push([[4107],{6756:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>w});var n=a(7462),r=a(7294),i=a(3905),o=a(2389),l=a(5773),s=a(6010);const d="tabItem_LplD";function c(e){var t,a;const{lazy:i,block:o,defaultValue:c,values:u,groupId:p,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,l.lx)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=h[0])?void 0:a.props.value);if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:f}=(0,l.UB)(),[k,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=p){const e=y[p];null!=e&&e!==k&&g.some((t=>t.value===e))&&w(e)}const P=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==k&&(O(t),w(n),null!=p&&f(p,n))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]||T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},m)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:P,onClick:P},i,{className:(0,s.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":k===t})}),a??t)}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function u(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}const p=function(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)};var m=a(1736);const h=()=>r.createElement(m.Z,{title:"Getting an Order using the Entity API",language:"bash",showLineNumbers:!0},"curl --location --request GET 'https://entity.sls.epilot.io/v1/entity/schemas/order?id=<order-id>' \\\n  --header 'Accept: application/json' \\\n  --header 'Authorization: Bearer <org-access-token>'"),g=()=>r.createElement(m.Z,{title:"Getting an Order using the Entity API",language:"typescript",showLineNumbers:!0},"import { authorizeWithToken } from 'epilot-sdk/auth'\nimport entityClient from 'epilot-sdk/entity-client'\nimport pricingClient from 'epilot-sdk/pricing-client'\n\nconst accessToken = 'org-access-token'\n\nentityClient.defaults.baseURL = 'https://entity.sls.epilot.io'\npricingClient.defaults.baseURL = 'https://pricing-api.sls.epilot.io'\n\n// authorizing SDK clients\nauthorizeWithToken(entityClient, accessToken)\nauthorizeWithToken(pricingClient, accessToken)\n\nconst targetOrderId = 'order-id'\n\n// fetching the order from entity api\nconst order = await entityClient\n.getEntity({ slug: 'order', id: targetOrderId}) .then(({ data }) => data?.entity)"),b=()=>r.createElement(m.Z,{title:"Updating an Order via Pricing API",language:"bash",showLineNumbers:!0},'curl --location --request PUT \'https://pricing-api.sls.epilot.io/v1/order/<order-id>\' \\\n  --header \'Content-Type: application/json\' \\\n  --header \'Accept: application/json\' \\\n  --header \'Authorization: Bearer <org-access-token>\' \\\n  --data-raw \'{\n      "line_items": [\n          {\n              "description": "individual adjustment",\n              "_price": {\n                  "unit_amount": 1000,\n                  "unit_amount_decimal": "10.00",\n                  "unit_amount_currency": "EUR"\n              }\n          }\n      ]\n  }\''),v=()=>r.createElement(m.Z,{title:"Updating an Order via Pricing API",language:"typescript",showLineNumbers:!0},"// pushing a new line item\norder.line_items.push({\n  description: 'individual adjustment',\n  _price: {\n    unit_amount: 1000,\n    unit_amount_decimal: '10.00',\n    unit_amount_currency: 'EUR'\n  }\n})\n\n// updating the order\nawait pricingClient\n  .putOrder({ id: targetOrderId }, order).then(({ data }) => data)"),y={sidebar_position:3},f="Orders",k={unversionedId:"pricing/orders",id:"pricing/orders",title:"Orders",description:"An Order is a collection of Products and Prices that can be purchased by a Customer. Orders can be created manually on the platform our through automations that run upon certain events, such as a Journey submission.",source:"@site/docs/pricing/orders.mdx",sourceDirName:"pricing",slug:"/pricing/orders",permalink:"/docs/pricing/orders",editUrl:"https://github.com/epilot-dev/docs/edit/main/docs/pricing/orders.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Catalog",permalink:"/docs/pricing/catalog"},next:{title:"Online Sales",permalink:"/docs/pricing/ecommerce"}},w=[{value:"Managing Orders via Pricing API",id:"managing-orders-via-pricing-api",children:[{value:"Example: Updating an Order",id:"example-updating-an-order",children:[],level:3}],level:2}],T={toc:w};function O(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"orders"},"Orders"),(0,i.kt)("p",null,"An Order is a collection of Products and Prices that can be purchased by a Customer. Orders can be created manually on the platform our through automations that run upon certain events, such as a Journey submission."),(0,i.kt)("p",null,"Our platform is build in a way such that ",(0,i.kt)("a",{parentName:"p",href:"/docs/entities/flexible-entities"},"Business Entities"),' can be installed by our customers, and on this context we can also claim that we "eat our own dog food". This means that we use our own platform to build and model the Order Entity.'),(0,i.kt)("img",{style:{boxShadow:"#a2a2a2 0px 0px 25px -8px",borderRadius:"5px"},src:"/img/order-detailsview.png",alt:"Order Details View"}),(0,i.kt)("h2",{id:"managing-orders-via-pricing-api"},"Managing Orders via Pricing API"),(0,i.kt)("p",null,"Using our ",(0,i.kt)("a",{parentName:"p",href:"/docs/entities/entity-api"},"Entity API")," we can directly manage Orders, although very rapidly we realise that an Order has more to it than just a collection of Products and Prices. We needed to be able to manage the Order's lifecycle, and we needed to be able to manage the Order's state. We also needed to be able to recompute the order's product and price totals, along with the order price and product relations. Using just our Entity API would not suffice here since there is additional logic required to fully manage an order."),(0,i.kt)("p",null,"To fullfil this purpose we have designed the ",(0,i.kt)("a",{parentName:"p",href:"/api/pricing"},"Pricing API"),", which is a wrapper around the Entity API. The ",(0,i.kt)("a",{parentName:"p",href:"/api/pricing"},"Pricing API")," allows us to manage Orders, and it also allows us to manage the Order's lifecycle and state, recomputing the order's product and price totals, along with its price and product relations."),(0,i.kt)("h3",{id:"example-updating-an-order"},"Example: Updating an Order"),(0,i.kt)("p",null,"For general cases, the Entity API can be used directly to deal with simple business entities. In the Orders case, it relies on the ",(0,i.kt)("a",{parentName:"p",href:"/api/pricing"},"Pricing API")," to ensure any changes over ",(0,i.kt)("inlineCode",{parentName:"p"},"line_items")," will have all the line items and grand totals computed properly."),(0,i.kt)("p",null,"On both examples below API/SDK we authenticate using a ",(0,i.kt)("a",{parentName:"p",href:"/docs/auth/access-tokens"},"Org Access Token (OAT)")," that can be generated from our Epilot Portal:"),(0,i.kt)(u,{lazy:!0,mdxType:"Tabs"},(0,i.kt)(p,{value:"api",label:"API",default:!0,mdxType:"TabItem"},(0,i.kt)(h,{mdxType:"GetOrderApiSample"})),(0,i.kt)(p,{value:"sdk",label:"SDK (Javascript)",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"GetOrderSample"}))),(0,i.kt)("p",null,"After fetching the Order from the ",(0,i.kt)("a",{parentName:"p",href:"/api/pricing"},"Pricing API")," we can change the ",(0,i.kt)("inlineCode",{parentName:"p"},"line_items")," and then call the ",(0,i.kt)("a",{parentName:"p",href:"/api/pricing"},"Pricing API")," to update the order. The update is done via PUT so it's a full update. We don't yet have a PATCH endpoint for upserting entity changes."),(0,i.kt)(u,{lazy:!0,mdxType:"Tabs"},(0,i.kt)(p,{value:"api",label:"API",default:!0,mdxType:"TabItem"},(0,i.kt)(b,{mdxType:"UpdateOrderApiSample"})),(0,i.kt)(p,{value:"sdk",label:"SDK (Javascript)",mdxType:"TabItem"},(0,i.kt)(v,{mdxType:"UpdateOrderSample"}))))}O.isMDXComponent=!0}}]);