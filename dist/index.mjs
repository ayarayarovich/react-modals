import { jsx as b, Fragment as ae } from "react/jsx-runtime";
import { createContext as ee, useState as le, useCallback as z, useMemo as te, useContext as U, Fragment as de } from "react";
var re = Symbol.for("immer-nothing"), q = Symbol.for("immer-draftable"), a = Symbol.for("immer-state"), _e = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function u(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = _e[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var w = Object.getPrototypeOf;
function O(e) {
  return !!e && !!e[a];
}
function m(e) {
  var t;
  return e ? ne(e) || Array.isArray(e) || !!e[q] || !!((t = e.constructor) != null && t[q]) || E(e) || A(e) : !1;
}
var ye = Object.prototype.constructor.toString();
function ne(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = w(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === ye;
}
function v(e, t) {
  M(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function M(e) {
  const t = e[a];
  return t ? t.type_ : Array.isArray(e) ? 1 : E(e) ? 2 : A(e) ? 3 : 0;
}
function R(e, t) {
  return M(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function oe(e, t, r) {
  const n = M(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function pe(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function E(e) {
  return e instanceof Map;
}
function A(e) {
  return e instanceof Set;
}
function p(e) {
  return e.copy_ || e.base_;
}
function T(e, t) {
  if (E(e))
    return new Map(e);
  if (A(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = ne(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[a];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], c = n[s];
      c.writable === !1 && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (n[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: c.enumerable,
        value: e[s]
      });
    }
    return Object.create(w(e), n);
  } else {
    const n = w(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function B(e, t = !1) {
  return N(e) || O(e) || !m(e) || (M(e) > 1 && (e.set = e.add = e.clear = e.delete = me), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => B(n, !0))), e;
}
function me() {
  u(2);
}
function N(e) {
  return Object.isFrozen(e);
}
var he = {};
function h(e) {
  const t = he[e];
  return t || u(0, e), t;
}
var D;
function ie() {
  return D;
}
function Pe(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function J(e, t) {
  t && (h("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function K(e) {
  $(e), e.drafts_.forEach(ge), e.drafts_ = null;
}
function $(e) {
  e === D && (D = e.parent_);
}
function Q(e) {
  return D = Pe(D, e);
}
function ge(e) {
  const t = e[a];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Y(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[a].modified_ && (K(t), u(4)), m(e) && (e = S(t, e), t.parent_ || C(t, e)), t.patches_ && h("Patches").generateReplacementPatches_(
    r[a].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = S(t, r, []), K(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== re ? e : void 0;
}
function S(e, t, r) {
  if (N(t))
    return t;
  const n = t[a];
  if (!n)
    return v(
      t,
      (o, i) => Z(e, n, t, o, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return C(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, s = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), s = !0), v(
      i,
      (c, f) => Z(e, n, o, c, f, r, s)
    ), C(e, o, !1), r && e.patches_ && h("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Z(e, t, r, n, o, i, s) {
  if (process.env.NODE_ENV !== "production" && o === r && u(5), O(o)) {
    const c = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !R(t.assigned_, n) ? i.concat(n) : void 0, f = S(e, o, c);
    if (oe(r, n, f), O(f))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && r.add(o);
  if (m(o) && !N(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    S(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && C(e, o);
  }
}
function C(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && B(t, r);
}
function be(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ie(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, i = G;
  r && (o = [n], i = F);
  const { revoke: s, proxy: c } = Proxy.revocable(o, i);
  return n.draft_ = c, n.revoke_ = s, c;
}
var G = {
  get(e, t) {
    if (t === a)
      return e;
    const r = p(e);
    if (!R(r, t))
      return we(e, r, t);
    const n = r[t];
    return e.finalized_ || !m(n) ? n : n === k(e.base_, t) ? (x(e), e.copy_[t] = W(n, e)) : n;
  },
  has(e, t) {
    return t in p(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(p(e));
  },
  set(e, t, r) {
    const n = se(p(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = k(p(e), t), i = o == null ? void 0 : o[a];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (pe(r, o) && (r !== void 0 || R(e.base_, t)))
        return !0;
      x(e), j(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return k(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, x(e), j(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = p(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    u(11);
  },
  getPrototypeOf(e) {
    return w(e.base_);
  },
  setPrototypeOf() {
    u(12);
  }
}, F = {};
v(G, (e, t) => {
  F[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
F.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && u(13), F.set.call(this, e, t, void 0);
};
F.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && u(14), G.set.call(this, e[0], t, r, e[0]);
};
function k(e, t) {
  const r = e[a];
  return (r ? p(r) : e)[t];
}
function we(e, t, r) {
  var o;
  const n = se(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function se(e, t) {
  if (!(t in e))
    return;
  let r = w(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = w(r);
  }
}
function j(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && j(e.parent_));
}
function x(e) {
  e.copy_ || (e.copy_ = T(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Oe = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const s = this;
        return function(f = i, ...d) {
          return s.produce(f, (_) => r.call(this, _, ...d));
        };
      }
      typeof r != "function" && u(6), n !== void 0 && typeof n != "function" && u(7);
      let o;
      if (m(t)) {
        const i = Q(this), s = W(t, void 0);
        let c = !0;
        try {
          o = r(s), c = !1;
        } finally {
          c ? K(i) : $(i);
        }
        return J(i, n), Y(o, i);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === re && (o = void 0), this.autoFreeze_ && B(o, !0), n) {
          const i = [], s = [];
          h("Patches").generateReplacementPatches_(t, o, i, s), n(i, s);
        }
        return o;
      } else
        u(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...c) => this.produceWithPatches(s, (f) => t(f, ...c));
      let n, o;
      return [this.produce(t, r, (s, c) => {
        n = s, o = c;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    m(e) || u(8), O(e) && (e = ze(e));
    const t = Q(this), r = W(e, void 0);
    return r[a].isManual_ = !0, $(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[a];
    (!r || !r.isManual_) && u(9);
    const { scope_: n } = r;
    return J(n, t), Y(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = h("Patches").applyPatches_;
    return O(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function W(e, t) {
  const r = E(e) ? h("MapSet").proxyMap_(e, t) : A(e) ? h("MapSet").proxySet_(e, t) : be(e, t);
  return (t ? t.scope_ : ie()).drafts_.push(r), r;
}
function ze(e) {
  return O(e) || u(10, e), ce(e);
}
function ce(e) {
  if (!m(e) || N(e))
    return e;
  const t = e[a];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = T(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = T(e, !0);
  return v(r, (n, o) => {
    oe(r, n, ce(o));
  }), t && (t.finalized_ = !1), r;
}
var l = new Oe(), L = l.produce;
l.produceWithPatches.bind(
  l
);
l.setAutoFreeze.bind(l);
l.setUseStrictShallowCopy.bind(l);
l.applyPatches.bind(l);
l.createDraft.bind(l);
l.finishDraft.bind(l);
const V = /* @__PURE__ */ (() => {
  let e = 0;
  const t = /* @__PURE__ */ new WeakMap();
  return (r) => (t.has(r) || t.set(r, ++e), t.get(r));
})(), H = ee(null), Me = ({ children: e }) => {
  const [t, r] = le({}), n = z((f) => V(f), []), o = z(
    (f, d) => {
      const _ = n(f);
      r(
        L((P) => {
          P[_] || (P[_] = []);
          const y = P[_], g = y[y.length - 1], I = ((g == null ? void 0 : g.id) ?? 0) + 1;
          y.push({
            id: I,
            data: d,
            isOpen: !1
          });
          for (const X of y)
            if (!X._scheduledForDeletion) {
              X.isOpen = !0;
              break;
            }
        })
      );
    },
    [n]
  ), i = z(
    (f) => {
      const d = n(f);
      r(
        L((_) => {
          _[d] || (_[d] = []), _[d] = _[d].filter((I) => !I._scheduledForDeletion);
          const P = _[d], y = P[0];
          if (!y) return;
          y.isOpen = !1, y._scheduledForDeletion = !0;
          const g = P[1];
          g && (g.isOpen = !0);
        })
      );
    },
    [n]
  ), s = z(
    (f) => {
      const d = V(f);
      return t[d] ?? [];
    },
    [t]
  ), c = te(
    () => ({
      open: o,
      close: i,
      getComponentInstances: s
    }),
    [i, s, o]
  );
  return /* @__PURE__ */ b(H.Provider, { value: c, children: e });
}, De = (e) => {
  const { open: t, close: r } = U(H);
  return {
    open: (i) => {
      t(e, i);
    },
    close: () => {
      r(e);
    }
  };
}, fe = () => U(H), ue = ee(null), Fe = ({ children: e, data: t, isOpen: r, Component: n }) => {
  const { close: o } = fe(), i = z(() => {
    o(n, t);
  }, [n, o, t]), s = te(
    () => ({
      isOpen: r,
      close: i,
      data: t
    }),
    [i, t, r]
  );
  return /* @__PURE__ */ b(ue.Provider, { value: s, children: e });
}, Ee = () => U(ue), Ae = ({ Component: e, ComponentWrapper: t }) => {
  const { getComponentInstances: r } = fe(), n = r(e), o = t ?? de;
  return /* @__PURE__ */ b(ae, { children: n.map((i) => /* @__PURE__ */ b(Fe, { data: i.data, isOpen: i.isOpen, Component: e, children: /* @__PURE__ */ b(o, { children: /* @__PURE__ */ b(e, {}) }) }, i.id)) });
}, ve = (e) => () => {
  const t = De(e);
  return {
    open: t.open,
    close: t.close
  };
}, Ne = (e) => ({
  Component: e,
  use: ve(e)
});
export {
  Me as ModalProvider,
  Ae as ModalRenderer,
  Ne as createModal,
  ve as createModalHook,
  De as useModal,
  Ee as useModalInstance
};
