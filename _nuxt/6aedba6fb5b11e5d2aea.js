(window.webpackJsonp=window.webpackJsonp||[]).push([[66,1],{200:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_backdrop",(function(){return l}));var n=r(22),o=r(61),c=r(271),l=function(){function t(t){Object(n.l)(this,t),this.blocker=c.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(n.f)(this,"ionBackdropTap",7)}return t.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},t.prototype.disconnectedCallback=function(){this.blocker.unblock()},t.prototype.onMouseDown=function(t){this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.render=function(){var t,e=Object(o.b)(this);return Object(n.j)(n.b,{tabindex:"-1",class:(t={},t[e]=!0,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)})},t}();l.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}},271:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return h})),r.d(e,"createGesture",(function(){return m}));var n,o=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new c(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new l(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var n=this.requestedStart,o=-1e4;if(n.forEach((function(t){o=Math.max(o,t)})),o===r){this.capturedId=e,n.clear();var c=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(c),!0}return n.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(d)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(d)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),c=function(){function t(t,e,r,n,o){this.id=e,this.name=r,this.disableScroll=o,this.priority=1e6*n+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),l=function(){function t(t,e,r,n){this.id=e,this.disable=r,this.disableScroll=n,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),d="backdrop-no-scroll",h=new o,f=function(t,e,r,n){var o,c,l=v(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(o="addEventListener",c="removeEventListener"),t[o](e,r,l),function(){t[c](e,r,l)}},v=function(t){if(void 0===n)try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){n=!1}return!!n},y=function(t){return t instanceof Document?t:t.ownerDocument},m=function(t){var e=!1,r=!1,n=!0,o=!1,c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),l=c.canStart,d=c.onWillStart,v=c.onStart,m=c.onEnd,X=c.notCaptured,Y=c.onMove,T=c.threshold,_=c.passive,E=c.blurOnStart,G={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},D=function(t,e,r){var n=r*(Math.PI/180),o="x"===t,c=Math.cos(n),l=e*e,d=0,h=0,f=!1,v=0;return{start:function(t,e){d=t,h=e,v=0,f=!0},detect:function(t,e){if(!f)return!1;var r=t-d,n=e-h,y=r*r+n*n;if(y<l)return!1;var m=Math.sqrt(y),S=(o?r:n)/m;return v=S>c?1:S<-c?-1:0,f=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}(c.direction,c.threshold,c.maxAngle),I=h.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),L=function(){e&&(o=!1,Y&&Y(G))},O=function(){return!(I&&!I.capture())&&(e=!0,n=!1,G.startX=G.currentX,G.startY=G.currentY,G.startTime=G.currentTime,d?d(G).then(z):z(),!0)},z=function(){E&&function(){if("undefined"!=typeof document){var t=document.activeElement;null!==t&&t.blur&&t.blur()}}(),v&&v(G),n=!0},x=function(){e=!1,r=!1,o=!1,n=!0,I.release()},C=function(t){var r=e,o=n;x(),o&&(S(G,t),r?m&&m(G):X&&X(G))},M=function(t,e,r,n,o){var c,l,d,h,v,m,S,k=0,w=function(n){k=Date.now()+2e3,e(n)&&(!l&&r&&(l=f(t,"touchmove",r,o)),d||(d=f(t,"touchend",Y,o)),h||(h=f(t,"touchcancel",Y,o)))},X=function(n){k>Date.now()||e(n)&&(!m&&r&&(m=f(y(t),"mousemove",r,o)),S||(S=f(y(t),"mouseup",T,o)))},Y=function(t){_(),n&&n(t)},T=function(t){E(),n&&n(t)},_=function(){l&&l(),d&&d(),h&&h(),l=d=h=void 0},E=function(){m&&m(),S&&S(),m=S=void 0},G=function(){_(),E()},D=function(e){void 0===e&&(e=!0),e?(c||(c=f(t,"touchstart",w,o)),v||(v=f(t,"mousedown",X,o))):(c&&c(),v&&v(),c=v=void 0,G())};return{enable:D,stop:G,destroy:function(){D(!1),n=r=e=void 0}}}(c.el,(function(t){var e=w(t);return!(r||!n)&&(k(t,G),G.startX=G.currentX,G.startY=G.currentY,G.startTime=G.currentTime=e,G.velocityX=G.velocityY=G.deltaX=G.deltaY=0,G.event=t,(!l||!1!==l(G))&&(I.release(),!!I.start()&&(r=!0,0===T?O():(D.start(G.startX,G.startY),!0))))}),(function(t){e?!o&&n&&(o=!0,S(G,t),requestAnimationFrame(L)):(S(G,t),D.detect(G.currentX,G.currentY)&&(D.isGesture()&&O()||P()))}),C,{capture:!1,passive:_}),P=function(){x(),M.stop(),X&&X(G)};return{enable:function(t){void 0===t&&(t=!0),t||(e&&C(void 0),x()),M.enable(t)},destroy:function(){I.destroy(),M.destroy()}}},S=function(t,e){if(e){var r=t.currentX,n=t.currentY,o=t.currentTime;k(e,t);var c=t.currentX,l=t.currentY,d=(t.currentTime=w(e))-o;if(d>0&&d<100){var h=(c-r)/d,f=(l-n)/d;t.velocityX=.7*h+.3*t.velocityX,t.velocityY=.7*f+.3*t.velocityY}t.deltaX=c-t.startX,t.deltaY=l-t.startY,t.event=e}},k=function(t,e){var r=0,n=0;if(t){var o=t.changedTouches;if(o&&o.length>0){var c=o[0];r=c.clientX,n=c.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},w=function(t){return t.timeStamp||Date.now()}}}]);