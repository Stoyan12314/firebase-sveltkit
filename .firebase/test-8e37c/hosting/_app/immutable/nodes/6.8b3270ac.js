import{s as le,v as G,r as H,e as J,g as w,c as U,h as C,i as B,d as N,A as E,k as T,C as K,D as oe,E as ae,l as P,m as R,z as Y}from"../chunks/scheduler.37b8a958.js";import{S as ce,i as ue,d as S,v as fe,j as re,k as me,m as de,b as he,t as _e,l as pe,a as y,e as b,g as k,n as g,p as O,s as I}from"../chunks/index.e829ca3c.js";import{A as $}from"../chunks/AuthCheck.af040952.js";import{e as j,u as L,c as z,D as V,l as Q,N as X}from"../chunks/firebase.bc1fd833.js";const be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{console:ge}=be,A="src/routes/login/username/+page.svelte";function ee(i){let e,t,a,n,o,s,l,u,D,f=i[1]&&q(i),m=!i[3]&&i[5]&&F(i),d=i[3]&&!i[2]&&!i[1]&&M(i),h=i[2]&&W(i);const v={c:function(){e=w("form"),t=w("input"),a=U(),n=w("div"),f&&f.c(),o=U(),m&&m.c(),s=U(),d&&d.c(),l=U(),h&&h.c(),this.h()},l:function(c){e=C(c,"FORM",{class:!0});var p=B(e);t=C(p,"INPUT",{type:!0,placeholder:!0,class:!0}),a=N(p),n=C(p,"DIV",{class:!0});var r=B(n);f&&f.l(r),o=N(r),m&&m.l(r),s=N(r),d&&d.l(r),l=N(r),h&&h.l(r),r.forEach(b),p.forEach(b),this.h()},h:function(){k(t,"type","text"),k(t,"placeholder","Username"),k(t,"class","input w-full"),E(t,"input-error",!i[3]&&i[5]),E(t,"input-warning",i[4]),E(t,"input-success",i[2]&&i[3]&&!i[1]),T(t,A,69,6,1832),k(n,"class","my-4 min-h-16 px-8 w-full"),T(n,A,79,6,2164),k(e,"class","w-2/5"),T(e,A,68,4,1761)},m:function(c,p){y(c,e,p),g(e,t),K(t,i[0]),g(e,a),g(e,n),f&&f.m(n,null),g(n,o),m&&m.m(n,null),g(n,s),d&&d.m(n,null),g(n,l),h&&h.m(n,null),u||(D=[O(t,"input",i[9]),O(t,"input",i[7],!1,!1,!1,!1),O(e,"submit",oe(i[8]),!1,!0,!1,!1)],u=!0)},p:function(c,p){p&1&&t.value!==c[0]&&K(t,c[0]),p&40&&E(t,"input-error",!c[3]&&c[5]),p&16&&E(t,"input-warning",c[4]),p&14&&E(t,"input-success",c[2]&&c[3]&&!c[1]),c[1]?f?f.p(c,p):(f=q(c),f.c(),f.m(n,o)):f&&(f.d(1),f=null),!c[3]&&c[5]?m||(m=F(c),m.c(),m.m(n,s)):m&&(m.d(1),m=null),c[3]&&!c[2]&&!c[1]?d?d.p(c,p):(d=M(c),d.c(),d.m(n,l)):d&&(d.d(1),d=null),c[2]?h?h.p(c,p):(h=W(c),h.c(),h.m(n,null)):h&&(h.d(1),h=null)},d:function(c){c&&b(e),f&&f.d(),m&&m.d(),d&&d.d(),h&&h.d(),u=!1,ae(D)}};return S("SvelteRegisterBlock",{block:v,id:ee.name,type:"else",source:"(59:2) {:else}",ctx:i}),v}function te(i){let e,t,a,n,o=i[6].username+"",s,l,u,D="(Usernames cannot be changed)",f,m,d="Upload Profile Image";const h={c:function(){e=w("p"),t=P("Your username is "),a=w("span"),n=P("@"),s=P(o),l=U(),u=w("p"),u.textContent=D,f=U(),m=w("a"),m.textContent=d,this.h()},l:function(_){e=C(_,"P",{class:!0});var c=B(e);t=R(c,"Your username is "),a=C(c,"SPAN",{class:!0});var p=B(a);n=R(p,"@"),s=R(p,o),p.forEach(b),c.forEach(b),l=N(_),u=C(_,"P",{class:!0,["data-svelte-h"]:!0}),Y(u)!=="svelte-9l80or"&&(u.textContent=D),f=N(_),m=C(_,"A",{class:!0,href:!0,["data-svelte-h"]:!0}),Y(m)!=="svelte-vogdig"&&(m.textContent=d),this.h()},h:function(){k(a,"class","text-success font-bold"),T(a,A,61,23,1516),k(e,"class","text-lg"),T(e,A,60,4,1472),k(u,"class","text-sm"),T(u,A,65,4,1615),k(m,"class","btn btn-primary"),k(m,"href","/login/photo"),T(m,A,66,4,1673)},m:function(_,c){y(_,e,c),g(e,t),g(e,a),g(a,n),g(a,s),y(_,l,c),y(_,u,c),y(_,f,c),y(_,m,c)},p:function(_,c){c&64&&o!==(o=_[6].username+"")&&I(s,o)},d:function(_){_&&(b(e),b(l),b(u),b(f),b(m))}};return S("SvelteRegisterBlock",{block:h,id:te.name,type:"if",source:"(51:2) {#if $userData?.username}",ctx:i}),h}function q(i){let e,t,a,n;const o={c:function(){e=w("p"),t=P("Checking availability of @"),a=P(i[0]),n=P("..."),this.h()},l:function(l){e=C(l,"P",{class:!0});var u=B(e);t=R(u,"Checking availability of @"),a=R(u,i[0]),n=R(u,"..."),u.forEach(b),this.h()},h:function(){k(e,"class","text-secondary"),T(e,A,81,10,2238)},m:function(l,u){y(l,e,u),g(e,t),g(e,a),g(e,n)},p:function(l,u){u&1&&I(a,l[0])},d:function(l){l&&b(e)}};return S("SvelteRegisterBlock",{block:o,id:q.name,type:"if",source:"(72:8) {#if loading}",ctx:i}),o}function F(i){let e,t="must be 3-16 characters long, alphanumeric only";const a={c:function(){e=w("p"),e.textContent=t,this.h()},l:function(o){e=C(o,"P",{class:!0,["data-svelte-h"]:!0}),Y(e)!=="svelte-1wurl8l"&&(e.textContent=t),this.h()},h:function(){k(e,"class","text-error text-sm"),T(e,A,85,10,2373)},m:function(o,s){y(o,e,s)},d:function(o){o&&b(e)}};return S("SvelteRegisterBlock",{block:a,id:F.name,type:"if",source:"(76:8) {#if !isValid && isTouched}",ctx:i}),a}function M(i){let e,t,a,n;const o={c:function(){e=w("p"),t=P("@"),a=P(i[0]),n=P(" is not available"),this.h()},l:function(l){e=C(l,"P",{class:!0});var u=B(e);t=R(u,"@"),a=R(u,i[0]),n=R(u," is not available"),u.forEach(b),this.h()},h:function(){k(e,"class","text-warning text-sm"),T(e,A,91,10,2560)},m:function(l,u){y(l,e,u),g(e,t),g(e,a),g(e,n)},p:function(l,u){u&1&&I(a,l[0])},d:function(l){l&&b(e)}};return S("SvelteRegisterBlock",{block:o,id:M.name,type:"if",source:"(82:8) {#if isValid && !isAvailable && !loading}",ctx:i}),o}function W(i){let e,t,a;const n={c:function(){e=w("button"),t=P("Confirm username @"),a=P(i[0]),this.h()},l:function(s){e=C(s,"BUTTON",{class:!0});var l=B(e);t=R(l,"Confirm username @"),a=R(l,i[0]),l.forEach(b),this.h()},h:function(){k(e,"class","btn btn-success"),T(e,A,97,10,2706)},m:function(s,l){y(s,e,l),g(e,t),g(e,a)},p:function(s,l){l&1&&I(a,s[0])},d:function(s){s&&b(e)}};return S("SvelteRegisterBlock",{block:n,id:W.name,type:"if",source:"(88:8) {#if isAvailable}",ctx:i}),n}function ne(i){let e;function t(s,l){var u;return(u=s[6])!=null&&u.username?te:ee}let a=t(i),n=a(i);const o={c:function(){n.c(),e=J()},l:function(l){n.l(l),e=J()},m:function(l,u){n.m(l,u),y(l,e,u)},p:function(l,u){a===(a=t(l))&&n?n.p(l,u):(n.d(1),n=a(l),n&&(n.c(),n.m(e.parentNode,e)))},d:function(l){l&&b(e),n.d(l)}};return S("SvelteRegisterBlock",{block:o,id:ne.name,type:"slot",source:"(50:0) <AuthCheck>",ctx:i}),o}function Z(i){let e,t;e=new $({props:{$$slots:{default:[ne]},$$scope:{ctx:i}},$$inline:!0});const a={c:function(){re(e.$$.fragment)},l:function(o){me(e.$$.fragment,o)},m:function(o,s){de(e,o,s),t=!0},p:function(o,[s]){const l={};s&4223&&(l.$$scope={dirty:s,ctx:o}),e.$set(l)},i:function(o){t||(he(e.$$.fragment,o),t=!0)},o:function(o){_e(e.$$.fragment,o),t=!1},d:function(o){pe(e,o)}};return S("SvelteRegisterBlock",{block:a,id:Z.name,type:"component",source:"",ctx:i}),a}const x=/^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;function ke(i,e,t){let a,n,o,s,l;G(L,"user"),H(i,L,r=>t(11,s=r)),G(z,"userData"),H(i,z,r=>t(6,l=r));let{$$slots:u={},$$scope:D}=e;fe("Page",u,[]);let f="",m=!1,d=!1,h;async function v(){t(2,d=!1),clearTimeout(h),t(1,m=!0),h=setTimeout(async()=>{console.log("checking availability of",f);const r=V(j,"usernames",f),ie=await Q(r).then(se=>se.exists());t(2,d=!ie),t(1,m=!1)},500)}async function _(){console.log("confirming username",f);const r=X(j);r.set(V(j,"usernames",f),{uid:s==null?void 0:s.uid}),r.set(V(j,"users",s.uid),{username:f,photoURL:(s==null?void 0:s.photoURL)??null,published:!0,bio:"I am the Walrus",links:[{title:"Test Link",url:"https://kung.foo",icon:"custom"}]}),await r.commit(),t(0,f=""),t(2,d=!1)}const c=[];Object.keys(e).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&ge.warn(`<Page> was created with unknown prop '${r}'`)});function p(){f=this.value,t(0,f)}return i.$capture_state=()=>({AuthCheck:$,db:j,user:L,userData:z,doc:V,getDoc:Q,writeBatch:X,re:x,username:f,loading:m,isAvailable:d,debounceTimer:h,checkAvailability:v,confirmUsername:_,isValid:a,isTaken:o,isTouched:n,$user:s,$userData:l}),i.$inject_state=r=>{"username"in r&&t(0,f=r.username),"loading"in r&&t(1,m=r.loading),"isAvailable"in r&&t(2,d=r.isAvailable),"debounceTimer"in r&&(h=r.debounceTimer),"isValid"in r&&t(3,a=r.isValid),"isTaken"in r&&t(4,o=r.isTaken),"isTouched"in r&&t(5,n=r.isTouched)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{i.$$.dirty&1&&t(3,a=(f==null?void 0:f.length)>2&&f.length<16&&x.test(f)),i.$$.dirty&1&&t(5,n=f.length>0),i.$$.dirty&14&&t(4,o=a&&!d&&!m)},[f,m,d,a,o,n,l,v,_,p]}class Te extends ce{constructor(e){super(e),ue(this,e,ke,Z,le,{}),S("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Z.name})}}export{Te as component};