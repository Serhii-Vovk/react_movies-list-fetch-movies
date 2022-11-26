(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),s=(c(14),c(9)),n=c(2),r=c(1),l=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m);c(20);function u(e){return fetch("".concat("https://www.omdbapi.com/?apikey=d9067bff","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var h=function(e){var t=e.addMovie,c=Object(r.useState)(""),i=Object(n.a)(c,2),a=i[0],s=i[1],d=Object(r.useState)(null),m=Object(n.a)(d,2),h=m[0],v=m[1],O=Object(r.useState)(!1),x=Object(n.a)(O,2),p=x[0],f=x[1],N=Object(r.useState)(""),g=Object(n.a)(N,2),y=g[0],w=g[1],I=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i,s,n,r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.prev=2,e.next=5,u(a);case 5:"Error"in(c=e.sent)?w("Can't find a movie with such a title"):(i=c.Poster,s=c.Title,n=c.Plot,r=c.imdbID,l={title:s,description:n,imgUrl:"N/A"===i?"https://via.placeholder.com/360x270.png?text=no%20preview":i,imdbUrl:"https://www.imdb.com/title/".concat(r),imdbId:r},v(l)),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error("Unexpected error".concat(e.t0));case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:I,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:a,onChange:function(e){s(e.target.value),w("")}})}),y&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:y})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:p?"button is-loading":"button is-light",disabled:0===a.length,children:h?"Search again":"Find a movie"})}),h&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){h&&(t(h),v(null),s(""))},children:"Add to the list"})})]})]}),h&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:h})]})]})},v=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{addMovie:function(e){c.some((function(t){return t.imdbId===e.imdbId}))||i([].concat(Object(s.a)(c),[e]))}})})]})};a.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2453fd23.chunk.js.map