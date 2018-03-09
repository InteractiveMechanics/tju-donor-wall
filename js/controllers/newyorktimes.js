(function() {
    function e(e, t) {
        try {
            for (var n in t) Object.defineProperty(e.prototype, n, {
                value: t[n],
                enumerable: !1
            })
        } catch (r) {
            e.prototype = t
        }
    }

    function t(e) {
        var t = -1,
            n = e.length,
            r = [];
        while (++t < n) r.push(e[t]);
        return r
    }

    function n(e) {
        return Array.prototype.slice.call(e)
    }

    function r() {}

    function i(e) {
        return e
    }

    function s() {
        return this
    }

    function o() {
        return !0
    }

    function u(e) {
        return typeof e == "function" ? e : function() {
            return e
        }
    }

    function a(e, t, n) {
        return function() {
            var r = n.apply(t, arguments);
            return arguments.length ? e : r
        }
    }

    function f(e) {
        return e != null && !isNaN(e)
    }

    function l(e) {
        return e.length
    }

    function c(e) {
        return e == null
    }

    function h(e) {
        return e.trim().replace(/\s+/g, " ")
    }

    function p(e) {
        var t = 1;
        while (e * t % 1) t *= 10;
        return t
    }

    function d() {}

    function v(e) {
        function t() {
            var t = n,
                r = -1,
                i = t.length,
                s;
            while (++r < i)(s = t[r].on) && s.apply(this, arguments);
            return e
        }
        var n = [],
            i = new r;
        return t.on = function(t, r) {
            var s = i.get(t),
                o;
            return arguments.length < 2 ? s && s.on : (s && (s.on = null, n = n.slice(0, o = n.indexOf(s)).concat(n.slice(o + 1)), i.remove(t)), r && n.push(i.set(t, {
                on: r
            })), e)
        }, t
    }

    function m(e, t) {
        return t - (e ? 1 + Math.floor(Math.log(e + Math.pow(10, 1 + Math.floor(Math.log(e) / Math.LN10) - t)) / Math.LN10) : 1)
    }

    function g(e) {
        return e + ""
    }

    function y(e) {
        var t = e.lastIndexOf("."),
            n = t >= 0 ? e.substring(t) : (t = e.length, ""),
            r = [];
        while (t > 0) r.push(e.substring(t -= 3, t + 3));
        return r.reverse().join(",") + n
    }

    function b(e, t) {
        var n = Math.pow(10, Math.abs(8 - t) * 3);
        return {
            scale: t > 8 ? function(e) {
                return e / n
            } : function(e) {
                return e * n
            },
            symbol: e
        }
    }

    function w(e) {
        return function(t) {
            return t <= 0 ? 0 : t >= 1 ? 1 : e(t)
        }
    }

    function E(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }

    function S(e) {
        return function(t) {
            return .5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
        }
    }

    function x(e) {
        return e
    }

    function T(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }

    function N(e) {
        return 1 - Math.cos(e * Math.PI / 2)
    }

    function C(e) {
        return Math.pow(2, 10 * (e - 1))
    }

    function k(e) {
        return 1 - Math.sqrt(1 - e * e)
    }

    function L(e, t) {
        var n;
        return arguments.length < 2 && (t = .45), arguments.length < 1 ? (e = 1, n = t / 4) : n = t / (2 * Math.PI) * Math.asin(1 / e),
            function(r) {
                return 1 + e * Math.pow(2, 10 * -r) * Math.sin((r - n) * 2 * Math.PI / t)
            }
    }

    function A(e) {
        return e || (e = 1.70158),
            function(t) {
                return t * t * ((e + 1) * t - e)
            }
    }

    function O(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function M() {
        d3.event.stopPropagation(), d3.event.preventDefault()
    }

    function _() {
        var e = d3.event,
            t;
        while (t = e.sourceEvent) e = t;
        return e
    }

    function D(e) {
        var t = new d,
            n = 0,
            r = arguments.length;
        while (++n < r) t[arguments[n]] = v(t);
        return t.of = function(n, r) {
            return function(i) {
                try {
                    var s = i.sourceEvent = d3.event;
                    i.target = e, d3.event = i, t[i.type].apply(n, r)
                } finally {
                    d3.event = s
                }
            }
        }, t
    }

    function P(e) {
        var t = [e.a, e.b],
            n = [e.c, e.d],
            r = B(t),
            i = H(t, n),
            s = B(j(n, t, -i)) || 0;
        t[0] * n[1] < n[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-n[0], n[1])) * fs, this.translate = [e.e, e.f], this.scale = [r, s], this.skew = s ? Math.atan2(i, s) * fs : 0
    }

    function H(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    }

    function B(e) {
        var t = Math.sqrt(H(e, e));
        return t && (e[0] /= t, e[1] /= t), t
    }

    function j(e, t, n) {
        return e[0] += n * t[0], e[1] += n * t[1], e
    }

    function F(e) {
        return e == "transform" ? d3.interpolateTransform : d3.interpolate
    }

    function I(e, t) {
        return t = t - (e = +e) ? 1 / (t - e) : 0,
            function(n) {
                return (n - e) * t
            }
    }

    function q(e, t) {
        return t = t - (e = +e) ? 1 / (t - e) : 0,
            function(n) {
                return Math.max(0, Math.min(1, (n - e) * t))
            }
    }

    function R(e, t, n) {
        return new U(e, t, n)
    }

    function U(e, t, n) {
        this.r = e, this.g = t, this.b = n
    }

    function z(e) {
        return e < 16 ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
    }

    function W(e, t, n) {
        var r = 0,
            i = 0,
            s = 0,
            o, u, a;
        o = /([a-z]+)\((.*)\)/i.exec(e);
        if (o) {
            u = o[2].split(",");
            switch (o[1]) {
                case "hsl":
                    return n(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                case "rgb":
                    return t(J(u[0]), J(u[1]), J(u[2]))
            }
        }
        return (a = hs.get(e)) ? t(a.r, a.g, a.b) : (e != null && e.charAt(0) === "#" && (e.length === 4 ? (r = e.charAt(1), r += r, i = e.charAt(2), i += i, s = e.charAt(3), s += s) : e.length === 7 && (r = e.substring(1, 3), i = e.substring(3, 5), s = e.substring(5, 7)), r = parseInt(r, 16), i = parseInt(i, 16), s = parseInt(s, 16)), t(r, i, s))
    }

    function X(e, t, n) {
        var r = Math.min(e /= 255, t /= 255, n /= 255),
            i = Math.max(e, t, n),
            s = i - r,
            o, u, a = (i + r) / 2;
        return s ? (u = a < .5 ? s / (i + r) : s / (2 - i - r), e == i ? o = (t - n) / s + (t < n ? 6 : 0) : t == i ? o = (n - e) / s + 2 : o = (e - t) / s + 4, o *= 60) : u = o = 0, K(o, u, a)
    }

    function V(e, t, n) {
        e = $(e), t = $(t), n = $(n);
        var r = ot((.4124564 * e + .3575761 * t + .1804375 * n) / ds),
            i = ot((.2126729 * e + .7151522 * t + .072175 * n) / vs),
            s = ot((.0193339 * e + .119192 * t + .9503041 * n) / ms);
        return tt(116 * i - 16, 500 * (r - i), 200 * (i - s))
    }

    function $(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }

    function J(e) {
        var t = parseFloat(e);
        return e.charAt(e.length - 1) === "%" ? Math.round(t * 2.55) : t
    }

    function K(e, t, n) {
        return new Q(e, t, n)
    }

    function Q(e, t, n) {
        this.h = e, this.s = t, this.l = n
    }

    function G(e, t, n) {
        function r(e) {
            return e > 360 ? e -= 360 : e < 0 && (e += 360), e < 60 ? s + (o - s) * e / 60 : e < 180 ? o : e < 240 ? s + (o - s) * (240 - e) / 60 : s
        }

        function i(e) {
            return Math.round(r(e) * 255)
        }
        var s, o;
        return e %= 360, e < 0 && (e += 360), t = t < 0 ? 0 : t > 1 ? 1 : t, n = n < 0 ? 0 : n > 1 ? 1 : n, o = n <= .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o, R(i(e + 120), i(e), i(e - 120))
    }

    function Y(e, t, n) {
        return new Z(e, t, n)
    }

    function Z(e, t, n) {
        this.h = e, this.c = t, this.l = n
    }

    function et(e, t, n) {
        return tt(n, Math.cos(e *= Math.PI / 180) * t, Math.sin(e) * t)
    }

    function tt(e, t, n) {
        return new nt(e, t, n)
    }

    function nt(e, t, n) {
        this.l = e, this.a = t, this.b = n
    }

    function rt(e, t, n) {
        var r = (e + 16) / 116,
            i = r + t / 500,
            s = r - n / 200;
        return i = st(i) * ds, r = st(r) * vs, s = st(s) * ms, R(ut(3.2404542 * i - 1.5371385 * r - .4985314 * s), ut(-0.969266 * i + 1.8760108 * r + .041556 * s), ut(.0556434 * i - .2040259 * r + 1.0572252 * s))
    }

    function it(e, t, n) {
        return Y(Math.atan2(n, t) / Math.PI * 180, Math.sqrt(t * t + n * n), e)
    }

    function st(e) {
        return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037
    }

    function ot(e) {
        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
    }

    function ut(e) {
        return Math.round(255 * (e <= .00304 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055))
    }

    function at(e) {
        return Ki(e, Ss), e
    }

    function ft(e) {
        return function() {
            return gs(e, this)
        }
    }

    function lt(e) {
        return function() {
            return ys(e, this)
        }
    }

    function ct(e, t) {
        function n() {
            this.removeAttribute(e)
        }

        function r() {
            this.removeAttributeNS(e.space, e.local)
        }

        function i() {
            this.setAttribute(e, t)
        }

        function s() {
            this.setAttributeNS(e.space, e.local, t)
        }

        function o() {
            var n = t.apply(this, arguments);
            n == null ? this.removeAttribute(e) : this.setAttribute(e, n)
        }

        function u() {
            var n = t.apply(this, arguments);
            n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
        }
        return e = d3.ns.qualify(e), t == null ? e.local ? r : n : typeof t == "function" ? e.local ? u : o : e.local ? s : i
    }

    function ht(e) {
        return new RegExp("(?:^|\\s+)" + d3.requote(e) + "(?:\\s+|$)", "g")
    }

    function pt(e, t) {
        function n() {
            var n = -1;
            while (++n < i) e[n](this, t)
        }

        function r() {
            var n = -1,
                r = t.apply(this, arguments);
            while (++n < i) e[n](this, r)
        }
        e = e.trim().split(/\s+/).map(dt);
        var i = e.length;
        return typeof t == "function" ? r : n
    }

    function dt(e) {
        var t = ht(e);
        return function(n, r) {
            if (i = n.classList) return r ? i.add(e) : i.remove(e);
            var i = n.className,
                s = i.baseVal != null,
                o = s ? i.baseVal : i;
            r ? (t.lastIndex = 0, t.test(o) || (o = h(o + " " + e), s ? i.baseVal = o : n.className = o)) : o && (o = h(o.replace(t, " ")), s ? i.baseVal = o : n.className = o)
        }
    }

    function vt(e, t, n) {
        function r() {
            this.style.removeProperty(e)
        }

        function i() {
            this.style.setProperty(e, t, n)
        }

        function s() {
            var r = t.apply(this, arguments);
            r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
        }
        return t == null ? r : typeof t == "function" ? s : i
    }

    function mt(e, t) {
        function n() {
            delete this[e]
        }

        function r() {
            this[e] = t
        }

        function i() {
            var n = t.apply(this, arguments);
            n == null ? delete this[e] : this[e] = n
        }
        return t == null ? n : typeof t == "function" ? i : r
    }

    function gt(e) {
        return {
            __data__: e
        }
    }

    function yt(e) {
        return function() {
            return Es(this, e)
        }
    }

    function bt(e) {
        return arguments.length || (e = d3.ascending),
            function(t, n) {
                return e(t && t.__data__, n && n.__data__)
            }
    }

    function wt(e, t, n) {
        function r() {
            var t = this[s];
            t && (this.removeEventListener(e, t, t.$), delete this[s])
        }

        function i() {
            function i(e) {
                var n = d3.event;
                d3.event = e, u[0] = o.__data__;
                try {
                    t.apply(o, u)
                } finally {
                    d3.event = n
                }
            }
            var o = this,
                u = arguments;
            r.call(this), this.addEventListener(e, this[s] = i, i.$ = n), i._ = t
        }
        var s = "__on" + e,
            o = e.indexOf(".");
        return o > 0 && (e = e.substring(0, o)), t ? i : r
    }

    function Et(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            for (var i = e[n], s = 0, o = i.length, u; s < o; s++)(u = i[s]) && t(u, s, n);
        return e
    }

    function St(e) {
        return Ki(e, Ts), e
    }

    function xt(e, t, n) {
        Ki(e, Ns);
        var i = new r,
            s = d3.dispatch("start", "end"),
            o = Ds;
        return e.id = t, e.time = n, e.tween = function(t, n) {
            return arguments.length < 2 ? i.get(t) : (n == null ? i.remove(t) : i.set(t, n), e)
        }, e.ease = function(t) {
            return arguments.length ? (o = typeof t == "function" ? t : d3.ease.apply(d3, arguments), e) : o
        }, e.each = function(t, n) {
            return arguments.length < 2 ? Tt.call(e, t) : (s.on(t, n), e)
        }, d3.timer(function(r) {
            return Et(e, function(e, u, a) {
                function f(r) {
                    return v.active > t ? c() : (v.active = t, i.forEach(function(t, n) {
                        (n = n.call(e, m, u)) && h.push(n)
                    }), s.start.call(e, m, u), l(r) || d3.timer(l, 0, n), 1)
                }

                function l(n) {
                    if (v.active !== t) return c();
                    var r = (n - p) / d,
                        i = o(r),
                        a = h.length;
                    while (a > 0) h[--a].call(e, i);
                    if (r >= 1) return c(), ks = t, s.end.call(e, m, u), ks = 0, 1
                }

                function c() {
                    return --v.count || delete e.__transition__, 1
                }
                var h = [],
                    p = e.delay,
                    d = e.duration,
                    v = (e = e.node).__transition__ || (e.__transition__ = {
                        active: 0,
                        count: 0
                    }),
                    m = e.__data__;
                ++v.count, p <= r ? f(r) : d3.timer(f, p, n)
            })
        }, 0, n), e
    }

    function Tt(e) {
        var t = ks,
            n = Ds,
            r = Ms,
            i = _s;
        return ks = this.id, Ds = this.ease(), Et(this, function(t, n, r) {
            Ms = t.delay, _s = t.duration, e.call(t = t.node, t.__data__, n, r)
        }), ks = t, Ds = n, Ms = r, _s = i, this
    }

    function Nt(e, t, n) {
        return n != "" && Ps
    }

    function Ct(e, t) {
        return d3.tween(e, F(t))
    }

    function kt() {
        var e, t = Date.now(),
            n = Hs;
        while (n) e = t - n.then, e >= n.delay && (n.flush = n.callback(e)), n = n.next;
        var r = Lt() - t;
        r > 24 ? (isFinite(r) && (clearTimeout(js), js = setTimeout(kt, r)), Bs = 0) : (Bs = 1, Fs(kt))
    }

    function Lt() {
        var e = null,
            t = Hs,
            n = Infinity;
        while (t) t.flush ? t = e ? e.next = t.next : Hs = t.next : (n = Math.min(n, t.then + t.delay), t = (e = t).next);
        return n
    }

    function At(e, t) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            if (Is < 0 && (window.scrollX || window.scrollY)) {
                n = d3.select(document.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var i = n[0][0].getScreenCTM();
                Is = !i.f && !i.e, n.remove()
            }
            return Is ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y]
        }
        var s = e.getBoundingClientRect();
        return [t.clientX - s.left - e.clientLeft, t.clientY - s.top - e.clientTop]
    }

    function Ot() {}

    function Mt(e) {
        var t = e[0],
            n = e[e.length - 1];
        return t < n ? [t, n] : [n, t]
    }

    function _t(e) {
        return e.rangeExtent ? e.rangeExtent() : Mt(e.range())
    }

    function Dt(e, t) {
        var n = 0,
            r = e.length - 1,
            i = e[n],
            s = e[r],
            o;
        s < i && (o = n, n = r, r = o, o = i, i = s, s = o);
        if (t = t(s - i)) e[n] = t.floor(i), e[r] = t.ceil(s);
        return e
    }

    function Pt() {
        return Math
    }

    function Ht(e, t, n, r) {
        function i() {
            var i = Math.min(e.length, t.length) > 2 ? Ut : Rt,
                a = r ? q : I;
            return o = i(e, t, a, n), u = i(t, e, a, d3.interpolate), s
        }

        function s(e) {
            return o(e)
        }
        var o, u;
        return s.invert = function(e) {
            return u(e)
        }, s.domain = function(t) {
            return arguments.length ? (e = t.map(Number), i()) : e
        }, s.range = function(e) {
            return arguments.length ? (t = e, i()) : t
        }, s.rangeRound = function(e) {
            return s.range(e).interpolate(d3.interpolateRound)
        }, s.clamp = function(e) {
            return arguments.length ? (r = e, i()) : r
        }, s.interpolate = function(e) {
            return arguments.length ? (n = e, i()) : n
        }, s.ticks = function(t) {
            return It(e, t)
        }, s.tickFormat = function(t) {
            return qt(e, t)
        }, s.nice = function() {
            return Dt(e, jt), i()
        }, s.copy = function() {
            return Ht(e, t, n, r)
        }, i()
    }

    function Bt(e, t) {
        return d3.rebind(e, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function jt(e) {
        return e = Math.pow(10, Math.round(Math.log(e) / Math.LN10) - 1), e && {
            floor: function(t) {
                return Math.floor(t / e) * e
            },
            ceil: function(t) {
                return Math.ceil(t / e) * e
            }
        }
    }

    function Ft(e, t) {
        var n = Mt(e),
            r = n[1] - n[0],
            i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
            s = t / r * i;
        return s <= .15 ? i *= 10 : s <= .35 ? i *= 5 : s <= .75 && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + i * .5, n[2] = i, n
    }

    function It(e, t) {
        return d3.range.apply(d3, Ft(e, t))
    }

    function qt(e, t) {
        return d3.format(",." + Math.max(0, -Math.floor(Math.log(Ft(e, t)[2]) / Math.LN10 + .01)) + "f")
    }

    function Rt(e, t, n, r) {
        var i = n(e[0], e[1]),
            s = r(t[0], t[1]);
        return function(e) {
            return s(i(e))
        }
    }

    function Ut(e, t, n, r) {
        var i = [],
            s = [],
            o = 0,
            u = Math.min(e.length, t.length) - 1;
        e[u] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse());
        while (++o <= u) i.push(n(e[o - 1], e[o])), s.push(r(t[o - 1], t[o]));
        return function(t) {
            var n = d3.bisect(e, t, 1, u) - 1;
            return s[n](i[n](t))
        }
    }

    function zt(e, t) {
        function n(n) {
            return e(t(n))
        }
        var r = t.pow;
        return n.invert = function(t) {
            return r(e.invert(t))
        }, n.domain = function(i) {
            return arguments.length ? (t = i[0] < 0 ? Xt : Wt, r = t.pow, e.domain(i.map(t)), n) : e.domain().map(r)
        }, n.nice = function() {
            return e.domain(Dt(e.domain(), Pt)), n
        }, n.ticks = function() {
            var n = Mt(e.domain()),
                i = [];
            if (n.every(isFinite)) {
                var s = Math.floor(n[0]),
                    o = Math.ceil(n[1]),
                    u = r(n[0]),
                    a = r(n[1]);
                if (t === Xt) {
                    i.push(r(s));
                    for (; s++ < o;)
                        for (var f = 9; f > 0; f--) i.push(r(s) * f)
                } else {
                    for (; s < o; s++)
                        for (var f = 1; f < 10; f++) i.push(r(s) * f);
                    i.push(r(s))
                }
                for (s = 0; i[s] < u; s++);
                for (o = i.length; i[o - 1] > a; o--);
                i = i.slice(s, o)
            }
            return i
        }, n.tickFormat = function(e, i) {
            arguments.length < 2 && (i = qs);
            if (arguments.length < 1) return i;
            var s = Math.max(.1, e / n.ticks().length),
                o = t === Xt ? (u = -1e-12, Math.floor) : (u = 1e-12, Math.ceil),
                u;
            return function(e) {
                return e / r(o(t(e) + u)) <= s ? i(e) : ""
            }
        }, n.copy = function() {
            return zt(e.copy(), t)
        }, Bt(n, e)
    }

    function Wt(e) {
        return Math.log(e < 0 ? 0 : e) / Math.LN10
    }

    function Xt(e) {
        return -Math.log(e > 0 ? 0 : -e) / Math.LN10
    }

    function Vt(e, t) {
        function n(t) {
            return e(r(t))
        }
        var r = $t(t),
            i = $t(1 / t);
        return n.invert = function(t) {
            return i(e.invert(t))
        }, n.domain = function(t) {
            return arguments.length ? (e.domain(t.map(r)), n) : e.domain().map(i)
        }, n.ticks = function(e) {
            return It(n.domain(), e)
        }, n.tickFormat = function(e) {
            return qt(n.domain(), e)
        }, n.nice = function() {
            return n.domain(Dt(n.domain(), jt))
        }, n.exponent = function(e) {
            if (!arguments.length) return t;
            var s = n.domain();
            return r = $t(t = e), i = $t(1 / t), n.domain(s)
        }, n.copy = function() {
            return Vt(e.copy(), t)
        }, Bt(n, e)
    }

    function $t(e) {
        return function(t) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
        }
    }

    function Jt(e, t) {
        function n(t) {
            return o[((s.get(t) || s.set(t, e.push(t))) - 1) % o.length]
        }

        function i(t, n) {
            return d3.range(e.length).map(function(e) {
                return t + n * e
            })
        }
        var s, o, u;
        return n.domain = function(i) {
            if (!arguments.length) return e;
            e = [], s = new r;
            var o = -1,
                u = i.length,
                a;
            while (++o < u) s.has(a = i[o]) || s.set(a, e.push(a));
            return n[t.t].apply(n, t.a)
        }, n.range = function(e) {
            return arguments.length ? (o = e, u = 0, t = {
                t: "range",
                a: arguments
            }, n) : o
        }, n.rangePoints = function(r, s) {
            arguments.length < 2 && (s = 0);
            var a = r[0],
                f = r[1],
                l = (f - a) / (Math.max(1, e.length - 1) + s);
            return o = i(e.length < 2 ? (a + f) / 2 : a + l * s / 2, l), u = 0, t = {
                t: "rangePoints",
                a: arguments
            }, n
        }, n.rangeBands = function(r, s, a) {
            arguments.length < 2 && (s = 0), arguments.length < 3 && (a = s);
            var f = r[1] < r[0],
                l = r[f - 0],
                c = r[1 - f],
                h = (c - l) / (e.length - s + 2 * a);
            return o = i(l + h * a, h), f && o.reverse(), u = h * (1 - s), t = {
                t: "rangeBands",
                a: arguments
            }, n
        }, n.rangeRoundBands = function(r, s, a) {
            arguments.length < 2 && (s = 0), arguments.length < 3 && (a = s);
            var f = r[1] < r[0],
                l = r[f - 0],
                c = r[1 - f],
                h = Math.floor((c - l) / (e.length - s + 2 * a)),
                p = c - l - (e.length - s) * h;
            return o = i(l + Math.round(p / 2), h), f && o.reverse(), u = Math.round(h * (1 - s)), t = {
                t: "rangeRoundBands",
                a: arguments
            }, n
        }, n.rangeBand = function() {
            return u
        }, n.rangeExtent = function() {
            return Mt(t.a[0])
        }, n.copy = function() {
            return Jt(e, t)
        }, n.domain(e)
    }

    function Kt(e, t) {
        function n() {
            var n = 0,
                s = e.length,
                o = t.length;
            i = [];
            while (++n < o) i[n - 1] = d3.quantile(e, n / o);
            return r
        }

        function r(e) {
            return isNaN(e = +e) ? NaN : t[d3.bisect(i, e)]
        }
        var i;
        return r.domain = function(t) {
            return arguments.length ? (e = t.filter(function(e) {
                return !isNaN(e)
            }).sort(d3.ascending), n()) : e
        }, r.range = function(e) {
            return arguments.length ? (t = e, n()) : t
        }, r.quantiles = function() {
            return i
        }, r.copy = function() {
            return Kt(e, t)
        }, n()
    }

    function Qt(e, t, n) {
        function r(t) {
            return n[Math.max(0, Math.min(o, Math.floor(s * (t - e))))]
        }

        function i() {
            return s = n.length / (t - e), o = n.length - 1, r
        }
        var s, o;
        return r.domain = function(n) {
            return arguments.length ? (e = +n[0], t = +n[n.length - 1], i()) : [e, t]
        }, r.range = function(e) {
            return arguments.length ? (n = e, i()) : n
        }, r.copy = function() {
            return Qt(e, t, n)
        }, i()
    }

    function Gt(e, t) {
        function n(n) {
            return t[d3.bisect(e, n)]
        }
        return n.domain = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.range = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.copy = function() {
            return Gt(e, t)
        }, n
    }

    function Yt(e) {
        function t(e) {
            return +e
        }
        return t.invert = t, t.domain = t.range = function(n) {
            return arguments.length ? (e = n.map(t), t) : e
        }, t.ticks = function(t) {
            return It(e, t)
        }, t.tickFormat = function(t) {
            return qt(e, t)
        }, t.copy = function() {
            return Yt(e)
        }, t
    }

    function Zt(e) {
        return e.innerRadius
    }

    function en(e) {
        return e.outerRadius
    }

    function tn(e) {
        return e.startAngle
    }

    function nn(e) {
        return e.endAngle
    }

    function rn(e) {
        function t(t) {
            function o() {
                a.push("M", s(e(l), f))
            }
            var a = [],
                l = [],
                c = -1,
                h = t.length,
                p, d = u(n),
                v = u(r);
            while (++c < h) i.call(this, p = t[c], c) ? l.push([+d.call(this, p, c), +v.call(this, p, c)]) : l.length && (o(), l = []);
            return l.length && o(), a.length ? a.join("") : null
        }
        var n = sn,
            r = on,
            i = o,
            s = un,
            a = s.key,
            f = .7;
        return t.x = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.y = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.defined = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t.interpolate = function(e) {
            return arguments.length ? (typeof e == "function" ? a = s = e : a = (s = $s.get(e) || un).key, t) : a
        }, t.tension = function(e) {
            return arguments.length ? (f = e, t) : f
        }, t
    }

    function sn(e) {
        return e[0]
    }

    function on(e) {
        return e[1]
    }

    function un(e) {
        return e.join("L")
    }

    function an(e) {
        return un(e) + "Z"
    }

    function fn(e) {
        var t = 0,
            n = e.length,
            r = e[0],
            i = [r[0], ",", r[1]];
        while (++t < n) i.push("V", (r = e[t])[1], "H", r[0]);
        return i.join("")
    }

    function ln(e) {
        var t = 0,
            n = e.length,
            r = e[0],
            i = [r[0], ",", r[1]];
        while (++t < n) i.push("H", (r = e[t])[0], "V", r[1]);
        return i.join("")
    }

    function cn(e, t) {
        return e.length < 4 ? un(e) : e[1] + dn(e.slice(1, e.length - 1), vn(e, t))
    }

    function hn(e, t) {
        return e.length < 3 ? un(e) : e[0] + dn((e.push(e[0]), e), vn([e[e.length - 2]].concat(e, [e[1]]), t))
    }

    function pn(e, t, n) {
        return e.length < 3 ? un(e) : e[0] + dn(e, vn(e, t))
    }

    function dn(e, t) {
        if (t.length < 1 || e.length != t.length && e.length != t.length + 2) return un(e);
        var n = e.length != t.length,
            r = "",
            i = e[0],
            s = e[1],
            o = t[0],
            u = o,
            a = 1;
        n && (r += "Q" + (s[0] - o[0] * 2 / 3) + "," + (s[1] - o[1] * 2 / 3) + "," + s[0] + "," + s[1], i = e[1], a = 2);
        if (t.length > 1) {
            u = t[1], s = e[a], a++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1];
            for (var f = 2; f < t.length; f++, a++) s = e[a], u = t[f], r += "S" + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1]
        }
        if (n) {
            var l = e[a];
            r += "Q" + (s[0] + u[0] * 2 / 3) + "," + (s[1] + u[1] * 2 / 3) + "," + l[0] + "," + l[1]
        }
        return r
    }

    function vn(e, t) {
        var n = [],
            r = (1 - t) / 2,
            i, s = e[0],
            o = e[1],
            u = 1,
            a = e.length;
        while (++u < a) i = s, s = o, o = e[u], n.push([r * (o[0] - i[0]), r * (o[1] - i[1])]);
        return n
    }

    function mn(e) {
        if (e.length < 3) return un(e);
        var t = 1,
            n = e.length,
            r = e[0],
            i = r[0],
            s = r[1],
            o = [i, i, i, (r = e[1])[0]],
            u = [s, s, s, r[1]],
            a = [i, ",", s];
        En(a, o, u);
        while (++t < n) r = e[t], o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), En(a, o, u);
        t = -1;
        while (++t < 2) o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), En(a, o, u);
        return a.join("")
    }

    function gn(e) {
        if (e.length < 4) return un(e);
        var t = [],
            n = -1,
            r = e.length,
            i, s = [0],
            o = [0];
        while (++n < 3) i = e[n], s.push(i[0]), o.push(i[1]);
        t.push(wn(Qs, s) + "," + wn(Qs, o)), --n;
        while (++n < r) i = e[n], s.shift(), s.push(i[0]), o.shift(), o.push(i[1]), En(t, s, o);
        return t.join("")
    }

    function yn(e) {
        var t, n = -1,
            r = e.length,
            i = r + 4,
            s, o = [],
            u = [];
        while (++n < 4) s = e[n % r], o.push(s[0]), u.push(s[1]);
        t = [wn(Qs, o), ",", wn(Qs, u)], --n;
        while (++n < i) s = e[n % r], o.shift(), o.push(s[0]), u.shift(), u.push(s[1]), En(t, o, u);
        return t.join("")
    }

    function bn(e, t) {
        var n = e.length - 1;
        if (n) {
            var r = e[0][0],
                i = e[0][1],
                s = e[n][0] - r,
                o = e[n][1] - i,
                u = -1,
                a, f;
            while (++u <= n) a = e[u], f = u / n, a[0] = t * a[0] + (1 - t) * (r + f * s), a[1] = t * a[1] + (1 - t) * (i + f * o)
        }
        return mn(e)
    }

    function wn(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
    }

    function En(e, t, n) {
        e.push("C", wn(Js, t), ",", wn(Js, n), ",", wn(Ks, t), ",", wn(Ks, n), ",", wn(Qs, t), ",", wn(Qs, n))
    }

    function Sn(e, t) {
        return (t[1] - e[1]) / (t[0] - e[0])
    }

    function xn(e) {
        var t = 0,
            n = e.length - 1,
            r = [],
            i = e[0],
            s = e[1],
            o = r[0] = Sn(i, s);
        while (++t < n) r[t] = (o + (o = Sn(i = s, s = e[t + 1]))) / 2;
        return r[t] = o, r
    }

    function Tn(e) {
        var t = [],
            n, r, i, s, o = xn(e),
            u = -1,
            a = e.length - 1;
        while (++u < a) n = Sn(e[u], e[u + 1]), Math.abs(n) < 1e-6 ? o[u] = o[u + 1] = 0 : (r = o[u] / n, i = o[u + 1] / n, s = r * r + i * i, s > 9 && (s = n * 3 / Math.sqrt(s), o[u] = s * r, o[u + 1] = s * i));
        u = -1;
        while (++u <= a) s = (e[Math.min(a, u + 1)][0] - e[Math.max(0, u - 1)][0]) / (6 * (1 + o[u] * o[u])), t.push([s || 0, o[u] * s || 0]);
        return t
    }

    function Nn(e) {
        return e.length < 3 ? un(e) : e[0] + dn(e, Tn(e))
    }

    function Cn(e) {
        var t, n = -1,
            r = e.length,
            i, s;
        while (++n < r) t = e[n], i = t[0], s = t[1] + Xs, t[0] = i * Math.cos(s), t[1] = i * Math.sin(s);
        return e
    }

    function kn(e) {
        function t(t) {
            function o() {
                l.push("M", f(e(v), p), h, c(e(d.reverse()), p), "Z")
            }
            var l = [],
                d = [],
                v = [],
                m = -1,
                g = t.length,
                y, b = u(n),
                w = u(i),
                E = n === r ? function() {
                    return x
                } : u(r),
                S = i === s ? function() {
                    return T
                } : u(s),
                x, T;
            while (++m < g) a.call(this, y = t[m], m) ? (d.push([x = +b.call(this, y, m), T = +w.call(this, y, m)]), v.push([+E.call(this, y, m), +S.call(this, y, m)])) : d.length && (o(), d = [], v = []);
            return d.length && o(), l.length ? l.join("") : null
        }
        var n = sn,
            r = sn,
            i = 0,
            s = on,
            a = o,
            f = un,
            l = f.key,
            c = f,
            h = "L",
            p = .7;
        return t.x = function(e) {
            return arguments.length ? (n = r = e, t) : r
        }, t.x0 = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.x1 = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.y = function(e) {
            return arguments.length ? (i = s = e, t) : s
        }, t.y0 = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t.y1 = function(e) {
            return arguments.length ? (s = e, t) : s
        }, t.defined = function(e) {
            return arguments.length ? (a = e, t) : a
        }, t.interpolate = function(e) {
            return arguments.length ? (typeof e == "function" ? l = f = e : l = (f = $s.get(e) || un).key, c = f.reverse || f, h = f.closed ? "M" : "L", t) : l
        }, t.tension = function(e) {
            return arguments.length ? (p = e, t) : p
        }, t
    }

    function Ln(e) {
        return e.source
    }

    function An(e) {
        return e.target
    }

    function On(e) {
        return e.radius
    }

    function Mn(e) {
        return e.startAngle
    }

    function _n(e) {
        return e.endAngle
    }

    function Dn(e) {
        return [e.x, e.y]
    }

    function Pn(e) {
        return function() {
            var t = e.apply(this, arguments),
                n = t[0],
                r = t[1] + Xs;
            return [n * Math.cos(r), n * Math.sin(r)]
        }
    }

    function Hn() {
        return 64
    }

    function Bn() {
        return "circle"
    }

    function jn(e) {
        var t = Math.sqrt(e / Math.PI);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function Fn(e, t) {
        e.attr("transform", function(e) {
            return "translate(" + t(e) + ",0)"
        })
    }

    function In(e, t) {
        e.attr("transform", function(e) {
            return "translate(0," + t(e) + ")"
        })
    }

    function qn(e, t, n) {
        i = [];
        if (n && t.length > 1) {
            var r = Mt(e.domain()),
                i, s = -1,
                o = t.length,
                u = (t[1] - t[0]) / ++n,
                a, f;
            while (++s < o)
                for (a = n; --a > 0;)(f = +t[s] - a * u) >= r[0] && i.push(f);
            for (--s, a = 0; ++a < n && (f = +t[s] + a * u) < r[1];) i.push(f)
        }
        return i
    }

    function Rn() {
        no || (no = d3.select("body").append("div").style("visibility", "hidden").style("top", 0).style("height", 0).style("width", 0).style("overflow-y", "scroll").append("div").style("height", "2000px").node().parentNode);
        var e = d3.event,
            t;
        try {
            no.scrollTop = 1e3, no.dispatchEvent(e), t = 1e3 - no.scrollTop
        } catch (n) {
            t = e.wheelDelta || -e.detail * 5
        }
        return t
    }

    function Un(e) {
        var t = e.source,
            n = e.target,
            r = Wn(t, n),
            i = [t];
        while (t !== r) t = t.parent, i.push(t);
        var s = i.length;
        while (n !== r) i.splice(s, 0, n), n = n.parent;
        return i
    }

    function zn(e) {
        var t = [],
            n = e.parent;
        while (n != null) t.push(e), e = n, n = n.parent;
        return t.push(e), t
    }

    function Wn(e, t) {
        if (e === t) return e;
        var n = zn(e),
            r = zn(t),
            i = n.pop(),
            s = r.pop(),
            o = null;
        while (i === s) o = i, i = n.pop(), s = r.pop();
        return o
    }

    function Xn(e) {
        e.fixed |= 2
    }

    function Vn(e) {
        e.fixed &= 1
    }

    function $n(e) {
        e.fixed |= 4
    }

    function Jn(e) {
        e.fixed &= 3
    }

    function Kn(e, t, n) {
        var r = 0,
            i = 0;
        e.charge = 0;
        if (!e.leaf) {
            var s = e.nodes,
                o = s.length,
                u = -1,
                a;
            while (++u < o) {
                a = s[u];
                if (a == null) continue;
                Kn(a, t, n), e.charge += a.charge, r += a.charge * a.cx, i += a.charge * a.cy
            }
        }
        if (e.point) {
            e.leaf || (e.point.x += Math.random() - .5, e.point.y += Math.random() - .5);
            var f = t * n[e.point.index];
            e.charge += e.pointCharge = f, r += f * e.point.x, i += f * e.point.y
        }
        e.cx = r / e.charge, e.cy = i / e.charge
    }

    function Qn(e) {
        return 20
    }

    function Gn(e) {
        return 1
    }

    function Yn(e) {
        return e.x
    }

    function Zn(e) {
        return e.y
    }

    function er(e, t, n) {
        e.y0 = t, e.y = n
    }

    function tr(e) {
        return d3.range(e.length)
    }

    function nr(e) {
        var t = -1,
            n = e[0].length,
            r = [];
        while (++t < n) r[t] = 0;
        return r
    }

    function rr(e) {
        var t = 1,
            n = 0,
            r = e[0][1],
            i, s = e.length;
        for (; t < s; ++t)(i = e[t][1]) > r && (n = t, r = i);
        return n
    }

    function ir(e) {
        return e.reduce(sr, 0)
    }

    function sr(e, t) {
        return e + t[1]
    }

    function or(e, t) {
        return ur(e, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function ur(e, t) {
        var n = -1,
            r = +e[0],
            i = (e[1] - r) / t,
            s = [];
        while (++n <= t) s[n] = i * n + r;
        return s
    }

    function ar(e) {
        return [d3.min(e), d3.max(e)]
    }

    function fr(e, t) {
        return d3.rebind(e, t, "sort", "children", "value"), e.links = pr, e.nodes = function(t) {
            return uo = !0, (e.nodes = e)(t)
        }, e
    }

    function lr(e) {
        return e.children
    }

    function cr(e) {
        return e.value
    }

    function hr(e, t) {
        return t.value - e.value
    }

    function pr(e) {
        return d3.merge(e.map(function(e) {
            return (e.children || []).map(function(t) {
                return {
                    source: e,
                    target: t
                }
            })
        }))
    }

    function dr(e, t) {
        return e.value - t.value
    }

    function vr(e, t) {
        var n = e._pack_next;
        e._pack_next = t, t._pack_prev = e, t._pack_next = n, n._pack_prev = t
    }

    function mr(e, t) {
        e._pack_next = t, t._pack_prev = e
    }

    function gr(e, t) {
        var n = t.x - e.x,
            r = t.y - e.y,
            i = e.r + t.r;
        return i * i - n * n - r * r > .001
    }

    function yr(e) {
        function t(e) {
            r = Math.min(e.x - e.r, r), i = Math.max(e.x + e.r, i), s = Math.min(e.y - e.r, s), o = Math.max(e.y + e.r, o)
        }
        if (!(n = e.children) || !(p = n.length)) return;
        var n, r = Infinity,
            i = -Infinity,
            s = Infinity,
            o = -Infinity,
            u, a, f, l, c, h, p;
        n.forEach(br), u = n[0], u.x = -u.r, u.y = 0, t(u);
        if (p > 1) {
            a = n[1], a.x = a.r, a.y = 0, t(a);
            if (p > 2) {
                f = n[2], Sr(u, a, f), t(f), vr(u, f), u._pack_prev = f, vr(f, a), a = u._pack_next;
                for (l = 3; l < p; l++) {
                    Sr(u, a, f = n[l]);
                    var d = 0,
                        v = 1,
                        m = 1;
                    for (c = a._pack_next; c !== a; c = c._pack_next, v++)
                        if (gr(c, f)) {
                            d = 1;
                            break
                        }
                    if (d == 1)
                        for (h = u._pack_prev; h !== c._pack_prev; h = h._pack_prev, m++)
                            if (gr(h, f)) break;
                    d ? (v < m || v == m && a.r < u.r ? mr(u, a = c) : mr(u = h, a), l--) : (vr(u, f), a = f, t(f))
                }
            }
        }
        var g = (r + i) / 2,
            y = (s + o) / 2,
            b = 0;
        for (l = 0; l < p; l++) f = n[l], f.x -= g, f.y -= y, b = Math.max(b, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
        e.r = b, n.forEach(wr)
    }

    function br(e) {
        e._pack_next = e._pack_prev = e
    }

    function wr(e) {
        delete e._pack_next, delete e._pack_prev
    }

    function Er(e, t, n, r) {
        var i = e.children;
        e.x = t += r * e.x, e.y = n += r * e.y, e.r *= r;
        if (i) {
            var s = -1,
                o = i.length;
            while (++s < o) Er(i[s], t, n, r)
        }
    }

    function Sr(e, t, n) {
        var r = e.r + n.r,
            i = t.x - e.x,
            s = t.y - e.y;
        if (r && (i || s)) {
            var o = t.r + n.r,
                u = i * i + s * s;
            o *= o, r *= r;
            var a = .5 + (r - o) / (2 * u),
                f = Math.sqrt(Math.max(0, 2 * o * (r + u) - (r -= u) * r - o * o)) / (2 * u);
            n.x = e.x + a * i + f * s, n.y = e.y + a * s - f * i
        } else n.x = e.x + r, n.y = e.y
    }

    function xr(e) {
        return 1 + d3.max(e, function(e) {
            return e.y
        })
    }

    function Tr(e) {
        return e.reduce(function(e, t) {
            return e + t.x
        }, 0) / e.length
    }

    function Nr(e) {
        var t = e.children;
        return t && t.length ? Nr(t[0]) : e
    }

    function Cr(e) {
        var t = e.children,
            n;
        return t && (n = t.length) ? Cr(t[n - 1]) : e
    }

    function kr(e, t) {
        return e.parent == t.parent ? 1 : 2
    }

    function Lr(e) {
        var t = e.children;
        return t && t.length ? t[0] : e._tree.thread
    }

    function Ar(e) {
        var t = e.children,
            n;
        return t && (n = t.length) ? t[n - 1] : e._tree.thread
    }

    function Or(e, t) {
        var n = e.children;
        if (n && (i = n.length)) {
            var r, i, s = -1;
            while (++s < i) t(r = Or(n[s], t), e) > 0 && (e = r)
        }
        return e
    }

    function Mr(e, t) {
        return e.x - t.x
    }

    function _r(e, t) {
        return t.x - e.x
    }

    function Dr(e, t) {
        return e.depth - t.depth
    }

    function Pr(e, t) {
        function n(e, r) {
            var i = e.children;
            if (i && (a = i.length)) {
                var s, o = null,
                    u = -1,
                    a;
                while (++u < a) s = i[u], n(s, o), o = s
            }
            t(e, r)
        }
        n(e, null)
    }

    function Hr(e) {
        var t = 0,
            n = 0,
            r = e.children,
            i = r.length,
            s;
        while (--i >= 0) s = r[i]._tree, s.prelim += t, s.mod += t, t += s.shift + (n += s.change)
    }

    function Br(e, t, n) {
        e = e._tree, t = t._tree;
        var r = n / (t.number - e.number);
        e.change += r, t.change -= r, t.shift += n, t.prelim += n, t.mod += n
    }

    function jr(e, t, n) {
        return e._tree.ancestor.parent == t.parent ? e._tree.ancestor : n
    }

    function Fr(e) {
        return {
            x: e.x,
            y: e.y,
            dx: e.dx,
            dy: e.dy
        }
    }

    function Ir(e, t) {
        var n = e.x + t[3],
            r = e.y + t[0],
            i = e.dx - t[1] - t[3],
            s = e.dy - t[0] - t[2];
        return i < 0 && (n += i / 2, i = 0), s < 0 && (r += s / 2, s = 0), {
            x: n,
            y: r,
            dx: i,
            dy: s
        }
    }

    function qr(e, t) {
        function n(e, r) {
            d3.text(e, t, function(e) {
                r(e && n.parse(e))
            })
        }

        function r(t) {
            return t.map(i).join(e)
        }

        function i(e) {
            return o.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e
        }
        var s = new RegExp("\r\n|[" + e + "\r\n]", "g"),
            o = new RegExp('["' + e + "\n]"),
            u = e.charCodeAt(0);
        return n.parse = function(e) {
            var t;
            return n.parseRows(e, function(e, n) {
                if (n) {
                    var r = {},
                        i = -1,
                        s = t.length;
                    while (++i < s) r[t[i]] = e[i];
                    return r
                }
                return t = e, null
            })
        }, n.parseRows = function(e, t) {
            function n() {
                if (s.lastIndex >= e.length) return i;
                if (l) return l = !1, r;
                var t = s.lastIndex;
                if (e.charCodeAt(t) === 34) {
                    var n = t;
                    while (n++ < e.length)
                        if (e.charCodeAt(n) === 34) {
                            if (e.charCodeAt(n + 1) !== 34) break;
                            n++
                        }
                    s.lastIndex = n + 2;
                    var o = e.charCodeAt(n + 1);
                    return o === 13 ? (l = !0, e.charCodeAt(n + 2) === 10 && s.lastIndex++) : o === 10 && (l = !0), e.substring(t + 1, n).replace(/""/g, '"')
                }
                var a = s.exec(e);
                return a ? (l = a[0].charCodeAt(0) !== u, e.substring(t, a.index)) : (s.lastIndex = e.length, e.substring(t))
            }
            var r = {},
                i = {},
                o = [],
                a = 0,
                f, l;
            s.lastIndex = 0;
            while ((f = n()) !== i) {
                var c = [];
                while (f !== r && f !== i) c.push(f), f = n();
                if (t && !(c = t(c, a++))) continue;
                o.push(c)
            }
            return o
        }, n.format = function(e) {
            return e.map(r).join("\n")
        }, n
    }

    function Rr(e, t) {
        return function(n) {
            return n && e.hasOwnProperty(n.type) ? e[n.type](n) : t
        }
    }

    function Ur(e) {
        return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
    }

    function zr(e, t) {
        fo.hasOwnProperty(e.type) && fo[e.type](e, t)
    }

    function Wr(e, t) {
        zr(e.geometry, t)
    }

    function Xr(e, t) {
        for (var n = e.features, r = 0, i = n.length; r < i; r++) zr(n[r].geometry, t)
    }

    function Vr(e, t) {
        for (var n = e.geometries, r = 0, i = n.length; r < i; r++) zr(n[r], t)
    }

    function $r(e, t) {
        for (var n = e.coordinates, r = 0, i = n.length; r < i; r++) t.apply(null, n[r])
    }

    function Jr(e, t) {
        for (var n = e.coordinates, r = 0, i = n.length; r < i; r++)
            for (var s = n[r], o = 0, u = s.length; o < u; o++) t.apply(null, s[o])
    }

    function Kr(e, t) {
        for (var n = e.coordinates, r = 0, i = n.length; r < i; r++)
            for (var s = n[r][0], o = 0, u = s.length; o < u; o++) t.apply(null, s[o])
    }

    function Qr(e, t) {
        t.apply(null, e.coordinates)
    }

    function Gr(e, t) {
        for (var n = e.coordinates[0], r = 0, i = n.length; r < i; r++) t.apply(null, n[r])
    }

    function Yr(e) {
        return e.source
    }

    function Zr(e) {
        return e.target
    }

    function ei() {
        function e(e) {
            var t = Math.sin(e *= p) * d,
                n = Math.sin(p - e) * d,
                r = n * s + t * c,
                u = n * o + t * h,
                a = n * i + t * l;
            return [Math.atan2(u, r) / ao, Math.atan2(a, Math.sqrt(r * r + u * u)) / ao]
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d;
        return e.distance = function() {
            return p == null && (d = 1 / Math.sin(p = Math.acos(Math.max(-1, Math.min(1, i * l + r * f * Math.cos(u - t)))))), p
        }, e.source = function(u) {
            var a = Math.cos(t = u[0] * ao),
                f = Math.sin(t);
            return r = Math.cos(n = u[1] * ao), i = Math.sin(n), s = r * a, o = r * f, p = null, e
        }, e.target = function(t) {
            var n = Math.cos(u = t[0] * ao),
                r = Math.sin(u);
            return f = Math.cos(a = t[1] * ao), l = Math.sin(a), c = f * n, h = f * r, p = null, e
        }, e
    }

    function ti(e, t) {
        var n = ei().source(e).target(t);
        return n.distance(), n
    }

    function ni(e) {
        var t = 0,
            n = 0;
        for (;;) {
            if (e(t, n)) return [t, n];
            t === 0 ? (t = n + 1, n = 0) : (t -= 1, n += 1)
        }
    }

    function ri(e, t, n, r) {
        var i, s, o, u, a, f, l;
        return i = r[e], s = i[0], o = i[1], i = r[t], u = i[0], a = i[1], i = r[n], f = i[0], l = i[1], (l - o) * (u - s) - (a - o) * (f - s) > 0
    }

    function ii(e, t, n) {
        return (n[0] - t[0]) * (e[1] - t[1]) < (n[1] - t[1]) * (e[0] - t[0])
    }

    function si(e, t, n, r) {
        var i = e[0],
            s = t[0],
            o = n[0],
            u = r[0],
            a = e[1],
            f = t[1],
            l = n[1],
            c = r[1],
            h = i - o,
            p = s - i,
            d = u - o,
            v = a - l,
            m = f - a,
            g = c - l,
            y = (d * v - g * h) / (g * p - d * m);
        return [i + y * p, a + y * m]
    }

    function oi(e, t) {
        var n = {
                list: e.map(function(e, t) {
                    return {
                        index: t,
                        x: e[0],
                        y: e[1]
                    }
                }).sort(function(e, t) {
                    return e.y < t.y ? -1 : e.y > t.y ? 1 : e.x < t.x ? -1 : e.x > t.x ? 1 : 0
                }),
                bottomSite: null
            },
            r = {
                list: [],
                leftEnd: null,
                rightEnd: null,
                init: function() {
                    r.leftEnd = r.createHalfEdge(null, "l"), r.rightEnd = r.createHalfEdge(null, "l"), r.leftEnd.r = r.rightEnd, r.rightEnd.l = r.leftEnd, r.list.unshift(r.leftEnd, r.rightEnd)
                },
                createHalfEdge: function(e, t) {
                    return {
                        edge: e,
                        side: t,
                        vertex: null,
                        l: null,
                        r: null
                    }
                },
                insert: function(e, t) {
                    t.l = e, t.r = e.r, e.r.l = t, e.r = t
                },
                leftBound: function(e) {
                    var t = r.leftEnd;
                    do t = t.r; while (t != r.rightEnd && i.rightOf(t, e));
                    return t = t.l, t
                },
                del: function(e) {
                    e.l.r = e.r, e.r.l = e.l, e.edge = null
                },
                right: function(e) {
                    return e.r
                },
                left: function(e) {
                    return e.l
                },
                leftRegion: function(e) {
                    return e.edge == null ? n.bottomSite : e.edge.region[e.side]
                },
                rightRegion: function(e) {
                    return e.edge == null ? n.bottomSite : e.edge.region[ho[e.side]]
                }
            },
            i = {
                bisect: function(e, t) {
                    var n = {
                            region: {
                                l: e,
                                r: t
                            },
                            ep: {
                                l: null,
                                r: null
                            }
                        },
                        r = t.x - e.x,
                        i = t.y - e.y,
                        s = r > 0 ? r : -r,
                        o = i > 0 ? i : -i;
                    return n.c = e.x * r + e.y * i + (r * r + i * i) * .5, s > o ? (n.a = 1, n.b = i / r, n.c /= r) : (n.b = 1, n.a = r / i, n.c /= i), n
                },
                intersect: function(e, t) {
                    var n = e.edge,
                        r = t.edge;
                    if (!n || !r || n.region.r == r.region.r) return null;
                    var i = n.a * r.b - n.b * r.a;
                    if (Math.abs(i) < 1e-10) return null;
                    var s = (n.c * r.b - r.c * n.b) / i,
                        o = (r.c * n.a - n.c * r.a) / i,
                        u = n.region.r,
                        a = r.region.r,
                        f, l;
                    u.y < a.y || u.y == a.y && u.x < a.x ? (f = e, l = n) : (f = t, l = r);
                    var c = s >= l.region.r.x;
                    return c && f.side === "l" || !c && f.side === "r" ? null : {
                        x: s,
                        y: o
                    }
                },
                rightOf: function(e, t) {
                    var n = e.edge,
                        r = n.region.r,
                        i = t.x > r.x;
                    if (i && e.side === "l") return 1;
                    if (!i && e.side === "r") return 0;
                    if (n.a === 1) {
                        var s = t.y - r.y,
                            o = t.x - r.x,
                            u = 0,
                            a = 0;
                        !i && n.b < 0 || i && n.b >= 0 ? a = u = s >= n.b * o : (a = t.x + t.y * n.b > n.c, n.b < 0 && (a = !a), a || (u = 1));
                        if (!u) {
                            var f = r.x - n.region.l.x;
                            a = n.b * (o * o - s * s) < f * s * (1 + 2 * o / f + n.b * n.b), n.b < 0 && (a = !a)
                        }
                    } else {
                        var l = n.c - n.a * t.x,
                            c = t.y - l,
                            h = t.x - r.x,
                            p = l - r.y;
                        a = c * c > h * h + p * p
                    }
                    return e.side === "l" ? a : !a
                },
                endPoint: function(e, n, r) {
                    e.ep[n] = r;
                    if (!e.ep[ho[n]]) return;
                    t(e)
                },
                distance: function(e, t) {
                    var n = e.x - t.x,
                        r = e.y - t.y;
                    return Math.sqrt(n * n + r * r)
                }
            },
            s = {
                list: [],
                insert: function(e, t, n) {
                    e.vertex = t, e.ystar = t.y + n;
                    for (var r = 0, i = s.list, o = i.length; r < o; r++) {
                        var u = i[r];
                        if (e.ystar > u.ystar || e.ystar == u.ystar && t.x > u.vertex.x) continue;
                        break
                    }
                    i.splice(r, 0, e)
                },
                del: function(e) {
                    for (var t = 0, n = s.list, r = n.length; t < r && n[t] != e; ++t);
                    n.splice(t, 1)
                },
                empty: function() {
                    return s.list.length === 0
                },
                nextEvent: function(e) {
                    for (var t = 0, n = s.list, r = n.length; t < r; ++t)
                        if (n[t] == e) return n[t + 1];
                    return null
                },
                min: function() {
                    var e = s.list[0];
                    return {
                        x: e.vertex.x,
                        y: e.ystar
                    }
                },
                extractMin: function() {
                    return s.list.shift()
                }
            };
        r.init(), n.bottomSite = n.list.shift();
        var o = n.list.shift(),
            u, a, f, l, c, h, p, d, v, m, g, y, b;
        for (;;) {
            s.empty() || (u = s.min());
            if (o && (s.empty() || o.y < u.y || o.y == u.y && o.x < u.x)) a = r.leftBound(o), f = r.right(a), p = r.rightRegion(a), y = i.bisect(p, o), h = r.createHalfEdge(y, "l"), r.insert(a, h), m = i.intersect(a, h), m && (s.del(a), s.insert(a, m, i.distance(m, o))), a = h, h = r.createHalfEdge(y, "r"), r.insert(a, h), m = i.intersect(h, f), m && s.insert(h, m, i.distance(m, o)), o = n.list.shift();
            else {
                if (!!s.empty()) break;
                a = s.extractMin(), l = r.left(a), f = r.right(a), c = r.right(f), p = r.leftRegion(a), d = r.rightRegion(f), g = a.vertex, i.endPoint(a.edge, a.side, g), i.endPoint(f.edge, f.side, g), r.del(a), s.del(f), r.del(f), b = "l", p.y > d.y && (v = p, p = d, d = v, b = "r"), y = i.bisect(p, d), h = r.createHalfEdge(y, b), r.insert(l, h), i.endPoint(y, ho[b], g), m = i.intersect(l, h), m && (s.del(l), s.insert(l, m, i.distance(m, p))), m = i.intersect(h, c), m && s.insert(h, m, i.distance(m, p))
            }
        }
        for (a = r.right(r.leftEnd); a != r.rightEnd; a = r.right(a)) t(a.edge)
    }

    function ui() {
        return {
            leaf: !0,
            nodes: [],
            point: null
        }
    }

    function ai(e, t, n, r, i, s) {
        if (!e(t, n, r, i, s)) {
            var o = (n + i) * .5,
                u = (r + s) * .5,
                a = t.nodes;
            a[0] && ai(e, a[0], n, r, o, u), a[1] && ai(e, a[1], o, r, i, u), a[2] && ai(e, a[2], n, u, o, s), a[3] && ai(e, a[3], o, u, i, s)
        }
    }

    function fi(e) {
        return {
            x: e[0],
            y: e[1]
        }
    }

    function li() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function ci(e) {
        return e.substring(0, 3)
    }

    function hi(e, t, n, r) {
        var i, s, o = 0,
            u = t.length,
            a = n.length;
        while (o < u) {
            if (r >= a) return -1;
            i = t.charCodeAt(o++);
            if (i == 37) {
                s = Ho[t.charAt(o++)];
                if (!s || (r = s(e, n, r)) < 0) return -1
            } else if (i != n.charCodeAt(r++)) return -1
        }
        return r
    }

    function pi(e) {
        return new RegExp("^(?:" + e.map(d3.requote).join("|") + ")", "i")
    }

    function di(e) {
        var t = new r,
            n = -1,
            i = e.length;
        while (++n < i) t.set(e[n].toLowerCase(), n);
        return t
    }

    function vi(e, t, n) {
        Ao.lastIndex = 0;
        var r = Ao.exec(t.substring(n));
        return r ? n += r[0].length : -1
    }

    function mi(e, t, n) {
        Lo.lastIndex = 0;
        var r = Lo.exec(t.substring(n));
        return r ? n += r[0].length : -1
    }

    function gi(e, t, n) {
        _o.lastIndex = 0;
        var r = _o.exec(t.substring(n));
        return r ? (e.m = Do.get(r[0].toLowerCase()), n += r[0].length) : -1
    }

    function yi(e, t, n) {
        Oo.lastIndex = 0;
        var r = Oo.exec(t.substring(n));
        return r ? (e.m = Mo.get(r[0].toLowerCase()), n += r[0].length) : -1
    }

    function bi(e, t, n) {
        return hi(e, Po.c.toString(), t, n)
    }

    function wi(e, t, n) {
        return hi(e, Po.x.toString(), t, n)
    }

    function Ei(e, t, n) {
        return hi(e, Po.X.toString(), t, n)
    }

    function Si(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 4));
        return r ? (e.y = +r[0], n += r[0].length) : -1
    }

    function xi(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 2));
        return r ? (e.y = Ti(+r[0]), n += r[0].length) : -1
    }

    function Ti(e) {
        return e + (e > 68 ? 1900 : 2e3)
    }

    function Ni(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 2));
        return r ? (e.m = r[0] - 1, n += r[0].length) : -1
    }

    function Ci(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 2));
        return r ? (e.d = +r[0], n += r[0].length) : -1
    }

    function ki(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 2));
        return r ? (e.H = +r[0], n += r[0].length) : -1
    }

    function Li(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 2));
        return r ? (e.M = +r[0], n += r[0].length) : -1
    }

    function Ai(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 2));
        return r ? (e.S = +r[0], n += r[0].length) : -1
    }

    function Oi(e, t, n) {
        Bo.lastIndex = 0;
        var r = Bo.exec(t.substring(n, n + 3));
        return r ? (e.L = +r[0], n += r[0].length) : -1
    }

    function Mi(e, t, n) {
        var r = jo.get(t.substring(n, n += 2).toLowerCase());
        return r == null ? -1 : (e.p = r, n)
    }

    function _i(e) {
        var t = e.getTimezoneOffset(),
            n = t > 0 ? "-" : "+",
            r = ~~(Math.abs(t) / 60),
            i = Math.abs(t) % 60;
        return n + To(r) + To(i)
    }

    function Di(e) {
        return e.toISOString()
    }

    function Pi(e, t, n) {
        function r(t) {
            var n = e(t),
                r = s(n, 1);
            return t - n < r - t ? n : r
        }

        function i(n) {
            return t(n = e(new po(n - 1)), 1), n
        }

        function s(e, n) {
            return t(e = new po(+e), n), e
        }

        function o(e, r, s) {
            var o = i(e),
                u = [];
            if (s > 1)
                while (o < r) n(o) % s || u.push(new Date(+o)), t(o, 1);
            else
                while (o < r) u.push(new Date(+o)), t(o, 1);
            return u
        }

        function u(e, t, n) {
            try {
                po = li;
                var r = new li;
                return r._ = e, o(r, t, n)
            } finally {
                po = Date
            }
        }
        e.floor = e, e.round = r, e.ceil = i, e.offset = s, e.range = o;
        var a = e.utc = Hi(e);
        return a.floor = a, a.round = Hi(r), a.ceil = Hi(i), a.offset = Hi(s), a.range = u, e
    }

    function Hi(e) {
        return function(t, n) {
            try {
                po = li;
                var r = new li;
                return r._ = t, e(r, n)._
            } finally {
                po = Date
            }
        }
    }

    function Bi(e, t, n) {
        function r(t) {
            return e(t)
        }
        return r.invert = function(t) {
            return Fi(e.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (e.domain(t), r) : e.domain().map(Fi)
        }, r.nice = function(e) {
            return r.domain(Dt(r.domain(), function() {
                return e
            }))
        }, r.ticks = function(n, i) {
            var s = ji(r.domain());
            if (typeof n != "function") {
                var o = s[1] - s[0],
                    u = o / n,
                    a = d3.bisect(Io, u);
                if (a == Io.length) return t.year(s, n);
                if (!a) return e.ticks(n).map(Fi);
                Math.log(u / Io[a - 1]) < Math.log(Io[a] / u) && --a, n = t[a], i = n[1], n = n[0].range
            }
            return n(s[0], new Date(+s[1] + 1), i)
        }, r.tickFormat = function() {
            return n
        }, r.copy = function() {
            return Bi(e.copy(), t, n)
        }, d3.rebind(r, e, "range", "rangeRound", "interpolate", "clamp")
    }

    function ji(e) {
        var t = e[0],
            n = e[e.length - 1];
        return t < n ? [t, n] : [n, t]
    }

    function Fi(e) {
        return new Date(e)
    }

    function Ii(e) {
        return function(t) {
            var n = e.length - 1,
                r = e[n];
            while (!r[1](t)) r = e[--n];
            return r[0](t)
        }
    }

    function qi(e) {
        var t = new Date(e, 0, 1);
        return t.setFullYear(e), t
    }

    function Ri(e) {
        var t = e.getFullYear(),
            n = qi(t),
            r = qi(t + 1);
        return t + (e - n) / (r - n)
    }

    function Ui(e) {
        var t = new Date(Date.UTC(e, 0, 1));
        return t.setUTCFullYear(e), t
    }

    function zi(e) {
        var t = e.getUTCFullYear(),
            n = Ui(t),
            r = Ui(t + 1);
        return t + (e - n) / (r - n)
    }
    Date.now || (Date.now = function() {
        return +(new Date)
    });
    try {
        document.createElement("div").style.setProperty("opacity", 0, "")
    } catch (Wi) {
        var Xi = CSSStyleDeclaration.prototype,
            Vi = Xi.setProperty;
        Xi.setProperty = function(e, t, n) {
            Vi.call(this, e, t + "", n)
        }
    }
    d3 = {
        version: "2.10.1"
    };
    var $i = n;
    try {
        $i(document.documentElement.childNodes)[0].nodeType
    } catch (Ji) {
        $i = t
    }
    var Ki = [].__proto__ ? function(e, t) {
        e.__proto__ = t
    } : function(e, t) {
        for (var n in t) e[n] = t[n]
    };
    d3.map = function(e) {
        var t = new r;
        for (var n in e) t.set(n, e[n]);
        return t
    }, e(r, {
        has: function(e) {
            return Qi + e in this
        },
        get: function(e) {
            return this[Qi + e]
        },
        set: function(e, t) {
            return this[Qi + e] = t
        },
        remove: function(e) {
            return e = Qi + e, e in this && delete this[e]
        },
        keys: function() {
            var e = [];
            return this.forEach(function(t) {
                e.push(t)
            }), e
        },
        values: function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push(n)
            }), e
        },
        entries: function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push({
                    key: t,
                    value: n
                })
            }), e
        },
        forEach: function(e) {
            for (var t in this) t.charCodeAt(0) === Gi && e.call(this, t.substring(1), this[t])
        }
    });
    var Qi = "\0",
        Gi = Qi.charCodeAt(0);
    d3.functor = u, d3.rebind = function(e, t) {
        var n = 1,
            r = arguments.length,
            i;
        while (++n < r) e[i = arguments[n]] = a(e, t, t[i]);
        return e
    }, d3.ascending = function(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }, d3.descending = function(e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }, d3.mean = function(e, t) {
        var n = e.length,
            r, i = 0,
            s = -1,
            o = 0;
        if (arguments.length === 1)
            while (++s < n) f(r = e[s]) && (i += (r - i) / ++o);
        else
            while (++s < n) f(r = t.call(e, e[s], s)) && (i += (r - i) / ++o);
        return o ? i : undefined
    }, d3.median = function(e, t) {
        return arguments.length > 1 && (e = e.map(t)), e = e.filter(f), e.length ? d3.quantile(e.sort(d3.ascending), .5) : undefined
    }, d3.min = function(e, t) {
        var n = -1,
            r = e.length,
            i, s;
        if (arguments.length === 1) {
            while (++n < r && ((i = e[n]) == null || i != i)) i = undefined;
            while (++n < r)(s = e[n]) != null && i > s && (i = s)
        } else {
            while (++n < r && ((i = t.call(e, e[n], n)) == null || i != i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && i > s && (i = s)
        }
        return i
    }, d3.max = function(e, t) {
        var n = -1,
            r = e.length,
            i, s;
        if (arguments.length === 1) {
            while (++n < r && ((i = e[n]) == null || i != i)) i = undefined;
            while (++n < r)(s = e[n]) != null && s > i && (i = s)
        } else {
            while (++n < r && ((i = t.call(e, e[n], n)) == null || i != i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && s > i && (i = s)
        }
        return i
    }, d3.extent = function(e, t) {
        var n = -1,
            r = e.length,
            i, s, o;
        if (arguments.length === 1) {
            while (++n < r && ((i = o = e[n]) == null || i != i)) i = o = undefined;
            while (++n < r)(s = e[n]) != null && (i > s && (i = s), o < s && (o = s))
        } else {
            while (++n < r && ((i = o = t.call(e, e[n], n)) == null || i != i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && (i > s && (i = s), o < s && (o = s))
        }
        return [i, o]
    }, d3.random = {
        normal: function(e, t) {
            var n = arguments.length;
            return n < 2 && (t = 1), n < 1 && (e = 0),
                function() {
                    var n, r, i;
                    do n = Math.random() * 2 - 1, r = Math.random() * 2 - 1, i = n * n + r * r; while (!i || i > 1);
                    return e + t * n * Math.sqrt(-2 * Math.log(i) / i)
                }
        },
        logNormal: function(e, t) {
            var n = arguments.length;
            n < 2 && (t = 1), n < 1 && (e = 0);
            var r = d3.random.normal();
            return function() {
                return Math.exp(e + t * r())
            }
        },
        irwinHall: function(e) {
            return function() {
                for (var t = 0, n = 0; n < e; n++) t += Math.random();
                return t / e
            }
        }
    }, d3.sum = function(e, t) {
        var n = 0,
            r = e.length,
            i, s = -1;
        if (arguments.length === 1)
            while (++s < r) isNaN(i = +e[s]) || (n += i);
        else
            while (++s < r) isNaN(i = +t.call(e, e[s], s)) || (n += i);
        return n
    }, d3.quantile = function(e, t) {
        var n = (e.length - 1) * t + 1,
            r = Math.floor(n),
            i = e[r - 1],
            s = n - r;
        return s ? i + s * (e[r] - i) : i
    }, d3.transpose = function(e) {
        return d3.zip.apply(d3, e)
    }, d3.zip = function() {
        if (!(i = arguments.length)) return [];
        for (var e = -1, t = d3.min(arguments, l), n = new Array(t); ++e < t;)
            for (var r = -1, i, s = n[e] = new Array(i); ++r < i;) s[r] = arguments[r][e];
        return n
    }, d3.bisector = function(e) {
        return {
            left: function(t, n, r, i) {
                arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
                while (r < i) {
                    var s = r + i >>> 1;
                    e.call(t, t[s], s) < n ? r = s + 1 : i = s
                }
                return r
            },
            right: function(t, n, r, i) {
                arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
                while (r < i) {
                    var s = r + i >>> 1;
                    n < e.call(t, t[s], s) ? i = s : r = s + 1
                }
                return r
            }
        }
    };
    var Yi = d3.bisector(function(e) {
        return e
    });
    d3.bisectLeft = Yi.left, d3.bisect = d3.bisectRight = Yi.right, d3.first = function(e, t) {
        var n = 0,
            r = e.length,
            i = e[0],
            s;
        arguments.length === 1 && (t = d3.ascending);
        while (++n < r) t.call(e, i, s = e[n]) > 0 && (i = s);
        return i
    }, d3.last = function(e, t) {
        var n = 0,
            r = e.length,
            i = e[0],
            s;
        arguments.length === 1 && (t = d3.ascending);
        while (++n < r) t.call(e, i, s = e[n]) <= 0 && (i = s);
        return i
    }, d3.nest = function() {
        function e(t, s) {
            if (s >= i.length) return u ? u.call(n, t) : o ? t.sort(o) : t;
            var a = -1,
                f = t.length,
                l = i[s++],
                c, h, p = new r,
                d, v = {};
            while (++a < f)(d = p.get(c = l(h = t[a]))) ? d.push(h) : p.set(c, [h]);
            return p.forEach(function(t, n) {
                v[t] = e(n, s)
            }), v
        }

        function t(e, n) {
            if (n >= i.length) return e;
            var r = [],
                o = s[n++],
                u;
            for (u in e) r.push({
                key: u,
                values: t(e[u], n)
            });
            return o && r.sort(function(e, t) {
                return o(e.key, t.key)
            }), r
        }
        var n = {},
            i = [],
            s = [],
            o, u;
        return n.map = function(t) {
            return e(t, 0)
        }, n.entries = function(n) {
            return t(e(n, 0), 0)
        }, n.key = function(e) {
            return i.push(e), n
        }, n.sortKeys = function(e) {
            return s[i.length - 1] = e, n
        }, n.sortValues = function(e) {
            return o = e, n
        }, n.rollup = function(e) {
            return u = e, n
        }, n
    }, d3.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t
    }, d3.values = function(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    }, d3.entries = function(e) {
        var t = [];
        for (var n in e) t.push({
            key: n,
            value: e[n]
        });
        return t
    }, d3.permute = function(e, t) {
        var n = [],
            r = -1,
            i = t.length;
        while (++r < i) n[r] = e[t[r]];
        return n
    }, d3.merge = function(e) {
        return Array.prototype.concat.apply([], e)
    }, d3.split = function(e, t) {
        var n = [],
            r = [],
            i, s = -1,
            o = e.length;
        arguments.length < 2 && (t = c);
        while (++s < o) t.call(r, i = e[s], s) ? r = [] : (r.length || n.push(r), r.push(i));
        return n
    }, d3.range = function(e, t, n) {
        arguments.length < 3 && (n = 1, arguments.length < 2 && (t = e, e = 0));
        if ((t - e) / n === Infinity) throw new Error("infinite range");
        var r = [],
            i = p(Math.abs(n)),
            s = -1,
            o;
        e *= i, t *= i, n *= i;
        if (n < 0)
            while ((o = e + n * ++s) > t) r.push(o / i);
        else
            while ((o = e + n * ++s) < t) r.push(o / i);
        return r
    }, d3.requote = function(e) {
        return e.replace(Zi, "\\$&")
    };
    var Zi = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    d3.round = function(e, t) {
        return t ? Math.round(e * (t = Math.pow(10, t))) / t : Math.round(e)
    }, d3.xhr = function(e, t, n) {
        var r = new XMLHttpRequest;
        arguments.length < 3 ? (n = t, t = null) : t && r.overrideMimeType && r.overrideMimeType(t), r.open("GET", e, !0), t && r.setRequestHeader("Accept", t), r.onreadystatechange = function() {
            if (r.readyState === 4) {
                var e = r.status;
                n(!e && r.response || e >= 200 && e < 300 || e === 304 ? r : null)
            }
        }, r.send(null)
    }, d3.text = function(e, t, n) {
        function r(e) {
            n(e && e.responseText)
        }
        arguments.length < 3 && (n = t, t = null), d3.xhr(e, t, r)
    }, d3.json = function(e, t) {
        d3.text(e, "application/json", function(e) {
            t(e ? JSON.parse(e) : null)
        })
    }, d3.html = function(e, t) {
        d3.text(e, "text/html", function(e) {
            if (e != null) {
                var n = document.createRange();
                n.selectNode(document.body), e = n.createContextualFragment(e)
            }
            t(e)
        })
    }, d3.xml = function(e, t, n) {
        function r(e) {
            n(e && e.responseXML)
        }
        arguments.length < 3 && (n = t, t = null), d3.xhr(e, t, r)
    };
    var es = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d3.ns = {
        prefix: es,
        qualify: function(e) {
            var t = e.indexOf(":"),
                n = e;
            return t >= 0 && (n = e.substring(0, t), e = e.substring(t + 1)), es.hasOwnProperty(n) ? {
                space: es[n],
                local: e
            } : e
        }
    }, d3.dispatch = function() {
        var e = new d,
            t = -1,
            n = arguments.length;
        while (++t < n) e[arguments[t]] = v(e);
        return e
    }, d.prototype.on = function(e, t) {
        var n = e.indexOf("."),
            r = "";
        return n > 0 && (r = e.substring(n + 1), e = e.substring(0, n)), arguments.length < 2 ? this[e].on(r) : this[e].on(r, t)
    }, d3.format = function(e) {
        var t = ts.exec(e),
            n = t[1] || " ",
            r = t[3] || "",
            i = t[5],
            s = +t[6],
            o = t[7],
            u = t[8],
            a = t[9],
            f = 1,
            l = "",
            c = !1;
        u && (u = +u.substring(1)), i && (n = "0", o && (s -= Math.floor((s - 1) / 4)));
        switch (a) {
            case "n":
                o = !0, a = "g";
                break;
            case "%":
                f = 100, l = "%", a = "f";
                break;
            case "p":
                f = 100, l = "%", a = "r";
                break;
            case "d":
                c = !0, u = 0;
                break;
            case "s":
                f = -1, a = "r"
        }
        return a == "r" && !u && (a = "g"), a = ns.get(a) || g,
            function(e) {
                if (c && e % 1) return "";
                var t = e < 0 && (e = -e) ? "-" : r;
                if (f < 0) {
                    var h = d3.formatPrefix(e, u);
                    e = h.scale(e), l = h.symbol
                } else e *= f;
                e = a(e, u);
                if (i) {
                    var p = e.length + t.length;
                    p < s && (e = (new Array(s - p + 1)).join(n) + e), o && (e = y(e)), e = t + e
                } else {
                    o && (e = y(e)), e = t + e;
                    var p = e.length;
                    p < s && (e = (new Array(s - p + 1)).join(n) + e)
                }
                return e + l
            }
    };
    var ts = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,
        ns = d3.map({
            g: function(e, t) {
                return e.toPrecision(t)
            },
            e: function(e, t) {
                return e.toExponential(t)
            },
            f: function(e, t) {
                return e.toFixed(t)
            },
            r: function(e, t) {
                return d3.round(e, t = m(e, t)).toFixed(Math.max(0, Math.min(20, t)))
            }
        }),
        rs = ["y", "z", "a", "f", "p", "n", "Î¼", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(b);
    d3.formatPrefix = function(e, t) {
        var n = 0;
        return e && (e < 0 && (e *= -1), t && (e = d3.round(e, m(e, t))), n = 1 + Math.floor(1e-12 + Math.log(e) / Math.LN10), n = Math.max(-24, Math.min(24, Math.floor((n <= 0 ? n + 1 : n - 1) / 3) * 3))), rs[8 + n / 3]
    };
    var is = T(2),
        ss = T(3),
        os = function() {
            return x
        },
        us = d3.map({
            linear: os,
            poly: T,
            quad: function() {
                return is
            },
            cubic: function() {
                return ss
            },
            sin: function() {
                return N
            },
            exp: function() {
                return C
            },
            circle: function() {
                return k
            },
            elastic: L,
            back: A,
            bounce: function() {
                return O
            }
        }),
        as = d3.map({
            "in": x,
            out: E,
            "in-out": S,
            "out-in": function(e) {
                return S(E(e))
            }
        });
    d3.ease = function(e) {
        var t = e.indexOf("-"),
            n = t >= 0 ? e.substring(0, t) : e,
            r = t >= 0 ? e.substring(t + 1) : "in";
        return n = us.get(n) || os, r = as.get(r) || x, w(r(n.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, d3.event = null, d3.transform = function(e) {
        var t = document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function(e) {
            t.setAttribute("transform", e);
            var n = t.transform.baseVal.consolidate();
            return new P(n ? n.matrix : ls)
        })(e)
    }, P.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var fs = 180 / Math.PI,
        ls = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
    d3.interpolate = function(e, t) {
        var n = d3.interpolators.length,
            r;
        while (--n >= 0 && !(r = d3.interpolators[n](e, t)));
        return r
    }, d3.interpolateNumber = function(e, t) {
        return t -= e,
            function(n) {
                return e + t * n
            }
    }, d3.interpolateRound = function(e, t) {
        return t -= e,
            function(n) {
                return Math.round(e + t * n)
            }
    }, d3.interpolateString = function(e, t) {
        var n, r, i, s = 0,
            o = 0,
            u = [],
            a = [],
            f, l;
        cs.lastIndex = 0;
        for (r = 0; n = cs.exec(t); ++r) n.index && u.push(t.substring(s, o = n.index)), a.push({
            i: u.length,
            x: n[0]
        }), u.push(null), s = cs.lastIndex;
        s < t.length && u.push(t.substring(s));
        for (r = 0, f = a.length;
            (n = cs.exec(e)) && r < f; ++r) {
            l = a[r];
            if (l.x == n[0]) {
                if (l.i)
                    if (u[l.i + 1] == null) {
                        u[l.i - 1] += l.x, u.splice(l.i, 1);
                        for (i = r + 1; i < f; ++i) a[i].i--
                    } else {
                        u[l.i - 1] += l.x + u[l.i + 1], u.splice(l.i, 2);
                        for (i = r + 1; i < f; ++i) a[i].i -= 2
                    }
                else if (u[l.i + 1] == null) u[l.i] = l.x;
                else {
                    u[l.i] = l.x + u[l.i + 1], u.splice(l.i + 1, 1);
                    for (i = r + 1; i < f; ++i) a[i].i--
                }
                a.splice(r, 1), f--, r--
            } else l.x = d3.interpolateNumber(parseFloat(n[0]), parseFloat(l.x))
        }
        while (r < f) l = a.pop(), u[l.i + 1] == null ? u[l.i] = l.x : (u[l.i] = l.x + u[l.i + 1], u.splice(l.i + 1, 1)), f--;
        return u.length === 1 ? u[0] == null ? a[0].x : function() {
            return t
        } : function(e) {
            for (r = 0; r < f; ++r) u[(l = a[r]).i] = l.x(e);
            return u.join("")
        }
    }, d3.interpolateTransform = function(e, t) {
        var n = [],
            r = [],
            i, s = d3.transform(e),
            o = d3.transform(t),
            u = s.translate,
            a = o.translate,
            f = s.rotate,
            l = o.rotate,
            c = s.skew,
            h = o.skew,
            p = s.scale,
            d = o.scale;
        return u[0] != a[0] || u[1] != a[1] ? (n.push("translate(", null, ",", null, ")"), r.push({
                i: 1,
                x: d3.interpolateNumber(u[0], a[0])
            }, {
                i: 3,
                x: d3.interpolateNumber(u[1], a[1])
            })) : a[0] || a[1] ? n.push("translate(" + a + ")") : n.push(""), f != l ? (f - l > 180 ? l += 360 : l - f > 180 && (f += 360), r.push({
                i: n.push(n.pop() + "rotate(", null, ")") - 2,
                x: d3.interpolateNumber(f, l)
            })) : l && n.push(n.pop() + "rotate(" + l + ")"), c != h ? r.push({
                i: n.push(n.pop() + "skewX(", null, ")") - 2,
                x: d3.interpolateNumber(c, h)
            }) : h && n.push(n.pop() + "skewX(" + h + ")"), p[0] != d[0] || p[1] != d[1] ? (i = n.push(n.pop() + "scale(", null, ",", null, ")"), r.push({
                i: i - 4,
                x: d3.interpolateNumber(p[0], d[0])
            }, {
                i: i - 2,
                x: d3.interpolateNumber(p[1], d[1])
            })) : (d[0] != 1 || d[1] != 1) && n.push(n.pop() + "scale(" + d + ")"), i = r.length,
            function(e) {
                var t = -1,
                    s;
                while (++t < i) n[(s = r[t]).i] = s.x(e);
                return n.join("")
            }
    }, d3.interpolateRgb = function(e, t) {
        e = d3.rgb(e), t = d3.rgb(t);
        var n = e.r,
            r = e.g,
            i = e.b,
            s = t.r - n,
            o = t.g - r,
            u = t.b - i;
        return function(e) {
            return "#" + z(Math.round(n + s * e)) + z(Math.round(r + o * e)) + z(Math.round(i + u * e))
        }
    }, d3.interpolateHsl = function(e, t) {
        e = d3.hsl(e), t = d3.hsl(t);
        var n = e.h,
            r = e.s,
            i = e.l,
            s = t.h - n,
            o = t.s - r,
            u = t.l - i;
        return s > 180 ? s -= 360 : s < -180 && (s += 360),
            function(e) {
                return G(n + s * e, r + o * e, i + u * e) + ""
            }
    }, d3.interpolateLab = function(e, t) {
        e = d3.lab(e), t = d3.lab(t);
        var n = e.l,
            r = e.a,
            i = e.b,
            s = t.l - n,
            o = t.a - r,
            u = t.b - i;
        return function(e) {
            return rt(n + s * e, r + o * e, i + u * e) + ""
        }
    }, d3.interpolateHcl = function(e, t) {
        e = d3.hcl(e), t = d3.hcl(t);
        var n = e.h,
            r = e.c,
            i = e.l,
            s = t.h - n,
            o = t.c - r,
            u = t.l - i;
        return s > 180 ? s -= 360 : s < -180 && (s += 360),
            function(e) {
                return et(n + s * e, r + o * e, i + u * e) + ""
            }
    }, d3.interpolateArray = function(e, t) {
        var n = [],
            r = [],
            i = e.length,
            s = t.length,
            o = Math.min(e.length, t.length),
            u;
        for (u = 0; u < o; ++u) n.push(d3.interpolate(e[u], t[u]));
        for (; u < i; ++u) r[u] = e[u];
        for (; u < s; ++u) r[u] = t[u];
        return function(e) {
            for (u = 0; u < o; ++u) r[u] = n[u](e);
            return r
        }
    }, d3.interpolateObject = function(e, t) {
        var n = {},
            r = {},
            i;
        for (i in e) i in t ? n[i] = F(i)(e[i], t[i]) : r[i] = e[i];
        for (i in t) i in e || (r[i] = t[i]);
        return function(e) {
            for (i in n) r[i] = n[i](e);
            return r
        }
    };
    var cs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    d3.interpolators = [d3.interpolateObject, function(e, t) {
        return t instanceof Array && d3.interpolateArray(e, t)
    }, function(e, t) {
        return (typeof e == "string" || typeof t == "string") && d3.interpolateString(e + "", t + "")
    }, function(e, t) {
        return (typeof t == "string" ? hs.has(t) || /^(#|rgb\(|hsl\()/.test(t) : t instanceof U || t instanceof Q) && d3.interpolateRgb(e, t)
    }, function(e, t) {
        return !isNaN(e = +e) && !isNaN(t = +t) && d3.interpolateNumber(e, t)
    }], d3.rgb = function(e, t, n) {
        return arguments.length === 1 ? e instanceof U ? R(e.r, e.g, e.b) : W("" + e, R, G) : R(~~e, ~~t, ~~n)
    }, U.prototype.brighter = function(e) {
        e = Math.pow(.7, arguments.length ? e : 1);
        var t = this.r,
            n = this.g,
            r = this.b,
            i = 30;
        return !t && !n && !r ? R(i, i, i) : (t && t < i && (t = i), n && n < i && (n = i), r && r < i && (r = i), R(Math.min(255, Math.floor(t / e)), Math.min(255, Math.floor(n / e)), Math.min(255, Math.floor(r / e))))
    }, U.prototype.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1), R(Math.floor(e * this.r), Math.floor(e * this.g), Math.floor(e * this.b))
    }, U.prototype.hsl = function() {
        return X(this.r, this.g, this.b)
    }, U.prototype.toString = function() {
        return "#" + z(this.r) + z(this.g) + z(this.b)
    };
    var hs = d3.map({
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    });
    hs.forEach(function(e, t) {
        hs.set(e, W(t, R, G))
    }), d3.hsl = function(e, t, n) {
        return arguments.length === 1 ? e instanceof Q ? K(e.h, e.s, e.l) : W("" + e, X, K) : K(+e, +t, +n)
    }, Q.prototype.brighter = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1), K(this.h, this.s, this.l / e)
    }, Q.prototype.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1), K(this.h, this.s, e * this.l)
    }, Q.prototype.rgb = function() {
        return G(this.h, this.s, this.l)
    }, Q.prototype.toString = function() {
        return this.rgb().toString()
    }, d3.hcl = function(e, t, n) {
        return arguments.length === 1 ? e instanceof Z ? Y(e.h, e.c, e.l) : e instanceof nt ? it(e.l, e.a, e.b) : it((e = V((e = d3.rgb(e)).r, e.g, e.b)).l, e.a, e.b) : Y(+e, +t, +n)
    }, Z.prototype.brighter = function(e) {
        return Y(this.h, this.c, Math.min(100, this.l + ps * (arguments.length ? e : 1)))
    }, Z.prototype.darker = function(e) {
        return Y(this.h, this.c, Math.max(0, this.l - ps * (arguments.length ? e : 1)))
    }, Z.prototype.rgb = function() {
        return et(this.h, this.c, this.l).rgb()
    }, Z.prototype.toString = function() {
        return this.rgb() + ""
    }, d3.lab = function(e, t, n) {
        return arguments.length === 1 ? e instanceof nt ? tt(e.l, e.a, e.b) : e instanceof Z ? et(e.l, e.c, e.h) : V((e = d3.rgb(e)).r, e.g, e.b) : tt(+e, +t, +n)
    };
    var ps = 18,
        ds = .95047,
        vs = 1,
        ms = 1.08883;
    nt.prototype.brighter = function(e) {
        return tt(Math.min(100, this.l + ps * (arguments.length ? e : 1)), this.a, this.b)
    }, nt.prototype.darker = function(e) {
        return tt(Math.max(0, this.l - ps * (arguments.length ? e : 1)), this.a, this.b)
    }, nt.prototype.rgb = function() {
        return rt(this.l, this.a, this.b)
    }, nt.prototype.toString = function() {
        return this.rgb() + ""
    };
    var gs = function(e, t) {
            return t.querySelector(e)
        },
        ys = function(e, t) {
            return t.querySelectorAll(e)
        },
        bs = document.documentElement,
        ws = bs.matchesSelector || bs.webkitMatchesSelector || bs.mozMatchesSelector || bs.msMatchesSelector || bs.oMatchesSelector,
        Es = function(e, t) {
            return ws.call(e, t)
        };
    typeof Sizzle == "function" && (gs = function(e, t) {
        return Sizzle(e, t)[0] || null
    }, ys = function(e, t) {
        return Sizzle.uniqueSort(Sizzle(e, t))
    }, Es = Sizzle.matchesSelector);
    var Ss = [];
    d3.selection = function() {
        return xs
    }, d3.selection.prototype = Ss, Ss.select = function(e) {
        var t = [],
            n, r, i, s;
        typeof e != "function" && (e = ft(e));
        for (var o = -1, u = this.length; ++o < u;) {
            t.push(n = []), n.parentNode = (i = this[o]).parentNode;
            for (var a = -1, f = i.length; ++a < f;)(s = i[a]) ? (n.push(r = e.call(s, s.__data__, a)), r && "__data__" in s && (r.__data__ = s.__data__)) : n.push(null)
        }
        return at(t)
    }, Ss.selectAll = function(e) {
        var t = [],
            n, r;
        typeof e != "function" && (e = lt(e));
        for (var i = -1, s = this.length; ++i < s;)
            for (var o = this[i], u = -1, a = o.length; ++u < a;)
                if (r = o[u]) t.push(n = $i(e.call(r, r.__data__, u))), n.parentNode = r;
        return at(t)
    }, Ss.attr = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") {
                var n = this.node();
                return e = d3.ns.qualify(e), e.local ? n.getAttributeNS(e.space, e.local) : n.getAttribute(e)
            }
            for (t in e) this.each(ct(t, e[t]));
            return this
        }
        return this.each(ct(e, t))
    }, Ss.classed = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") {
                var n = this.node(),
                    r = (e = e.trim().split(/^|\s+/g)).length,
                    i = -1;
                if (t = n.classList) {
                    while (++i < r)
                        if (!t.contains(e[i])) return !1
                } else {
                    t = n.className, t.baseVal != null && (t = t.baseVal);
                    while (++i < r)
                        if (!ht(e[i]).test(t)) return !1
                }
                return !0
            }
            for (t in e) this.each(pt(t, e[t]));
            return this
        }
        return this.each(pt(e, t))
    }, Ss.style = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = "");
                for (n in e) this.each(vt(n, e[n], t));
                return this
            }
            if (r < 2) return window.getComputedStyle(this.node(), null).getPropertyValue(e);
            n = ""
        }
        return this.each(vt(e, t, n))
    }, Ss.property = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") return this.node()[e];
            for (t in e) this.each(mt(t, e[t]));
            return this
        }
        return this.each(mt(e, t))
    }, Ss.text = function(e) {
        return arguments.length < 1 ? this.node().textContent : this.each(typeof e == "function" ? function() {
            var t = e.apply(this, arguments);
            this.textContent = t == null ? "" : t
        } : e == null ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = e
        })
    }, Ss.html = function(e) {
        return arguments.length < 1 ? this.node().innerHTML : this.each(typeof e == "function" ? function() {
            var t = e.apply(this, arguments);
            this.innerHTML = t == null ? "" : t
        } : e == null ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = e
        })
    }, Ss.append = function(e) {
        function t() {
            return this.appendChild(document.createElementNS(this.namespaceURI, e))
        }

        function n() {
            return this.appendChild(document.createElementNS(e.space, e.local))
        }
        return e = d3.ns.qualify(e), this.select(e.local ? n : t)
    }, Ss.insert = function(e, t) {
        function n() {
            return this.insertBefore(document.createElementNS(this.namespaceURI, e), gs(t, this))
        }

        function r() {
            return this.insertBefore(document.createElementNS(e.space, e.local), gs(t, this))
        }
        return e = d3.ns.qualify(e), this.select(e.local ? r : n)
    }, Ss.remove = function() {
        return this.each(function() {
            var e = this.parentNode;
            e && e.removeChild(this)
        })
    }, Ss.data = function(e, t) {
        function n(e, n) {
            var i, s = e.length,
                o = n.length,
                u = Math.min(s, o),
                c = Math.max(s, o),
                h = [],
                p = [],
                d = [],
                v, m;
            if (t) {
                var g = new r,
                    y = [],
                    b, w = n.length;
                for (i = -1; ++i < s;) b = t.call(v = e[i], v.__data__, i), g.has(b) ? d[w++] = v : g.set(b, v), y.push(b);
                for (i = -1; ++i < o;) b = t.call(n, m = n[i], i), g.has(b) ? (h[i] = v = g.get(b), v.__data__ = m, p[i] = d[i] = null) : (p[i] = gt(m), h[i] = d[i] = null), g.remove(b);
                for (i = -1; ++i < s;) g.has(y[i]) && (d[i] = e[i])
            } else {
                for (i = -1; ++i < u;) v = e[i], m = n[i], v ? (v.__data__ = m, h[i] = v, p[i] = d[i] = null) : (p[i] = gt(m), h[i] = d[i] = null);
                for (; i < o; ++i) p[i] = gt(n[i]), h[i] = d[i] = null;
                for (; i < c; ++i) d[i] = e[i], p[i] = h[i] = null
            }
            p.update = h, p.parentNode = h.parentNode = d.parentNode = e.parentNode, a.push(p), f.push(h), l.push(d)
        }
        var i = -1,
            s = this.length,
            o, u;
        if (!arguments.length) {
            e = new Array(s = (o = this[0]).length);
            while (++i < s)
                if (u = o[i]) e[i] = u.__data__;
            return e
        }
        var a = St([]),
            f = at([]),
            l = at([]);
        if (typeof e == "function")
            while (++i < s) n(o = this[i], e.call(o, o.parentNode.__data__, i));
        else
            while (++i < s) n(o = this[i], e);
        return f.enter = function() {
            return a
        }, f.exit = function() {
            return l
        }, f
    }, Ss.datum = Ss.map = function(e) {
        return arguments.length < 1 ? this.property("__data__") : this.property("__data__", e)
    }, Ss.filter = function(e) {
        var t = [],
            n, r, i;
        typeof e != "function" && (e = yt(e));
        for (var s = 0, o = this.length; s < o; s++) {
            t.push(n = []), n.parentNode = (r = this[s]).parentNode;
            for (var u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u) && n.push(i)
        }
        return at(t)
    }, Ss.order = function() {
        for (var e = -1, t = this.length; ++e < t;)
            for (var n = this[e], r = n.length - 1, i = n[r], s; --r >= 0;)
                if (s = n[r]) i && i !== s.nextSibling && i.parentNode.insertBefore(s, i), i = s;
        return this
    }, Ss.sort = function(e) {
        e = bt.apply(this, arguments);
        for (var t = -1, n = this.length; ++t < n;) this[t].sort(e);
        return this.order()
    }, Ss.on = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = !1);
                for (n in e) this.each(wt(n, e[n], t));
                return this
            }
            if (r < 2) return (r = this.node()["__on" + e]) && r._;
            n = !1
        }
        return this.each(wt(e, t, n))
    }, Ss.each = function(e) {
        return Et(this, function(t, n, r) {
            e.call(t, t.__data__, n, r)
        })
    }, Ss.call = function(e) {
        return e.apply(this, (arguments[0] = this, arguments)), this
    }, Ss.empty = function() {
        return !this.node()
    }, Ss.node = function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            for (var r = this[t], i = 0, s = r.length; i < s; i++) {
                var o = r[i];
                if (o) return o
            }
        return null
    }, Ss.transition = function() {
        var e = [],
            t, n;
        for (var r = -1, i = this.length; ++r < i;) {
            e.push(t = []);
            for (var s = this[r], o = -1, u = s.length; ++o < u;) t.push((n = s[o]) ? {
                node: n,
                delay: Ms,
                duration: _s
            } : null)
        }
        return xt(e, ks || ++Cs, Date.now())
    };
    var xs = at([
        [document]
    ]);
    xs[0].parentNode = bs, d3.select = function(e) {
        return typeof e == "string" ? xs.select(e) : at([
            [e]
        ])
    }, d3.selectAll = function(e) {
        return typeof e == "string" ? xs.selectAll(e) : at([$i(e)])
    };
    var Ts = [];
    d3.selection.enter = St, d3.selection.enter.prototype = Ts, Ts.append = Ss.append, Ts.insert = Ss.insert, Ts.empty = Ss.empty, Ts.node = Ss.node, Ts.select = function(e) {
        var t = [],
            n, r, i, s, o;
        for (var u = -1, a = this.length; ++u < a;) {
            i = (s = this[u]).update, t.push(n = []), n.parentNode = s.parentNode;
            for (var f = -1, l = s.length; ++f < l;)(o = s[f]) ? (n.push(i[f] = r = e.call(s.parentNode, o.__data__, f)), r.__data__ = o.__data__) : n.push(null)
        }
        return at(t)
    };
    var Ns = [],
        Cs = 0,
        ks = 0,
        Ls = 0,
        As = 250,
        Os = d3.ease("cubic-in-out"),
        Ms = Ls,
        _s = As,
        Ds = Os;
    Ns.call = Ss.call, d3.transition = function(e) {
        return arguments.length ? ks ? e.transition() : e : xs.transition()
    }, d3.transition.prototype = Ns, Ns.select = function(e) {
        var t = [],
            n, r, i;
        typeof e != "function" && (e = ft(e));
        for (var s = -1, o = this.length; ++s < o;) {
            t.push(n = []);
            for (var u = this[s], a = -1, f = u.length; ++a < f;)(i = u[a]) && (r = e.call(i.node, i.node.__data__, a)) ? ("__data__" in i.node && (r.__data__ = i.node.__data__), n.push({
                node: r,
                delay: i.delay,
                duration: i.duration
            })) : n.push(null)
        }
        return xt(t, this.id, this.time).ease(this.ease())
    }, Ns.selectAll = function(e) {
        var t = [],
            n, r, i;
        typeof e != "function" && (e = lt(e));
        for (var s = -1, o = this.length; ++s < o;)
            for (var u = this[s], a = -1, f = u.length; ++a < f;)
                if (i = u[a]) {
                    r = e.call(i.node, i.node.__data__, a), t.push(n = []);
                    for (var l = -1, c = r.length; ++l < c;) n.push({
                        node: r[l],
                        delay: i.delay,
                        duration: i.duration
                    })
                }
        return xt(t, this.id, this.time).ease(this.ease())
    }, Ns.filter = function(e) {
        var t = [],
            n, r, i;
        typeof e != "function" && (e = yt(e));
        for (var s = 0, o = this.length; s < o; s++) {
            t.push(n = []);
            for (var r = this[s], u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i.node, i.node.__data__, u) && n.push(i)
        }
        return xt(t, this.id, this.time).ease(this.ease())
    }, Ns.attr = function(e, t) {
        if (arguments.length < 2) {
            for (t in e) this.attrTween(t, Ct(e[t], t));
            return this
        }
        return this.attrTween(e, Ct(t, e))
    }, Ns.attrTween = function(e, t) {
        function n(e, n) {
            var r = t.call(this, e, n, this.getAttribute(i));
            return r === Ps ? (this.removeAttribute(i), null) : r && function(e) {
                this.setAttribute(i, r(e))
            }
        }

        function r(e, n) {
            var r = t.call(this, e, n, this.getAttributeNS(i.space, i.local));
            return r === Ps ? (this.removeAttributeNS(i.space, i.local), null) : r && function(e) {
                this.setAttributeNS(i.space, i.local, r(e))
            }
        }
        var i = d3.ns.qualify(e);
        return this.tween("attr." + e, i.local ? r : n)
    }, Ns.style = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = "");
                for (n in e) this.styleTween(n, Ct(e[n], n), t);
                return this
            }
            n = ""
        }
        return this.styleTween(e, Ct(t, e), n)
    }, Ns.styleTween = function(e, t, n) {
        return arguments.length < 3 && (n = ""), this.tween("style." + e, function(r, i) {
            var s = t.call(this, r, i, window.getComputedStyle(this, null).getPropertyValue(e));
            return s === Ps ? (this.style.removeProperty(e), null) : s && function(t) {
                this.style.setProperty(e, s(t), n)
            }
        })
    }, Ns.text = function(e) {
        return this.tween("text", function(t, n) {
            this.textContent = typeof e == "function" ? e.call(this, t, n) : e
        })
    }, Ns.remove = function() {
        return this.each("end.transition", function() {
            var e;
            !this.__transition__ && (e = this.parentNode) && e.removeChild(this)
        })
    }, Ns.delay = function(e) {
        return Et(this, typeof e == "function" ? function(t, n, r) {
            t.delay = e.call(t = t.node, t.__data__, n, r) | 0
        } : (e |= 0, function(t) {
            t.delay = e
        }))
    }, Ns.duration = function(e) {
        return Et(this, typeof e == "function" ? function(t, n, r) {
            t.duration = Math.max(1, e.call(t = t.node, t.__data__, n, r) | 0)
        } : (e = Math.max(1, e | 0), function(t) {
            t.duration = e
        }))
    }, Ns.transition = function() {
        return this.select(s)
    }, d3.tween = function(e, t) {
        function n(n, r, i) {
            var s = e.call(this, n, r);
            return s == null ? i != "" && Ps : i != s && t(i, s)
        }

        function r(n, r, i) {
            return i != e && t(i, e)
        }
        return typeof e == "function" ? n : e == null ? Nt : (e += "", r)
    };
    var Ps = {},
        Hs = null,
        Bs, js;
    d3.timer = function(e, t, n) {
        var r = !1,
            i, s = Hs;
        if (arguments.length < 3) {
            if (arguments.length < 2) t = 0;
            else if (!isFinite(t)) return;
            n = Date.now()
        }
        while (s) {
            if (s.callback === e) {
                s.then = n, s.delay = t, r = !0;
                break
            }
            i = s, s = s.next
        }
        r || (Hs = {
            callback: e,
            then: n,
            delay: t,
            next: Hs
        }), Bs || (js = clearTimeout(js), Bs = 1, Fs(kt))
    }, d3.timer.flush = function() {
        var e, t = Date.now(),
            n = Hs;
        while (n) e = t - n.then, n.delay || (n.flush = n.callback(e)), n = n.next;
        Lt()
    };
    var Fs = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            setTimeout(e, 17)
        };
    d3.mouse = function(e) {
        return At(e, _())
    };
    var Is = /WebKit/.test(navigator.userAgent) ? -1 : 0;
    d3.touches = function(e, t) {
        return arguments.length < 2 && (t = _().touches), t ? $i(t).map(function(t) {
            var n = At(e, t);
            return n.identifier = t.identifier, n
        }) : []
    }, d3.scale = {}, d3.scale.linear = function() {
        return Ht([0, 1], [0, 1], d3.interpolate, !1)
    }, d3.scale.log = function() {
        return zt(d3.scale.linear(), Wt)
    };
    var qs = d3.format(".0e");
    Wt.pow = function(e) {
        return Math.pow(10, e)
    }, Xt.pow = function(e) {
        return -Math.pow(10, -e)
    }, d3.scale.pow = function() {
        return Vt(d3.scale.linear(), 1)
    }, d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5)
    }, d3.scale.ordinal = function() {
        return Jt([], {
            t: "range",
            a: [
                []
            ]
        })
    }, d3.scale.category10 = function() {
        return d3.scale.ordinal().range(Rs)
    }, d3.scale.category20 = function() {
        return d3.scale.ordinal().range(Us)
    }, d3.scale.category20b = function() {
        return d3.scale.ordinal().range(zs)
    }, d3.scale.category20c = function() {
        return d3.scale.ordinal().range(Ws)
    };
    var Rs = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
        Us = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
        zs = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
        Ws = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function() {
        return Kt([], [])
    }, d3.scale.quantize = function() {
        return Qt(0, 1, [0, 1])
    }, d3.scale.threshold = function() {
        return Gt([.5], [0, 1])
    }, d3.scale.identity = function() {
        return Yt([0, 1])
    }, d3.svg = {}, d3.svg.arc = function() {
        function e() {
            var e = t.apply(this, arguments),
                s = n.apply(this, arguments),
                o = r.apply(this, arguments) + Xs,
                u = i.apply(this, arguments) + Xs,
                a = (u < o && (a = o, o = u, u = a), u - o),
                f = a < Math.PI ? "0" : "1",
                l = Math.cos(o),
                c = Math.sin(o),
                h = Math.cos(u),
                p = Math.sin(u);
            return a >= Vs ? e ? "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z" : "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "Z" : e ? "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L" + e * h + "," + e * p + "A" + e + "," + e + " 0 " + f + ",0 " + e * l + "," + e * c + "Z" : "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L0,0" + "Z"
        }
        var t = Zt,
            n = en,
            r = tn,
            i = nn;
        return e.innerRadius = function(n) {
            return arguments.length ? (t = u(n), e) : t
        }, e.outerRadius = function(t) {
            return arguments.length ? (n = u(t), e) : n
        }, e.startAngle = function(t) {
            return arguments.length ? (r = u(t), e) : r
        }, e.endAngle = function(t) {
            return arguments.length ? (i = u(t), e) : i
        }, e.centroid = function() {
            var e = (t.apply(this, arguments) + n.apply(this, arguments)) / 2,
                s = (r.apply(this, arguments) + i.apply(this, arguments)) / 2 + Xs;
            return [Math.cos(s) * e, Math.sin(s) * e]
        }, e
    };
    var Xs = -Math.PI / 2,
        Vs = 2 * Math.PI - 1e-6;
    d3.svg.line = function() {
        return rn(i)
    };
    var $s = d3.map({
        linear: un,
        "linear-closed": an,
        "step-before": fn,
        "step-after": ln,
        basis: mn,
        "basis-open": gn,
        "basis-closed": yn,
        bundle: bn,
        cardinal: pn,
        "cardinal-open": cn,
        "cardinal-closed": hn,
        monotone: Nn
    });
    $s.forEach(function(e, t) {
        t.key = e, t.closed = /-closed$/.test(e)
    });
    var Js = [0, 2 / 3, 1 / 3, 0],
        Ks = [0, 1 / 3, 2 / 3, 0],
        Qs = [0, 1 / 6, 2 / 3, 1 / 6];
    d3.svg.line.radial = function() {
        var e = rn(Cn);
        return e.radius = e.x, delete e.x, e.angle = e.y, delete e.y, e
    }, fn.reverse = ln, ln.reverse = fn, d3.svg.area = function() {
        return kn(i)
    }, d3.svg.area.radial = function() {
        var e = kn(Cn);
        return e.radius = e.x, delete e.x, e.innerRadius = e.x0, delete e.x0, e.outerRadius = e.x1, delete e.x1, e.angle = e.y, delete e.y, e.startAngle = e.y0, delete e.y0, e.endAngle = e.y1, delete e.y1, e
    }, d3.svg.chord = function() {
        function e(e, u) {
            var a = t(this, s, e, u),
                f = t(this, o, e, u);
            return "M" + a.p0 + r(a.r, a.p1, a.a1 - a.a0) + (n(a, f) ? i(a.r, a.p1, a.r, a.p0) : i(a.r, a.p1, f.r, f.p0) + r(f.r, f.p1, f.a1 - f.a0) + i(f.r, f.p1, a.r, a.p0)) + "Z"
        }

        function t(e, t, n, r) {
            var i = t.call(e, n, r),
                s = a.call(e, i, r),
                o = f.call(e, i, r) + Xs,
                u = l.call(e, i, r) + Xs;
            return {
                r: s,
                a0: o,
                a1: u,
                p0: [s * Math.cos(o), s * Math.sin(o)],
                p1: [s * Math.cos(u), s * Math.sin(u)]
            }
        }

        function n(e, t) {
            return e.a0 == t.a0 && e.a1 == t.a1
        }

        function r(e, t, n) {
            return "A" + e + "," + e + " 0 " + +(n > Math.PI) + ",1 " + t
        }

        function i(e, t, n, r) {
            return "Q 0,0 " + r
        }
        var s = Ln,
            o = An,
            a = On,
            f = tn,
            l = nn;
        return e.radius = function(t) {
            return arguments.length ? (a = u(t), e) : a
        }, e.source = function(t) {
            return arguments.length ? (s = u(t), e) : s
        }, e.target = function(t) {
            return arguments.length ? (o = u(t), e) : o
        }, e.startAngle = function(t) {
            return arguments.length ? (f = u(t), e) : f
        }, e.endAngle = function(t) {
            return arguments.length ? (l = u(t), e) : l
        }, e
    }, d3.svg.diagonal = function() {
        function e(e, i) {
            var s = t.call(this, e, i),
                o = n.call(this, e, i),
                u = (s.y + o.y) / 2,
                a = [s, {
                    x: s.x,
                    y: u
                }, {
                    x: o.x,
                    y: u
                }, o];
            return a = a.map(r), "M" + a[0] + "C" + a[1] + " " + a[2] + " " + a[3]
        }
        var t = Ln,
            n = An,
            r = Dn;
        return e.source = function(n) {
            return arguments.length ? (t = u(n), e) : t
        }, e.target = function(t) {
            return arguments.length ? (n = u(t), e) : n
        }, e.projection = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e
    }, d3.svg.diagonal.radial = function() {
        var e = d3.svg.diagonal(),
            t = Dn,
            n = e.projection;
        return e.projection = function(e) {
            return arguments.length ? n(Pn(t = e)) : t
        }, e
    }, d3.svg.mouse = d3.mouse, d3.svg.touches = d3.touches, d3.svg.symbol = function() {
        function e(e, r) {
            return (Gs.get(t.call(this, e, r)) || jn)(n.call(this, e, r))
        }
        var t = Bn,
            n = Hn;
        return e.type = function(n) {
            return arguments.length ? (t = u(n), e) : t
        }, e.size = function(t) {
            return arguments.length ? (n = u(t), e) : n
        }, e
    };
    var Gs = d3.map({
        circle: jn,
        cross: function(e) {
            var t = Math.sqrt(e / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(e) {
            var t = Math.sqrt(e / (2 * Zs)),
                n = t * Zs;
            return "M0," + -t + "L" + n + ",0" + " 0," + t + " " + -n + ",0" + "Z"
        },
        square: function(e) {
            var t = Math.sqrt(e) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(e) {
            var t = Math.sqrt(e / Ys),
                n = t * Ys / 2;
            return "M0," + n + "L" + t + "," + -n + " " + -t + "," + -n + "Z"
        },
        "triangle-up": function(e) {
            var t = Math.sqrt(e / Ys),
                n = t * Ys / 2;
            return "M0," + -n + "L" + t + "," + n + " " + -t + "," + n + "Z"
        }
    });
    d3.svg.symbolTypes = Gs.keys();
    var Ys = Math.sqrt(3),
        Zs = Math.tan(30 * Math.PI / 180);
    d3.svg.axis = function() {
        function e(e) {
            e.each(function() {
                var e = d3.select(this),
                    c = a == null ? t.ticks ? t.ticks.apply(t, u) : t.domain() : a,
                    h = f == null ? t.tickFormat ? t.tickFormat.apply(t, u) : String : f,
                    p = qn(t, c, l),
                    d = e.selectAll(".minor").data(p, String),
                    v = d.enter().insert("line", "g").attr("class", "tick minor").style("opacity", 1e-6),
                    m = d3.transition(d.exit()).style("opacity", 1e-6).remove(),
                    g = d3.transition(d).style("opacity", 1),
                    y = e.selectAll("g").data(c, String),
                    b = y.enter().insert("g", "path").style("opacity", 1e-6),
                    w = d3.transition(y.exit()).style("opacity", 1e-6).remove(),
                    E = d3.transition(y).style("opacity", 1),
                    S, x = _t(t),
                    T = e.selectAll(".domain").data([0]),
                    N = T.enter().append("path").attr("class", "domain"),
                    C = d3.transition(T),
                    k = t.copy(),
                    L = this.__chart__ || k;
                this.__chart__ = k, b.append("line").attr("class", "tick"), b.append("text");
                var A = b.select("line"),
                    O = E.select("line"),
                    M = y.select("text").text(h),
                    _ = b.select("text"),
                    D = E.select("text");
                switch (n) {
                    case "bottom":
                        S = Fn, v.attr("y2", i), g.attr("x2", 0).attr("y2", i), A.attr("y2", r), _.attr("y", Math.max(r, 0) + o), O.attr("x2", 0).attr("y2", r), D.attr("x", 0).attr("y", Math.max(r, 0) + o), M.attr("dy", ".71em").attr("text-anchor", "middle"), C.attr("d", "M" + x[0] + "," + s + "V0H" + x[1] + "V" + s);
                        break;
                    case "top":
                        S = Fn, v.attr("y2", -i), g.attr("x2", 0).attr("y2", -i), A.attr("y2", -r), _.attr("y", -(Math.max(r, 0) + o)), O.attr("x2", 0).attr("y2", -r), D.attr("x", 0).attr("y", -(Math.max(r, 0) + o)), M.attr("dy", "0em").attr("text-anchor", "middle"), C.attr("d", "M" + x[0] + "," + -s + "V0H" + x[1] + "V" + -s);
                        break;
                    case "left":
                        S = In, v.attr("x2", -i), g.attr("x2", -i).attr("y2", 0), A.attr("x2", -r), _.attr("x", -(Math.max(r, 0) + o)), O.attr("x2", -r).attr("y2", 0), D.attr("x", -(Math.max(r, 0) + o)).attr("y", 0), M.attr("dy", ".32em").attr("text-anchor", "end"), C.attr("d", "M" + -s + "," + x[0] + "H0V" + x[1] + "H" + -s);
                        break;
                    case "right":
                        S = In, v.attr("x2", i), g.attr("x2", i).attr("y2", 0), A.attr("x2", r), _.attr("x", Math.max(r, 0) + o), O.attr("x2", r).attr("y2", 0), D.attr("x", Math.max(r, 0) + o).attr("y", 0), M.attr("dy", ".32em").attr("text-anchor", "start"), C.attr("d", "M" + s + "," + x[0] + "H0V" + x[1] + "H" + s)
                }
                if (t.ticks) b.call(S, L), E.call(S, k), w.call(S, k), v.call(S, L), g.call(S, k), m.call(S, k);
                else {
                    var P = k.rangeBand() / 2,
                        H = function(e) {
                            return k(e) + P
                        };
                    b.call(S, H), E.call(S, H)
                }
            })
        }
        var t = d3.scale.linear(),
            n = "bottom",
            r = 6,
            i = 6,
            s = 6,
            o = 3,
            u = [10],
            a = null,
            f, l = 0;
        return e.scale = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.orient = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.ticks = function() {
            return arguments.length ? (u = arguments, e) : u
        }, e.tickValues = function(t) {
            return arguments.length ? (a = t, e) : a
        }, e.tickFormat = function(t) {
            return arguments.length ? (f = t, e) : f
        }, e.tickSize = function(t, n, o) {
            if (!arguments.length) return r;
            var u = arguments.length - 1;
            return r = +t, i = u > 1 ? +n : r, s = u > 0 ? +arguments[u] : r, e
        }, e.tickPadding = function(t) {
            return arguments.length ? (o = +t, e) : o
        }, e.tickSubdivide = function(t) {
            return arguments.length ? (l = +t, e) : l
        }, e
    }, d3.svg.brush = function() {
        function e(s) {
            s.each(function() {
                var s = d3.select(this),
                    f = s.selectAll(".background").data([0]),
                    l = s.selectAll(".extent").data([0]),
                    c = s.selectAll(".resize").data(a, String),
                    h;
                s.style("pointer-events", "all").on("mousedown.brush", i).on("touchstart.brush", i), f.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), l.enter().append("rect").attr("class", "extent").style("cursor", "move"), c.enter().append("g").attr("class", function(e) {
                    return "resize " + e
                }).style("cursor", function(e) {
                    return eo[e]
                }).append("rect").attr("x", function(e) {
                    return /[ew]$/.test(e) ? -3 : null
                }).attr("y", function(e) {
                    return /^[ns]/.test(e) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), c.style("display", e.empty() ? "none" : null), c.exit().remove(), o && (h = _t(o), f.attr("x", h[0]).attr("width", h[1] - h[0]), n(s)), u && (h = _t(u), f.attr("y", h[0]).attr("height", h[1] - h[0]), r(s)), t(s)
            })
        }

        function t(e) {
            e.selectAll(".resize").attr("transform", function(e) {
                return "translate(" + f[+/e$/.test(e)][0] + "," + f[+/^s/.test(e)][1] + ")"
            })
        }

        function n(e) {
            e.select(".extent").attr("x", f[0][0]), e.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1][0] - f[0][0])
        }

        function r(e) {
            e.select(".extent").attr("y", f[0][1]), e.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1][1] - f[0][1])
        }

        function i() {
            function i() {
                var e = d3.event.changedTouches;
                return e ? d3.touches(v, e)[0] : d3.mouse(v)
            }

            function a() {
                d3.event.keyCode == 32 && (S || (x = null, T[0] -= f[1][0], T[1] -= f[1][1], S = 2), M())
            }

            function c() {
                d3.event.keyCode == 32 && S == 2 && (T[0] += f[1][0], T[1] += f[1][1], S = 0, M())
            }

            function h() {
                var e = i(),
                    s = !1;
                N && (e[0] += N[0], e[1] += N[1]), S || (d3.event.altKey ? (x || (x = [(f[0][0] + f[1][0]) / 2, (f[0][1] + f[1][1]) / 2]), T[0] = f[+(e[0] < x[0])][0], T[1] = f[+(e[1] < x[1])][1]) : x = null), w && p(e, o, 0) && (n(y), s = !0), E && p(e, u, 1) && (r(y), s = !0), s && (t(y), g({
                    type: "brush",
                    mode: S ? "move" : "resize"
                }))
            }

            function p(e, t, n) {
                var r = _t(t),
                    i = r[0],
                    s = r[1],
                    o = T[n],
                    u = f[1][n] - f[0][n],
                    a, c;
                S && (i -= o, s -= u + o), a = Math.max(i, Math.min(s, e[n])), S ? c = (a += o) + u : (x && (o = Math.max(i, Math.min(s, 2 * x[n] - a))), o < a ? (c = a, a = o) : c = o);
                if (f[0][n] !== a || f[1][n] !== c) return l = null, f[0][n] = a, f[1][n] = c, !0
            }

            function d() {
                h(), y.style("pointer-events", "all").selectAll(".resize").style("display", e.empty() ? "none" : null), d3.select("body").style("cursor", null), C.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), g({
                    type: "brushend"
                }), M()
            }
            var v = this,
                m = d3.select(d3.event.target),
                g = s.of(v, arguments),
                y = d3.select(v),
                b = m.datum(),
                w = !/^(n|s)$/.test(b) && o,
                E = !/^(e|w)$/.test(b) && u,
                S = m.classed("extent"),
                x, T = i(),
                N, C = d3.select(window).on("mousemove.brush", h).on("mouseup.brush", d).on("touchmove.brush", h).on("touchend.brush", d).on("keydown.brush", a).on("keyup.brush", c);
            if (S) T[0] = f[0][0] - T[0], T[1] = f[0][1] - T[1];
            else if (b) {
                var k = +/w$/.test(b),
                    L = +/^n/.test(b);
                N = [f[1 - k][0] - T[0], f[1 - L][1] - T[1]], T[0] = f[k][0], T[1] = f[L][1]
            } else d3.event.altKey && (x = T.slice());
            y.style("pointer-events", "none").selectAll(".resize").style("display", null), d3.select("body").style("cursor", m.style("cursor")), g({
                type: "brushstart"
            }), h(), M()
        }
        var s = D(e, "brushstart", "brush", "brushend"),
            o = null,
            u = null,
            a = to[0],
            f = [
                [0, 0],
                [0, 0]
            ],
            l;
        return e.x = function(t) {
            return arguments.length ? (o = t, a = to[!o << 1 | !u], e) : o
        }, e.y = function(t) {
            return arguments.length ? (u = t, a = to[!o << 1 | !u], e) : u
        }, e.extent = function(t) {
            var n, r, i, s, a;
            return arguments.length ? (l = [
                [0, 0],
                [0, 0]
            ], o && (n = t[0], r = t[1], u && (n = n[0], r = r[0]), l[0][0] = n, l[1][0] = r, o.invert && (n = o(n), r = o(r)), r < n && (a = n, n = r, r = a), f[0][0] = n | 0, f[1][0] = r | 0), u && (i = t[0], s = t[1], o && (i = i[1], s = s[1]), l[0][1] = i, l[1][1] = s, u.invert && (i = u(i), s = u(s)), s < i && (a = i, i = s, s = a), f[0][1] = i | 0, f[1][1] = s | 0), e) : (t = l || f, o && (n = t[0][0], r = t[1][0], l || (n = f[0][0], r = f[1][0], o.invert && (n = o.invert(n), r = o.invert(r)), r < n && (a = n, n = r, r = a))), u && (i = t[0][1], s = t[1][1], l || (i = f[0][1], s = f[1][1], u.invert && (i = u.invert(i), s = u.invert(s)), s < i && (a = i, i = s, s = a))), o && u ? [
                [n, i],
                [r, s]
            ] : o ? [n, r] : u && [i, s])
        }, e.clear = function() {
            return l = null, f[0][0] = f[0][1] = f[1][0] = f[1][1] = 0, e
        }, e.empty = function() {
            return o && f[0][0] === f[1][0] || u && f[0][1] === f[1][1]
        }, d3.rebind(e, s, "on")
    };
    var eo = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        to = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ];
    d3.behavior = {}, d3.behavior.drag = function() {
        function e() {
            this.on("mousedown.drag", t).on("touchstart.drag", t)
        }

        function t() {
            function e() {
                var e = o.parentNode;
                return f ? d3.touches(e).filter(function(e) {
                    return e.identifier === f
                })[0] : d3.mouse(e)
            }

            function t() {
                if (!o.parentNode) return i();
                var t = e(),
                    n = t[0] - c[0],
                    r = t[1] - c[1];
                h |= n | r, c = t, M(), u({
                    type: "drag",
                    x: t[0] + l[0],
                    y: t[1] + l[1],
                    dx: n,
                    dy: r
                })
            }

            function i() {
                u({
                    type: "dragend"
                }), h && (M(), d3.event.target === a && p.on("click.drag", s, !0)), p.on(f ? "touchmove.drag-" + f : "mousemove.drag", null).on(f ? "touchend.drag-" + f : "mouseup.drag", null)
            }

            function s() {
                M(), p.on("click.drag", null)
            }
            var o = this,
                u = n.of(o, arguments),
                a = d3.event.target,
                f = d3.event.touches && d3.event.changedTouches[0].identifier,
                l, c = e(),
                h = 0,
                p = d3.select(window).on(f ? "touchmove.drag-" + f : "mousemove.drag", t).on(f ? "touchend.drag-" + f : "mouseup.drag", i, !0);
            r ? (l = r.apply(o, arguments), l = [l.x - c[0], l.y - c[1]]) : l = [0, 0], f || M(), u({
                type: "dragstart"
            })
        }
        var n = D(e, "drag", "dragstart", "dragend"),
            r = null;
        return e.origin = function(t) {
            return arguments.length ? (r = t, e) : r
        }, d3.rebind(e, n, "on")
    }, d3.behavior.zoom = function() {
        function e() {
            this.on("mousedown.zoom", o).on("mousewheel.zoom", u).on("mousemove.zoom", a).on("DOMMouseScroll.zoom", u).on("dblclick.zoom", f).on("touchstart.zoom", l).on("touchmove.zoom", c).on("touchend.zoom", l)
        }

        function t(e) {
            return [(e[0] - h[0]) / d, (e[1] - h[1]) / d]
        }

        function n(e) {
            return [e[0] * d + h[0], e[1] * d + h[1]]
        }

        function r(e) {
            d = Math.max(m[0], Math.min(m[1], e))
        }

        function i(e, t) {
            t = n(t), h[0] += e[0] - t[0], h[1] += e[1] - t[1]
        }

        function s(e) {
            b && b.domain(y.range().map(function(e) {
                return (e - h[0]) / d
            }).map(y.invert)), E && E.domain(w.range().map(function(e) {
                return (e - h[1]) / d
            }).map(w.invert)), d3.event.preventDefault(), e({
                type: "zoom",
                scale: d,
                translate: h
            })
        }

        function o() {
            function e() {
                f = 1, i(d3.mouse(o), c), s(u)
            }

            function n() {
                f && M(), l.on("mousemove.zoom", null).on("mouseup.zoom", null), f && d3.event.target === a && l.on("click.zoom", r, !0)
            }

            function r() {
                M(), l.on("click.zoom", null)
            }
            var o = this,
                u = g.of(o, arguments),
                a = d3.event.target,
                f = 0,
                l = d3.select(window).on("mousemove.zoom", e).on("mouseup.zoom", n),
                c = t(d3.mouse(o));
            window.focus(), M()
        }

        function u() {
            p || (p = t(d3.mouse(this))), r(Math.pow(2, Rn() * .002) * d), i(d3.mouse(this), p), s(g.of(this, arguments))
        }

        function a() {
            p = null
        }

        function f() {
            var e = d3.mouse(this),
                n = t(e);
            r(d3.event.shiftKey ? d / 2 : d * 2), i(e, n), s(g.of(this, arguments))
        }

        function l() {
            var e = d3.touches(this),
                n = Date.now();
            v = d, p = {}, e.forEach(function(e) {
                p[e.identifier] = t(e)
            }), M();
            if (e.length === 1) {
                if (n - S < 500) {
                    var o = e[0],
                        u = t(e[0]);
                    r(d * 2), i(o, u), s(g.of(this, arguments))
                }
                S = n
            }
        }

        function c() {
            var e = d3.touches(this),
                t = e[0],
                n = p[t.identifier];
            if (o = e[1]) {
                var o, u = p[o.identifier];
                t = [(t[0] + o[0]) / 2, (t[1] + o[1]) / 2], n = [(n[0] + u[0]) / 2, (n[1] + u[1]) / 2], r(d3.event.scale * v)
            }
            i(t, n), S = null, s(g.of(this, arguments))
        }
        var h = [0, 0],
            p, d = 1,
            v, m = ro,
            g = D(e, "zoom"),
            y, b, w, E, S;
        return e.translate = function(t) {
            return arguments.length ? (h = t.map(Number), e) : h
        }, e.scale = function(t) {
            return arguments.length ? (d = +t, e) : d
        }, e.scaleExtent = function(t) {
            return arguments.length ? (m = t == null ? ro : t.map(Number), e) : m
        }, e.x = function(t) {
            return arguments.length ? (b = t, y = t.copy(), e) : b
        }, e.y = function(t) {
            return arguments.length ? (E = t, w = t.copy(), e) : E
        }, d3.rebind(e, g, "on")
    };
    var no, ro = [0, Infinity];
    d3.layout = {}, d3.layout.bundle = function() {
        return function(e) {
            var t = [],
                n = -1,
                r = e.length;
            while (++n < r) t.push(Un(e[n]));
            return t
        }
    }, d3.layout.chord = function() {
        function e() {
            var e = {},
                n = [],
                c = d3.range(o),
                h = [],
                p, d, v, m, g;
            r = [], i = [], p = 0, m = -1;
            while (++m < o) {
                d = 0, g = -1;
                while (++g < o) d += s[m][g];
                n.push(d), h.push(d3.range(o)), p += d
            }
            a && c.sort(function(e, t) {
                return a(n[e], n[t])
            }), f && h.forEach(function(e, t) {
                e.sort(function(e, n) {
                    return f(s[t][e], s[t][n])
                })
            }), p = (2 * Math.PI - u * o) / p, d = 0, m = -1;
            while (++m < o) {
                v = d, g = -1;
                while (++g < o) {
                    var y = c[m],
                        b = h[y][g],
                        w = s[y][b],
                        E = d,
                        S = d += w * p;
                    e[y + "-" + b] = {
                        index: y,
                        subindex: b,
                        startAngle: E,
                        endAngle: S,
                        value: w
                    }
                }
                i[y] = {
                    index: y,
                    startAngle: v,
                    endAngle: d,
                    value: (d - v) / p
                }, d += u
            }
            m = -1;
            while (++m < o) {
                g = m - 1;
                while (++g < o) {
                    var x = e[m + "-" + g],
                        T = e[g + "-" + m];
                    (x.value || T.value) && r.push(x.value < T.value ? {
                        source: T,
                        target: x
                    } : {
                        source: x,
                        target: T
                    })
                }
            }
            l && t()
        }

        function t() {
            r.sort(function(e, t) {
                return l((e.source.value + e.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var n = {},
            r, i, s, o, u = 0,
            a, f, l;
        return n.matrix = function(e) {
            return arguments.length ? (o = (s = e) && s.length, r = i = null, n) : s
        }, n.padding = function(e) {
            return arguments.length ? (u = e, r = i = null, n) : u
        }, n.sortGroups = function(e) {
            return arguments.length ? (a = e, r = i = null, n) : a
        }, n.sortSubgroups = function(e) {
            return arguments.length ? (f = e, r = null, n) : f
        }, n.sortChords = function(e) {
            return arguments.length ? (l = e, r && t(), n) : l
        }, n.chords = function() {
            return r || e(), r
        }, n.groups = function() {
            return i || e(), i
        }, n
    }, d3.layout.force = function() {
        function e(e) {
            return function(t, n, r, i, s) {
                if (t.point !== e) {
                    var o = t.cx - e.x,
                        u = t.cy - e.y,
                        a = 1 / Math.sqrt(o * o + u * u);
                    if ((i - n) * a < d) {
                        var f = t.charge * a * a;
                        return e.px -= o * f, e.py -= u * f, !0
                    }
                    if (t.point && isFinite(a)) {
                        var f = t.pointCharge * a * a;
                        e.px -= o * f, e.py -= u * f
                    }
                }
                return !t.charge
            }
        }

        function t(e) {
            e.px = d3.event.x, e.py = d3.event.y, n.resume()
        }
        var n = {},
            r = d3.dispatch("start", "tick", "end"),
            s = [1, 1],
            o, a, f = .9,
            l = Qn,
            c = Gn,
            h = -30,
            p = .1,
            d = .8,
            v, m = [],
            g = [],
            y, b, w;
        return n.tick = function() {
            if ((a *= .99) < .005) return r.end({
                type: "end",
                alpha: a = 0
            }), !0;
            var t = m.length,
                n = g.length,
                i, o, u, l, c, d, v, E, S;
            for (o = 0; o < n; ++o) {
                u = g[o], l = u.source, c = u.target, E = c.x - l.x, S = c.y - l.y;
                if (d = E * E + S * S) d = a * b[o] * ((d = Math.sqrt(d)) - y[o]) / d, E *= d, S *= d, c.x -= E * (v = l.weight / (c.weight + l.weight)), c.y -= S * v, l.x += E * (v = 1 - v), l.y += S * v
            }
            if (v = a * p) {
                E = s[0] / 2, S = s[1] / 2, o = -1;
                if (v)
                    while (++o < t) u = m[o], u.x += (E - u.x) * v, u.y += (S - u.y) * v
            }
            if (h) {
                Kn(i = d3.geom.quadtree(m), a, w), o = -1;
                while (++o < t)(u = m[o]).fixed || i.visit(e(u))
            }
            o = -1;
            while (++o < t) u = m[o], u.fixed ? (u.x = u.px, u.y = u.py) : (u.x -= (u.px - (u.px = u.x)) * f, u.y -= (u.py - (u.py = u.y)) * f);
            r.tick({
                type: "tick",
                alpha: a
            })
        }, n.nodes = function(e) {
            return arguments.length ? (m = e, n) : m
        }, n.links = function(e) {
            return arguments.length ? (g = e, n) : g
        }, n.size = function(e) {
            return arguments.length ? (s = e, n) : s
        }, n.linkDistance = function(e) {
            return arguments.length ? (l = u(e), n) : l
        }, n.distance = n.linkDistance, n.linkStrength = function(e) {
            return arguments.length ? (c = u(e), n) : c
        }, n.friction = function(e) {
            return arguments.length ? (f = e, n) : f
        }, n.charge = function(e) {
            return arguments.length ? (h = typeof e == "function" ? e : +e, n) : h
        }, n.gravity = function(e) {
            return arguments.length ? (p = e, n) : p
        }, n.theta = function(e) {
            return arguments.length ? (d = e, n) : d
        }, n.alpha = function(e) {
            return arguments.length ? (a ? e > 0 ? a = e : a = 0 : e > 0 && (r.start({
                type: "start",
                alpha: a = e
            }), d3.timer(n.tick)), n) : a
        }, n.start = function() {
            function e(e, n) {
                var i = t(r),
                    s = -1,
                    o = i.length,
                    u;
                while (++s < o)
                    if (!isNaN(u = i[s][e])) return u;
                return Math.random() * n
            }

            function t() {
                if (!p) {
                    p = [];
                    for (i = 0; i < o; ++i) p[i] = [];
                    for (i = 0; i < u; ++i) {
                        var e = g[i];
                        p[e.source.index].push(e.target), p[e.target.index].push(e.source)
                    }
                }
                return p[r]
            }
            var r, i, o = m.length,
                u = g.length,
                a = s[0],
                f = s[1],
                p, d;
            for (r = 0; r < o; ++r)(d = m[r]).index = r, d.weight = 0;
            y = [], b = [];
            for (r = 0; r < u; ++r) d = g[r], typeof d.source == "number" && (d.source = m[d.source]), typeof d.target == "number" && (d.target = m[d.target]), y[r] = l.call(this, d, r), b[r] = c.call(this, d, r), ++d.source.weight, ++d.target.weight;
            for (r = 0; r < o; ++r) d = m[r], isNaN(d.x) && (d.x = e("x", a)), isNaN(d.y) && (d.y = e("y", f)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
            w = [];
            if (typeof h == "function")
                for (r = 0; r < o; ++r) w[r] = +h.call(this, m[r], r);
            else
                for (r = 0; r < o; ++r) w[r] = h;
            return n.resume()
        }, n.resume = function() {
            return n.alpha(.1)
        }, n.stop = function() {
            return n.alpha(0)
        }, n.drag = function() {
            o || (o = d3.behavior.drag().origin(i).on("dragstart", Xn).on("drag", t).on("dragend", Vn)), this.on("mouseover.force", $n).on("mouseout.force", Jn).call(o)
        }, d3.rebind(n, r, "on")
    }, d3.layout.partition = function() {
        function e(t, n, r, i) {
            var s = t.children;
            t.x = n, t.y = t.depth * i, t.dx = r, t.dy = i;
            if (s && (u = s.length)) {
                var o = -1,
                    u, a, f;
                r = t.value ? r / t.value : 0;
                while (++o < u) e(a = s[o], n, f = a.value * r, i), n += f
            }
        }

        function t(e) {
            var n = e.children,
                r = 0;
            if (n && (s = n.length)) {
                var i = -1,
                    s;
                while (++i < s) r = Math.max(r, t(n[i]))
            }
            return 1 + r
        }

        function n(n, s) {
            var o = r.call(this, n, s);
            return e(o[0], 0, i[0], i[1] / t(o[0])), o
        }
        var r = d3.layout.hierarchy(),
            i = [1, 1];
        return n.size = function(e) {
            return arguments.length ? (i = e, n) : i
        }, fr(n, r)
    }, d3.layout.pie = function() {
        function e(s, o) {
            var u = s.map(function(n, r) {
                    return +t.call(e, n, r)
                }),
                a = +(typeof r == "function" ? r.apply(this, arguments) : r),
                f = ((typeof i == "function" ? i.apply(this, arguments) : i) - r) / d3.sum(u),
                l = d3.range(s.length);
            n != null && l.sort(n === io ? function(e, t) {
                return u[t] - u[e]
            } : function(e, t) {
                return n(s[e], s[t])
            });
            var c = [];
            return l.forEach(function(e) {
                var t;
                c[e] = {
                    data: s[e],
                    value: t = u[e],
                    startAngle: a,
                    endAngle: a += t * f
                }
            }), c
        }
        var t = Number,
            n = io,
            r = 0,
            i = 2 * Math.PI;
        return e.value = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.sort = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.startAngle = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.endAngle = function(t) {
            return arguments.length ? (i = t, e) : i
        }, e
    };
    var io = {};
    d3.layout.stack = function() {
        function e(i, a) {
            var f = i.map(function(n, r) {
                    return t.call(e, n, r)
                }),
                l = f.map(function(t, n) {
                    return t.map(function(t, n) {
                        return [o.call(e, t, n), u.call(e, t, n)]
                    })
                }),
                c = n.call(e, l, a);
            f = d3.permute(f, c), l = d3.permute(l, c);
            var h = r.call(e, l, a),
                p = f.length,
                d = f[0].length,
                v, m, g;
            for (m = 0; m < d; ++m) {
                s.call(e, f[0][m], g = h[m], l[0][m][1]);
                for (v = 1; v < p; ++v) s.call(e, f[v][m], g += l[v - 1][m][1], l[v][m][1])
            }
            return i
        }
        var t = i,
            n = tr,
            r = nr,
            s = er,
            o = Yn,
            u = Zn;
        return e.values = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.order = function(t) {
            return arguments.length ? (n = typeof t == "function" ? t : so.get(t) || tr, e) : n
        }, e.offset = function(t) {
            return arguments.length ? (r = typeof t == "function" ? t : oo.get(t) || nr, e) : r
        }, e.x = function(t) {
            return arguments.length ? (o = t, e) : o
        }, e.y = function(t) {
            return arguments.length ? (u = t, e) : u
        }, e.out = function(t) {
            return arguments.length ? (s = t, e) : s
        }, e
    };
    var so = d3.map({
            "inside-out": function(e) {
                var t = e.length,
                    n, r, i = e.map(rr),
                    s = e.map(ir),
                    o = d3.range(t).sort(function(e, t) {
                        return i[e] - i[t]
                    }),
                    u = 0,
                    a = 0,
                    f = [],
                    l = [];
                for (n = 0; n < t; ++n) r = o[n], u < a ? (u += s[r], f.push(r)) : (a += s[r], l.push(r));
                return l.reverse().concat(f)
            },
            reverse: function(e) {
                return d3.range(e.length).reverse()
            },
            "default": tr
        }),
        oo = d3.map({
            silhouette: function(e) {
                var t = e.length,
                    n = e[0].length,
                    r = [],
                    i = 0,
                    s, o, u, a = [];
                for (o = 0; o < n; ++o) {
                    for (s = 0, u = 0; s < t; s++) u += e[s][o][1];
                    u > i && (i = u), r.push(u)
                }
                for (o = 0; o < n; ++o) a[o] = (i - r[o]) / 2;
                return a
            },
            wiggle: function(e) {
                var t = e.length,
                    n = e[0],
                    r = n.length,
                    i = 0,
                    s, o, u, a, f, l, c, h, p, d = [];
                d[0] = h = p = 0;
                for (o = 1; o < r; ++o) {
                    for (s = 0, a = 0; s < t; ++s) a += e[s][o][1];
                    for (s = 0, f = 0, c = n[o][0] - n[o - 1][0]; s < t; ++s) {
                        for (u = 0, l = (e[s][o][1] - e[s][o - 1][1]) / (2 * c); u < s; ++u) l += (e[u][o][1] - e[u][o - 1][1]) / c;
                        f += l * e[s][o][1]
                    }
                    d[o] = h -= a ? f / a * c : 0, h < p && (p = h)
                }
                for (o = 0; o < r; ++o) d[o] -= p;
                return d
            },
            expand: function(e) {
                var t = e.length,
                    n = e[0].length,
                    r = 1 / t,
                    i, s, o, u = [];
                for (s = 0; s < n; ++s) {
                    for (i = 0, o = 0; i < t; i++) o += e[i][s][1];
                    if (o)
                        for (i = 0; i < t; i++) e[i][s][1] /= o;
                    else
                        for (i = 0; i < t; i++) e[i][s][1] = r
                }
                for (s = 0; s < n; ++s) u[s] = 0;
                return u
            },
            zero: nr
        });
    d3.layout.histogram = function() {
        function e(e, s) {
            var o = [],
                u = e.map(n, this),
                a = r.call(this, u, s),
                f = i.call(this, a, u, s),
                l, s = -1,
                c = u.length,
                h = f.length - 1,
                p = t ? 1 : 1 / c,
                d;
            while (++s < h) l = o[s] = [], l.dx = f[s + 1] - (l.x = f[s]), l.y = 0;
            if (h > 0) {
                s = -1;
                while (++s < c) d = u[s], d >= a[0] && d <= a[1] && (l = o[d3.bisect(f, d, 1, h) - 1], l.y += p, l.push(e[s]))
            }
            return o
        }
        var t = !0,
            n = Number,
            r = ar,
            i = or;
        return e.value = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.range = function(t) {
            return arguments.length ? (r = u(t), e) : r
        }, e.bins = function(t) {
            return arguments.length ? (i = typeof t == "number" ? function(e) {
                return ur(e, t)
            } : u(t), e) : i
        }, e.frequency = function(n) {
            return arguments.length ? (t = !!n, e) : t
        }, e
    }, d3.layout.hierarchy = function() {
        function e(t, o, u) {
            var a = i.call(n, t, o),
                f = uo ? t : {
                    data: t
                };
            f.depth = o, u.push(f);
            if (a && (c = a.length)) {
                var l = -1,
                    c, h = f.children = [],
                    p = 0,
                    d = o + 1,
                    v;
                while (++l < c) v = e(a[l], d, u), v.parent = f, h.push(v), p += v.value;
                r && h.sort(r), s && (f.value = p)
            } else s && (f.value = +s.call(n, t, o) || 0);
            return f
        }

        function t(e, r) {
            var i = e.children,
                o = 0;
            if (i && (a = i.length)) {
                var u = -1,
                    a, f = r + 1;
                while (++u < a) o += t(i[u], f)
            } else s && (o = +s.call(n, uo ? e : e.data, r) || 0);
            return s && (e.value = o), o
        }

        function n(t) {
            var n = [];
            return e(t, 0, n), n
        }
        var r = hr,
            i = lr,
            s = cr;
        return n.sort = function(e) {
            return arguments.length ? (r = e, n) : r
        }, n.children = function(e) {
            return arguments.length ? (i = e, n) : i
        }, n.value = function(e) {
            return arguments.length ? (s = e, n) : s
        }, n.revalue = function(e) {
            return t(e, 0), e
        }, n
    };
    var uo = !1;
    d3.layout.pack = function() {
        function e(e, i) {
            var s = t.call(this, e, i),
                o = s[0];
            o.x = 0, o.y = 0, Pr(o, function(e) {
                e.r = Math.sqrt(e.value)
            }), Pr(o, yr);
            var u = r[0],
                a = r[1],
                f = Math.max(2 * o.r / u, 2 * o.r / a);
            if (n > 0) {
                var l = n * f / 2;
                Pr(o, function(e) {
                    e.r += l
                }), Pr(o, yr), Pr(o, function(e) {
                    e.r -= l
                }), f = Math.max(2 * o.r / u, 2 * o.r / a)
            }
            return Er(o, u / 2, a / 2, 1 / f), s
        }
        var t = d3.layout.hierarchy().sort(dr),
            n = 0,
            r = [1, 1];
        return e.size = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.padding = function(t) {
            return arguments.length ? (n = +t, e) : n
        }, fr(e, t)
    }, d3.layout.cluster = function() {
        function e(e, i) {
            var s = t.call(this, e, i),
                o = s[0],
                u, a = 0,
                f, l;
            Pr(o, function(e) {
                var t = e.children;
                t && t.length ? (e.x = Tr(t), e.y = xr(t)) : (e.x = u ? a += n(e, u) : 0, e.y = 0, u = e)
            });
            var c = Nr(o),
                h = Cr(o),
                p = c.x - n(c, h) / 2,
                d = h.x + n(h, c) / 2;
            return Pr(o, function(e) {
                e.x = (e.x - p) / (d - p) * r[0], e.y = (1 - (o.y ? e.y / o.y : 1)) * r[1]
            }), s
        }
        var t = d3.layout.hierarchy().sort(null).value(null),
            n = kr,
            r = [1, 1];
        return e.separation = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.size = function(t) {
            return arguments.length ? (r = t, e) : r
        }, fr(e, t)
    }, d3.layout.tree = function() {
        function e(e, i) {
            function s(e, t) {
                var r = e.children,
                    i = e._tree;
                if (r && (o = r.length)) {
                    var o, a = r[0],
                        f, l = a,
                        c, h = -1;
                    while (++h < o) c = r[h], s(c, f), l = u(c, f, l), f = c;
                    Hr(e);
                    var p = .5 * (a._tree.prelim + c._tree.prelim);
                    t ? (i.prelim = t._tree.prelim + n(e, t), i.mod = i.prelim - p) : i.prelim = p
                } else t && (i.prelim = t._tree.prelim + n(e, t))
            }

            function o(e, t) {
                e.x = e._tree.prelim + t;
                var n = e.children;
                if (n && (i = n.length)) {
                    var r = -1,
                        i;
                    t += e._tree.mod;
                    while (++r < i) o(n[r], t)
                }
            }

            function u(e, t, r) {
                if (t) {
                    var i = e,
                        s = e,
                        o = t,
                        u = e.parent.children[0],
                        a = i._tree.mod,
                        f = s._tree.mod,
                        l = o._tree.mod,
                        c = u._tree.mod,
                        h;
                    while (o = Ar(o), i = Lr(i), o && i) u = Lr(u), s = Ar(s), s._tree.ancestor = e, h = o._tree.prelim + l - i._tree.prelim - a + n(o, i), h > 0 && (Br(jr(o, e, r), e, h), a += h, f += h), l += o._tree.mod, a += i._tree.mod, c += u._tree.mod, f += s._tree.mod;
                    o && !Ar(s) && (s._tree.thread = o, s._tree.mod += l - f), i && !Lr(u) && (u._tree.thread = i, u._tree.mod += a - c, r = e)
                }
                return r
            }
            var a = t.call(this, e, i),
                f = a[0];
            Pr(f, function(e, t) {
                e._tree = {
                    ancestor: e,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: t ? t._tree.number + 1 : 0
                }
            }), s(f), o(f, -f._tree.prelim);
            var l = Or(f, _r),
                c = Or(f, Mr),
                h = Or(f, Dr),
                p = l.x - n(l, c) / 2,
                d = c.x + n(c, l) / 2,
                v = h.depth || 1;
            return Pr(f, function(e) {
                e.x = (e.x - p) / (d - p) * r[0], e.y = e.depth / v * r[1], delete e._tree
            }), a
        }
        var t = d3.layout.hierarchy().sort(null).value(null),
            n = kr,
            r = [1, 1];
        return e.separation = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.size = function(t) {
            return arguments.length ? (r = t, e) : r
        }, fr(e, t)
    }, d3.layout.treemap = function() {
        function e(e, t) {
            var n = -1,
                r = e.length,
                i, s;
            while (++n < r) s = (i = e[n]).value * (t < 0 ? 0 : t), i.area = isNaN(s) || s <= 0 ? 0 : s
        }

        function t(n) {
            var s = n.children;
            if (s && s.length) {
                var o = l(n),
                    u = [],
                    a = s.slice(),
                    f, c = Infinity,
                    h, p = Math.min(o.dx, o.dy),
                    d;
                e(a, o.dx * o.dy / n.value), u.area = 0;
                while ((d = a.length) > 0) u.push(f = a[d - 1]), u.area += f.area, (h = r(u, p)) <= c ? (a.pop(), c = h) : (u.area -= u.pop().area, i(u, p, o, !1), p = Math.min(o.dx, o.dy), u.length = u.area = 0, c = Infinity);
                u.length && (i(u, p, o, !0), u.length = u.area = 0), s.forEach(t)
            }
        }

        function n(t) {
            var r = t.children;
            if (r && r.length) {
                var s = l(t),
                    o = r.slice(),
                    u, a = [];
                e(o, s.dx * s.dy / t.value), a.area = 0;
                while (u = o.pop()) a.push(u), a.area += u.area, u.z != null && (i(a, u.z ? s.dx : s.dy, s, !o.length), a.length = a.area = 0);
                r.forEach(n)
            }
        }

        function r(e, t) {
            var n = e.area,
                r, i = 0,
                s = Infinity,
                o = -1,
                u = e.length;
            while (++o < u) {
                if (!(r = e[o].area)) continue;
                r < s && (s = r), r > i && (i = r)
            }
            return n *= n, t *= t, n ? Math.max(t * i * p / n, n / (t * s * p)) : Infinity
        }

        function i(e, t, n, r) {
            var i = -1,
                s = e.length,
                o = n.x,
                a = n.y,
                f = t ? u(e.area / t) : 0,
                l;
            if (t == n.dx) {
                if (r || f > n.dy) f = n.dy;
                while (++i < s) l = e[i], l.x = o, l.y = a, l.dy = f, o += l.dx = Math.min(n.x + n.dx - o, f ? u(l.area / f) : 0);
                l.z = !0, l.dx += n.x + n.dx - o, n.y += f, n.dy -= f
            } else {
                if (r || f > n.dx) f = n.dx;
                while (++i < s) l = e[i], l.x = o, l.y = a, l.dx = f, a += l.dy = Math.min(n.y + n.dy - a, f ? u(l.area / f) : 0);
                l.z = !1, l.dy += n.y + n.dy - a, n.x += f, n.dx -= f
            }
        }

        function s(r) {
            var i = h || o(r),
                s = i[0];
            return s.x = 0, s.y = 0, s.dx = a[0], s.dy = a[1], h && o.revalue(s), e([s], s.dx * s.dy / s.value), (h ? n : t)(s), c && (h = i), i
        }
        var o = d3.layout.hierarchy(),
            u = Math.round,
            a = [1, 1],
            f = null,
            l = Fr,
            c = !1,
            h, p = .5 * (1 + Math.sqrt(5));
        return s.size = function(e) {
            return arguments.length ? (a = e, s) : a
        }, s.padding = function(e) {
            function t(t) {
                var n = e.call(s, t, t.depth);
                return n == null ? Fr(t) : Ir(t, typeof n == "number" ? [n, n, n, n] : n)
            }

            function n(t) {
                return Ir(t, e)
            }
            if (!arguments.length) return f;
            var r;
            return l = (f = e) == null ? Fr : (r = typeof e) === "function" ? t : r === "number" ? (e = [e, e, e, e], n) : n, s
        }, s.round = function(e) {
            return arguments.length ? (u = e ? Math.round : Number, s) : u != Number
        }, s.sticky = function(e) {
            return arguments.length ? (c = e, h = null, s) : c
        }, s.ratio = function(e) {
            return arguments.length ? (p = e, s) : p
        }, fr(s, o)
    }, d3.csv = qr(",", "text/csv"), d3.tsv = qr("	", "text/tab-separated-values"), d3.geo = {};
    var ao = Math.PI / 180;
    d3.geo.azimuthal = function() {
        function e(e) {
            var n = e[0] * ao - s,
                o = e[1] * ao,
                f = Math.cos(n),
                l = Math.sin(n),
                c = Math.cos(o),
                h = Math.sin(o),
                p = t !== "orthographic" ? a * h + u * c * f : null,
                d, v = t === "stereographic" ? 1 / (1 + p) : t === "gnomonic" ? 1 / p : t === "equidistant" ? (d = Math.acos(p), d ? d / Math.sin(d) : 0) : t === "equalarea" ? Math.sqrt(2 / (1 + p)) : 1,
                m = v * c * l,
                g = v * (a * c * f - u * h);
            return [r * m + i[0], r * g + i[1]]
        }
        var t = "orthographic",
            n, r = 200,
            i = [480, 250],
            s, o, u, a;
        return e.invert = function(e) {
            var n = (e[0] - i[0]) / r,
                o = (e[1] - i[1]) / r,
                f = Math.sqrt(n * n + o * o),
                l = t === "stereographic" ? 2 * Math.atan(f) : t === "gnomonic" ? Math.atan(f) : t === "equidistant" ? f : t === "equalarea" ? 2 * Math.asin(.5 * f) : Math.asin(f),
                c = Math.sin(l),
                h = Math.cos(l);
            return [(s + Math.atan2(n * c, f * u * h + o * a * c)) / ao, Math.asin(h * a - (f ? o * c * u / f : 0)) / ao]
        }, e.mode = function(n) {
            return arguments.length ? (t = n + "", e) : t
        }, e.origin = function(t) {
            return arguments.length ? (n = t, s = n[0] * ao, o = n[1] * ao, u = Math.cos(o), a = Math.sin(o), e) : n
        }, e.scale = function(t) {
            return arguments.length ? (r = +t, e) : r
        }, e.translate = function(t) {
            return arguments.length ? (i = [+t[0], +t[1]], e) : i
        }, e.origin([0, 0])
    }, d3.geo.albers = function() {
        function e(e) {
            var t = u * (ao * e[0] - o),
                n = Math.sqrt(a - 2 * u * Math.sin(ao * e[1])) / u;
            return [i * n * Math.sin(t) + s[0], i * (n * Math.cos(t) - f) + s[1]]
        }

        function t() {
            var t = ao * r[0],
                i = ao * r[1],
                s = ao * n[1],
                l = Math.sin(t),
                c = Math.cos(t);
            return o = ao * n[0], u = .5 * (l + Math.sin(i)), a = c * c + 2 * u * l, f = Math.sqrt(a - 2 * u * Math.sin(s)) / u, e
        }
        var n = [-98, 38],
            r = [29.5, 45.5],
            i = 1e3,
            s = [480, 250],
            o, u, a, f;
        return e.invert = function(e) {
            var t = (e[0] - s[0]) / i,
                n = (e[1] - s[1]) / i,
                r = f + n,
                l = Math.atan2(t, r),
                c = Math.sqrt(t * t + r * r);
            return [(o + l / u) / ao, Math.asin((a - c * c * u * u) / (2 * u)) / ao]
        }, e.origin = function(e) {
            return arguments.length ? (n = [+e[0], +e[1]], t()) : n
        }, e.parallels = function(e) {
            return arguments.length ? (r = [+e[0], +e[1]], t()) : r
        }, e.scale = function(t) {
            return arguments.length ? (i = +t, e) : i
        }, e.translate = function(t) {
            return arguments.length ? (s = [+t[0], +t[1]], e) : s
        }, t()
    }, d3.geo.albersUsa = function() {
        function e(e) {
            var s = e[0],
                o = e[1];
            return (o > 50 ? n : s < -140 ? r : o < 21 ? i : t)(e)
        }
        var t = d3.geo.albers(),
            n = d3.geo.albers().origin([-160, 60]).parallels([55, 65]),
            r = d3.geo.albers().origin([-160, 20]).parallels([8, 18]),
            i = d3.geo.albers().origin([-60, 10]).parallels([8, 18]);
        return e.scale = function(s) {
            return arguments.length ? (t.scale(s), n.scale(s * .6), r.scale(s), i.scale(s * 1.5), e.translate(t.translate())) : t.scale()
        }, e.translate = function(s) {
            if (!arguments.length) return t.translate();
            var o = t.scale() / 1e3,
                u = s[0],
                a = s[1];
            return t.translate(s), n.translate([u - 400 * o, a + 170 * o]), r.translate([u - 190 * o, a + 200 * o]), i.translate([u + 580 * o, a + 430 * o]), e
        }, e.scale(t.scale())
    }, d3.geo.bonne = function() {
        function e(e) {
            var u = e[0] * ao - r,
                a = e[1] * ao - i;
            if (s) {
                var f = o + s - a,
                    l = u * Math.cos(a) / f;
                u = f * Math.sin(l), a = f * Math.cos(l) - o
            } else u *= Math.cos(a), a *= -1;
            return [t * u + n[0], t * a + n[1]]
        }
        var t = 200,
            n = [480, 250],
            r, i, s, o;
        return e.invert = function(e) {
            var i = (e[0] - n[0]) / t,
                u = (e[1] - n[1]) / t;
            if (s) {
                var a = o + u,
                    f = Math.sqrt(i * i + a * a);
                u = o + s - f, i = r + f * Math.atan2(i, a) / Math.cos(u)
            } else u *= -1, i /= Math.cos(u);
            return [i / ao, u / ao]
        }, e.parallel = function(t) {
            return arguments.length ? (o = 1 / Math.tan(s = t * ao), e) : s / ao
        }, e.origin = function(t) {
            return arguments.length ? (r = t[0] * ao, i = t[1] * ao, e) : [r / ao, i / ao]
        }, e.scale = function(n) {
            return arguments.length ? (t = +n, e) : t
        }, e.translate = function(t) {
            return arguments.length ? (n = [+t[0], +t[1]], e) : n
        }, e.origin([0, 0]).parallel(45)
    }, d3.geo.equirectangular = function() {
        function e(e) {
            var r = e[0] / 360,
                i = -e[1] / 360;
            return [t * r + n[0], t * i + n[1]]
        }
        var t = 500,
            n = [480, 250];
        return e.invert = function(e) {
            var r = (e[0] - n[0]) / t,
                i = (e[1] - n[1]) / t;
            return [360 * r, -360 * i]
        }, e.scale = function(n) {
            return arguments.length ? (t = +n, e) : t
        }, e.translate = function(t) {
            return arguments.length ? (n = [+t[0], +t[1]], e) : n
        }, e
    }, d3.geo.mercator = function() {
        function e(e) {
            var r = e[0] / 360,
                i = -(Math.log(Math.tan(Math.PI / 4 + e[1] * ao / 2)) / ao) / 360;
            return [t * r + n[0], t * Math.max(-0.5, Math.min(.5, i)) + n[1]]
        }
        var t = 500,
            n = [480, 250];
        return e.invert = function(e) {
            var r = (e[0] - n[0]) / t,
                i = (e[1] - n[1]) / t;
            return [360 * r, 2 * Math.atan(Math.exp(-360 * i * ao)) / ao - 90]
        }, e.scale = function(n) {
            return arguments.length ? (t = +n, e) : t
        }, e.translate = function(t) {
            return arguments.length ? (n = [+t[0], +t[1]], e) : n
        }, e
    }, d3.geo.path = function() {
        function e(e, t) {
            typeof s == "function" && (o = Ur(s.apply(this, arguments))), f(e);
            var n = a.length ? a.join("") : null;
            return a = [], n
        }

        function t(e) {
            return u(e).join(",")
        }

        function n(e) {
            var t = i(e[0]),
                n = 0,
                r = e.length;
            while (++n < r) t -= i(e[n]);
            return t
        }

        function r(e) {
            var t = d3.geom.polygon(e[0].map(u)),
                n = t.area(),
                r = t.centroid(n < 0 ? (n *= -1, 1) : -1),
                i = r[0],
                s = r[1],
                o = n,
                a = 0,
                f = e.length;
            while (++a < f) t = d3.geom.polygon(e[a].map(u)), n = t.area(), r = t.centroid(n < 0 ? (n *= -1, 1) : -1), i -= r[0], s -= r[1], o -= n;
            return [i, s, 6 * o]
        }

        function i(e) {
            return Math.abs(d3.geom.polygon(e.map(u)).area())
        }
        var s = 4.5,
            o = Ur(s),
            u = d3.geo.albersUsa(),
            a = [],
            f = Rr({
                FeatureCollection: function(e) {
                    var t = e.features,
                        n = -1,
                        r = t.length;
                    while (++n < r) a.push(f(t[n].geometry))
                },
                Feature: function(e) {
                    f(e.geometry)
                },
                Point: function(e) {
                    a.push("M", t(e.coordinates), o)
                },
                MultiPoint: function(e) {
                    var n = e.coordinates,
                        r = -1,
                        i = n.length;
                    while (++r < i) a.push("M", t(n[r]), o)
                },
                LineString: function(e) {
                    var n = e.coordinates,
                        r = -1,
                        i = n.length;
                    a.push("M");
                    while (++r < i) a.push(t(n[r]), "L");
                    a.pop()
                },
                MultiLineString: function(e) {
                    var n = e.coordinates,
                        r = -1,
                        i = n.length,
                        s, o, u;
                    while (++r < i) {
                        s = n[r], o = -1, u = s.length, a.push("M");
                        while (++o < u) a.push(t(s[o]), "L");
                        a.pop()
                    }
                },
                Polygon: function(e) {
                    var n = e.coordinates,
                        r = -1,
                        i = n.length,
                        s, o, u;
                    while (++r < i) {
                        s = n[r], o = -1;
                        if ((u = s.length - 1) > 0) {
                            a.push("M");
                            while (++o < u) a.push(t(s[o]), "L");
                            a[a.length - 1] = "Z"
                        }
                    }
                },
                MultiPolygon: function(e) {
                    var n = e.coordinates,
                        r = -1,
                        i = n.length,
                        s, o, u, f, l, c;
                    while (++r < i) {
                        s = n[r], o = -1, u = s.length;
                        while (++o < u) {
                            f = s[o], l = -1;
                            if ((c = f.length - 1) > 0) {
                                a.push("M");
                                while (++l < c) a.push(t(f[l]), "L");
                                a[a.length - 1] = "Z"
                            }
                        }
                    }
                },
                GeometryCollection: function(e) {
                    var t = e.geometries,
                        n = -1,
                        r = t.length;
                    while (++n < r) a.push(f(t[n]))
                }
            }),
            l = e.area = Rr({
                FeatureCollection: function(e) {
                    var t = 0,
                        n = e.features,
                        r = -1,
                        i = n.length;
                    while (++r < i) t += l(n[r]);
                    return t
                },
                Feature: function(e) {
                    return l(e.geometry)
                },
                Polygon: function(e) {
                    return n(e.coordinates)
                },
                MultiPolygon: function(e) {
                    var t = 0,
                        r = e.coordinates,
                        i = -1,
                        s = r.length;
                    while (++i < s) t += n(r[i]);
                    return t
                },
                GeometryCollection: function(e) {
                    var t = 0,
                        n = e.geometries,
                        r = -1,
                        i = n.length;
                    while (++r < i) t += l(n[r]);
                    return t
                }
            }, 0),
            c = e.centroid = Rr({
                Feature: function(e) {
                    return c(e.geometry)
                },
                Polygon: function(e) {
                    var t = r(e.coordinates);
                    return [t[0] / t[2], t[1] / t[2]]
                },
                MultiPolygon: function(e) {
                    var t = 0,
                        n = e.coordinates,
                        i, s = 0,
                        o = 0,
                        u = 0,
                        a = -1,
                        f = n.length;
                    while (++a < f) i = r(n[a]), s += i[0], o += i[1], u += i[2];
                    return [s / u, o / u]
                }
            });
        return e.projection = function(t) {
            return u = t, e
        }, e.pointRadius = function(t) {
            return typeof t == "function" ? s = t : (s = +t, o = Ur(s)), e
        }, e
    }, d3.geo.bounds = function(e) {
        var t = Infinity,
            n = Infinity,
            r = -Infinity,
            i = -Infinity;
        return zr(e, function(e, s) {
            e < t && (t = e), e > r && (r = e), s < n && (n = s), s > i && (i = s)
        }), [
            [t, n],
            [r, i]
        ]
    };
    var fo = {
        Feature: Wr,
        FeatureCollection: Xr,
        GeometryCollection: Vr,
        LineString: $r,
        MultiLineString: Jr,
        MultiPoint: $r,
        MultiPolygon: Kr,
        Point: Qr,
        Polygon: Gr
    };
    d3.geo.circle = function() {
        function e() {}

        function t(e) {
            return a.distance(e) < u
        }

        function n(e) {
            var t = -1,
                n = e.length,
                i = [],
                s, o, f, l, c;
            while (++t < n) c = a.distance(f = e[t]), c < u ? (o && i.push(ti(o, f)((l - u) / (l - c))), i.push(f), s = o = null) : (o = f, !s && i.length && (i.push(ti(i[i.length - 1], o)((u - l) / (c - l))), s = o)), l = c;
            return s = e[0], o = i[0], o && f[0] === s[0] && f[1] === s[1] && (f[0] !== o[0] || f[1] !== o[1]) && i.push(o), r(i)
        }

        function r(e) {
            var t = 0,
                n = e.length,
                r, i, s = n ? [e[0]] : e,
                o, u = a.source();
            while (++t < n) {
                o = a.source(e[t - 1])(e[t]).coordinates;
                for (r = 0, i = o.length; ++r < i;) s.push(o[r])
            }
            return a.source(u), s
        }
        var s = [0, 0],
            o = 89.99,
            u = o * ao,
            a = d3.geo.greatArc().source(s).target(i);
        e.clip = function(e) {
            return typeof s == "function" && a.source(s.apply(this, arguments)), f(e) || null
        };
        var f = Rr({
            FeatureCollection: function(e) {
                var t = e.features.map(f).filter(i);
                return t && (e = Object.create(e), e.features = t, e)
            },
            Feature: function(e) {
                var t = f(e.geometry);
                return t && (e = Object.create(e), e.geometry = t, e)
            },
            Point: function(e) {
                return t(e.coordinates) && e
            },
            MultiPoint: function(e) {
                var n = e.coordinates.filter(t);
                return n.length && {
                    type: e.type,
                    coordinates: n
                }
            },
            LineString: function(e) {
                var t = n(e.coordinates);
                return t.length && (e = Object.create(e), e.coordinates = t, e)
            },
            MultiLineString: function(e) {
                var t = e.coordinates.map(n).filter(function(e) {
                    return e.length
                });
                return t.length && (e = Object.create(e), e.coordinates = t, e)
            },
            Polygon: function(e) {
                var t = e.coordinates.map(n);
                return t[0].length && (e = Object.create(e), e.coordinates = t, e)
            },
            MultiPolygon: function(e) {
                var t = e.coordinates.map(function(e) {
                    return e.map(n)
                }).filter(function(e) {
                    return e[0].length
                });
                return t.length && (e = Object.create(e), e.coordinates = t, e)
            },
            GeometryCollection: function(e) {
                var t = e.geometries.map(f).filter(i);
                return t.length && (e = Object.create(e), e.geometries = t, e)
            }
        });
        return e.origin = function(t) {
            return arguments.length ? (s = t, typeof s != "function" && a.source(s), e) : s
        }, e.angle = function(t) {
            return arguments.length ? (u = (o = +t) * ao, e) : o
        }, d3.rebind(e, a, "precision")
    }, d3.geo.greatArc = function() {
        function e() {
            var t = e.distance.apply(this, arguments),
                r = 0,
                u = s / t,
                a = [n];
            while ((r += u) < 1) a.push(o(r));
            return a.push(i), {
                type: "LineString",
                coordinates: a
            }
        }
        var t = Yr,
            n, r = Zr,
            i, s = 6 * ao,
            o = ei();
        return e.distance = function() {
            return typeof t == "function" && o.source(n = t.apply(this, arguments)), typeof r == "function" && o.target(i = r.apply(this, arguments)), o.distance()
        }, e.source = function(r) {
            return arguments.length ? (t = r, typeof t != "function" && o.source(n = t), e) : t
        }, e.target = function(t) {
            return arguments.length ? (r = t, typeof r != "function" && o.target(i = r), e) : r
        }, e.precision = function(t) {
            return arguments.length ? (s = t * ao, e) : s / ao
        }, e
    }, d3.geo.greatCircle = d3.geo.circle, d3.geom = {}, d3.geom.contour = function(e, t) {
        var n = t || ni(e),
            r = [],
            i = n[0],
            s = n[1],
            o = 0,
            u = 0,
            a = NaN,
            f = NaN,
            l = 0;
        do l = 0, e(i - 1, s - 1) && (l += 1), e(i, s - 1) && (l += 2), e(i - 1, s) && (l += 4), e(i, s) && (l += 8), l === 6 ? (o = f === -1 ? -1 : 1, u = 0) : l === 9 ? (o = 0, u = a === 1 ? -1 : 1) : (o = lo[l], u = co[l]), o != a && u != f && (r.push([i, s]), a = o, f = u), i += o, s += u; while (n[0] != i || n[1] != s);
        return r
    };
    var lo = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN],
        co = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN];
    d3.geom.hull = function(e) {
        if (e.length < 3) return [];
        var t = e.length,
            n = t - 1,
            r = [],
            i = [],
            s, o, u = 0,
            a, f, l, c, h, p, d, v;
        for (s = 1; s < t; ++s) e[s][1] < e[u][1] ? u = s : e[s][1] == e[u][1] && (u = e[s][0] < e[u][0] ? s : u);
        for (s = 0; s < t; ++s) {
            if (s === u) continue;
            f = e[s][1] - e[u][1], a = e[s][0] - e[u][0], r.push({
                angle: Math.atan2(f, a),
                index: s
            })
        }
        r.sort(function(e, t) {
            return e.angle - t.angle
        }), d = r[0].angle, p = r[0].index, h = 0;
        for (s = 1; s < n; ++s) o = r[s].index, d == r[s].angle ? (a = e[p][0] - e[u][0], f = e[p][1] - e[u][1], l = e[o][0] - e[u][0], c = e[o][1] - e[u][1], a * a + f * f >= l * l + c * c ? r[s].index = -1 : (r[h].index = -1, d = r[s].angle, h = s, p = o)) : (d = r[s].angle, h = s, p = o);
        i.push(u);
        for (s = 0, o = 0; s < 2; ++o) r[o].index !== -1 && (i.push(r[o].index), s++);
        v = i.length;
        for (; o < n; ++o) {
            if (r[o].index === -1) continue;
            while (!ri(i[v - 2], i[v - 1], r[o].index, e)) --v;
            i[v++] = r[o].index
        }
        var m = [];
        for (s = 0; s < v; ++s) m.push(e[i[s]]);
        return m
    }, d3.geom.polygon = function(e) {
        return e.area = function() {
            var t = 0,
                n = e.length,
                r = e[n - 1][0] * e[0][1],
                i = e[n - 1][1] * e[0][0];
            while (++t < n) r += e[t - 1][0] * e[t][1], i += e[t - 1][1] * e[t][0];
            return (i - r) * .5
        }, e.centroid = function(t) {
            var n = -1,
                r = e.length,
                i = 0,
                s = 0,
                o, u = e[r - 1],
                a;
            arguments.length || (t = -1 / (6 * e.area()));
            while (++n < r) o = u, u = e[n], a = o[0] * u[1] - u[0] * o[1], i += (o[0] + u[0]) * a, s += (o[1] + u[1]) * a;
            return [i * t, s * t]
        }, e.clip = function(t) {
            var n, r = -1,
                i = e.length,
                s, o, u = e[i - 1],
                a, f, l;
            while (++r < i) {
                n = t.slice(), t.length = 0, a = e[r], f = n[(o = n.length) - 1], s = -1;
                while (++s < o) l = n[s], ii(l, u, a) ? (ii(f, u, a) || t.push(si(f, l, u, a)), t.push(l)) : ii(f, u, a) && t.push(si(f, l, u, a)), f = l;
                u = a
            }
            return t
        }, e
    }, d3.geom.voronoi = function(e) {
        var t = e.map(function() {
            return []
        });
        return oi(e, function(e) {
            var n, r, i, s, o, u;
            e.a === 1 && e.b >= 0 ? (n = e.ep.r, r = e.ep.l) : (n = e.ep.l, r = e.ep.r), e.a === 1 ? (o = n ? n.y : -1e6, i = e.c - e.b * o, u = r ? r.y : 1e6, s = e.c - e.b * u) : (i = n ? n.x : -1e6, o = e.c - e.a * i, s = r ? r.x : 1e6, u = e.c - e.a * s);
            var a = [i, o],
                f = [s, u];
            t[e.region.l.index].push(a, f), t[e.region.r.index].push(a, f)
        }), t.map(function(t, n) {
            var r = e[n][0],
                i = e[n][1];
            return t.forEach(function(e) {
                e.angle = Math.atan2(e[0] - r, e[1] - i)
            }), t.sort(function(e, t) {
                return e.angle - t.angle
            }).filter(function(e, n) {
                return !n || e.angle - t[n - 1].angle > 1e-10
            })
        })
    };
    var ho = {
        l: "r",
        r: "l"
    };
    d3.geom.delaunay = function(e) {
        var t = e.map(function() {
                return []
            }),
            n = [];
        return oi(e, function(n) {
            t[n.region.l.index].push(e[n.region.r.index])
        }), t.forEach(function(t, r) {
            var i = e[r],
                s = i[0],
                o = i[1];
            t.forEach(function(e) {
                e.angle = Math.atan2(e[0] - s, e[1] - o)
            }), t.sort(function(e, t) {
                return e.angle - t.angle
            });
            for (var u = 0, a = t.length - 1; u < a; u++) n.push([i, t[u], t[u + 1]])
        }), n
    }, d3.geom.quadtree = function(e, t, n, r, i) {
        function s(e, t, n, r, i, s) {
            if (isNaN(t.x) || isNaN(t.y)) return;
            if (e.leaf) {
                var u = e.point;
                u ? Math.abs(u.x - t.x) + Math.abs(u.y - t.y) < .01 ? o(e, t, n, r, i, s) : (e.point = null, o(e, u, n, r, i, s), o(e, t, n, r, i, s)) : e.point = t
            } else o(e, t, n, r, i, s)
        }

        function o(e, t, n, r, i, o) {
            var u = (n + i) * .5,
                a = (r + o) * .5,
                f = t.x >= u,
                l = t.y >= a,
                c = (l << 1) + f;
            e.leaf = !1, e = e.nodes[c] || (e.nodes[c] = ui()), f ? n = u : i = u, l ? r = a : o = a, s(e, t, n, r, i, o)
        }
        var u, a = -1,
            f = e.length;
        f && isNaN(e[0].x) && (e = e.map(fi));
        if (arguments.length < 5)
            if (arguments.length === 3) i = r = n, n = t;
            else {
                t = n = Infinity, r = i = -Infinity;
                while (++a < f) u = e[a], u.x < t && (t = u.x), u.y < n && (n = u.y), u.x > r && (r = u.x), u.y > i && (i = u.y);
                var l = r - t,
                    c = i - n;
                l > c ? i = n + l : r = t + c
            }
        var h = ui();
        return h.add = function(e) {
            s(h, e, t, n, r, i)
        }, h.visit = function(e) {
            ai(e, h, t, n, r, i)
        }, e.forEach(h.add), h
    }, d3.time = {};
    var po = Date,
        vo = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    li.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            mo.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            mo.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            mo.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            mo.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            mo.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            mo.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            mo.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            mo.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            mo.setTime.apply(this._, arguments)
        }
    };
    var mo = Date.prototype,
        go = "%a %b %e %H:%M:%S %Y",
        yo = "%m/%d/%y",
        bo = "%H:%M:%S",
        wo = vo,
        Eo = wo.map(ci),
        So = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        xo = So.map(ci);
    d3.time.format = function(e) {
        function t(t) {
            var r = [],
                i = -1,
                s = 0,
                o, u;
            while (++i < n) e.charCodeAt(i) == 37 && (r.push(e.substring(s, i), (u = Po[o = e.charAt(++i)]) ? u(t) : o), s = i + 1);
            return r.push(e.substring(s, i)), r.join("")
        }
        var n = e.length;
        return t.parse = function(t) {
            var n = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                },
                r = hi(n, e, t, 0);
            if (r != t.length) return null;
            "p" in n && (n.H = n.H % 12 + n.p * 12);
            var i = new po;
            return i.setFullYear(n.y, n.m, n.d), i.setHours(n.H, n.M, n.S, n.L), i
        }, t.toString = function() {
            return e
        }, t
    };
    var To = d3.format("02d"),
        No = d3.format("03d"),
        Co = d3.format("04d"),
        ko = d3.format("2d"),
        Lo = pi(wo),
        Ao = pi(Eo),
        Oo = pi(So),
        Mo = di(So),
        _o = pi(xo),
        Do = di(xo),
        Po = {
            a: function(e) {
                return Eo[e.getDay()]
            },
            A: function(e) {
                return wo[e.getDay()]
            },
            b: function(e) {
                return xo[e.getMonth()]
            },
            B: function(e) {
                return So[e.getMonth()]
            },
            c: d3.time.format(go),
            d: function(e) {
                return To(e.getDate())
            },
            e: function(e) {
                return ko(e.getDate())
            },
            H: function(e) {
                return To(e.getHours())
            },
            I: function(e) {
                return To(e.getHours() % 12 || 12)
            },
            j: function(e) {
                return No(1 + d3.time.dayOfYear(e))
            },
            L: function(e) {
                return No(e.getMilliseconds())
            },
            m: function(e) {
                return To(e.getMonth() + 1)
            },
            M: function(e) {
                return To(e.getMinutes())
            },
            p: function(e) {
                return e.getHours() >= 12 ? "PM" : "AM"
            },
            S: function(e) {
                return To(e.getSeconds())
            },
            U: function(e) {
                return To(d3.time.sundayOfYear(e))
            },
            w: function(e) {
                return e.getDay()
            },
            W: function(e) {
                return To(d3.time.mondayOfYear(e))
            },
            x: d3.time.format(yo),
            X: d3.time.format(bo),
            y: function(e) {
                return To(e.getFullYear() % 100)
            },
            Y: function(e) {
                return Co(e.getFullYear() % 1e4)
            },
            Z: _i,
            "%": function(e) {
                return "%"
            }
        },
        Ho = {
            a: vi,
            A: mi,
            b: gi,
            B: yi,
            c: bi,
            d: Ci,
            e: Ci,
            H: ki,
            I: ki,
            L: Oi,
            m: Ni,
            M: Li,
            p: Mi,
            S: Ai,
            x: wi,
            X: Ei,
            y: xi,
            Y: Si
        },
        Bo = /^\s*\d+/,
        jo = d3.map({
            am: 0,
            pm: 1
        });
    d3.time.format.utc = function(e) {
        function t(e) {
            try {
                po = li;
                var t = new po;
                return t._ = e, n(t)
            } finally {
                po = Date
            }
        }
        var n = d3.time.format(e);
        return t.parse = function(e) {
            try {
                po = li;
                var t = n.parse(e);
                return t && t._
            } finally {
                po = Date
            }
        }, t.toString = n.toString, t
    };
    var Fo = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3.time.format.iso = Date.prototype.toISOString ? Di : Fo, Di.parse = function(e) {
        var t = new Date(e);
        return isNaN(t) ? null : t
    }, Di.toString = Fo.toString, d3.time.second = Pi(function(e) {
        return new po(Math.floor(e / 1e3) * 1e3)
    }, function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 1e3)
    }, function(e) {
        return e.getSeconds()
    }), d3.time.seconds = d3.time.second.range, d3.time.seconds.utc = d3.time.second.utc.range, d3.time.minute = Pi(function(e) {
        return new po(Math.floor(e / 6e4) * 6e4)
    }, function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 6e4)
    }, function(e) {
        return e.getMinutes()
    }), d3.time.minutes = d3.time.minute.range, d3.time.minutes.utc = d3.time.minute.utc.range, d3.time.hour = Pi(function(e) {
        var t = e.getTimezoneOffset() / 60;
        return new po((Math.floor(e / 36e5 - t) + t) * 36e5)
    }, function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 36e5)
    }, function(e) {
        return e.getHours()
    }), d3.time.hours = d3.time.hour.range, d3.time.hours.utc = d3.time.hour.utc.range, d3.time.day = Pi(function(e) {
        var t = new po(1970, 0);
        return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t
    }, function(e, t) {
        e.setDate(e.getDate() + t)
    }, function(e) {
        return e.getDate() - 1
    }), d3.time.days = d3.time.day.range, d3.time.days.utc = d3.time.day.utc.range, d3.time.dayOfYear = function(e) {
        var t = d3.time.year(e);
        return Math.floor((e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
    }, vo.forEach(function(e, t) {
        e = e.toLowerCase(), t = 7 - t;
        var n = d3.time[e] = Pi(function(e) {
            return (e = d3.time.day(e)).setDate(e.getDate() - (e.getDay() + t) % 7), e
        }, function(e, t) {
            e.setDate(e.getDate() + Math.floor(t) * 7)
        }, function(e) {
            var n = d3.time.year(e).getDay();
            return Math.floor((d3.time.dayOfYear(e) + (n + t) % 7) / 7) - (n !== t)
        });
        d3.time[e + "s"] = n.range, d3.time[e + "s"].utc = n.utc.range, d3.time[e + "OfYear"] = function(e) {
            var n = d3.time.year(e).getDay();
            return Math.floor((d3.time.dayOfYear(e) + (n + t) % 7) / 7)
        }
    }), d3.time.week = d3.time.sunday, d3.time.weeks = d3.time.sunday.range, d3.time.weeks.utc = d3.time.sunday.utc.range, d3.time.weekOfYear = d3.time.sundayOfYear, d3.time.month = Pi(function(e) {
        return e = d3.time.day(e), e.setDate(1), e
    }, function(e, t) {
        e.setMonth(e.getMonth() + t)
    }, function(e) {
        return e.getMonth()
    }), d3.time.months = d3.time.month.range, d3.time.months.utc = d3.time.month.utc.range, d3.time.year = Pi(function(e) {
        return e = d3.time.day(e), e.setMonth(0, 1), e
    }, function(e, t) {
        e.setFullYear(e.getFullYear() + t)
    }, function(e) {
        return e.getFullYear()
    }), d3.time.years = d3.time.year.range, d3.time.years.utc = d3.time.year.utc.range;
    var Io = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        qo = [
            [d3.time.second, 1],
            [d3.time.second, 5],
            [d3.time.second, 15],
            [d3.time.second, 30],
            [d3.time.minute, 1],
            [d3.time.minute, 5],
            [d3.time.minute, 15],
            [d3.time.minute, 30],
            [d3.time.hour, 1],
            [d3.time.hour, 3],
            [d3.time.hour, 6],
            [d3.time.hour, 12],
            [d3.time.day, 1],
            [d3.time.day, 2],
            [d3.time.week, 1],
            [d3.time.month, 1],
            [d3.time.month, 3],
            [d3.time.year, 1]
        ],
        Ro = [
            [d3.time.format("%Y"), function(e) {
                return !0
            }],
            [d3.time.format("%B"), function(e) {
                return e.getMonth()
            }],
            [d3.time.format("%b %d"), function(e) {
                return e.getDate() != 1
            }],
            [d3.time.format("%a %d"), function(e) {
                return e.getDay() && e.getDate() != 1
            }],
            [d3.time.format("%I %p"), function(e) {
                return e.getHours()
            }],
            [d3.time.format("%I:%M"), function(e) {
                return e.getMinutes()
            }],
            [d3.time.format(":%S"), function(e) {
                return e.getSeconds()
            }],
            [d3.time.format(".%L"), function(e) {
                return e.getMilliseconds()
            }]
        ],
        Uo = d3.scale.linear(),
        zo = Ii(Ro);
    qo.year = function(e, t) {
        return Uo.domain(e.map(Ri)).ticks(t).map(qi)
    }, d3.time.scale = function() {
        return Bi(d3.scale.linear(), qo, zo)
    };
    var Wo = qo.map(function(e) {
            return [e[0].utc, e[1]]
        }),
        Xo = [
            [d3.time.format.utc("%Y"), function(e) {
                return !0
            }],
            [d3.time.format.utc("%B"), function(e) {
                return e.getUTCMonth()
            }],
            [d3.time.format.utc("%b %d"), function(e) {
                return e.getUTCDate() != 1
            }],
            [d3.time.format.utc("%a %d"), function(e) {
                return e.getUTCDay() && e.getUTCDate() != 1
            }],
            [d3.time.format.utc("%I %p"), function(e) {
                return e.getUTCHours()
            }],
            [d3.time.format.utc("%I:%M"), function(e) {
                return e.getUTCMinutes()
            }],
            [d3.time.format.utc(":%S"), function(e) {
                return e.getUTCSeconds()
            }],
            [d3.time.format.utc(".%L"), function(e) {
                return e.getUTCMilliseconds()
            }]
        ],
        Vo = Ii(Xo);
    Wo.year = function(e, t) {
        return Uo.domain(e.map(zi)).ticks(t).map(Ui)
    }, d3.time.scale.utc = function() {
        return Bi(d3.scale.linear(), Wo, Vo)
    }
})(); 