function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequirebbb8;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequirebbb8=r),r.register("27Lyk",(function(t,n){var i,s;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("27Lyk").register(JSON.parse('{"9vqfN":"index.5a65c99f.js","g6asv":"anime.4b201c78.jpeg","bx3as":"index.fc8eded6.css"}'));const o=[{type:"title",value:"My JS app project",options:{tag:"h2",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff","text-align":"center",padding:"1.5rem"}}},{type:"image",value:t(new URL(r("27Lyk").resolve("g6asv"),import.meta.url).toString()),options:{styles:{display:"flex","justify-content":"center",padding:"2rem 0"}}},{type:"text",value:"It's my first project on JS with Parcel :)",options:{styles:{color:"red","text-align":"center",padding:"10px","font-family":"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}},{type:"columns",value:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus luctus arcu at egestas. Vestibulum."],options:{styles:{color:"blue","font-family":"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}}];function a(e,t=""){return`\n        <div class="row" style="${t}">${e}</div>\n    `}function u(e){return`\n        <div class="col-sm">${e}</div>\n    `}function l(e={}){return Object.keys(e).map((t=>`${t}: ${e[t]}`)).join(";")}const c={title:function(e){const{tag:t="h1",styles:n}=e.options;return a(u(`<${t}>${e.value}</${t}>`),l(n))},text:function(e){return a(u(`<p>${e.value}</p>`),l(e.options.styles))},columns:function(e){return a(e.value.map((e=>u(e))).join(""),l(e.options.styles))},image:function(e){return a(u(`<img src="${e.value}" style="width:750px; height:500px;" />`),l(e.options.styles))}},d=document.querySelector("#site");o.forEach((e=>{const t=c[e.type];t&&d.insertAdjacentHTML("beforeend",t(e))}));
//# sourceMappingURL=index.5a65c99f.js.map
