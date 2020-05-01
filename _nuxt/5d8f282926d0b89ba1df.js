(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{273:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return h})),r.d(e,"createGesture",(function(){return m}));var n,o=function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new c(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new l(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var n=this.requestedStart,o=-1e4;if(n.forEach((function(t){o=Math.max(o,t)})),o===r){this.capturedId=e,n.clear();var c=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(c),!0}return n.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(d)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(d)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),c=function(){function t(t,e,r,n,o){this.id=e,this.name=r,this.disableScroll=o,this.priority=1e6*n+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),l=function(){function t(t,e,r,n){this.id=e,this.disable=r,this.disableScroll=n,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),d="backdrop-no-scroll",h=new o,f=function(t,e,r,n){var o,c,l=v(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(o="addEventListener",c="removeEventListener"),t[o](e,r,l),function(){t[c](e,r,l)}},v=function(t){if(void 0===n)try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){n=!1}return!!n},y=function(t){return t instanceof Document?t:t.ownerDocument},m=function(t){var e=!1,r=!1,n=!0,o=!1,c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),l=c.canStart,d=c.onWillStart,v=c.onStart,m=c.onEnd,Y=c.notCaptured,G=c.onMove,_=c.threshold,D={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},E=function(t,e,r){var n=r*(Math.PI/180),o="x"===t,c=Math.cos(n),l=e*e,d=0,h=0,f=!1,v=0;return{start:function(t,e){d=t,h=e,v=0,f=!0},detect:function(t,e){if(!f)return!1;var r=t-d,n=e-h,y=r*r+n*n;if(y<l)return!1;var m=Math.sqrt(y),S=(o?r:n)/m;return v=S>c?1:S<-c?-1:0,f=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}(c.direction,c.threshold,c.maxAngle),I=h.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),L=function(){e&&(o=!1,G&&G(D))},k=function(){return!(I&&!I.capture())&&(e=!0,n=!1,D.startX=D.currentX,D.startY=D.currentY,D.startTimeStamp=D.timeStamp,d?d(D).then(z):z(),!0)},z=function(){v&&v(D),n=!0},M=function(){e=!1,r=!1,o=!1,n=!0,I.release()},T=function(t){var r=e,o=n;M(),o&&(S(D,t),r?m&&m(D):Y&&Y(D))},x=function(t,e,r,n,o){var c,l,d,h,v,m,S,w=0,X=function(n){w=Date.now()+2e3,e(n)&&(!l&&r&&(l=f(t,"touchmove",r,o)),d||(d=f(t,"touchend",G,o)),h||(h=f(t,"touchcancel",G,o)))},Y=function(n){w>Date.now()||e(n)&&(!m&&r&&(m=f(y(t),"mousemove",r,o)),S||(S=f(y(t),"mouseup",_,o)))},G=function(t){D(),n&&n(t)},_=function(t){E(),n&&n(t)},D=function(){l&&l(),d&&d(),h&&h(),l=d=h=void 0},E=function(){m&&m(),S&&S(),m=S=void 0},I=function(){D(),E()},L=function(e){e?(c&&c(),v&&v(),c=v=void 0,I()):(c||(c=f(t,"touchstart",X,o)),v||(v=f(t,"mousedown",Y,o)))};return{setDisabled:L,stop:I,destroy:function(){L(!0),n=r=e=void 0}}}(c.el,(function(t){var e=X(t);return!(r||!n)&&(w(t,D),D.startX=D.currentX,D.startY=D.currentY,D.startTimeStamp=D.timeStamp=e,D.velocityX=D.velocityY=D.deltaX=D.deltaY=0,D.event=t,(!l||!1!==l(D))&&(I.release(),!!I.start()&&(r=!0,0===_?k():(E.start(D.startX,D.startY),!0))))}),(function(t){e?!o&&n&&(o=!0,S(D,t),requestAnimationFrame(L)):(S(D,t),E.detect(D.currentX,D.currentY)&&(E.isGesture()&&k()||C()))}),T,{capture:!1}),C=function(){M(),x.stop(),Y&&Y(D)};return{setDisabled:function(t){t&&e&&T(void 0),x.setDisabled(t)},destroy:function(){I.destroy(),x.destroy()}}},S=function(t,e){if(e){var r=t.currentX,n=t.currentY,o=t.timeStamp;w(e,t);var c=t.currentX,l=t.currentY,d=(t.timeStamp=X(e))-o;if(d>0&&d<100){var h=(c-r)/d,f=(l-n)/d;t.velocityX=.7*h+.3*t.velocityX,t.velocityY=.7*f+.3*t.velocityY}t.deltaX=c-t.startX,t.deltaY=l-t.startY,t.event=e}},w=function(t,e){var r=0,n=0;if(t){var o=t.changedTouches;if(o&&o.length>0){var c=o[0];r=c.clientX,n=c.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},X=function(t){return t.timeStamp||Date.now()}}}]);