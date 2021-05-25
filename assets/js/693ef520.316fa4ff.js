(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[6316],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(n),u=o,p=h["".concat(l,".").concat(u)]||h[u]||f[u]||i;return n?a.createElement(p,s(s({ref:t},c),{},{components:n})):a.createElement(p,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3580:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return l},default:function(){return c}});var a=n(4034),o=n(9973),i=(n(7294),n(3905)),s={slug:"thisweekinmanifoldbackend",title:"This Week in Manifold: Markdown and Backend Development"},r={permalink:"/manifold-docusaurus/blog/thisweekinmanifoldbackend",source:"@site/blog/2016-12-05-this-week-in-manifold-backend.md",title:"This Week in Manifold: Markdown and Backend Development",description:"Since I last posted, we've been making development progress on a few different fronts. Much of this work is still in feature branches, and has yet to be merged into the main development branch. Therefore, I'm going to skip the full list of revisions in this post, and instead offer a high level description of our recent efforts. Markdown and GitBook Support Fundamentally, Manifold has been conceived as a tool for university presses. When it comes to thinking about how it will be used, UMNP has guided our thinking about what problems presses are trying to solve, and how Manifold can help. That said, I think everyone on the project has also been interested in the ways in which Manifold can be a useful tool for the broader academic community. At the very least, we want to make it possible for individuals to find ways to use Manifold. One impediment to this, in my mind, has been the fact that to date Manifold only accepts finished EPUB documents as an input format, and independent scholars and self-publishers may find it difficult to come up with finished EPUBs. EPUBs are essentially packages containing HTML, CSS, and Javascript. In a sense, an EPUB is a small, self-contained website, and EPUB readers are offline, limited browsers. HTML, therefore, is already an input format that Manifold understands and can work with. What this means is that any document type that can easily be converted to HTML can likely be consumed by Manifold and made available to readers. We refer to the process of slurping a book up into Manifold as \"Ingestion.\" Manifold can be extended by adding ingestion strategies to it. An ingestion strategy tells Manifold how to map a source document\u2014eg, an EPUB\u2014to a format it can understand. In short, we've anticipated that we'll want to ingest other kinds of documents and have left places where other developers can create their own strategies.&nbsp;With the aim of testing out this approach and also furthering our goal of increasing Manifold's user base, we spent a couple days writing a Markdown strategy that supports the GitBook format. This means that users will be able to feed Manifold a set of nested Markdown documents, which Manifold will then be able to make available online, just as it does an EPUB. Manifold's documentation, for example, is authored following the GitBook format, and it can now be read within Manifold itself. Three cheers for eating our own dog food! Backend Development Since I last posted, we've also been hard at work at building out the backend interfaces. Most of the basic backend HTML and CSS has been completed, and we're now in the process of developing reusable patterns and components in React to wire up the backend forms to the API. This has been challenging, as there is a lot of functionality required in Manifold's admin interface, and figuring out how to model the requisite state while keeping in our Flux architecture has required some thinking. We're close on this, with some initial proof of concept work, which I'll be discussing more in subsequent posts. That's it for today! We'll be posting&nbsp;more updates (hopefully with screenshots and some design comps) later this week. &nbsp; &nbsp;",date:"2016-12-05T00:00:00.000Z",formattedDate:"December 5, 2016",tags:[],truncated:!0,prevItem:{title:"Reading with Zach Davis",permalink:"/manifold-docusaurus/blog/readingwithzachdavis"},nextItem:{title:"This Week in Manifold: Team meeting, Numerous Fixes",permalink:"/manifold-docusaurus/blog/thisweekinmanifoldteammeetingnumerousfixes"}},l=[],d={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since I last posted, we've been making development progress on a few different fronts. Much of this work is still in feature branches, and has yet to be merged into the main development branch. Therefore, I'm going to skip the full list of revisions in this post, and instead offer a high level description of our recent efforts. ",(0,i.kt)("strong",{parentName:"p"},"Markdown and GitBook Support")," Fundamentally, Manifold has been conceived as a tool for university presses. When it comes to thinking about how it will be used, UMNP has guided our thinking about what problems presses are trying to solve, and how Manifold can help. That said, I think everyone on the project has also been interested in the ways in which Manifold can be a useful tool for the broader academic community. At the very least, we want to make it possible for individuals to find ways to use Manifold. One impediment to this, in my mind, has been the fact that to date Manifold only accepts finished EPUB documents as an input format, and independent scholars and self-publishers may find it difficult to come up with finished EPUBs. EPUBs are essentially packages containing HTML, CSS, and Javascript. In a sense, an EPUB is a small, self-contained website, and EPUB readers are offline, limited browsers. HTML, therefore, is already an input format that Manifold understands and can work with. What this means is that any document type that can easily be converted to HTML can likely be consumed by Manifold and made available to readers. We refer to the process of slurping a book up into Manifold as \"Ingestion.\" Manifold can be extended by adding ingestion strategies to it. An ingestion strategy tells Manifold how to map a source document\u2014eg, an EPUB\u2014to a format it can understand. In short, we've anticipated that we'll want to ingest other kinds of documents and have left places where other developers can create their own strategies.","\xa0","With the aim of testing out this approach and also furthering our goal of increasing Manifold's user base, we spent a couple days writing a Markdown strategy that supports the GitBook format. This means that users will be able to feed Manifold a set of nested Markdown documents, which Manifold will then be able to make available online, just as it does an EPUB. Manifold's documentation, for example, is authored following the GitBook format, and it can now be read within Manifold itself. Three cheers for eating our own dog food! ",(0,i.kt)("strong",{parentName:"p"},"Backend Development")," Since I last posted, we've also been hard at work at building out the backend interfaces. Most of the basic backend HTML and CSS has been completed, and we're now in the process of developing reusable patterns and components in React to wire up the backend forms to the API. This has been challenging, as there is a lot of functionality required in Manifold's admin interface, and figuring out how to model the requisite state while keeping in our Flux architecture has required some thinking. We're close on this, with some initial proof of concept work, which I'll be discussing more in subsequent posts. That's it for today! We'll be posting","\xa0","more updates (hopefully with screenshots and some design comps) later this week. ","\xa0"," ","\xa0"))}c.isMDXComponent=!0}}]);