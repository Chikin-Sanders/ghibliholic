(this.webpackJsonpghibliholic=this.webpackJsonpghibliholic||[]).push([[0],{41:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(1),a=c.n(s),r=c(34),n=c.n(r),l=(c(41),c(11)),j=c(12),o=c(15),d=c(14),h=c(8),b=c(2),m=c(19),O=c.n(m);var x=function(){function e(){window.location.href="/ghibliholic/"}return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");O.a.Sidenav.init(e,{})})),Object(i.jsxs)("div",{children:[Object(i.jsx)("nav",{className:"nav-extended",children:Object(i.jsx)("nav",{className:"nav-wrapper orange accent-4",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("a",{href:"/ghibliholic/",className:"brand-logo",children:"Ghibliholic"}),Object(i.jsx)("a",{href:"/","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(i.jsx)("i",{className:"material-icons",children:"menu"})}),Object(i.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(i.jsx)("li",{children:Object(i.jsx)(h.c,{to:"/ghibliholic/",onClick:function(){e()},children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(h.c,{to:"/ghibliholic/films",children:"Films"})}),Object(i.jsx)("li",{children:Object(i.jsx)(h.c,{to:"/ghibliholic/about",children:"About"})})]})]})})}),Object(i.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(i.jsx)("li",{children:Object(i.jsx)(h.c,{to:"/ghibliholic/",onClick:function(){e()},children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(h.c,{to:"/ghibliholic/films",children:"Films"})}),Object(i.jsx)("li",{children:Object(i.jsx)(h.c,{to:"/ghibliholic/about",children:"About"})})]})]})},u=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={images:[{id:1,title:"My Neighbor Totoro",year:1988,src:"https://www.denofgeek.com/wp-content/uploads/2012/11/totoro-main.jpg?resize=640%2C380"},{id:2,title:"Grave of the Fireflies",year:1988,src:"https://www.denofgeek.com/wp-content/uploads/2018/04/grave-main.jpg?resize=768%2C432"},{id:3,title:"Castle in the Sky",year:1986,src:"https://media1.fdncms.com/kidsvt/imager/u/blog/5284696/castle.jpg?cb=1595429146"}]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".slider");O.a.Slider.init(e,{height:610,interval:3e3,indicators:!1})}))}},{key:"render",value:function(){var e=this.state.images;return Object(i.jsx)("div",{className:"slider",children:Object(i.jsx)("ul",{className:"slides",children:e.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("img",{src:e.src,alt:"image no. "+e.id}),Object(i.jsxs)("div",{className:"caption left-align",style:{top:"80%",fontWeight:"bold"},children:[Object(i.jsx)("h4",{children:e.title}),Object(i.jsxs)("p",{style:{fontStyle:"italic",fontWeight:"normal"},children:["release year: ",e.year]})]})]},e.id)}))})})}}]),c}(s.Component),p=c(13),g=c.n(p),v=c(10),f=c.n(v),N=c(17),y=c(7);var w=function(e){var t=e.film,c=e.height,a=Object(s.useState)(""),r=Object(y.a)(a,2),n=r[0],l=r[1],j=Object(s.useState)(!1),o=Object(y.a)(j,2),d=o[0],h=o[1],b=Object(s.useState)(""),m=Object(y.a)(b,2),O=m[0],x=m[1],u=Object(s.useState)(""),p=Object(y.a)(u,2),v=p[0],w=p[1];console.log("from cardImages.js the title is: "+t.title),Object(s.useEffect)((function(){var e=function(){var e=Object(N.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie?api_key=a71c653291a8f11727eb5d8df0043e5b&language=en-US&query=","&page=1&include_adult=false&primary_release_year=",h(!0),e.next=5,g.a.get("https://api.themoviedb.org/3/search/movie?api_key=a71c653291a8f11727eb5d8df0043e5b&language=en-US&query="+O+"&page=1&include_adult=false&primary_release_year="+v);case 5:t=e.sent,c=t.data.results[0].poster_path,l("https://image.tmdb.org/t/p/w500/"+c),h(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(){for(var e=[],c=0;c<t.title.length;c++){var i=t.title.charAt(c).toLowerCase();" "===i?e.push("+"):e.push(i)}x(e.join("")),w(t.release_date)}(),e()}),[t,O,v]);var k={height:c,objectFit:"contain"};return d?Object(i.jsx)("div",{className:"center valigned",children:Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:n,alt:O,style:k,className:"responsive-img activator"}),Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-3"})]})},k=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={films:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://ghibliapi.herokuapp.com/films").then((function(t){e.setState({films:t.data})}))}},{key:"render",value:function(){var e=this.state.films.sort((function(e,t){return t.rt_score-e.rt_score})).slice(0,6),t=e.length?e.map((function(e){return Object(i.jsxs)("div",{className:"card col l4 s12",style:{},children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",style:{margin:"-15px -10px"},children:Object(i.jsx)(w,{film:e,height:500})}),Object(i.jsxs)("div",{className:"card-reveal grey-text text-darken-3",children:[Object(i.jsxs)("span",{className:"card-title",children:[Object(i.jsx)("h5",{className:"col s10 left-align",children:e.title}),Object(i.jsx)("i",{className:"material-icons col s2 right-align",children:"close"})]}),Object(i.jsxs)("div",{className:"row left",style:{textAlign:"justify"},children:[Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:["Director : ",e.director," "]}),Object(i.jsxs)("p",{children:["Producer : ",e.producer," "]}),Object(i.jsxs)("p",{children:["Year : ",e.release_date]}),Object(i.jsxs)("p",{children:["Rating : ",Object(i.jsx)("span",{children:Object(i.jsx)("i",{className:"material-icons yellow-text text-darken-2",children:"star"})}),e.rt_score]}),Object(i.jsx)("p",{children:e.description})]})]})]},e.id)})):Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})});return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{style:{margin:"25px 0px 50px"},className:"orange-text",children:"HIGHLY RATED FILMS"}),Object(i.jsx)("div",{className:"row",children:t})]})}}]),c}(s.Component),S=c.p+"static/media/totoro-walking.f57da745.png",C=c.p+"static/media/radish-spirit.751fbe92.png",_={border:"1px solid grey",borderRadius:5},A={margin:"25px 0",padding:20},P={textAlign:"justify"};var F=function(){return Object(i.jsxs)("div",{className:"grey-text text-darken-4",children:[Object(i.jsx)(u,{}),Object(i.jsx)("hr",{className:"container",style:{border:"1px solid grey",borderRadius:5,marginTop:50}}),Object(i.jsx)("div",{className:"container center",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(k,{})})}),Object(i.jsx)("hr",{className:"container",style:_}),Object(i.jsx)("div",{className:"center",style:A,children:Object(i.jsxs)("div",{className:"row container",children:[Object(i.jsxs)("div",{className:"col s12 l8",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("h4",{className:"col s12 right-align orange-text",children:"Films"})}),Object(i.jsx)("h6",{style:P,children:"Studio Ghibli is world respected studio animation. By watching the film you will see the magic they created for you."}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(h.b,{to:"/ghibliholic/films",className:"hoverable right waves-effect waves-light btn-small orange accent-4 white-text",children:"Find out more"})]}),Object(i.jsx)("div",{className:"col s12 l4",children:Object(i.jsx)("img",{src:S,alt:"totoro",height:"250"})})]})}),Object(i.jsx)("hr",{className:"container",style:_}),Object(i.jsx)("div",{className:"center",style:A,children:Object(i.jsxs)("div",{className:"row container",children:[Object(i.jsx)("div",{className:"col s12 l4",children:Object(i.jsx)("img",{src:C,alt:"radish-spirit",height:"250"})}),Object(i.jsxs)("div",{className:"col s12 l8",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("h4",{className:"col s12 left-align orange-text",children:"About the page"})}),Object(i.jsx)("h6",{style:P,children:"The page is build in React.js and using third party API provided by ghibliapi and The Movie Database. I created this page to learn how to using React.js and using API from other source. I using MaterializeCSS for the UI elements."}),Object(i.jsx)("br",{}),Object(i.jsx)(h.b,{to:"/ghibliholic/about",className:"hoverable left waves-effect waves-light btn-small orange accent-4 white-text",children:"About"})]})]})})]})};var I=function(e){var t=e.posts;return e.loading?Object(i.jsx)("div",{className:"center",children:Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})}):Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col s12",children:t.map((function(e){return Object(i.jsxs)("div",{className:"card row",style:{padding:"15px 0"},children:[Object(i.jsx)("div",{className:"col s3 offset-s1",children:Object(i.jsx)(w,{film:e,height:300})}),Object(i.jsxs)("div",{className:"card-content col s8",style:{textAlign:"justify"},children:[Object(i.jsx)("span",{className:"card-title",children:Object(i.jsx)("h4",{children:e.title})}),Object(i.jsx)("hr",{}),Object(i.jsxs)("p",{style:{fontStyle:"italic"},children:["release year: ",e.release_date]}),Object(i.jsx)("p",{children:e.description}),Object(i.jsx)("a",{href:"/ghibliholic/films/id/"+e.id,children:"read more \xbb"})]})]},e.id)}))})})};var M=function(e){for(var t=e.loading,c=e.totalPosts,s=e.postPerPage,a=e.paginate,r=e.currentPage,n=e.increments,l=[],j=1;j<=Math.ceil(c/s);j++)l.push(j);return t?Object(i.jsx)("div",{}):Object(i.jsxs)("ul",{className:"pagination row center",children:[Object(i.jsx)("li",{className:r===l[0]?"hide":"hoverable",onClick:function(){return n(-1)},children:Object(i.jsx)("a",{href:"#!",children:Object(i.jsx)("i",{className:"material-icons",children:"chevron_left"})})}),l.map((function(e){return Object(i.jsx)("li",{className:r===e?"active waves-effect":"hoverable",onClick:function(){return a(e)},children:Object(i.jsx)("a",{href:"#!",children:e})},e)})),Object(i.jsx)("li",{className:r===l[l.length-1]?"hide":"hoverable",onClick:function(){return n(1)},children:Object(i.jsx)("a",{href:"#!",children:Object(i.jsx)("i",{className:"material-icons",children:"chevron_right"})})})]})};var T=function(){var e=Object(s.useState)([]),t=Object(y.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(!1),n=Object(y.a)(r,2),l=n[0],j=n[1],o=Object(s.useState)(1),d=Object(y.a)(o,2),h=d[0],b=d[1],m=Object(s.useState)(5),O=Object(y.a)(m,1)[0];Object(s.useEffect)((function(){(function(){var e=Object(N.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,g.a.get("https://ghibliapi.herokuapp.com/films");case 3:t=e.sent,a(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=h*O,u=x-O,p=c.slice(u,x);return Object(i.jsxs)("div",{className:"container filmlist",children:[Object(i.jsx)("label",{htmlFor:"filmcards",children:Object(i.jsx)("h4",{children:"Look for the films:"})}),Object(i.jsx)(I,{posts:p,loading:l,id:"filmcards"}),Object(i.jsx)(M,{loading:l,totalPosts:c.length,postPerPage:O,paginate:function(e){b(e),document.documentElement.scrollTop=0},currentPage:h,increments:function(e){b(h+e),document.documentElement.scrollTop=0}})]})};var L=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h4",{children:"About"})})},D=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={resources:[{id:1,web:"MaterializeCSS",src:"https://materializecss.com/"},{id:2,web:"Ghibli API",src:"https://ghibliapi.herokuapp.com/"},{id:3,web:"The Movie Database",src:"https://www.themoviedb.org/"},{id:4,web:"React.js",src:"https://reactjs.org/"}]},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"center row blue-grey lighten-3 grey-text text-darken-4",style:{padding:"30px 0",marginTop:100,marginBottom:0},children:Object(i.jsxs)("div",{className:"container left-align",children:[Object(i.jsx)("h4",{children:"Resources:"}),Object(i.jsx)("br",{}),this.state.resources.map((function(e){return Object(i.jsx)("a",{href:e.src,target:"_blank",rel:"noreferrer noopener",className:"grey-text text-darken-4",children:Object(i.jsx)("h6",{children:e.web})},e.id)}))]})})}}]),c}(s.Component);var E=function(e){var t=Object(s.useState)(e.match.params.film_id),c=Object(y.a)(t,1)[0],a=Object(s.useState)([]),r=Object(y.a)(a,2),n=r[0],l=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(N.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://ghibliapi.herokuapp.com/films/".concat(c));case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),0!==n.length?Object(i.jsx)("div",{style:{backgroundImage:"https://www.denofgeek.com/wp-content/uploads/2018/04/grave-main.jpg?resize=768%2C432"},children:Object(i.jsxs)("div",{className:"container center",children:[Object(i.jsx)("a",{className:"waves-effect waves-orange btn-flat left",href:"/ghibliholic/films/",children:Object(i.jsx)("i",{className:"material-icons",children:"keyboard_arrow_left"})}),Object(i.jsx)(w,{film:n,height:500})]})}):Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"center valigned",children:[Object(i.jsx)("h2",{children:"loading"}),Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})]})})},R=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:"App",style:{backgroundColor:"#fbfdf2"},children:[Object(i.jsx)(x,{}),Object(i.jsx)(b.a,{path:"/ghibliholic/",exact:!0,component:F}),Object(i.jsx)(b.a,{path:"/ghibliholic/films",exact:!0,component:T}),Object(i.jsx)(b.a,{path:"/ghibliholic/about",component:L}),Object(i.jsx)(b.a,{path:"/ghibliholic/films/id/:film_id",component:E}),Object(i.jsx)(D,{})]})})}}]),c}(s.Component),z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),s(e),a(e),r(e)}))};n.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(R,{})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.6089466f.chunk.js.map