(this.webpackJsonpmodule3=this.webpackJsonpmodule3||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(20),s=n.n(o),u=(n(30),n(31),n(4));n(32);function i(e){var t=e.handleQuery;return Object(c.jsx)("header",{className:"Searchbar",children:Object(c.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(c.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(c.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(c.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",id:"q"})]})})}var l=n(11),m=n(21);function b(e){var t=e.image;return Object(c.jsx)("img",{onClick:function(){return d(t)},src:t.webformatURL,alt:"",className:"ImageGalleryItem-image"})}var d=function(e){var t=function(e){"Escape"===e.key&&c.close()},n=function(){c.close()},c=m.create('\n        <div class="Overlay">\n          <div class="Modal">\n              <img src='.concat(e.largeImageURL,' alt="" />\n          </div>\n      </div>\n      '),{closable:!0,onShow:function(){document.addEventListener("keydown",t),setTimeout((function(){document.querySelector(".Overlay").addEventListener("click",n)}),500)},onClose:function(){document.removeEventListener("keydown",t),document.querySelector(".Overlay").removeEventListener("click",n)}});c.show()},h=n(22),j=n.n(h),f=n(23),p=n.n(f),v=n(10),O=n.n(v),g=n(24),y=n(8),x=n.n(y);x.a.defaults.baseURL="https://pixabay.com/api",x.a.defaults.params={key:"19741747-aaef32235b2696c68d5824b79",image_type:"photo",orientation:"horizontal",per_page:12};var S=function(){var e=Object(g.a)(O.a.mark((function e(t){var n,c,a,r=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.prev=1,e.next=4,x.a.get("/",{params:{q:t,page:n}});case 4:return c=e.sent,a=c.data,e.abrupt("return",a.hits);case 9:return e.prev=9,e.t0=e.catch(1),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function w(e){var t=e.query,n=Object(a.useState)([]),r=Object(u.a)(n,2),o=r[0],s=r[1],i=Object(a.useState)(!1),m=Object(u.a)(i,2),d=m[0],h=m[1],f=Object(a.useState)(1),v=Object(u.a)(f,2),O=v[0],g=v[1];Object(a.useEffect)((function(){s([])}),[t]),Object(a.useEffect)((function(){t&&(h(!0),S(t,O).then((function(e){s((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))})),h(!1)})).then((function(){1!==O&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch(console.log))}),[O,t]);return Object(c.jsx)("section",{children:d?Object(c.jsx)(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):o.length?Object(c.jsxs)("section",{children:[Object(c.jsx)("ul",{className:"ImageGallery",children:o.map((function(e){return Object(c.jsx)("li",{className:"ImageGalleryItem",children:Object(c.jsx)(b,{image:e})},p.a.generate())}))}),Object(c.jsx)("button",{className:"Button",type:"submit",onClick:function(e){e.preventDefault(),g((function(e){return e+1}))},children:"Load more"})]}):Object(c.jsx)("h3",{children:"Please, enter the name of the image to find"})})}function F(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(i,{handleQuery:function(e){e.preventDefault(),r(e.target.q.value)}}),Object(c.jsx)(w,{query:n})]})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),k()}},[[81,1,2]]]);
//# sourceMappingURL=main.1a896ad6.chunk.js.map