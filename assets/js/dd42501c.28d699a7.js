(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[2388],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},146:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(4034),o=r(9973),i=(r(7294),r(3905)),a={slug:"manifoldv011released",title:"Manifold v0.1.1 Released"},l={permalink:"/manifold-docusaurus/blog/manifoldv011released",source:"@site/blog/2017-04-07-manifold-v0-1-1-released.md",title:"Manifold v0.1.1 Released",description:"Version 0.1.1 of Manifold is a bugfix release. It has been pushed to the Manifold staging instance. This release includes the following fixes and improvements. [B] Reset default text color in dark reading mode [B] Only show FE mobile nav when logged in [C] Add spec test for resource event creation [B] Fix issue with broken link on first click [F] Create event when resource is added to project [B] Remove top spacing from section-heading-utility-right [C] Adjust sizing of event tiles [F] Add start reading link to new text events [B] Fix long file names overflowing dropzone [C] Use sub kind in slideshow to determine video type [C] Refactor resources to use sub kinds for better determination [B] Fire reader color change with 1 click (iOS) [B] Fix issue with resource markers not highlighting [B] Require library in formatted attr concern [B] Fix responsiveness of pagination controls [B] Use formatted text for applicable resource fields [C] Add disabled state to slideshow arrows [C] Hide social logins and T&C from create form [C] Change label on project backend form field [F] Store formatted attributes in Redis As always, B = Bugfix, F = Feature, and C = Chore.",date:"2017-04-07T00:00:00.000Z",formattedDate:"April 7, 2017",tags:[],truncated:!0,prevItem:{title:"Manifold v0.1.3 released to staging.manifoldapp.org",permalink:"/manifold-docusaurus/blog/manifoldv013releasedtostagingmanifoldapporg"},nextItem:{title:"Manifold Beta Now Available",permalink:"/manifold-docusaurus/blog/manifoldbetanowavailable"}},s=[],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);