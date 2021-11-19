(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{17:function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__YzTmD"}},18:function(e,t,r){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3adhh","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__bE9Iu"}},19:function(e,t,r){e.exports={overlay:"Modal_overlay__l5oic",modal:"Modal_modal__1A0Mj"}},24:function(e,t,r){e.exports={Button:"Button_Button__2T94K"}},30:function(e,t,r){},31:function(e,t,r){},6:function(e,t,r){e.exports={Searchbar:"Searchbar_Searchbar__n08Mj",SearchForm:"Searchbar_SearchForm__xu8bx",SearchFormButton:"Searchbar_SearchFormButton__1yfWR",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2UVWk",SearchFormInput:"Searchbar_SearchFormInput__2lhjd"}},63:function(e,t,r){"use strict";r.r(t);var a,n=r(0),c=r.n(n),o=r(4),l=r.n(o),i=(r(30),r(3)),s=(r(31),r(10)),u=r(6),j=r.n(u),m=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h(e,t){var r=e.title,c=e.titleId,o=d(e,m);return n.createElement("svg",b({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",ref:t,"aria-labelledby":c},o),r?n.createElement("title",{id:c},r):null,a||(a=n.createElement("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"})))}var f=n.forwardRef(h),O=(r.p,r(32),r(1)),g=function(e){var t=e.onSubmit,r=Object(n.useState)(""),a=Object(i.a)(r,2),c=a[0],o=a[1];return Object(O.jsx)("header",{className:j.a.Searchbar,children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):Object(s.b)("Enter your request")},className:j.a.SearchForm,children:[Object(O.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(O.jsx)(f,{})}),Object(O.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){var t=e.currentTarget.value.toLowerCase();o(t)}})]})})},p=r(11),x=r(17),v=r.n(x),y=r(18),S=r.n(y);var _=function(e){var t=e.result,r=e.openModal,a=e.srcSet;function n(e){r(),a(e)}return Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsx)("li",{onClick:n,className:S.a.ImageGalleryItem,children:Object(O.jsx)("img",{src:e.webformatURL,"data-source":e.largeImageURL,alt:"",className:S.a.ImageGalleryItemImage})},e.id)}))})},I=r(19),w=r.n(I),C=document.querySelector("#modal-root"),F=function(e){var t=e.onClose,r=e.children;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);return Object(o.createPortal)(Object(O.jsx)("div",{className:w.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(O.jsx)("div",{className:w.a.modal,children:r})}),C)},E=r(23),G=r.n(E),N=(r(54),r(24)),k=r.n(N);var B=function(e){var t=e.loadMore;return Object(O.jsx)("button",{type:"button",onClick:t,className:k.a.Button,children:"Load more"})},M=r(25),L=function(e){var t=e.value,r=e.page,a=e.newPageRequest,c=Object(n.useState)([]),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)("idle"),j=Object(i.a)(u,2),m=j[0],b=j[1],d=Object(n.useState)(null),h=Object(i.a)(d,2),f=h[0],g=h[1],x=Object(n.useState)(!1),y=Object(i.a)(x,2),S=y[0],I=y[1],w=Object(n.useState)(""),C=Object(i.a)(w,2),E=C[0],N=C[1],k=function(){I((function(e){return!e}))},L=function(e){var t=e.target.dataset.source;N(t)};return Object(n.useEffect)((function(){t&&(b("pending"),fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(r,"&key=21915406-973315f608c7e35a5d0268cdc&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Nothing was found"))})).then((function(e){var t=e.hits;if(0===t.length)return Promise.reject(new Error("Nothing was found"));1!==r?(s((function(e){return[].concat(Object(p.a)(e),Object(p.a)(t))})),b("resolved")):(s(Object(p.a)(t)),b("resolved"))})).catch((function(e){g(e),b("rejected")})))}),[t,r]),"idle"===m?Object(O.jsx)("div",{style:{textAlign:"center"},children:"Enter your search"}):"pending"===m?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{className:v.a.ImageGallery,children:Object(O.jsx)(_,{srcSet:L,openModal:k,result:l})}),Object(O.jsx)(G.a,{style:{marginLeft:"auto",marginRight:"auto"},type:"Grid",color:"#00BFFF",height:100,width:100,timeout:3e3})]}):"rejected"===m?Object(O.jsx)("h1",{children:f.message}):"resolved"===m?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{className:v.a.ImageGallery,children:Object(O.jsx)(_,{srcSet:L,openModal:k,result:l})}),S&&Object(O.jsx)(F,{onClose:k,children:Object(O.jsx)("img",{src:E,alt:""})}),Object(O.jsx)(B,{loadMore:function(){a(r+1),M.animateScroll.scrollToBottom({duration:2e3})}})]}):void 0},P=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(1),o=Object(i.a)(c,2),l=o[0],u=o[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(g,{onSubmit:function(e){a(e),u(1)}}),Object(O.jsx)(L,{value:r,page:l,newPageRequest:function(e){u(e)}}),Object(O.jsx)(s.a,{autoClose:3e3,position:"top-center"})]})};l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d4efeb39.chunk.js.map