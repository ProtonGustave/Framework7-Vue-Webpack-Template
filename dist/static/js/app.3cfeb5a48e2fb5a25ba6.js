webpackJsonp([1],Array(49).concat([function(t,e,n){"use strict";e.a=[{path:"/signup_01/",component:n(133)},{path:"/signup_01_no_anim/",component:n(134)},{path:"/signup_02/",component:n(135)},{path:"/signup_02_no_anim/",component:n(136)},{path:"/signup_03/",component:n(137)},{path:"/signup_04/",component:n(138)},{path:"/signup_04_no_anim/",component:n(139)},{path:"/signup_05/",component:n(140)},{path:"/about/",component:n(131)},{path:"/map",component:n(132)}]},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){var a=n(3)(n(78),n(142),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(47),i=(n.n(a),n(17));n.n(i);e.default={data:function(){return{$$:Dom7,isGuest:!0,step:1,center:{lat:-34.397,lng:150.644},address:"Where to ?",userMarker:{position:{lat:-34.397,lng:150.644},icon:{url:"/static/user_position_marker.png",size:{width:468,height:468},scaledSize:{width:234,height:234},origin:{x:0,y:0},anchor:{x:117,y:117}}},markers:[],image:{url:"/static/dealers_marker.png",size:{width:321,height:321},scaledSize:{width:100,height:100},origin:{x:0,y:0},anchor:{x:16,y:32}}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(31),i=n.n(a),s=n(91),r=n.n(s),o=n(90),c=n.n(o),l=n(47),u=n.n(l),d=n(17),f=n.n(d);e.default={created:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.generateDeelersAround(this.$data.center),t.next=3,this.getUserPosition();case 3:this.$data.userMarker.position=t.sent,this.$data.center=this.$data.userMarker.position;case 5:case"end":return t.stop()}},t,this)}));return t}(),methods:{handlerDragStart:function(){this.$data.isMapDragged=!0,console.log("dragstart")},handlerDragEnd:function(){this.$data.isMapDragged=!1,console.log("dragend")},toLocation:function(){function t(){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(this.$data.userMarker.position.lat,this.$data.userMarker.position.lng),this.$refs.map.panTo(this.$data.userMarker.position);case 2:case"end":return t.stop()}},t,this)}));return t}(),getUserPosition:function(){return new i.a(function(t,e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var n={lat:e.coords.latitude,lng:e.coords.longitude};t(n)},function(){console.error(arguments)}):console.error("Browser doesn't support Geolocation")})},onIdle:function(t){this.updateCenter(t.$_map.center)},generateDeelersAround:function(){function t(t){return e.apply(this,arguments)}var e=c()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$data.markers=this.$data.markers.concat(this.generateDeelersAddresses(15,e));case 1:case"end":return t.stop()}},t,this)}));return t}(),generateDeelersAddresses:function(t,e){for(var n=[],a=0;a<t;a++){var i={position:{}};i.position.lat=u.a.random(e.lat-.003,e.lat+.003),i.position.lng=u.a.random(e.lng-.003,e.lng+.003),i.icon=this.$data.image,n.push(i)}return n},updateCenter:u.a.debounce(function(){var t=c()(r.a.mark(function t(e){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$data.markers=[],t.next=3,f.a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{key:"AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw",latlng:e.lat()+","+e.lng()}});case 3:n=t.sent,this.generateDeelersAround({lat:e.lat(),lng:e.lng()}),this.$data.address=u.a.at(n,"data.results[0].formatted_address");case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),0),whatEffect:function(){var t=this.$data.framework7.actions([{text:"What effect would you like to get?",label:!0},{text:"Get Hight"},{text:"Relax & Pain Relif"},{text:"Cancel",color:"red"}]);this.$data.$$(t).on("click",function(t){console.log(t.target.innerHTML),console.log(this),this.$data.loadingCouriers=!0,setTimeout(function(){this.$data.loadingCouriers=!1}.bind(this),5e3)}.bind(this))},getHigh:function(){var t=this.$data.framework7.actions([{text:"What is your budget?",label:!0},{text:"$10"},{text:"$20"},{text:"$50"},{text:"$100 & up"},{text:"Cancel",color:"red"}]);this.$data.$$(t).on("click",function(t){console.log(t.target.innerHTML),console.log(this),this.whatEffect()}.bind(this))}},data:function(){return{framework7:new Framework7,$$:Dom7,isGuest:!0,step:1,loadingCouriers:!1,isMapDragged:!1,center:{lat:-34.397,lng:150.644},address:"Where to ?",userMarker:{position:{lat:-34.397,lng:150.644},icon:{url:"/static/user_position_marker.png",size:{width:468,height:468},scaledSize:{width:234,height:234},origin:{x:0,y:0},anchor:{x:117,y:117}}},markers:[],image:{url:"/static/dealers_marker.png",size:{width:321,height:321},scaledSize:{width:100,height:100},origin:{x:0,y:0},anchor:{x:16,y:32}}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(46),i=n.n(a);window.$=i.a,e.default={methods:{afterAnimation:function(){},handlerFocus:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","40vh solid transparent")},handleBlur:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","0vh solid transparent")}},data:function(){return{age:null,$$:Dom7,focused:!1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(46),i=n.n(a);window.$=i.a,e.default={methods:{handlerFocus:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","40vh solid transparent")},handleBlur:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","0vh solid transparent")}},data:function(){return{age:null,$$:Dom7,focused:!1}}}},function(t,e){throw new Error("Module build failed: SyntaxError: D:/Framework7-Vue-Webpack-Template/src/pages/registration/step_02.vue: Unexpected token (36:35)\n\n[0m [90m 34 | [39m[90m//                    reload: true})[39m\n [90m 35 | [39m[90m//            },[39m\n[31m[1m>[22m[39m[90m 36 | [39m            handlerFocus[33m:[39m [36mfunction[39m () {\n [90m    | [39m                                   [31m[1m^[22m[39m\n [90m 37 | [39m                let iOS [33m=[39m [35m/iPad|iPhone|iPod/[39m[33m.[39mtest(navigator[33m.[39muserAgent) [33m&&[39m [33m![39mwindow[33m.[39m[33mMSStream[39m[33m;[39m\n [90m 38 | [39m                [36mif[39m(iOS)\n [90m 39 | [39m                [36mthis[39m[33m.[39m$data[33m.[39m$$([32m'div.bottom'[39m)[33m.[39mcss([32m'border-bottom'[39m[33m,[39m [32m'40vh solid transparent'[39m)[33m;[39m[0m\n")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handlerFocus:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","40vh solid transparent")},handleBlur:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","0vh solid transparent")}},data:function(){return{first_name:null,$$:Dom7}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{afterAnimation:function(){},handlerFocus:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","40vh solid transparent"),this.$data.focused=!0},handleBlur:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","0vh solid transparent")}},data:function(){return{$$:Dom7,email:null}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handlerFocus:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","40vh solid transparent"),this.$data.focused=!0},handleBlur:function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&this.$data.$$("div.bottom").css("border-bottom","0vh solid transparent")}},data:function(){return{$$:Dom7,email:null}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(60),i=n(57),s=(n.n(i),n(56)),r=n.n(s),o=n(52),c=(n.n(o),n(51)),l=(n.n(c),n(55)),u=(n.n(l),n(49)),d=n(59),f=n.n(d),m=n(17),v=n.n(m),p=n(50),h=(n.n(p),n(54)),g=(n.n(h),n(53)),_=(n.n(g),n(58));window.Axios=v.a,window.getMinScale=function(t){var e=t.toString().match(/\.[0-9]*/)[0];return e=e.replace(".",""),console.log("getMinScale",e.length),(1/Math.pow(10,e.length-1)).toFixed(e.length-1)},a.a.use(r.a),window.VueGoogleMaps=_.a,a.a.use(_.a,{load:{apiKey:"AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw",libraries:["places"]}}),window.Vue=a.a,window.app=new a.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:u.a},components:{app:f.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var a=n(3)(n(79),n(141),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(80),n(144),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(81),n(149),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(82),n(150),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(83),n(148),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(84),n(151),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(85),n(147),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(86),n(146),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(87),n(143),null,null);t.exports=a.exports},function(t,e,n){var a=n(3)(n(88),n(145),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),t._v(" "),n("f7-block",{attrs:{inner:""}},[n("p",[t._v("Here is About page!")]),t._v(" "),n("p",[t._v("You can go "),n("f7-link",{attrs:{back:""}},[t._v("back")]),t._v(".")],1),t._v(" "),n("p",[t._v("Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.")]),t._v(" "),n("p",[t._v("Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("f7-views",[n("f7-view",{attrs:{id:"main-view",main:""}},[n("f7-pages",[n("f7-page",[n("div",{attrs:{id:"intro"}}),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{id:"get-started",href:"/signup_01/"}},[t._v("GET STERTERD\n                    ")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("Your email autofocus")]),t._v(" "),n("div",{staticClass:"center-content"},[n("f7-input",{class:{"text-center":!!t.email},attrs:{type:"text",id:"email",placeholder:"name@mail.com",autofocus:!0},on:{focus:function(e){t.handlerFocus()},blur:function(e){t.handleBlur()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_05/"}},[t._v("NEXT")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",{attrs:{id:"header"}},[n("f7-nav-left",{staticClass:"open-panel"},[n("div",{staticClass:"invisible",attrs:{id:"menu-button"}})]),t._v(" "),n("f7-nav-center",{attrs:{sliding:""}}),t._v(" "),n("f7-nav-right",[n("f7-link",{staticStyle:{visibility:"hidden"},attrs:{icon:"icon-bars","open-panel":"left"}})],1)],1),t._v(" "),n("div",{staticClass:"content",attrs:{inner:""}},[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-inner search-box-container shadow"},[n("div",{staticClass:"item-input",attrs:{id:"search-box"}},[n("span",{attrs:{id:"dot"}},[n("i",{staticClass:"fa fa-circle"})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"Where to ?"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),t._v(" "),n("div",{attrs:{id:"map"}},[n("googlemaps-map",{ref:"map",staticStyle:{width:"100%",height:"100%"},attrs:{center:t.center,zoom:17,options:{disableDefaultUI:!0}},on:{"update:center":function(e){t.center=e},idle:t.onIdle,dragstart:t.handlerDragStart,dragend:t.handlerDragEnd}},[n("googlemaps-marker",{key:1,attrs:{position:t.userMarker.position,icon:t.userMarker.icon}}),t._v(" "),t._l(t.markers,function(t,e){return n("googlemaps-marker",{key:e,attrs:{position:t.position,icon:t.icon}})})],2)],1),t._v(" "),n("div",{attrs:{id:"pin"}}),t._v(" "),n("f7-fab",{staticClass:"shadow",attrs:{id:"to-location-btn"},on:{click:t.toLocation}}),t._v(" "),n("div",{class:[{fadeOut:t.isMapDragged||t.loadingCouriers},{fadeIn:!t.isMapDragged},"animated"],attrs:{id:"delivery"}},[n("div",{staticClass:"shadow",attrs:{id:"estimate"}},[n("div",{attrs:{id:"time"}},[n("span",[n("p",{attrs:{id:"timeVal"}},[t._v("20")]),t._v(" "),n("p",{attrs:{id:"timeUnit"}},[t._v("min")])])]),t._v(" "),n("p",[t._v("delivery")])])]),t._v(" "),n("div",{class:[{slideOutDown:!t.loadingCouriers},{slideInUp:t.loadingCouriers},"animated"],attrs:{id:"findingCouriers"}}),t._v(" "),n("div",{class:[{fadeOut:t.isMapDragged||t.loadingCouriers},{fadeIn:!t.isMapDragged||!t.loadingCouriers},"animated"]},[n("f7-button",{staticClass:"shadow",attrs:{id:"get-button"},on:{click:t.getHigh}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("Please allow access")]),t._v(" "),n("p",{staticClass:"privacy-licence center-content"},[t._v("\n            Your privacy is important. We use contacts to find friends on the app and location to find nearby schools to join\n        ")]),t._v(" "),n("div",{staticClass:"vertical-center"},[n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/map"}},[t._v("\n                ENABLE LOCATION\n            ")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{on:{"page:afteranimation":t.afterAnimation}},[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("Your email")]),t._v(" "),n("div",{staticClass:"center-content"},[n("f7-input",{class:{"text-center":!!t.email},attrs:{type:"text",id:"email",placeholder:"name@mail.com"},on:{focus:function(e){t.handlerFocus()},blur:function(e){t.handleBlur()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_05/"}},[t._v("NEXT")]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04_no_anim/"}},[t._v("NO ANIM")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("Quickly describe your experience with cannabis")]),t._v(" "),n("div",{staticClass:"block bottom"},[n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("I am new")]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("Had some experiments")]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("Experienced user")]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("Professional")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{on:{"page:afteranimation":t.afterAnimation}},[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("What's your first name?")]),t._v(" "),n("div",{staticClass:"center-content"},[n("f7-input",{class:{"text-center":!!t.first_name},attrs:{type:"text",id:"first_name",placeholder:"First name"},on:{focus:function(e){t.handlerFocus()},blur:function(e){t.handleBlur()}},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_03/"}},[t._v("NEXT")]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_02_no_anim/"}},[t._v("NO ANIM")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{on:{"page:afteranimation":t.afterAnimation}},[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("Enter your age")]),t._v(" "),n("div",{staticClass:"center-content"},[n("f7-input",{class:{"text-center":!!t.age},attrs:{type:"number",id:"age",placeholder:"Your age"},on:{focus:function(e){t.handlerFocus()},blur:function(e){t.handleBlur()}},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("p",{staticClass:"privacy-licence center-content"},[t._v("\n                By entering your age and taping next button you agree with ours "),n("a",[t._v("Terms of Service")]),t._v(" and "),n("a",[t._v("Privacy Policy")])]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_02/"}},[t._v("NEXT")]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_01_no_anim/"}},[t._v("NO ANIM")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("Enter your age")]),t._v(" "),n("div",{staticClass:"center-content"},[n("f7-input",{class:{"text-center":!!t.age},attrs:{type:"number",id:"age",placeholder:"Your age",autofocus:!0},on:{focus:function(e){t.handlerFocus()},blur:function(e){t.handleBlur()}},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("p",{staticClass:"privacy-licence center-content"},[t._v("\n                By entering your age and taping next button you agree with ours "),n("a",[t._v("Terms of Service")]),t._v(" and "),n("a",[t._v("Privacy Policy")])]),t._v(" "),n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_02/"}},[t._v("NEXT")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),n("f7-nav-center"),t._v(" "),n("f7-nav-right",[n("f7-link")],1)],1),t._v(" "),n("div",{staticClass:"content signup",attrs:{inner:""}},[n("h1",{staticClass:"title"},[t._v("What's your first name? autofocus")]),t._v(" "),n("div",{staticClass:"center-content"},[n("f7-input",{class:{"text-center":!!t.first_name},attrs:{type:"text",id:"first_name",placeholder:"First name",autofocus:!0},on:{focus:function(e){t.handlerFocus()},blur:function(e){t.handleBlur()}},model:{value:t.first_name,callback:function(e){t.first_name=e},expression:"first_name"}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_03/"}},[t._v("NEXT")])],1)])],1)},staticRenderFns:[]}}]),[89]);
//# sourceMappingURL=app.3cfeb5a48e2fb5a25ba6.js.map