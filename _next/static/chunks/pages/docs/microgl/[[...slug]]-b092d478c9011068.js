(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{1508:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/microgl/[[...slug]]",function(){return l(7669)}])},7669:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return i},default:function(){return o}});var n=l(5893),r=l(9815),s=l(6469),a=l(3305),c=l(411),i=!0;function o(e){let{data:t}=e,l={...t,content:(0,n.jsx)(a.R,{...t.content,components:r.Z})};return(0,n.jsx)(c.Z,{children:(0,n.jsx)(s.Z,{data:l,header_prefix:"[micro{gl}]",github_link:"https://github.com/micro-gl/micro-gl"})})}},411:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var n=l(5893),r=l(7294);function s(e){let{children:t,...l}=e,[s,a]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{a(!0)},[]),s)?(0,n.jsx)(n.Fragment,{children:t}):null}},5733:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(5893);function r(e){return(0,n.jsx)("p",{className:"w-full my-10 text-base text-center dark:text-white",...e,children:"All Rights Reserved, Tomer Shalev, (2022-".concat(new Date().getFullYear(),")")})}},5882:function(e,t,l){"use strict";var n=l(5893),r=l(8193),s=l(3854),a=l(1989);let c=e=>{let{className:t,slug:l,prefix:c,github_link:i,onMenuClick:o,...u}=e,{darkMode:x,toggle:d}=(0,a.Z)();return(0,n.jsxs)("header",{className:"flex flex-row justify-between items-center \n                        w-full max-w-[1100px] mx-auto px-3 ".concat(t),children:[(0,n.jsxs)("div",{className:"h-fit w-fit flex flex-row items-center  font-old text-base font-bold",children:[(0,n.jsx)("span",{children:c,className:"text-black dark:text-white"}),(0,n.jsx)("span",{children:"::".concat(l),className:"hidden md:inline text-kf-500 whitespace-nowrap"})]}),(0,n.jsxs)("div",{className:"h-fit w-fit flex flex-row items-center gap-3 text-2xl",children:[(0,n.jsx)("button",{className:"p-0",onClick:d,children:(0,n.jsx)(s.W79,{className:"text-black dark:text-white"})}),(0,n.jsx)("a",{href:i,target:"_blank",children:(0,n.jsx)(r.RrF,{className:"text-black dark:text-white"})}),o&&(0,n.jsx)(r.qTj,{className:"inline md:hidden cursor-pointer  text-black dark:text-white",onClick:o})]})]})};t.Z=c},6469:function(e,t,l){"use strict";l.d(t,{Z:function(){return f}});var n=l(5893),r=l(1664),s=l.n(r);let a=e=>{let{onClickMenuItem:t,selectedSlug:l,group:r,...a}=e,{title:c,items:i}=r;return(0,n.jsxs)("div",{...a,children:[(0,n.jsx)("div",{className:"text-2xl font-old2 opacity-95 font-normal  text-kf-500 dark:text-pink-500 w-full ",children:c}),(0,n.jsx)("div",{className:"flex flex-col w-full gap-0 mt-3",children:i.map((e,r)=>(0,n.jsx)(s(),{href:"".concat(e.route),children:(0,n.jsx)("p",{onClick:l=>{t&&t(e)},className:"text-sm  font-medium px-2 \n                               py-3 rounded-md\n                              ".concat(e.route===l?"bg-kf-50 dark:bg-kf-500 text-gray-900 \n                                 dark:text-gray-100":"bg-transparent text-gray-900 dark:text-gray-300"),children:e.title})},r))})]})},c=e=>{let{className:t,onClickMenuItem:l,selectedSlug:r,groups:s,name:c,...i}=e;return(0,n.jsx)("nav",{...i,className:t,children:(0,n.jsx)("div",{className:"flex flex-col w-full h-full gap-6",children:s.map((e,t)=>(0,n.jsx)(a,{className:"",group:e,selectedSlug:r,onClickMenuItem:l},t))})})};var i=l(5882),o=l(5733),u=l(7294),x=l(1989);let d=e=>{let{className:t,data:l,header_prefix:r,github_link:s}=e,{slug:a,content:d,document:f,frontMatter:h}=l,{name:p,groups:m}=f,{title:g,description:j}=h,[b,k]=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],[t,l]=(0,u.useState)(e),n=(0,u.useCallback)(()=>{l(e=>!e)},[]);return[t,n]}(!1),{darkMode:w}=(0,x.Z)(),v=(0,u.useRef)();return(0,u.useEffect)(()=>{v.current.scrollTo({top:0,left:0,behavior:"smooth"})},[a]),(0,n.jsx)("div",{className:"".concat(t," ").concat(w?"dark":""),children:(0,n.jsxs)("div",{className:"relative w-full h-screen flex flex-col \n                     font-open_sans overflow-clip\n                     transition-colors\n                     bg-transparent dark:bg-gray-900",children:[(0,n.jsx)(i.Z,{className:"shadow-sm  --bg-gray-400 flex-shrink-0  w-full h-[70px] ",slug:a,prefix:r,onMenuClick:k,github_link:s}),(0,n.jsxs)("main",{className:"flex flex-row justify-center w-full overflow-auto flex-1 ",children:[(0,n.jsx)(c,{className:"hidden md:block w-52 h-full overflow-y-auto  pt-1 flex-shrink-0 px-3",selectedSlug:a,groups:m,name:p}),(0,n.jsxs)("div",{className:"overflow-auto w-full max-w-[800px] h-full --bg-green-400",ref:v,children:[(0,n.jsx)("div",{className:"w-full block px-2 md:px-5 h-fit pb-20 mdx --bg-green-400 bg-transparent dark:bg-gray-900 text-gray-900 dark:text-gray-200",children:d}),(0,n.jsx)(o.Z,{})]})]}),(0,n.jsx)(c,{className:"absolute left-0 top-[70px] block md:hidden w-full \n                             h-full overflow-auto \n                             bg-white dark:bg-gray-900\n                             pt-1 px-3 transition-transform duration-300\n                             ".concat(b?"translate-x-0":"translate-x-full"),onClickMenuItem:k,selectedSlug:a,groups:m,name:p})]})})};var f=d},9815:function(e,t,l){"use strict";l.d(t,{Z:function(){return h}});var n=l(5893);l(5152);var r=l(9008),s=l.n(r),a=l(1664),c=l.n(a);l(7294);var i=l(7087),o=l(9361);let u=e=>{var t,l;let n=(null!==(t=null==e?void 0:e.replace(/language-/,""))&&void 0!==t?t:"").split("&").reduce((e,t)=>{let[l,n]=t.split("=");return e[l]=null==n||n,e},{lang:"js",lines:""});return n.lines=function(e){let t,l=[];for(let n of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(n))l.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,s]=t;if(n&&s){n=parseInt(n),s=parseInt(s);let e=n<s?1:-1;("-"===r||".."===r||"‥"===r)&&(s+=e);for(let t=n;t!==s;t+=e)l.push(t)}}return l}(null!==(l=n.lines)&&void 0!==l?l:""),n},x=e=>{let{children:t}=e,{props:{className:l,children:r=""}}=t,{lang:s,showLinesNumbers:a,lines:c}=u(l);return console.log(s,a,c),(0,n.jsx)(i.ZP,{...i.lG,theme:o.Z,code:r.trim(),language:s,className:"",children:e=>{let{className:t,style:l,tokens:r,getLineProps:s,getTokenProps:i}=e;return(0,n.jsx)("pre",{className:"rounded-lg font-code overflow-auto ".concat(t),style:{...l,padding:"20px"},children:r.map((e,t)=>{let l=s({line:e,key:t}),r=c.includes(t+1);return l.className="".concat(l.className," table-row \n                              ").concat(r?"bg-gray-600":"bg-transparent"),(0,n.jsxs)("div",{...l,children:[(a||c.length>0)&&(0,n.jsx)("span",{children:t+1,className:"table-cell px-1 ".concat(r?"border-l-pink-500 border-l-2 ":""," ")}),e.map((e,t)=>(0,n.jsx)("span",{...i({token:e,key:t})},t))]},t)})})}})},d=e=>{let{children:t,...l}=e;return(0,n.jsx)("blockquote",{className:"flex flex-row items-center bg-gray-200  text-gray-800 p-2 border-l-8 border-pink-400 overflow-x-auto",children:t,...l})},f={h1:e=>(0,n.jsx)("h1",{...e}),h2:e=>(0,n.jsx)("h2",{...e}),h3:e=>(0,n.jsx)("h3",{...e}),h4:e=>(0,n.jsx)("h4",{...e}),hr:e=>(0,n.jsx)("hr",{...e}),strong:e=>(0,n.jsx)("strong",{fontWeight:"semibold",...e}),br:e=>(0,n.jsx)("span",{...e}),p:e=>(0,n.jsx)("p",{...e}),a:e=>(0,n.jsx)("a",{...e}),p:e=>(0,n.jsx)("p",{...e}),ul:e=>(0,n.jsx)("ul",{...e}),ol:e=>(0,n.jsx)("ol",{...e}),li:e=>(0,n.jsx)("li",{className:"pb-4",...e}),pre:e=>(0,n.jsx)(x,{...e}),code:e=>(0,n.jsx)("code",{className:"inline --bg-white text-pink-600",...e}),blockquote:e=>(0,n.jsx)(d,{...e}),a:function(e){let{href:t,children:l,...r}=e;return console.log("children ",t),(0,n.jsx)(c(),{passHref:!0,href:t,className:"text-teal-600 underline",children:l,...r})},Head:s()};var h=f},1989:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var n=l(7294);let r=!1,s=new Set,a=e=>(s.add(e),()=>{s.delete(e)}),c=()=>{s.forEach(e=>e(r))};function i(){let e=function(){let[e,t]=(0,n.useState)(0),l=(0,n.useCallback)(()=>{t(e=>e+1)},[]);return l}(),t=(0,n.useCallback)(()=>{r=!r,c()});return(0,n.useEffect)(()=>a(e),[]),{darkMode:r,toggle:t}}}},function(e){e.O(0,[617,556,949,269,774,888,179],function(){return e(e.s=1508)}),_N_E=e.O()}]);