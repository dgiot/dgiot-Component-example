(function(t){function e(e){for(var n,i,a=e[0],r=e[1],u=e[2],l=0,f=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var r=o[a];0!==s[r]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=r;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},4678:function(t,e,o){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=c(t);return o(e)}function c(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=c,t.exports=s,s.id="4678"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("dgiotMqttDashboard")],1)},c=[],i=o("9a3c"),a={name:"App",components:{dgiotMqttDashboard:i["a"]}},r=a,u=(o("034f"),o("2877")),d=Object(u["a"])(r,s,c,!1,null,null,null),l=d.exports,f=(o("99af"),o("6821")),p=o.n(f);function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dmmd34r23fdew";return p()(t+e)}var m=function(t){var e=new t({methods:{emit:function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];this.$emit.apply(this,[b(t)].concat(o))},on:function(t,e){this.$on(b(t),e)},off:function(t,e){this.$off(b(t),e)}}});window.Bus=e,t.prototype.$bus=e},g=m,h=(o("4ec9"),o("d3b7"),o("3ca3"),o("ddb0"),o("2f62")),j=o("81b0"),M=o.n(j),v=o("0e44"),q=o("b054"),S=o.n(q),y=!1;n["default"].use(h["a"]);var w=function(){return{MqttTopic:new Map,connectStatus:"disconnected",pathRouter:"",mqttSettings:{},historyMsg:new Map,mqttStatus:!1}},x={connectStatus:function(t){return t.connectStatus},MqttTopic:function(t){return t.MqttTopic},pathRouter:function(t){return t.pathRouter},mqttSettings:function(t){return t.mqttSettings},historyMsg:function(t){return t.historyMsg},mqttStatus:function(t){return t.mqttStatus}},k={setHistoryMsg:function(t,e){t.historyMsg=e},setMqttStatus:function(t,e){t.mqttStatus=e},setConnectStatus:function(t,e){t.connectStatus=e},setMqttTopic:function(t,e){t.MqttTopic=e},setPathRouter:function(t,e){t.pathRouter=M.a.merge(t.pathRouter,e)},setMqttSettings:function(t,e){t.mqttSettings=e}},z={setHistoryMsg:function(t,e){var o=t.commit;o("setHistoryMsg",e)},setMqttStatus:function(t,e){var o=t.commit;o("setMqttStatus",e)},setPathRouter:function(t,e){var o=t.commit;o("setPathRouter",e)},setConnectStatus:function(t,e){var o=t.commit;o("setConnectStatus",e)},setMqttTopic:function(t,e){var o=t.commit;o("setMqttTopic",e)},setMqttSettings:function(t,e){var o=t.commit;o("setMqttSettings",e)}},C=[Object(v["a"])(),S()()],N=new h["a"].Store({state:w,getters:x,mutations:k,actions:z,plugins:y?C:[]}),T=o("5530"),$=o("3835"),E=o("b85c"),O=(o("a9e3"),o("5cc6"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("f121"));function R(t,e){var o=document.createElement("script"),n=e||function(){};o.type="text/javascript",o.readyState?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(o.onreadystatechange=null,n())}:o.onload=function(){n()},o.src=t,document.getElementsByTagName("head")[0].appendChild(o)}var D="https:"===window.location.protocol,P={client:null,mqttStatus:!1,options:{},onConnect:function(){P.mqttStatus=!0,P.options&&P.options.success&&P.options.success()},onFailure:function(){P.mqttStatus=!1,P.options&&P.options.error&&P.options.error()},onConnectionLost:function(t){console.log("连接已断开",P.mqttStatus),0!==t.errorCode&&(console.log("onConnectionLost:"+t.errorMessage),console.log("连接已断开"),P.mqttStatus=!1,P.options&&P.options.connectLost&&P.options.connectLost(t.errorMessage))},onMessageArrived:function(t){P.options&&P.options.onMessage&&P.options.onMessage(t)},sendMessage:function(t,e){if(P.mqttStatus){var o=new Paho.MQTT.Message(JSON.stringify(e));if(o.destinationName=t,P.client&&P.mqttStatus)return P.client.send(o),!0}return!1},subscribe:function(t,e){return!(!P.client||!P.mqttStatus)&&(P.client.subscribe(t,{qos:e||0}),!0)},unsubscribe:function(t){return console.log("unsubscribe mqtt ".concat(t)),!(!P.client||!P.mqttStatus)&&(P.client.unsubscribe(t),!0)},reconnect:function(){return"https:"===window.location.protocol&&(P.options.useSSL=D),console.log(P.client,P.options,"options"),!(!P.client||!P.options)&&(P.client.connect({onSuccess:this.onConnect,useSSL:D,onFailure:this.onFailure,userName:P.options.userName||"admin",password:P.options.passWord||"password"}),!0)},disconnect:function(){P.client&&P.mqttStatus&&(P.client.disconnect(),P.mqttStatus=!1)},init:function(t){var e=this;"https:"===window.location.protocol&&(t.useSSL=D),R("https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js",(function(){t&&(P.options=t,P.client=new Paho.MQTT.Client(P.options.ip||"127.0.0.1",Number(P.options.port||61623),P.options.id||"0"),P.client.connect({onSuccess:e.onConnect,onFailure:e.onFailure,useSSL:D,userName:P.options.userName||"admin",password:P.options.passWord||"password"}),P.disconnect=e.disconnect,P.client.onConnectionLost=e.onConnectionLost,P.client.onMessageArrived=e.onMessageArrived)}))}};window.iotMqtt=P;var A=P,H=o("c1df"),L=o.n(H);function Y(t){var e,o=Object.create(null),n=Object(E["a"])(t);try{for(n.s();!(e=n.n()).done;){var s=Object($["a"])(e.value,2),c=s[0],i=s[1];o[c]=i}}catch(a){n.e(a)}finally{n.f()}return o}var _={name:"MqttMixin",data:function(){return{consoleTale:[],MapTopic:new Map,HistoryMsg:new Map,countNum:0,reconnectNum:0,isReconnect:O["reconnect"],maxReconnectNum:O["maxReconnectNum"]}},computed:{pathRouter:function(){return N.state.pathRouter},connectStatus:function(){return N.state.connectStatus},MqttTopic:function(){return N.state.MqttTopic},mqttSettings:function(){return N.state.mqttSettings}},created:function(){var t=this;t.$bus.$off("MqttConnect"),t.$bus.$on("MqttConnect",(function(e){if(e){t.connectMqtt(e);var o={};o["".concat(e.router)]="".concat(e.router),N.dispatch("setPathRouter",o)}})),t.$bus.$off("MqttStatus"),t.$bus.$on("MqttStatus",(function(e){if(e){var o={};o["".concat(e)]="".concat(e),N.dispatch("setPathRouter",o),t.routerAck("init")}})),t.$bus.$off("MqttDisconnect"),t.$bus.$on("MqttDisconnect",(function(e){e&&t.disconnect()})),t.$bus.$off("MqttSubscribe"),t.$bus.$on("MqttSubscribe",(function(e){M.a.isEmpty(e)||t.subscribe(e)})),t.$bus.$off("MqttUnbscribe"),t.$bus.$on("MqttUnbscribe",(function(e,o){e&&o&&t.unsubscribe(e,o)})),t.$bus.$off("MqttPublish"),t.$bus.$on("MqttPublish",(function(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];M.a.isEmpty(e)||t.sendMessage(e,o,n,s)}))},mounted:function(){},methods:{routerAck:function(t){var e=this;if(e.pathRouter)for(var o in e.pathRouter)e.$bus.$emit(o,{settings:e.mqttSettings,connectStatus:e.connectStatus,topics:e.MqttTopic,type:t})},connectCheckTopic:function(t){for(var e in t)t[e].endtime>Number(L()().format("x"))?this.subscribe({topickey:e,topic:t[e].topic,ttl:t[e].endtime-Number(L()().format("x"))}):this.unsubscribe(e,t[e].topic)},busSendMsg:function(t,e,o){var n=Number(L()().format("x")),s=Y(this.MqttTopic);for(var c in console.error(n,o),s){if(this.checkTopic(s[c].topic,t)){var i={topic:t,msg:e,Message:o,timestamp:L()().format("x")};this.$bus.$emit("".concat(c),i),console.groupCollapsed("%ciotMqtt SendMsg payloadString","color:#009a61; font-size: 28px; font-weight: 300"),console.groupEnd(),console.table({topic:t,topicKey:c,args:i})}Number(s[c].endtime)<n&&this.unsubscribe(s[c].topic,c)}console.groupCollapsed("%ciotMqtt busSendMsg payloadString","color:#009a61; font-size: 28px; font-weight: 300"),console.warn("%c%s","font-size: 24px;",e),console.groupEnd()},checkTopic:function(t,e){var o=e.length<t.length?e:t;for(var n in o){if("#"==t[n]||t==e)return!0;if("+"!=t[n]&&t[n]!=t[n])return!1}},initMqtt:function(t){if(t.time=L()(new Date).format("YYYY-MM-DD HH:mm:ss.SSS"),M.a.isEmpty(t.clientId))return console.info("%c%s","color: green;font-size: 24px;","options 为空 不连接mqtt"),!1;console.groupCollapsed("%ciotMqtt connect msg","color:#009a61; font-size: 28px; font-weight: 300"),console.table(Object(T["a"])({},t)),console.groupEnd()},connectMqtt:function(t){var e=this,o=this;N.dispatch("setConnectStatus","connecting"),N.dispatch("setMqttSettings",t),A.init({id:t.clientId||t.id,ip:t.ip,port:t.port,userName:t.userName,passWord:t.passWord,success:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"clientId为".concat(t.clientId,",iotMqtt连接成功");A.mqttStatus=!0,o.mqttSuccess(n),M.a.isEmpty(e.MqttTopic)||o.connectCheckTopic(Y(e.MqttTopic)),o.$nextTick((function(){o.subscribe({topicKey:p()("app"),topic:"dgiot/topic/test",ttl:108e5})})),A.subscribe("dgiot/topic/test",0),N.dispatch("setConnectStatus","connected"),N.dispatch("setMqttStatus",!0),o.routerAck("connect")},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iotMqtt接失败,自动重连";N.dispatch("setConnectStatus"),o.mqttError(t),N.dispatch("setConnectStatus","connectFailure"),N.dispatch("setMqttStatus",!1),o.routerAck("disconnected")},connectLost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iotMqtt连接丢失";o.mqttError(t),N.dispatch("setConnectStatus","disconnected"),N.dispatch("setMqttStatus",!1),o.routerAck("disconnected")},onMessage:function(t){var e=t.destinationName,n=void 0===e?"destinationName":e,s=t.duplicate,c=void 0===s?"duplicate":s,i=t.payloadString,a=void 0===i?"payloadString":i,r=t.qos,u=void 0===r?0:r,d=t.retained,l=void 0===d?"retained":d;o.onMessage({destinationName:n,duplicate:c,payloadString:a,qos:u,retained:l})}})},mqttSuccess:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success";console.groupCollapsed("%ciotMqtt connection succeeded","color:#009a61; font-size: 28px; font-weight: 300"),console.info("%c%s","color: green;font-size: 24px;",t),console.groupEnd()},disconnect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"disconnect mqtt";console.groupCollapsed("%ciotMqtt connection succeeded","color:#009a61; font-size: 28px; font-weight: 300"),console.info("%c%s","color: green;font-size: 24px;",t),console.groupEnd(),A.disconnect(),N.dispatch("setConnectStatus","disconnected"),N.dispatch("setMqttStatus",!1),this.routerAck("disconnected")},mqttError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"error",e=this;console.groupCollapsed("%ciotMqtt Connection failed","color:#009a61; font-size: 28px; font-weight: 300"),console.error("%c%s","color: red;font-size: 24px;",t),console.groupEnd(),this.isReconnect?e.reconnect():console.info("reconnect 为"+O["reconnect"],"不自動重連")},connectLost:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"connectLost";console.groupCollapsed("%ciotMqtt Connection lost","color:#009a61; font-size: 28px; font-weight: 300"),console.error("%c%s","color: red;font-size: 24px;",t),console.groupEnd()},onMessage:function(t){var e=this;e.countNum++>=10?e.countNum=0:e.countNum;var o=t.destinationName,n=void 0===o?"destinationName":o,s=t.duplicate,c=void 0===s?"duplicate":s,i=t.payloadBytes,a=void 0===i?"payloadBytes":i,r=t.payloadString,u=void 0===r?"payloadString":r,d=t.qos,l=void 0===d?0:d,f=t.retained,p=void 0===f?"retained":f;if(M.a.isTypedArray(t)){var b=String.fromCharCode.apply(null,new Uint8Array(t)),m=JSON.parse(b);console.log(m),this.HistoryMsg.set(e.countNum,{111:t,type:"Uint8Array ",time:L()(new Date).format("YYYY-MM-DD HH:mm:ss.SSS")})}else this.HistoryMsg.set(e.countNum,{111:t,type:"json",time:L()(new Date).format("YYYY-MM-DD HH:mm:ss.SSS")});var g={destinationName:n,duplicate:c,payloadBytes:a,payloadString:u,qos:l,retained:p};e.consoleTale.push(g),console.groupCollapsed("%ciotMqtt onMessage","color:#009a61; font-size: 28px; font-weight: 300"),console.table(Object(T["a"])({},e.consoleTale)),console.groupEnd(),N.dispatch("setHistoryMsg",e.HistoryMsg),e.busSendMsg(n,u,t)},subscribe:function(t){var e=this,o=t.topicKey,n=t.topic,s=t.ttl,c=t.created,i=void 0===c?L()().format("x"):c,a=t.qos,r=void 0===a?0:a,u=Number(L()().format("x"))+s;e.MapTopic.set(o,{topic:n,endtime:u,created:i,qos:r}),N.dispatch("setMqttTopic",e.MapTopic),M.a.isEmpty(n)?console.error("no topic"):(A.subscribe(n,r),console.groupCollapsed("%ciotMqtt subscribe","color:#009a61; font-size: 28px; font-weight: 300"),console.table(Object(T["a"])({},t)),console.groupEnd()),e.routerAck("subSuccess")},unsubscribe:function(t,e){A.unsubscribe(e);var o=this.MqttTopic;M.a.isEmpty(o)||(o.delete(t),N.dispatch("setMqttTopic",o)),console.info("%c%s","color: green;font-size: 24px;",o),console.groupCollapsed("%ciotMqtt unsubscribe","color:#009a61; font-size: 28px; font-weight: 300"),console.info("%c%s","color: green;font-size: 24px;","unsubscribe: topic"+e),console.groupEnd()},reconnect:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"自动重连mqtt",e=this;e.reconnectNum++;var o=e.maxReconnectNum<4?4:e.maxReconnectNum;e.reconnectNum<o?(A.reconnect(),console.groupCollapsed("%ciotMqtt reconnect","color:#009a61; font-size: 28px; font-weight: 300"),console.log("%c%s","color: black; font-size: 24px;","当前重连次数："+e.reconnectNum+"次"+t),console.groupEnd()):console.error("%c%s","color: black;font-size: 24px;","当前重连次数大于"+o+"次,不再自动重连,重连第"+e.reconnectNum+"次")},sendMessage:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(M.a.isEmpty(e))return console.groupCollapsed("%csendMsg","color:#009a61; font-size: 28px; font-weight: 300"),console.error(t,e,"没有发送消息的内容"),void console.groupEnd();try{console.log(new Date),A.sendMessage(t,e,o,n),console.groupCollapsed("%csendMsg","color:#009a61; font-size: 28px; font-weight: 300"),console.log("topic:",t),console.table(e),console.table(Object(T["a"])({},e)),console.groupEnd()}catch(s){console.log("error",s),console.groupCollapsed("%ciotMqtt sendMessage error","color:#009a61; font-size: 28px; font-weight: 300"),console.warn("%c%s","color: red;font-size: 24px;",s),console.groupEnd()}}}};window.MqttMixin=_;var F=_;n["default"].use(g),n["default"].config.productionTip=!1,n["default"].mixin(F),new n["default"]({store:N,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,o){},f121:function(t,e,o){var n=location;n.hostname;t.exports={reconnect:!0,maxReconnectNum:10,client:{},options:{host:"prod.iotn2n.com",port:"https:"===window.location.protocol?8084:8083,ip:"prod.iotn2n.com",username:"_test",isSSL:"https:"===window.location.protocol,password:"_iotn2n",keepalive:60,clean:!0,clientId:"dgiot",subQos:0,publishQos:0,publishMessage:'{ "msg": "Hello, World!" }',subTopic:"testtopic/#",publishTopic:"testtopic",publishRetain:!1,receivedMessages:[],publishedMessages:[],subscriptions:[]}}}});
//# sourceMappingURL=app.03dc0b9d.js.map