import { c as h, P as u, b, e as y, a as E, d as x, f as D } from "./index-CzwBap1l.mjs";
var P = (s = "") => {
  const c = h();
  let n, t = [];
  const r = E(), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), g = (e, p) => {
    switch (e.status) {
      case "undeliverable":
        t.some((i) => i.message.messageID === e.message.messageID) || (t = [
          ...t,
          {
            message: e.message,
            resolvedDestination: e.resolvedDestination
          }
        ]);
        return;
      case "deliverable":
        t = t.reduce((i, d) => d.resolvedDestination === e.deliverableTo ? (u.toBackground(p, {
          type: "deliver",
          message: d.message
        }), i) : [...i, d], []);
        return;
      case "delivered":
        e.receipt.message.messageType === "message" && r.add(e.receipt);
        return;
      case "incoming":
        e.message.messageType === "reply" && r.remove(e.message.messageID), a.forEach((i) => i(e.message, p));
        return;
      case "terminated": {
        const i = r.entries().filter((d) => e.fingerprint === d.to);
        r.remove(i), i.forEach(({ message: d }) => o.forEach((M) => M(d)));
      }
    }
  }, w = () => {
    n = b.runtime.connect({
      name: y({
        endpointName: s,
        fingerprint: c
      })
    }), n.onMessage.addListener(g), n.onDisconnect.addListener(w), u.toBackground(n, {
      type: "sync",
      pendingResponses: r.entries(),
      pendingDeliveries: [
        ...new Set(t.map(({ resolvedDestination: e }) => e))
      ]
    });
  };
  return w(), {
    onFailure(e) {
      o.add(e);
    },
    onMessage(e) {
      a.add(e);
    },
    postMessage(e) {
      u.toBackground(n, {
        type: "deliver",
        message: e
      });
    }
  };
}, m, k = (s, c, n) => m ?? (m = new Promise((t) => {
  const r = (o) => {
    const { data: { cmd: g, scope: w, context: e }, ports: p } = o;
    if (g === "webext-port-offer" && w === c && e !== s)
      return window.removeEventListener("message", r), p[0].onmessage = n, p[0].postMessage("port-accepted"), t(p[0]);
  }, a = () => {
    const o = new MessageChannel();
    o.port1.onmessage = (g) => {
      if (g.data === "port-accepted")
        return window.removeEventListener("message", r), t(o.port1);
      n?.(g);
    }, window.postMessage({
      cmd: "webext-port-offer",
      scope: c,
      context: s
    }, "*", [o.port2]);
  };
  window.addEventListener("message", r), a();
})), L = (s) => {
  let c, n = !1, t, r;
  return {
    enable: () => n = !0,
    onMessage: (a) => t = a,
    postMessage: async (a) => {
      if (!n)
        throw new Error("Communication with window has not been allowed");
      return I(c), (await r).postMessage(a);
    },
    setNamespace: (a) => {
      if (c)
        throw new Error("Namespace once set cannot be changed");
      c = a, r = k(s, a, ({ data: o }) => t?.(o));
    }
  };
};
function I(s) {
  if (typeof s != "string" || s.trim().length === 0)
    throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s) for message routingwhich is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
}
var f = L("content-script"), v = P(), l = x("content-script", (s) => {
  s.destination.context === "window" ? f.postMessage(s) : v.postMessage(s);
});
f.onMessage((s) => {
  s.origin = {
    context: "window",
    tabId: null
  }, l.handleMessage(s);
});
v.onMessage(l.handleMessage);
v.onFailure((s) => {
  if (s.origin.context === "window") {
    f.postMessage({
      type: "error",
      transactionID: s.transactionId
    });
    return;
  }
  l.endTransaction(s.transactionId);
});
var { sendMessage: S, onMessage: B } = l;
D(l);
export {
  B as onMessage,
  S as sendMessage
};
