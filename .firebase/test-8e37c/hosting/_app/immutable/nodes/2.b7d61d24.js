import{x as P,s as x,v as G,r as H,n as J,e as F,w as nt,g as $,h as g,i as S,k as y,u as K,p as Q,q as T,y as ot,c as V,z as j,d as B,A as U}from"../chunks/scheduler.37b8a958.js";import{S as W,i as X,d as R,v as Y,a as E,h as st,t as L,c as at,b as N,e as _,o as rt,j as it,k as lt,g as d,n as k,m as ct,l as ut}from"../chunks/index.e829ca3c.js";import{p as A}from"../chunks/stores.a7eb5a2b.js";import{c as ft}from"../chunks/index.40b40403.js";function Z(i,{delay:e=0,duration:s=400,easing:a=ft,x:r=0,y:o=0,opacity:l=0}={}){const t=getComputedStyle(i),n=+t.opacity,c=t.transform==="none"?"":t.transform,b=n*(1-l),[C,m]=P(r),[v,O]=P(o);return{delay:e,duration:s,easing:a,css:(p,u)=>`
			transform: ${c} translate(${(1-p)*C}${m}, ${(1-p)*v}${O});
			opacity: ${n-b*u}`}}const mt="src/lib/components/AnimatedRoute.svelte";function I(i){let e,s,a;const r=i[2].default,o=J(r,i,i[1],null),l={c:function(){e=$("div"),o&&o.c(),this.h()},l:function(n){e=g(n,"DIV",{});var c=S(e);o&&o.l(c),c.forEach(_),this.h()},h:function(){y(e,mt,6,2,126)},m:function(n,c){E(n,e,c),o&&o.m(e,null),a=!0},p:function(n,c){o&&o.p&&(!a||c&2)&&K(o,r,n,n[1],a?T(r,n[1],c,null):Q(n[1]),null)},i:function(n){a||(N(o,n),n&&(s||ot(()=>{s=rt(e,Z,{x:"-100%",duration:500}),s.start()})),a=!0)},o:function(n){L(o,n),a=!1},d:function(n){n&&_(e),o&&o.d(n)}};return R("SvelteRegisterBlock",{block:l,id:I.name,type:"key",source:"(6:0) {#key $page.url}",ctx:i}),l}function D(i){let e=i[0].url,s,a,r=I(i);const o={c:function(){r.c(),s=F()},l:function(t){r.l(t),s=F()},m:function(t,n){r.m(t,n),E(t,s,n),a=!0},p:function(t,[n]){n&1&&x(e,e=t[0].url)?(st(),L(r,1,1,nt),at(),r=I(t),r.c(),N(r,1),r.m(s.parentNode,s)):r.p(t,n)},i:function(t){a||(N(r),a=!0)},o:function(t){L(r),a=!1},d:function(t){t&&_(s),r.d(t)}};return R("SvelteRegisterBlock",{block:o,id:D.name,type:"component",source:"",ctx:i}),o}function pt(i,e,s){let a;G(A,"page"),H(i,A,t=>s(0,a=t));let{$$slots:r={},$$scope:o}=e;Y("AnimatedRoute",r,["default"]);const l=[];return Object.keys(e).forEach(t=>{!~l.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<AnimatedRoute> was created with unknown prop '${t}'`)}),i.$$set=t=>{"$$scope"in t&&s(1,o=t.$$scope)},i.$capture_state=()=>({fly:Z,page:A,$page:a}),[a,o,r]}class tt extends W{constructor(e){super(e),X(this,e,pt,D,x,{}),R("SvelteRegisterComponent",{component:this,tagName:"AnimatedRoute",options:e,id:D.name})}}const w="src/routes/login/+layout.svelte";function et(i){let e,s,a;const r=i[1].default,o=J(r,i,i[2],null),l={c:function(){e=$("main"),s=$("div"),o&&o.c(),this.h()},l:function(n){e=g(n,"MAIN",{class:!0});var c=S(e);s=g(c,"DIV",{class:!0});var b=S(s);o&&o.l(b),b.forEach(_),c.forEach(_),this.h()},h:function(){d(s,"class","card-body items-center text-center"),y(s,w,26,4,683),d(e,"class","card w-4/6 bg-neutral text-neutral-content mx-auto"),y(e,w,25,2,612)},m:function(n,c){E(n,e,c),k(e,s),o&&o.m(s,null),a=!0},p:function(n,c){o&&o.p&&(!a||c&4)&&K(o,r,n,n[2],a?T(r,n[2],c,null):Q(n[2]),null)},i:function(n){a||(N(o,n),a=!0)},o:function(n){L(o,n),a=!1},d:function(n){n&&_(e),o&&o.d(n)}};return R("SvelteRegisterBlock",{block:l,id:et.name,type:"slot",source:"(24:0) <AnimatedRoute>",ctx:i}),l}function q(i){let e,s,a,r="Sign In",o,l,t="Choose Username",n,c,b="Upload Photo",C,m,v;m=new tt({props:{$$slots:{default:[et]},$$scope:{ctx:i}},$$inline:!0});const O={c:function(){e=$("nav"),s=$("ul"),a=$("a"),a.textContent=r,o=V(),l=$("a"),l.textContent=t,n=V(),c=$("a"),c.textContent=b,C=V(),it(m.$$.fragment),this.h()},l:function(u){e=g(u,"NAV",{class:!0});var f=S(e);s=g(f,"UL",{class:!0});var h=S(s);a=g(h,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),j(a)!=="svelte-g5g2k4"&&(a.textContent=r),o=B(h),l=g(h,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),j(l)!=="svelte-9cbufa"&&(l.textContent=t),n=B(h),c=g(h,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),j(c)!=="svelte-vwtmt3"&&(c.textContent=b),h.forEach(_),f.forEach(_),C=B(u),lt(m.$$.fragment,u),this.h()},h:function(){var u,f;d(a,"href","/login"),d(a,"class","step step-primary"),y(a,w,7,4,199),d(l,"href","/login/username"),d(l,"class","step"),U(l,"step-primary",(u=i[0].route.id)==null?void 0:u.match(/username|photo/g)),y(l,w,8,4,259),d(c,"href","/login/photo"),d(c,"class","step"),U(c,"step-primary",(f=i[0].route.id)==null?void 0:f.includes("photo")),y(c,w,15,4,426),d(s,"class","steps"),y(s,w,6,2,175),d(e,"class","flex justify-center my-6"),y(e,w,5,0,133)},m:function(u,f){E(u,e,f),k(e,s),k(s,a),k(s,o),k(s,l),k(s,n),k(s,c),E(u,C,f),ct(m,u,f),v=!0},p:function(u,[f]){var z,M;(!v||f&1)&&U(l,"step-primary",(z=u[0].route.id)==null?void 0:z.match(/username|photo/g)),(!v||f&1)&&U(c,"step-primary",(M=u[0].route.id)==null?void 0:M.includes("photo"));const h={};f&4&&(h.$$scope={dirty:f,ctx:u}),m.$set(h)},i:function(u){v||(N(m.$$.fragment,u),v=!0)},o:function(u){L(m.$$.fragment,u),v=!1},d:function(u){u&&(_(e),_(C)),ut(m,u)}};return R("SvelteRegisterBlock",{block:O,id:q.name,type:"component",source:"",ctx:i}),O}function dt(i,e,s){let a;G(A,"page"),H(i,A,t=>s(0,a=t));let{$$slots:r={},$$scope:o}=e;Y("Layout",r,["default"]);const l=[];return Object.keys(e).forEach(t=>{!~l.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Layout> was created with unknown prop '${t}'`)}),i.$$set=t=>{"$$scope"in t&&s(2,o=t.$$scope)},i.$capture_state=()=>({page:A,AnimatedRoute:tt,$page:a}),[a,r,o]}class gt extends W{constructor(e){super(e),X(this,e,dt,q,x,{}),R("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:q.name})}}export{gt as component};
