! function() {
    "use strict";

    function t(t, e, i, n) {
        return new(i || (i = Promise))((function(o, s) {
            function l(t) {
                try {
                    a(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function r(t) {
                try {
                    a(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                    t(e)
                }))).then(l, r)
            }
            a((n = n.apply(t, e || [])).next())
        }))
    }

    function e() {}

    function i(t) {
        return t()
    }

    function n() {
        return Object.create(null)
    }

    function o(t) {
        t.forEach(i)
    }

    function s(t) {
        return "function" == typeof t
    }

    function l(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    let r, a;

    function c(t, e) {
        return r || (r = document.createElement("a")), r.href = e, t === r.href
    }

    function d(t, ...i) {
        if (null == t) return e;
        const n = t.subscribe(...i);
        return n.unsubscribe ? () => n.unsubscribe() : n
    }

    function g(t, e, i) {
        t.$$.on_destroy.push(d(e, i))
    }

    function u(t, e) {
        t.appendChild(e)
    }

    function h(t, e, i) {
        const n = function(t) {
            if (!t) return document;
            const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
            if (e && e.host) return e;
            return t.ownerDocument
        }(t);
        if (!n.getElementById(e)) {
            const t = m("style");
            t.id = e, t.textContent = i,
                function(t, e) {
                    u(t.head || t, e), e.sheet
                }(n, t)
        }
    }

    function f(t, e, i) {
        t.insertBefore(e, i || null)
    }

    function p(t) {
        t.parentNode && t.parentNode.removeChild(t)
    }

    function m(t) {
        return document.createElement(t)
    }

    function v(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function x(t) {
        return document.createTextNode(t)
    }

    function w() {
        return x(" ")
    }

    function $(t, e, i, n) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n)
    }

    function C(t, e, i) {
        null == i ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i)
    }

    function b(t, e) {
        e = "" + e, t.wholeText !== e && (t.data = e)
    }

    function _(t, e) {
        t.value = null == e ? "" : e
    }

    function y(t, e, i) {
        t.classList[i ? "add" : "remove"](e)
    }

    function j(t) {
        a = t
    }

    function z() {
        if (!a) throw new Error("Function called outside component initialization");
        return a
    }

    function M(t, e) {
        const i = t.$$.callbacks[e.type];
        i && i.slice().forEach((t => t.call(this, e)))
    }
    const H = [],
        k = [],
        L = [],
        E = [],
        V = Promise.resolve();
    let I = !1;

    function D() {
        I || (I = !0, V.then(Z))
    }

    function A(t) {
        L.push(t)
    }
    const S = new Set;
    let T = 0;

    function Z() {
        if (0 !== T) return;
        const t = a;
        do {
            try {
                for (; T < H.length;) {
                    const t = H[T];
                    T++, j(t), F(t.$$)
                }
            } catch (t) {
                throw H.length = 0, T = 0, t
            }
            for (j(null), H.length = 0, T = 0; k.length;) k.pop()();
            for (let t = 0; t < L.length; t += 1) {
                const e = L[t];
                S.has(e) || (S.add(e), e())
            }
            L.length = 0
        } while (H.length);
        for (; E.length;) E.pop()();
        I = !1, S.clear(), j(t)
    }

    function F(t) {
        if (null !== t.fragment) {
            t.update(), o(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
        }
    }
    const P = new Set;
    let O;

    function N() {
        O = {
            r: 0,
            c: [],
            p: O
        }
    }

    function B() {
        O.r || o(O.c), O = O.p
    }

    function U(t, e) {
        t && t.i && (P.delete(t), t.i(e))
    }

    function R(t, e, i, n) {
        if (t && t.o) {
            if (P.has(t)) return;
            P.add(t), O.c.push((() => {
                P.delete(t), n && (i && t.d(1), n())
            })), t.o(e)
        } else n && n()
    }

    function G(t) {
        t && t.c()
    }

    function q(t, e, n, l) {
        const {
            fragment: r,
            after_update: a
        } = t.$$;
        r && r.m(e, n), l || A((() => {
            const e = t.$$.on_mount.map(i).filter(s);
            t.$$.on_destroy ? t.$$.on_destroy.push(...e) : o(e), t.$$.on_mount = []
        })), a.forEach(A)
    }

    function J(t, e) {
        const i = t.$$;
        null !== i.fragment && (o(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = [])
    }

    function K(t, i, s, l, r, c, d, g = [-1]) {
        const u = a;
        j(t);
        const h = t.$$ = {
            fragment: null,
            ctx: [],
            props: c,
            update: e,
            not_equal: r,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(i.context || (u ? u.$$.context : [])),
            callbacks: n(),
            dirty: g,
            skip_bound: !1,
            root: i.target || u.$$.root
        };
        d && d(h.root);
        let f = !1;
        if (h.ctx = s ? s(t, i.props || {}, ((e, i, ...n) => {
                const o = n.length ? n[0] : i;
                return h.ctx && r(h.ctx[e], h.ctx[e] = o) && (!h.skip_bound && h.bound[e] && h.bound[e](o), f && function(t, e) {
                    -1 === t.$$.dirty[0] && (H.push(t), D(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
                }(t, e)), i
            })) : [], h.update(), f = !0, o(h.before_update), h.fragment = !!l && l(h.ctx), i.target) {
            if (i.hydrate) {
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(i.target);
                h.fragment && h.fragment.l(t), t.forEach(p)
            } else h.fragment && h.fragment.c();
            i.intro && U(t.$$.fragment), q(t, i.target, i.anchor, i.customElement), Z()
        }
        j(u)
    }
    class X {
        $destroy() {
            J(this, 1), this.$destroy = e
        }
        $on(t, i) {
            if (!s(i)) return e;
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return n.push(i), () => {
                const t = n.indexOf(i); - 1 !== t && n.splice(t, 1)
            }
        }
        $set(t) {
            var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
        }
    }
    const Q = [];

    function W(t, i = e) {
        let n;
        const o = new Set;

        function s(e) {
            if (l(t, e) && (t = e, n)) {
                const e = !Q.length;
                for (const e of o) e[1](), Q.push(e, t);
                if (e) {
                    for (let t = 0; t < Q.length; t += 2) Q[t][0](Q[t + 1]);
                    Q.length = 0
                }
            }
        }
        return {
            set: s,
            update: function(e) {
                s(e(t))
            },
            subscribe: function(l, r = e) {
                const a = [l, r];
                return o.add(a), 1 === o.size && (n = i(s) || e), l(t), () => {
                    o.delete(a), 0 === o.size && (n(), n = null)
                }
            }
        }
    }
    const Y = "https://app-api.chatfuel.com/",
        tt = Symbol(),
        et = () => {
            return t = tt, z().$$.context.get(t);
            var t
        },
        it = {
            ActiveDialog: "chatfuel-ai-widget_active-dialog"
        },
        nt = (t, e, i, n) => fetch(new URL(t, n || Y), {
            method: e,
            body: i ? JSON.stringify(i) : void 0,
            headers: i ? {
                "Content-Type": "application/json"
            } : void 0
        }).then((t => t.json())),
        ot = () => {
            const t = document.createElement("div");
            return t.style.position = "fixed", t.style.width = "0", t.style.height = "0", t.style.zIndex = "99999", t.className = "chatfuel-ai-widget", document.body.appendChild(t), t
        },
        st = t => `--mainColor:${t.mainColor};--secondaryColor:${t.secondaryColor}`;

    function lt(t) {
        let i, n, o;
        return {
            c() {
                i = v("svg"), n = v("circle"), o = v("path"), C(n, "cx", "32"), C(n, "cy", "32"), C(n, "r", "32"), C(n, "fill", "var(--mainColor)"), C(o, "fill-rule", "evenodd"), C(o, "clip-rule", "evenodd"), C(o, "d", "M33.9284 44.6022C40.3569 43.8082 45.3335 38.3272 45.3335 31.6839C45.3335 24.4947 39.5055 18.6667 32.3163 18.6667C25.1271 18.6667 19.2992 24.4947 19.2992 31.6839C19.2992 32.8351 19.4486 33.9515 19.7292 35.0146C19.8356 35.5696 19.9736 36.1063 20.1416 36.6233C20.9032 40.3874 19.3534 44.8018 18.6667 44.8018H32.3729L33.6737 44.6407C33.7662 44.631 33.8509 44.6181 33.9284 44.6022Z"), C(o, "fill", "var(--secondaryColor)"), C(i, "width", "64"), C(i, "height", "64"), C(i, "viewBox", "0 0 64 64"), C(i, "fill", "none"), C(i, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(t, e) {
                f(t, i, e), u(i, n), u(i, o)
            },
            p: e,
            i: e,
            o: e,
            d(t) {
                t && p(i)
            }
        }
    }
    class rt extends X {
        constructor(t) {
            super(), K(this, t, null, lt, l, {})
        }
    }

    function at(t) {
        h(t, "svelte-tte8gc", ".cfai-widget__open-btn.svelte-tte8gc{position:fixed;bottom:16px;right:16px;width:64px;height:64px;color:var(--mainColor);cursor:pointer}.cfai-widget__open-btn.svelte-tte8gc:hover{filter:brightness(90%)}")
    }

    function ct(t) {
        let i, n, s, l, r;
        return n = new rt({}), {
            c() {
                i = m("div"), G(n.$$.fragment), C(i, "class", "cfai-widget__open-btn svelte-tte8gc"), C(i, "role", "button")
            },
            m(e, o) {
                f(e, i, o), q(n, i, null), s = !0, l || (r = [$(i, "click", t[0]), $(i, "keydown", t[1])], l = !0)
            },
            p: e,
            i(t) {
                s || (U(n.$$.fragment, t), s = !0)
            },
            o(t) {
                R(n.$$.fragment, t), s = !1
            },
            d(t) {
                t && p(i), J(n), l = !1, o(r)
            }
        }
    }

    function dt(t) {
        return [function(e) {
            M.call(this, t, e)
        }, function(e) {
            M.call(this, t, e)
        }]
    }
    class gt extends X {
        constructor(t) {
            super(), K(this, t, dt, ct, l, {}, at)
        }
    }

    function ut(t) {
        let i, n, o;
        return {
            c() {
                i = v("svg"), n = v("rect"), o = v("path"), C(n, "width", "36"), C(n, "height", "36"), C(n, "rx", "18"), C(n, "fill", "#EFF0F2"), C(o, "d", "M21.94 15L18 18.901L14.06 15L13 16.0495L18 21L23 16.0495L21.94 15Z"), C(o, "fill", "#152442"), C(i, "width", "36"), C(i, "height", "36"), C(i, "viewBox", "0 0 36 36"), C(i, "fill", "none"), C(i, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(t, e) {
                f(t, i, e), u(i, n), u(i, o)
            },
            p: e,
            i: e,
            o: e,
            d(t) {
                t && p(i)
            }
        }
    }
    class ht extends X {
        constructor(t) {
            super(), K(this, t, null, ut, l, {})
        }
    }

    function ft(t) {
        h(t, "svelte-dtuycc", ".cfai-widget__close-btn.svelte-dtuycc{background:#eff0f2;cursor:pointer;border-radius:20px;width:36px;height:36px}")
    }

    function pt(t) {
        let i, n, s, l, r;
        return n = new ht({}), {
            c() {
                i = m("div"), G(n.$$.fragment), C(i, "class", "cfai-widget__close-btn svelte-dtuycc"), C(i, "role", "button")
            },
            m(e, o) {
                f(e, i, o), q(n, i, null), s = !0, l || (r = [$(i, "click", t[0]), $(i, "keydown", t[1])], l = !0)
            },
            p: e,
            i(t) {
                s || (U(n.$$.fragment, t), s = !0)
            },
            o(t) {
                R(n.$$.fragment, t), s = !1
            },
            d(t) {
                t && p(i), J(n), l = !1, o(r)
            }
        }
    }

    function mt(t) {
        return [function(e) {
            M.call(this, t, e)
        }, function(e) {
            M.call(this, t, e)
        }]
    }
    class vt extends X {
        constructor(t) {
            super(), K(this, t, mt, pt, l, {}, ft)
        }
    }

    function xt(t) {
        h(t, "svelte-1m8scsx", ".cfai-widget__loader.svelte-1m8scsx.svelte-1m8scsx{background:var(--mainColor);border-radius:16px;padding:4px 6px;display:flex;gap:8px;align-items:center;font-weight:500;font-size:15px;line-height:20px;color:var(--secondaryColor);position:absolute;left:50%;top:76px;transform:translateX(-50%)}@keyframes svelte-1m8scsx-circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.cfai-widget__loader.svelte-1m8scsx>svg.svelte-1m8scsx{animation:svelte-1m8scsx-circle 1.5s linear infinite}.cfai-widget__loader.svelte-1m8scsx>span.svelte-1m8scsx{padding-right:8px}")
    }

    function wt(t) {
        let e, i;
        return {
            c() {
                e = m("span"), i = x(t[0]), C(e, "class", "svelte-1m8scsx")
            },
            m(t, n) {
                f(t, e, n), u(e, i)
            },
            p(t, e) {
                1 & e && b(i, t[0])
            },
            d(t) {
                t && p(e)
            }
        }
    }

    function $t(t) {
        let i, n, o, s, l = t[0] && wt(t);
        return {
            c() {
                i = m("div"), n = v("svg"), o = v("path"), s = w(), l && l.c(), C(o, "d", "M20.3333 12C20.3333 7.39765 16.6023 3.66669 12 3.66669C7.39759 3.66669 3.66663 7.39765 3.66663 12C3.66663 16.6024 7.39759 20.3334 12 20.3334C14.0926 20.3334 16.0052 19.562 17.4687 18.288"), C(o, "stroke", "var(--secondaryColor)"), C(o, "stroke-width", "3"), C(n, "width", "24"), C(n, "height", "24"), C(n, "viewBox", "0 0 24 24"), C(n, "fill", "none"), C(n, "xmlns", "http://www.w3.org/2000/svg"), C(n, "class", "svelte-1m8scsx"), C(i, "class", "cfai-widget__loader svelte-1m8scsx")
            },
            m(t, e) {
                f(t, i, e), u(i, n), u(n, o), u(i, s), l && l.m(i, null)
            },
            p(t, [e]) {
                t[0] ? l ? l.p(t, e) : (l = wt(t), l.c(), l.m(i, null)) : l && (l.d(1), l = null)
            },
            i: e,
            o: e,
            d(t) {
                t && p(i), l && l.d()
            }
        }
    }

    function Ct(t, e, i) {
        let {
            label: n
        } = e;
        return t.$$set = t => {
            "label" in t && i(0, n = t.label)
        }, [n]
    }
    class bt extends X {
        constructor(t) {
            super(), K(this, t, Ct, $t, l, {
                label: 0
            }, xt)
        }
    }

    function _t(t) {
        let i, n, o, s, l;
        return {
            c() {
                i = v("svg"), n = v("path"), o = v("path"), s = v("path"), l = v("path"), C(n, "fill-rule", "evenodd"), C(n, "clip-rule", "evenodd"), C(n, "d", ""), C(n, "fill", "#152442"), C(o, "d", ""), C(o, "fill", "#6558F6"), C(s, "d", ""), C(s, "fill", "#FAFAFA"), C(l, "d", ""), C(l, "fill", "#FAFAFA"), C(i, "width", "118"), C(i, "height", "21"), C(i, "viewBox", "0 0 118 21"), C(i, "fill", "none"), C(i, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(t, e) {
                f(t, i, e), u(i, n), u(i, o), u(i, s), u(i, l)
            },
            p: e,
            i: e,
            o: e,
            d(t) {
                t && p(i)
            }
        }
    }
    class yt extends X {
        constructor(t) {
            super(), K(this, t, null, _t, l, {})
        }
    }

    function jt(t) {
        let i, n;
        return {
            c() {
                i = v("svg"), n = v("path"), C(n, "fill-rule", "evenodd"), C(n, "clip-rule", "evenodd"), C(n, "d", "M9 15.75C13.5563 15.75 17.25 12.3921 17.25 8.25C17.25 4.10786 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.10786 0.75 8.25C0.75 10.8897 2.25012 13.2109 4.51764 14.5475V17.2498L7.55937 15.636C8.02718 15.7109 8.50857 15.75 9 15.75ZM4.95 9.83738C5.61274 9.83738 6.15 9.30012 6.15 8.63738C6.15 7.97464 5.61274 7.43738 4.95 7.43738C4.28726 7.43738 3.75 7.97464 3.75 8.63738C3.75 9.30012 4.28726 9.83738 4.95 9.83738ZM10.275 8.63738C10.275 9.30012 9.73774 9.83738 9.075 9.83738C8.41226 9.83738 7.875 9.30012 7.875 8.63738C7.875 7.97464 8.41226 7.43738 9.075 7.43738C9.73774 7.43738 10.275 7.97464 10.275 8.63738ZM13.2 9.83738C13.8627 9.83738 14.4 9.30012 14.4 8.63738C14.4 7.97464 13.8627 7.43738 13.2 7.43738C12.5373 7.43738 12 7.97464 12 8.63738C12 9.30012 12.5373 9.83738 13.2 9.83738Z"), C(n, "fill", "var(--secondaryColor)"), C(i, "width", "18"), C(i, "height", "18"), C(i, "viewBox", "0 0 18 18"), C(i, "fill", "none"), C(i, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(t, e) {
                f(t, i, e), u(i, n)
            },
            p: e,
            i: e,
            o: e,
            d(t) {
                t && p(i)
            }
        }
    }
    class zt extends X {
        constructor(t) {
            super(), K(this, t, null, jt, l, {})
        }
    }

    function Mt(t) {
        h(t, "svelte-1kcuuiv", ".cfai-widget__avatar.svelte-1kcuuiv{border-radius:50%;overflow:hidden}")
    }

    function Ht(t) {
        let e, i, n;
        return {
            c() {
                e = v("svg"), i = v("circle"), n = v("path"), C(i, "cx", "20"), C(i, "cy", "20"), C(i, "r", "20"), C(i, "fill", "var(--mainColor)"), C(n, "fill-rule", "evenodd"), C(n, "clip-rule", "evenodd"), C(n, "d", "M24.3767 26.2131C25.4353 25.6304 26.2851 24.7842 26.8703 23.7301C26.8976 23.681 26.9243 23.6313 26.9505 23.5812L30.625 26.4957C29.6557 28.0309 28.3308 29.2908 26.7376 30.1883C24.9941 31.1706 22.9294 31.7188 20.6581 31.7188H20.5187C18.2474 31.7188 16.1827 31.1706 14.4391 30.1883C12.6956 29.2061 11.2733 27.7899 10.2869 26.0538C9.30053 24.3177 8.75 22.2617 8.75 20C8.75 17.7383 9.30053 15.6823 10.2869 13.9462C11.2733 12.2101 12.6956 10.7939 14.4391 9.81166C16.1827 8.82944 18.2474 8.28125 20.5187 8.28125H20.6581C22.9294 8.28125 24.9941 8.82944 26.7376 9.81166C28.122 10.5915 29.3038 11.645 30.2257 12.915L26.5813 15.7978C26.0184 14.9614 25.2723 14.2798 24.3767 13.7869C23.3182 13.2042 22.0509 12.885 20.6307 12.885H20.5461C19.1259 12.885 17.8586 13.2042 16.8001 13.7869C15.7415 14.3696 14.8917 15.2158 14.3065 16.2699C13.7213 17.3239 13.4008 18.5859 13.4008 20C13.4008 20.9041 13.5318 21.746 13.7793 22.5112C14.2059 24.63 13.3377 27.115 12.9531 27.115C12.9531 27.115 15.5123 27.115 20.6307 27.115H21.3594C22.4865 26.9956 23.5028 26.6942 24.3767 26.2131Z"), C(n, "fill", "var(--secondaryColor)"), C(e, "width", t[2]), C(e, "height", t[3]), C(e, "viewBox", "0 0 40 40"), C(e, "fill", "none"), C(e, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(t, o) {
                f(t, e, o), u(e, i), u(e, n)
            },
            p(t, i) {
                4 & i && C(e, "width", t[2]), 8 & i && C(e, "height", t[3])
            },
            d(t) {
                t && p(e)
            }
        }
    }

    function kt(t) {
        let e, i, n;
        return {
            c() {
                e = m("img"), C(e, "width", t[2]), C(e, "height", t[3]), C(e, "alt", t[0]), c(e.src, i = t[1]) || C(e, "src", i), C(e, "style", n = `min-width:${t[2]}px;`), C(e, "class", "cfai-widget__avatar svelte-1kcuuiv")
            },
            m(t, i) {
                f(t, e, i)
            },
            p(t, o) {
                4 & o && C(e, "width", t[2]), 8 & o && C(e, "height", t[3]), 1 & o && C(e, "alt", t[0]), 2 & o && !c(e.src, i = t[1]) && C(e, "src", i), 4 & o && n !== (n = `min-width:${t[2]}px;`) && C(e, "style", n)
            },
            d(t) {
                t && p(e)
            }
        }
    }

    function Lt(t) {
        let i;

        function n(t, e) {
            return t[1] ? kt : Ht
        }
        let o = n(t),
            s = o(t);
        return {
            c() {
                s.c(), i = x("")
            },
            m(t, e) {
                s.m(t, e), f(t, i, e)
            },
            p(t, [e]) {
                o === (o = n(t)) && s ? s.p(t, e) : (s.d(1), s = o(t), s && (s.c(), s.m(i.parentNode, i)))
            },
            i: e,
            o: e,
            d(t) {
                s.d(t), t && p(i)
            }
        }
    }

    function Et(t, e, i) {
        let {
            company: n
        } = e, {
            photo: o
        } = e, {
            width: s
        } = e, {
            height: l
        } = e;
        return t.$$set = t => {
            "company" in t && i(0, n = t.company), "photo" in t && i(1, o = t.photo), "width" in t && i(2, s = t.width), "height" in t && i(3, l = t.height)
        }, [n, o, s, l]
    }
    class Vt extends X {
        constructor(t) {
            super(), K(this, t, Et, Lt, l, {
                company: 0,
                photo: 1,
                width: 2,
                height: 3
            }, Mt)
        }
    }

    function It(t) {
        h(t, "svelte-1hgujw0", ".cfai-widget__create.svelte-1hgujw0.svelte-1hgujw0{flex-grow:1;display:flex;flex-direction:column;padding:20px}.cfai-widget__create-logo.svelte-1hgujw0.svelte-1hgujw0{display:flex;align-items:center;gap:6px;font-weight:500;font-size:18px;line-height:24px}.cfai-widget__create-content.svelte-1hgujw0.svelte-1hgujw0{flex-grow:1;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:24px;line-height:32px;text-align:center;letter-spacing:0.3px}.cfai-widget__create-content.svelte-1hgujw0>div.svelte-1hgujw0{display:flex;flex-direction:column;gap:12px;align-items:center}.cfai-widget__create-tos.svelte-1hgujw0.svelte-1hgujw0{margin-top:16px;font-size:12px;line-height:16px;text-align:center;color:#5b677d}.cfai-widget__create-tos.svelte-1hgujw0>a.svelte-1hgujw0{text-decoration:none;color:#208ef0}.cfai-widget__create-button.svelte-1hgujw0.svelte-1hgujw0{border:none;display:flex;justify-content:center;align-items:center;padding:12px 20px;cursor:pointer;gap:6px;width:100%;background:var(--mainColor);border-radius:4px;font-weight:500;font-size:15px;line-height:20px;color:var(--secondaryColor);max-width:100%}.cfai-widget__create-button.svelte-1hgujw0.svelte-1hgujw0:hover{filter:brightness(90%)}")
    }

    function Dt(t) {
        let e, i, n, o, l, r, a, c, d, g, h, v, _, y, j, z, M, H, k, L, E, V, I, D, A, S, T, Z, F, P, O, N, B, K, X, Q, W, Y, tt, et, it, nt, ot = t[3]("powered-by"),
            st = t[3]("chat-with") + "",
            lt = t[3]("you-agree") + "",
            rt = t[3]("cf-ai") + "",
            at = t[3]("and") + "";
        return a = new yt({}), h = new Vt({
            props: {
                width: 60,
                height: 60,
                company: t[1],
                photo: t[2]
            }
        }), E = new zt({}), {
            c() {
                e = m("div"), i = m("div"), n = x(ot), o = w(), l = x(" "), r = w(), G(a.$$.fragment), c = w(), d = m("div"), g = m("div"), G(h.$$.fragment), v = w(), _ = x(st), y = w(), j = x(" "), z = w(), M = x(t[1]), H = w(), k = m("div"), L = m("button"), G(E.$$.fragment), V = w(), I = m("span"), I.textContent = `${t[3]("start-chat")}`, D = w(), A = m("div"), S = x(lt), T = w(), Z = m("br"), F = w(), P = x(rt), O = w(), N = x(" "), B = w(), K = m("a"), K.textContent = `${t[3]("terms")}`, X = w(), Q = x(at), W = w(), Y = m("a"), Y.textContent = `${t[3]("policy")}`, tt = x("."), C(i, "class", "cfai-widget__create-logo svelte-1hgujw0"), C(g, "class", "svelte-1hgujw0"), C(d, "class", "cfai-widget__create-content svelte-1hgujw0"), C(L, "class", "cfai-widget__create-button svelte-1hgujw0"), C(K, "href", "https://app.chatfuel.com/docs/TermsOfUse.pdf"), C(K, "target", "_blank"), C(K, "rel", "noreferrer"), C(K, "class", "svelte-1hgujw0"), C(Y, "target", "_blank"), C(Y, "rel", "noreferrer"), C(Y, "href", "https://chatfuel.com/files/PrivacyPolicy.pdf"), C(Y, "class", "svelte-1hgujw0"), C(A, "class", "cfai-widget__create-tos svelte-1hgujw0"), C(e, "class", "cfai-widget__create svelte-1hgujw0")
            },
            m(p, m) {
                f(p, e, m), u(e, i), u(i, n), u(i, o), u(i, l), u(i, r), q(a, i, null), u(e, c), u(e, d), u(d, g), q(h, g, null), u(g, v), u(g, _), u(g, y), u(g, j), u(g, z), u(g, M), u(e, H), u(e, k), u(k, L), q(E, L, null), u(L, V), u(L, I), u(k, D), u(k, A), u(A, S), u(A, T), u(A, Z), u(A, F), u(A, P), u(A, O), u(A, N), u(A, B), u(A, K), u(A, X), u(A, Q), u(A, W), u(A, Y), u(A, tt), et = !0, it || (nt = $(L, "click", (function() {
                    s(t[0]) && t[0].apply(this, arguments)
                })), it = !0)
            },
            p(e, [i]) {
                t = e;
                const n = {};
                2 & i && (n.company = t[1]), 4 & i && (n.photo = t[2]), h.$set(n), (!et || 2 & i) && b(M, t[1])
            },
            i(t) {
                et || (U(a.$$.fragment, t), U(h.$$.fragment, t), U(E.$$.fragment, t), et = !0)
            },
            o(t) {
                R(a.$$.fragment, t), R(h.$$.fragment, t), R(E.$$.fragment, t), et = !1
            },
            d(t) {
                t && p(e), J(a), J(h), J(E), it = !1, nt()
            }
        }
    }

    function At(t, e, i) {
        let {
            onCreateDialog: n
        } = e, {
            company: o
        } = e, {
            photo: s
        } = e;
        const {
            translate: l
        } = et();
        return t.$$set = t => {
            "onCreateDialog" in t && i(0, n = t.onCreateDialog), "company" in t && i(1, o = t.company), "photo" in t && i(2, s = t.photo)
        }, [n, o, s, l]
    }
    class St extends X {
        constructor(t) {
            super(), K(this, t, At, Dt, l, {
                onCreateDialog: 0,
                company: 1,
                photo: 2
            }, It)
        }
    }

    function Tt(t) {
        let i, n;
        return {
            c() {
                i = v("svg"), n = v("path"), C(n, "d", "M12.0193 11.7199C11.8687 10.6732 12.6215 10.2246 13.5249 10.6732L25.4191 16.2057C27.527 17.2524 27.527 18.7476 25.4191 19.7943L13.5249 25.3268C12.6215 25.7754 11.8687 25.3268 12.0193 24.2801L12.3204 20.841C12.471 20.0934 13.0732 19.3457 13.826 19.1962L20.3001 18.1495C21.0529 18 21.0529 17.8505 20.3001 17.7009L13.9766 16.8038C13.2238 16.6543 12.471 15.9066 12.471 15.159L12.0193 11.7199Z"), C(n, "fill", "currentColor"), C(i, "width", "36"), C(i, "height", "36"), C(i, "viewBox", "0 0 36 36"), C(i, "fill", "none"), C(i, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(t, e) {
                f(t, i, e), u(i, n)
            },
            p: e,
            i: e,
            o: e,
            d(t) {
                t && p(i)
            }
        }
    }
    class Zt extends X {
        constructor(t) {
            super(), K(this, t, null, Tt, l, {})
        }
    }

    function Ft(t) {
        h(t, "svelte-xdn1rk", ".cfai-widget__message.svelte-xdn1rk{padding:12px;width:100%}.cfai-widget__dialog-in.svelte-xdn1rk{background:#eff0f2;border-radius:18px 18px 18px 0px;color:#152442;margin-right:10%}.cfai-widget__dialog-out.svelte-xdn1rk{background:var(--mainColor);border-radius:18px 18px 0px 18px;color:var(--secondaryColor);margin-left:10%}.cfai-widget__message-processing.svelte-xdn1rk{filter:grayscale(15%) brightness(80%)}.cfai-widget__message-box.svelte-xdn1rk{display:flex;align-items:end}.cfai-widget__message-avatar.svelte-xdn1rk{margin-right:4px}")
    }

    function Pt(t) {
        let e, i, n;
        return i = new Vt({
            props: {
                width: 24,
                height: 24,
                company: t[2],
                photo: t[3]
            }
        }), {
            c() {
                e = m("div"), G(i.$$.fragment), C(e, "class", "cfai-widget__message-avatar svelte-xdn1rk")
            },
            m(t, o) {
                f(t, e, o), q(i, e, null), n = !0
            },
            p(t, e) {
                const n = {};
                4 & e && (n.company = t[2]), 8 & e && (n.photo = t[3]), i.$set(n)
            },
            i(t) {
                n || (U(i.$$.fragment, t), n = !0)
            },
            o(t) {
                R(i.$$.fragment, t), n = !1
            },
            d(t) {
                t && p(e), J(i)
            }
        }
    }

    function Ot(t) {
        let e, i, n, o, s, l = !t[0] && Pt(t);
        return {
            c() {
                e = m("div"), l && l.c(), i = w(), n = m("div"), o = x(t[1]), C(n, "class", "cfai-widget__message svelte-xdn1rk"), y(n, "cfai-widget__dialog-in", !t[0]), y(n, "cfai-widget__dialog-out", t[0]), y(n, "cfai-widget__message-processing", t[4]), C(e, "class", "cfai-widget__message-box svelte-xdn1rk")
            },
            m(t, r) {
                f(t, e, r), l && l.m(e, null), u(e, i), u(e, n), u(n, o), s = !0
            },
            p(t, [r]) {
                t[0] ? l && (N(), R(l, 1, 1, (() => {
                    l = null
                })), B()) : l ? (l.p(t, r), 1 & r && U(l, 1)) : (l = Pt(t), l.c(), U(l, 1), l.m(e, i)), (!s || 2 & r) && b(o, t[1]), (!s || 1 & r) && y(n, "cfai-widget__dialog-in", !t[0]), (!s || 1 & r) && y(n, "cfai-widget__dialog-out", t[0]), (!s || 16 & r) && y(n, "cfai-widget__message-processing", t[4])
            },
            i(t) {
                s || (U(l), s = !0)
            },
            o(t) {
                R(l), s = !1
            },
            d(t) {
                t && p(e), l && l.d()
            }
        }
    }

    function Nt(t, e, i) {
        let {
            outcoming: n
        } = e, {
            text: o
        } = e, {
            company: s
        } = e, {
            photo: l
        } = e, {
            processing: r = !1
        } = e;
        return t.$$set = t => {
            "outcoming" in t && i(0, n = t.outcoming), "text" in t && i(1, o = t.text), "company" in t && i(2, s = t.company), "photo" in t && i(3, l = t.photo), "processing" in t && i(4, r = t.processing)
        }, [n, o, s, l, r]
    }
    class Bt extends X {
        constructor(t) {
            super(), K(this, t, Nt, Ot, l, {
                outcoming: 0,
                text: 1,
                company: 2,
                photo: 3,
                processing: 4
            }, Ft)
        }
    }

    function Ut(t) {
        h(t, "svelte-18zmxtj", ".cfai-widget__dialog.svelte-18zmxtj.svelte-18zmxtj{display:flex;flex-direction:column;flex-grow:1;max-height:100%;overflow:hidden}.cfai-widget__dialog-head.svelte-18zmxtj.svelte-18zmxtj{padding:0 12px;display:flex;gap:8px;align-items:center;box-shadow:0px 4px 12px rgba(12, 23, 45, 0.1);font-weight:700;font-size:18px;line-height:24px;letter-spacing:0.2px;min-height:64px;height:64px;overflow:hidden}.cfai-widget__dialog-head--small.svelte-18zmxtj.svelte-18zmxtj{font-size:15px;line-height:20px}.cfai-widget__dialog-head.svelte-18zmxtj>div.svelte-18zmxtj{overflow:hidden;text-overflow:ellipsis;max-height:48px;max-width:72%}.cfai-widget__dialog-head--small.svelte-18zmxtj>div.svelte-18zmxtj{max-height:40px}.cfai-widget__dialog-messages.svelte-18zmxtj.svelte-18zmxtj{flex-grow:1;padding:12px;font-weight:400;font-size:15px;line-height:20px;display:flex;flex-direction:column;gap:12px;max-height:100%;overflow:auto}.cfai-widget__dialog-input.svelte-18zmxtj.svelte-18zmxtj{display:flex;box-shadow:0px -4px 12px rgba(12, 23, 45, 0.1)}.cfai-widget__dialog-input-box.svelte-18zmxtj.svelte-18zmxtj{display:grid;flex-grow:1}.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj,.cfai-widget__dialog-input-box.svelte-18zmxtj.svelte-18zmxtj::after{padding:16px;border:none;outline:none;resize:none;grid-area:1 / 1 / 2 / 2}.cfai-widget__dialog-input-box.svelte-18zmxtj.svelte-18zmxtj::after{content:attr(data-replicatedValue) ' ';white-space:pre-wrap;visibility:hidden;max-height:80px}.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj,.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj::placeholder{font-weight:500;font-size:15px;line-height:20px;font-family:'Inter', 'sans-serif'}.cfai-widget__dialog-input.svelte-18zmxtj textarea.svelte-18zmxtj::placeholder{color:#8a92a0}.cfai-widget__dialog-button-box.svelte-18zmxtj.svelte-18zmxtj{display:flex;align-items:end}.cfai-widget__dialog-input.svelte-18zmxtj button.svelte-18zmxtj{border:none;outline:none;resize:none;background:#ffffff;color:var(--mainColor);cursor:pointer;height:52px}.cfai-widget__dialog-input.svelte-18zmxtj button.svelte-18zmxtj:disabled{filter:grayscale(30%);pointer-events:none}")
    }

    function Rt(t, e, i) {
        const n = t.slice();
        return n[17] = e[i], n
    }

    function Gt(t) {
        let e, i;
        return e = new Bt({
            props: {
                company: t[5],
                photo: t[6],
                outcoming: "user" === t[17].author,
                text: t[17].text
            }
        }), {
            c() {
                G(e.$$.fragment)
            },
            m(t, n) {
                q(e, t, n), i = !0
            },
            p(t, i) {
                const n = {};
                32 & i && (n.company = t[5]), 64 & i && (n.photo = t[6]), 1024 & i && (n.outcoming = "user" === t[17].author), 1024 & i && (n.text = t[17].text), e.$set(n)
            },
            i(t) {
                i || (U(e.$$.fragment, t), i = !0)
            },
            o(t) {
                R(e.$$.fragment, t), i = !1
            },
            d(t) {
                J(e, t)
            }
        }
    }

    function qt(t) {
        let e, i;
        return e = new Bt({
            props: {
                company: t[5],
                photo: t[6],
                outcoming: !0,
                processing: !0,
                text: t[4]
            }
        }), {
            c() {
                G(e.$$.fragment)
            },
            m(t, n) {
                q(e, t, n), i = !0
            },
            p(t, i) {
                const n = {};
                32 & i && (n.company = t[5]), 64 & i && (n.photo = t[6]), 16 & i && (n.text = t[4]), e.$set(n)
            },
            i(t) {
                i || (U(e.$$.fragment, t), i = !0)
            },
            o(t) {
                R(e.$$.fragment, t), i = !1
            },
            d(t) {
                J(e, t)
            }
        }
    }

    function Jt(t) {
        let e, i, n, l, r, a, c, d, g, h, v, j, z, M, H, k, L, E, V, I, D, A, S, T;
        n = new Vt({
            props: {
                width: 40,
                height: 40,
                company: t[5],
                photo: t[6]
            }
        });
        let Z = t[10],
            F = [];
        for (let e = 0; e < Z.length; e += 1) F[e] = Gt(Rt(t, Z, e));
        const P = t => R(F[t], 1, 1, (() => {
            F[t] = null
        }));
        let O = t[4] && qt(t);
        return I = new Zt({}), {
            c() {
                e = m("div"), i = m("div"), G(n.$$.fragment), l = w(), r = m("div"), a = m("div"), c = x(t[8]), d = w(), g = m("div");
                for (let t = 0; t < F.length; t += 1) F[t].c();
                h = w(), O && O.c(), v = w(), j = m("div"), z = w(), M = m("div"), H = m("div"), k = m("textarea"), L = w(), E = m("div"), V = m("button"), G(I.$$.fragment), C(r, "class", "svelte-18zmxtj"), C(i, "class", "cfai-widget__dialog-head svelte-18zmxtj"), y(i, "cfai-widget__dialog-head--small", t[8] !== t[5]), C(g, "class", "cfai-widget__dialog-messages svelte-18zmxtj"), k.autofocus = !0, C(k, "rows", "1"), C(k, "placeholder", t[12]("type")), C(k, "class", "svelte-18zmxtj"), C(H, "class", "cfai-widget__dialog-input-box svelte-18zmxtj"), C(H, "data-replicatedvalue", t[9]), V.disabled = D = !t[9].trim().length, C(V, "class", "svelte-18zmxtj"), C(E, "class", "cfai-widget__dialog-button-box svelte-18zmxtj"), C(M, "class", "cfai-widget__dialog-input svelte-18zmxtj"), C(e, "class", "cfai-widget__dialog svelte-18zmxtj")
            },
            m(o, p) {
                f(o, e, p), u(e, i), q(n, i, null), u(i, l), u(i, r), u(r, a), u(a, c), t[14](r), u(e, d), u(e, g);
                for (let t = 0; t < F.length; t += 1) F[t].m(g, null);
                u(g, h), O && O.m(g, null), u(g, v), u(g, j), t[15](j), u(e, z), u(e, M), u(M, H), u(H, k), _(k, t[9]), u(M, L), u(M, E), u(E, V), q(I, V, null), A = !0, k.focus(), S || (T = [$(k, "input", t[16]), $(k, "keydown", t[13]), $(V, "click", (function() {
                    s(t[3]) && t[3].apply(this, arguments)
                }))], S = !0)
            },
            p(e, [o]) {
                t = e;
                const s = {};
                if (32 & o && (s.company = t[5]), 64 & o && (s.photo = t[6]), n.$set(s), (!A || 256 & o) && b(c, t[8]), (!A || 288 & o) && y(i, "cfai-widget__dialog-head--small", t[8] !== t[5]), 1120 & o) {
                    let e;
                    for (Z = t[10], e = 0; e < Z.length; e += 1) {
                        const i = Rt(t, Z, e);
                        F[e] ? (F[e].p(i, o), U(F[e], 1)) : (F[e] = Gt(i), F[e].c(), U(F[e], 1), F[e].m(g, h))
                    }
                    for (N(), e = Z.length; e < F.length; e += 1) P(e);
                    B()
                }
                t[4] ? O ? (O.p(t, o), 16 & o && U(O, 1)) : (O = qt(t), O.c(), U(O, 1), O.m(g, v)) : O && (N(), R(O, 1, 1, (() => {
                    O = null
                })), B()), 512 & o && _(k, t[9]), (!A || 512 & o) && C(H, "data-replicatedvalue", t[9]), (!A || 512 & o && D !== (D = !t[9].trim().length)) && (V.disabled = D)
            },
            i(t) {
                if (!A) {
                    U(n.$$.fragment, t);
                    for (let t = 0; t < Z.length; t += 1) U(F[t]);
                    U(O), U(I.$$.fragment, t), A = !0
                }
            },
            o(t) {
                R(n.$$.fragment, t), F = F.filter(Boolean);
                for (let t = 0; t < F.length; t += 1) R(F[t]);
                R(O), R(I.$$.fragment, t), A = !1
            },
            d(i) {
                i && p(e), J(n), t[14](null),
                    function(t, e) {
                        for (let i = 0; i < t.length; i += 1) t[i] && t[i].d(e)
                    }(F, i), O && O.d(), t[15](null), J(I), S = !1, o(T)
            }
        }
    }

    function Kt(t, i, n) {
        let o, s, l, r = e,
            a = () => (r(), r = d(m, (t => n(9, o = t))), m),
            c = e,
            g = () => (c(), c = d(f, (t => n(10, s = t))), f),
            u = e,
            h = () => (u(), u = d(p, (t => n(11, l = t))), p);
        t.$$.on_destroy.push((() => r())), t.$$.on_destroy.push((() => c())), t.$$.on_destroy.push((() => u()));
        let {
            messages: f
        } = i;
        g();
        let {
            scrollToAnchor: p
        } = i;
        h();
        let {
            newMessageText: m
        } = i;
        a();
        let {
            onMessageSend: v
        } = i, {
            sendingMessage: x
        } = i, {
            company: w
        } = i, {
            photo: $
        } = i, C = null, b = w;
        const {
            translate: _
        } = et();
        return t.$$set = t => {
            "messages" in t && g(n(0, f = t.messages)), "scrollToAnchor" in t && h(n(1, p = t.scrollToAnchor)), "newMessageText" in t && a(n(2, m = t.newMessageText)), "onMessageSend" in t && n(3, v = t.onMessageSend), "sendingMessage" in t && n(4, x = t.sendingMessage), "company" in t && n(5, w = t.company), "photo" in t && n(6, $ = t.photo)
        }, t.$$.update = () => {
            if (160 & t.$$.dirty && C) {
                const t = C.clientHeight / C.querySelector("div").offsetHeight;
                if (t < 1) {
                    const e = w.split("");
                    n(8, b = e.slice(0, Math.ceil(e.length * (t / .9))).join("").trim().concat("..."))
                }
            }
        }, [f, p, m, v, x, w, $, C, b, o, s, l, _, t => {
            var e;
            (null === (e = window.matchMedia("(pointer: coarse)")) || void 0 === e ? void 0 : e.matches) || 13 !== t.keyCode || t.shiftKey || !o.trim().length || (t.preventDefault(), t.stopPropagation(), v())
        }, function(t) {
            k[t ? "unshift" : "push"]((() => {
                C = t, n(7, C)
            }))
        }, function(t) {
            k[t ? "unshift" : "push"]((() => {
                l = t, p.set(l)
            }))
        }, function() {
            o = this.value, m.set(o)
        }]
    }
    class Xt extends X {
        constructor(t) {
            super(), K(this, t, Kt, Jt, l, {
                messages: 0,
                scrollToAnchor: 1,
                newMessageText: 2,
                onMessageSend: 3,
                sendingMessage: 4,
                company: 5,
                photo: 6
            }, Ut)
        }
    }

    function Qt(t) {
        h(t, "svelte-zx8smm", ".cfai-widget.svelte-zx8smm{position:fixed;color:#152442;font-family:'Inter', 'sans-serif'}.cfai-widget__chat.svelte-zx8smm{position:fixed;display:flex;flex-direction:column;bottom:88px;right:16px;background:#ffffff;border-radius:20px;max-width:372px;width:100%;max-height:520px;height:100%;overflow:hidden;z-index:10;box-shadow:0px 0px 12px 4px rgba(21, 36, 66, 0.15)}@media(max-width: 768px){.cfai-widget--visible.svelte-zx8smm{z-index:5;left:0;bottom:0;right:0;top:0;background:rgba(12, 23, 45, 0.8)}.cfai-widget__chat.svelte-zx8smm{max-height:100%;right:0;bottom:0;top:0;border-radius:20px 0 0 20px;box-shadow:none}}@media(max-width: 480px){.cfai-widget--visible.svelte-zx8smm{z-index:5;left:0;bottom:0;right:0;top:0;background:rgba(12, 23, 45, 0.8)}.cfai-widget__chat.svelte-zx8smm{max-height:100%;max-width:100%;right:0;bottom:0;top:0;border-radius:20px 20px 0 0}}.cfai-widget__close.svelte-zx8smm{position:absolute;top:14px;right:16px}")
    }

    function Wt(t) {
        let e, i, n, o, s, l, r, a, c = (t[2] || t[3]) && Yt(t);
        o = new vt({}), o.$on("click", t[16]), o.$on("keydown", t[16]);
        const d = [ee, te],
            g = [];

        function h(t, e) {
            return t[1] ? 0 : 1
        }
        return l = h(t), r = g[l] = d[l](t), {
            c() {
                e = m("div"), c && c.c(), i = w(), n = m("div"), G(o.$$.fragment), s = w(), r.c(), C(n, "class", "cfai-widget__close svelte-zx8smm"), C(e, "class", "cfai-widget__chat svelte-zx8smm")
            },
            m(t, r) {
                f(t, e, r), c && c.m(e, null), u(e, i), u(e, n), q(o, n, null), u(e, s), g[l].m(e, null), a = !0
            },
            p(t, n) {
                t[2] || t[3] ? c ? (c.p(t, n), 12 & n && U(c, 1)) : (c = Yt(t), c.c(), U(c, 1), c.m(e, i)) : c && (N(), R(c, 1, 1, (() => {
                    c = null
                })), B());
                let o = l;
                l = h(t), l === o ? g[l].p(t, n) : (N(), R(g[o], 1, 1, (() => {
                    g[o] = null
                })), B(), r = g[l], r ? r.p(t, n) : (r = g[l] = d[l](t), r.c()), U(r, 1), r.m(e, null))
            },
            i(t) {
                a || (U(c), U(o.$$.fragment, t), U(r), a = !0)
            },
            o(t) {
                R(c), R(o.$$.fragment, t), R(r), a = !1
            },
            d(t) {
                t && p(e), c && c.d(), J(o), g[l].d()
            }
        }
    }

    function Yt(t) {
        let e, i;
        return e = new bt({
            props: {
                label: t[3] ? t[13]("trying-connect") : null
            }
        }), {
            c() {
                G(e.$$.fragment)
            },
            m(t, n) {
                q(e, t, n), i = !0
            },
            p(t, i) {
                const n = {};
                8 & i && (n.label = t[3] ? t[13]("trying-connect") : null), e.$set(n)
            },
            i(t) {
                i || (U(e.$$.fragment, t), i = !0)
            },
            o(t) {
                R(e.$$.fragment, t), i = !1
            },
            d(t) {
                J(e, t)
            }
        }
    }

    function te(t) {
        let i, n;
        return i = new St({
            props: {
                onCreateDialog: t[8],
                company: t[11].title,
                photo: t[11].photo
            }
        }), {
            c() {
                G(i.$$.fragment)
            },
            m(t, e) {
                q(i, t, e), n = !0
            },
            p: e,
            i(t) {
                n || (U(i.$$.fragment, t), n = !0)
            },
            o(t) {
                R(i.$$.fragment, t), n = !1
            },
            d(t) {
                J(i, t)
            }
        }
    }

    function ee(t) {
        let e, i;
        return e = new Xt({
            props: {
                company: t[11].title,
                photo: t[11].photo,
                sendingMessage: t[4],
                scrollToAnchor: t[15],
                messages: t[5],
                newMessageText: t[14],
                onMessageSend: t[17]
            }
        }), {
            c() {
                G(e.$$.fragment)
            },
            m(t, n) {
                q(e, t, n), i = !0
            },
            p(t, i) {
                const n = {};
                16 & i && (n.sendingMessage = t[4]), e.$set(n)
            },
            i(t) {
                i || (U(e.$$.fragment, t), i = !0)
            },
            o(t) {
                R(e.$$.fragment, t), i = !1
            },
            d(t) {
                J(e, t)
            }
        }
    }

    function ie(t) {
        let e, i, n, o, s = t[0] && Wt(t);
        return n = new gt({}), n.$on("click", t[16]), n.$on("keydown", t[16]), {
            c() {
                e = m("div"), s && s.c(), i = w(), G(n.$$.fragment), C(e, "class", "cfai-widget svelte-zx8smm"), C(e, "style", st(t[11])), y(e, "cfai-widget--visible", t[0])
            },
            m(t, l) {
                f(t, e, l), s && s.m(e, null), u(e, i), q(n, e, null), o = !0
            },
            p(t, [n]) {
                t[0] ? s ? (s.p(t, n), 1 & n && U(s, 1)) : (s = Wt(t), s.c(), U(s, 1), s.m(e, i)) : s && (N(), R(s, 1, 1, (() => {
                    s = null
                })), B()), (!o || 1 & n) && y(e, "cfai-widget--visible", t[0])
            },
            i(t) {
                o || (U(s), U(n.$$.fragment, t), o = !0)
            },
            o(t) {
                R(s), R(n.$$.fragment, t), o = !1
            },
            d(t) {
                t && p(e), s && s.d(), J(n)
            }
        }
    }

    function ne(t, e, i) {
        let n, o, s, l, r, a, c, d;
        var u = this && this.__awaiter || function(t, e, i, n) {
            return new(i || (i = Promise))((function(o, s) {
                function l(t) {
                    try {
                        a(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function r(t) {
                    try {
                        a(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                        t(e)
                    }))).then(l, r)
                }
                a((n = n.apply(t, e || [])).next())
            }))
        };
        let {
            model: h
        } = e;
        const {
            messages: f,
            hasActiveDialog: p,
            sendMessage: m,
            subscribeOnMessages: v,
            unsubscribeFromMessages: x,
            hasMessagesSubscription: w,
            createDialog: $,
            isDialogLoading: C,
            isSubscriptionError: b,
            pluginConfig: _,
            sendingMessage: y,
            translate: j
        } = h;
        g(t, f, (t => i(20, n = t))), g(t, p, (t => i(1, o = t))), g(t, w, (t => i(21, s = t))), g(t, C, (t => i(2, a = t))), g(t, b, (t => i(3, c = t))), g(t, y, (t => i(4, d = t)));
        let M = !1,
            H = 0,
            k = W("");
        g(t, k, (t => i(22, l = t)));
        let L = W(null);
        var E, I;
        g(t, L, (t => i(23, r = t))), E = tt, I = {
            translate: j
        }, z().$$.context.set(E, I);
        const A = () => u(void 0, void 0, void 0, (function*() {
            yield(D(), V), null == r || r.scrollIntoView({
                behavior: "smooth"
            })
        }));
        var S;
        return S = () => x(), z().$$.on_destroy.push(S), t.$$set = t => {
            "model" in t && i(18, h = t.model)
        }, t.$$.update = () => {
            2097155 & t.$$.dirty && (s && !M ? x() : M && !s && o && v()), 1572865 & t.$$.dirty && H !== n.length && M && (i(19, H = n.length), A())
        }, [M, o, a, c, d, f, p, w, $, C, b, _, y, j, k, L, () => u(void 0, void 0, void 0, (function*() {
            const t = !M;
            i(0, M = !M), t && A()
        })), () => u(void 0, void 0, void 0, (function*() {
            const t = l.trim();
            k.set(""), yield m(t)
        })), h, H, n, s]
    }
    class oe extends X {
        constructor(t) {
            super(), K(this, t, ne, ie, l, {
                model: 18
            }, Qt)
        }
    }
    const se = new class {
        constructor() {
            this.config = null, this.projectId = null, this.translations = {}, this.projectRemoteUrl = null, this.activeDialogId = null, this.reconnectionsCount = 0, this.unsubscribeHandler = null, this.isEnabled = !1, this.messages = W([]), this.hasActiveDialog = W(!1), this.isDialogLoading = W(!1), this.sendingMessage = W(null), this.isSubscriptionError = W(!1), this.hasMessagesSubscription = W(!1), this.readActiveDialogId = () => t(this, void 0, void 0, (function*() {
                const t = window.localStorage.getItem(it.ActiveDialog);
                if (!t) return this.activeDialogId = null, void this.hasActiveDialog.set(!1);
                const [e, i] = t.split("-");
                e === this.projectId && (this.activeDialogId = i, this.hasActiveDialog.set(!0), yield this.fetchMessages())
            })), this.readProjectIdAndUrl = () => {
                const t = document.currentScript;
                t && (this.projectRemoteUrl = "https://app.chatfuel.com", this.projectId = t.getAttribute("data-project"))
            }, this.getProjectConfig = () => t(this, void 0, void 0, (function*() {
                this.config = yield nt(`/webwidget/${this.projectId}/settings`, "GET")
            })), this.fetchTranslations = () => t(this, void 0, void 0, (function*() {
                "https://raw.githubusercontent.com" && (this.translations = yield nt("/djmessaoud/nDiscIntersections/main/webwidget.json", "GET", void 0, "https://raw.githubusercontent.com"))
            })), this.fetchMessages = () => t(this, void 0, void 0, (function*() {
                if (!this.isEnabled || !this.activeDialogId || !this.projectId) return;
                const t = yield nt(`/webwidget/${this.projectId}/messages/${this.activeDialogId}`, "GET");
                this.messages.set(t || [])
            })), this.init = () => t(this, void 0, void 0, (function*() {
                var t;
                if (this.isEnabled && this.config) return;
                if (yield this.getProjectConfig(), !this.config) return;
                const e = !this.config.domains || (null === (t = this.config.domains) || void 0 === t ? void 0 : t.includes(window.location.host));
                this.isEnabled = e && this.config.enabled, this.isEnabled && (yield Promise.all([this.readActiveDialogId(), this.fetchTranslations()]))
            })), this.createDialog = () => t(this, void 0, void 0, (function*() {
                if (!this.isEnabled || !this.projectId) return;
                this.isDialogLoading.set(!0);
                const t = yield nt(`/webwidget/${this.projectId}/dialogs`, "POST", {
                    project_id: this.projectId
                });
                this.activeDialogId = t.id, this.hasActiveDialog.set(!0), window.localStorage.setItem(it.ActiveDialog, `${this.projectId}-${t.id}`), this.isDialogLoading.set(!1)
            })), this.sendMessage = e => t(this, void 0, void 0, (function*() {
                this.isEnabled && this.activeDialogId && this.projectId && (this.sendingMessage.set(e), this.isDialogLoading.set(!0), yield nt(`/webwidget/${this.projectId}/messages`, "POST", {
                    dialog_id: this.activeDialogId,
                    text: e.trim()
                }), this.isDialogLoading.set(!1), this.sendingMessage.set(null))
            })), this.subscribeOnMessages = () => t(this, void 0, void 0, (function*() {
                if (this.unsubscribeHandler && this.unsubscribeHandler(), !this.isEnabled || !this.activeDialogId || !this.projectId) return;
                const t = (e = `/webwidget/${this.projectId}/messages/subscribe?stream=messages&dialog_id=${this.activeDialogId}`, new EventSource(new URL(e, Y)));
                var e;
                this.isSubscriptionError.set(!1);
                const i = ({
                        data: t
                    }) => {
                        const {
                            message: e
                        } = JSON.parse(t);
                        this.messages.update((t => t.concat(e))), this.isSubscriptionError.set(!1), this.reconnectionsCount = 0
                    },
                    n = () => {
                        this.isSubscriptionError.set(!0), 0 === t.readyState && this.reconnectionsCount < 3 && (this.reconnectionsCount++, this.unsubscribeFromMessages(), setTimeout((() => {
                            this.subscribeOnMessages()
                        }), 1e3 * this.reconnectionsCount * Math.random()))
                    },
                    o = () => {
                        this.unsubscribeFromMessages(), this.reconnectionsCount = 0, this.subscribeOnMessages()
                    };
                t.addEventListener("message", i), t.addEventListener("error", n), window.addEventListener("online", o), this.hasMessagesSubscription.set(!0), this.unsubscribeHandler = () => {
                    t.removeEventListener("message", i), t.removeEventListener("error", n), window.removeEventListener("online", o), t.close(), this.unsubscribeHandler = null, this.hasMessagesSubscription.set(!1)
                }
            })), this.unsubscribeFromMessages = () => {
                this.unsubscribeHandler && this.unsubscribeHandler()
            }, this.translate = t => this.translations[t] || t, this.readProjectIdAndUrl()
        }
        get pluginConfig() {
            var t, e, i, n;
            return {
                title: (null === (t = this.config) || void 0 === t ? void 0 : t.title) || "",
                mainColor: (null === (e = this.config) || void 0 === e ? void 0 : e.main_color) || "#6558F6",
                secondaryColor: (null === (i = this.config) || void 0 === i ? void 0 : i.second_color) || "#ffffff",
                photo: (null === (n = this.config) || void 0 === n ? void 0 : n.photo) || ""
            }
        }
    };
    se.init().then((() => {
        se.isEnabled && ((() => {
            const t = document.createElement("link");
            t.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap", t.rel = "stylesheet", document.head.appendChild(t)
        })(), new oe({
            target: ot(),
            props: {
                model: se
            }
        }))
    })).catch((t => {
        ((...t) => {
            console.log("[Chatfuel AI plugin]", ...t)
        })(t)
    }))
}();
