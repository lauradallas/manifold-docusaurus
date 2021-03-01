/*! For license information please see 2.e6048ab3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(159).concat([function(e,t,n){"use strict";var a=n(0),r=n(161);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},,function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},,,,,,,,,,,,function(e,t,n){"use strict";var a=n(4),r=n(9),o=n(0),c=n.n(o),i=n(157),s=n(160),l=n(164),u=n(169),f=n(158);function d(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,i=e.href,u=e.label,f=e.activeClassName,d=void 0===f?"navbar__link--active":f,m=e.prependBaseUrlToHref,v=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=Object(l.a)(o),p=Object(l.a)(t),b=Object(l.a)(i,{forcePrependBaseUrl:!0});return c.a.createElement(s.a,Object(a.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:m?b:i}:Object.assign({isNavLink:!0,activeClassName:d,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(p)}}:null),v),u)}function m(e){var t=e.items,n=e.position,s=e.className,l=Object(r.a)(e,["items","position","className"]),u=Object(o.useRef)(null),f=Object(o.useRef)(null),m=Object(o.useState)(!1),v=m[0],h=m[1];Object(o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?c.a.createElement("div",{ref:u,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":v})},c.a.createElement(d,Object(a.a)({className:p(s)},l,{onClick:l.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),l.label),c.a.createElement("ul",{ref:f,className:"dropdown__menu"},t.map((function(e,n){var o=e.className,i=Object(r.a)(e,["className"]);return c.a.createElement("li",{key:n},c.a.createElement(d,Object(a.a)({onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var a=u.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active",className:p(o,!0)},i)))})))):c.a.createElement(d,Object(a.a)({className:p(s)},l))}function v(e){var t,n,s=e.items,l=e.className,m=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(o.useRef)(null),h=Object(u.useLocation)().pathname,p=Object(o.useState)((function(){var e;return null===(e=!(null==s?void 0:s.some((function(e){return Object(f.isSamePath)(e.to,h)}))))||void 0===e||e})),b=p[0],g=p[1],y=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(d,Object(a.a)({className:y(l)},m)));var O=(null===(t=v.current)||void 0===t?void 0:t.scrollHeight)?(null===(n=v.current)||void 0===n?void 0:n.scrollHeight)+"px":void 0;return c.a.createElement("li",{className:Object(i.a)("menu__list-item",{"menu__list-item--collapsed":b})},c.a.createElement(d,Object(a.a)({role:"button",className:y(l,!0)},m,{onClick:function(){g((function(e){return!e}))}}),m.label),c.a.createElement("ul",{className:"menu__list",ref:v,style:{height:b?void 0:O}},s.map((function(e,t){var n=e.className,o=Object(r.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:t},c.a.createElement(d,Object(a.a)({activeClassName:"menu__link--active",className:y(n)},o,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,n=void 0!==t&&t,a=Object(r.a)(e,["mobile"]),o=n?v:m;return c.a.createElement(o,a)}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(157),c=n(70),i=n.n(c);var s=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:i.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},l=n(158),u=n(176),f=n(71),d=n.n(f);var m=function(){var e,t=Object(u.a)(),n=t.isAnnouncementBarClosed,a=t.closeAnnouncementBar,c=Object(l.useThemeConfig)().announcementBar;if(!c)return null;var i=c.content,s=c.backgroundColor,f=c.textColor,m=c.isCloseable;return!i||m&&n?null:r.a.createElement("div",{className:d.a.announcementBar,style:{backgroundColor:s,color:f},role:"banner"},r.a.createElement("div",{className:Object(o.a)(d.a.announcementBarContent,(e={},e[d.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:d.a.announcementBarClose,onClick:a,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},v=n(182),h=n(184),p=n(16),b="light",g="dark",y=function(e){return e===g?g:b},O=function(){return p.a.canUseDOM?y(document.documentElement.getAttribute("data-theme")):b},j=function(e){try{localStorage.setItem("theme",y(e))}catch(t){console.error(t)}},_=function(){var e=Object(l.useThemeConfig)().colorMode,t=e.disableSwitch,n=e.respectPrefersColorScheme,r=Object(a.useState)(O),o=r[0],c=r[1],i=Object(a.useCallback)((function(){c(b),j(b)}),[]),s=Object(a.useCallback)((function(){c(g),j(g)}),[]);return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme",y(o))}),[o]),Object(a.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(y(e))}catch(n){console.error(n)}}),[c]),Object(a.useEffect)((function(){t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?g:b)}))}),[]),{isDarkTheme:o===g,setLightTheme:i,setDarkTheme:s}},k=n(161);var E=function(e){var t=_(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.a.createElement(k.a.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},w="docusaurus.tab.",C=function(){var e=Object(a.useState)({}),t=e[0],n=e[1],r=Object(a.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var a=localStorage.key(t);if(a.startsWith(w))e[a.substring(w.length)]=localStorage.getItem(a)}n(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},x="docusaurus.announcement.dismiss",N="docusaurus.announcement.id",S=function(){var e=Object(l.useThemeConfig)().announcementBar,t=Object(a.useState)(!0),n=t[0],r=t[1],o=Object(a.useCallback)((function(){localStorage.setItem(x,"true"),r(!0)}),[]);return Object(a.useEffect)((function(){if(e){var t=e.id,n=localStorage.getItem(N);"annoucement-bar"===n&&(n="announcement-bar");var a=t!==n;localStorage.setItem(N,t),a&&localStorage.setItem(x,"false"),(a||"false"===localStorage.getItem(x))&&r(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:o}},T=n(177);var I=function(e){var t=C(),n=t.tabGroupChoices,a=t.setTabGroupChoices,o=S(),c=o.isAnnouncementBarClosed,i=o.closeAnnouncementBar;return r.a.createElement(T.a.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:c,closeAnnouncementBar:i}},e.children)};function L(e){var t=e.children;return r.a.createElement(E,null,r.a.createElement(I,null,r.a.createElement(l.DocsPreferredVersionContextProvider,null,t)))}var P=n(4),D=n(29),B=n(28),A=n(164);function M(e){var t=e.locale,n=e.version,a=e.tag;return r.a.createElement(D.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.a.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}function V(e){var t=Object(B.default)(),n=t.siteConfig,a=t.i18n.currentLocale,o=n.favicon,c=n.themeConfig,i=c.image,s=c.metadatas,u=n.url,f=e.title,d=e.description,m=e.image,v=e.keywords,h=e.permalink,p=e.searchMetadatas,b=Object(l.useTitleFormatter)(f),g=m||i,y=Object(A.a)(g,{absolute:!0}),O=Object(A.a)(o),j=a.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,r.a.createElement("html",{lang:j}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),o&&r.a.createElement("link",{rel:"shortcut icon",href:O}),d&&r.a.createElement("meta",{name:"description",content:d}),d&&r.a.createElement("meta",{property:"og:description",content:d}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:y}),g&&r.a.createElement("meta",{name:"twitter:image",content:y}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),h&&r.a.createElement("meta",{property:"og:url",content:u+h}),h&&r.a.createElement("link",{rel:"canonical",href:u+h}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(M,Object(P.a)({tag:l.DEFAULT_SEARCH_TAG,locale:a},p)),r.a.createElement(D.a,null,s.map((function(e,t){return r.a.createElement("meta",Object(P.a)({key:"metadata_"+t},e))}))))}n(75);var F=function(){Object(a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(76);t.a=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName;return F(),r.a.createElement(L,null,r.a.createElement(V,e),r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(v.a,null),r.a.createElement("div",{className:Object(o.a)("main-wrapper",a)},t),!n&&r.a.createElement(h.a,null))}},,function(e,t,n){"use strict";var a=n(0),r=n(177);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},function(e,t,n){var a=n(230);e.exports=function(e,t,n){var r=null==e?void 0:a(e,t);return void 0===r?n:r}},function(e,t,n){var a=n(208)(Object,"create");e.exports=a},function(e,t,n){var a=n(257);e.exports=function(e,t){for(var n=e.length;n--;)if(a(e[n][0],t))return n;return-1}},function(e,t,n){var a=n(263);e.exports=function(e,t){var n=e.__data__;return a(t)?n["string"==typeof t?"string":"hash"]:n.map}},,function(e,t,n){"use strict";var a=n(4),r=n(0),o=n.n(r),c=n(157),i=function(){return null},s=n(222),l=n.n(s),u=n(158),f=n(28),d=n(72),m=n.n(d),v=function(e){var t=e.icon,n=e.style;return o.a.createElement("span",{className:Object(c.a)(m.a.toggle,m.a.dark),style:n},t)},h=function(e){var t=e.icon,n=e.style;return o.a.createElement("span",{className:Object(c.a)(m.a.toggle,m.a.light),style:n},t)},p=function(e){var t=Object(u.useThemeConfig)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,c=t.lightIcon,i=t.lightIconStyle,s=Object(f.default)().isClient;return o.a.createElement(l.a,Object(a.a)({disabled:!s,icons:{checked:o.a.createElement(v,{icon:n,style:r}),unchecked:o.a.createElement(h,{icon:c,style:i})}},e))},b=n(159),g=n(169),y=n(203),O=function(e){var t=Object(g.useLocation)(),n=Object(r.useState)(!e),a=n[0],o=n[1],c=Object(r.useRef)(!1),i=Object(r.useState)(0),s=i[0],l=i[1],u=Object(r.useState)(0),f=u[0],d=u[1],m=Object(r.useCallback)((function(e){null!==e&&d(e.getBoundingClientRect().height)}),[]);return Object(y.a)((function(t){var n=t.scrollY;if(e&&!(n<f)){if(c.current)return c.current=!1,o(!1),void l(n);s&&0===n&&o(!0);var a=document.documentElement.scrollHeight-f,r=window.innerHeight;s&&n>=s?o(!1):n+r<a&&o(!0),l(n)}}),[s,f,c]),Object(r.useEffect)((function(){e&&s&&o(!0)}),[t.pathname]),Object(r.useEffect)((function(){e&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},j=n(204),_=n(205),k=n(9),E=n(173);function w(e){var t=e.mobile,n=Object(k.a)(e,["mobile"]),r=Object(f.default)(),c=r.siteConfig.baseUrl,i=r.i18n,s=i.defaultLocale,l=i.currentLocale,u=i.locales,d=i.localeConfigs,m=Object(g.useLocation)().pathname;function v(e){return d[e].label}var h=l===s?c:c.replace("/"+l+"/","/"),p=m.replace(c,"");var b=u.map((function(e){var t=""+function(e){return e===s?""+h:""+h+e+"/"}(e)+p;return{isNavLink:!0,label:v(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),y=t?"Languages":v(l);return o.a.createElement(E.a,Object(a.a)({},n,{mobile:t,label:y,items:b}))}var C={default:function(){return E.a},localeDropdown:function(){return w},docsVersion:function(){return n(227).default},docsVersionDropdown:function(){return n(228).default},doc:function(){return n(229).default}};function x(e){var t=e.type,n=Object(k.a)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=C[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return o.a.createElement(a,n)}var N=n(212),S=n(206),T=n(74),I=n.n(T),L="right";t.a=function(){var e,t,n=Object(u.useThemeConfig)(),s=n.navbar,l=s.items,f=s.hideOnScroll,d=s.style,m=n.colorMode.disableSwitch,v=Object(r.useState)(!1),h=v[0],g=v[1],y=Object(r.useState)(!1),k=y[0],E=y[1],w=Object(b.a)(),C=w.isDarkTheme,T=w.setLightTheme,P=w.setDarkTheme,D=O(f),B=D.navbarRef,A=D.isNavbarVisible;Object(j.a)(h);var M=Object(r.useCallback)((function(){g(!0)}),[g]),V=Object(r.useCallback)((function(){g(!1)}),[g]),F=Object(r.useCallback)((function(e){return e.target.checked?P():T()}),[T,P]),R=Object(_.a)();Object(r.useEffect)((function(){R===_.b.desktop&&g(!1)}),[R]);var X=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:L)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:L)}))}}(l),z=X.leftItems,U=X.rightItems;return o.a.createElement("nav",{ref:B,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":h},e[I.a.navbarHideable]=f,e[I.a.navbarHidden]=!A,e))},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},o.a.createElement(S.a,null)),o.a.createElement(N.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[I.a.hideLogoText]=k,t))}),z.map((function(e,t){return o.a.createElement(x,Object(a.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},U.map((function(e,t){return o.a.createElement(x,Object(a.a)({},e,{key:t}))})),!m&&o.a.createElement(p,{className:I.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:C,onChange:F}),o.a.createElement(i,{handleSearchBarToggle:E,isSearchBarExpanded:k}))),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement(N.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:V}),!m&&h&&o.a.createElement(p,{"aria-label":"Dark mode toggle in sidebar",checked:C,onChange:F})),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return o.a.createElement(x,Object(a.a)({mobile:!0},e,{onClick:V,key:t}))})))))))}},,function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var a=n(207),r=n(236);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},function(e,t,n){var a=n(188).Symbol;e.exports=a},function(e,t,n){var a=n(233),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();e.exports=o},,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),r=n(16),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var n=Object(a.useState)(o()),r=n[0],c=n[1],i=function(){var t=o();c(t),e&&e(t)};return Object(a.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",i,e),function(){return window.removeEventListener("scroll",i,e)}}),t),r}},function(e,t,n){"use strict";var a=n(0);t.a=function(e){void 0===e&&(e=!0),Object(a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var n=Object(a.useState)(t),o=n[0],c=n[1];return Object(a.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}},function(e,t,n){"use strict";var a=n(4),r=n(9),o=n(0),c=n.n(o);t.a=function(e){var t=e.width,n=void 0===t?30:t,o=e.height,i=void 0===o?30:o,s=e.className,l=Object(r.a)(e,["width","height","className"]);return c.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:s,width:n,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},l),c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},function(e,t,n){var a=n(187),r=n(234),o=n(235),c=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?r(e):o(e)}},function(e,t,n){var a=n(244),r=n(249);e.exports=function(e,t){var n=r(e,t);return a(n)?n:void 0}},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},,,function(e,t,n){"use strict";var a=n(4),r=n(9),o=n(0),c=n.n(o),i=n(160),s=n(157),l=n(28),u=n(159),f=n(73),d=n.n(f),m=function(e){var t=Object(l.default)().isClient,n=Object(u.a)().isDarkTheme,o=e.sources,i=e.className,f=e.alt,m=void 0===f?"":f,v=Object(r.a)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return c.a.createElement(c.a.Fragment,null,h.map((function(e){return c.a.createElement("img",Object(a.a)({key:e,src:o[e],alt:m,className:Object(s.a)(d.a.themedImage,d.a["themedImage--"+e],i)},v))})))},v=n(164),h=n(158),p=n(172);t.a=function(e){var t=Object(l.default)().isClient,n=Object(h.useThemeConfig)().navbar,o=n.title,s=n.logo,u=void 0===s?{src:""}:s,f=e.imageClassName,d=e.titleClassName,b=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(v.a)(u.href||"/"),y=u.target?{target:u.target}:Object(p.a)(g)?{}:{rel:"noopener noreferrer",target:"_blank"},O={light:Object(v.a)(u.src),dark:Object(v.a)(u.srcDark||u.src)};return c.a.createElement(i.a,Object(a.a)({to:g},b,y),u.src&&c.a.createElement(m,{key:t,className:f,sources:O,alt:u.alt||o||"Logo"}),null!=o&&c.a.createElement("strong",{className:d},o))}},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=d(o),i=d(n(223)),s=d(n(1)),l=d(n(224)),u=d(n(225)),f=n(226);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,f.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,f.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,f.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(l.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(4),r=n(9),o=n(0),c=n.n(o),i=n(173),s=n(168),l=n(158);function u(e){var t,n=e.label,o=e.to,u=e.docsPluginId,f=Object(r.a)(e,["label","to","docsPluginId"]),d=Object(s.useActiveVersion)(u),m=Object(l.useDocsPreferredVersion)(u).preferredVersion,v=Object(s.useLatestVersion)(u),h=null!==(t=null!=d?d:m)&&void 0!==t?t:v,p=null!=n?n:h.label,b=null!=o?o:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return c.a.createElement(i.a,Object(a.a)({},f,{label:p,to:b}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(4),r=n(9),o=n(0),c=n.n(o),i=n(173),s=n(168),l=n(158),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,o=e.mobile,f=e.docsPluginId,d=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),p=Object(s.useActiveDocContext)(f),b=Object(s.useVersions)(f),g=Object(s.useLatestVersion)(f),y=Object(l.useDocsPreferredVersion)(f),O=y.preferredVersion,j=y.savePreferredVersionName;var _=null!==(t=null!==(n=p.activeVersion)&&void 0!==n?n:O)&&void 0!==t?t:g,k=o?"Versions":_.label,E=o?void 0:u(_).path;return c.a.createElement(i.a,Object(a.a)({},h,{mobile:o,label:k,to:E,items:function(){var e=b.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(m,e,v);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(4),r=n(9),o=n(0),c=n.n(o),i=n(173),s=n(168),l=n(157),u=n(158);function f(e){var t,n,o=e.docId,f=e.activeSidebarClassName,d=e.label,m=e.docsPluginId,v=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=Object(s.useActiveDocContext)(m),p=h.activeVersion,b=h.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,y=Object(s.useLatestVersion)(m),O=null!==(t=null!=p?p:g)&&void 0!==t?t:y,j=O.docs.find((function(e){return e.id===o}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+o+" in version "+O.name+".\nAvailable docIds=\n- "+O.docs.join("\n- "));return c.a.createElement(i.a,Object(a.a)({exact:!0},v,{className:Object(l.a)(v.className,(n={},n[f]=b&&b.sidebar===j.sidebar,n)),label:null!=d?d:j.id,to:j.path}))}},function(e,t,n){var a=n(231),r=n(270);e.exports=function(e,t){for(var n=0,o=(t=a(t,e)).length;null!=e&&n<o;)e=e[r(t[n++])];return n&&n==o?e:void 0}},function(e,t,n){var a=n(185),r=n(232),o=n(237),c=n(267);e.exports=function(e,t){return a(e)?e:r(e,t)?[e]:o(c(e))}},function(e,t,n){var a=n(185),r=n(186),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=function(e,t){if(a(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!r(e))||(c.test(e)||!o.test(e)||null!=t&&e in Object(t))}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(31))},function(e,t,n){var a=n(187),r=Object.prototype,o=r.hasOwnProperty,c=r.toString,i=a?a.toStringTag:void 0;e.exports=function(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var a=!0}catch(s){}var r=c.call(e);return a&&(t?e[i]=n:delete e[i]),r}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var a=n(238),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,c=a((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(r,(function(e,n,a,r){t.push(a?r.replace(o,"$1"):n||e)})),t}));e.exports=c},function(e,t,n){var a=n(239);e.exports=function(e){var t=a(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},function(e,t,n){var a=n(240);function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var c=e.apply(this,a);return n.cache=o.set(r,c)||o,c};return n.cache=new(r.Cache||a),n}r.Cache=a,e.exports=r},function(e,t,n){var a=n(241),r=n(262),o=n(264),c=n(265),i=n(266);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}s.prototype.clear=a,s.prototype.delete=r,s.prototype.get=o,s.prototype.has=c,s.prototype.set=i,e.exports=s},function(e,t,n){var a=n(242),r=n(254),o=n(261);e.exports=function(){this.size=0,this.__data__={hash:new a,map:new(o||r),string:new a}}},function(e,t,n){var a=n(243),r=n(250),o=n(251),c=n(252),i=n(253);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}s.prototype.clear=a,s.prototype.delete=r,s.prototype.get=o,s.prototype.has=c,s.prototype.set=i,e.exports=s},function(e,t,n){var a=n(179);e.exports=function(){this.__data__=a?a(null):{},this.size=0}},function(e,t,n){var a=n(245),r=n(246),o=n(209),c=n(248),i=/^\[object .+?Constructor\]$/,s=Function.prototype,l=Object.prototype,u=s.toString,f=l.hasOwnProperty,d=RegExp("^"+u.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||r(e))&&(a(e)?d:i).test(c(e))}},function(e,t,n){var a=n(207),r=n(209);e.exports=function(e){if(!r(e))return!1;var t=a(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){var a,r=n(247),o=(a=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"";e.exports=function(e){return!!o&&o in e}},function(e,t,n){var a=n(188)["__core-js_shared__"];e.exports=a},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(t){}try{return e+""}catch(t){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var a=n(179),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(a){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return r.call(t,e)?t[e]:void 0}},function(e,t,n){var a=n(179),r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return a?void 0!==t[e]:r.call(t,e)}},function(e,t,n){var a=n(179);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=a&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,n){var a=n(255),r=n(256),o=n(258),c=n(259),i=n(260);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}s.prototype.clear=a,s.prototype.delete=r,s.prototype.get=o,s.prototype.has=c,s.prototype.set=i,e.exports=s},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var a=n(180),r=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=a(t,e);return!(n<0)&&(n==t.length-1?t.pop():r.call(t,n,1),--this.size,!0)}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var a=n(180);e.exports=function(e){var t=this.__data__,n=a(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var a=n(180);e.exports=function(e){return a(this.__data__,e)>-1}},function(e,t,n){var a=n(180);e.exports=function(e,t){var n=this.__data__,r=a(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}},function(e,t,n){var a=n(208)(n(188),"Map");e.exports=a},function(e,t,n){var a=n(181);e.exports=function(e){var t=a(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var a=n(181);e.exports=function(e){return a(this,e).get(e)}},function(e,t,n){var a=n(181);e.exports=function(e){return a(this,e).has(e)}},function(e,t,n){var a=n(181);e.exports=function(e,t){var n=a(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}},function(e,t,n){var a=n(268);e.exports=function(e){return null==e?"":a(e)}},function(e,t,n){var a=n(187),r=n(269),o=n(185),c=n(186),i=a?a.prototype:void 0,s=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return r(t,e)+"";if(c(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},function(e,t,n){var a=n(186);e.exports=function(e){if("string"==typeof e||a(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}}])]);