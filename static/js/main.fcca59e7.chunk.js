(this.webpackJsonpmusicorum=this.webpackJsonpmusicorum||[]).push([[0],{134:function(t,e,a){},135:function(t,e,a){},162:function(t,e,a){},163:function(t,e,a){},165:function(t,e,a){},183:function(t,e,a){"use strict";a.r(e);var r=a(1),c=a(0),n=a.n(c),s=a(14),i=a.n(s),o=(a(134),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,240)).then((function(e){var a=e.getCLS,r=e.getFID,c=e.getFCP,n=e.getLCP,s=e.getTTFB;a(t),r(t),c(t),n(t),s(t)}))}),l=a(21),d=a(16),j=a(28),b=a(27),h=(a(135),a(8)),u=a(214),p=a(215),m=a(212),f=a(108),x=a.n(f),O=a(216),g=a(238),v=a(51),y=a.p+"static/media/MLogoTransparent.3a12a2e0.png",k=Object(m.a)((function(t){return{root:{flexGrow:1},title:{flexGrow:1,display:"block",position:"center"},menuButton:Object(h.a)({marginRight:t.spacing(2),display:"block"},t.breakpoints.up("md"),{display:"none"})}}));var w=function(t){var e=k();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(u.a,{position:"static",style:{background:"#fd9e7f"},children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(O.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:t.drawerClickHandler,children:Object(r.jsx)(x.a,{})}),Object(r.jsx)(v.a,{className:e.title,variant:"body1",noWrap:!0,children:Object(r.jsx)("img",{src:y,alt:"logo",style:{height:"2rem"}})}),Object(r.jsx)(O.a,{"aria-label":"display more actions",edge:"end",color:"inherit",children:Object(r.jsx)(g.a,{alt:"Me",src:"https://avatars2.githubusercontent.com/u/17601156?s=460&u=ea34b8affe8b8ec0a95fc74ca65b3cf1ab82137a&v=4"})})]})})})},C=a(221),I=a(15),S=a(217),N=a(218),T=a(220),L=a(219),R=a(109),P=a.n(R),A=Object(m.a)({root:{margin:"1.5rem"},media:{height:0,paddingTop:"100%",borderRadius:"8px"}});var B=function(t){var e=A(),a=Object(c.useState)("rgba(0,0,0,0.5)"),n=Object(I.a)(a,2),s=n[0],i=n[1],o={margin:"0rem 1rem 0.5rem 1rem",color:s};return Object(r.jsx)(S.a,{className:e.root,children:Object(r.jsxs)(N.a,{style:{borderRadius:"8px"},children:[Object(r.jsx)(L.a,{className:e.media,image:t.cover,src:t.cover,name:t.name}),Object(r.jsx)(T.a,{children:Object(r.jsx)(v.a,{gutterBottom:!0,variant:"body1",component:"span",children:t.name})}),Object(r.jsx)(P.a,{onClick:function(){i("#fd9e7f")},style:o})]})})},E=a(222);var D=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={artistList:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/artist/artists?limit=21").then((function(t){if(t.ok)return console.log("SUCCESS on getting artists"),t.json();throw console.log("FAILURE on getting artists"),new Error("Error res.ok false")})).catch((function(t){return console.log("ERROR"+t.message)})).then((function(e){for(var a=[],r=0;r<e.data.length;r++){var c={name:e.data[r].name,coverImage:e.data[r].picture_big,artistId:e.data[r].id,trackList:e.data[r].tracklist};a.push(c)}t.setState({artistList:a})}))}},{key:"render",value:function(){var t=this.state.artistList;return t.length>0?Object(r.jsx)("div",{children:Object(r.jsx)(C.a,{container:!0,children:t.map((function(t){return Object(r.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{justify:"space-between"},children:Object(r.jsx)(B,{name:t.name,cover:t.coverImage},t.artistId)},t.artistId)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})}}]),a}(c.Component),W=a(224),_=a(225),F=a(67),M=a.n(F),U=a(113),z=a.n(U),H=a(112),Z=a.n(H),G=a(114),K=a.n(G),J=a(111),q=a.n(J),Q=a(110),V=a.n(Q),X=a(223),Y=a(37),$=M()((function(){return{wrapper:{paddingTop:"8rem",paddingBottom:"8rem",display:"flex",height:"47%",flexDirection:"column",textAlign:"center"},listItemSelected:{paddingTop:"1rem",paddingBottom:"1rem","&:hover":{color:"#fd9e7f"},color:"rgba(0,0,0,0.3)",flex:"1"},selectedItem:{color:"#fd9e7f"}}}));var tt=function(){var t=$();return Object(r.jsxs)(X.a,{className:t.wrapper,children:[Object(r.jsx)(Y.b,{to:"/explore",style:{textDecoration:"none"},children:Object(r.jsxs)(W.a,{button:!0,className:t.listItemSelected,children:[Object(r.jsx)(V.a,{style:{marginRight:"0.5rem"}}),Object(r.jsx)(_.a,{primary:"Explore"})]},"Search")}),Object(r.jsx)(Y.b,{to:"/artists",style:{textDecoration:"none"},children:Object(r.jsxs)(W.a,{button:!0,className:t.listItemSelected,children:[Object(r.jsx)(q.a,{style:{marginRight:"0.5rem"}}),Object(r.jsx)(_.a,{primary:"Artists"})]},"Artists")}),Object(r.jsx)(Y.b,{to:"/tracks",style:{textDecoration:"none"},children:Object(r.jsxs)(W.a,{button:!0,className:t.listItemSelected,children:[Object(r.jsx)(Z.a,{style:{marginRight:"0.5rem"}}),Object(r.jsx)(_.a,{primary:"Tracks"})]},"Tracks")}),Object(r.jsx)(Y.b,{to:"/podcasts",style:{textDecoration:"none"},children:Object(r.jsxs)(W.a,{button:!0,className:t.listItemSelected,children:[Object(r.jsx)(z.a,{style:{marginRight:"0.5rem"}}),Object(r.jsx)(_.a,{primary:"Podcasts"})]},"Podcasts")}),Object(r.jsx)(Y.b,{to:"/charts",style:{textDecoration:"none"},children:Object(r.jsxs)(W.a,{button:!0,className:t.listItemSelected,children:[Object(r.jsx)(K.a,{style:{marginRight:"0.5rem"}}),Object(r.jsx)(_.a,{primary:"Charts"})]},"Charts")})]})},et=Object(m.a)((function(t){return{root:Object(h.a)({height:"45rem",flexDirection:"column",display:"none"},t.breakpoints.up("md"),{display:"block"})}}));var at=function(){var t=et();return Object(r.jsx)(C.a,{className:t.root,children:Object(r.jsx)(tt,{})})};a(162);var rt=function(t){return Object(r.jsx)("div",{className:"backdrop",onClick:t.clickBackdrop})},ct=a(50),nt=(a(163),M()((function(t){return{toolbar:Object(ct.a)(Object(ct.a)({},t.mixins.toolbar),{},{backgroundColor:"#fd9e7f",color:"#ffffff",marginBottom:"-0.5rem"}),title:{position:"center",flexGrow:1,display:"block",textAlign:"center",padding:"13px"},listItemSelected:{"&:hover":{color:"#fd9e7f"},padding:"1rem 1rem",color:"rgba(0,0,0,0.3)"}}})));var st=function(t){var e="side-drawer";t.showSideDrawer&&(e="side-drawer open");var a=nt();return Object(r.jsxs)("nav",{className:e,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(r.jsx)("div",{className:a.toolbar,children:Object(r.jsx)(v.a,{className:a.title,variant:"h6",noWrap:!0,children:Object(r.jsx)("img",{src:y,alt:"logo",style:{height:"2rem"}})})}),Object(r.jsx)(tt,{})]})},it=a(11),ot=a(226),lt=a(227),dt=a(228),jt=Object(m.a)((function(t){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:"#fd9e7f"},titleBar:{background:"rgba(0,0,0,0.5)"}}}));var bt=function(t){var e=jt();return t.chartPlaylist.length>0?Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(ot.a,{className:e.gridList,cols:2.5,children:t.chartPlaylist.map((function(t){return Object(r.jsxs)(lt.a,{style:{width:"20%"},children:[Object(r.jsx)("img",{src:t.coverImage,alt:t.title}),Object(r.jsx)(dt.a,{title:t.title,subtitle:t.trackNums+" tracks",classes:{root:e.titleBar,title:e.title}})]},t.coverImage)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})},ht=Object(m.a)((function(t){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:"#fd9e7f"},titleBar:{background:"rgba(0,0,0,0.5)"}}}));var ut=function(t){var e=ht();return t.chartPodcastList.length>0?Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(ot.a,{className:e.gridList,cols:2.5,children:t.chartPodcastList.map((function(t){return Object(r.jsxs)(lt.a,{style:{width:"20%"},children:[Object(r.jsx)("img",{style:{},src:t.coverImage,alt:t.title}),Object(r.jsx)(dt.a,{title:t.title,subtitle:t.fans+" fans",classes:{root:e.titleBar,title:e.title}})]},t.coverImage)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})},pt=Object(m.a)((function(t){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:"#fd9e7f"},titleBar:{background:"rgba(0,0,0,0.5)"}}}));var mt=function(t){var e=pt();return t.chartAlbumList.length>0?Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(ot.a,{className:e.gridList,cols:2.5,children:t.chartAlbumList.map((function(t){return Object(r.jsxs)(lt.a,{style:{width:"20%"},children:[Object(r.jsx)("img",{style:{},src:t.coverImage,alt:t.title}),Object(r.jsx)(dt.a,{title:t.title,classes:{root:e.titleBar,title:e.title}})]},t.coverImage)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})},ft=Object(m.a)((function(t){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:"#fd9e7f"},titleBar:{background:"rgba(0,0,0,0.5)"}}}));var xt=function(t){var e=ft();return t.chartTrackList.length>0?Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(ot.a,{className:e.gridList,cols:2.5,children:t.chartTrackList.map((function(t){return Object(r.jsxs)(lt.a,{style:{width:"20%"},children:[Object(r.jsx)("img",{style:{},src:t.coverImage,alt:t.title}),Object(r.jsx)(dt.a,{title:t.title,subtitle:(t.rank/1e3).toFixed()+"K downloads",classes:{root:e.titleBar,title:e.title}})]},t.coverImage)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})};function Ot(t){for(var e=[],a=0;a<t.playlists.data.length;a++){var r={title:t.playlists.data[a].title,trackNums:t.playlists.data[a].nb_tracks,coverImage:t.playlists.data[a].picture_big,chartPlaylistId:t.playlists.data[a].id};e.push(r)}return e}function gt(t){for(var e=[],a=0;a<t.podcasts.data.length;a++){var r={title:t.podcasts.data[a].title,description:t.podcasts.data[a].description,coverImage:t.podcasts.data[a].picture_big,chartPodcastId:t.podcasts.data[a].id,fans:t.podcasts.data[a].fans};e.push(r)}return e}function vt(t){for(var e=[],a=0;a<t.albums.data.length;a++){var r={title:t.albums.data[a].title,coverImage:t.albums.data[a].cover_big,chartAlbumId:t.albums.data[a].id};e.push(r)}return e}function yt(t){for(var e=[],a=0;a<t.tracks.data.length;a++){var r={title:t.tracks.data[a].title_short,rank:t.tracks.data[a].rank,coverImage:t.tracks.data[a].album.cover_big,chartTrackId:t.tracks.data[a].id,preview:t.tracks.data[a].preview};e.push(r)}return e}var kt=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={chartPlaylist:[],chartPodcast:[],chartAlbum:[],chartTrack:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/").then((function(t){if(t.ok)return console.log("SUCCESS on getting charts"),t.json();throw console.log("FAILURE on getting charts"),new Error("Error re.ok false")})).catch((function(t){return console.log("ERROR"+t.message)})).then((function(e){console.log(e),void 0!==e&&t.setState({chartPlaylist:Ot(e),chartPodcast:gt(e),chartAlbum:vt(e),chartTrack:yt(e)})}))}},{key:"render",value:function(){var t=this.state.chartPlaylist,e=this.state.chartPodcast,a=this.state.chartAlbum,c=this.state.chartTrack;return Object(r.jsxs)(C.a,{container:!0,spacing:2,children:[Object(r.jsxs)(C.a,{item:!0,xs:12,style:{marginTop:"1rem",color:"rgba(0,0,0,0.7)"},children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h3",component:"h3",children:"Top Playlists"}),Object(r.jsx)(bt,{chartPlaylist:t},t.chartPlaylistId)]}),Object(r.jsxs)(C.a,{item:!0,xs:12,style:{marginTop:"1rem",color:"rgba(0,0,0,0.7)"},children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h3",component:"h3",children:"Top Podcasts"}),Object(r.jsx)(ut,{chartPodcastList:e},e.chartPodcastId)]}),Object(r.jsxs)(C.a,{item:!0,xs:12,style:{marginTop:"1rem",color:"rgba(0,0,0,0.7)"},children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h3",component:"h3",children:"Top Albums"}),Object(r.jsx)(mt,{chartAlbumList:a},a.chartAlbumId)]}),Object(r.jsxs)(C.a,{item:!0,xs:12,style:{marginTop:"1rem",color:"rgba(0,0,0,0.7)"},children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h3",component:"h3",children:"Top Tracks"}),Object(r.jsx)(xt,{chartTrackList:c},c.chartTrackId)]})]})}}]),a}(c.Component),wt=a(115),Ct=a.n(wt),It=a(239),St=Object(m.a)((function(){return{root:{display:"flex",backgroundColor:"#fd9e7f",flexDirection:"column",justifyContent:"center"},content:{borderRadius:"0px 0px 25px 25px",backgroundColor:"#ffffff",justifyContent:"center",height:"3rem"},controls:{display:"flex",backgroundColor:"#fd9e7f",opacity:"0.8",height:"0.8rem",justifyContent:"center"}}}));var Nt=function(t){var e=St();console.log(t.artistName+" ... "+t.open.title);var a=new Audio("https://cdns-preview-8.dzcdn.net/stream/c-8d3593a371dc66e92d7229f215485a64-5.mp3");return Object(r.jsxs)(S.a,{className:e.root,children:[Object(r.jsxs)(T.a,{className:e.content,children:[Object(r.jsx)(v.a,{component:"h6",variant:"h6",children:t.open.title?t.open.title:"Song title"}),Object(r.jsx)(v.a,{variant:"subtitle1",color:"textSecondary",children:t.artistName?t.artistName:"Artist"})]}),Object(r.jsxs)(T.a,{className:e.controls,children:[Object(r.jsx)(O.a,{"aria-label":"play/pause",onClick:function(){a.play()},children:Object(r.jsx)(Ct.a,{})}),Object(r.jsx)(O.a,{"aria-label":"play/pause",onClick:function(){a.pause()},children:Object(r.jsx)(It.a,{})})]})]})},Tt=Object(m.a)({root:{margin:"1rem"},media:{height:0,paddingTop:"100%",borderRadius:"8px"}});var Lt=function(t){var e=Tt(),a=Object(c.useState)([]),n=Object(I.a)(a,2),s=n[0],i=n[1];return Object(r.jsxs)(S.a,{className:e.root,children:[Object(r.jsxs)(N.a,{style:{borderRadius:"8px"},onClick:function(){i(t)},children:[Object(r.jsx)(L.a,{className:e.media,image:t.cover,src:t.cover,title:t.title,rank:t.rank,preview:t.preview}),Object(r.jsx)(dt.a,{title:t.title,subtitle:Object(r.jsxs)("span",{children:["by: ",t.artistName," "]})})]}),Object(r.jsx)("div",{style:{position:"fixed",bottom:"0",left:"0",width:"100%"},children:Object(r.jsx)(Nt,{open:s,preview:t.preview,title:t.title,artistName:t.artistName})})]})};function Rt(t){for(var e=[],a=0;a<t.data.length;a++){var r={title:t.data[a].title_short,rank:t.data[a].rank,coverImage:t.data[a].album.cover_big,chartTrackId:t.data[a].id,preview:t.data[a].preview,artistName:t.data[a].artist.name};e.push(r)}return e}var Pt=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={chartTrack:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks?limit=50").then((function(t){if(t.ok)return console.log("SUCCESS on getting tracks"),t.json();throw console.log("FAILURE on getting tracks"),new Error("Error re.ok false")})).catch((function(t){return console.log("ERROR"+t.message)})).then((function(e){void 0!==e&&t.setState({chartTrack:Rt(e)})}))}},{key:"render",value:function(){var t=this.state.chartTrack;return t.length>0?Object(r.jsx)("div",{children:Object(r.jsx)(C.a,{container:!0,style:{marginBottom:"10rem"},children:t.map((function(t){return Object(r.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{justify:"space-between"},children:Object(r.jsx)(Lt,{title:t.title,rank:t.rank,cover:t.coverImage,preview:t.preview,artistName:t.artistName},t.chartTrackId)},t.chartTrackId)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})}}]),a}(c.Component),At=a(236),Bt=a(231),Et=a(232),Dt=a(234),Wt=a(233),_t=a(230),Ft=a(229),Mt=Object(m.a)({root:{maxWidth:345,maxHeight:400,margin:"1rem"},media:{height:140}});var Ut=function(t){var e=Mt(),a=Object(c.useState)(!1),n=Object(I.a)(a,2),s=n[0],i=n[1],o=function(){i(!1)};return Object(r.jsxs)(S.a,{className:e.root,children:[Object(r.jsxs)(N.a,{children:[Object(r.jsx)(L.a,{className:e.media,image:t.coverImage,title:t.title}),Object(r.jsxs)(T.a,{children:[Object(r.jsx)(v.a,{noWrap:!0,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(r.jsx)(v.a,{noWrap:!0,variant:"body2",color:"textSecondary",component:"p",children:t.description}),Object(r.jsx)("br",{}),Object(r.jsxs)(v.a,{variant:"body2",color:"textSecondary",component:"p",children:["FANS: ",t.fans]})]})]}),Object(r.jsx)(Ft.a,{children:Object(r.jsx)(_t.a,{size:"small",style:{color:"#fd9e7f"},onClick:function(){i(!0)},children:"Learn More"})}),Object(r.jsxs)(At.a,{open:s,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(r.jsx)(Bt.a,{id:"alert-dialog-title",children:t.title}),Object(r.jsx)(Et.a,{children:Object(r.jsx)(Wt.a,{id:"alert-dialog-description",children:t.description})}),Object(r.jsx)(Dt.a,{children:Object(r.jsx)(_t.a,{onClick:o,style:{color:"#fd9e7f"},children:"Close"})})]})]})};function zt(t){for(var e=[],a=0;a<t.data.length;a++){var r={title:t.data[a].title,description:t.data[a].description,coverImage:t.data[a].picture_big,chartPodcastId:t.data[a].id,fans:t.data[a].fans};e.push(r)}return e}var Ht=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={chartPodcast:[]},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/podcasts?limit=50").then((function(t){if(t.ok)return console.log("SUCCESS on getting podcasts"),t.json();throw console.log("FAILURE on getting podcasts"),new Error("Error re.ok false")})).catch((function(t){return console.log("ERROR"+t.message)})).then((function(e){void 0!==e&&t.setState({chartPodcast:zt(e)})}))}},{key:"render",value:function(){var t=this.state.chartPodcast;return t.length>0?Object(r.jsx)("div",{children:Object(r.jsx)(C.a,{container:!0,style:{marginBottom:"10rem"},children:t.map((function(t){return Object(r.jsx)(C.a,{item:!0,xs:6,sm:6,md:4,lg:3,style:{justify:"center"},children:Object(r.jsx)(Ut,{title:t.title,description:t.description,coverImage:t.coverImage,fans:t.fans},t.chartPodcastId)},t.chartPodcastId)}))})}):Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(E.a,{disableShrink:!0,style:{color:"#fd9e7f"}})})}}]),a}(c.Component),Zt=a(85),Gt=a.n(Zt),Kt=a(116),Jt=a(235),qt=a(117),Qt=a.n(qt),Vt=a(4),Xt=Object(m.a)((function(t){return{root:{margin:"1rem"},media:{height:0,paddingTop:"100%",borderRadius:"8px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));var Yt=function(t){var e=t.movie,a=Xt(),c=n.a.useState(!1),s=Object(I.a)(c,2),i=s[0],o=s[1];return console.log(e),Object(r.jsx)(C.a,{item:!0,xs:12,sm:4,md:4,lg:3,children:Object(r.jsxs)(S.a,{className:a.root,children:[Object(r.jsxs)(N.a,{style:{borderRadius:"8px"},children:[Object(r.jsx)(L.a,{className:a.media,image:e.album.cover_big,src:e.album.cover_big,preview:e.preview}),Object(r.jsx)(dt.a,{title:e.title_short,style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},subtitle:Object(r.jsxs)("span",{children:["by: ",e.artist.name," "]}),actionIcon:Object(r.jsx)(Ft.a,{disableSpacing:!0,children:Object(r.jsx)(Qt.a,{style:{color:"#ffffff"},className:Object(Vt.a)(a.expand,Object(h.a)({},a.expandOpen,i)),onClick:function(){o(!i)},"aria-expanded":i,"aria-label":"show more"})})})]}),Object(r.jsx)(Jt.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(r.jsx)(T.a,{children:Object(r.jsxs)(v.a,{variant:"body2",component:"span",children:[Object(r.jsx)("b",{children:"Artist:"})," ",e.artist.name,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Song:"})," ",e.title,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Album:"})," ",e.album.title,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Duration:"})," ",Math.floor(e.duration/60),":",e.duration%60,Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:"Rank:"})," ",(e.rank/1e3).toFixed()+"K downloads"]})})})]})})};var $t=function(t){var e=t.results,a=[];function c(t){console.log()}return e.data&&(a=e.data.data),Object(r.jsx)(C.a,{container:!0,style:{backgroundColor:"white"},children:a.map((function(t){return Object(r.jsx)(Yt,{movie:t,test:c},t.id)}))})},te=(a(165),a(237)),ee=a(18),ae=a(118),re=a.n(ae),ce=Object(m.a)((function(t){return{search:Object(h.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(ee.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(ee.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var ne=function(t){var e=ce(),a=t.onSearch,n=Object(c.useState)(""),s=Object(I.a)(n,2),i=s[0],o=s[1];return Object(r.jsxs)("div",{className:e.search,children:[Object(r.jsx)("div",{className:e.searchIcon,children:Object(r.jsx)(re.a,{})}),Object(r.jsx)(te.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},value:i,onChange:function(t){var e=t.target.value;o(e)},onKeyPress:function(t){"Enter"===t.key&&a(i)}})]})},se=a(119),ie=a.n(se).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?"}),oe=a.p+"static/media/MusicorumLogoTransparent.f1e1d33e.png";var le=function(){var t=Object(c.useState)({results:[]}),e=Object(I.a)(t,2),a=e[0],n=e[1],s=function(){var t=Object(Kt.a)(Gt.a.mark((function t(e){var a;return Gt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.get("/",{params:{q:e}});case 2:a=t.sent,n((function(t){return Object(ct.a)(Object(ct.a)({},t),{},{results:a})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(C.a,{container:!0,className:"Search",children:[Object(r.jsxs)(C.a,{item:!0,xs:12,style:{width:"100%",padding:"2rem 1rem 2rem 1rem"},children:[Object(r.jsx)("img",{src:oe,className:"Search-logo",alt:"logo"}),Object(r.jsx)("p",{children:"We are ready to help you!"}),Object(r.jsx)(ne,{onSearch:s})]}),Object(r.jsx)($t,{results:a.results})]})},de=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={sideDrawerOpen:!1},t.drawerToggleClickHandler=function(){t.setState((function(t){return{sideDrawerOpen:!t.sideDrawerOpen}}))},t.backdropClickHandler=function(){t.setState({sideDrawerOpen:!1})},t}return Object(d.a)(a,[{key:"render",value:function(){var t;return this.state.sideDrawerOpen&&(t=Object(r.jsx)(rt,{clickBackdrop:this.backdropClickHandler})),Object(r.jsx)(Y.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{drawerClickHandler:this.drawerToggleClickHandler}),Object(r.jsx)(st,{showSideDrawer:this.state.sideDrawerOpen}),t,Object(r.jsxs)(C.a,{container:!0,spacing:1,children:[Object(r.jsx)(C.a,{item:!0,md:3,children:Object(r.jsx)(at,{})}),Object(r.jsx)(C.a,{item:!0,md:9,xs:12,style:{},children:Object(r.jsxs)(it.c,{children:[Object(r.jsx)(it.a,{path:"/musicorum",exact:!0,component:le}),Object(r.jsx)(it.a,{path:"/explore",exact:!0,component:le}),Object(r.jsx)(it.a,{path:"/artists",exact:!0,component:D}),Object(r.jsx)(it.a,{path:"/charts",component:kt}),Object(r.jsx)(it.a,{path:"/tracks",component:Pt}),Object(r.jsx)(it.a,{path:"/podcasts",component:Ht})]})})]})]})})}}]),a}(c.Component);i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(de,{})}),document.getElementById("root")),o()}},[[183,1,2]]]);
//# sourceMappingURL=main.fcca59e7.chunk.js.map