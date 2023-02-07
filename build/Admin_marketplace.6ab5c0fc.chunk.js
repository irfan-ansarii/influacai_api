"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5516],{82679:($e,N,s)=>{s.r(N),s.d(N,{MarketPlacePage:()=>je,default:()=>sa});var e=s(67294),v=s(97132),D=s(15482),I=s(63852),m=s(68547),S=s(17034),A=s(49066),j=s(185),h=s(49123),p=s(35961),P=s(14087),M=s(72735),b=s(46273),Ve=s(82777),z=s(60633),$=s(42761),ae=s(45697),r=s.n(ae),C=s(52624),Ze=s(86031),x=s(71893);const ne=x.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:t})=>t.spaces[4]};
`;ne.propTypes={children:ae.node.isRequired};const Ge=(0,x.default)(p.x)`
  background: ${({theme:t})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${t.colors.neutral150} 100%)`};
  opacity: 0.33;
`,He=()=>e.createElement(ne,null,Array(12).fill(null).map((t,a)=>e.createElement(Ge,{key:`empty-plugin-card-${a}`,height:"234px",hasRadius:!0}))),re=({content:t})=>e.createElement(p.x,{position:"relative"},e.createElement(He,null),e.createElement(p.x,{position:"absolute",top:11,width:"100%"},e.createElement(b.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(C.J,{as:Ze.default,color:"",width:"160px",height:"88px"}),e.createElement(p.x,{paddingTop:6},e.createElement(M.Z,{variant:"delta",as:"p",textColor:"neutral600"},t)))));re.propTypes={content:r().string.isRequired};const se=re;var Ue=s(67838),le=s(80994),Qe=Object.defineProperty,ie=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,oe=(t,a,n)=>a in t?Qe(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,qe=(t,a)=>{for(var n in a||(a={}))We.call(a,n)&&oe(t,n,a[n]);if(ie)for(var n of ie(a))Je.call(a,n)&&oe(t,n,a[n]);return t};function Ke(t){return e.createElement("svg",qe({width:"1em",height:"1em",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 01-.14-.343L11.858.058a.2.2 0 01.282 0l9.513 9.4a.2.2 0 01-.14.343H13.57v8.47zM2.2 21.095a.2.2 0 00-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 00.2-.2v-2.424a.2.2 0 00-.2-.2H2.2z",fill:"#212134"}))}const V=({isOnline:t,npmPackageType:a})=>{const{formatMessage:n}=(0,v.useIntl)(),{trackUsage:i}=(0,m.useTracking)(),o=a==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(Ue.T,{title:n({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:n({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:t&&e.createElement(le.Q,{startIcon:e.createElement(Ke,null),variant:"tertiary",href:`https://market.strapi.io/submit-${a}`,onClick:()=>i(o),isExternal:!0},n({id:`admin.pages.MarketPlacePage.submit.${a}.link`,defaultMessage:`Submit ${a}`}))})},ce=V;V.defaultProps={npmPackageType:"plugin"},V.propTypes={isOnline:r().bool.isRequired,npmPackageType:r().string};var de=s(23724),Ye=s(9669),pe=s.n(Ye),Xe=(t,a,n)=>new Promise((i,o)=>{var u=d=>{try{l(n.next(d))}catch(g){o(g)}},c=d=>{try{l(n.throw(d))}catch(g){o(g)}},l=d=>d.done?i(d.value):Promise.resolve(d.value).then(u,c);l((n=n.apply(t,a)).next())});const _e="https://market-api.strapi.io",et=(...t)=>Xe(void 0,[...t],function*(a={}){const{data:n}=yield pe().get(`${_e}/providers`,{params:a});return n}),tt=(t,a)=>{const n=(0,m.useNotification)();return(0,de.useQuery)(["list-marketplace-providers",a],()=>et(a),{onSuccess(){t&&t()},onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};var at=Object.defineProperty,nt=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,ge=(t,a,n)=>a in t?at(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,it=(t,a)=>{for(var n in a||(a={}))st.call(a,n)&&ge(t,n,a[n]);if(ue)for(var n of ue(a))lt.call(a,n)&&ge(t,n,a[n]);return t},ot=(t,a)=>nt(t,rt(a)),ct=(t,a,n)=>new Promise((i,o)=>{var u=d=>{try{l(n.next(d))}catch(g){o(g)}},c=d=>{try{l(n.throw(d))}catch(g){o(g)}},l=d=>d.done?i(d.value):Promise.resolve(d.value).then(u,c);l((n=n.apply(t,a)).next())});const dt="https://market-api.strapi.io",pt=(...t)=>ct(void 0,[...t],function*(a={}){const{data:n}=yield pe().get(`${dt}/plugins`,{params:a});return ot(it({},n),{data:n.data.filter(o=>o.attributes.strapiCompatibility==="v4")})}),ut=(t,a)=>{const n=(0,m.useNotification)();return(0,de.useQuery)(["list-marketplace-plugins",a],()=>pt(a),{onSuccess(){t&&t()},onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};var gt=s(87751);const mt=s.p+"9d5d788027e86620c234.svg",ft=()=>{const t=typeof navigator!="undefined"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[a,n]=(0,e.useState)(t),i=()=>n(!0),o=()=>n(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",i),window.addEventListener("offline",o),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}),[]),a};var vt=Object.defineProperty,me=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,fe=(t,a,n)=>a in t?vt(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,yt=(t,a)=>{for(var n in a||(a={}))Pt.call(a,n)&&fe(t,n,a[n]);if(me)for(var n of me(a))ht.call(a,n)&&fe(t,n,a[n]);return t};function Et(t){return e.createElement("svg",yt({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z",fill:"#AC73E6"}),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0z",fill:"#fff"}))}var ve=s(17772);const Mt=()=>{const{formatMessage:t}=(0,v.useIntl)(),{trackUsage:a}=(0,m.useTracking)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>a("didMissMarketplacePlugin")},e.createElement(m.ContentBox,{title:t({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:t({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Et,null),iconBackground:"alternative100",endAction:e.createElement(C.J,{as:ve.default,color:"neutral600",width:3,height:3,marginLeft:2})}))};var bt=s(11276),kt=s(74571),Rt=s(23450),St=s.n(Rt),Z=s(7681),G=s(84495),Ct=s(86783),Tt=s(61473),xt=s(85018),Ot=s(81249),Pe=s.n(Ot),H=s(29728),he=s(65186);const B=({description:t,installMessage:a,disabled:n,handleCopy:i,pluginName:o})=>e.createElement(G.u,{"data-testid":`tooltip-${o}`,description:t},e.createElement(p.x,null,e.createElement(H.z,{size:"S",startIcon:e.createElement(he.Z,null),variant:"secondary",disabled:n,onClick:i},a))),U=({strapiPeerDepVersion:t,strapiAppVersion:a,handleCopy:n,pluginName:i})=>{const{formatMessage:o}=(0,v.useIntl)(),u=Pe().validRange(t),c=Pe().satisfies(a,u),l=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(a){if(!u)return e.createElement(B,{installMessage:l,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:a}),handleCopy:n});if(!c)return e.createElement(B,{installMessage:l,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:a,versionRange:u}),disabled:!0})}return e.createElement(H.z,{size:"S",startIcon:e.createElement(he.Z,null),variant:"secondary",onClick:n},l)};B.defaultProps={disabled:!1,handleCopy:null},B.propTypes={description:r().string.isRequired,installMessage:r().string.isRequired,disabled:r().bool,handleCopy:r().func,pluginName:r().string.isRequired},U.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},U.propTypes={strapiAppVersion:r().string,strapiPeerDepVersion:r().string,handleCopy:r().func.isRequired,pluginName:r().string.isRequired};const wt=U,Q=({isInstalled:t,isInDevelopmentMode:a,commandToCopy:n,strapiAppVersion:i,strapiPeerDepVersion:o,pluginName:u})=>{const c=(0,m.useNotification)(),{formatMessage:l}=(0,v.useIntl)(),{trackUsage:d}=(0,m.useTracking)(),g=()=>{navigator.clipboard.writeText(n),d("willInstallPlugin"),c({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})};return t?e.createElement(p.x,{paddingLeft:4},e.createElement(C.J,{as:xt.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(M.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},l({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):a?e.createElement(wt,{strapiAppVersion:i,strapiPeerDepVersion:o,handleCopy:g,pluginName:u}):null};Q.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},Q.propTypes={isInstalled:r().bool.isRequired,isInDevelopmentMode:r().bool.isRequired,commandToCopy:r().string.isRequired,strapiAppVersion:r().string,strapiPeerDepVersion:r().string,pluginName:r().string.isRequired};const It=Q;var jt=s(70004),Nt=s(57750),Dt=s(7217),At=Object.defineProperty,ye=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,Ee=(t,a,n)=>a in t?At(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,Ft=(t,a)=>{for(var n in a||(a={}))Bt.call(a,n)&&Ee(t,n,a[n]);if(ye)for(var n of ye(a))Lt.call(a,n)&&Ee(t,n,a[n]);return t};function zt(t){return e.createElement("svg",Ft({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),e.createElement("path",{d:"M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26z",fill:"#212134"}))}const $t=(0,x.default)(jt.i)`
  width: ${(0,m.pxToRem)(12)};
  transform: rotate(90deg);
`,W=({githubStars:t,npmDownloads:a,npmPackageType:n})=>{const{formatMessage:i}=(0,v.useIntl)();return e.createElement(Z.K,{horizontal:!0,spacing:1},!!t&&e.createElement(e.Fragment,null,e.createElement(C.J,{as:Nt.Z,height:(0,m.pxToRem)(12),width:(0,m.pxToRem)(12),"aria-hidden":!0}),e.createElement(C.J,{as:zt,height:(0,m.pxToRem)(12),width:(0,m.pxToRem)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${n}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:t,package:n})},e.createElement(M.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},t)),e.createElement($t,{unsetMargin:!1,background:"neutral200"})),e.createElement(C.J,{as:Dt.Z,height:(0,m.pxToRem)(12),width:(0,m.pxToRem)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${n}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:a,package:n})},e.createElement(M.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},a)))};W.defaultProps={githubStars:0,npmDownloads:0},W.propTypes={githubStars:r().number,npmDownloads:r().number,npmPackageType:r().string.isRequired};const Vt=W,Zt=(0,x.default)(M.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,J=({npmPackage:t,isInstalled:a,useYarn:n,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:u})=>{const{attributes:c}=t,{formatMessage:l}=(0,v.useIntl)(),{trackUsage:d}=(0,m.useTracking)(),g=n?`yarn add ${c.npmPackageName}`:`npm install ${c.npmPackageName}`,E=l({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),O=`https://market.strapi.io/${St().plural(o)}/${c.slug}`;return e.createElement(b.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(p.x,null,e.createElement(b.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(p.x,{as:"img",src:c.logo.url,alt:`${c.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(Vt,{githubStars:c.githubStars,npmDownloads:c.npmDownloads,npmPackageType:o})),e.createElement(p.x,{paddingTop:4},e.createElement(M.Z,{as:"h3",variant:"delta"},e.createElement(b.k,{alignItems:"center"},c.name,c.validated&&!c.madeByStrapi&&e.createElement(G.u,{description:l({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(b.k,null,e.createElement(C.J,{as:Ct.default,marginLeft:2,color:"success600"}))),c.madeByStrapi&&e.createElement(G.u,{description:E},e.createElement(b.k,null,e.createElement(p.x,{as:"img",src:Tt,alt:E,marginLeft:1,width:6,height:"auto"})))))),e.createElement(p.x,{paddingTop:2},e.createElement(Zt,{as:"p",variant:"omega",textColor:"neutral600"},c.description))),e.createElement(Z.K,{horizontal:!0,spacing:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(le.Q,{size:"S",href:O,isExternal:!0,endIcon:e.createElement(ve.default,null),"aria-label":l({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:c.name}),variant:"tertiary",onClick:()=>d("didPluginLearnMore")},l({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(It,{isInstalled:a,isInDevelopmentMode:i,commandToCopy:g,strapiAppVersion:u,strapiPeerDepVersion:c.strapiVersion,pluginName:c.name})))};J.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},J.propTypes={npmPackage:r().shape({id:r().string.isRequired,attributes:r().shape({name:r().string.isRequired,description:r().string.isRequired,slug:r().string.isRequired,npmPackageName:r().string.isRequired,npmPackageUrl:r().string.isRequired,repositoryUrl:r().string.isRequired,logo:r().object.isRequired,developerName:r().string.isRequired,validated:r().bool.isRequired,madeByStrapi:r().bool.isRequired,strapiCompatibility:r().oneOf(["v3","v4"]),strapiVersion:r().string,githubStars:r().number,npmDownloads:r().number}).isRequired}).isRequired,isInstalled:r().bool.isRequired,useYarn:r().bool.isRequired,isInDevelopmentMode:r().bool,npmPackageType:r().string.isRequired,strapiAppVersion:r().string};const Gt=J,q=({npmPackages:t,installedPackageNames:a,useYarn:n,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:u})=>{const c=(0,e.useCallback)(l=>a.includes(l),[a]);return e.createElement(bt.r,{gap:4},t.map(l=>e.createElement(kt.P,{col:4,s:6,xs:12,style:{height:"100%"},key:l.id},e.createElement(Gt,{npmPackage:l,isInstalled:c(l.attributes.npmPackageName),useYarn:n,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:u}))))};q.defaultProps={installedPackageNames:[],strapiAppVersion:null},q.propTypes={npmPackages:r().array.isRequired,installedPackageNames:r().arrayOf(r().string),useYarn:r().bool.isRequired,isInDevelopmentMode:r().bool.isRequired,npmPackageType:r().string.isRequired,strapiAppVersion:r().string};const Me=q;var be=s(91216),ke=s(82562);const Ht=(0,x.default)(p.x)`
  font-weight: ${({theme:t})=>t.fontWeights.semiBold};

  span {
    font-size: ${({theme:t})=>t.fontSizes[1]};
  }
`,Re=({sortQuery:t,handleSelectChange:a})=>{const{formatMessage:n}=(0,v.useIntl)(),i={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(Ht,null,e.createElement(be.P,{size:"S",id:"sort-by-select",value:t,customizeContent:()=>n(i[t].selected),onChange:o=>{a({sort:o})}},Object.entries(i).map(([o,u])=>e.createElement(ke.W,{key:o,value:o},n(u.option)))))};Re.propTypes={sortQuery:r().string.isRequired,handleSelectChange:r().func.isRequired};const Ut=Re;var Qt=s(72775),Wt=s(70968),Jt=s(89597),qt=s(88533),Kt=s(25896);const Se=({message:t,value:a,onChange:n,possibleFilters:i,onClear:o,customizeContent:u})=>{const c=(l,d)=>`${l} (${d})`;return e.createElement(be.P,{"data-testid":`${t}-button`,"aria-label":t,placeholder:t,size:"M",onChange:n,onClear:o,value:a,customizeContent:u,multi:!0},Object.entries(i).map(([l,d])=>e.createElement(ke.W,{"data-testid":`${l}-${d}`,key:l,value:l},c(l,d))))};Se.propTypes={message:r().string.isRequired,value:r().array.isRequired,onChange:r().func.isRequired,possibleFilters:r().object.isRequired,onClear:r().func.isRequired,customizeContent:r().func.isRequired};const Ce=Se,Te=({source:t,onToggle:a,query:n,npmPackageType:i,possibleCategories:o,possibleCollections:u,handleSelectChange:c,handleSelectClear:l})=>{const{formatMessage:d}=(0,v.useIntl)();return e.createElement(qt.J,{source:t,padding:3,spacing:4,onBlur:()=>{}},e.createElement(Kt.i,{onEscape:a},e.createElement(Z.K,{spacing:1},e.createElement(p.x,null,e.createElement(Ce,{message:d({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:(n==null?void 0:n.collections)||[],onChange:g=>{c({collections:g})},onClear:()=>l("collections"),possibleFilters:u,customizeContent:g=>d({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:g.length})})),i==="plugin"&&e.createElement(p.x,null,e.createElement(Ce,{message:d({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:(n==null?void 0:n.categories)||[],onChange:g=>{c({categories:g})},onClear:()=>l("categories"),possibleFilters:o,customizeContent:g=>d({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:g.length}),name:"categories"})))))};Te.propTypes={onToggle:r().func.isRequired,source:r().shape({current:r().instanceOf(Element)}).isRequired,query:r().object.isRequired,npmPackageType:r().oneOf(["plugin","provider"]).isRequired,possibleCollections:r().object.isRequired,possibleCategories:r().object.isRequired,handleSelectChange:r().func.isRequired,handleSelectClear:r().func.isRequired};const Yt=Te,K=({name:t,handleRemove:a})=>e.createElement(p.x,{padding:1},e.createElement(Qt.V,{icon:e.createElement(Wt.default,null),onClick:a},t)),Xt=(0,x.default)(H.z)`
  height: ${({theme:t})=>t.sizes.input.S};
`,xe=({possibleCollections:t,possibleCategories:a,npmPackageType:n,query:i,handleSelectClear:o,handleSelectChange:u})=>{var c,l;const[d,g]=(0,e.useState)(!1),E=(0,e.useRef)(),{formatMessage:O}=(0,v.useIntl)(),L=()=>g(f=>!f),w=(f,k)=>{const F={[k]:i[k].filter(X=>X!==f)};u(F)};return e.createElement(e.Fragment,null,e.createElement(p.x,{paddingTop:1,paddingBottom:1},e.createElement(Xt,{variant:"tertiary",ref:E,"data-testid":"filters-button",startIcon:e.createElement(Jt.Z,null),onClick:L,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),d&&e.createElement(Yt,{onToggle:L,source:E,query:i,handleSelectClear:o,handleSelectChange:u,possibleCollections:t,possibleCategories:a,npmPackageType:n})),(c=i.collections)==null?void 0:c.map(f=>e.createElement(K,{name:f,key:f,handleRemove:()=>w(f,"collections")})),n==="plugin"&&((l=i.categories)==null?void 0:l.map(f=>e.createElement(K,{name:f,key:f,handleRemove:()=>w(f,"categories")}))))};K.propTypes={name:r().string.isRequired,handleRemove:r().func.isRequired},xe.propTypes={npmPackageType:r().oneOf(["plugin","provider"]).isRequired,possibleCollections:r().object.isRequired,possibleCategories:r().object.isRequired,query:r().object.isRequired,handleSelectChange:r().func.isRequired,handleSelectClear:r().func.isRequired};const _t=xe;var ea=Object.defineProperty,ta=Object.defineProperties,aa=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,na=Object.prototype.hasOwnProperty,ra=Object.prototype.propertyIsEnumerable,we=(t,a,n)=>a in t?ea(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,T=(t,a)=>{for(var n in a||(a={}))na.call(a,n)&&we(t,n,a[n]);if(Oe)for(var n of Oe(a))ra.call(a,n)&&we(t,n,a[n]);return t},Y=(t,a)=>ta(t,aa(a));const Ie=(t,a)=>(0,I.ZP)(t,a,{keys:[{threshold:I.ZP.rankings.WORD_STARTS_WITH,key:"attributes.name"},{threshold:I.ZP.rankings.WORD_STARTS_WITH,key:"attributes.description"}],baseSort:(n,i)=>n.index<i.index?-1:1}),je=()=>{const{formatMessage:t}=(0,v.useIntl)(),{trackUsage:a}=(0,m.useTracking)(),{notifyStatus:n}=(0,P.G)(),i=(0,e.useRef)(a),o=(0,m.useNotification)(),[u,c]=(0,e.useState)(""),[{query:l},d]=(0,m.useQueryParams)(),{autoReload:g,dependencies:E,useYarn:O,strapiVersion:L}=(0,m.useAppInfos)(),w=ft(),f=(l==null?void 0:l.npmPackageType)||"plugin",[k,F]=(0,e.useState)({plugin:f==="plugin"?T({},l):{},provider:f==="provider"?T({},l):{}});(0,m.useFocusWhenNavigate)();const X=t({id:"global.marketplace",defaultMessage:"Marketplace"}),Ne=()=>{n(t({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:X}))},{status:De,data:Ae}=tt(Ne,k.provider),{status:Be,data:_}=ut(Ne,k.plugin),la=[Be,De].includes("loading"),ia=[Be,De].includes("error");if((0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{g||o({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[o,g]),!w)return e.createElement(S.A,null,e.createElement(j.o,null,e.createElement(ce,{isOnline:w}),e.createElement(b.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",style:{paddingTop:"120px"}},e.createElement(p.x,{paddingBottom:2},e.createElement(M.Z,{textColor:"neutral700",variant:"alpha"},t({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(p.x,{paddingBottom:6},e.createElement(M.Z,{textColor:"neutral700",variant:"epsilon"},t({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:mt,alt:"offline",style:{width:"88px",height:"88px"}}))));if(ia)return e.createElement(S.A,null,e.createElement(A.D,null,e.createElement(p.x,{paddingTop:8},e.createElement(m.AnErrorOccurred,null))));if(la)return e.createElement(S.A,null,e.createElement(j.o,{"aria-busy":!0},e.createElement(m.LoadingIndicatorPage,null)));const ee=Ie(_.data,u),te=Ie(Ae.data,u),Le=t({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:u}),oa=R=>{const y=R===0?"plugin":"provider",ua=k[y]&&Object.keys(k[y]).length;d(ua?Y(T({},k[y]),{npmPackageType:y}):{npmPackageType:y,collections:[],categories:[],sort:"name:asc"})},Fe=R=>{d(R),F(y=>Y(T({},y),{[f]:T(T({},y[f]),R)}))},ca=R=>{d({[R]:[]},"remove"),F(y=>Y(T({},y),{[f]:{}}))},ze=Object.keys(E),da=f==="plugin"?_.meta.collections:Ae.meta.collections,pa=_.meta.categories;return e.createElement(S.A,null,e.createElement(j.o,null,e.createElement(D.Helmet,{title:t({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(ce,{isOnline:w,npmPackageType:f}),e.createElement(A.D,null,e.createElement(p.x,{width:"25%",paddingBottom:4},e.createElement(h.w,{name:"searchbar",onClear:()=>c(""),value:u,onChange:R=>c(R.target.value),clearLabel:t({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:t({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},t({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"}))),e.createElement(Ve.v,{label:t({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(f),onTabChange:oa},e.createElement(p.x,{paddingBottom:4},e.createElement(z.m,null,e.createElement(z.O,null,t({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ","(",ee.length,")"),e.createElement(z.O,null,t({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ","(",te.length,")"))),e.createElement(b.k,{paddingBottom:4,gap:2},e.createElement(Ut,{sortQuery:(l==null?void 0:l.sort)||"name:asc",handleSelectChange:Fe}),e.createElement(_t,{npmPackageType:f,possibleCollections:da,possibleCategories:pa,query:l||{},handleSelectChange:Fe,handleSelectClear:ca})),e.createElement($.n,null,e.createElement($.x,null,u.length>0&&!ee.length?e.createElement(se,{content:Le}):e.createElement(Me,{npmPackages:ee,installedPackageNames:ze,useYarn:O,isInDevelopmentMode:g,npmPackageType:"plugin",strapiAppVersion:L})),e.createElement($.x,null,u.length>0&&!te.length?e.createElement(se,{content:Le}):e.createElement(Me,{npmPackages:te,installedPackageNames:ze,useYarn:O,isInDevelopmentMode:g,npmPackageType:"provider"})))),e.createElement(p.x,{paddingTop:7},e.createElement(Mt,null)))))},sa=()=>e.createElement(m.CheckPagePermissions,{permissions:gt.Z.marketplace.main},e.createElement(je,null))},57750:($e,N,s)=>{s.d(N,{Z:()=>j});var e=s(67294),v=Object.defineProperty,D=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,S=(h,p,P)=>p in h?v(h,p,{enumerable:!0,configurable:!0,writable:!0,value:P}):h[p]=P,A=(h,p)=>{for(var P in p||(p={}))I.call(p,P)&&S(h,P,p[P]);if(D)for(var P of D(p))m.call(p,P)&&S(h,P,p[P]);return h};function j(h){return e.createElement("svg",A({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),e.createElement("path",{d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0112 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0z",fill:"#161614"}))}}}]);
