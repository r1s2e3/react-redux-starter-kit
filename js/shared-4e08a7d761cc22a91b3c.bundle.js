webpackJsonp([5],{143:function(e,t,n){"use strict";var i=(n(218),n(372));n.d(t,"b",function(){return i.a}),n.d(t,"c",function(){return i.b}),n.d(t,"d",function(){return i.c});var r=n(377);n.d(t,"e",function(){return r.a});var a=n(376);n.d(t,"a",function(){return a.a});n(383),n(384),n(388),n(382)},217:function(e,t,n){"use strict";function i(e,t,n){return{type:"@@MULTI_CONNECT:ADD_INSTANCE",payload:{initialState:t,instanceKey:e,keyPathToState:n}}}function r(e,t){return{type:"@@MULTI_CONNECT:REMOVE_INSTANCE",payload:{instanceKey:e,keyPathToState:t}}}t.a=i,t.b=r},218:function(e,t,n){"use strict";var i=(n(217),n(387));n(385),n(386);n.d(t,"a",function(){return i.a})},219:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){this._store=null,this._deps=null}return Object.defineProperty(e.prototype,"store",{set:function(e){this._store=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dependencies",{set:function(e){this._deps=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"deps",{get:function(){return this._deps||null},enumerable:!0,configurable:!0}),e.prototype.setExtraComponent=function(e,t){if(!this.extraComponents)throw new Error("Cannot set module extra component: no requirements found for extra component");this.extraComponents[e]=t},e}()},220:function(e,t,n){"use strict";var i=n(20),r=n(0),a=(n.n(r),n(78)),o=n(93),c=(n.n(o),n(63)),l=n.n(c),p=n(639),d=(n.n(p),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.b=l()("header"),t}return i.a(t,e),t.prototype.render=function(){var e=this.b,t=this.props.children;return r.createElement(a.h,null,r.createElement(a.h.Header,null,r.createElement(a.h.Brand,{onClick:this.onBrandClick,className:e("brand")()},"FSD Starter kit")),r.createElement(a.i,null,r.createElement(a.j,{eventKey:"order",onSelect:this.onNavItemClick},"Travel order form")),t)},t.prototype.onNavItemClick=function(e){if(this.props.onLinkClick)switch(e){case"order":this.props.onLinkClick("/order");break;default:return}},t.prototype.onBrandClick=function(){this.props.onLinkClick&&this.props.onLinkClick("/home")},i.c([o.bind],t.prototype,"onNavItemClick",null),i.c([o.bind],t.prototype,"onBrandClick",null),t}(r.PureComponent));t.a=d},221:function(e,t,n){"use strict";function i(e){var t=e.children,n=e.footerContent,i=e.headerContent,o=c()("rows-layout");return r.createElement(a.k,{fluid:!0,className:o()},r.createElement(a.l,null,r.createElement("header",null,i)),r.createElement(a.l,null,r.createElement("main",null,t)),r.createElement(a.l,{className:o("footer-row")()},r.createElement("footer",null,r.createElement(a.b,{className:o("footer-content")(),header:r.createElement(a.k,null,n)}))))}var r=n(0),a=(n.n(r),n(78)),o=n(63),c=n.n(o),l=n(640);n.n(l);t.a=i},334:function(e,t,n){"use strict";function i(e){return e instanceof Error?e.message:String(e)}t.a=i},370:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var i=[{id:1,areas:[{id:1,display_name:"Москва, город Москва",name:"Москва",point:"55.753949644878766, 37.616932690143585",city:1},{id:2,display_name:"Балашиха, Балашихинский район",name:"Балашиха",point:"55.7923783301028, 37.965276539325714",city:1},{id:3,display_name:"Серково, Щелковский район",name:"Серково",point:"55.89449323434611, 37.96184062957764",city:1},{id:4,display_name:"Оболдино, Щелковский район:",name:"Оболдино",point:"55.88371131963821, 37.92338848114014",city:1},{id:5,display_name:"Пушкино, Пушкинский район",name:"Пушкино",point:"55.98073679965405, 37.86774605512619",city:1},{id:6,display_name:"Жостово, Мытищинский район",name:"Жостово",point:"56.008290362588994, 37.65834331512451",city:1},{id:7,display_name:"Лобня, город Лобня",name:"Лобня",point:"56.02210774824983, 37.49080181121826",city:1},{id:8,display_name:"Марфино, Мытищинский район",name:"Марфино",point:"56.073495698238546, 37.56495952606201",city:1},{id:9,display_name:"Менделеево, Солнечногорский район",name:"Менделеево",point:"56.036687404450184, 37.22987651824951",city:1},{id:10,display_name:"Поварово, Солнечногорский район",name:"Поварово",point:"56.06889658258056, 37.05546855926514",city:1},{id:11,display_name:"Зеленоград, город Москва",name:"Зеленоград",point:"55.986354711983616, 37.20223903656006",city:1},{id:12,display_name:"Черная Грязь, Солнечногорский район",name:"Черная Грязь",point:"55.97141983009502, 37.32188701629639",city:1},{id:13,display_name:"Красногорск, Красногорский район",name:"Красногорск",point:"55.82281435516977, 37.31639385223389",city:1}],name:"Москва"},{id:2,areas:[{id:15,display_name:"Санкт-Петербург, город Санкт-Петербург",name:"Санкт-Петербург",point:"59.93573015317157, 30.323942005634308",city:2},{id:16,display_name:"Парголово, город Санкт-Петербург",name:"Парголово",point:"60.078521393256864, 30.268130600452423",city:2},{id:17,display_name:"Новое Девяткино, Всеволожский район",name:"Новое Девяткино",point:"60.06687408228638, 30.480990707874298",city:2},{id:18,display_name:"Всеволожск, Всеволожский район",name:"Всеволожск",point:"60.00514328957, 30.673251450061798",city:2},{id:19,display_name:"Шлиссельбург, Кировский район",name:"Шлиссельбург",point:"59.932290079060124, 31.028933823108673",city:2},{id:20,display_name:"Приладожский, Кировский район",name:"Приладожский",point:"59.869618364161106, 31.320071518421173",city:2},{id:21,display_name:"Новый Быт, Кировский район",name:"Новый Быт",point:"59.88753663716051, 31.921572983264923",city:2},{id:22,display_name:"Волхов, Волховский район",name:"Волхов",point:"59.9095766400365, 32.34729319810867",city:2},{id:23,display_name:"Колчаново, Волховский район",name:"Колчаново",point:"60.0408240409786, 32.59448558092117",city:2},{id:24,display_name:"Сестрорецк, город Санкт-Петербург",name:"Сестрорецк",point:"60.09084935764648, 29.987979233264923",city:2},{id:25,display_name:"Кронштадт, город Санкт-Петербург",name:"Кронштадт",point:"60.00926226551742, 29.729306995868683",city:2},{id:26,display_name:"Петергоф, город Санкт-Петербург",name:"Петергоф",point:"59.88650315316297, 29.87498313188553",city:2},{id:27,display_name:"Пушкин, город Санкт-Петербург",name:"Пушкин",point:"59.71380621224868, 30.42429953813553",city:2},{id:28,display_name:"Кингисепп, Кингисеппский район",name:"Кингисепп",point:"59.37271855934667, 28.60880881547928",city:2}],name:"Санкт-Петербург"},{id:3,areas:[{id:29,display_name:"Новосибирск, город Новосибирск",name:"Новосибирск",point:"55.006738248884474, 82.93449282646179",city:3},{id:30,display_name:"Обь, город Обь",name:"Обь",point:"54.99905885196559, 82.69176363945007",city:3},{id:31,display_name:"Бердск, город Бердск",name:"Бердск",point:"54.765417815841005, 83.09556484222412",city:3},{id:32,display_name:"Криводановка, Новосибирский район",name:"Криводановка",point:"55.081093175648064, 82.61216640472412",city:3},{id:33,display_name:"Раздольное, Новосибирский район",name:"Раздольное",point:"55.03783461166674, 83.15186977386475",city:3},{id:34,display_name:"Мошково, Мошковский район",name:"Мошково",point:"55.310365550372815, 83.62447500228882",city:3},{id:35,display_name:"Коченево, Коченевский район",name:"Коченево",point:"55.027996599499545, 82.198805809021",city:3}],name:"Новосибирск"}],r=[{id:1,name:"Transport",uid:100},{id:2,name:"Three Wheel",uid:101},{id:3,name:"Other Vehicles",uid:102},{id:4,name:"Rent Car",uid:103}],a={100:{id:1,schema:{required:["vehicle_type","type","minimum_seat","from","to","date","time"],type:"object",properties:{name:{placeholder:"Enter your name",component:"text",order:8,label:"Name",type:"string",display:0},minimum_seat:{placeholder:"minimum seat",component:"integer",maximum:150,order:3,minimum:1,label:"Minimum seat",type:"integer",display:0},from:{minLength:1,component:"location",order:4,placeholder:"your pickup location",maxLength:85,label:"From",type:"string",display:1},to:{minLength:1,component:"location",order:5,placeholder:"delivery location",maxLength:85,label:"To",type:"string",display:2},time:{pattern:"^([0-1][0-9]|2[0-3]):([0-5]{2})$",component:"time",order:7,placeholder:"travel time",label:"Time",type:"string",display:4},date:{pattern:"^([0-9]{2})-([0-9]{2})-([0-9]{4})$",component:"date",order:6,placeholder:"travel date",label:"Date",type:"string",display:3},vehicle_type:{placeholder:"Choose your vehicle type",enum:["Mini Car","Large Car","Mini Bus","Large Bus","Van","Lorry"],component:"radio",order:1,label:"Vehicle type",type:"string",display:0},type:{placeholder:"",enum:["A/C","Non A/C"],component:"radio",order:2,label:"Type",type:"string",display:0}},title:"Transport"},name:"Transport",uid:100,alert:!0},101:{id:2,schema:{required:["from","to","date","time"],type:"object",properties:{date:{pattern:"^([0-9]{2})-([0-9]{2})-([0-9]{4})$",component:"date",order:3,placeholder:"travel date",label:"Date",type:"string",display:3},to:{placeholder:"delivery location",component:"location",order:2,maxLength:85,label:"To",type:"string",display:2},from:{placeholder:"pickup location",component:"location",order:1,maxLength:85,label:"From",type:"string",display:1},time:{pattern:"^([0-1][0-9]|2[0-3]):([0-5]{2})$",component:"time",order:4,placeholder:"travel time",label:"Time",type:"string",display:4}},title:"Three Wheel"},name:"Three Wheel",uid:101,alert:!0},102:{id:3,schema:{required:["vehicle_type","date","time"],type:"object",properties:{date:{pattern:"^([0-9]{2})-([0-9]{2})-([0-9]{4})$",component:"date",order:2,placeholder:"travel date",label:"Date",type:"string",display:0},vehicle_type:{placeholder:"vehicle type",enum:["Bulldozer","Container Lorry","Forklift","Harvester","Loader","Tipper","Vehicle trailer"],component:"radio",order:1,label:"Vehicle type",type:"string",display:0},time:{placeholder:"travel time",component:"time",order:3,label:"Time",type:"string",display:0}},title:"Other Vehicles"},name:"Other Vehicles",uid:102,alert:!0},103:{id:4,schema:{required:["car_type","name","your_cost","num_of_days"],type:"object",properties:{date:{pattern:"^([0-9]{2})-([0-9]{2})-([0-9]{4})$",component:"date",order:2,placeholder:"rent date",label:"Date",type:"string",display:0},car_type:{placeholder:"your favourite car",enum:["Audi","Nissan","Volvo","Toyota","Honda","Mazda","BMW","Porsche","Jaguar","Ford","Skoda","KIA","Mitsubishi"],component:"dropdown",order:1,label:"Car type",type:"string",display:0},name:{placeholder:"Enter your name",component:"text",order:3,label:"Name",type:"string",display:0},your_cost:{placeholder:"your expected cost",component:"number",order:4,label:"Expected Cost",type:"number",display:0},num_of_days:{enum:["1","2","3"],placeholder:"choose number of days (max 3 days)",component:"radio",order:5,label:"Days wanted",type:"string",display:0}},title:"Rent Car"},name:"Rent Car",uid:104,alert:!0}}},371:function(e,t,n){"use strict";function i(e,t){return t.indexOf("_")<0?e:(e[t.split("_").map(function(e,t){return t>0?""+e[0].toUpperCase()+e.substr(1):e}).join("")]=e[t],delete e[t],e)}t.a=i},372:function(e,t,n){"use strict";var i=n(374);n.d(t,"a",function(){return i.a});var r=n(375);n.d(t,"b",function(){return r.a});var a=n(373);n.d(t,"c",function(){return a.a})},373:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=(n(20),{isRequesting:!1,error:""})},374:function(e,t,n){"use strict";function i(e,t,n){return{execute:function(t){return{type:e,payload:t}},completed:function(e){return{type:t,payload:e}},failed:function(e,t){return{type:n,error:e,payload:t}}}}t.a=i},375:function(e,t,n){"use strict";function i(e,t,n,i){return function(r,a){switch(void 0===r&&(r=i),a.type){case e:return{error:"",isRequesting:!0};case t:return{error:"",isRequesting:!1};case n:return{error:a.error,isRequesting:!1};default:return r}}}t.a=i},376:function(e,t,n){"use strict";function i(e){return function(t,n){return e.reverse().reduce(function(e,t){return t(e,n)},t)}}t.a=i},377:function(e,t,n){"use strict";var i=(n(378),n(379),n(380));n.d(t,"a",function(){return i.a});n(381)},378:function(e,t,n){"use strict"},379:function(e,t,n){"use strict";n(20)},380:function(e,t,n){"use strict";function i(e,t,n){return function(i,a){if(void 0===i&&(i=t),e===a.type){var o=a.payload,c=o.error,l=o.value,p=n&&!c?n(a.payload,i):c;return r.b({},i,{value:l,error:p})}return i}}t.a=i;var r=n(20)},381:function(e,t,n){"use strict";n(20)},382:function(e,t,n){"use strict"},383:function(e,t,n){"use strict"},384:function(e,t,n){"use strict"},385:function(e,t,n){"use strict";var i=(n(20),n(0)),r=(n.n(i),n(26)),a=(n.n(r),n(914)),o=(n.n(a),n(93));n.n(o),n(77),n(144),n(217)},386:function(e,t,n){"use strict";n(20)},387:function(e,t,n){"use strict";function i(e,t,n,r){var o=t.slice(),c=o.shift();return e instanceof Object?void 0===c?a.b({},e,(l={},l[n]=r,l)):a.b({},e,(p={},p[c]=i(e[c],o,n,r),p)):e;var l,p}function r(e,t){switch(t.type){case"@@MULTI_CONNECT:ADD_INSTANCE":var n=t.payload,r=n.initialState,a=n.instanceKey,o=n.keyPathToState;return o.reduce(function(e,t){return e[t]},e)[a]?e:i(e,o,a,r);case"@@MULTI_CONNECT:REMOVE_INSTANCE":var c=t.payload,a=c.instanceKey,o=c.keyPathToState;return i(e,o,a,void 0);default:return e}}t.a=r;var a=n(20)},388:function(e,t,n){"use strict"},639:function(e,t){},640:function(e,t){},641:function(e,t){}});