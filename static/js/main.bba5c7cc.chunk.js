(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{355:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},360:function(e,t,a){e.exports=a(481)},365:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),s=(a(365),a(212)),i=a(213),l=a(237),u=a(238),m=a(34),f=["user-read-email","playlist-modify-public","playlist-modify-private"],d=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e},{});window.location.hash="";var p=d,b=a(84),g=a(357),h=a(292),v=a(328),y=a(333),E=a(321),O=a(251),k=a(315),j=a(235),w=a(193),x=a(322),P=a(120),C=a(255),R=a(257),N=a(295),S=a(294),A=a(334),L=a(94),I=a(49),B=localStorage.getItem("state")?Object(L.a)(JSON.parse(localStorage.getItem("state"))):Object(L.a)({token:"",allPlaylists:{},album:{},selectedPlaylists:[],progress:{done:0,total:0,percent:0},errors:[]});Object(I.c)(function(){localStorage.setItem("state",JSON.stringify(B))});var T=B;window.state=B;var _=Object(h.a)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},list:{position:"relative",overflow:"auto",maxHeight:"70vh"}}}),z=Object(L.b)(function(e){var t=_(),a=e.token,o=Object(n.useState)(0),c=Object(b.a)(o,2),s=c[0],i=c[1],l=Object(j.a)({url:"https://api.spotify.com/v1/artists/4SCWiQbJCMTHK737aNUqBJ/albums?offset=0&limit=20&market=CA",method:"GET",headers:{Authorization:"Bearer "+a}}),u=Object(b.a)(l,1)[0],m=u.data,f=u.loading,d=u.error;return f?r.a.createElement("p",null,"Loading..."):d?r.a.createElement("p",null,"Error!"):r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{className:t.list,component:"nav","aria-label":"main mailbox folders"},m.items.map(function(e,t){return r.a.createElement(R.a,{button:!0,selected:s===t,onClick:function(e){return i(a=t),void(T.album=m.items[a]);var a},key:e.id},r.a.createElement(S.a,null,r.a.createElement(A.a,{variant:"square"},r.a.createElement("img",{src:e.images[1].url,alt:"cover"}))),r.a.createElement(N.a,{primary:e.name}))})))}),G=a(42),J=a.n(G),D=a(105),W=a(336),H=a.n(W),q=a(85),F=a.n(q),M=a(342),U=a.n(M),K=a(352),Q=a.n(K),V=a(343),$=a.n(V),X=a(350),Y=a.n(X),Z=a(282),ee=a.n(Z),te=a(281),ae=a.n(te),ne=a(344),re=a.n(ne),oe=a(345),ce=a.n(oe),se=a(347),ie=a.n(se),le=a(348),ue=a.n(le),me=a(349),fe=a.n(me),de=a(353),pe=a.n(de),be=a(346),ge=a.n(be),he=a(351),ve=a.n(he),ye=a(354),Ee=a.n(ye),Oe={Add:Object(n.forwardRef)(function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))}),Check:Object(n.forwardRef)(function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))}),Clear:Object(n.forwardRef)(function(e,t){return r.a.createElement(ae.a,Object.assign({},e,{ref:t}))}),Delete:Object(n.forwardRef)(function(e,t){return r.a.createElement(re.a,Object.assign({},e,{ref:t}))}),DetailPanel:Object(n.forwardRef)(function(e,t){return r.a.createElement(ee.a,Object.assign({},e,{ref:t}))}),Edit:Object(n.forwardRef)(function(e,t){return r.a.createElement(ce.a,Object.assign({},e,{ref:t}))}),Export:Object(n.forwardRef)(function(e,t){return r.a.createElement(ge.a,Object.assign({},e,{ref:t}))}),Filter:Object(n.forwardRef)(function(e,t){return r.a.createElement(ie.a,Object.assign({},e,{ref:t}))}),FirstPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(ue.a,Object.assign({},e,{ref:t}))}),LastPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(fe.a,Object.assign({},e,{ref:t}))}),NextPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(ee.a,Object.assign({},e,{ref:t}))}),PreviousPage:Object(n.forwardRef)(function(e,t){return r.a.createElement(Y.a,Object.assign({},e,{ref:t}))}),ResetSearch:Object(n.forwardRef)(function(e,t){return r.a.createElement(ae.a,Object.assign({},e,{ref:t}))}),Search:Object(n.forwardRef)(function(e,t){return r.a.createElement(ve.a,Object.assign({},e,{ref:t}))}),SortArrow:Object(n.forwardRef)(function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))}),ThirdStateCheck:Object(n.forwardRef)(function(e,t){return r.a.createElement(pe.a,Object.assign({},e,{ref:t}))}),ViewColumn:Object(n.forwardRef)(function(e,t){return r.a.createElement(Ee.a,Object.assign({},e,{ref:t}))})},ke=Object(L.b)(function(e){var t=e.token,a=e.user,o=T.allPlaylists;function c(e,t){return s.apply(this,arguments)}function s(){return(s=Object(D.a)(J.a.mark(function e(a,n){var r,o,c,s,i,l,u,m;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=[],c={},s={},i="";case 4:return e.next=6,F.a.get(r||"https://api.spotify.com/v1/playlists/".concat(a,"/tracks?fields="),{headers:{Authorization:"Bearer "+t}});case 6:l=e.sent,console.log(l),o=o.concat(l.data.items),r=l.data.next;case 10:if(r){e.next=4;break}case 11:for(u in o)m=o[u].track,c[u]={place:u,id:m.id,album:m.album.name},s.hasOwnProperty(m.album.name)?s[m.album.name].trackCount+=1:(s[m.album.name]={name:m.album.name,trackCount:0},i+=", "+m.album.name);return i=i.substring(2),e.abrupt("return",[c,s,i]);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function i(e){return l.apply(this,arguments)}function l(){return(l=Object(D.a)(J.a.mark(function e(t){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){console.log("render time"),o=T.allPlaylists}),Object(n.useEffect)(function(){function e(){return(e=Object(D.a)(J.a.mark(function e(){var n,r,o,s,l,u,m,f,d,p,g,h,v;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return e.next=3,F.a.get(n||"https://api.spotify.com/v1/me/playlists?limit=50",{headers:{Authorization:"Bearer "+t}});case 3:for(s in r=e.sent,console.log(r),o=r.data.items)(l=o[s]).owner.id===a.id&&(T.allPlaylists.hasOwnProperty(l.id)||(T.allPlaylists[l.id]={id:l.id,name:l.name,url:l.external_urls.spotify,tracks_endpoint:l.tracks.href,tracks:{},albumList:"Loading...",albums:{}}));n=r.data.next;case 8:if(n){e.next=1;break}case 9:u=-300,e.t0=J.a.keys(T.allPlaylists);case 12:if((e.t1=e.t0()).done){e.next=30;break}if(m=e.t1.value,"Loading..."!==(f=T.allPlaylists[m]).albumList){e.next=28;break}return e.next=18,i(u);case 18:return e.next=20,c(f.id);case 20:d=e.sent,p=Object(b.a)(d,3),g=p[0],h=p[1],v=p[2],T.allPlaylists[m].tracks=g,T.allPlaylists[m].albums=h,T.allPlaylists[m].albumList=v;case 28:e.next=12;break;case 30:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var u=function(e){return new Promise(function(t){return setTimeout(t,e)})};return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(H.a,{columns:[{title:"Name",field:"name"},{title:"Albums",field:"albumList"}],data:Object.values(o),icons:Oe,options:{showTitle:!1,selection:!0,maxBodyHeight:"60vh",draggable:!1},onSelectionChange:function(e){return T.selectedPlaylists=e}}))}),je=300;function we(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(D.a)(J.a.mark(function e(t){var a,n,r,o,c,s,i,l,u,m,f;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Go time!"),T.progress.done=0,T.progress.total=T.selectedPlaylists.length,T.progress.percent=0,a=0,e.next=7,F.a.get("https://api.spotify.com/v1/albums/".concat(T.album.id,"/tracks"),{headers:{Authorization:"Bearer "+T.token}});case 7:for(n=e.sent,r=n.data,o=[],c=0;c<r.total;c++)o.push(r.items[c].uri);s=0;case 12:if(!(s<T.selectedPlaylists.length)){e.next=36;break}if(-1!==(i=T.selectedPlaylists[s]).albumList.indexOf(T.album.name)){e.next=28;break}return l="start"===t?{uris:o,position:0}:{uris:o},e.prev=16,e.next=19,F.a.post("https://api.spotify.com/v1/playlists/".concat(i.id,"/tracks"),l,{headers:{Authorization:"Bearer "+T.token,"Content-Type":"application/json"}});case 19:for(e.sent,u="start"===t?0:T.allPlaylists[i.id].tracks.length,T.allPlaylists[i.id].albumList="start"===t?"".concat(T.album.name,", ")+T.allPlaylists[i.id].albumList:T.allPlaylists[i.id].albumList+=", ".concat(T.album.name),m=0;m<r.total;m++)f=u+m,T.allPlaylists[i.id].tracks[f]={place:f,id:r.items[m].id,album:r.name};e.next=28;break;case 25:e.prev=25,e.t0=e.catch(16),console.log(e.t0);case 28:return T.progress.done++,T.progress.percent=T.progress.done/T.progress.total*100,a+=je,e.next=33,Pe(a);case 33:s++,e.next=12;break;case 36:case"end":return e.stop()}},e,null,[[16,25]])}))).apply(this,arguments)}function Pe(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(D.a)(J.a.mark(function e(t){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re(t);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Re=function(e){return new Promise(function(t){return setTimeout(t,e)})},Ne=a(329),Se=Object(h.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},item:{margin:5},progressBox:{width:"100%",display:"flex",alignItems:"center"},progress:{flexGrow:"1"}}}),Ae=Object(L.b)(function(e){var t=Se();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.progressBox},r.a.createElement(P.a,{variant:"subtitle1"},"Current Task"),r.a.createElement(Ne.a,{variant:"determinate",value:T.progress.percent,color:"secondary",className:t.progress})),r.a.createElement(k.a,{variant:"contained",color:"primary",className:t.item,onClick:function(){we("start")}},"Add to start"),r.a.createElement(k.a,{variant:"contained",color:"primary",className:t.item,onClick:function(){we("end")}},"Add to end"),r.a.createElement(k.a,{variant:"contained",color:"primary",className:t.item},"Add to start and push last album"),r.a.createElement(k.a,{variant:"contained",color:"primary",className:t.item,onClick:function(){localStorage.setItem("token","")}},"Clear Token"),r.a.createElement(k.a,{variant:"contained",color:"primary",className:t.item,onClick:function(){localStorage.removeItem("state")}},"Reload all playlists"))}),Le=Object(h.a)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary}}}),Ie=function(e){var t=e.token,a=e.user,n=Le();return r.a.createElement("div",{className:n.root},r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:3},r.a.createElement(P.a,{component:"h5"},"Albums"),r.a.createElement(w.a,{className:n.paper},r.a.createElement(z,{token:t}))),r.a.createElement(x.a,{item:!0,xs:9},r.a.createElement(P.a,{component:"h5"},"Playlists"),r.a.createElement(ke,{token:t,user:a})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(Ae,{token:t}))))};function Be(e){var t=e.children,a=e.value,n=e.index,o=Object(g.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),a===n&&r.a.createElement(O.a,{p:3},t))}function Te(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var _e=Object(h.a)(function(e){return{root:{flexGrow:1}}}),ze=function(e){var t=_e(),a=e.token,o=Object(n.useState)(0),c=Object(b.a)(o,2),s=c[0],i=c[1],l={name:"",id:""},u=Object(j.a)({url:"https://api.spotify.com/v1/me",method:"GET",headers:{Authorization:"Bearer "+a}}),m=Object(b.a)(u,2),f=m[0],d=f.data,p=(f.loading,f.error);m[1];d&&(console.log(d),l={name:d.display_name,id:d.id});return""!==l.id?r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(y.a,{value:s,onChange:function(e,t){i(t)},"aria-label":"simple tabs example"},r.a.createElement(E.a,Object.assign({label:"Playlist Albums"},Te(0))),r.a.createElement(E.a,Object.assign({label:"Nothing... for now"},Te(1))))),r.a.createElement(Be,{value:s,index:0},r.a.createElement(Ie,{token:a,user:l})),r.a.createElement(Be,{value:s,index:1},"Item Two")):p?r.a.createElement("div",null,r.a.createElement(k.a,{variant:"contained",color:"primary",onClick:function(){localStorage.setItem("token","")}},"Clear Token")):r.a.createElement("div",null,r.a.createElement("p",null,"Loading..."))},Ge=a(355),Je=a.n(Ge);a(480);function De(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var We=function(e){Object(l.a)(a,e);var t=De(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=p.access_token||localStorage.getItem("token");e&&(this.setState({token:e}),localStorage.setItem("token",e),T.token=e)}},{key:"clearLocalStorage",value:function(){localStorage.setItem("token","")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,!this.state.token&&r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:Je.a,className:"App-logo",alt:"logo"}),r.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("149f235f7ad941419d900b585b05d9e3","&redirect_uri=").concat("http://localhost:3000/redirect","&scope=").concat(f.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify")),this.state.token&&r.a.createElement(ze,{token:this.state.token})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[360,1,2]]]);
//# sourceMappingURL=main.bba5c7cc.chunk.js.map