(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={speed:"500ms"}},function(e,t,a){e.exports=a(23)},,,,,,,,,function(e,t,a){e.exports={speed:"500ms"}},function(e,t,a){e.exports={speed:"500ms"}},function(e,t,a){e.exports={speed:"500ms"}},function(e,t,a){e.exports={speed:"500ms"}},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=a(2),u=a(1),m=a.n(u),f=a(3),d=a(4),p=a.n(d),v=a(5),h=a(6),b=[{date:"22/02/19",cut:["0:00","15:45"],schedule:function(){return a.e(3).then(a.bind(null,25))}},{date:"23/02/19",cut:["2:15","8:15"],schedule:function(){return a.e(4).then(a.bind(null,26))}},{date:"24/02/19",cut:["2:15","8:30"],schedule:function(){return a.e(5).then(a.bind(null,27))}}],g=(a(19),new Array(97).fill(0)),_=function(e){var t,a;e&&(t=m.a.utc(e[0],"H:mm").add(5,"hours"),a=m.a.utc(e[1],"H:mm").add(5,"hours"));var n=m()();return e&&n>t&&n<a?(t.subtract(5,"hours"),47*(3600*t.hours()+60*t.minutes()+t.seconds())/900):47*(3600*n.hours()+60*n.minutes()+n.seconds()-(e&&n>a?function(e,t){var a=3600*e.hours()+60*e.minutes()+e.seconds();return 3600*t.hours()+60*t.minutes()+t.seconds()-a}(t,a):0))/900},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00",a=e%12||12,n="".concat(t).padStart(2,"0"),c=e>12&&e<24?"pm":"am";return"".concat(a,":").concat(n).concat(c)},E=function(e,t,a,n){var c,r,o;if(n){var i=m.a.utc("00:00","H:mm"),s=m.a.utc(n[0],"H:mm").diff(i,"minute")/15;r=(o=m.a.utc(n[1],"H:mm").diff(i,"minute")/15)-s}var l="TOP"===a?0:4*e.format("H")+e.format("m")/15;switch(a){case"TOP":c=t.diff(m.a.utc("00:00","H:mm"),"minute");break;case"BOTTOM":c=m.a.utc("24:00","H:mm").diff(e,"minute");break;default:c=t.diff(e,"minute")}return[c/15,l>o?l-r:l]},y=function(){var e=Object(v.a)(p.a.mark(function e(t,a){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b[t].schedule();case 2:n=e.sent,a(n.default);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),O=function(e){var t=e.active,a=e.select,r=m()(b[t].date,"DD/MM/YY"),o=b[t].cut,i=Object(n.useState)(_(o)),s=Object(l.a)(i,2),u=s[0],d=s[1],O=Object(n.useState)(null),j=Object(l.a)(O,2),N=j[0],k=j[1],x=function(){var e=Object(v.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,k);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),M=0===m()().diff(r,"days"),H=function(e){var t=e.target.getAttribute("data-index");a(N[t])};return Object(n.useEffect)(function(){var e;return x(),M&&(e=window.setInterval(function(){return d(_(o))},2e3)),function(){return clearInterval(e)}}),c.a.createElement("section",{className:"cal"},c.a.createElement("h1",{className:"cal__title"},"Schedule - ",r.format("MMMM Do")),c.a.createElement("ul",{className:"cal__list"},M?c.a.createElement("li",{style:{transform:"translate3d(0, ".concat(u-1,"px, 0)")},className:"cal__clock"}):null,N?function(e,t){return g.fill(0),e.map(function(e){for(var a=E(m.a.utc(e.time[0],"H:mm"),m.a.utc(e.time[1],"H:mm"),e.overlap,t),n=0,c=a[1];c<a[1]+a[0];c++)n=Math.max(n,g[c]),g[c]+=1;return Object(h.a)({},e,{meta:a,offset:n})})}(N,o).map(function(e,t){var a=e.title,n=e.location,r=e.meta,o=e.offset,i=e.background,s=e.primary,u=e.secondary,m=Object(l.a)(e.time,2),d=m[0],p=m[1],v=Object(l.a)(r,2),h=v[0],b=v[1],_=Math.max.apply(Math,Object(f.a)(g.slice(b,b+h))),E={transform:"translate3d(".concat(100*o,"%, ").concat(47*b,"px, 0)"),height:"".concat(47*h-1,"px"),width:"".concat(100/(_||1),"%"),backgroundColor:i};return c.a.createElement("li",{key:t,style:E,"data-index":t,onClick:H,className:"cal__item"},c.a.createElement("span",{className:"cal__item-title",style:{color:s}},a),c.a.createElement("span",{className:"cal__item-subtitle",style:{color:u}},n),c.a.createElement("span",{className:"cal__item-time",style:{color:u}},w.apply(void 0,Object(f.a)(d.split(":")))," - ",w.apply(void 0,Object(f.a)(p.split(":")))))}):null,function(e){var t,a,n=m.a.utc("00:00","H:mm");return e&&(t=m.a.utc(e[0],"H:mm").diff(n,"minute")/15,a=m.a.utc(e[1],"H:mm").diff(n,"minute")/15),g.map(function(n,r){return e?r===t?c.a.createElement("li",{key:r,className:"cal__layout"},w(Math.floor(r/4),r%4*15)," - ",w(Math.floor(a/4),a%4*15)):r>t&&r<=a?null:c.a.createElement("li",{key:r,className:"cal__layout"},w(Math.floor(r/4),r%4*15)):c.a.createElement("li",{key:r,className:"cal__layout"},w(Math.floor(r/4),r%4*15))})}(o)))},j=(a(20),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00",a=e%12||12,n="".concat(t).padStart(2,"0"),c=e>12&&e<24?"pm":"am";return"".concat(a,":").concat(n).concat(c)}),N=function(e){var t=e.selected;return c.a.createElement("section",{className:"info"},t?function(e){var t=e.title,a=e.location,r=e.description,o=e.time,i=e.lead;return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"info__title"},t),c.a.createElement("ul",{className:"info__tags"},Object.entries({location:a,time:o,lead:i}).map(function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1],r="time"!==a?n:"".concat(j.apply(void 0,Object(f.a)(n[0].split(":")))," - ").concat(j.apply(void 0,Object(f.a)(n[1].split(":"))));return n?c.a.createElement("li",{key:a,className:"info__tag"},c.a.createElement("span",{className:"info__tag-title"},a.charAt(0).toUpperCase()+a.slice(1),":"),c.a.createElement("span",{className:"info__tag-text"},r)):null})),c.a.createElement("p",{className:"info__text"},r))}(t):c.a.createElement("p",{className:"info__help"},"<<"," Click on an event to learn more."))},k=a(9),x=(parseInt(k.speed.slice(0,-2)),"onPageFade"),M="onPageDone",H=function(e,t){return t.reduce(function(e,t){var a=Object(l.a)(t,2),n=a[0],c=a[1];return e+=n?" ".concat(c||n):""},e)},D=(a(21),function(e){var t=e.className,a=e.state,r=e.children,o=Object(n.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1],f=Object(l.a)(a,2),d=f[0],p=f[1];Object(n.useEffect)(function(){return e=function(){return u(!0)},t=function(){return u(!1)},window.addEventListener(x,e),window.addEventListener(M,t),function(){window.removeEventListener(x,e),window.removeEventListener(M,t)};var e,t});var v=function(e){var t=e.target.getAttribute("data-index");p(parseInt(t))},h=H("page",[[s,"page--fade"],[t]]);return c.a.createElement("div",{className:h},c.a.createElement("ul",{className:"page__days"},b.map(function(e,t){var a=e.date,n=H("page__day",[[t===d,"page__day--active"]]);return c.a.createElement("li",{key:a,"data-index":t,className:n,onClick:v},c.a.createElement("span",{className:"page__day-title"},"Day ",t+1),c.a.createElement("span",{className:"page__day-date"},m()(a,"DD/MM/YY").format("MMM DD")))})),c.a.createElement("div",{className:"page__content"},r))}),S=(a(22),b.findIndex(function(e){return e.date===m()().format("DD/MM/YY")})),A=function(){var e=Object(n.useState)(Math.max(S,0)),t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],o=a[1],i=Object(l.a)(e,1)[0];return c.a.createElement(D,{state:e},c.a.createElement(O,{active:i,select:o}),c.a.createElement(N,{selected:r}))};o.a.render(c.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/assets/schedule",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/assets/schedule","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.875437cf.chunk.js.map