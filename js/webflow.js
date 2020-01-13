/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function(){"use strict";function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}window.tram=function(t){function e(t,e){return(new B.Bare).init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function i(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function r(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function o(){}function a(t,e){c("Type warning: Expected: ["+t+"] Got: ["+typeof e+"] "+e)}function s(t,e,n){c("Units do not match ["+t+"]: "+e+", "+n)}function u(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return J.test(t)||!K.test(t)?i=parseInt(t,10):K.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i===i?i:n}function c(t){N.debug&&window&&window.console.warn(t)}function h(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}var l=function(t,e,n){function i(t){return"object"==typeof t}function r(t){return"function"==typeof t}function o(){}function a(s,u){function c(){var t=new h;return r(t.init)&&t.init.apply(t,arguments),t}function h(){}u===n&&(u=s,s=Object),c.Bare=h;var l,f=o[t]=s[t],d=h[t]=c[t]=new o;return d.constructor=c,c.mixin=function(e){return h[t]=c[t]=a(c,e)[t],c},c.open=function(t){if(l={},r(t)?l=t.call(c,d,f,c,s):i(t)&&(l=t),i(l))for(var n in l)e.call(l,n)&&(d[n]=l[n]);return r(d.init)||(d.init=s),c},c.open(u)}return a}("prototype",{}.hasOwnProperty),f={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},d={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},p=document,v=window,m="bkwld-tram",w=/[\-\.0-9]/g,b=/[A-Z]/,g="number",y=/^(rgb|#)/,x=/(em|cm|mm|in|pt|pc|px)$/,_=/(em|cm|mm|in|pt|pc|px|%)$/,k=/(deg|rad|turn)$/,z="unitless",E=/(all|none) 0s ease 0s/,q=/^(width|height)$/,A=" ",$=p.createElement("a"),j=["Webkit","Moz","O","ms"],M=["-webkit-","-moz-","-o-","-ms-"],L=function(t){if(t in $.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<j.length;e++)if((n=j[e]+i)in $.style)return{dom:n,css:M[e]+t}},T=e.support={bind:Function.prototype.bind,transform:L("transform"),transition:L("transition"),backface:L("backface-visibility"),timing:L("transition-timing-function")};if(T.transition){var S=T.timing.dom;if($.style[S]=f["ease-in-back"][0],!$.style[S])for(var O in d)f[O][0]=d[O]}var D=e.frame=function(){var t=v.requestAnimationFrame||v.webkitRequestAnimationFrame||v.mozRequestAnimationFrame||v.oRequestAnimationFrame||v.msRequestAnimationFrame;return t&&T.bind?t.bind(v):function(t){v.setTimeout(t,16)}}(),F=e.now=function(){var t=v.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&T.bind?e.bind(t):Date.now||function(){return+new Date}}(),R=l(function(e){function i(t,e){var n=h((""+t).split(A)),i=n[0];e=e||{};var r=Q[i];if(!r)return c("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function r(t,e,n){if(t){var r=typeof t;if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==r&&e)return this.timer=new Y({duration:t,context:this,complete:s}),void(this.active=!0);if("string"==r&&e){switch(t){case"hide":p.call(this);break;case"stop":l.call(this);break;case"redraw":v.call(this);break;default:i.call(this,t,n&&n[1])}return s.call(this)}if("function"==r)return void t.call(this,this);if("object"==r){var o=0;y.call(this,t,function(t,e){t.span>o&&(o=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(o=u(t.wait,0))}),g.call(this),o>0&&(this.timer=new Y({duration:o,context:this}),this.active=!0,e&&(this.timer.complete=s));var a=this,c=!1,h={};D(function(){y.call(a,t,function(t){t.active&&(c=!0,h[t.name]=t.nextStyle)}),c&&a.$el.css(h)})}}}function o(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new Y({duration:t,context:this,complete:s}),this.active=!0)}function a(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=s)):c("No active transition timer. Use start() or wait() before then().")}function s(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();r.call(this,t.options,!0,t.args)}}function l(t){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var e;"string"==typeof t?(e={},e[t]=1):e="object"==typeof t&&null!=t?t:this.props,y.call(this,e,x),g.call(this)}function f(t){l.call(this,t),y.call(this,t,_,k)}function d(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}function p(){l.call(this),this.el.style.display="none"}function v(){this.el.offsetHeight}function w(){l.call(this),t.removeData(this.el,m),this.$el=this.el=null}function g(){var t,e,n=[];this.upstream&&n.push(this.upstream);for(t in this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[T.transition.dom]=n)}function y(t,e,r){var o,a,s,u,c=e!==x,h={};for(o in t)s=t[o],o in V?(h.transform||(h.transform={}),h.transform[o]=s):(b.test(o)&&(o=n(o)),o in Q?h[o]=s:(u||(u={}),u[o]=s));for(o in h){if(s=h[o],!(a=this.props[o])){if(!c)continue;a=i.call(this,o)}e.call(this,a,s)}r&&u&&r.call(this,u)}function x(t){t.stop()}function _(t,e){t.set(e)}function k(t){this.$el.css(t)}function z(t,n){e[t]=function(){return this.children?q.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}function q(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,N.keepInherited&&!N.fallback){var n=U(this.el,"transition");n&&!E.test(n)&&(this.upstream=n)}T.backface&&N.hideBackface&&Z(this.el,T.backface.css,"hidden")},z("add",i),z("start",r),z("wait",o),z("then",a),z("next",s),z("stop",l),z("set",f),z("show",d),z("hide",p),z("redraw",v),z("destroy",w)}),B=l(R,function(e){function n(e,n){var i=t.data(e,m)||t.data(e,m,new R.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),I=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t,e,n){return void 0!==e&&(n=e),t in f?t:n}function i(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?r(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var o={duration:500,ease:"ease",delay:0};t.init=function(t,e,i,r){this.$el=t,this.el=t[0];var a=e[0];i[2]&&(a=i[2]),W[a]&&(a=W[a]),this.name=a,this.type=i[1],this.duration=u(e[1],this.duration,o.duration),this.ease=n(e[2],this.ease,o.ease),this.delay=u(e[3],this.delay,o.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=q.test(this.name),this.unit=r.unit||this.unit||N.defaultUnit,this.angle=r.angle||this.angle||N.defaultAngle,N.fallback||r.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+A+this.duration+"ms"+("ease"!=this.ease?A+f[this.ease][0]:"")+(this.delay?A+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new X({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return U(this.el,this.name)},t.update=function(t){Z(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,Z(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var n,r="number"==typeof t,o="string"==typeof t;switch(e){case g:if(r)return t;if(o&&""===t.replace(w,""))return+t;n="number(unitless)";break;case y:if(o){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:i(t)}n="hex or rgb string";break;case x:if(r)return t+this.unit;if(o&&e.test(t))return t;n="number(px) or string(unit)";break;case _:if(r)return t+this.unit;if(o&&e.test(t))return t;n="number(px) or string(unit or %)";break;case k:if(r)return t+this.angle;if(o&&e.test(t))return t;n="number(deg) or string(angle)";break;case z:if(r)return t;if(o&&_.test(t))return t;n="number(unitless) or string(unit or %)"}return a(n,t),t},t.redraw=function(){this.el.offsetHeight}}),C=l(I,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),y))}}),P=l(I,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),H=l(I,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)o=V[n],r=o[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},V.perspective&&N.perspective&&(this.current.perspective=N.perspective,Z(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),Z(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new G({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new G({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){Z(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),X=l(function(e){function n(t){1===d.push(t)&&D(a)}function a(){var t,e,n,i=d.length;if(i)for(D(a),e=F(),t=i;t--;)(n=d[t])&&n.render(e)}function u(e){var n,i=t.inArray(e,d);i>=0&&(n=d.slice(i+1),d.length=i,n.length&&(d=d.concat(n)))}function c(t){return Math.round(t*p)/p}function h(t,e,n){return r(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}var l={ease:f.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||l.ease;f[e]&&(e=f[e][1]),"function"!=typeof e&&(e=l.ease),this.ease=e,this.update=t.update||o,this.complete=t.complete||o,this.context=t.context||this,this.name=t.name;var n=t.from,i=t.to;void 0===n&&(n=l.from),void 0===i&&(i=l.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof i?(this.begin=n,this.change=i-n):this.format(i,n),this.value=this.begin+this.unit,this.start=F(),!1!==t.autoplay&&this.play()},e.play=function(){this.active||(this.start||(this.start=F()),this.active=!0,n(this))},e.stop=function(){this.active&&(this.active=!1,u(this))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?h(this.startRGB,this.endRGB,i):c(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=i(e),this.endRGB=i(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(w,"");n!==t.replace(w,"")&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=o};var d=[],p=1e3}),Y=l(X,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||o,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),G=l(X,function(t,e){t.init=function(t){this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current;var e,n;for(e in t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new X({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),N=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!T.transition,agentTests:[]};e.fallback=function(t){if(!T.transition)return N.fallback=!0;N.agentTests.push("("+t+")");var e=new RegExp(N.agentTests.join("|"),"i");N.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new X(t)},e.delay=function(t,e,n){return new Y({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var Z=t.style,U=t.css,W={transform:T.transform&&T.transform.css},Q={color:[C,y],background:[C,y,"background-color"],"outline-color":[C,y],"border-color":[C,y],"border-top-color":[C,y],"border-right-color":[C,y],"border-bottom-color":[C,y],"border-left-color":[C,y],"border-width":[I,x],"border-top-width":[I,x],"border-right-width":[I,x],"border-bottom-width":[I,x],"border-left-width":[I,x],"border-spacing":[I,x],"letter-spacing":[I,x],margin:[I,x],"margin-top":[I,x],"margin-right":[I,x],"margin-bottom":[I,x],"margin-left":[I,x],padding:[I,x],"padding-top":[I,x],"padding-right":[I,x],"padding-bottom":[I,x],"padding-left":[I,x],"outline-width":[I,x],opacity:[I,g],top:[I,_],right:[I,_],bottom:[I,_],left:[I,_],"font-size":[I,_],"text-indent":[I,_],"word-spacing":[I,_],width:[I,_],"min-width":[I,_],"max-width":[I,_],height:[I,_],"min-height":[I,_],"max-height":[I,_],"line-height":[I,z],"scroll-top":[P,g,"scrollTop"],"scroll-left":[P,g,"scrollLeft"]},V={};T.transform&&(Q.transform=[H],V={x:[_,"translateX"],y:[_,"translateY"],rotate:[k],rotateX:[k],rotateY:[k],scale:[g],scaleX:[g],scaleY:[g],skew:[k],skewX:[k],skewY:[k]}),T.transform&&T.backface&&(V.z=[_,"translateZ"],V.rotateZ=[k],V.scaleZ=[g],V.perspective=[x]);var J=/ms/,K=/s|\./;return t.tram=e}(window.jQuery);var e={},n=t(function(t){var n=window.$,i=e&&n.tram;/*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
t.exports=function(){var t={};t.VERSION="1.6.0-Webflow";var e={},n=Array.prototype,r=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,r.toString,r.hasOwnProperty),u=n.forEach,c=n.map,h=(n.reduce,n.reduceRight,n.filter),l=(n.every,n.some),f=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),p=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else for(var s=t.keys(n),o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return;return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(p(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return v(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:h&&t.filter===h?t.filter(e,n):(p(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var v=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:l&&n.some===l?n.some(i,r):(p(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(f&&t.indexOf===f?-1!=t.indexOf(e):v(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,r;return function(){e||(e=!0,n=arguments,r=this,i.frame(function(){e=!1,t.apply(r,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function(){var h=t.now()-s;h<n?r=setTimeout(c,n-h):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var h=i&&!r;return r||(r=setTimeout(c,n)),h&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var m=/(.)^/,w={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},b=/\\|'|\r|\n|\u2028|\u2029/g,g=function(t){return"\\"+w[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||m).source,(n.interpolate||m).source,(n.evaluate||m).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(b,g),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()}),i=n&&"object"==typeof n&&"default"in n?n.default:n,r=t(function(t){function n(t){l.env()&&(b(t.design)&&m.on("__wf_design",t.design),b(t.preview)&&m.on("__wf_preview",t.preview)),b(t.destroy)&&m.on("__wf_destroy",t.destroy),t.ready&&b(t.ready)&&r(t)}function r(t){x?t.ready():g.contains(d,t.ready)||d.push(t.ready)}function o(t){b(t.design)&&m.off("__wf_design",t.design),b(t.preview)&&m.off("__wf_preview",t.preview),b(t.destroy)&&m.off("__wf_destroy",t.destroy),t.ready&&b(t.ready)&&a(t)}function a(t){d=g.filter(d,function(e){return e!==t.ready})}function s(t,e){var n=[],i={};return i.up=g.throttle(function(t){g.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(g.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?g.filter(n,function(e){return e!==t}):[]},i}function u(t){b(t)&&t()}function c(){_=!1,g.each(f,n)}function h(){M&&(M.reject(),m.off("load",M.resolve)),M=new v.Deferred,m.on("load",M.resolve)}var l={},f={},d=[],p=window.Webflow||[],v=window.jQuery,m=v(window),w=v(document),b=v.isFunction,g=l._=i,y=e&&v.tram,x=!1,_=!1;y.config.hideBackface=!1,y.config.keepInherited=!0,l.define=function(t,e,i){f[t]&&o(f[t]);var r=f[t]=e(v,g,i)||{};return n(r),r},l.require=function(t){return f[t]},l.push=function(t){x?b(t)&&t():p.push(t)},l.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var k=navigator.userAgent.toLowerCase(),z=navigator.appVersion.toLowerCase(),E=l.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,q=l.env.chrome=/chrome/.test(k)&&/Google/.test(navigator.vendor)&&parseInt(z.match(/chrome\/(\d+)\./)[1],10),A=l.env.ios=/(ipod|iphone|ipad)/.test(k);l.env.safari=/safari/.test(k)&&!q&&!A;var $;E&&w.on("touchstart mousedown",function(t){$=t.target}),l.validClick=E?function(t){return t===$||v.contains(t,$)}:function(){return!0};var j="resize.webflow orientationchange.webflow load.webflow";l.resize=s(m,j),l.scroll=s(m,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),l.redraw=s(),l.location=function(t){window.location=t},l.env()&&(l.location=function(t){window.dispatchEvent(new CustomEvent("__wf_location",{detail:t}))}),l.ready=function(){x=!0,_?c():g.each(d,u),g.each(p,u),l.resize.up()};var M;l.load=function(t){M.then(t)},l.destroy=function(t){t=t||{},_=!0,m.triggerHandler("__wf_destroy"),null!=t.domready&&(x=t.domready),g.each(f,o),l.resize.off(),l.scroll.off(),l.redraw.off(),d=[],p=[],"pending"===M.state()&&h()},v(l.ready),h(),t.exports=window.Webflow=l}),o=r&&"object"==typeof r&&"default"in r?r.default:r;t(function(t){var e=o;e.define("brand",t.exports=function(t){function n(){var e=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),n=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({marginRight:"8px",width:"16px"}),i=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");return e.append(n,i),e[0]}function i(){var t=s.children(u),n=t.length&&t.get(0)===r,i=e.env("editor");n?i&&t.remove():(t.length&&t.remove(),i||s.append(r))}var r,o={},a=t("html"),s=t("body"),u=".w-webflow-badge",c=window.location,h=/PhantomJS/i.test(navigator.userAgent);return o.ready=function(){var t=a.attr("data-wf-status"),e=a.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(e)&&c.hostname!==e&&(t=!0),t&&!h&&(r=r||n(),i(),setTimeout(i,500))},o})}),t(function(t){var e=o;e.define("links",t.exports=function(t,n){function i(){s=f&&e.env("design"),c=e.env("slug")||d.pathname||"",e.scroll.off(o),u=[];for(var t=document.links,n=0;n<t.length;++n)r(t[n]);u.length&&(e.scroll.on(o),o())}function r(e){var n=s&&e.getAttribute("href-disabled")||e.getAttribute("href");if(p.href=n,!(n.indexOf(":")>=0)){var i=t(e);if(0===n.indexOf("#")&&m.test(n)){var r=t(n);r.length&&u.push({link:i,sec:r,active:!1})}else if("#"!==n){var o=p.href===d.href||n===c||w.test(n)&&b.test(c);a(i,v,o)}}}function o(){var t=l.scrollTop(),e=l.height();n.each(u,function(n){var i=n.link,r=n.sec,o=r.offset().top,u=r.outerHeight(),c=.5*e,h=r.is(":visible")&&o+u-c>=t&&o+c<=t+e;n.active!==h&&(n.active=h,a(i,v,h),s&&(i[0].__wf_current=h))})}function a(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}var s,u,c,h={},l=t(window),f=e.env(),d=window.location,p=document.createElement("a"),v="w--current",m=/^#[a-zA-Z][\w:.-]*$/,w=/index\.(html|php)$/,b=/\/$/;return h.ready=h.design=h.preview=i,h})}),t(function(t){var e=o;e.define("scroll",t.exports=function(t){function n(){c.hash&&i(c.hash.substring(1));var n=c.href.split("#")[0];s.on("click","a",function(r){if(!(e.env("design")||window.$.mobile&&t(r.currentTarget).hasClass("ui-link")))if("#"!==this.getAttribute("href")){var o=this.href.split("#"),a=o[0]===n?o[1]:null;a&&i(a,r)}else r.preventDefault()})}function i(n,i){if(l.test(n)){var o=t("#"+n);if(o.length){i&&(i.preventDefault(),i.stopPropagation()),c.hash===n||!h||!h.pushState||e.env.chrome&&"file:"===c.protocol||(h.state&&h.state.hash)!==n&&h.pushState({hash:n},"","#"+n);var a=e.env("editor")?".w-editor-body":"body",s=t("header, "+a+" > .header, "+a+" > .w-nav:not([data-no-scroll])"),f="fixed"===s.css("position")?s.outerHeight():0;u.setTimeout(function(){r(o,f)},i?0:300)}}}function r(e,n){var i=t(u).scrollTop(),r=e.offset().top-n;if("mid"===e.data("scroll")){var a=t(u).height()-n,s=e.outerHeight();s<a&&(r-=Math.round((a-s)/2))}var c=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(c=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var h=Date.now(),l=u.requestAnimationFrame||u.mozRequestAnimationFrame||u.webkitRequestAnimationFrame||function(t){u.setTimeout(t,15)},f=(472.143*Math.log(Math.abs(i-r)+125)-2e3)*c,d=function(){var t=Date.now()-h;u.scroll(0,o(i,r,t,f)),t<=f&&l(d)};d()}function o(t,e,n,i){return n>i?e:t+(e-t)*a(n/i)}function a(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}var s=t(document),u=window,c=u.location,h=function(){try{return Boolean(u.frameElement)}catch(t){return!0}}()?null:u.history,l=/^[a-zA-Z0-9][\w:.-]*$/;return{ready:n}})}),t(function(t){o.define("touch",t.exports=function(t){function e(t){function e(t){var e=t.touches;e&&e.length>1||(l=!0,f=!1,e?(d=!0,u=e[0].clientX,c=e[0].clientY):(u=t.clientX,c=t.clientY),h=u)}function i(t){if(l){if(d&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var e=t.touches,i=e?e[0].clientX:t.clientX,r=e?e[0].clientY:t.clientY,s=i-h;h=i,Math.abs(s)>p&&o&&""===String(o())&&(n("swipe",t,{direction:s>0?"right":"left"}),a()),(Math.abs(i-u)>10||Math.abs(r-c)>10)&&(f=!0)}}function r(t){if(l){if(l=!1,d&&"mouseup"===t.type)return t.preventDefault(),t.stopPropagation(),void(d=!1);f||n("tap",t)}}function a(){l=!1}function s(){t.removeEventListener("touchstart",e,!1),t.removeEventListener("touchmove",i,!1),t.removeEventListener("touchend",r,!1),t.removeEventListener("touchcancel",a,!1),t.removeEventListener("mousedown",e,!1),t.removeEventListener("mousemove",i,!1),t.removeEventListener("mouseup",r,!1),t.removeEventListener("mouseout",a,!1),t=null}var u,c,h,l=!1,f=!1,d=!1,p=Math.min(Math.round(.04*window.innerWidth),40);t.addEventListener("touchstart",e,!1),t.addEventListener("touchmove",i,!1),t.addEventListener("touchend",r,!1),t.addEventListener("touchcancel",a,!1),t.addEventListener("mousedown",e,!1),t.addEventListener("mousemove",i,!1),t.addEventListener("mouseup",r,!1),t.addEventListener("mouseout",a,!1),this.destroy=s}function n(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}var i={},r=!document.addEventListener,o=window.getSelection;return r&&(t.event.special.tap={bindType:"click",delegateType:"click"}),i.init=function(n){return r?null:(n="string"==typeof n?t(n).get(0):n,n?new e(n):null)},i.instance=i.init(document),i})})}();