(this["webpackJsonpredux-reddit-app"]=this["webpackJsonpredux-reddit-app"]||[]).push([[0],{38:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADjklEQVR4Ae3BX2iVZQDH8d85Wxub++eSDIqQ1p+rLFIWIV1Vhhdi2J+rRUE3XbSl68JglNs5tNmKYsNiVCTV1AJxkBR0EWgUShAWKG2VdjFcm5uz1RQ22r5JhPS87zln57zP88698Hw+kud5nud5nud5niPcwpP0MMRJxrjMAgtcZoyTDNHNE9ykktCp5UKKB+jjV5Yywpvcr6LQCVoOrGYXZyjFCO3UqSC6uEJxo5HXmCWKGTLUKQ+6+JfiRJpWprFxnmdJKYQM/1F8uJMTuHCUdTKQ4SrFhae5hCszPK6ryPA/igNl9OPaq6R0BVkMco9KhihkjP20spkmGqmgjFqaeJAdfMIEhQxSTpYAuUYFX5DPJH1sUF6k2MQAf5HPT4TILdIcJrdRWqlSEWigg4sUSW7xFrnM0U21SsD1vMsiRZBLPEUuw6xXBDzEGEuSO9zOLGGHqFFE3MhxliBXSPMtYW+TlgWqOEJBcoXnCHtH1uimILlBA1MEHSItS2RZgtwgS9AwNbJEliXJBeqYwTTHelkiSxHkAjsJ6pYlMhRFLjCMaZRqWSFDkWSP+whqkxUyFE32eB3TJFWyQBclkD1OY+qTBbooiWyxlqANiowuSiRbbMM0psjopGSyxW5M+xURnUQgWxzE1KpI6CQS2eI4ps1KFs5ialKyMI2pUcnCJUwVShb+xFShZOEcpkYlC8OYmpQsfIPpESULH2BqU7LwEqYDSha2YvpdyUIDC5g2Kln4HlO/YsJ7mI7JBXowTVGtGFDPLKYX5QJ3EfSCYkAHQU1ygx8wnWOVHKOBKUzH5AptBO2RY/QT1CJXqGYS0zx3yyE2sYBplAq5QwdBI9TIEVZzhqDn5RJ1jBN0mLQcoIwvCfqNSrlFC2EDskaKjwjbJvc4StgAaVmgnH2EHVEcWMdFwoaoVUTU8zlhE6xVPHiUXH7mHkXARn4hbJEtig97yGWeXlapBNTSy9/ksktxIsWH5DZGO9UqAjXsZILc3lfcKOcz8pliL82klAcpmtnLNPkMklb8KOdjCpngU3awhdtYQyXXUc8dPEw7BxinkH2UaXmQohfXXtHy4jH+wJVptmv5cStf48JX3KxrgxTPcB4b47To2qKB3Vwgigt0UKuVgBraOUUpTtFKrVYW7uUNfmSRwk7TQ7NWLtawnZcZ5DvOMskc80wzygkOkmUrN8jzPM/zPM/zPM+RfwD/UtiuqjXRWQAAAABJRU5ErkJggg=="},42:function(e,t,n){e.exports=n(60)},47:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"clickAnimation",(function(){return T})),n.d(a,"starsAppear",(function(){return J})),n.d(a,"zoomIn",(function(){return _})),n.d(a,"imageContainerLoading",(function(){return P})),n.d(a,"fadeInLeftBig",(function(){return L})),n.d(a,"fadeInRightBig",(function(){return M})),n.d(a,"shutterOutHorizontal",(function(){return D})),n.d(a,"shutterOutHorizontalReverse",(function(){return X})),n.d(a,"tada",(function(){return K})),n.d(a,"heartBeat",(function(){return Q})),n.d(a,"click",(function(){return V})),n.d(a,"jumpCardClick",(function(){return q})),n.d(a,"clickSingleOption",(function(){return Y})),n.d(a,"clickMultipleOptionSelected",(function(){return G})),n.d(a,"clickMultipleOptionUnselected",(function(){return Z}));var r=n(0),i=n.n(r),c=n(14),o=n.n(c);n(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(7),l=n(5),d=n(8),u=n(9),p=n(10),f=n(20),m=n(16),h=n(32),g=n(33),b=n(2),x=n(34),j=n.n(x),O="REQUEST_POSTS",w="RECEIVE_POSTS",y="SELECT_SUBREDDIT",v="INVALIDATE_SUBREDDIT";function k(e){return function(t){return t(function(e){return{type:O,subreddit:e}}(e)),j()("https://www.reddit.com/r/".concat(e,".json")).then((function(e){return e.json()})).then((function(n){return t(function(e,t){return{type:w,subreddit:e,posts:t.data.children.map((function(e){return e.data})),receivedAt:Date.now()}}(e,n))}))}}function S(e){return function(t,n){if(function(e,t){var n=e.postsBySubreddit[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(k(e))}}var C=Object(m.c)({postsBySubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case w:case O:return Object.assign({},e,Object(b.a)({},t.subreddit,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,{didInvalidate:!0});case O:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case w:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}({isFetching:!1,didInvalidate:!1,items:[]},t)));default:return e}},selectedSubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.subreddit;default:return e}}}),E=Object(g.createLogger)();var A,U,B,I=n(3),R=n(68),W=n(69),z=Object(W.a)({picker:{display:"flex",justifyContent:"center"},picker__Container:{display:"flex",justifyContent:"center","& select":{borderRadius:"4px",padding:"8px 12px",letterSpacing:.5,backgroundColor:"#2f67e3",fontSize:"20px",border:"0.5px solid white",color:"white",width:"max-content","& option":{textAlign:"center",fontSize:20,background:"rgba(0, 0, 0, 0.3)",color:"#fff !important",textShadow:"0 1px 0 rgba(0, 0, 0, 0.4)","&:selected":{color:"white"}}}},optionContainer:{minWidth:200,color:"black !important"}}),F=n(4),N=n(35),H=n(11),T={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}},J={"0%":{opacity:0},"100%":{opacity:1}},_={"0%":{opacity:0,transform:"scale(0)"},"100%":{opacity:1,transform:"scale(1)"}},P={"0%":{backgroundColor:"#e0e0e0"},"50%":{backgroundColor:"#eeeeee"},"100%":{backgroundColor:"#e0e0e0"}},L={from:{opacity:0,transform:"translate3d(-100%, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}},M={from:{opacity:0,transform:"translate3d(100%, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}},D={from:{left:"50%",right:"50%"},to:{left:"0",right:"0"}},X={from:{left:"0",right:"0"},to:{left:"50%",right:"50%"}},K={from:{transform:"scale3d(1, 1, 1)"},"10%,20%":{transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},"30%,50%,70%,90%":{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},"40%,60%,80%":{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},to:{transform:"scale3d(1, 1, 1)"}},Q={"0%":{transform:"scale(1)"},"14%":{transform:"scale(1.1)"},"28%":{transform:"scale(1)"},"42%":{transform:"scale(1.1)"},"70%":{transform:"scale(1)"}},V={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}},q={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}},Y={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.975)"},"100%":{transform:"scale(1)"}},G={"0%":{backgroundSize:"0px 0px",backgroundPositionX:"calc(100% - 12px)"},"100%":{backgroundSize:"24px 24px",backgroundPositionX:"100%"}},Z={"0%":{backgroundSize:"0px 0px",backgroundPositionX:"calc(100% - 12px)"},"100%":{backgroundSize:"24px 24px",backgroundPositionX:"100%"}},$=["xs","sm","md","lg","xl"],ee={xs:0,sm:600,md:960,lg:1280,xl:1920},te=function(e){return{fontFamily:e}},ne=(te("'ProximaNova-Regular', sans-serif"),te("'ProximaNova-RegularCondensed', sans-serif"),te("'AvenirNextCondensed-Bold', sans-serif"),te("'Roboto-Regular', sans-serif"),function(e,t){return t?"@media only screen and (max-width: ".concat(t,"px) and (min-width: ").concat(e,"px)"):"@media only screen and (min-width: ".concat(e,"px)")}),ae=function(){return ne(ee.md)},re=function(){return ne(ee.lg)},ie=["flex-start","center","flex-end","stretch","baseline"],ce=["stretch","center","flex-start","flex-end","space-between","space-around"],oe=["row","row-reverse","column","column-reverse"],se=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40],le=["flex-start","center","flex-end","space-between","space-around","space-evenly"],de=["nowrap","wrap","wrap-reverse"],ue=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],pe={width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box"},fe={margin:"0",boxSizing:"border-box"},me=function(e){return"direction-xs-".concat(e)},he=function(e){return"wrap-xs-".concat(e)},ge=function(e){return"align-items-xs-".concat(e)},be=function(e){return"align-content-xs-".concat(e)},xe=function(e){return"justify-content-xs-".concat(e)},je=function(e){return"spacing-xs-".concat(e)},Oe=function(e,t){return"grid-".concat(t,"-").concat(e)},we=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.container,n=e.item,a=e.children,i=e.className,c=e.xs,o=e.sm,s=e.md,l=e.lg,d=e.xl,u=e.spacing,p=e.justify,f=e.alignContent,m=e.alignItems,h=e.wrap,g=e.direction,b=e.classes,x=e.gridRef,j=Object(F.a)(e,["container","item","children","className","xs","sm","md","lg","xl","spacing","justify","alignContent","alignItems","wrap","direction","classes","gridRef"]);if(t){var O=["grid-container"];return i&&O.push(i),u&&O.push(b[je(u)]),p&&O.push(b[xe(p)]),f&&O.push(b[be(f)]),m&&O.push(b[ge(m)]),h&&O.push(b[he(h)]),g&&O.push(b[me(g)]),r.createElement("div",Object.assign({className:O.join(" "),ref:x},j)," ",a," ")}if(n){var w=["grid-item"];return i&&w.push(i),c&&w.push(b[Oe(c,"xs")]),o&&w.push(b[Oe(o,"sm")]),s&&w.push(b[Oe(s,"md")]),l&&w.push(b[Oe(l,"lg")]),d&&w.push(b[Oe(d,"xl")]),r.createElement("div",Object.assign({className:Object(N.values)(w).join(" "),ref:x},j)," ",a," ")}throw"grid should be either container or item"}}]),t}(r.Component),ye=function(){var e,t=oe.reduce((function(e,t){return Object(H.a)({},e,Object(b.a)({},me(t),{flexDirection:t}))}),{}),n=de.reduce((function(e,t){return Object(H.a)({},e,Object(b.a)({},he(t),{flexWrap:t}))}),{}),a=ie.reduce((function(e,t){return Object(H.a)({},e,Object(b.a)({},ge(t),{alignItems:t}))}),{}),r=ce.reduce((function(e,t){return Object(H.a)({},e,Object(b.a)({},be(t),{alignContent:t}))}),{}),i=le.reduce((function(e,t){return Object(H.a)({},e,Object(b.a)({},xe(t),{justifyContent:t}))}),{}),c=se.reduce((function(e,t){var n=je(t),a=Object(b.a)({},n,Object(b.a)({width:"calc(100% + ".concat(t,"px)"),margin:"-".concat(t/2,"px")},"&>.grid-item",{padding:"".concat(t/2,"px")}));return Object(H.a)({},e,{},a)}),{}),o=$.reduce((function(e,t){var n=ue.reduce((function(e,n){if("number"===typeof n){var a=n/12*100;return Object(H.a)({},e,Object(b.a)({},Oe(n,t),{flexGrow:0,maxWidth:"".concat(a,"%"),flexBasis:"".concat(a,"%")}))}return"auto"===n?Object(H.a)({},e,Object(b.a)({},Oe(n,t),{flexGrow:0,maxWidth:"none",flexBasis:"auto"})):Object(H.a)({},e,Object(b.a)({},Oe(n,t),{flexGrow:1,maxWidth:"none",flexBasis:"auto"}))}),{}),a=ee[t];return a&&(n=Object(b.a)({},ne(a),n)),Object(H.a)({},e,{},n)}),{});return Object(H.a)({"@global":(e={},Object(b.a)(e,".grid-container",Object(H.a)({},pe)),Object(b.a)(e,".grid-item",fe),e),zeroMinWidth:{minWidth:0}},t,{},n,{},a,{},r,{},i,{},c,{},o)}(),ve=Object(R.a)(ye)(we),ke=n(39),Se=(Object(ke.a)(),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.options,i=e.classes;return r.createElement(ve,{container:!0,spacing:16,className:i.picker},r.createElement(ve,{item:!0,xs:12},r.createElement("h1",null,t)),r.createElement(ve,{item:!0,xs:12,className:i.picker__Container},r.createElement("select",{onChange:function(e){return n(e.target.value)},value:t},a.map((function(e){return r.createElement("option",{value:e,key:e},e)})))))}}]),t}(r.Component)),Ce=Object(R.a)(z)(Se),Ee=Object(W.a)({posts:Object(b.a)({marginTop:4},ae(),{marginTop:16}),posts__gridItem:(A={padding:"8px 4px !important"},Object(b.a)(A,ae(),{padding:"8px !important"}),Object(b.a)(A,re(),{padding:"12px !important"}),A),postContainer:{display:"flex",alignContent:"center",boxShadow:"0 0 4px #ffffff85",backgroundColor:"rgba(255,255,255,0.8)",border:"0.5px solid white",cursor:"pointer",flexWrap:"wrap",textAlign:"center",color:"black",borderRadius:8,transition:"all .15s ease-in-out","&:hover":{transform:"scale(1.04)",boxShadow:"0px 0px 6px white"},"& img":{width:"100%",height:"100%",borderRadius:"8px 0px 0px 8px"}},post__heading:(U={fontSize:16,width:"100%",fontFamily:"'Open Sans', sans-serif",padding:8,textAlign:"center",margin:"0 !important"},Object(b.a)(U,ae(),{fontSize:18}),Object(b.a)(U,re(),{fontSize:20}),U),post__headingText:{color:"black !important",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",lineHeight:1.5}}),Ae=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.posts;return r.createElement(ve,{container:!0,spacing:16,className:t.posts},this.props.posts.map((function(e,n){return r.createElement(ve,{item:!0,xs:12,sm:6,md:6,lg:4,xl:3,className:t.posts__gridItem},r.createElement(ve,{container:!0,spacing:0,className:t.postContainer,onClick:function(){return window.open(e.url,"_blank")}},r.createElement(ve,{item:!0,xs:4},r.createElement("img",{src:"https://source.unsplash.com/200x200/?".concat(e.title)})),r.createElement(ve,{item:!0,xs:8,className:t.post__heading},r.createElement("div",{key:n,style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.createElement("p",{className:t.post__headingText},(a=e.title)&&(a=a.trim())&&a.length>0?a[0].toLocaleUpperCase()+a.substr(1).toLocaleLowerCase():"")))));var a})))}}]),t}(r.Component),Ue=Object(R.a)(Ee)(Ae),Be=Object(W.a)({asyncApp:{textAlign:"left",color:"#282828",width:"100%",margin:"auto",fontFamily:"'Open Sans', sans-serif !important",padding:"8px","& h1":(B={textAlign:"center",color:"white",textTransform:"uppercase",padding:"12px 8px",letterSpacing:12,fontSize:24},Object(b.a)(B,ae(),{fontSize:30}),Object(b.a)(B,re(),{fontSize:36}),Object(b.a)(B,"fontWeight",900),Object(b.a)(B,"margin","0"),B),"& h2":Object(b.a)({fontSize:16,width:"100%",color:"white",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,height:"56px",WebkitBoxOrient:"vertical",lineHeight:1.5,textAlign:"center",margin:"12px"},ae(),{fontSize:18})},headerContainer:{display:"flex",flexWrap:"wrap",color:"white",justifyContent:"center"},asyncApp__subHeading:{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center",color:"white"},subHeading__text:{color:"white",display:"flex",alignItems:"center"},buttonContainer:{border:"0.5px solid white",fontFamily:"'Open Sans', sans-serif !important",letterSpacing:1.5,fontWeight:700,backgroundColor:"#E80000"},asyncApp__refreshIcon:{height:32,width:32,marginLeft:8,cursor:"pointer",transition:"all .2s ease-in-out","&:hover":{transform:"scale(1.25)"}}}),Ie=n(38),Re=n.n(Ie),We=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(I.a)(n)),n.handleRefreshClick=n.handleRefreshClick.bind(Object(I.a)(n)),n.state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.dispatch)(S(e.selectedSubreddit))}},{key:"componentDidUpdate",value:function(e){if(this.props.selectedSubreddit!==e.selectedSubreddit){var t=this.props;(0,t.dispatch)(S(t.selectedSubreddit))}}},{key:"handleChange",value:function(e){this.props.dispatch({type:y,subreddit:e}),this.props.dispatch(S(e))}},{key:"handleRefreshClick",value:function(e){e.preventDefault();var t=this.props,n=t.dispatch,a=t.selectedSubreddit;n({type:v,subreddit:a}),n(S(a))}},{key:"render",value:function(){var e=this.props,t=e.selectedSubreddit,n=e.posts,a=e.isFetching,i=e.lastUpdated,c=e.classes;return r.createElement(ve,{container:!0,spacing:16,className:c.asyncApp},r.createElement(ve,{item:!0,xs:12,className:c.headerContainer},r.createElement(Ce,{value:t,onChange:this.handleChange,options:["ReactJS","Frontend","Reduxjs","Photography"]})),r.createElement(ve,{item:!0,xs:12,className:c.asyncApp__subHeading},i&&r.createElement("div",{className:c.subHeading__text},"Last updated at ",(new Date).toLocaleTimeString(),"."," ",!a&&r.createElement("img",{src:Re.a,onClick:this.handleRefreshClick,className:c.asyncApp__refreshIcon}))),a&&0===n.length&&r.createElement("h2",null,"Loading..."),!a&&0===n.length&&r.createElement("h2",null,"Empty."),n.length>0&&r.createElement(ve,{item:!0,xs:12,style:{opacity:a?.5:1}},r.createElement(Ue,{posts:n})))}}]),t}(r.Component),ze=Object(R.a)(Be)(We);var Fe=Object(f.b)((function(e){var t=e.selectedSubreddit,n=e.postsBySubreddit,a=e.classes,r=n[t]||{isFetching:!0,items:[]},i=r.isFetching,c=r.lastUpdated;return{selectedSubreddit:t,posts:r.items,isFetching:i,lastUpdated:c,classes:a}}))(ze),Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(m.d)(C,e,Object(m.a)(h.a,E))}(),He=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{store:Ne},i.a.createElement(Fe,null))}}]),t}(r.Component);o.a.render(i.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.127ea7b8.chunk.js.map