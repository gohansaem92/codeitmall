(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4369)}])},6946:function(t,n,e){"use strict";e.d(n,{Z:function(){return _}});var i=e(5893),s=e(1664),a=e.n(s),r=e(3509),c=e.n(r),o=e(6463),u=e(5675),l=e.n(u);function _(t){let{className:n="",movies:e}=t;return(0,i.jsx)("ul",{className:"".concat(c().movieList," ").concat(n),children:e.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(a(),{href:"/films/".concat(t.id),children:(0,i.jsx)("div",{className:c().poster,children:(0,i.jsx)(l(),{fill:!0,src:t.posterUrl,alt:t.title})})}),(0,i.jsxs)("div",{className:c().info,children:[(0,i.jsx)("h2",{className:c().title,children:t.title}),(0,i.jsxs)("div",{className:c().date,children:[t.date," ・ ",t.country]}),(0,i.jsxs)("div",{className:c().starRatingContainer,children:[(0,i.jsx)(o.Z,{value:t.starRating}),(0,i.jsx)("span",{className:c().starRating,children:t.starRating})]})]})]},t.id))})}},6425:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var i=e(5893),s=e(1163),a=e(7294),r=e(1111),c=e.n(r);function o(t){let{initialValue:n=""}=t,[e,r]=(0,a.useState)(n),o=(0,s.useRouter)();return(0,i.jsxs)("form",{onSubmit:function(t){return(t.preventDefault(),e)?o.push("/search?q=".concat(e)):o.push("/")},children:[(0,i.jsx)("input",{className:c().input,name:"q",value:e,placeholder:"영화를 검색해보세요.",onChange:function(t){r(t.target.value)}}),(0,i.jsx)("button",{className:c().button,children:"검색"})]})}},6463:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var i=e(5893),s=e(5202),a=e.n(s);let r=[1,2,3,4,5];function c(t){let{value:n=1}=t;return(0,i.jsx)("span",{className:a().starRating,children:r.map(t=>n>=t?"★":"✩")})}},7072:function(t,n,e){"use strict";var i=e(7066);let s=i.Z.create({baseURL:"https://learn.codeit.kr/api/watchit"});n.Z=s},4369:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var i=e(5893),s=e(7294),a=e(6946),r=e(6425),c=e(1502),o=e.n(c),u=e(7072),l=e(9008),_=e.n(l);function d(){let[t,n]=(0,s.useState)([]);async function e(){var t;let e=await u.Z.get("/movies/"),i=null!==(t=e.data.results)&&void 0!==t?t:[];n(i)}return(0,s.useEffect)(()=>{e()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_(),{children:(0,i.jsx)("title",{children:"codeit-movie"})}),(0,i.jsx)(r.Z,{}),(0,i.jsx)(a.Z,{className:o().movieList,movies:t})]})}},3509:function(t){t.exports={movieList:"MovieList_movieList__tXKtX",poster:"MovieList_poster__UwTsp",info:"MovieList_info__dZjTp",title:"MovieList_title__ARalU",date:"MovieList_date__8WYIu",starRatingContainer:"MovieList_starRatingContainer__XjEj8",starRating:"MovieList_starRating__HfaLB"}},1111:function(t){t.exports={input:"SearchForm_input__z7e9T",button:"SearchForm_button__jDjwu"}},5202:function(t){t.exports={starRating:"StarRating_starRating__UuQhc"}},1502:function(t){t.exports={movieList:"Home_movieList__a1ujm"}}},function(t){t.O(0,[31,774,888,179],function(){return t(t.s=5557)}),_N_E=t.O()}]);