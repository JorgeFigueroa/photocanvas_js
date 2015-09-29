/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
function mdMediaFactory(e, t, n) {
   function r(e) {
      var t = m[e];
      angular.isUndefined(t) && (t = m[e] = o(e));
      var n = f[t];
      return angular.isUndefined(n) && (n = a(t)), n
   }

   function o(t) {
      return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t)
   }

   function a(e) {
      var t = u[e] = n.matchMedia(e);
      return t.addListener(i), f[t.media] = !!t.matches
   }

   function i(e) {
      t.$evalAsync(function () {
         f[e.media] = !!e.matches
      })
   }

   function c(e) {
      return u[e]
   }

   function d(t, n) {
      for (var r = 0; r < e.MEDIA_PRIORITY.length; r++) {
         var o = e.MEDIA_PRIORITY[r];
         if (u[m[o]].matches) {
            var a = s(t, n + "-" + o);
            if (t[a])return t[a]
         }
      }
      return t[s(t, n)]
   }

   function l(t, n, r) {
      var o = [];
      return t.forEach(function (t) {
         var a = s(n, t);
         n[a] && o.push(n.$observe(a, angular.bind(void 0, r, null)));
         for (var i in e.MEDIA) {
            if (a = s(n, t + "-" + i), !n[a])return;
            o.push(n.$observe(a, angular.bind(void 0, r, i)))
         }
      }), function () {
         o.forEach(function (e) {
            e()
         })
      }
   }

   function s(e, t) {
      return p[t] || (p[t] = e.$normalize(t))
   }

   var m = {}, u = {}, f = {}, p = {};
   return r.getResponsiveAttribute = d, r.getQuery = c, r.watchResponsiveAttributes = l, r
}
angular.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.theming.palette", "material.core.theming", "material.components.autocomplete", "material.components.backdrop", "material.components.button", "material.components.bottomSheet", "material.components.card", "material.components.checkbox", "material.components.content", "material.components.dialog", "material.components.divider", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.tabs", "material.components.textField", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.whiteframe"]), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, n) {
         e.decorator("$$rAF", ["$delegate", t]), n.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")
      }

      function t(e) {
         return e.throttle = function (t) {
            var n, r, o, a;
            return function () {
               n = arguments, a = this, o = t, r || (r = !0, e(function () {
                  o.apply(a, n), r = !1
               }))
            }
         }, e
      }

      angular.module("material.core", ["material.core.theming"]).config(e), e.$inject = ["$provide", "$mdThemingProvider"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t) {
         function n(e) {
            return r ? "webkit" + e.charAt(0).toUpperCase() + e.substring(1) : e
         }

         var r = /webkit/i.test(t.vendorPrefix);
         return {
            KEY_CODE: {
               ENTER: 13,
               ESCAPE: 27,
               SPACE: 32,
               LEFT_ARROW: 37,
               UP_ARROW: 38,
               RIGHT_ARROW: 39,
               DOWN_ARROW: 40,
               TAB: 9
            },
            CSS: {
               TRANSITIONEND: "transitionend" + (r ? " webkitTransitionEnd" : ""),
               ANIMATIONEND: "animationend" + (r ? " webkitAnimationEnd" : ""),
               TRANSFORM: n("transform"),
               TRANSFORM_ORIGIN: n("transformOrigin"),
               TRANSITION: n("transition"),
               TRANSITION_DURATION: n("transitionDuration"),
               ANIMATION_PLAY_STATE: n("animationPlayState"),
               ANIMATION_DURATION: n("animationDuration"),
               ANIMATION_NAME: n("animationName"),
               ANIMATION_TIMING: n("animationTimingFunction"),
               ANIMATION_DIRECTION: n("animationDirection")
            },
            MEDIA: {
               sm: "(max-width: 600px)",
               "gt-sm": "(min-width: 600px)",
               md: "(min-width: 600px) and (max-width: 960px)",
               "gt-md": "(min-width: 960px)",
               lg: "(min-width: 960px) and (max-width: 1200px)",
               "gt-lg": "(min-width: 1200px)"
            },
            MEDIA_PRIORITY: ["gt-lg", "lg", "gt-md", "md", "gt-sm", "sm"]
         }
      }

      angular.module("material.core").factory("$mdConstant", e), e.$inject = ["$$rAF", "$sniffer"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      function e(e, t) {
         function n() {
            return [].concat(b)
         }

         function r() {
            return b.length
         }

         function o(e) {
            return b.length && e > -1 && e < b.length
         }

         function a(e) {
            return e ? o(m(e) + 1) : !1
         }

         function i(e) {
            return e ? o(m(e) - 1) : !1
         }

         function c(e) {
            return o(e) ? b[e] : null
         }

         function d(e, t) {
            return b.filter(function (n) {
               return n[e] === t
            })
         }

         function l(e, t) {
            return e ? (angular.isNumber(t) || (t = b.length), b.splice(t, 0, e), m(e)) : -1
         }

         function s(e) {
            u(e) && b.splice(m(e), 1)
         }

         function m(e) {
            return b.indexOf(e)
         }

         function u(e) {
            return e && m(e) > -1
         }

         function f() {
            return b.length ? b[0] : null
         }

         function p() {
            return b.length ? b[b.length - 1] : null
         }

         function h(e, n, r, a) {
            r = r || g;
            for (var i = m(n); ;) {
               if (!o(i))return null;
               var c = i + (e ? -1 : 1), d = null;
               if (o(c) ? d = b[c] : t && (d = e ? p() : f(), c = m(d)), null === d || c === a)return null;
               if (r(d))return d;
               angular.isUndefined(a) && (a = c), i = c
            }
         }

         var g = function () {
            return !0
         };
         e && !angular.isArray(e) && (e = Array.prototype.slice.call(e)), t = !!t;
         var b = e || [];
         return {
            items: n,
            count: r,
            inRange: o,
            contains: u,
            indexOf: m,
            itemAt: c,
            findBy: d,
            add: l,
            remove: s,
            first: f,
            last: p,
            next: angular.bind(null, h, !1),
            previous: angular.bind(null, h, !0),
            hasPrevious: i,
            hasNext: a
         }
      }

      angular.module("material.core").config(["$provide", function (t) {
         t.decorator("$mdUtil", ["$delegate", function (t) {
            return t.iterator = e, t
         }])
      }])
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   angular.module("material.core").factory("$mdMedia", mdMediaFactory), mdMediaFactory.$inject = ["$mdConstant", "$rootScope", "$window"], /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      var e = ["0", "0", "0"];
      angular.module("material.core").factory("$mdUtil", ["$cacheFactory", "$document", "$timeout", "$q", "$window", "$mdConstant", function (t, n, r, o, a, i) {
         function c(e) {
            return e[0] || e
         }

         var d;
         return d = {
            now: window.performance ? angular.bind(window.performance, window.performance.now) : Date.now,
            clientRect: function (e, t, n) {
               var r = c(e);
               t = c(t || r.offsetParent || document.body);
               var o = r.getBoundingClientRect(), a = n ? t.getBoundingClientRect() : {
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0
               };
               return {
                  left: o.left - a.left + t.scrollLeft,
                  top: o.top - a.top + t.scrollTop,
                  width: o.width,
                  height: o.height
               }
            },
            offsetRect: function (e, t) {
               return d.clientRect(e, t, !0)
            },
            floatingScrollbars: function () {
               if (void 0 === this.floatingScrollbars.cached) {
                  var e = angular.element('<div style="z-index: -1; position: absolute; height: 1px; overflow-y: scroll"><div style="height: 2px;"></div></div>');
                  n[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove()
               }
               return this.floatingScrollbars.cached
            },
            forceFocus: function (e) {
               var t = e[0] || e;
               document.addEventListener("click", function r(e) {
                  e.target === t && e.$focus && (t.focus(), e.stopImmediatePropagation(), e.preventDefault(), t.removeEventListener("click", r))
               }, !0);
               var n = document.createEvent("MouseEvents");
               n.initMouseEvent("click", !1, !0, window, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.$material = !0, n.$focus = !0, t.dispatchEvent(n)
            },
            transitionEndPromise: function (e) {
               function t(r) {
                  r.target === e[0] && (e.off(i.CSS.TRANSITIONEND, t), n.resolve())
               }

               var n = o.defer();
               return e.on(i.CSS.TRANSITIONEND, t), n.promise
            },
            fakeNgModel: function () {
               return {
                  $fake: !0, $setTouched: angular.noop, $setViewValue: function (e) {
                     this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function (e) {
                        e()
                     })
                  }, $isEmpty: function (e) {
                     return 0 === ("" + e).length
                  }, $parsers: [], $formatters: [], $viewChangeListeners: [], $render: angular.noop
               }
            },
            debounce: function (e, t, n, o) {
               var a;
               return function () {
                  var i = n, c = Array.prototype.slice.call(arguments);
                  r.cancel(a), a = r(function () {
                     a = void 0, e.apply(i, c)
                  }, t || 10, o)
               }
            },
            throttle: function (e, t) {
               var n;
               return function () {
                  var r = this, o = arguments, a = d.now();
                  (!n || a - n > t) && (e.apply(r, o), n = a)
               }
            },
            time: function (e) {
               var t = d.now();
               return e(), d.now() - t
            },
            nextUid: function () {
               for (var t, n = e.length; n;) {
                  if (n--, t = e[n].charCodeAt(0), 57 == t)return e[n] = "A", e.join("");
                  if (90 != t)return e[n] = String.fromCharCode(t + 1), e.join("");
                  e[n] = "0"
               }
               return e.unshift("0"), e.join("")
            },
            disconnectScope: function (e) {
               if (e && e.$root !== e && !e.$$destroyed) {
                  var t = e.$parent;
                  e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null
               }
            },
            reconnectScope: function (e) {
               if (e && e.$root !== e && e.$$disconnected) {
                  var t = e, n = t.$parent;
                  t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t
               }
            },
            getClosest: function (e, t) {
               t = t.toUpperCase();
               do if (e.nodeName === t)return e; while (e = e.parentNode);
               return null
            }
         }
      }]), angular.element.prototype.focus = angular.element.prototype.focus || function () {
         return this.length && this[0].focus(), this
      }, angular.element.prototype.blur = angular.element.prototype.blur || function () {
         return this.length && this[0].blur(), this
      }
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r(e, n, r) {
            var o = e[0];
            o.hasAttribute(n) || c(o, n) || (r = angular.isString(r) ? r.trim() : "", r.length ? e.attr(n, r) : t.warn('ARIA: Attribute "', n, '", required for accessibility, is missing on node:', o))
         }

         function o(t, n, o) {
            e(function () {
               r(t, n, o())
            })
         }

         function a(e, t) {
            o(e, t, function () {
               return i(e)
            })
         }

         function i(e) {
            return e.text().trim()
         }

         function c(e, t) {
            function r(e) {
               var t = e.currentStyle ? e.currentStyle : n.getComputedStyle(e);
               return "none" === t.display
            }

            var o = e.hasChildNodes(), a = !1;
            if (o)for (var i = e.childNodes, c = 0; c < i.length; c++) {
               var d = i[c];
               1 === d.nodeType && d.hasAttribute(t) && (r(d) || (a = !0))
            }
            return a
         }

         return {expect: r, expectAsync: o, expectWithText: a}
      }

      angular.module("material.core").service("$mdAria", e), e.$inject = ["$$rAF", "$log", "$window"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a) {
         this.compile = function (i) {
            var c = i.templateUrl, d = i.template || "", l = i.controller, s = i.controllerAs, m = i.resolve || {}, u = i.locals || {}, f = i.transformTemplate || angular.identity, p = i.bindToController;
            return angular.forEach(m, function (e, t) {
               m[t] = angular.isString(e) ? n.get(e) : n.invoke(e)
            }), angular.extend(m, u), m.$template = c ? t.get(c, {cache: a}).then(function (e) {
               return e.data
            }) : e.when(d), e.all(m).then(function (e) {
               var t = f(e.$template), n = i.element || angular.element("<div>").html(t.trim()).contents(), a = r(n);
               return {
                  locals: e, element: n, link: function (t) {
                     if (e.$scope = t, l) {
                        var r = o(l, e);
                        p && angular.extend(r, e), n.data("$ngControllerController", r), n.children().data("$ngControllerController", r), s && (t[s] = r)
                     }
                     return a(t)
                  }
               }
            })
         }
      }

      angular.module("material.core").service("$mdCompiler", e), e.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t) {
         var n;
         for (var r in d)n = d[r], "start" === e && n.cancel(), n[e](t, g)
      }

      function t(t) {
         if (!g) {
            var n = +Date.now();
            b && !o(t, b) && n - b.endTime < 1500 || (g = c(t), e("start", t))
         }
      }

      function n(t) {
         g && o(t, g) && (i(t, g), e("move", t))
      }

      function r(t) {
         g && o(t, g) && (i(t, g), g.endTime = +Date.now(), e("end", t), b = g, g = null)
      }

      function o(e, t) {
         return e && t && e.type.charAt(0) === t.type
      }

      function a(e) {
         return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e
      }

      function i(e, t) {
         var n = a(e), r = t.x = n.pageX, o = t.y = n.pageY;
         t.distanceX = r - t.startX, t.distanceY = o - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "up" : t.distanceY < 0 ? "down" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration
      }

      function c(e) {
         var t = a(e), n = {startTime: +Date.now(), target: e.target, type: e.type.charAt(0)};
         return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n
      }

      var d, l = "mousedown touchstart pointerdown", s = "mousemove touchmove pointermove", m = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
      document.contains || (document.contains = function (e) {
         return document.body.contains(e)
      });
      var u = navigator.userAgent || navigator.vendor || window.opera, f = u.match(/iPad/i) || u.match(/iPhone/i) || u.match(/iPod/i), p = u.match(/Android/i), h = f || p;
      h && document.addEventListener("click", function (e) {
         var t = 0 === e.clientX && 0 === e.clientY;
         t || e.$material || (e.preventDefault(), e.stopPropagation())
      }, !0), angular.element(document).on(l, t).on(s, n).on(m, r).on("$$mdGestureReset", function () {
         b = g = null
      });
      var g, b;
      angular.module("material.core").run(["$mdGesture", function () {
      }]).factory("$mdGesture", ["$$MdGestureHandler", "$$rAF", "$timeout", function (e, t, n) {
         function r(t, n) {
            var r = new e(t);
            return angular.extend(r, n), d[t] = r, a
         }

         function o(e, t, n) {
            var r = d[t.replace(/^\$md./, "")];
            if (!r)throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(d).join(", "));
            return r.registerElement(e, n)
         }

         d = {}, h && r("click", {
            options: {maxDistance: 6}, onEnd: function (e, t) {
               t.distance < this.state.options.maxDistance && this.dispatchEvent(e, "click")
            }
         }), r("press", {
            onStart: function (e) {
               this.dispatchEvent(e, "$md.pressdown")
            }, onEnd: function (e) {
               this.dispatchEvent(e, "$md.pressup")
            }
         }), r("hold", {
            options: {maxDistance: 6, delay: 500}, onCancel: function () {
               n.cancel(this.state.timeout)
            }, onStart: function (e, t) {
               return this.state.registeredParent ? (this.state.pos = {
                  x: t.x,
                  y: t.y
               }, this.state.timeout = n(angular.bind(this, function () {
                  this.dispatchEvent(e, "$md.hold"), this.cancel()
               }), this.state.options.delay, !1), void 0) : this.cancel()
            }, onMove: function (e, t) {
               e.preventDefault();
               var n = this.state.pos.x - t.x, r = this.state.pos.y - t.y;
               Math.sqrt(n * n + r * r) > this.options.maxDistance && this.cancel()
            }, onEnd: function () {
               this.onCancel()
            }
         }), r("drag", {
            options: {minDistance: 6, horizontal: !0}, onStart: function () {
               this.state.registeredParent || this.cancel()
            }, onMove: function (e, t) {
               var n, r;
               e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, r = Math.abs(t.distanceY) > 1.5 * this.state.options.minDistance) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, r = Math.abs(t.distanceX) > 1.5 * this.state.options.minDistance), n ? (this.state.dragPointer = c(e), i(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : r && this.cancel())
            }, dispatchDragMove: t.throttle(function (e) {
               this.state.isRunning && (i(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer))
            }), onEnd: function (e) {
               this.state.dragPointer && (i(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer))
            }
         }), r("swipe", {
            options: {minVelocity: .65, minDistance: 10}, onEnd: function (e, t) {
               if (Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance) {
                  var n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight";
                  this.dispatchEvent(e, n)
               }
            }
         });
         var a;
         return a = {handler: r, register: o}
      }]).factory("$$MdGestureHandler", ["$$rAF", function () {
         function e(e) {
            this.name = e, this.state = {}
         }

         function t(e, t, n) {
            n = n || g;
            var r = new angular.element.Event(t);
            r.$material = !0, r.pointer = n, r.srcEvent = e, angular.extend(r, {
               clientX: n.x,
               clientY: n.y,
               screenX: n.x,
               screenY: n.y,
               pageX: n.x,
               pageY: n.y,
               ctrlKey: e.ctrlKey,
               altKey: e.altKey,
               shiftKey: e.shiftKey,
               metaKey: e.metaKey
            }), angular.element(n.target).trigger(r)
         }

         function n(e, t, n) {
            n = n || g;
            var r;
            "click" === t ? (r = document.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, window, e.detail, n.x, n.y, n.x, n.y, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget || null)) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, !0, !0, {})), r.$material = !0, r.pointer = n, r.srcEvent = e, n.target.dispatchEvent(r)
         }

         return e.prototype = {
            onStart: angular.noop,
            onMove: angular.noop,
            onEnd: angular.noop,
            onCancel: angular.noop,
            options: {},
            dispatchEvent: "undefined" != typeof window.jQuery && angular.element === window.jQuery ? t : n,
            start: function (e, t) {
               if (!this.state.isRunning) {
                  var n = this.getNearestParent(e.target), r = n && n.$mdGesture[this.name] || {};
                  this.state = {
                     isRunning: !0,
                     options: angular.extend({}, this.options, r),
                     registeredParent: n
                  }, this.onStart(e, t)
               }
            },
            move: function (e, t) {
               this.state.isRunning && this.onMove(e, t)
            },
            end: function (e, t) {
               this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1)
            },
            cancel: function (e, t) {
               this.onCancel(e, t), this.state = {}
            },
            getNearestParent: function (e) {
               for (var t = e; t;) {
                  if ((t.$mdGesture || {})[this.name])return t;
                  t = t.parentNode
               }
            },
            registerElement: function (e, t) {
               function n() {
                  delete e[0].$mdGesture[r.name], e.off("$destroy", n)
               }

               var r = this;
               return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), n
            }
         }, e
      }])
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
         function e(e) {
            function t(e) {
               return c.optionsFactory = e.options, c.methods = (e.methods || []).concat(a), d
            }

            function n(e, t) {
               return i[e] = t, d
            }

            function r(t, n) {
               if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function () {
                     return {}
                  }, /^cancel|hide|show$/.test(t))throw new Error("Preset '" + t + "' in " + e + " is reserved!");
               if (n.methods.indexOf("_options") > -1)throw new Error("Method '_options' in " + e + " is reserved!");
               return c.presets[t] = {
                  methods: n.methods.concat(a),
                  optionsFactory: n.options,
                  argOption: n.argOption
               }, d
            }

            function o(t, n, r) {
               function o(e) {
                  return e && e._options && (e = e._options), s.show(angular.extend({}, l, e))
               }

               function a(t, n) {
                  var o = {};
                  return o[e] = m, r.invoke(t || function () {
                     return n
                  }, {}, o)
               }

               var d, l, s = t(), m = {hide: s.hide, cancel: s.cancel, show: o};
               return d = c.methods || [], l = a(c.optionsFactory, {}), angular.forEach(i, function (e, t) {
                  m[t] = e
               }), angular.forEach(c.presets, function (e, t) {
                  function n(e) {
                     this._options = angular.extend({}, r, e)
                  }

                  var r = a(e.optionsFactory, {}), o = (e.methods || []).concat(d);
                  if (angular.extend(r, {$type: t}), angular.forEach(o, function (e) {
                        n.prototype[e] = function (t) {
                           return this._options[e] = t, this
                        }
                     }), e.argOption) {
                     var i = "show" + t.charAt(0).toUpperCase() + t.slice(1);
                     m[i] = function (e) {
                        var n = m[t](e);
                        return m.show(n)
                     }
                  }
                  m[t] = function (t) {
                     return arguments.length && e.argOption && !angular.isObject(t) && !angular.isArray(t) ? (new n)[e.argOption](t) : new n(t)
                  }
               }), m
            }

            var a = ["onHide", "onShow", "onRemove"], i = {}, c = {presets: {}}, d = {
               setDefaults: t,
               addPreset: r,
               addMethod: n,
               $get: o
            };
            return d.addPreset("build", {methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"]}), o.$inject = ["$$interimElement", "$animate", "$injector"], d
         }

         function t(e, t, n, r, o, a, i, c, d) {
            function l(e) {
               return e && angular.isString(e) ? e.replace(/\{\{/g, s).replace(/}}/g, m) : e
            }

            var s = i.startSymbol(), m = i.endSymbol(), u = "{{" === s && "}}" === m, f = u ? angular.identity : l;
            return function () {
               function i(e) {
                  if (p.length)return u.cancel().then(function () {
                     return i(e)
                  });
                  var t = new m(e);
                  return p.push(t), t.show().then(function () {
                     return t.deferred.promise
                  })
               }

               function l(e) {
                  var t = p.shift();
                  return t && t.remove().then(function () {
                        t.deferred.resolve(e)
                     })
               }

               function s(e) {
                  var n = p.shift();
                  return t.when(n && n.remove().then(function () {
                     n.deferred.reject(e)
                  }))
               }

               function m(i) {
                  var l, s, m, p, h;
                  return i = i || {}, i = angular.extend({
                     preserveScope: !1,
                     scope: i.scope || n.$new(i.isolateScope),
                     onShow: function (e, t, n) {
                        return a.enter(t, n.parent)
                     },
                     onRemove: function (e, n) {
                        return n && a.leave(n) || t.when()
                     }
                  }, i), i.template && (i.template = f(i.template)), l = {
                     options: i,
                     deferred: t.defer(),
                     show: function () {
                        var n;
                        return n = i.skipCompile ? t(function (e) {
                           e({
                              locals: {}, link: function () {
                                 return i.element
                              }
                           })
                        }) : c.compile(i), p = n.then(function (n) {
                           function a() {
                              i.hideDelay && (s = r(u.cancel, i.hideDelay))
                           }

                           angular.extend(n.locals, l.options), m = n.link(i.scope), angular.isFunction(i.parent) ? i.parent = i.parent(i.scope, m, i) : angular.isString(i.parent) && (i.parent = angular.element(e[0].querySelector(i.parent))), (i.parent || {}).length || (i.parent = o.find("body"), i.parent.length || (i.parent = o)), i.themable && d(m);
                           var c = i.onShow(i.scope, m, i);
                           return t.when(c).then(function () {
                              (i.onComplete || angular.noop)(i.scope, m, i), a()
                           })
                        }, function (e) {
                           p = !0, l.deferred.reject(e)
                        })
                     },
                     cancelTimeout: function () {
                        s && (r.cancel(s), s = void 0)
                     },
                     remove: function () {
                        return l.cancelTimeout(), h = t.when(p).then(function () {
                           var e = m ? i.onRemove(i.scope, m, i) : !0;
                           return t.when(e).then(function () {
                              i.preserveScope || i.scope.$destroy(), h = !0
                           })
                        })
                     }
                  }
               }

               var u, p = [];
               return u = {show: i, hide: l, cancel: s}
            }
         }

         return e.$get = t, t.$inject = ["$document", "$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$interpolate", "$mdCompiler", "$mdTheming"], e
      }

      angular.module("material.core").provider("$$interimElement", e)
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t) {
         function n(e) {
            return e && "" !== e
         }

         var r, o = [], a = {};
         return r = {
            notFoundError: function (t) {
               e.error("No instance found for handle", t)
            }, getInstances: function () {
               return o
            }, get: function (e) {
               if (!n(e))return null;
               var t, r, a;
               for (t = 0, r = o.length; r > t; t++)if (a = o[t], a.$$mdHandle === e)return a;
               return null
            }, register: function (e, t) {
               function n() {
                  var t = o.indexOf(e);
                  -1 !== t && o.splice(t, 1)
               }

               function r() {
                  var n = a[t];
                  n && (n.resolve(e), delete a[t])
               }

               return t ? (e.$$mdHandle = t, o.push(e), r(), n) : angular.noop
            }, when: function (e) {
               if (n(e)) {
                  var o = t.defer(), i = r.get(e);
                  return i ? o.resolve(i) : a[e] = o, o.promise
               }
               return t.reject("Invalid `md-component-id` value.")
            }
         }
      }

      angular.module("material.core").factory("$mdComponentRegistry", e), e.$inject = ["$log", "$q"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         return {
            controller: angular.noop, link: function (t, n, r) {
               r.hasOwnProperty("mdInkRippleCheckbox") ? e.attachCheckboxBehavior(t, n) : e.attachButtonBehavior(t, n)
            }
         }
      }

      function t(e, t) {
         function n(e, t, n) {
            return a(e, t, angular.extend({
               isFAB: t.hasClass("md-fab"),
               isMenuItem: t.hasClass("md-menu-item"),
               center: !1,
               dimBackground: !0
            }, n))
         }

         function r(e, t, n) {
            return a(e, t, angular.extend({center: !0, dimBackground: !1, fitRipple: !0}, n))
         }

         function o(e, t, n) {
            return a(e, t, angular.extend({center: !1, dimBackground: !0, outline: !0}, n))
         }

         function a(n, r, o) {
            function a() {
               var e = r.data("$mdRippleContainer");
               return e ? e : (e = angular.element('<div class="md-ripple-container">'), r.append(e), r.data("$mdRippleContainer", e), e)
            }

            function i(e) {
               function t(e) {
                  var t = "#" === e.charAt(0) ? e.substr(1) : e, n = t.length / 3, r = t.substr(0, n), o = t.substr(n, n), a = t.substr(2 * n);
                  return 1 === n && (r += r, o += o, a += a), "rgba(" + parseInt(r, 16) + "," + parseInt(o, 16) + "," + parseInt(a, 16) + ",0.1)"
               }

               function n(e) {
                  return e.replace(")", ", 0.1)").replace("(", "a(")
               }

               if (e)return 0 === e.indexOf("rgba") ? e.replace(/\d?\.?\d*\s*\)\s*$/, "0.1)") : 0 === e.indexOf("rgb") ? n(e) : 0 === e.indexOf("#") ? t(e) : void 0
            }

            function c(e, n) {
               g.splice(g.indexOf(e), 1), 0 === g.length && a().css({backgroundColor: ""}), t(function () {
                  e.remove()
               }, n, !1)
            }

            function d(e) {
               var t = g.indexOf(e), n = b[t] || {}, r = g.length > 1 ? !1 : E, a = g.length > 1 ? !1 : $;
               r || n.animating || a ? e.addClass("md-ripple-visible") : e && (e.removeClass("md-ripple-visible"), o.outline && e.css({
                  width: f + "px",
                  height: f + "px",
                  marginLeft: -1 * f + "px",
                  marginTop: -1 * f + "px"
               }), c(e, o.outline ? 450 : 650))
            }

            function l(n, c) {
               function l(e) {
                  var t = angular.element('<div class="md-ripple" data-counter="' + h++ + '">');
                  return g.unshift(t), b.unshift({animating: !0}), u.append(t), e && t.css(e), t
               }

               function s(e, t) {
                  var n, r, a, i = u.prop("offsetWidth"), c = u.prop("offsetHeight");
                  return o.isMenuItem ? r = Math.sqrt(Math.pow(i, 2) + Math.pow(c, 2)) : o.outline ? (a = M.getBoundingClientRect(), e -= a.left, t -= a.top, i = Math.max(e, i - e), c = Math.max(t, c - t), r = 2 * Math.sqrt(Math.pow(i, 2) + Math.pow(c, 2))) : (n = o.isFAB ? 1.1 : .8, r = Math.sqrt(Math.pow(i, 2) + Math.pow(c, 2)) * n, o.fitRipple && (r = Math.min(c, i, r))), r
               }

               function m(e, t, n) {
                  function r(e) {
                     return e.replace("rgba", "rgb").replace(/,[^\)\,]+\)/, ")")
                  }

                  var a, i = {backgroundColor: r(T), borderColor: r(T), width: e + "px", height: e + "px"};
                  return o.outline ? (i.width = 0, i.height = 0) : i.marginLeft = i.marginTop = e * -.5 + "px", o.center ? i.left = i.top = "50%" : (a = M.getBoundingClientRect(), i.left = Math.round((t - a.left) / u.prop("offsetWidth") * 100) + "%", i.top = Math.round((n - a.top) / u.prop("offsetHeight") * 100) + "%"), i
               }

               T = i(r.attr("md-ink-ripple")) || i(e.getComputedStyle(o.colorElement[0]).color || "rgb(0, 0, 0)");
               var u = a(), p = s(n, c), v = m(p, n, c), E = l(v), $ = g.indexOf(E), A = b[$] || {};
               return f = p, A.animating = !0, t(function () {
                  o.dimBackground && u.css({backgroundColor: T}), E.addClass("md-ripple-placed md-ripple-scaled"), o.outline ? E.css({
                     borderWidth: .5 * p + "px",
                     marginLeft: p * -.5 + "px",
                     marginTop: p * -.5 + "px"
                  }) : E.css({left: "50%", top: "50%"}), d(E), t(function () {
                     A.animating = !1, d(E)
                  }, o.outline ? 450 : 225, !1)
               }, 0, !1), E
            }

            function s(e) {
               if (u()) {
                  {
                     l(e.pointer.x, e.pointer.y)
                  }
                  $ = !0
               }
            }

            function m() {
               $ = !1;
               var e = g[g.length - 1];
               t(function () {
                  d(e)
               }, 0, !1)
            }

            function u() {
               function e(e) {
                  return e && e.hasAttribute && e.hasAttribute("disabled")
               }

               var t = M.parentNode, n = t && t.parentNode, r = n && n.parentNode;
               return !(e(M) || e(t) || e(n) || e(r))
            }

            if (r.controller("mdNoInk"))return angular.noop;
            o = angular.extend({
               colorElement: r,
               mousedown: !0,
               hover: !0,
               focus: !0,
               center: !1,
               mousedownPauseTime: 150,
               dimBackground: !1,
               outline: !1,
               isFAB: !1,
               isMenuItem: !1,
               fitRipple: !1
            }, o);
            var f, p = r.controller("mdInkRipple") || {}, h = 0, g = [], b = [], v = r.attr("md-highlight"), E = !1, $ = !1, M = r[0], A = r.attr("md-ripple-size"), T = i(r.attr("md-ink-ripple")) || i(e.getComputedStyle(o.colorElement[0]).color || "rgb(0, 0, 0)");
            switch (A) {
               case"full":
                  o.isFAB = !0;
                  break;
               case"partial":
                  o.isFAB = !1
            }
            return o.mousedown && r.on("$md.pressdown", s).on("$md.pressup", m), p.createRipple = l, v && n.$watch(v, function (e) {
               E = e, E && !g.length && t(function () {
                  l(0, 0)
               }, 0, !1), angular.forEach(g, d)
            }), function () {
               r.off("$md.pressdown", s).off("$md.pressup", m), a().remove()
            }
         }

         return {attachButtonBehavior: n, attachCheckboxBehavior: r, attachTabBehavior: o, attach: a}
      }

      function n() {
         return function () {
            return {controller: angular.noop}
         }
      }

      angular.module("material.core").factory("$mdInkRipple", t).directive("mdInkRipple", e).directive("mdNoInk", n()).directive("mdNoBar", n()).directive("mdNoStretch", n()), e.$inject = ["$mdInkRipple"], t.$inject = ["$window", "$timeout"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      angular.module("material.core.theming.palette", []).constant("$mdColorPalette", {
         red: {
            50: "#ffebee",
            100: "#ffcdd2",
            200: "#ef9a9a",
            300: "#e57373",
            400: "#ef5350",
            500: "#f44336",
            600: "#e53935",
            700: "#d32f2f",
            800: "#c62828",
            900: "#b71c1c",
            A100: "#ff8a80",
            A200: "#ff5252",
            A400: "#ff1744",
            A700: "#d50000",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 300 400 A100",
            contrastStrongLightColors: "500 600 700 A200 A400 A700"
         },
         pink: {
            50: "#fce4ec",
            100: "#f8bbd0",
            200: "#f48fb1",
            300: "#f06292",
            400: "#ec407a",
            500: "#e91e63",
            600: "#d81b60",
            700: "#c2185b",
            800: "#ad1457",
            900: "#880e4f",
            A100: "#ff80ab",
            A200: "#ff4081",
            A400: "#f50057",
            A700: "#c51162",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 300 400 A100",
            contrastStrongLightColors: "500 600 A200 A400 A700"
         },
         purple: {
            50: "#f3e5f5",
            100: "#e1bee7",
            200: "#ce93d8",
            300: "#ba68c8",
            400: "#ab47bc",
            500: "#9c27b0",
            600: "#8e24aa",
            700: "#7b1fa2",
            800: "#6a1b9a",
            900: "#4a148c",
            A100: "#ea80fc",
            A200: "#e040fb",
            A400: "#d500f9",
            A700: "#aa00ff",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400 A200 A400 A700"
         },
         "deep-purple": {
            50: "#ede7f6",
            100: "#d1c4e9",
            200: "#b39ddb",
            300: "#9575cd",
            400: "#7e57c2",
            500: "#673ab7",
            600: "#5e35b1",
            700: "#512da8",
            800: "#4527a0",
            900: "#311b92",
            A100: "#b388ff",
            A200: "#7c4dff",
            A400: "#651fff",
            A700: "#6200ea",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400 A200"
         },
         indigo: {
            50: "#e8eaf6",
            100: "#c5cae9",
            200: "#9fa8da",
            300: "#7986cb",
            400: "#5c6bc0",
            500: "#3f51b5",
            600: "#3949ab",
            700: "#303f9f",
            800: "#283593",
            900: "#1a237e",
            A100: "#8c9eff",
            A200: "#536dfe",
            A400: "#3d5afe",
            A700: "#304ffe",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400 A200 A400"
         },
         blue: {
            50: "#e3f2fd",
            100: "#bbdefb",
            200: "#90caf9",
            300: "#64b5f6",
            400: "#42a5f5",
            500: "#2196f3",
            600: "#1e88e5",
            700: "#1976d2",
            800: "#1565c0",
            900: "#0d47a1",
            A100: "#82b1ff",
            A200: "#448aff",
            A400: "#2979ff",
            A700: "#2962ff",
            contrastDefaultColor: "light",
            contrastDarkColors: "100 200 300 400 A100",
            contrastStrongLightColors: "500 600 700 A200 A400 A700"
         },
         "light-blue": {
            50: "#e1f5fe",
            100: "#b3e5fc",
            200: "#81d4fa",
            300: "#4fc3f7",
            400: "#29b6f6",
            500: "#03a9f4",
            600: "#039be5",
            700: "#0288d1",
            800: "#0277bd",
            900: "#01579b",
            A100: "#80d8ff",
            A200: "#40c4ff",
            A400: "#00b0ff",
            A700: "#0091ea",
            contrastDefaultColor: "dark",
            contrastLightColors: "500 600 700 800 900 A700",
            contrastStrongLightColors: "500 600 700 800 A700"
         },
         cyan: {
            50: "#e0f7fa",
            100: "#b2ebf2",
            200: "#80deea",
            300: "#4dd0e1",
            400: "#26c6da",
            500: "#00bcd4",
            600: "#00acc1",
            700: "#0097a7",
            800: "#00838f",
            900: "#006064",
            A100: "#84ffff",
            A200: "#18ffff",
            A400: "#00e5ff",
            A700: "#00b8d4",
            contrastDefaultColor: "dark",
            contrastLightColors: "500 600 700 800 900",
            contrastStrongLightColors: "500 600 700 800"
         },
         teal: {
            50: "#e0f2f1",
            100: "#b2dfdb",
            200: "#80cbc4",
            300: "#4db6ac",
            400: "#26a69a",
            500: "#009688",
            600: "#00897b",
            700: "#00796b",
            800: "#00695c",
            900: "#004d40",
            A100: "#a7ffeb",
            A200: "#64ffda",
            A400: "#1de9b6",
            A700: "#00bfa5",
            contrastDefaultColor: "dark",
            contrastLightColors: "500 600 700 800 900",
            contrastStrongLightColors: "500 600 700"
         },
         green: {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#4caf50",
            600: "#43a047",
            700: "#388e3c",
            800: "#2e7d32",
            900: "#1b5e20",
            A100: "#b9f6ca",
            A200: "#69f0ae",
            A400: "#00e676",
            A700: "#00c853",
            contrastDefaultColor: "dark",
            contrastLightColors: "500 600 700 800 900",
            contrastStrongLightColors: "500 600 700"
         },
         "light-green": {
            50: "#f1f8e9",
            100: "#dcedc8",
            200: "#c5e1a5",
            300: "#aed581",
            400: "#9ccc65",
            500: "#8bc34a",
            600: "#7cb342",
            700: "#689f38",
            800: "#558b2f",
            900: "#33691e",
            A100: "#ccff90",
            A200: "#b2ff59",
            A400: "#76ff03",
            A700: "#64dd17",
            contrastDefaultColor: "dark",
            contrastLightColors: "800 900",
            contrastStrongLightColors: "800 900"
         },
         lime: {
            50: "#f9fbe7",
            100: "#f0f4c3",
            200: "#e6ee9c",
            300: "#dce775",
            400: "#d4e157",
            500: "#cddc39",
            600: "#c0ca33",
            700: "#afb42b",
            800: "#9e9d24",
            900: "#827717",
            A100: "#f4ff81",
            A200: "#eeff41",
            A400: "#c6ff00",
            A700: "#aeea00",
            contrastDefaultColor: "dark",
            contrastLightColors: "900",
            contrastStrongLightColors: "900"
         },
         yellow: {
            50: "#fffde7",
            100: "#fff9c4",
            200: "#fff59d",
            300: "#fff176",
            400: "#ffee58",
            500: "#ffeb3b",
            600: "#fdd835",
            700: "#fbc02d",
            800: "#f9a825",
            900: "#f57f17",
            A100: "#ffff8d",
            A200: "#ffff00",
            A400: "#ffea00",
            A700: "#ffd600",
            contrastDefaultColor: "dark"
         },
         amber: {
            50: "#fff8e1",
            100: "#ffecb3",
            200: "#ffe082",
            300: "#ffd54f",
            400: "#ffca28",
            500: "#ffc107",
            600: "#ffb300",
            700: "#ffa000",
            800: "#ff8f00",
            900: "#ff6f00",
            A100: "#ffe57f",
            A200: "#ffd740",
            A400: "#ffc400",
            A700: "#ffab00",
            contrastDefaultColor: "dark"
         },
         orange: {
            50: "#fff3e0",
            100: "#ffe0b2",
            200: "#ffcc80",
            300: "#ffb74d",
            400: "#ffa726",
            500: "#ff9800",
            600: "#fb8c00",
            700: "#f57c00",
            800: "#ef6c00",
            900: "#e65100",
            A100: "#ffd180",
            A200: "#ffab40",
            A400: "#ff9100",
            A700: "#ff6d00",
            contrastDefaultColor: "dark",
            contrastLightColors: "800 900",
            contrastStrongLightColors: "800 900"
         },
         "deep-orange": {
            50: "#fbe9e7",
            100: "#ffccbc",
            200: "#ffab91",
            300: "#ff8a65",
            400: "#ff7043",
            500: "#ff5722",
            600: "#f4511e",
            700: "#e64a19",
            800: "#d84315",
            900: "#bf360c",
            A100: "#ff9e80",
            A200: "#ff6e40",
            A400: "#ff3d00",
            A700: "#dd2c00",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 300 400 A100 A200",
            contrastStrongLightColors: "500 600 700 800 900 A400 A700"
         },
         brown: {
            50: "#efebe9",
            100: "#d7ccc8",
            200: "#bcaaa4",
            300: "#a1887f",
            400: "#8d6e63",
            500: "#795548",
            600: "#6d4c41",
            700: "#5d4037",
            800: "#4e342e",
            900: "#3e2723",
            A100: "#d7ccc8",
            A200: "#bcaaa4",
            A400: "#8d6e63",
            A700: "#5d4037",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200",
            contrastStrongLightColors: "300 400"
         },
         grey: {
            0: "#ffffff",
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            1000: "#000000",
            A100: "#ffffff",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161",
            contrastDefaultColor: "dark",
            contrastLightColors: "600 700 800 900"
         },
         "blue-grey": {
            50: "#eceff1",
            100: "#cfd8dc",
            200: "#b0bec5",
            300: "#90a4ae",
            400: "#78909c",
            500: "#607d8b",
            600: "#546e7a",
            700: "#455a64",
            800: "#37474f",
            900: "#263238",
            A100: "#cfd8dc",
            A200: "#b0bec5",
            A400: "#78909c",
            A700: "#455a64",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 300",
            contrastStrongLightColors: "400 500"
         }
      })
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         function t(e, t) {
            return t = t || {}, d[e] = o(e, t), s
         }

         function n(e, t) {
            return o(e, angular.extend({}, d[e] || {}, t))
         }

         function o(e, t) {
            var n = T.filter(function (e) {
               return !t[e]
            });
            if (n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
            return t
         }

         function a(e, t) {
            if (t = t || "default", l[e])return l[e];
            var n = "string" == typeof t ? l[t] : t, r = new i(e);
            return n && angular.forEach(n.colors, function (e, t) {
               r.colors[t] = {name: e.name, hues: angular.extend({}, e.hues)}
            }), l[e] = r, r
         }

         function i(e) {
            function t(e) {
               if (e = 0 === arguments.length ? !0 : !!e, e !== n.isDark) {
                  n.isDark = e, n.foregroundPalette = n.isDark ? f : u, n.foregroundShadow = n.isDark ? p : h;
                  var t = n.isDark ? A : M, r = n.isDark ? M : A;
                  return angular.forEach(t, function (e, t) {
                     var o = n.colors[t], a = r[t];
                     if (o)for (var i in o.hues)o.hues[i] === a[i] && (o.hues[i] = e[i])
                  }), n
               }
            }

            var n = this;
            n.name = e, n.colors = {}, n.dark = t, t(!1), E.forEach(function (e) {
               var t = (n.isDark ? A : M)[e];
               n[e + "Palette"] = function (r, o) {
                  var a = n.colors[e] = {name: r, hues: angular.extend({}, t, o)};
                  return Object.keys(a.hues).forEach(function (e) {
                     if (!t[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", n.name).replace("%3", r).replace("%4", Object.keys(t).join(", ")))
                  }), Object.keys(a.hues).map(function (e) {
                     return a.hues[e]
                  }).forEach(function (t) {
                     if (-1 == T.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", t).replace("%2", n.name).replace("%3", e).replace("%4", r).replace("%5", T.join(", ")))
                  }), n
               }, n[e + "Color"] = function () {
                  var t = Array.prototype.slice.call(arguments);
                  return console.warn("$mdThemingProviderTheme." + e + "Color() has been deprecated. Use $mdThemingProviderTheme." + e + "Palette() instead."), n[e + "Palette"].apply(n, t)
               }
            })
         }

         function m(e, t) {
            function n(e) {
               return void 0 === e || "" === e ? !0 : void 0 !== l[e]
            }

            function r(t, n) {
               void 0 === n && (n = t, t = void 0), void 0 === t && (t = e), r.inherit(n, n)
            }

            return r.inherit = function (r, o) {
               function a(e) {
                  n(e) || t.warn("Attempted to use unregistered theme '" + e + "'. Register it with $mdThemingProvider.theme().");
                  var o = r.data("$mdThemeName");
                  o && r.removeClass("md-" + o + "-theme"), r.addClass("md-" + e + "-theme"), r.data("$mdThemeName", e)
               }

               var i = o.controller("mdTheme"), c = r.attr("md-theme-watch");
               if ((b || angular.isDefined(c)) && "false" != c) {
                  var d = e.$watch(function () {
                     return i && i.$mdTheme || g
                  }, a);
                  r.on("$destroy", d)
               } else {
                  var l = i && i.$mdTheme || g;
                  a(l)
               }
            }, r.registered = n, r.defaultTheme = function () {
               return g
            }, r
         }

         d = {}, l = {};
         var g = "default", b = !1;
         return angular.extend(d, e), m.$inject = ["$rootScope", "$log"], s = {
            definePalette: t,
            extendPalette: n,
            theme: a,
            setDefaultTheme: function (e) {
               g = e
            },
            alwaysWatchTheme: function (e) {
               b = e
            },
            $get: m,
            _LIGHT_DEFAULT_HUES: M,
            _DARK_DEFAULT_HUES: A,
            _PALETTES: d,
            _THEMES: l,
            _parseRules: r,
            _rgba: c
         }
      }

      function t(e, t, n) {
         return {
            priority: 100, link: {
               pre: function (r, o, a) {
                  var i = {
                     $setTheme: function (t) {
                        e.registered(t) || n.warn("attempted to use unregistered theme '" + t + "'"), i.$mdTheme = t
                     }
                  };
                  o.data("$mdThemeController", i), i.$setTheme(t(a.mdTheme)(r)), a.$observe("mdTheme", i.$setTheme)
               }
            }
         }
      }

      function n(e) {
         return e
      }

      function r(e, t, n) {
         a(e, t), n = n.replace(/THEME_NAME/g, e.name);
         var r = [], o = e.colors[t], i = new RegExp(".md-" + e.name + "-theme", "g"), l = new RegExp("('|\")?{{\\s*(" + t + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"), s = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g, m = d[o.name];
         return n = n.replace(s, function (t, n, r, o) {
            return "foreground" === n ? "shadow" == r ? e.foregroundShadow : e.foregroundPalette[r] || e.foregroundPalette["1"] : (0 === r.indexOf("hue") && (r = e.colors[n].hues[r]), c((d[e.colors[n].name][r] || "").value, o))
         }), angular.forEach(o.hues, function (t, o) {
            var a = n.replace(l, function (e, n, r, o, a) {
               return c(m[t]["color" === o ? "value" : "contrast"], a)
            });
            "default" !== o && (a = a.replace(i, ".md-" + e.name + "-theme.md-" + o)), r.push(a)
         }), r.join("")
      }

      function o(e) {
         function t(e) {
            var t = e.contrastDefaultColor, n = e.contrastLightColors || [], r = e.contrastStrongLightColors || [], o = e.contrastDarkColors || [];
            "string" == typeof n && (n = n.split(" ")), "string" == typeof r && (r = r.split(" ")), "string" == typeof o && (o = o.split(" ")), delete e.contrastDefaultColor, delete e.contrastLightColors, delete e.contrastStrongLightColors, delete e.contrastDarkColors, angular.forEach(e, function (a, c) {
               function d() {
                  return "light" === t ? o.indexOf(c) > -1 ? g : r.indexOf(c) > -1 ? v : b : n.indexOf(c) > -1 ? r.indexOf(c) > -1 ? v : b : g
               }

               if (!angular.isObject(a)) {
                  var l = i(a);
                  if (!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", a).replace("%2", e.name).replace("%3", c));
                  e[c] = {value: l, contrast: d()}
               }
            })
         }

         var n = e.has("$MD_THEME_CSS") ? e.get("$MD_THEME_CSS") : "";
         angular.forEach(d, t);
         var o = n.split(/\}(?!(\}|'|"|;))/).filter(function (e) {
            return e && e.length
         }).map(function (e) {
            return e.trim() + "}"
         }), a = {};
         E.forEach(function (e) {
            a[e] = ""
         });
         var c = new RegExp("md-(" + E.join("|") + ")", "g");
         o.forEach(function (e) {
            for (var t, n = (e.match(c), 0); t = E[n]; n++)if (e.indexOf(".md-" + t) > -1)return a[t] += e;
            for (n = 0; t = E[n]; n++)if (e.indexOf(t) > -1)return a[t] += e;
            return a[$] += e
         });
         var s = "";
         if (angular.forEach(l, function (e) {
               E.forEach(function (t) {
                  s += r(e, t, a[t] + "")
               }), e.colors.primary.name == e.colors.accent.name && console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec.")
            }), !m) {
            var u = document.createElement("style");
            u.innerHTML = s;
            var f = document.getElementsByTagName("head")[0];
            f.insertBefore(u, f.firstElementChild), m = !0
         }
      }

      function a(e, t) {
         if (!d[(e.colors[t] || {}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(d).join(", ")))
      }

      function i(e) {
         if (angular.isArray(e) && 3 == e.length)return e;
         if (/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function (e, t) {
            return 3 == t ? parseFloat(e, 10) : parseInt(e, 10)
         });
         if ("#" == e.charAt(0) && (e = e.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(e)) {
            var t = e.length / 3, n = e.substr(0, t), r = e.substr(t, t), o = e.substr(2 * t);
            return 1 === t && (n += n, r += r, o += o), [parseInt(n, 16), parseInt(r, 16), parseInt(o, 16)]
         }
      }

      function c(e, t) {
         return 4 == e.length && (e = angular.copy(e), t ? e.pop() : t = e.pop()), t && ("number" == typeof t || "string" == typeof t && t.length) ? "rgba(" + e.join(",") + "," + t + ")" : "rgb(" + e.join(",") + ")"
      }

      angular.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", t).directive("mdThemable", n).provider("$mdTheming", e).run(o);
      var d, l, s, m, u = {
         name: "dark",
         1: "rgba(0,0,0,0.87)",
         2: "rgba(0,0,0,0.54)",
         3: "rgba(0,0,0,0.26)",
         4: "rgba(0,0,0,0.12)"
      }, f = {
         name: "light",
         1: "rgba(255,255,255,1.0)",
         2: "rgba(255,255,255,0.7)",
         3: "rgba(255,255,255,0.3)",
         4: "rgba(255,255,255,0.12)"
      }, p = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)", h = "", g = i("rgba(0,0,0,0.87)"), b = i("rgba(255,255,255,0.87"), v = i("rgb(255,255,255)"), E = ["primary", "accent", "warn", "background"], $ = "primary", M = {
         accent: {
            "default": "A200",
            "hue-1": "A100",
            "hue-2": "A400",
            "hue-3": "A700"
         }
      }, A = {background: {"default": "500", "hue-1": "300", "hue-2": "600", "hue-3": "800"}};
      E.forEach(function (e) {
         var t = {"default": "500", "hue-1": "300", "hue-2": "800", "hue-3": "A100"};
         M[e] || (M[e] = t), A[e] || (A[e] = t)
      });
      var T = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"];
      e.$inject = ["$mdColorPalette"], t.$inject = ["$mdTheming", "$interpolate", "$log"], n.$inject = ["$mdTheming"], o.$inject = ["$injector"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      angular.module("material.components.autocomplete", ["material.core", "material.components.icon"])
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         return e
      }

      angular.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", e), e.$inject = ["$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r(e) {
            return angular.isDefined(e.href) || angular.isDefined(e.ngHref)
         }

         function o(e, t) {
            return r(t) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" ng-transclude></button>'
         }

         function a(o, a, i) {
            var c = a[0];
            t(a), e.attachButtonBehavior(o, a);
            var d = c.textContent.trim();
            d || n.expect(a, "aria-label"), r(i) && angular.isDefined(i.ngDisabled) && o.$watch(i.ngDisabled, function (e) {
               a.attr("tabindex", e ? -1 : 0)
            })
         }

         return {restrict: "EA", replace: !0, transclude: !0, template: o, link: a}
      }

      angular.module("material.components.button", ["material.core"]).directive("mdButton", e), e.$inject = ["$mdInkRipple", "$mdTheming", "$mdAria"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
         return {restrict: "E"}
      }

      function t(e) {
         function t(e, t, o, a, i, c, d, l, s, m) {
            function u(n, r, a) {
               h = i('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(n), h.on("click", function () {
                  o(d.cancel)
               }), c.inherit(h, a.parent), e.enter(h, a.parent, null);
               var s = new p(r, a.parent);
               return a.bottomSheet = s, a.targetEvent && angular.element(a.targetEvent.target).blur(), c.inherit(s.element, a.parent), a.disableParentScroll && (a.lastOverflow = a.parent.css("overflow"), a.parent.css("overflow", "hidden")), e.enter(s.element, a.parent).then(function () {
                  var e = angular.element(r[0].querySelector("button") || r[0].querySelector("a") || r[0].querySelector("[ng-click]"));
                  e.focus(), a.escapeToClose && (a.rootElementKeyupCallback = function (e) {
                     e.keyCode === t.KEY_CODE.ESCAPE && o(d.cancel)
                  }, l.on("keyup", a.rootElementKeyupCallback))
               })
            }

            function f(t, n, r) {
               var o = r.bottomSheet;
               return e.leave(h), e.leave(o.element).then(function () {
                  r.disableParentScroll && (r.parent.css("overflow", r.lastOverflow), delete r.lastOverflow), o.cleanup(), r.targetEvent && angular.element(r.targetEvent.target).focus()
               })
            }

            function p(e, a) {
               function i() {
                  e.css(t.CSS.TRANSITION_DURATION, "0ms")
               }

               function c(n) {
                  var o = n.pointer.distanceY;
                  5 > o && (o = Math.max(-r, o / 2)), e.css(t.CSS.TRANSFORM, "translate3d(0," + (r + o) + "px,0)")
               }

               function l(r) {
                  if (r.pointer.distanceY > 0 && (r.pointer.distanceY > 20 || Math.abs(r.pointer.velocityY) > n)) {
                     var a = e.prop("offsetHeight") - r.pointer.distanceY, i = Math.min(a / r.pointer.velocityY * .75, 500);
                     e.css(t.CSS.TRANSITION_DURATION, i + "ms"), o(d.cancel)
                  } else e.css(t.CSS.TRANSITION_DURATION, ""), e.css(t.CSS.TRANSFORM, "")
               }

               var s = m.register(a, "drag", {horizontal: !1});
               return a.on("$md.dragstart", i).on("$md.drag", c).on("$md.dragend", l), {
                  element: e,
                  cleanup: function () {
                     s(), a.off("$md.dragstart", i).off("$md.drag", c).off("$md.dragend", l)
                  }
               }
            }

            var h;
            return {themable: !0, targetEvent: null, onShow: u, onRemove: f, escapeToClose: !0, disableParentScroll: !0}
         }

         var n = .5, r = 80;
         return t.$inject = ["$animate", "$mdConstant", "$timeout", "$$rAF", "$compile", "$mdTheming", "$mdBottomSheet", "$rootElement", "$rootScope", "$mdGesture"], e("$mdBottomSheet").setDefaults({
            methods: ["disableParentScroll", "escapeToClose", "targetEvent"],
            options: t
         })
      }

      angular.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", t), t.$inject = ["$$interimElementProvider"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         return {
            restrict: "E", link: function (t, n) {
               e(n)
            }
         }
      }

      angular.module("material.components.card", ["material.core"]).directive("mdCard", e), e.$inject = ["$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a) {
         function i(t, i) {
            return i.type = "checkbox", i.tabIndex = 0, t.attr("role", i.type), function (t, i, d, l) {
               function s(e) {
                  e.which === r.KEY_CODE.SPACE && (e.preventDefault(), m(e))
               }

               function m(e) {
                  i[0].hasAttribute("disabled") || t.$apply(function () {
                     f = !f, l.$setViewValue(f, e && e.type), l.$render()
                  })
               }

               function u() {
                  f = l.$viewValue, f ? i.addClass(c) : i.removeClass(c)
               }

               l = l || a.fakeNgModel();
               var f = !1;
               o(i), d.ngChecked && t.$watch(t.$eval.bind(t, d.ngChecked), l.$setViewValue.bind(l)), n.expectWithText(i, "aria-label"), e.link.pre(t, {
                  on: angular.noop,
                  0: {}
               }, d, [l]), i.on("click", m).on("keypress", s), l.$render = u
            }
         }

         e = e[0];
         var c = "md-checked";
         return {
            restrict: "E",
            transclude: !0,
            require: "?ngModel",
            template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
            compile: i
         }
      }

      angular.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e), e.$inject = ["inputDirective", "$mdInkRipple", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         function n(e, t) {
            this.$scope = e, this.$element = t
         }

         return {
            restrict: "E", controller: ["$scope", "$element", n], link: function (n, r) {
               r[0];
               e(r), n.$broadcast("$mdContentLoaded", r), t(r[0])
            }
         }
      }

      function t(e) {
         angular.element(e).on("$md.pressdown", function (t) {
            "t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)))
         })
      }

      angular.module("material.components.content", ["material.core"]).directive("mdContent", e), e.$inject = ["$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t) {
         return {
            restrict: "E", link: function (n, r) {
               t(r), e(function () {
                  var e = r[0].querySelector("md-content");
                  e && e.scrollHeight > e.clientHeight && r.addClass("md-content-overflow")
               })
            }
         }
      }

      function t(e) {
         function t(e, t) {
            return {
               template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">', "<md-content>", "<h2>{{ dialog.title }}</h2>", "<p>{{ dialog.content }}</p>", "</md-content>", '<div class="md-actions">', '<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">', "{{ dialog.cancel }}", "</md-button>", '<md-button ng-click="dialog.hide()" class="md-primary">', "{{ dialog.ok }}", "</md-button>", "</div>", "</md-dialog>"].join(""),
               controller: function () {
                  this.hide = function () {
                     e.hide(!0)
                  }, this.abort = function () {
                     e.cancel()
                  }
               },
               controllerAs: "dialog",
               bindToController: !0,
               theme: t.defaultTheme()
            }
         }

         function n(e, t, n, r, o, a, i, c, d, l, s, m) {
            function u(n, o, i) {
               function l() {
                  var e = o[0].querySelector(".dialog-close");
                  if (!e) {
                     var t = o[0].querySelectorAll(".md-actions button");
                     e = t[t.length - 1]
                  }
                  return angular.element(e)
               }

               i.parent = angular.element(i.parent), i.popInTarget = angular.element((i.targetEvent || {}).target);
               var s = l();
               if (p(o.find("md-dialog")), i.hasBackdrop) {
                  var u = i.parent[0] == a[0].body && a[0].documentElement && a[0].scrollTop ? angular.element(a[0].documentElement) : i.parent, f = u.prop("scrollTop");
                  i.backdrop = angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'), d.inherit(i.backdrop, i.parent), r.enter(i.backdrop, i.parent), o.css("top", f + "px")
               }
               return i.disableParentScroll && (i.lastOverflow = i.parent.css("overflow"), i.parent.css("overflow", "hidden")), h(o, i.parent, i.popInTarget && i.popInTarget.length && i.popInTarget).then(function () {
                  i.escapeToClose && (i.rootElementKeyupCallback = function (t) {
                     t.keyCode === c.KEY_CODE.ESCAPE && e(m.cancel)
                  }, t.on("keyup", i.rootElementKeyupCallback)), i.clickOutsideToClose && (i.dialogClickOutsideCallback = function (t) {
                     t.target === o[0] && e(m.cancel)
                  }, o.on("click", i.dialogClickOutsideCallback)), s.focus()
               })
            }

            function f(e, n, o) {
               return o.backdrop && r.leave(o.backdrop), o.disableParentScroll && (o.parent.css("overflow", o.lastOverflow), delete o.lastOverflow), o.escapeToClose && t.off("keyup", o.rootElementKeyupCallback), o.clickOutsideToClose && n.off("click", o.dialogClickOutsideCallback), g(n, o.parent, o.popInTarget && o.popInTarget.length && o.popInTarget).then(function () {
                  o.scope.$destroy(), n.remove(), o.popInTarget && o.popInTarget.focus()
               })
            }

            function p(e) {
               e.attr({role: "dialog"});
               var t = e.find("md-content");
               0 === t.length && (t = e), o.expectAsync(e, "aria-label", function () {
                  var e = t.text().split(/\s+/);
                  return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ")
               })
            }

            function h(e, t, n) {
               var r = e.find("md-dialog");
               return t.append(e), b(r, n), l(function () {
                  r.addClass("transition-in").css(c.CSS.TRANSFORM, "")
               }), i.transitionEndPromise(r)
            }

            function g(e, t, n) {
               var r = e.find("md-dialog");
               return r.addClass("transition-out").removeClass("transition-in"), b(r, n), i.transitionEndPromise(r)
            }

            function b(e, t) {
               if (t) {
                  var n = t[0].getBoundingClientRect(), r = e[0].getBoundingClientRect(), o = Math.min(.5, n.width / r.width), a = Math.min(.5, n.height / r.height);
                  e.css(c.CSS.TRANSFORM, "translate3d(" + (-r.left + n.left + n.width / 2 - r.width / 2) + "px," + (-r.top + n.top + n.height / 2 - r.height / 2) + "px,0) scale(" + o + "," + a + ")")
               }
            }

            return {
               hasBackdrop: !0,
               isolateScope: !0,
               onShow: u,
               onRemove: f,
               clickOutsideToClose: !0,
               escapeToClose: !0,
               targetEvent: null,
               disableParentScroll: !0,
               transformTemplate: function (e) {
                  return '<div class="md-dialog-container">' + e + "</div>"
               }
            }
         }

         return t.$inject = ["$mdDialog", "$mdTheming"], n.$inject = ["$timeout", "$rootElement", "$compile", "$animate", "$mdAria", "$document", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$q", "$mdDialog"], e("$mdDialog").setDefaults({
            methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent"],
            options: n
         }).addPreset("alert", {
            methods: ["title", "content", "ariaLabel", "ok", "theme"],
            options: t
         }).addPreset("confirm", {methods: ["title", "content", "ariaLabel", "ok", "cancel", "theme"], options: t})
      }

      angular.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", t), e.$inject = ["$$rAF", "$mdTheming"], t.$inject = ["$$interimElementProvider"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
      }

      function t(t) {
         return {restrict: "E", link: t, controller: [e]}
      }

      angular.module("material.components.divider", ["material.core"]).directive("mdDivider", t), t.$inject = ["$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, n, r, o) {
         function a(t, a, i, c) {
            function d() {
               for (var e in n.MEDIA)o(e), o.getQuery(n.MEDIA[e]).addListener(M);
               return o.watchResponsiveAttributes(["md-cols", "md-row-height"], i, s)
            }

            function l() {
               A();
               for (var e in n.MEDIA)o.getQuery(n.MEDIA[e]).removeListener(M)
            }

            function s(e) {
               null == e ? c.invalidateLayout() : o(e) && c.invalidateLayout()
            }

            function m() {
               var e = p(), n = g(), o = E(), i = v(), c = b(), d = r(n, h(), p()).map(function (t, r) {
                  return {
                     grid: {element: a, style: f(n, r, c, o, i)}, tiles: t.map(function (t, a) {
                        return {element: angular.element(e[a]), style: u(t.position, t.spans, n, r, c, o, i)}
                     })
                  }
               }).reflow().performance();
               t.mdOnLayout({$event: {performance: d}})
            }

            function u(e, t, n, r, o, a, i) {
               var c = 1 / n * 100, d = 1 === n ? 0 : (n - 1) / n, l = T({
                  share: c,
                  gutterShare: d,
                  gutter: o
               }), s = {
                  left: w({unit: l, offset: e.col, gutter: o}),
                  width: k({unit: l, span: t.col, gutter: o}),
                  paddingTop: "",
                  marginTop: "",
                  top: "",
                  height: ""
               };
               switch (a) {
                  case"fixed":
                     s.top = w({unit: i, offset: e.row, gutter: o}), s.height = k({unit: i, span: t.row, gutter: o});
                     break;
                  case"ratio":
                     var m = c * (1 / i), u = T({share: m, gutterShare: d, gutter: o});
                     s.paddingTop = k({unit: u, span: t.row, gutter: o}), s.marginTop = w({
                        unit: u,
                        offset: e.row,
                        gutter: o
                     });
                     break;
                  case"fit":
                     var f = 1 === r ? 0 : (r - 1) / r, m = 1 / r * 100, u = T({share: m, gutterShare: f, gutter: o});
                     s.top = w({unit: u, offset: e.row, gutter: o}), s.height = k({unit: u, span: t.row, gutter: o})
               }
               return s
            }

            function f(e, t, n, r, o) {
               var a = {height: "", paddingBottom: ""};
               switch (r) {
                  case"fixed":
                     a.height = k({unit: o, span: t, gutter: n});
                     break;
                  case"ratio":
                     var i = 1 === e ? 0 : (e - 1) / e, c = 1 / e * 100, d = c * (1 / o), l = T({
                        share: d,
                        gutterShare: i,
                        gutter: n
                     });
                     a.paddingBottom = k({unit: l, span: t, gutter: n});
                     break;
                  case"fit":
               }
               return a
            }

            function p() {
               return c.tiles.map(function (e) {
                  return e.element
               })
            }

            function h() {
               return c.tiles.map(function (e) {
                  return {
                     row: parseInt(o.getResponsiveAttribute(e.attrs, "md-rowspan"), 10) || 1,
                     col: parseInt(o.getResponsiveAttribute(e.attrs, "md-colspan"), 10) || 1
                  }
               })
            }

            function g() {
               var e = parseInt(o.getResponsiveAttribute(i, "md-cols"), 10);
               if (isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
               return e
            }

            function b() {
               return $(o.getResponsiveAttribute(i, "md-gutter") || 1)
            }

            function v() {
               var e = o.getResponsiveAttribute(i, "md-row-height");
               switch (E()) {
                  case"fixed":
                     return $(e);
                  case"ratio":
                     var t = e.split(":");
                     return parseFloat(t[0]) / parseFloat(t[1]);
                  case"fit":
                     return 0
               }
            }

            function E() {
               var e = o.getResponsiveAttribute(i, "md-row-height");
               return "fit" == e ? "fit" : -1 !== e.indexOf(":") ? "ratio" : "fixed"
            }

            function $(e) {
               return /\D$/.test(e) ? e : e + "px"
            }

            a.attr("role", "list"), c.layoutDelegate = m;
            var M = angular.bind(c, c.invalidateLayout), A = d();
            t.$on("$destroy", l);
            var T = e("{{ share }}% - ({{ gutter }} * {{ gutterShare }})"), w = e("calc(({{ unit }}) * {{ offset }} + {{ offset }} * {{ gutter }})"), k = e("calc(({{ unit }}) * {{ span }} + ({{ span }} - 1) * {{ gutter }})")
         }

         return {restrict: "E", controller: t, scope: {mdOnLayout: "&"}, link: a}
      }

      function t(e) {
         this.invalidated = !1, this.$timeout_ = e, this.tiles = [], this.layoutDelegate = angular.noop
      }

      function n(e) {
         function t(t, n) {
            var a, i, c, d, l, s, i;
            return d = e.time(function () {
               i = r(t, n)
            }), a = {
               layoutInfo: function () {
                  return i
               }, map: function (t) {
                  return l = e.time(function () {
                     var e = a.layoutInfo();
                     c = t(e.positioning, e.rowCount)
                  }), a
               }, reflow: function (t) {
                  return s = e.time(function () {
                     var e = t || o;
                     e(c.grid, c.tiles)
                  }), a
               }, performance: function () {
                  return {tileCount: n.length, layoutTime: d, mapTime: l, reflowTime: s, totalTime: d + l + s}
               }
            }
         }

         function n(e, t) {
            e.element.css(e.style), t.forEach(function (e) {
               e.element.css(e.style)
            })
         }

         function r(e, t) {
            function n(t, n) {
               if (t.col > e)throw"md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";
               for (var i = 0, s = 0; s - i < t.col;)c >= e ? r() : (i = l.indexOf(0, c), -1 !== i && -1 !== (s = a(i + 1)) ? c = s + 1 : (i = s = 0, r()));
               return o(i, t.col, t.row), c = i + t.col, {col: i, row: d}
            }

            function r() {
               c = 0, d++, o(0, e, -1)
            }

            function o(e, t, n) {
               for (var r = e; e + t > r; r++)l[r] = Math.max(l[r] + n, 0)
            }

            function a(e) {
               var t;
               for (t = e; t < l.length; t++)if (0 !== l[t])return t;
               return t === l.length ? t : void 0
            }

            function i() {
               for (var t = [], n = 0; e > n; n++)t.push(0);
               return t
            }

            var c = 0, d = 0, l = i();
            return {
               positioning: t.map(function (e, t) {
                  return {spans: e, position: n(e, t)}
               }), rowCount: d + Math.max.apply(Math, l)
            }
         }

         var o = n;
         return t.animateWith = function (e) {
            o = angular.isFunction(e) ? e : n
         }, t
      }

      function r(e) {
         function t(t, n, r, o) {
            n.attr("role", "listitem");
            var a = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], r, angular.bind(o, o.invalidateLayout));
            o.addTile(n, r, t.$parent.$index), t.$on("$destroy", function () {
               a(), o.removeTile(n, r)
            })
         }

         return {
            restrict: "E",
            require: "^mdGridList",
            template: "<figure ng-transclude></figure>",
            transclude: !0,
            scope: {},
            link: t
         }
      }

      function o() {
         return {template: "<figcaption ng-transclude></figcaption>", transclude: !0}
      }

      angular.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", r).directive("mdGridTileFooter", o).directive("mdGridTileHeader", o).factory("$mdGridLayout", n), e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia", "$mdUtil"], t.$inject = ["$timeout"], t.prototype = {
         addTile: function (e, t, n) {
            var r = {element: e, attrs: t};
            angular.isUndefined(n) ? this.tiles.push(r) : this.tiles.splice(n, 0, r), this.invalidateLayout()
         }, removeTile: function (e, t) {
            var n = this._findTileIndex(t);
            -1 !== n && (this.tiles.splice(n, 1), this.invalidateLayout())
         }, invalidateLayout: function () {
            this.invalidated || (this.invalidated = !0, this.$timeout_(angular.bind(this, this.layout)))
         }, layout: function () {
            try {
               this.layoutDelegate()
            } finally {
               this.invalidated = !1
            }
         }, _findTileIndex: function (e) {
            for (var t = 0; t < this.tiles.length; t++)if (this.tiles[t].attrs == e)return t;
            return -1
         }
      }, n.$inject = ["$mdUtil"], r.$inject = ["$mdMedia"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r(e, t) {
            return t.mdFontIcon ? '<span class="md-font" ng-class="fontIcon"></span>' : ""
         }

         function o(r, o, a) {
            function i() {
               var e = o.parent();
               return e.attr("aria-label") || e.text() ? !0 : e.parent().attr("aria-label") || e.parent().text() ? !0 : !1
            }

            t(o);
            var c = a.alt || r.fontIcon || r.svgIcon, d = a.$normalize(a.$attr.mdSvgIcon || a.$attr.mdSvgSrc || "");
            "" == a.alt || i() ? n.expect(o, "aria-hidden", "true") : (n.expect(o, "aria-label", c), n.expect(o, "role", "img")), d && a.$observe(d, function (t) {
               o.empty(), t && e(t).then(function (e) {
                  o.append(e)
               })
            })
         }

         return {
            scope: {fontIcon: "@mdFontIcon", svgIcon: "@mdSvgIcon", svgSrc: "@mdSvgSrc"},
            restrict: "E",
            template: r,
            link: o
         }
      }

      angular.module("material.components.icon", ["material.core"]).directive("mdIcon", e), e.$inject = ["$mdIcon", "$mdTheming", "$mdAria"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
      }

      function t(e, t) {
         this.url = e, this.iconSize = t || r.defaultIconSize
      }

      function n(e, t, n, r, o) {
         function a(t) {
            return function (n) {
               return h[t] = m(n) ? n : new u(n, e[t]), h[t].clone()
            }
         }

         function i(t) {
            var r = e[t];
            return r ? d(r.url).then(function (e) {
               return new u(e, r)
            }) : n.reject(t)
         }

         function c(t) {
            function r(e) {
               var r = t.slice(t.lastIndexOf(":") + 1), o = e.querySelector("#" + r);
               return o ? new u(o, a) : n.reject(t)
            }

            var o = t.substring(0, t.lastIndexOf(":")) || "$default", a = e[o];
            return a ? d(a.url).then(r) : n.reject(t)
         }

         function d(e) {
            return t.get(e, {cache: o}).then(function (e) {
               for (var t = angular.element(e.data), n = 0; n < t.length; ++n)if ("svg" == t[n].nodeName)return t[n]
            })
         }

         function l(e) {
            var t;
            return angular.isString(e) && (t = "icon " + e + " not found", r.warn(t)), n.reject(t || e)
         }

         function s(e) {
            var t = angular.isString(e) ? e : e.message || e.data || e.statusText;
            return r.warn(t), n.reject(t)
         }

         function m(e) {
            return angular.isDefined(e.element) && angular.isDefined(e.config)
         }

         function u(e, t) {
            "svg" != e.tagName && (e = angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]), e = angular.element(e), e.attr("xmlns") || e.attr("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = t, this.prepare()
         }

         function f() {
            var t = this.config ? this.config.iconSize : e.defaultIconSize, n = angular.element(this.element);
            n.attr({
               fit: "",
               height: "100%",
               width: "100%",
               preserveAspectRatio: "xMidYMid meet",
               viewBox: n.attr("viewBox") || "0 0 " + t + " " + t
            }).css({"pointer-events": "none", display: "block"}), this.element = n
         }

         function p() {
            return angular.element(this.element[0].cloneNode(!0))
         }

         var h = {}, g = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;
         return u.prototype = {clone: p, prepare: f}, function (e) {
            return e = e || "", h[e] ? n.when(h[e].clone()) : g.test(e) ? d(e).then(a(e)) : (-1 == e.indexOf(":") && (e = "$default:" + e), i(e).catch(c).catch(l).catch(s).then(a(e)))
         }
      }

      angular.module("material.components.icon").provider("$mdIcon", e);
      var r = {defaultIconSize: 24};
      e.prototype = {
         icon: function (e, n, o) {
            return -1 == e.indexOf(":") && (e = "$default:" + e), r[e] = new t(n, o), this
         }, iconSet: function (e, n, o) {
            return r[e] = new t(n, o), this
         }, defaultIconSet: function (e, n) {
            var o = "$default";
            return r[o] || (r[o] = new t(e, n)), r[o].iconSize = n || r.defaultIconSize, this
         }, defaultIconSize: function (e) {
            return r.defaultIconSize = e, this
         }, preloadIcons: function (e) {
            var t = this, n = [{
               id: "tabs-arrow",
               url: "tabs-arrow.svg",
               svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="tabs-arrow"><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'
            }, {
               id: "close",
               url: "close.svg",
               svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="close"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'
            }, {
               id: "cancel",
               url: "cancel.svg",
               svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="cancel"><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'
            }];
            n.forEach(function (n) {
               t.icon(n.id, n.url), e.put(n.url, n.svg)
            })
         }, $get: ["$http", "$q", "$log", "$templateCache", function (e, t, o, a) {
            return this.preloadIcons(a), new n(r, e, t, o, a)
         }]
      }
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      function e(e, t) {
         function n(t, n) {
            e(n)
         }

         function r(e, n, r) {
            var o = this;
            o.isErrorGetter = r.mdIsError && t(r.mdIsError), o.element = n, o.setFocused = function (e) {
               n.toggleClass("md-input-focused", !!e)
            }, o.setHasValue = function (e) {
               n.toggleClass("md-input-has-value", !!e)
            }, o.setInvalid = function (e) {
               n.toggleClass("md-input-invalid", !!e)
            }, e.$watch(function () {
               return o.label && o.input
            }, function (e) {
               e && !o.label.attr("for") && o.label.attr("for", o.input.attr("id"))
            })
         }

         return r.$inject = ["$scope", "$element", "$attrs"], {restrict: "E", link: n, controller: r}
      }

      function t() {
         return {
            restrict: "E", require: "^?mdInputContainer", link: function (e, t, n, r) {
               r && !n.mdNoFloat && (r.label = t, e.$on("$destroy", function () {
                  r.label = null
               }))
            }
         }
      }

      function n(e, t) {
         function n(n, r, o, a) {
            function i(e) {
               return l.setHasValue(!s.$isEmpty(e)), e
            }

            function c() {
               l.setHasValue(r.val().length > 0 || (r[0].validity || {}).badInput)
            }

            function d() {
               function o(e) {
                  return l(), e
               }

               function a() {
                  d.style.height = "auto", d.scrollTop = 0;
                  var e = i();
                  e && (d.style.height = e + "px")
               }

               function i() {
                  var e = d.scrollHeight - d.offsetHeight;
                  return d.offsetHeight + (e > 0 ? e : 0)
               }

               function c() {
                  d.scrollTop = 0;
                  var e = d.scrollHeight - d.offsetHeight, t = d.offsetHeight + e;
                  d.style.height = t + "px"
               }

               var d = r[0], l = e.debounce(a, 1);
               s ? (s.$formatters.push(o), s.$viewChangeListeners.push(o)) : l(), r.on("keydown input", l), r.on("scroll", c), angular.element(t).on("resize", l), n.$on("$destroy", function () {
                  angular.element(t).off("resize", l)
               })
            }

            var l = a[0], s = a[1] || e.fakeNgModel(), m = angular.isDefined(o.readonly);
            if (l) {
               if (l.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");
               l.input = r, r.addClass("md-input"), r.attr("id") || r.attr("id", "input_" + e.nextUid()), "textarea" === r[0].tagName.toLowerCase() && d();
               var u = !1, f = l.isErrorGetter || function () {
                     return s.$invalid && (u || s.$touched)
                  };
               n.$watch(f, l.setInvalid), s.$parsers.push(i), s.$formatters.push(i), r.on("input", c), m || r.on("focus", function () {
                  u = !0, l.setFocused(!0), n.$evalAsync()
               }).on("blur", function () {
                  l.setFocused(!1), c()
               }), n.$on("$destroy", function () {
                  l.setFocused(!1), l.setHasValue(!1), l.input = null
               })
            }
         }

         return {restrict: "E", require: ["^?mdInputContainer", "?ngModel"], link: n}
      }

      function r(e) {
         function t(t, n, r, o) {
            function a(e) {
               return l.text((n.val() || e || "").length + "/" + i), e
            }

            var i, c = o[0], d = o[1], l = angular.element('<div class="md-char-counter">');
            r.$set("ngTrim", "false"), d.element.append(l), c.$formatters.push(a), c.$viewChangeListeners.push(a), n.on("input keydown", function () {
               a()
            }), t.$watch(r.mdMaxlength, function (t) {
               i = t, angular.isNumber(t) && t > 0 ? (l.parent().length || e.enter(l, d.element, angular.element(d.element[0].lastElementChild)), a()) : e.leave(l)
            }), c.$validators["md-maxlength"] = function (e, t) {
               return !angular.isNumber(i) || 0 > i ? !0 : (e || n.val() || t || "").length <= i
            }
         }

         return {restrict: "A", require: ["ngModel", "^mdInputContainer"], link: t}
      }

      function o() {
         function e(e, t, n, r) {
            if (r) {
               var o = n.placeholder;
               t.removeAttr("placeholder"), r.element.append('<div class="md-placeholder">' + o + "</div>")
            }
         }

         return {restrict: "A", require: "^^?mdInputContainer", link: e}
      }

      angular.module("material.components.input", ["material.core"]).directive("mdInputContainer", e).directive("label", t).directive("input", n).directive("textarea", n).directive("mdMaxlength", r).directive("placeholder", o), e.$inject = ["$mdTheming", "$parse"], n.$inject = ["$mdUtil", "$window"], r.$inject = ["$animate"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
         return {
            restrict: "E", link: function (e, t) {
               t.attr({role: "list"})
            }
         }
      }

      function t() {
         return {
            restrict: "E", link: function (e, t) {
               t.attr({role: "listitem"})
            }
         }
      }

      angular.module("material.components.list", ["material.core"]).directive("mdList", e).directive("mdItem", t)
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r(e) {
            return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), o
         }

         function o(e, r, o) {
            n(r);
            var d, l, s, m, u = r[0], f = u.querySelectorAll(".md-fill, .md-mask.md-full"), p = u.querySelectorAll(".md-fill.md-fix"), h = o.mdDiameter || 48, g = h / 48;
            u.style[t.CSS.TRANSFORM] = "scale(" + g.toString() + ")", o.$observe("value", function (e) {
               for (l = a(e), s = i[l], m = c[l], r.attr("aria-valuenow", l), d = 0; d < f.length; d++)f[d].style[t.CSS.TRANSFORM] = s;
               for (d = 0; d < p.length; d++)p[d].style[t.CSS.TRANSFORM] = m
            })
         }

         function a(e) {
            return e > 100 ? 100 : 0 > e ? 0 : Math.ceil(e || 0)
         }

         for (var i = new Array(101), c = new Array(101), d = 0; 101 > d; d++) {
            var l = d / 100, s = Math.floor(180 * l);
            i[d] = "rotate(" + s.toString() + "deg)", c[d] = "rotate(" + (2 * s).toString() + "deg)"
         }
         return {
            restrict: "E",
            template: '<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',
            compile: r
         }
      }

      angular.module("material.components.progressCircular", ["material.core"]).directive("mdProgressCircular", e), e.$inject = ["$$rAF", "$mdConstant", "$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, n, r) {
         function o(e) {
            return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), a
         }

         function a(o, a, c) {
            r(a);
            var d = a[0].querySelector(".md-bar1").style, l = a[0].querySelector(".md-bar2").style, s = angular.element(a[0].querySelector(".md-container"));
            c.$observe("value", function (e) {
               if ("query" != c.mdMode) {
                  var r = i(e);
                  a.attr("aria-valuenow", r), l[n.CSS.TRANSFORM] = t[r]
               }
            }), c.$observe("mdBufferValue", function (e) {
               d[n.CSS.TRANSFORM] = t[i(e)]
            }), e(function () {
               s.addClass("md-ready")
            })
         }

         function i(e) {
            return e > 100 ? 100 : 0 > e ? 0 : Math.ceil(e || 0)
         }

         return {
            restrict: "E",
            template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
            compile: o
         }
      }

      angular.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e), e.$inject = ["$$rAF", "$mdConstant", "$mdTheming"];
      var t = function () {
         function e(e) {
            var t = e / 100, n = (e - 100) / 2;
            return "translateX(" + n.toString() + "%) scale(" + t.toString() + ", 1)"
         }

         for (var t = new Array(101), n = 0; 101 > n; n++)t[n] = e(n);
         return t
      }()
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r(r, o, a, i) {
            function c(n) {
               switch (n.keyCode) {
                  case t.KEY_CODE.LEFT_ARROW:
                  case t.KEY_CODE.UP_ARROW:
                     n.preventDefault(), d.selectPrevious();
                     break;
                  case t.KEY_CODE.RIGHT_ARROW:
                  case t.KEY_CODE.DOWN_ARROW:
                     n.preventDefault(), d.selectNext();
                     break;
                  case t.KEY_CODE.ENTER:
                     var r = angular.element(e.getClosest(o[0], "form"));
                     r.length > 0 && r.triggerHandler("submit")
               }
            }

            n(o);
            var d = i[0], l = i[1] || e.fakeNgModel();
            d.init(l), o.attr({role: "radiogroup", tabIndex: o.attr("tabindex") || "0"}).on("keydown", c)
         }

         function o(e) {
            this._radioButtonRenderFns = [], this.$element = e
         }

         function a() {
            return {
               init: function (e) {
                  this._ngModelCtrl = e, this._ngModelCtrl.$render = angular.bind(this, this.render)
               }, add: function (e) {
                  this._radioButtonRenderFns.push(e)
               }, remove: function (e) {
                  var t = this._radioButtonRenderFns.indexOf(e);
                  -1 !== t && this._radioButtonRenderFns.splice(t, 1)
               }, render: function () {
                  this._radioButtonRenderFns.forEach(function (e) {
                     e()
                  })
               }, setViewValue: function (e, t) {
                  this._ngModelCtrl.$setViewValue(e, t), this.render()
               }, getViewValue: function () {
                  return this._ngModelCtrl.$viewValue
               }, selectNext: function () {
                  return i(this.$element, 1)
               }, selectPrevious: function () {
                  return i(this.$element, -1)
               }, setActiveDescendant: function (e) {
                  this.$element.attr("aria-activedescendant", e)
               }
            }
         }

         function i(t, n) {
            var r = e.iterator(t[0].querySelectorAll("md-radio-button"), !0);
            if (r.count()) {
               var o = function (e) {
                  return !angular.element(e).attr("disabled")
               }, a = t[0].querySelector("md-radio-button.md-checked"), i = r[0 > n ? "previous" : "next"](a, o) || r.first();
               angular.element(i).triggerHandler("click")
            }
         }

         return o.prototype = a(), {
            restrict: "E",
            controller: ["$element", o],
            require: ["mdRadioGroup", "?ngModel"],
            link: {pre: r}
         }
      }

      function t(e, t, n) {
         function r(r, a, i, c) {
            function d(e) {
               a[0].hasAttribute("disabled") || r.$apply(function () {
                  c.setViewValue(i.value, e && e.type)
               })
            }

            function l() {
               var e = c.getViewValue() == i.value;
               e !== m && (m = e, a.attr("aria-checked", e), e ? (a.addClass(o), c.setActiveDescendant(a.attr("id"))) : a.removeClass(o))
            }

            function s(n, r) {
               function o() {
                  return i.id || "radio_" + t.nextUid()
               }

               r.ariaId = o(), n.attr({
                  id: r.ariaId,
                  role: "radio",
                  "aria-checked": "false"
               }), e.expectWithText(n, "aria-label")
            }

            var m;
            n(a), s(a, r), c.add(l), i.$observe("value", l), a.on("click", d).on("$destroy", function () {
               c.remove(l)
            })
         }

         var o = "md-checked";
         return {
            restrict: "E",
            require: "^mdRadioGroup",
            transclude: !0,
            template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
            link: r
         }
      }

      angular.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", t), e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming"], t.$inject = ["$mdAria", "$mdUtil", "$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o) {
         function a(r, a) {
            var i = r.find("md-select-label").remove();
            i.length || (i = angular.element("<md-select-label><span></span></md-select-label>")), i.append('<span class="md-select-icon" aria-hidden="true"></span>'), i.addClass("md-select-label"), i.attr("id", "select_label_" + t.nextUid()), r.find("md-content").length || r.append(angular.element("<md-content>").append(r.contents())), a.mdOnOpen && r.find("md-content").prepend(angular.element("<md-progress-circular>").attr("md-mode", "indeterminate").attr("ng-hide", "$$loadingAsyncDone").wrap("<div>").parent());
            var c = angular.element('<div class="md-select-menu-container"><md-select-menu ' + (angular.isDefined(a.multiple) ? "multiple" : "") + ">" + r.html() + "</md-select-menu></div>");
            return r.empty().append(i), n(r), function (n, r, a, i) {
               function d() {
                  u = angular.element(c.clone());
                  var e = u.find("md-select-menu");
                  e.data("$ngModelController", h), e.data("$mdSelectController", p), f = n.$new(), u = o(u)(f)
               }

               function l(e) {
                  var t = [32, 13, 38, 40];
                  -1 != t.indexOf(e.keyCode) && (e.preventDefault(), s(e))
               }

               function s() {
                  n.$evalAsync(function () {
                     m = !0, e.show({
                        scope: f,
                        preserveScope: !0,
                        skipCompile: !0,
                        element: u,
                        target: r[0],
                        hasBackdrop: !0,
                        loadingAsync: a.mdOnOpen ? n.$eval(a.mdOnOpen) : !1
                     }).then(function () {
                        m = !1
                     })
                  })
               }

               var m, u, f, p = i[0], h = i[1], g = r.find("md-select-label"), b = 0 !== g.text().length;
               d();
               var v = h.$render;
               h.$render = function () {
                  if (v(), u) {
                     var e = u.find("md-select-menu").controller("mdSelectMenu");
                     p.setLabelText(e.selectedLabels())
                  }
               }, p.setLabelText = function (e) {
                  if (!b) {
                     p.setIsPlaceholder(!e);
                     var t = e || a.placeholder, n = b ? g : g.children().eq(0);
                     n.text(t)
                  }
               }, p.setIsPlaceholder = function (e) {
                  e ? g.addClass("md-placeholder") : g.removeClass("md-placeholder")
               }, a.$observe("disabled", function (e) {
                  void 0 !== e ? (r.attr("tabindex", -1), r.off("click", s), r.off("keydown", l)) : (r.attr("tabindex", 0), r.on("click", s), r.on("keydown", l))
               }), void 0 === a.disabled && (r.on("click", s), r.on("keydown", l)), r.attr({
                  role: "combobox",
                  id: "select_" + t.nextUid(),
                  "aria-haspopup": !0,
                  "aria-expanded": "false",
                  "aria-labelledby": g.attr("id")
               }), n.$on("$destroy", function () {
                  m ? e.cancel().then(function () {
                     u.remove()
                  }) : u.remove()
               })
            }
         }

         r.startSymbol(), r.endSymbol();
         return {
            restrict: "E", require: ["mdSelect", "ngModel"], compile: a, controller: function () {
            }
         }
      }

      function t(e, t, n) {
         function r(e, r, o, a) {
            function i() {
               r.attr({
                  id: "select_menu_" + t.nextUid(),
                  role: "listbox",
                  "aria-multiselectable": l.isMultiple ? "true" : "false"
               })
            }

            function c(e) {
               (13 == e.keyCode || 32 == e.keyCode) && d(e)
            }

            function d(n) {
               var r = t.getClosest(n.target, "md-option"), o = r && angular.element(r).data("$mdOptionController");
               if (r && o) {
                  var a = l.hashGetter(o.value), i = angular.isDefined(l.selected[a]);
                  e.$apply(function () {
                     l.isMultiple ? i ? l.deselect(a) : l.select(a, o.value) : i || (l.deselect(Object.keys(l.selected)[0]), l.select(a, o.value)), l.refreshViewValue()
                  })
               }
            }

            var l = a[0], s = a[1];
            n(r), r.on("click", d), r.on("keypress", c), s && l.init(s), i()
         }

         function o(t, n, r) {
            function o() {
               var e = d.ngModel.$modelValue || d.ngModel.$viewValue;
               if (angular.isArray(e)) {
                  var t = Object.keys(d.selected), n = e.map(d.hashGetter), r = t.filter(function (e) {
                     return -1 === n.indexOf(e)
                  });
                  r.forEach(d.deselect), n.forEach(function (t, n) {
                     d.select(t, e[n])
                  })
               }
            }

            function i() {
               var e = d.ngModel.$viewValue || d.ngModel.$modelValue;
               Object.keys(d.selected).forEach(d.deselect), d.select(d.hashGetter(e), e)
            }

            var d = this;
            d.isMultiple = angular.isDefined(n.multiple), d.selected = {}, d.options = {}, d.init = function (r) {
               function a(e, t) {
                  return angular.isArray(e || t || [])
               }

               if (d.ngModel = r, r.$options && r.$options.trackBy) {
                  var l = {}, s = e(r.$options.trackBy);
                  d.hashGetter = function (e, n) {
                     return l.$value = e, s(n || t, l)
                  }
               } else d.hashGetter = function (e) {
                  return angular.isObject(e) ? "$$object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++c)) : e
               };
               d.isMultiple ? (r.$validators["md-multiple"] = a, r.$render = o, t.$watchCollection(n.ngModel, function (e) {
                  a(e) && o(e)
               })) : r.$render = i
            }, d.selectedLabels = function () {
               var e = a(r[0].querySelectorAll("md-option[selected]"));
               return e.length ? e.map(function (e) {
                  return e.textContent
               }).join(", ") : ""
            }, d.select = function (e, t) {
               var n = d.options[e];
               n && n.setSelected(!0), d.selected[e] = t
            }, d.deselect = function (e) {
               var t = d.options[e];
               t && t.setSelected(!1), delete d.selected[e]
            }, d.addOption = function (e, t) {
               if (angular.isDefined(d.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + t.value + '" found.');
               d.options[e] = t, angular.isDefined(d.selected[e]) && (d.select(e, t.value), d.refreshViewValue())
            }, d.removeOption = function (e) {
               delete d.options[e]
            }, d.refreshViewValue = function () {
               var e, t = [];
               for (var n in d.selected)(e = d.options[n]) ? t.push(e.value) : t.push(d.selected[n]);
               d.ngModel.$setViewValue(d.isMultiple ? t : t[0])
            }
         }

         return o.$inject = ["$scope", "$attrs", "$element"], {
            restrict: "E",
            require: ["mdSelectMenu", "?ngModel"],
            controller: o,
            link: {pre: r}
         }
      }

      function n(e, t) {
         function n(e, t) {
            return e.append(angular.element('<div class="md-text">').append(e.contents())), void 0 === t.tabindex && e.attr("tabindex", 0), r
         }

         function r(n, r, o, a) {
            function i(e, t) {
               var r = l.hashGetter(t, n), o = l.hashGetter(e, n);
               d.hashKey = o, d.value = e, l.removeOption(r, d), l.addOption(o, d)
            }

            function c() {
               r.attr({role: "option", "aria-selected": "false", id: "select_option_" + t.nextUid()})
            }

            var d = a[0], l = a[1];
            if (angular.isDefined(o.ngValue))n.$watch(o.ngValue, i); else {
               if (!angular.isDefined(o.value))throw new Error("Expected either ngValue or value attr");
               i(o.value)
            }
            e.attachButtonBehavior(n, r), c(), n.$on("$destroy", function () {
               l.removeOption(d.hashKey, d)
            })
         }

         function o(e) {
            this.selected = !1, this.setSelected = function (t) {
               t && !this.selected ? e.attr({
                  selected: "selected",
                  "aria-selected": "true"
               }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t
            }
         }

         return o.$inject = ["$element"], {
            restrict: "E",
            require: ["mdOption", "^^mdSelectMenu"],
            controller: o,
            compile: n
         }
      }

      function r() {
         function e(e, t) {
            var n = e.find("label");
            n.length || (n = angular.element("<label>"), e.prepend(n)), t.label && n.text(t.label)
         }

         return {restrict: "E", compile: e}
      }

      function o(e) {
         function t(e, t, o, c, d, l) {
            function s(n, r, i) {
               function s() {
                  i.selectEl.attr("aria-labelledby", i.target.attr("id")), i.target.attr("aria-owns", i.selectEl.attr("id")), i.target.attr("aria-expanded", "true")
               }

               function m() {
                  function o(e) {
                     var t = a(f), n = t.indexOf(i.focusedNode);
                     -1 === n ? n = 0 : "next" === e && n < t.length - 1 ? n++ : "prev" === e && n > 0 && n--;
                     var r = i.focusedNode = t[n];
                     r && r.focus()
                  }

                  function d() {
                     o("next")
                  }

                  function l() {
                     o("prev")
                  }

                  function s() {
                     i.restoreFocus = !0, n.$evalAsync(function () {
                        e.hide(m.ngModel.$viewValue)
                     })
                  }

                  if (!i.isRemoved) {
                     var m = i.selectEl.controller("mdSelectMenu") || {};
                     r.addClass("md-clickable"), i.backdrop && i.backdrop.on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), i.restoreFocus = !1, n.$apply(e.cancel)
                     }), i.selectEl.on("keydown", function (r) {
                        switch (r.keyCode) {
                           case t.KEY_CODE.SPACE:
                           case t.KEY_CODE.ENTER:
                              var o = c.getClosest(r.target, "md-option");
                              o && (i.selectEl.triggerHandler({type: "click", target: o}), r.preventDefault());
                              break;
                           case t.KEY_CODE.TAB:
                           case t.KEY_CODE.ESCAPE:
                              r.preventDefault(), i.restoreFocus = !0, n.$apply(e.cancel)
                        }
                     }), i.selectEl.on("keydown", function (e) {
                        switch (e.keyCode) {
                           case t.KEY_CODE.UP_ARROW:
                              return l();
                           case t.KEY_CODE.DOWN_ARROW:
                              return d()
                        }
                     }), m.isMultiple || (i.selectEl.on("click", s), i.selectEl.on("keydown", function (e) {
                        (32 == e.keyCode || 13 == e.keyCode) && s()
                     }))
                  }
               }

               if (!i.target)throw new Error('$mdSelect.show() expected a target element in options.target but got "' + i.target + '"!');
               angular.extend(i, {
                  isRemoved: !1,
                  target: angular.element(i.target),
                  parent: angular.element(i.parent),
                  selectEl: r.find("md-select-menu"),
                  contentEl: r.find("md-content"),
                  backdrop: i.hasBackdrop && angular.element('<md-backdrop class="md-select-backdrop">')
               }), s(), r.removeClass("md-leave");
               var f = i.selectEl[0].getElementsByTagName("md-option");
               return i.loadingAsync && i.loadingAsync.then && i.loadingAsync.then(function () {
                  n.$$loadingAsyncDone = !0, o(function () {
                     o(function () {
                        i.isRemoved || u(n, r, i)
                     })
                  })
               }), i.disableParentScroll && (i.disableTarget = i.parent.find("md-content"), i.disableTarget.length || (i.disableTarget = i.parent), i.lastOverflow = i.disableTarget.css("overflow"), i.disableTarget.css("overflow", "hidden")), l(m, 75, !1), i.backdrop && (d.inherit(i.backdrop, i.parent), i.parent.append(i.backdrop)), i.parent.append(r), o(function () {
                  o(function () {
                     i.isRemoved || u(n, r, i)
                  })
               }), c.transitionEndPromise(i.selectEl)
            }

            function m(e, t, n) {
               n.isRemoved = !0, t.addClass("md-leave").removeClass("md-clickable"), n.target.attr("aria-expanded", "false"), n.disableParentScroll && c.floatingScrollbars() && (n.disableTarget.css("overflow", n.lastOverflow), delete n.lastOverflow, delete n.disableTarget);
               var r = n.selectEl.controller("mdSelect");
               return r && r.setLabelText(n.selectEl.controller("mdSelectMenu").selectedLabels()), c.transitionEndPromise(t).then(function () {
                  t.removeClass("md-active"), n.parent[0].removeChild(t[0]), n.backdrop && n.backdrop.remove(), n.restoreFocus && n.target.focus()
               })
            }

            function u(e, a, d) {
               var l, s = a[0], m = d.target[0], u = d.parent[0], f = d.selectEl[0], p = d.contentEl[0], h = u.getBoundingClientRect(), g = c.clientRect(m, u), b = !1, v = {
                  left: u.scrollLeft + i,
                  top: u.scrollTop + i,
                  bottom: h.height + u.scrollTop - i,
                  right: h.width - u.scrollLeft - i
               }, E = {
                  top: g.top - v.top,
                  left: g.left - v.left,
                  right: v.right - (g.left + g.width),
                  bottom: v.bottom - (g.top + g.height)
               }, $ = h.width - 2 * i, M = p.scrollHeight > p.offsetHeight, A = f.querySelector("md-option[selected]"), T = f.getElementsByTagName("md-option"), w = f.getElementsByTagName("md-optgroup");
               l = A ? A : w.length ? w[0] : T.length ? T[0] : p.firstElementChild || p, p.offsetWidth > $ && (p.style["max-width"] = $ + "px"), b && (p.style["min-width"] = g.width + "px"), M && f.classList.add("md-overflow");
               var k = f.getBoundingClientRect(), y = r(l);
               if (l) {
                  var x = window.getComputedStyle(l);
                  y.paddingLeft = parseInt(x["padding-left"], 10), y.paddingRight = parseInt(x["padding-right"], 10)
               }
               var C = l;
               if ("MD-OPTGROUP" === (C.tagName || "").toUpperCase() && (C = T[0] || p.firstElementChild || p), C && (d.focusedNode = C, C.focus()), M) {
                  var N = p.offsetHeight / 2;
                  p.scrollTop = y.top + y.height / 2 - N, E.top < N ? p.scrollTop = Math.min(y.top, p.scrollTop + N - E.top) : E.bottom < N && (p.scrollTop = Math.max(y.top + y.height - k.height, p.scrollTop - N + E.bottom))
               }
               var _, S, H;
               b ? (_ = g.left, S = g.top + g.height, H = "50% 0", S + k.height > v.bottom && (S = g.top - k.height, H = "50% 100%")) : (_ = g.left + y.left - y.paddingLeft, S = g.top + g.height / 2 - y.height / 2 - y.top + p.scrollTop, H = y.left + g.width / 2 + "px " + (y.top + y.height / 2 - p.scrollTop) + "px 0px", s.style["min-width"] = g.width + y.paddingLeft + y.paddingRight + "px"), s.style.left = n(v.left, _, v.right) + "px", s.style.top = n(v.top, S, v.bottom) + "px", f.style[t.CSS.TRANSFORM_ORIGIN] = H, f.style[t.CSS.TRANSFORM] = "scale(" + Math.min(g.width / k.width, 1) + "," + Math.min(g.height / k.height, 1) + ")", o(function () {
                  a.addClass("md-active"), f.style[t.CSS.TRANSFORM] = ""
               })
            }

            return {
               parent: "body",
               onShow: s,
               onRemove: m,
               hasBackdrop: !0,
               disableParentScroll: c.floatingScrollbars(),
               themable: !0
            }
         }

         function n(e, t, n) {
            return Math.min(n, Math.max(t, e))
         }

         function r(e) {
            return e ? {left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight} : {
               left: 0,
               top: 0,
               width: 0,
               height: 0
            }
         }

         return t.$inject = ["$mdSelect", "$mdConstant", "$$rAF", "$mdUtil", "$mdTheming", "$timeout"], e("$mdSelect").setDefaults({
            methods: ["target"],
            options: t
         })
      }

      function a(e) {
         for (var t = [], n = 0; n < e.length; ++n)t.push(e.item(n));
         return t
      }

      var i = 8, c = 0;
      angular.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", e).directive("mdSelectMenu", t).directive("mdOption", n).directive("mdOptgroup", r).provider("$mdSelect", o), e.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$interpolate", "$compile", "$parse"], t.$inject = ["$parse", "$mdUtil", "$mdTheming"], n.$inject = ["$mdInkRipple", "$mdUtil"], o.$inject = ["$$interimElementProvider"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t) {
         return function (n) {
            var r = "SideNav '" + n + "' is not available!", o = e.get(n);
            return o || e.notFoundError(n), {
               isOpen: function () {
                  return o && o.isOpen()
               }, isLockedOpen: function () {
                  return o && o.isLockedOpen()
               }, toggle: function () {
                  return o ? o.toggle() : t.reject(r)
               }, open: function () {
                  return o ? o.open() : t.reject(r)
               }, close: function () {
                  return o ? o.close() : t.reject(r)
               }
            }
         }
      }

      function t(e, t, n, r, o, a, i, c, d) {
         function l(l, s, m, u) {
            function f(e, n) {
               l.isLockedOpen = e, e === n ? s.toggleClass("md-locked-open", !!e) : t[e ? "addClass" : "removeClass"](s, "md-locked-open"), A.toggleClass("md-locked-open", !!e)
            }

            function p(e) {
               var n = s.parent();
               return n[e ? "on" : "off"]("keydown", g), A[e ? "on" : "off"]("click", b), e && (v = d[0].activeElement), E = c.all([t[e ? "enter" : "leave"](A, n), t[e ? "removeClass" : "addClass"](s, "md-closed").then(function () {
                  l.isOpen && s.focus()
               })])
            }

            function h(t) {
               if (l.isOpen == t)return c.when(!0);
               var n = c.defer();
               return l.isOpen = t, e(function () {
                  E.then(function (e) {
                     l.isOpen || (v && v.focus(), v = null), n.resolve(e)
                  })
               }, 0, !1), n.promise
            }

            function g(e) {
               var t = e.keyCode === o.KEY_CODE.ESCAPE;
               return t ? b(e) : c.when(!0)
            }

            function b(e) {
               return e.preventDefault(), e.stopPropagation(), u.close()
            }

            var v = null, E = c.when(!0), $ = n(m.mdIsLockedOpen), M = function () {
               return $(l.$parent, {$media: r})
            }, A = a('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(l);
            s.on("$destroy", u.destroy), i.inherit(A, s), l.$watch(M, f), l.$watch("isOpen", p), u.$toggleOpen = h
         }

         return {
            restrict: "E",
            scope: {isOpen: "=?mdIsOpen"},
            controller: "$mdSidenavController",
            compile: function (e) {
               return e.addClass("md-closed"), e.attr("tabIndex", "-1"), l
            }
         }
      }

      function n(e, t, n, r, o) {
         var a = this;
         a.$toggleOpen = function () {
            return o.when(e.isOpen)
         }, a.isOpen = function () {
            return !!e.isOpen
         }, a.isLockedOpen = function () {
            return !!e.isLockedOpen
         }, a.open = function () {
            return a.$toggleOpen(!0)
         }, a.close = function () {
            return a.$toggleOpen(!1)
         }, a.toggle = function () {
            return a.$toggleOpen(!e.isOpen)
         }, a.destroy = r.register(a, n.mdComponentId)
      }

      angular.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", t).controller("$mdSidenavController", n), e.$inject = ["$mdComponentRegistry", "$q"], t.$inject = ["$timeout", "$animate", "$parse", "$mdMedia", "$mdConstant", "$compile", "$mdTheming", "$q", "$document"], n.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a, i, c) {
         function d(e) {
            return e.attr({tabIndex: 0, role: "slider"}), n.expect(e, "aria-label"), l
         }

         function l(n, d, l, s) {
            function m() {
               b(), M(), g()
            }

            function u(e) {
               G = parseFloat(e), d.attr("aria-valuemin", e), m()
            }

            function f(e) {
               z = parseFloat(e), d.attr("aria-valuemax", e), m()
            }

            function p(e) {
               W = parseFloat(e), g()
            }

            function h(e) {
               d.attr("aria-disabled", !!e)
            }

            function g() {
               if (angular.isDefined(l.mdDiscrete)) {
                  var e = Math.floor((z - G) / W);
                  if (!X) {
                     var n = t.getComputedStyle(V[0]);
                     X = angular.element('<canvas style="position:absolute;">'), Q = X[0].getContext("2d"), Q.fillStyle = n.backgroundColor || "black", V.append(X)
                  }
                  var r = v();
                  X[0].width = r.width, X[0].height = r.height;
                  for (var o, a = 0; e >= a; a++)o = Math.floor(r.width * (a / e)), Q.fillRect(o - 1, 0, 2, r.height)
               }
            }

            function b() {
               Z = B[0].getBoundingClientRect()
            }

            function v() {
               return U(), Z
            }

            function E(e) {
               if (!d[0].hasAttribute("disabled")) {
                  var t;
                  e.keyCode === o.KEY_CODE.LEFT_ARROW ? t = -W : e.keyCode === o.KEY_CODE.RIGHT_ARROW && (t = W), t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), n.$evalAsync(function () {
                     $(s.$viewValue + t)
                  }))
               }
            }

            function $(e) {
               s.$setViewValue(A(T(e)))
            }

            function M() {
               isNaN(s.$viewValue) && (s.$viewValue = s.$modelValue);
               var e = (s.$viewValue - G) / (z - G);
               n.modelValue = s.$viewValue, d.attr("aria-valuenow", s.$viewValue), w(e), L.text(s.$viewValue)
            }

            function A(e) {
               return angular.isNumber(e) ? Math.max(G, Math.min(z, e)) : void 0
            }

            function T(e) {
               return angular.isNumber(e) ? Math.round(e / W) * W : void 0
            }

            function w(e) {
               q.css("width", 100 * e + "%"), F.css("left", 100 * e + "%"), d.toggleClass("md-min", 0 === e)
            }

            function k(e) {
               if (!P()) {
                  d.addClass("active"), d[0].focus(), b();
                  var t = O(D(e.pointer.x)), r = A(T(t));
                  n.$apply(function () {
                     $(r), w(I(r))
                  })
               }
            }

            function y(e) {
               if (!P()) {
                  d.removeClass("dragging active");
                  var t = O(D(e.pointer.x)), r = A(T(t));
                  n.$apply(function () {
                     $(r), M()
                  })
               }
            }

            function x(e) {
               P() || (J = !0, e.stopPropagation(), d.addClass("dragging"), _(e))
            }

            function C(e) {
               J && (e.stopPropagation(), _(e))
            }

            function N(e) {
               J && (e.stopPropagation(), J = !1)
            }

            function _(e) {
               et ? H(e.pointer.x) : S(e.pointer.x)
            }

            function S(e) {
               n.$evalAsync(function () {
                  $(O(D(e)))
               })
            }

            function H(e) {
               var t = O(D(e)), n = A(T(t));
               w(D(e)), L.text(n)
            }

            function D(e) {
               return Math.max(0, Math.min(1, (e - Z.left) / Z.width))
            }

            function O(e) {
               return G + e * (z - G)
            }

            function I(e) {
               return (e - G) / (z - G)
            }

            a(d), s = s || {
               $setViewValue: function (e) {
                  this.$viewValue = e, this.$viewChangeListeners.forEach(function (e) {
                     e()
                  })
               }, $parsers: [], $formatters: [], $viewChangeListeners: []
            };
            var R = l.ngDisabled && c(l.ngDisabled), P = R ? function () {
               return R(n.$parent)
            } : angular.noop, j = angular.element(d[0].querySelector(".md-thumb")), L = angular.element(d[0].querySelector(".md-thumb-text")), F = j.parent(), B = angular.element(d[0].querySelector(".md-track-container")), q = angular.element(d[0].querySelector(".md-track-fill")), V = angular.element(d[0].querySelector(".md-track-ticks")), U = r.throttle(b, 5e3);
            l.min ? l.$observe("min", u) : u(0), l.max ? l.$observe("max", f) : f(100), l.step ? l.$observe("step", p) : p(1);
            var Y = angular.noop;
            l.ngDisabled && (Y = n.$parent.$watch(l.ngDisabled, h)), i.register(d, "drag"), d.on("keydown", E).on("$md.pressdown", k).on("$md.pressup", y).on("$md.dragstart", x).on("$md.drag", C).on("$md.dragend", N), setTimeout(m);
            var K = e.throttle(m);
            angular.element(t).on("resize", K), n.$on("$destroy", function () {
               angular.element(t).off("resize", K), Y()
            }), s.$render = M, s.$viewChangeListeners.push(M), s.$formatters.push(A), s.$formatters.push(T);
            var G, z, W, X, Q, Z = {};
            b();
            var J = !1, et = angular.isDefined(l.mdDiscrete)
         }

         return {
            scope: {},
            require: "?ngModel",
            template: '<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',
            compile: d
         }
      }

      angular.module("material.components.slider", ["material.core"]).directive("mdSlider", e), e.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o) {
         function a(e) {
            function n(e, t) {
               t.addClass("md-sticky-clone"), t.css("top", p + "px");
               var n = {element: e, clone: t};
               return f.items.push(n), m.parent().prepend(n.clone), u(), function () {
                  f.items.forEach(function (t, n) {
                     t.element[0] === e[0] && (f.items.splice(n, 1), t.clone.remove())
                  }), u()
               }
            }

            function o() {
               f.items.forEach(a), f.items = f.items.sort(function (e, t) {
                  return e.top < t.top ? -1 : 1
               });
               for (var e, t = m.prop("scrollTop"), n = f.items.length - 1; n >= 0; n--)if (t > f.items[n].top) {
                  e = f.items[n];
                  break
               }
               d(e)
            }

            function a(e) {
               var t = e.element[0];
               for (e.top = 0, e.left = 0; t && t !== m[0];)e.top += t.offsetTop, e.left += t.offsetLeft, t = t.offsetParent;
               e.height = e.element.prop("offsetHeight"), e.clone.css("margin-left", e.left + "px")
            }

            function i() {
               var e = m.prop("scrollTop"), t = e > (i.prevScrollTop || 0);
               i.prevScrollTop = e, 0 === e ? d(null) : t && f.next ? f.next.top - e <= 0 ? d(f.next) : f.current && (f.next.top - e <= f.next.height ? s(f.current, f.next.top - f.next.height - e) : s(f.current, null)) : !t && f.current && (e < f.current.top && d(f.prev), f.current && f.next && (e >= f.next.top - f.current.height ? s(f.current, f.next.top - e - f.current.height) : s(f.current, null)))
            }

            function d(e) {
               if (f.current !== e) {
                  f.current && (s(f.current, null), l(f.current, null)), e && l(e, "active"), f.current = e;
                  var t = f.items.indexOf(e);
                  f.next = f.items[t + 1], f.prev = f.items[t - 1], l(f.next, "next"), l(f.prev, "prev")
               }
            }

            function l(e, t) {
               e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t)
            }

            function s(e, n) {
               e && (null === n || void 0 === n ? e.translateY && (e.translateY = null, e.clone.css(t.CSS.TRANSFORM, "")) : (e.translateY = n, e.clone.css(t.CSS.TRANSFORM, "translate3d(" + e.left + "px," + n + "px,0)")))
            }

            var m = e.$element, u = r.throttle(o);
            c(m), m.on("$scrollstart", u), m.on("$scroll", i);
            var f, p = m.prop("offsetTop");
            return f = {prev: null, current: null, next: null, items: [], add: n, refreshElements: o}
         }

         function i() {
            var t, n = angular.element("<div>");
            e[0].body.appendChild(n[0]);
            for (var r = ["sticky", "-webkit-sticky"], o = 0; o < r.length; ++o)if (n.css({
                  position: r[o],
                  top: 0,
                  "z-index": 2
               }), n.css("position") == r[o]) {
               t = r[o];
               break
            }
            return n.remove(), t
         }

         function c(e) {
            function t() {
               +o.now() - a > i ? (n = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), r(t))
            }

            var n, a, i = 200;
            e.on("scroll touchmove", function () {
               n || (n = !0, r(t), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), a = +o.now()
            })
         }

         var d = i();
         return function (e, t, n) {
            var r = t.controller("mdContent");
            if (r)if (d)t.css({position: d, top: 0, "z-index": 2}); else {
               var o = r.$element.data("$$sticky");
               o || (o = a(r), r.$element.data("$$sticky", o));
               var i = o.add(t, n || t.clone());
               e.$on("$destroy", i)
            }
         }
      }

      angular.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e), e.$inject = ["$document", "$mdConstant", "$compile", "$$rAF", "$mdUtil"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         return {
            restrict: "E",
            replace: !0,
            transclude: !0,
            template: '<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',
            compile: function (r, o, a) {
               var i = r[0].outerHTML;
               return function (r, o) {
                  function c(e) {
                     return angular.element(e[0].querySelector(".md-subheader-content"))
                  }

                  n(o), a(r, function (e) {
                     c(o).append(e)
                  }), a(r, function (a) {
                     var d = t(angular.element(i))(r);
                     n(d), c(d).append(a), e(r, o, d)
                  })
               }
            }
         }
      }

      angular.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e), e.$inject = ["$mdSticky", "$compile", "$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      var e = angular.module("material.components.swipe", []);
      ["SwipeLeft", "SwipeRight"].forEach(function (t) {
         var n = "md" + t, r = "$md." + t.toLowerCase();
         e.directive(n, ["$parse", function (e) {
            function t(t, o, a) {
               var i = e(a[n]);
               o.on(r, function (e) {
                  t.$apply(function () {
                     i(t, {$event: e})
                  })
               })
            }

            return {restrict: "A", link: t}
         }])
      })
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a, i, c) {
         function d(e, t) {
            var r = l.compile(e, t);
            return e.addClass("md-dragging"), function (e, t, d, l) {
               function s(n) {
                  p(e) || (n.stopPropagation(), t.addClass("md-dragging"), b = {width: h.prop("offsetWidth")}, t.removeClass("transition"))
               }

               function m(e) {
                  if (b) {
                     e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
                     var t = e.pointer.distanceX / b.width, n = l.$viewValue ? 1 + t : t;
                     n = Math.max(0, Math.min(1, n)), h.css(o.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), b.translate = n
                  }
               }

               function u(e) {
                  if (b) {
                     e.stopPropagation(), t.removeClass("md-dragging"), h.css(o.CSS.TRANSFORM, "");
                     var n = l.$viewValue ? b.translate < .5 : b.translate > .5;
                     n && f(!l.$viewValue), b = null
                  }
               }

               function f(t) {
                  e.$apply(function () {
                     l.$setViewValue(t), l.$render()
                  })
               }

               l = l || n.fakeNgModel();
               var p = a(d.ngDisabled), h = angular.element(t[0].querySelector(".md-thumb-container")), g = angular.element(t[0].querySelector(".md-container"));
               i(function () {
                  t.removeClass("md-dragging")
               }), r(e, t, d, l), angular.isDefined(d.ngDisabled) && e.$watch(p, function (e) {
                  t.attr("tabindex", e ? -1 : 0)
               }), c.register(g, "drag"), g.on("$md.dragstart", s).on("$md.drag", m).on("$md.dragend", u);
               var b
            }
         }

         var l = e[0];
         return {
            restrict: "E",
            transclude: !0,
            template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
            require: "?ngModel",
            compile: d
         }
      }

      angular.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e), e.$inject = ["mdCheckboxDirective", "$mdTheming", "$mdUtil", "$document", "$mdConstant", "$parse", "$$rAF", "$mdGesture"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      angular.module("material.components.tabs", ["material.core", "material.components.icon"])
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r) {
         return {
            restrict: "E",
            replace: !0,
            scope: {fid: "@?mdFid", label: "@?", value: "=ngModel"},
            compile: function (o, a) {
               return r.warn("<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), angular.isUndefined(a.mdFid) && (a.mdFid = t.nextUid()), {
                  pre: function (e, t, r) {
                     var o = n(r.ngDisabled);
                     e.isDisabled = function () {
                        return o(e.$parent)
                     }, e.inputType = r.type || "text"
                  }, post: e
               }
            },
            template: '<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'
         }
      }

      function t(e) {
         return {
            restrict: "CE", controller: ["$element", function (t) {
               e.warn("<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), this.setFocused = function (e) {
                  t.toggleClass("md-input-focused", !!e)
               }, this.setHasValue = function (e) {
                  t.toggleClass("md-input-has-value", e)
               }
            }]
         }
      }

      function n(e, t) {
         return {
            restrict: "E",
            replace: !0,
            template: "<input >",
            require: ["^?mdInputGroup", "?ngModel"],
            link: function (e, n, r, o) {
               function a(e) {
                  return e = angular.isUndefined(e) ? n.val() : e, angular.isDefined(e) && null !== e && "" !== e.toString().trim()
               }

               if (o[0]) {
                  t.warn("<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer");
                  var i = o[0], c = o[1];
                  e.$watch(e.isDisabled, function (e) {
                     n.attr("aria-disabled", !!e), n.attr("tabindex", !!e)
                  }), n.attr("type", r.type || n.parent().attr("type") || "text"), c && c.$formatters.push(function (e) {
                     return i.setHasValue(a(e)), e
                  }), n.on("input", function () {
                     i.setHasValue(a())
                  }).on("focus", function () {
                     i.setFocused(!0)
                  }).on("blur", function () {
                     i.setFocused(!1), i.setHasValue(a())
                  }), e.$on("$destroy", function () {
                     i.setFocused(!1), i.setHasValue(!1)
                  })
               }
            }
         }
      }

      angular.module("material.components.textField", ["material.core"]).directive("mdInputGroup", t).directive("mdInput", n).directive("mdTextFloat", e), e.$inject = ["$mdTheming", "$mdUtil", "$parse", "$log"], t.$inject = ["$log"], n.$inject = ["$mdUtil", "$log"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
         return {restrict: "E"}
      }

      function t(e) {
         function t(e, t, r) {
            function o(o, a, c) {
               return n = c.content, a.addClass(c.position.split(" ").map(function (e) {
                  return "md-" + e
               }).join(" ")), c.parent.addClass(i(c.position)), c.onSwipe = function (t) {
                  a.addClass("md-" + t.type.replace("$md.", "")), e(r.cancel)
               }, a.on("$md.swipeleft $md.swiperight", c.onSwipe), t.enter(a, c.parent)
            }

            function a(e, n, r) {
               return n.off("$md.swipeleft $md.swiperight", r.onSwipe), r.parent.removeClass(i(r.position)), t.leave(n)
            }

            function i(e) {
               return "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom")
            }

            return {onShow: o, onRemove: a, position: "bottom left", themable: !0, hideDelay: 3e3}
         }

         var n, r = e("$mdToast").setDefaults({
            methods: ["position", "hideDelay", "capsule"],
            options: t
         }).addPreset("simple", {
            argOption: "content",
            methods: ["content", "action", "highlightAction", "theme"],
            options: ["$mdToast", "$mdTheming", function (e, t) {
               var r = {
                  template: ['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">', "<span flex>{{ toast.content }}</span>", '<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">', "{{ toast.action }}", "</md-button>", "</md-toast>"].join(""),
                  controller: ["$scope", function (t) {
                     var r = this;
                     t.$watch(function () {
                        return n
                     }, function () {
                        r.content = n
                     }), this.resolve = function () {
                        e.hide()
                     }
                  }],
                  theme: t.defaultTheme(),
                  controllerAs: "toast",
                  bindToController: !0
               };
               return r
            }]
         }).addMethod("updateContent", function (e) {
            n = e
         });
         return t.$inject = ["$timeout", "$animate", "$mdToast"], r
      }

      angular.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", t), t.$inject = ["$$interimElementProvider"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r) {
         return {
            restrict: "E", controller: angular.noop, link: function (o, a, i) {
               function c() {
                  function r(t, n) {
                     a.parent()[0] === n.parent()[0] && (s && s.off("scroll", p), n.on("scroll", p), n.attr("scroll-shrink", "true"), s = n, e(c))
                  }

                  function c() {
                     l = a.prop("offsetHeight"), s.css("margin-top", -l * f + "px"), d()
                  }

                  function d(e) {
                     var n = e ? e.target.scrollTop : u;
                     h(), m = Math.min(l / f, Math.max(0, m + n - u)), a.css(t.CSS.TRANSFORM, "translate3d(0," + -m * f + "px,0)"), s.css(t.CSS.TRANSFORM, "translate3d(0," + (l - m) * f + "px,0)"), u = n
                  }

                  var l, s, m = 0, u = 0, f = i.mdShrinkSpeedFactor || .5, p = e.throttle(d), h = n.debounce(c, 5e3);
                  o.$on("$mdContentLoaded", r)
               }

               r(a), angular.isDefined(i.mdScrollShrink) && c()
            }
         }
      }

      angular.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e), e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a, i, c, d) {
         function l(l, u, f) {
            function p(t) {
               p.value = !!t, p.queued || (t ? (p.queued = !0, e(function () {
                  l.visible = p.value, p.queued = !1
               }, l.delay)) : e(function () {
                  l.visible = !1
               }))
            }

            function h() {
               v.attr("aria-describedby", u.attr("id")), T.append(u), b(), c.addClass(u, "md-show"), c.addClass(E, "md-show"), c.addClass($, "md-show")
            }

            function g() {
               v.removeAttr("aria-describedby"), d.all([c.removeClass($, "md-show"), c.removeClass(E, "md-show"), c.removeClass(u, "md-show")]).then(function () {
                  l.visible || u.detach()
               })
            }

            function b() {
               function e() {
                  var e = "left" === M || "right" === M ? 2 * Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height / 2, 2)) : 2 * Math.sqrt(Math.pow(r.width / 2, 2) + Math.pow(r.height, 2)), t = "left" === M ? {
                     left: 100,
                     top: 50
                  } : "right" === M ? {left: 0, top: 50} : "top" === M ? {left: 50, top: 100} : {left: 50, top: 0};
                  E.css({width: e + "px", height: e + "px", left: t.left + "%", top: t.top + "%"})
               }

               function t(e) {
                  var t = {left: e.left, top: e.top};
                  return t.left = Math.min(t.left, T.prop("scrollWidth") - r.width - m), t.left = Math.max(t.left, m), t.top = Math.min(t.top, T.prop("scrollHeight") - r.height - m), t.top = Math.max(t.top, m), t
               }

               function n(e) {
                  return "left" === e ? {
                     left: a.left - r.width - m,
                     top: a.top + a.height / 2 - r.height / 2
                  } : "right" === e ? {
                     left: a.left + a.width + m,
                     top: a.top + a.height / 2 - r.height / 2
                  } : "top" === e ? {
                     left: a.left + a.width / 2 - r.width / 2,
                     top: a.top - r.height - m
                  } : {left: a.left + a.width / 2 - r.width / 2, top: a.top + a.height + m}
               }

               var r = o.offsetRect(u, T), a = o.offsetRect(v, T), i = n(M);
               M ? i = t(i) : i.top > T.prop("scrollHeight") - r.height - m && (i = t(n("top"))), u.css({
                  top: i.top + "px",
                  left: i.left + "px"
               }), e()
            }

            a(u);
            for (var v = u.parent(), E = angular.element(u[0].getElementsByClassName("md-background")[0]), $ = angular.element(u[0].getElementsByClassName("md-content")[0]), M = f.mdDirection; "none" == t.getComputedStyle(v[0])["pointer-events"];)v = v.parent();
            for (var A = u.parent()[0]; A && A !== i[0] && A !== document.body && (!A.tagName || "md-content" != A.tagName.toLowerCase());)A = A.parentNode;
            var T = angular.element(A || document.body);
            angular.isDefined(f.mdDelay) || (l.delay = s), u.detach(), u.attr("role", "tooltip"), u.attr("id", f.id || "tooltip_" + o.nextUid()), v.on("focus mouseenter touchstart", function () {
               p(!0)
            }), v.on("blur mouseleave touchend touchcancel", function () {
               r[0].activeElement !== v[0] && p(!1)
            }), l.$watch("visible", function (e) {
               e ? h() : g()
            });
            var w = n.throttle(function () {
               l.visible && b()
            });
            angular.element(t).on("resize", w), l.$on("$destroy", function () {
               l.visible = !1, u.remove(), angular.element(t).off("resize", w)
            })
         }

         var s = 0, m = 8;
         return {
            restrict: "E",
            transclude: !0,
            template: '<div class="md-background"></div><div class="md-content" ng-transclude></div>',
            scope: {visible: "=?mdVisible", delay: "=?mdDelay"},
            link: l
         }
      }

      angular.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", e), e.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      angular.module("material.components.whiteframe", [])
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o) {
         function a() {
            d(), i()
         }

         function i() {
            var e = angular.element(w.ul), t = angular.element(w.input), n = e.attr("id") || "ul_" + r.nextUid();
            e.attr("id", n), t.attr("aria-owns", n)
         }

         function c(e) {
            if (e) {
               var t = {};
               return M.itemName && (t[M.itemName] = e), t
            }
         }

         function d() {
            var t = parseInt(e.delay, 10) || 0;
            e.$watch("searchText", t ? r.debounce(l, t) : l), e.$watch("selectedItem", function (t, n) {
               e.itemChange && t !== n && e.itemChange(c(t))
            })
         }

         function l(t, n) {
            if (M.index = -1, !t || t.length < Math.max(parseInt(e.minLength, 10), 1))return M.loading = !1, M.matches = [], M.hidden = g(), m(), void 0;
            var r = t.toLowerCase();
            k && k.cancel && (k.cancel(), k = null), !e.noCache && y[r] ? (M.matches = y[r], m()) : M.fetch(t), M.hidden = g(), e.textChange && t !== n && e.textChange(c(e.selectedItem))
         }

         function s(t) {
            function r(n) {
               y[a] = n, t === e.searchText && (k = null, M.loading = !1, M.matches = n, M.hidden = g(), m())
            }

            var o = e.$parent.$eval(T), a = t.toLowerCase();
            angular.isArray(o) ? r(o) : (M.loading = !0, k = n.when(o).then(r))
         }

         function m() {
            if (!M.hidden)switch (M.matches.length) {
               case 0:
                  return M.messages.splice(0);
               case 1:
                  return M.messages.push({display: "There is 1 match available."});
               default:
                  return M.messages.push({display: "There are " + M.matches.length + " matches available."})
            }
         }

         function u() {
            M.messages.push({display: b()})
         }

         function f() {
            M.hidden = !0
         }

         function p(e) {
            switch (e.keyCode) {
               case o.KEY_CODE.DOWN_ARROW:
                  if (M.loading)return;
                  e.preventDefault(), M.index = Math.min(M.index + 1, M.matches.length - 1), $(), u();
                  break;
               case o.KEY_CODE.UP_ARROW:
                  if (M.loading)return;
                  e.preventDefault(), M.index = Math.max(0, M.index - 1), $(), u();
                  break;
               case o.KEY_CODE.ENTER:
                  if (M.loading || M.index < 0)return;
                  e.preventDefault(), E(M.index);
                  break;
               case o.KEY_CODE.ESCAPE:
                  M.matches = [], M.hidden = !0, M.index = -1;
                  break;
               case o.KEY_CODE.TAB:
            }
         }

         function h() {
            e.searchText = "", E(-1), w.input.focus()
         }

         function g() {
            return 1 === M.matches.length && e.searchText === v(M.matches[0])
         }

         function b() {
            return v(M.matches[M.index])
         }

         function v(t) {
            return t && e.itemText ? e.itemText(c(t)) : t
         }

         function E(t) {
            e.selectedItem = M.matches[t], e.searchText = v(e.selectedItem) || e.searchText, M.hidden = !0, M.index = -1, M.matches = []
         }

         function $() {
            var e = 41 * M.index, t = e + 41, n = 225.5;
            e < w.ul.scrollTop ? w.ul.scrollTop = e : t > w.ul.scrollTop + n && (w.ul.scrollTop = t - n)
         }

         var M = this, A = e.itemsExpr.split(/ in /i), T = A[1], w = {
            main: t[0],
            ul: t[0].getElementsByTagName("ul")[0],
            input: t[0].getElementsByTagName("input")[0]
         }, k = null, y = {};
         return M.scope = e, M.parent = e.$parent, M.itemName = A[0], M.matches = [], M.loading = !1, M.hidden = !0, M.index = 0, M.keydown = p, M.blur = f, M.clear = h, M.select = E, M.getCurrentDisplayValue = b, M.fetch = r.debounce(s), M.messages = [], a()
      }

      angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e), e.$inject = ["$scope", "$element", "$q", "$mdUtil", "$mdConstant"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
         return {
            template: '        <md-autocomplete-wrap role="listbox">          <input type="text"              ng-disabled="isDisabled"              ng-model="searchText"              ng-keydown="$mdAutocompleteCtrl.keydown($event)"              ng-blur="$mdAutocompleteCtrl.blur()"              placeholder="{{placeholder}}"              aria-label="{{placeholder}}"              aria-autocomplete="list"              aria-haspopup="true"              aria-activedescendant=""              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>          <button              type="button"              ng-if="searchText"              ng-click="$mdAutocompleteCtrl.clear()">            <md-icon md-svg-icon="cancel"></md-icon>            <span class="visually-hidden">Clear</span>          </button>          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>        </md-autocomplete-wrap>        <ul role="presentation">          <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"              ng-class="{ selected: index === $mdAutocompleteCtrl.index }"              ng-show="searchText && !$mdAutocompleteCtrl.hidden"              ng-click="$mdAutocompleteCtrl.select(index)"              ng-transclude              md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">          </li>        </ul>        <aria-status            class="visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages">{{message.display}}</p>        </aria-status>',
            transclude: !0,
            controller: "MdAutocompleteCtrl",
            controllerAs: "$mdAutocompleteCtrl",
            scope: {
               searchText: "=mdSearchText",
               selectedItem: "=mdSelectedItem",
               itemsExpr: "@mdItems",
               itemText: "&mdItemText",
               placeholder: "@placeholder",
               noCache: "=mdNoCache",
               itemChange: "&mdSelectedItemChange",
               textChange: "&mdSearchTextChange",
               isDisabled: "=ngDisabled",
               minLength: "=mdMinLength",
               delay: "=mdDelay"
            }
         }
      }

      angular.module("material.components.autocomplete").directive("mdAutocomplete", e)
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r(e) {
            return e ? e.replace(/[\*\[\]\(\)\{\}\\\^\$]/g, "\\$&") : e
         }

         var o = t.attr("md-highlight-text"), a = n(t.text())(e), i = e.$watch(o, function (e) {
            var n = new RegExp("^" + r(e), "i"), o = a.replace(n, '<span class="highlight">$&</span>');
            t.html(o)
         });
         t.on("$destroy", function () {
            i()
         })
      }

      angular.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.$inject = ["$scope", "$element", "$interpolate"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e() {
         return {terminal: !0, scope: !1, controller: "MdHighlightCtrl"}
      }

      angular.module("material.components.autocomplete").directive("mdHighlightText", e)
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t) {
         function n(n, r, o, a) {
            var i = a.parent.$new(!1, a.parent), c = a.scope.$eval(o.mdAutocompleteListItem);
            i[c] = n.item, e(r.contents())(i), r.attr({role: "option", id: "item_" + t.nextUid()})
         }

         return {require: "^?mdAutocomplete", terminal: !0, link: n, scope: !1}
      }

      angular.module("material.components.autocomplete").directive("mdAutocompleteListItem", e), e.$inject = ["$compile", "$mdUtil"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         function t(t, r, o, a) {
            function i() {
               var e = d.getSelectedItem(), o = !e || d.count() < 2 || c;
               if (r.css("display", o ? "none" : "block"), !o && t.pagination && t.pagination.tabData) {
                  var a = d.getSelectedIndex(), i = t.pagination.tabData.tabs[a] || {
                        left: 0,
                        right: 0,
                        width: 0
                     }, l = r.parent().prop("offsetWidth") - i.right, s = ["md-transition-left", "md-transition-right", "md-no-transition"], m = n > a ? 0 : a > n ? 1 : 2;
                  r.removeClass(s.join(" ")).addClass(s[m]).css({left: i.left + "px", right: l + "px"}), n = a
               }
            }

            var c = !!a[0], d = a[1], l = e.throttle(i);
            d.inkBarElement = r, t.$on("$mdTabsPaginationChanged", l)
         }

         var n = 0;
         return {restrict: "E", require: ["^?mdNoBar", "^mdTabs"], link: t}
      }

      angular.module("material.components.tabs").directive("mdTabsInkBar", e), e.$inject = ["$$rAF"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a) {
         function i(i, d, l, s) {
            function m(e, t) {
               if (e) {
                  var n = b(e);
                  T.active && n !== T.page ? (t && t.element.blur(), v(n).then(function () {
                     A = !1, e.element.focus()
                  })) : e.element.focus()
               }
            }

            function u(e) {
               var t = T.tabData, n = Math.max(0, Math.min(t.pages.length - 1, T.page + e)), r = t.pages[n][e > 0 ? "firstTabIndex" : "lastTabIndex"], o = s.itemAt(r);
               A = !0, m(o)
            }

            function f() {
               function e() {
                  M.css("width", "9999px"), angular.forEach(a.tabs, function (e) {
                     angular.element(e.element).css("margin-left", e.filler + "px")
                  }), v(b(s.getSelectedItem()))
               }

               function t() {
                  p(0), M.css("width", ""), r.css("width", ""), r.css("margin-left", ""), T.page = null, T.active = !1
               }

               function n() {
                  return l || i.$watch(function () {
                        o(function () {
                           d[0].offsetParent && (angular.isFunction(l) && l(), $(), l = null)
                        }, 0, !1)
                     })
               }

               if (d.prop("offsetParent")) {
                  var r = d.find("md-tab");
                  t();
                  var a = T.tabData = g(), c = T.active = a.pages.length > 1;
                  c && e(), i.$evalAsync(function () {
                     i.$broadcast("$mdTabsPaginationChanged")
                  })
               } else var l = n()
            }

            function p(t) {
               function n(t) {
                  t.target === M[0] && (M.off(e.CSS.TRANSITIONEND, n), o.resolve())
               }

               if (s.pagingOffset === t)return r.when();
               var o = r.defer();
               return s.$$pagingOffset = t, M.css(e.CSS.TRANSFORM, "translate3d(" + t + "px,0,0)"), M.on(e.CSS.TRANSITIONEND, n), o.promise
            }

            function h() {
               switch (i.stretchTabs) {
                  case"never":
                     return !1;
                  case"always":
                     return !0;
                  default:
                     return a("sm")
               }
            }

            function g(e) {
               function t() {
                  var e = 1 === m.length ? r : o, t = Math.min(Math.floor(e / l), E.length), n = Math.floor(e / t);
                  return a.css("width", n + "px"), g(!0)
               }

               var n, r = d.parent().prop("offsetWidth"), o = r - c - 1, a = angular.element(E), i = 0, l = 0, s = [], m = [];
               return a.css("max-width", ""), angular.forEach(E, function (e, t) {
                  var a = Math.min(o, e.offsetWidth), c = {element: e, left: i, width: a, right: i + a, filler: 0};
                  c.page = Math.ceil(c.right / (1 === m.length && t === E.length - 1 ? r : o)) - 1, c.page >= m.length ? (c.filler = o * c.page - c.left, c.right += c.filler, c.left += c.filler, n = {
                     left: c.left,
                     firstTabIndex: t,
                     lastTabIndex: t,
                     tabs: [c]
                  }, m.push(n)) : (n.lastTabIndex = t, n.tabs.push(c)), i = c.right, l = Math.max(l, a), s.push(c)
               }), a.css("max-width", o + "px"), !e && h() ? t() : {width: i, max: l, tabs: s, pages: m, tabElements: E}
            }

            function b(e) {
               var t = s.indexOf(e);
               if (-1 === t)return 0;
               var n = T.tabData;
               return n ? n.tabs[t].page : 0
            }

            function v(e) {
               if (e !== T.page) {
                  var t = T.tabData.pages.length - 1;
                  return 0 > e && (e = 0), e > t && (e = t), T.hasPrev = e > 0, T.hasNext = t > e, T.page = e, i.$broadcast("$mdTabsPaginationChanged"), p(-T.tabData.pages[e].left)
               }
            }

            var E = d[0].getElementsByTagName("md-tab"), $ = n.throttle(f), M = d.children(), A = !1, T = i.pagination = {
               page: -1,
               active: !1,
               clickNext: function () {
                  A || u(1)
               },
               clickPrevious: function () {
                  A || u(-1)
               }
            };
            i.$on("$mdTabsChanged", $), angular.element(t).on("resize", $), i.$on("$destroy", function () {
               angular.element(t).off("resize", $)
            }), i.$watch(function () {
               return s.tabToFocus
            }, m)
         }

         var c = 64;
         return {restrict: "A", require: "^mdTabs", link: i}
      }

      angular.module("material.components.tabs").directive("mdTabsPagination", e), e.$inject = ["$mdConstant", "$window", "$$rAF", "$$q", "$timeout", "$mdMedia"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o, a, i, c) {
         function d() {
            return b(e.$parent)
         }

         function l(t, n) {
            h.content.length && (h.contentContainer.append(h.content), h.contentScope = e.$parent.$new(), t.append(h.contentContainer), r(h.contentContainer)(h.contentScope), n === !0 && c(function () {
               a.disconnectScope(h.contentScope)
            }, 0, !1))
         }

         function s() {
            o.leave(h.contentContainer).then(function () {
               h.contentScope && h.contentScope.$destroy(), h.contentScope = null
            })
         }

         function m(e) {
            h.contentContainer[e ? "addClass" : "removeClass"]("md-transition-rtl")
         }

         function u(n) {
            a.reconnectScope(h.contentScope), t.addClass("active").attr({
               "aria-selected": !0,
               tabIndex: 0
            }).on("$md.swipeleft $md.swiperight", p), m(n), o.removeClass(h.contentContainer, "ng-hide"), e.onSelect()
         }

         function f(n) {
            a.disconnectScope(h.contentScope), t.removeClass("active").attr({
               "aria-selected": !1,
               tabIndex: -1
            }).off("$md.swipeleft $md.swiperight", p), m(n), o.addClass(h.contentContainer, "ng-hide"), e.onDeselect()
         }

         function p(t) {
            e.$apply(function () {
               /left/.test(t.type) ? g.select(g.next()) : g.select(g.previous())
            })
         }

         var h = this, g = t.controller("mdTabs");
         h.contentContainer = angular.element('<div class="md-tab-content ng-hide">'), h.element = t, h.isDisabled = d, h.onAdd = l, h.onRemove = s, h.onSelect = u, h.onDeselect = f;
         var b = i(n.ngDisabled)
      }

      angular.module("material.components.tabs").controller("$mdTab", e), e.$inject = ["$scope", "$element", "$attrs", "$compile", "$animate", "$mdUtil", "$parse", "$timeout"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n, r, o) {
         function a(a, i) {
            var c = a.find("md-tab-label");
            c.length ? c.remove() : c = angular.isDefined(i.label) ? angular.element("<md-tab-label>").html(i.label) : angular.element("<md-tab-label>").append(a.contents().remove());
            var d = a.contents().remove();
            return function (a, i, l, s) {
               function m() {
                  var e = c.clone();
                  i.append(e), t(e)(a.$parent), v.content = d.clone()
               }

               function u() {
                  a.$apply(function () {
                     E.select(v), E.focus(v)
                  })
               }

               function f(e) {
                  e.keyCode == r.KEY_CODE.SPACE || e.keyCode == r.KEY_CODE.ENTER ? (i.triggerHandler("click"), e.preventDefault()) : e.keyCode === r.KEY_CODE.LEFT_ARROW ? a.$evalAsync(function () {
                     E.focus(E.previous(v))
                  }) : e.keyCode === r.KEY_CODE.RIGHT_ARROW && a.$evalAsync(function () {
                     E.focus(E.next(v))
                  })
               }

               function p() {
                  a.$watch("$parent.$index", function (e) {
                     E.move(v, e)
                  })
               }

               function h() {
                  function e(e) {
                     var t = E.getSelectedItem() === v;
                     e && !t ? E.select(v) : !e && t && E.deselect(v)
                  }

                  var t = a.$parent.$watch("!!(" + l.mdActive + ")", e);
                  a.$on("$destroy", t)
               }

               function g() {
                  function e(e) {
                     i.attr("aria-disabled", e);
                     var t = E.getSelectedItem() === v;
                     t && e && E.select(E.next() || E.previous())
                  }

                  a.$watch(v.isDisabled, e)
               }

               function b() {
                  var e = l.id || "tab_" + n.nextUid();
                  if (i.attr({id: e, role: "tab", tabIndex: -1}), d.length) {
                     var t = "content_" + e;
                     i.attr("aria-controls") || i.attr("aria-controls", t), v.contentContainer.attr({
                        id: t,
                        role: "tabpanel",
                        "aria-labelledby": e
                     })
                  }
               }

               var v = s[0], E = s[1];
               o(i.addClass.bind(i, "md-tab-themed"), 0, !1), a.$watch(function () {
                  return l.label
               }, function () {
                  o(function () {
                     E.scope.$broadcast("$mdTabsChanged")
                  }, 0, !1)
               }), m(), b(), e.attachTabBehavior(a, i, {colorElement: E.inkBarElement}), E.add(v), a.$on("$destroy", function () {
                  E.remove(v)
               }), i.on("$destroy", function () {
                  o(function () {
                     E.scope.$broadcast("$mdTabsChanged")
                  }, 0, !1)
               }), angular.isDefined(l.ngClick) || i.on("click", u), i.on("keydown", f), angular.isNumber(a.$parent.$index) && p(), angular.isDefined(l.mdActive) && h(), g()
            }
         }

         return {
            restrict: "E",
            require: ["mdTab", "^mdTabs"],
            controller: "$mdTab",
            scope: {onSelect: "&mdOnSelect", onDeselect: "&mdOnDeselect", label: "@"},
            compile: a
         }
      }

      angular.module("material.components.tabs").directive("mdTab", e), e.$inject = ["$mdInkRipple", "$compile", "$mdUtil", "$mdConstant", "$timeout"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e, t, n) {
         function r() {
            return b(e.selectedIndex)
         }

         function o() {
            return e.selectedIndex
         }

         function a(t, n) {
            p.add(t, n), angular.isDefined(t.element.attr("md-active")) || -1 !== e.selectedIndex && angular.isNumber(e.selectedIndex) && e.selectedIndex !== h.indexOf(t) ? t.onAdd(h.contentArea, !0) : (t.onAdd(h.contentArea, !1), h.select(t)), e.$broadcast("$mdTabsChanged")
         }

         function i(t, n) {
            if (p.contains(t) && !n) {
               var o = r() === t, a = u() || m();
               s(t), p.remove(t), t.onRemove(), e.$broadcast("$mdTabsChanged"), o && d(a)
            }
         }

         function c(t, n) {
            var o = r() === t;
            p.remove(t), p.add(t, n), o && d(t), e.$broadcast("$mdTabsChanged")
         }

         function d(t, n) {
            !t || t.isSelected || t.isDisabled() || p.contains(t) && (angular.isDefined(n) || (n = g(t) < e.selectedIndex), s(r(), n), e.selectedIndex = g(t), t.isSelected = !0, t.onSelect(n), e.$broadcast("$mdTabsChanged"))
         }

         function l(e) {
            h.tabToFocus = e
         }

         function s(t, n) {
            t && t.isSelected && p.contains(t) && (e.selectedIndex = -1, t.isSelected = !1, t.onDeselect(n))
         }

         function m(e, t) {
            return p.next(e || r(), t || f)
         }

         function u(e, t) {
            return p.previous(e || r(), t || f)
         }

         function f(e) {
            return e && !e.isDisabled()
         }

         var p = n.iterator([], !1), h = this;
         h.$element = t, h.scope = e;
         var g = (h.contentArea = angular.element(t[0].querySelector(".md-tabs-content")), h.inRange = p.inRange, h.indexOf = p.indexOf), b = h.itemAt = p.itemAt;
         h.count = p.count, h.getSelectedItem = r, h.getSelectedIndex = o, h.add = a, h.remove = i, h.move = c, h.select = d, h.focus = l, h.deselect = s, h.next = m, h.previous = u, e.$on("$destroy", function () {
            s(r());
            for (var e = p.count() - 1; e >= 0; e--)i(p[e], !0)
         })
      }

      angular.module("material.components.tabs").controller("$mdTabs", e), e.$inject = ["$scope", "$element", "$mdUtil", "$timeout"]
   }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.2
 */
   function () {
      "use strict";
      function e(e) {
         function t(t, n, r, o, a) {
            function i() {
               n.attr("role", "tablist")
            }

            function c() {
               t.$watch("selectedIndex", function (e, t) {
                  if (t != e) {
                     var n = t > e;
                     if (o.deselect(o.itemAt(t), n), o.inRange(e)) {
                        for (var r = o.itemAt(e); r && r.isDisabled();)r = e > t ? o.next(r) : o.previous(r);
                        o.select(r, n)
                     }
                  }
               })
            }

            t.stretchTabs = r.hasOwnProperty("mdStretchTabs") ? r.mdStretchTabs || "always" : "auto", e(n), i(), c(), a(t.$parent, function (e) {
               angular.element(n[0].querySelector(".md-header-items")).append(e)
            })
         }

         return {
            restrict: "E",
            controller: "$mdTabs",
            require: "mdTabs",
            transclude: !0,
            scope: {selectedIndex: "=?mdSelected"},
            template: '<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button></section><section class="md-tabs-content"></section>',
            link: t
         }
      }

      angular.module("material.components.tabs").directive("mdTabs", e), e.$inject = ["$mdTheming"]
   }(), angular.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete {  background: '{{background-50}}'; }  md-autocomplete button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete button:after {    background: '{{background-600-0.3}}'; }  md-autocomplete ul {    background: '{{background-50}}'; }    md-autocomplete ul li {      border-top: 1px solid '{{background-400}}';      color: '{{background-900}}'; }      md-autocomplete ul li .highlight {        color: '{{background-600}}'; }      md-autocomplete ul li:hover, md-autocomplete ul li.selected {        background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-toolbar .md-button.md-THEME_NAME-theme.md-fab {  background-color: white; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus {      background-color: '{{background-200}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }md-icon.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }md-icon.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }md-icon.md-THEME_NAME-theme.md-danger {  color: '{{danger-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-4}}' 100%); }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  background-color: '{{primary-50}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    background-color: '{{primary-100}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    background-color: '{{accent-50}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      background-color: '{{accent-100}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: transparent; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]).active {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab .md-ripple-container {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{foreground-1}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme input::-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");