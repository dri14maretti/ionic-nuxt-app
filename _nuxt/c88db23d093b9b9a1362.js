(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{215:function(t,o,n){"use strict";n.r(o),n.d(o,"ion_img",(function(){return c}));var e=n(22),r=n(61),c=function(){function t(t){var o=this;Object(e.l)(this,t),this.onLoad=function(){o.ionImgDidLoad.emit()},this.onError=function(){o.ionError.emit()},this.ionImgWillLoad=Object(e.f)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(e.f)(this,"ionImgDidLoad",7),this.ionError=Object(e.f)(this,"ionError",7)}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver((function(data){data[0].isIntersecting&&(t.load(),t.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return t.load()}),200))},t.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){return Object(e.j)(e.b,{class:Object(r.b)(this)},Object(e.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.g)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!0,configurable:!0}),t}();c.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);