(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[5082],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return h},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?i.createElement(p,r(r({ref:t},h),{},{components:a})):i.createElement(p,r({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7195:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var i=a(4034),n=a(9973),o=(a(7294),a(3905)),r={slug:"webaccessibilityroadmapformanifold",title:"Web Accessibility Roadmap for Manifold"},s={permalink:"/manifold-docusaurus/blog/webaccessibilityroadmapformanifold",source:"@site/blog/2018-08-08-web-accessibility-roadmap-for-manifold.md",title:"Web Accessibility Roadmap for Manifold",description:"Web accessibility is a broad term used to describe any strategies, user interfaces, or content, specifically designed with assistive technologies (AT) and/or disabled users in mind. In developing the Manifold web app we strive for it to be as accessible as possible. Our particular focus is on the screen reader user experience. In this document we\u2019ll explore the guidelines used in determining an acceptable level of accessibility, the best tools to aid in development, what AT compatibility pitfalls to avoid, and the strategies for continuing development. Hopefully this document will outline what work has been completed thus far, as well as describe some best practices for moving forward.",date:"2018-08-08T00:00:00.000Z",formattedDate:"August 8, 2018",tags:[],truncated:!0,prevItem:{title:"Manifold Meeting in Minnesota",permalink:"/manifold-docusaurus/blog/manifoldmeetinginminnesota"},nextItem:{title:"Announcing the Release of Manifold 1.0",permalink:"/manifold-docusaurus/blog/announcingmanifold10"}},l=[{value:"Linter",id:"linter",children:[]},{value:"Color Contrast Checker",id:"color-contrast-checker",children:[]},{value:"Color Blindness Checker",id:"color-blindness-checker",children:[]},{value:"Screen Reader",id:"screen-reader",children:[]},{value:"Alt Text",id:"alt-text",children:[{value:"Presentational",id:"presentational",children:[]},{value:"Content",id:"content",children:[]},{value:"Interactive",id:"interactive",children:[]}]},{value:"Roles",id:"roles",children:[]},{value:"Form Labels",id:"form-labels",children:[]},{value:"Form Errors and Notifications",id:"form-errors-and-notifications",children:[]},{value:"We want errors to be read by AT early and often. When feasible, as soon as they are visible on the page (this is usually immediately after a form has been submitted) they should also be automatically read by the screen reader. Subsequently, error messages should be easily identifiable, as unavoidable as possible, and should persist as long as the form is not submittable. In general form errors on Manifold always appear next to the field with the error. For AT this is not ideal (it\u2019s much more convenient to have all of the errors routed to a single element\u2014like a flash message\u2014all the time), but we can well accommodate this placement by using the role attribute in conjunction with a handful of other ARIA attributes. The <code>role=&quot;alert&quot;</code> attribute lets the AT know it should immediately read the text in this element when it is rendered on the page. This role also implicitly makes the element a \u201clive region\u201d which means AT can tell when there are changes to this area and then make choices accordingly. We affect how/when the contents in the live region gets read (and re-read) by using two other ARIA attributes.",id:"we-want-errors-to-be-read-by-at-early-and-often-when-feasible-as-soon-as-they-are-visible-on-the-page-this-is-usually-immediately-after-a-form-has-been-submitted-they-should-also-be-automatically-read-by-the-screen-reader-subsequently-error-messages-should-be-easily-identifiable-as-unavoidable-as-possible-and-should-persist-as-long-as-the-form-is-not-submittable-in-general-form-errors-on-manifold-always-appear-next-to-the-field-with-the-error-for-at-this-is-not-ideal-its-much-more-convenient-to-have-all-of-the-errors-routed-to-a-single-elementlike-a-flash-messageall-the-time-but-we-can-well-accommodate-this-placement-by-using-the-role-attribute-in-conjunction-with-a-handful-of-other-aria-attributes-the-rolealert-attribute-lets-the-at-know-it-should-immediately-read-the-text-in-this-element-when-it-is-rendered-on-the-page-this-role-also-implicitly-makes-the-element-a-live-region-which-means-at-can-tell-when-there-are-changes-to-this-area-and-then-make-choices-accordingly-we-affect-howwhen-the-contents-in-the-live-region-gets-read-and-re-read-by-using-two-other-aria-attributes",children:[]},{value:"Controlling Focus",id:"controlling-focus",children:[]},{value:"Nav Skip",id:"nav-skip",children:[]},{value:"ARIA",id:"aria",children:[]},{value:"Assistive Technology (AT)",id:"assistive-technology-at",children:[]},{value:"Screen Reader",id:"screen-reader-1",children:[]},{value:"Web Accessibility",id:"web-accessibility",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],c={toc:l};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null," Web accessibility is a broad term used to describe any strategies, user interfaces, or content, specifically designed with assistive technologies (AT) and/or disabled users in mind. In developing the Manifold web app we strive for it to be as accessible as possible. Our particular focus is on the screen reader user experience. In this document we\u2019ll explore the guidelines used in determining an acceptable level of accessibility, the best tools to aid in development, what AT compatibility pitfalls to avoid, and the strategies for continuing development. Hopefully this document will outline what work has been completed thus far, as well as describe some best practices for moving forward."),(0,o.kt)("h1",{id:"guidelines"},"Guidelines"),(0,o.kt)("p",null," The Web Accessibility Initiative (WAI) and the Web Content Accessibility Guidelines Working Group (WCAG WG), under the umbrella of the World Wide Web Consortium (W3C), have created a truly comprehensive set of accessibility guidelines\u2014",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG20/quickref/"},"WCAG"),"\u2014for acceptable and responsible web accessibility. (The guidelines are also available with a slightly more friendly interface ",(0,o.kt)("a",{parentName:"p",href:"http://romeo.elsevier.com/accessibility_checklist/"},"here"),".) Not only do they include considerations for almost every conceivable type of web interaction, element, and piece of content, they have also developed a rubric for measuring your compliance and, to some extent, provide strategies for achieving compliance. Some of these guidelines find their genesis in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/"},"Section 508 amendment to the US Rehabilitation Act of 1973"),", which sought to address requirements for US government website accessibility. The WCAG is an indispensable resource for this kind of work and, on Manifold, I find myself referring to it almost every time I tackle a web accessibility issue. We currently only endeavor to meet the minimum standards, and we track our general progress in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/issues/1037"},"Github issue checklist of W3C 2.0 Accessibility Guidelines"),"."),(0,o.kt)("h1",{id:"tools"},"Tools"),(0,o.kt)("p",null," There are ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/ER/tools/"},"several tools")," that help you evaluate any website\u2019s general level of WCAG compliance. Many of these tools are browser-based and do a fairly good job of scraping a website\u2019s content, given a url, and outputting a list of criteria met, exceeded, or not met. And while sometimes it is helpful to use the browser to evaluate compliance, for Manifold it is most helpful to evaluate compliance while you\u2019re developing in real-time (or when the React components build). To aid in this endeavor we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y"},"jsx-a11y"),", a JSX linter that flags possible WCAG exceptions; ",(0,o.kt)("a",{parentName:"p",href:"https://michelf.ca/projects/sim-daltonism/"},"Sim Daltonism"),", a color blindness simulator; a browser-based ",(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/resources/contrastchecker/"},"color contrast inspector"),"; and ",(0,o.kt)("a",{parentName:"p",href:"https://help.apple.com/voiceover/info/guide/10.12/"},"VoiceOver"),", the default macOS screen reader."),(0,o.kt)("h2",{id:"linter"},"Linter"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y"},"Jsx-a11y")," has a set of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules"},"fully customizable rules")," almost all of which neatly line up with an article of the WCAG. Each supported rule is listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},".eslintrc")," config file. A ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," value for a rule indicates it is active. Those rules that are not currently active are either not applicable to Manifold or evaluate guideline conditions beyond our compliance baseline. As new features are added to Manifold, or existing components are refactored, it is crucial to pay close attention to the errors and warnings the linter provides during builds, as they fairly consistently indicate a problem for AT. However, the linter is not infallible and, should a component get flagged that performs on AT as expected, ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments"},"inline linter rule overrides")," may be used judiciously."),(0,o.kt)("h2",{id:"color-contrast-checker"},"Color Contrast Checker"),(0,o.kt)("p",null," One type of evaluation the jsx-a11y linter will not assist with is problematic color contrasts. The ",(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/resources/contrastchecker/"},"WebAIM: Color Contrast Checker")," takes a text color and a background color, uses the WCAG minimum color contrast ratios as benchmarks, and determines whether the combination of colors meet those benchmarks. Meeting these minimum contrasts is crucial for maintaining legibility of text against a background color. However it\u2019s important to maintain Manifold\u2019s branded color scheme, and respect the design in general, so all such issues should be addressed in coordination with a designer."),(0,o.kt)("h2",{id:"color-blindness-checker"},"Color Blindness Checker"),(0,o.kt)("p",null," A tool to assist in determining the impact of color combinations on those with various forms of color blindness is ",(0,o.kt)("a",{parentName:"p",href:"https://michelf.ca/projects/sim-daltonism/"},"Sim Daltonism"),". This color blindness simulator lets you preview how how folks with various forms of color blindness will perceive various content. It doesn\u2019t output any metrics (just a visual representation) so you have to make your own decisions as to what is or isn\u2019t legible but it does provide a quick reference when making changes to address color combination concerns."),(0,o.kt)("h2",{id:"screen-reader"},"Screen Reader"),(0,o.kt)("p",null," Finally, as with so much frontend development, sometimes the best test is trying stuff out yourself. Just as you wouldn\u2019t make general alterations to the user interface, or other visual components, without interacting with them yourself in various browsers, it is just as important to test recent updates in screen readers too. ",(0,o.kt)("a",{parentName:"p",href:"https://nfb.org/blindness-statistics"},"A recent study estimated")," that as much as 2.7 percent of the US adult population is blind (6,833,000 folks). ",(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/projects/screenreadersurvey5/"},"Another study suggests")," 5 percent of AT users do not \u201cuse a screen reader due to a disability.\u201d For a sighted-user, a UX (user experience) issue might only present an annoyance or visual discrepancy. However, a web accessibility issue leaves fundamental interactions ineffectual or whole swaths of content unavailable to an AT User. And, given the above statistics, that could mean 7,000,000 folks can\u2019t use your website as intended. The default screen reader in macOS is Voiceover. ",(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/projects/screenreadersurvey5/#used"},"According to one survey")," it is the third most used screen reader (coming in behind two windows only screen readers: NVDA and JAWS) but, like testing in Chrome first, testing web accessibility in Voiceover still provides an middling baseline. However, just like web browsers, there are breaking differences between the popular screen readers."),(0,o.kt)("h1",{id:"at-compatibility"},"AT Compatibility"),(0,o.kt)("p",null," When we use a CSS property, JavaScript method, or HTML5 attribute in a new frontend feature, we rely on sites like ",(0,o.kt)("a",{parentName:"p",href:"https://caniuse.com/"},"Can I Use")," to determine if that feature will behave the same across modern browsers. When developing for screen readers we often make use of AT specific HTML attributes called ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/html-aria/"},"ARIA attributes")," and there are ",(0,o.kt)("a",{parentName:"p",href:"https://www.powermapper.com/tests/screen-readers/aria/"},"resources similar to Can I Use")," to help us determine what ARIA attributes are compatible across which screen readers. In some cases using an ARIA attribute is the best way to supply information to AT. In other cases it is merely the most convenient. However in most cases (for instance alt text on images or labels for form fields) there is another way to supply the desired information to AT totally independently of ARIA. If so, this is always the preferred solution as it stands the best chance of being presented by various screen readers in the same manner."),(0,o.kt)("h1",{id:"maintaining-and-extending-accessibility-features"},"Maintaining and Extending Accessibility Features"),(0,o.kt)("p",null," Most of the web accessibility work for Manifold is concerned with making the unseen seen on AT. In most cases this means supplying a text alternative to a visual-only element. In this section we\u2019ll review some of the general strategies and unique challenges to improving Manifold\u2019s web accessibility."),(0,o.kt)("h2",{id:"alt-text"},"Alt Text"),(0,o.kt)("p",null," So much of adapting content to AT is giving a screen reader something to read. On Manifold, visual content not \u201cread\u201d by the screen reader loosely calls into three categories: presentational, content, and interactive."),(0,o.kt)("h3",{id:"presentational"},"Presentational"),(0,o.kt)("p",null," A presentational image is one that is corollary or even superfluous to the information with which it is associated. One example of this might be the waveform imagery displayed as part of the Audio Resource player: someone using AT can still use the player, enjoy and control the audio, and get information about the audio presented, without ever seeing the animated waveform. A sighted user\u2019s experience might be different, but it is not dramatically improved by, or dependent on, the presence of the waveform. In most cases, presentational elements should be hidden to AT as their inclusion tends to clutter up and slow down screen reader navigation. There are three main ways to hide content from AT:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"display: none"),". Setting an element\u2019s display property to none effectively removes an element from the DOM flow. Similarly it will also hide it from a screen reader. Be aware, CSS-only strategies that visually hide elements (e.g., setting ",(0,o.kt)("inlineCode",{parentName:"li"},"visibility: hidden"),", absolutely positioning an element out of view, etc.) ",(0,o.kt)("strong",{parentName:"li"},"do not")," hide elements from screen readers."),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},'hidden="true"')," attribute. Like ",(0,o.kt)("inlineCode",{parentName:"li"},"display: none"),", this will remove the element from the flow in ",(0,o.kt)("strong",{parentName:"li"},"both")," the browser and the screen reader. Unlike using CSS, this attribute instructs the browser to set the element as ",(0,o.kt)("inlineCode",{parentName:"li"},"display: none")," and, as such, it\u2019s often easier to conditionally toggle."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},'aria-hidden="true"')," attribute. This attribute is supported across all modern screen readers and will have the same effect as ",(0,o.kt)("inlineCode",{parentName:"li"},'hidden="true"')," except it will ",(0,o.kt)("strong",{parentName:"li"},"only")," be hidden for screen readers. This attribute should not be used on interactive/focusable elements as many screen readers will not respect it (the element will still be focusable but the screen reader won\u2019t \u201cread\u201d anything to the user).")),(0,o.kt)("h3",{id:"content"},"Content"),(0,o.kt)("p",null," A content image is an image that provides vital information on its own or provides meaningful context to accompanying content. Alternative text should always be provided for such content. If the image is rendered as an ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," tag this text should be supplied in the ",(0,o.kt)("inlineCode",{parentName:"p"},"alt")," attribute (",(0,o.kt)("inlineCode",{parentName:"p"},'<img src="/path/to/image" alt="description of image">'),"). If the image is rendered as a background image, or some other CSS-based method, the alternative text should be provided in an element visually hidden in the browser but still available in the DOM flow (and therefore the accessibility tree). In Manifold we have created a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"screen-reader-text")," which accomplishes just this. We also have a convention of using a ",(0,o.kt)("inlineCode",{parentName:"p"},"span")," tag for such elements (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},'<span class="screen-reader-text">Text visible to the screen reader</span>'),")."),(0,o.kt)("h3",{id:"interactive"},"Interactive"),(0,o.kt)("p",null," In Manifold, interactive images are often buttons or links (or other elements made interactive through JavaScript) whose only content is an image or icon. And while using clear bold iconography can often streamline UX, such interactions tend to hamper AT if they are unadorned by text. In most cases alternative text should be supplied in the same manner used for content images, for instance ",(0,o.kt)("inlineCode",{parentName:"p"},'<button class="fancy-icon-button">Text describing interaction</button>'),"."),(0,o.kt)("h2",{id:"roles"},"Roles"),(0,o.kt)("p",null," The ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties"},"role attribute")," helps inform the browser and AT how an element will behave. In most cases we can avoid clashes between an element\u2019s role and its ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/htmL/html5_semantic_elements.asp"},"implied semantics")," by using a more appropriate element in its place. Strive to maintain the implicit role of an HTML element as it will function as expected across browsers and AT much more consistently than those elements with roles overriding their semantic (intended) function. In some cases we should add a role attribute to reinforce an implicit role. In other cases, where styled markup and JavaScript logic already exist, the role attribute can provide the browser and AT information about an element\u2019s function that supersedes the function implied by the tag (i.e., when a ",(0,o.kt)("inlineCode",{parentName:"p"},"span")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," is treated as an interactive element). And in some rare cases we use ",(0,o.kt)("inlineCode",{parentName:"p"},'role="presentational"')," to effectively strip an element\u2019s semantic role away (leaving it still \u201creadable\u201d by AT but no longer treated as an interactive element)."),(0,o.kt)("h2",{id:"form-labels"},"Form Labels"),(0,o.kt)("p",null," It\u2019s easy to ignore form field labels, or supply descriptive text some other way, or to treat the label tags only as a tool for getting ",(0,o.kt)("a",{parentName:"p",href:"http://wtfforms.com/"},"WTF-forms CSS hacks")," to work, but AT deeply rely on the presence and strong association of labels with form elements. A label indicates a field\u2019s purpose, as placeholder text is not always read by screen readers and input types can be too general to be considered adequately informative. Because of this, it is not only vital that the label is present, it\u2019s important that its contents is human readable. For instance, in some screen readers, if you wrap a ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," with a label, the screen reader will read out all of the options as if they were the text description of the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," field. It is also important to strongly associate a label to its form field. This is done by assigning a unique id to the form field and using that id as the value of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/tags/att_for.asp"},(0,o.kt)("inlineCode",{parentName:"a"},"for")," attribute")," (or in React the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html#htmlfor"},(0,o.kt)("inlineCode",{parentName:"a"},"htmlFor")," attribute"),") on the label. There are also ",(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/techniques/forms/advanced"},"ARIA attributes that can be used to provide form field descriptions")," to screen readers, and they should ",(0,o.kt)("strong",{parentName:"p"},"not")," be used in conjunction with a label tag, as only one will be read (with the exception of the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-describedby")," attribute whose value is read in addition to any label text). In most cases an \u201cinvisible\u201d label tag can be used instead of an ARIA attribute and is the preferred solution for showing an AT-only label."),(0,o.kt)("h2",{id:"form-errors-and-notifications"},"Form Errors and Notifications"),(0,o.kt)("h2",{id:"we-want-errors-to-be-read-by-at-early-and-often-when-feasible-as-soon-as-they-are-visible-on-the-page-this-is-usually-immediately-after-a-form-has-been-submitted-they-should-also-be-automatically-read-by-the-screen-reader-subsequently-error-messages-should-be-easily-identifiable-as-unavoidable-as-possible-and-should-persist-as-long-as-the-form-is-not-submittable-in-general-form-errors-on-manifold-always-appear-next-to-the-field-with-the-error-for-at-this-is-not-ideal-its-much-more-convenient-to-have-all-of-the-errors-routed-to-a-single-elementlike-a-flash-messageall-the-time-but-we-can-well-accommodate-this-placement-by-using-the-role-attribute-in-conjunction-with-a-handful-of-other-aria-attributes-the-rolealert-attribute-lets-the-at-know-it-should-immediately-read-the-text-in-this-element-when-it-is-rendered-on-the-page-this-role-also-implicitly-makes-the-element-a-live-region-which-means-at-can-tell-when-there-are-changes-to-this-area-and-then-make-choices-accordingly-we-affect-howwhen-the-contents-in-the-live-region-gets-read-and-re-read-by-using-two-other-aria-attributes"},"We want errors to be read by AT early and often. When feasible, as soon as they are visible on the page (this is usually immediately after a form has been submitted) they should also be automatically read by the screen reader. Subsequently, error messages should be easily identifiable, as unavoidable as possible, and should persist as long as the form is not submittable. In general form errors on Manifold always appear next to the field with the error. For AT this is not ideal (it\u2019s much more convenient to have all of the errors routed to a single element\u2014like a flash message\u2014all the time), but we can well accommodate this placement by using the role attribute in conjunction with a handful of other ARIA attributes. The ",(0,o.kt)("inlineCode",{parentName:"h2"},'role="alert"')," attribute lets the AT know it should immediately read the text in this element when it is rendered on the page. This role also implicitly makes the element a \u201c",(0,o.kt)("a",{parentName:"h2",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"},"live region"),"\u201d which means AT can tell when there are changes to this area and then make choices accordingly. We affect how/when the contents in the live region gets read (and re-read) by using two other ARIA attributes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Advanced_Live_Regions"},(0,o.kt)("inlineCode",{parentName:"a"},"aria-atomic")," attribute")," tells AT to read the entire contents of the live region every time any of it is updated."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#Preferring_Specialized_Live_Region_Roles"},(0,o.kt)("inlineCode",{parentName:"a"},"aria-live")," attribute")," tells AT when to read the contents of the element, in relation to other live regions, and in relation to any user interactions. The most well supported ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-live")," value is ",(0,o.kt)("inlineCode",{parentName:"li"},"polite"),", which will wait for any pending DOM interactions to finish, also wait for any content already being read by a screen reader to finish, and then read the contents of that live region. In the case of our error messages, we use a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"assertive"),", which will interrupt anything being read and immediately announce the error. This value is not fully supported across all screen readers but will fallback to the behavior of an element with ",(0,o.kt)("inlineCode",{parentName:"li"},'aria-live="polite"'),".\nFinally we use the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute"},(0,o.kt)("inlineCode",{parentName:"a"},"aria-describedby")," attribute")," to create a relationship between the error text and the form field with which it is associated. We do this so that after the error text is read once (due to ",(0,o.kt)("inlineCode",{parentName:"li"},'role="alert"'),") it will be read again whenever its associated form field receives focus. This is important as it guides the screen reader user through the form as they make corrections (i.e., they don\u2019t have to remember what the errors are when they\u2019re read the first time; they can read them as many times as they need as they re-traverse a form with errors).")),(0,o.kt)("h2",{id:"controlling-focus"},"Controlling Focus"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#on-focus"},"Hijacking focus is surely frowned upon"),", not only for web accessibility reasons, as it runs the risk of confusing or displacing the user, but also for any user\u2019s experience. However, used judiciously, ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9"},"redirecting focus")," can make it easier for a user, especially an AT user, to understand where they are on the page and what interaction is expected of them. In some cases this is as simple as focusing on a the first form field when a form is rendered on the page: this immediately presents the most important interaction to the user (filling out the form) and keeps the user from having to navigate page content that otherwise may not have changed. Sometimes it means controlling the focus using JavaScript in order to maintain a complicated DOM flow. However, sometimes redirecting focus isn\u2019t enough of a provocation. In the case of interactions that present the user with a disparate element like a drawer, overlay, dialog box, dropdown menu, etc., we not only want to the redirect focus to an element inside the drawer, we also want to ensure that the user interacts with the contents of that element before it is hidden. To accomplish this we\u2019ll use a strategy called a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidtheclark/focus-trap-react"},"focus trap")," to restrict the user to the active element. Let\u2019s use the example of a dialog box containing a prompt asking you to \u201cConfirm the deletion of Text X\u201d, with \u201cYes\u201d and \u201cCancel\u201d buttons. For the sighted user this confirmation dialog takes over the whole screen. Using a mouse to navigate the page, the user must click \u201cYes\u201d or \u201cCancel\u201d to continue. And this makes sense. We want the user to have to make a decision. If this confirmation dialog wasn\u2019t a takeover, the user might click \u201cDelete\u201d and move on, not noticing or realizing they needed to confirm their choice. So, to emulate this behavior on AT, we use a focus trap to restrict focus to only elements inside the confirmation dialog. If the user is tabbing through content, AT will read the prompt and the buttons text over and over until they interact with one or the other button. If we don\u2019t enact a focus trap, AT would allow the user to tab through and then out of the dialog, continuing to traverse the page as normal and, depending on the contents of that dialog, this could have unwanted consequences. So, to reiterate, in this simple example, we will use a focus trap to ensure that when a user activates the confirmation dialog they won\u2019t miss the messaging, and they will be required to interact with it before moving on, just as a non-AT user would do. Not all uses of the focus trap are so simple, but the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidtheclark/focus-trap-react"},"react-focus-trap component")," we use offers enough options and flexibility to implement it effectively without too many concessions. One important consideration when using a focus trap: if we\u2019ve trapped focus inside a dialog, drawer, etc., we must provide them with an interaction to escape the trap. In most cases we can provide a default \u201cpress esc key to close,\u201d but this should be used in addition to an \u201con screen\u201d interaction. Usually we provide a close button inside the focus trap to allow the user to escape the trap without having affected any other change. In some cases we only need to make this close button available to AT as some other click-based interaction is otherwise available."),(0,o.kt)("h2",{id:"nav-skip"},"Nav Skip"),(0,o.kt)("p",null," In the most basic sense, AT reads the page from top to bottom every time the page loads. This can hamper UX on a screen reader as it might force a user to traverse the same content over and over as they navigate between pages. In addition to simply tabbing through content, most AT will sort page content in enough different ways to allow the user to access whatever part of the page is most relevant to them. However, we want to encourage users to easily access the most relevant content as quickly and intuitively as possible even if they are only using the tab key to navigate the page. So, we supply anchor links to ",(0,o.kt)("a",{parentName:"p",href:"http://www.jimthatcher.com/skipnav.htm"},"let the user skip any redundant page content"),". In fact, we\u2019ve created a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/blob/master/client/src/components/global/Utility/SkipLink.js"},"React component")," to do just that. The placement of this anchor link should be immediately before the skippable content."),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("h2",{id:"aria"},"ARIA"),(0,o.kt)("p",null," ARIA stands for Accessible Rich Internet Application and it is generally used to refer to HTML attributes that define how AT treats that element. This behavior can range from what contextual information is read along with the element contents, to the order by which content is traversed, to AT-only after effects to DOM interactions, to providing competing, non-semantic, labels, button text, etc. However, like any newer or more experimental browser feature, care must be taken to avoid using attributes that are not yet fully supported across popular screen readers."),(0,o.kt)("h2",{id:"assistive-technology-at"},"Assistive Technology (AT)"),(0,o.kt)("p",null," Assistive Technology is any type of equipment or system that improves the functional capabilities of those with disabilities. For our purposes, it describes any such technology or software that interfaces or augment a browser-based experience."),(0,o.kt)("h2",{id:"screen-reader-1"},"Screen Reader"),(0,o.kt)("p",null," A screen reader is a type of AT that uses a text-to-speech (TTS) engine to translate on-screen information into speech, which can be heard through earphones or speakers, or into to braille, with the addition of a refreshable braille display. It is usually a software application native to the computer\u2019s operating system, but ",(0,o.kt)("a",{parentName:"p",href:"http://www.hollier.info/browserpairing/"},"several browsers offer screen reader extensions"),"."),(0,o.kt)("h2",{id:"web-accessibility"},"Web Accessibility"),(0,o.kt)("p",null," Web accessibility refers to the inclusive process of removing barriers that prevent interaction with, or access to, websites by people with disabilities. Broadly speaking, the goal is for all users to have equal access to any information and functionality a website might have."),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null," One term I kept coming across in my research was \u201cuniversal design.\u201d Roughly, this is a design approach predicated on creating products, environments, content, etc. that is inherently accessible to everyone and anyone. For the web this definition is a tad narrower, but the principles hold true regardless:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://universalusability.com/access_by_design/index.html"},"Online Book with in-depth look at universal design, development, and content creation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.uiaccess.com/books.html"},"Slightly dated list of books related to the intersection of universal design and web accessibility")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://universaldesign.ie/"},"Organization that more or less coined the term universal design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.interaction-design.org/literature/article/learn-to-create-accessible-websites-with-the-principles-of-universal-design"},"Educational organization concerned with web accessibility and universal design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.washington.edu/doit/universal-design-web-pages"},"Presentation from UW Design School about web accessible design")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/accessibility/"},"Google also has opinions about web accessibility best practices"),"\n\u2014",(0,o.kt)("em",{parentName:"li"},"Blake Mason, Frontend Developer, Cast Iron Coding"))))}h.isMDXComponent=!0}}]);