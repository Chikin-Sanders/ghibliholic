(this.webpackJsonpghibliholic=this.webpackJsonpghibliholic||[]).push([[0],{40:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),a=c.n(i),r=c(32),n=c.n(r),l=(c(40),c(7)),o=c(8),j=c(10),d=c(9),h=c(11),b=c(2),m=c(16),u=c.n(m);var p=function(){function e(){window.location.href="/ghibliholic/"}return document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");u.a.Sidenav.init(e,{})})),Object(s.jsxs)("div",{children:[Object(s.jsx)("nav",{className:"nav-extended",children:Object(s.jsx)("nav",{className:"nav-wrapper orange accent-4",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("a",{href:"/ghibliholic/",className:"brand-logo",children:"Ghibliholic"}),Object(s.jsx)("a",{href:"/","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(s.jsx)("i",{className:"material-icons",children:"menu"})}),Object(s.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(s.jsx)("li",{children:Object(s.jsx)(h.c,{to:"/ghibliholic/",onClick:function(){e()},children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.c,{to:"/ghibliholic/films",children:"Films"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.c,{to:"/ghibliholic/about",children:"About"})})]})]})})}),Object(s.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(s.jsx)("li",{children:Object(s.jsx)(h.c,{to:"/ghibliholic/",onClick:function(){e()},children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.c,{to:"/ghibliholic/films",children:"Films"})}),Object(s.jsx)("li",{children:Object(s.jsx)(h.c,{to:"/ghibliholic/about",children:"About"})})]})]})},x=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={images:[{id:1,title:"My Neighbor Totoro",year:1988,src:"https://www.denofgeek.com/wp-content/uploads/2012/11/totoro-main.jpg?resize=640%2C380"},{id:2,title:"Grave of the Fireflies",year:1988,src:"https://www.denofgeek.com/wp-content/uploads/2018/04/grave-main.jpg?resize=768%2C432"},{id:3,title:"Castle in the Sky",year:1986,src:"https://media1.fdncms.com/kidsvt/imager/u/blog/5284696/castle.jpg?cb=1595429146"}]},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".slider");u.a.Slider.init(e,{height:610,interval:3e3,indicators:!1})}))}},{key:"render",value:function(){var e=this.state.images;return Object(s.jsx)("div",{className:"slider",children:Object(s.jsx)("ul",{className:"slides",children:e.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("img",{src:e.src,alt:"image no. "+e.id}),Object(s.jsxs)("div",{className:"caption left-align",style:{top:"80%",fontWeight:"bold"},children:[Object(s.jsx)("h4",{children:e.title}),Object(s.jsxs)("p",{style:{fontStyle:"italic",fontWeight:"normal"},children:["release year: ",e.year]})]})]},e.id)}))})})}}]),c}(i.Component),O=c(14),g=c.n(O),v=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={images:{}},e}return Object(o.a)(c,[{key:"spaceToPlus",value:function(){for(var e=this.props.film,t=e.title,c=e.release_date,s=[],i=0;i<t.length;i++){var a=t.charAt(i).toLowerCase();" "===a?s.push("+"):s.push(a)}return[s.join(""),c]}},{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.themoviedb.org/3/search/movie?api_key=a71c653291a8f11727eb5d8df0043e5b&language=en-US&query="+this.spaceToPlus()[0]+"&page=1&include_adult=false&primary_release_year="+this.spaceToPlus()[1]).then((function(t){var c=t.data.results[0].poster_path;e.setState({images:"https://image.tmdb.org/t/p/w500/"+c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.film.title;if(e.length)return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{src:this.state.images,alt:e,style:{height:500,objectFit:"contain"},className:"responsive-img activator"}),Object(s.jsx)("span",{className:"card-title activator grey-text text-darken-3"})]})}}]),c}(i.Component),f=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={films:[]},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://ghibliapi.herokuapp.com/films").then((function(t){e.setState({films:t.data})}))}},{key:"render",value:function(){var e=this.state.films.sort((function(e,t){return t.rt_score-e.rt_score})).slice(0,6),t=e.length?e.map((function(e){return Object(s.jsxs)("div",{className:"card col l4 s12",children:[Object(s.jsx)("div",{className:"card-image waves-effect waves-block waves-light",style:{margin:"-15px -10px"},children:Object(s.jsx)(v,{film:e})}),Object(s.jsxs)("div",{className:"card-reveal grey-text text-darken-3",children:[Object(s.jsxs)("span",{className:"card-title",children:[Object(s.jsx)("h5",{className:"col s10 left-align",children:e.title}),Object(s.jsx)("i",{className:"material-icons col s2 right-align",children:"close"})]}),Object(s.jsxs)("div",{className:"row left",style:{textAlign:"justify"},children:[Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:["Director : ",e.director," "]}),Object(s.jsxs)("p",{children:["Producer : ",e.producer," "]}),Object(s.jsxs)("p",{children:["Year : ",e.release_date]}),Object(s.jsxs)("p",{children:["Rating : ",Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:"material-icons yellow-text text-darken-2",children:"star"})}),e.rt_score]}),Object(s.jsx)("p",{children:e.description})]})]})]},e.id)})):Object(s.jsx)("div",{className:"preloader-wrapper big active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})});return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{style:{margin:"25px 0px 50px"},className:"orange-text",children:"HIGHLY RATED FILMS"}),Object(s.jsx)("div",{className:"row",children:t})]})}}]),c}(i.Component),N=c.p+"static/media/totoro-walking.f57da745.png",y=c.p+"static/media/radish-spirit.751fbe92.png",w={border:"1px solid grey",borderRadius:5},k={margin:"25px 0",padding:20},C={textAlign:"justify"};var P=function(){return Object(s.jsxs)("div",{className:"grey-text text-darken-4",children:[Object(s.jsx)(x,{}),Object(s.jsx)("hr",{className:"container",style:{border:"1px solid grey",borderRadius:5,marginTop:50}}),Object(s.jsx)("div",{className:"container center",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(f,{})})}),Object(s.jsx)("hr",{className:"container",style:w}),Object(s.jsx)("div",{className:"center",style:k,children:Object(s.jsxs)("div",{className:"row container",children:[Object(s.jsxs)("div",{className:"col s6",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h4",{className:"col s12 right-align orange-text",children:"Films"})}),Object(s.jsx)("h6",{style:C,children:"Studio Ghibli is world respected studio animation. By watching the film you will see the magic they created for you."}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)(h.b,{to:"/ghibliholic/films",className:"hoverable right waves-effect waves-light btn-small orange accent-4 white-text",children:"Find out more"})]}),Object(s.jsx)("div",{className:"col s6",children:Object(s.jsx)("img",{src:N,alt:"totoro",height:"250"})})]})}),Object(s.jsx)("hr",{className:"container",style:w}),Object(s.jsx)("div",{className:"center",style:k,children:Object(s.jsxs)("div",{className:"row container",children:[Object(s.jsx)("div",{className:"col s6",children:Object(s.jsx)("img",{src:y,alt:"radish-spirit",height:"250"})}),Object(s.jsxs)("div",{className:"col s6",children:[Object(s.jsx)("div",{className:"row",style:{overflow:"hidden"},children:Object(s.jsx)("h4",{className:"col s12 left-align orange-text",children:"About the page"})}),Object(s.jsx)("h6",{style:C,children:"The page is build in React.js and using third party API provided by ghibliapi and The Movie Database. I created this page to learn how to using React.js and using API from other source. I using MaterializeCSS for the UI elements."}),Object(s.jsx)("br",{}),Object(s.jsx)(h.b,{to:"/ghibliholic/about",className:"hoverable left waves-effect waves-light btn-small orange accent-4 white-text",children:"About"})]})]})})]})},A=c(21),S=c.n(A),F=c(34);var M=function(e){var t=e.posts;return e.loading?Object(s.jsx)("div",{className:"center",children:Object(s.jsx)("div",{className:"preloader-wrapper big active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})})}):Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col s12",children:t.map((function(e){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:e.title}),Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:e.description})]})},e.id)}))})})};var T=function(e){for(var t=e.totalPosts,c=e.postsPerPage,i=e.paginate,a=[],r=1;r<=Math.ceil(t/c);r++)a.push(r);return Object(s.jsx)("ul",{className:"pagination",children:a.map((function(e){return Object(s.jsx)("li",{className:"waves-effect",onClick:function(){return i(e)},children:Object(s.jsx)("a",{href:"#!",children:e})},e)}))})},D=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={posts:[],loading:!1,currentPage:1,postsPerPage:5},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(F.a)(S.a.mark((function t(){var c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,g.a.get("https://ghibliapi.herokuapp.com/films");case 3:c=t.sent,e.setState({posts:c.data,loading:!1});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state,t=e.loading,c=e.postsPerPage,i=e.posts,a=this.state.currentPage,r=a*c,n=r-c,l=i.slice(n,r);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("label",{htmlFor:"search-bar",children:Object(s.jsx)("h4",{children:"Find your film:"})}),Object(s.jsx)(M,{className:"center-align",posts:l,loading:t}),Object(s.jsx)(T,{totalPosts:i.length,postsPerPage:c,paginate:function(e){a=e,console.log(a)}})]})}}]),c}(i.Component);var _=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h4",{children:"About"})})},I=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(l.a)(this,c);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={resources:[{id:1,web:"MaterializeCSS",src:"https://materializecss.com/"},{id:2,web:"Ghibli API",src:"https://ghibliapi.herokuapp.com/"},{id:3,web:"The Movie Database",src:"https://www.themoviedb.org/"},{id:4,web:"React.js",src:"https://reactjs.org/"}]},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"center row blue-grey lighten-3 grey-text text-darken-4",style:{padding:"30px 0",marginTop:100,marginBottom:0},children:Object(s.jsxs)("div",{className:"container left-align",children:[Object(s.jsx)("h4",{children:"Resources:"}),Object(s.jsx)("br",{}),this.state.resources.map((function(e){return Object(s.jsx)("a",{href:e.src,target:"_blank",rel:"noreferrer noopener",className:"grey-text text-darken-4",children:Object(s.jsx)("h6",{children:e.web})},e.id)}))]})})}}]),c}(i.Component),L=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(s.jsx)(h.a,{children:Object(s.jsxs)("div",{className:"App",style:{backgroundColor:"#fbfdf2"},children:[Object(s.jsx)(p,{}),Object(s.jsx)(b.a,{path:"/ghibliholic/",exact:!0,component:P}),Object(s.jsx)(b.a,{path:"/ghibliholic/films",exact:!0,component:D}),Object(s.jsx)(b.a,{path:"/ghibliholic/about",exact:!0,component:_}),Object(s.jsx)(I,{})]})})}}]),c}(i.Component),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),i(e),a(e),r(e)}))};n.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),R()}},[[64,1,2]]]);
//# sourceMappingURL=main.48f9d352.chunk.js.map