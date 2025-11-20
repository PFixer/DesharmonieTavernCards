const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'https://pfixer.github.io/DesharmonieTavernCards/nodes/0.D39PYRZu.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/Bb_44-Vf.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/DOz-poEg.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/CYHURk-R.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/DL8UqIXJ.js',
      'https://pfixer.github.io/DesharmonieTavernCards/assets/app.sC44z-Mt.css',
      'https://pfixer.github.io/DesharmonieTavernCards/nodes/1.tBW5oLLj.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/BoHxoC7j.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/D4UjhmCe.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/B_knLTDB.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/7BBL4D0t.js',
      'https://pfixer.github.io/DesharmonieTavernCards/nodes/2.D9PmFJDq.js',
      'https://pfixer.github.io/DesharmonieTavernCards/chunks/SrmRsZRG.js',
    ]),
) => i.map(i => d[i]);
import { o as Le } from 'https://pfixer.github.io/DesharmonieTavernCards/chunks/7BBL4D0t.js';
import { t as Ie, a as R, c as T, f as U } from 'https://pfixer.github.io/DesharmonieTavernCards/chunks/Bb_44-Vf.js';
import { B as Ae } from 'https://pfixer.github.io/DesharmonieTavernCards/chunks/CYHURk-R.js';
import { u as Oe, m as Re, h as Se, s as we } from 'https://pfixer.github.io/DesharmonieTavernCards/chunks/D4UjhmCe.js';
import {
  aT as $,
  b1 as A,
  L as Ee,
  h as G,
  B as H,
  E as J,
  aQ as K,
  b0 as L,
  aL as O,
  I as Pe,
  aR as Q,
  g as W,
  aS as X,
  f as Z,
  F as _e,
  u as ae,
  J as be,
  aZ as ce,
  av as de,
  aU as ee,
  aj as fe,
  M as ge,
  aI as he,
  aX as ie,
  a_ as k,
  a$ as le,
  v as me,
  aW as ne,
  aY as oe,
  au as p,
  aV as re,
  D as se,
  _ as te,
  S as ue,
  z as v,
  w as ve,
  G as w,
  K as ye,
} from 'https://pfixer.github.io/DesharmonieTavernCards/chunks/DOz-poEg.js';
import { b as j, i as x } from 'https://pfixer.github.io/DesharmonieTavernCards/chunks/SrmRsZRG.js';
function D(r, e, a) {
  G && W();
  const c = new Ae(r);
  Z(() => {
    const i = e() ?? null;
    c.ensure(i, i && (t => a(t, i)));
  }, J);
}
let I = !1;
function Te(r) {
  const e = I;
  try {
    return ((I = !1), [r(), I]);
  } finally {
    I = e;
  }
}
function B(r, e, a, c) {
  let i = !se || (a & ie) !== 0,
    t = (a & ne) !== 0,
    n = (a & ce) !== 0,
    s = c,
    y = !0,
    P = () => (y && ((y = !1), (s = n ? ae(c) : c)), s),
    u;
  if (t) {
    const h = ue in r || k in r;
    u = K(r, e)?.set ?? (h && e in r ? o => (r[e] = o) : void 0);
  }
  let d,
    _ = !1;
  (t ? ([d, _] = Te(() => r[e])) : (d = r[e]), d === void 0 && c !== void 0 && ((d = P()), u && (i && Q(), u(d))));
  let f;
  if (
    (i
      ? (f = () => {
          const o = r[e];
          return o === void 0 ? P() : ((y = !0), o);
        })
      : (f = () => {
          const o = r[e];
          return (o !== void 0 && (s = void 0), o === void 0 ? s : o);
        }),
    i && (a & X) === 0)
  )
    return f;
  if (u) {
    const l = r.$$legacy;
    return function (o, b) {
      return arguments.length > 0 ? ((!i || !b || l || _) && u(b ? f() : o), o) : f();
    };
  }
  let g = !1,
    m = ((a & oe) !== 0 ? H : p)(() => ((g = !1), f()));
  t && v(m);
  const S = te;
  return function (o, b) {
    if (arguments.length > 0) {
      const E = b ? v(m) : i && t ? $(o) : o;
      return (O(m, E), (g = !0), s !== void 0 && (s = E), o);
    }
    return (ee && g) || (S.f & re) !== 0 ? m.v : v(m);
  };
}
function xe(r) {
  return class extends je {
    constructor(e) {
      super({ component: r, ...e });
    }
  };
}
class je {
  #t;
  #e;
  constructor(e) {
    const a = new Map(),
      c = (t, n) => {
        const s = de(n, !1, !1);
        return (a.set(t, s), s);
      };
    const i = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(t, n) {
          return v(a.get(n) ?? c(n, Reflect.get(t, n)));
        },
        has(t, n) {
          return n === k ? !0 : (v(a.get(n) ?? c(n, Reflect.get(t, n))), Reflect.has(t, n));
        },
        set(t, n, s) {
          return (O(a.get(n) ?? c(n, s), s), Reflect.set(t, n, s));
        },
      },
    );
    ((this.#e = (e.hydrate ? Se : Re)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover,
    })),
      (!e?.props?.$$host || e.sync === !1) && le(),
      (this.#t = i.$$events));
    for (const t of Object.keys(this.#e))
      t === '$set' ||
        t === '$destroy' ||
        t === '$on' ||
        fe(this, t, {
          get() {
            return this.#e[t];
          },
          set(n) {
            this.#e[t] = n;
          },
          enumerable: !0,
        });
    ((this.#e.$set = t => {
      Object.assign(i, t);
    }),
      (this.#e.$destroy = () => {
        Oe(this.#e);
      }));
  }
  $set(e) {
    this.#e.$set(e);
  }
  $on(e, a) {
    this.#t[e] = this.#t[e] || [];
    const c = (...i) => a.call(this, ...i);
    return (
      this.#t[e].push(c),
      () => {
        this.#t[e] = this.#t[e].filter(i => i !== c);
      }
    );
  }
  $destroy() {
    this.#e.$destroy();
  }
}
const De = 'modulepreload',
  Be = function (r, e) {
    return new URL(r, e).href;
  },
  N = {},
  C = function (e, a, c) {
    let i = Promise.resolve();
    if (a && a.length > 0) {
      const P = function (u) {
        return Promise.all(
          u.map(h =>
            Promise.resolve(h).then(
              d => ({ status: 'fulfilled', value: d }),
              d => ({ status: 'rejected', reason: d }),
            ),
          ),
        );
      };
      const n = document.getElementsByTagName('link'),
        s = document.querySelector('meta[property=csp-nonce]'),
        y = s?.nonce || s?.getAttribute('nonce');
      i = P(
        a.map(u => {
          if (((u = Be(u, c)), u in N)) return;
          N[u] = !0;
          const h = u.endsWith('.css'),
            d = h ? '[rel="stylesheet"]' : '';
          if (c)
            for (let f = n.length - 1; f >= 0; f--) {
              const l = n[f];
              if (l.href === u && (!h || l.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${u}"]${d}`)) return;
          const _ = document.createElement('link');
          if (
            ((_.rel = h ? 'stylesheet' : De),
            h || (_.as = 'script'),
            (_.crossOrigin = ''),
            (_.href = u),
            y && _.setAttribute('nonce', y),
            document.head.appendChild(_),
            h)
          )
            return new Promise((f, l) => {
              (_.addEventListener('load', f),
                _.addEventListener('error', () => l(new Error(`Unable to preload CSS for ${u}`))));
            });
        }),
      );
    }
    function t(n) {
      const s = new Event('vite:preloadError', { cancelable: !0 });
      if (((s.payload = n), window.dispatchEvent(s), !s.defaultPrevented)) throw n;
    }
    return i.then(n => {
      for (const s of n || []) s.status === 'rejected' && t(s.reason);
      return e().catch(t);
    });
  },
  We = {};
const Ce = U(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>',
  ),
  Me = U('<!> <!>', 1);
function Ne(r, e) {
  _e(e, !0);
  const a = B(e, 'components', 23, () => []),
    c = B(e, 'data_0', 3, null),
    i = B(e, 'data_1', 3, null);
  (me(() => e.stores.page.set(e.page)),
    ve(() => {
      (e.stores, e.page, e.constructors, a(), e.form, c(), i(), e.stores.page.notify());
    }));
  const t = L(!1),
    n = L(!1),
    s = L(null);
  Le(() => {
    const l = e.stores.page.subscribe(() => {
      v(t) &&
        (O(n, !0),
        he().then(() => {
          O(s, document.title || 'untitled page', !0);
        }));
    });
    return (O(t, !0), l);
  });
  const y = A(() => e.constructors[1]);
  const P = Me(),
    u = w(P);
  {
    const h = l => {
        const g = A(() => e.constructors[0]);
        const m = T(),
          S = w(m);
        (D(
          S,
          () => v(g),
          (o, b) => {
            j(
              b(o, {
                get data() {
                  return c();
                },
                get form() {
                  return e.form;
                },
                get params() {
                  return e.page.params;
                },
                children: (E, Ue) => {
                  const M = T(),
                    V = w(M);
                  (D(
                    V,
                    () => v(y),
                    (q, F) => {
                      j(
                        F(q, {
                          get data() {
                            return i();
                          },
                          get form() {
                            return e.form;
                          },
                          get params() {
                            return e.page.params;
                          },
                        }),
                        z => (a()[1] = z),
                        () => a()?.[1],
                      );
                    },
                  ),
                    R(E, M));
                },
                $$slots: { default: !0 },
              }),
              E => (a()[0] = E),
              () => a()?.[0],
            );
          },
        ),
          R(l, m));
      },
      d = l => {
        const g = A(() => e.constructors[0]);
        const m = T(),
          S = w(m);
        (D(
          S,
          () => v(g),
          (o, b) => {
            j(
              b(o, {
                get data() {
                  return c();
                },
                get form() {
                  return e.form;
                },
                get params() {
                  return e.page.params;
                },
              }),
              E => (a()[0] = E),
              () => a()?.[0],
            );
          },
        ),
          R(l, m));
      };
    x(u, l => {
      e.constructors[1] ? l(h) : l(d, !1);
    });
  }
  const _ = ge(u, 2);
  {
    const f = l => {
      const g = Ce(),
        m = ye(g);
      {
        const S = o => {
          const b = Ie();
          (Pe(() => we(b, v(s))), R(o, b));
        };
        x(m, o => {
          v(n) && o(S);
        });
      }
      (Ee(g), R(l, g));
    };
    x(_, l => {
      v(t) && l(f);
    });
  }
  (R(r, P), be());
}
const Ze = xe(Ne),
  Je = [
    () =>
      C(
        () => import('https://pfixer.github.io/DesharmonieTavernCards/nodes/0.D39PYRZu.js'),
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      ),
    () =>
      C(
        () => import('https://pfixer.github.io/DesharmonieTavernCards/nodes/1.tBW5oLLj.js'),
        __vite__mapDeps([6, 1, 2, 7, 8, 9, 10]),
        import.meta.url,
      ),
    () =>
      C(
        () => import('https://pfixer.github.io/DesharmonieTavernCards/nodes/2.D9PmFJDq.js'),
        __vite__mapDeps([11, 1, 2, 7, 10, 8, 12, 3, 4, 5]),
        import.meta.url,
      ),
  ],
  Ke = [],
  Qe = { '/': [2] },
  Y = {
    handleError: ({ error: r }) => {
      console.error(r);
    },
    reroute: () => {},
    transport: {},
  },
  ke = Object.fromEntries(Object.entries(Y.transport).map(([r, e]) => [r, e.decode])),
  Xe = Object.fromEntries(Object.entries(Y.transport).map(([r, e]) => [r, e.encode])),
  He = !1,
  pe = (r, e) => ke[r](e);
export {
  pe as decode,
  ke as decoders,
  Qe as dictionary,
  Xe as encoders,
  He as hash,
  Y as hooks,
  We as matchers,
  Je as nodes,
  Ze as root,
  Ke as server_loads,
};
