!function(e){function o(o){for(var a,s,r=o[0],p=o[1],d=o[2],i=0,b=[];i<r.length;i++)s=r[i],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);for(f&&f(o);b.length;)b.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,o=0;o<t.length;o++){for(var n=t[o],a=!0,r=1;r<n.length;r++){var p=n[r];0!==c[p]&&(a=!1)}a&&(t.splice(o--,1),e=s(s.s=n[0]))}return e}var a={},c={4:0},t=[];function s(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var o=[],n=c[e];if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((function(o,a){n=c[e]=[o,a]}));o.push(n[2]=a);var t,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=function(e){return s.p+""+({0:"3f9c51db0e99a69da5de198ada429ce3e53719b3",1:"80180511b6555467d8c598e601857f9476012a91",2:"55bdebcb2816818223321aeb5e38b1faa3294592",3:"7d5e1089ec538ed9cd2cff99be08dc04ac94502c",6:"component---src-pages-404-js",7:"component---src-pages-bot-js",8:"component---src-pages-discord-js",9:"component---src-pages-faq-md",10:"component---src-pages-feedback-js",11:"component---src-pages-github-js",12:"component---src-pages-idtga-index-js",13:"component---src-pages-idtga-rules-md",14:"component---src-pages-index-js",15:"component---src-pages-legal-md",16:"component---src-pages-patreon-js",17:"component---src-pages-posts-a-brief-hiatus-md",18:"component---src-pages-posts-dial-in-2020-md",19:"component---src-pages-posts-hello-world-md",20:"component---src-pages-posts-idtga-dec-2020-md",21:"component---src-pages-posts-idtga-feb-2021-md",22:"component---src-pages-posts-idtga-jan-2021-md",23:"component---src-pages-posts-idtga-june-2020-md",24:"component---src-pages-posts-idtga-mar-2021-md",25:"component---src-pages-posts-idtga-may-2021-md",26:"component---src-pages-posts-index-js",27:"component---src-pages-posts-redesign-md",28:"component---src-pages-posts-site-refresh-md",29:"component---src-pages-posts-storymode-final-md",30:"component---src-pages-posts-weakest-link-tips-md",31:"component---src-pages-posts-wl-july-2020-md",32:"component---src-pages-posts-wl-sep-2020-md",33:"component---src-pages-profile-index-js",34:"component---src-pages-profile-login-error-js",35:"component---src-pages-profile-login-index-js",36:"component---src-pages-signup-complete-js",37:"component---src-pages-signup-index-js",38:"component---src-pages-staff-0-djam-md",39:"component---src-pages-staff-1-lepto-md",40:"component---src-pages-staff-2-zada-md",41:"component---src-pages-staff-apply-js",42:"component---src-pages-staff-index-js",43:"component---src-pages-twitch-js",44:"component---src-pages-twitter-js",45:"component---src-pages-wl-index-js",46:"component---src-pages-wl-rules-md",47:"component---src-pages-youtube-js"}[e]||e)+"-"+{0:"2e502d556017b929d031",1:"608c2ff846cd88f64758",2:"c654788c71871f5b2aed",3:"22d289b2ac2d91dd5372",6:"1233dd84a36fb0e3563f",7:"fbd9bf0056b929432077",8:"7d3cc0011aea22bef14b",9:"c701bdbe1804dabe95f1",10:"2e8c4bc95a1b2f974c9f",11:"dbebb3ba36b20000f7e8",12:"f4f82a8bae9e45ae845e",13:"a2437c9436cbfc3d039c",14:"7a628cbcd192e4e4b752",15:"1508a89e76f1e8d8d12d",16:"3ba60ade4710c033cb3a",17:"499e4a47ac8a211c5c04",18:"14c84d256bd62ee40420",19:"5f15b02bdd5977df8840",20:"e4290976be57f5ab3042",21:"81df2e8eaedffd2022c4",22:"ea74ac5fe81c8f638af0",23:"5738f3469838eb52033e",24:"80a01e9d640645f4b802",25:"4351d0afff84b2a684d3",26:"84068c17398f8d58b0fa",27:"02df1f5e4c83f26e4247",28:"83f02d4ab362df56b04e",29:"cda243629adeb086a3c4",30:"1bc12caa23a0ab069771",31:"a266b94e5c21c19d0f20",32:"c95fd789766537e45f86",33:"f1fa8514bd34b1a4655c",34:"ae59f166221d582c7b57",35:"67b20cb1ee12f7420d91",36:"31167ee5bad3f8e96e65",37:"eb4ccb1e271dd3719a08",38:"8aea699f5b98f9f86136",39:"4c9899927ab93adfaa73",40:"b17ca676167a6a19c5dc",41:"ba9647ca1314f42d8946",42:"e37d72769e010e9f9066",43:"410d340e640b1fe882fe",44:"4a05b553b778ce9d2ffe",45:"c22944493a945463d886",46:"f5a1da48b060fac636db",47:"a84abc5c80fa3e5b8810"}[e]+".js"}(e);var p=new Error;t=function(o){r.onerror=r.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=o&&("load"===o.type?"missing":o.type),t=o&&o.target&&o.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+t+")",p.name="ChunkLoadError",p.type=a,p.request=t,n[1](p)}c[e]=void 0}};var d=setTimeout((function(){t({type:"timeout",target:r})}),12e4);r.onerror=r.onload=t,document.head.appendChild(r)}return Promise.all(o)},s.m=e,s.c=a,s.d=function(e,o,n){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)s.d(n,a,function(o){return e[o]}.bind(null,a));return n},s.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="/",s.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],p=r.push.bind(r);r.push=o,r=r.slice();for(var d=0;d<r.length;d++)o(r[d]);var f=p;n()}([]);