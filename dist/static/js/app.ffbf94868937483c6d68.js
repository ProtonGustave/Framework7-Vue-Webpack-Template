webpackJsonp([1],Array(48).concat([function(t,e,a){"use strict";e.a=[{path:"/signup_01/",component:a(133)},{path:"/signup_02/",component:a(134)},{path:"/signup_03/",component:a(135)},{path:"/signup_04/",component:a(136)},{path:"/signup_05/",component:a(137)},{path:"/about/",component:a(129)},{path:"/map",component:a(132)},{path:"/form/",component:a(131)},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:a(130)}]},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,a){var n=a(3)(a(77),a(140),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(46),i=(a.n(n),a(17));a.n(i);e.default={data:function(){return{$$:Dom7,isGuest:!0,step:1,center:{lat:-34.397,lng:150.644},address:"Where to ?",userMarker:{position:{lat:-34.397,lng:150.644},icon:{url:"/static/user_position_marker.png",size:{width:468,height:468},scaledSize:{width:234,height:234},origin:{x:0,y:0},anchor:{x:117,y:117}}},markers:[],image:{url:"/static/dealers_marker.png",size:{width:321,height:321},scaledSize:{width:100,height:100},origin:{x:0,y:0},anchor:{x:16,y:32}}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(31),i=a.n(n),s=a(89),r=a.n(s),o=a(88),l=a.n(o),c=a(46),u=a.n(c),d=a(17),f=a.n(d);e.default={created:function(){function t(){return e.apply(this,arguments)}var e=l()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.generateDeelersAround(this.$data.center),t.next=3,this.getUserPosition();case 3:this.$data.userMarker.position=t.sent,this.$data.center=this.$data.userMarker.position;case 5:case"end":return t.stop()}},t,this)}));return t}(),methods:{handlerDragStart:function(){this.$data.isMapDragged=!0,console.log("dragstart")},handlerDragEnd:function(){this.$data.isMapDragged=!1,console.log("dragend")},toLocation:function(){function t(){return e.apply(this,arguments)}var e=l()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(this.$data.userMarker.position.lat,this.$data.userMarker.position.lng),this.$refs.map.panTo(this.$data.userMarker.position);case 2:case"end":return t.stop()}},t,this)}));return t}(),getUserPosition:function(){return new i.a(function(t,e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var a={lat:e.coords.latitude,lng:e.coords.longitude};t(a)},function(){console.error(arguments)}):console.error("Browser doesn't support Geolocation")})},onIdle:function(t){this.updateCenter(t.$_map.center)},generateDeelersAround:function(){function t(t){return e.apply(this,arguments)}var e=l()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$data.markers=this.$data.markers.concat(this.generateDeelersAddresses(15,e));case 1:case"end":return t.stop()}},t,this)}));return t}(),generateDeelersAddresses:function(t,e){for(var a=[],n=0;n<t;n++){var i={position:{}};i.position.lat=u.a.random(e.lat-.003,e.lat+.003),i.position.lng=u.a.random(e.lng-.003,e.lng+.003),i.icon=this.$data.image,a.push(i)}return a},updateCenter:u.a.debounce(function(){var t=l()(r.a.mark(function t(e){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$data.markers=[],t.next=3,f.a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{key:"AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw",latlng:e.lat()+","+e.lng()}});case 3:a=t.sent,this.generateDeelersAround({lat:e.lat(),lng:e.lng()}),this.$data.address=u.a.at(a,"data.results[0].formatted_address");case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),0),whatEffect:function(){this.$data.framework7.actions([{text:"What effect would you like to get?",label:!0},{text:"Get Hight"},{text:"Relax & Pain Relif"},{text:"Cancel",color:"red"}])},getHigh:function(){var t=this.$data.framework7.actions([{text:"What is your budget?",label:!0},{text:"$10"},{text:"$20"},{text:"$50"},{text:"$100 & up"},{text:"Cancel",color:"red"}]);this.$data.$$(t).on("click",function(t){console.log(t.target.innerHTML),console.log(this),this.whatEffect()}.bind(this))}},data:function(){return{framework7:new Framework7,$$:Dom7,isGuest:!0,step:1,isMapDragged:!1,center:{lat:-34.397,lng:150.644},address:"Where to ?",userMarker:{position:{lat:-34.397,lng:150.644},icon:{url:"/static/user_position_marker.png",size:{width:468,height:468},scaledSize:{width:234,height:234},origin:{x:0,y:0},anchor:{x:117,y:117}}},markers:[],image:{url:"/static/dealers_marker.png",size:{width:321,height:321},scaledSize:{width:100,height:100},origin:{x:0,y:0},anchor:{x:16,y:32}}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={beforeDestroy:function(){this.$data.autofocus=!1},methods:{handlerFocus:function(){this.$data.$$("div.bottom").css("border-bottom","35vh solid transparent"),console.log(this.$data.$$)}},data:function(){return{autofocus:!0,$$:Dom7}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handlerFocus:function(){this.$data.$$("div.bottom").css("border-bottom","35vh solid transparent"),console.log(this.$data.$$)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handlerFocus:function(){this.$data.$$("div.bottom").css("border-bottom","35vh solid transparent"),console.log(this.$data.$$)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(59),i=a(56),s=(a.n(i),a(55)),r=a.n(s),o=a(51),l=(a.n(o),a(50)),c=(a.n(l),a(54)),u=(a.n(c),a(48)),d=a(58),f=a.n(d),v=a(17),p=a.n(v),_=a(49),m=(a.n(_),a(53)),h=(a.n(m),a(52)),g=(a.n(h),a(57));window.Axios=p.a,window.getMinScale=function(t){var e=t.toString().match(/\.[0-9]*/)[0];return e=e.replace(".",""),console.log("getMinScale",e.length),(1/Math.pow(10,e.length-1)).toFixed(e.length-1)},n.a.use(r.a),window.VueGoogleMaps=g.a,n.a.use(g.a,{load:{apiKey:"AIzaSyDksjLp8Pg0V2pGLKY5N6JIG4JrjwLaGYw",libraries:["places"]}}),window.Vue=n.a,window.app=new n.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:u.a},components:{app:f.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){var n=a(3)(a(78),a(138),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(79),a(147),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(80),a(139),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(81),a(141),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(82),a(146),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(83),a(145),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(84),a(144),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(85),a(143),null,null);t.exports=n.exports},function(t,e,a){var n=a(3)(a(86),a(142),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("p",[t._v("Here is About page!")]),t._v(" "),a("p",[t._v("You can go "),a("f7-link",{attrs:{back:""}},[t._v("back")]),t._v(".")],1),t._v(" "),a("p",[t._v("Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.")]),t._v(" "),a("p",[t._v("Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Form","back-link":"Back",sliding:""}}),t._v(" "),a("f7-block-title",[t._v("Form")]),t._v(" "),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",[t._v("Name")]),t._v(" "),a("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Password")]),t._v(" "),a("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("E-mail")]),t._v(" "),a("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("URL")]),t._v(" "),a("f7-input",{attrs:{type:"url",placeholder:"URL"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Phone")]),t._v(" "),a("f7-input",{attrs:{type:"tel",placeholder:"Phone"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Birth date")]),t._v(" "),a("f7-input",{attrs:{type:"date",placeholder:"Birth date",value:"2014-04-30"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Date time")]),t._v(" "),a("f7-input",{attrs:{type:"datetime-local"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Gender")]),t._v(" "),a("f7-input",{attrs:{type:"select"}},[a("option",{attrs:{value:"1"}},[t._v("Male")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Female")])])],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Switch")]),t._v(" "),a("f7-input",{attrs:{type:"switch"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Range")]),t._v(" "),a("f7-input",{attrs:{type:"range",min:"0",max:"100",step:"1",value:"90"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",[t._v("Textarea")]),t._v(" "),a("f7-input",{attrs:{type:"textarea",placeholder:"Textarea"}})],1)],1),t._v(" "),a("f7-block-title",[t._v("Form With Floating Labels")]),t._v(" "),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-label",{attrs:{floating:""}},[t._v("Name")]),t._v(" "),a("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",{attrs:{floating:""}},[t._v("Password")]),t._v(" "),a("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),t._v(" "),a("f7-list-item",[a("f7-label",{attrs:{floating:""}},[t._v("E-mail")]),t._v(" "),a("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1)],1),t._v(" "),a("f7-block-title",[t._v("Form Without Labels")]),t._v(" "),a("f7-list",{attrs:{form:""}},[a("f7-list-item",[a("f7-input",{attrs:{type:"text",placeholder:"Name"}})],1),t._v(" "),a("f7-list-item",[a("f7-input",{attrs:{type:"password",placeholder:"Password"}})],1),t._v(" "),a("f7-list-item",[a("f7-input",{attrs:{type:"email",placeholder:"E-mail"}})],1)],1),t._v(" "),a("f7-block-title",[t._v("Checkboxes")]),t._v(" "),a("f7-list",{attrs:{form:""}},t._l(3,function(t){return a("f7-list-item",{key:t,attrs:{checkbox:"",name:"my-checkbox",value:t,title:"Checkbox "+t}})})),t._v(" "),a("f7-block-title",[t._v("Radios")]),t._v(" "),a("f7-list",{attrs:{form:""}},t._l(3,function(t){return a("f7-list-item",{key:t,attrs:{radio:"",name:"my-radio",checked:1===t,value:t,title:"Radio "+t}})})),t._v(" "),a("f7-block-title",[t._v("Buttons")]),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("p",[a("f7-button",[t._v("Button")])],1),t._v(" "),a("p",[a("f7-button",{attrs:{round:""}},[t._v("Button Round")])],1),t._v(" "),a("p",[a("f7-button",{attrs:{fill:""}},[t._v("Button Fill")])],1),t._v(" "),a("p",[a("f7-buttons",[a("f7-button",{attrs:{round:"",active:""}},[t._v("Button 1")]),t._v(" "),a("f7-button",{attrs:{round:""}},[t._v("Button 2")]),t._v(" "),a("f7-button",{attrs:{round:""}},[t._v("Button 3")])],1)],1),t._v(" "),a("p",[a("f7-buttons",{attrs:{color:"orange"}},[a("f7-button",{attrs:{round:"",big:""}},[t._v("Button 1")]),t._v(" "),a("f7-button",{attrs:{round:"",big:"",active:""}},[t._v("Button 2")]),t._v(" "),a("f7-button",{attrs:{round:"",big:""}},[t._v("Button 3")])],1)],1),t._v(" "),a("p",[a("f7-grid",[a("f7-col",[a("f7-button",{attrs:{big:"",fill:"",color:"green"}},[t._v("Send")])],1),t._v(" "),a("f7-col",[a("f7-button",{attrs:{big:"",fill:"",color:"red"}},[t._v("Delete")])],1)],1)],1),t._v(" "),a("p",[a("f7-grid",[a("f7-col",[a("f7-button",{attrs:{fill:"",raised:"",color:"green"}},[t._v("Raised")])],1),t._v(" "),a("f7-col",[a("f7-button",{attrs:{raised:"",color:"red"}},[t._v("Raised")])],1),t._v(" "),a("f7-col",[a("f7-button",{attrs:{fill:"",raised:"",color:"pink"}},[t._v("Raised")])],1)],1)],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("f7-views",[a("f7-view",{attrs:{id:"main-view",main:""}},[a("f7-pages",[a("f7-page",[a("div",{attrs:{id:"intro"}}),t._v(" "),a("f7-button",{staticClass:"actions-modal-button",attrs:{id:"get-started",href:"/signup_01/"}},[t._v("GET STARTED")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{id:"header"}},[a("f7-nav-left",{staticClass:"open-panel"},[a("div",{staticClass:"invisible",attrs:{id:"menu-button"}})]),t._v(" "),a("f7-nav-center",{attrs:{sliding:""}}),t._v(" "),a("f7-nav-right",[a("f7-link",{staticStyle:{visibility:"hidden"},attrs:{icon:"icon-bars","open-panel":"left"}})],1)],1),t._v(" "),a("div",{staticClass:"content",attrs:{inner:""}},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-inner search-box-container shadow"},[a("div",{staticClass:"item-input",attrs:{id:"search-box"}},[a("span",{attrs:{id:"dot"}},[a("i",{staticClass:"fa fa-circle"})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"Where to ?"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),t._v(" "),a("div",{attrs:{id:"map"}},[a("googlemaps-map",{ref:"map",staticStyle:{width:"100%",height:"100%"},attrs:{center:t.center,zoom:17,options:{disableDefaultUI:!0}},on:{"update:center":function(e){t.center=e},idle:t.onIdle,dragstart:t.handlerDragStart,dragend:t.handlerDragEnd}},[a("googlemaps-marker",{key:1,attrs:{position:t.userMarker.position,icon:t.userMarker.icon}}),t._v(" "),t._l(t.markers,function(t,e){return a("googlemaps-marker",{key:e,attrs:{position:t.position,icon:t.icon}})})],2)],1),t._v(" "),a("div",{attrs:{id:"pin"}}),t._v(" "),a("f7-fab",{staticClass:"shadow",attrs:{id:"to-location-btn"},on:{click:t.toLocation}}),t._v(" "),a("div",{class:[{fadeOut:t.isMapDragged},{fadeIn:!t.isMapDragged},"animated"],attrs:{id:"delivery"}},[a("div",{staticClass:"shadow",attrs:{id:"estimate"}},[a("div",{attrs:{id:"time"}},[a("span",[a("p",{attrs:{id:"timeVal"}},[t._v("20")]),t._v(" "),a("p",{attrs:{id:"timeUnit"}},[t._v("min")])])]),t._v(" "),a("p",[t._v("delivery")])])]),t._v(" "),a("div",{class:[{slideOutDown:!t.isMapDragged},{slideInUp:t.isMapDragged},"animated"],attrs:{id:"findingCouriers"}}),t._v(" "),a("div",{class:[{fadeOut:t.isMapDragged},{fadeIn:!t.isMapDragged},"animated"]},[a("f7-button",{staticClass:"shadow",attrs:{id:"get-button"},on:{click:t.getHigh}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("f7-nav-left",[a("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),a("f7-nav-center"),t._v(" "),a("f7-nav-right",[a("f7-link")],1)],1),t._v(" "),a("div",{staticClass:"content signup",attrs:{inner:""}},[a("h1",{staticClass:"title"},[t._v("Please allow access")]),t._v(" "),a("div",{staticClass:"vertical-center"},[a("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/map"}},[t._v("\n                ENABLE LOCATION\n            ")])],1),t._v(" "),a("div",{staticClass:"bottom"},[a("p",{staticClass:"privacy-licence center-content"},[t._v("\n                Your privacy is important. We use contacts to find friends on the app and location to find nearby schools to join\n            ")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("f7-nav-left",[a("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),a("f7-nav-center"),t._v(" "),a("f7-nav-right",[a("f7-link")],1)],1),t._v(" "),a("div",{staticClass:"content signup",attrs:{inner:""}},[a("h1",{staticClass:"title"},[t._v("Your email")]),t._v(" "),a("div",{staticClass:"center-content"},[a("f7-input",{attrs:{type:"text",id:"email",autofocus:!0,placeholder:"name@mail.com"},on:{focus:function(e){t.handlerFocus()}}})],1),t._v(" "),a("f7-button",{staticClass:"actions-modal-button bottom",attrs:{href:"/signup_05/"}},[t._v("NEXT")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("f7-nav-left",[a("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),a("f7-nav-center"),t._v(" "),a("f7-nav-right",[a("f7-link")],1)],1),t._v(" "),a("div",{staticClass:"content signup",attrs:{inner:""}},[a("h1",{staticClass:"title"},[t._v("Quickly describe your experience with cannabis")]),t._v(" "),a("div",{staticClass:"block bottom"},[a("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("I am new")]),t._v(" "),a("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("Had some experiments")]),t._v(" "),a("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("Experienced user")]),t._v(" "),a("f7-button",{staticClass:"actions-modal-button",attrs:{href:"/signup_04/"}},[t._v("Professional")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("f7-nav-left",[a("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),a("f7-nav-center"),t._v(" "),a("f7-nav-right",[a("f7-link")],1)],1),t._v(" "),a("div",{staticClass:"content signup",attrs:{inner:""}},[a("h1",{staticClass:"title"},[t._v("What's your first name?")]),t._v(" "),a("div",{staticClass:"center-content"},[a("f7-input",{attrs:{type:"text",autofocus:!0,id:"first_name",placeholder:"First name"},on:{focus:function(e){t.handlerFocus()}}})],1),t._v(" "),a("f7-button",{staticClass:"actions-modal-button bottom",attrs:{href:"/signup_03/"}},[t._v("NEXT")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("f7-nav-left",[a("f7-link",{attrs:{back:"",sliding:""}})],1),t._v(" "),a("f7-nav-center"),t._v(" "),a("f7-nav-right",[a("f7-link")],1)],1),t._v(" "),a("div",{staticClass:"content signup",attrs:{inner:""}},[a("h1",{staticClass:"title"},[t._v("Enter your age")]),t._v(" "),a("div",{staticClass:"center-content"},[a("f7-input",{attrs:{type:"number",pattern:"\\d*",id:"age",autofocus:t.autofocus,placeholder:"Your age"},on:{focus:function(e){t.handlerFocus()}}})],1),t._v(" "),a("div",{staticClass:"bottom"},[a("p",{staticClass:"privacy-licence center-content"},[t._v("\n                By entering your age and taping next button you agree with ours "),a("a",[t._v("Terms of Service")]),t._v(" and "),a("a",[t._v("Privacy Policy")])]),t._v(" "),a("f7-button",{staticClass:"actions-modal-button bottom shadow",attrs:{href:"/signup_02/"}},[t._v("NEXT")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",{attrs:{title:"Dynamic Route","back-link":"Back",sliding:""}}),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("ul",[a("li",[a("b",[t._v("Url:")]),t._v(" "+t._s(t.$route.url))]),t._v(" "),a("li",[a("b",[t._v("Path:")]),t._v(" "+t._s(t.$route.path))]),t._v(" "),a("li",[a("b",[t._v("Hash:")]),t._v(" "+t._s(t.$route.hash))]),t._v(" "),a("li",[a("b",[t._v("Params:")]),t._v(" "),a("ul",t._l(t.$route.params,function(e,n){return a("li",[a("b",[t._v(t._s(n)+":")]),t._v(" "+t._s(e))])}))]),t._v(" "),a("li",[a("b",[t._v("Query:")]),t._v(" "),a("ul",t._l(t.$route.query,function(e,n){return a("li",[a("b",[t._v(t._s(n)+":")]),t._v(" "+t._s(e))])}))]),t._v(" "),a("li",[a("b",[t._v("Route:")]),t._v(" "+t._s(t.$route.route.path))])])]),t._v(" "),a("f7-block",{attrs:{inner:""}},[a("f7-link",{on:{click:function(e){t.$route.view.router.back()}}},[t._v("Go back via Router API")])],1)],1)},staticRenderFns:[]}}]),[87]);
//# sourceMappingURL=app.ffbf94868937483c6d68.js.map