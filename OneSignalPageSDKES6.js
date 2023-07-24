! function (e) {
    var t = {};
    
    function i(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {
            i: n
            , l: !1
            , exports: {}
        };
        return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1
            , enumerable: !0
            , get: n
        })
    }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 26)
}([function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });
    Object.setPrototypeOf || Array;
    Object.assign;
    
    function n(e, t, i, n) {
        return new(i || (i = Promise))(function (s, o) {
            function r(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }
            
            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            
            function c(e) {
                e.done ? s(e.value) : new i(function (t) {
                        t(e.value)
                    })
                    .then(r, a)
            }
            c((n = n.apply(e, t || []))
                .next())
        })
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });
    class n {
        static shouldLog() {
            try {
                if ("undefined" == typeof window || void 0 === window.localStorage) return !1;
                const e = window.localStorage.getItem("loglevel");
                return !(!e || "trace" !== e.toLowerCase())
            } catch (e) {
                return !1
            }
        }
        static setLevel(e) {
            if ("undefined" != typeof window && void 0 !== window.localStorage) try {
                window.localStorage.setItem("loglevel", e), n.proxyMethodsCreated = void 0, n.createProxyMethods()
            } catch (e) {
                return
            }
        }
        static createProxyMethods() {
            if (void 0 !== n.proxyMethodsCreated) return;
            n.proxyMethodsCreated = !0;
            const e = {
                log: "debug"
                , trace: "trace"
                , info: "info"
                , warn: "warn"
                , error: "error"
            };
            for (const t of Object.keys(e)) {
                const i = void 0 !== console[t]
                    , s = e[t]
                    , o = i && (n.shouldLog() || "error" === s);
                n[s] = o ? console[t].bind(console) : function () {}
            }
        }
    }
    n.createProxyMethods()
}, function (e, t, i) {
    "use strict";
    i.d(t, "g", function () {
        return p
    }), i.d(t, "u", function () {
        return h
    }), i.d(t, "c", function () {
        return m
    }), i.d(t, "o", function () {
        return f
    }), i.d(t, "w", function () {
        return b
    }), i.d(t, "i", function () {
        return S
    }), i.d(t, "q", function () {
        return v
    }), i.d(t, "p", function () {
        return O
    }), i.d(t, "b", function () {
        return y
    }), i.d(t, "e", function () {
        return w
    }), i.d(t, "a", function () {
        return E
    }), i.d(t, "t", function () {
        return P
    }), i.d(t, "m", function () {
        return I
    }), i.d(t, "j", function () {
        return T
    }), i.d(t, "h", function () {
        return C
    }), i.d(t, "r", function () {
        return A
    }), i.d(t, "v", function () {
        return N
    }), i.d(t, "f", function () {
        return M
    }), i.d(t, "x", function () {
        return k
    }), i.d(t, "s", function () {
        return _
    }), i.d(t, "l", function () {
        return x
    }), i.d(t, "d", function () {
        return R
    }), i.d(t, "n", function () {
        return D
    }), i.d(t, "k", function () {
        return W
    });
    var n = i(0)
        , s = i(3)
        , o = i(5)
        , r = (i(4), i(1))
        , a = i(10)
        , c = i(17)
        , l = i(21)
        , d = i(6)
        , u = i(8)
        , g = i.n(u);
    
    function p(e) {
        return l.a.decodeHtmlEntities(e)
    }
    
    function h(e) {
        var t = document.querySelectorAll(e);
        if (t.length > 0)
            for (let e = 0; e < t.length; e++) {
                const i = t[e].parentNode;
                i && i.removeChild(t[e])
            }
    }
    
    function m() {
        return n.a(this, void 0, void 0, function* () {
            return new Promise(e => {
                OneSignal.initialized ? e() : OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, e)
            })
        })
    }
    
    function f() {
        return a.a.isUsingSubscriptionWorkaround()
    }
    
    function b(e = !1) {
        return n.a(this, void 0, void 0, function* () {
            return c.a.triggerNotificationPermissionChanged(e)
        })
    }
    
    function S(e, ...t) {
        if (e) return e.apply(null, t)
    }
    
    function v(e, ...t) {
        return a.a.logMethodCall(e, ...t)
    }
    
    function O(e) {
        return !!e && !!e.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    }
    
    function y(e, t, i) {
        let n;
        if (!(n = "string" == typeof e ? document.querySelector(e) : e)) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
        n.insertAdjacentHTML(t, i)
    }
    
    function w(e) {
        if ("string" == typeof e) {
            const t = document.querySelector(e);
            if (null === t) throw new Error(`Cannot find element with selector "${e}"`);
            for (; t.firstChild;) t.removeChild(t.firstChild)
        } else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }
    }
    
    function E(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i) throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.add(t)
        } else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            e.classList.add(t)
        }
    }
    
    function P(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i) throw new Error(`Cannot find element with selector "${e}"`);
            i.classList.remove(t)
        } else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            e.classList.remove(t)
        }
    }
    
    function I(e, t) {
        if ("string" == typeof e) {
            const i = document.querySelector(e);
            if (null === i) throw new Error(`Cannot find element with selector "${e}"`);
            return i.classList.contains(t)
        }
        if ("object" == typeof e) return e.classList.contains(t);
        throw new Error(`${e} must be a CSS selector string or DOM Element object.`)
    }
    
    function T(e) {
        return d.a.getConsoleStyle(e)
    }
    
    function C(e) {
        return new Promise(t => {
            setTimeout(t, e)
        })
    }
    
    function A() {
        return Promise.resolve()
    }
    
    function N(e, t) {
        return d.a.timeoutPromise(e, t)
    }
    
    function M(e, t) {
        return d.a.contains(e, t)
    }
    
    function k() {
        return r.a.warn("OneSignal: Unsubscribing from push."), s.a.getWindowEnv() !== o.a.ServiceWorker ? self.registration.pushManager.getSubscription()
            .then(e => {
                if (e) return e.unsubscribe();
                throw new Error("Cannot unsubscribe because not subscribed.")
            }) : f() ? new Promise((e, t) => {
                r.a.debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."), OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, i => {
                    r.a.debug("Unsubscribe from push succesfully remotely executed."), i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t("Failed to remotely unsubscribe from push.")
                })
            }) : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(e => e.pushManager)
            .then(e => e.getSubscription())
            .then(e => e ? e.unsubscribe() : Promise.resolve()) : Promise.resolve()
    }
    
    function _(e, t, i, n = !1) {
        if (t || r.a.error("Cannot call on() with no event: ", t), i || r.a.error("Cannot call on() with no task: ", i), "string" == typeof e) {
            let n = document.querySelectorAll(e);
            if (n.length > 0)
                for (let e = 0; e < n.length; e++) _(n[e], t, i)
        } else if (o = e, "[object Array]" === Object.prototype.toString.call(o))
            for (let n = 0; n < e.length; n++) _(e[n], t, i);
        else {
            if ("object" != typeof e) throw new Error(`${e} must be a CSS selector string or DOM Element object.`);
            var s = function (t) {
                var o = function () {
                    e.removeEventListener(t.type, s)
                };
                n || o(), i(t, o)
            };
            e.addEventListener(t, s)
        }
        var o
    }
    
    function x() {
        return window.__oneSignalSdkLoadCount || 0
    }
    
    function R(e, t) {
        return n.a(this, void 0, void 0, function* () {
            return yield new Promise(i => {
                OneSignal.emitter.once(e, e => {
                    if (t) {
                        t(e) && i(e)
                    } else i(e)
                })
            })
        })
    }
    
    function D() {
        window.__oneSignalSdkLoadCount = x() + 1
    }
    
    function W(e) {
        return e ? g.a.safari && e.safari ? e.safari : g.a.firefox && e.firefox ? e.firefox : e.chrome || e.firefox || e.safari || "default-icon" : "default-icon"
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return h
    });
    var n = i(0)
        , s = i(15)
        , o = i(20)
        , r = i(5)
        , a = i(9)
        , c = i(16)
        , l = i(14)
        , d = i(11)
        , u = i(10);
    const g = 4e3
        , p = 3001;
    class h {
        static getBuildEnv() {
            return s.a.Production
        }
        static getApiEnv() {
            return s.a.Production
        }
        static getIntegration(e) {
            return n.a(this, void 0, void 0, function* () {
                if (d.a.isSafari()) return c.a.Secure;
                const t = window === window.top
                    , i = "https:" === window.location.protocol;
                if (void 0 === e) {
                    if ("undefined" == typeof OneSignal || !OneSignal.context || !OneSignal.context.appConfig) throw new a.a("usingProxyOrigin", a.b.Empty);
                    e = !!OneSignal.context.appConfig.subdomain
                }
                if (t) return i ? e ? c.a.SecureProxy : c.a.Secure : !u.b.isLocalhostAllowedAsSecureOrigin() || "localhost" !== location.hostname && "127.0.0.1" !== location.hostname ? c.a.InsecureProxy : c.a.Secure;
                if (i) {
                    return (yield h.isFrameContextInsecure()) ? c.a.InsecureProxy : e ? c.a.SecureProxy : c.a.Secure
                }
                return c.a.InsecureProxy
            })
        }
        static isFrameContextInsecure() {
            return n.a(this, void 0, void 0, function* () {
                if (window === window.top || !("serviceWorker" in navigator) || void 0 === navigator.serviceWorker.getRegistration) return !1;
                return !(yield l.b.getRegistration())
            })
        }
        static isInsecureOrigin() {
            return "http:" === window.location.protocol
        }
        static getWindowEnv() {
            return "undefined" == typeof window ? "undefined" != typeof self && "undefined" != typeof ServiceWorkerGlobalScope ? r.a.ServiceWorker : r.a.Unknown : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && h.getBuildEnv() === s.a.Development) ? r.a.OneSignalSubscriptionPopup : r.a.Host : "/webPushIframe" === location.pathname ? r.a.OneSignalProxyFrame : "/webPushModal" === location.pathname ? r.a.OneSignalSubscriptionModal : r.a.CustomIframe
        }
        static getTestEnv() {
            return o.a.None
        }
        static getBuildEnvPrefix(e = h.getBuildEnv()) {
            switch (e) {
            case s.a.Development:
                return "Dev-";
            case s.a.Staging:
                return "Staging-";
            case s.a.Production:
                return "";
            default:
                throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
        }
        static getOneSignalApiUrl(e = h.getApiEnv()) {
            switch (e) {
            case s.a.Development:
                return new URL(`https://onesignal.com:${p}/api/v1`);
            case s.a.Staging:
                return new URL(`https://${window.location.host}/api/v1`);
            case s.a.Production:
                return new URL("https://onesignal.com/api/v1");
            default:
                throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
        }
        static getOneSignalResourceUrlPath(e = h.getBuildEnv()) {
            let t;
            const i = g;
            switch (e) {
            case s.a.Development:
                t = `http://localhost:${i}`;
                break;
            case s.a.Staging:
                t = `https://${window.location.host}`;
                break;
            case s.a.Production:
                t = "https://onesignal.com";
                break;
            default:
                throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
            return new URL(`${t}/sdks`)
        }
        static getOneSignalCssFileName(e = h.getBuildEnv()) {
            switch (e) {
            case s.a.Development:
                return "Dev-OneSignalSDKStyles.css";
            case s.a.Staging:
                return "Staging-OneSignalSDKStyles.css";
            case s.a.Production:
                return "OneSignalSDKStyles.css";
            default:
                throw new a.a("buildEnv", a.b.EnumOutOfRange)
            }
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0)
        , s = i(18)
        , o = i(23);
    class r {}
    class a {}
    var c, l, d = i(22)
        , u = i(20)
        , g = i(5)
        , p = i(19)
        , h = i(3)
        , m = i(10)
        , f = i(6);
    i.d(t, "a", function () {
        return b
    }), (l = c || (c = {}))[l.SET = 0] = "SET";
    class b {
        constructor(e) {
            this.databaseName = e, this.emitter = new s.a, this.database = new o.a(this.databaseName)
        }
        static resetInstance() {
            b.databaseInstance = null
        }
        static get singletonInstance() {
            return b.databaseInstanceName || (b.databaseInstanceName = "ONE_SIGNAL_SDK_DB"), b.databaseInstance || (b.databaseInstance = new b(b.databaseInstanceName)), b.databaseInstance
        }
        static applyDbResultFilter(e, t, i) {
            switch (e) {
            case "Options":
                return i && t ? i.value : i && !t ? i : null;
            case "Ids":
                return i && t ? i.id : i && !t ? i : null;
            case "NotificationOpened":
                return i && t ? {
                    data: i.data
                    , timestamp: i.timestamp
                } : i && !t ? i : null;
            default:
                return i || null
            }
        }
        get(e, t) {
            return n.a(this, void 0, void 0, function* () {
                if (h.a.getWindowEnv() !== g.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && h.a.getTestEnv() === u.a.None) return yield new Promise(i => n.a(this, void 0, void 0, function* () {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                        table: e
                        , key: t
                    }], e => {
                        let t = e.data[0];
                        i(t)
                    })
                })); {
                    const i = yield this.database.get(e, t);
                    return b.applyDbResultFilter(e, t, i)
                }
            })
        }
        put(e, t) {
            return n.a(this, void 0, void 0, function* () {
                yield new Promise((i, s) => n.a(this, void 0, void 0, function* () {
                    h.a.getWindowEnv() !== g.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && h.a.getTestEnv() === u.a.None ? OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                        table: e
                        , keypath: t
                    }], n => {
                        n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : s(`(Database) Attempted remote IndexedDB put(${e}, ${t}), but did not get success response.`)
                    }) : (yield this.database.put(e, t), i())
                })), this.emitter.emit(b.EVENTS.SET, t)
            })
        }
        remove(e, t) {
            return h.a.getWindowEnv() !== g.a.ServiceWorker && m.b.isUsingSubscriptionWorkaround() && h.a.getTestEnv() === u.a.None ? new Promise((i, n) => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                    table: e
                    , keypath: t
                }], s => {
                    s.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? i() : n(`(Database) Attempted remote IndexedDB remove(${e}, ${t}), but did not get success response.`)
                })
            }) : this.database.remove(e, t)
        }
        getAppConfig() {
            return n.a(this, void 0, void 0, function* () {
                const e = {}
                    , t = yield this.get("Ids", "appId");
                return e.appId = t, e.subdomain = yield this.get("Options", "subdomain"), e.vapidPublicKey = yield this.get("Options", "vapidPublicKey"), e.emailAuthRequired = yield this.get("Options", "emailAuthRequired"), e
            })
        }
        getExternalUserId() {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("Ids", "externalUserId")
            })
        }
        setExternalUserId(e) {
            return n.a(this, void 0, void 0, function* () {
                const t = f.b.getValueOrDefault(e, "");
                "" === t ? yield this.remove("Ids", "externalUserId"): yield this.put("Ids", {
                    type: "externalUserId"
                    , id: t
                })
            })
        }
        setAppConfig(e) {
            return n.a(this, void 0, void 0, function* () {
                e.appId && (yield this.put("Ids", {
                    type: "appId"
                    , id: e.appId
                })), e.subdomain && (yield this.put("Options", {
                    key: "subdomain"
                    , value: e.subdomain
                })), !0 === e.httpUseOneSignalCom ? yield this.put("Options", {
                    key: "httpUseOneSignalCom"
                    , value: !0
                }): !1 === e.httpUseOneSignalCom && (yield this.put("Options", {
                    key: "httpUseOneSignalCom"
                    , value: !1
                })), !0 === e.emailAuthRequired ? yield this.put("Options", {
                    key: "emailAuthRequired"
                    , value: !0
                }): !1 === e.emailAuthRequired && (yield this.put("Options", {
                    key: "emailAuthRequired"
                    , value: !1
                })), e.vapidPublicKey && (yield this.put("Options", {
                    key: "vapidPublicKey"
                    , value: e.vapidPublicKey
                }))
            })
        }
        getAppState() {
            return n.a(this, void 0, void 0, function* () {
                const e = new r;
                return e.defaultNotificationUrl = yield this.get("Options", "defaultUrl"), e.defaultNotificationTitle = yield this.get("Options", "defaultTitle"), e.lastKnownPushEnabled = yield this.get("Options", "isPushEnabled"), e.clickedNotifications = yield this.get("NotificationOpened"), e
            })
        }
        setAppState(e) {
            return n.a(this, void 0, void 0, function* () {
                if (e.defaultNotificationUrl && (yield this.put("Options", {
                        key: "defaultUrl"
                        , value: e.defaultNotificationUrl
                    })), (e.defaultNotificationTitle || "" === e.defaultNotificationTitle) && (yield this.put("Options", {
                        key: "defaultTitle"
                        , value: e.defaultNotificationTitle
                    })), null != e.lastKnownPushEnabled && (yield this.put("Options", {
                        key: "isPushEnabled"
                        , value: e.lastKnownPushEnabled
                    })), e.clickedNotifications) {
                    const t = Object.keys(e.clickedNotifications);
                    for (let i of t) {
                        const t = e.clickedNotifications[i];
                        t ? yield this.put("NotificationOpened", {
                            url: i
                            , data: t.data
                            , timestamp: t.timestamp
                        }): null === t && (yield this.remove("NotificationOpened", i))
                    }
                }
            })
        }
        getServiceWorkerState() {
            return n.a(this, void 0, void 0, function* () {
                const e = new a;
                return e.workerVersion = yield this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION"), e.updaterWorkerVersion = yield this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION"), e
            })
        }
        setServiceWorkerState(e) {
            return n.a(this, void 0, void 0, function* () {
                e.workerVersion && (yield this.put("Ids", {
                    type: "WORKER1_ONE_SIGNAL_SW_VERSION"
                    , id: e.workerVersion
                })), e.updaterWorkerVersion && (yield this.put("Ids", {
                    type: "WORKER2_ONE_SIGNAL_SW_VERSION"
                    , id: e.updaterWorkerVersion
                }))
            })
        }
        getSubscription() {
            return n.a(this, void 0, void 0, function* () {
                const e = new d.a;
                e.deviceId = yield this.get("Ids", "userId"), e.subscriptionToken = yield this.get("Ids", "registrationId");
                const t = yield this.get("Options", "optedOut"), i = yield this.get("Options", "subscription"), n = yield this.get("Options", "subscriptionCreatedAt"), s = yield this.get("Options", "subscriptionExpirationTime");
                return e.optedOut = null != t ? t : null != i && !i, e.createdAt = n, e.expirationTime = s, e
            })
        }
        setSubscription(e) {
            return n.a(this, void 0, void 0, function* () {
                e.deviceId && (yield this.put("Ids", {
                    type: "userId"
                    , id: e.deviceId
                })), void 0 !== e.subscriptionToken && (yield this.put("Ids", {
                    type: "registrationId"
                    , id: e.subscriptionToken
                })), null != e.optedOut && (yield this.put("Options", {
                    key: "optedOut"
                    , value: e.optedOut
                })), null != e.createdAt && (yield this.put("Options", {
                    key: "subscriptionCreatedAt"
                    , value: e.createdAt
                })), null != e.expirationTime ? yield this.put("Options", {
                    key: "subscriptionExpirationTime"
                    , value: e.expirationTime
                }): yield this.remove("Options", "subscriptionExpirationTime")
            })
        }
        getEmailProfile() {
            return n.a(this, void 0, void 0, function* () {
                const e = yield this.get("Ids", "emailProfile");
                return e ? p.a.deserialize(e) : new p.a
            })
        }
        setEmailProfile(e) {
            return n.a(this, void 0, void 0, function* () {
                e && (yield this.put("Ids", {
                    type: "emailProfile"
                    , id: e.serialize()
                }))
            })
        }
        setProvideUserConsent(e) {
            return n.a(this, void 0, void 0, function* () {
                yield this.put("Options", {
                    key: "userConsent"
                    , value: e
                })
            })
        }
        getProvideUserConsent() {
            return n.a(this, void 0, void 0, function* () {
                return yield this.get("Options", "userConsent")
            })
        }
        static rebuild() {
            return n.a(this, void 0, void 0, function* () {
                return Promise.all([b.singletonInstance.remove("Ids"), b.singletonInstance.remove("NotificationOpened"), b.singletonInstance.remove("Options")])
            })
        }
        static on(...e) {
            return n.a(this, void 0, void 0, function* () {
                return b.singletonInstance.emitter.on.apply(b.singletonInstance.emitter, e)
            })
        }
        static setEmailProfile(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.setEmailProfile(e)
            })
        }
        static getEmailProfile() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getEmailProfile()
            })
        }
        static setSubscription(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.setSubscription(e)
            })
        }
        static getSubscription() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getSubscription()
            })
        }
        static setProvideUserConsent(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.setProvideUserConsent(e)
            })
        }
        static getProvideUserConsent() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getProvideUserConsent()
            })
        }
        static setServiceWorkerState(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.setServiceWorkerState(e)
            })
        }
        static getServiceWorkerState() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getServiceWorkerState()
            })
        }
        static setAppState(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.setAppState(e)
            })
        }
        static getAppState() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getAppState()
            })
        }
        static setAppConfig(e) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.setAppConfig(e)
            })
        }
        static getAppConfig() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getAppConfig()
            })
        }
        static getExternalUserId() {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.getExternalUserId()
            })
        }
        static setExternalUserId(e) {
            return n.a(this, void 0, void 0, function* () {
                yield b.singletonInstance.setExternalUserId(e)
            })
        }
        static remove(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.remove(e, t)
            })
        }
        static put(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.put(e, t)
            })
        }
        static get(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield b.singletonInstance.get(e, t)
            })
        }
    }
    b.EVENTS = c
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
            return n
        })
        , function (e) {
            e.ServiceWorker = "ServiceWorker", e.Host = "Host", e.OneSignalSubscriptionPopup = "Popup", e.OneSignalSubscriptionModal = "Modal", e.OneSignalProxyFrame = "ProxyFrame", e.CustomIframe = "CustomFrame", e.Unknown = "Unknown"
        }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    var n = i(12);
    class s extends n.a {
        constructor(e = "The asynchronous operation has timed out.") {
            super(e), this.message = e, Object.setPrototypeOf(this, s.prototype)
        }
    }
    i.d(t, "a", function () {
        return o
    });
    class o {
        static contains(e, t) {
            return !!e && -1 !== e.indexOf(t)
        }
        static getConsoleStyle(e) {
            return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : ""
        }
        static trimUndefined(e) {
            for (var t in e) e.hasOwnProperty(t) && void 0 === e[t] && delete e[t];
            return e
        }
        static capitalize(e) {
            return e.charAt(0)
                .toUpperCase() + e.slice(1)
        }
        static stringify(e) {
            return JSON.stringify(e, (e, t) => "function" == typeof t ? "[Function]" : t, 4)
        }
        static encodeHashAsUriComponent(e) {
            let t = "";
            const i = Object.keys(e);
            for (var n of i) {
                const i = e[n];
                t += `${encodeURIComponent(n)}=${encodeURIComponent(i)}`
            }
            return t
        }
        static timeoutPromise(e, t) {
            const i = new Promise((e, i) => {
                setTimeout(() => {
                    i(new s)
                }, t)
            });
            return Promise.race([e, i])
        }
        static getValueOrDefault(e, t) {
            return void 0 !== e && null !== e ? e : t
        }
        static padStart(e, t, i) {
            let n = e;
            for (; n.length < t;) n = i + n;
            return n
        }
        static parseVersionString(e) {
            const t = e.toString()
                .split(".")
                , i = o.padStart(t[0], 2, "0");
            let n;
            return n = t[1] ? o.padStart(t[1], 2, "0") : "00", Number(`${i}.${n}`)
        }
        static isVersionAtLeast(e, t) {
            return this.parseVersionString(e) >= t
        }
        static enforceAppId(e) {
            if (!e) throw new Error("App id cannot be empty")
        }
        static enforcePlayerId(e) {
            if (!e) throw new Error("Player id cannot be empty")
        }
    }
    t.b = o
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return g
    });
    var n = i(0)
        , s = i(11)
        , o = i(3)
        , r = i(5)
        , a = i(1)
        , c = i(6);
    const l = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"]
        , d = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"]
        , u = {
            notificationPermissionChange: "onesignal.prompt.native.permissionchanged"
            , subscriptionChange: "onesignal.subscription.changed"
            , customPromptClick: "onesignal.prompt.custom.clicked"
        };
    class g {
        static trigger(e, t, i = null) {
            return n.a(this, void 0, void 0, function* () {
                if (!c.b.contains(l, e)) {
                    let n = t
                        , s = c.b.capitalize(o.a.getWindowEnv()
                            .toString());
                    i && (s = `${s} ⬸ ${c.b.capitalize(i)}`), n || !1 === n ? a.a.debug(`(${s}) » %c${e}:`, c.b.getConsoleStyle("event"), n) : a.a.debug(`(${s}) » %c${e}`, c.b.getConsoleStyle("event"))
                }
                if (s.a.isBrowser()) {
                    if (e === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized) return;
                        OneSignal.initialized = !0
                    }
                    yield OneSignal.emitter.emit(e, t)
                }
                if (u.hasOwnProperty(e)) {
                    let i = u[e];
                    g._triggerLegacy(i, t)
                }
                if (s.a.isBrowser() && (o.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup || o.a.getWindowEnv() === r.a.OneSignalProxyFrame)) {
                    opener || parent ? c.b.contains(d, e) && (o.a.getWindowEnv() === r.a.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                        eventName: e
                        , eventData: t
                    }) : OneSignal.proxyFrame.retriggerRemoteEvent(e, t)) : a.a.error(`Could not send event '${e}' back to host page because no creator (opener or parent) found!`)
                }
            })
        }
        static _triggerLegacy(e, t) {
            const i = new CustomEvent(e, {
                bubbles: !0
                , cancelable: !0
                , detail: t
            });
            window.dispatchEvent(i)
        }
    }
}, function (e, t, i) {
    var n;
    n = function () {
        var e = !0;
        
        function t(t) {
            function i(e) {
                var i = t.match(e);
                return i && i.length > 1 && i[1] || ""
            }
            var n, s, o, r = i(/(ipod|iphone|ipad)/i)
                .toLowerCase()
                , a = !/like android/i.test(t) && /android/i.test(t)
                , c = /nexus\s*[0-6]\s*/i.test(t)
                , l = !c && /nexus\s*[0-9]+/i.test(t)
                , d = /CrOS/.test(t)
                , u = /silk/i.test(t)
                , g = /sailfish/i.test(t)
                , p = /tizen/i.test(t)
                , h = /(web|hpw)os/i.test(t)
                , m = /windows phone/i.test(t)
                , f = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t))
                , b = !r && !u && /macintosh/i.test(t)
                , S = !a && !g && !p && !h && /linux/i.test(t)
                , v = i(/edge\/(\d+(\.\d+)?)/i)
                , O = i(/version\/(\d+(\.\d+)?)/i)
                , y = /tablet/i.test(t) && !/tablet pc/i.test(t)
                , w = !y && /[^-]mobi/i.test(t)
                , E = /xbox/i.test(t);
            /opera/i.test(t) ? n = {
                name: "Opera"
                , opera: e
                , version: O || i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(t) ? n = {
                name: "Opera"
                , opera: e
                , version: i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
            } : /SamsungBrowser/i.test(t) ? n = {
                name: "Samsung Internet for Android"
                , samsungBrowser: e
                , version: O || i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /coast/i.test(t) ? n = {
                name: "Opera Coast"
                , coast: e
                , version: O || i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /yabrowser/i.test(t) ? n = {
                name: "Yandex Browser"
                , yandexbrowser: e
                , version: O || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(t) ? n = {
                name: "UC Browser"
                , ucbrowser: e
                , version: i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(t) ? n = {
                name: "Maxthon"
                , maxthon: e
                , version: i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(t) ? n = {
                name: "Epiphany"
                , epiphany: e
                , version: i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(t) ? n = {
                name: "Puffin"
                , puffin: e
                , version: i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(t) ? n = {
                name: "Sleipnir"
                , sleipnir: e
                , version: i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(t) ? n = {
                name: "K-Meleon"
                , kMeleon: e
                , version: i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : m ? (n = {
                name: "Windows Phone"
                , windowsphone: e
            }, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
                name: "Internet Explorer"
                , msie: e
                , version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : d ? n = {
                name: "Chrome"
                , chromeos: e
                , chromeBook: e
                , chrome: e
                , version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /chrome.+? edge/i.test(t) ? n = {
                name: "Microsoft Edge"
                , msedge: e
                , version: v
            } : /vivaldi/i.test(t) ? n = {
                name: "Vivaldi"
                , vivaldi: e
                , version: i(/vivaldi\/(\d+(\.\d+)?)/i) || O
            } : g ? n = {
                name: "Sailfish"
                , sailfish: e
                , version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(t) ? n = {
                name: "SeaMonkey"
                , seamonkey: e
                , version: i(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(t) ? (n = {
                name: "Firefox"
                , firefox: e
                , version: i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e)) : u ? n = {
                name: "Amazon Silk"
                , silk: e
                , version: i(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(t) ? n = {
                name: "PhantomJS"
                , phantom: e
                , version: i(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(t) ? n = {
                name: "SlimerJS"
                , slimer: e
                , version: i(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
                name: "BlackBerry"
                , blackberry: e
                , version: O || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : h ? (n = {
                name: "WebOS"
                , webos: e
                , version: O || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
                name: "Bada"
                , bada: e
                , version: i(/dolfin\/(\d+(\.\d+)?)/i)
            } : p ? n = {
                name: "Tizen"
                , tizen: e
                , version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
            } : /qupzilla/i.test(t) ? n = {
                name: "QupZilla"
                , qupzilla: e
                , version: i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
            } : /chromium/i.test(t) ? n = {
                name: "Chromium"
                , chromium: e
                , version: i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
            } : /chrome|crios|crmo/i.test(t) ? n = {
                name: "Chrome"
                , chrome: e
                , version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : a ? n = {
                name: "Android"
                , version: O
            } : /safari|applewebkit/i.test(t) ? (n = {
                name: "Safari"
                , safari: e
            }, O && (n.version = O)) : r ? (n = {
                name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
            }, O && (n.version = O)) : n = /googlebot/i.test(t) ? {
                name: "Googlebot"
                , googlebot: e
                , version: i(/googlebot\/(\d+(\.\d+))/i) || O
            } : {
                name: i(/^(.*)\/(.*) /)
                , version: (s = /^(.*)\/(.*) /, o = t.match(s), o && o.length > 1 && o[2] || "")
            }, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && O && (n.version = O)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || n.msedge || !a && !n.silk ? n.windowsphone || n.msedge || !r ? b ? n.mac = e : E ? n.xbox = e : f ? n.windows = e : S && (n.linux = e) : (n[r] = e, n.ios = e) : n.android = e;
            var P = "";
            n.windows ? P = function (e) {
                    switch (e) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                    }
                }(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? P = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? P = (P = i(/Mac OS X (\d+([_\.\s]\d+)*)/i))
                .replace(/[_\s]/g, ".") : r ? P = (P = i(/os (\d+([_\s]\d+)*) like mac os x/i))
                .replace(/[_\s]/g, ".") : a ? P = i(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? P = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? P = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? P = i(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (P = i(/tizen[\/\s](\d+(\.\d+)*)/i)), P && (n.osversion = P);
            var I = !n.windows && P.split(".")[0];
            return y || l || "ipad" == r || a && (3 == I || I >= 4 && !w) || n.silk ? n.tablet = e : (w || "iphone" == r || "ipod" == r || a || c || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
        }
        var i = t("undefined" != typeof navigator && navigator.userAgent || "");
        
        function n(e) {
            return e.split(".")
                .length
        }
        
        function s(e, t) {
            var i, n = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (i = 0; i < e.length; i++) n.push(t(e[i]));
            return n
        }
        
        function o(e) {
            for (var t = Math.max(n(e[0]), n(e[1])), i = s(e, function (e) {
                    var i = t - n(e);
                    return s((e += new Array(i + 1)
                                .join(".0"))
                            .split(".")
                            , function (e) {
                                return new Array(20 - e.length)
                                    .join("0") + e
                            })
                        .reverse()
                }); --t >= 0;) {
                if (i[0][t] > i[1][t]) return 1;
                if (i[0][t] !== i[1][t]) return -1;
                if (0 === t) return 0
            }
        }
        
        function r(e, n, s) {
            var r = i;
            "string" == typeof n && (s = n, n = void 0), void 0 === n && (n = !1), s && (r = t(s));
            var a = "" + r.version;
            for (var c in e)
                if (e.hasOwnProperty(c) && r[c]) {
                    if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
                    return o([a, e[c]]) < 0
                } return n
        }
        return i.test = function (e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("string" == typeof n && n in i) return !0
            }
            return !1
        }, i.isUnsupportedBrowser = r, i.compareVersions = o, i.check = function (e, t, i) {
            return !r(e, t, i)
        }, i._detect = t, i
    }, void 0 !== e && e.exports ? e.exports = n() : i(28)("bowser", n)
}, function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
        return n
    }), i.d(t, "a", function () {
        return InvalidArgumentError
    });
    var n, s = i(12);
    ! function (e) {
        e[e.Empty = 0] = "Empty", e[e.Malformed = 1] = "Malformed", e[e.EnumOutOfRange = 2] = "EnumOutOfRange"
    }(n || (n = {}));
    class InvalidArgumentError extends s.a {
        constructor(e, t) {
            switch (t) {
            case n.Empty:
                super(`Supply a non-empty value to '${e}'.`);
                break;
            case n.Malformed:
                super(`The value for '${e}' was malformed.`);
                break;
            case n.EnumOutOfRange:
                super(`The value for '${e}' was out of range of the expected input enum.`)
            }
            this.argument = e, this.reason = n[t], Object.setPrototypeOf(this, InvalidArgumentError.prototype)
        }
    }
}, function (e, t, i) {
    "use strict";
    (function (e) {
        i.d(t, "a", function () {
            return l
        });
        var n = i(8)
            , s = i.n(n)
            , o = i(3)
            , r = i(5)
            , a = i(1)
            , c = i(6);
        class l {
            static getBaseUrl() {
                return location.origin
            }
            static isLocalhostAllowedAsSecureOrigin() {
                return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin
            }
            static isUsingSubscriptionWorkaround() {
                const e = o.a.getWindowEnv();
                if (!OneSignal.config) throw new Error(`(${e.toString()}) isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.`);
                if (s.a.safari) return !1;
                const t = this.isLocalhostAllowedAsSecureOrigin();
                return l.internalIsUsingSubscriptionWorkaround(OneSignal.config.subdomain, t)
            }
            static internalIsUsingSubscriptionWorkaround(e, t) {
                if (s.a.safari) return !1;
                if (!0 === t && ("localhost" === location.hostname || "127.0.0.1" === location.hostname)) return !1;
                const i = o.a.getWindowEnv();
                return !(i !== r.a.Host && i !== r.a.CustomIframe || !e && "http:" !== location.protocol)
            }
            static redetectBrowserUserAgent() {
                return "" === s.a.name && "" === s.a.version ? s.a._detect(navigator.userAgent) : s.a
            }
            static isValidUuid(e) {
                return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)
            }
            static getRandomUuid() {
                let t = "";
                const i = "undefined" == typeof window ? e.crypto : window.crypto || window.msCrypto;
                return t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, i ? function (e) {
                    var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
                    return ("x" == e ? t : 3 & t | 8)
                        .toString(16)
                } : function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8)
                        .toString(16)
                })
            }
            static logMethodCall(e, ...t) {
                return a.a.debug(`Called %c${e}(${t.map(c.a.stringify).join(", ")})`, c.a.getConsoleStyle("code"), ".")
            }
        }
        t.b = l
    })
    .call(this, i(29))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return a
    });
    var n = i(3)
        , s = i(5)
        , o = i(8)
        , r = i.n(o);
    class a {
        static isBrowser() {
            return "undefined" != typeof window
        }
        static isSafari() {
            return a.isBrowser() && r.a.safari
        }
        static version() {
            return Number(150801)
        }
        static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
            return ["tw", "hant"]
        }
        static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
            return ["cn", "hans"]
        }
        static getLanguage() {
            let e = navigator.language;
            if (e) {
                let t = (e = e.toLowerCase())
                    .split("-");
                if ("zh" == t[0]) {
                    for (let e of a.TRADITIONAL_CHINESE_LANGUAGE_TAG)
                        if (-1 !== t.indexOf(e)) return "zh-Hant";
                    for (let e of a.SIMPLIFIED_CHINESE_LANGUAGE_TAG)
                        if (-1 !== t.indexOf(e)) return "zh-Hans";
                    return "zh-Hant"
                }
                return t[0].substring(0, 2)
            }
            return "en"
        }
        static supportsServiceWorkers() {
            switch (n.a.getWindowEnv()) {
            case s.a.ServiceWorker:
                return !0;
            default:
                return "undefined" != typeof navigator && "serviceWorker" in navigator
            }
        }
        static getSdkStylesVersionHash() {
            return "undefined" == typeof __SRC_STYLESHEETS_MD5_HASH__ ? "1" : __SRC_STYLESHEETS_MD5_HASH__
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });
    class n extends Error {
        constructor(e = "") {
            super(e), Object.defineProperty(this, "message", {
                configurable: !0
                , enumerable: !1
                , value: e
                , writable: !0
            }), Object.defineProperty(this, "name", {
                configurable: !0
                , enumerable: !1
                , value: this.constructor.name
                , writable: !0
            }), Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : (Object.defineProperty(this, "stack", {
                configurable: !0
                , enumerable: !1
                , value: new Error(e)
                    .stack
                , writable: !0
            }), Object.setPrototypeOf(this, n.prototype))
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
        return n
    }), i.d(t, "a", function () {
        return InvalidStateError
    });
    var n, s = i(12)
        , o = i(24);
    ! function (e) {
        e[e.MissingAppId = 0] = "MissingAppId", e[e.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", e[e.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", e[e.UnsupportedEnvironment = 3] = "UnsupportedEnvironment", e[e.MissingDomElement = 4] = "MissingDomElement", e[e.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated", e[e.NoProxyFrame = 6] = "NoProxyFrame"
    }(n || (n = {}));
    class InvalidStateError extends s.a {
        constructor(e, t) {
            switch (e) {
            case n.MissingAppId:
                super("Missing required app ID.");
                break;
            case n.RedundantPermissionMessage:
                let i = "";
                t && t.permissionPromptType && (i = `(${o.a[t.permissionPromptType]})`), super(`Another permission message ${i} is being displayed.`);
                break;
            case n.PushPermissionAlreadyGranted:
                super("Push permission has already been granted.");
                break;
            case n.UnsupportedEnvironment:
                super("The current environment does not support this operation.");
                break;
            case n.ServiceWorkerNotActivated:
                super("The service worker must be activated first.");
                break;
            case n.NoProxyFrame:
                super("No proxy frame.")
            }
            this.description = n[e], this.reason = e, Object.setPrototypeOf(this, InvalidStateError.prototype)
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "b", function () {
        return c
    }), i.d(t, "a", function () {
        return n
    });
    var n, s = i(0)
        , o = i(1)
        , r = i(13)
        , a = i(10);
    class c {
        static getRegistration() {
            return s.a(this, void 0, void 0, function* () {
                try {
                    return yield navigator.serviceWorker.getRegistration(location.href)
                } catch (e) {
                    return o.a.warn("[Service Worker Status] Error Checking service worker registration", location.href, e), null
                }
            })
        }
        static getServiceWorkerHref(e, t) {
            let i = "";
            if (e === n.WorkerA) i = t.workerBPath.getFullPath();
            else if (e === n.WorkerB || e === n.ThirdParty || e === n.None) i = t.workerAPath.getFullPath();
            else if (e === n.Bypassed) throw new r.a(r.b.UnsupportedEnvironment);
            return new URL(i, a.a.getBaseUrl())
                .href
        }
    }! function (e) {
        e.WorkerA = "Worker A (Main)", e.WorkerB = "Worker B (Updater)", e.ThirdParty = "3rd Party", e.Installing = "Installing", e.None = "None", e.Bypassed = "Bypassed", e.Indeterminate = "Indeterminate"
    }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
            return n
        })
        , function (e) {
            e.Development = "Development", e.Staging = "Staging", e.Production = "Production"
        }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
            return n
        })
        , function (e) {
            e.Secure = "Secure", e.SecureProxy = "Secure Proxy", e.InsecureProxy = "Insecure Proxy"
        }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return r
    });
    var n = i(0)
        , s = i(4)
        , o = i(7);
    class r {
        static triggerNotificationPermissionChanged(e = !1) {
            return n.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.privateGetNotificationPermission();
                (t !== (yield s.a.get("Options", "notificationPermission")) || e) && (yield s.a.put("Options", {
                    key: "notificationPermission"
                    , value: t
                }), o.a.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                    to: t
                }))
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return s
    });
    var n = i(0);
    class s {
        constructor() {
            this._events = {}
        }
        on(e, t) {
            return this._events[e] = this._events[e] || [], this._events[e].push(t), this
        }
        once(e, t) {
            const i = this;
            
            function n() {
                i.off(e, n), t.apply(this, arguments)
            }
            return n.listener = t, this.on(e, n), this
        }
        off(e, t) {
            const i = this._events[e];
            if (void 0 !== i) {
                for (let e = 0; e < i.length; e += 1)
                    if (i[e] === t || i[e].listener === t) {
                        i.splice(e, 1);
                        break
                    } 0 === i.length && this.removeAllListeners(e)
            }
            return this
        }
        removeAllListeners(e) {
            try {
                e ? delete this._events[e] : this._events = {}
            } catch (e) {}
            return this
        }
        listeners(e) {
            try {
                return this._events[e]
            } catch (e) {
                return
            }
        }
        numberOfListeners(e) {
            const t = this.listeners(e);
            return t ? t.length : 0
        }
        emit(...e) {
            return n.a(this, void 0, void 0, function* () {
                const t = e.shift();
                let i = this._events[t];
                if (void 0 !== i) {
                    const t = (i = i.slice(0))
                        .length;
                    for (let n = 0; n < t; n += 1) yield i[n].apply(this, e)
                }
                return this
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });
    class n {
        constructor(e, t, i) {
            this.emailId = e, this.emailAddress = t, this.emailAuthHash = i
        }
        serialize() {
            return {
                emailAddress: this.emailAddress
                , emailAuthHash: this.emailAuthHash
                , emailId: this.emailId
            }
        }
        static deserialize(e) {
            return new n(e.emailId, e.emailAddress, e.emailAuthHash)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
            return n
        })
        , function (e) {
            e.None = "None", e.UnitTesting = "Unit Testing"
        }(n || (n = {}))
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return s
    });
    var n = i(11);
    class s {
        static decodeHtmlEntities(e) {
            return n.a.isBrowser() && (s.decodeTextArea || (s.decodeTextArea = document.createElement("textarea"))), s.decodeTextArea ? (s.decodeTextArea.innerHTML = e, s.decodeTextArea.value) : e
        }
    }
    s.decodeTextArea = null
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return n
    });
    class n {
        serialize() {
            return {
                deviceId: this.deviceId
                , subscriptionToken: this.subscriptionToken
                , optedOut: this.optedOut
                , createdAt: this.createdAt
                , expirationTime: this.expirationTime
            }
        }
        static deserialize(e) {
            const t = new n;
            return t.deviceId = e.deviceId, t.subscriptionToken = e.subscriptionToken, t.optedOut = e.optedOut, t.createdAt = e.createdAt, t.expirationTime = e.expirationTime, t
        }
    }
}, function (e, t, i) {
    "use strict";
    i.d(t, "a", function () {
        return a
    });
    var n = i(0)
        , s = i(18)
        , o = i(1)
        , r = i(6);
    class a {
        constructor(e) {
            this.databaseName = e, this.emitter = new s.a
        }
        open(e) {
            return new Promise(t => {
                try {
                    var i = indexedDB.open(e, 1)
                } catch (e) {}
                if (!i) return null;
                i.onerror = this.onDatabaseOpenError, i.onblocked = this.onDatabaseOpenBlocked, i.onupgradeneeded = this.onDatabaseUpgradeNeeded, i.onsuccess = (() => {
                    this.database = i.result, this.database.onerror = this.onDatabaseError, this.database.onversionchange = this.onDatabaseVersionChange, t(this.database)
                })
            })
        }
        ensureDatabaseOpen() {
            return n.a(this, void 0, void 0, function* () {
                return this.openLock || (this.openLock = this.open(this.databaseName)), yield this.openLock, this.database
            })
        }
        onDatabaseOpenError(e) {
            e.preventDefault();
            const t = e.target.error;
            r.b.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || r.b.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? o.a.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : o.a.warn("OneSignal: Fatal error opening IndexedDb database:", t)
        }
        onDatabaseError(e) {
            o.a.debug("IndexedDb: Generic database error", e.target.errorCode)
        }
        onDatabaseOpenBlocked() {
            o.a.debug("IndexedDb: Blocked event")
        }
        onDatabaseVersionChange(e) {
            o.a.debug("IndexedDb: versionchange event")
        }
        onDatabaseUpgradeNeeded(e) {
            o.a.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
            const t = e.target.result;
            t.createObjectStore("Ids", {
                keyPath: "type"
            }), t.createObjectStore("NotificationOpened", {
                keyPath: "url"
            }), t.createObjectStore("Options", {
                keyPath: "key"
            }), "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0)
        }
        get(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield this.ensureDatabaseOpen(), t ? yield new Promise((i, n) => {
                    var s = this.database.transaction(e)
                        .objectStore(e)
                        .get(t);
                    s.onsuccess = (() => {
                        i(s.result)
                    }), s.onerror = (() => {
                        n(s.error)
                    })
                }): yield new Promise((t, i) => {
                    let n = {}
                        , s = this.database.transaction(e)
                        .objectStore(e)
                        .openCursor();
                    s.onsuccess = (e => {
                        var i = e.target.result;
                        if (i) {
                            let e = i.key;
                            n[e] = i.value, i.continue()
                        } else t(n)
                    }), s.onerror = (() => {
                        i(s.error)
                    })
                })
            })
        }
        put(e, t) {
            return n.a(this, void 0, void 0, function* () {
                return yield this.ensureDatabaseOpen(), yield new Promise((i, n) => {
                    try {
                        let s = this.database.transaction([e], "readwrite")
                            .objectStore(e)
                            .put(t);
                        s.onsuccess = (() => {
                            i(t)
                        }), s.onerror = (e => {
                            o.a.error("Database PUT Transaction Error:", e), n(e)
                        })
                    } catch (e) {
                        o.a.error("Database PUT Error:", e), n(e)
                    }
                })
            })
        }
        remove(e, t) {
            if (t) var i = "delete";
            else i = "clear";
            return new Promise((n, s) => {
                try {
                    let r = this.database.transaction([e], "readwrite")
                        .objectStore(e)[i](t);
                    r.onsuccess = (() => {
                        n(t)
                    }), r.onerror = (e => {
                        o.a.error("Database REMOVE Transaction Error:", e), s(e)
                    })
                } catch (e) {
                    o.a.error("Database REMOVE Error:", e), s(e)
                }
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    var n;
    i.d(t, "a", function () {
            return n
        })
        , function (e) {
            e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell"
        }(n || (n = {}))
}, function (e, t) {
    e.exports = function (e, t, s) {
        "function" == typeof t && (s = t, t = {});
        t || (t = {});
        var o, r, a = t.prefix || "__jp"
            , c = t.name || a + i++
            , l = t.param || "callback"
            , d = null != t.timeout ? t.timeout : 6e4
            , u = encodeURIComponent
            , g = document.getElementsByTagName("script")[0] || document.head;
        d && (r = setTimeout(function () {
            p(), s && s(new Error("Timeout"))
        }, d));
        
        function p() {
            o.parentNode && o.parentNode.removeChild(o), window[c] = n, r && clearTimeout(r)
        }
        return window[c] = function (e) {
                p(), s && s(null, e)
            }, e = (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + u(c))
            .replace("?&", "?"), (o = document.createElement("script"))
            .src = e, g.parentNode.insertBefore(o, g)
            , function () {
                window[c] && p()
            }
    };
    var i = 0;
    
    function n() {}
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1)
        , s = i(2);
    class o {
        static doReplay(e) {
            e && (Array.isArray(e) ? o.processAsArray(e) : e.constructor && "OneSignalStubES6" === e.constructor.name ? o.processAsES6Stub(e) : n.a.error("window.OneSignal is an unexpected type! Should be an Array, OneSignalStubES6, or undefined."))
        }
        static processAsArray(e) {
            for (const t of e) try {
                OneSignal.push(t)
            } catch (e) {
                n.a.error(e)
            }
        }
        static processAsES6Stub(e) {
            e.SERVICE_WORKER_PATH && (OneSignal.SERVICE_WORKER_PATH = e.SERVICE_WORKER_PATH), e.SERVICE_WORKER_UPDATER_PATH && (OneSignal.SERVICE_WORKER_UPDATER_PATH = e.SERVICE_WORKER_UPDATER_PATH), e.currentLogLevel && OneSignal.log.setLevel(e.currentLogLevel), e.SERVICE_WORKER_PARAM && (OneSignal.SERVICE_WORKER_PARAM = e.SERVICE_WORKER_PARAM), e.preExistingArray && o.processAsArray(e.preExistingArray);
            for (const t of e.directFunctionCallsArray) {
                const e = OneSignal[t.functionName].apply(OneSignal, t.args);
                t.delayedPromise && e instanceof Promise && e.then(function (...e) {
                        t.delayedPromise && t.delayedPromise.resolve && t.delayedPromise.resolve.apply(null, e)
                    })
                    .catch(function (...e) {
                        t.delayedPromise && t.delayedPromise.reject && t.delayedPromise.reject.apply(null, e)
                    })
            }
        }
    }
    "undefined" != typeof window && function () {
        if (Object(s.n)(), Object(s.l)() > 1) return n.a.warn("OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."), void n.a.debug("OneSignal: Exiting from SDK initialization to prevent double-initialization errors. " + `Occurred ${Object(s.l)()} times.`);
        const e = window.OneSignal;
        window.OneSignal = i(27)
            .default, o.doReplay(e)
    }()
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n, s, o, r, a = i(0)
        , c = i(8)
        , l = i.n(c)
        , d = i(11)
        , InvalidArgumentError = i(9)
        , InvalidStateError = i(13)
        , u = i(12);
    (s = n || (n = {}))[s.Unknown = 0] = "Unknown", s[s.NoDeviceId = 1] = "NoDeviceId", s[s.NoEmailSet = 2] = "NoEmailSet", s[s.OptedOut = 3] = "OptedOut";
    class g extends u.a {
        constructor(e) {
            switch (e) {
            case n.Unknown || n.NoDeviceId:
                super("This operation can only be performed after the user is subscribed.");
                break;
            case n.NoEmailSet:
                super("No email is currently set.");
                break;
            case n.OptedOut:
                super("The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.")
            }
            this.reason = n[e], Object.setPrototypeOf(this, g.prototype)
        }
    }(r = o || (o = {}))[r.InvalidAppId = 0] = "InvalidAppId", r[r.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush", r[r.MissingSubdomain = 2] = "MissingSubdomain", r[r.WrongSiteUrl = 3] = "WrongSiteUrl", r[r.MultipleInitialization = 4] = "MultipleInitialization", r[r.MissingSafariWebId = 5] = "MissingSafariWebId", r[r.Unknown = 6] = "Unknown";
    class p extends u.a {
        constructor(e, t) {
            switch (e) {
            case o.InvalidAppId:
                super("OneSignal: This app ID does not match any existing app. Double check your app ID.");
                break;
            case o.AppNotConfiguredForWebPush:
                super("OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ).");
                break;
            case o.MissingSubdomain:
                super("OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB).");
                break;
            case o.WrongSiteUrl:
                t && t.siteUrl ? super(`OneSignal: This web push config can only be used on ${new URL(t.siteUrl).origin}. Your current origin is ${location.origin}.`) : super("OneSignal: This web push config can not be used on the current site.");
                break;
            case o.MultipleInitialization:
                super("OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.");
                break;
            case o.MissingSafariWebId:
                super("OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.");
                break;
            case o.Unknown:
                super("OneSignal: An unknown initialization error occurred.")
            }
            this.reason = o[e], Object.setPrototypeOf(this, p.prototype)
        }
    }
    var h, m, f, b = i(7);
    class S {
        static put(e, t) {
            return void 0 === S.store[e] && (S.store[e] = [null, null]), S.store[e].push(t), S.store[e].length == S.LIMIT + 1 && S.store[e].shift(), S.store[e]
        }
        static get(e) {
            return void 0 === S.store[e] && (S.store[e] = [null, null]), S.store[e]
        }
        static getFirst(e) {
            return S.get(e)[0]
        }
        static getLast(e) {
            return S.get(e)[1]
        }
        static remove(e) {
            delete S.store[e]
        }
        static isEmpty(e) {
            let t = S.get(e);
            return null === t[0] && null === t[1]
        }
    }
    S.store = {}, S.LIMIT = 2, (m = h || (h = {}))[m.MissingAppId = 0] = "MissingAppId";
    class v extends u.a {
        constructor(e) {
            switch (e) {
            case h.MissingAppId:
                super("The API call is missing an app ID.")
            }
            Object.setPrototypeOf(this, v.prototype)
        }
    }
    class O extends u.a {
        constructor() {
            super("This code is not implemented yet."), Object.setPrototypeOf(this, O.prototype)
        }
    }! function (e) {
        e[e.ChromeLike = 5] = "ChromeLike", e[e.Safari = 7] = "Safari", e[e.Firefox = 8] = "Firefox", e[e.Edge = 12] = "Edge", e[e.Email = 11] = "Email"
    }(f || (f = {}));
    var y = i(10);
    class w {
        constructor() {
            this.language = d.a.getLanguage(), this.timezone = -60 * (new Date)
                .getTimezoneOffset();
            const e = parseInt(String(l.a.version), 10);
            this.browserVersion = isNaN(e) ? -1 : e, this.deviceModel = navigator.platform, this.sdkVersion = d.a.version()
                .toString(), this.deliveryPlatform = this.getDeliveryPlatform()
        }
        isSafari() {
            return l.a.safari && void 0 !== window.safari && void 0 !== window.safari.pushNotification
        }
        getDeliveryPlatform() {
            const e = y.a.redetectBrowserUserAgent();
            return this.isSafari() ? f.Safari : e.firefox ? f.Firefox : e.msedge ? f.Edge : f.ChromeLike
        }
        serialize() {
            const e = {
                device_type: this.deliveryPlatform
                , language: this.language
                , timezone: this.timezone
                , device_os: this.browserVersion
                , device_model: this.deviceModel
                , sdk: this.sdkVersion
                , notification_types: this.subscriptionState
            };
            return this.appId && (e.app_id = this.appId), e
        }
        deserialize(e) {
            throw new O
        }
    }
    class E extends w {
        constructor(e, t, i) {
            super(), this.email = e, this.emailAuthHash = t, this.pushDeviceRecordId = i, this.deliveryPlatform = f.Email
        }
        serialize() {
            const e = super.serialize();
            return this.email && (e.identifier = this.email), this.emailAuthHash && (e.email_auth_hash = this.emailAuthHash), this.pushDeviceRecordId && (e.device_player_id = this.pushDeviceRecordId), e
        }
        deserialize(e) {
            throw new O
        }
    }
    var P = i(3)
        , I = i(6);
    class T {
        static get(e, t, i) {
            return T.call("GET", e, t, i)
        }
        static post(e, t, i) {
            return T.call("POST", e, t, i)
        }
        static put(e, t, i) {
            return T.call("PUT", e, t, i)
        }
        static delete(e, t, i) {
            return T.call("DELETE", e, t, i)
        }
        static call(e, t, i, n) {
            if ("GET" === e) {
                if (t.indexOf("players") > -1 && -1 === t.indexOf("app_id=")) return console.error("Calls to player api are not permitted without app_id"), Promise.reject(new v(h.MissingAppId))
            } else if (t.indexOf("players") > -1 && (!i || !i.app_id)) return console.error("Calls to player api are not permitted without app_id"), Promise.reject(new v(h.MissingAppId));
            let s = new Headers;
            if (s.append("SDK-Version", `onesignal/web/${d.a.version()}`), s.append("Content-Type", "application/json;charset=UTF-8"), n)
                for (let e of Object.keys(n)) s.append(e, n[e]);
            const o = {
                method: e || "NO_METHOD_SPECIFIED"
                , headers: s
                , cache: "no-cache"
            };
            let r;
            return i && (o.body = JSON.stringify(i)), fetch(P.a.getOneSignalApiUrl()
                    .toString() + "/" + t, o)
                .then(e => (r = e.status, e.json()))
                .then(e => {
                    if (r >= 200 && r < 300) return e;
                    if ("no-user-id-error" !== T.identifyError(e)) return Promise.reject(e)
                })
        }
        static identifyError(e) {
            if (!e || !e.errors) return "no-error";
            let t = e.errors;
            return I.a.contains(t, "No user with this id found") || I.a.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error"
        }
    }
    var C = T;
    class A {
        static getPlayer(e, t) {
            return I.b.enforceAppId(e), I.b.enforcePlayerId(t), C.get(`players/${t}?app_id=${e}`)
        }
        static updatePlayer(e, t, i) {
            return I.b.enforceAppId(e), I.b.enforcePlayerId(t), C.put(`players/${t}`, Object.assign({
                app_id: e
            }, i))
        }
        static sendNotification(e, t, i, n, s, o, r, a) {
            var c = {
                app_id: e
                , contents: n
                , include_player_ids: t
                , isAnyWeb: !0
                , data: r
                , web_buttons: a
            };
            return i && (c.headings = i), s && (c.url = s), o && (c.chrome_web_icon = o, c.firefox_icon = o), I.b.trimUndefined(c), C.post("notifications", c)
        }
        static createUser(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.serialize();
                I.b.enforceAppId(t.app_id);
                const i = yield C.post("players", t);
                return i && i.success ? i.id : null
            })
        }
        static createEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                I.b.enforceAppId(e.appId);
                const n = new E(t.emailAddress, t.emailAuthHash, i);
                n.appId = e.appId;
                const s = yield C.post("players", n.serialize());
                return s && s.success ? s.id : null
            })
        }
        static updateEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                I.b.enforceAppId(e.appId), I.b.enforcePlayerId(t.emailId);
                const n = new E(t.emailAddress, t.emailAuthHash, i);
                n.appId = e.appId;
                const s = yield C.put(`players/${t.emailId}`, n.serialize());
                return s && s.success ? s.id : null
            })
        }
        static logoutEmail(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                I.b.enforceAppId(e.appId), I.b.enforcePlayerId(i);
                const n = yield C.post(`players/${i}/email_logout`, {
                    app_id: e.appId
                    , parent_player_id: t.emailId
                    , email_auth_hash: t.emailAuthHash ? t.emailAuthHash : void 0
                });
                return !(!n || !n.success)
            })
        }
        static updateUserSession(e, t) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    const i = t.serialize();
                    I.b.enforceAppId(i.app_id), I.b.enforcePlayerId(e);
                    const n = yield C.post(`players/${e}/on_session`, i);
                    return n.id ? n.id : e
                } catch (e) {
                    throw e && Array.isArray(e.errors) && e.errors.length > 0 && I.b.contains(e.errors[0], "app_id not found") ? new v(h.MissingAppId) : e
                }
            })
        }
    }
    var N = i(4)
        , M = i(1)
        , k = i(2);
    class _ {
        static initialize(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!e || !e.enabled) return;
                if (M.a.info("Inititalize CustomLink"), 0 !== (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet())) return void M.a.debug("Not initializing custom link button because styles failed to load.");
                document.querySelectorAll(_.containerSelector)
                    .forEach(t => {
                        _.isInitialized(t) || _.injectMarkup(t, e)
                    });
                const t = yield OneSignal.privateIsPushNotificationsEnabled(), i = yield OneSignal.internalIsOptedOut();
                document.querySelectorAll(_.subscribeSelector)
                    .forEach(n => _.initSubscribeElement(n, e, t, i)), document.querySelectorAll(_.explanationSelector)
                    .forEach(i => _.initExplanationElement(i, e, t))
            })
        }
        static injectMarkup(e, t) {
            if (t.text) {
                if (e.innerHTML = "", t.text.explanation) {
                    const t = document.createElement("p");
                    Object(k.a)(t, _.explanationClass), e.appendChild(t)
                }
                if (t.text.subscribe) {
                    const t = document.createElement("button");
                    Object(k.a)(t, _.subscribeClass), e.appendChild(t)
                }
                _.markAsInitialized(e)
            } else M.a.error("CustomLink: required property 'text' is missing in the config")
        }
        static initSubscribeElement(e, t, i, n) {
            t.text && t.text.subscribe && (i || (e.textContent = t.text.subscribe)), t.text && t.text.unsubscribe && i && (e.textContent = t.text.unsubscribe), _.setResetClass(e), _.setStateClass(e, i), _.setStyleClass(e, t), _.setSizeClass(e, t), _.setCustomColors(e, t), !0 !== t.unsubscribeEnabled && Object(k.a)(e, "hide"), e.setAttribute(_.subscriptionStateAttribute, i.toString()), e.setAttribute(_.optedOutAttribute, n.toString()), _.isInitialized(e) || (e.addEventListener("click", () => {
                M.a.info("CustomLink: subscribe clicked"), _.handleClick(e)
            }), _.markAsInitialized(e))
        }
        static handleClick(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = "true" === e.getAttribute(_.subscriptionStateAttribute)
                    , i = "true" === e.getAttribute(_.optedOutAttribute);
                if (t) {
                    (yield OneSignal.privateIsPushNotificationsEnabled()) && (yield OneSignal.setSubscription(!1))
                } else if (i) yield OneSignal.setSubscription(!0);
                else {
                    const e = {
                        autoAccept: !OneSignal.environmentInfo.requiresUserInteraction
                    };
                    yield OneSignal.registerForPushNotifications(e)
                }
            })
        }
        static initExplanationElement(e, t, i) {
            t.text && t.text.explanation && (e.textContent = t.text.explanation), _.setResetClass(e), _.setStateClass(e, i), _.setSizeClass(e, t), !0 !== t.unsubscribeEnabled && Object(k.a)(e, "hide")
        }
        static setCustomColors(e, t) {
            "button" === t.style && t.color && t.color.button && t.color.text ? (e.style.backgroundColor = t.color.button, e.style.color = t.color.text) : "link" === t.style && t.color && t.color.text && (e.style.color = t.color.text)
        }
        static setStateClass(e, t) {
            const i = t ? "state-unsubscribed" : "state-subscribed"
                , n = t ? "state-subscribed" : "state-unsubscribed";
            Object(k.m)(e, i) && Object(k.t)(e, i), Object(k.m)(e, n) || Object(k.a)(e, n)
        }
        static setStyleClass(e, t) {
            if (!t || !t.style) return;
            const i = t.style;
            Object(k.m)(e, i) || Object(k.a)(e, i)
        }
        static setSizeClass(e, t) {
            if (!t || !t.size) return;
            const i = t.size;
            Object(k.m)(e, i) || Object(k.a)(e, i)
        }
        static setResetClass(e) {
            const t = _.resetClass;
            Object(k.m)(e, t) || Object(k.a)(e, t)
        }
        static markAsInitialized(e) {
            e.setAttribute(_.initializedAttribute, "true")
        }
        static isInitialized(e) {
            return "true" === e.getAttribute(_.initializedAttribute)
        }
    }
    _.initializedAttribute = "data-cl-initialized", _.subscriptionStateAttribute = "data-cl-state", _.optedOutAttribute = "data-cl-optedout", _.containerClass = "onesignal-customlink-container", _.containerSelector = `.${_.containerClass}`, _.subscribeClass = "onesignal-customlink-subscribe", _.subscribeSelector = `.${_.subscribeClass}`, _.explanationClass = "onesignal-customlink-explanation", _.explanationSelector = `.${_.explanationClass}`, _.resetClass = "onesignal-reset";
    var x = i(21);
    class R {
        static onNotificationPermissionChange() {
            R.checkAndTriggerSubscriptionChanged()
        }
        static onInternalSubscriptionSet(e) {
            return a.a(this, void 0, void 0, function* () {
                S.put("subscription.optedOut", e)
            })
        }
        static checkAndTriggerSubscriptionChanged() {
            return a.a(this, void 0, void 0, function* () {
                y.a.logMethodCall("checkAndTriggerSubscriptionChanged");
                const e = yield OneSignal.context.subscriptionManager.getSubscriptionState(), t = yield OneSignal.privateIsPushNotificationsEnabled(), i = yield N.a.getAppState(), {
                    lastKnownPushEnabled: n
                } = i;
                (null === n || t !== n) && (M.a.info("The user's subscription state changed from " + `${null===n?"(not stored)":n} ⟶ ${e.subscribed}`), i.lastKnownPushEnabled = t, yield N.a.setAppState(i), R.triggerSubscriptionChanged(t))
            })
        }
        static _onSubscriptionChanged(e) {
            return a.a(this, void 0, void 0, function* () {
                R.onSubscriptionChanged_showWelcomeNotification(e), R.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(), R.onSubscriptionChanged_updateCustomLink()
            })
        }
        static onSubscriptionChanged_showWelcomeNotification(e) {
            return a.a(this, void 0, void 0, function* () {
                if (OneSignal.__doNotShowWelcomeNotification) M.a.debug("Not showing welcome notification because user has previously subscribed.");
                else if (!0 === e) {
                    const {
                        deviceId: e
                    } = yield N.a.getSubscription(), {
                        appId: t
                    } = yield N.a.getAppConfig();
                    let i = OneSignal.config.userConfig.welcomeNotification
                        , n = void 0 !== i && !0 === i.disable
                        , s = void 0 !== i && void 0 !== i.title && null !== i.title ? i.title : ""
                        , o = void 0 !== i && void 0 !== i.message && null !== i.message && i.message.length > 0 ? i.message : "Thanks for subscribing!"
                        , r = new URL(location.href)
                        .origin + "?_osp=do_not_open"
                        , a = i && i.url && i.url.length > 0 ? i.url : r;
                    s = x.a.decodeHtmlEntities(s), o = x.a.decodeHtmlEntities(o), n || (M.a.debug("Sending welcome notification."), A.sendNotification(t, [e], {
                        en: s
                    }, {
                        en: o
                    }, a, null, {
                        __isOneSignalWelcomeNotification: !0
                    }, void 0), b.a.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                        title: s
                        , message: o
                        , url: a
                    }))
                }
            })
        }
        static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
            return a.a(this, void 0, void 0, function* () {
                if (!OneSignal.config.userConfig.notifyButton) return;
                const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                if (e && "function" == typeof e && OneSignal.notifyButton) {
                    !1 !== (yield e()) ? (M.a.debug("Showing notify button because display predicate returned true."), OneSignal.notifyButton.launcher.show()) : (M.a.debug("Hiding notify button because display predicate returned false."), OneSignal.notifyButton.launcher.hide())
                }
            })
        }
        static onSubscriptionChanged_updateCustomLink() {
            return a.a(this, void 0, void 0, function* () {
                OneSignal.config.userConfig.promptOptions && (yield _.initialize(OneSignal.config.userConfig.promptOptions.customlink))
            })
        }
        static triggerSubscriptionChanged(e) {
            b.a.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e)
        }
        static fireStoredNotificationClicks(e = document.URL) {
            return a.a(this, void 0, void 0, function* () {
                function t(e) {
                    return a.a(this, void 0, void 0, function* () {
                        const t = yield N.a.getAppState();
                        t.clickedNotifications[e.url] = null, yield N.a.setAppState(t);
                        const {
                            data: i
                            , timestamp: n
                        } = e;
                        if (n) {
                            if ((Date.now() - n) / 1e3 / 60 > 5) return
                        }
                        b.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, i)
                    })
                }
                const i = yield N.a.getAppState();
                if ("origin" === (yield N.a.get("Options", "notificationClickHandlerMatch"))) {
                    for (const e of Object.keys(i.clickedNotifications))
                        if (new URL(e)
                            .origin === location.origin) {
                            yield t(i.clickedNotifications[e])
                        }
                } else {
                    var n = i.clickedNotifications[e];
                    if (n) yield t(n);
                    else if (!n && e.endsWith("/")) {
                        var s = e.substring(0, e.length - 1);
                        (n = i.clickedNotifications[s]) && (yield t(n))
                    }
                }
            })
        }
    }
    var D, W, U = i(5);
    class B {
        static promiseStub() {
            return {
                then: B.promiseStub
                , catch: B.promiseStub
            }
        }
        static ensureBackwardsCompatibility(e) {
            B.environmentPolyfill(e), B.postmams(e), e.syncHashedEmail = B.promiseStub
        }
        static environmentPolyfill(e) {
            e.environment = {}, e.environment.getEnv = function () {
                return ""
            }, e.environment.isPopup = function () {
                return P.a.getWindowEnv() === U.a.OneSignalSubscriptionPopup
            }, e.environment.isIframe = function () {
                return P.a.getWindowEnv() === U.a.OneSignalProxyFrame
            }
        }
        static postmams(e) {
            const t = function () {
                    this.messenger.message.apply(this.messenger, arguments)
                }
                , i = function () {
                    this.messenger.postMessage.apply(this.messenger, arguments)
                };
            
            function n(e) {
                e.message = t, e.postMessage = i
            }
            e.proxyFrame && (e.iframePostmam = e.proxyFrame, n(e.iframePostmam)), e.subscriptionPopup && (e.popupPostmam = e.subscriptionPopup, n(e.popupPostmam)), e.subscriptionModal && (e.modalPostmam = e.subscriptionModal, n(e.modalPostmam))
        }
    }! function (e) {
        e.Default = "default", e.Granted = "granted", e.Denied = "denied"
    }(D || (D = {}));
    class L {
        static isLocalStorageSupported() {
            try {
                return "undefined" != typeof localStorage && (localStorage.getItem("test"), !0)
            } catch (e) {
                return !1
            }
        }
        static setItem(e, t, i) {
            if (!L.isLocalStorageSupported()) return;
            const n = void 0 !== i ? 60 * i * 1e3 : 0
                , s = {
                    value: JSON.stringify(t)
                    , timestamp: void 0 !== i ? (new Date)
                        .getTime() + n : void 0
                };
            localStorage.setItem(e, JSON.stringify(s))
        }
        static getItem(e) {
            if (!L.isLocalStorageSupported()) return null;
            const t = localStorage.getItem(e);
            let i;
            try {
                i = JSON.parse(t)
            } catch (e) {
                return null
            }
            if (null === i) return null;
            if (i.timestamp && (new Date)
                .getTime() >= i.timestamp) return localStorage.removeItem(e), null;
            let n = i.value;
            try {
                n = JSON.parse(i.value)
            } catch (e) {
                return n
            }
            return n
        }
        static removeItem(e) {
            if (!L.isLocalStorageSupported()) return null;
            localStorage.removeItem(e)
        }
    }! function (e) {
        e[e.Default = 0] = "Default", e[e.Subscribed = 1] = "Subscribed", e[e.MutedByApi = -2] = "MutedByApi", e[e.NotSubscribed = -10] = "NotSubscribed", e[e.TemporaryWebRecord = -20] = "TemporaryWebRecord", e[e.PermissionRevoked = -21] = "PermissionRevoked", e[e.PushSubscriptionRevoked = -22] = "PushSubscriptionRevoked", e[e.ServiceWorkerStatus403 = -23] = "ServiceWorkerStatus403", e[e.ServiceWorkerStatus404 = -24] = "ServiceWorkerStatus404"
    }(W || (W = {}));
    var j, H, F = i(17);
    class V {
        static getCurrentNotificationType() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
                if (e === D.Default) return W.Default;
                if (e === D.Denied) return y.a.isUsingSubscriptionWorkaround() ? W.Default : W.NotSubscribed;
                const t = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
                if (e === D.Granted && t) {
                    return (yield OneSignal.privateIsPushNotificationsEnabled()) ? W.Subscribed : W.MutedByApi
                }
                return W.Default
            })
        }
        static getNotificationTypeFromOptIn(e) {
            return 1 == e || null == e ? W.Subscribed : W.MutedByApi
        }
        static wasHttpsNativePromptDismissed() {
            return "dismissed" === L.getItem("onesignal-notification-prompt")
        }
        static markHttpPopoverShown() {
            sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true")
        }
        static isHttpPromptAlreadyShown() {
            return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
        }
        static checkAndTriggerNotificationPermissionChanged() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield N.a.get("Options", "notificationPermission"), t = yield OneSignal.getNotificationPermission();
                e !== t && (yield F.a.triggerNotificationPermissionChanged(), yield N.a.put("Options", {
                    key: "notificationPermission"
                    , value: t
                }))
            })
        }
        static getNotificationIcons() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield V.getAppId();
                if (!e) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                var t = `${P.a.getOneSignalApiUrl().toString()}/apps/${e}/icon`;
                const i = yield(yield fetch(t))
                    .json();
                if (i.errors) throw M.a.error(`API call %c${t}`, I.a.getConsoleStyle("code"), "failed with:", i.errors), new Error("Failed to get notification icons.");
                return i
            })
        }
        static getSlidedownPermissionMessageOptions(e) {
            const t = "We'd like to show you notifications for the latest news and updates.";
            return e ? e.slidedown ? {
                enabled: e.slidedown.enabled
                , autoPrompt: e.slidedown.autoPrompt
                , actionMessage: e.slidedown.actionMessage || t
                , acceptButtonText: e.slidedown.acceptButtonText || "Allow"
                , cancelButtonText: e.slidedown.cancelButtonText || "No Thanks"
            } : {
                enabled: !1
                , autoPrompt: !1
                , actionMessage: e.actionMessage || t
                , acceptButtonText: e.acceptButtonText || "Allow"
                , cancelButtonText: e.cancelButtonText || "No Thanks"
            } : {
                enabled: !1
                , autoPrompt: !1
                , actionMessage: t
                , acceptButtonText: "Allow"
                , cancelButtonText: "No Thanks"
            }
        }
        static getFullscreenPermissionMessageOptions(e) {
            return e ? e.fullscreen ? {
                autoAcceptTitle: e.fullscreen.autoAcceptTitle
                , actionMessage: e.fullscreen.actionMessage
                , exampleNotificationTitleDesktop: e.fullscreen.title
                , exampleNotificationTitleMobile: e.fullscreen.title
                , exampleNotificationMessageDesktop: e.fullscreen.message
                , exampleNotificationMessageMobile: e.fullscreen.message
                , exampleNotificationCaption: e.fullscreen.caption
                , acceptButtonText: e.fullscreen.acceptButton
                , cancelButtonText: e.fullscreen.cancelButton
            } : e : null
        }
        static getPromptOptionsQueryString() {
            let e = "";
            if (V.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)) {
                let t = V.getPromptOptionsPostHash();
                for (let i of Object.keys(t)) {
                    e += "&" + i + "=" + t[i]
                }
            }
            return e
        }
        static getPromptOptionsPostHash() {
            let e = V.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
            if (e) {
                var t = {
                    exampleNotificationTitleDesktop: "exampleNotificationTitle"
                    , exampleNotificationMessageDesktop: "exampleNotificationMessage"
                    , exampleNotificationTitleMobile: "exampleNotificationTitle"
                    , exampleNotificationMessageMobile: "exampleNotificationMessage"
                };
                for (let i of Object.keys(t)) {
                    let n = t[i];
                    e[i] && (e[n] = e[i])
                }
                for (var i = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], n = {}, s = 0; s < i.length; s++) {
                    var o = i[s]
                        , r = e[o]
                        , a = encodeURIComponent(r);
                    (r || !1 === r || "" === r) && (n[o] = a)
                }
            }
            return n
        }
        static triggerCustomPromptClicked(e) {
            b.a.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
                result: e
            })
        }
        static getAppId() {
            return a.a(this, void 0, void 0, function* () {
                if (OneSignal.config.appId) return Promise.resolve(OneSignal.config.appId);
                return yield N.a.get("Ids", "appId")
            })
        }
    }(H = j || (j = {}))[H.Blocked = 0] = "Blocked", H[H.Dismissed = 1] = "Dismissed", H[H.Default = 2] = "Default";
    class $ extends u.a {
        constructor(e) {
            switch (e) {
            case j.Dismissed:
                super("The user dismissed the permission prompt.");
                break;
            case j.Blocked:
                super("Notification permissions are blocked.");
                break;
            case j.Default:
                super("Notification permissions have not been granted yet.")
            }
            this.reason = e, Object.setPrototypeOf(this, $.prototype)
        }
    }
    class G {
        static get STORED_PERMISSION_KEY() {
            return "storedNotificationPermission"
        }
        getNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield this.getReportedNotificationPermission(e);
                return (yield this.isPermissionEnvironmentAmbiguous(t)) ? yield this.getInterpretedAmbiguousPermission(t): t
            })
        }
        getReportedNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                return l.a.safari ? G.getSafariNotificationPermission(e) : y.b.isUsingSubscriptionWorkaround() ? yield this.getOneSignalSubdomainNotificationPermission(e): this.getW3cNotificationPermission()
            })
        }
        static getSafariNotificationPermission(e) {
            if (e) return window.safari.pushNotification.permission(e)
                .permission;
            throw new InvalidArgumentError.a("safariWebId", InvalidArgumentError.b.Empty)
        }
        getW3cNotificationPermission() {
            return window.Notification.permission
        }
        getOneSignalSubdomainNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                return new Promise(t => {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                        safariWebId: e
                    }, e => {
                        let i = e.data;
                        t(i)
                    })
                })
            })
        }
        isPermissionEnvironmentAmbiguous(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = y.b.redetectBrowserUserAgent();
                return !t.safari && !t.firefox && e === D.Denied && (this.isCurrentFrameContextCrossOrigin() || (yield P.a.isFrameContextInsecure()) || y.b.isUsingSubscriptionWorkaround() || P.a.isInsecureOrigin())
            })
        }
        isCurrentFrameContextCrossOrigin() {
            let e;
            try {
                e = window.top.location.origin
            } catch (e) {
                return !0
            }
            return window.top !== window && e !== window.location.origin
        }
        getInterpretedAmbiguousPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                switch (e) {
                case D.Denied:
                    const t = this.getStoredPermission();
                    return t || D.Default;
                default:
                    return e
                }
            })
        }
        getStoredPermission() {
            return q.getStoredPermission()
        }
        setStoredPermission(e) {
            q.setStoredPermission(e)
        }
        updateStoredPermission() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield this.getNotificationPermission();
                return this.setStoredPermission(e)
            })
        }
    }
    const z = "isOptedOut"
        , K = "isPushNotificationsEnabled";
    class q {
        static getIsOptedOut() {
            return "true" === localStorage.getItem(z)
        }
        static getIsPushNotificationsEnabled() {
            return "true" === localStorage.getItem(K)
        }
        static setIsOptedOut(e) {
            localStorage.setItem(z, e.toString())
        }
        static setIsPushNotificationsEnabled(e) {
            localStorage.setItem(K, e.toString())
        }
        static setStoredPermission(e) {
            localStorage.setItem(G.STORED_PERMISSION_KEY, e)
        }
        static getStoredPermission() {
            switch (localStorage.getItem(G.STORED_PERMISSION_KEY) || "default") {
            case "granted":
                return D.Granted;
            case "denied":
                return D.Denied;
            default:
                return D.Default
            }
        }
    }
    class Y {
        static registerForPush() {
            return a.a(this, void 0, void 0, function* () {
                const e = q.getIsPushNotificationsEnabled();
                return yield Y.internalRegisterForPush(e)
            })
        }
        static internalRegisterForPush(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = OneSignal.context;
                let i;
                if (e && !t.sessionManager.isFirstPageView()) return M.a.debug("Not registering for push because the user is subscribed and this is not the first page view."), null;
                if ("undefined" != typeof OneSignal) {
                    if (OneSignal._isRegisteringForPush) return null;
                    OneSignal._isRegisteringForPush = !0
                }
                switch (P.a.getWindowEnv()) {
                case U.a.Host:
                case U.a.OneSignalSubscriptionModal:
                    try {
                        const e = yield t.subscriptionManager.subscribe(0);
                        i = yield t.subscriptionManager.registerSubscription(e), t.sessionManager.incrementPageViewCount(), yield F.a.triggerNotificationPermissionChanged(), yield R.checkAndTriggerSubscriptionChanged()
                    } catch (e) {
                        M.a.info(e)
                    }
                    break;
                case U.a.OneSignalSubscriptionPopup:
                    const e = opener || parent;
                    let n;
                    yield t.permissionManager.updateStoredPermission();
                    try {
                        n = yield t.subscriptionManager.subscribe(1), yield t.permissionManager.updateStoredPermission()
                    } catch (i) {
                        if (yield t.permissionManager.updateStoredPermission(), i instanceof $) switch (i.reason) {
                        case j.Blocked:
                            yield t.permissionManager.updateStoredPermission(), OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                permission: D.Denied
                                , forceUpdatePermission: !1
                            });
                            break;
                        case j.Dismissed:
                            OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                permission: D.Default
                                , forceUpdatePermission: !0
                            })
                        }
                        if (e) return window.close(), null
                    }
                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, {
                        rawPushSubscription: n.serialize()
                    }, t => {
                        !0 === t.data.progress ? (M.a.debug("Got message from host page that remote reg. is in progress, closing popup."), e && window.close()) : M.a.debug("Got message from host page that remote reg. could not be finished.")
                    });
                    break;
                default:
                    throw "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                return "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), i
            })
        }
    }
    var J = i(18);
    class Z {
        constructor(e, t, i) {
            if (this.windowReference = e, this.sendToOrigin = t, this.receiveFromOrigin = i, !window || !window.postMessage) throw new Error("Must pass in a valid window reference supporting postMessage():" + e);
            if (!t || !i) throw new Error("Invalid origin. Must be set.");
            this.emitter = new J.a, this.channel = new MessageChannel, this.messagePort = null, this.isListening = !1, this.isConnected = !1, this.replies = {}
        }
        static get HANDSHAKE_MESSAGE() {
            return "onesignal.postmam.handshake"
        }
        static get CONNECTED_MESSAGE() {
            return "onesignal.postmam.connected"
        }
        listen() {
            M.a.debug("(Postmam) Called listen()."), this.isListening ? M.a.debug("(Postmam) Already listening for Postmam connections.") : d.a.isBrowser() && (this.isListening = !0, M.a.debug("(Postmam) Listening for Postmam connections.", this), window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this)))
        }
        startPostMessageReceive() {
            window.addEventListener("message", this.onWindowPostMessageReceived.bind(this))
        }
        stopPostMessageReceive() {
            window.removeEventListener("message", this.onWindowPostMessageReceived)
        }
        destroy() {
            this.stopPostMessageReceive(), this.emitter.removeAllListeners()
        }
        onWindowPostMessageReceived(e) {
            if (!this.isSafeOrigin(e.origin)) return;
            let {
                id: t
                , command: i
                , data: n
                , source: s
            } = e.data;
            if (i === Z.CONNECTED_MESSAGE) return this.emitter.emit("connect"), void(this.isConnected = !0);
            let o = {
                    id: t
                    , command: i
                    , data: n
                    , source: s
                }
                , r = Object.assign({
                    reply: this.reply.bind(this, o)
                }, o);
            if (this.replies.hasOwnProperty(t)) {
                M.a.info("(Postmam) This message is a reply."), !1 === this.replies[t].bind(window)(r) && delete this.replies[t]
            } else this.emitter.emit(i, r)
        }
        onWindowMessagePostmanConnectReceived(e) {
            const t = P.a.getWindowEnv()
                .toString();
            if (M.a.debug(`(Postmam) (${t}) Window postmessage for Postman connect received:`, e), this.isSafeOrigin(e.origin)) {
                var {
                    handshake: i
                } = e.data;
                i === Z.HANDSHAKE_MESSAGE ? (M.a.info("(Postmam) Got our expected Postmam handshake message (and connecting...):", e.data), window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived), this.messagePort = e.ports[0], this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), M.a.info("(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."), this.messagePort.start(), this.isConnected = !0, M.a.info(`(Postmam) (${t}) Connected.`), this.message(Z.CONNECTED_MESSAGE), this.emitter.emit("connect")) : M.a.info("(Postmam) Got a postmam message, but not our expected handshake:", e.data)
            }
        }
        connect() {
            M.a.info(`(Postmam) (${P.a.getWindowEnv().toString()}) Establishing a connection to ${this.sendToOrigin}.`), this.messagePort = this.channel.port1, this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), this.messagePort.start(), this.windowReference.postMessage({
                handshake: Z.HANDSHAKE_MESSAGE
            }, this.sendToOrigin, [this.channel.port2])
        }
        onMessageReceived(e) {
            if (!e.data) return void M.a.debug(`(${P.a.getWindowEnv().toString()}) Received an empty Postmam message:`, e);
            let {
                id: t
                , command: i
                , data: n
                , source: s
            } = e.data;
            if (i === Z.CONNECTED_MESSAGE) return this.emitter.emit("connect"), void(this.isConnected = !0);
            let o = {
                    id: t
                    , command: i
                    , data: n
                    , source: s
                }
                , r = Object.assign({
                    reply: this.reply.bind(this, o)
                }, o);
            if (this.replies.hasOwnProperty(t)) {
                !1 === this.replies[t].bind(window)(r) && delete this.replies[t]
            } else this.emitter.emit(i, r)
        }
        reply(e, t, i) {
            const n = {
                id: e.id
                , command: e.command
                , data: t
                , source: P.a.getWindowEnv()
                    .toString()
                , isReply: !0
            };
            "function" == typeof i && (this.replies[n.id] = i), this.messagePort.postMessage(n)
        }
        postMessage(e, t, i) {
            if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
            if ("function" == typeof t) return void M.a.debug("You passed a function to data, did you mean to pass null?");
            const n = {
                id: y.a.getRandomUuid()
                , command: e
                , data: t
                , source: P.a.getWindowEnv()
                    .toString()
            };
            "function" == typeof i && (this.replies[n.id] = i), this.windowReference.postMessage(n, "*")
        }
        message(e, t, i) {
            if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
            if ("function" == typeof t) return void M.a.debug("You passed a function to data, did you mean to pass null?");
            const n = {
                id: y.a.getRandomUuid()
                , command: e
                , data: t
                , source: P.a.getWindowEnv()
                    .toString()
            };
            "function" == typeof i && (this.replies[n.id] = i), this.messagePort.postMessage(n)
        }
        generateSafeOrigins(e) {
            const t = [];
            try {
                const i = new URL(e);
                let n = i.host;
                0 === i.host.indexOf("www.") && (n = i.host.replace("www.", "")), "https:" === i.protocol ? (t.push(`https://${n}`), t.push(`https://www.${n}`)) : "http:" === i.protocol && (t.push(`http://${n}`), t.push(`http://www.${n}`), t.push(`https://${n}`), t.push(`https://www.${n}`))
            } catch (e) {}
            return t
        }
        isSafeOrigin(e) {
            if (OneSignal.config) t = OneSignal.config.subdomain;
            else var t = "x";
            const i = this.generateSafeOrigins(this.receiveFromOrigin);
            return "https://onesignal.com" === e || e === `https://${t||""}.onesignal.com` || e === `https://${t||""}.os.tc` || e === `https://${t||""}.os.tc:3001` || e === P.a.getOneSignalApiUrl()
                .origin || "*" === this.receiveFromOrigin || I.a.contains(i, e)
        }
        on(...e) {
            return a.a(this, void 0, void 0, function* () {
                return this.emitter.on.apply(this.emitter, e)
            })
        }
        off(...e) {
            return a.a(this, void 0, void 0, function* () {
                return this.emitter.off.apply(this.emitter, e)
            })
        }
        once(...e) {
            return a.a(this, void 0, void 0, function* () {
                return this.emitter.once.apply(this.emitter, e)
            })
        }
    }
    class X {
        constructor(e, t) {
            this.appId = e, this.registrationOptions = t
        }
        load() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield OneSignal.isPushNotificationsEnabled(), t = yield OneSignal.getNotificationPermission();
                this.url = P.a.getOneSignalApiUrl(), this.url.pathname = "webPushModal", this.url.search = `${V.getPromptOptionsQueryString()}&id=${this.appId}&httpsPrompt=true&pushEnabled=${e}&permissionBlocked=${"denied"===t}&promptType=modal`, M.a.info(`Loading iFrame for HTTPS subscription modal at ${this.url.toString()}`), this.modal = this.createHiddenSubscriptionDomModal(this.url.toString()), this.establishCrossOriginMessaging()
            })
        }
        createHiddenSubscriptionDomModal(e) {
            let t = document.createElement("div");
            t.setAttribute("id", "OneSignal-iframe-modal"), t.setAttribute("style", "display:none !important"), t.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>', document.body.appendChild(t);
            let i = document.createElement("style");
            i.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }", document.getElementsByTagName("head")[0].appendChild(i);
            let n = document.createElement("iframe");
            return n.className = "OneSignal-permission-iframe", n.setAttribute("frameborder", "0"), n.width = OneSignal._windowWidth.toString(), n.height = OneSignal._windowHeight.toString(), n.src = e, document.getElementById("notif-permission")
                .appendChild(n), n
        }
        removeFrame() {
            const e = document.querySelector("#OneSignal-iframe-modal");
            e && e.remove()
        }
        showSubscriptionDomModal() {
            document.getElementById("OneSignal-iframe-modal")
                .setAttribute("style", "")
        }
        establishCrossOriginMessaging() {
            this.messenger = new Z(this.modal, this.url.origin, this.url.origin), this.messenger.startPostMessageReceive(), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, this.onModalLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, this.onModalAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, this.onModalRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onModalClosing.bind(this))
        }
        onModalLoaded(e) {
            this.showSubscriptionDomModal(), b.a.trigger("modalLoaded")
        }
        onModalAccepted(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug("User accepted the HTTPS modal prompt.", location.origin), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), V.triggerCustomPromptClicked("granted"), M.a.debug("Calling setSubscription(true)"), yield Y.registerForPush(), yield OneSignal.setSubscription(!0)
            })
        }
        onModalRejected(e) {
            M.a.debug("User rejected the HTTPS modal prompt."), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), V.triggerCustomPromptClicked("denied")
        }
        onModalClosing(e) {
            M.a.info("Detected modal is closing."), this.dispose()
        }
        dispose() {
            this.messenger && this.messenger.destroy(), this.removeFrame()
        }
        message() {
            this.messenger.message.apply(this.messenger, arguments)
        }
    }
    var Q, ee, te = i(14);
    (ee = Q || (Q = {}))
    .WorkerVersion = "GetWorkerVersion", ee.Subscribe = "Subscribe", ee.SubscribeNew = "SubscribeNew", ee.AmpSubscriptionState = "amp-web-push-subscription-state", ee.AmpSubscribe = "amp-web-push-subscribe", ee.AmpUnsubscribe = "amp-web-push-unsubscribe", ee.NotificationDisplayed = "notification.displayed", ee.NotificationClicked = "notification.clicked", ee.NotificationDismissed = "notification.dismissed", ee.RedirectPage = "command.redirect";
    class ie {
        constructor() {
            this.replies = {}
        }
        addListener(e, t, i) {
            const n = {
                    callback: t
                    , onceListenerOnly: i
                }
                , s = this.replies[e.toString()];
            s ? s.push(n) : this.replies[e.toString()] = [n]
        }
        findListenersForMessage(e) {
            return this.replies[e.toString()] || []
        }
        deleteListenerRecords(e) {
            this.replies[e.toString()] = null
        }
        deleteAllListenerRecords() {
            this.replies = {}
        }
        deleteListenerRecord(e, t) {
            const i = this.replies[e.toString()];
            if (null != i)
                for (let e = i.length - 1; e >= 0; e--) {
                    i[e] === t && i.splice(e, 1)
                }
        }
    }
    class ne {
        constructor(e, t = new ie) {
            this.context = e, this.replies = t
        }
        broadcast(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (P.a.getWindowEnv() !== U.a.ServiceWorker) return;
                const i = yield self.clients.matchAll({
                    type: "window"
                    , includeUncontrolled: !0
                });
                for (const n of i) M.a.debug(`[Worker Messenger] [SW -> Page] Broadcasting '${e.toString()}' to window client ${n.url}.`), n.postMessage({
                    command: e
                    , payload: t
                })
            })
        }
        unicast(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                if (P.a.getWindowEnv() === U.a.ServiceWorker) {
                    if (!i) throw new InvalidArgumentError.a("windowClient", InvalidArgumentError.b.Empty);
                    M.a.debug(`[Worker Messenger] [SW -> Page] Unicasting '${e.toString()}' to window client ${i.url}.`), i.postMessage({
                        command: e
                        , payload: t
                    })
                } else(yield this.isWorkerControllingPage()) || M.a.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), yield this.waitUntilWorkerControlsPage(), M.a.debug(`[Worker Messenger] [Page -> SW] Unicasting '${e.toString()}' to service worker.`), navigator.serviceWorker.controller.postMessage({
                    command: e
                    , payload: t
                })
            })
        }
        listen(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!d.a.supportsServiceWorkers()) return;
                P.a.getWindowEnv() === U.a.ServiceWorker ? (self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)), M.a.debug("[Worker Messenger] Service worker is now listening for messages.")) : yield this.listenForPage(e)
            })
        }
        listenForPage(e) {
            return a.a(this, void 0, void 0, function* () {
                e || ((yield this.isWorkerControllingPage()) || M.a.debug(`(${location.origin}) [Worker Messenger] The page is not controlled by the service worker yet. Waiting...`, self.registration), yield this.waitUntilWorkerControlsPage(), M.a.debug(`(${location.origin}) [Worker Messenger] The page is now controlled by the service worker.`)), navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this)), M.a.debug(`(${location.origin}) [Worker Messenger] Page is now listening for messages.`)
            })
        }
        onWorkerMessageReceivedFromPage(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command)
                , n = []
                , s = [];
            M.a.debug("[Worker Messenger] Service worker received message:", e.data);
            for (let e of i) e.onceListenerOnly && n.push(e), s.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (let e of s) e.callback.apply(null, [t.payload])
        }
        onPageMessageReceivedFromServiceWorker(e) {
            const t = e.data;
            if (!t || !t.command) return;
            const i = this.replies.findListenersForMessage(t.command)
                , n = []
                , s = [];
            M.a.debug("[Worker Messenger] Page received message:", e.data);
            for (let e of i) e.onceListenerOnly && n.push(e), s.push(e);
            for (let e = n.length - 1; e >= 0; e--) {
                const i = n[e];
                this.replies.deleteListenerRecord(t.command, i)
            }
            for (let e of s) e.callback.apply(null, [t.payload])
        }
        on(e, t) {
            this.replies.addListener(e, t, !1)
        }
        once(e, t) {
            this.replies.addListener(e, t, !0)
        }
        off(e) {
            e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords()
        }
        isWorkerControllingPage() {
            return a.a(this, void 0, void 0, function* () {
                if (P.a.getWindowEnv() === U.a.ServiceWorker) return !!self.registration.active; {
                    const e = yield this.context.serviceWorkerManager.getActiveState();
                    return e === te.a.WorkerA || e === te.a.WorkerB
                }
            })
        }
        waitUntilWorkerControlsPage() {
            return a.a(this, void 0, void 0, function* () {
                return new Promise(e => a.a(this, void 0, void 0, function* () {
                    if (yield this.isWorkerControllingPage()) e();
                    else {
                        P.a.getWindowEnv() === U.a.ServiceWorker ? self.addEventListener("activate", t => a.a(this, void 0, void 0, function* () {
                            (yield this.isWorkerControllingPage()) && e()
                        })) : navigator.serviceWorker.addEventListener("controllerchange", t => a.a(this, void 0, void 0, function* () {
                            (yield this.isWorkerControllingPage()) && e()
                        }))
                    }
                }))
            })
        }
    }
    class se {
        constructor() {
            this.cache = {}
        }
        getCache() {
            return Object.assign({}, this.cache)
        }
        loadSdkStylesheet() {
            return a.a(this, void 0, void 0, function* () {
                const e = P.a.getOneSignalResourceUrlPath()
                    , t = P.a.getOneSignalCssFileName();
                return yield this.loadIfNew(0, new URL(`${e}/${t}?v=${d.a.getSdkStylesVersionHash()}`))
            })
        }
        loadFetchPolyfill() {
            return a.a(this, void 0, void 0, function* () {
                return yield this.loadIfNew(1, new URL("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"))
            })
        }
        loadIfNew(e, t) {
            return a.a(this, void 0, void 0, function* () {
                return this.cache[t.toString()] || (this.cache[t.toString()] = se.load(e, t)), yield this.cache[t.toString()]
            })
        }
        static load(e, t) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    return yield new Promise((i, n) => {
                        switch (e) {
                        case 1:
                            (s = document.createElement("script"))
                            .setAttribute("type", "text/javascript"), s.setAttribute("async", "async"), s.setAttribute("src", t.toString());
                            break;
                        case 0:
                            var s;
                            (s = document.createElement("link"))
                            .setAttribute("rel", "stylesheet"), s.setAttribute("href", t.toString())
                        }
                        s.onerror = n, s.onload = i, document.querySelector("head")
                            .appendChild(s)
                    }), 0
                } catch (e) {
                    return 1
                }
            })
        }
    }
    var oe = i(16)
        , re = i(22);
    class ae {
        constructor(e, t, i, n = "shown", s = ["opacity", "transform"], o, r = 500) {
            this.selector = e, this.showClass = t, this.hideClass = i, this.state = n, this.targetTransitionEvents = s, this.nestedContentSelector = o, this.transitionCheckTimeout = r
        }
        show() {
            return this.hidden ? new Promise(e => {
                this.state = "showing", b.a.trigger(ae.EVENTS.SHOWING, this);
                const t = this.element;
                if (t ? (this.hideClass && Object(k.t)(t, this.hideClass), this.showClass && Object(k.a)(t, this.showClass)) : M.a.error(`(show) could not find animated element with selector ${this.selector}`), 0 == this.targetTransitionEvents.length) return e(this);
                var i = setTimeout(() => {
                    M.a.debug(`Element did not completely show (state: ${this.state}).`)
                }, this.transitionCheckTimeout);
                Object(k.s)(this.element, "transitionend", (t, n) => {
                    if (t.target === this.element && Object(k.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(i), n(), this.state = "shown", b.a.trigger(ae.EVENTS.SHOWN, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }
        hide() {
            return this.shown ? new Promise(e => {
                this.state = "hiding", b.a.trigger(ae.EVENTS.HIDING, this);
                const t = this.element;
                if (t ? (this.showClass && Object(k.t)(t, this.showClass), this.hideClass && Object(k.a)(t, this.hideClass)) : M.a.error(`(hide) could not find animated element with selector ${this.selector}`), 0 == this.targetTransitionEvents.length) return e(this);
                Object(k.s)(this.element, "transitionend", (t, i) => {
                    var n = setTimeout(() => {
                        M.a.debug(`Element did not completely hide (state: ${this.state}).`)
                    }, this.transitionCheckTimeout);
                    if (t.target === this.element && Object(k.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(n), i(), this.state = "hidden", b.a.trigger(ae.EVENTS.HIDDEN, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }
        waitUntilShown() {
            return "shown" === this.state ? Promise.resolve(this) : new Promise(e => {
                wt.emitter.once(ae.EVENTS.SHOWN, t => {
                    if (t === this) return e(this)
                })
            })
        }
        waitUntilHidden() {
            return "hidden" === this.state ? Promise.resolve(this) : new Promise(e => {
                wt.emitter.once(ae.EVENTS.HIDDEN, t => {
                    if (t === this) return e(this)
                })
            })
        }
        static get EVENTS() {
            return {
                SHOWING: "animatedElementShowing"
                , SHOWN: "animatedElementShown"
                , HIDING: "animatedElementHiding"
                , HIDDEN: "animatedElementHidden"
            }
        }
        get content() {
            if (!this.element) return "";
            if (this.nestedContentSelector) {
                const e = this.element.querySelector(this.nestedContentSelector);
                return e ? e.innerHTML : ""
            }
            return this.element.innerHTML
        }
        set content(e) {
            if (this.element)
                if (this.nestedContentSelector) {
                    const t = this.element.querySelector(this.nestedContentSelector);
                    t && (t.innerHTML = e)
                } else this.element.innerHTML = e
        }
        get element() {
            return document.querySelector(this.selector)
        }
        get showing() {
            return "showing" === this.state
        }
        get shown() {
            return "shown" === this.state
        }
        get hiding() {
            return "hiding" === this.state
        }
        get hidden() {
            return "hidden" === this.state
        }
    }
    class ce extends ae {
        constructor(e, t, i, n, s, o = "shown", r = "active", a = ["opacity", "transform"], c) {
            super(e, t, i, o, a), this.selector = e, this.showClass = t, this.hideClass = i, this.activeClass = n, this.inactiveClass = s, this.state = o, this.activeState = r, this.targetTransitionEvents = a, this.nestedContentSelector = c
        }
        activate() {
            return this.inactive && this.shown ? new Promise(e => {
                this.activeState = "activating", b.a.trigger(ce.EVENTS.ACTIVATING, this);
                const t = this.element;
                if (t ? (this.inactiveClass && Object(k.t)(t, this.inactiveClass), this.activeClass && Object(k.a)(t, this.activeClass)) : M.a.error("Could not find active animated element"), !this.shown) return M.a.debug("Ending activate() transition (alternative)."), this.activeState = "active", b.a.trigger(ce.EVENTS.ACTIVE, this), e(this);
                if (0 == this.targetTransitionEvents.length) return e(this);
                var i = setTimeout(() => {
                    M.a.debug(`Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`)
                }, this.transitionCheckTimeout);
                Object(k.s)(this.element, "transitionend", (t, n) => {
                    if (t.target === this.element && Object(k.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(i), n(), this.activeState = "active", b.a.trigger(ce.EVENTS.ACTIVE, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }
        inactivate() {
            return this.active ? new Promise(e => {
                this.activeState = "inactivating", b.a.trigger(ce.EVENTS.INACTIVATING, this);
                const t = this.element;
                if (t ? (this.activeClass && Object(k.t)(t, this.activeClass), this.inactiveClass && Object(k.a)(t, this.inactiveClass)) : M.a.error("Could not find active animated element"), !this.shown) return this.activeState = "inactive", b.a.trigger(ce.EVENTS.INACTIVE, this), e(this);
                if (0 == this.targetTransitionEvents.length) return e(this);
                var i = setTimeout(() => {
                    M.a.debug(`Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`)
                }, this.transitionCheckTimeout);
                Object(k.s)(this.element, "transitionend", (t, n) => {
                    if (t.target === this.element && Object(k.f)(this.targetTransitionEvents, t.propertyName)) return clearTimeout(i), n(), this.activeState = "inactive", b.a.trigger(ce.EVENTS.INACTIVE, this), e(this)
                }, !0)
            }) : Promise.resolve(this)
        }
        waitUntilActive() {
            return this.active ? Promise.resolve(this) : new Promise(e => {
                wt.emitter.once(ce.EVENTS.ACTIVE, t => {
                    if (t === this) return e(this)
                })
            })
        }
        waitUntilInactive() {
            return this.inactive ? Promise.resolve(this) : new Promise(e => {
                wt.emitter.once(ce.EVENTS.INACTIVE, t => {
                    if (t === this) return e(this)
                })
            })
        }
        static get EVENTS() {
            return Object.assign({}, ae.EVENTS, {
                ACTIVATING: "activeAnimatedElementActivating"
                , ACTIVE: "activeAnimatedElementActive"
                , INACTIVATING: "activeAnimatedElementInactivating"
                , INACTIVE: "activeAnimatedElementInactive"
            })
        }
        get activating() {
            return "activating" === this.activeState
        }
        get active() {
            return "active" === this.activeState
        }
        get inactivating() {
            return "inactivating" === this.activeState
        }
        get inactive() {
            return "inactive" === this.activeState
        }
    }
    class le extends ce {
        constructor() {
            super(".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden")
        }
        increment() {
            if (!isNaN(this.content)) {
                let e = +this.content;
                e += 1, this.content = e.toString()
            }
        }
        show() {
            const e = super.show();
            return OneSignal.notifyButton.setCustomColorsIfSpecified(), e
        }
        decrement() {
            if (!isNaN(this.content)) {
                let e = +this.content;
                e -= 1, this.content = e > 0 ? e.toString() : ""
            }
        }
    }
    class de extends ae {
        constructor(e) {
            super(".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", void 0, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body"), this.bell = e, this.contentType = "", this.queued = []
        }
        static get TIMEOUT() {
            return 2500
        }
        static get TYPES() {
            return {
                TIP: "tip"
                , MESSAGE: "message"
                , QUEUED: "queued"
            }
        }
        display(e, t, i = 0) {
            return M.a.debug(`Calling %cdisplay(${e}, ${t}, ${i}).`, Object(k.j)("code")), (this.shown ? this.hide() : Object(k.r)())
                .then(() => {
                    this.content = Object(k.g)(t), this.contentType = e
                })
                .then(() => this.show())
                .then(() => Object(k.h)(i))
                .then(() => this.hide())
                .then(() => {
                    this.content = this.getTipForState(), this.contentType = "tip"
                })
        }
        getTipForState() {
            return this.bell.state === me.STATES.UNSUBSCRIBED ? this.bell.options.text["tip.state.unsubscribed"] : this.bell.state === me.STATES.SUBSCRIBED ? this.bell.options.text["tip.state.subscribed"] : this.bell.state === me.STATES.BLOCKED ? this.bell.options.text["tip.state.blocked"] : ""
        }
        enqueue(e) {
            return this.queued.push(Object(k.g)(e)), new Promise(e => {
                this.bell.badge.shown ? this.bell.badge.hide()
                    .then(() => this.bell.badge.increment())
                    .then(() => this.bell.badge.show())
                    .then(e) : (this.bell.badge.increment(), this.bell.initialized ? this.bell.badge.show()
                        .then(e) : e())
            })
        }
        dequeue(e) {
            let t = this.queued.pop(e);
            return new Promise(e => {
                this.bell.badge.shown ? this.bell.badge.hide()
                    .then(() => this.bell.badge.decrement())
                    .then(e => e > 0 ? this.bell.badge.show() : Promise.resolve(this))
                    .then(e(t)) : (this.bell.badge.decrement(), e(t))
            })
        }
    }
    class ue extends ce {
        constructor(e) {
            super(".onesignal-bell-launcher-button", void 0, void 0, "onesignal-bell-launcher-button-active", void 0, "shown", ""), this.bell = e, this.events = {
                mouse: "bell.launcher.button.mouse"
            };
            const t = this.element;
            t && (t.addEventListener("touchstart", () => {
                this.onHovering(), this.onTap()
            }, {
                passive: !0
            }), t.addEventListener("mouseenter", () => {
                this.onHovering()
            }), t.addEventListener("mouseleave", () => {
                this.onHovered()
            }), t.addEventListener("touchmove", () => {
                this.onHovered()
            }, {
                passive: !0
            }), t.addEventListener("mousedown", () => {
                this.onTap()
            }), t.addEventListener("mouseup", () => {
                this.onEndTap()
            }), t.addEventListener("click", () => {
                this.onHovered(), this.onClick()
            }))
        }
        onHovering() {
            (S.isEmpty(this.events.mouse) || "out" === S.getLast(this.events.mouse)) && b.a.trigger(me.EVENTS.HOVERING), S.put(this.events.mouse, "over")
        }
        onHovered() {
            S.put(this.events.mouse, "out"), b.a.trigger(me.EVENTS.HOVERED)
        }
        onTap() {
            this.pulse(), this.activate(), this.bell.badge.activate()
        }
        onEndTap() {
            this.inactivate(), this.bell.badge.inactivate()
        }
        onClick() {
            if (b.a.trigger(me.EVENTS.BELL_CLICK), b.a.trigger(me.EVENTS.LAUNCHER_CLICK), !this.bell.message.shown || this.bell.message.contentType != de.TYPES.MESSAGE) {
                var e = S.getLast("subscription.optedOut");
                return this.bell.unsubscribed ? e ? this.bell.launcher.activateIfInactive()
                    .then(() => {
                        this.bell.showDialogProcedure()
                    }) : (wt.registerForPushNotifications(), this.bell._ignoreSubscriptionState = !0, wt.emitter.once(wt.EVENTS.SUBSCRIPTION_CHANGED, () => {
                        this.bell.message.display(de.TYPES.MESSAGE, this.bell.options.text["message.action.subscribed"], de.TIMEOUT)
                            .then(() => {
                                this.bell._ignoreSubscriptionState = !1, this.bell.launcher.inactivate()
                            })
                    })) : this.bell.subscribed ? this.bell.launcher.activateIfInactive()
                    .then(() => {
                        this.bell.showDialogProcedure()
                    }) : this.bell.blocked && (Object(k.o)() ? wt.registerForPushNotifications() : this.bell.launcher.activateIfInactive()
                        .then(() => {
                            this.bell.showDialogProcedure()
                        })), this.bell.message.hide()
            }
        }
        pulse() {
            Object(k.u)(".pulse-ring"), this.element && Object(k.b)(this.element, "beforeend", '<div class="pulse-ring"></div>'), this.bell.setCustomColorsIfSpecified()
        }
    }
    class ge extends ae {
        constructor(e) {
            super(".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", void 0, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body"), this.bell = e, this.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button", this.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button", this.notificationIcons = null
        }
        show() {
            return this.updateBellLauncherDialogBody()
                .then(() => super.show())
        }
        get subscribeButtonSelectorId() {
            return "subscribe-button"
        }
        get unsubscribeButtonSelectorId() {
            return "unsubscribe-button"
        }
        get subscribeButton() {
            return this.element ? this.element.querySelector("#" + this.subscribeButtonSelectorId) : null
        }
        get unsubscribeButton() {
            return this.element ? this.element.querySelector("#" + this.unsubscribeButtonSelectorId) : null
        }
        updateBellLauncherDialogBody() {
            return OneSignal.getSubscription()
                .then(e => {
                    this.nestedContentSelector && Object(k.e)(this.nestedContentSelector);
                    let t = "Nothing to show.";
                    var i = "";
                    if (this.bell.options.showCredit && (i = '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'), this.bell.state === me.STATES.SUBSCRIBED && !0 === e || this.bell.state === me.STATES.UNSUBSCRIBED && !1 === e) {
                        let e = ""
                            , n = Object(k.k)(this.notificationIcons);
                        e = n ? `<div class="push-notification-icon"><img src="${n}"></div>` : '<div class="push-notification-icon push-notification-icon-default"></div>';
                        let s = "";
                        s = this.bell.state !== me.STATES.SUBSCRIBED ? `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.subscribe"]}</button>` : `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text["dialog.main.button.unsubscribe"]}</button>`, t = `<h1>${this.bell.options.text["dialog.main.title"]}</h1><div class="divider"></div><div class="push-notification">${e}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${s}</div>${i}`
                    } else if (this.bell.state === me.STATES.BLOCKED) {
                        let e = null;
                        l.a.chrome ? l.a.mobile || l.a.tablet || (e = "/bell/chrome-unblock.jpg") : l.a.firefox ? e = "/bell/firefox-unblock.jpg" : l.a.safari ? e = "/bell/safari-unblock.jpg" : l.a.msedge && (e = "/bell/edge-unblock.png");
                        let n = "";
                        e && (n = `<a href="${e=P.a.getOneSignalApiUrl().origin+e}" target="_blank"><img src="${e}"></a></div>`), (l.a.mobile || l.a.tablet) && l.a.chrome && (n = "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"), t = `<h1>${this.bell.options.text["dialog.blocked.title"]}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text["dialog.blocked.message"]}</p>${n}</div>${i}`
                    }
                    this.nestedContentSelector && Object(k.b)(this.nestedContentSelector, "beforeend", t), this.subscribeButton && this.subscribeButton.addEventListener("click", () => {
                        OneSignal.__doNotShowWelcomeNotification = !1, b.a.trigger(me.EVENTS.SUBSCRIBE_CLICK)
                    }), this.unsubscribeButton && this.unsubscribeButton.addEventListener("click", () => b.a.trigger(me.EVENTS.UNSUBSCRIBE_CLICK)), this.bell.setCustomColorsIfSpecified()
                })
        }
    }
    class pe extends ce {
        constructor(e) {
            super(".onesignal-bell-launcher", "onesignal-bell-launcher-active", void 0, void 0, "onesignal-bell-launcher-inactive", "hidden", "active"), this.bell = e, this.wasInactive = !1
        }
        resize(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!this.element) throw new InvalidStateError.a(InvalidStateError.b.MissingDomElement);
                if ("small" === e && Object(k.m)(this.element, "onesignal-bell-launcher-sm") || "medium" === e && Object(k.m)(this.element, "onesignal-bell-launcher-md") || "large" === e && Object(k.m)(this.element, "onesignal-bell-launcher-lg")) return Promise.resolve(this);
                if (Object(k.t)(this.element, "onesignal-bell-launcher-sm"), Object(k.t)(this.element, "onesignal-bell-launcher-md"), Object(k.t)(this.element, "onesignal-bell-launcher-lg"), "small" === e) Object(k.a)(this.element, "onesignal-bell-launcher-sm");
                else if ("medium" === e) Object(k.a)(this.element, "onesignal-bell-launcher-md");
                else {
                    if ("large" !== e) throw new Error("Invalid OneSignal bell size " + e);
                    Object(k.a)(this.element, "onesignal-bell-launcher-lg")
                }
                return this.shown ? yield new Promise(e => {
                    if (0 == this.targetTransitionEvents.length) return e(this);
                    var t = setTimeout(() => {
                        M.a.debug(`Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`)
                    }, this.transitionCheckTimeout);
                    Object(k.s)(this.element, "transitionend", (i, n) => {
                        if (i.target === this.element && Object(k.f)(this.targetTransitionEvents, i.propertyName)) return clearTimeout(t), n(), e(this)
                    }, !0)
                }): this
            })
        }
        activateIfInactive() {
            return this.inactive ? (this.wasInactive = !0, this.activate()) : Object(k.r)()
        }
        inactivateIfWasInactive() {
            return this.wasInactive ? (this.wasInactive = !1, this.inactivate()) : Object(k.r)()
        }
        clearIfWasInactive() {
            this.wasInactive = !1
        }
        inactivate() {
            return this.bell.message.hide()
                .then(() => this.bell.badge.content.length > 0 ? this.bell.badge.hide()
                    .then(() => Promise.all([super.inactivate(), this.resize("small")]))
                    .then(() => this.bell.badge.show()) : Promise.all([super.inactivate(), this.resize("small")]))
        }
        activate() {
            return this.bell.badge.content.length > 0 ? this.bell.badge.hide()
                .then(() => Promise.all([super.activate(), this.resize(this.bell.options.size)])) : Promise.all([super.activate(), this.resize(this.bell.options.size)])
        }
    }
    var he = '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>';
    class me {
        constructor(e, t) {
            this.state = me.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, this.hovering = !1, this.initialized = !1, this.DEFAULT_SIZE = "medium", this.DEFAULT_POSITION = "bottom-right", this.DEFAULT_THEME = "default", this.options = {
                enable: e.enable || !1
                , size: e.size || this.DEFAULT_SIZE
                , position: e.position || this.DEFAULT_POSITION
                , theme: e.theme || this.DEFAULT_THEME
                , showLauncherAfter: e.showLauncherAfter || 10
                , showBadgeAfter: e.showBadgeAfter || 300
                , text: this.setDefaultTextOptions(e.text || {})
                , prenotify: e.prenotify
                , showCredit: e.showCredit
                , colors: e.colors
                , offset: e.offset
            }, t && (this._launcher = t), this.options.enable && (this.validateOptions(this.options), this.state = me.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, this.installEventHooks(), this.updateState())
        }
        static get EVENTS() {
            return {
                STATE_CHANGED: "notifyButtonStateChange"
                , LAUNCHER_CLICK: "notifyButtonLauncherClick"
                , BELL_CLICK: "notifyButtonButtonClick"
                , SUBSCRIBE_CLICK: "notifyButtonSubscribeClick"
                , UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick"
                , HOVERING: "notifyButtonHovering"
                , HOVERED: "notifyButtonHover"
            }
        }
        static get STATES() {
            return {
                UNINITIALIZED: "uninitialized"
                , SUBSCRIBED: "subscribed"
                , UNSUBSCRIBED: "unsubscribed"
                , BLOCKED: "blocked"
            }
        }
        static get TEXT_SUBS() {
            return {
                "prompt.native.grant": {
                    default: "Allow"
                    , chrome: "Allow"
                    , firefox: "Always Receive Notifications"
                    , safari: "Allow"
                }
            }
        }
        showDialogProcedure() {
            this.dialog.shown || this.dialog.show()
                .then(() => {
                    Object(k.s)(document, "click", (e, t) => {
                        this.dialog.element.contains(e.target) || (t(), this.dialog.shown && this.dialog.hide()
                            .then(() => {
                                this.launcher.inactivateIfWasInactive()
                            }))
                    }, !0)
                })
        }
        validateOptions(e) {
            if (!e.size || !Object(k.f)(["small", "medium", "large"], e.size)) throw new Error(`Invalid size ${e.size} for notify button. Choose among 'small', 'medium', or 'large'.`);
            if (!e.position || !Object(k.f)(["bottom-left", "bottom-right"], e.position)) throw new Error(`Invalid position ${e.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`);
            if (!e.theme || !Object(k.f)(["default", "inverse"], e.theme)) throw new Error(`Invalid theme ${e.theme} for notify button. Choose either 'default', or 'inverse'.`);
            if (!e.showLauncherAfter || e.showLauncherAfter < 0) throw new Error(`Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`);
            if (!e.showBadgeAfter || e.showBadgeAfter < 0) throw new Error(`Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`)
        }
        setDefaultTextOptions(e) {
            return {
                "tip.state.unsubscribed": e["tip.state.unsubscribed"] || "Subscribe to notifications"
                , "tip.state.subscribed": e["tip.state.subscribed"] || "You're subscribed to notifications"
                , "tip.state.blocked": e["tip.state.blocked"] || "You've blocked notifications"
                , "message.prenotify": e["message.prenotify"] || "Click to subscribe to notifications"
                , "message.action.subscribed": e["message.action.subscribed"] || "Thanks for subscribing!"
                , "message.action.resubscribed": e["message.action.resubscribed"] || "You're subscribed to notifications"
                , "message.action.subscribing": e["message.action.subscribing"] || "Click <strong>{{prompt.native.grant}}</strong> to receive notifications"
                , "message.action.unsubscribed": e["message.action.unsubscribed"] || "You won't receive notifications again"
                , "dialog.main.title": e["dialog.main.title"] || "Manage Site Notifications"
                , "dialog.main.button.subscribe": e["dialog.main.button.subscribe"] || "SUBSCRIBE"
                , "dialog.main.button.unsubscribe": e["dialog.main.button.unsubscribe"] || "UNSUBSCRIBE"
                , "dialog.blocked.title": e["dialog.blocked.title"] || "Unblock Notifications"
                , "dialog.blocked.message": e["dialog.blocked.message"] || "Follow these instructions to allow notifications:"
            }
        }
        installEventHooks() {
            wt.emitter.on(me.EVENTS.SUBSCRIBE_CLICK, () => {
                this.dialog.subscribeButton.disabled = !0, this._ignoreSubscriptionState = !0, wt.setSubscription(!0)
                    .then(() => (this.dialog.subscribeButton.disabled = !1, this.dialog.hide()))
                    .then(() => this.message.display(de.TYPES.MESSAGE, this.options.text["message.action.resubscribed"], de.TIMEOUT))
                    .then(() => (this._ignoreSubscriptionState = !1, this.launcher.clearIfWasInactive(), this.launcher.inactivate()))
                    .then(() => this.updateState())
            }), wt.emitter.on(me.EVENTS.UNSUBSCRIBE_CLICK, () => {
                this.dialog.unsubscribeButton.disabled = !0, wt.setSubscription(!1)
                    .then(() => (this.dialog.unsubscribeButton.disabled = !1, this.dialog.hide()))
                    .then(() => (this.launcher.clearIfWasInactive(), this.launcher.activate()))
                    .then(() => this.message.display(de.TYPES.MESSAGE, this.options.text["message.action.unsubscribed"], de.TIMEOUT))
                    .then(() => this.updateState())
            }), wt.emitter.on(me.EVENTS.HOVERING, () => {
                this.hovering = !0, this.launcher.activateIfInactive(), this.message.shown || this.dialog.shown ? this.hovering = !1 : this.message.contentType !== de.TYPES.MESSAGE ? new Promise(e => {
                        if (this.message.queued.length > 0) return this.message.dequeue()
                            .then(t => {
                                this.message.content = t, this.message.contentType = de.TYPES.QUEUED, e()
                            });
                        this.message.content = Object(k.g)(this.message.getTipForState()), this.message.contentType = de.TYPES.TIP, e()
                    })
                    .then(() => this.message.show())
                    .then(() => {
                        this.hovering = !1
                    }) : this.hovering = !1
            }), wt.emitter.on(me.EVENTS.HOVERED, () => {
                this.message.contentType !== de.TYPES.MESSAGE && this.dialog.hidden && (this.hovering && (this.hovering = !1, this.message.waitUntilShown()
                        .then(() => Object(k.h)(de.TIMEOUT))
                        .then(() => this.message.hide())
                        .then(() => {
                            this.launcher.wasInactive && this.dialog.hidden && (this.launcher.inactivate(), this.launcher.wasInactive = !1)
                        })), this.message.shown && this.message.hide()
                    .then(() => {
                        this.launcher.wasInactive && this.dialog.hidden && (this.launcher.inactivate(), this.launcher.wasInactive = !1)
                    }))
            }), wt.emitter.on(wt.EVENTS.SUBSCRIPTION_CHANGED, e => a.a(this, void 0, void 0, function* () {
                if (1 == e && (this.badge.shown && this.options.prenotify && this.badge.hide(), null === this.dialog.notificationIcons)) {
                    const e = yield V.getNotificationIcons();
                    this.dialog.notificationIcons = e
                }
                wt.getNotificationPermission(t => {
                    let i;
                    i = e ? me.STATES.SUBSCRIBED : t === D.Denied ? me.STATES.BLOCKED : me.STATES.UNSUBSCRIBED, this.setState(i, this._ignoreSubscriptionState)
                })
            })), wt.emitter.on(me.EVENTS.STATE_CHANGED, e => {
                this.launcher.element && (e.to === me.STATES.SUBSCRIBED ? this.launcher.inactivate() : (e.to === me.STATES.UNSUBSCRIBED || me.STATES.BLOCKED) && this.launcher.activate())
            }), wt.emitter.on(wt.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, () => {
                this.updateState()
            })
        }
        addDefaultClasses() {
            const e = this.container;
            if ("bottom-left" === this.options.position) e && Object(k.a)(e, "onesignal-bell-container-bottom-left"), Object(k.a)(this.launcher.selector, "onesignal-bell-launcher-bottom-left");
            else {
                if ("bottom-right" !== this.options.position) throw new Error("Invalid OneSignal notify button position " + this.options.position);
                e && Object(k.a)(e, "onesignal-bell-container-bottom-right"), Object(k.a)(this.launcher.selector, "onesignal-bell-launcher-bottom-right")
            }
            if ("default" === this.options.theme) Object(k.a)(this.launcher.selector, "onesignal-bell-launcher-theme-default");
            else {
                if ("inverse" !== this.options.theme) throw new Error("Invalid OneSignal notify button theme " + this.options.theme);
                Object(k.a)(this.launcher.selector, "onesignal-bell-launcher-theme-inverse")
            }
        }
        create() {
            return a.a(this, void 0, void 0, function* () {
                if (!this.options.enable) return;
                if (0 !== (yield wt.context.dynamicResourceLoader.loadSdkStylesheet())) return void M.a.debug("Not showing notify button because styles failed to load.");
                this.container && Object(k.u)("#onesignal-bell-container"), Object(k.b)("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'), this.container && Object(k.b)(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'), Object(k.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>'), Object(k.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>'), Object(k.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>'), Object(k.b)(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>'), Object(k.b)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>'), Object(k.b)(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>'), Object(k.b)(this.button.selector, "beforeend", he);
                const e = yield wt.isPushNotificationsEnabled(), t = yield wt.getSubscription(), i = yield V.wasHttpsNativePromptDismissed();
                let n = e ? "small" : this.options.size || this.DEFAULT_SIZE;
                yield this.launcher.resize(n), this.addDefaultClasses(), this.applyOffsetIfSpecified(), this.setCustomColorsIfSpecified(), this.patchSafariSvgFilterBug(), M.a.info("Showing the notify button."), yield(e ? this.launcher.inactivate() : Object(k.r)())
                    .then(() => wt.getSubscription())
                    .then(t => !e && t || null !== this.dialog.notificationIcons ? Object(k.r)() : V.getNotificationIcons()
                        .then(e => {
                            this.dialog.notificationIcons = e
                        }))
                    .then(() => Object(k.h)(this.options.showLauncherAfter || 0))
                    .then(() => Object(k.o)() && t && !0 !== i && !e && !0 === wt.config.userConfig.promptOptions.autoPrompt && !V.isHttpPromptAlreadyShown() ? (M.a.debug("Not showing notify button because popover will be shown."), Object(k.r)()) : this.launcher.show())
                    .then(() => Object(k.h)(this.options.showBadgeAfter || 0))
                    .then(() => this.options.prenotify && !e && wt._isNewVisitor ? this.message.enqueue(this.options.text["message.prenotify"])
                        .then(() => this.badge.show()) : Object(k.r)())
                    .then(() => this.initialized = !0)
            })
        }
        patchSafariSvgFilterBug() {
            if (!(l.a.safari && Number(l.a.version) >= 9.1)) {
                let e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));"
                    , t = "drop-shadow(0 2px 4px rgba(34,36,38,0));"
                    , i = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                this.graphic.setAttribute("style", `filter: ${e}; -webkit-filter: ${e};`), this.badge.element.setAttribute("style", `filter: ${t}; -webkit-filter: ${t};`), this.dialog.element.setAttribute("style", `filter: ${i}; -webkit-filter: ${i};`)
            }
            l.a.safari && this.badge.element.setAttribute("style", "display: none;")
        }
        applyOffsetIfSpecified() {
            let e = this.options.offset;
            if (e) {
                const t = this.launcher.element;
                if (!t) return void M.a.error("Could not find bell dom element");
                t.style.cssText = "", e.bottom && (t.style.cssText += `bottom: ${e.bottom};`), "bottom-right" === this.options.position ? e.right && (t.style.cssText += `right: ${e.right};`) : "bottom-left" === this.options.position && e.left && (t.style.cssText += `left: ${e.left};`)
            }
        }
        setCustomColorsIfSpecified() {
            let e = this.dialog.element.querySelector("button.action")
                , t = this.button.element.querySelector(".pulse-ring");
            this.graphic.querySelector(".background")
                .style.cssText = "";
            let i = this.graphic.querySelectorAll(".foreground");
            for (let e = 0; e < i.length; e++) {
                i[e].style.cssText = ""
            }
            if (this.graphic.querySelector(".stroke")
                .style.cssText = "", this.badge.element.style.cssText = "", e && (e.style.cssText = "", e.style.cssText = ""), t && (t.style.cssText = ""), this.options.colors) {
                let i = this.options.colors;
                if (i["circle.background"] && (this.graphic.querySelector(".background")
                        .style.cssText += `fill: ${i["circle.background"]}`), i["circle.foreground"]) {
                    let e = this.graphic.querySelectorAll(".foreground");
                    for (let t = 0; t < e.length; t++) {
                        e[t].style.cssText += `fill: ${i["circle.foreground"]}`
                    }
                    this.graphic.querySelector(".stroke")
                        .style.cssText += `stroke: ${i["circle.foreground"]}`
                }
                i["badge.background"] && (this.badge.element.style.cssText += `background: ${i["badge.background"]}`), i["badge.bordercolor"] && (this.badge.element.style.cssText += `border-color: ${i["badge.bordercolor"]}`), i["badge.foreground"] && (this.badge.element.style.cssText += `color: ${i["badge.foreground"]}`), e && (i["dialog.button.background"] && (this.dialog.element.querySelector("button.action")
                    .style.cssText += `background: ${i["dialog.button.background"]}`), i["dialog.button.foreground"] && (this.dialog.element.querySelector("button.action")
                    .style.cssText += `color: ${i["dialog.button.foreground"]}`), i["dialog.button.background.hovering"] && this.addCssToHead("onesignal-background-hover-style", `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${i["dialog.button.background.hovering"]} !important; }`), i["dialog.button.background.active"] && this.addCssToHead("onesignal-background-active-style", `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${i["dialog.button.background.active"]} !important; }`)), t && i["pulse.color"] && (this.button.element.querySelector(".pulse-ring")
                    .style.cssText = `border-color: ${i["pulse.color"]}`)
            }
        }
        addCssToHead(e, t) {
            if (document.getElementById(e)) return;
            let i = document.createElement("style");
            i.id = e, i.type = "text/css", i.appendChild(document.createTextNode(t)), document.head.appendChild(i)
        }
        updateState() {
            Promise.all([wt.privateIsPushNotificationsEnabled(), wt.privateGetNotificationPermission()])
                .then(([e, t]) => {
                    this.setState(e ? me.STATES.SUBSCRIBED : me.STATES.UNSUBSCRIBED), t === D.Denied && this.setState(me.STATES.BLOCKED)
                })
        }
        setState(e, t = !1) {
            let i = this.state;
            this.state = e, i === e || t || b.a.trigger(me.EVENTS.STATE_CHANGED, {
                from: i
                , to: e
            })
        }
        get container() {
            return document.querySelector("#onesignal-bell-container")
        }
        get graphic() {
            return this.button.element.querySelector("svg")
        }
        get launcher() {
            return this._launcher || (this._launcher = new pe(this)), this._launcher
        }
        get button() {
            return this._button || (this._button = new ue(this)), this._button
        }
        get badge() {
            return this._badge || (this._badge = new le), this._badge
        }
        get message() {
            return this._message || (this._message = new de(this)), this._message
        }
        get dialog() {
            return this._dialog || (this._dialog = new ge(this)), this._dialog
        }
        get subscribed() {
            return this.state === me.STATES.SUBSCRIBED
        }
        get unsubscribed() {
            return this.state === me.STATES.UNSUBSCRIBED
        }
        get blocked() {
            return this.state === me.STATES.BLOCKED
        }
    }
    class fe {
        constructor(e) {
            if (!e) throw new InvalidArgumentError.a("path", InvalidArgumentError.b.Empty);
            this.path = e.trim()
        }
        getQueryString() {
            const e = this.path.indexOf("?");
            return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null
        }
        getWithoutQueryString() {
            return this.path.split(fe.QUERY_STRING)[0]
        }
        getFileName() {
            return this.getWithoutQueryString()
                .split("\\")
                .pop()
                .split("/")
                .pop()
        }
        getFileNameWithQuery() {
            return this.path.split("\\")
                .pop()
                .split("/")
                .pop()
        }
        getFullPath() {
            return this.path
        }
        getPathWithoutFileName() {
            const e = this.getWithoutQueryString()
                , t = e.lastIndexOf(this.getFileName());
            let i = e.substring(0, t);
            return i = i.replace(/[\\\/]$/, "")
        }
    }
    fe.QUERY_STRING = "?";
    class be extends u.a {
        constructor(e, t) {
            super("Registration of a Service Worker failed."), this.status = e, this.statusText = t, Object.setPrototypeOf(this, be.prototype)
        }
    }
    var Se, ve, Oe, ye, we, Ee, Pe = be;
    class Ie {
        constructor(e, t) {
            this.context = e, this.config = t
        }
        static getRegistration() {
            return a.a(this, void 0, void 0, function* () {
                return yield te.b.getRegistration()
            })
        }
        getActiveState() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield P.a.getIntegration();
                if (e === oe.a.InsecureProxy) return te.a.Indeterminate;
                if (e === oe.a.SecureProxy) {
                    switch (P.a.getWindowEnv()) {
                    case U.a.Host:
                    case U.a.CustomIframe:
                        const e = OneSignal.proxyFrameHost;
                        return e ? yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE): te.a.Indeterminate;
                    case U.a.OneSignalSubscriptionPopup:
                        break;
                    case U.a.OneSignalSubscriptionModal:
                        throw new O
                    }
                }
                const t = yield Ie.getRegistration();
                if (!t) return te.a.None;
                if (t.installing) return te.a.Installing;
                if (!t.active) return te.a.ThirdParty;
                const i = Ie.activeSwFileName(t)
                    , n = this.swActiveStateByFileName(i);
                return navigator.serviceWorker.controller || n !== te.a.WorkerA && n !== te.a.WorkerB ? n : te.a.Bypassed
            })
        }
        static activeSwFileName(e) {
            if (!e.active) return null;
            const t = new URL(e.active.scriptURL)
                .pathname
                , i = new fe(t)
                .getFileName();
            if ("akam-sw.js" == i) {
                const t = new URLSearchParams(new URL(e.active.scriptURL)
                        .search)
                    .get("othersw");
                if (t) return M.a.debug("Found a ServiceWorker under Akamai's akam-sw.js?othersw=", t), new fe(new URL(t)
                        .pathname)
                    .getFileName()
            }
            return i
        }
        swActiveStateByFileName(e) {
            return e ? e == this.config.workerAPath.getFileName() ? te.a.WorkerA : e == this.config.workerBPath.getFileName() ? te.a.WorkerB : te.a.ThirdParty : te.a.None
        }
        getWorkerVersion() {
            return a.a(this, void 0, void 0, function* () {
                return new Promise(e => a.a(this, void 0, void 0, function* () {
                    if (y.b.isUsingSubscriptionWorkaround()) {
                        const t = OneSignal.proxyFrameHost;
                        if (t) {
                            const i = yield t.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION);
                            e(i)
                        } else e(NaN)
                    } else this.context.workerMessenger.once(Q.WorkerVersion, t => {
                        e(t)
                    }), this.context.workerMessenger.unicast(Q.WorkerVersion)
                }))
            })
        }
        shouldInstallWorker() {
            return a.a(this, void 0, void 0, function* () {
                if (!d.a.supportsServiceWorkers()) return !1;
                if (!OneSignal.config) return !1;
                if (OneSignal.config.subdomain && P.a.getWindowEnv() == U.a.Host) return !1;
                const e = yield this.getActiveState();
                if (e === te.a.None || e === te.a.ThirdParty) {
                    return "granted" === (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.config.safariWebId))
                }
                return this.workerNeedsUpdate()
            })
        }
        workerNeedsUpdate() {
            return a.a(this, void 0, void 0, function* () {
                let e;
                M.a.info("[Service Worker Update] Checking service worker version...");
                try {
                    e = yield I.a.timeoutPromise(this.getWorkerVersion(), 2e3)
                } catch (e) {
                    return M.a.info("[Service Worker Update] Worker did not reply to version query; assuming older version and updating."), !0
                }
                return e !== d.a.version() ? (M.a.info(`[Service Worker Update] Updating service worker from ${e} --> ${d.a.version()}.`), !0) : (M.a.info(`[Service Worker Update] Service worker version is current at ${e} (no update required).`), !1)
            })
        }
        installWorker() {
            return a.a(this, void 0, void 0, function* () {
                if (!(yield this.shouldInstallWorker())) return;
                const e = yield this.getActiveState();
                yield this.installAlternatingWorker(), yield new Promise(t => a.a(this, void 0, void 0, function* () {
                    const i = yield this.getActiveState();
                    M.a.debug("installWorker - Comparing pre and post states", e, i), e !== i && i !== te.a.Installing ? t() : (M.a.debug("installWorker - Awaiting on navigator.serviceWorker's 'controllerchange' event"), navigator.serviceWorker.addEventListener("controllerchange", i => a.a(this, void 0, void 0, function* () {
                        const i = yield this.getActiveState();
                        i !== e && i !== te.a.Installing ? t() : M.a.error("installWorker - SW's 'controllerchange' fired but no state change!")
                    })))
                })), (yield this.getActiveState()) === te.a.WorkerB && (yield this.installAlternatingWorker()), yield this.establishServiceWorkerChannel()
            })
        }
        establishServiceWorkerChannel() {
            return a.a(this, void 0, void 0, function* () {
                const e = this.context.workerMessenger;
                e.off(), e.on(Q.NotificationDisplayed, e => {
                    M.a.debug(location.origin, "Received notification display event from service worker."), b.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e)
                }), e.on(Q.NotificationClicked, e => a.a(this, void 0, void 0, function* () {
                    let t;
                    if (0 === (t = P.a.getWindowEnv() === U.a.OneSignalProxyFrame ? yield new Promise(e => {
                            const t = OneSignal.proxyFrame;
                            t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, t => {
                                let i = t.data;
                                e(i)
                            })
                        }): OneSignal.emitter.numberOfListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED))) {
                        M.a.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval.");
                        let t = e.url;
                        e.url || (t = location.href), yield N.a.put("NotificationOpened", {
                            url: t
                            , data: e
                            , timestamp: Date.now()
                        })
                    } else b.a.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, e)
                })), e.on(Q.RedirectPage, e => {
                    M.a.debug(`${P.a.getWindowEnv().toString()} Picked up command.redirect to ${e}, forwarding to host page.`);
                    const t = OneSignal.proxyFrame;
                    t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e)
                }), e.on(Q.NotificationDismissed, e => {
                    b.a.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e)
                })
            })
        }
        installAlternatingWorker() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield this.getActiveState();
                e === te.a.ThirdParty && M.a.info("[Service Worker Installation] 3rd party service worker detected.");
                const t = `${te.b.getServiceWorkerHref(e,this.config)}?${I.a.encodeHashAsUriComponent({appId:this.context.appConfig.appId})}`;
                M.a.info(`[Service Worker Installation] Installing service worker ${t}.`);
                try {
                    yield navigator.serviceWorker.register(t, {
                        scope: `${y.b.getBaseUrl()}${this.config.registrationOptions.scope}`
                    })
                } catch (e) {
                    if (M.a.error(`[Service Worker Installation] Installing service worker failed ${e}`), P.a.getWindowEnv() === U.a.OneSignalSubscriptionPopup) throw e;
                    const i = yield fetch(t);
                    if (403 === i.status || 404 === i.status) throw new Pe(i.status, i.statusText);
                    throw e
                }
                M.a.debug("[Service Worker Installation] Service worker installed.")
            })
        }
    }
    class Te {
        constructor(e, t) {
            this.url = e, this.url.pathname = "subscribe", this.options = t || {}
        }
        load() {
            const e = Object.assign({}, V.getPromptOptionsPostHash(), {
                promptType: "popup"
                , parentHostname: encodeURIComponent(location.hostname)
            });
            return this.options.autoAccept && (e.autoAccept = !0), M.a.info(`Opening a popup to ${this.url.toString()} with POST data:`, e), this.popupWindow = this.openWindowViaPost(this.url.toString(), e, null), this.establishCrossOriginMessaging(), this.loadPromise = {}, this.loadPromise.promise = new Promise((e, t) => {
                this.loadPromise.resolver = e, this.loadPromise.rejector = t
            }), this.loadPromise.promise
        }
        openWindowViaPost(e, t, i) {
            var n = document.createElement("form");
            n.action = e, n.method = "POST", n.target = "onesignal-http-popup";
            var s = void 0 != window.screenLeft ? window.screenLeft : screen.left
                , o = void 0 != window.screenTop ? window.screenTop : screen.top
                , r = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
                , a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height
                , c = OneSignal._windowWidth
                , l = OneSignal._windowHeight
                , d = r / 2 - c / 2 + s
                , u = a / 2 - l / 2 + o;
            i && (i.childWidth && (c = i.childWidth), i.childHeight && (l = i.childHeight), i.left && (d = i.left), i.top && (u = i.top));
            const g = window.open("about:blank", "onesignal-http-popup", `'scrollbars=yes, width=${c}, height=${l}, top=${u}, left=${d}`);
            if (t)
                for (var p in t) {
                    var h = document.createElement("textarea");
                    h.name = p, h.value = "object" == typeof t[p] ? JSON.stringify(t[p]) : t[p], n.appendChild(h)
                }
            return n.style.display = "none", document.body.appendChild(n), n.submit(), document.body.removeChild(n), g
        }
        establishCrossOriginMessaging() {
            this.messenger = new Z(this.popupWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, this.onBeginMessagePortCommunications.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, this.onPopupLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, this.onPopupAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, this.onPopupRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onPopupClosing.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT, this.onSetSessionCount.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, this.onWindowTimeout.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, this.onFinishingRegistrationRemotely.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.startPostMessageReceive()
        }
        dispose() {
            this.messenger.destroy()
        }
        onBeginMessagePortCommunications(e) {
            return a.a(this, void 0, void 0, function* () {
                return M.a.debug(`(${P.a.getWindowEnv().toString()}) Successfully established cross-origin messaging with the popup window.`), this.messenger.connect(), !1
            })
        }
        onPopupLoaded(e) {
            return a.a(this, void 0, void 0, function* () {
                this.loadPromise.resolver(), b.a.trigger("popupLoad")
            })
        }
        onPopupAccepted(e) {
            return a.a(this, void 0, void 0, function* () {
                V.triggerCustomPromptClicked("granted")
            })
        }
        onPopupRejected(e) {
            return a.a(this, void 0, void 0, function* () {
                V.triggerCustomPromptClicked("denied")
            })
        }
        onPopupClosing(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.info("Popup window is closing, running cleanup events."), b.a.trigger(OneSignal.EVENTS.POPUP_CLOSING), this.dispose()
            })
        }
        onSetSessionCount(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug(P.a.getWindowEnv()
                    .toString() + " Marking current session as a continuing browsing session.");
                const {
                    sessionCount: t
                } = e.data;
                OneSignal.context.sessionManager.setPageViewCount(t)
            })
        }
        onWindowTimeout(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug(P.a.getWindowEnv()
                    .toString() + " Popup window timed out and was closed."), b.a.trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT)
            })
        }
        onFinishingRegistrationRemotely(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug(location.origin, P.a.getWindowEnv()
                    .toString() + " Finishing HTTP popup registration inside the iFrame, sent from popup."), e.reply({
                    progress: !0
                });
                const {
                    rawPushSubscription: t
                } = e.data;
                this.messenger && this.messenger.stopPostMessageReceive(), yield OneSignal.context.subscriptionManager.registerSubscription(t), yield R.checkAndTriggerSubscriptionChanged(), yield V.checkAndTriggerNotificationPermissionChanged()
            })
        }
        onRemoteRetriggerEvent(e) {
            let {
                eventName: t
                , eventData: i
            } = e.data;
            return b.a.trigger(t, i, e.source), !1
        }
        message() {
            this.messenger && this.messenger.message.apply(this.messenger, arguments)
        }
    }
    
    function Ce(e) {
        return btoa(encodeURIComponent(e)
            .replace(/%([0-9A-F]{2})/g, function (e, t) {
                return String.fromCharCode("0x" + t)
            }))
    }
    class Ae {
        getPropertiesAsJson() {
            return {
                origin: location.origin
                , url: location.href
                , sdkVersion: d.a.version()
            }
        }
    }
    class Ne {}(ve = Se || (Se = {}))
    .HttpPermissionRequest = "HttpPermissionRequest", ve.SyncHashedEmail = "SyncHashedEmail";
    class Me extends Ae {
        constructor(e) {
            super(), this.apiName = e
        }
        getEventName() {
            return "api-usage"
        }
        getPropertiesAsJson() {
            return Object.assign({
                api: this.apiName.toString()
            }, super.getPropertiesAsJson())
        }
    }
    class ke extends Ne {
        constructor() {
            super()
        }
        getProfileName() {
            return "all_websites"
        }
        getDateUtc() {
            const e = new Date;
            return `${e.getUTCMonth()+1}_${e.getUTCDate()}_${e.getUTCFullYear()}`
        }
        getOperationData() {
            const e = {
                $add: {}
                , $ignore_time: !0
            };
            return e.$add[`pageview_${this.getDateUtc()}`] = 1, e
        }
    }
    class _e {
        constructor(e, t) {
            this.isFeatureEnabled = e, this.mixpanelReportingToken = t
        }
        static get MIXPANEL_REPORTING_URL() {
            return "https://api.mixpanel.com"
        }
        isEnabled() {
            return this.isFeatureEnabled && !!this.mixpanelReportingToken
        }
        reportEvent(e) {
            if (!this.isEnabled()) return Promise.resolve(null);
            const t = {
                    event: e.getEventName()
                    , properties: Object.assign({
                        token: this.mixpanelReportingToken
                    }, e.getPropertiesAsJson())
                }
                , i = Ce(JSON.stringify(t))
                , n = {
                    method: "GET"
                    , headers: new Headers
                    , cache: "no-cache"
                };
            return fetch(`${_e.MIXPANEL_REPORTING_URL}/track/?data=${i}`, n)
        }
        reportEngagement(e) {
            if (!this.isEnabled()) return Promise.resolve(null);
            let t = {
                $token: this.mixpanelReportingToken
                , $distinct_id: e.getProfileName()
            };
            t = Object.assign({}, t, e.getOperationData());
            const i = Ce(JSON.stringify(t))
                , n = {
                    method: "GET"
                    , headers: new Headers
                    , cache: "no-cache"
                };
            return fetch(`${_e.MIXPANEL_REPORTING_URL}/engage/?data=${i}`, n)
        }
        shouldCollectPageView() {
            const e = new Date;
            return e.getUTCMonth() + 1 <= 2 && e.getUTCDate() <= 10 && e.getUTCFullYear() <= 2018 && e.getUTCMonth() + 1 >= 2 && e.getUTCDate() >= 8 && e.getUTCFullYear() >= 2018
        }
        reportPageView() {
            this.shouldCollectPageView() && this.reportEngagement(new ke)
        }
    }(ye = Oe || (Oe = {}))[ye.HttpPermissionRequest = 0] = "HttpPermissionRequest", ye[ye.SyncHashedEmail = 1] = "SyncHashedEmail";
    class xe extends u.a {
        constructor(e) {
            switch (e) {
            case Oe.HttpPermissionRequest:
                super("The HTTP permission request has been deprecated. Please remove any custom popups from your code."), this.reportUsage(Se.HttpPermissionRequest);
                break;
            case Oe.SyncHashedEmail:
                super("API syncHashedEmail() has been deprecated and will be removed in a future SDK release. Please remove any usages from your code."), this.reportUsage(Se.SyncHashedEmail)
            }
            Object.setPrototypeOf(this, xe.prototype)
        }
        reportUsage(e) {
            "undefined" != typeof OneSignal && OneSignal.context && OneSignal.context.metricsManager && OneSignal.context.metricsManager.reportEvent(new Me(e))
        }
    }
    class Re {
        static internalInit() {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug("Called %cinternalInit()", Object(k.j)("code")), yield OneSignal.context.serviceWorkerManager.installWorker(), OneSignal.context.sessionManager.incrementPageViewCount(), "visible" === document.visibilityState ? yield Re.sessionInit(): Object(k.s)(document, "visibilitychange", (e, t) => {
                    "visible" === document.visibilityState && (t(), Re.sessionInit())
                }, !0)
            })
        }
        static sessionInit() {
            return a.a(this, void 0, void 0, function* () {
                if (M.a.debug("Called %csessionInit()", Object(k.j)("code")), OneSignal._sessionInitAlreadyRunning) return void M.a.debug("Returning from sessionInit because it has already been called.");
                OneSignal._sessionInitAlreadyRunning = !0;
                try {
                    yield Re.doInitialize()
                } catch (e) {
                    if (e instanceof p) return;
                    throw e
                }
                const e = yield OneSignal.internalIsOptedOut();
                q.setIsOptedOut(!!e), y.a.isUsingSubscriptionWorkaround() || (yield Re.handleAutoResubscribe(e));
                const t = yield OneSignal.privateIsPushNotificationsEnabled();
                if (q.setIsPushNotificationsEnabled(!!t), OneSignal.config.userConfig.promptOptions.autoPrompt && !e && !t) {
                    const {
                        environmentInfo: e
                    } = OneSignal, {
                        browserType: t
                        , browserVersion: i
                        , requiresUserInteraction: n
                    } = e;
                    "chrome" === t && Number(i) >= 63 && (l.a.tablet || l.a.mobile) || n ? (OneSignal.config.userConfig.promptOptions.slidedown.enabled = !0, yield OneSignal.context.promptsManager.internalShowSlidedownPrompt()) : yield OneSignal.context.promptsManager.internalShowAutoPrompt()
                }
                OneSignal._sessionInitAlreadyRunning = !1, yield b.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED)
            })
        }
        static registerForPushNotifications(e = {}) {
            return a.a(this, void 0, void 0, function* () {
                if (e && e.modalPrompt) return OneSignal.subscriptionModalHost = new X(OneSignal.config.appId, e), void(yield OneSignal.subscriptionModalHost.load());
                if (y.a.isUsingSubscriptionWorkaround()) return e.httpPermissionRequest ? void M.a.error(new xe(Oe.HttpPermissionRequest)) : void(yield Re.loadSubscriptionPopup(e));
                q.getIsOptedOut() || (yield Y.registerForPush())
            })
        }
        static onSdkInitialized() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield Re.processExpiringSubscriptions();
                (yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) ? e || (yield OneSignal.context.updateManager.sendOnSessionUpdate()): OneSignal.config.userConfig.promptOptions.autoPrompt || OneSignal.config.userConfig.autoResubscribe || (yield OneSignal.context.updateManager.sendOnSessionUpdate()), yield b.a.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC)
            })
        }
        static loadSubscriptionPopup(e) {
            return a.a(this, void 0, void 0, function* () {
                OneSignal.subscriptionPopupHost = new Te(OneSignal.proxyFrameHost.url, e), yield OneSignal.subscriptionPopupHost.load()
            })
        }
        static storeInitialValues() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield OneSignal.privateIsPushNotificationsEnabled(), t = yield OneSignal.privateGetNotificationPermission(), i = yield OneSignal.internalIsOptedOut();
                S.put("subscription.optedOut", i), yield N.a.put("Options", {
                    key: "isPushEnabled"
                    , value: e
                }), yield N.a.put("Options", {
                    key: "notificationPermission"
                    , value: t
                })
            })
        }
        static setWelcomeNotificationFlag() {
            return a.a(this, void 0, void 0, function* () {
                (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId)) === D.Granted && (OneSignal.__doNotShowWelcomeNotification = !0)
            })
        }
        static establishServiceWorkerChannel() {
            return a.a(this, void 0, void 0, function* () {
                if (navigator.serviceWorker && "https:" === window.location.protocol && !(yield P.a.isFrameContextInsecure())) try {
                    const e = yield Ie.getRegistration();
                    e && e.active && (yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel())
                } catch (e) {
                    M.a.error(e)
                }
            })
        }
        static processExpiringSubscriptions() {
            return a.a(this, void 0, void 0, function* () {
                const e = OneSignal.context;
                if (M.a.debug("Checking subscription expiration..."), !(yield e.subscriptionManager.isSubscriptionExpiring())) return M.a.debug("Subscription is not considered expired."), !1;
                const t = yield P.a.getIntegration(), i = P.a.getWindowEnv();
                switch (M.a.debug("Subscription is considered expiring. Current Integration:", t), t) {
                case oe.a.Secure:
                    const n = yield e.subscriptionManager.subscribe(1);
                    yield e.subscriptionManager.registerSubscription(n);
                    break;
                case oe.a.SecureProxy:
                    if (i === U.a.OneSignalProxyFrame) yield this.registerSubscriptionInProxyFrame(e);
                    else {
                        yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS)
                    }
                    break;
                case oe.a.InsecureProxy:
                    yield N.a.remove("Ids", "registrationId"), M.a.debug("Unsubscribed expiring HTTP subscription by removing registration ID.")
                }
                return !0
            })
        }
        static registerSubscriptionInProxyFrame(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield new Promise(t => {
                    e.workerMessenger.once(Q.SubscribeNew, e => {
                        t(re.a.deserialize(e))
                    }), e.workerMessenger.unicast(Q.SubscribeNew, e.appConfig)
                });
                return M.a.debug("Finished registering brand new subscription:", t), t
            })
        }
        static doInitialize() {
            return a.a(this, void 0, void 0, function* () {
                const e = [];
                e.push(Re.storeInitialValues()), e.push(Re.installNativePromptPermissionChangedHook()), e.push(Re.setWelcomeNotificationFlag()), e.push(Re.establishServiceWorkerChannel()), e.push(Re.showNotifyButton()), e.push(Re.showPromptsFromWebConfigEditor()), OneSignal.context.cookieSyncer.install();
                try {
                    yield Promise.all(e)
                } catch (e) {
                    throw M.a.error(e), new p(o.Unknown)
                }
            })
        }
        static showNotifyButton() {
            return a.a(this, void 0, void 0, function* () {
                if (d.a.isBrowser() && !OneSignal.notifyButton) {
                    OneSignal.config.userConfig.notifyButton = OneSignal.config.userConfig.notifyButton || {}, OneSignal.config.userConfig.bell && (OneSignal.config.userConfig.bell = Object.assign({}, OneSignal.config.userConfig.bell, OneSignal.config.userConfig.notifyButton), OneSignal.config.userConfig.notifyButton = Object.assign({}, OneSignal.config.userConfig.notifyButton, OneSignal.config.userConfig.bell));
                    const e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                    e && "function" == typeof e ? OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, () => a.a(this, void 0, void 0, function* () {
                        !1 !== (yield Promise.resolve(OneSignal.config.userConfig.notifyButton.displayPredicate())) ? (OneSignal.notifyButton = new me(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create()) : M.a.debug("Notify button display predicate returned false so not showing the notify button.")
                    })) : (OneSignal.notifyButton = new me(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create())
                }
            })
        }
        static updateEmailSessionCount() {
            return a.a(this, void 0, void 0, function* () {
                const e = OneSignal.context;
                if (e.sessionManager.isFirstPageView()) {
                    const t = yield N.a.getEmailProfile();
                    if (t.emailId) {
                        const i = new E(t.emailAddress, t.emailAuthHash);
                        i.appId = e.appConfig.appId, yield A.updateUserSession(t.emailId, i)
                    }
                }
            })
        }
        static showPromptsFromWebConfigEditor() {
            return a.a(this, void 0, void 0, function* () {
                const e = OneSignal.config;
                e.userConfig.promptOptions && (yield _.initialize(e.userConfig.promptOptions.customlink))
            })
        }
        static installNativePromptPermissionChangedHook() {
            return a.a(this, void 0, void 0, function* () {
                if (navigator.permissions && !(l.a.firefox && Number(l.a.version) <= 45)) {
                    OneSignal._usingNativePermissionHook = !0, (yield navigator.permissions.query({
                            name: "notifications"
                        }))
                        .onchange = function () {
                            Object(k.w)()
                        }
                }
            })
        }
        static saveInitOptions() {
            return a.a(this, void 0, void 0, function* () {
                let e = [];
                const t = OneSignal.config.userConfig.persistNotification;
                e.push(N.a.put("Options", {
                    key: "persistNotification"
                    , value: null == t || t
                }));
                let i = OneSignal.config.userConfig.webhooks;
                return ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(t => {
                    i && i[t] ? e.push(N.a.put("Options", {
                        key: `webhooks.${t}`
                        , value: i[t]
                    })) : e.push(N.a.put("Options", {
                        key: `webhooks.${t}`
                        , value: !1
                    }))
                }), i && i.cors ? e.push(N.a.put("Options", {
                    key: "webhooks.cors"
                    , value: !0
                })) : e.push(N.a.put("Options", {
                    key: "webhooks.cors"
                    , value: !1
                })), OneSignal.config.userConfig.notificationClickHandlerMatch ? e.push(N.a.put("Options", {
                    key: "notificationClickHandlerMatch"
                    , value: OneSignal.config.userConfig.notificationClickHandlerMatch
                })) : e.push(N.a.put("Options", {
                    key: "notificationClickHandlerMatch"
                    , value: "exact"
                })), OneSignal.config.userConfig.notificationClickHandlerAction ? e.push(N.a.put("Options", {
                    key: "notificationClickHandlerAction"
                    , value: OneSignal.config.userConfig.notificationClickHandlerAction
                })) : e.push(N.a.put("Options", {
                    key: "notificationClickHandlerAction"
                    , value: "navigate"
                })), Promise.all(e)
            })
        }
        static initSaveState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield V.getAppId();
                yield N.a.put("Ids", {
                    type: "appId"
                    , id: t
                });
                const i = e || document.title || "Notification";
                yield N.a.put("Options", {
                    key: "pageTitle"
                    , value: i
                }), M.a.info(`OneSignal: Set pageTitle to be '${i}'.`);
                const n = OneSignal.config;
                yield N.a.put("Options", {
                    key: "emailAuthRequired"
                    , value: !!n.emailAuthRequired
                })
            })
        }
        static handleAutoResubscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                if (M.a.info("handleAutoResubscribe", {
                        autoResubscribe: OneSignal.config.userConfig.autoResubscribe
                        , isOptedOut: e
                    }), OneSignal.config.userConfig.autoResubscribe && !e) {
                    (yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId)) == D.Granted && (yield Y.registerForPush())
                }
            })
        }
        static polyfillSafariFetch() {
            return a.a(this, void 0, void 0, function* () {
                if (l.a.safari && void 0 === window.fetch) {
                    M.a.debug("Loading fetch polyfill for Safari..");
                    try {
                        yield(new se)
                            .loadFetchPolyfill(), M.a.debug("Done loading fetch polyfill.")
                    } catch (e) {
                        M.a.debug("Error loading fetch polyfill:", e)
                    }
                }
            })
        }
        static errorIfInitAlreadyCalled() {
            if (OneSignal._initCalled) throw new p(o.MultipleInitialization);
            OneSignal._initCalled = !0
        }
    }
    class De {
        static markHttpsNativePromptDismissed() {
            return a.a(this, void 0, void 0, function* () {
                if (Object(k.o)()) try {
                    yield new Promise((e, t) => {
                        OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, {}, i => {
                            i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t()
                        })
                    })
                } catch (e) {
                    M.a.debug("Proxy Frame possibly didn't not receive MARK_PROMPT_DISMISSED message", e || "")
                }
                let e = yield N.a.get("Options", "promptDismissCount");
                e || (e = 0), Object(k.o)() || (e += 1);
                let t = 3;
                2 == e ? t = 7 : e > 2 && (t = 30), M.a.debug(`(${P.a.getWindowEnv().toString()}) OneSignal: User dismissed the native notification prompt; reprompt after ${t} days.`), yield N.a.put("Options", {
                    key: "promptDismissCount"
                    , value: e
                });
                const i = 24 * t * 60;
                return L.setItem("onesignal-notification-prompt", "dismissed", i)
            })
        }
    }
    class We {
        constructor(e, t = !1) {
            this.context = e, this.isFeatureEnabled = t
        }
        get PUBLISHER_ID() {
            try {
                return `os!${this.context.appConfig.appId.replace(/-/g,"").substr(0,15).toLowerCase()}`
            } catch (e) {
                return "os!os"
            }
        }
        getFrameOrigin() {
            return !!this.context.appConfig.subdomain ? new URL(`https://${this.context.appConfig.subdomain}.os.tc`) : new URL(P.a.getOneSignalApiUrl()
                .origin)
        }
        install() {
            return a.a(this, void 0, void 0, function* () {
                if (window.top !== window) return;
                const e = this.getFrameOrigin();
                this.isFeatureEnabled ? (e.pathname = "/webPushAnalytics", e.search = `sync=true&appId=${this.PUBLISHER_ID}`) : e.pathname = "/webPushAnalytics";
                const t = document.createElement("iframe");
                t.style.display = "none", t.src = e.href;
                const i = {
                    promise: void 0
                    , resolver: void 0
                    , rejector: void 0
                };
                return i.promise = new Promise((e, t) => {
                    i.resolver = e, i.rejector = t
                }), document.body.appendChild(t), t.onload = i.resolver, t.onerror = i.rejector, i.promise
            })
        }
    }
    class Ue {
        constructor() {
            this.incrementedPageViewCount = !1
        }
        getPageViewCount() {
            try {
                const e = sessionStorage.getItem(Ue.SESSION_STORAGE_KEY_NAME)
                    , t = e ? parseInt(e) : 0;
                return isNaN(t) ? 0 : t
            } catch (e) {
                return 0
            }
        }
        setPageViewCount(e) {
            try {
                sessionStorage.setItem(Ue.SESSION_STORAGE_KEY_NAME, e.toString()), P.a.getWindowEnv() === U.a.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT)
            } catch (e) {}
        }
        incrementPageViewCount() {
            if (this.incrementedPageViewCount) return;
            const e = this.getPageViewCount() + 1;
            this.setPageViewCount(e), M.a.debug(`Incremented page view count to ${e}.`), this.incrementedPageViewCount = !0
        }
        simulatePageNavigationOrRefresh() {
            this.incrementedPageViewCount = !1
        }
        isFirstPageView() {
            return 1 === this.getPageViewCount()
        }
    }
    Ue.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";
    class Be {
        isNewSubscription() {
            return this.existingW3cPushSubscription ? !!this.existingW3cPushSubscription.w3cEndpoint != !!this.w3cEndpoint || (!(!this.existingW3cPushSubscription.w3cEndpoint || !this.w3cEndpoint || this.existingW3cPushSubscription.w3cEndpoint.toString() === this.w3cEndpoint.toString()) || (this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth)) : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken
        }
        static setFromW3cSubscription(e) {
            const t = new Be;
            if (e && (t.w3cEndpoint = new URL(e.endpoint), e.getKey)) {
                let i = null;
                try {
                    i = e.getKey("p256dh")
                } catch (e) {}
                let n = null;
                try {
                    n = e.getKey("auth")
                } catch (e) {}
                if (i) {
                    let e = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                    t.w3cP256dh = e
                }
                if (n) {
                    let e = btoa(String.fromCharCode.apply(null, new Uint8Array(n)));
                    t.w3cAuth = e
                }
            }
            return t
        }
        setFromSafariSubscription(e) {
            this.safariDeviceToken = e
        }
        serialize() {
            return {
                w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null
                , w3cP256dh: this.w3cP256dh
                , w3cAuth: this.w3cAuth
                , safariDeviceToken: this.safariDeviceToken
                , existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null
                , existingSafariDeviceToken: this.existingSafariDeviceToken
            }
        }
        static deserialize(e) {
            const t = new Be;
            if (!e) return t;
            try {
                t.w3cEndpoint = new URL(e.w3cEndpoint)
            } catch (e) {}
            return t.w3cP256dh = e.w3cP256dh, t.w3cAuth = e.w3cAuth, t.existingW3cPushSubscription = void 0, e.existingW3cPushSubscription ? t.existingW3cPushSubscription = Be.deserialize(e.existingW3cPushSubscription) : e.existingPushSubscription && (t.existingW3cPushSubscription = Be.deserialize(e.existingPushSubscription)), t.safariDeviceToken = e.safariDeviceToken, t.existingSafariDeviceToken = e.existingSafariDeviceToken, t
        }
    }
    class Le extends w {
        constructor(e) {
            super(), this.subscription = e
        }
        serialize() {
            const e = super.serialize();
            return this.subscription && (e.identifier = l.a.safari ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint ? this.subscription.w3cEndpoint.toString() : null, e.web_auth = this.subscription.w3cAuth, e.web_p256 = this.subscription.w3cP256dh), e
        }
        static createFromPushSubscription(e, t, i) {
            const n = new Le(t);
            return n.appId = e, n.subscriptionState = t ? W.Subscribed : W.NotSubscribed, i && (n.subscriptionState = i), n
        }
        deserialize(e) {
            throw new O
        }
    }(Ee = we || (we = {}))[Ee.InvalidSafariSetup = 0] = "InvalidSafariSetup", Ee[Ee.Blocked = 1] = "Blocked", Ee[Ee.Dismissed = 2] = "Dismissed";
    class je extends u.a {
        constructor(e) {
            switch (e) {
            case we.InvalidSafariSetup:
                super("The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.");
                break;
            case we.Blocked:
                super("Notification permissions are blocked.");
                break;
            case we.Dismissed:
                super("The notification permission prompt was dismissed.")
            }
            Object.setPrototypeOf(this, je.prototype)
        }
    }
    class He {
        constructor(e, t) {
            this.context = e, this.config = t
        }
        static isSafari() {
            return d.a.isSafari()
        }
        subscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = P.a.getWindowEnv();
                switch (t) {
                case U.a.CustomIframe:
                case U.a.Unknown:
                case U.a.OneSignalProxyFrame:
                    throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                let i;
                switch (t) {
                case U.a.ServiceWorker:
                    i = yield this.subscribeFcmFromWorker(e);
                    break;
                case U.a.Host:
                case U.a.OneSignalSubscriptionModal:
                case U.a.OneSignalSubscriptionPopup:
                    if ((yield OneSignal.privateGetNotificationPermission()) === D.Denied) throw new $(j.Blocked);
                    i = He.isSafari() ? yield this.subscribeSafari(): yield this.subscribeFcmFromPage(e);
                    break;
                default:
                    throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                }
                return i
            })
        }
        registerSubscription(e, t) {
            return a.a(this, void 0, void 0, function* () {
                e && (e = Be.deserialize(e));
                const i = Le.createFromPushSubscription(this.config.appId, e, t);
                let n = void 0;
                (yield this.isAlreadyRegisteredWithOneSignal()) ? yield this.context.updateManager.sendPlayerUpdate(i): (n = yield this.context.updateManager.sendPlayerCreate(i)) && (yield this.associateSubscriptionWithEmail(n));
                const s = yield N.a.getSubscription();
                return s.deviceId = n, s.optedOut = !1, e ? He.isSafari() ? s.subscriptionToken = e.safariDeviceToken : s.subscriptionToken = e.w3cEndpoint ? e.w3cEndpoint.toString() : null : s.subscriptionToken = null, yield N.a.setSubscription(s), P.a.getWindowEnv() !== U.a.ServiceWorker && b.a.trigger(OneSignal.EVENTS.REGISTERED), "undefined" != typeof OneSignal && (OneSignal._sessionInitAlreadyRunning = !1), s
            })
        }
        static requestPresubscribeNotificationPermission() {
            return a.a(this, void 0, void 0, function* () {
                return yield He.requestNotificationPermission()
            })
        }
        unsubscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                if (0 === e) throw new O;
                if (1 !== e) throw new O;
                if (P.a.getWindowEnv() !== U.a.ServiceWorker) throw new O; {
                    const {
                        deviceId: e
                    } = yield N.a.getSubscription();
                    yield A.updatePlayer(this.context.appConfig.appId, e, {
                        notification_types: W.MutedByApi
                    }), yield N.a.put("Options", {
                        key: "optedOut"
                        , value: !0
                    })
                }
            })
        }
        static requestNotificationPermission() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield window.Notification.requestPermission();
                return D[e]
            })
        }
        associateSubscriptionWithEmail(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield N.a.getEmailProfile();
                t.emailId && (yield A.updatePlayer(this.config.appId, e, {
                    parent_player_id: t.emailId
                    , email: t.emailAddress
                }))
            })
        }
        isAlreadyRegisteredWithOneSignal() {
            return a.a(this, void 0, void 0, function* () {
                const {
                    deviceId: e
                } = yield N.a.getSubscription();
                return !!e
            })
        }
        subscribeSafariPromptPermission() {
            return new Promise(e => {
                window.safari.pushNotification.requestPermission(`${P.a.getOneSignalApiUrl().toString()}/safari`, this.config.safariWebId, {
                    app_id: this.config.appId
                }, t => {
                    t.deviceToken ? e(t.deviceToken.toLowerCase()) : e(null)
                })
            })
        }
        subscribeSafari() {
            return a.a(this, void 0, void 0, function* () {
                const e = new Be;
                if (!this.config.safariWebId) throw new p(o.MissingSafariWebId);
                const {
                    deviceToken: t
                } = window.safari.pushNotification.permission(this.config.safariWebId);
                e.existingSafariDeviceToken = t, t || b.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                const i = yield this.subscribeSafariPromptPermission();
                if (F.a.triggerNotificationPermissionChanged(), !i) throw new je(we.InvalidSafariSetup);
                return e.setFromSafariSubscription(i), e
            })
        }
        subscribeFcmFromPage(e) {
            return a.a(this, void 0, void 0, function* () {
                if (P.a.getWindowEnv() !== U.a.ServiceWorker && window.Notification.permission === D.Default) {
                    yield b.a.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                    const e = yield He.requestPresubscribeNotificationPermission();
                    switch (e === D.Default && (yield F.a.triggerNotificationPermissionChanged(!0)), e) {
                    case D.Default:
                        throw M.a.debug("Exiting subscription and not registering worker because the permission was dismissed."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new $(j.Dismissed);
                    case D.Denied:
                        throw M.a.debug("Exiting subscription and not registering worker because the permission was blocked."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new $(j.Blocked)
                    }
                }
                try {
                    yield this.context.serviceWorkerManager.installWorker()
                } catch (e) {
                    throw e instanceof Pe && (403 === e.status ? yield this.context.subscriptionManager.registerFailedSubscription(W.ServiceWorkerStatus403, this.context): 404 === e.status && (yield this.context.subscriptionManager.registerFailedSubscription(W.ServiceWorkerStatus404, this.context))), e
                }
                M.a.debug("Waiting for the service worker to activate...");
                const t = yield navigator.serviceWorker.ready;
                return M.a.debug("Service worker is ready to continue subscribing."), yield this.subscribeWithVapidKey(t.pushManager, e)
            })
        }
        subscribeFcmFromWorker(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = self.registration;
                if (!t.active && !l.a.firefox) throw new InvalidStateError.a(InvalidStateError.b.ServiceWorkerNotActivated);
                const i = yield t.pushManager.permissionState({
                    userVisibleOnly: !0
                });
                if ("denied" === i) throw new $(j.Blocked);
                if ("prompt" === i) throw new $(j.Default);
                return yield this.subscribeWithVapidKey(t.pushManager, e)
            })
        }
        getVapidKeyForBrowser() {
            let e = void 0;
            return (e = l.a.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey) ? function (e) {
                    const t = (e + "=".repeat((4 - e.length % 4) % 4))
                        .replace(/\-/g, "+")
                        .replace(/_/g, "/")
                        , i = atob(t)
                        , n = new Uint8Array(i.length);
                    for (let e = 0; e < i.length; ++e) n[e] = i.charCodeAt(e);
                    return n
                }(e)
                .buffer : void 0
        }
        subscribeWithVapidKey(e, t) {
            return a.a(this, void 0, void 0, function* () {
                const i = yield e.getSubscription();
                switch (t) {
                case 0:
                    if (!i) break;
                    i.options ? M.a.debug("[Subscription Manager] An existing push subscription exists and it's options is not null.") : (M.a.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."), yield He.doPushUnsubscribe(i));
                    break;
                case 1:
                    i && (yield He.doPushUnsubscribe(i))
                }
                const [n, s] = yield He.doPushSubscribe(e, this.getVapidKeyForBrowser());
                yield He.updateSubscriptionTime(s, n.expirationTime);
                const o = Be.setFromW3cSubscription(n);
                return i && (o.existingW3cPushSubscription = Be.setFromW3cSubscription(i)), o
            })
        }
        static updateSubscriptionTime(e, t) {
            return a.a(this, void 0, void 0, function* () {
                const i = yield N.a.getSubscription();
                e && (i.createdAt = (new Date)
                    .getTime()), i.expirationTime = t, yield N.a.setSubscription(i)
            })
        }
        static doPushUnsubscribe(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug("[Subscription Manager] Unsubscribing existing push subscription.");
                const t = yield e.unsubscribe();
                return M.a.debug(`[Subscription Manager] Unsubscribing existing push subscription result: ${t}`), t
            })
        }
        static doPushSubscribe(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (!t) throw new Error("Missing required 'applicationServerKey' to subscribe for push notifications!");
                const i = {
                    userVisibleOnly: !0
                    , applicationServerKey: t
                };
                M.a.debug("[Subscription Manager] Subscribing to web push with these options:", i);
                try {
                    const t = yield e.getSubscription();
                    return [yield e.subscribe(i), !t]
                } catch (t) {
                    if ("InvalidStateError" == t.name) return M.a.warn("[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, unsubscribe and attempting to subscribe with new key.", t), yield He.doPushUnsubscribe(yield e.getSubscription()), [yield e.subscribe(i), !0];
                    throw t
                }
            })
        }
        isSubscriptionExpiring() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield P.a.getIntegration(), t = P.a.getWindowEnv();
                switch (e) {
                case oe.a.Secure:
                    return yield this.isSubscriptionExpiringForSecureIntegration();
                case oe.a.SecureProxy:
                    if (t === U.a.Host) {
                        const e = OneSignal.proxyFrameHost;
                        if (e) return yield e.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE);
                        throw new InvalidStateError.a(InvalidStateError.b.NoProxyFrame)
                    }
                    return yield this.isSubscriptionExpiringForSecureIntegration();
                case oe.a.InsecureProxy:
                    const {
                        expirationTime: i
                    } = yield N.a.getSubscription();
                    return !!i && (new Date)
                        .getTime() >= i
                }
            })
        }
        isSubscriptionExpiringForSecureIntegration() {
            return a.a(this, void 0, void 0, function* () {
                const e = yield this.context.serviceWorkerManager.getActiveState();
                if (e !== te.a.WorkerA && e !== te.a.WorkerB) return !1;
                const t = yield Ie.getRegistration();
                if (!t) return !1;
                if (!t.pushManager) return !1;
                const i = yield t.pushManager.getSubscription();
                if (!i) return !1;
                if (!i.expirationTime) return !1;
                let {
                    createdAt: n
                } = yield N.a.getSubscription();
                if (!n) {
                    const e = 31536e6;
                    n = (new Date)
                        .getTime() + e
                }
                const s = n + (i.expirationTime - n) / 2;
                return !!i.expirationTime && ((new Date)
                    .getTime() >= i.expirationTime || (new Date)
                    .getTime() >= s)
            })
        }
        getSubscriptionState() {
            return a.a(this, void 0, void 0, function* () {
                if (He.isSafari()) return this.getSubscriptionStateForSecure();
                const e = P.a.getWindowEnv();
                switch (e) {
                case U.a.ServiceWorker:
                    const t = yield self.registration.pushManager.getSubscription(), {
                        optedOut: i
                    } = yield N.a.getSubscription();
                    return {
                        subscribed: !!t, optedOut: !!i
                    };
                default:
                    switch (yield P.a.getIntegration()) {
                    case oe.a.Secure:
                        return this.getSubscriptionStateForSecure();
                    case oe.a.SecureProxy:
                        switch (e) {
                        case U.a.OneSignalProxyFrame:
                        case U.a.OneSignalSubscriptionPopup:
                        case U.a.OneSignalSubscriptionModal:
                            return this.getSubscriptionStateForSecure();
                        default:
                            return yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE)
                        }
                        case oe.a.InsecureProxy:
                            return yield this.getSubscriptionStateForInsecure();
                        default:
                            throw new InvalidStateError.a(InvalidStateError.b.UnsupportedEnvironment)
                    }
                }
            })
        }
        getSubscriptionStateForSecure() {
            return a.a(this, void 0, void 0, function* () {
                const {
                    deviceId: e
                    , optedOut: t
                } = yield N.a.getSubscription();
                if (He.isSafari()) {
                    const i = window.safari.pushNotification.permission(this.config.safariWebId);
                    return {
                        subscribed: !("granted" !== i.permission || !i.deviceToken || !e)
                        , optedOut: !!t
                    }
                }
                const i = yield this.context.serviceWorkerManager.getActiveState(), n = yield Ie.getRegistration(), s = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId), o = i === te.a.WorkerA || i === te.a.WorkerB;
                return n ? {
                    subscribed: !(!e || s !== D.Granted || !o)
                    , optedOut: !!t
                } : {
                    subscribed: !1
                    , optedOut: !!t
                }
            })
        }
        getSubscriptionStateForInsecure() {
            return a.a(this, void 0, void 0, function* () {
                const {
                    deviceId: e
                    , subscriptionToken: t
                    , optedOut: i
                } = yield N.a.getSubscription(), n = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);
                return {
                    subscribed: !(!e || !t || n !== D.Granted)
                    , optedOut: !!i
                }
            })
        }
        registerFailedSubscription(e, t) {
            return a.a(this, void 0, void 0, function* () {
                t.sessionManager.isFirstPageView() && (t.subscriptionManager.registerSubscription(new Be, e), t.sessionManager.incrementPageViewCount())
            })
        }
    }
    var Fe = class {
        static getServiceWorkerManager(e) {
            const t = e.appConfig
                , i = P.a.getBuildEnvPrefix()
                , n = {
                    workerAPath: new fe(`/${i}OneSignalSDKWorker.js`)
                    , workerBPath: new fe(`/${i}OneSignalSDKUpdaterWorker.js`)
                    , registrationOptions: {
                        scope: "/"
                    }
                };
            return t.userConfig && (t.userConfig.path && (n.workerAPath = new fe(`${t.userConfig.path}${i}${t.userConfig.serviceWorkerPath}`), n.workerBPath = new fe(`${t.userConfig.path}${i}${t.userConfig.serviceWorkerUpdaterPath}`)), t.userConfig.serviceWorkerParam && (n.registrationOptions = t.userConfig.serviceWorkerParam)), new Ie(e, n)
        }
        static getSubscriptionManager(e) {
            const t = e.appConfig
                , i = {
                    safariWebId: t.safariWebId
                    , appId: t.appId
                    , vapidPublicKey: t.vapidPublicKey
                    , onesignalVapidPublicKey: t.onesignalVapidPublicKey
                };
            return new He(e, i)
        }
    };
    class Ve {
        constructor(e) {
            this.context = e, this.onSessionSent = e.sessionManager.getPageViewCount() > 1
        }
        getDeviceId() {
            return a.a(this, void 0, void 0, function* () {
                const {
                    deviceId: e
                } = yield N.a.getSubscription();
                if (!e) throw new g(n.NoDeviceId);
                return e
            })
        }
        createDeviceRecord() {
            return a.a(this, void 0, void 0, function* () {
                const e = new Le;
                return e.appId = this.context.appConfig.appId, e.subscriptionState = yield V.getCurrentNotificationType(), e
            })
        }
        sendPlayerUpdate(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void M.a.debug("Not sending the update because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                e || (e = yield this.createDeviceRecord()), this.onSessionSent ? yield A.updatePlayer(this.context.appConfig.appId, t, Object.assign({
                    notification_types: W.Subscribed
                }, e.serialize())): yield this.sendOnSessionUpdate(e)
            })
        }
        sendOnSessionUpdate(e) {
            return a.a(this, void 0, void 0, function* () {
                if (this.onSessionSent) return;
                if (!this.context.sessionManager.isFirstPageView()) return;
                if (!(yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal())) return void M.a.debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                const t = yield this.getDeviceId();
                if (e || (e = yield this.createDeviceRecord()), e.subscriptionState === W.Subscribed || !0 === OneSignal.config.enableOnSession) try {
                    const i = yield A.updateUserSession(t, e);
                    if (this.onSessionSent = !0, i !== t) {
                        const e = yield N.a.getSubscription();
                        e.deviceId = i, yield N.a.setSubscription(e)
                    }
                } catch (e) {
                    M.a.error(`Failed to update user session. Error "${e.message}" ${e.stack}`)
                }
            })
        }
        sendPlayerCreate(e) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    const t = yield A.createUser(e);
                    return t ? (M.a.info("Subscribed to web push and registered with OneSignal", e, t), this.onSessionSent = !0, t) : void M.a.error("Failed to create user.")
                } catch (e) {
                    return void M.a.error(`Failed to create user. Error "${e.message}" ${e.stack}`)
                }
            })
        }
        onSessionAlreadyCalled() {
            return this.onSessionSent
        }
        sendExternalUserIdUpdate(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield this.getDeviceId();
                yield A.updatePlayer(this.context.appConfig.appId, t, {
                    external_user_id: I.b.getValueOrDefault(e, "")
                })
            })
        }
    }
    class $e extends u.a {
        constructor() {
            super("This operation can only be performed when the user is not subscribed."), Object.setPrototypeOf(this, $e.prototype)
        }
    }
    class Ge extends u.a {
        constructor() {
            super("The permission message was previously dismissed."), Object.setPrototypeOf(this, Ge.prototype)
        }
    }
    var ze = i(24);
    class Ke {
        static get EVENTS() {
            return {
                ALLOW_CLICK: "popoverAllowClick"
                , CANCEL_CLICK: "popoverCancelClick"
                , SHOWN: "popoverShown"
                , CLOSED: "popoverClosed"
            }
        }
        constructor(e) {
            e || (e = V.getSlidedownPermissionMessageOptions(OneSignal.config.userConfig.promptOptions)), this.options = e, this.options.actionMessage = e.actionMessage.substring(0, 90), this.options.acceptButtonText = e.acceptButtonText.substring(0, 15), this.options.cancelButtonText = e.cancelButtonText.substring(0, 15), this.notificationIcons = null
        }
        create() {
            return a.a(this, void 0, void 0, function* () {
                if (null === this.notificationIcons) {
                    const e = yield V.getNotificationIcons();
                    this.notificationIcons = e, this.container && Object(k.u)("#onesignal-popover-container");
                    let t = this.getPlatformNotificationIcon()
                        , i = `<div id="normal-popover"><div class="popover-body"><div class="popover-body-icon"><img alt="notification icon" class="${"default-icon"===t?"default-icon":""}" src="${"default-icon"===t?"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2239.5%22%20height%3D%2240.5%22%20viewBox%3D%220%200%2079%2081%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOneSignal-Bell%3C%2Ftitle%3E%3Cg%20fill%3D%22%23BBB%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M39.96%2067.12H4.12s-3.2-.32-3.2-3.36%202.72-3.2%202.72-3.2%2010.72-5.12%2010.72-8.8c0-3.68-1.76-6.24-1.76-21.28%200-15.04%209.6-26.56%2021.12-26.56%200%200%201.6-3.84%206.24-3.84%204.48%200%206.08%203.84%206.08%203.84%2011.52%200%2021.12%2011.52%2021.12%2026.56s-1.6%2017.6-1.6%2021.28c0%203.68%2010.72%208.8%2010.72%208.8s2.72.16%202.72%203.2c0%202.88-3.36%203.36-3.36%203.36H39.96zM27%2070.8h24s-1.655%2010.08-11.917%2010.08S27%2070.8%2027%2070.8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E":t}"></div><div class="popover-body-message">${this.options.actionMessage}</div><div class="clearfix"></div></div><div class="popover-footer"><button id="onesignal-popover-allow-button" class="align-right primary popover-button">${this.options.acceptButtonText}</button><button id="onesignal-popover-cancel-button" class="align-right secondary popover-button">${this.options.cancelButtonText}</button><div class="clearfix"></div></div></div>`;
                    Object(k.b)("body", "beforeend", '<div id="onesignal-popover-container" class="onesignal-popover-container onesignal-reset"></div>'), Object(k.b)(this.container, "beforeend", `<div id="onesignal-popover-dialog" class="onesignal-popover-dialog">${i}</div>`), Object(k.a)(this.container, l.a.mobile ? "slide-up" : "slide-down"), this.allowButton.addEventListener("click", this.onPopoverAllowed.bind(this)), this.cancelButton.addEventListener("click", this.onPopoverCanceled.bind(this)), b.a.trigger(Ke.EVENTS.SHOWN)
                }
            })
        }
        onPopoverAllowed(e) {
            return a.a(this, void 0, void 0, function* () {
                yield b.a.trigger(Ke.EVENTS.ALLOW_CLICK)
            })
        }
        onPopoverCanceled(e) {
            b.a.trigger(Ke.EVENTS.CANCEL_CLICK), this.close()
        }
        close() {
            Object(k.a)(this.container, "close-popover"), Object(k.s)(this.dialog, "animationend", (e, t) => {
                e.target !== this.dialog || "slideDownExit" !== e.animationName && "slideUpExit" !== e.animationName || (Object(k.u)("#onesignal-popover-container"), t(), b.a.trigger(Ke.EVENTS.CLOSED))
            }, !0)
        }
        getPlatformNotificationIcon() {
            return Object(k.k)(this.notificationIcons)
        }
        get container() {
            return document.querySelector("#onesignal-popover-container")
        }
        get dialog() {
            return document.querySelector("#onesignal-popover-dialog")
        }
        get allowButton() {
            return document.querySelector("#onesignal-popover-allow-button")
        }
        get cancelButton() {
            return document.querySelector("#onesignal-popover-cancel-button")
        }
    }
    class qe {
        constructor(e) {
            this.isAutoPromptShowing = !1
        }
        checkIfAutoPromptShouldBeShown(e = {
            force: !1
        }) {
            return a.a(this, void 0, void 0, function* () {
                if (this.isAutoPromptShowing) throw new InvalidStateError.a(InvalidStateError.b.RedundantPermissionMessage, {
                    permissionPromptType: ze.a.SlidedownPermissionMessage
                });
                if (V.wasHttpsNativePromptDismissed() && !e.force) return M.a.info(new Ge), !1;
                if ((yield OneSignal.privateGetNotificationPermission()) === D.Denied) return M.a.info(new $(j.Blocked)), !1;
                if (yield OneSignal.privateIsPushNotificationsEnabled()) throw new $e;
                if (!(yield OneSignal.privateGetSubscription())) throw new g(n.OptedOut);
                return !0
            })
        }
        internalShowAutoPrompt(e = {
            force: !1
        }) {
            return a.a(this, void 0, void 0, function* () {
                if (y.b.logMethodCall("internalShowAutoPrompt", e), !OneSignal.config || !OneSignal.config.userConfig || !OneSignal.config.userConfig.promptOptions) return void M.a.error("OneSignal config was not initialized correctly. Aborting.");
                const t = OneSignal.config.userConfig.promptOptions;
                t.native.enabled || t.slidedown.enabled ? t.native && t.native.enabled && t.native.autoPrompt ? yield this.internalShowNativePrompt(): t.slidedown && t.slidedown.enabled && t.slidedown.autoPrompt && (yield this.internalShowSlidedownPrompt(e)): M.a.error("No suitable prompt type enabled.")
            })
        }
        internalShowNativePrompt() {
            return a.a(this, void 0, void 0, function* () {
                y.b.logMethodCall("internalShowNativePrompt"), this.isAutoPromptShowing ? M.a.debug("Already showing autopromt. Abort showing a native prompt.") : (this.isAutoPromptShowing = !0, V.markHttpPopoverShown(), yield Re.registerForPushNotifications(), this.isAutoPromptShowing = !1, De.markHttpsNativePromptDismissed())
            })
        }
        internalShowSlidedownPrompt(e = {
            force: !1
        }) {
            return a.a(this, void 0, void 0, function* () {
                if (y.b.logMethodCall("internalShowSlidedownPrompt"), this.isAutoPromptShowing) return void M.a.debug("Already showing autopromt. Abort showing a slidedown.");
                try {
                    if (!(yield this.checkIfAutoPromptShouldBeShown(e))) return
                } catch (e) {
                    return void M.a.warn("checkIfAutoPromptShouldBeShown returned an error", e)
                }
                if (V.markHttpPopoverShown(), 0 !== (yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet())) return void M.a.debug("Not showing slidedown permission message because styles failed to load.");
                const t = V.getSlidedownPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
                this.installEventHooksForPopover(), OneSignal.popover = new Ke(t), yield OneSignal.popover.create(), M.a.debug("Showing Slidedown(Popover).")
            })
        }
        installEventHooksForPopover() {
            ! function () {
                const e = OneSignal.notifyButton;
                e && e.options.enable && "hidden" !== OneSignal.notifyButton.launcher.state && OneSignal.notifyButton.launcher.waitUntilShown()
                    .then(() => {
                        OneSignal.notifyButton.launcher.hide()
                    }), OneSignal.emitter.once(Ke.EVENTS.CLOSED, () => {
                        OneSignal.notifyButton && OneSignal.notifyButton.options.enable && OneSignal.notifyButton.launcher.show()
                    })
            }(), OneSignal.emitter.once(Ke.EVENTS.SHOWN, () => {
                this.isAutoPromptShowing = !0
            }), OneSignal.emitter.once(Ke.EVENTS.CLOSED, () => {
                this.isAutoPromptShowing = !1
            }), OneSignal.emitter.once(Ke.EVENTS.ALLOW_CLICK, () => {
                OneSignal.popover && OneSignal.popover.close(), M.a.debug("Setting flag to not show the popover to the user again."), De.markHttpsNativePromptDismissed();
                const e = {
                    autoAccept: !OneSignal.environmentInfo.requiresUserInteraction
                };
                Re.registerForPushNotifications(e)
            }), OneSignal.emitter.once(Ke.EVENTS.CANCEL_CLICK, () => {
                M.a.debug("Setting flag to not show the popover to the user again."), De.markHttpsNativePromptDismissed()
            })
        }
    }
    class Ye {
        constructor(e) {
            this.appConfig = e, this.subscriptionManager = Fe.getSubscriptionManager(this), this.serviceWorkerManager = Fe.getServiceWorkerManager(this), this.sessionManager = new Ue, this.permissionManager = new G, this.workerMessenger = new ne(this), this.updateManager = new Ve(this), this.promptsManager = new qe(this), this.cookieSyncer = new We(this, e.cookieSyncEnabled), this.dynamicResourceLoader = new se, this.metricsManager = new _e(e.metrics.enable, e.metrics.mixpanelReportingToken)
        }
    }
    var Je = i(25)
        , Ze = i.n(Je);
    var Xe, Qe, et, tt, it, nt = class {
        static downloadServerAppConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                return I.a.enforceAppId(e), yield new Promise((t, i) => {
                    t(T.get(`sync/${e}/web`, null))
                })
            })
        }
        static getUserIdFromSubscriptionIdentifier(e, t, i) {
            return I.a.enforceAppId(e), T.post("players", {
                    app_id: e
                    , device_type: t
                    , identifier: i
                    , notification_types: W.TemporaryWebRecord
                })
                .then(e => e && e.id ? e.id : null)
                .catch(e => (M.a.debug("Error getting user ID from subscription identifier:", e), null))
        }
        static updatePlayer(e, t, i) {
            return I.a.enforceAppId(e), I.a.enforcePlayerId(t), T.put(`players/${t}`, Object.assign({
                app_id: e
            }, i))
        }
    };
    class st {
        static getPlayer(e, t) {
            return A.getPlayer(e, t)
        }
        static updatePlayer(e, t, i) {
            return A.updatePlayer(e, t, i)
        }
        static sendNotification(e, t, i, n, s, o, r, a) {
            return A.sendNotification(e, t, i, n, s, o, r, a)
        }
        static jsonpLib(e, t) {
            Ze()(e, null, t)
        }
        static downloadServerAppConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                return P.a.getWindowEnv() !== U.a.ServiceWorker ? yield new Promise((t, i) => {
                    st.jsonpLib(`${P.a.getOneSignalApiUrl().toString()}/sync/${e}/web`, (e, n) => {
                        e ? i(e) : n.success ? t(n) : i(n)
                    })
                }): yield nt.downloadServerAppConfig(e)
            })
        }
        static createUser(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield A.createUser(e)
            })
        }
        static createEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                return yield A.createEmailRecord(e, t, i)
            })
        }
        static updateEmailRecord(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                return yield A.updateEmailRecord(e, t, i)
            })
        }
        static logoutEmail(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                return yield A.logoutEmail(e, t, i)
            })
        }
        static updateUserSession(e, t) {
            return a.a(this, void 0, void 0, function* () {
                return yield A.updateUserSession(e, t)
            })
        }
    }! function (e) {
        e.TypicalSite = "typical", e.WordPress = "wordpress", e.Shopify = "shopify", e.Blogger = "blogger", e.Magento = "magento", e.Drupal = "drupal", e.SquareSpace = "squarespace", e.Joomla = "joomla", e.Weebly = "weebly", e.Wix = "wix", e.Custom = "custom"
    }(Xe || (Xe = {}))
    , function (e) {
        e.Exact = "exact", e.Origin = "origin"
    }(Qe || (Qe = {}))
    , function (e) {
        e.Navigate = "navigate", e.Focus = "focus"
    }(et || (et = {})), (it = tt || (tt = {}))[it.Dashboard = 0] = "Dashboard", it[it.JavaScript = 1] = "JavaScript";
    class ot {
        static getAppConfig(e, t) {
            return a.a(this, void 0, void 0, function* () {
                try {
                    if (!e || !e.appId || !y.b.isValidUuid(e.appId)) throw new p(o.InvalidAppId);
                    const i = yield t(e.appId), n = this.getMergedConfig(e, i);
                    return this.checkRestrictedOrigin(n), n
                } catch (e) {
                    if (e) {
                        if (1 === e.code) throw new p(o.InvalidAppId);
                        if (2 === e.code) throw new p(o.AppNotConfiguredForWebPush)
                    }
                    throw e
                }
            })
        }
        static checkRestrictedOrigin(e) {
            if (e.restrictedOriginEnabled && P.a.getWindowEnv() !== U.a.ServiceWorker && window.top === window && !I.b.contains(window.location.hostname, ".os.tc") && !I.b.contains(window.location.hostname, ".onesignal.com") && !this.doesCurrentOriginMatchConfigOrigin(e.origin)) throw new p(o.WrongSiteUrl, {
                siteUrl: e.origin
            })
        }
        static doesCurrentOriginMatchConfigOrigin(e) {
            try {
                return location.origin === new URL(e)
                    .origin
            } catch (e) {
                return !1
            }
        }
        static getIntegrationCapabilities(e) {
            switch (e) {
            case Xe.Custom:
            case Xe.WordPress:
                return {
                    configuration: tt.JavaScript
                };
            default:
                return {
                    configuration: tt.Dashboard
                }
            }
        }
        static getMergedConfig(e, t) {
            const i = this.getConfigIntegrationKind(t)
                , n = this.getSubdomainForConfigIntegrationKind(i, e, t)
                , s = t.config.setupBehavior ? t.config.setupBehavior.allowLocalhostAsSecureOrigin : e.allowLocalhostAsSecureOrigin
                , o = y.b.internalIsUsingSubscriptionWorkaround(n, s)
                , r = this.getUserConfigForConfigIntegrationKind(i, e, t, o);
            return {
                appId: t.app_id
                , subdomain: n
                , origin: t.config.origin
                , httpUseOneSignalCom: t.config.http_use_onesignal_com
                , cookieSyncEnabled: t.features.cookie_sync.enable
                , restrictedOriginEnabled: t.features.restrict_origin && t.features.restrict_origin.enable
                , metrics: {
                    enable: t.features.metrics.enable
                    , mixpanelReportingToken: t.features.metrics.mixpanel_reporting_token
                }
                , safariWebId: t.config.safari_web_id
                , vapidPublicKey: t.config.vapid_public_key
                , onesignalVapidPublicKey: t.config.onesignal_vapid_public_key
                , emailAuthRequired: t.features.email && t.features.email.require_auth
                , userConfig: r
                , enableOnSession: t.features.enable_on_session || !1
                , receiveReceiptsEnable: t.features.receive_receipts_enable || !1
            }
        }
        static getConfigIntegrationKind(e) {
            return e.config.integration ? e.config.integration.kind : Xe.Custom
        }
        static getCustomLinkConfig(e) {
            const t = {
                enabled: !1
                , style: "button"
                , size: "medium"
                , unsubscribeEnabled: !1
                , text: {
                    explanation: ""
                    , subscribe: ""
                    , unsubscribe: ""
                }
                , color: {
                    button: ""
                    , text: ""
                }
            };
            if (!(e && e.config && e.config.staticPrompts && e.config.staticPrompts.customlink && e.config.staticPrompts.customlink.enabled)) return t;
            const i = e.config.staticPrompts.customlink;
            return {
                enabled: i.enabled
                , style: i.style
                , size: i.size
                , unsubscribeEnabled: i.unsubscribeEnabled
                , text: i.text ? {
                    subscribe: i.text.subscribe
                    , unsubscribe: i.text.unsubscribe
                    , explanation: i.text.explanation
                } : t.text
                , color: i.color ? {
                    button: i.color.button
                    , text: i.color.text
                } : t.color
            }
        }
        static injectDefaultsIntoPromptOptions(e, t, i, n = !1) {
            let s = {
                enabled: !1
            };
            e && e.customlink && (s = e.customlink);
            const o = t.customlink
                , r = Object.assign({}, e, {
                    customlink: {
                        enabled: I.b.getValueOrDefault(s.enabled, o.enabled)
                        , style: I.b.getValueOrDefault(s.style, o.style)
                        , size: I.b.getValueOrDefault(s.size, o.size)
                        , unsubscribeEnabled: I.b.getValueOrDefault(s.unsubscribeEnabled, o.unsubscribeEnabled)
                        , text: {
                            subscribe: I.b.getValueOrDefault(s.text ? s.text.subscribe : void 0, o.text.subscribe)
                            , unsubscribe: I.b.getValueOrDefault(s.text ? s.text.unsubscribe : void 0, o.text.unsubscribe)
                            , explanation: I.b.getValueOrDefault(s.text ? s.text.explanation : void 0, o.text.explanation)
                        }
                        , color: {
                            button: I.b.getValueOrDefault(s.color ? s.color.button : void 0, o.color.button)
                            , text: I.b.getValueOrDefault(s.color ? s.color.text : void 0, o.color.text)
                        }
                    }
                });
            return r.slidedown ? (r.slidedown.enabled = !!r.slidedown.enabled, r.slidedown.autoPrompt = r.slidedown.hasOwnProperty("autoPrompt") ? !!r.slidedown.enabled && !!r.slidedown.autoPrompt : !!r.slidedown.enabled) : (r.slidedown = V.getSlidedownPermissionMessageOptions(r), r.slidedown.enabled = !1, r.slidedown.autoPrompt = !1), r.native ? (r.native.enabled = !!r.native.enabled, r.native.autoPrompt = r.native.hasOwnProperty("autoPrompt") ? !!r.native.enabled && !!r.native.autoPrompt : !!r.native.enabled) : r.native = {
                enabled: !1
                , autoPrompt: !1
            }, !0 === i.autoRegister && (n ? (r.native.enabled = !1, r.native.autoPrompt = !1, r.slidedown.enabled = !0, r.slidedown.autoPrompt = !0) : (r.native.enabled = !0, r.native.autoPrompt = !0)), r.autoPrompt = r.native.autoPrompt || r.slidedown.autoPrompt, r
        }
        static getPromptOptionsForDashboardConfiguration(e) {
            const t = e.config.staticPrompts
                , i = t.native ? {
                    enabled: t.native.enabled
                    , autoPrompt: t.native.enabled && !1 !== t.native.autoPrompt
                } : {
                    enabled: !1
                    , autoPrompt: !1
                }
                , n = {
                    enabled: t.slidedown.enabled
                    , autoPrompt: t.slidedown.enabled && !1 !== t.slidedown.autoPrompt
                    , actionMessage: t.slidedown.actionMessage
                    , acceptButtonText: t.slidedown.acceptButton
                    , cancelButtonText: t.slidedown.cancelButton
                };
            return {
                autoPrompt: i.autoPrompt || n.autoPrompt
                , native: i
                , slidedown: n
                , fullscreen: {
                    enabled: t.fullscreen.enabled
                    , actionMessage: t.fullscreen.actionMessage
                    , acceptButton: t.fullscreen.acceptButton
                    , cancelButton: t.fullscreen.cancelButton
                    , title: t.fullscreen.title
                    , message: t.fullscreen.message
                    , caption: t.fullscreen.caption
                    , autoAcceptTitle: t.fullscreen.autoAcceptTitle
                }
                , customlink: this.getCustomLinkConfig(e)
            }
        }
        static getUserConfigForConfigIntegrationKind(e, t, i, n = !1) {
            switch (this.getIntegrationCapabilities(e)
                .configuration) {
            case tt.Dashboard:
                return {
                    appId: i.app_id, autoRegister: !1, autoResubscribe: i.config.autoResubscribe, path: i.config.serviceWorker.path, serviceWorkerPath: i.config.serviceWorker.workerName, serviceWorkerUpdaterPath: i.config.serviceWorker.updaterWorkerName, serviceWorkerParam: {
                        scope: i.config.serviceWorker.registrationScope
                    }, subdomainName: i.config.siteInfo.proxyOrigin, promptOptions: this.getPromptOptionsForDashboardConfiguration(i), welcomeNotification: {
                        disable: !i.config.welcomeNotification.enable
                        , title: i.config.welcomeNotification.title
                        , message: i.config.welcomeNotification.message
                        , url: i.config.welcomeNotification.url
                    }, notifyButton: {
                        enable: i.config.staticPrompts.bell.enabled
                        , displayPredicate: i.config.staticPrompts.bell.hideWhenSubscribed ? () => OneSignal.isPushNotificationsEnabled()
                            .then(e => !e) : null
                        , size: i.config.staticPrompts.bell.size
                        , position: i.config.staticPrompts.bell.location
                        , showCredit: !1
                        , offset: {
                            bottom: i.config.staticPrompts.bell.offset.bottom + "px"
                            , left: i.config.staticPrompts.bell.offset.left + "px"
                            , right: i.config.staticPrompts.bell.offset.right + "px"
                        }
                        , colors: {
                            "circle.background": i.config.staticPrompts.bell.color.main
                            , "circle.foreground": i.config.staticPrompts.bell.color.accent
                            , "badge.background": "black"
                            , "badge.foreground": "white"
                            , "badge.bordercolor": "black"
                            , "pulse.color": i.config.staticPrompts.bell.color.accent
                            , "dialog.button.background.hovering": i.config.staticPrompts.bell.color.main
                            , "dialog.button.background.active": i.config.staticPrompts.bell.color.main
                            , "dialog.button.background": i.config.staticPrompts.bell.color.main
                            , "dialog.button.foreground": "white"
                        }
                        , text: {
                            "tip.state.unsubscribed": i.config.staticPrompts.bell.tooltip.unsubscribed
                            , "tip.state.subscribed": i.config.staticPrompts.bell.tooltip.subscribed
                            , "tip.state.blocked": i.config.staticPrompts.bell.tooltip.blocked
                            , "message.prenotify": i.config.staticPrompts.bell.tooltip.unsubscribed
                            , "message.action.subscribing": i.config.staticPrompts.bell.message.subscribing
                            , "message.action.subscribed": i.config.staticPrompts.bell.message.subscribing
                            , "message.action.resubscribed": i.config.staticPrompts.bell.message.subscribing
                            , "message.action.unsubscribed": i.config.staticPrompts.bell.message.unsubscribing
                            , "dialog.main.title": i.config.staticPrompts.bell.dialog.main.title
                            , "dialog.main.button.subscribe": i.config.staticPrompts.bell.dialog.main.subscribeButton
                            , "dialog.main.button.unsubscribe": i.config.staticPrompts.bell.dialog.main.unsubscribeButton
                            , "dialog.blocked.title": i.config.staticPrompts.bell.dialog.blocked.title
                            , "dialog.blocked.message": i.config.staticPrompts.bell.dialog.blocked.message
                        }
                    }, persistNotification: i.config.notificationBehavior ? i.config.notificationBehavior.display.persist : void 0, webhooks: {
                        cors: i.config.webhooks.corsEnable
                        , "notification.displayed": i.config.webhooks.notificationDisplayedHook
                        , "notification.clicked": i.config.webhooks.notificationClickedHook
                        , "notification.dismissed": i.config.webhooks.notificationDismissedHook
                    }, notificationClickHandlerMatch: i.config.notificationBehavior ? i.config.notificationBehavior.click.match : void 0, notificationClickHandlerAction: i.config.notificationBehavior ? i.config.notificationBehavior.click.action : void 0, allowLocalhostAsSecureOrigin: i.config.setupBehavior ? i.config.setupBehavior.allowLocalhostAsSecureOrigin : void 0, requiresUserPrivacyConsent: t.requiresUserPrivacyConsent
                };
            case tt.JavaScript:
                const s = Object.assign({}, t, {
                    promptOptions: this.injectDefaultsIntoPromptOptions(t.promptOptions, i.config.staticPrompts, t, n)
                }, {
                    serviceWorkerParam: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PARAM ? OneSignal.SERVICE_WORKER_PARAM : {
                        scope: "/"
                    }
                    , serviceWorkerPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PATH ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js"
                    , serviceWorkerUpdaterPath: "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_UPDATER_PATH ? OneSignal.SERVICE_WORKER_UPDATER_PATH : "OneSignalSDUpdaterKWorker.js"
                    , path: t.path ? t.path : "/"
                });
                return t.hasOwnProperty("autoResubscribe") ? s.autoResubscribe = !!t.autoResubscribe : t.hasOwnProperty("autoRegister") ? s.autoResubscribe = !!t.autoRegister : s.autoResubscribe = !!i.config.autoResubscribe, s
            }
        }
        static getSubdomainForConfigIntegrationKind(e, t, i) {
            const n = this.getIntegrationCapabilities(e);
            let s = t.subdomainName
                , o = "";
            switch (n.configuration) {
            case tt.Dashboard:
                o = i.config.siteInfo.proxyOriginEnabled ? i.config.siteInfo.proxyOrigin : void 0;
                break;
            case tt.JavaScript:
                o = i.config.subdomain
            }
            return o && !this.shouldUseServerConfigSubdomain(s, n) ? void 0 : o
        }
        static shouldUseServerConfigSubdomain(e, t) {
            switch (t.configuration) {
            case tt.Dashboard:
                return !0;
            case tt.JavaScript:
                switch (location.protocol) {
                case "https:":
                    return !!e;
                case "http:":
                    return !0;
                default:
                    return !1
                }
            }
        }
    }
    class rt {
        getAppConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield ot.getAppConfig(e, st.downloadServerAppConfig)
            })
        }
        getMergedConfig(e, t) {
            return ot.getMergedConfig(e, t)
        }
    }
    class at {
        constructor(e) {
            this.options = {
                appId: e.appId
                , subdomain: e.subdomainName
                , origin: e.origin
                , metrics: {
                    enable: !1
                    , mixpanelReportingToken: null
                }
                , userConfig: {}
            }
        }
        initialize() {
            return a.a(this, void 0, void 0, function* () {
                if ((window.opener || window.parent) == window) return document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>"), Promise.resolve();
                const e = Object.assign({}, this.options);
                e.appId = e.appId, e.subdomainName = e.subdomain, e.origin = e.origin, OneSignal.config = e || {};
                const t = yield(new rt)
                    .getAppConfig(e);
                return OneSignal.context = new Ye(t), OneSignal.context.workerMessenger.listen(!0), OneSignal.initialized = !0, this.loadPromise = {}, this.loadPromise.promise = new Promise((e, t) => {
                    this.loadPromise.resolver = e, this.loadPromise.rejector = t
                }), this.establishCrossOriginMessaging(), this.loadPromise.promise
            })
        }
        establishCrossOriginMessaging() {}
        dispose() {
            this.messenger.destroy()
        }
        finishInitialization() {
            this.loadPromise.resolver()
        }
        subscribe() {
            return a.a(this, void 0, void 0, function* () {
                const e = q.getIsPushNotificationsEnabled()
                    , t = opener || parent;
                e ? t && window.close() : Y.registerForPush()
            })
        }
    }
    class ct extends at {
        initialize() {
            const e = super.initialize();
            return b.a.trigger("httpInitialize"), e
        }
        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(), this.messenger = new Z(window, this.options.origin, this.options.origin), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, this.onProxyFrameInitializing.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, this.onRemoteNotificationPermission.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, this.onRemoteDatabaseGet.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, this.onRemoteDatabasePut.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, this.onRemoteDatabaseRemove.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, this.onUnsubscribeFromPush.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, this.onMarkPromptDismissed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, this.onIsSubscribed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, this.onUnsubscribeProxyFrame.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, this.onServiceWorkerState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION, this.onWorkerVersion.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE, this.onSubscriptionExpirationState.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS, this.onProcessExpiringSubscriptions.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE, this.onGetSubscriptionState.bind(this)), this.messenger.listen()
        }
        retriggerRemoteEvent(e, t) {
            this.messenger.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                eventName: e
                , eventData: t
            })
        }
        onMessengerConnect(e) {
            return a.a(this, void 0, void 0, function* () {
                return M.a.debug(`(${P.a.getWindowEnv().toString()}) Successfully established cross-origin communication.`), this.finishInitialization(), !1
            })
        }
        onProxyFrameInitializing(e) {
            return a.a(this, void 0, void 0, function* () {
                if (M.a.info(`(${P.a.getWindowEnv().toString()}) The iFrame has just received initOptions from the host page!`), OneSignal.config = Object.assign({}, e.data.hostInitOptions, OneSignal.config, {
                        pageUrl: e.data.pageUrl
                        , pageTitle: e.data.pageTitle
                    }), Re.installNativePromptPermissionChangedHook(), (yield N.a.get("Options", "defaultUrl")) || (yield N.a.put("Options", {
                        key: "defaultUrl"
                        , value: new URL(OneSignal.config.pageUrl)
                            .origin
                    })), yield N.a.put("Options", {
                        key: "lastKnownHostUrl"
                        , value: OneSignal.config.pageUrl
                    }), yield Re.initSaveState(OneSignal.config.pageTitle), yield Re.storeInitialValues(), yield Re.saveInitOptions(), navigator.serviceWorker && "https:" === window.location.protocol) try {
                    OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel()
                } catch (e) {
                    M.a.error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", e)
                }
                e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
            })
        }
        onRemoteNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = OneSignal.context
                    , i = yield t.permissionManager.getReportedNotificationPermission(t.appConfig.safariWebId);
                return e.reply(i), !1
            })
        }
        onRemoteDatabaseGet(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data
                    , i = [];
                for (let e of t) {
                    const {
                        table: t
                        , key: n
                    } = e;
                    i.push(N.a.get(t, n))
                }
                const n = yield Promise.all(i);
                return e.reply(n), !1
            })
        }
        onRemoteDatabasePut(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data;
                let i = [];
                for (let e of t) {
                    let {
                        table: t
                        , keypath: n
                    } = e;
                    i.push(N.a.put(t, n))
                }
                return yield Promise.all(i), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }
        onRemoteDatabaseRemove(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = e.data;
                let i = [];
                for (let e of t) {
                    let {
                        table: t
                        , keypath: n
                    } = e;
                    i.push(N.a.remove(t, n))
                }
                return yield Promise.all(i), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }
        onUnsubscribeFromPush(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug("(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push.");
                try {
                    yield Object(k.x)(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                } catch (e) {
                    M.a.debug("Failed to unsubscribe from push remotely:", e)
                }
            })
        }
        onMarkPromptDismissed(e) {
            return a.a(this, void 0, void 0, function* () {
                return M.a.debug("(Reposted from iFrame -> Host) Marking prompt as dismissed."), yield De.markHttpsNativePromptDismissed(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }
        onIsSubscribed(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.isPushNotificationsEnabled();
                return e.reply(t), !1
            })
        }
        onUnsubscribeProxyFrame(e) {
            return a.a(this, void 0, void 0, function* () {
                return (yield OneSignal.isPushNotificationsEnabled()) && (yield OneSignal.setSubscription(!1), yield OneSignal.database.rebuild()), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }
        onServiceWorkerState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.serviceWorkerManager.getActiveState();
                return e.reply(t), !1
            })
        }
        onWorkerVersion(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.serviceWorkerManager.getWorkerVersion();
                return e.reply(t), !1
            })
        }
        onSubscriptionExpirationState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.subscriptionManager.isSubscriptionExpiring();
                return e.reply(t), !1
            })
        }
        onProcessExpiringSubscriptions(e) {
            return a.a(this, void 0, void 0, function* () {
                OneSignal.context, yield Re.processExpiringSubscriptions();
                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), !1
            })
        }
        onGetSubscriptionState(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield OneSignal.context.subscriptionManager.getSubscriptionState();
                return e.reply(t), !1
            })
        }
    }
    class lt extends at {
        constructor(e) {
            super(e)
        }
        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(), this.messenger = new Z(window.parent, this.options.origin, this.options.origin)
        }
    }
    class dt extends at {
        constructor(e) {
            super(e)
        }
        establishCrossOriginMessaging() {
            this.messenger = new Z(window.opener, this.options.origin, this.options.origin), this.messenger.once(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnected.bind(this)), this.messenger.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null), this.messenger.listen()
        }
        onMessengerConnected(e) {
            M.a.debug(`(${P.a.getWindowEnv().toString()}) The host page is now ready to receive commands from the HTTP popup.`), this.finishInitialization()
        }
    }
    class ut {
        static initHttp(e) {
            return a.a(this, void 0, void 0, function* () {
                switch (M.a.debug(`Called %cinitHttp(${JSON.stringify(e,null,4)})`, Object(k.j)("code")), P.a.getWindowEnv()) {
                case U.a.OneSignalProxyFrame:
                    OneSignal.proxyFrame = new ct(e), yield OneSignal.proxyFrame.initialize(), B.ensureBackwardsCompatibility(OneSignal);
                    break;
                case U.a.OneSignalSubscriptionPopup:
                    OneSignal.subscriptionPopup = new dt(e), yield OneSignal.subscriptionPopup.initialize(), B.ensureBackwardsCompatibility(OneSignal), b.a.trigger("httpInitialize");
                    break;
                case U.a.OneSignalSubscriptionModal:
                    OneSignal.subscriptionModal = new lt(e), OneSignal.subscriptionModal.establishCrossOriginMessaging(), OneSignal.subscriptionModal.initialize(), B.ensureBackwardsCompatibility(OneSignal), b.a.trigger("httpInitialize");
                    break;
                default:
                    M.a.error("Unsupported HTTP initialization branch.")
                }
            })
        }
    }
    var gt = i(15);
    class pt {
        static get LOAD_TIMEOUT_MS() {
            return 15e3
        }
        constructor(e) {
            this.url = e, this.url.pathname = "webPushIframe"
        }
        load() {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug("Opening an iFrame to", this.url.toString()), this.removeFrame();
                const e = document.createElement("iframe");
                return e.style.display = "none", e.src = this.url.toString(), e.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation", this.loadPromise = {}, this.loadPromise.promise = new Promise((e, t) => {
                        this.loadPromise.resolver = e, this.loadPromise.rejector = t
                    }), document.body.appendChild(e), e.onload = this.onFrameLoad.bind(this), this.element = e, Object(k.v)(this.loadPromise.promise, pt.LOAD_TIMEOUT_MS)
                    .catch(() => {
                        window === window.top && M.a.warn(`OneSignal: Loading the required iFrame ${this.url.toString()} timed out. Check that the Site URL onesignal.com dashboard web config is ${location.origin}. Only the Site URL specified there is allowed to use load the iFrame.`)
                    }), this.loadPromise.promise
            })
        }
        removeFrame() {
            if (!d.a.isBrowser()) return;
            const e = document.querySelector(`iframe[src='${this.url.toString()}']`);
            e && e.remove()
        }
        onFrameLoad(e) {
            this.establishCrossOriginMessaging()
        }
        establishCrossOriginMessaging() {
            this.messenger && this.messenger.destroy(), this.messenger = new Z(this.element.contentWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, this.onRemoteNotificationPermissionChanged.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, this.onRequestHostUrl.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, this.onServiceWorkerCommandRedirect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, this.onGetEventListenerCount.bind(this)), this.messenger.connect()
        }
        dispose() {
            this.messenger && this.messenger.destroy(), this.removeFrame()
        }
        onMessengerConnect(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug(`Successfully established cross-origin communication for iFrame at ${this.url.toString()}`), this.messenger.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                    hostInitOptions: JSON.parse(JSON.stringify(OneSignal.config))
                    , pageUrl: window.location.href
                    , pageTitle: document.title
                }, e => (e.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE && this.loadPromise.resolver(), !1))
            })
        }
        onRemoteRetriggerEvent(e) {
            let {
                eventName: t
                , eventData: i
            } = e.data;
            return b.a.trigger(t, i, e.source), !1
        }
        onRemoteNotificationPermissionChanged(e) {
            let {
                forceUpdatePermission: t
            } = e.data;
            return Object(k.w)(t), !1
        }
        onRequestHostUrl(e) {
            return e.reply(location.href), !1
        }
        onServiceWorkerCommandRedirect(e) {
            const t = e.data;
            return t && t.startsWith("http") && (window.location.href = t), !1
        }
        onGetEventListenerCount(e) {
            const t = e.data;
            return M.a.debug("(Reposted from iFrame -> Host) Getting event listener count for ", t), e.reply(OneSignal.emitter.numberOfListeners(t)), !1
        }
        isSubscribed() {
            return new Promise(e => {
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, null, t => {
                    e(t.data)
                })
            })
        }
        unsubscribeFromPush() {
            return new Promise(e => {
                this.messenger.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, null, t => {
                    e()
                })
            })
        }
        getProxyServiceWorkerActiveState() {
            return new Promise((e, t) => {
                this.message(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, null, t => {
                    e(t.data)
                })
            })
        }
        runCommand(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield new Promise((t, i) => {
                    this.message(e, null, e => {
                        t(e.data)
                    })
                })
            })
        }
        message(...e) {
            this.messenger.message.apply(this.messenger, arguments)
        }
    }
    class ht {
        constructor() {}
        static discoverAltOrigin(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = ht.getOneSignalProxyIframeUrls(e)
                    , i = [];
                let n;
                for (const e of t) {
                    const t = new pt(e);
                    yield t.load(), i.push(t)
                }
                const s = yield ht.removeDuplicatedAltOriginSubscription(i);
                if (s) n = s[0];
                else
                    for (const e of i)
                        if (yield e.isSubscribed()) n = e;
                        else {
                            if (!Object(k.f)(e.url.host, ".os.tc")) {
                                e.dispose();
                                continue
                            }
                            n ? e.dispose() : n = e
                        } return n
            })
        }
        static removeDuplicatedAltOriginSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = [];
                for (const i of e)(yield i.isSubscribed()) && t.push(i);
                if (t.length < 2) return null;
                if (P.a.getBuildEnv() == gt.a.Development) var i = ".localhost:3001";
                else if (P.a.getBuildEnv() == gt.a.Production) i = ".onesignal.com";
                var n = t.find(e => Object(k.f)(e.url.host, i));
                if (n) {
                    yield n.unsubscribeFromPush(), n.dispose();
                    const t = e.indexOf(n);
                    return e.splice(t, 1), e
                }
                return null
            })
        }
        static getCanonicalSubscriptionUrls(e, t = P.a.getApiEnv()) {
            let i = [];
            if (e.httpUseOneSignalCom) {
                let n = P.a.getOneSignalApiUrl(t);
                n.host = [e.subdomain, n.host].join("."), i.push(n)
            }
            let n = P.a.getOneSignalApiUrl(t);
            n.host = [e.subdomain, "os.tc"].join("."), i.push(n);
            for (const e of i) e.pathname = "";
            return i
        }
        static getOneSignalProxyIframeUrls(e) {
            const t = ht.getCanonicalSubscriptionUrls(e);
            for (const e of t) e.pathname = "webPushIframe";
            return t
        }
        static getOneSignalSubscriptionPopupUrls(e) {
            const t = ht.getCanonicalSubscriptionUrls(e);
            for (const e of t) e.pathname = "subscribe";
            return t
        }
    }
    var mt = i(23);
    class ft {
        static isValidUrl(e, t) {
            if (t && t.allowNull && null === e) return !0;
            if (t && t.allowEmpty && (null === e || void 0 === e)) return !0;
            try {
                const i = new URL(e);
                return !t || !t.requireHttps || "https:" === i.protocol
            } catch (e) {
                return !1
            }
        }
        static isValidBoolean(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!0 === e || !1 === e)
        }
        static isValidArray(e, t) {
            return !(!t || !t.allowNull || null !== e) || (!(!t || !t.allowEmpty || null !== e && void 0 !== e) || e instanceof Array)
        }
    }
    var bt, St = i(19);
    class vt {
        static processItem(e, t) {
            if ("function" == typeof t) t();
            else {
                if (!Array.isArray(t)) throw new u.a("Only accepts function and Array types!"); {
                    if (0 == t.length) throw new u.a("Empty array is not valid!");
                    const i = t.shift();
                    if (null == i || void 0 === i) throw new u.a("First element in array must be the OneSignal function name");
                    const n = e[i.toString()];
                    if ("function" != typeof n) throw new u.a(`No OneSignal function with the name '${i}'`);
                    n.apply(e, t)
                }
            }
        }
    }
    
    function Ot() {
        return window.top !== window && "Apple Computer, Inc." === navigator.vendor && "MacIntel" === navigator.platform
    }! function (e) {
        e.Safari = "safari", e.Firefox = "firefox", e.Chrome = "chrome", e.Opera = "opera", e.Edge = "edge", e.Other = "other"
    }(bt || (bt = {}));
    class yt {
        static getEnvironmentInfo() {
            return {
                browserType: this.getBrowser()
                , browserVersion: this.getBrowserVersion()
                , isHttps: this.isHttps()
                , isUsingSubscriptionWorkaround: this.isUsingSubscriptionWorkaround()
                , isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers()
                , requiresUserInteraction: this.requiresUserInteraction()
                , osVersion: this.getOsVersion()
            }
        }
        static getBrowser() {
            return l.a.chrome ? bt.Chrome : l.a.msedge ? bt.Edge : l.a.opera ? bt.Opera : l.a.firefox ? bt.Firefox : this.isMacOSSafari() ? bt.Safari : bt.Other
        }
        static isMacOSSafari() {
            return void 0 !== window.safari || Ot()
        }
        static getBrowserVersion() {
            return I.b.parseVersionString(l.a.version)
        }
        static isHttps() {
            return !!window && (window.location && "https:" === window.location.protocol)
        }
        static isUsingSubscriptionWorkaround() {
            return y.a.isUsingSubscriptionWorkaround()
        }
        static supportsServiceWorkers() {
            return window.navigator && "serviceWorker" in window.navigator
        }
        static requiresUserInteraction() {
            return "firefox" === this.getBrowser() && this.getBrowserVersion() >= 72 || "safari" === this.getBrowser() && this.getBrowserVersion() >= 12.1
        }
        static getOsVersion() {
            return l.a.osversion
        }
    }
    i.d(t, "default", function () {
        return wt
    });
    class wt {
        static setDefaultNotificationUrl(e) {
            return a.a(this, void 0, void 0, function* () {
                if (!ft.isValidUrl(e, {
                        allowNull: !0
                    })) throw new InvalidArgumentError.a("url", InvalidArgumentError.b.Malformed);
                yield Object(k.c)(), Object(k.q)("setDefaultNotificationUrl", e);
                const t = yield N.a.getAppState();
                t.defaultNotificationUrl = e, yield N.a.setAppState(t)
            })
        }
        static setDefaultTitle(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("setDefaultTitle", e);
                const t = yield N.a.getAppState();
                t.defaultNotificationTitle = e, yield N.a.setAppState(t)
            })
        }
        static setEmail(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (!e) throw new InvalidArgumentError.a("email", InvalidArgumentError.b.Empty);
                if (!Object(k.p)(e)) throw new InvalidArgumentError.a("email", InvalidArgumentError.b.Malformed);
                if (t && t.emailAuthHash && 64 !== t.emailAuthHash.length) throw new InvalidArgumentError.a("options.emailAuthHash", InvalidArgumentError.b.Malformed);
                yield Object(k.c)(), Object(k.q)("setEmail", e, t);
                const i = yield N.a.getAppConfig(), {
                    deviceId: n
                } = yield N.a.getSubscription(), s = yield N.a.getEmailProfile();
                if (i.emailAuthRequired && (!t || !t.emailAuthHash)) throw new InvalidArgumentError.a("options.emailAuthHash", InvalidArgumentError.b.Empty);
                const o = new St.a(s.emailId, e);
                t && t.emailAuthHash && (o.emailAuthHash = t.emailAuthHash);
                const r = !!s.emailId;
                return r && i.emailAuthRequired ? o.emailId = yield st.updateEmailRecord(i, o, n): o.emailId = yield st.createEmailRecord(i, o, n), !n || r && s.emailId === o.emailId && s.emailAddress && o.emailAddress === s.emailAddress || (yield st.updatePlayer(i.appId, n, {
                    parent_player_id: o.emailId
                    , email: o.emailAddress
                })), yield N.a.setEmailProfile(o), o.emailId
            })
        }
        static logoutEmail() {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)();
                const e = yield N.a.getAppConfig(), t = yield N.a.getEmailProfile(), {
                    deviceId: i
                } = yield N.a.getSubscription();
                t.emailId ? i ? (yield st.logoutEmail(e, t, i)) ? yield N.a.setEmailProfile(new St.a): M.a.warn("Failed to logout email."): M.a.warn(new g(n.NoDeviceId)): M.a.warn(new g(n.NoEmailSet))
            })
        }
        static isPushNotificationsSupported() {
            return Object(k.q)("isPushNotificationsSupported"), !0
        }
        static initializeConfig(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield(new rt)
                    .getAppConfig(e);
                M.a.debug(`OneSignal: Final web app config: %c${JSON.stringify(t,null,4)}`, Object(k.j)("code")), wt.context = new Ye(t), wt.config = wt.context.appConfig
            })
        }
        static init(e) {
            return a.a(this, void 0, void 0, function* () {
                if (Object(k.q)("init"), yield Re.polyfillSafariFetch(), Re.errorIfInitAlreadyCalled(), yield wt.initializeConfig(e), wt.environmentInfo = yt.getEnvironmentInfo(), !wt.config) throw new Error("OneSignal config not initialized!");
                if (!l.a.safari || wt.config.safariWebId) {
                    if (wt.config.userConfig.requiresUserPrivacyConsent) {
                        if (!(yield N.a.getProvideUserConsent())) return void(wt.pendingInit = !0)
                    }
                    yield wt.delayedInit()
                } else M.a.warn(new p(o.MissingSafariWebId))
            })
        }
        static delayedInit() {
            return a.a(this, void 0, void 0, function* () {
                function e() {
                    return a.a(this, void 0, void 0, function* () {
                        if (!wt.__initAlreadyCalled) {
                            if (wt.__initAlreadyCalled = !0, wt.emitter.on(wt.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, R.onNotificationPermissionChange), wt.emitter.on(wt.EVENTS.SUBSCRIPTION_CHANGED, R._onSubscriptionChanged), wt.emitter.on(wt.EVENTS.SDK_INITIALIZED, Re.onSdkInitialized), y.b.isUsingSubscriptionWorkaround()) {
                                if (!wt.config || !wt.config.subdomain) throw new p(o.MissingSubdomain);
                                wt.proxyFrameHost = yield ht.discoverAltOrigin(wt.config)
                            }
                            window.addEventListener("focus", () => {
                                V.checkAndTriggerNotificationPermissionChanged()
                            }), yield Re.initSaveState(document.title), yield Re.saveInitOptions(), P.a.getWindowEnv() === U.a.CustomIframe ? yield b.a.trigger(wt.EVENTS.SDK_INITIALIZED): yield Re.internalInit()
                        }
                    })
                }
                wt.pendingInit = !1, wt.context.workerMessenger.listen(), "complete" === document.readyState || "interactive" === document.readyState ? yield e(): (M.a.debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."), window.addEventListener("DOMContentLoaded", () => {
                    e()
                }), document.onreadystatechange = (() => {
                    "complete" !== document.readyState && "interactive" !== document.readyState || e()
                }))
            })
        }
        static provideUserConsent(e) {
            return a.a(this, void 0, void 0, function* () {
                yield N.a.setProvideUserConsent(e), e && wt.pendingInit && (yield wt.delayedInit())
            })
        }
        static showHttpPermissionRequest(e) {
            return a.a(this, void 0, void 0, function* () {
                M.a.debug("Called showHttpPermissionRequest(), redirecting to HTTP prompt."), wt.showHttpPrompt(e)
                    .catch(e => M.a.info(e))
            })
        }
        static showHttpPrompt(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), yield wt.context.promptsManager.internalShowSlidedownPrompt(e)
            })
        }
        static showNativePrompt() {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), yield wt.context.promptsManager.internalShowNativePrompt()
            })
        }
        static showSlidedownPrompt(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), yield wt.context.promptsManager.internalShowSlidedownPrompt(e)
            })
        }
        static registerForPushNotifications(e) {
            return a.a(this, void 0, void 0, function* () {
                if (wt.initialized) return yield Re.registerForPushNotifications(e);
                yield new Promise((t, i) => {
                    wt.emitter.once(wt.EVENTS.SDK_INITIALIZED, () => a.a(this, void 0, void 0, function* () {
                        return yield Re.registerForPushNotifications(e), t()
                    }))
                })
            })
        }
        static getNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(k.c)(), wt.privateGetNotificationPermission(e)
            })
        }
        static privateGetNotificationPermission(e) {
            return a.a(this, void 0, void 0, function* () {
                const t = yield wt.context.permissionManager.getNotificationPermission(wt.config.safariWebId);
                return e && e(t), t
            })
        }
        static getTags(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("getTags", e);
                const {
                    appId: t
                } = yield N.a.getAppConfig(), {
                    deviceId: i
                } = yield N.a.getSubscription();
                if (!i) return M.a.info(new g(n.NoDeviceId)), null;
                const {
                    tags: s
                } = yield st.getPlayer(t, i);
                return Object(k.i)(e, s), s
            })
        }
        static sendTag(e, t, i) {
            return a.a(this, void 0, void 0, function* () {
                const n = {};
                return n[e] = t, yield wt.sendTags(n, i)
            })
        }
        static sendTags(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (yield Object(k.c)(), Object(k.q)("sendTags", e, t), !e || 0 === Object.keys(e)
                        .length) return M.a.info(new InvalidArgumentError.a("tags", InvalidArgumentError.b.Empty)), null;
                Object.keys(e)
                    .forEach(t => {
                        !1 === e[t] && (e[t] = "false")
                    });
                const {
                    appId: i
                } = yield N.a.getAppConfig(), n = yield N.a.getEmailProfile();
                n.emailId && (yield st.updatePlayer(i, n.emailId, {
                    tags: e
                    , email_auth_hash: n.emailAuthHash
                }));
                var {
                    deviceId: s
                } = yield N.a.getSubscription();
                s || (yield Object(k.d)(wt.EVENTS.REGISTERED));
                var {
                    deviceId: o
                } = yield N.a.getSubscription();
                return yield st.updatePlayer(i, o, {
                    tags: e
                }), Object(k.i)(t, e), e
            })
        }
        static deleteTag(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield wt.deleteTags([e])
            })
        }
        static deleteTags(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (yield Object(k.c)(), Object(k.q)("deleteTags", e, t), !ft.isValidArray(e)) throw new InvalidArgumentError.a("tags", InvalidArgumentError.b.Malformed);
                0 === e.length && M.a.info(new InvalidArgumentError.a("tags", InvalidArgumentError.b.Empty));
                const i = {};
                for (let t of e) i[t] = "";
                const n = yield wt.sendTags(i);
                if (n) {
                    const e = Object.keys(n);
                    return Object(k.i)(t, e), e
                }
                return []
            })
        }
        static setExternalUserId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("setExternalUserId"), (yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) || (yield Object(k.d)(wt.EVENTS.REGISTERED)), yield Promise.all([wt.database.setExternalUserId(e), wt.context.updateManager.sendExternalUserIdUpdate(e)])
            })
        }
        static getExternalUserId() {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(k.c)(), Object(k.q)("getExternalUserId"), yield wt.database.getExternalUserId()
            })
        }
        static removeExternalUserId() {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("removeExternalUserId"), (yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal()) ? yield Promise.all([wt.database.setExternalUserId(void 0), wt.context.updateManager.sendExternalUserIdUpdate(void 0)]): M.a.warn("User is not subscribed, cannot remove external user id.")
            })
        }
        static addListenerForNotificationOpened(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("addListenerForNotificationOpened", e), wt.emitter.once(wt.EVENTS.NOTIFICATION_CLICKED, t => {
                    Object(k.i)(e, t)
                }), wt.config && R.fireStoredNotificationClicks(wt.config.pageUrl || wt.config.userConfig.pageUrl)
            })
        }
        static getIdsAvailable(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("getIdsAvailable", e);
                const {
                    deviceId: t
                    , subscriptionToken: i
                } = yield N.a.getSubscription(), n = {
                    userId: t
                    , registrationId: i
                };
                return Object(k.i)(e, n), n
            })
        }
        static isPushNotificationsEnabled(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(k.c)(), wt.privateIsPushNotificationsEnabled(e)
            })
        }
        static privateIsPushNotificationsEnabled(e) {
            return a.a(this, void 0, void 0, function* () {
                Object(k.q)("isPushNotificationsEnabled", e);
                const t = yield wt.context.subscriptionManager.getSubscriptionState();
                return Object(k.i)(e, t.subscribed && !t.optedOut), t.subscribed && !t.optedOut
            })
        }
        static setSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("setSubscription", e);
                const t = yield N.a.getAppConfig(), {
                    appId: i
                } = t, s = yield N.a.getSubscription(), {
                    deviceId: o
                } = s;
                if (!t.appId) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                if (!ft.isValidBoolean(e)) throw new InvalidArgumentError.a("newSubscription", InvalidArgumentError.b.Malformed);
                o ? (s.optedOut = !e, yield st.updatePlayer(i, o, {
                    notification_types: V.getNotificationTypeFromOptIn(e)
                }), yield N.a.setSubscription(s), R.onInternalSubscriptionSet(s.optedOut), R.checkAndTriggerSubscriptionChanged()) : M.a.info(new g(n.NoDeviceId))
            })
        }
        static isOptedOut(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(k.c)(), wt.internalIsOptedOut(e)
            })
        }
        static internalIsOptedOut(e) {
            return a.a(this, void 0, void 0, function* () {
                Object(k.q)("isOptedOut", e);
                const {
                    optedOut: t
                } = yield N.a.getSubscription();
                return Object(k.i)(e, t), t
            })
        }
        static optOut(e, t) {
            return a.a(this, void 0, void 0, function* () {
                if (yield Object(k.c)(), Object(k.q)("optOut", e, t), !ft.isValidBoolean(e)) throw new InvalidArgumentError.a("doOptOut", InvalidArgumentError.b.Malformed);
                yield wt.setSubscription(!e), Object(k.i)(t)
            })
        }
        static getEmailId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("getEmailId", e);
                const t = (yield N.a.getEmailProfile())
                    .emailId;
                return Object(k.i)(e, t), t
            })
        }
        static getUserId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("getUserId", e);
                const t = (yield N.a.getSubscription())
                    .deviceId;
                return Object(k.i)(e, t), t
            })
        }
        static getRegistrationId(e) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("getRegistrationId", e);
                const t = (yield N.a.getSubscription())
                    .subscriptionToken;
                return Object(k.i)(e, t), t
            })
        }
        static getSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                return yield Object(k.c)(), yield wt.privateGetSubscription(e)
            })
        }
        static privateGetSubscription(e) {
            return a.a(this, void 0, void 0, function* () {
                Object(k.q)("getSubscription", e);
                const t = !(yield N.a.getSubscription())
                    .optedOut;
                return Object(k.i)(e, t), t
            })
        }
        static sendSelfNotification(e = "OneSignal Test Message", t = "This is an example notification.", i = new URL(location.href)
            .origin + "?_osp=do_not_open", s, o, r) {
            return a.a(this, void 0, void 0, function* () {
                yield Object(k.c)(), Object(k.q)("sendSelfNotification", e, t, i, s, o, r);
                const a = yield N.a.getAppConfig(), c = yield N.a.getSubscription();
                if (!a.appId) throw new InvalidStateError.a(InvalidStateError.b.MissingAppId);
                if (!(yield wt.isPushNotificationsEnabled())) throw new g(n.NoDeviceId);
                if (!ft.isValidUrl(i)) throw new InvalidArgumentError.a("url", InvalidArgumentError.b.Malformed);
                if (!ft.isValidUrl(s, {
                        allowEmpty: !0
                        , requireHttps: !0
                    })) throw new InvalidArgumentError.a("icon", InvalidArgumentError.b.Malformed);
                c.deviceId && (yield st.sendNotification(a.appId, [c.deviceId], {
                    en: e
                }, {
                    en: t
                }, i, s, o, r))
            })
        }
        static push(e) {
            vt.processItem(wt, e)
        }
        static on(e, t) {
            return this.emitter.on(e, t)
        }
        static off(e, t) {
            return this.emitter.off(e, t)
        }
        static once(e, t) {
            return this.emitter.once(e, t)
        }
    }
    wt.VERSION = d.a.version(), wt._VERSION = d.a.version(), wt.sdkEnvironment = P.a, wt._notificationOpenedCallbacks = [], wt._idsAvailable_callback = [], wt._defaultLaunchURL = null, wt.config = null, wt._sessionInitAlreadyRunning = !1, wt._isNotificationEnabledCallback = [], wt._subscriptionSet = !0, wt.modalUrl = null, wt._windowWidth = 650, wt._windowHeight = 568, wt._isNewVisitor = !1, wt._channel = null, wt.timedLocalStorage = L, wt.initialized = !1, wt.notifyButton = null, wt.store = S, wt.environment = d.a, wt.database = N.a, wt.event = b.a, wt.browser = l.a, wt.popover = null, wt.log = M.a, wt.api = st, wt.indexedDb = mt.a, wt.mainHelper = V, wt.subscriptionHelper = Y, wt.httpHelper = ut, wt.eventHelper = R, wt.initHelper = Re, wt.testHelper = De, wt.pendingInit = !0, wt.emitter = new J.a, wt.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js", wt.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js", wt.SERVICE_WORKER_PARAM = {
        scope: "/"
    }, wt._LOGGING = !1, wt.LOGGING = !1, wt._usingNativePermissionHook = !1, wt._initCalled = !1, wt.__initAlreadyCalled = !1, wt.checkAndWipeUserSubscription = function () {}, wt.DeviceRecord = w, wt.EmailDeviceRecord = E, wt.notificationPermission = D, wt._initHttp = ut.initHttp, wt._initPopup = (() => wt.subscriptionPopup.subscribe()), wt.POSTMAM_COMMANDS = {
        CONNECTED: "connect"
        , REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission"
        , REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet"
        , REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut"
        , REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove"
        , REMOTE_OPERATION_COMPLETE: "postman.operationComplete"
        , REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent"
        , MODAL_LOADED: "postmam.modalPrompt.loaded"
        , MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted"
        , MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled"
        , POPUP_LOADED: "postmam.popup.loaded"
        , POPUP_ACCEPTED: "postmam.popup.accepted"
        , POPUP_REJECTED: "postmam.popup.canceled"
        , POPUP_CLOSING: "postman.popup.closing"
        , REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged"
        , IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize"
        , UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush"
        , SET_SESSION_COUNT: "postmam.setSessionCount"
        , REQUEST_HOST_URL: "postmam.requestHostUrl"
        , WINDOW_TIMEOUT: "postmam.windowTimeout"
        , FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration"
        , FINISH_REMOTE_REGISTRATION_IN_PROGRESS: "postmam.finishRemoteRegistrationInProgress"
        , POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms"
        , SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect"
        , MARK_PROMPT_DISMISSED: "postmam.markPromptDismissed"
        , IS_SUBSCRIBED: "postmam.isSubscribed"
        , UNSUBSCRIBE_PROXY_FRAME: "postman.unsubscribeProxyFrame"
        , GET_EVENT_LISTENER_COUNT: "postmam.getEventListenerCount"
        , SERVICE_WORKER_STATE: "postmam.serviceWorkerState"
        , GET_WORKER_VERSION: "postmam.getWorkerVersion"
        , SUBSCRIPTION_EXPIRATION_STATE: "postmam.subscriptionExpirationState"
        , PROCESS_EXPIRING_SUBSCRIPTIONS: "postmam.processExpiringSubscriptions"
        , GET_SUBSCRIPTION_STATE: "postmam.getSubscriptionState"
    }, wt.EVENTS = {
        CUSTOM_PROMPT_CLICKED: "customPromptClick"
        , NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange"
        , SUBSCRIPTION_CHANGED: "subscriptionChange"
        , WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification"
        , NOTIFICATION_DISPLAYED: "notificationDisplay"
        , NOTIFICATION_DISMISSED: "notificationDismiss"
        , NOTIFICATION_CLICKED: "notificationClick"
        , SDK_INITIALIZED: "initializeInternal"
        , SDK_INITIALIZED_PUBLIC: "initialize"
        , REGISTERED: "register"
        , POPUP_CLOSING: "popupClose"
        , PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay"
        , TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled"
        , TEST_WOULD_DISPLAY: "testWouldDisplay"
        , POPUP_WINDOW_TIMEOUT: "popupWindowTimeout"
    }, B.ensureBackwardsCompatibility(wt), M.a.info(`%cOneSignal Web SDK loaded (version ${wt._VERSION}, ${P.a.getWindowEnv().toString()} environment).`, Object(k.j)("bold")), M.a.debug(`Current Page URL: ${"undefined"==typeof location?"NodeJS":location.href}`), M.a.debug(`Browser Environment: ${l.a.name} ${l.a.version}`)
}, function (e, t) {
    e.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}, function (e, t) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}]);
//# sourceMappingURL=OneSignalPageSDKES6.js.map
