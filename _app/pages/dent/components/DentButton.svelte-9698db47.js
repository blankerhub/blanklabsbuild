import{S as b,i as k,s as g,e as f,c as h,a as u,d as o,b as r,g as _,n as c,t as m,h as v,F as y,f as d,j as x}from"../../../chunks/index-a8410b62.js";function D(i){let e,l;return{c(){e=f("div"),l=m("coming soon..."),this.h()},l(s){e=h(s,"DIV",{class:!0});var t=u(e);l=v(t,"coming soon..."),t.forEach(o),this.h()},h(){r(e,"class","opacity-50")},m(s,t){_(s,e,t),y(e,l)},p:c,d(s){s&&o(e)}}}function p(i){let e,l;return{c(){e=f("a"),l=m(i[0]),this.h()},l(s){e=h(s,"A",{id:!0,class:!0,style:!0,href:!0});var t=u(e);l=v(t,i[0]),t.forEach(o),this.h()},h(){r(e,"id","anchorlink"),r(e,"class","text-base text-white px-10 py-4 svelte-md3xr0"),d(e,"--custom-color",i[1]),r(e,"href",i[2])},m(s,t){_(s,e,t),y(e,l)},p(s,t){t&1&&x(l,s[0]),t&2&&d(e,"--custom-color",s[1]),t&4&&r(e,"href",s[2])},d(s){s&&o(e)}}}function E(i){let e;function l(n,a){return n[2]!=""?p:D}let s=l(i),t=s(i);return{c(){e=f("div"),t.c(),this.h()},l(n){e=h(n,"DIV",{class:!0});var a=u(e);t.l(a),a.forEach(o),this.h()},h(){r(e,"class","mt-10 mb-10")},m(n,a){_(n,e,a),t.m(e,null)},p(n,[a]){s===(s=l(n))&&t?t.p(n,a):(t.d(1),t=s(n),t&&(t.c(),t.m(e,null)))},i:c,o:c,d(n){n&&o(e),t.d()}}}function B(i,e,l){let{text:s="Click"}=e,{color:t="secondary"}=e,{href:n=""}=e;return i.$$set=a=>{"text"in a&&l(0,s=a.text),"color"in a&&l(1,t=a.color),"href"in a&&l(2,n=a.href)},[s,t,n]}class I extends b{constructor(e){super();k(this,e,B,E,g,{text:0,color:1,href:2})}}export{I as default};
