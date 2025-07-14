var Bi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Eu(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ui = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Bi, function(r) {
    if (!globalThis.chrome?.runtime?.id)
      throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const n = "The message port closed before a response was received.", o = (a) => {
        const s = {
          alarms: {
            clear: {
              minArgs: 0,
              maxArgs: 1
            },
            clearAll: {
              minArgs: 0,
              maxArgs: 0
            },
            get: {
              minArgs: 0,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          bookmarks: {
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getChildren: {
              minArgs: 1,
              maxArgs: 1
            },
            getRecent: {
              minArgs: 1,
              maxArgs: 1
            },
            getSubTree: {
              minArgs: 1,
              maxArgs: 1
            },
            getTree: {
              minArgs: 0,
              maxArgs: 0
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeTree: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          browserAction: {
            disable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            enable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            getBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1
            },
            getBadgeText: {
              minArgs: 1,
              maxArgs: 1
            },
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            openPopup: {
              minArgs: 0,
              maxArgs: 0
            },
            setBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setBadgeText: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          browsingData: {
            remove: {
              minArgs: 2,
              maxArgs: 2
            },
            removeCache: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCookies: {
              minArgs: 1,
              maxArgs: 1
            },
            removeDownloads: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFormData: {
              minArgs: 1,
              maxArgs: 1
            },
            removeHistory: {
              minArgs: 1,
              maxArgs: 1
            },
            removeLocalStorage: {
              minArgs: 1,
              maxArgs: 1
            },
            removePasswords: {
              minArgs: 1,
              maxArgs: 1
            },
            removePluginData: {
              minArgs: 1,
              maxArgs: 1
            },
            settings: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          commands: {
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          contextMenus: {
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeAll: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          cookies: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 1,
              maxArgs: 1
            },
            getAllCookieStores: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          devtools: {
            inspectedWindow: {
              eval: {
                minArgs: 1,
                maxArgs: 2,
                singleCallbackArg: !1
              }
            },
            panels: {
              create: {
                minArgs: 3,
                maxArgs: 3,
                singleCallbackArg: !0
              },
              elements: {
                createSidebarPane: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            }
          },
          downloads: {
            cancel: {
              minArgs: 1,
              maxArgs: 1
            },
            download: {
              minArgs: 1,
              maxArgs: 1
            },
            erase: {
              minArgs: 1,
              maxArgs: 1
            },
            getFileIcon: {
              minArgs: 1,
              maxArgs: 2
            },
            open: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            pause: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFile: {
              minArgs: 1,
              maxArgs: 1
            },
            resume: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          extension: {
            isAllowedFileSchemeAccess: {
              minArgs: 0,
              maxArgs: 0
            },
            isAllowedIncognitoAccess: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          history: {
            addUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteAll: {
              minArgs: 0,
              maxArgs: 0
            },
            deleteRange: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            getVisits: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          i18n: {
            detectLanguage: {
              minArgs: 1,
              maxArgs: 1
            },
            getAcceptLanguages: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          identity: {
            launchWebAuthFlow: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          idle: {
            queryState: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          management: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getSelf: {
              minArgs: 0,
              maxArgs: 0
            },
            setEnabled: {
              minArgs: 2,
              maxArgs: 2
            },
            uninstallSelf: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          notifications: {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            create: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getPermissionLevel: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          pageAction: {
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            hide: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          permissions: {
            contains: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            request: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          runtime: {
            getBackgroundPage: {
              minArgs: 0,
              maxArgs: 0
            },
            getPlatformInfo: {
              minArgs: 0,
              maxArgs: 0
            },
            openOptionsPage: {
              minArgs: 0,
              maxArgs: 0
            },
            requestUpdateCheck: {
              minArgs: 0,
              maxArgs: 0
            },
            sendMessage: {
              minArgs: 1,
              maxArgs: 3
            },
            sendNativeMessage: {
              minArgs: 2,
              maxArgs: 2
            },
            setUninstallURL: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          sessions: {
            getDevices: {
              minArgs: 0,
              maxArgs: 1
            },
            getRecentlyClosed: {
              minArgs: 0,
              maxArgs: 1
            },
            restore: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          storage: {
            local: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            managed: {
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            sync: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            }
          },
          tabs: {
            captureVisibleTab: {
              minArgs: 0,
              maxArgs: 2
            },
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            detectLanguage: {
              minArgs: 0,
              maxArgs: 1
            },
            discard: {
              minArgs: 0,
              maxArgs: 1
            },
            duplicate: {
              minArgs: 1,
              maxArgs: 1
            },
            executeScript: {
              minArgs: 1,
              maxArgs: 2
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 0
            },
            getZoom: {
              minArgs: 0,
              maxArgs: 1
            },
            getZoomSettings: {
              minArgs: 0,
              maxArgs: 1
            },
            goBack: {
              minArgs: 0,
              maxArgs: 1
            },
            goForward: {
              minArgs: 0,
              maxArgs: 1
            },
            highlight: {
              minArgs: 1,
              maxArgs: 1
            },
            insertCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            query: {
              minArgs: 1,
              maxArgs: 1
            },
            reload: {
              minArgs: 0,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            sendMessage: {
              minArgs: 2,
              maxArgs: 3
            },
            setZoom: {
              minArgs: 1,
              maxArgs: 2
            },
            setZoomSettings: {
              minArgs: 1,
              maxArgs: 2
            },
            update: {
              minArgs: 1,
              maxArgs: 2
            }
          },
          topSites: {
            get: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          webNavigation: {
            getAllFrames: {
              minArgs: 1,
              maxArgs: 1
            },
            getFrame: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          webRequest: {
            handlerBehaviorChanged: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          windows: {
            create: {
              minArgs: 0,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 1
            },
            getLastFocused: {
              minArgs: 0,
              maxArgs: 1
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          }
        };
        if (Object.keys(s).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class i extends WeakMap {
          constructor(P, v = void 0) {
            super(v), this.createItem = P;
          }
          get(P) {
            return this.has(P) || this.set(P, this.createItem(P)), super.get(P);
          }
        }
        const l = (O) => O && typeof O == "object" && typeof O.then == "function", d = (O, P) => (...v) => {
          a.runtime.lastError ? O.reject(new Error(a.runtime.lastError.message)) : P.singleCallbackArg || v.length <= 1 && P.singleCallbackArg !== !1 ? O.resolve(v[0]) : O.resolve(v);
        }, c = (O) => O == 1 ? "argument" : "arguments", g = (O, P) => function(I, ...j) {
          if (j.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${c(P.minArgs)} for ${O}(), got ${j.length}`);
          if (j.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${c(P.maxArgs)} for ${O}(), got ${j.length}`);
          return new Promise((k, x) => {
            if (P.fallbackToNoCallback)
              try {
                I[O](...j, d({
                  resolve: k,
                  reject: x
                }, P));
              } catch (T) {
                console.warn(`${O} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, T), I[O](...j), P.fallbackToNoCallback = !1, P.noCallback = !0, k();
              }
            else P.noCallback ? (I[O](...j), k()) : I[O](...j, d({
              resolve: k,
              reject: x
            }, P));
          });
        }, p = (O, P, v) => new Proxy(P, {
          apply(I, j, k) {
            return v.call(j, O, ...k);
          }
        });
        let C = Function.call.bind(Object.prototype.hasOwnProperty);
        const m = (O, P = {}, v = {}) => {
          let I = /* @__PURE__ */ Object.create(null), j = {
            has(x, T) {
              return T in O || T in I;
            },
            get(x, T, H) {
              if (T in I)
                return I[T];
              if (!(T in O))
                return;
              let B = O[T];
              if (typeof B == "function")
                if (typeof P[T] == "function")
                  B = p(O, O[T], P[T]);
                else if (C(v, T)) {
                  let J = g(T, v[T]);
                  B = p(O, O[T], J);
                } else
                  B = B.bind(O);
              else if (typeof B == "object" && B !== null && (C(P, T) || C(v, T)))
                B = m(B, P[T], v[T]);
              else if (C(v, "*"))
                B = m(B, P[T], v["*"]);
              else
                return Object.defineProperty(I, T, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return O[T];
                  },
                  set(J) {
                    O[T] = J;
                  }
                }), B;
              return I[T] = B, B;
            },
            set(x, T, H, B) {
              return T in I ? I[T] = H : O[T] = H, !0;
            },
            defineProperty(x, T, H) {
              return Reflect.defineProperty(I, T, H);
            },
            deleteProperty(x, T) {
              return Reflect.deleteProperty(I, T);
            }
          }, k = Object.create(O);
          return new Proxy(k, j);
        }, u = (O) => ({
          addListener(P, v, ...I) {
            P.addListener(O.get(v), ...I);
          },
          hasListener(P, v) {
            return P.hasListener(O.get(v));
          },
          removeListener(P, v) {
            P.removeListener(O.get(v));
          }
        }), A = new i((O) => typeof O != "function" ? O : function(v) {
          const I = m(
            v,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          O(I);
        }), b = new i((O) => typeof O != "function" ? O : function(v, I, j) {
          let k = !1, x, T = new Promise((W) => {
            x = function(z) {
              k = !0, W(z);
            };
          }), H;
          try {
            H = O(v, I, x);
          } catch (W) {
            H = Promise.reject(W);
          }
          const B = H !== !0 && l(H);
          if (H !== !0 && !B && !k)
            return !1;
          const J = (W) => {
            W.then((z) => {
              j(z);
            }, (z) => {
              let se;
              z && (z instanceof Error || typeof z.message == "string") ? se = z.message : se = "An unexpected error occurred", j({
                __mozWebExtensionPolyfillReject__: !0,
                message: se
              });
            }).catch((z) => {
              console.error("Failed to send onMessage rejected reply", z);
            });
          };
          return J(B ? H : T), !0;
        }), w = ({
          reject: O,
          resolve: P
        }, v) => {
          a.runtime.lastError ? a.runtime.lastError.message === n ? P() : O(new Error(a.runtime.lastError.message)) : v && v.__mozWebExtensionPolyfillReject__ ? O(new Error(v.message)) : P(v);
        }, F = (O, P, v, ...I) => {
          if (I.length < P.minArgs)
            throw new Error(`Expected at least ${P.minArgs} ${c(P.minArgs)} for ${O}(), got ${I.length}`);
          if (I.length > P.maxArgs)
            throw new Error(`Expected at most ${P.maxArgs} ${c(P.maxArgs)} for ${O}(), got ${I.length}`);
          return new Promise((j, k) => {
            const x = w.bind(null, {
              resolve: j,
              reject: k
            });
            I.push(x), v.sendMessage(...I);
          });
        }, D = {
          devtools: {
            network: {
              onRequestFinished: u(A)
            }
          },
          runtime: {
            onMessage: u(b),
            onMessageExternal: u(b),
            sendMessage: F.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: F.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        }, Z = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        return s.privacy = {
          network: {
            "*": Z
          },
          services: {
            "*": Z
          },
          websites: {
            "*": Z
          }
        }, m(a, D, s);
      };
      r.exports = o(chrome);
    } else
      r.exports = globalThis.browser;
  });
})(Ui);
var Su = Ui.exports;
const ss = /* @__PURE__ */ ba(Su);
function Ou() {
  return chrome !== void 0 ? chrome.runtime.getManifest().manifest_version === 3 ? chrome : ss : S !== void 0 ? S : ss;
}
const Xt = navigator.userAgent.includes("Firefox"), S = Ou(), Ia = () => S.runtime.getManifest();
var ya = { exports: {} };
const Pu = (e) => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
  const t = crypto.getRandomValues(new Uint8Array(1))[0];
  return (t >= e ? t % e : t).toString(e);
} : () => Math.floor(Math.random() * e).toString(e), Vi = (e = 7, t = !1) => Array.from({ length: e }, Pu(t ? 16 : 36)).join("");
ya.exports = Vi;
ya.exports.default = Vi;
var Fu = ya.exports;
const Pn = /* @__PURE__ */ ba(Fu);
var Hi = /* @__PURE__ */ ((e) => (e[e.QUANTIDADE_TOTAL_TAREFA = 1] = "QUANTIDADE_TOTAL_TAREFA", e[e.PARALIZADOS_ENTRADA_TAREFA = 2] = "PARALIZADOS_ENTRADA_TAREFA", e[e.PARALIZADOS_ULTIMO_MOVIMENTO = 3] = "PARALIZADOS_ULTIMO_MOVIMENTO", e))(Hi || {}), Zi = /* @__PURE__ */ ((e) => (e.PADRAO = "mc_formato_padrao", e.MINIMO = "mc_formato_minimo", e))(Zi || {}), zi = /* @__PURE__ */ ((e) => (e[e.NAO_ATIVADO = 0] = "NAO_ATIVADO", e[e.DESMONTADO = 1] = "DESMONTADO", e[e.COMPLETAMENTE_MONTADO = 2] = "COMPLETAMENTE_MONTADO", e[e.REQUISITANDO_E_PROCESSANDO_DADOS = 3] = "REQUISITANDO_E_PROCESSANDO_DADOS", e))(zi || {});
const _u = "2.28.104", Lu = "4 de julho de 2025";
var $e = /* @__PURE__ */ ((e) => (e.PADRAO = "padrao", e.ESCURO = "escuro", e.AJUSTES_GERAIS = "ajustesGerais", e.ALTO_CONTRASTE = "altoContraste", e.MAIS_ESPACO = "maisEspaco", e))($e || {}), St = /* @__PURE__ */ ((e) => (e.NORMAL = "normal", e.ALTERNAR_LINHAS = "alternar_linhas", e.MINIMO = "minimo", e))(St || {});
const is = {
  idVersaoOpcoes: `${_u}:${Lu}`,
  ativada: !0,
  carregadaPJE: !1,
  autosAbaMovimentos: !1,
  autosAbaFases: !1,
  autosAjustaDataHora: !1,
  copiarDadosDaPeca: "sem_descricao",
  copiaDadosPecaAtivado: !1,
  tema: "padrao",
  incluirLotacaoNoTitulo: !0,
  incluirLotacaoNoTituloOpcoes: {
    painelEsquerdo: !1,
    painelDireito: !0
  },
  ajustesGerais: !1,
  maisEspaco: !1,
  avisoDuplicacaoEtiquetas: !1,
  destacarLembretes: !0,
  selecionarLotacao: !0,
  pularquadroavisos: !0,
  pularPaginaVaziaHome: !0,
  pularpaginavazia: !1,
  pularpaginavaziaOpcaoAuxiliar: {
    criarAtaalhoPjeTokenMenuPJe: !1
  },
  infoQuadroAviso: [],
  totalTarefas: !0,
  inativaCartao: !1,
  cartaoProcesso: "normal",
  opcoesCopiarDadosPolo: "nome",
  opcoesPaletaCores: "completo",
  ajustarUsuarioMinuta: !0,
  minutaCentralizada: !1,
  removerAvisoAtencao: !0,
  ajustarUrgenciaSigilo: !0,
  ajustarPrazoIntimacao: !0,
  ajustarCaixaMovimentos: !0,
  homologadorMovimentos: !0,
  ultimalotacaoacessada: 0,
  filtros: {
    perfilAtivo: "direcao",
    perfis: {
      vara_mista: {
        nome: "Vara Mista",
        setores: {
          "[Civ]": ["[Civ]"],
          "[Crim]": ["[Crim]"],
          "[EF]": ["[EF]"],
          "[JEF]": ["[JEF]"],
          "[PInvest]": ["[PInvest]"]
        }
      },
      direcao: {
        nome: "Direção",
        setores: {
          Gab: [
            "Minutar Decisão - Gabinete",
            "Minutar Despacho - Gabinete",
            "Minutar informação",
            "Minutar Sentença - Gabinete",
            "Revisar Decisão - Gabinete",
            "Revisar Despacho - Gabinete",
            "Revisar Sentença - Gabinete",
            "Assinar Decisão - Gabinete",
            "Assinar Despacho - Gabinete",
            "Assinar Sentença - Gabinete"
          ],
          Inic: [
            "Triagem inicial",
            "Triagem inicial URGENTES",
            "Processos reclassificados",
            "Prevenção - Analisar e Minutar ato",
            "Evoluir de classe judicial",
            "Redistribuir processo",
            "Verificar impedimentos à redistribuição",
            "Selecionar órgão julgador de destino",
            "Migração - Triagem",
            "Processos incluídos",
            "Processos despachados no PLANTÃO JUDICIAL"
          ],
          Tria: [
            "Analisar petição",
            "Análise de secretaria",
            "Avaliar ato judicial proferido",
            "Avaliar ato judicial URGENTE proferido",
            "Avaliar ato ordinatório praticado",
            "Avaliar certidão expedida",
            "Avaliar informação proferida",
            "Lançar movimentação não registrada",
            "Aguardando prazo automático - Analisar petição",
            "Aguardando prazo manual - Analisar petição",
            "Arquivados - Analisar petição",
            "Sobrestados - Analisar petição",
            "Certificar decurso de prazo anterior ao arquivamento",
            "Definir prazo e tipo de sobrestamento",
            "Definir tipo de arquivamento",
            "Solucionar impedimentos ao arquivamento",
            "Recebido da instância superior",
            "Pendentes de análise - outros convênios",
            "Pendentes de análise BACENJUD",
            "Pendentes de análise INFOJUD",
            "Pendentes de análise RENAJUD",
            "Recebidos da Instância Superior",
            "Remeter à instância superior",
            "Solucionar impedimentos à remessa à instância superior",
            "Remetidos à Central de Cumprimento de Julgados",
            "Remetidos à Conciliação",
            "Remetidos à Contadoria",
            "Recebidos da Central de Cumprimento de Julgados",
            "Recebidos da Conciliação",
            "Recebidos da Contadoria",
            "Arquivo provisório",
            "Suspensão ou Sobrestamento",
            "Sobrestados - Prazo decorrido",
            "Sobrestados - prazo decorrido"
          ],
          Exp: [
            "Assinar comunicação via Sistema ou DJe",
            "Assinar comunicação via Telefone ou Balcão",
            "Escolher expediente padrão e prazo",
            "Escolher rotina de comunicações e outros expedientes",
            "Preparar comunicação por outros meios",
            "Preparar comunicação via Carta Precatória",
            "Preparar comunicação via Carta Rogatória",
            "Preparar comunicação via Ceman local",
            "Preparar comunicação via Correios",
            "Preparar comunicação via Edital",
            "Preparar comunicação via Sistema ou DJe",
            "Preparar comunicação via Telefone ou Balcão",
            "Preparar comunicações - rotina individual",
            "Preparar comunicações e outros expedientes - rotina em lote",
            "Selecionar Central de Mandado",
            "Concluir publicação de Edital no DJe",
            "Concluir publicação no DJe",
            "Encerrar prazos em aberto",
            "Aguardando devolução de AR",
            "Aguardando devolução de Carta Precatória",
            "Aguardando devolução de Carta Rogatória",
            "Aguardando devolução de mandado",
            "Aguardando publicação de Edital no DJe",
            "Aguardando remessa de Carta aos Correios",
            "Aguardando remessa de Carta Precatória",
            "Aguardando remessa de Carta Rogatória",
            "Aguardando remessa de expediente aos Correios",
            "Assinar comunicação via Correios - Magistrado",
            "Documento assinado - comunicação por outros meios",
            "Aguardando inclusão de laudo pericial"
          ],
          Req: [
            "Aguardando depósito ou negativa de precatório",
            "Aguardando depósito ou negativa de RPV",
            "Aguardando expedição e juntada de precatório",
            "Aguardando expedição e juntada de RPV",
            "Aguardando impressão de alvará",
            "Aguardando migração de precatório",
            "Aguardando migração de RPV",
            "Aguardando prazo - Avaliar manifestação - Precatório",
            "Aguardando prazo - Avaliar manifestação - RPV",
            "Aguardando prazo - Precatório",
            "Aguardando prazo - RPV",
            "Preparar alvará",
            "Preparar precatório",
            "Preparar RPV",
            "Recebidos da rotina de requisição de pagamento",
            "Escolher tipo de requisição de pagamento",
            "Sobrestados por expedição de precatório"
          ],
          Sec: [
            "Assinar Decisão - Secretaria",
            "Assinar Despacho - Secretaria",
            "Assinar Sentença - Secretaria",
            "Minutar Decisão - Secretaria",
            "Minutar Despacho - Secretaria",
            "Minutar Sentença - Secretaria",
            "Minutar ato ordinatório",
            "Informar dados da audiência - impedimento para arquivamento",
            "Minutar ata de audiência cível"
          ]
        }
      },
      minhas_tarefas: {
        nome: "Minhas Tarefas",
        setores: { Exemplo: ["Exemplo de tarefa 1"] }
      },
      turma_recursal: {
        nome: "Turma Recursal",
        setores: {
          Secretaria: [
            "[TR]  Aguardando devolução de AR",
            "[TR] Aguardando expedição de mandado",
            "[TR] Aguardando impressão de alvará",
            "[TR] Aguardando julgamento pela Turma Nacional",
            "[TR] Aguardando julgamento pela Turma Regional",
            "[TR] Aguardando prazo automático",
            "[TR] Aguardando prazo automático - Analisar petição",
            "[TR] Aguardando prazo manual",
            "[TR] Aguardando prazo manual - Analisar petição",
            "[TR] Aguardando publicação de Edital no DJe",
            "[TR] Aguardando remessa de expediente aos Correios",
            "[TR] Alterar Classe para remessa à Turma Regional",
            "[TR] Análise de secretaria",
            "[TR] Arquivados - Analisar petição",
            "[TR] Arquivo permanente",
            "[TR] Arquivo provisório",
            "[TR] Assinar alvará",
            "[TR] Assinar ato ordinatório",
            "[TR] Assinar certidão",
            "[TR] Assinar certidão de decurso de prazo",
            "[TR] Assinar certidão de trânsito em julgado",
            "[TR] Assinar comunicação por outros meios",
            "[TR] Assinar comunicação via Ceman",
            "[TR] Assinar comunicação via Ceman - Magistrado",
            "[TR] Assinar comunicação via Correios",
            "[TR] Assinar comunicação via Edital",
            "[TR] Assinar comunicação via Sistema ou DJe",
            "[TR] Assinar comunicação via Telefone ou Balcão",
            "[TR] Assinar informação",
            "[TR] Avaliar acórdão proferido",
            "[TR] Avaliar Acórdão proferido - intimações pendentes",
            "[TR] Avaliar ato judicial proferido",
            "[TR] Avaliar ato judicial URGENTE proferido",
            "[TR] Avaliar ato ordinatório praticado",
            "[TR] Avaliar certidão expedida",
            "[TR] Avaliar informação proferida",
            "[TR] Avaliar mandado devolvido",
            "[TR] Certificar decurso de prazo anterior ao arquivamento",
            "[TR] Certificar trânsito em julgado",
            "[TR] Classificar sobrestados por decisão de Instância ou Tribunal Superior",
            "[TR] Concluir publicação de Edital no DJe",
            "[TR] Concluir publicação no DJe",
            "[TR] Conferir alvará",
            "[TR] Definir prazo e tipo de sobrestamento",
            "[TR] Definir tipo de arquivamento",
            "[TR] Encerrar prazos em aberto",
            "[TR] Escolher expediente padrão e prazo",
            "[TR] Escolher rotina de comunicações e outros expedientes",
            "[TR] Migração - Triagem",
            "[TR] Minutar ato ordinatório",
            "[TR] Minutar certidão",
            "[TR] Minutar certidão de decurso de prazo",
            "[TR] Minutar certidão de trânsito em julgado",
            "[TR] Minutar informação",
            "[TR] Preparar alvará",
            "[TR] Preparar comunicação por outros meios",
            "[TR] Preparar comunicação via Ceman",
            "[TR] Preparar comunicação via Correios",
            "[TR] Preparar comunicação via Edital",
            "[TR] Preparar comunicação via Sistema ou DJe",
            "[TR] Preparar comunicação via Telefone ou Balcão",
            "[TR] Preparar comunicações - rotina individual",
            "[TR] Preparar comunicações e outros expedientes - rotina em lote",
            "[TR] Processos baixados por cancelamento da distribuição",
            "[TR] Processos baixados por remessa a outro órgão",
            "[TR] Processos com a conclusão cancelada",
            "[TR] Processos remetidos ao Juizado Especial Federal",
            "[TR] Recebidos da Conciliação",
            "[TR] Recebidos da Contadoria",
            "[TR] Recebidos da rotina de comunicações e outros expedientes",
            "[TR] Recebidos da Turma Nacional",
            "[TR] Recebidos da Turma Regional",
            "[TR] Recebidos do arquivo",
            "[TR] Recebidos do sobrestamento",
            "[TR] Reclassificar tipo de documento",
            "[TR] Redistribuir processo",
            "[TR] Redistribuir processo ao TRF1",
            "[TR] Remeter a outro órgão julgador",
            "[TR] Remeter à Turma Nacional",
            "[TR] Remeter à Turma Regional",
            "[TR] Remeter ao Juizado Especial Federal",
            "[TR] Remetidos à Conciliação",
            "[TR] Remetidos à Contadoria",
            "[TR] Selecionar Central de Mandados",
            "[TR] Sobrestados - Analisar petição",
            "[TR] Sobrestados para aguardar julgamento de outra causa ou recurso",
            "[TR] Sobrestados para cumprimento de transação penal",
            "[TR] Sobrestados por arguição de impedimento ou de suspeição",
            "[TR] Sobrestados por conflito de competência",
            "[TR] Sobrestados por convenção das partes",
            "[TR] Sobrestados por decisão do Presidente do STF - IRDR",
            "[TR] Sobrestados por incidente de insanidade mental",
            "[TR] Sobrestados por IRDR (TRF)",
            "[TR] Sobrestados por morte de parte ou procurador",
            "[TR] Sobrestados por outros motivos",
            "[TR] Sobrestados por RE com repercussão geral",
            "[TR] Sobrestados por RESP repetitivo",
            "[TR] Sobrestados por suspensão condicional do processo",
            "[TR] Solucionar impedimentos à remessa à Turma Nacional",
            "[TR] Solucionar impedimentos ao arquivamento",
            "[TR] Trasladar documentos de outro processo",
            "[TR] Triagem inicial"
          ],
          Gabinete: [
            "[TR] Aguardando a sessão - Confirmar Voto Vista",
            "[TR] Aguardando a sessão - Encaminhados para o Gabinete Vista",
            "[TR] Aguardando a sessão - Preparar Voto Vista",
            "[TR] Aguardando a sessão - adiados",
            "[TR] Aguardando a sessão - incluídos em pauta",
            "[TR] Aguardando a sessão - incluídos em pauta - Voto Vista",
            "[TR] Aguardando a sessão - iniciada",
            "[TR] Aguardando a sessão - não incluídos em pauta",
            "[TR] Aguardando a sessão - não relator",
            "[TR] Aguardando a sessão - preparar voto vista",
            "[TR] Apreciar admissibilidade do Pedido de Uniformização",
            "[TR] Apreciar admissibilidade do RE",
            "[TR] Assinar Decisão",
            "[TR] Assinar Decisão - órgão julgador diverso",
            "[TR] Assinar Despacho",
            "[TR] Assinar Despacho - órgão julgador diverso",
            "[TR] Assinar ato sobre admissibilidade do Pedido de Uniformização",
            "[TR] Assinar ato sobre admissibilidade do RE",
            "[TR] Assinar inteiro teor",
            "[TR] Confirmar Voto Vista",
            "[TR] Confirmar Voto e encaminhar para Gabinete Vista",
            "[TR] Confirmar voto - não relator",
            "[TR] Confirmar voto vencido - relator",
            "[TR] Lançar movimentações processuais do julgamento",
            "[TR] Lançar movimentação não registrada",
            "[TR] Minutar Decisão",
            "[TR] Minutar Decisão - órgão julgador diverso",
            "[TR] Minutar Despacho",
            "[TR] Minutar Despacho - órgão julgador diverso",
            "[TR] Minutar voto - não relator",
            "[TR] Preparar Voto Vista",
            "[TR] Preparar relatório e voto",
            "[TR] Prevenção - Analisar e Minutar ato",
            "[TR] Prevenção - Assinar ato",
            "[TR] Revisar Decisão",
            "[TR] Revisar Decisão - órgão julgador diverso",
            "[TR] Revisar Despacho",
            "[TR] Revisar Despacho - órgão julgador diverso",
            "[TR] Revisar ato sobre admissibilidade do Pedido de Uniformização",
            "[TR] Revisar ato sobre admissibilidade do RE",
            "[TR] Triagem - Gabinete de Turma Recursal",
            "[TR] Triagem - Gabinete do Presidente de Turma Recursal",
            "[TR] Triagem inicial - órgão julgador diverso",
            "[TR] Votar antecipadamente - não relator"
          ]
        }
      }
    }
  },
  filtrostarefas: !0,
  inverterOrdemDownload: !1,
  etiquetasMaisUsadas: {
    valores: [
      {
        nome: "",
        tarefa: ""
      }
    ]
  },
  linksUlteisMultante: {
    enderecoPje: {
      site: "",
      vezes: 0
    },
    enderecoSei: {
      site: "",
      vezes: 0
    }
  },
  painelBaixaTarefas: !1,
  etiquetasColoridas: !0,
  coresEtiquetasColoridas: {},
  integracaoAJG: !1,
  tagsAutosDigitais: !0,
  etiquetaFavoritaMinhasTarefas: !0,
  abrirLinkMenuNoAppup: !1,
  esconderBarraLateralPainelTarefas: !0,
  painelOficialJustica: !1,
  sisbajud: !1,
  gestorDeModelos: !1,
  ultimasEtiquetasUsadaTarefa: !0,
  autorizarLogEmProducao: !1,
  copiarDadosPolo: !0,
  automacaoProcessos: !0,
  telaVisivel: !1,
  gerenciadorEtiquetas: !0,
  contarSelecaoProcessos: !0,
  multivisualizador: !1,
  gerarSinopseRelatoria: !1,
  adicionarEtiquetasAutos: !0,
  linksUltimasTarefas: !1,
  melhorarCartaoTarefa: !0,
  melhorarCartaoTarefaOpcoesAuxiliares: {
    flagDeLimiteVermelho: 30,
    flagDeLimiteAmarelo: 20,
    flagDeLimiteVerde: 15,
    destacarNumeroProcesso: !0,
    modificarCorPadraoEtiqueta: !1,
    copiarNumeroProcesso: !0,
    melhorarDestaquePrioridade: !0,
    recolherdorCartao: !0,
    melhorarDestaqueCartaoSelecionado: !0,
    contarDiasConclusao: !0
  },
  melhorarCartaoTarefaCartoesRecolhidosPersistencia: [],
  atalhosuteis: !0,
  maisAtalhosAutosDigitais: !1,
  visualizadorLembretes: !0,
  pesquisacamposreordena: !0,
  siteAtual: "",
  seletorProcessos: !1,
  integracaoInfojud: !1,
  mapaDeCalorPainelUsuario: !1,
  mapaDeCalorPainelUsuarioLimitesFlags: {
    flagDeLimiteVermelho: 30,
    flagDeLimiteAmarelo: 25,
    flagDeLimiteVerde: 15,
    mapaDeCalorPainelUsuarioUsarLimitesFlagsMelhorarCartaoTarefa: !1
  },
  mapaDeCalorPainelUsuarioStorage: {},
  mapaDeCalorPainelUsuaroiAnalisesProcessadasStorage: {},
  mapaDeCalorPainelUsuarioTarefasIgnoradas: [
    "arquivo",
    "aguardando apreciação",
    "processos suspensos",
    "remetidos para tr",
    "remetidos à tr",
    "sobrestados",
    "devolvidos para instância de origem"
  ],
  mapaDeCalorPainelUsuarioOrigemDados: Hi.PARALIZADOS_ENTRADA_TAREFA,
  mapaDeCalorPainelUsuarioFormatoBarra: Zi.PADRAO,
  mapaDeCalorPainelUsuaroiHashImpressaoLimitesFlags: Math.E,
  mapaDeCalorPainelUsuarioSessionStorage: {
    status: zi.NAO_ATIVADO,
    timestampMontagem: -1
  },
  menuHaburgueIntegracaoSistemas: !0,
  integracaoSerasajud: !1,
  mostraProcessosDigitos: !1,
  intimaZap: !1,
  abrirLembreteNoPopup: !1,
  postIt: !1,
  minutaRemoveOrientacoes: !1,
  mostrarResultadoDiligencia: !1,
  contadorTempoMandado: !1,
  tagsMandados: !1,
  listaTarefaFiltros: !0,
  downloadCsvTipo: "completo",
  listaTarefaFiltrosOpcoesAuxiliares: {
    armazenamentoGlobal: null,
    armazenamentoTarefas: {},
    armazenamentoOrdenacao: null,
    armazenamentoPadraoPJe: null,
    predefinicoesGlobal: [],
    predefinicoesTarefas: {},
    predefinicoesOrdenacao: [],
    predefinicoesPadraoPJe: []
  },
  visualizarAnexoResultadoDiligencia: !0,
  exibirIdOrigem: !1,
  estenderAcessibilidadePcdVisual: !1,
  reproduzirVideos: !0,
  painelGerencial: !0,
  menuIconePainelUsuario: !0,
  filtrarPerfisDoUsuario: !0,
  filtrarProcessosEtiquetas: !0,
  filtrarSaidasDeFluxo: !0,
  calendarioDeAudienciasV2: !0
  // inserir novo valor default acima
}, Ru = /https?:\/\/([\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)|(pje.g)\.[\w.-]+\.jus\.br|frontend.prd.cnj.cloud|corregedoria.pje.jus.br|localhost:8080\/pje)\//, Du = /https?:\/\/([\w.-]+\.jus\.br\/(pje|pjecnj|pje\w|pje-treinamento-1g|pjedesenv|pjenovosautos|pje.g|.g|.+grau)|(pje.g)\.[\w.-]+\.jus\.br|corregedoria\.pje\.jus\.br)/, Ut = {
  MINUTA: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?minuta(-\w+)*\.html/,
  PAINEL_USUARIO: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
  PAINEL_USUARIO_LOCAL: /http:\/\/localhost:4000\/pje\/(?:.+\/)?painel-usuario(-\w+)*(\w*\d+G)?\.html/,
  PAINEL_USUARIO_LISTA_TAREFA_FILTRO: "http://localhost:4000/pje/lista-tarefa-filtro.html",
  AUTOS_DIGITAIS: /http:\/\/localhost:(\d+)\/pje\/autos-digitais\/autos-digitais(-\w+)*(\w*\d+G)?\.html/,
  ULTIMAS_TAREFAS: /http:\/\/localhost:(\d+)\/pje\/(?:.+\/)?ultimas-tarefas(-\w+)*\.html/
}, xe = {
  MINUTA: /https:\/\/([\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)|(pje.g)\.[\w.-]+\.jus\.br|corregedoria.pje.jus.br)\/Processo\/movimentar.seam\?(idProcesso=[0-9]+&newTaskId=|newTaskId=)[0-9]+/,
  TAREFA_DE_FLUXO: /https:\/\/([\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)|(pje.g)\.[\w.-]+\.jus\.br|corregedoria.pje.jus.br)\/Processo\/movimentar.seam\?(idProcesso=[0-9]+&newTaskId=|newTaskId=)[0-9]+/,
  PAINEL_CONSULTA_CLOUD: /https:\/\/.*frontend.*prd.*cnj\.cloud\/?$/,
  PAINEL_CONSULTA: /https:\/\/[\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)\/Processo\/ConsultaProcesso\/listView\.seam/,
  PAINEL_ETIQUETAS: /.*front.[\w.-]+\.(jus\.br|cnj\.cloud).*painel-usuario-interno\/etiquetas/,
  PAINEL_USUARIO: /.*front.[\w.-]+\.(jus\.br|cnj\.cloud).*painel-usuario-interno(?!\/etiquetas)/,
  PAINEL_USUARIO_LOCAL: /https:\/\/([\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)|[\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)|(pje.g)\.[\w.-]+\.jus\.br|corregedoria.pje.jus.br|[\w.-]+\.jus\.br)\/ng2\/dev\.seam#\/painel-usuario-interno/,
  AUTOS_DIGITAIS: /https:\/\/[\w.-]+\.jus\.br\/(pje|pjecnj|pjesg|pje\w*|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)?\/?Processo\/ConsultaProcesso\/Detalhe\/(listAutosDigitais|detalheProcessoVisualizacao)\.seam\?(id|idProcesso)=(.+)/,
  AUTOS_DIGITAIS_NOVOS: /.*front.[\w.-]+\.(jus\.br|cnj\.cloud).*autos-digitais\/\d+/,
  AJG: /https:\/\/ajg1.cjf.jus.br/,
  PAINEL_OFICIAL_JUSTICA: /Painel\/painel_usuario\/Paniel_Usuario_Oficial_Justica/,
  RELACAO_JULGAMENTO: /https:\/\/(pje2g|pjetrn2g|pjehml2grt)\.(trf1|trf2|trf3|trf4|trf5|trf6)\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|.+grau)\/Sessao\/RelacaoJulgamento\/sessaoPopUp\.seam\?idSessao=\d+/,
  ULTIMAS_TAREFAS: /\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)\/Painel\/painel_usuario\/include\/listTasksUsuarioPje2.seam/,
  // with params homeAnterior=br.jus.pje.nucleo.entidades.ProcessoExpedienteCentralMandado
  OFICIAL_JUSTICA_CONTROLE_MANDADOS: /Visita\/listView\.seam(\w*)\?(.*&)?homeAnterior=br\.jus\.pje\.nucleo\.entidades\.ProcessoExpedienteCentralMandado/,
  HOME: /https:\/\/([\w.-]+\.jus\.br\/(pje|pjecnj|pje.|pje.g|.g|pje-treinamento-1g|pjedesenv|pjenovosautos|.+grau)|(pje.g)\.[\w.-]+\.jus\.br|corregedoria.pje.jus.br)\/home\.seam/
}, rr = {
  CONTENT_SCRIPTS: {
    ESTILOS_URL: "content/style.css"
  },
  REGEX: { NUMERO_PROCESSO: /\d{7}-\d{2}\.\d{4}\.\d\.\d{2}\.\d{4}/ },
  LINKS: {
    PJE: "https://pje1g.trf1.jus.br",
    OUTLOOK: "https://outlook.office.com/mail/inbox",
    ESOSTI: "https://esosti.trf1.jus.br/itsm/webclient/login/login.jsp?appservauth=true",
    SEI: "https://sei.trf1.jus.br/",
    SISBAJUD: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=sisbajud&redirect_uri=https%3A%2F%2Fsisbajud.cnj.jus.br%2F%3F&state=f9fd5e6e-e36c-4a8d-8dc7-b22b93373787&response_mode=fragment&response_type=code&scope=openid&nonce=06af9d0f-f779-4d6b-a769-308471bbda7e",
    RENAJUD: "https://renajud.denatran.serpro.gov.br/renajud/login.jsf",
    CONTRACHEQUE: "https://portal.trf1.jus.br/Consulta/ContraCheque/ContraCheque.php",
    AJG: {
      NOMEACAO: "https://ajg1.cjf.jus.br/aj/nomeacao/nomearprofissionais/nomearprofissionais_index.jsf",
      SOLICITACAO: "https://ajg1.cjf.jus.br/aj/pagamento/mantersolicitacaopagamento/mantersolicitacaopagamento_principal.jsf"
    }
  },
  HREFS: {
    ROOT: Ru,
    LEGACY_WEB_ROOT: Du,
    HOME: [xe.HOME],
    MINUTA: [xe.MINUTA, Ut.MINUTA],
    TAREFA_DE_FLUXO: [xe.TAREFA_DE_FLUXO],
    PAINEL_CONSULTA_CLOUD: xe.PAINEL_CONSULTA_CLOUD,
    PAINEL_CONSULTA: xe.PAINEL_CONSULTA,
    PAINEL_ETIQUETAS: xe.PAINEL_ETIQUETAS,
    PAINEL_USUARIO: [
      xe.PAINEL_USUARIO,
      Ut.PAINEL_USUARIO,
      Ut.PAINEL_USUARIO_LISTA_TAREFA_FILTRO
    ],
    PAINEL_USUARIO_LOCAL: [xe.PAINEL_USUARIO_LOCAL, Ut.PAINEL_USUARIO_LOCAL],
    AUTOS_DIGITAIS: [xe.AUTOS_DIGITAIS, Ut.AUTOS_DIGITAIS],
    AUTOS_DIGITAIS_NOVOS: xe.AUTOS_DIGITAIS_NOVOS,
    AJG: xe.AJG,
    PAINEL_OFICIAL_JUSTICA: xe.PAINEL_OFICIAL_JUSTICA,
    RELACAO_JULGAMENTO: [xe.RELACAO_JULGAMENTO, Ut.AUTOS_DIGITAIS],
    ULTIMAS_TAREFAS: [xe.ULTIMAS_TAREFAS, Ut.ULTIMAS_TAREFAS],
    OFICIAL_JUSTICA_CONTROLE_MANDADOS: [xe.OFICIAL_JUSTICA_CONTROLE_MANDADOS]
  }
};
var nr = {};
const ju = {}, ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ju
}, Symbol.toStringTag, { value: "Module" })), Mu = /* @__PURE__ */ Eu(ku);
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.obterBranchAtual = qi;
nr.detectarGitTag = tn;
nr.obterVersao = Ji;
nr.obterVersaoENomeExibicao = Bu;
var Nu = nr.obterNomeExibicao = $i;
nr.validarAmbiente = Uu;
const Wi = Mu;
function qi() {
  try {
    return (0, Wi.execSync)("git branch --show-current", {
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "ignore"]
      // ignora stderr
    }).trim();
  } catch {
    return console.log("⚠️ Não foi possível obter a branch atual, usando fallback"), "unknown-branch";
  }
}
function tn() {
  try {
    let e;
    try {
      e = (0, Wi.execSync)("git describe --exact-match --tags HEAD", {
        encoding: "utf-8",
        stdio: ["pipe", "pipe", "ignore"]
        // ignora stderr
      }).trim();
    } catch {
      return { isTag: !1 };
    }
    if (!e)
      return { isTag: !1 };
    console.log(`🏷️ Tag detectada: ${e}`);
    const t = e.match(/^v(\d+\.\d+\.\d+)(-tester)?$/);
    if (!t)
      return console.log(`⚠️ Tag não segue o padrão esperado (vx.x.x ou vx.x.x-tester): ${e}`), { isTag: !1 };
    const r = t[1], n = !!t[2];
    return { isTag: !0, version: r, isTester: n };
  } catch {
    return console.log("📝 Não estamos numa tag git, usando configurações de desenvolvimento"), { isTag: !1 };
  }
}
function Ji(e = "77.777.7777") {
  try {
    const t = tn();
    return t.isTag ? t.version : "999.999.999";
  } catch (t) {
    return console.error("❌ Erro ao obter versão:", t), e;
  }
}
function Bu(e = "77.777.7777", t = "PJe+R") {
  try {
    const r = tn();
    console.log("📦 Determinando versão e nome para o manifest...");
    const n = Ji(e);
    let o;
    try {
      o = $i();
    } catch {
      o = t;
    }
    const a = { version: n, displayName: o };
    return r.isTag ? r.isTester ? console.log("🧪 Configuração de tester aplicada") : console.log("🚀 Configuração de produção aplicada") : console.log("🔧 Configuração de desenvolvimento aplicada"), console.log(`   📊 Versão: ${a.version}`), console.log(`   🏷️ Nome: ${a.displayName}`), a;
  } catch (r) {
    return console.error("❌ Erro ao determinar versão e nome:", r), {
      version: e,
      displayName: t
    };
  }
}
function $i() {
  try {
    const e = tn();
    return e.isTag ? e.isTester ? "PJe+R Tester" : "PJe+R" : "PJe+R (Developer)";
  } catch (e) {
    return console.error("❌ Erro ao obter nome de exibição:", e), "PJe+R (Developer)";
  }
}
function Uu(e) {
  var t;
  const r = (t = "production") === null || t === void 0 ? void 0 : t.toLowerCase(), n = tn(), o = e || {
    message: console.log,
    info: console.log,
    success: console.log,
    step: console.log,
    warn: console.warn,
    warning: console.warn,
    error: console.error
  };
  o.step("🔍 Validando ambiente de deploy"), o.info(`   🌍 NODE_ENV: ${r}`), o.info(`   🏷️ É tag Git: ${n.isTag}`), o.info(`   📋 Versão: ${n.version || "N/A"}`), n.isTag && o.info(`   🧪 É tester: ${n.isTester}`);
  let a = !1, s = "";
  switch (r) {
    case "development":
      n.isTag && n.isTester ? a = !0 : s = "❌ NODE_ENV=development requer estar numa tag tester (vx.x.x-tester)";
      break;
    case "production":
      n.isTag && !n.isTester ? a = !0 : s = "❌ NODE_ENV=production requer estar numa tag de produção (vx.x.x)";
      break;
    case "local":
      n.isTag ? s = "❌ NODE_ENV=local requer estar numa branch (não numa tag)" : a = !0;
      break;
    default:
      s = `❌ NODE_ENV inválido: ${r}. Valores aceitos: development, production, local`;
      break;
  }
  if (!a) {
    o.error("🚨 ERRO DE VALIDAÇÃO DE AMBIENTE"), o.error(s), o.warn("📋 CONDIÇÕES PARA EXECUÇÃO:"), o.info("   • NODE_ENV=development → Deve estar numa tag tester (vx.x.x-tester)"), o.info("   • NODE_ENV=production  → Deve estar numa tag de produção (vx.x.x)"), o.info("   • NODE_ENV=local       → Deve estar numa branch qualquer (não numa tag)"), o.warn("💡 SITUAÇÃO ATUAL:"), o.info(`   • NODE_ENV: ${r}`), o.info(`   • Estado Git: ${n.isTag ? `Tag: ${n.version}` : `Branch: ${qi()}`}`), o.error("⛔ Execução interrompida por incompatibilidade de ambiente");
    const i = [
      "🚨 ERRO DE VALIDAÇÃO DE AMBIENTE",
      s,
      "CONDIÇÕES: development=tag-tester, production=tag-release, local=branch"
    ].join(" | ");
    throw new Error(i);
  }
  o.success("✅ Validação de ambiente aprovada!");
}
function Vu(e) {
  return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Hu(e) {
  return Vu(e) === "string";
}
let Ce = class _e {
  static estilos = {
    azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;",
    cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;"
  };
  static console = {
    assert: (...t) => {
    },
    count: (...t) => {
    },
    debug: (...t) => {
    },
    dir: (...t) => {
    },
    error: (...t) => {
    },
    group: (...t) => {
    },
    groupCollapsed: (...t) => {
    },
    groupEnd: (...t) => {
    },
    info: (...t) => {
    },
    log: (...t) => {
    },
    profile: (...t) => {
    },
    table: (...t) => {
    },
    time: (...t) => {
    },
    timeEnd: (...t) => {
    },
    trace: (...t) => {
    },
    warn: (...t) => {
    }
  };
  static autorizarEmProducao = !1;
  static info(t) {
    _e.log(t, _e.estilos.azul);
  }
  static erro(t) {
    t instanceof Error ? (_e.log(t.message, _e.estilos.vermelho), console.log(t)) : _e.log(t, _e.estilos.vermelho);
  }
  static aviso(t) {
    _e.log(t, _e.estilos.laranja);
  }
  static sucesso(t) {
    _e.log(t, _e.estilos.verde);
  }
  static detalhes(t) {
    _e.log(t, _e.estilos.cinza);
  }
  static inspecionar(t, r) {
    this.autorizarEmProducao && (_e.detalhes(t), console.log(r));
  }
  static log(t, r = "") {
    this.autorizarEmProducao && console.log(`%c${t}`, r);
  }
};
class Ye {
  recurso;
  contexto_;
  adicional;
  get contexto() {
    return Hu(this.contexto_) ? this.contexto_ : this.contexto_();
  }
  static _depurador;
  static _baseConsoleFunc = (t, ...r) => {
    const n = `[${Nu()}][${Ye._depurador.recurso}][${Ye._depurador.contexto}]${Ye._depurador.adicional ? `[${Ye._depurador.adicional}]` : ""}: `;
    typeof r[0] == "string" ? r[0] = r[0].startsWith("%c") ? `%c${n}${r[0].slice(2)}` : `${n}${r[0]}` : r = [n].concat(r), t(...r);
  };
  static _console = {
    assert: (...t) => (...r) => {
    },
    count: (...t) => (...r) => {
    },
    debug: (...t) => (...r) => {
    },
    dir: (...t) => (...r) => {
    },
    error: (...t) => (...r) => {
    },
    group: (...t) => (...r) => {
    },
    groupCollapsed: (...t) => (...r) => {
    },
    groupEnd: (...t) => (...r) => {
    },
    info: (...t) => (...r) => {
    },
    log: (...t) => (...r) => {
    },
    profile: (...t) => (...r) => {
    },
    table: (...t) => (...r) => {
    },
    time: (...t) => (...r) => {
    },
    timeEnd: (...t) => (...r) => {
    },
    trace: (...t) => (...r) => {
    },
    warn: (...t) => (...r) => {
    }
  };
  /**
   * Cria uma instância de Depurador2.
   * @param {string} recurso - O recurso associado à depuração.
   * @param {string | TUnknownFunction} contexto - O contexto associado à depuração.
   * @param {string} [adicional] - Informações adicionais opcionais.
   */
  constructor({
    recurso: t,
    contexto: r,
    adicional: n
  }) {
    this.recurso = t.replace(/^_/, ""), this.contexto_ = r || "background", this.adicional = n;
  }
  /**
   * Obtém o objeto console configurado para depuração.
   * @returns {Object} - Objeto console configurado.
   */
  get console() {
    return Ye._depurador = this, Ye._console;
  }
  /**
   * Registra uma mensagem informativa no console.
   * @param {string} mensagem - A mensagem informativa a ser registrada.
   */
  info(t) {
    this.log(t, Ce.estilos.azul);
  }
  /**
   * Registra uma mensagem de erro no console.
   * @param {string | unknown} objeto - O objeto ou mensagem de erro a ser registrado.
   */
  erro(t, r) {
    const n = t instanceof Error ? t.message : t;
    this.log(n, Ce.estilos.vermelho, r), t instanceof Error && console.log(t, r);
  }
  /**
   * Registra uma mensagem de aviso no console.
   * @param {string} mensagem - A mensagem de aviso a ser registrada.
   */
  aviso(t) {
    this.log(t, Ce.estilos.laranja);
  }
  /**
   * Registra uma mensagem de sucesso no console.
   * @param {string} mensagem - A mensagem de sucesso a ser registrada.
   */
  sucesso(t, r) {
    this.log(t, Ce.estilos.verde, r);
  }
  /**
   * Registra uma mensagem de detalhes no console.
   * @param {string} mensagem - A mensagem de detalhes a ser registrada.
   */
  detalhes(t) {
    this.log(t, Ce.estilos.cinza);
  }
  /**
   * Inspeciona um objeto e registra no console com um rótulo
   * @param {string} rotulo - O rótulo a ser exibido antes do objeto.
   * @param {unknown} objeto - O objeto a ser inspecionado e registrado.
   */
  inspecionar(t, r) {
    this.detalhes(t), this.console.log(r);
  }
  /**
   * Registra uma mensagem de log no console.
   * @param {string} mensagem - A mensagem a ser registrada.
   * @param {string} [estilo=''] - O estilo CSS a ser aplicado à mensagem.
   */
  log(t, r = "", n) {
    this.console.log(`%c${t}`, r, n);
  }
}
async function Zu() {
  return (await Ge.obter("ativada")).ativada === !0;
}
class Ge {
  static iniciar() {
    S.storage.local.set(is);
  }
  static async atualizar() {
    const t = await Ge.obter(null);
    S.storage.local.set(Object.assign(is, t));
  }
  static remover(t) {
    return S.storage.local.remove(t);
  }
  static guardar(t) {
    return S.storage.local.set(t);
  }
  static async obter(t) {
    return await S.storage.local.get(t || null);
  }
  static async guardarSessionStorage(t) {
    if (un.console.log("Salvando dados no armazenamento de sessão."), S.runtime.getManifest().manifest_version === 2) {
      for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          const n = t[r];
          sessionStorage.setItem(r, JSON.stringify(n));
        }
    } else
      try {
        await S.storage.session.set(t), un.console.log("Dados salvos no armazenamento de sessão.");
      } catch (r) {
        un.console.error("Erro ao salvar dados no armazenamento de sessão:", r);
      }
  }
  static async obterSessionStorage(t = null) {
    if (S.runtime.getManifest().manifest_version === 2) {
      const r = {};
      for (let n = 0; n < sessionStorage.length; n++) {
        const o = sessionStorage.key(n);
        o && (r[o] = sessionStorage.getItem(o));
      }
      return t ? sessionStorage.getItem(t) : r;
    } else
      try {
        const r = await S.storage.session.get(t);
        return t ? r[t] : r;
      } catch (r) {
        return un.console.error("Erro ao obter dados do armazenamento de sessão:", r), null;
      }
  }
}
const un = new Ye({
  recurso: "Armazenamento"
}), po = "nav.main-menu,#divSideBar{max-width:40px;min-width:40px}painel-usuario-menu-esquerdo{left:unset!important}#divProcessosTarefa{width:25%!important;flex-grow:1}#divMainPanel{width:75%!important;overflow-y:hidden!important}#divPainelUsuarioContent{display:flex}#divRightPanel{flex:1}#conteudoTarefa,.assinaturas-tarefa{overflow-y:hidden}#pageBody.container-fluid.scroll-y.novoPainel{overflow-y:hidden!important}#divLiAgrupadores,#divLiAssinatura,#divLiConsultaProcessual,#divLiEtiquetas,#divLiExpedientes,#divLiMinhasTarefas,#divLiSessoes,#divLiTarefas,#divLiUltimasTarefas{left:41px!important}#pageBody{padding:0}", zu = ":root{--background-primary: #2d2f32;--background-secondary: #1c1e1f;--text-neutral: #b0b0b0;--selection-background: #3da9fc;--selection-text: #e8e6e3;--text-light: #dcdcdc;--background-dark: #3a3a3d;--background-dark-alt: #2b2d2b;--link-hover: #3e4041;--border-light: #d1d1d1;--text-highlight: #89d9f9;--background-default: #282828;--nav-background: #003f66;--nav-alert: #8a1a00;--bar-background: #3d3d3d;--button-background: #0a6991;--border-default: #232527;--button-hover: #323232}body,html{background-color:var(--background-secondary);color:var(--text-light)}.main-menu,.sideBarDefault nav.main-menu{background:var(--background-default)}.hrDivisao{border-color:var(--border-default)!important}#barraSuperiorPrincipal,.navbar,.navtop,.navbar-static-top,.navtop .navbar-collapse,.navbar-header,.navbar-collapse,.navbar-nav,.nav-bar-brand,.navbar-right{background:var(--nav-background)!important;color:var(--text-light)!important}.navbar.nav-sigilo,.navtop.nav-sigilo,.navbar-static-top.nav-sigilo,.navtop .navbar-collapse.nav-sigilo,.nav-sigilo .navbar-header,.nav-sigilo .navbar-collapse,.navbar-header.nav-sigilo,.nav-sigilo .navbar-nav,.nav-bar-brand,.navbar-right.nav-sigilo{background:var(--nav-alert)!important}span,.btn-default,.btn,p,a{color:var(--text-light)}a:hover,.btn:hover,.btn-default:hover{color:var(--text-neutral);background-color:var(--button-hover);transition:background-color .3s ease}.login-body{background:var(--background-primary)!important}#username,#password{background:var(--background-primary);color:var(--text-light)}#divProcessosTarefa,#acoes-processos-selecionados,.header-wrapper,.box,.media-body,.panel,.modal-content{background:var(--background-default);color:var(--text-light)}.painel-usuario-interno-dashboard.row,.rightPanel.container-fluid{background:var(--background-primary);color:var(--text-light)}#pageBody{background-color:var(--background-dark)}#frameTarefas .header-wrapper,#frameTarefas .header-processo .mais-detalhes,div.vcenter.col-md-7.no-padding.header-processo{background:var(--border-default);color:var(--text-light)}.btn.btn-primary{background:var(--button-background);color:var(--text-light)}.text-info{color:var(--button-background)}#modalAssinarEmLote>div:first-child>div:first-child,#modalMovimentarEmLote>div:first-child>div:first-child>div:nth-child(2)>*{background:var(--background-default);color:var(--text-light)}.faixa-superior{background-color:var(--bar-background)!important}#loginAplicacaoButton,#btnEntrar,#kc-pje-office,#kc-login{background:var(--button-background);color:var(--text-light)}#loginAplicacaoButton:hover,#btnEntrar:hover,#kc-pje-office:hover,#kc-login:hover{background:var(--link-hover);color:var(--text-light);transition:background-color .3s ease}.dados,.pageBody{background-color:var(--background-secondary)!important;color:var(--text-light)!important}.nomeSistema,.subNomeSistema{color:var(--text-highlight)!important}.rich-stglpanel-header,.rich-stglpanel-body,.rich-panel-body,.value,input,select,textarea,.form-control,#avisosPannel_header{background-color:var(--background-secondary)!important;color:var(--text-light)!important}#quadroAvisoPapelMensagem\\:j_id137_body>div.propertyView>div.value.col-sm-12>input[type=text],#quadroAvisoPapelMensagem\\:dataPublicacaoDecoration\\:dataPublicacaoFromFormInputDate,#quadroAvisoPapelMensagem\\:dataPublicacaoDecoration\\:dataPublicacaoToFormInputDate{background-color:var(--background-primary)!important;color:var(--text-light)!important}#menu,#menu>div.nivel.nivel-aberto,ul#menu *,#menu *{background-color:var(--background-secondary)!important;color:var(--text-light)!important}ul#menu a:hover,#menu a:hover{background-color:var(--link-hover)!important}.dropdown-menu{color:var(--text-light);background-color:var(--background-secondary);border-color:var(--text-light)}html,body,input,textarea,select,button{border-color:var(--background-primary)}#processosTarefa>p-datalist>div>div>ul *{background-color:var(--background-secondary);border-color:var(--background-dark-alt)}li.ng-star-inserted>processo-datalist-card:first-child>div:first-child>div:nth-child(3)>a:first-child>span{color:var(--selection-background)}span.orgao.col-sm-12.no-padding,.tarefa-numero-processo.process,span.local.col-sm-12.no-padding,span.local.col-sm-12.no-padding.ng-star-inserted{color:var(--text-light)}.modal-header,.modal-footer,.processos-list,.col-sm-12,#dropdown-filtro-tarefas,button.btn:nth-child(3),#detalheDocumento\\:toolbarDocumento,#divTimeLine\\:divEventosTimeLine,.media-body,.box,.timeline .media.data,.timeline .media.data>.media-body,#PjeMaisRTabs,.pesquisa,.affix-top,.col-xs-12,.rich-stglpanel-header,#j_id51\\:j_id361\\:tableDestinatariosLote\\:prazoGeralInput,.rich-table-row,.rich-table-firstrow,#j_id51\\:processosElegiveis *>h6,#j_id51\\:processosElegiveis\\:transicoesColHeader,.rich-table-header,#cke_1_top{background:var(--background-primary);color:var(--text-light)}.titulo-accordion,.datalist-content,.folha,.rich-datascr,.rich-table-footercell,#taskInstanceForm\\:WEB-INF_xhtml_flx_visualizarPeticao-2601387906\\:j_id195>table>tbody>*{background:var(--background-primary)!important;color:var(--text-light)!important}#divTarefasPendentes>div.wrapper-filtro-tarefas-pendentes>div,#inputPesquisaTarefas,#filtro-tarefas,.form-control,.ng-pristine,.ng-invalid,.ng-touched,#dataDistribuicaoInicio>span>div,.ui-state-default,.ng-tns-c23-2,.ng-star-inserted,.ui-datepicker-title,.ui-datepicker-header,.ui-widget-header,.ui-helper-clearfix,.ui-corner-all,#dataDistribuicaoInicio>span>input,#divTimeLine,.media-left,.dropdown-menu,.media-body,.box,.pesquisa,.affix-top,.btn,.btn-flat,.btn-default,.hidden-sm{background:var(--background-primary)!important;color:var(--text-light)!important}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n){background-color:#3b3b39!important;color:#fff!important;font-weight:700}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n):hover{background-color:#bce4ee80!important}.tree li:last-child:before{background-color:var(--background-primary)!important}.autos-digitais i,.autos-digitais span,.autos-digitais div,.etiquetas span,.etiquetas div,.log-page div,.minuta span,.minuta div,.painel span,.painel div,.quadro-avisos span,.quadro-avisos div,.quadro-avisos h4,.quadro-avisos p,.quadro-avisos a,.quadro-avisos table,.quadro-avisos strong,.quadro-avisos h1{background:var(--background-primary)!important;color:var(--text-light)!important}.scrollbar{scrollbar-color:var(--background-primary) var(--background-secondary)}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:var(--background-secondary)}::-webkit-scrollbar-thumb{background-color:var(--background-primary);border-radius:10px;border:2px solid var(--background-secondary)}input,select,textarea{background-color:var(--background-dark-alt);color:var(--text-light);border:1px solid var(--border-default)}input::placeholder,textarea::placeholder{color:#aaa}.button,.btn-primary,.btn-info{background-color:var(--button-background);border-color:var(--button-background);color:var(--text-light)}.button:hover,.btn-primary:hover,.btn-info:hover{background-color:var(--button-hover);color:var(--text-neutral);transition:background-color .3s ease}", Wu = ":root{--darkreader-escuro-fraco: #636566;--darkreader-neutral-background: rgb(48, 50, 51);--darkreader-neutral-text: #d8d4cf;--darkreader-selection-background: #004daa;--darkreader-selection-text: #e8e6e3;--letra-preto-branco: #ffff;--background-branco-preto: #f2f2f2;--background-branco-cinza: #e4e4e4;--a-hover: rgb(165, 167, 170);--bord-branco-preto: #ffff;--azl-letras: rgb(137, 217, 249);--background: rgb(204, 204, 204);--nav-azul-outros: rgb(48, 50, 51);--nav-sigiloso: #490700;--faixa-superior: #636566;--button: #636566;--border: #f2f2f2}.main-menu{background:var(--background)}.hrDivisao{border-top-color:var(--border)!important;border-right-color:var(--border)!important;border-bottom-color:var(--border)!important;border-left-color:var(--border)!important}html body app-root selector div.container-fluid.painel-usuario-interno div#divPainelUsuarioContent.row div#divSideBar.sideBarDefault side-bar nav.main-menu{background:var(--background)}#barraSuperiorPrincipal,.navbar,.navtop,.navbar-static-top,.navtop .navbar-collapse,.navbar-header,.navbar-collapse,.navbar-nav,.nav-bar-brand,.navbar-right{background:var(--nav-azul-outros)!important}.navbar.nav-sigilo,.navtop.nav-sigilo,.navbar-static-top.nav-sigilo,.navtop .navbar-collapse.nav-sigilo,.nav-sigilo .navbar-header,.nav-sigilo .navbar-collapse,.navbar-header.nav-sigilo,.nav-sigilo .navbar-nav,.nav-bar-brand,.navbar-right.nav-sigilo{background:var(--nav-sigiloso)!important}#divProcessosTarefa{background:var(--background-branco-cinza)!important}html body app-root selector div.container-fluid.painel-usuario-interno div#divPainelUsuarioContent.row div#divRightPanel.rightPanelDefault right-panel div#rightPanel.rightPanel.container-fluid div.painel-usuario-interno-dashboard.row div.col-md-4 div.dashboard-item-header{background:var(--button)}.painel-usuario-interno-dashboard.row,.rightPanel.container-fluid,.pesquisa-etiquetas,.rightPanel,#acoes-processos-selecionados{background:var(--background-branco-cinza)}.header-wrapper{background:var(--background)}#pageBody{background-color:var(--background-branco-preto)}#frameTarefas>.header-wrapper{background:var(--border)}#frameTarefas>.header-wrapper>.header-processo .mais-detalhes{background:var(--border)}div.vcenter.col-md-7.no-padding.header-processo{background:var(--border)}.detalhe-processo>.header-top{background:var(--nav-azul-outros)}.btn.btn-primary{background:var(--button)}.btn.btn-primary:hover{background:var(--azl-letras)}.btn-default{background:var(--button);color:var(--letra-preto-branco);font-weight:700}.btn-default:hover{background:var(--azl-letras)}.pesquisa{background-color:var(--background-branco-cinza)}.text-info{color:var(--button)}#modalAssinarEmLote>div:nth-child(1)>div:nth-child(1){background:var(--background)}.faixa-superior{background-color:var(--faixa-superior)!important}#loginAplicacaoButton{background:#636566 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAIAAADW7/fEAAANR3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZlJcjM5DoX3PEUfgfNwHI4RdYM+fn8gU7Yky/ZvVy16UVZIKWcyQQAPw0NKzf/+tdR/+AvGeeVDyrHEqPnzxRdb+ZL1+Sv702i/P/efS9c183heudtNllNOVp5/U73WV86H9xtuy017PK/ydcXmS5B5E3w0kJ3l+7hXkvP2nDf+ElTm+RJLTveqtktQvxZuVa63f1PrHOR/9XAi4aUR2MhZO51xen/mo4E778o77k+U4mrgu3FF7cNNGA55MO921PreQQ9OXu0y7dn7b9+enG/rdd49+TLeBMXXF0x4Ou/etrEP4XB9U5x+uDCSsR/Mud5rjbzWPNZVH/FovCJqO9vcxLAQi73bt0VeiXfge9qvwivrqjuQD91149VNMRYnL2W8GaaaZeY+dtNR0dtpE0dru3X7XHbJFtud4OTlZZZNrrjhMlh2O5VznLZvupi9b9n7dZPZeRiWWoMwwy2fvtRXF3/yUmt1cZHR+fJTE4CtOBw1BDn5ZBWAmHXhFraDb68Lfn0XP4QqCIbt5oyBVbcjogXzHltu4+xYFzieFDIqjUsALmLvgDLGgYCORL+JRidrkzH4MQNQRXPrvG0gYEKwAyWtdy5alWy2sjf3JLPX2mCjldPUJoAIZFYCm+IqYHkfiJ/kMzFUgws+hBBDClmFEmp00ccQY0xRilxNLvkUUkwp5VRSzS77HHLMKedcci22OGpgKLGkkksptVpV2agiq7K+cqbZ5ppvocWWWm6l1U74dN9Djz313Euvww43KBMjjjTyKKNOoyaVYvoZZpxp5llmXcTacsuvsOJKK6+y6htq5krb59cPUDMXanYjJevSG2qcVSndRBgpJ0EwAzHrDYgnQYCAtoKZzsZ7K8gJZrpYkiJYlAyCjRpGEANCP40Ny7xh947cH+GmQv4j3Ox3yCmB7p9ATgHdR9xeoDakz/WN2MlC8al2ZN9yOCKraktGcb5WaW6/Pqq/K+BfQf83ghb51GlzutMPjbEj1kj6aj1HWi2kUuIcevbVXOw9huKnSq51WZLSCnWRJ6YFr5c3uXqy30zp3oTkiM1AQuwswY01VuipmLgQPZbVIaqIQAKS9TbVQg81lTxMfbhJuzN9VpfKtK2NsrxfRs/qm+RiSdPnTF6EXFL2KuiRA+nDrWUOUhj1ColR2po52sH/0oRI6m2arVm72VCtTY8p2TcK1lhLSX81se7l2TSb1jLBp9WpKdPGhbsyXpH2N4rbqyrV5IMwJdJ+JUwg6TPXVZwDEUXbNy4t2EWoTThL7EWW9hDMNurJTu4/dj5Zqbb8m6GXYiy+FBPI7lXT+qac1JSt3qWcutPO7hvv1MO5R8FLva9AUJ+h8FO/qVeO+43f1JPjfI8R3caPdVNfg/qFbqnNlfUiMWqYLalKD5gFClmDDSSERLqnM9hmrS9ldBh2M7ZDH/2cjgtQxyrcMrSOSmYe3FVJ3bVUakyjttnHivSWRSLblUjIOusYUDu3UhqpjdTnmC4sXcU2g/rd8XU0xeo0Y6B1rRlTCbQlx/4t9wPsqQq1rBzDghVQXkhnZirXY4sJ9o1E32QWQR7DDF3JIMkH44MMT6+PaZRMoCTxxWxmulgqCvZmVcNFlKHMODRGCGV2b3uaUhuwBhuhP476YPpycxWUM3Ti1L0Q80ZdMTOP5KoKY3phB5AHunRDCt0Uz0aTO3SxZjNqgRlZP0xYXgyxeezauQvilVJJrQryUzjD+wotH1fkpL2AJGAJ1bcsiY2qJTZ8xHFpzV19d9K2NXbELtPqhxVrncuSh03i7LUs9WHpC0mPW72WpV4v/rle6pOlP9ZLfbX4J3qpL5f+QC+lv138Z3qpl0HxC73Umi0SipDFafVwK7hCwdKjhu7CNNnXBjUcMNFBPs9gSR9bk3bWpNKpSrvSd6tehfst2kMTUaiCVnTlvcmaDLBxkVcRqt0tbZzBLAwFMSZRqyurkOHs5IWHJApimCk7iLFkN1w8ocxyrk+ZjmdwjPXMfr1SNfmXmi0sRaeetorFjChUhmTfJbU66ysVLjC0Z2E1YZLAplP4IfRtZ2FjNpTIhn5b0vtWixgl66ZJH45udib+xuTQfI4sZUIcoFH2dZU/vfHbYx82iGRKRKyKIGjTUcV6Bj+QjXpSY4cBPOZdJ5U80S/m7l8UKCr6GjLh7EYljzW2OerYI1OxfNPPR7NixAKsmDig33FEPR6Wq9f3f3o0Mv44UUND607IbterR99v17dJH6AV04I2mBeUgHbA3FCaO3zEHvWpQZoIcfRyj1OI1aZLo+NXa8oWOuj1dZIXneigBR1+VPUKeVdoienBvt6CRzUL5x7Z/Ruurb4n422YNGksCx7rdGsuoxKZzs49Y3YqI6SqzOoMuzS8NDbzGOTF9gfdaJZKti5SAGqSIllpW3TbNleX9vdBoZ6jIswV6MuBJjjd6vgAfT6JMwsJD+04Xf1Bh2ZSwJ1iSA61U5FOJWJsJQ+9MWR3k0dj+6T3bkS3xsw7NnyypClbZuhHC1WmB02zh2KDFzQIMFfA7jqa7iWuqCblJEf6ND7RlCpjVhlwnBRp7nihGJTAbRCO5BdCRpWho/qSO8wOnsRgQ5SoypCRk8kbYgm3jHI3ymfnvCifDpvyud3ZrbkoX0qHjtriThzBTfZAxaSySSYR7fOpzG4L6LtwP12+LkqSSBzNTRaNvshiazeGbbw42G/P5nxE5DBuDFvXi2HH1i56LCxNVCWYhkXq2iaSZuz6dpHq+XCZcpSk2uV+ccjLIZc7ZHg47pAZ4N4hMjwcl8jwYPfwcDyCVhitPrXafe0zMeoIOV5Rb265nCLP1MfVq16h8wZOe9xIPe8U/sQv7fjl3i3q2S+h7Ie3Q5i2N3DgRT0hrX3KY3h5IoQgq7MbvMPcKrbebhMk1Lni2rHKpfyk27EP9Z/MLLXCWatxFcrfUpA2OeURXTWl5GZ6TE7By2lOIbz1mhHJLzumNdL0XZl66BTo0IYZnO1yick6JoxiivZGOz5D9GokMgvxp8/a5M1VwYMAwNizuYZ49OugVd9F7WwWQi+9NZGsYWYqeJS2EVdDGvUt7eqkdqkcqe5KKR2jzT3vSEXbQMgjvkCBtGF2OmaSZxtmAmI+dTKcOqled89TJzeO1z0A8n7XdQuF+dzELQpKUDN9KzGbfd0cd9MFS0Zldzyq2633WHwkzQfTMV9mHuqVJJguVZ7WxDM+PPQnaFDViZl0GqnklvmIOaUqRGLDyKvXVmJ2hH5zqFc6k2OUZzlMSa3GzaMWsRFoAkx3sQgpMzXN2gAeZzsXl2NiGp0wrqHRVZNEJB8QLMom3pK0EXSCO4nq886DuDNKCpE+Q82+fq5ybcl/P57/1fOM7fu1R7nfYgdCPLXFI2z4vjEtVlo8CdjVrtV/62GGzIW5qW+Io4bQ99UPebc2xNPQabdtR3RsYdlIzFFqpYsaTd0w8rw7tkEXRHqsBgIMWS4mBHH6/hGs718rHWKenqaoXz6G8o576N2O4iC8AEFJYJ07+4WLkQiu0dLdyi4mau3OTTFRpxOcMJlgP2Seeky9LzKvJhfrc6q+r1cPRPdnaWfcMrb5Sfq5rnSrtYeYYnF+JT2jkx+GPAyhDwgMQUOEy2MOGqrJVVYCiavBZzgrVbx0/FLhR01H2kmxqTs8QggyyeD7uJ+zetTtu+P6mM4jJ3launsN0Uh0UdVDInNV0ogOnVuKMDy5BBloNqI/zSehIqIKlxb526tkDeq2U/SYDLx8NVZJeO7INwUciV2qC3E8taUcTxNWYEX0UsHJYfqbbLUz4Zzcqc1pJecNBWZvty9cGwoAtw3JH7sT4n5PIX/vu6prWwLucYe9wRryhFiiB25MsdnDLWOB/E5VT1t37oSyoqmto2rXf+ba8Eo89ejZ/gc7X7n1tVfVvVvf7Pto3WvbLsvYaKjLsju7hGdsyyTDLsuEjn6w7d6ypV64+FcYqkcQf4+hegTx9xiqRxB/j6H6PDVeYGjlFAWcvd2TbaqlexCF+91h2OBCcKdJQaB8pVwhcdKXgT6OSa01if2Y6sZgOipjMcuhSQrMNkGo8zO8gbElyw/b8FoKlDOdqdK7kOSXRWIEGqd2fzCjyqOVTx8ktNkzHQ4CcmZvebrMagYjmzaLslotSuXuqYMZPEj1sa6P+s2gy1jXGfhsE0zdCqWoFvTC1FHxJ3PrpiMuwXdjKKE5Brg1ZSqH+eAdHBtr3mPOgG6ePICGg9qQguz23AmdkWdbwgyLtBmbNtgtnNETv3NDDZJjZV6/bb3drK67N3U498vPURtDJAiC++JN9LpEJ3wm7WSexxq6KZx322Vdu/ivRN9LkF8f2iXgpMh297qX8a0Gzwqo32rwrID6rQbPCqjfavCsgPqgwfgzDZ4VYBTt411CO/HxpoFEztcQnJuZ+6fti5FLeCKUKBHFvq7Zg7DtUaFIU35ooZpECb84C1yBVcx3K0Gl4i11VP2HfvH9V9A/JkiqL/n0P69U300EZUAiAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TtSJVh3YQcchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrAlA1y0jFY2I2tyoGXtEDP0IYQFRipp5IL2bgOb7u4ePrXZRneZ/7c/QreZMBPpF4jumGRbxBPLNp6Zz3icOsJCnE58TjBl2Q+JHrsstvnIsOCzwzbGRS88RhYrHYwXIHs5KhEk8TRxRVo3wh67LCeYuzWqmx1j35C4N5bSXNdZojiGMJCSQhQkYNZVRgIUqrRoqJFO3HPPzDjj9JLplcZTByLKAKFZLjB/+D392ahalJNykYA7pfbPtjFAjsAs26bX8f23bzBPA/A1da219tALOfpNfbWuQIGNwGLq7bmrwHXO4AQ0+6ZEiO5KcpFArA+xl9Uw4I3QJ9a25vrX2cPgAZ6mr5Bjg4BMaKlL3u8e7ezt7+PdPq7wdjVXKhcd841QAAECJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQxMzE0OEY4QTJFMTFFNUFDRUZBRThEREI3MzUxOEQiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2FlZGU2NmItYjcxMS00ZDVjLWEzYWMtODBlNmU5NTk0NzIxIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjZjYTllYWItMDAwYy00ZjYwLTg0ZDgtMTRmZjA3NTFhOGNkIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTU5MTIxMTk1MzA4Njg0MSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjE4IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNWM5MGQ1Zi00ODE2LTQ2NDktODFmMS1jMTE1YjVjNTYxZWMiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjAtMDYtMDNUMTU6MTk6MTMiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wTU06RGVyaXZlZEZyb20KICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg1MTFBQUIyRUVCMTFFNThFRjNDM0U3MjA4RDBGMkIiCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NTExQUFBMkVFQjExRTU4RUYzQzNFNzIwOEQwRjJCIi8+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5y7eKeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYDExMN3cqJfAAAAwBJREFUaN7tmd9uG3UQhb8zu21AVmpLqAk33PAEtM0FSERWKtqKJ0YFYWQoNyhpn4G70j9q1UQ1pt45XOympNANXeOsqLRzZckr7/ebOTNndq3Prt/gfx/B+xAD5UA5UA6UA+VAOVC+v5Rl2xez72fj8RUJbEmAbepPGwlDQpGQFWVBPnqxuHMw7ZDL2fzeZPIGIqANIkLKFAlhlwXg2NkefTv/uUMuJ6MtkcDD54uvv5pedEHv/jDf2R5ZXB1tddOliWcnf/SACNw5mD5brAQoO3fPzemXvfXHzf3Pax10oxSru7OfeqP8bjY3mdGxx3G5My4fHP1CRn0W28ja7PAyKEk5LMLuOi8FrNxQJc0Uik3ykQgTSDKG6Erp+lu5uUxg5GpjlLUCnZAWFmqVZXvFZVAIMFYKUECxwVxaoeZGTb6CqlMuZYHrSqOsa73apCKFSKupW63Itly268xGpyUP/Uurres/Io1V46XlouskUmLcHM+1Ir3ZVUcQKeEwFSHLnXs8sBWQgFQY3OIN60XV3Key0LkJOK+IT14ub+3v9zPVZ/N7k1EhOnoP5KPjl715z8OT35G7b8GOy3GpN8otud7C1tFljw8NkbTur3Ge9fQYciWKXKN7fMb87x8diqxPVUHBCqI2XqXrPUFpVFjIWSn2buz98zfvHx1yulzIXNtrrklKJagzZYb/yvT1t91yXdMJU4niLFPhJFpLeF73KC6g7q4gpb/PxyrSZBtmay4rsTrj/Q8OD7EJQZqQ0wr51bW9LzpmsqgL7HizvCqUckv/tFIWUJyp+GsB/cdoVU5z9u66XK6WvfX4KivbanHgsr3BY2cy6Y1yd/uKUKOHd6SUDJ58uPXN7MdfHz9duSgj7CrFpjpKplLIVaBPd69ORpfM6Zr5jpRPTpYfjS6H8uPxB7vjT2hmYdsysOZCVLh6bTdmJZePj5cdJtGt6f7TFwsT1OubYZNvXwCK2gLqRwtCLn87Xtw+ePsbAA3/8A2UA+VAOVAOlAPlQHmh8ScfjzuKVYjyJQAAAABJRU5ErkJggg==) no-repeat scroll 0px center}#btnEntrar{background:#636566}#kc-pje-office{background:#636566 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAIAAADW7/fEAAANR3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZlJcjM5DoX3PEUfgfNwHI4RdYM+fn8gU7Yky/ZvVy16UVZIKWcyQQAPw0NKzf/+tdR/+AvGeeVDyrHEqPnzxRdb+ZL1+Sv702i/P/efS9c183heudtNllNOVp5/U73WV86H9xtuy017PK/ydcXmS5B5E3w0kJ3l+7hXkvP2nDf+ElTm+RJLTveqtktQvxZuVa63f1PrHOR/9XAi4aUR2MhZO51xen/mo4E778o77k+U4mrgu3FF7cNNGA55MO921PreQQ9OXu0y7dn7b9+enG/rdd49+TLeBMXXF0x4Ou/etrEP4XB9U5x+uDCSsR/Mud5rjbzWPNZVH/FovCJqO9vcxLAQi73bt0VeiXfge9qvwivrqjuQD91149VNMRYnL2W8GaaaZeY+dtNR0dtpE0dru3X7XHbJFtud4OTlZZZNrrjhMlh2O5VznLZvupi9b9n7dZPZeRiWWoMwwy2fvtRXF3/yUmt1cZHR+fJTE4CtOBw1BDn5ZBWAmHXhFraDb68Lfn0XP4QqCIbt5oyBVbcjogXzHltu4+xYFzieFDIqjUsALmLvgDLGgYCORL+JRidrkzH4MQNQRXPrvG0gYEKwAyWtdy5alWy2sjf3JLPX2mCjldPUJoAIZFYCm+IqYHkfiJ/kMzFUgws+hBBDClmFEmp00ccQY0xRilxNLvkUUkwp5VRSzS77HHLMKedcci22OGpgKLGkkksptVpV2agiq7K+cqbZ5ppvocWWWm6l1U74dN9Djz313Euvww43KBMjjjTyKKNOoyaVYvoZZpxp5llmXcTacsuvsOJKK6+y6htq5krb59cPUDMXanYjJevSG2qcVSndRBgpJ0EwAzHrDYgnQYCAtoKZzsZ7K8gJZrpYkiJYlAyCjRpGEANCP40Ny7xh947cH+GmQv4j3Ox3yCmB7p9ATgHdR9xeoDakz/WN2MlC8al2ZN9yOCKraktGcb5WaW6/Pqq/K+BfQf83ghb51GlzutMPjbEj1kj6aj1HWi2kUuIcevbVXOw9huKnSq51WZLSCnWRJ6YFr5c3uXqy30zp3oTkiM1AQuwswY01VuipmLgQPZbVIaqIQAKS9TbVQg81lTxMfbhJuzN9VpfKtK2NsrxfRs/qm+RiSdPnTF6EXFL2KuiRA+nDrWUOUhj1ColR2po52sH/0oRI6m2arVm72VCtTY8p2TcK1lhLSX81se7l2TSb1jLBp9WpKdPGhbsyXpH2N4rbqyrV5IMwJdJ+JUwg6TPXVZwDEUXbNy4t2EWoTThL7EWW9hDMNurJTu4/dj5Zqbb8m6GXYiy+FBPI7lXT+qac1JSt3qWcutPO7hvv1MO5R8FLva9AUJ+h8FO/qVeO+43f1JPjfI8R3caPdVNfg/qFbqnNlfUiMWqYLalKD5gFClmDDSSERLqnM9hmrS9ldBh2M7ZDH/2cjgtQxyrcMrSOSmYe3FVJ3bVUakyjttnHivSWRSLblUjIOusYUDu3UhqpjdTnmC4sXcU2g/rd8XU0xeo0Y6B1rRlTCbQlx/4t9wPsqQq1rBzDghVQXkhnZirXY4sJ9o1E32QWQR7DDF3JIMkH44MMT6+PaZRMoCTxxWxmulgqCvZmVcNFlKHMODRGCGV2b3uaUhuwBhuhP476YPpycxWUM3Ti1L0Q80ZdMTOP5KoKY3phB5AHunRDCt0Uz0aTO3SxZjNqgRlZP0xYXgyxeezauQvilVJJrQryUzjD+wotH1fkpL2AJGAJ1bcsiY2qJTZ8xHFpzV19d9K2NXbELtPqhxVrncuSh03i7LUs9WHpC0mPW72WpV4v/rle6pOlP9ZLfbX4J3qpL5f+QC+lv138Z3qpl0HxC73Umi0SipDFafVwK7hCwdKjhu7CNNnXBjUcMNFBPs9gSR9bk3bWpNKpSrvSd6tehfst2kMTUaiCVnTlvcmaDLBxkVcRqt0tbZzBLAwFMSZRqyurkOHs5IWHJApimCk7iLFkN1w8ocxyrk+ZjmdwjPXMfr1SNfmXmi0sRaeetorFjChUhmTfJbU66ysVLjC0Z2E1YZLAplP4IfRtZ2FjNpTIhn5b0vtWixgl66ZJH45udib+xuTQfI4sZUIcoFH2dZU/vfHbYx82iGRKRKyKIGjTUcV6Bj+QjXpSY4cBPOZdJ5U80S/m7l8UKCr6GjLh7EYljzW2OerYI1OxfNPPR7NixAKsmDig33FEPR6Wq9f3f3o0Mv44UUND607IbterR99v17dJH6AV04I2mBeUgHbA3FCaO3zEHvWpQZoIcfRyj1OI1aZLo+NXa8oWOuj1dZIXneigBR1+VPUKeVdoienBvt6CRzUL5x7Z/Ruurb4n422YNGksCx7rdGsuoxKZzs49Y3YqI6SqzOoMuzS8NDbzGOTF9gfdaJZKti5SAGqSIllpW3TbNleX9vdBoZ6jIswV6MuBJjjd6vgAfT6JMwsJD+04Xf1Bh2ZSwJ1iSA61U5FOJWJsJQ+9MWR3k0dj+6T3bkS3xsw7NnyypClbZuhHC1WmB02zh2KDFzQIMFfA7jqa7iWuqCblJEf6ND7RlCpjVhlwnBRp7nihGJTAbRCO5BdCRpWho/qSO8wOnsRgQ5SoypCRk8kbYgm3jHI3ymfnvCifDpvyud3ZrbkoX0qHjtriThzBTfZAxaSySSYR7fOpzG4L6LtwP12+LkqSSBzNTRaNvshiazeGbbw42G/P5nxE5DBuDFvXi2HH1i56LCxNVCWYhkXq2iaSZuz6dpHq+XCZcpSk2uV+ccjLIZc7ZHg47pAZ4N4hMjwcl8jwYPfwcDyCVhitPrXafe0zMeoIOV5Rb265nCLP1MfVq16h8wZOe9xIPe8U/sQv7fjl3i3q2S+h7Ie3Q5i2N3DgRT0hrX3KY3h5IoQgq7MbvMPcKrbebhMk1Lni2rHKpfyk27EP9Z/MLLXCWatxFcrfUpA2OeURXTWl5GZ6TE7By2lOIbz1mhHJLzumNdL0XZl66BTo0IYZnO1yick6JoxiivZGOz5D9GokMgvxp8/a5M1VwYMAwNizuYZ49OugVd9F7WwWQi+9NZGsYWYqeJS2EVdDGvUt7eqkdqkcqe5KKR2jzT3vSEXbQMgjvkCBtGF2OmaSZxtmAmI+dTKcOqled89TJzeO1z0A8n7XdQuF+dzELQpKUDN9KzGbfd0cd9MFS0Zldzyq2633WHwkzQfTMV9mHuqVJJguVZ7WxDM+PPQnaFDViZl0GqnklvmIOaUqRGLDyKvXVmJ2hH5zqFc6k2OUZzlMSa3GzaMWsRFoAkx3sQgpMzXN2gAeZzsXl2NiGp0wrqHRVZNEJB8QLMom3pK0EXSCO4nq886DuDNKCpE+Q82+fq5ybcl/P57/1fOM7fu1R7nfYgdCPLXFI2z4vjEtVlo8CdjVrtV/62GGzIW5qW+Io4bQ99UPebc2xNPQabdtR3RsYdlIzFFqpYsaTd0w8rw7tkEXRHqsBgIMWS4mBHH6/hGs718rHWKenqaoXz6G8o576N2O4iC8AEFJYJ07+4WLkQiu0dLdyi4mau3OTTFRpxOcMJlgP2Seeky9LzKvJhfrc6q+r1cPRPdnaWfcMrb5Sfq5rnSrtYeYYnF+JT2jkx+GPAyhDwgMQUOEy2MOGqrJVVYCiavBZzgrVbx0/FLhR01H2kmxqTs8QggyyeD7uJ+zetTtu+P6mM4jJ3launsN0Uh0UdVDInNV0ogOnVuKMDy5BBloNqI/zSehIqIKlxb526tkDeq2U/SYDLx8NVZJeO7INwUciV2qC3E8taUcTxNWYEX0UsHJYfqbbLUz4Zzcqc1pJecNBWZvty9cGwoAtw3JH7sT4n5PIX/vu6prWwLucYe9wRryhFiiB25MsdnDLWOB/E5VT1t37oSyoqmto2rXf+ba8Eo89ejZ/gc7X7n1tVfVvVvf7Pto3WvbLsvYaKjLsju7hGdsyyTDLsuEjn6w7d6ypV64+FcYqkcQf4+hegTx9xiqRxB/j6H6PDVeYGjlFAWcvd2TbaqlexCF+91h2OBCcKdJQaB8pVwhcdKXgT6OSa01if2Y6sZgOipjMcuhSQrMNkGo8zO8gbElyw/b8FoKlDOdqdK7kOSXRWIEGqd2fzCjyqOVTx8ktNkzHQ4CcmZvebrMagYjmzaLslotSuXuqYMZPEj1sa6P+s2gy1jXGfhsE0zdCqWoFvTC1FHxJ3PrpiMuwXdjKKE5Brg1ZSqH+eAdHBtr3mPOgG6ePICGg9qQguz23AmdkWdbwgyLtBmbNtgtnNETv3NDDZJjZV6/bb3drK67N3U498vPURtDJAiC++JN9LpEJ3wm7WSexxq6KZx322Vdu/ivRN9LkF8f2iXgpMh297qX8a0Gzwqo32rwrID6rQbPCqjfavCsgPqgwfgzDZ4VYBTt411CO/HxpoFEztcQnJuZ+6fti5FLeCKUKBHFvq7Zg7DtUaFIU35ooZpECb84C1yBVcx3K0Gl4i11VP2HfvH9V9A/JkiqL/n0P69U300EZUAiAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AcxV9TtSJVh3YQcchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5Oik6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrAlA1y0jFY2I2tyoGXtEDP0IYQFRipp5IL2bgOb7u4ePrXZRneZ/7c/QreZMBPpF4jumGRbxBPLNp6Zz3icOsJCnE58TjBl2Q+JHrsstvnIsOCzwzbGRS88RhYrHYwXIHs5KhEk8TRxRVo3wh67LCeYuzWqmx1j35C4N5bSXNdZojiGMJCSQhQkYNZVRgIUqrRoqJFO3HPPzDjj9JLplcZTByLKAKFZLjB/+D392ahalJNykYA7pfbPtjFAjsAs26bX8f23bzBPA/A1da219tALOfpNfbWuQIGNwGLq7bmrwHXO4AQ0+6ZEiO5KcpFArA+xl9Uw4I3QJ9a25vrX2cPgAZ6mr5Bjg4BMaKlL3u8e7ezt7+PdPq7wdjVXKhcd841QAAECJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQxMzE0OEY4QTJFMTFFNUFDRUZBRThEREI3MzUxOEQiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N2FlZGU2NmItYjcxMS00ZDVjLWEzYWMtODBlNmU5NTk0NzIxIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjZjYTllYWItMDAwYy00ZjYwLTg0ZDgtMTRmZjA3NTFhOGNkIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTU5MTIxMTk1MzA4Njg0MSIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjE4IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8aXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvbkNyZWF0ZWQ+CiAgIDxpcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpMb2NhdGlvblNob3duPgogICA8aXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpBcnR3b3JrT3JPYmplY3Q+CiAgIDxpcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgICA8cmRmOkJhZy8+CiAgIDwvaXB0Y0V4dDpSZWdpc3RyeUlkPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNWM5MGQ1Zi00ODE2LTQ2NDktODFmMS1jMTE1YjVjNTYxZWMiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjAtMDYtMDNUMTU6MTk6MTMiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogICA8eG1wTU06RGVyaXZlZEZyb20KICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg1MTFBQUIyRUVCMTFFNThFRjNDM0U3MjA4RDBGMkIiCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NTExQUFBMkVFQjExRTU4RUYzQzNFNzIwOEQwRjJCIi8+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5y7eKeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AYDExMN3cqJfAAAAwBJREFUaN7tmd9uG3UQhb8zu21AVmpLqAk33PAEtM0FSERWKtqKJ0YFYWQoNyhpn4G70j9q1UQ1pt45XOympNANXeOsqLRzZckr7/ebOTNndq3Prt/gfx/B+xAD5UA5UA6UA+VAOVC+v5Rl2xez72fj8RUJbEmAbepPGwlDQpGQFWVBPnqxuHMw7ZDL2fzeZPIGIqANIkLKFAlhlwXg2NkefTv/uUMuJ6MtkcDD54uvv5pedEHv/jDf2R5ZXB1tddOliWcnf/SACNw5mD5brAQoO3fPzemXvfXHzf3Pax10oxSru7OfeqP8bjY3mdGxx3G5My4fHP1CRn0W28ja7PAyKEk5LMLuOi8FrNxQJc0Uik3ykQgTSDKG6Erp+lu5uUxg5GpjlLUCnZAWFmqVZXvFZVAIMFYKUECxwVxaoeZGTb6CqlMuZYHrSqOsa73apCKFSKupW63Itly268xGpyUP/Uurres/Io1V46XlouskUmLcHM+1Ir3ZVUcQKeEwFSHLnXs8sBWQgFQY3OIN60XV3Key0LkJOK+IT14ub+3v9zPVZ/N7k1EhOnoP5KPjl715z8OT35G7b8GOy3GpN8otud7C1tFljw8NkbTur3Ge9fQYciWKXKN7fMb87x8diqxPVUHBCqI2XqXrPUFpVFjIWSn2buz98zfvHx1yulzIXNtrrklKJagzZYb/yvT1t91yXdMJU4niLFPhJFpLeF73KC6g7q4gpb/PxyrSZBtmay4rsTrj/Q8OD7EJQZqQ0wr51bW9LzpmsqgL7HizvCqUckv/tFIWUJyp+GsB/cdoVU5z9u66XK6WvfX4KivbanHgsr3BY2cy6Y1yd/uKUKOHd6SUDJ58uPXN7MdfHz9duSgj7CrFpjpKplLIVaBPd69ORpfM6Zr5jpRPTpYfjS6H8uPxB7vjT2hmYdsysOZCVLh6bTdmJZePj5cdJtGt6f7TFwsT1OubYZNvXwCK2gLqRwtCLn87Xtw+ePsbAA3/8A2UA+VAOVAOlAPlQHmh8ScfjzuKVYjyJQAAAABJRU5ErkJggg==) no-repeat scroll 0px center}#kc-login{background:#636566}", qu = ".sideBarDefault,.sideBarMin,#divSideBar{width:950px;display:inline-block;position:absolute;max-height:520px;bottom:0;height:46px;left:1px}nav.main-menu{height:unset;border-right:unset;border-radius:12px}.ui-datalist .ui-datalist-data>li{padding-left:30px}.rightPanelDefault,.rightPanelFull,#divRightPanel{width:100%!important}div#divProcessosTarefa.rightPanel{width:100%;min-width:250px;max-width:330px;position:absolute;left:-280px;transition:left 1s,border-right-width 1s,border-top-right-radius 1s;border-right-color:#a9a9a9;border-right-width:30px;border-right-style:groove;border-top-right-radius:80px}div#divProcessosTarefa.rightPanel:hover,div#divProcessosTarefa.rightPanel:focus,div#divProcessosTarefa.rightPanel:active{left:0;border-right-width:0;border-top-right-radius:0}div.rightPanelDefault #divMainPanel.mainPanel{width:100%!important;min-width:1140px!important;max-width:1250px!important}@media screen and (min-width: 1595px){div.rightPanelDefault #divProcessosTarefa.rightPanel{left:0!important;transition-duration:1s;border-right-width:0;border-top-right-radius:0}div.rightPanelDefault #divMainPanel.mainPanel{padding-left:335px!important;min-width:unset!important;max-width:unset!important}}", Ir = "#frameTarefas>div div.col-md-5 div.dropdown:nth-child(3) ul{left:-570px;height:500px;width:680px}div>div.col-md-5.btn-toolbar.pb-5.toolbar-processo>div.dropdown.pull-right.open>ul>li>pje-selecionar-etiquetas>div{height:500px;width:680px;box-shadow:1px 2px 2px 2px #ecab6047;border-radius:5px}#conteudoTarefa #pesquisar-etiquetas{box-sizing:border-box;width:51%;float:right;display:block}#conteudoTarefa .table-etiquetas{box-sizing:border-box;cursor:pointer;width:51%;float:right;display:block}#pje-mais-r-divEtiquetaFavorita{height:auto;width:48%;overflow:hidden;align-items:center;text-align:center;border-radius:5px;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;line-height:1.42857143;color:#333;font-family:sans-serif,Open Sans regular,Arial,Verdana!important;font-size:13px;list-style:none;box-sizing:border-box;min-height:1px;position:relative;display:table;border-collapse:separate;float:none;padding:2px}", yr = `#pje-mais-r-tabelaEtiquetasMaisUsadas{border-right:solid;border-color:#1a7aa7;border-collapse:collapse;width:100%;height:100%;overflow:auto;flex-wrap:wrap;cursor:pointer;padding:5px;margin-left:0%;display:block}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n){background-color:#ebf0f3}#pje-mais-r-tabelaEtiquetasMaisUsadas tbody tr:nth-child(2n):hover td:nth-child(2){background-color:#abdae2}#pje-mais-r-tabelaEtiquetasMaisUsadas td{padding:4px;border:1px #ccc solid}#avj-menu-tabela tr:hover td:nth-child(2),#pje-mais-r-tabelaEtiquetasMaisUsadas tr:hover td:nth-child(2){background-color:#abdae2}#pje-mais-r-b{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e")}#pje-mais-r-icone-robo{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e")}#pje-mais-r-icone-robo:hover{scale:125%}div.anexos a[name^=divTimeLine]:hover{background:#dfe6e6}#pje-mais-r-icone{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e")}#pje-mais-r-youtube{background-image:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='currentColor'%20d='M22.75%204.9q-.6-.6-1.35-.8-1.2-.3-5.4-.45-1.3%200-2.8-.05H12q-1.85%200-4%20.05-4.2.15-5.35.45-.8.2-1.35.8-.6.55-.8%201.35Q.2%207.4.05%209.85%200%2011.05%200%2012.05v.65q.05.8.05%201.55.15%202.45.45%203.6.2.8.8%201.35.55.55%201.35.75%201.15.3%205.35.45%202.15.05%204%20.05h1.2q1.5%200%202.8-.05%204.2-.15%205.4-.45.75-.2%201.35-.75.55-.55.75-1.35.3-1.15.45-3.6.05-.75.05-1.55v-.65q0-1-.05-2.2-.15-2.45-.45-3.6-.2-.8-.75-1.35M9.55%208.5l6.25%203.55-6.25%203.55V8.5Z'/%3e%3c/svg%3e");display:flex;float:right}#pje-mais-r-menu-hanburgue-opcoes{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1.42857143;font-family:Open Sans regular,Arial,Verdana,sans-serif;color:#454545;box-sizing:border-box;position:absolute;top:100%;z-index:1000;float:left;min-width:160px;padding:5px 0;margin:0;font-size:14px;text-align:left;list-style:none;background-color:#02638d;background-clip:padding-box;border-radius:0 0 4px 4px;box-shadow:0 6px 12px #0000002d;border:0;transform-origin:top;animation-fill-mode:forwards;transition:all .2s linear;opacity:1;visibility:visible;transform:scale(1);display:table;width:100%;left:0;right:0}#pje-mais-r-menu-hanburgue-opcoes li{margin:0 10px}#pje-mais-r-menu-hanburgue-opcoes a{text-decoration:none;color:#fff;font-weight:700;padding:5px;border-radius:5px;transition:background-color .3s}#pje-mais-r-menu-hanburgue-opcoes a:hover{background-color:#c5ece1;color:#000}`, dn = `.fa-sticky-note{background:#b32006!important;color:#f57f17!important}.fa-sticky-note:hover{transform:scale(125%)}.lembrete{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;list-style-type:none;font:inherit;text-align:center;white-space:nowrap;cursor:pointer;user-select:none;text-transform:uppercase;background:#f57f17!important;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;font-size:1.33333em;line-height:.75em;vertical-align:-.0667em;font-family:"Font Awesome 5 Free";font-weight:900;box-sizing:border-box;width:18px;height:18px;top:20px;padding:5px}[title-pje-mais-r]{position:relative}[title-pje-mais-r]:hover:before{animation:aparecer .1s ease-out 0s 1 both;border-radius:10px;content:attr(title-pje-mais-r);background:url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20stroke='none'%20d='M%203.5%2020.5%20Q%204.05%2019.95%204.05%2019.2%20L%204.05%2018.8%201.95%2018.8%201.95%2021.05%202.2%2021.05%20Q%202.95%2021.05%203.5%2020.5%20M%2014.55%203%20Q%2013.7%203%2013.05%203.65%2012.45%204.25%2012.45%205.1%20L%2012.45%2014.55%20Q%2012.45%2015.35%2012.05%2015.8%2011.65%2016.4%2010.8%2016.4%2010.2%2016.4%209.8%2016.75%209.4%2017.15%209.3%2017.7%209.3%2017.9%209.4%2018.05%209.5%2018.2%209.7%2018.25%2010.25%2018.4%2010.8%2018.4%2012.75%2018.4%2013.7%2017.2%2014.5%2016.25%2014.55%2014.75%20L%2014.55%203%20M%2011.35%2011.6%20Q%2011.35%209.85%2010.35%208.7%209.25%207.35%207.2%207.35%20L%202.8%207.35%20Q%202.45%207.35%202.2%207.6%201.95%207.85%201.95%208.15%20L%201.95%2010.8%204.05%2010.8%204.05%209.45%207.1%209.45%20Q%208.05%209.45%208.55%2010.15%209%2010.75%209%2011.6%209%2012.5%208.55%2013.1%208.05%2013.75%207.1%2013.75%20L%207%2013.75%207%2015.85%207.2%2015.85%20Q%209.25%2015.85%2010.35%2014.55%2011.35%2013.35%2011.35%2011.6%20Z'/%3e%3cpath%20fill='%23E9571E'%20d='M%204.85%2016.65%20L%204.85%2018.15%207.15%2020.45%20Q%207.5%2020.75%207.9%2020.9%208.25%2021.05%208.65%2021.05%208.95%2021.05%209.2%2021%209.7%2020.85%2010.1%2020.45%20L%2010.15%2020.45%206.35%2016.65%204.85%2016.65%20M%2023.35%2014.9%20Q%2024.05%2014.85%2024.05%2014.15%2024.05%2012.3%2022.85%2011.15%2021.7%2010.05%2019.95%2010.05%2018.2%2010.05%2017%2011.15%2015.75%2012.35%2015.75%2014.2%2015.75%2016.05%2016.95%2017.25%2018.15%2018.4%2019.95%2018.4%2021.6%2018.4%2022.8%2017.45%20L%2023%2017.3%20Q%2023.2%2017%2023.15%2016.65%2023.1%2016.25%2022.8%2016.05%2022.6%2015.85%2022.3%2015.85%2022.05%2015.85%2021.85%2016.05%2021.05%2016.6%2020.05%2016.6%2019.15%2016.6%2018.6%2016.15%2018%2015.75%2017.8%2014.9%20L%2023.35%2014.9%20M%2021.4%2012.25%20Q%2021.95%2012.7%2022.05%2013.5%20L%2017.8%2013.5%20Q%2018.15%2011.8%2019.95%2011.8%2020.85%2011.8%2021.4%2012.25%20Z'/%3e%3cpath%20fill='%231EB0E9'%20d='M%204.05%2011.85%20L%201.95%2011.85%201.95%2013.75%200.05%2013.75%200.05%2015.85%201.95%2015.85%201.95%2017.8%204.05%2017.8%204.05%2015.85%206%2015.85%206%2013.75%204.05%2013.75%204.05%2011.85%20Z'/%3e%3c/svg%3e") no-repeat right bottom;background-size:35px 25px;background-color:#ebf0f3;color:#000;border-style:groove;border-color:#09c7bd;top:70px;left:calc(50% - 15vw);display:flex;overflow:hidden;font-size:16px;font-weight:300;padding:10px;position:absolute;text-align:left;text-transform:none;white-space:pre-line;z-index:10009;width:450px;height:auto}`, xr = ".pmr-datasProcesso{display:inline-grid;vertical-align:middle}i[pmr-proc-data-mov],i[pmr-proc-data-task]{margin-right:3px;font-size:90%}.flag-decurso-tempo-tarefa-verde{background:#aff1af;color:#000;font-weight:700;border-radius:.25em;padding-left:3px;padding-right:3px}.flag-decurso-tempo-tarefa-amarelo{background:#fff38a;color:#000;font-weight:700;border-radius:.25em;padding-left:3px;padding-right:3px}.flag-decurso-tempo-tarefa-vermelho{background:#a94442;color:#fff;font-weight:700;border-radius:.25em;padding-left:3px;padding-right:3px}i.i-animacao{font-size:.1em;opacity:0;transition:font-size .15s ease-in-out,opacity .15s ease-in-out}i.i-animacao-in{font-size:1em;opacity:1;transition:font-size .35s ease-in-out,opacity .35s ease-in-out}i.i-animacao-out{font-size:.1em;opacity:0}div>.tarefa-numero-processo[pmr-np-destaque]{font-size:18px!important}div>.tarefa-numero-processo[pmr-np-destaque] i[pmr-np-copiar]{font-size:14px}i[pmr-np-copiar]{cursor:copy;color:#ff8b22;padding-left:5px}processo-datalist-card .label.label-info.label-etiqueta[pmr-cor-padrao-etiqueta]:not([style]){color:#000;background:#f6d290;border-radius:.25em}div[pmr-e-prioridade]{background:linear-gradient(45deg,#a9444229,#fff)}div[pmr-e-prioridade] i.fa.fa-exclamation-triangle,div[pmr-destaque-selecionado] i.fa.fa-exclamation-triangle{color:#f7c600;text-shadow:-3.3px 2px 0 black,1px 2px 0 black,-1px -2.1px 0 black,2.9px 2px 0 black,-.2px -3.5px 0 black}i[pmr-e-prioridade]{color:#a94442}i[pmr-recolhedor-cartao]{position:absolute;bottom:0;right:0;cursor:pointer;color:#ff8b22;font-size:14px;border-radius:50%;padding:2px;border:solid 1px}processo-datalist-card i.fa-chevron-up[pmr-esta-recolhido]{transform:rotate(180deg);transition:transform .5s ease-in-out}processo-datalist-card i.fa-chevron-up:not([pmr-esta-recolhido]){transform:rotate(0);transition:transform .5s ease-in-out}processo-datalist-card i.i-animacao-in{font-size:14px}div.datalist-content.selecionado[pmr-destaque-selecionado]{background:#f3ffee;border-left:3px solid #48ce35}div.datalist-content.selecionado[pmr-destaque-selecionado]:hover{background:#e3f4dc;border-left:3px solid #48ce35}div.datalist-content.selecionado .tarefa-numero-processo[pmr-destaque-selecionado]{color:#227b15}.tarefa-numero-processo.text-danger{font-size:14px!important}", wr = "[pmr-mapa-calor-montador-container]{display:block!important}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-montado]{transition:background-blend-mode .5s ease;background-size:contain;background-blend-mode:overlay}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-montado]:hover{background-blend-mode:screen!important}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-montado] a:hover{background:transparent!important}div.menuItem[pmr-mapadecalornopainelusuario][pmr-mc-barra-minima]{background-repeat:no-repeat;background-position:center bottom;background-size:100% 4px}div[pmr-mapa-calor-montador-container]{position:relative;margin-top:20px;padding-bottom:80px;z-index:2000}@media (min-width: 992px){div[pmr-mapa-calor-montador-container]{position:absolute;bottom:0;padding-bottom:25px;z-index:2000}}[pmr-mapa-calor-montador-container] button{top:12px;height:35px}[pmr-mapa-calor-montador-container] button:first-child{padding-left:8px;padding-right:8px}[pmr-mapa-calor-montador-container] button.btn-primary{background-color:#ff912c!important;font-weight:700;color:#fff}[pmr-mapa-calor-montador-container] button.btn-secondary[pmr-mc-but-on]{background:#ffdfc2!important}[pmr-mapa-calor-montador-container] svg{height:100%}[pmr-mapa-calor-montador-container][pmr-mc-montado=false] button[pmr-mc-but-off],[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button[pmr-mc-but-on]{display:none}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button[pmr-mc-but-off]{border-color:#ff912c;margin-left:unset}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button:first-child,[pmr-mapa-calor-montador-container] button.pmr-outline{border-color:#ff912c}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] [pmr-mc-info-sem-suporte]{display:unset}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] [pmr-mc-info-sem-suporte]{display:flex}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] #pmr-info-sem-suporte{display:flex!important}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] #pmr-mc-info-text [prm-info-ultimo-mov],[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] button[pmr-mc-but-off]{display:none}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando][pmr-executando] button[pmr-mc-but-off]{display:unset}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] button[pmr-mc-but-on],[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando] button[pmr-mc-but-atualiz]{display:none}[pmr-mapa-calor-montador-container][pmr-mc-montado=requisitando-e-processando]:not([pmr-executando]) button[pmr-mc-but-desbloq]{display:unset!important}[pmr-mapa-calor-montador-container][pmr-mc-montado=true] button[pmr-mc-but-atualiz]{display:unset!important}#pmr-info-sem-suporte{margin-top:5px;background-color:#f0f0f0;border-radius:5px;padding:2px 15px}[pmr-mapa-calor-montador-container] .ui-progressbar-value-animate{background:#ff912c!important}[pmr-mapa-calor-montador-container] .pmr-icon-button{cursor:pointer;transition:all .5s}[pmr-mapa-calor-montador-container] .pmr-icon-button i{padding-right:0;transition:all .5s}[pmr-mapa-calor-montador-container] .pmr-icon-button .button-text{position:absolute;transition:left .3s}[pmr-mapa-calor-montador-container] .pmr-icon-button .button-text{opacity:0;transition:opacity .6s ease}[pmr-mapa-calor-montador-container] .pmr-icon-button:hover .button-text{opacity:1}[pmr-mapa-calor-montador-container] .pmr-icon-button:hover i{padding-right:8px}[pmr-mapa-calor-montador-container] .pmr-icon-button[pmr-mc-but-atualiz]:hover{padding-right:85px}[pmr-mapa-calor-montador-container] .pmr-icon-button[pmr-mc-but-desbloq]:hover{padding-right:118px}[pmr-mc-spinner] .loaderWrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;display:block;background:#00000080;cursor:progress}[pmr-mc-spinner] .position{position:relative;top:calc(100vh/3);bottom:0;left:0;right:0;margin:auto}[pmr-mc-spinner] .mat-progress-spinner{display:block;position:relative}[pmr-mc-spinner] .mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}[pmr-mc-spinner] .mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:pmr-mc-mat-progress-spinner-linear-rotate 2s linear infinite}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:pmr-mc-mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}[pmr-mc-spinner] ._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}[pmr-mc-spinner] .mat-progress-spinner circle,[pmr-mc-spinner] .mat-spinner circle{stroke:#ff912c}@keyframes pmr-mc-mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes pmr-mc-mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}to{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes pmr-mc-mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}to{transform:rotate(4680deg)}}";
function Yi(e, t, r) {
  !t || !r || r.match(rr.HREFS.ROOT) && new Be(e, t).definir();
}
class Be {
  static temas = {
    ajustesGerais: po,
    altoContraste: zu,
    escuro: Wu,
    maisEspaco: qu,
    ultimasEtiquetasUsadaTarefa: Ir,
    estilo_geral: yr,
    melhorarCartaoTarefa: xr,
    mapaDeCalorPainelUsuario: wr
  };
  v3 = Ia().manifest_version === 3;
  tabId;
  ativada;
  tema;
  maisEspaco;
  ajustesGerais;
  ultimasEtiquetasUsadaTarefa;
  melhorarCartaoTarefa;
  mapaDeCalorPainelUsuario;
  destacarLembretes;
  constructor(t, r) {
    this.tabId = r;
    const {
      ativada: n,
      tema: o,
      ajustesGerais: a,
      maisEspaco: s,
      ultimasEtiquetasUsadaTarefa: i,
      destacarLembretes: l,
      melhorarCartaoTarefa: d,
      mapaDeCalorPainelUsuario: c
    } = t;
    this.ativada = n, this.ajustesGerais = a, this.tema = o, this.maisEspaco = s, this.ultimasEtiquetasUsadaTarefa = i, this.melhorarCartaoTarefa = d, this.mapaDeCalorPainelUsuario = c, this.destacarLembretes = l;
  }
  injetarCSS() {
    this.tabId && (this.ajustesGerais && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: po
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: po,
      runAt: "document_start"
    })), (this.tema === $e.ESCURO || this.tema === $e.ALTO_CONTRASTE) && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[this.tema]
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[this.tema],
      runAt: "document_start"
    })), this.maisEspaco && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[$e.MAIS_ESPACO]
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[$e.MAIS_ESPACO],
      runAt: "document_start"
    })), this.ultimasEtiquetasUsadaTarefa && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Ir
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: Ir,
      runAt: "document_start"
    })), this.melhorarCartaoTarefa && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: xr
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: xr,
      runAt: "document_start"
    })), this.mapaDeCalorPainelUsuario && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: wr
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: wr,
      runAt: "document_start"
    })), this.destacarLembretes && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: dn
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: dn,
      runAt: "document_start"
    })), this.ativada && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: yr
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: yr,
      runAt: "document_start"
    })));
  }
  removerCSS() {
    this.tabId && (this.v3 ? (S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[$e.ESCURO]
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[$e.ALTO_CONTRASTE]
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[$e.MAIS_ESPACO]
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Be.temas[$e.AJUSTES_GERAIS]
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: Ir
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: yr
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: xr
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: wr
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: dn
    })) : (S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[$e.ESCURO]
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[$e.ALTO_CONTRASTE]
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Be.temas[$e.MAIS_ESPACO]
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: Ir
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: yr
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: xr
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: wr
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: dn
    })));
  }
  definir() {
    this.removerCSS(), this.ativada && this.injetarCSS();
  }
}
const Ju = "li.ng-star-inserted>processo-datalist-card:nth-child(1)>div:nth-child(1)>div:nth-child(3)>a:nth-child(1)>span{text-align:right}span.orgao.col-sm-12.no-padding{display:none}span.local.col-sm-12.no-padding{display:none;text-align:right}span.local.col-sm-12.no-padding.ng-star-inserted{display:block;text-align:left}", $u = "li.ng-star-inserted>processo-datalist-card:nth-child(1)>div:nth-child(1)>div:nth-child(3)>a:nth-child(1)>span{text-align:right}span.orgao.col-sm-12.no-padding{float:right;width:162px;font-size:10px;font-family:monospace,monospace;line-height:100%;white-space:pre;overflow:hidden;direction:rtl}span.local.col-sm-12.no-padding{text-align:right}span.local.col-sm-12.no-padding.ng-star-inserted{text-align:left}", Yu = ".row.icones{display:block}span.orgao.col-sm-12.no-padding,span.local.col-sm-12.no-padding{display:none}.datalist-content{position:sticky;flex-flow:column wrap}.datalist-content.selecionado .selecionarProcesso{outline:none}.datalist-content.selecionado>.row.icones{display:block}.datalist-content.selecionado span.orgao.col-sm-12.no-padding,.datalist-content.selecionado span.local.col-sm-12.no-padding{display:block}.ui-paginator-bottom{position:static}", Gu = ".row.icones{display:block}span.orgao.col-sm-12.no-padding,span.local.col-sm-12.no-padding,span.local.col-sm-12.no-padding.ng-star-inserted{display:none}.datalist-content{position:sticky;flex-flow:column wrap}.datalist-content.selecionado .selecionarProcesso{outline:none}.datalist-content.selecionado>.row.icones{display:block}.datalist-content.selecionado span.orgao.col-sm-12.no-padding,.datalist-content.selecionado span.local.col-sm-12.no-padding{display:none}.datalist-content.selecionado span.local.col-sm-12.no-padding.ng-star-inserted{display:block}.ui-paginator-bottom{position:static}";
function Gi(e, t, r) {
  !t || !r || r.match(rr.HREFS.ROOT) && new De(e, t).definir();
}
class De {
  static cartoes = {
    minimo: Ju,
    alternar_linhas: $u,
    cartao_inativo: Yu,
    cartao_inativo_minimo: Gu
  };
  //static vCartoes: Record<string, string> = { alternar_linhas, minimo }
  v3 = Ia().manifest_version === 3;
  tabId;
  ativada;
  inativarCartao;
  cartaoProcesso;
  constructor(t, r) {
    this.tabId = r;
    const { ativada: n, cartaoProcesso: o, inativaCartao: a } = t;
    this.ativada = n, this.cartaoProcesso = o, this.inativarCartao = a;
  }
  injetarCSS() {
    if (this.tabId && ((this.cartaoProcesso === St.ALTERNAR_LINHAS || this.cartaoProcesso === St.MINIMO) && (this.v3 ? S.scripting.insertCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: De.cartoes[this.cartaoProcesso]
    }) : S.tabs.insertCSS(this.tabId, {
      allFrames: !0,
      code: De.cartoes[this.cartaoProcesso],
      runAt: "document_start"
    })), this.inativarCartao)) {
      const t = this.cartaoProcesso !== St.MINIMO ? De.cartoes.cartao_inativo : De.cartoes.cartao_inativo_minimo;
      this.v3 ? S.scripting.insertCSS({
        target: { tabId: this.tabId, allFrames: !0 },
        css: t
      }) : S.tabs.insertCSS(this.tabId, {
        allFrames: !0,
        code: t,
        runAt: "document_start"
      });
    }
  }
  removerCSS() {
    this.tabId && (this.v3 ? (S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: De.cartoes[St.MINIMO]
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: De.cartoes[St.ALTERNAR_LINHAS]
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: De.cartoes.cartao_inativo
    }), S.scripting.removeCSS({
      target: { tabId: this.tabId, allFrames: !0 },
      css: De.cartoes.cartao_inativo_minimo
    })) : (S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: De.cartoes[St.MINIMO]
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: De.cartoes[St.ALTERNAR_LINHAS]
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: De.cartoes.cartao_inativo
    }), S.tabs.removeCSS(this.tabId, {
      allFrames: !0,
      code: De.cartoes.cartao_inativo_minimo
    })));
  }
  definir() {
    this.removerCSS(), this.ativada && this.injetarCSS();
  }
}
function Ku(e) {
  const { manifest_version: t } = Ia(), r = t === 3 ? "action" : "browserAction";
  e ? S[r].setBadgeText({ text: "" }) : (S[r].setBadgeText({ text: "X" }), S[r].setBadgeBackgroundColor({ color: "#B71C1C" }));
}
var Qu = () => `uid::${Pn(7)}`, Ki = (e, t = ["endpointName", "fingerprint"]) => typeof e == "object" && e !== null && t.every((r) => r in e), n1 = (e) => {
  if (!Ki(e))
    throw new TypeError("Invalid connection args");
  return JSON.stringify(e);
}, Xu = (e) => {
  try {
    const t = JSON.parse(e);
    return Ki(t) ? t : null;
  } catch {
    return null;
  }
}, ed = () => {
  let e = [];
  return {
    add: (...t) => {
      e = [...e, ...t];
    },
    remove: (t) => {
      e = typeof t == "string" ? e.filter((r) => r.message.transactionId !== t) : e.filter((r) => !t.includes(r));
    },
    entries: () => e
  };
}, Tr = class {
  static toBackground(e, t) {
    return e.postMessage(t);
  }
  static toExtensionContext(e, t) {
    return e.postMessage(t);
  }
}, td = Object.defineProperty, rd = Object.defineProperties, nd = Object.getOwnPropertyDescriptors, ls = Object.getOwnPropertySymbols, od = Object.prototype.hasOwnProperty, ad = Object.prototype.propertyIsEnumerable, cs = (e, t, r) => t in e ? td(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Pt = (e, t) => {
  for (var r in t || (t = {}))
    od.call(t, r) && cs(e, r, t[r]);
  if (ls)
    for (var r of ls(t))
      ad.call(t, r) && cs(e, r, t[r]);
  return e;
}, xa = (e, t) => rd(e, nd(t)), sd = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/, wa = (e) => {
  const [, t, r, n] = e.match(sd) || [];
  return {
    context: t,
    tabId: +r,
    frameId: n ? +n : void 0
  };
}, In = ({ context: e, tabId: t, frameId: r }) => ["background", "popup", "options"].includes(e) ? e : `${e}@${t}${r ? `.${r}` : ""}`;
const id = [
  {
    property: "name",
    enumerable: !1
  },
  {
    property: "message",
    enumerable: !1
  },
  {
    property: "stack",
    enumerable: !1
  },
  {
    property: "code",
    enumerable: !0
  }
], Uo = Symbol(".toJSON was called"), ld = (e) => {
  e[Uo] = !0;
  const t = e.toJSON();
  return delete e[Uo], t;
}, Qi = ({
  from: e,
  seen: t,
  to_: r,
  forceEnumerable: n,
  maxDepth: o,
  depth: a
}) => {
  const s = r || (Array.isArray(e) ? [] : {});
  if (t.push(e), a >= o)
    return s;
  if (typeof e.toJSON == "function" && e[Uo] !== !0)
    return ld(e);
  for (const [i, l] of Object.entries(e)) {
    if (typeof Buffer == "function" && Buffer.isBuffer(l)) {
      s[i] = "[object Buffer]";
      continue;
    }
    if (l !== null && typeof l == "object" && typeof l.pipe == "function") {
      s[i] = "[object Stream]";
      continue;
    }
    if (typeof l != "function") {
      if (!l || typeof l != "object") {
        s[i] = l;
        continue;
      }
      if (!t.includes(e[i])) {
        a++, s[i] = Qi({
          from: e[i],
          seen: [...t],
          forceEnumerable: n,
          maxDepth: o,
          depth: a
        });
        continue;
      }
      s[i] = "[Circular]";
    }
  }
  for (const { property: i, enumerable: l } of id)
    typeof e[i] == "string" && Object.defineProperty(s, i, {
      value: e[i],
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  return s;
};
function cd(e, t = {}) {
  const { maxDepth: r = Number.POSITIVE_INFINITY } = t;
  return typeof e == "object" && e !== null ? Qi({
    from: e,
    seen: [],
    forceEnumerable: !0,
    maxDepth: r,
    depth: 0
  }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e;
}
let Xi = () => ({
  events: {},
  emit(e, ...t) {
    (this.events[e] || []).forEach((r) => r(...t));
  },
  on(e, t) {
    return (this.events[e] = this.events[e] || []).push(t), () => this.events[e] = (this.events[e] || []).filter((r) => r !== t);
  }
});
var ud = (e, t, r) => {
  const n = Pn(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), s = (i) => {
    if (i.destination.context === e && !i.destination.frameId && !i.destination.tabId) {
      r?.(i);
      const { transactionId: l, messageID: d, messageType: c } = i, g = () => {
        const C = o.get(l);
        if (C) {
          const { err: m, data: u } = i;
          if (m) {
            const A = m, b = self[A.name], w = new (typeof b == "function" ? b : Error)(A.message);
            for (const F in A)
              w[F] = A[F];
            C.reject(w);
          } else
            C.resolve(u);
          o.delete(l);
        }
      }, p = async () => {
        let C, m, u = !1;
        try {
          const A = a.get(d);
          if (typeof A == "function")
            C = await A({
              sender: i.origin,
              id: d,
              data: i.data,
              timestamp: i.timestamp
            });
          else
            throw u = !0, new Error(`[webext-bridge] No handler registered in '${e}' to accept messages with id '${d}'`);
        } catch (A) {
          m = A;
        } finally {
          if (m && (i.err = cd(m)), s(xa(Pt({}, i), {
            messageType: "reply",
            data: C,
            origin: { context: e, tabId: null },
            destination: i.origin,
            hops: []
          })), m && !u)
            throw C;
        }
      };
      switch (c) {
        case "reply":
          return g();
        case "message":
          return p();
      }
    }
    return i.hops.push(`${e}::${n}`), t(i);
  };
  return {
    handleMessage: s,
    endTransaction: (i) => {
      const l = o.get(i);
      l?.reject("Transaction was ended before it could complete"), o.delete(i);
    },
    sendMessage: (i, l, d = "background") => {
      const c = typeof d == "string" ? wa(d) : d, g = "Bridge#sendMessage ->";
      if (!c.context)
        throw new TypeError(`${g} Destination must be any one of known destinations`);
      return new Promise((p, C) => {
        const m = {
          messageID: i,
          data: l,
          destination: c,
          messageType: "message",
          transactionId: Pn(),
          origin: { context: e, tabId: null },
          hops: [],
          timestamp: Date.now()
        };
        o.set(m.transactionId, { resolve: p, reject: C });
        try {
          s(m);
        } catch (u) {
          o.delete(m.transactionId), C(u);
        }
      });
    },
    onMessage: (i, l) => (a.set(i, l), () => a.delete(i))
  };
}, ur = class {
  constructor(e, t) {
    this.endpointRuntime = e, this.streamInfo = t, this.emitter = Xi(), this.isClosed = !1, this.handleStreamClose = () => {
      this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {});
    }, ur.initDone || (e.onMessage("__crx_bridge_stream_transfer__", (r) => {
      const { streamId: n, streamTransfer: o, action: a } = r.data, s = ur.openStreams.get(n);
      s && !s.isClosed && (a === "transfer" && s.emitter.emit("message", o), a === "close" && (ur.openStreams.delete(n), s.handleStreamClose()));
    }), ur.initDone = !0), ur.openStreams.set(this.streamInfo.streamId, this);
  }
  get info() {
    return this.streamInfo;
  }
  send(e) {
    if (this.isClosed)
      throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
    this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.streamInfo.streamId,
      streamTransfer: e,
      action: "transfer"
    }, this.streamInfo.endpoint);
  }
  close(e) {
    e && this.send(e), this.handleStreamClose(), this.endpointRuntime.sendMessage("__crx_bridge_stream_transfer__", {
      streamId: this.streamInfo.streamId,
      streamTransfer: null,
      action: "close"
    }, this.streamInfo.endpoint);
  }
  onMessage(e) {
    return this.getDisposable("message", e);
  }
  onClose(e) {
    return this.getDisposable("closed", e);
  }
  getDisposable(e, t) {
    const r = this.emitter.on(e, t);
    return Object.assign(r, {
      dispose: r,
      close: r
    });
  }
}, Fn = ur;
Fn.initDone = !1;
Fn.openStreams = /* @__PURE__ */ new Map();
var dd = (e) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = Xi();
  e.onMessage("__crx_bridge_stream_open__", (s) => new Promise((i) => {
    const { sender: l, data: d } = s, { channel: c } = d;
    let g = !1, p = () => {
    };
    const C = () => {
      const m = r.get(c);
      typeof m == "function" ? (m(new Fn(e, xa(Pt({}, d), { endpoint: l }))), g && p(), i(!0)) : g || (g = !0, p = n.on("did-change-stream-callbacks", C));
    };
    C();
  }));
  async function o(s, i) {
    if (t.has(s))
      throw new Error("webext-bridge: A Stream is already open at this channel");
    const l = typeof i == "string" ? wa(i) : i, d = { streamId: Pn(), channel: s, endpoint: l }, c = new Fn(e, d);
    return c.onClose(() => t.delete(s)), await e.sendMessage("__crx_bridge_stream_open__", d, l), t.set(s, c), c;
  }
  function a(s, i) {
    if (r.has(s))
      throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
    r.set(s, i), n.emit("did-change-stream-callbacks");
  }
  return {
    openStream: o,
    onOpenStreamChannel: a
  };
}, el = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n(e);
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Bi, function(r) {
    if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
      throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
      const n = "The message port closed before a response was received.", o = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", a = (s) => {
        const i = {
          alarms: {
            clear: {
              minArgs: 0,
              maxArgs: 1
            },
            clearAll: {
              minArgs: 0,
              maxArgs: 0
            },
            get: {
              minArgs: 0,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          bookmarks: {
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getChildren: {
              minArgs: 1,
              maxArgs: 1
            },
            getRecent: {
              minArgs: 1,
              maxArgs: 1
            },
            getSubTree: {
              minArgs: 1,
              maxArgs: 1
            },
            getTree: {
              minArgs: 0,
              maxArgs: 0
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeTree: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          browserAction: {
            disable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            enable: {
              minArgs: 0,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            getBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1
            },
            getBadgeText: {
              minArgs: 1,
              maxArgs: 1
            },
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            openPopup: {
              minArgs: 0,
              maxArgs: 0
            },
            setBadgeBackgroundColor: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setBadgeText: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          browsingData: {
            remove: {
              minArgs: 2,
              maxArgs: 2
            },
            removeCache: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCookies: {
              minArgs: 1,
              maxArgs: 1
            },
            removeDownloads: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFormData: {
              minArgs: 1,
              maxArgs: 1
            },
            removeHistory: {
              minArgs: 1,
              maxArgs: 1
            },
            removeLocalStorage: {
              minArgs: 1,
              maxArgs: 1
            },
            removePasswords: {
              minArgs: 1,
              maxArgs: 1
            },
            removePluginData: {
              minArgs: 1,
              maxArgs: 1
            },
            settings: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          commands: {
            getAll: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          contextMenus: {
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeAll: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          cookies: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 1,
              maxArgs: 1
            },
            getAllCookieStores: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          devtools: {
            inspectedWindow: {
              eval: {
                minArgs: 1,
                maxArgs: 2,
                singleCallbackArg: !1
              }
            },
            panels: {
              create: {
                minArgs: 3,
                maxArgs: 3,
                singleCallbackArg: !0
              },
              elements: {
                createSidebarPane: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            }
          },
          downloads: {
            cancel: {
              minArgs: 1,
              maxArgs: 1
            },
            download: {
              minArgs: 1,
              maxArgs: 1
            },
            erase: {
              minArgs: 1,
              maxArgs: 1
            },
            getFileIcon: {
              minArgs: 1,
              maxArgs: 2
            },
            open: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            pause: {
              minArgs: 1,
              maxArgs: 1
            },
            removeFile: {
              minArgs: 1,
              maxArgs: 1
            },
            resume: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          extension: {
            isAllowedFileSchemeAccess: {
              minArgs: 0,
              maxArgs: 0
            },
            isAllowedIncognitoAccess: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          history: {
            addUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteAll: {
              minArgs: 0,
              maxArgs: 0
            },
            deleteRange: {
              minArgs: 1,
              maxArgs: 1
            },
            deleteUrl: {
              minArgs: 1,
              maxArgs: 1
            },
            getVisits: {
              minArgs: 1,
              maxArgs: 1
            },
            search: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          i18n: {
            detectLanguage: {
              minArgs: 1,
              maxArgs: 1
            },
            getAcceptLanguages: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          identity: {
            launchWebAuthFlow: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          idle: {
            queryState: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          management: {
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getSelf: {
              minArgs: 0,
              maxArgs: 0
            },
            setEnabled: {
              minArgs: 2,
              maxArgs: 2
            },
            uninstallSelf: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          notifications: {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            create: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            getPermissionLevel: {
              minArgs: 0,
              maxArgs: 0
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          },
          pageAction: {
            getPopup: {
              minArgs: 1,
              maxArgs: 1
            },
            getTitle: {
              minArgs: 1,
              maxArgs: 1
            },
            hide: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setIcon: {
              minArgs: 1,
              maxArgs: 1
            },
            setPopup: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            setTitle: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            },
            show: {
              minArgs: 1,
              maxArgs: 1,
              fallbackToNoCallback: !0
            }
          },
          permissions: {
            contains: {
              minArgs: 1,
              maxArgs: 1
            },
            getAll: {
              minArgs: 0,
              maxArgs: 0
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            request: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          runtime: {
            getBackgroundPage: {
              minArgs: 0,
              maxArgs: 0
            },
            getPlatformInfo: {
              minArgs: 0,
              maxArgs: 0
            },
            openOptionsPage: {
              minArgs: 0,
              maxArgs: 0
            },
            requestUpdateCheck: {
              minArgs: 0,
              maxArgs: 0
            },
            sendMessage: {
              minArgs: 1,
              maxArgs: 3
            },
            sendNativeMessage: {
              minArgs: 2,
              maxArgs: 2
            },
            setUninstallURL: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          sessions: {
            getDevices: {
              minArgs: 0,
              maxArgs: 1
            },
            getRecentlyClosed: {
              minArgs: 0,
              maxArgs: 1
            },
            restore: {
              minArgs: 0,
              maxArgs: 1
            }
          },
          storage: {
            local: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            managed: {
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            sync: {
              clear: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getBytesInUse: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            }
          },
          tabs: {
            captureVisibleTab: {
              minArgs: 0,
              maxArgs: 2
            },
            create: {
              minArgs: 1,
              maxArgs: 1
            },
            detectLanguage: {
              minArgs: 0,
              maxArgs: 1
            },
            discard: {
              minArgs: 0,
              maxArgs: 1
            },
            duplicate: {
              minArgs: 1,
              maxArgs: 1
            },
            executeScript: {
              minArgs: 1,
              maxArgs: 2
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 0
            },
            getZoom: {
              minArgs: 0,
              maxArgs: 1
            },
            getZoomSettings: {
              minArgs: 0,
              maxArgs: 1
            },
            goBack: {
              minArgs: 0,
              maxArgs: 1
            },
            goForward: {
              minArgs: 0,
              maxArgs: 1
            },
            highlight: {
              minArgs: 1,
              maxArgs: 1
            },
            insertCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            move: {
              minArgs: 2,
              maxArgs: 2
            },
            query: {
              minArgs: 1,
              maxArgs: 1
            },
            reload: {
              minArgs: 0,
              maxArgs: 2
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            removeCSS: {
              minArgs: 1,
              maxArgs: 2
            },
            sendMessage: {
              minArgs: 2,
              maxArgs: 3
            },
            setZoom: {
              minArgs: 1,
              maxArgs: 2
            },
            setZoomSettings: {
              minArgs: 1,
              maxArgs: 2
            },
            update: {
              minArgs: 1,
              maxArgs: 2
            }
          },
          topSites: {
            get: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          webNavigation: {
            getAllFrames: {
              minArgs: 1,
              maxArgs: 1
            },
            getFrame: {
              minArgs: 1,
              maxArgs: 1
            }
          },
          webRequest: {
            handlerBehaviorChanged: {
              minArgs: 0,
              maxArgs: 0
            }
          },
          windows: {
            create: {
              minArgs: 0,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 2
            },
            getAll: {
              minArgs: 0,
              maxArgs: 1
            },
            getCurrent: {
              minArgs: 0,
              maxArgs: 1
            },
            getLastFocused: {
              minArgs: 0,
              maxArgs: 1
            },
            remove: {
              minArgs: 1,
              maxArgs: 1
            },
            update: {
              minArgs: 2,
              maxArgs: 2
            }
          }
        };
        if (Object.keys(i).length === 0)
          throw new Error("api-metadata.json has not been included in browser-polyfill");
        class l extends WeakMap {
          constructor(I, j = void 0) {
            super(j), this.createItem = I;
          }
          get(I) {
            return this.has(I) || this.set(I, this.createItem(I)), super.get(I);
          }
        }
        const d = (v) => v && typeof v == "object" && typeof v.then == "function", c = (v, I) => (...j) => {
          s.runtime.lastError ? v.reject(new Error(s.runtime.lastError.message)) : I.singleCallbackArg || j.length <= 1 && I.singleCallbackArg !== !1 ? v.resolve(j[0]) : v.resolve(j);
        }, g = (v) => v == 1 ? "argument" : "arguments", p = (v, I) => function(k, ...x) {
          if (x.length < I.minArgs)
            throw new Error(`Expected at least ${I.minArgs} ${g(I.minArgs)} for ${v}(), got ${x.length}`);
          if (x.length > I.maxArgs)
            throw new Error(`Expected at most ${I.maxArgs} ${g(I.maxArgs)} for ${v}(), got ${x.length}`);
          return new Promise((T, H) => {
            if (I.fallbackToNoCallback)
              try {
                k[v](...x, c({
                  resolve: T,
                  reject: H
                }, I));
              } catch (B) {
                console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, B), k[v](...x), I.fallbackToNoCallback = !1, I.noCallback = !0, T();
              }
            else I.noCallback ? (k[v](...x), T()) : k[v](...x, c({
              resolve: T,
              reject: H
            }, I));
          });
        }, C = (v, I, j) => new Proxy(I, {
          apply(k, x, T) {
            return j.call(x, v, ...T);
          }
        });
        let m = Function.call.bind(Object.prototype.hasOwnProperty);
        const u = (v, I = {}, j = {}) => {
          let k = /* @__PURE__ */ Object.create(null), x = {
            has(H, B) {
              return B in v || B in k;
            },
            get(H, B, J) {
              if (B in k)
                return k[B];
              if (!(B in v))
                return;
              let W = v[B];
              if (typeof W == "function")
                if (typeof I[B] == "function")
                  W = C(v, v[B], I[B]);
                else if (m(j, B)) {
                  let z = p(B, j[B]);
                  W = C(v, v[B], z);
                } else
                  W = W.bind(v);
              else if (typeof W == "object" && W !== null && (m(I, B) || m(j, B)))
                W = u(W, I[B], j[B]);
              else if (m(j, "*"))
                W = u(W, I[B], j["*"]);
              else
                return Object.defineProperty(k, B, {
                  configurable: !0,
                  enumerable: !0,
                  get() {
                    return v[B];
                  },
                  set(z) {
                    v[B] = z;
                  }
                }), W;
              return k[B] = W, W;
            },
            set(H, B, J, W) {
              return B in k ? k[B] = J : v[B] = J, !0;
            },
            defineProperty(H, B, J) {
              return Reflect.defineProperty(k, B, J);
            },
            deleteProperty(H, B) {
              return Reflect.deleteProperty(k, B);
            }
          }, T = Object.create(v);
          return new Proxy(T, x);
        }, A = (v) => ({
          addListener(I, j, ...k) {
            I.addListener(v.get(j), ...k);
          },
          hasListener(I, j) {
            return I.hasListener(v.get(j));
          },
          removeListener(I, j) {
            I.removeListener(v.get(j));
          }
        }), b = new l((v) => typeof v != "function" ? v : function(j) {
          const k = u(
            j,
            {},
            {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            }
          );
          v(k);
        });
        let w = !1;
        const F = new l((v) => typeof v != "function" ? v : function(j, k, x) {
          let T = !1, H, B = new Promise((se) => {
            H = function(de) {
              w || (console.warn(o, new Error().stack), w = !0), T = !0, se(de);
            };
          }), J;
          try {
            J = v(j, k, H);
          } catch (se) {
            J = Promise.reject(se);
          }
          const W = J !== !0 && d(J);
          if (J !== !0 && !W && !T)
            return !1;
          const z = (se) => {
            se.then((de) => {
              x(de);
            }, (de) => {
              let Ae;
              de && (de instanceof Error || typeof de.message == "string") ? Ae = de.message : Ae = "An unexpected error occurred", x({
                __mozWebExtensionPolyfillReject__: !0,
                message: Ae
              });
            }).catch((de) => {
              console.error("Failed to send onMessage rejected reply", de);
            });
          };
          return z(W ? J : B), !0;
        }), D = ({
          reject: v,
          resolve: I
        }, j) => {
          s.runtime.lastError ? s.runtime.lastError.message === n ? I() : v(new Error(s.runtime.lastError.message)) : j && j.__mozWebExtensionPolyfillReject__ ? v(new Error(j.message)) : I(j);
        }, Z = (v, I, j, ...k) => {
          if (k.length < I.minArgs)
            throw new Error(`Expected at least ${I.minArgs} ${g(I.minArgs)} for ${v}(), got ${k.length}`);
          if (k.length > I.maxArgs)
            throw new Error(`Expected at most ${I.maxArgs} ${g(I.maxArgs)} for ${v}(), got ${k.length}`);
          return new Promise((x, T) => {
            const H = D.bind(null, {
              resolve: x,
              reject: T
            });
            k.push(H), j.sendMessage(...k);
          });
        }, O = {
          devtools: {
            network: {
              onRequestFinished: A(b)
            }
          },
          runtime: {
            onMessage: A(F),
            onMessageExternal: A(F),
            sendMessage: Z.bind(null, "sendMessage", {
              minArgs: 1,
              maxArgs: 3
            })
          },
          tabs: {
            sendMessage: Z.bind(null, "sendMessage", {
              minArgs: 2,
              maxArgs: 3
            })
          }
        }, P = {
          clear: {
            minArgs: 1,
            maxArgs: 1
          },
          get: {
            minArgs: 1,
            maxArgs: 1
          },
          set: {
            minArgs: 1,
            maxArgs: 1
          }
        };
        return i.privacy = {
          network: {
            "*": P
          },
          services: {
            "*": P
          },
          websites: {
            "*": P
          }
        }, u(s, O, i);
      };
      r.exports = a(chrome);
    } else
      r.exports = globalThis.browser;
  });
})(el);
var gd = el.exports;
const fd = /* @__PURE__ */ ba(gd);
var Lr = ed(), Ue = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), tl = (e, t) => (gr.set(e, (gr.get(e) || /* @__PURE__ */ new Set()).add(t)), () => {
  const r = gr.get(e);
  r?.delete(t) && r?.size === 0 && gr.delete(e);
}), rl = (e, t) => {
  _n.set(e, (_n.get(e) || /* @__PURE__ */ new Set()).add(t));
}, Jt = (e) => ({
  withFingerprint: (t) => {
    const r = (o) => ({ and: () => o }), n = {
      aboutIncomingMessage: (o) => {
        const a = Ue.get(e);
        return Tr.toExtensionContext(a.port, {
          status: "incoming",
          message: o
        }), r(n);
      },
      aboutSuccessfulDelivery: (o) => {
        const a = Ue.get(e);
        return Tr.toExtensionContext(a.port, {
          status: "delivered",
          receipt: o
        }), r(n);
      },
      aboutMessageUndeliverability: (o, a) => {
        const s = Ue.get(e);
        return s?.fingerprint === t && Tr.toExtensionContext(s.port, {
          status: "undeliverable",
          resolvedDestination: o,
          message: a
        }), r(n);
      },
      whenDeliverableTo: (o) => {
        const a = () => {
          const s = Ue.get(e);
          if (s?.fingerprint === t && Ue.has(o))
            return Tr.toExtensionContext(s.port, {
              status: "deliverable",
              deliverableTo: o
            }), !0;
        };
        if (!a()) {
          const s = tl(o, a);
          rl(t, s);
        }
        return r(n);
      },
      aboutSessionEnded: (o) => {
        const a = Ue.get(e);
        return a?.fingerprint === t && Tr.toExtensionContext(a.port, {
          status: "terminated",
          fingerprint: o
        }), r(n);
      }
    };
    return n;
  }
}), md = Qu(), Ln = ud("background", (e) => {
  var t;
  if (e.origin.context === "background" && ["content-script", "devtools "].includes(e.destination.context) && !e.destination.tabId)
    throw new TypeError("When sending messages from background page, use @tabId syntax to target specific tab");
  const r = In(Pt(Pt({}, e.origin), e.origin.context === "window" && { context: "content-script" })), n = In(xa(Pt(Pt({}, e.destination), e.destination.context === "window" && {
    context: "content-script"
  }), {
    tabId: e.destination.tabId || e.origin.tabId
  }));
  e.destination.tabId = null, e.destination.frameId = null;
  const o = () => Ue.get(n), a = () => Ue.get(r), s = () => {
    var i;
    Jt(n).withFingerprint(o().fingerprint).aboutIncomingMessage(e);
    const l = {
      message: e,
      to: o().fingerprint,
      from: {
        endpointId: r,
        fingerprint: (i = a()) == null ? void 0 : i.fingerprint
      }
    };
    e.messageType === "message" && Lr.add(l), e.messageType === "reply" && Lr.remove(e.messageID), a() && Jt(r).withFingerprint(a().fingerprint).aboutSuccessfulDelivery(l);
  };
  (t = o()) != null && t.port ? s() : e.messageType === "message" && (e.origin.context === "background" ? tl(n, s) : a() && Jt(r).withFingerprint(a().fingerprint).aboutMessageUndeliverability(n, e).and().whenDeliverableTo(n));
}, (e) => {
  const t = In(Pt(Pt({}, e.origin), e.origin.context === "window" && { context: "content-script" })), r = Ue.get(t), n = {
    message: e,
    to: md,
    from: {
      endpointId: t,
      fingerprint: r.fingerprint
    }
  };
  Jt(t).withFingerprint(r.fingerprint).aboutSuccessfulDelivery(n);
});
fd.runtime.onConnect.addListener((e) => {
  var t;
  const r = Xu(e.name);
  if (!r)
    return;
  r.endpointName || (r.endpointName = In({
    context: "content-script",
    tabId: e.sender.tab.id,
    frameId: e.sender.frameId
  }));
  const { tabId: n, frameId: o } = wa(r.endpointName);
  Ue.set(r.endpointName, {
    fingerprint: r.fingerprint,
    port: e
  }), (t = gr.get(r.endpointName)) == null || t.forEach((a) => a()), gr.delete(r.endpointName), rl(r.fingerprint, () => {
    const a = Lr.entries().filter((s) => s.to === r.fingerprint);
    Lr.remove(a), a.forEach((s) => {
      s.from.endpointId === "background" ? Ln.endTransaction(s.message.transactionId) : Jt(s.from.endpointId).withFingerprint(s.from.fingerprint).aboutSessionEnded(r.fingerprint);
    });
  }), e.onDisconnect.addListener(() => {
    var a, s;
    ((a = Ue.get(r.endpointName)) == null ? void 0 : a.fingerprint) === r.fingerprint && Ue.delete(r.endpointName), (s = _n.get(r.fingerprint)) == null || s.forEach((i) => i()), _n.delete(r.fingerprint);
  }), e.onMessage.addListener((a) => {
    var s, i;
    if (a.type === "sync") {
      const l = [...Ue.values()].map((c) => c.fingerprint), d = a.pendingResponses.filter((c) => l.includes(c.to));
      Lr.add(...d), a.pendingResponses.filter((c) => !l.includes(c.to)).forEach((c) => Jt(r.endpointName).withFingerprint(r.fingerprint).aboutSessionEnded(c.to)), a.pendingDeliveries.forEach((c) => Jt(r.endpointName).withFingerprint(r.fingerprint).whenDeliverableTo(c));
      return;
    }
    a.type === "deliver" && ((i = (s = a.message) == null ? void 0 : s.origin) != null && i.context) && (a.message.origin.tabId = n, a.message.origin.frameId = o, Ln.handleMessage(a.message));
  });
});
var { sendMessage: pd, onMessage: yt } = Ln;
dd(Ln);
const hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onMessage: yt,
  sendMessage: pd
}, Symbol.toStringTag, { value: "Module" }));
var Vo = function(e, t) {
  return Vo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Vo(e, t);
};
function rn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Vo(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Ho(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Zo(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function zo(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function bt(e) {
  return typeof e == "function";
}
function nl(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var ho = nl(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Wo(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var Gn = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, n, o, a;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var i = Ho(s), l = i.next(); !l.done; l = i.next()) {
              var d = l.value;
              d.remove(this);
            }
          } catch (u) {
            t = { error: u };
          } finally {
            try {
              l && !l.done && (r = i.return) && r.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          s.remove(this);
      var c = this.initialTeardown;
      if (bt(c))
        try {
          c();
        } catch (u) {
          a = u instanceof ho ? u.errors : [u];
        }
      var g = this._finalizers;
      if (g) {
        this._finalizers = null;
        try {
          for (var p = Ho(g), C = p.next(); !C.done; C = p.next()) {
            var m = C.value;
            try {
              us(m);
            } catch (u) {
              a = a ?? [], u instanceof ho ? a = zo(zo([], Zo(a)), Zo(u.errors)) : a.push(u);
            }
          }
        } catch (u) {
          n = { error: u };
        } finally {
          try {
            C && !C.done && (o = p.return) && o.call(p);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new ho(a);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        us(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && Wo(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && Wo(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), ol = Gn.EMPTY;
function al(e) {
  return e instanceof Gn || e && "closed" in e && bt(e.remove) && bt(e.add) && bt(e.unsubscribe);
}
function us(e) {
  bt(e) ? e() : e.unsubscribe();
}
var Ad = {
  Promise: void 0
}, Cd = {
  setTimeout: function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, zo([e, t], Zo(r)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function vd(e) {
  Cd.setTimeout(function() {
    throw e;
  });
}
function ds() {
}
function yn(e) {
  e();
}
var sl = function(e) {
  rn(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, al(r) && r.add(n)) : n.destination = yd, n;
  }
  return t.create = function(r, n, o) {
    return new qo(r, n, o);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Gn), bd = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        gn(n);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        gn(n);
      }
    else
      gn(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        gn(r);
      }
  }, e;
}(), qo = function(e) {
  rn(t, e);
  function t(r, n, o) {
    var a = e.call(this) || this, s;
    return bt(r) || !r ? s = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: o ?? void 0
    } : s = r, a.destination = new bd(s), a;
  }
  return t;
}(sl);
function gn(e) {
  vd(e);
}
function Id(e) {
  throw e;
}
var yd = {
  closed: !0,
  next: ds,
  error: Id,
  complete: ds
}, xd = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function wd(e) {
  return e;
}
function Td(e) {
  return e.length === 0 ? wd : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var gs = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var o = this, a = Sd(t) ? t : new qo(t, r, n);
    return yn(function() {
      var s = o, i = s.operator, l = s.source;
      a.add(i ? i.call(a, l) : l ? o._subscribe(a) : o._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = fs(r), new r(function(o, a) {
      var s = new qo({
        next: function(i) {
          try {
            t(i);
          } catch (l) {
            a(l), s.unsubscribe();
          }
        },
        error: a,
        complete: o
      });
      n.subscribe(s);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[xd] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return Td(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = fs(t), new t(function(n, o) {
      var a;
      r.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function fs(e) {
  var t;
  return (t = e ?? Ad.Promise) !== null && t !== void 0 ? t : Promise;
}
function Ed(e) {
  return e && bt(e.next) && bt(e.error) && bt(e.complete);
}
function Sd(e) {
  return e && e instanceof sl || Ed(e) && al(e);
}
var Od = nl(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), il = function(e) {
  rn(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new ms(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Od();
  }, t.prototype.next = function(r) {
    var n = this;
    yn(function() {
      var o, a;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = Ho(n.currentObservers), i = s.next(); !i.done; i = s.next()) {
            var l = i.value;
            l.next(r);
          }
        } catch (d) {
          o = { error: d };
        } finally {
          try {
            i && !i.done && (a = s.return) && a.call(s);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var n = this;
    yn(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    yn(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var n = this, o = this, a = o.hasError, s = o.isStopped, i = o.observers;
    return a || s ? ol : (this.currentObservers = null, i.push(r), new Gn(function() {
      n.currentObservers = null, Wo(i, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, a = n.thrownError, s = n.isStopped;
    o ? r.error(a) : s && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new gs();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new ms(r, n);
  }, t;
}(gs), ms = function(e) {
  rn(t, e);
  function t(r, n) {
    var o = e.call(this) || this;
    return o.destination = r, o.source = n, o;
  }
  return t.prototype.next = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
  }, t.prototype.error = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
  }, t.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, t.prototype._subscribe = function(r) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : ol;
  }, t;
}(il), ll = function(e) {
  rn(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(r) {
    var n = e.prototype._subscribe.call(this, r);
    return !n.closed && r.next(this._value), n;
  }, t.prototype.getValue = function() {
    var r = this, n = r.hasError, o = r.thrownError, a = r._value;
    if (n)
      throw o;
    return this._throwIfClosed(), a;
  }, t.prototype.next = function(r) {
    e.prototype.next.call(this, this._value = r);
  }, t;
}(il);
class vt {
  static instance;
  pjePayloadAtual;
  async PATH() {
    return this.pjePayloadAtual || (this.pjePayloadAtual = await this.obterPayload()), this.pjePayloadAtual?.CONSTANTES?.PATH;
  }
  async WEB_ROOT() {
    return this.pjePayloadAtual || (this.pjePayloadAtual = await this.obterPayload()), this.pjePayloadAtual?.CONSTANTES?.WEB_ROOT;
  }
  async ID_USUARIO_LOCALIZACAO() {
    return this.pjePayloadAtual || (this.pjePayloadAtual = await this.obterPayload()), this.pjePayloadAtual?.CONSTANTES?.ID_USUARIO_LOCALIZACAO;
  }
  constructor() {
    this.iniciarOuvinte();
  }
  async iniciarOuvinte() {
    {
      const { onMessage: t } = await Promise.resolve().then(() => hd);
      t("PJePayloadServico", async () => this.obterPayload());
    }
  }
  static getInstance() {
    return vt.instance || (vt.instance = new vt()), vt.instance;
  }
  async obterPayload() {
    {
      const { PJePayloadUpdateSubject: t } = await Promise.resolve().then(() => SA);
      return this.pjePayloadAtual = t.getValue(), this.pjePayloadAtual;
    }
  }
}
new Ye({
  recurso: "PJePayloadServico",
  adicional: "Serviço"
});
vt.getInstance();
async function Pd() {
  const e = await Promise.race([vt.getInstance().PATH()]);
  if (e) {
    let t = e + "/";
    return t = t.replace(/^\/+/, ""), Ce.log(t), (t == "seam/" || t == "login.seam/") && (t = ""), t;
  } else
    return Ce.log("Não foi possível encontrar a correspondência."), "";
}
function Fd(e) {
  return fetch(e, {
    headers: { "Content-Type": "application/json" },
    body: "{}",
    method: "POST",
    credentials: "include"
  }).then((t) => t.json());
}
function _d(e = "pje", t) {
  const r = `${document.referrer}${e}/seam/resource/rest/pje-legacy/painelUsuario/recuperarProcessosTarefaPendenteComCriterios/${encodeURI(
    t.trim()
  )}/false`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: "{}",
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Ld(e = "pje") {
  const t = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/etiquetas`;
  return fetch(t, {
    headers: { "Content-Type": "application/json" },
    body: "{}",
    method: "POST",
    credentials: "include"
  }).then((r) => r.json());
}
function Rd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[]}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Dd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","numeroProcessoReferencia":"","etiqueta":"","etiquetas":[],"filtrado":true,"modoCompleto":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function jd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[],"ignorarCache":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function kd() {
  const t = `${window.location.origin.includes("frontend") ? document.referrer.replace(/\/+$/, "") : window.location.origin}/pje/seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(t, {
    headers: { "Content-Type": "application/json" },
    body: '{"numeroProcesso":"","competencia":"","etiquetas":[]}',
    method: "POST",
    credentials: "include"
  }).then((r) => r.json());
}
function Md(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/transicoes/${t}`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: null,
    method: "GET",
    credentials: "include"
  }).then((n) => n.json());
}
function Nd(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/processoTags/inserir`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"tag":"${t}","idProcesso":"${r}"}`,
    method: "POST",
    credentials: "include"
  }).then((o) => o.json());
}
function Bd(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/processoTags/remover`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"idTag":${t},"idProcesso":${r}}`,
    method: "POST",
    credentials: "include"
  }).then((o) => o.json());
}
function Ud(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/recuperarProcessosTarefaPendenteComCriterios/${t}/false`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${r}","classe":null,"tags":[],"tagsString":null,"poloAtivo":null,"poloPassivo":null,"orgao":null,"ordem":null,"page":0,"maxResults":300,"idTaskInstance":null,"apelidoSessao":null,"idTipoSessao":null,"dataSessao":null,"somenteFavoritas":null,"objeto":null,"semEtiqueta":null,"assunto":null,"dataAutuacao":null,"nomeParte":null,"nomeFiltro":null,"numeroDocumento":null,"competencia":"","relator":null,"orgaoJulgador":null,"somenteLembrete":null,"somenteSigiloso":null,"somenteLiminar":null,"eleicao":null,"estado":null,"municipio":null,"prioridadeProcesso":null,"cpfCnpj":null,"porEtiqueta":null,"conferidos":null,"orgaoJulgadorColegiado":null,"naoLidos":null,"tipoProcessoDocumento":null}`,
    method: "POST",
    credentials: "include"
  }).then((o) => o.json());
}
function Vd(e = "pje", t, r) {
  const n = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/movimentar/${t}/${r}`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include"
  }).then((o) => o.json());
}
function Hd(e) {
  const r = `${window.location.href.match(rr.HREFS.ROOT)?.at(0)}seam/resource/rest/pje-legacy/painelUsuario/tags`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"marcado":false,"possuiFilhos":false,"id":null,"nomeTag":"${e}","nomeTagCompleto":"${e}","pai":null}`,
    method: "POST",
    mode: "cors",
    credentials: "include"
  }).then((n) => n.json());
}
async function Zd(e, t) {
  const n = `${window.location.href.match(rr.HREFS.ROOT)?.at(0)}seam/resource/rest/pje-legacy/painelUsuario/tags`;
  return await fetch(n, {
    headers: { "Content-Type": "application/json" },
    body: `{"marcado":false,"possuiFilhos":false,"id":${e},"nomeTag":"${t}","nomeTagCompleto":"${t}","pai":null}`,
    method: "PUT",
    credentials: "include"
  }).then((o) => o.json());
}
async function zd(e) {
  if (e == null || typeof e == "string" && !e.length)
    return !1;
  const r = `${window.location.href.match(rr.HREFS.ROOT)?.at(0)}seam/resource/rest/pje-legacy/painelUsuario/tagEdicao/${e}`;
  return await fetch(r, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include"
  }).then((n) => n.json());
}
function Wd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/etiquetas/${t}/processos`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((n) => n.json());
}
function qd(e = "pje", t) {
  const r = `${document.referrer}${e}seam/resource/rest/pje-legacy/painelUsuario/tags/${t}`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
    credentials: "include",
    mode: "cors"
  }).then((n) => n.json());
}
async function cl(e, t) {
  const n = `${await nn()}/seam/resource/rest/pje-legacy/processos/numero-processo/${e}/validar`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.text()).then((o) => Number(o));
}
const Kn = cl;
async function Jd(e, t) {
  const n = `${await nn()}/seam/resource/rest/pje-legacy/painelUsuario/gerarChaveAcessoProcesso/${e}`;
  return fetch(n, {
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.text());
}
async function ul(e, t) {
  const n = `${await nn()}/seam/resource/rest/pje-legacy/processos/${e}/movimentacoes`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.json());
}
function $d(e, t) {
  return Kn(e).then(
    (r) => ul(r)
  );
}
async function dl(e, t) {
  const n = `${await nn()}/seam/resource/rest/pje-legacy/processos/${e}/ultimoMovimento`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.json());
}
function Yd(e) {
  return Kn(e).then(
    (t) => dl(t)
  );
}
async function gl(e, t) {
  const n = `${await nn()}/seam/resource/rest/pje-legacy/processos/${e}/tarefas`;
  return fetch(n, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
    credentials: "include",
    mode: "cors"
  }).then((o) => o.json());
}
function Gd(e) {
  return Kn(e).then(
    (t) => gl(t)
  );
}
function Kd(e = "pje", t) {
  const r = `${window.location.origin}/${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[]}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Qd(e = "pje", t) {
  const r = `${window.location.origin}/${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","numeroProcessoReferencia":"","etiqueta":"","etiquetas":[],"filtrado":true,"modoCompleto":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function Xd(e = "pje", t) {
  const r = `${window.location.origin}/${e}seam/resource/rest/pje-legacy/painelUsuario/tarefas`;
  return fetch(r, {
    headers: { "Content-Type": "application/json" },
    body: `{"numeroProcesso":"${t}","competencia":"","etiquetas":[],"ignorarCache":false}`,
    method: "POST",
    credentials: "include"
  }).then((n) => n.json());
}
function eg(e, t) {
  return fetch(e, t);
}
class Ta {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fetch(t, ...r) {
    try {
      const n = tg[t];
      if (n)
        try {
          return n(...r);
        } catch (o) {
          const a = o;
          if (r.at(-1)?.fetchingViaBackground)
            return {
              fetchingViaBackgroundWithError: !0,
              errorMessage: a.message
            };
          if (a.message.match(/CORS/i))
            return Ta.fetchViaBackground(t, ...r);
          throw new Error(a.message);
        }
      else
        throw new Error(`Endpoint function "${t}" not found`);
    } catch (n) {
      return Ce.erro("Error fetching endpoint:"), Ce.erro(n), null;
    }
  }
  /**
   *
   * @param opcoes
   * @returns
   * @deprecated
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async fetchViaBackground(t, ...r) {
    const { sendMessage: n } = await import("./content-script-KBYHaqGu.mjs"), o = await n(
      "endpoints",
      {
        chamar: "backgroundFetchEndpoint",
        opcoes: {
          functionName: t,
          args: { ...r }
        }
      }
    );
    if (o && o.fetchingViaBackgroundWithError)
      throw new Error(
        o.errorMessage
      );
    return o;
  }
}
const tg = {
  pegaEnderecoSiglaPje: Pd,
  baixarTodosProcessos: Fd,
  listaProcessosTarefa: _d,
  listaEtiquetas: Ld,
  localizarTarefaNumeroProcesso: Rd,
  localizarTarefaNumeroProcessoTJDFT: Dd,
  localizarTarefaNumeroProcessoTJPE: jd,
  listatodosTarefas: kd,
  listaEncaminha: Md,
  inserirEtiquetas: Nd,
  removerEtiquetas: Bd,
  localizaIdProcesso: Ud,
  movimentarProcessos: Vd,
  criarEtiqueta: Hd,
  editarEtiqueta: Zd,
  listarEtiqueta: zd,
  numeroProcessoPorEtiqueta: Wd,
  apagarEtiquetaLotação: qd,
  validarNumeroProcesso: cl,
  obterIdProcesso: Kn,
  gerarChaveAcessoProcesso: Jd,
  obterMovimentosDoProcesso: ul,
  obterMovimentosDoProcessoPeloNumeroUnico: $d,
  obterUltimoMovimentoDoProcesso: dl,
  obterUltimoMovimentoDoProcessoPeloNumeroUnico: Yd,
  obterTarefasPendentesDoProcesso: gl,
  obterTarefasPendentesDoProcessoPeloNumeroUnico: Gd,
  localizarTarefaNumeroProcessoAutodigitais: Kd,
  localizarTarefaNumeroProcessoTJDFTAutodsDigitais: Qd,
  localizarTarefaNumeroProcessoTJPEAutodsDigitais: Xd,
  obterDoURL: eg
};
async function nn(e) {
  const t = await vt.getInstance().WEB_ROOT();
  return t || (await Ge.obter("siteAtual")).siteAtual.match(rr.HREFS.LEGACY_WEB_ROOT)?.at(0);
}
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ea(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const ae = {}, Rr = [], Xe = () => {
}, rg = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sa = (e) => e.startsWith("onUpdate:"), pe = Object.assign, Oa = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ng = Object.prototype.hasOwnProperty, re = (e, t) => ng.call(e, t), G = Array.isArray, Dr = (e) => Xn(e) === "[object Map]", og = (e) => Xn(e) === "[object Set]", K = (e) => typeof e == "function", he = (e) => typeof e == "string", hr = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", fl = (e) => (ue(e) || K(e)) && K(e.then) && K(e.catch), ag = Object.prototype.toString, Xn = (e) => ag.call(e), sg = (e) => Xn(e).slice(8, -1), ig = (e) => Xn(e) === "[object Object]", Pa = (e) => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jr = /* @__PURE__ */ Ea(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), eo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, lg = /-(\w)/g, Ke = eo(
  (e) => e.replace(lg, (t, r) => r ? r.toUpperCase() : "")
), cg = /\B([A-Z])/g, or = eo(
  (e) => e.replace(cg, "-$1").toLowerCase()
), to = eo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ao = eo(
  (e) => e ? `on${to(e)}` : ""
), jt = (e, t) => !Object.is(e, t), Co = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Rn = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ug = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, dg = (e) => {
  const t = he(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ps;
const Yt = () => ps || (ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fa(e) {
  if (G(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = he(n) ? pg(n) : Fa(n);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (he(e) || ue(e))
    return e;
}
const gg = /;(?![^(]*\))/g, fg = /:([^]+)/, mg = /\/\*[^]*?\*\//g;
function pg(e) {
  const t = {};
  return e.replace(mg, "").split(gg).forEach((r) => {
    if (r) {
      const n = r.split(fg);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function _a(e) {
  let t = "";
  if (he(e))
    t = e;
  else if (G(e))
    for (let r = 0; r < e.length; r++) {
      const n = _a(e[r]);
      n && (t += n + " ");
    }
  else if (ue(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const hg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ag = /* @__PURE__ */ Ea(hg);
function ml(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ee;
class pl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ee, !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ee = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function zr(e) {
  return new pl(e);
}
function Cg() {
  return Ee;
}
function Qe(e, t = !1) {
  Ee && Ee.cleanups.push(e);
}
let le;
const vo = /* @__PURE__ */ new WeakSet();
class hl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && Ee.active && Ee.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, vo.has(this) && (vo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hs(this), vl(this);
    const t = le, r = et;
    le = this, et = !0;
    try {
      return this.fn();
    } finally {
      bl(this), le = t, et = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Da(t);
      this.deps = this.depsTail = void 0, hs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? vo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Jo(this) && this.run();
  }
  get dirty() {
    return Jo(this);
  }
}
let Al = 0, kr, Mr;
function Cl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mr, Mr = e;
    return;
  }
  e.next = kr, kr = e;
}
function La() {
  Al++;
}
function Ra() {
  if (--Al > 0)
    return;
  if (Mr) {
    let t = Mr;
    for (Mr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; kr; ) {
    let t = kr;
    for (kr = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function vl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bl(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const o = n.prevDep;
    n.version === -1 ? (n === r && (r = o), Da(n), vg(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o;
  }
  e.deps = t, e.depsTail = r;
}
function Jo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Il(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Il(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wr))
    return;
  e.globalVersion = Wr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Jo(e)) {
    e.flags &= -3;
    return;
  }
  const r = le, n = et;
  le = e, et = !0;
  try {
    vl(e);
    const o = e.fn(e._value);
    (t.version === 0 || jt(o, e._value)) && (e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    le = r, et = n, bl(e), e.flags &= -3;
  }
}
function Da(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: o } = e;
  if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let a = r.computed.deps; a; a = a.nextDep)
      Da(a, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function vg(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let et = !0;
const yl = [];
function Mt() {
  yl.push(et), et = !1;
}
function Nt() {
  const e = yl.pop();
  et = e === void 0 ? !0 : e;
}
function hs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = le;
    le = void 0;
    try {
      t();
    } finally {
      le = r;
    }
  }
}
let Wr = 0;
class bg {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ja {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!le || !et || le === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== le)
      r = this.activeLink = new bg(le, this), le.deps ? (r.prevDep = le.depsTail, le.depsTail.nextDep = r, le.depsTail = r) : le.deps = le.depsTail = r, xl(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = le.depsTail, r.nextDep = void 0, le.depsTail.nextDep = r, le.depsTail = r, le.deps === r && (le.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Wr++, this.notify(t);
  }
  notify(t) {
    La();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Ra();
    }
  }
}
function xl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        xl(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Dn = /* @__PURE__ */ new WeakMap(), Gt = Symbol(
  ""
), $o = Symbol(
  ""
), qr = Symbol(
  ""
);
function Ie(e, t, r) {
  if (et && le) {
    let n = Dn.get(e);
    n || Dn.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || (n.set(r, o = new ja()), o.map = n, o.key = r), o.track();
  }
}
function At(e, t, r, n, o, a) {
  const s = Dn.get(e);
  if (!s) {
    Wr++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (La(), t === "clear")
    s.forEach(i);
  else {
    const l = G(e), d = l && Pa(r);
    if (l && r === "length") {
      const c = Number(n);
      s.forEach((g, p) => {
        (p === "length" || p === qr || !hr(p) && p >= c) && i(g);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && i(s.get(r)), d && i(s.get(qr)), t) {
        case "add":
          l ? d && i(s.get("length")) : (i(s.get(Gt)), Dr(e) && i(s.get($o)));
          break;
        case "delete":
          l || (i(s.get(Gt)), Dr(e) && i(s.get($o)));
          break;
        case "set":
          Dr(e) && i(s.get(Gt));
          break;
      }
  }
  Ra();
}
function Ig(e, t) {
  const r = Dn.get(e);
  return r && r.get(t);
}
function ir(e) {
  const t = X(e);
  return t === e ? t : (Ie(t, "iterate", qr), tt(e) ? t : t.map(Se));
}
function ka(e) {
  return Ie(e = X(e), "iterate", qr), e;
}
const yg = {
  __proto__: null,
  [Symbol.iterator]() {
    return bo(this, Symbol.iterator, Se);
  },
  concat(...e) {
    return ir(this).concat(
      ...e.map((t) => G(t) ? ir(t) : t)
    );
  },
  entries() {
    return bo(this, "entries", (e) => (e[1] = Se(e[1]), e));
  },
  every(e, t) {
    return pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pt(this, "filter", e, t, (r) => r.map(Se), arguments);
  },
  find(e, t) {
    return pt(this, "find", e, t, Se, arguments);
  },
  findIndex(e, t) {
    return pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pt(this, "findLast", e, t, Se, arguments);
  },
  findLastIndex(e, t) {
    return pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Io(this, "includes", e);
  },
  indexOf(...e) {
    return Io(this, "indexOf", e);
  },
  join(e) {
    return ir(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Io(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Er(this, "pop");
  },
  push(...e) {
    return Er(this, "push", e);
  },
  reduce(e, ...t) {
    return As(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return As(this, "reduceRight", e, t);
  },
  shift() {
    return Er(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Er(this, "splice", e);
  },
  toReversed() {
    return ir(this).toReversed();
  },
  toSorted(e) {
    return ir(this).toSorted(e);
  },
  toSpliced(...e) {
    return ir(this).toSpliced(...e);
  },
  unshift(...e) {
    return Er(this, "unshift", e);
  },
  values() {
    return bo(this, "values", Se);
  }
};
function bo(e, t, r) {
  const n = ka(e), o = n[t]();
  return n !== e && !tt(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.value && (a.value = r(a.value)), a;
  }), o;
}
const xg = Array.prototype;
function pt(e, t, r, n, o, a) {
  const s = ka(e), i = s !== e && !tt(e), l = s[t];
  if (l !== xg[t]) {
    const g = l.apply(e, a);
    return i ? Se(g) : g;
  }
  let d = r;
  s !== e && (i ? d = function(g, p) {
    return r.call(this, Se(g), p, e);
  } : r.length > 2 && (d = function(g, p) {
    return r.call(this, g, p, e);
  }));
  const c = l.call(s, d, n);
  return i && o ? o(c) : c;
}
function As(e, t, r, n) {
  const o = ka(e);
  let a = r;
  return o !== e && (tt(e) ? r.length > 3 && (a = function(s, i, l) {
    return r.call(this, s, i, l, e);
  }) : a = function(s, i, l) {
    return r.call(this, s, Se(i), l, e);
  }), o[t](a, ...n);
}
function Io(e, t, r) {
  const n = X(e);
  Ie(n, "iterate", qr);
  const o = n[t](...r);
  return (o === -1 || o === !1) && Ua(r[0]) ? (r[0] = X(r[0]), n[t](...r)) : o;
}
function Er(e, t, r = []) {
  Mt(), La();
  const n = X(e)[t].apply(e, r);
  return Ra(), Nt(), n;
}
const wg = /* @__PURE__ */ Ea("__proto__,__v_isRef,__isVue"), wl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hr)
);
function Tg(e) {
  hr(e) || (e = String(e));
  const t = X(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Tl {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return n === (o ? a ? jg : Pl : a ? Ol : Sl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = G(t);
    if (!o) {
      let l;
      if (s && (l = yg[r]))
        return l;
      if (r === "hasOwnProperty")
        return Tg;
    }
    const i = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      me(t) ? t : n
    );
    return (hr(r) ? wl.has(r) : wg(r)) || (o || Ie(t, "get", r), a) ? i : me(i) ? s && Pa(r) ? i : i.value : ue(i) ? o ? Na(i) : xt(i) : i;
  }
}
class El extends Tl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let a = t[r];
    if (!this._isShallow) {
      const l = er(a);
      if (!tt(n) && !er(n) && (a = X(a), n = X(n)), !G(t) && me(a) && !me(n))
        return l ? !1 : (a.value = n, !0);
    }
    const s = G(t) && Pa(r) ? Number(r) < t.length : re(t, r), i = Reflect.set(
      t,
      r,
      n,
      me(t) ? t : o
    );
    return t === X(o) && (s ? jt(n, a) && At(t, "set", r, n) : At(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = re(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return o && n && At(t, "delete", r, void 0), o;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!hr(r) || !wl.has(r)) && Ie(t, "has", r), n;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      G(t) ? "length" : Gt
    ), Reflect.ownKeys(t);
  }
}
class Eg extends Tl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Sg = /* @__PURE__ */ new El(), Og = /* @__PURE__ */ new Eg(), Pg = /* @__PURE__ */ new El(!0);
const Yo = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function Fg(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, a = X(o), s = Dr(a), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = o[e](...n), c = r ? Yo : t ? Go : Se;
    return !t && Ie(
      a,
      "iterate",
      l ? $o : Gt
    ), {
      // iterator protocol
      next() {
        const { value: g, done: p } = d.next();
        return p ? { value: g, done: p } : {
          value: i ? [c(g[0]), c(g[1])] : c(g),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function mn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _g(e, t) {
  const r = {
    get(o) {
      const a = this.__v_raw, s = X(a), i = X(o);
      e || (jt(o, i) && Ie(s, "get", o), Ie(s, "get", i));
      const { has: l } = fn(s), d = t ? Yo : e ? Go : Se;
      if (l.call(s, o))
        return d(a.get(o));
      if (l.call(s, i))
        return d(a.get(i));
      a !== s && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ie(X(o), "iterate", Gt), Reflect.get(o, "size", o);
    },
    has(o) {
      const a = this.__v_raw, s = X(a), i = X(o);
      return e || (jt(o, i) && Ie(s, "has", o), Ie(s, "has", i)), o === i ? a.has(o) : a.has(o) || a.has(i);
    },
    forEach(o, a) {
      const s = this, i = s.__v_raw, l = X(i), d = t ? Yo : e ? Go : Se;
      return !e && Ie(l, "iterate", Gt), i.forEach((c, g) => o.call(a, d(c), d(g), s));
    }
  };
  return pe(
    r,
    e ? {
      add: mn("add"),
      set: mn("set"),
      delete: mn("delete"),
      clear: mn("clear")
    } : {
      add(o) {
        !t && !tt(o) && !er(o) && (o = X(o));
        const a = X(this);
        return fn(a).has.call(a, o) || (a.add(o), At(a, "add", o, o)), this;
      },
      set(o, a) {
        !t && !tt(a) && !er(a) && (a = X(a));
        const s = X(this), { has: i, get: l } = fn(s);
        let d = i.call(s, o);
        d || (o = X(o), d = i.call(s, o));
        const c = l.call(s, o);
        return s.set(o, a), d ? jt(a, c) && At(s, "set", o, a) : At(s, "add", o, a), this;
      },
      delete(o) {
        const a = X(this), { has: s, get: i } = fn(a);
        let l = s.call(a, o);
        l || (o = X(o), l = s.call(a, o)), i && i.call(a, o);
        const d = a.delete(o);
        return l && At(a, "delete", o, void 0), d;
      },
      clear() {
        const o = X(this), a = o.size !== 0, s = o.clear();
        return a && At(
          o,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    r[o] = Fg(o, e, t);
  }), r;
}
function Ma(e, t) {
  const r = _g(e, t);
  return (n, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    re(r, o) && o in n ? r : n,
    o,
    a
  );
}
const Lg = {
  get: /* @__PURE__ */ Ma(!1, !1)
}, Rg = {
  get: /* @__PURE__ */ Ma(!1, !0)
}, Dg = {
  get: /* @__PURE__ */ Ma(!0, !1)
};
const Sl = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), jg = /* @__PURE__ */ new WeakMap();
function kg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Mg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kg(sg(e));
}
function xt(e) {
  return er(e) ? e : Ba(
    e,
    !1,
    Sg,
    Lg,
    Sl
  );
}
function Ng(e) {
  return Ba(
    e,
    !1,
    Pg,
    Rg,
    Ol
  );
}
function Na(e) {
  return Ba(
    e,
    !0,
    Og,
    Dg,
    Pl
  );
}
function Ba(e, t, r, n, o) {
  if (!ue(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = Mg(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? n : r
  );
  return o.set(e, i), i;
}
function Nr(e) {
  return er(e) ? Nr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function er(e) {
  return !!(e && e.__v_isReadonly);
}
function tt(e) {
  return !!(e && e.__v_isShallow);
}
function Ua(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function Bg(e) {
  return !re(e, "__v_skip") && Object.isExtensible(e) && Rn(e, "__v_skip", !0), e;
}
const Se = (e) => ue(e) ? xt(e) : e, Go = (e) => ue(e) ? Na(e) : e;
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Pe(e) {
  return Fl(e, !1);
}
function ke(e) {
  return Fl(e, !0);
}
function Fl(e, t) {
  return me(e) ? e : new Ug(e, t);
}
class Ug {
  constructor(t, r) {
    this.dep = new ja(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : X(t), this._value = r ? t : Se(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || tt(t) || er(t);
    t = n ? t : X(t), jt(t, r) && (this._rawValue = t, this._value = n ? t : Se(t), this.dep.trigger());
  }
}
function Vg(e) {
  return me(e) ? e.value : e;
}
const Hg = {
  get: (e, t, r) => t === "__v_raw" ? e : Vg(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return me(o) && !me(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function _l(e) {
  return Nr(e) ? e : new Proxy(e, Hg);
}
function Ll(e) {
  const t = G(e) ? new Array(e.length) : {};
  for (const r in e)
    t[r] = Rl(e, r);
  return t;
}
class Zg {
  constructor(t, r, n) {
    this._object = t, this._key = r, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ig(X(this._object), this._key);
  }
}
class zg {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Wg(e, t, r) {
  return me(e) ? e : K(e) ? new zg(e) : ue(e) && arguments.length > 1 ? Rl(e, t, r) : Pe(e);
}
function Rl(e, t, r) {
  const n = e[t];
  return me(n) ? n : new Zg(e, t, r);
}
class qg {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new ja(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    le !== this)
      return Cl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Il(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Jg(e, t, r = !1) {
  let n, o;
  return K(e) ? n = e : (n = e.get, o = e.set), new qg(n, o, r);
}
const pn = {}, jn = /* @__PURE__ */ new WeakMap();
let Wt;
function $g(e, t = !1, r = Wt) {
  if (r) {
    let n = jn.get(r);
    n || jn.set(r, n = []), n.push(e);
  }
}
function Yg(e, t, r = ae) {
  const { immediate: n, deep: o, once: a, scheduler: s, augmentJob: i, call: l } = r, d = (D) => o ? D : tt(D) || o === !1 || o === 0 ? Ct(D, 1) : Ct(D);
  let c, g, p, C, m = !1, u = !1;
  if (me(e) ? (g = () => e.value, m = tt(e)) : Nr(e) ? (g = () => d(e), m = !0) : G(e) ? (u = !0, m = e.some((D) => Nr(D) || tt(D)), g = () => e.map((D) => {
    if (me(D))
      return D.value;
    if (Nr(D))
      return d(D);
    if (K(D))
      return l ? l(D, 2) : D();
  })) : K(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (p) {
      Mt();
      try {
        p();
      } finally {
        Nt();
      }
    }
    const D = Wt;
    Wt = c;
    try {
      return l ? l(e, 3, [C]) : e(C);
    } finally {
      Wt = D;
    }
  } : g = Xe, t && o) {
    const D = g, Z = o === !0 ? 1 / 0 : o;
    g = () => Ct(D(), Z);
  }
  const A = Cg(), b = () => {
    c.stop(), A && A.active && Oa(A.effects, c);
  };
  if (a && t) {
    const D = t;
    t = (...Z) => {
      D(...Z), b();
    };
  }
  let w = u ? new Array(e.length).fill(pn) : pn;
  const F = (D) => {
    if (!(!(c.flags & 1) || !c.dirty && !D))
      if (t) {
        const Z = c.run();
        if (o || m || (u ? Z.some((O, P) => jt(O, w[P])) : jt(Z, w))) {
          p && p();
          const O = Wt;
          Wt = c;
          try {
            const P = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              w === pn ? void 0 : u && w[0] === pn ? [] : w,
              C
            ];
            l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            ), w = Z;
          } finally {
            Wt = O;
          }
        }
      } else
        c.run();
  };
  return i && i(F), c = new hl(g), c.scheduler = s ? () => s(F, !1) : F, C = (D) => $g(D, !1, c), p = c.onStop = () => {
    const D = jn.get(c);
    if (D) {
      if (l)
        l(D, 4);
      else
        for (const Z of D) Z();
      jn.delete(c);
    }
  }, t ? n ? F(!0) : w = c.run() : s ? s(F.bind(null, !0), !0) : c.run(), b.pause = c.pause.bind(c), b.resume = c.resume.bind(c), b.stop = b, b;
}
function Ct(e, t = 1 / 0, r) {
  if (t <= 0 || !ue(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, me(e))
    Ct(e.value, t, r);
  else if (G(e))
    for (let n = 0; n < e.length; n++)
      Ct(e[n], t, r);
  else if (og(e) || Dr(e))
    e.forEach((n) => {
      Ct(n, t, r);
    });
  else if (ig(e)) {
    for (const n in e)
      Ct(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ct(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function on(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    ro(o, t, r);
  }
}
function rt(e, t, r, n) {
  if (K(e)) {
    const o = on(e, t, r, n);
    return o && fl(o) && o.catch((a) => {
      ro(a, t, r);
    }), o;
  }
  if (G(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(rt(e[a], t, r, n));
    return o;
  }
}
function ro(e, t, r, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: s } = t && t.appContext.config || ae;
  if (t) {
    let i = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let g = 0; g < c.length; g++)
          if (c[g](e, l, d) === !1)
            return;
      }
      i = i.parent;
    }
    if (a) {
      Mt(), on(a, null, 10, [
        e,
        l,
        d
      ]), Nt();
      return;
    }
  }
  Gg(e, r, o, n, s);
}
function Gg(e, t, r, n = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Oe = [];
let ut = -1;
const fr = [];
let Ft = null, dr = 0;
const Dl = /* @__PURE__ */ Promise.resolve();
let kn = null;
function Ar(e) {
  const t = kn || Dl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kg(e) {
  let t = ut + 1, r = Oe.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = Oe[n], a = Jr(o);
    a < e || a === e && o.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Va(e) {
  if (!(e.flags & 1)) {
    const t = Jr(e), r = Oe[Oe.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jr(r) ? Oe.push(e) : Oe.splice(Kg(t), 0, e), e.flags |= 1, jl();
  }
}
function jl() {
  kn || (kn = Dl.then(Ml));
}
function Qg(e) {
  G(e) ? fr.push(...e) : Ft && e.id === -1 ? Ft.splice(dr + 1, 0, e) : e.flags & 1 || (fr.push(e), e.flags |= 1), jl();
}
function Cs(e, t, r = ut + 1) {
  for (; r < Oe.length; r++) {
    const n = Oe[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Oe.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function kl(e) {
  if (fr.length) {
    const t = [...new Set(fr)].sort(
      (r, n) => Jr(r) - Jr(n)
    );
    if (fr.length = 0, Ft) {
      Ft.push(...t);
      return;
    }
    for (Ft = t, dr = 0; dr < Ft.length; dr++) {
      const r = Ft[dr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Ft = null, dr = 0;
  }
}
const Jr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ml(e) {
  try {
    for (ut = 0; ut < Oe.length; ut++) {
      const t = Oe[ut];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ut < Oe.length; ut++) {
      const t = Oe[ut];
      t && (t.flags &= -2);
    }
    ut = -1, Oe.length = 0, kl(), kn = null, (Oe.length || fr.length) && Ml();
  }
}
let gt, Fr = [], Ko = !1;
function no(e, ...t) {
  gt ? gt.emit(e, ...t) : Ko || Fr.push({ event: e, args: t });
}
function Nl(e, t) {
  var r, n;
  gt = e, gt ? (gt.enabled = !0, Fr.forEach(({ event: o, args: a }) => gt.emit(o, ...a)), Fr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (r = window.navigator) == null ? void 0 : r.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    Nl(a, t);
  }), setTimeout(() => {
    gt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ko = !0, Fr = []);
  }, 3e3)) : (Ko = !0, Fr = []);
}
function Xg(e, t) {
  no("app:init", e, t, {
    Fragment: Ve,
    Text: an,
    Comment: He,
    Static: wn
  });
}
function ef(e) {
  no("app:unmount", e);
}
const tf = /* @__PURE__ */ Ha(
  "component:added"
  /* COMPONENT_ADDED */
), Bl = /* @__PURE__ */ Ha(
  "component:updated"
  /* COMPONENT_UPDATED */
), rf = /* @__PURE__ */ Ha(
  "component:removed"
  /* COMPONENT_REMOVED */
), nf = (e) => {
  gt && typeof gt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !gt.cleanupBuffer(e) && rf(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ha(e) {
  return (t) => {
    no(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
function of(e, t, r) {
  no(
    "component:emit",
    e.appContext.app,
    e,
    t,
    r
  );
}
let je = null, Ul = null;
function Mn(e) {
  const t = je;
  return je = e, Ul = e && e.type.__scopeId || null, t;
}
function af(e, t = je, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && Ls(-1);
    const a = Mn(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Mn(a), n._d && Ls(1);
    }
    return __VUE_PROD_DEVTOOLS__ && Bl(t), s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function sf(e, t) {
  if (je === null)
    return e;
  const r = co(je), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, s, i, l = ae] = t[o];
    a && (K(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Ct(s), n.push({
      dir: a,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function Vt(e, t, r, n) {
  const o = e.dirs, a = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    a && (i.oldValue = a[s].value);
    let l = i.dir[n];
    l && (Mt(), rt(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), Nt());
  }
}
const Vl = Symbol("_vte"), Hl = (e) => e.__isTeleport, Br = (e) => e && (e.disabled || e.disabled === ""), vs = (e) => e && (e.defer || e.defer === ""), bs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Is = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Qo = (e, t) => {
  const r = e && e.to;
  return he(r) ? t ? t(r) : null : r;
}, Zl = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, r, n, o, a, s, i, l, d) {
    const {
      mc: c,
      pc: g,
      pbc: p,
      o: { insert: C, querySelector: m, createText: u, createComment: A }
    } = d, b = Br(t.props);
    let { shapeFlag: w, children: F, dynamicChildren: D } = t;
    if (e == null) {
      const Z = t.el = u(""), O = t.anchor = u("");
      C(Z, r, n), C(O, r, n);
      const P = (I, j) => {
        w & 16 && (o && o.isCE && (o.ce._teleportTarget = I), c(
          F,
          I,
          j,
          o,
          a,
          s,
          i,
          l
        ));
      }, v = () => {
        const I = t.target = Qo(t.props, m), j = zl(I, t, u, C);
        I && (s !== "svg" && bs(I) ? s = "svg" : s !== "mathml" && Is(I) && (s = "mathml"), b || (P(I, j), xn(t, !1)));
      };
      b && (P(r, O), xn(t, !0)), vs(t.props) ? Te(() => {
        v(), t.el.__isMounted = !0;
      }, a) : v();
    } else {
      if (vs(t.props) && !e.el.__isMounted) {
        Te(() => {
          Zl.process(
            e,
            t,
            r,
            n,
            o,
            a,
            s,
            i,
            l,
            d
          ), delete e.el.__isMounted;
        }, a);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const Z = t.anchor = e.anchor, O = t.target = e.target, P = t.targetAnchor = e.targetAnchor, v = Br(e.props), I = v ? r : O, j = v ? Z : P;
      if (s === "svg" || bs(O) ? s = "svg" : (s === "mathml" || Is(O)) && (s = "mathml"), D ? (p(
        e.dynamicChildren,
        D,
        I,
        o,
        a,
        s,
        i
      ), Ja(e, t, !0)) : l || g(
        e,
        t,
        I,
        j,
        o,
        a,
        s,
        i,
        !1
      ), b)
        v ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : hn(
          t,
          r,
          Z,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const k = t.target = Qo(
          t.props,
          m
        );
        k && hn(
          t,
          k,
          null,
          d,
          0
        );
      } else v && hn(
        t,
        O,
        P,
        d,
        1
      );
      xn(t, b);
    }
  },
  remove(e, t, r, { um: n, o: { remove: o } }, a) {
    const {
      shapeFlag: s,
      children: i,
      anchor: l,
      targetStart: d,
      targetAnchor: c,
      target: g,
      props: p
    } = e;
    if (g && (o(d), o(c)), a && o(l), s & 16) {
      const C = a || !Br(p);
      for (let m = 0; m < i.length; m++) {
        const u = i[m];
        n(
          u,
          t,
          r,
          C,
          !!u.dynamicChildren
        );
      }
    }
  },
  move: hn,
  hydrate: lf
};
function hn(e, t, r, { o: { insert: n }, m: o }, a = 2) {
  a === 0 && n(e.targetAnchor, t, r);
  const { el: s, anchor: i, shapeFlag: l, children: d, props: c } = e, g = a === 2;
  if (g && n(s, t, r), (!g || Br(c)) && l & 16)
    for (let p = 0; p < d.length; p++)
      o(
        d[p],
        t,
        r,
        2
      );
  g && n(i, t, r);
}
function lf(e, t, r, n, o, a, {
  o: { nextSibling: s, parentNode: i, querySelector: l, insert: d, createText: c }
}, g) {
  const p = t.target = Qo(
    t.props,
    l
  );
  if (p) {
    const C = Br(t.props), m = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (C)
        t.anchor = g(
          s(e),
          t,
          i(e),
          r,
          n,
          o,
          a
        ), t.targetStart = m, t.targetAnchor = m && s(m);
      else {
        t.anchor = s(e);
        let u = m;
        for (; u; ) {
          if (u && u.nodeType === 8) {
            if (u.data === "teleport start anchor")
              t.targetStart = u;
            else if (u.data === "teleport anchor") {
              t.targetAnchor = u, p._lpa = t.targetAnchor && s(t.targetAnchor);
              break;
            }
          }
          u = s(u);
        }
        t.targetAnchor || zl(p, t, c, d), g(
          m && s(m),
          t,
          p,
          r,
          n,
          o,
          a
        );
      }
    xn(t, C);
  }
  return t.anchor && s(t.anchor);
}
const cf = Zl;
function xn(e, t) {
  const r = e.ctx;
  if (r && r.ut) {
    let n, o;
    for (t ? (n = e.el, o = e.anchor) : (n = e.targetStart, o = e.targetAnchor); n && n !== o; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", r.uid), n = n.nextSibling;
    r.ut();
  }
}
function zl(e, t, r, n) {
  const o = t.targetStart = r(""), a = t.targetAnchor = r("");
  return o[Vl] = a, e && (n(o, e), n(a, e)), a;
}
const _t = Symbol("_leaveCb"), An = Symbol("_enterCb");
function Wl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return za(() => {
    e.isMounted = !0;
  }), Wa(() => {
    e.isUnmounting = !0;
  }), e;
}
const Je = [Function, Array], ql = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Je,
  onEnter: Je,
  onAfterEnter: Je,
  onEnterCancelled: Je,
  // leave
  onBeforeLeave: Je,
  onLeave: Je,
  onAfterLeave: Je,
  onLeaveCancelled: Je,
  // appear
  onBeforeAppear: Je,
  onAppear: Je,
  onAfterAppear: Je,
  onAppearCancelled: Je
}, Jl = (e) => {
  const t = e.subTree;
  return t.component ? Jl(t.component) : t;
}, uf = {
  name: "BaseTransition",
  props: ql,
  setup(e, { slots: t }) {
    const r = lo(), n = Wl();
    return () => {
      const o = t.default && Za(t.default(), !0);
      if (!o || !o.length)
        return;
      const a = $l(o), s = X(e), { mode: i } = s;
      if (n.isLeaving)
        return yo(a);
      const l = ys(a);
      if (!l)
        return yo(a);
      let d = $r(
        l,
        s,
        n,
        r,
        // #11061, ensure enterHooks is fresh after clone
        (g) => d = g
      );
      l.type !== He && tr(l, d);
      let c = r.subTree && ys(r.subTree);
      if (c && c.type !== He && !qt(l, c) && Jl(r).type !== He) {
        let g = $r(
          c,
          s,
          n,
          r
        );
        if (tr(c, g), i === "out-in" && l.type !== He)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, r.job.flags & 8 || r.update(), delete g.afterLeave, c = void 0;
          }, yo(a);
        i === "in-out" && l.type !== He ? g.delayLeave = (p, C, m) => {
          const u = Yl(
            n,
            c
          );
          u[String(c.key)] = c, p[_t] = () => {
            C(), p[_t] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            m(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return a;
    };
  }
};
function $l(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== He) {
        t = r;
        break;
      }
  }
  return t;
}
const df = uf;
function Yl(e, t) {
  const { leavingVNodes: r } = e;
  let n = r.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(t.type, n)), n;
}
function $r(e, t, r, n, o) {
  const {
    appear: a,
    mode: s,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: g,
    onBeforeLeave: p,
    onLeave: C,
    onAfterLeave: m,
    onLeaveCancelled: u,
    onBeforeAppear: A,
    onAppear: b,
    onAfterAppear: w,
    onAppearCancelled: F
  } = t, D = String(e.key), Z = Yl(r, e), O = (I, j) => {
    I && rt(
      I,
      n,
      9,
      j
    );
  }, P = (I, j) => {
    const k = j[1];
    O(I, j), G(I) ? I.every((x) => x.length <= 1) && k() : I.length <= 1 && k();
  }, v = {
    mode: s,
    persisted: i,
    beforeEnter(I) {
      let j = l;
      if (!r.isMounted)
        if (a)
          j = A || l;
        else
          return;
      I[_t] && I[_t](
        !0
        /* cancelled */
      );
      const k = Z[D];
      k && qt(e, k) && k.el[_t] && k.el[_t](), O(j, [I]);
    },
    enter(I) {
      let j = d, k = c, x = g;
      if (!r.isMounted)
        if (a)
          j = b || d, k = w || c, x = F || g;
        else
          return;
      let T = !1;
      const H = I[An] = (B) => {
        T || (T = !0, B ? O(x, [I]) : O(k, [I]), v.delayedLeave && v.delayedLeave(), I[An] = void 0);
      };
      j ? P(j, [I, H]) : H();
    },
    leave(I, j) {
      const k = String(e.key);
      if (I[An] && I[An](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return j();
      O(p, [I]);
      let x = !1;
      const T = I[_t] = (H) => {
        x || (x = !0, j(), H ? O(u, [I]) : O(m, [I]), I[_t] = void 0, Z[k] === e && delete Z[k]);
      };
      Z[k] = e, C ? P(C, [I, T]) : T();
    },
    clone(I) {
      const j = $r(
        I,
        t,
        r,
        n,
        o
      );
      return o && o(j), j;
    }
  };
  return v;
}
function yo(e) {
  if (oo(e))
    return e = kt(e), e.children = null, e;
}
function ys(e) {
  if (!oo(e))
    return Hl(e.type) && e.children ? $l(e.children) : e;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && K(r.default))
      return r.default();
  }
}
function tr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, tr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Za(e, t = !1, r) {
  let n = [], o = 0;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    const i = r == null ? s.key : String(r) + String(s.key != null ? s.key : a);
    s.type === Ve ? (s.patchFlag & 128 && o++, n = n.concat(
      Za(s.children, t, i)
    )) : (t || s.type !== He) && n.push(i != null ? kt(s, { key: i }) : s);
  }
  if (o > 1)
    for (let a = 0; a < n.length; a++)
      n[a].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gf(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function ff() {
  const e = lo();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Gl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Nn(e, t, r, n, o = !1) {
  if (G(e)) {
    e.forEach(
      (m, u) => Nn(
        m,
        t && (G(t) ? t[u] : t),
        r,
        n,
        o
      )
    );
    return;
  }
  if (Ur(n) && !o) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Nn(e, t, r, n.component.subTree);
    return;
  }
  const a = n.shapeFlag & 4 ? co(n.component) : n.el, s = o ? null : a, { i, r: l } = e, d = t && t.r, c = i.refs === ae ? i.refs = {} : i.refs, g = i.setupState, p = X(g), C = g === ae ? () => !1 : (m) => re(p, m);
  if (d != null && d !== l && (he(d) ? (c[d] = null, C(d) && (g[d] = null)) : me(d) && (d.value = null)), K(l))
    on(l, i, 12, [s, c]);
  else {
    const m = he(l), u = me(l);
    if (m || u) {
      const A = () => {
        if (e.f) {
          const b = m ? C(l) ? g[l] : c[l] : l.value;
          o ? G(b) && Oa(b, a) : G(b) ? b.includes(a) || b.push(a) : m ? (c[l] = [a], C(l) && (g[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
        } else m ? (c[l] = s, C(l) && (g[l] = s)) : u && (l.value = s, e.k && (c[e.k] = s));
      };
      s ? (A.id = -1, Te(A, r)) : A();
    }
  }
}
Yt().requestIdleCallback;
Yt().cancelIdleCallback;
const Ur = (e) => !!e.type.__asyncLoader, oo = (e) => e.type.__isKeepAlive;
function mf(e, t) {
  Kl(e, "a", t);
}
function pf(e, t) {
  Kl(e, "da", t);
}
function Kl(e, t, r = ve) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ao(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      oo(o.parent.vnode) && hf(n, t, r, o), o = o.parent;
  }
}
function hf(e, t, r, n) {
  const o = ao(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Xl(() => {
    Oa(n[t], o);
  }, r);
}
function ao(e, t, r = ve, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...s) => {
      Mt();
      const i = sn(r), l = rt(t, r, e, s);
      return i(), Nt(), l;
    });
    return n ? o.unshift(a) : o.push(a), a;
  }
}
const wt = (e) => (t, r = ve) => {
  (!Yr || e === "sp") && ao(e, (...n) => t(...n), r);
}, Af = wt("bm"), za = wt("m"), Cf = wt(
  "bu"
), Ql = wt("u"), Wa = wt(
  "bum"
), Xl = wt("um"), vf = wt(
  "sp"
), bf = wt("rtg"), If = wt("rtc");
function yf(e, t = ve) {
  ao("ec", e, t);
}
const ec = "components", xf = "directives";
function wf(e, t) {
  return tc(ec, e, !0, t) || e;
}
const Tf = Symbol.for("v-ndc");
function Ef(e) {
  return tc(xf, e);
}
function tc(e, t, r = !0, n = !1) {
  const o = je || ve;
  if (o) {
    const a = o.type;
    if (e === ec) {
      const i = fm(
        a,
        !1
      );
      if (i && (i === t || i === Ke(t) || i === to(Ke(t))))
        return a;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      xs(o[e] || a[e], t) || // global registration
      xs(o.appContext[e], t)
    );
    return !s && n ? a : s;
  }
}
function xs(e, t) {
  return e && (e[t] || e[Ke(t)] || e[to(Ke(t))]);
}
const Xo = (e) => e ? vc(e) ? co(e) : Xo(e.parent) : null, Vr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xo(e.parent),
    $root: (e) => Xo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => __VUE_OPTIONS_API__ ? nc(e) : e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Va(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ar.bind(e.proxy)),
    $watch: (e) => __VUE_OPTIONS_API__ ? $f.bind(e) : Xe
  })
), xo = (e, t) => e !== ae && !e.__isScriptSetup && re(e, t), Sf = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: o, props: a, accessCache: s, type: i, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const C = s[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (xo(n, t))
          return s[t] = 1, n[t];
        if (o !== ae && re(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && re(d, t)
        )
          return s[t] = 3, a[t];
        if (r !== ae && re(r, t))
          return s[t] = 4, r[t];
        (!__VUE_OPTIONS_API__ || ea) && (s[t] = 0);
      }
    }
    const c = Vr[t];
    let g, p;
    if (c)
      return t === "$attrs" && Ie(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (g = i.__cssModules) && (g = g[t])
    )
      return g;
    if (r !== ae && re(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      p = l.config.globalProperties, re(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: a } = e;
    return xo(o, t) ? (o[t] = r, !0) : n !== ae && re(n, t) ? (n[t] = r, !0) : re(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: a }
  }, s) {
    let i;
    return !!r[s] || e !== ae && re(e, s) || xo(t, s) || (i = a[0]) && re(i, s) || re(n, s) || re(Vr, s) || re(o.config.globalProperties, s);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : re(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function ws(e) {
  return G(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ea = !0;
function Of(e) {
  const t = nc(e), r = e.proxy, n = e.ctx;
  ea = !1, t.beforeCreate && Ts(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: s,
    watch: i,
    provide: l,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: g,
    mounted: p,
    beforeUpdate: C,
    updated: m,
    activated: u,
    deactivated: A,
    beforeDestroy: b,
    beforeUnmount: w,
    destroyed: F,
    unmounted: D,
    render: Z,
    renderTracked: O,
    renderTriggered: P,
    errorCaptured: v,
    serverPrefetch: I,
    // public API
    expose: j,
    inheritAttrs: k,
    // assets
    components: x,
    directives: T,
    filters: H
  } = t;
  if (d && Pf(d, n, null), s)
    for (const W in s) {
      const z = s[W];
      K(z) && (n[W] = z.bind(r));
    }
  if (o) {
    const W = o.call(r, r);
    ue(W) && (e.data = xt(W));
  }
  if (ea = !0, a)
    for (const W in a) {
      const z = a[W], se = K(z) ? z.bind(r, r) : K(z.get) ? z.get.bind(r, r) : Xe, de = !K(z) && K(z.set) ? z.set.bind(r) : Xe, Ae = Q({
        get: se,
        set: de
      });
      Object.defineProperty(n, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (qe) => Ae.value = qe
      });
    }
  if (i)
    for (const W in i)
      rc(i[W], n, r, W);
  if (l) {
    const W = K(l) ? l.call(r) : l;
    Reflect.ownKeys(W).forEach((z) => {
      so(z, W[z]);
    });
  }
  c && Ts(c, e, "c");
  function J(W, z) {
    G(z) ? z.forEach((se) => W(se.bind(r))) : z && W(z.bind(r));
  }
  if (J(Af, g), J(za, p), J(Cf, C), J(Ql, m), J(mf, u), J(pf, A), J(yf, v), J(If, O), J(bf, P), J(Wa, w), J(Xl, D), J(vf, I), G(j))
    if (j.length) {
      const W = e.exposed || (e.exposed = {});
      j.forEach((z) => {
        Object.defineProperty(W, z, {
          get: () => r[z],
          set: (se) => r[z] = se
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === Xe && (e.render = Z), k != null && (e.inheritAttrs = k), x && (e.components = x), T && (e.directives = T), I && Gl(e);
}
function Pf(e, t, r = Xe) {
  G(e) && (e = ta(e));
  for (const n in e) {
    const o = e[n];
    let a;
    ue(o) ? "default" in o ? a = mt(
      o.from || n,
      o.default,
      !0
    ) : a = mt(o.from || n) : a = mt(o), me(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[n] = a;
  }
}
function Ts(e, t, r) {
  rt(
    G(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function rc(e, t, r, n) {
  let o = n.includes(".") ? pc(r, n) : () => r[n];
  if (he(e)) {
    const a = t[e];
    K(a) && ge(o, a);
  } else if (K(e))
    ge(o, e.bind(r));
  else if (ue(e))
    if (G(e))
      e.forEach((a) => rc(a, t, r, n));
    else {
      const a = K(e.handler) ? e.handler.bind(r) : t[e.handler];
      K(a) && ge(o, a, e);
    }
}
function nc(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = a.get(t);
  let l;
  return i ? l = i : !o.length && !r && !n ? l = t : (l = {}, o.length && o.forEach(
    (d) => Bn(l, d, s, !0)
  ), Bn(l, t, s)), ue(t) && a.set(t, l), l;
}
function Bn(e, t, r, n = !1) {
  const { mixins: o, extends: a } = t;
  a && Bn(e, a, r, !0), o && o.forEach(
    (s) => Bn(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const i = Ff[s] || r && r[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const Ff = {
  data: Es,
  props: Ss,
  emits: Ss,
  // objects
  methods: _r,
  computed: _r,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: _r,
  directives: _r,
  // watch
  watch: Lf,
  // provide / inject
  provide: Es,
  inject: _f
};
function Es(e, t) {
  return t ? e ? function() {
    return pe(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _f(e, t) {
  return _r(ta(e), ta(t));
}
function ta(e) {
  if (G(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _r(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ss(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    ws(e),
    ws(t ?? {})
  ) : t;
}
function Lf(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = pe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = we(e[n], t[n]);
  return r;
}
function oc() {
  return {
    app: null,
    config: {
      isNativeTag: rg,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Rf = 0;
function Df(e, t) {
  return function(n, o = null) {
    K(n) || (n = pe({}, n)), o != null && !ue(o) && (o = null);
    const a = oc(), s = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const d = a.app = {
      _uid: Rf++,
      _component: n,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: js,
      get config() {
        return a.config;
      },
      set config(c) {
      },
      use(c, ...g) {
        return s.has(c) || (c && K(c.install) ? (s.add(c), c.install(d, ...g)) : K(c) && (s.add(c), c(d, ...g))), d;
      },
      mixin(c) {
        return __VUE_OPTIONS_API__ && (a.mixins.includes(c) || a.mixins.push(c)), d;
      },
      component(c, g) {
        return g ? (a.components[c] = g, d) : a.components[c];
      },
      directive(c, g) {
        return g ? (a.directives[c] = g, d) : a.directives[c];
      },
      mount(c, g, p) {
        if (!l) {
          const C = d._ceVNode || ne(n, o);
          return C.appContext = a, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(C, c, p), l = !0, d._container = c, c.__vue_app__ = d, __VUE_PROD_DEVTOOLS__ && (d._instance = C.component, Xg(d, js)), co(C.component);
        }
      },
      onUnmount(c) {
        i.push(c);
      },
      unmount() {
        l && (rt(
          i,
          d._instance,
          16
        ), e(null, d._container), __VUE_PROD_DEVTOOLS__ && (d._instance = null, ef(d)), delete d._container.__vue_app__);
      },
      provide(c, g) {
        return a.provides[c] = g, d;
      },
      runWithContext(c) {
        const g = mr;
        mr = d;
        try {
          return c();
        } finally {
          mr = g;
        }
      }
    };
    return d;
  };
}
let mr = null;
function so(e, t) {
  if (ve) {
    let r = ve.provides;
    const n = ve.parent && ve.parent.provides;
    n === r && (r = ve.provides = Object.create(n)), r[e] = t;
  }
}
function mt(e, t, r = !1) {
  const n = ve || je;
  if (n || mr) {
    const o = mr ? mr._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && K(t) ? t.call(n && n.proxy) : t;
  }
}
const ac = {}, sc = () => Object.create(ac), ic = (e) => Object.getPrototypeOf(e) === ac;
function jf(e, t, r, n = !1) {
  const o = {}, a = sc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lc(e, t, o, a);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  r ? e.props = n ? o : Ng(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function kf(e, t, r, n) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, i = X(o), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        let p = c[g];
        if (io(e.emitsOptions, p))
          continue;
        const C = t[p];
        if (l)
          if (re(a, p))
            C !== a[p] && (a[p] = C, d = !0);
          else {
            const m = Ke(p);
            o[m] = ra(
              l,
              i,
              m,
              C,
              e,
              !1
            );
          }
        else
          C !== a[p] && (a[p] = C, d = !0);
      }
    }
  } else {
    lc(e, t, o, a) && (d = !0);
    let c;
    for (const g in i)
      (!t || // for camelCase
      !re(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = or(g)) === g || !re(t, c))) && (l ? r && // for camelCase
      (r[g] !== void 0 || // for kebab-case
      r[c] !== void 0) && (o[g] = ra(
        l,
        i,
        g,
        void 0,
        e,
        !0
      )) : delete o[g]);
    if (a !== i)
      for (const g in a)
        (!t || !re(t, g)) && (delete a[g], d = !0);
  }
  d && At(e.attrs, "set", "");
}
function lc(e, t, r, n) {
  const [o, a] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (jr(l))
        continue;
      const d = t[l];
      let c;
      o && re(o, c = Ke(l)) ? !a || !a.includes(c) ? r[c] = d : (i || (i = {}))[c] = d : io(e.emitsOptions, l) || (!(l in n) || d !== n[l]) && (n[l] = d, s = !0);
    }
  if (a) {
    const l = X(r), d = i || ae;
    for (let c = 0; c < a.length; c++) {
      const g = a[c];
      r[g] = ra(
        o,
        l,
        g,
        d[g],
        e,
        !re(d, g)
      );
    }
  }
  return s;
}
function ra(e, t, r, n, o, a) {
  const s = e[r];
  if (s != null) {
    const i = re(s, "default");
    if (i && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && K(l)) {
        const { propsDefaults: d } = o;
        if (r in d)
          n = d[r];
        else {
          const c = sn(o);
          n = d[r] = l.call(
            null,
            t
          ), c();
        }
      } else
        n = l;
      o.ce && o.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (a && !i ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === or(r)) && (n = !0));
  }
  return n;
}
const Mf = /* @__PURE__ */ new WeakMap();
function cc(e, t, r = !1) {
  const n = __VUE_OPTIONS_API__ && r ? Mf : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const a = e.props, s = {}, i = [];
  let l = !1;
  if (__VUE_OPTIONS_API__ && !K(e)) {
    const c = (g) => {
      l = !0;
      const [p, C] = cc(g, t, !0);
      pe(s, p), C && i.push(...C);
    };
    !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !l)
    return ue(e) && n.set(e, Rr), Rr;
  if (G(a))
    for (let c = 0; c < a.length; c++) {
      const g = Ke(a[c]);
      Os(g) && (s[g] = ae);
    }
  else if (a)
    for (const c in a) {
      const g = Ke(c);
      if (Os(g)) {
        const p = a[c], C = s[g] = G(p) || K(p) ? { type: p } : pe({}, p), m = C.type;
        let u = !1, A = !0;
        if (G(m))
          for (let b = 0; b < m.length; ++b) {
            const w = m[b], F = K(w) && w.name;
            if (F === "Boolean") {
              u = !0;
              break;
            } else F === "String" && (A = !1);
          }
        else
          u = K(m) && m.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = u, C[
          1
          /* shouldCastTrue */
        ] = A, (u || re(C, "default")) && i.push(g);
      }
    }
  const d = [s, i];
  return ue(e) && n.set(e, d), d;
}
function Os(e) {
  return e[0] !== "$" && !jr(e);
}
const uc = (e) => e[0] === "_" || e === "$stable", qa = (e) => G(e) ? e.map(dt) : [dt(e)], Nf = (e, t, r) => {
  if (t._n)
    return t;
  const n = af((...o) => qa(t(...o)), r);
  return n._c = !1, n;
}, dc = (e, t, r) => {
  const n = e._ctx;
  for (const o in e) {
    if (uc(o)) continue;
    const a = e[o];
    if (K(a))
      t[o] = Nf(o, a, n);
    else if (a != null) {
      const s = qa(a);
      t[o] = () => s;
    }
  }
}, gc = (e, t) => {
  const r = qa(t);
  e.slots.default = () => r;
}, fc = (e, t, r) => {
  for (const n in t)
    (r || n !== "_") && (e[n] = t[n]);
}, Bf = (e, t, r) => {
  const n = e.slots = sc();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (fc(n, t, r), r && Rn(n, "_", o, !0)) : dc(t, n);
  } else t && gc(e, t);
}, Uf = (e, t, r) => {
  const { vnode: n, slots: o } = e;
  let a = !0, s = ae;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? a = !1 : fc(o, t, r) : (a = !t.$stable, dc(t, o)), s = t;
  } else t && (gc(e, t), s = { default: 1 });
  if (a)
    for (const i in o)
      !uc(i) && s[i] == null && delete o[i];
};
function Vf() {
  typeof __VUE_OPTIONS_API__ != "boolean" && (Yt().__VUE_OPTIONS_API__ = !0), typeof __VUE_PROD_DEVTOOLS__ != "boolean" && (Yt().__VUE_PROD_DEVTOOLS__ = !1), typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (Yt().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = !1);
}
const Te = tm;
function Hf(e) {
  return Zf(e);
}
function Zf(e, t) {
  Vf();
  const r = Yt();
  r.__VUE__ = !0, __VUE_PROD_DEVTOOLS__ && Nl(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
  const {
    insert: n,
    remove: o,
    patchProp: a,
    createElement: s,
    createText: i,
    createComment: l,
    setText: d,
    setElementText: c,
    parentNode: g,
    nextSibling: p,
    setScopeId: C = Xe,
    insertStaticContent: m
  } = e, u = (f, h, y, L = null, E = null, _ = null, U = void 0, N = null, M = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !qt(f, h) && (L = te(f), qe(f, E, _, !0), f = null), h.patchFlag === -2 && (M = !1, h.dynamicChildren = null);
    const { type: R, ref: $, shapeFlag: V } = h;
    switch (R) {
      case an:
        A(f, h, y, L);
        break;
      case He:
        b(f, h, y, L);
        break;
      case wn:
        f == null && w(h, y, L, U);
        break;
      case Ve:
        x(
          f,
          h,
          y,
          L,
          E,
          _,
          U,
          N,
          M
        );
        break;
      default:
        V & 1 ? Z(
          f,
          h,
          y,
          L,
          E,
          _,
          U,
          N,
          M
        ) : V & 6 ? T(
          f,
          h,
          y,
          L,
          E,
          _,
          U,
          N,
          M
        ) : (V & 64 || V & 128) && R.process(
          f,
          h,
          y,
          L,
          E,
          _,
          U,
          N,
          M,
          vr
        );
    }
    $ != null && E && Nn($, f && f.ref, _, h || f, !h);
  }, A = (f, h, y, L) => {
    if (f == null)
      n(
        h.el = i(h.children),
        y,
        L
      );
    else {
      const E = h.el = f.el;
      h.children !== f.children && d(E, h.children);
    }
  }, b = (f, h, y, L) => {
    f == null ? n(
      h.el = l(h.children || ""),
      y,
      L
    ) : h.el = f.el;
  }, w = (f, h, y, L) => {
    [f.el, f.anchor] = m(
      f.children,
      h,
      y,
      L,
      f.el,
      f.anchor
    );
  }, F = ({ el: f, anchor: h }, y, L) => {
    let E;
    for (; f && f !== h; )
      E = p(f), n(f, y, L), f = E;
    n(h, y, L);
  }, D = ({ el: f, anchor: h }) => {
    let y;
    for (; f && f !== h; )
      y = p(f), o(f), f = y;
    o(h);
  }, Z = (f, h, y, L, E, _, U, N, M) => {
    h.type === "svg" ? U = "svg" : h.type === "math" && (U = "mathml"), f == null ? O(
      h,
      y,
      L,
      E,
      _,
      U,
      N,
      M
    ) : I(
      f,
      h,
      E,
      _,
      U,
      N,
      M
    );
  }, O = (f, h, y, L, E, _, U, N) => {
    let M, R;
    const { props: $, shapeFlag: V, transition: q, dirs: Y } = f;
    if (M = f.el = s(
      f.type,
      _,
      $ && $.is,
      $
    ), V & 8 ? c(M, f.children) : V & 16 && v(
      f.children,
      M,
      null,
      L,
      E,
      wo(f, _),
      U,
      N
    ), Y && Vt(f, null, L, "created"), P(M, f, f.scopeId, U, L), $) {
      for (const ie in $)
        ie !== "value" && !jr(ie) && a(M, ie, null, $[ie], _, L);
      "value" in $ && a(M, "value", null, $.value, _), (R = $.onVnodeBeforeMount) && lt(R, L, f);
    }
    __VUE_PROD_DEVTOOLS__ && (Rn(M, "__vnode", f, !0), Rn(M, "__vueParentComponent", L, !0)), Y && Vt(f, null, L, "beforeMount");
    const ee = zf(E, q);
    ee && q.beforeEnter(M), n(M, h, y), ((R = $ && $.onVnodeMounted) || ee || Y) && Te(() => {
      R && lt(R, L, f), ee && q.enter(M), Y && Vt(f, null, L, "mounted");
    }, E);
  }, P = (f, h, y, L, E) => {
    if (y && C(f, y), L)
      for (let _ = 0; _ < L.length; _++)
        C(f, L[_]);
    if (E) {
      let _ = E.subTree;
      if (h === _ || Ac(_.type) && (_.ssContent === h || _.ssFallback === h)) {
        const U = E.vnode;
        P(
          f,
          U,
          U.scopeId,
          U.slotScopeIds,
          E.parent
        );
      }
    }
  }, v = (f, h, y, L, E, _, U, N, M = 0) => {
    for (let R = M; R < f.length; R++) {
      const $ = f[R] = N ? Lt(f[R]) : dt(f[R]);
      u(
        null,
        $,
        h,
        y,
        L,
        E,
        _,
        U,
        N
      );
    }
  }, I = (f, h, y, L, E, _, U) => {
    const N = h.el = f.el;
    __VUE_PROD_DEVTOOLS__ && (N.__vnode = h);
    let { patchFlag: M, dynamicChildren: R, dirs: $ } = h;
    M |= f.patchFlag & 16;
    const V = f.props || ae, q = h.props || ae;
    let Y;
    if (y && Ht(y, !1), (Y = q.onVnodeBeforeUpdate) && lt(Y, y, h, f), $ && Vt(h, f, y, "beforeUpdate"), y && Ht(y, !0), (V.innerHTML && q.innerHTML == null || V.textContent && q.textContent == null) && c(N, ""), R ? j(
      f.dynamicChildren,
      R,
      N,
      y,
      L,
      wo(h, E),
      _
    ) : U || z(
      f,
      h,
      N,
      null,
      y,
      L,
      wo(h, E),
      _,
      !1
    ), M > 0) {
      if (M & 16)
        k(N, V, q, y, E);
      else if (M & 2 && V.class !== q.class && a(N, "class", null, q.class, E), M & 4 && a(N, "style", V.style, q.style, E), M & 8) {
        const ee = h.dynamicProps;
        for (let ie = 0; ie < ee.length; ie++) {
          const oe = ee[ie], Me = V[oe], Fe = q[oe];
          (Fe !== Me || oe === "value") && a(N, oe, Me, Fe, E, y);
        }
      }
      M & 1 && f.children !== h.children && c(N, h.children);
    } else !U && R == null && k(N, V, q, y, E);
    ((Y = q.onVnodeUpdated) || $) && Te(() => {
      Y && lt(Y, y, h, f), $ && Vt(h, f, y, "updated");
    }, L);
  }, j = (f, h, y, L, E, _, U) => {
    for (let N = 0; N < h.length; N++) {
      const M = f[N], R = h[N], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qt(M, R) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 70) ? g(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      u(
        M,
        R,
        $,
        null,
        L,
        E,
        _,
        U,
        !0
      );
    }
  }, k = (f, h, y, L, E) => {
    if (h !== y) {
      if (h !== ae)
        for (const _ in h)
          !jr(_) && !(_ in y) && a(
            f,
            _,
            h[_],
            null,
            E,
            L
          );
      for (const _ in y) {
        if (jr(_)) continue;
        const U = y[_], N = h[_];
        U !== N && _ !== "value" && a(f, _, N, U, E, L);
      }
      "value" in y && a(f, "value", h.value, y.value, E);
    }
  }, x = (f, h, y, L, E, _, U, N, M) => {
    const R = h.el = f ? f.el : i(""), $ = h.anchor = f ? f.anchor : i("");
    let { patchFlag: V, dynamicChildren: q, slotScopeIds: Y } = h;
    Y && (N = N ? N.concat(Y) : Y), f == null ? (n(R, y, L), n($, y, L), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      y,
      $,
      E,
      _,
      U,
      N,
      M
    )) : V > 0 && V & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (j(
      f.dynamicChildren,
      q,
      y,
      E,
      _,
      U,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || E && h === E.subTree) && Ja(
      f,
      h,
      !0
      /* shallow */
    )) : z(
      f,
      h,
      y,
      $,
      E,
      _,
      U,
      N,
      M
    );
  }, T = (f, h, y, L, E, _, U, N, M) => {
    h.slotScopeIds = N, f == null ? h.shapeFlag & 512 ? E.ctx.activate(
      h,
      y,
      L,
      U,
      M
    ) : H(
      h,
      y,
      L,
      E,
      _,
      U,
      M
    ) : B(f, h, M);
  }, H = (f, h, y, L, E, _, U) => {
    const N = f.component = lm(
      f,
      L,
      E
    );
    if (oo(f) && (N.ctx.renderer = vr), cm(N, !1, U), N.asyncDep) {
      if (E && E.registerDep(N, J, U), !f.el) {
        const M = N.subTree = ne(He);
        b(null, M, h, y);
      }
    } else
      J(
        N,
        f,
        h,
        y,
        E,
        _,
        U
      );
  }, B = (f, h, y) => {
    const L = h.component = f.component;
    if (Xf(f, h, y))
      if (L.asyncDep && !L.asyncResolved) {
        W(L, h, y);
        return;
      } else
        L.next = h, L.update();
    else
      h.el = f.el, L.vnode = h;
  }, J = (f, h, y, L, E, _, U) => {
    const N = () => {
      if (f.isMounted) {
        let { next: V, bu: q, u: Y, parent: ee, vnode: ie } = f;
        {
          const st = mc(f);
          if (st) {
            V && (V.el = ie.el, W(f, V, U)), st.asyncDep.then(() => {
              f.isUnmounted || N();
            });
            return;
          }
        }
        let oe = V, Me;
        Ht(f, !1), V ? (V.el = ie.el, W(f, V, U)) : V = ie, q && Co(q), (Me = V.props && V.props.onVnodeBeforeUpdate) && lt(Me, ee, V, ie), Ht(f, !0);
        const Fe = Fs(f), at = f.subTree;
        f.subTree = Fe, u(
          at,
          Fe,
          // parent may have changed if it's in a teleport
          g(at.el),
          // anchor may have changed if it's in a fragment
          te(at),
          f,
          E,
          _
        ), V.el = Fe.el, oe === null && em(f, Fe.el), Y && Te(Y, E), (Me = V.props && V.props.onVnodeUpdated) && Te(
          () => lt(Me, ee, V, ie),
          E
        ), __VUE_PROD_DEVTOOLS__ && Bl(f);
      } else {
        let V;
        const { el: q, props: Y } = h, { bm: ee, m: ie, parent: oe, root: Me, type: Fe } = f, at = Ur(h);
        Ht(f, !1), ee && Co(ee), !at && (V = Y && Y.onVnodeBeforeMount) && lt(V, oe, h), Ht(f, !0);
        {
          Me.ce && Me.ce._injectChildStyle(Fe);
          const st = f.subTree = Fs(f);
          u(
            null,
            st,
            y,
            L,
            f,
            E,
            _
          ), h.el = st.el;
        }
        if (ie && Te(ie, E), !at && (V = Y && Y.onVnodeMounted)) {
          const st = h;
          Te(
            () => lt(V, oe, st),
            E
          );
        }
        (h.shapeFlag & 256 || oe && Ur(oe.vnode) && oe.vnode.shapeFlag & 256) && f.a && Te(f.a, E), f.isMounted = !0, __VUE_PROD_DEVTOOLS__ && tf(f), h = y = L = null;
      }
    };
    f.scope.on();
    const M = f.effect = new hl(N);
    f.scope.off();
    const R = f.update = M.run.bind(M), $ = f.job = M.runIfDirty.bind(M);
    $.i = f, $.id = f.uid, M.scheduler = () => Va($), Ht(f, !0), R();
  }, W = (f, h, y) => {
    h.component = f;
    const L = f.vnode.props;
    f.vnode = h, f.next = null, kf(f, h.props, L, y), Uf(f, h.children, y), Mt(), Cs(f), Nt();
  }, z = (f, h, y, L, E, _, U, N, M = !1) => {
    const R = f && f.children, $ = f ? f.shapeFlag : 0, V = h.children, { patchFlag: q, shapeFlag: Y } = h;
    if (q > 0) {
      if (q & 128) {
        de(
          R,
          V,
          y,
          L,
          E,
          _,
          U,
          N,
          M
        );
        return;
      } else if (q & 256) {
        se(
          R,
          V,
          y,
          L,
          E,
          _,
          U,
          N,
          M
        );
        return;
      }
    }
    Y & 8 ? ($ & 16 && Bt(R, E, _), V !== R && c(y, V)) : $ & 16 ? Y & 16 ? de(
      R,
      V,
      y,
      L,
      E,
      _,
      U,
      N,
      M
    ) : Bt(R, E, _, !0) : ($ & 8 && c(y, ""), Y & 16 && v(
      V,
      y,
      L,
      E,
      _,
      U,
      N,
      M
    ));
  }, se = (f, h, y, L, E, _, U, N, M) => {
    f = f || Rr, h = h || Rr;
    const R = f.length, $ = h.length, V = Math.min(R, $);
    let q;
    for (q = 0; q < V; q++) {
      const Y = h[q] = M ? Lt(h[q]) : dt(h[q]);
      u(
        f[q],
        Y,
        y,
        null,
        E,
        _,
        U,
        N,
        M
      );
    }
    R > $ ? Bt(
      f,
      E,
      _,
      !0,
      !1,
      V
    ) : v(
      h,
      y,
      L,
      E,
      _,
      U,
      N,
      M,
      V
    );
  }, de = (f, h, y, L, E, _, U, N, M) => {
    let R = 0;
    const $ = h.length;
    let V = f.length - 1, q = $ - 1;
    for (; R <= V && R <= q; ) {
      const Y = f[R], ee = h[R] = M ? Lt(h[R]) : dt(h[R]);
      if (qt(Y, ee))
        u(
          Y,
          ee,
          y,
          null,
          E,
          _,
          U,
          N,
          M
        );
      else
        break;
      R++;
    }
    for (; R <= V && R <= q; ) {
      const Y = f[V], ee = h[q] = M ? Lt(h[q]) : dt(h[q]);
      if (qt(Y, ee))
        u(
          Y,
          ee,
          y,
          null,
          E,
          _,
          U,
          N,
          M
        );
      else
        break;
      V--, q--;
    }
    if (R > V) {
      if (R <= q) {
        const Y = q + 1, ee = Y < $ ? h[Y].el : L;
        for (; R <= q; )
          u(
            null,
            h[R] = M ? Lt(h[R]) : dt(h[R]),
            y,
            ee,
            E,
            _,
            U,
            N,
            M
          ), R++;
      }
    } else if (R > q)
      for (; R <= V; )
        qe(f[R], E, _, !0), R++;
    else {
      const Y = R, ee = R, ie = /* @__PURE__ */ new Map();
      for (R = ee; R <= q; R++) {
        const Ne = h[R] = M ? Lt(h[R]) : dt(h[R]);
        Ne.key != null && ie.set(Ne.key, R);
      }
      let oe, Me = 0;
      const Fe = q - ee + 1;
      let at = !1, st = 0;
      const br = new Array(Fe);
      for (R = 0; R < Fe; R++) br[R] = 0;
      for (R = Y; R <= V; R++) {
        const Ne = f[R];
        if (Me >= Fe) {
          qe(Ne, E, _, !0);
          continue;
        }
        let it;
        if (Ne.key != null)
          it = ie.get(Ne.key);
        else
          for (oe = ee; oe <= q; oe++)
            if (br[oe - ee] === 0 && qt(Ne, h[oe])) {
              it = oe;
              break;
            }
        it === void 0 ? qe(Ne, E, _, !0) : (br[it - ee] = R + 1, it >= st ? st = it : at = !0, u(
          Ne,
          h[it],
          y,
          null,
          E,
          _,
          U,
          N,
          M
        ), Me++);
      }
      const os = at ? Wf(br) : Rr;
      for (oe = os.length - 1, R = Fe - 1; R >= 0; R--) {
        const Ne = ee + R, it = h[Ne], as = Ne + 1 < $ ? h[Ne + 1].el : L;
        br[R] === 0 ? u(
          null,
          it,
          y,
          as,
          E,
          _,
          U,
          N,
          M
        ) : at && (oe < 0 || R !== os[oe] ? Ae(it, y, as, 2) : oe--);
      }
    }
  }, Ae = (f, h, y, L, E = null) => {
    const { el: _, type: U, transition: N, children: M, shapeFlag: R } = f;
    if (R & 6) {
      Ae(f.component.subTree, h, y, L);
      return;
    }
    if (R & 128) {
      f.suspense.move(h, y, L);
      return;
    }
    if (R & 64) {
      U.move(f, h, y, vr);
      return;
    }
    if (U === Ve) {
      n(_, h, y);
      for (let V = 0; V < M.length; V++)
        Ae(M[V], h, y, L);
      n(f.anchor, h, y);
      return;
    }
    if (U === wn) {
      F(f, h, y);
      return;
    }
    if (L !== 2 && R & 1 && N)
      if (L === 0)
        N.beforeEnter(_), n(_, h, y), Te(() => N.enter(_), E);
      else {
        const { leave: V, delayLeave: q, afterLeave: Y } = N, ee = () => n(_, h, y), ie = () => {
          V(_, () => {
            ee(), Y && Y();
          });
        };
        q ? q(_, ee, ie) : ie();
      }
    else
      n(_, h, y);
  }, qe = (f, h, y, L = !1, E = !1) => {
    const {
      type: _,
      props: U,
      ref: N,
      children: M,
      dynamicChildren: R,
      shapeFlag: $,
      patchFlag: V,
      dirs: q,
      cacheIndex: Y
    } = f;
    if (V === -2 && (E = !1), N != null && Nn(N, null, y, f, !0), Y != null && (h.renderCache[Y] = void 0), $ & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const ee = $ & 1 && q, ie = !Ur(f);
    let oe;
    if (ie && (oe = U && U.onVnodeBeforeUnmount) && lt(oe, h, f), $ & 6)
      mo(f.component, y, L);
    else {
      if ($ & 128) {
        f.suspense.unmount(y, L);
        return;
      }
      ee && Vt(f, null, h, "beforeUnmount"), $ & 64 ? f.type.remove(
        f,
        h,
        y,
        vr,
        L
      ) : R && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !R.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ve || V > 0 && V & 64) ? Bt(
        R,
        h,
        y,
        !1,
        !0
      ) : (_ === Ve && V & 384 || !E && $ & 16) && Bt(M, h, y), L && Cr(f);
    }
    (ie && (oe = U && U.onVnodeUnmounted) || ee) && Te(() => {
      oe && lt(oe, h, f), ee && Vt(f, null, h, "unmounted");
    }, y);
  }, Cr = (f) => {
    const { type: h, el: y, anchor: L, transition: E } = f;
    if (h === Ve) {
      sr(y, L);
      return;
    }
    if (h === wn) {
      D(f);
      return;
    }
    const _ = () => {
      o(y), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (f.shapeFlag & 1 && E && !E.persisted) {
      const { leave: U, delayLeave: N } = E, M = () => U(y, _);
      N ? N(f.el, _, M) : M();
    } else
      _();
  }, sr = (f, h) => {
    let y;
    for (; f !== h; )
      y = p(f), o(f), f = y;
    o(h);
  }, mo = (f, h, y) => {
    const { bum: L, scope: E, job: _, subTree: U, um: N, m: M, a: R } = f;
    Ps(M), Ps(R), L && Co(L), E.stop(), _ && (_.flags |= 8, qe(U, f, h, y)), N && Te(N, h), Te(() => {
      f.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), __VUE_PROD_DEVTOOLS__ && nf(f);
  }, Bt = (f, h, y, L = !1, E = !1, _ = 0) => {
    for (let U = _; U < f.length; U++)
      qe(f[U], h, y, L, E);
  }, te = (f) => {
    if (f.shapeFlag & 6)
      return te(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = p(f.anchor || f.el), y = h && h[Vl];
    return y ? p(y) : h;
  };
  let ot = !1;
  const ns = (f, h, y) => {
    f == null ? h._vnode && qe(h._vnode, null, null, !0) : u(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      y
    ), h._vnode = f, ot || (ot = !0, Cs(), kl(), ot = !1);
  }, vr = {
    p: u,
    um: qe,
    m: Ae,
    r: Cr,
    mt: H,
    mc: v,
    pc: z,
    pbc: j,
    n: te,
    o: e
  };
  return {
    render: ns,
    hydrate: void 0,
    createApp: Df(ns)
  };
}
function wo({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Ht({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ja(e, t, r = !1) {
  const n = e.children, o = t.children;
  if (G(n) && G(o))
    for (let a = 0; a < n.length; a++) {
      const s = n[a];
      let i = o[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = Lt(o[a]), i.el = s.el), !r && i.patchFlag !== -2 && Ja(s, i)), i.type === an && (i.el = s.el);
    }
}
function Wf(e) {
  const t = e.slice(), r = [0];
  let n, o, a, s, i;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const d = e[n];
    if (d !== 0) {
      if (o = r[r.length - 1], e[o] < d) {
        t[n] = o, r.push(n);
        continue;
      }
      for (a = 0, s = r.length - 1; a < s; )
        i = a + s >> 1, e[r[i]] < d ? a = i + 1 : s = i;
      d < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, s = r[a - 1]; a-- > 0; )
    r[a] = s, s = t[s];
  return r;
}
function mc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mc(t);
}
function Ps(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const qf = Symbol.for("v-scx"), Jf = () => mt(qf);
function ar(e, t) {
  return $a(e, null, t);
}
function ge(e, t, r) {
  return $a(e, t, r);
}
function $a(e, t, r = ae) {
  const { immediate: n, deep: o, flush: a, once: s } = r, i = pe({}, r), l = t && n || !t && a !== "post";
  let d;
  if (Yr) {
    if (a === "sync") {
      const C = Jf();
      d = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!l) {
      const C = () => {
      };
      return C.stop = Xe, C.resume = Xe, C.pause = Xe, C;
    }
  }
  const c = ve;
  i.call = (C, m, u) => rt(C, c, m, u);
  let g = !1;
  a === "post" ? i.scheduler = (C) => {
    Te(C, c && c.suspense);
  } : a !== "sync" && (g = !0, i.scheduler = (C, m) => {
    m ? C() : Va(C);
  }), i.augmentJob = (C) => {
    t && (C.flags |= 4), g && (C.flags |= 2, c && (C.id = c.uid, C.i = c));
  };
  const p = Yg(e, t, i);
  return Yr && (d ? d.push(p) : l && p()), p;
}
function $f(e, t, r) {
  const n = this.proxy, o = he(e) ? e.includes(".") ? pc(n, e) : () => n[e] : e.bind(n, n);
  let a;
  K(t) ? a = t : (a = t.handler, r = t);
  const s = sn(this), i = $a(o, a.bind(n), r);
  return s(), i;
}
function pc(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++)
      n = n[r[o]];
    return n;
  };
}
const Yf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ke(t)}Modifiers`] || e[`${or(t)}Modifiers`];
function Gf(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ae;
  let o = r;
  const a = t.startsWith("update:"), s = a && Yf(n, t.slice(7));
  s && (s.trim && (o = r.map((c) => he(c) ? c.trim() : c)), s.number && (o = r.map(ug))), __VUE_PROD_DEVTOOLS__ && of(e, t, o);
  let i, l = n[i = Ao(t)] || // also try camelCase event handler (#2249)
  n[i = Ao(Ke(t))];
  !l && a && (l = n[i = Ao(or(t))]), l && rt(
    l,
    e,
    6,
    o
  );
  const d = n[i + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, rt(
      d,
      e,
      6,
      o
    );
  }
}
function hc(e, t, r = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let s = {}, i = !1;
  if (__VUE_OPTIONS_API__ && !K(e)) {
    const l = (d) => {
      const c = hc(d, t, !0);
      c && (i = !0, pe(s, c));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !i ? (ue(e) && n.set(e, null), null) : (G(a) ? a.forEach((l) => s[l] = null) : pe(s, a), ue(e) && n.set(e, s), s);
}
function io(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), re(e, t[0].toLowerCase() + t.slice(1)) || re(e, or(t)) || re(e, t));
}
function Fs(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: o,
    propsOptions: [a],
    slots: s,
    attrs: i,
    emit: l,
    render: d,
    renderCache: c,
    props: g,
    data: p,
    setupState: C,
    ctx: m,
    inheritAttrs: u
  } = e, A = Mn(e);
  let b, w;
  try {
    if (r.shapeFlag & 4) {
      const D = o || n, Z = D;
      b = dt(
        d.call(
          Z,
          D,
          c,
          g,
          C,
          p,
          m
        )
      ), w = i;
    } else {
      const D = t;
      b = dt(
        D.length > 1 ? D(
          g,
          { attrs: i, slots: s, emit: l }
        ) : D(
          g,
          null
        )
      ), w = t.props ? i : Kf(i);
    }
  } catch (D) {
    ro(D, e, 1), b = ne(He);
  }
  let F = b;
  if (w && u !== !1) {
    const D = Object.keys(w), { shapeFlag: Z } = F;
    D.length && Z & 7 && (a && D.some(Sa) && (w = Qf(
      w,
      a
    )), F = kt(F, w, !1, !0));
  }
  return r.dirs && (F = kt(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(r.dirs) : r.dirs), r.transition && tr(F, r.transition), b = F, Mn(A), b;
}
const Kf = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Qn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Qf = (e, t) => {
  const r = {};
  for (const n in e)
    (!Sa(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Xf(e, t, r) {
  const { props: n, children: o, component: a } = e, { props: s, children: i, patchFlag: l } = t, d = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? _s(n, s, d) : !!s;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        const p = c[g];
        if (s[p] !== n[p] && !io(d, p))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : n === s ? !1 : n ? s ? _s(n, s, d) : !0 : !!s;
  return !1;
}
function _s(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if (t[a] !== e[a] && !io(r, a))
      return !0;
  }
  return !1;
}
function em({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const Ac = (e) => e.__isSuspense;
function tm(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Qg(e);
}
const Ve = Symbol.for("v-fgt"), an = Symbol.for("v-txt"), He = Symbol.for("v-cmt"), wn = Symbol.for("v-stc");
let Dt = null, Ya = 1;
function Ls(e, t = !1) {
  Ya += e, e < 0 && Dt && t && (Dt.hasOnce = !0);
}
function Un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Cc = ({ key: e }) => e ?? null, Tn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || me(e) || K(e) ? { i: je, r: e, k: t, f: !!r } : e : null);
function rm(e, t = null, r = null, n = 0, o = null, a = e === Ve ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cc(t),
    ref: t && Tn(t),
    scopeId: Ul,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: je
  };
  return i ? (Ga(l, r), a & 128 && e.normalize(l)) : r && (l.shapeFlag |= he(r) ? 8 : 16), Ya > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Dt.push(l), l;
}
const ne = nm;
function nm(e, t = null, r = null, n = 0, o = null, a = !1) {
  if ((!e || e === Tf) && (e = He), Un(e)) {
    const i = kt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Ga(i, r), Ya > 0 && !a && Dt && (i.shapeFlag & 6 ? Dt[Dt.indexOf(e)] = i : Dt.push(i)), i.patchFlag = -2, i;
  }
  if (mm(e) && (e = e.__vccOpts), t) {
    t = om(t);
    let { class: i, style: l } = t;
    i && !he(i) && (t.class = _a(i)), ue(l) && (Ua(l) && !G(l) && (l = pe({}, l)), t.style = Fa(l));
  }
  const s = he(e) ? 1 : Ac(e) ? 128 : Hl(e) ? 64 : ue(e) ? 4 : K(e) ? 2 : 0;
  return rm(
    e,
    t,
    r,
    n,
    o,
    s,
    a,
    !0
  );
}
function om(e) {
  return e ? Ua(e) || ic(e) ? pe({}, e) : e : null;
}
function kt(e, t, r = !1, n = !1) {
  const { props: o, ref: a, patchFlag: s, children: i, transition: l } = e, d = t ? ze(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Cc(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? G(a) ? a.concat(Tn(t)) : [a, Tn(t)] : Tn(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && kt(e.ssContent),
    ssFallback: e.ssFallback && kt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && tr(
    c,
    l.clone(c)
  ), c;
}
function am(e = " ", t = 0) {
  return ne(an, null, e, t);
}
function dt(e) {
  return e == null || typeof e == "boolean" ? ne(He) : G(e) ? ne(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Un(e) ? Lt(e) : ne(an, null, String(e));
}
function Lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kt(e);
}
function Ga(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (G(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ga(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !ic(t) ? t._ctx = je : o === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else K(t) ? (t = { default: t, _ctx: je }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [am(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function ze(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = _a([t.class, n.class]));
      else if (o === "style")
        t.style = Fa([t.style, n.style]);
      else if (Qn(o)) {
        const a = t[o], s = n[o];
        s && a !== s && !(G(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function lt(e, t, r, n = null) {
  rt(e, t, 7, [
    r,
    n
  ]);
}
const sm = oc();
let im = 0;
function lm(e, t, r) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || sm, a = {
    uid: im++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: cc(n, o),
    emitsOptions: hc(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Gf.bind(null, a), e.ce && e.ce(a), a;
}
let ve = null;
const lo = () => ve || je;
let Vn, na;
{
  const e = Yt(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (a) => {
      o.length > 1 ? o.forEach((s) => s(a)) : o[0](a);
    };
  };
  Vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ve = r
  ), na = t(
    "__VUE_SSR_SETTERS__",
    (r) => Yr = r
  );
}
const sn = (e) => {
  const t = ve;
  return Vn(e), e.scope.on(), () => {
    e.scope.off(), Vn(t);
  };
}, Rs = () => {
  ve && ve.scope.off(), Vn(null);
};
function vc(e) {
  return e.vnode.shapeFlag & 4;
}
let Yr = !1;
function cm(e, t = !1, r = !1) {
  t && na(t);
  const { props: n, children: o } = e.vnode, a = vc(e);
  jf(e, n, a, t), Bf(e, o, r);
  const s = a ? um(e, t) : void 0;
  return t && na(!1), s;
}
function um(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sf);
  const { setup: n } = r;
  if (n) {
    Mt();
    const o = e.setupContext = n.length > 1 ? gm(e) : null, a = sn(e), s = on(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    ), i = fl(s);
    if (Nt(), a(), (i || e.sp) && !Ur(e) && Gl(e), i) {
      if (s.then(Rs, Rs), t)
        return s.then((l) => {
          Ds(e, l);
        }).catch((l) => {
          ro(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Ds(e, s);
  } else
    bc(e);
}
function Ds(e, t, r) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t), e.setupState = _l(t)), bc(e);
}
function bc(e, t, r) {
  const n = e.type;
  if (e.render || (e.render = n.render || Xe), __VUE_OPTIONS_API__) {
    const o = sn(e);
    Mt();
    try {
      Of(e);
    } finally {
      Nt(), o();
    }
  }
}
const dm = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function gm(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, dm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function co(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_l(Bg(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Vr)
        return Vr[r](e);
    },
    has(t, r) {
      return r in t || r in Vr;
    }
  })) : e.proxy;
}
function fm(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mm(e) {
  return K(e) && "__vccOpts" in e;
}
const Q = (e, t) => Jg(e, t, Yr);
function uo(e, t, r) {
  const n = arguments.length;
  return n === 2 ? ue(t) && !G(t) ? Un(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Un(r) && (r = [r]), ne(e, t, r));
}
const js = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let oa;
const ks = typeof window < "u" && window.trustedTypes;
if (ks)
  try {
    oa = /* @__PURE__ */ ks.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ic = oa ? (e) => oa.createHTML(e) : (e) => e, pm = "http://www.w3.org/2000/svg", hm = "http://www.w3.org/1998/Math/MathML", ht = typeof document < "u" ? document : null, Ms = ht && /* @__PURE__ */ ht.createElement("template"), Am = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const o = t === "svg" ? ht.createElementNS(pm, e) : t === "mathml" ? ht.createElementNS(hm, e) : r ? ht.createElement(e, { is: r }) : ht.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => ht.createTextNode(e),
  createComment: (e) => ht.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ht.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, o, a) {
    const s = r ? r.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), r), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Ms.innerHTML = Ic(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ms.content;
      if (n === "svg" || n === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Et = "transition", Sr = "animation", pr = Symbol("_vtc"), yc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, xc = /* @__PURE__ */ pe(
  {},
  ql,
  yc
), Cm = (e) => (e.displayName = "Transition", e.props = xc, e), wc = /* @__PURE__ */ Cm(
  (e, { slots: t }) => uo(df, Tc(e), t)
), Zt = (e, t = []) => {
  G(e) ? e.forEach((r) => r(...t)) : e && e(...t);
}, Ns = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Tc(e) {
  const t = {};
  for (const x in e)
    x in yc || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const {
    name: r = "v",
    type: n,
    duration: o,
    enterFromClass: a = `${r}-enter-from`,
    enterActiveClass: s = `${r}-enter-active`,
    enterToClass: i = `${r}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: d = s,
    appearToClass: c = i,
    leaveFromClass: g = `${r}-leave-from`,
    leaveActiveClass: p = `${r}-leave-active`,
    leaveToClass: C = `${r}-leave-to`
  } = e, m = vm(o), u = m && m[0], A = m && m[1], {
    onBeforeEnter: b,
    onEnter: w,
    onEnterCancelled: F,
    onLeave: D,
    onLeaveCancelled: Z,
    onBeforeAppear: O = b,
    onAppear: P = w,
    onAppearCancelled: v = F
  } = t, I = (x, T, H, B) => {
    x._enterCancelled = B, Ot(x, T ? c : i), Ot(x, T ? d : s), H && H();
  }, j = (x, T) => {
    x._isLeaving = !1, Ot(x, g), Ot(x, C), Ot(x, p), T && T();
  }, k = (x) => (T, H) => {
    const B = x ? P : w, J = () => I(T, x, H);
    Zt(B, [T, J]), Bs(() => {
      Ot(T, x ? l : a), ct(T, x ? c : i), Ns(B) || Us(T, n, u, J);
    });
  };
  return pe(t, {
    onBeforeEnter(x) {
      Zt(b, [x]), ct(x, a), ct(x, s);
    },
    onBeforeAppear(x) {
      Zt(O, [x]), ct(x, l), ct(x, d);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(x, T) {
      x._isLeaving = !0;
      const H = () => j(x, T);
      ct(x, g), x._enterCancelled ? (ct(x, p), aa()) : (aa(), ct(x, p)), Bs(() => {
        x._isLeaving && (Ot(x, g), ct(x, C), Ns(D) || Us(x, n, A, H));
      }), Zt(D, [x, H]);
    },
    onEnterCancelled(x) {
      I(x, !1, void 0, !0), Zt(F, [x]);
    },
    onAppearCancelled(x) {
      I(x, !0, void 0, !0), Zt(v, [x]);
    },
    onLeaveCancelled(x) {
      j(x), Zt(Z, [x]);
    }
  });
}
function vm(e) {
  if (e == null)
    return null;
  if (ue(e))
    return [To(e.enter), To(e.leave)];
  {
    const t = To(e);
    return [t, t];
  }
}
function To(e) {
  return dg(e);
}
function ct(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[pr] || (e[pr] = /* @__PURE__ */ new Set())).add(t);
}
function Ot(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const r = e[pr];
  r && (r.delete(t), r.size || (e[pr] = void 0));
}
function Bs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let bm = 0;
function Us(e, t, r, n) {
  const o = e._endId = ++bm, a = () => {
    o === e._endId && n();
  };
  if (r != null)
    return setTimeout(a, r);
  const { type: s, timeout: i, propCount: l } = Ec(e, t);
  if (!s)
    return n();
  const d = s + "end";
  let c = 0;
  const g = () => {
    e.removeEventListener(d, p), a();
  }, p = (C) => {
    C.target === e && ++c >= l && g();
  };
  setTimeout(() => {
    c < l && g();
  }, i + 1), e.addEventListener(d, p);
}
function Ec(e, t) {
  const r = window.getComputedStyle(e), n = (m) => (r[m] || "").split(", "), o = n(`${Et}Delay`), a = n(`${Et}Duration`), s = Vs(o, a), i = n(`${Sr}Delay`), l = n(`${Sr}Duration`), d = Vs(i, l);
  let c = null, g = 0, p = 0;
  t === Et ? s > 0 && (c = Et, g = s, p = a.length) : t === Sr ? d > 0 && (c = Sr, g = d, p = l.length) : (g = Math.max(s, d), c = g > 0 ? s > d ? Et : Sr : null, p = c ? c === Et ? a.length : l.length : 0);
  const C = c === Et && /\b(transform|all)(,|$)/.test(
    n(`${Et}Property`).toString()
  );
  return {
    type: c,
    timeout: g,
    propCount: p,
    hasTransform: C
  };
}
function Vs(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((r, n) => Hs(r) + Hs(e[n])));
}
function Hs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function aa() {
  return document.body.offsetHeight;
}
function Im(e, t, r) {
  const n = e[pr];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Hn = Symbol("_vod"), Sc = Symbol("_vsh"), ym = {
  beforeMount(e, { value: t }, { transition: r }) {
    e[Hn] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Or(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Or(e, !0), n.enter(e)) : n.leave(e, () => {
      Or(e, !1);
    }) : Or(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Or(e, t);
  }
};
function Or(e, t) {
  e.style.display = t ? e[Hn] : "none", e[Sc] = !t;
}
const xm = Symbol(""), wm = /(^|;)\s*display\s*:/;
function Tm(e, t, r) {
  const n = e.style, o = he(r);
  let a = !1;
  if (r && !o) {
    if (t)
      if (he(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          r[i] == null && En(n, i, "");
        }
      else
        for (const s in t)
          r[s] == null && En(n, s, "");
    for (const s in r)
      s === "display" && (a = !0), En(n, s, r[s]);
  } else if (o) {
    if (t !== r) {
      const s = n[xm];
      s && (r += ";" + s), n.cssText = r, a = wm.test(r);
    }
  } else t && e.removeAttribute("style");
  Hn in e && (e[Hn] = a ? n.display : "", e[Sc] && (n.display = "none"));
}
const Zs = /\s*!important$/;
function En(e, t, r) {
  if (G(r))
    r.forEach((n) => En(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Em(e, t);
    Zs.test(r) ? e.setProperty(
      or(n),
      r.replace(Zs, ""),
      "important"
    ) : e[n] = r;
  }
}
const zs = ["Webkit", "Moz", "ms"], Eo = {};
function Em(e, t) {
  const r = Eo[t];
  if (r)
    return r;
  let n = Ke(t);
  if (n !== "filter" && n in e)
    return Eo[t] = n;
  n = to(n);
  for (let o = 0; o < zs.length; o++) {
    const a = zs[o] + n;
    if (a in e)
      return Eo[t] = a;
  }
  return t;
}
const Ws = "http://www.w3.org/1999/xlink";
function qs(e, t, r, n, o, a = Ag(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ws, t.slice(6, t.length)) : e.setAttributeNS(Ws, t, r) : r == null || a && !ml(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : hr(r) ? String(r) : r
  );
}
function Js(e, t, r, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ic(r) : r);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const i = a === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (i !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const i = typeof e[t];
    i === "boolean" ? r = ml(r) : r == null && i === "string" ? (r = "", s = !0) : i === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(o || t);
}
function Sm(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Om(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const $s = Symbol("_vei");
function Pm(e, t, r, n, o = null) {
  const a = e[$s] || (e[$s] = {}), s = a[t];
  if (n && s)
    s.value = n;
  else {
    const [i, l] = Fm(t);
    if (n) {
      const d = a[t] = Rm(
        n,
        o
      );
      Sm(e, i, d, l);
    } else s && (Om(e, i, s, l), a[t] = void 0);
  }
}
const Ys = /(?:Once|Passive|Capture)$/;
function Fm(e) {
  let t;
  if (Ys.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ys); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : or(e.slice(2)), t];
}
let So = 0;
const _m = /* @__PURE__ */ Promise.resolve(), Lm = () => So || (_m.then(() => So = 0), So = Date.now());
function Rm(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    rt(
      Dm(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Lm(), r;
}
function Dm(e, t) {
  if (G(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (o) => !o._stopped && n && n(o)
    );
  } else
    return t;
}
const Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jm = (e, t, r, n, o, a) => {
  const s = o === "svg";
  t === "class" ? Im(e, n, s) : t === "style" ? Tm(e, r, n) : Qn(t) ? Sa(t) || Pm(e, t, r, n, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : km(e, t, n, s)) ? (Js(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qs(e, t, n, s, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !he(n)) ? Js(e, Ke(t), n, a, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), qs(e, t, n, s));
};
function km(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Gs(t) && K(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Gs(t) && he(r) ? !1 : t in e;
}
const Oc = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap(), Zn = Symbol("_moveCb"), Ks = Symbol("_enterCb"), Mm = (e) => (delete e.props.mode, e), Nm = /* @__PURE__ */ Mm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pe({}, xc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const r = lo(), n = Wl();
    let o, a;
    return Ql(() => {
      if (!o.length)
        return;
      const s = e.moveClass || `${e.name || "v"}-move`;
      if (!Zm(
        o[0].el,
        r.vnode.el,
        s
      ))
        return;
      o.forEach(Um), o.forEach(Vm);
      const i = o.filter(Hm);
      aa(), i.forEach((l) => {
        const d = l.el, c = d.style;
        ct(d, s), c.transform = c.webkitTransform = c.transitionDuration = "";
        const g = d[Zn] = (p) => {
          p && p.target !== d || (!p || /transform$/.test(p.propertyName)) && (d.removeEventListener("transitionend", g), d[Zn] = null, Ot(d, s));
        };
        d.addEventListener("transitionend", g);
      });
    }), () => {
      const s = X(e), i = Tc(s);
      let l = s.tag || Ve;
      if (o = [], a)
        for (let d = 0; d < a.length; d++) {
          const c = a[d];
          c.el && c.el instanceof Element && (o.push(c), tr(
            c,
            $r(
              c,
              i,
              n,
              r
            )
          ), Oc.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      a = t.default ? Za(t.default()) : [];
      for (let d = 0; d < a.length; d++) {
        const c = a[d];
        c.key != null && tr(
          c,
          $r(c, i, n, r)
        );
      }
      return ne(l, null, a);
    };
  }
}), Bm = Nm;
function Um(e) {
  const t = e.el;
  t[Zn] && t[Zn](), t[Ks] && t[Ks]();
}
function Vm(e) {
  Pc.set(e, e.el.getBoundingClientRect());
}
function Hm(e) {
  const t = Oc.get(e), r = Pc.get(e), n = t.left - r.left, o = t.top - r.top;
  if (n || o) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${n}px,${o}px)`, a.transitionDuration = "0s", e;
  }
}
function Zm(e, t, r) {
  const n = e.cloneNode(), o = e[pr];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && n.classList.remove(l));
  }), r.split(/\s+/).forEach((i) => i && n.classList.add(i)), n.style.display = "none";
  const a = t.nodeType === 1 ? t : t.parentNode;
  a.appendChild(n);
  const { hasTransform: s } = Ec(n);
  return a.removeChild(n), s;
}
const zm = /* @__PURE__ */ pe({ patchProp: jm }, Am);
let Qs;
function Wm() {
  return Qs || (Qs = Hf(zm));
}
const Fc = (...e) => {
  Wm().render(...e);
};
function go(e, t) {
  let r;
  function n() {
    r = zr(), r.run(() => t.length ? t(() => {
      r?.stop(), n();
    }) : t());
  }
  ge(e, (o) => {
    o && !r ? n() : o || (r?.stop(), r = void 0);
  }, {
    immediate: !0
  }), Qe(() => {
    r?.stop();
  });
}
const fe = typeof window < "u", qm = fe && "IntersectionObserver" in window, Jm = fe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);
function $m(e, t, r) {
  const n = t.length - 1;
  if (n < 0) return e === void 0 ? r : e;
  for (let o = 0; o < n; o++) {
    if (e == null)
      return r;
    e = e[t[o]];
  }
  return e == null || e[t[n]] === void 0 ? r : e[t[n]];
}
function Xs(e, t, r) {
  return e == null || !t || typeof t != "string" ? r : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), $m(e, t.split("."), r));
}
function _c(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (r, n) => t + n);
}
function ye(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const r = Number(e);
  return isNaN(r) ? String(e) : isFinite(r) ? `${r}${t}` : void 0;
}
function Lc(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ei(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Ym(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return t?.nodeType === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const ti = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Rc(e) {
  return Object.keys(e);
}
function Oo(e, t) {
  return t.every((r) => e.hasOwnProperty(r));
}
function Gm(e, t) {
  const r = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
  return r;
}
function Km(e, t) {
  const r = {
    ...e
  };
  return t.forEach((n) => delete r[n]), r;
}
const Qm = /^on[^a-z]/, Dc = (e) => Qm.test(e);
function sa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(r, e));
}
function ri(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + r.repeat(Math.max(0, t - e.length));
}
function ni(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Xm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const r = [];
  let n = 0;
  for (; n < e.length; )
    r.push(e.substr(n, t)), n += t;
  return r;
}
function It() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
  const n = {};
  for (const o in e)
    n[o] = e[o];
  for (const o in t) {
    const a = e[o], s = t[o];
    if (ei(a) && ei(s)) {
      n[o] = It(a, s, r);
      continue;
    }
    if (r && Array.isArray(a) && Array.isArray(s)) {
      n[o] = r(a, s);
      continue;
    }
    n[o] = s;
  }
  return n;
}
function Kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Kt.cache.has(e)) return Kt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Kt.cache.set(e, t), t;
}
Kt.cache = /* @__PURE__ */ new Map();
function jc(e) {
  const t = xt({}), r = Q(e);
  return ar(() => {
    for (const n in r.value)
      t[n] = r.value[n];
  }, {
    flush: "sync"
  }), Ll(t);
}
function ia(e, t) {
  return e.includes(t);
}
function kc(e) {
  return e[2].toLowerCase() + e.slice(3);
}
function ep(e, t) {
  if (!(fe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`))) return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function tp(e, t) {
  if (!fe || e === 0)
    return t(), () => {
    };
  const r = window.setTimeout(t, e);
  return () => window.clearTimeout(r);
}
function oi() {
  const e = ke(), t = (r) => {
    e.value = r;
  };
  return Object.defineProperty(t, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (r) => e.value = r
  }), Object.defineProperty(t, "el", {
    enumerable: !0,
    get: () => Ym(e.value)
  }), t;
}
const Mc = ["top", "bottom"], rp = ["start", "end", "left", "right"];
function ai(e, t) {
  let [r, n] = e.split(" ");
  return n || (n = ia(Mc, r) ? "start" : ia(rp, r) ? "top" : "center"), {
    side: si(r, t),
    align: si(n, t)
  };
}
function si(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Po(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Fo(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function ii(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function li(e) {
  return ia(Mc, e.side) ? "y" : "x";
}
class Qt {
  constructor(t) {
    let {
      x: r,
      y: n,
      width: o,
      height: a
    } = t;
    this.x = r, this.y = n, this.width = o, this.height = a;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function ci(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function np(e) {
  return Array.isArray(e) ? new Qt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function op(e) {
  const t = e.getBoundingClientRect(), r = getComputedStyle(e), n = r.transform;
  if (n) {
    let o, a, s, i, l;
    if (n.startsWith("matrix3d("))
      o = n.slice(9, -1).split(/, /), a = Number(o[0]), s = Number(o[5]), i = Number(o[12]), l = Number(o[13]);
    else if (n.startsWith("matrix("))
      o = n.slice(7, -1).split(/, /), a = Number(o[0]), s = Number(o[3]), i = Number(o[4]), l = Number(o[5]);
    else
      return new Qt(t);
    const d = r.transformOrigin, c = t.x - i - (1 - a) * parseFloat(d), g = t.y - l - (1 - s) * parseFloat(d.slice(d.indexOf(" ") + 1)), p = a ? t.width / a : e.offsetWidth + 1, C = s ? t.height / s : e.offsetHeight + 1;
    return new Qt({
      x: c,
      y: g,
      width: p,
      height: C
    });
  } else
    return new Qt(t);
}
function ap(e, t, r) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let n;
  try {
    n = e.animate(t, r);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof n.finished > "u" && (n.finished = new Promise((o) => {
    n.onfinish = () => {
      o(n);
    };
  })), n;
}
const Sn = /* @__PURE__ */ new WeakMap();
function sp(e, t) {
  Object.keys(t).forEach((r) => {
    if (Dc(r)) {
      const n = kc(r), o = Sn.get(e);
      if (t[r] == null)
        o?.forEach((a) => {
          const [s, i] = a;
          s === n && (e.removeEventListener(n, i), o.delete(a));
        });
      else if (!o || ![...o].some((a) => a[0] === n && a[1] === t[r])) {
        e.addEventListener(n, t[r]);
        const a = o || /* @__PURE__ */ new Set();
        a.add([n, t[r]]), Sn.has(e) || Sn.set(e, a);
      }
    } else
      t[r] == null ? e.removeAttribute(r) : e.setAttribute(r, t[r]);
  });
}
function ip(e, t) {
  Object.keys(t).forEach((r) => {
    if (Dc(r)) {
      const n = kc(r), o = Sn.get(e);
      o?.forEach((a) => {
        const [s, i] = a;
        s === n && (e.removeEventListener(n, i), o.delete(a));
      });
    } else
      e.removeAttribute(r);
  });
}
const lr = 2.4, ui = 0.2126729, di = 0.7151522, gi = 0.072175, lp = 0.55, cp = 0.58, up = 0.57, dp = 0.62, Cn = 0.03, fi = 1.45, gp = 5e-4, fp = 1.25, mp = 1.25, pp = 0.078, mi = 12.82051282051282, vn = 0.06, hp = 1e-3;
function pi(e, t) {
  const r = (e.r / 255) ** lr, n = (e.g / 255) ** lr, o = (e.b / 255) ** lr, a = (t.r / 255) ** lr, s = (t.g / 255) ** lr, i = (t.b / 255) ** lr;
  let l = r * ui + n * di + o * gi, d = a * ui + s * di + i * gi;
  if (l <= Cn && (l += (Cn - l) ** fi), d <= Cn && (d += (Cn - d) ** fi), Math.abs(d - l) < gp) return 0;
  let c;
  if (d > l) {
    const g = (d ** lp - l ** cp) * fp;
    c = g < hp ? 0 : g < pp ? g - g * mi * vn : g - vn;
  } else {
    const g = (d ** dp - l ** up) * mp;
    c = g > -1e-3 ? 0 : g > -0.078 ? g - g * mi * vn : g + vn;
  }
  return c * 100;
}
const zn = 0.20689655172413793, Ap = (e) => e > zn ** 3 ? Math.cbrt(e) : e / (3 * zn ** 2) + 4 / 29, Cp = (e) => e > zn ? e ** 3 : 3 * zn ** 2 * (e - 4 / 29);
function Nc(e) {
  const t = Ap, r = t(e[1]);
  return [116 * r - 16, 500 * (t(e[0] / 0.95047) - r), 200 * (r - t(e[2] / 1.08883))];
}
function Bc(e) {
  const t = Cp, r = (e[0] + 16) / 116;
  return [t(r + e[1] / 500) * 0.95047, t(r), t(r - e[2] / 200) * 1.08883];
}
const vp = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], bp = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Ip = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], yp = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Uc(e) {
  const t = Array(3), r = bp, n = vp;
  for (let o = 0; o < 3; ++o)
    t[o] = Math.round(sa(r(n[o][0] * e[0] + n[o][1] * e[1] + n[o][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function Ka(e) {
  let {
    r: t,
    g: r,
    b: n
  } = e;
  const o = [0, 0, 0], a = yp, s = Ip;
  t = a(t / 255), r = a(r / 255), n = a(n / 255);
  for (let i = 0; i < 3; ++i)
    o[i] = s[i][0] * t + s[i][1] * r + s[i][2] * n;
  return o;
}
function la(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function xp(e) {
  return la(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const hi = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, wp = {
  rgb: (e, t, r, n) => ({
    r: e,
    g: t,
    b: r,
    a: n
  }),
  rgba: (e, t, r, n) => ({
    r: e,
    g: t,
    b: r,
    a: n
  }),
  hsl: (e, t, r, n) => Ai({
    h: e,
    s: t,
    l: r,
    a: n
  }),
  hsla: (e, t, r, n) => Ai({
    h: e,
    s: t,
    l: r,
    a: n
  }),
  hsv: (e, t, r, n) => Gr({
    h: e,
    s: t,
    v: r,
    a: n
  }),
  hsva: (e, t, r, n) => Gr({
    h: e,
    s: t,
    v: r,
    a: n
  })
};
function ft(e) {
  if (typeof e == "number")
    return {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && hi.test(e)) {
    const {
      groups: t
    } = e.match(hi), {
      fn: r,
      values: n
    } = t, o = n.split(/,\s*|\s*\/\s*|\s+/).map((a, s) => a.endsWith("%") || // unitless slv are %
    s > 0 && s < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(r) ? parseFloat(a) / 100 : parseFloat(a));
    return wp[r](...o);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    return [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length), Ep(t);
  } else if (typeof e == "object") {
    if (Oo(e, ["r", "g", "b"]))
      return e;
    if (Oo(e, ["h", "s", "l"]))
      return Gr(Vc(e));
    if (Oo(e, ["h", "s", "v"]))
      return Gr(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Gr(e) {
  const {
    h: t,
    s: r,
    v: n,
    a: o
  } = e, a = (i) => {
    const l = (i + t / 60) % 6;
    return n - n * r * Math.max(Math.min(l, 4 - l, 1), 0);
  }, s = [a(5), a(3), a(1)].map((i) => Math.round(i * 255));
  return {
    r: s[0],
    g: s[1],
    b: s[2],
    a: o
  };
}
function Ai(e) {
  return Gr(Vc(e));
}
function Vc(e) {
  const {
    h: t,
    s: r,
    l: n,
    a: o
  } = e, a = n + r * Math.min(n, 1 - n), s = a === 0 ? 0 : 2 - 2 * n / a;
  return {
    h: t,
    s,
    v: a,
    a: o
  };
}
function bn(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Tp(e) {
  let {
    r: t,
    g: r,
    b: n,
    a: o
  } = e;
  return `#${[bn(t), bn(r), bn(n), o !== void 0 ? bn(Math.round(o * 255)) : ""].join("")}`;
}
function Ep(e) {
  e = Sp(e);
  let [t, r, n, o] = Xm(e, 2).map((a) => parseInt(a, 16));
  return o = o === void 0 ? o : o / 255, {
    r: t,
    g: r,
    b: n,
    a: o
  };
}
function Sp(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ri(ri(e, 6), 8, "F")), e;
}
function Op(e, t) {
  const r = Nc(Ka(e));
  return r[0] = r[0] + t * 10, Uc(Bc(r));
}
function Pp(e, t) {
  const r = Nc(Ka(e));
  return r[0] = r[0] - t * 10, Uc(Bc(r));
}
function Fp(e) {
  const t = ft(e);
  return Ka(t)[1];
}
function Hc(e) {
  const t = Math.abs(pi(ft(0), ft(e)));
  return Math.abs(pi(ft(16777215), ft(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function We(e, t) {
  return (r) => Object.keys(e).reduce((n, o) => {
    const s = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : {
      type: e[o]
    };
    return r && o in r ? n[o] = {
      ...s,
      default: r[o]
    } : n[o] = s, t && !n[o].source && (n[o].source = t), n;
  }, {});
}
const _p = We({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function nt(e, t) {
  const r = lo();
  if (!r)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return r;
}
function Lp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = nt(e).type;
  return Kt(t?.aliasName || t?.name);
}
function Rp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nt("injectSelf");
  const {
    provides: r
  } = t;
  if (r && e in r)
    return r[e];
}
const Kr = Symbol.for("vuetify:defaults");
function Dp(e) {
  return Pe(e);
}
function Zc() {
  const e = mt(Kr);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function jp(e, t) {
  return typeof e.props?.[t] < "u" || typeof e.props?.[Kt(t)] < "u";
}
function kp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zc();
  const n = nt("useDefaults");
  if (t = t ?? n.type.name ?? n.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = Q(() => r.value?.[e._as ?? t]), a = new Proxy(e, {
    get(l, d) {
      const c = Reflect.get(l, d);
      return d === "class" || d === "style" ? [o.value?.[d], c].filter((g) => g != null) : typeof d == "string" && !jp(n.vnode, d) ? o.value?.[d] !== void 0 ? o.value?.[d] : r.value?.global?.[d] !== void 0 ? r.value?.global?.[d] : c : c;
    }
  }), s = ke();
  ar(() => {
    if (o.value) {
      const l = Object.entries(o.value).filter((d) => {
        let [c] = d;
        return c.startsWith(c[0].toUpperCase());
      });
      s.value = l.length ? Object.fromEntries(l) : void 0;
    } else
      s.value = void 0;
  });
  function i() {
    const l = Rp(Kr, n);
    so(Kr, Q(() => s.value ? It(l?.value ?? {}, s.value) : l?.value));
  }
  return {
    props: a,
    provideSubDefaults: i
  };
}
function ln(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return e;
  if (e._setup) {
    e.props = We(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((r) => r !== "class" && r !== "style");
    e.filterProps = function(n) {
      return Gm(n, t);
    }, e.props._as = String, e.setup = function(n, o) {
      const a = Zc();
      if (!a.value) return e._setup(n, o);
      const {
        props: s,
        provideSubDefaults: i
      } = kp(n, n._as ?? e.name, a), l = e._setup(s, o);
      return i(), l;
    };
  }
  return e;
}
function Qa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? ln : gf)(t);
}
function zc(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Mp = "cubic-bezier(0.4, 0, 0.2, 1)";
function Np(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Bp(e) : Xa(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Wn(e, t) {
  const r = [];
  if (t && e && !t.contains(e)) return r;
  for (; e && (Xa(e) && r.push(e), e !== t); )
    e = e.parentElement;
  return r;
}
function Xa(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Bp(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Up(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Wc(e) {
  const t = nt("useRender");
  t.render = e;
}
function es(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const a = nt("useProxiedModel"), s = Pe(e[t] !== void 0 ? e[t] : r), i = Kt(t), d = Q(i !== t ? () => (e[t], !!((a.vnode.props?.hasOwnProperty(t) || a.vnode.props?.hasOwnProperty(i)) && (a.vnode.props?.hasOwnProperty(`onUpdate:${t}`) || a.vnode.props?.hasOwnProperty(`onUpdate:${i}`)))) : () => (e[t], !!(a.vnode.props?.hasOwnProperty(t) && a.vnode.props?.hasOwnProperty(`onUpdate:${t}`))));
  go(() => !d.value, () => {
    ge(() => e[t], (g) => {
      s.value = g;
    });
  });
  const c = Q({
    get() {
      const g = e[t];
      return n(d.value ? g : s.value);
    },
    set(g) {
      const p = o(g), C = X(d.value ? e[t] : s.value);
      C === p || n(C) === g || (s.value = p, a?.emit(`update:${t}`, p));
    }
  });
  return Object.defineProperty(c, "externalValue", {
    get: () => d.value ? e[t] : s.value
  }), c;
}
const Vp = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  }
}, Ci = "$vuetify.", vi = (e, t) => e.replace(/\{(\d+)\}/g, (r, n) => String(t[Number(n)])), qc = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
    a[s - 1] = arguments[s];
  if (!n.startsWith(Ci))
    return vi(n, a);
  const i = n.replace(Ci, ""), l = e.value && r.value[e.value], d = t.value && r.value[t.value];
  let c = Xs(l, i, null);
  return c || (`${n}${e.value}`, c = Xs(d, i, null)), c || (c = n), typeof c != "string" && (c = n), vi(c, a);
};
function Jc(e, t) {
  return (r, n) => new Intl.NumberFormat([e.value, t.value], n).format(r);
}
function _o(e, t, r) {
  const n = es(e, t, e[t] ?? r.value);
  return n.value = e[t] ?? r.value, ge(r, (o) => {
    e[t] == null && (n.value = r.value);
  }), n;
}
function $c(e) {
  return (t) => {
    const r = _o(t, "locale", e.current), n = _o(t, "fallback", e.fallback), o = _o(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: r,
      fallback: n,
      messages: o,
      t: qc(r, n, o),
      n: Jc(r, n),
      provide: $c({
        current: r,
        fallback: n,
        messages: o
      })
    };
  };
}
function Hp(e) {
  const t = ke(e?.locale ?? "en"), r = ke(e?.fallback ?? "en"), n = Pe({
    en: Vp,
    ...e?.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: r,
    messages: n,
    t: qc(t, r, n),
    n: Jc(t, r),
    provide: $c({
      current: t,
      fallback: r,
      messages: n
    })
  };
}
const ca = Symbol.for("vuetify:locale");
function Zp(e) {
  return e.name != null;
}
function zp(e) {
  const t = e?.adapter && Zp(e?.adapter) ? e?.adapter : Hp(e), r = qp(t, e);
  return {
    ...t,
    ...r
  };
}
function Wp() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function qp(e, t) {
  const r = Pe(t?.rtl ?? Wp()), n = Q(() => r.value[e.current.value] ?? !1);
  return {
    isRtl: n,
    rtl: r,
    rtlClasses: Q(() => `v-locale--is-${n.value ? "rtl" : "ltr"}`)
  };
}
function Jp() {
  const e = mt(ca);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function cn(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function $p(e, t, r) {
  const n = [];
  let o = [];
  const a = Yc(e), s = Gc(e), i = r ?? cn(t)?.firstDay ?? 0, l = (a.getDay() - i + 7) % 7, d = (s.getDay() - i + 7) % 7;
  for (let c = 0; c < l; c++) {
    const g = new Date(a);
    g.setDate(g.getDate() - (l - c)), o.push(g);
  }
  for (let c = 1; c <= s.getDate(); c++) {
    const g = new Date(e.getFullYear(), e.getMonth(), c);
    o.push(g), o.length === 7 && (n.push(o), o = []);
  }
  for (let c = 1; c < 7 - d; c++) {
    const g = new Date(s);
    g.setDate(g.getDate() + c), o.push(g);
  }
  return o.length > 0 && n.push(o), n;
}
function ua(e, t, r) {
  const n = r ?? cn(t)?.firstDay ?? 0, o = new Date(e);
  for (; o.getDay() !== n; )
    o.setDate(o.getDate() - 1);
  return o;
}
function Yp(e, t) {
  const r = new Date(e), n = ((cn(t)?.firstDay ?? 0) + 6) % 7;
  for (; r.getDay() !== n; )
    r.setDate(r.getDate() + 1);
  return r;
}
function Yc(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Gc(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Gp(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Kp = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Kc(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Kp.test(e))
      return Gp(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const bi = new Date(2e3, 0, 2);
function Qp(e, t) {
  const r = t ?? cn(e)?.firstDay ?? 0;
  return _c(7).map((n) => {
    const o = new Date(bi);
    return o.setDate(bi.getDate() + r + n), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(o);
  });
}
function Xp(e, t, r, n) {
  const o = Kc(e) ?? /* @__PURE__ */ new Date(), a = n?.[t];
  if (typeof a == "function")
    return a(o, t, r);
  let s = {};
  switch (t) {
    case "fullDate":
      s = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      s = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const i = o.getDate(), l = new Intl.DateTimeFormat(r, {
        month: "long"
      }).format(o);
      return `${i} ${l}`;
    case "normalDateWithWeekday":
      s = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      s = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      s = {
        year: "numeric"
      };
      break;
    case "month":
      s = {
        month: "long"
      };
      break;
    case "monthShort":
      s = {
        month: "short"
      };
      break;
    case "monthAndYear":
      s = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      s = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      s = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      s = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(r).format(o.getDate());
    case "hours12h":
      s = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      s = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      s = {
        minute: "numeric"
      };
      break;
    case "seconds":
      s = {
        second: "numeric"
      };
      break;
    case "fullTime":
      s = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      s = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      s = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(r, s).format(o).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(r, s).format(o).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(r, s).format(o).replace(/, /g, " ");
    default:
      s = a ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(r, s).format(o);
}
function e0(e, t) {
  const r = e.toJsDate(t), n = r.getFullYear(), o = ni(String(r.getMonth() + 1), 2, "0"), a = ni(String(r.getDate()), 2, "0");
  return `${n}-${o}-${a}`;
}
function t0(e) {
  const [t, r, n] = e.split("-").map(Number);
  return new Date(t, r - 1, n);
}
function r0(e, t) {
  const r = new Date(e);
  return r.setMinutes(r.getMinutes() + t), r;
}
function n0(e, t) {
  const r = new Date(e);
  return r.setHours(r.getHours() + t), r;
}
function On(e, t) {
  const r = new Date(e);
  return r.setDate(r.getDate() + t), r;
}
function o0(e, t) {
  const r = new Date(e);
  return r.setDate(r.getDate() + t * 7), r;
}
function a0(e, t) {
  const r = new Date(e);
  return r.setDate(1), r.setMonth(r.getMonth() + t), r;
}
function da(e) {
  return e.getFullYear();
}
function s0(e) {
  return e.getMonth();
}
function i0(e, t, r, n) {
  const o = cn(t), a = r ?? o?.firstDay ?? 0, s = n ?? o?.firstWeekSize ?? 1;
  function i(C) {
    const m = new Date(C, 0, 1);
    return 7 - ga(m, ua(m, t, a), "days");
  }
  let l = da(e);
  const d = On(ua(e, t, a), 6);
  l < da(d) && i(l + 1) >= s && l++;
  const c = new Date(l, 0, 1), g = i(l), p = g >= s ? On(c, g - 7) : On(c, g);
  return 1 + ga(e, p, "weeks");
}
function l0(e) {
  return e.getDate();
}
function c0(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function u0(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function d0(e) {
  return e.getHours();
}
function g0(e) {
  return e.getMinutes();
}
function f0(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function m0(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function p0(e, t) {
  return qn(e, t[0]) && C0(e, t[1]);
}
function h0(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function qn(e, t) {
  return e.getTime() > t.getTime();
}
function A0(e, t) {
  return qn(fa(e), fa(t));
}
function C0(e, t) {
  return e.getTime() < t.getTime();
}
function Ii(e, t) {
  return e.getTime() === t.getTime();
}
function v0(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function b0(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function I0(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function ga(e, t, r) {
  const n = new Date(e), o = new Date(t);
  switch (r) {
    case "years":
      return n.getFullYear() - o.getFullYear();
    case "quarters":
      return Math.floor((n.getMonth() - o.getMonth() + (n.getFullYear() - o.getFullYear()) * 12) / 4);
    case "months":
      return n.getMonth() - o.getMonth() + (n.getFullYear() - o.getFullYear()) * 12;
    case "weeks":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((n.getTime() - o.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((n.getTime() - o.getTime()) / 1e3);
    default:
      return n.getTime() - o.getTime();
  }
}
function y0(e, t) {
  const r = new Date(e);
  return r.setHours(t), r;
}
function x0(e, t) {
  const r = new Date(e);
  return r.setMinutes(t), r;
}
function w0(e, t) {
  const r = new Date(e);
  return r.setMonth(t), r;
}
function T0(e, t) {
  const r = new Date(e);
  return r.setDate(t), r;
}
function E0(e, t) {
  const r = new Date(e);
  return r.setFullYear(t), r;
}
function fa(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function S0(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class O0 {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return Kc(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return e0(this, t);
  }
  parseISO(t) {
    return t0(t);
  }
  addMinutes(t, r) {
    return r0(t, r);
  }
  addHours(t, r) {
    return n0(t, r);
  }
  addDays(t, r) {
    return On(t, r);
  }
  addWeeks(t, r) {
    return o0(t, r);
  }
  addMonths(t, r) {
    return a0(t, r);
  }
  getWeekArray(t, r) {
    const n = r !== void 0 ? Number(r) : void 0;
    return $p(t, this.locale, n);
  }
  startOfWeek(t, r) {
    const n = r !== void 0 ? Number(r) : void 0;
    return ua(t, this.locale, n);
  }
  endOfWeek(t) {
    return Yp(t, this.locale);
  }
  startOfMonth(t) {
    return Yc(t);
  }
  endOfMonth(t) {
    return Gc(t);
  }
  format(t, r) {
    return Xp(t, r, this.locale, this.formats);
  }
  isEqual(t, r) {
    return Ii(t, r);
  }
  isValid(t) {
    return h0(t);
  }
  isWithinRange(t, r) {
    return p0(t, r);
  }
  isAfter(t, r) {
    return qn(t, r);
  }
  isAfterDay(t, r) {
    return A0(t, r);
  }
  isBefore(t, r) {
    return !qn(t, r) && !Ii(t, r);
  }
  isSameDay(t, r) {
    return v0(t, r);
  }
  isSameMonth(t, r) {
    return b0(t, r);
  }
  isSameYear(t, r) {
    return I0(t, r);
  }
  setMinutes(t, r) {
    return x0(t, r);
  }
  setHours(t, r) {
    return y0(t, r);
  }
  setMonth(t, r) {
    return w0(t, r);
  }
  setDate(t, r) {
    return T0(t, r);
  }
  setYear(t, r) {
    return E0(t, r);
  }
  getDiff(t, r, n) {
    return ga(t, r, n);
  }
  getWeekdays(t) {
    const r = t !== void 0 ? Number(t) : void 0;
    return Qp(this.locale, r);
  }
  getYear(t) {
    return da(t);
  }
  getMonth(t) {
    return s0(t);
  }
  getWeek(t, r, n) {
    const o = r !== void 0 ? Number(r) : void 0;
    return i0(t, this.locale, o, n);
  }
  getDate(t) {
    return l0(t);
  }
  getNextMonth(t) {
    return c0(t);
  }
  getPreviousMonth(t) {
    return u0(t);
  }
  getHours(t) {
    return d0(t);
  }
  getMinutes(t) {
    return g0(t);
  }
  startOfDay(t) {
    return fa(t);
  }
  endOfDay(t) {
    return S0(t);
  }
  startOfYear(t) {
    return f0(t);
  }
  endOfYear(t) {
    return m0(t);
  }
}
const P0 = Symbol.for("vuetify:date-options"), yi = Symbol.for("vuetify:date-adapter");
function F0(e, t) {
  const r = It({
    adapter: O0,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: r,
    instance: _0(r, t)
  };
}
function _0(e, t) {
  const r = xt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return ge(t.current, (n) => {
    r.locale = e.locale[n] ?? n ?? r.locale;
  }), r;
}
const ma = Symbol.for("vuetify:display"), xi = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, L0 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xi;
  return It(xi, e);
};
function wi(e) {
  return fe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Ti(e) {
  return fe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Ei(e) {
  const t = fe && !e ? window.navigator.userAgent : "ssr";
  function r(m) {
    return !!t.match(m);
  }
  const n = r(/android/i), o = r(/iphone|ipad|ipod/i), a = r(/cordova/i), s = r(/electron/i), i = r(/chrome/i), l = r(/edge/i), d = r(/firefox/i), c = r(/opera/i), g = r(/win/i), p = r(/mac/i), C = r(/linux/i);
  return {
    android: n,
    ios: o,
    cordova: a,
    electron: s,
    chrome: i,
    edge: l,
    firefox: d,
    opera: c,
    win: g,
    mac: p,
    linux: C,
    touch: Jm,
    ssr: t === "ssr"
  };
}
function R0(e, t) {
  const {
    thresholds: r,
    mobileBreakpoint: n
  } = L0(e), o = ke(Ti(t)), a = ke(Ei(t)), s = xt({}), i = ke(wi(t));
  function l() {
    o.value = Ti(), i.value = wi();
  }
  function d() {
    l(), a.value = Ei();
  }
  return ar(() => {
    const c = i.value < r.sm, g = i.value < r.md && !c, p = i.value < r.lg && !(g || c), C = i.value < r.xl && !(p || g || c), m = i.value < r.xxl && !(C || p || g || c), u = i.value >= r.xxl, A = c ? "xs" : g ? "sm" : p ? "md" : C ? "lg" : m ? "xl" : "xxl", b = typeof n == "number" ? n : r[n], w = i.value < b;
    s.xs = c, s.sm = g, s.md = p, s.lg = C, s.xl = m, s.xxl = u, s.smAndUp = !c, s.mdAndUp = !(c || g), s.lgAndUp = !(c || g || p), s.xlAndUp = !(c || g || p || C), s.smAndDown = !(p || C || m || u), s.mdAndDown = !(C || m || u), s.lgAndDown = !(m || u), s.xlAndDown = !u, s.name = A, s.height = o.value, s.width = i.value, s.mobile = w, s.mobileBreakpoint = n, s.platform = a.value, s.thresholds = r;
  }), fe && (window.addEventListener("resize", l, {
    passive: !0
  }), Qe(() => {
    window.removeEventListener("resize", l);
  }, !0)), {
    ...Ll(s),
    update: d,
    ssr: !!t
  };
}
function D0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lp();
  const r = mt(ma);
  if (!r) throw new Error("Could not find Vuetify display injection");
  const n = Q(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? r.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? r.width.value < r.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? r.mobile.value : !1), o = Q(() => t ? {
    [`${t}--mobile`]: n.value
  } : {});
  return {
    ...r,
    displayClasses: o,
    mobile: n
  };
}
const j0 = Symbol.for("vuetify:goto");
function k0() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function M0(e, t) {
  return {
    rtl: t.isRtl,
    options: It(k0(), e)
  };
}
const N0 = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload"
}, B0 = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => uo(Xc, {
    ...e,
    class: "mdi"
  })
}, U0 = [String, Function, Object, Array], Si = Symbol.for("vuetify:icons"), fo = We({
  icon: {
    type: U0
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon");
Qa()({
  name: "VComponentIcon",
  props: fo(),
  setup(e, t) {
    let {
      slots: r
    } = t;
    return () => {
      const n = e.icon;
      return ne(e.tag, null, {
        default: () => [e.icon ? ne(n, null, null) : r.default?.()]
      });
    };
  }
});
const Qc = ln({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: fo(),
  setup(e, t) {
    let {
      attrs: r
    } = t;
    return () => ne(e.tag, ze(r, {
      style: null
    }), {
      default: () => [ne("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((n) => Array.isArray(n) ? ne("path", {
        d: n[0],
        "fill-opacity": n[1]
      }, null) : ne("path", {
        d: n
      }, null)) : ne("path", {
        d: e.icon
      }, null)])]
    });
  }
});
ln({
  name: "VLigatureIcon",
  props: fo(),
  setup(e) {
    return () => ne(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Xc = ln({
  name: "VClassIcon",
  props: fo(),
  setup(e) {
    return () => ne(e.tag, {
      class: e.icon
    }, null);
  }
});
function V0() {
  return {
    svg: {
      component: Qc
    },
    class: {
      component: Xc
    }
  };
}
function H0(e) {
  const t = V0(), r = e?.defaultSet ?? "mdi";
  return r === "mdi" && !t.mdi && (t.mdi = B0), It({
    defaultSet: r,
    sets: t,
    aliases: {
      ...N0,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Jn = Symbol.for("vuetify:theme"), Z0 = We({
  theme: String
}, "theme");
function Oi() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet"
  };
}
function z0() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oi();
  const t = Oi();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const r = {};
  for (const [n, o] of Object.entries(e.themes ?? {})) {
    const a = o.dark || n === "dark" ? t.themes?.dark : t.themes?.light;
    r[n] = It(a, o);
  }
  return It(t, {
    ...e,
    themes: r
  });
}
function zt(e, t, r, n) {
  e.push(`${$0(t, n)} {
`, ...r.map((o) => `  ${o};
`), `}
`);
}
function Pi(e) {
  const t = e.dark ? 2 : 1, r = e.dark ? 1 : 2, n = [];
  for (const [o, a] of Object.entries(e.colors)) {
    const s = ft(a);
    n.push(`--v-theme-${o}: ${s.r},${s.g},${s.b}`), o.startsWith("on-") || n.push(`--v-theme-${o}-overlay-multiplier: ${Fp(a) > 0.18 ? t : r}`);
  }
  for (const [o, a] of Object.entries(e.variables)) {
    const s = typeof a == "string" && a.startsWith("#") ? ft(a) : void 0, i = s ? `${s.r}, ${s.g}, ${s.b}` : void 0;
    n.push(`--v-${o}: ${i ?? a}`);
  }
  return n;
}
function W0(e, t, r) {
  const n = {};
  if (r)
    for (const o of ["lighten", "darken"]) {
      const a = o === "lighten" ? Op : Pp;
      for (const s of _c(r[o], 1))
        n[`${e}-${o}-${s}`] = Tp(a(ft(t), s));
    }
  return n;
}
function q0(e, t) {
  if (!t) return {};
  let r = {};
  for (const n of t.colors) {
    const o = e[n];
    o && (r = {
      ...r,
      ...W0(n, o, t)
    });
  }
  return r;
}
function J0(e) {
  const t = {};
  for (const r of Object.keys(e)) {
    if (r.startsWith("on-") || e[`on-${r}`]) continue;
    const n = `on-${r}`, o = ft(e[r]);
    t[n] = Hc(o);
  }
  return t;
}
function $0(e, t) {
  if (!t) return e;
  const r = `:where(${t})`;
  return e === ":root" ? r : `${r} ${e}`;
}
function Y0(e, t) {
  e && (e.innerHTML = t);
}
function G0(e, t) {
  if (!fe) return null;
  let r = document.getElementById(e);
  return r || (r = document.createElement("style"), r.id = e, r.type = "text/css", t && r.setAttribute("nonce", t), document.head.appendChild(r)), r;
}
function K0(e) {
  const t = z0(e), r = ke(t.defaultTheme), n = Pe(t.themes), o = Q(() => {
    const d = {};
    for (const [c, g] of Object.entries(n.value)) {
      const p = {
        ...g.colors,
        ...q0(g.colors, t.variations)
      };
      d[c] = {
        ...g,
        colors: {
          ...p,
          ...J0(p)
        }
      };
    }
    return d;
  }), a = Q(() => o.value[r.value]), s = Q(() => {
    const d = [];
    a.value?.dark && zt(d, ":root", ["color-scheme: dark"], t.scope), zt(d, ":root", Pi(a.value), t.scope);
    for (const [C, m] of Object.entries(o.value))
      zt(d, `.v-theme--${C}`, [`color-scheme: ${m.dark ? "dark" : "normal"}`, ...Pi(m)], t.scope);
    const c = [], g = [], p = new Set(Object.values(o.value).flatMap((C) => Object.keys(C.colors)));
    for (const C of p)
      C.startsWith("on-") ? zt(g, `.${C}`, [`color: rgb(var(--v-theme-${C})) !important`], t.scope) : (zt(c, `.bg-${C}`, [`--v-theme-overlay-multiplier: var(--v-theme-${C}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${C})) !important`, `color: rgb(var(--v-theme-on-${C})) !important`], t.scope), zt(g, `.text-${C}`, [`color: rgb(var(--v-theme-${C})) !important`], t.scope), zt(g, `.border-${C}`, [`--v-border-color: var(--v-theme-${C})`], t.scope));
    return d.push(...c, ...g), d.map((C, m) => m === 0 ? C : `    ${C}`).join("");
  });
  function i(d) {
    if (t.isDisabled) return;
    const c = d._context.provides.usehead;
    if (c) {
      let g = function() {
        return {
          style: [{
            textContent: s.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      if (c.push) {
        const p = c.push(g);
        fe && ge(s, () => {
          p.patch(g);
        });
      } else
        fe ? (c.addHeadObjs(Q(g)), ar(() => c.updateDOM())) : c.addHeadObjs(g());
    } else {
      let g = function() {
        Y0(G0(t.stylesheetId, t.cspNonce), s.value);
      };
      fe ? ge(s, g, {
        immediate: !0
      }) : g();
    }
  }
  const l = Q(() => t.isDisabled ? void 0 : `v-theme--${r.value}`);
  return {
    install: i,
    isDisabled: t.isDisabled,
    name: r,
    themes: n,
    current: a,
    computedThemes: o,
    themeClasses: l,
    styles: s,
    global: {
      name: r,
      current: a
    }
  };
}
function Q0(e) {
  nt("provideTheme");
  const t = mt(Jn, null);
  if (!t) throw new Error("Could not find Vuetify theme injection");
  const r = Q(() => e.theme ?? t.name.value), n = Q(() => t.themes.value[r.value]), o = Q(() => t.isDisabled ? void 0 : `v-theme--${r.value}`), a = {
    ...t,
    name: r,
    current: n,
    themeClasses: o
  };
  return so(Jn, a), a;
}
function eu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...r
  } = e, n = It(t, r), {
    aliases: o = {},
    components: a = {},
    directives: s = {}
  } = n, i = zr();
  return i.run(() => {
    const l = Dp(n.defaults), d = R0(n.display, n.ssr), c = K0(n.theme), g = H0(n.icons), p = zp(n.locale), C = F0(n.date, p), m = M0(n.goTo, p);
    function u(b) {
      for (const F in s)
        b.directive(F, s[F]);
      for (const F in a)
        b.component(F, a[F]);
      for (const F in o)
        b.component(F, ln({
          ...o[F],
          name: F,
          aliasName: o[F].name
        }));
      const w = zr();
      if (w.run(() => {
        c.install(b);
      }), b.onUnmount(() => w.stop()), b.provide(Kr, l), b.provide(ma, d), b.provide(Jn, c), b.provide(Si, g), b.provide(ca, p), b.provide(P0, C.options), b.provide(yi, C.instance), b.provide(j0, m), fe && n.ssr)
        if (b.$nuxt)
          b.$nuxt.hook("app:suspense:resolve", () => {
            d.update();
          });
        else {
          const {
            mount: F
          } = b;
          b.mount = function() {
            const D = F(...arguments);
            return Ar(() => d.update()), b.mount = F, D;
          };
        }
      (typeof __VUE_OPTIONS_API__ != "boolean" || __VUE_OPTIONS_API__) && b.mixin({
        computed: {
          $vuetify() {
            return xt({
              defaults: cr.call(this, Kr),
              display: cr.call(this, ma),
              theme: cr.call(this, Jn),
              icons: cr.call(this, Si),
              locale: cr.call(this, ca),
              date: cr.call(this, yi)
            });
          }
        }
      });
    }
    function A() {
      i.stop();
    }
    return {
      install: u,
      unmount: A,
      defaults: l,
      display: d,
      theme: c,
      icons: g,
      locale: p,
      date: C,
      goTo: m
    };
  });
}
const X0 = "3.8.2";
eu.version = X0;
function cr(e) {
  const t = this.$, r = t.parent?.provides ?? t.vnode.appContext?.provides;
  if (r && e in r)
    return r[e];
}
const eh = {
  collapse: "svg:M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",
  complete: "svg:M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "svg:M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  // delete (e.g. v-chip close)
  clear: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "svg:M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
  info: "svg:M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  warning: "svg:M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  error: "svg:M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  prev: "svg:M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "svg:M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "svg:M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "svg:M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "svg:M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "svg:M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  // for carousel
  sortAsc: "svg:M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  sortDesc: "svg:M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",
  expand: "svg:M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "svg:M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "svg:M7,10L12,15L17,10H7Z",
  dropdown: "svg:M7,10L12,15L17,10H7Z",
  radioOn: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "svg:M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "svg:M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "svg:M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "svg:M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "svg:M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "svg:M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "svg:M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "svg:M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "svg:M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "svg:M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "svg:M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "svg:M19,13H5V11H19V13Z",
  calendar: "svg:M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",
  treeviewCollapse: "svg:M7,10L12,15L17,10H7Z",
  treeviewExpand: "svg:M10,17L15,12L10,7V17Z",
  eyeDropper: "svg:M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z"
}, th = {
  component: Qc
};
function rh() {
  return !0;
}
function tu(e, t, r) {
  if (!e || ru(e, r) === !1) return !1;
  const n = zc(t);
  if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && n.host === e.target) return !1;
  const o = (typeof r.value == "object" && r.value.include || (() => []))();
  return o.push(t), !o.some((a) => a?.contains(e.target));
}
function ru(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || rh)(e);
}
function nh(e, t, r) {
  const n = typeof r.value == "function" ? r.value : r.value.handler;
  e.shadowTarget = e.target, t._clickOutside.lastMousedownWasOutside && tu(e, t, r) && setTimeout(() => {
    ru(e, r) && n && n(e);
  }, 0);
}
function Fi(e, t) {
  const r = zc(e);
  t(document), typeof ShadowRoot < "u" && r instanceof ShadowRoot && t(r);
}
const nu = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const r = (o) => nh(o, e, t), n = (o) => {
      e._clickOutside.lastMousedownWasOutside = tu(o, e, t);
    };
    Fi(e, (o) => {
      o.addEventListener("click", r, !0), o.addEventListener("mousedown", n, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: r,
      onMousedown: n
    };
  },
  beforeUnmount(e, t) {
    e._clickOutside && (Fi(e, (r) => {
      if (!r || !e._clickOutside?.[t.instance.$.uid]) return;
      const {
        onClick: n,
        onMousedown: o
      } = e._clickOutside[t.instance.$.uid];
      r.removeEventListener("click", n, !0), r.removeEventListener("mousedown", o, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function oh(e, t) {
  if (!qm) return;
  const r = t.modifiers || {}, n = t.value, {
    handler: o,
    options: a
  } = typeof n == "object" ? n : {
    handler: n,
    options: {}
  }, s = new IntersectionObserver(function() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 ? arguments[1] : void 0;
    const d = e._observe?.[t.instance.$.uid];
    if (!d) return;
    const c = i.some((g) => g.isIntersecting);
    o && (!r.quiet || d.init) && (!r.once || c || d.init) && o(c, i, l), c && r.once ? ou(e, t) : d.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: s
  }, s.observe(e);
}
function ou(e, t) {
  const r = e._observe?.[t.instance.$.uid];
  r && (r.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const ah = {
  mounted: oh,
  unmounted: ou
};
function sh(e, t) {
  const r = t.modifiers || {}, n = t.value, {
    once: o,
    immediate: a,
    ...s
  } = r, i = !Object.keys(s).length, {
    handler: l,
    options: d
  } = typeof n == "object" ? n : {
    handler: n,
    options: {
      attributes: s?.attr ?? i,
      characterData: s?.char ?? i,
      childList: s?.child ?? i,
      subtree: s?.sub ?? i
    }
  }, c = new MutationObserver(function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], p = arguments.length > 1 ? arguments[1] : void 0;
    l?.(g, p), o && au(e, t);
  });
  a && l?.([], c), e._mutate = Object(e._mutate), e._mutate[t.instance.$.uid] = {
    observer: c
  }, c.observe(e, d);
}
function au(e, t) {
  e._mutate?.[t.instance.$.uid] && (e._mutate[t.instance.$.uid].observer.disconnect(), delete e._mutate[t.instance.$.uid]);
}
const ih = {
  mounted: sh,
  unmounted: au
};
function lh(e, t) {
  const r = t.value, n = {
    passive: !t.modifiers?.active
  };
  window.addEventListener("resize", r, n), e._onResize = Object(e._onResize), e._onResize[t.instance.$.uid] = {
    handler: r,
    options: n
  }, t.modifiers?.quiet || r();
}
function ch(e, t) {
  if (!e._onResize?.[t.instance.$.uid]) return;
  const {
    handler: r,
    options: n
  } = e._onResize[t.instance.$.uid];
  window.removeEventListener("resize", r, n), delete e._onResize[t.instance.$.uid];
}
const uh = {
  mounted: lh,
  unmounted: ch
}, pa = Symbol("rippleStop"), dh = 80;
function _i(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ha(e) {
  return e.constructor.name === "TouchEvent";
}
function su(e) {
  return e.constructor.name === "KeyboardEvent";
}
const gh = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = 0, o = 0;
  if (!su(e)) {
    const g = t.getBoundingClientRect(), p = ha(e) ? e.touches[e.touches.length - 1] : e;
    n = p.clientX - g.left, o = p.clientY - g.top;
  }
  let a = 0, s = 0.3;
  t._ripple?.circle ? (s = 0.15, a = t.clientWidth / 2, a = r.center ? a : a + Math.sqrt((n - a) ** 2 + (o - a) ** 2) / 4) : a = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const i = `${(t.clientWidth - a * 2) / 2}px`, l = `${(t.clientHeight - a * 2) / 2}px`, d = r.center ? i : `${n - a}px`, c = r.center ? l : `${o - a}px`;
  return {
    radius: a,
    scale: s,
    x: d,
    y: c,
    centerX: i,
    centerY: l
  };
}, $n = {
  /* eslint-disable max-statements */
  show(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t?._ripple?.enabled)
      return;
    const n = document.createElement("span"), o = document.createElement("span");
    n.appendChild(o), n.className = "v-ripple__container", r.class && (n.className += ` ${r.class}`);
    const {
      radius: a,
      scale: s,
      x: i,
      y: l,
      centerX: d,
      centerY: c
    } = gh(e, t, r), g = `${a * 2}px`;
    o.className = "v-ripple__animation", o.style.width = g, o.style.height = g, t.appendChild(n);
    const p = window.getComputedStyle(t);
    p && p.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), _i(o, `translate(${i}, ${l}) scale3d(${s},${s},${s})`), o.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), _i(o, `translate(${d}, ${c}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    if (!e?._ripple?.enabled) return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0) return;
    const r = t[t.length - 1];
    if (r.dataset.isHiding) return;
    r.dataset.isHiding = "true";
    const n = performance.now() - Number(r.dataset.activated), o = Math.max(250 - n, 0);
    setTimeout(() => {
      r.classList.remove("v-ripple__animation--in"), r.classList.add("v-ripple__animation--out"), setTimeout(() => {
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), r.parentNode?.parentNode === e && e.removeChild(r.parentNode);
      }, 300);
    }, o);
  }
};
function iu(e) {
  return typeof e > "u" || !!e;
}
function Qr(e) {
  const t = {}, r = e.currentTarget;
  if (!(!r?._ripple || r._ripple.touched || e[pa])) {
    if (e[pa] = !0, ha(e))
      r._ripple.touched = !0, r._ripple.isTouch = !0;
    else if (r._ripple.isTouch) return;
    if (t.center = r._ripple.centered || su(e), r._ripple.class && (t.class = r._ripple.class), ha(e)) {
      if (r._ripple.showTimerCommit) return;
      r._ripple.showTimerCommit = () => {
        $n.show(e, r, t);
      }, r._ripple.showTimer = window.setTimeout(() => {
        r?._ripple?.showTimerCommit && (r._ripple.showTimerCommit(), r._ripple.showTimerCommit = null);
      }, dh);
    } else
      $n.show(e, r, t);
  }
}
function Li(e) {
  e[pa] = !0;
}
function Ze(e) {
  const t = e.currentTarget;
  if (t?._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Ze(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), $n.hide(t);
  }
}
function lu(e) {
  const t = e.currentTarget;
  t?._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Xr = !1;
function cu(e) {
  !Xr && (e.keyCode === ti.enter || e.keyCode === ti.space) && (Xr = !0, Qr(e));
}
function uu(e) {
  Xr = !1, Ze(e);
}
function du(e) {
  Xr && (Xr = !1, Ze(e));
}
function gu(e, t, r) {
  const {
    value: n,
    modifiers: o
  } = t, a = iu(n);
  if (a || $n.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Lc(n) && n.class && (e._ripple.class = n.class), a && !r) {
    if (o.stop) {
      e.addEventListener("touchstart", Li, {
        passive: !0
      }), e.addEventListener("mousedown", Li);
      return;
    }
    e.addEventListener("touchstart", Qr, {
      passive: !0
    }), e.addEventListener("touchend", Ze, {
      passive: !0
    }), e.addEventListener("touchmove", lu, {
      passive: !0
    }), e.addEventListener("touchcancel", Ze), e.addEventListener("mousedown", Qr), e.addEventListener("mouseup", Ze), e.addEventListener("mouseleave", Ze), e.addEventListener("keydown", cu), e.addEventListener("keyup", uu), e.addEventListener("blur", du), e.addEventListener("dragstart", Ze, {
      passive: !0
    });
  } else !a && r && fu(e);
}
function fu(e) {
  e.removeEventListener("mousedown", Qr), e.removeEventListener("touchstart", Qr), e.removeEventListener("touchend", Ze), e.removeEventListener("touchmove", lu), e.removeEventListener("touchcancel", Ze), e.removeEventListener("mouseup", Ze), e.removeEventListener("mouseleave", Ze), e.removeEventListener("keydown", cu), e.removeEventListener("keyup", uu), e.removeEventListener("dragstart", Ze), e.removeEventListener("blur", du);
}
function fh(e, t) {
  gu(e, t, !1);
}
function mh(e) {
  delete e._ripple, fu(e);
}
function ph(e, t) {
  if (t.value === t.oldValue)
    return;
  const r = iu(t.oldValue);
  gu(e, t, r);
}
const hh = {
  mounted: fh,
  unmounted: mh,
  updated: ph
};
function mu(e, t) {
  const {
    self: r = !1
  } = t.modifiers ?? {}, n = t.value, o = typeof n == "object" && n.options || {
    passive: !0
  }, a = typeof n == "function" || "handleEvent" in n ? n : n.handler, s = r ? e : t.arg ? document.querySelector(t.arg) : window;
  s && (s.addEventListener("scroll", a, o), e._onScroll = Object(e._onScroll), e._onScroll[t.instance.$.uid] = {
    handler: a,
    options: o,
    // Don't reference self
    target: r ? void 0 : s
  });
}
function pu(e, t) {
  if (!e._onScroll?.[t.instance.$.uid]) return;
  const {
    handler: r,
    options: n,
    target: o = e
  } = e._onScroll[t.instance.$.uid];
  o.removeEventListener("scroll", r, n), delete e._onScroll[t.instance.$.uid];
}
function Ah(e, t) {
  t.value !== t.oldValue && (pu(e, t), mu(e, t));
}
const Ch = {
  mounted: mu,
  unmounted: pu,
  updated: Ah
}, vh = (e) => {
  const {
    touchstartX: t,
    touchendX: r,
    touchstartY: n,
    touchendY: o
  } = e, a = 0.5, s = 16;
  e.offsetX = r - t, e.offsetY = o - n, Math.abs(e.offsetY) < a * Math.abs(e.offsetX) && (e.left && r < t - s && e.left(e), e.right && r > t + s && e.right(e)), Math.abs(e.offsetX) < a * Math.abs(e.offsetY) && (e.up && o < n - s && e.up(e), e.down && o > n + s && e.down(e));
};
function bh(e, t) {
  const r = e.changedTouches[0];
  t.touchstartX = r.clientX, t.touchstartY = r.clientY, t.start?.({
    originalEvent: e,
    ...t
  });
}
function Ih(e, t) {
  const r = e.changedTouches[0];
  t.touchendX = r.clientX, t.touchendY = r.clientY, t.end?.({
    originalEvent: e,
    ...t
  }), vh(t);
}
function yh(e, t) {
  const r = e.changedTouches[0];
  t.touchmoveX = r.clientX, t.touchmoveY = r.clientY, t.move?.({
    originalEvent: e,
    ...t
  });
}
function xh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (r) => bh(r, t),
    touchend: (r) => Ih(r, t),
    touchmove: (r) => yh(r, t)
  };
}
function wh(e, t) {
  const r = t.value, n = r?.parent ? e.parentElement : e, o = r?.options ?? {
    passive: !0
  }, a = t.instance?.$.uid;
  if (!n || !a) return;
  const s = xh(t.value);
  n._touchHandlers = n._touchHandlers ?? /* @__PURE__ */ Object.create(null), n._touchHandlers[a] = s, Rc(s).forEach((i) => {
    n.addEventListener(i, s[i], o);
  });
}
function Th(e, t) {
  const r = t.value?.parent ? e.parentElement : e, n = t.instance?.$.uid;
  if (!r?._touchHandlers || !n) return;
  const o = r._touchHandlers[n];
  Rc(o).forEach((a) => {
    r.removeEventListener(a, o[a]);
  }), delete r._touchHandlers[n];
}
const Eh = {
  mounted: wh,
  unmounted: Th
};
function Lo(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Sh(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Ri(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: r,
      align: n
    } = e, o = n === "left" ? 0 : n === "center" ? t.width / 2 : n === "right" ? t.width : n, a = r === "top" ? 0 : r === "bottom" ? t.height : r;
    return Lo({
      x: o,
      y: a
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: r,
      align: n
    } = e, o = r === "left" ? 0 : r === "right" ? t.width : r, a = n === "top" ? 0 : n === "center" ? t.height / 2 : n === "bottom" ? t.height : n;
    return Lo({
      x: o,
      y: a
    }, t);
  }
  return Lo({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const hu = {
  static: Fh,
  // specific viewport position, usually centered
  connected: Lh
  // connected to a certain element
}, Oh = We({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in hu
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Ph(e, t) {
  const r = Pe({}), n = Pe();
  fe && go(() => !!(t.isActive.value && e.locationStrategy), (a) => {
    ge(() => e.locationStrategy, a), Qe(() => {
      window.removeEventListener("resize", o), n.value = void 0;
    }), window.addEventListener("resize", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? n.value = e.locationStrategy(t, e, r)?.updateLocation : n.value = hu[e.locationStrategy](t, e, r)?.updateLocation;
  });
  function o(a) {
    n.value?.(a);
  }
  return {
    contentStyles: r,
    updateLocation: n
  };
}
function Fh() {
}
function _h(e, t) {
  const r = op(e);
  return t ? r.x += parseFloat(e.style.right || 0) : r.x -= parseFloat(e.style.left || 0), r.y -= parseFloat(e.style.top || 0), r;
}
function Lh(e, t, r) {
  (Array.isArray(e.target.value) || Up(e.target.value)) && Object.assign(r.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: o,
    preferredOrigin: a
  } = jc(() => {
    const m = ai(t.location, e.isRtl.value), u = t.origin === "overlap" ? m : t.origin === "auto" ? Po(m) : ai(t.origin, e.isRtl.value);
    return m.side === u.side && m.align === Fo(u).align ? {
      preferredAnchor: ii(m),
      preferredOrigin: ii(u)
    } : {
      preferredAnchor: m,
      preferredOrigin: u
    };
  }), [s, i, l, d] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => Q(() => {
    const u = parseFloat(t[m]);
    return isNaN(u) ? 1 / 0 : u;
  })), c = Q(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const m = t.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let g = !1;
  const p = new ResizeObserver(() => {
    g && C();
  });
  ge([e.target, e.contentEl], (m, u) => {
    let [A, b] = m, [w, F] = u;
    w && !Array.isArray(w) && p.unobserve(w), A && !Array.isArray(A) && p.observe(A), F && p.unobserve(F), b && p.observe(b);
  }, {
    immediate: !0
  }), Qe(() => {
    p.disconnect();
  });
  function C() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value) return;
    const m = np(e.target.value), u = _h(e.contentEl.value, e.isRtl.value), A = Wn(e.contentEl.value), b = 12;
    A.length || (A.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (u.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), u.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const w = A.reduce((k, x) => {
      const T = x.getBoundingClientRect(), H = new Qt({
        x: x === document.documentElement ? 0 : T.x,
        y: x === document.documentElement ? 0 : T.y,
        width: x.clientWidth,
        height: x.clientHeight
      });
      return k ? new Qt({
        x: Math.max(k.left, H.left),
        y: Math.max(k.top, H.top),
        width: Math.min(k.right, H.right) - Math.max(k.left, H.left),
        height: Math.min(k.bottom, H.bottom) - Math.max(k.top, H.top)
      }) : H;
    }, void 0);
    w.x += b, w.y += b, w.width -= b * 2, w.height -= b * 2;
    let F = {
      anchor: o.value,
      origin: a.value
    };
    function D(k) {
      const x = new Qt(u), T = Ri(k.anchor, m), H = Ri(k.origin, x);
      let {
        x: B,
        y: J
      } = Sh(T, H);
      switch (k.anchor.side) {
        case "top":
          J -= c.value[0];
          break;
        case "bottom":
          J += c.value[0];
          break;
        case "left":
          B -= c.value[0];
          break;
        case "right":
          B += c.value[0];
          break;
      }
      switch (k.anchor.align) {
        case "top":
          J -= c.value[1];
          break;
        case "bottom":
          J += c.value[1];
          break;
        case "left":
          B -= c.value[1];
          break;
        case "right":
          B += c.value[1];
          break;
      }
      return x.x += B, x.y += J, x.width = Math.min(x.width, l.value), x.height = Math.min(x.height, d.value), {
        overflows: ci(x, w),
        x: B,
        y: J
      };
    }
    let Z = 0, O = 0;
    const P = {
      x: 0,
      y: 0
    }, v = {
      x: !1,
      y: !1
    };
    let I = -1;
    for (; !(I++ > 10); ) {
      const {
        x: k,
        y: x,
        overflows: T
      } = D(F);
      Z += k, O += x, u.x += k, u.y += x;
      {
        const H = li(F.anchor), B = T.x.before || T.x.after, J = T.y.before || T.y.after;
        let W = !1;
        if (["x", "y"].forEach((z) => {
          if (z === "x" && B && !v.x || z === "y" && J && !v.y) {
            const se = {
              anchor: {
                ...F.anchor
              },
              origin: {
                ...F.origin
              }
            }, de = z === "x" ? H === "y" ? Fo : Po : H === "y" ? Po : Fo;
            se.anchor = de(se.anchor), se.origin = de(se.origin);
            const {
              overflows: Ae
            } = D(se);
            (Ae[z].before <= T[z].before && Ae[z].after <= T[z].after || Ae[z].before + Ae[z].after < (T[z].before + T[z].after) / 2) && (F = se, W = v[z] = !0);
          }
        }), W) continue;
      }
      T.x.before && (Z += T.x.before, u.x += T.x.before), T.x.after && (Z -= T.x.after, u.x -= T.x.after), T.y.before && (O += T.y.before, u.y += T.y.before), T.y.after && (O -= T.y.after, u.y -= T.y.after);
      {
        const H = ci(u, w);
        P.x = w.width - H.x.before - H.x.after, P.y = w.height - H.y.before - H.y.after, Z += H.x.before, u.x += H.x.before, O += H.y.before, u.y += H.y.before;
      }
      break;
    }
    const j = li(F.anchor);
    return Object.assign(r.value, {
      "--v-overlay-anchor-origin": `${F.anchor.side} ${F.anchor.align}`,
      transformOrigin: `${F.origin.side} ${F.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: ye(Ro(O)),
      left: e.isRtl.value ? void 0 : ye(Ro(Z)),
      right: e.isRtl.value ? ye(Ro(-Z)) : void 0,
      minWidth: ye(j === "y" ? Math.min(s.value, m.width) : s.value),
      maxWidth: ye(Di(sa(P.x, s.value === 1 / 0 ? 0 : s.value, l.value))),
      maxHeight: ye(Di(sa(P.y, i.value === 1 / 0 ? 0 : i.value, d.value)))
    }), {
      available: P,
      contentBox: u
    };
  }
  return ge(() => [o.value, a.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => C()), Ar(() => {
    const m = C();
    if (!m) return;
    const {
      available: u,
      contentBox: A
    } = m;
    A.height > u.y && requestAnimationFrame(() => {
      C(), requestAnimationFrame(() => {
        C();
      });
    });
  }), {
    updateLocation: C
  };
}
function Ro(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Di(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Aa = !0;
const Yn = [];
function Rh(e) {
  !Aa || Yn.length ? (Yn.push(e), Ca()) : (Aa = !1, e(), Ca());
}
let ji = -1;
function Ca() {
  cancelAnimationFrame(ji), ji = requestAnimationFrame(() => {
    const e = Yn.shift();
    e && e(), Yn.length ? Ca() : Aa = !0;
  });
}
const Au = {
  none: null,
  close: kh,
  block: Mh,
  reposition: Nh
}, Dh = We({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Au
  }
}, "VOverlay-scroll-strategies");
function jh(e, t) {
  if (!fe) return;
  let r;
  ar(async () => {
    r?.stop(), t.isActive.value && e.scrollStrategy && (r = zr(), await new Promise((n) => setTimeout(n)), r.active && r.run(() => {
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, r) : Au[e.scrollStrategy]?.(t, e, r);
    }));
  }), Qe(() => {
    r?.stop();
  });
}
function kh(e) {
  function t(r) {
    e.isActive.value = !1;
  }
  Cu(e.targetEl.value ?? e.contentEl.value, t);
}
function Mh(e, t) {
  const r = e.root.value?.offsetParent, n = [.../* @__PURE__ */ new Set([...Wn(e.targetEl.value, t.contained ? r : void 0), ...Wn(e.contentEl.value, t.contained ? r : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = ((s) => Xa(s) && s)(r || document.documentElement);
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), n.forEach((s, i) => {
    s.style.setProperty("--v-body-scroll-x", ye(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", ye(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", ye(o)), s.classList.add("v-overlay-scroll-blocked");
  }), Qe(() => {
    n.forEach((s, i) => {
      const l = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), c = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -l, s.scrollTop = -d, s.style.scrollBehavior = c;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Nh(e, t, r) {
  let n = !1, o = -1, a = -1;
  function s(i) {
    Rh(() => {
      const l = performance.now();
      e.updateLocation.value?.(i), n = (performance.now() - l) / (1e3 / 60) > 2;
    });
  }
  a = (typeof requestIdleCallback > "u" ? (i) => i() : requestIdleCallback)(() => {
    r.run(() => {
      Cu(e.targetEl.value ?? e.contentEl.value, (i) => {
        n ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            s(i);
          });
        })) : s(i);
      });
    });
  }), Qe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(o);
  });
}
function Cu(e, t) {
  const r = [document, ...Wn(e)];
  r.forEach((n) => {
    n.addEventListener("scroll", t, {
      passive: !0
    });
  }), Qe(() => {
    r.forEach((n) => {
      n.removeEventListener("scroll", t);
    });
  });
}
const Bh = Symbol.for("vuetify:v-menu"), Uh = We({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Vh(e, t) {
  let r = () => {
  };
  function n(s) {
    r?.();
    const i = Number(s ? e.openDelay : e.closeDelay);
    return new Promise((l) => {
      r = tp(i, () => {
        t?.(s), l(s);
      });
    });
  }
  function o() {
    return n(!0);
  }
  function a() {
    return n(!1);
  }
  return {
    clearDelay: r,
    runOpenDelay: o,
    runCloseDelay: a
  };
}
const Hh = We({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Uh()
}, "VOverlay-activator");
function Zh(e, t) {
  let {
    isActive: r,
    isTop: n,
    contentEl: o
  } = t;
  const a = nt("useActivator"), s = Pe();
  let i = !1, l = !1, d = !0;
  const c = Q(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), g = Q(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: p,
    runCloseDelay: C
  } = Vh(e, (v) => {
    v === (e.openOnHover && i || c.value && l) && !(e.openOnHover && r.value && !n.value) && (r.value !== v && (d = !0), r.value = v);
  }), m = Pe(), u = {
    onClick: (v) => {
      v.stopPropagation(), s.value = v.currentTarget || v.target, r.value || (m.value = [v.clientX, v.clientY]), r.value = !r.value;
    },
    onMouseenter: (v) => {
      v.sourceCapabilities?.firesTouchEvents || (i = !0, s.value = v.currentTarget || v.target, p());
    },
    onMouseleave: (v) => {
      i = !1, C();
    },
    onFocus: (v) => {
      ep(v.target, ":focus-visible") !== !1 && (l = !0, v.stopPropagation(), s.value = v.currentTarget || v.target, p());
    },
    onBlur: (v) => {
      l = !1, v.stopPropagation(), C();
    }
  }, A = Q(() => {
    const v = {};
    return g.value && (v.onClick = u.onClick), e.openOnHover && (v.onMouseenter = u.onMouseenter, v.onMouseleave = u.onMouseleave), c.value && (v.onFocus = u.onFocus, v.onBlur = u.onBlur), v;
  }), b = Q(() => {
    const v = {};
    if (e.openOnHover && (v.onMouseenter = () => {
      i = !0, p();
    }, v.onMouseleave = () => {
      i = !1, C();
    }), c.value && (v.onFocusin = () => {
      l = !0, p();
    }, v.onFocusout = () => {
      l = !1, C();
    }), e.closeOnContentClick) {
      const I = mt(Bh, null);
      v.onClick = () => {
        r.value = !1, I?.closeParents();
      };
    }
    return v;
  }), w = Q(() => {
    const v = {};
    return e.openOnHover && (v.onMouseenter = () => {
      d && (i = !0, d = !1, p());
    }, v.onMouseleave = () => {
      i = !1, C();
    }), v;
  });
  ge(n, (v) => {
    v && (e.openOnHover && !i && (!c.value || !l) || c.value && !l && (!e.openOnHover || !i)) && !o.value?.contains(document.activeElement) && (r.value = !1);
  }), ge(r, (v) => {
    v || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const F = oi();
  ar(() => {
    F.value && Ar(() => {
      s.value = F.el;
    });
  });
  const D = oi(), Z = Q(() => e.target === "cursor" && m.value ? m.value : D.value ? D.el : vu(e.target, a) || s.value), O = Q(() => Array.isArray(Z.value) ? void 0 : Z.value);
  let P;
  return ge(() => !!e.activator, (v) => {
    v && fe ? (P = zr(), P.run(() => {
      zh(e, a, {
        activatorEl: s,
        activatorEvents: A
      });
    })) : P && P.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Qe(() => {
    P?.stop();
  }), {
    activatorEl: s,
    activatorRef: F,
    target: Z,
    targetEl: O,
    targetRef: D,
    activatorEvents: A,
    contentEvents: b,
    scrimEvents: w
  };
}
function zh(e, t, r) {
  let {
    activatorEl: n,
    activatorEvents: o
  } = r;
  ge(() => e.activator, (l, d) => {
    if (d && l !== d) {
      const c = i(d);
      c && s(c);
    }
    l && Ar(() => a());
  }, {
    immediate: !0
  }), ge(() => e.activatorProps, () => {
    a();
  }), Qe(() => {
    s();
  });
  function a() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(), d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && sp(l, ze(o.value, d));
  }
  function s() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i(), d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    l && ip(l, ze(o.value, d));
  }
  function i() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const d = vu(l, t);
    return n.value = d?.nodeType === Node.ELEMENT_NODE ? d : void 0, n.value;
  }
}
function vu(e, t) {
  if (!e) return;
  let r;
  if (e === "parent") {
    let n = t?.proxy?.$el?.parentNode;
    for (; n?.hasAttribute("data-no-activator"); )
      n = n.parentNode;
    r = n;
  } else typeof e == "string" ? r = document.querySelector(e) : "$el" in e ? r = e.$el : r = e;
  return r;
}
function Wh(e) {
  return jc(() => {
    const t = [], r = {};
    if (e.value.background)
      if (la(e.value.background)) {
        if (r.backgroundColor = e.value.background, !e.value.text && xp(e.value.background)) {
          const n = ft(e.value.background);
          if (n.a == null || n.a === 1) {
            const o = Hc(n);
            r.color = o, r.caretColor = o;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (la(e.value.text) ? (r.color = e.value.text, r.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: r
    };
  });
}
function qh(e, t) {
  const r = Q(() => ({
    background: me(e) ? e.value : null
  })), {
    colorClasses: n,
    colorStyles: o
  } = Wh(r);
  return {
    backgroundColorClasses: n,
    backgroundColorStyles: o
  };
}
const Jh = We({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function $h(e) {
  return {
    dimensionStyles: Q(() => {
      const r = {}, n = ye(e.height), o = ye(e.maxHeight), a = ye(e.maxWidth), s = ye(e.minHeight), i = ye(e.minWidth), l = ye(e.width);
      return n != null && (r.height = n), o != null && (r.maxHeight = o), a != null && (r.maxWidth = a), s != null && (r.minHeight = s), i != null && (r.minWidth = i), l != null && (r.width = l), r;
    })
  };
}
function Yh() {
  if (!fe) return ke(!1);
  const {
    ssr: e
  } = D0();
  if (e) {
    const t = ke(!1);
    return za(() => {
      t.value = !0;
    }), t;
  } else
    return ke(!0);
}
const Gh = We({
  eager: Boolean
}, "lazy");
function Kh(e, t) {
  const r = ke(!1), n = Q(() => r.value || e.eager || t.value);
  ge(t, () => r.value = !0);
  function o() {
    e.eager || (r.value = !1);
  }
  return {
    isBooted: r,
    hasContent: n,
    onAfterLeave: o
  };
}
function Qh() {
  return nt("useRouter")?.proxy?.$router;
}
let Do = !1;
function Xh(e, t) {
  let r = !1, n, o;
  fe && e?.beforeEach && (Ar(() => {
    window.addEventListener("popstate", a), n = e.beforeEach((s, i, l) => {
      Do ? r ? t(l) : l() : setTimeout(() => r ? t(l) : l()), Do = !0;
    }), o = e?.afterEach(() => {
      Do = !1;
    });
  }), Qe(() => {
    window.removeEventListener("popstate", a), n?.(), o?.();
  }));
  function a(s) {
    s.state?.replaced || (r = !0, setTimeout(() => r = !1));
  }
}
function bu() {
  const t = nt("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const ki = Symbol.for("vuetify:stack"), Pr = xt([]);
function eA(e, t, r) {
  const n = nt("useStack"), o = !r, a = mt(ki, void 0), s = xt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  so(ki, s);
  const i = ke(Number(t.value));
  go(e, () => {
    const c = Pr.at(-1)?.[1];
    i.value = c ? c + 10 : Number(t.value), o && Pr.push([n.uid, i.value]), a?.activeChildren.add(n.uid), Qe(() => {
      if (o) {
        const g = X(Pr).findIndex((p) => p[0] === n.uid);
        Pr.splice(g, 1);
      }
      a?.activeChildren.delete(n.uid);
    });
  });
  const l = ke(!0);
  o && ar(() => {
    const c = Pr.at(-1)?.[0] === n.uid;
    setTimeout(() => l.value = c);
  });
  const d = Q(() => !s.activeChildren.size);
  return {
    globalTop: Na(l),
    localTop: d,
    stackStyles: Q(() => ({
      zIndex: i.value
    }))
  };
}
function tA(e) {
  return {
    teleportTarget: Q(() => {
      const r = e();
      if (r === !0 || !fe) return;
      const n = r === !1 ? document.body : typeof r == "string" ? document.querySelector(r) : r;
      if (n == null)
        return;
      let o = [...n.children].find((a) => a.matches(".v-overlay-container"));
      return o || (o = document.createElement("div"), o.className = "v-overlay-container", n.appendChild(o)), o;
    })
  };
}
const rA = We({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), nA = (e, t) => {
  let {
    slots: r
  } = t;
  const {
    transition: n,
    disabled: o,
    group: a,
    ...s
  } = e, {
    component: i = a ? Bm : wc,
    ...l
  } = typeof n == "object" ? n : {};
  return uo(i, ze(typeof n == "string" ? {
    name: o ? "" : n
  } : l, typeof n == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: o,
    group: a
  }).filter((d) => {
    let [c, g] = d;
    return g !== void 0;
  })), s), r);
};
function oA(e) {
  const {
    modelValue: t,
    color: r,
    ...n
  } = e;
  return ne(wc, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && ne("div", ze({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, n), null)]
  });
}
const Iu = We({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Hh(),
  ..._p(),
  ...Jh(),
  ...Gh(),
  ...Oh(),
  ...Dh(),
  ...Z0(),
  ...rA()
}, "VOverlay"), Mi = Qa()({
  name: "VOverlay",
  directives: {
    ClickOutside: nu
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Iu()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: r,
      attrs: n,
      emit: o
    } = t;
    const a = nt("VOverlay"), s = Pe(), i = Pe(), l = Pe(), d = es(e, "modelValue"), c = Q({
      get: () => d.value,
      set: (te) => {
        te && e.disabled || (d.value = te);
      }
    }), {
      themeClasses: g
    } = Q0(e), {
      rtlClasses: p,
      isRtl: C
    } = Jp(), {
      hasContent: m,
      onAfterLeave: u
    } = Kh(e, c), A = qh(Q(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: b,
      localTop: w,
      stackStyles: F
    } = eA(c, Wg(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: D,
      activatorRef: Z,
      target: O,
      targetEl: P,
      targetRef: v,
      activatorEvents: I,
      contentEvents: j,
      scrimEvents: k
    } = Zh(e, {
      isActive: c,
      isTop: w,
      contentEl: l
    }), {
      teleportTarget: x
    } = tA(() => {
      const te = e.attach || e.contained;
      if (te) return te;
      const ot = D?.value?.getRootNode() || a.proxy?.$el?.getRootNode();
      return ot instanceof ShadowRoot ? ot : !1;
    }), {
      dimensionStyles: T
    } = $h(e), H = Yh(), {
      scopeId: B
    } = bu();
    ge(() => e.disabled, (te) => {
      te && (c.value = !1);
    });
    const {
      contentStyles: J,
      updateLocation: W
    } = Ph(e, {
      isRtl: C,
      contentEl: l,
      target: O,
      isActive: c
    });
    jh(e, {
      root: s,
      contentEl: l,
      targetEl: P,
      isActive: c,
      updateLocation: W
    });
    function z(te) {
      o("click:outside", te), e.persistent ? sr() : c.value = !1;
    }
    function se(te) {
      return c.value && b.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || te.target === i.value || te instanceof MouseEvent && te.shadowTarget === i.value);
    }
    fe && ge(c, (te) => {
      te ? window.addEventListener("keydown", de) : window.removeEventListener("keydown", de);
    }, {
      immediate: !0
    }), Wa(() => {
      fe && window.removeEventListener("keydown", de);
    });
    function de(te) {
      te.key === "Escape" && b.value && (l.value?.contains(document.activeElement) || o("keydown", te), e.persistent ? sr() : (c.value = !1, l.value?.contains(document.activeElement) && D.value?.focus()));
    }
    function Ae(te) {
      te.key === "Escape" && !b.value || o("keydown", te);
    }
    const qe = Qh();
    go(() => e.closeOnBack, () => {
      Xh(qe, (te) => {
        b.value && c.value ? (te(!1), e.persistent ? sr() : c.value = !1) : te();
      });
    });
    const Cr = Pe();
    ge(() => c.value && (e.absolute || e.contained) && x.value == null, (te) => {
      if (te) {
        const ot = Np(s.value);
        ot && ot !== document.scrollingElement && (Cr.value = ot.scrollTop);
      }
    });
    function sr() {
      e.noClickAnimation || l.value && ap(l.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Mp
      });
    }
    function mo() {
      o("afterEnter");
    }
    function Bt() {
      u(), o("afterLeave");
    }
    return Wc(() => ne(Ve, null, [r.activator?.({
      isActive: c.value,
      targetRef: v,
      props: ze({
        ref: Z
      }, I.value, e.activatorProps)
    }), H.value && m.value && ne(cf, {
      disabled: !x.value,
      to: x.value
    }, {
      default: () => [ne("div", ze({
        class: ["v-overlay", {
          "v-overlay--absolute": e.absolute || e.contained,
          "v-overlay--active": c.value,
          "v-overlay--contained": e.contained
        }, g.value, p.value, e.class],
        style: [F.value, {
          "--v-overlay-opacity": e.opacity,
          top: ye(Cr.value)
        }, e.style],
        ref: s,
        onKeydown: Ae
      }, B, n), [ne(oA, ze({
        color: A,
        modelValue: c.value && !!e.scrim,
        ref: i
      }, k.value), null), ne(nA, {
        appear: !0,
        persisted: !0,
        transition: e.transition,
        target: O.value,
        onAfterEnter: mo,
        onAfterLeave: Bt
      }, {
        default: () => [sf(ne("div", ze({
          ref: l,
          class: ["v-overlay__content", e.contentClass],
          style: [T.value, J.value]
        }, j.value, e.contentProps), [r.default?.({
          isActive: c
        })]), [[ym, c.value], [Ef("click-outside"), {
          handler: z,
          closeConditional: se,
          include: () => [D.value]
        }]])]
      })])]
    })])), {
      activatorEl: D,
      scrimEl: i,
      target: O,
      animateClick: sr,
      contentEl: l,
      globalTop: b,
      localTop: w,
      updateLocation: W
    };
  }
}), jo = Symbol("Forwarded refs");
function ko(e, t) {
  let r = e;
  for (; r; ) {
    const n = Reflect.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
function aA(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e[jo] = r, new Proxy(e, {
    get(o, a) {
      if (Reflect.has(o, a))
        return Reflect.get(o, a);
      if (!(typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))) {
        for (const s of r)
          if (s.value && Reflect.has(s.value, a)) {
            const i = Reflect.get(s.value, a);
            return typeof i == "function" ? i.bind(s.value) : i;
          }
      }
    },
    has(o, a) {
      if (Reflect.has(o, a))
        return !0;
      if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__")) return !1;
      for (const s of r)
        if (s.value && Reflect.has(s.value, a))
          return !0;
      return !1;
    },
    set(o, a, s) {
      if (Reflect.has(o, a))
        return Reflect.set(o, a, s);
      if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__")) return !1;
      for (const i of r)
        if (i.value && Reflect.has(i.value, a))
          return Reflect.set(i.value, a, s);
      return !1;
    },
    getOwnPropertyDescriptor(o, a) {
      const s = Reflect.getOwnPropertyDescriptor(o, a);
      if (s) return s;
      if (!(typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))) {
        for (const i of r) {
          if (!i.value) continue;
          const l = ko(i.value, a) ?? ("_" in i.value ? ko(i.value._?.setupState, a) : void 0);
          if (l) return l;
        }
        for (const i of r) {
          const l = i.value && i.value[jo];
          if (!l) continue;
          const d = l.slice();
          for (; d.length; ) {
            const c = d.shift(), g = ko(c.value, a);
            if (g) return g;
            const p = c.value && c.value[jo];
            p && d.push(...p);
          }
        }
      }
    }
  });
}
const sA = We({
  id: String,
  interactive: Boolean,
  text: String,
  ...Km(Iu({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), iA = Qa()({
  name: "VTooltip",
  props: sA(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: r
    } = t;
    const n = es(e, "modelValue"), {
      scopeId: o
    } = bu(), a = ff(), s = Q(() => e.id || `v-tooltip-${a}`), i = Pe(), l = Q(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), d = Q(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), c = Q(() => e.transition ? e.transition : n.value ? "scale-transition" : "fade-transition"), g = Q(() => ze({
      "aria-describedby": s.value
    }, e.activatorProps));
    return Wc(() => {
      const p = Mi.filterProps(e);
      return ne(Mi, ze({
        ref: i,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: s.value
      }, p, {
        modelValue: n.value,
        "onUpdate:modelValue": (C) => n.value = C,
        transition: c.value,
        absolute: !0,
        location: l.value,
        origin: d.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: g.value,
        _disableGlobalStack: !0
      }, o), {
        activator: r.activator,
        default: function() {
          for (var C = arguments.length, m = new Array(C), u = 0; u < C; u++)
            m[u] = arguments[u];
          return r.default?.(...m) ?? e.text;
        }
      });
    }), aA({}, i);
  }
});
function lA(e, t) {
  const r = typeof e == "string" ? wf(e) : e, n = cA(r, t);
  return {
    mounted: n,
    updated: n,
    unmounted(o) {
      Fc(null, o);
    }
  };
}
function cA(e, t) {
  return function(r, n, o) {
    const a = typeof t == "function" ? t(n) : t, s = n.value?.text ?? n.value ?? a?.text, i = Lc(n.value) ? n.value : {}, l = () => s ?? r.textContent, d = (o.ctx === n.instance.$ ? uA(o, n.instance.$)?.provides : o.ctx?.provides) ?? n.instance.$.provides, c = uo(e, ze(a, i), l);
    c.appContext = Object.assign(/* @__PURE__ */ Object.create(null), n.instance.$.appContext, {
      provides: d
    }), Fc(c, r);
  };
}
function uA(e, t) {
  const r = /* @__PURE__ */ new Set(), n = (a) => {
    for (const s of a) {
      if (!s) continue;
      if (s === e || s.el && e.el && s.el === e.el)
        return !0;
      r.add(s);
      let i;
      if (s.suspense ? i = n([s.ssContent]) : Array.isArray(s.children) ? i = n(s.children) : s.component?.vnode && (i = n([s.component?.subTree])), i)
        return i;
      r.delete(s);
    }
    return !1;
  };
  if (!n([t.subTree]))
    return t;
  const o = Array.from(r).reverse();
  for (const a of o)
    if (a.component)
      return a.component;
  return t;
}
const dA = lA(iA, (e) => ({
  activator: "parent",
  location: e.arg?.replace("-", " "),
  text: typeof e.value == "boolean" ? void 0 : e.value
})), gA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: nu,
  Intersect: ah,
  Mutate: ih,
  Resize: uh,
  Ripple: hh,
  Scroll: Ch,
  Tooltip: dA,
  Touch: Eh
}, Symbol.toStringTag, { value: "Module" })), fA = {
  dark: !1,
  colors: {
    windowBackground: "#FAFAFA",
    windowBorder: "#E5E5E5",
    windowConfig: "#9F9FA9",
    extensionActivatedBackground: "#D7EDF5",
    extensionActivatedBorder: "#D7EDF5",
    extensionActivatedIconBackground: "#85C3DB",
    extensionActivatedIconColor: "#428FAD",
    extensionActivatedTitle: "#3B3B3B",
    extensionActivatedSubtitle: "#838D96",
    extensionActivatedSwitch: "#ED815F",
    popUpExtensionActivatedSwitch: "#ED815F",
    radioBackground: "#FFFFFF",
    radioBorder: "#ECECEC",
    radioFont: "#858585",
    radioIcon: "#858585",
    radioItem: "#FFFFFF",
    radioItemBorder: "#858585",
    radioItemText: "#858585",
    radioItemSelected: "#F5B6A2",
    radioItemSelectedText: "#3B3B3B",
    footerFont: "#A0A0A0",
    footerFontVersion: "#D5D5D5",
    bannerBg: "#FAFAFA",
    sidebarBg: "#D7EDF5",
    sidebarTextColor: "#3B3B3B",
    sidebarHover: "#1E94C1",
    titleColor: "#123F50",
    subtitleColor: "#344054",
    actionBtnColor: "#428FAD",
    actionBtnHover: "#CBD5E0",
    modalBg: "#FFFFFF",
    whatsAppIcon: "#25D366",
    youtbeIcon: "#FF0000",
    modalTitleColor: "#123F50",
    modalSubTitleColor: "#333333",
    modalSideBarBg: "#D7EDF5",
    modalSideBarTitle: "#3B3B3B",
    modalSideBarTextColor: "#286D88",
    modalSideBarFooter: "#C4E1EB",
    modalActiveStep: "#1E94C1",
    modalActiveStepCircle: "#026489",
    modalActiveStepText: "#FFFFFF",
    modalCompletedStep: "#5393ABE8",
    modalCompletedStepText: "#5393ABE8",
    modalStepText: "#5393ABE8",
    modalStepCircleText: "#5393ABE8",
    modalUploadBtn: "#E8592B",
    modalTextAreaBg: "#F6F6F6",
    modalTextAreaBorder: "#BABABA",
    modalTextAreaText: "#101828",
    modalCardEtiquetaBg: "#E7F8FF",
    modalCardEtiquetaBorder: "#297592",
    modalCardEtiquetaTitle: "#3B3B3B",
    modalCardEtiquetaSubtitle: "#838D96",
    modalCardEtiquetaIconBg: "#D3F1FC",
    modalCardEtiquetaIconColor: "#428FAD",
    modalEtiquetaBg: "#EEFAFF",
    modalEtiquetaBgProcessos: "#D7EDF5",
    modalEtiquetaBgAdd: "#C9DDE3",
    modalEtiquetaBgRemove: "#F5B6A2",
    modalEtiquetaText: "#026489",
    modalCheckboxBg: "#428FAD",
    modalPrimaryBtn: "#5BBD6E",
    modalPrimaryBtnText: "#FFFFFF",
    modalSecondaryBtn: "#ffffff00",
    modalSecondaryBtnBorder: "#BFBFBF",
    modalSecondaryBtnText: "#6E6C6C",
    modalActionBtn: "#E8592B",
    autocompleteItemColor: "#026489",
    errorMessage: "#E60000",
    resultTableHeaderBackgroud: "#E8ECF2",
    resultTableHeaderFont: "#667085",
    etiquetaPadrao: "#5BC0DE"
  }
}, mA = {
  dark: !1,
  colors: {
    windowBackground: "#F1F1F2",
    windowBorder: "#E5E5E5",
    windowConfig: "#9F9FA9",
    extensionActivatedBackground: "#525658",
    extensionActivatedBorder: "#525658",
    extensionActivatedIconBackground: "#7C7C7C",
    extensionActivatedIconColor: "#F1F1F2",
    extensionActivatedTitle: "#FFFFFF",
    extensionActivatedSubtitle: "#E2E2E2",
    extensionActivatedSwitch: "#20799B",
    popUpExtensionActivatedSwitch: "#20799B",
    radioBackground: "#E6E6E6",
    radioBorder: "#DCDCDC",
    radioFont: "#858585",
    radioIcon: "#858585",
    radioItem: "#FFFFFF",
    radioItemBorder: "#858585",
    radioItemText: "#858585",
    radioItemSelected: "#20799B",
    radioItemSelectedText: "#FFFFFF",
    footerFont: "#A0A0A0",
    footerFontVersion: "#D5D5D5",
    titleColor: "#DEDEDE",
    bannerBg: "#525658",
    sidebarBg: "#424648",
    sidebarTextColor: "#DEDEDE",
    sidebarHover: "#1E94C1",
    subtitleColor: "#DEDEDE",
    actionBtnColor: "#DEDEDE",
    actionBtnHover: "#CBD5E0",
    whatsAppIcon: "#25D366",
    youtbeIcon: "#FF0000",
    modalBg: "#424648",
    modalTitleColor: "#FFFFFF",
    modalSubTitleColor: "#FFFFFF",
    modalSideBarBg: "#525658",
    modalSideBarTitle: "#FFFFFF",
    modalSideBarTextColor: "#FFFFFF",
    modalSideBarFooter: "#424648",
    modalActiveStep: "#424648",
    modalActiveStepCircle: "#525658",
    modalActiveStepText: "#FFFFFF",
    modalCompletedStep: "#424648",
    modalCompletedStepText: "#FFFFFF",
    modalStepText: "#FFFFFF",
    modalStepCircleText: "#525658",
    modalTextAreaBg: "#F6F6F6",
    modalTextAreaBorder: "#BABABA",
    modalTextAreaText: "#101828",
    modalCardEtiquetaBg: "#F6F6F6",
    modalCardEtiquetaBorder: "#000000",
    modalCardEtiquetaTitle: "#3B3B3B",
    modalCardEtiquetaSubtitle: "#838D96",
    modalCardEtiquetaIconBg: "#525658",
    modalCardEtiquetaIconColor: "#FFFFFF",
    modalEtiquetaBg: "#F0F0F0",
    modalEtiquetaBgProcessos: "#D7EDF5",
    modalEtiquetaBgAdd: "#C9DDE3",
    modalEtiquetaBgRemove: "#F5B6A2",
    modalEtiquetaText: "#123F50",
    modalCheckboxBg: "#525658",
    modalPrimaryBtn: "#5BBD6E",
    modalPrimaryBtnText: "#FFFFFF",
    modalSecondaryBtn: "#ffffff00",
    modalSecondaryBtnBorder: "#BFBFBF",
    modalSecondaryBtnText: "#525658",
    modalActionBtn: "#E0E0E0",
    autocompleteItemColor: "#F0F0F0",
    errorMessage: "#FC8181",
    resultTableHeaderBackgroud: "#E8ECF2",
    resultTableHeaderFont: "#667085",
    etiquetaPadrao: "#5BC0DE"
  }
}, pA = {
  dark: !1,
  colors: {
    windowBackground: "#0000001C",
    windowBorder: "#E5E5E5",
    windowConfig: "#9F9FA9",
    extensionActivatedBackground: "#FFFFFF",
    extensionActivatedBorder: "#20799B",
    extensionActivatedIconBackground: "#000000",
    extensionActivatedIconColor: "#FFFFFF",
    extensionActivatedTitle: "#000000",
    extensionActivatedSubtitle: "#000000",
    extensionActivatedSwitch: "#FFFFFF",
    popUpExtensionActivatedSwitch: "#000000",
    radioBackground: "#000000",
    radioBorder: "#5B5F61",
    radioFont: "#DEDEDE",
    radioIcon: "#DEDEDE",
    radioItem: "#424648",
    radioItemBorder: "#E0E0E0",
    radioItemText: "#E0E0E0",
    radioItemSelected: "#FFFFFF",
    radioItemSelectedText: "#3B3B3B",
    footerFont: "#FFFFFF",
    footerFontVersion: "#D5D5D5",
    bannerBg: "#1A1C1C",
    sidebarBg: "#FFFFFF",
    sidebarTextColor: "#000000",
    sidebarHover: "#000000",
    titleColor: "#FFFFFF",
    subtitleColor: "#000000",
    actionBtnColor: "#000000",
    actionBtnHover: "#FFFFFF",
    whatsAppIcon: "#FFFFFF",
    youtbeIcon: "#FFFFFF",
    modalBg: "#1A1C1C",
    modalTitleColor: "#FFFFFF",
    modalSubTitleColor: "#FFFFFF",
    modalSideBarBg: "#FFFFFF",
    modalSideBarTitle: "#000000",
    modalSideBarTextColor: "#000000",
    modalSideBarFooter: "#EDEDED",
    modalActiveStep: "#000000",
    modalActiveStepCircle: "#FFFFFF",
    modalActiveStepText: "#000000",
    modalCompletedStep: "#000000",
    modalCompletedStepText: "#000000",
    modalStepText: "#000000",
    modalStepCircleText: "#000000",
    modalTextAreaBg: "#F6F6F6",
    modalTextAreaBorder: "#BABABA",
    modalTextAreaText: "#101828",
    modalCardEtiquetaBg: "#FFFFFF",
    modalCardEtiquetaBorder: "#000000",
    modalCardEtiquetaTitle: "#3B3B3B",
    modalCardEtiquetaSubtitle: "#000000",
    modalCardEtiquetaIconBg: "#000000",
    modalCardEtiquetaIconColor: "#FFFFFF",
    modalEtiquetaBg: "#F0F0F0",
    modalEtiquetaBgProcessos: "#F0F0F0",
    modalEtiquetaBgAdd: "#F0F0F0",
    modalEtiquetaBgRemove: "#F0F0F0",
    modalEtiquetaText: "#101828",
    modalCheckboxBg: "#000000",
    modalPrimaryBtn: "#FFFFFF",
    modalPrimaryBtnText: "#000000",
    modalSecondaryBtn: "#000000",
    modalSecondaryBtnBorder: "#BFBFBF",
    modalSecondaryBtnText: "#FFFFFF",
    modalActionBtn: "#FFFFFF",
    autocompleteItemColor: "#000000",
    errorMessage: "#F56565",
    resultTableHeaderBackgroud: "#D0D0D0",
    resultTableHeaderFont: "#000000",
    etiquetaPadrao: "#2D2F32"
  }
}, hA = {
  dark: !1,
  colors: {
    primary: "#ff912c"
    // Altere essa cor para sua cor primária desejada
  },
  variables: {
    "theme-on-primary": "#FFFFFF"
    // Cor do texto para botões primários (branco)
  }
};
eu({
  directives: gA,
  icons: {
    defaultSet: "mdi",
    aliases: eh,
    sets: {
      mdi: th
    }
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: AA(fA, hA),
      dark: mA,
      highContrast: pA
    }
  }
});
function AA(e, t) {
  return {
    ...e,
    ...t,
    colors: {
      ...e.colors,
      ...t.colors
    },
    variables: {
      ...e.variables,
      ...t.variables
    }
  };
}
CA();
function CA() {
  try {
    return (typeof window < "u" ? window : self).navigator.userAgent;
  } catch {
    return "";
  }
}
var ts = /* @__PURE__ */ ((e) => (e.GESTOR = "gestor", e))(ts || {});
function vA(e, t) {
  const r = e;
  return r ? Array.isArray(r) ? r.find((o) => o.url.includes(t)) : r : void 0;
}
function bA() {
  try {
    return typeof window < "u" && window.location.href.match(rr.HREFS.ROOT)?.at(0) || "";
  } catch {
    return "";
  }
}
async function IA(e, t) {
  return await (await fetch(e, t)).text();
}
var yu = /* @__PURE__ */ ((e) => (e.atalhoModelo = "atalhoModelo", e.atalhoEntrada = "atalhoEntrada", e.entradaNegativa = "entradaNegativa", e))(yu || {});
({
  ...yu
});
bA();
function yA(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    t = (t << 5) - t + n, t &= t;
  }
  return new Uint32Array([t])[0].toString(36);
}
class xu {
  /**
   * @param filters - Filtros de URL para determinar onde o script será injetado
   * @param injectFunction - Função a ser injetada nas páginas
   * @param processResult - Função que processa o resultado obtido do script injetado
   * @param initialValue - Valor inicial para processamento
   * @param maxTries - Número máximo de tentativas de injeção
   * @param intervalTime - Intervalo entre tentativas em milissegundos
   * @param scriptArgs - Argumentos adicionais a serem passados para o script
   */
  constructor(t, r, n, o = null, a = 50, s = 250, i = []) {
    this.filters = t, this.injectFunction = r, this.processResult = n, this.initialValue = o, this.maxTries = a, this.intervalTime = s, this.scriptArgs = i, this.setupNavigationListener();
  }
  /**
   * Configura o listener de navegação para executar o script
   * quando uma página correspondente aos filtros for carregada
   */
  setupNavigationListener() {
    S.webNavigation.onCompleted.addListener(async (t) => this.handleNavigation(t), {
      url: this.filters.url
    });
  }
  /**
   * Manipula o evento de navegação completa
   */
  async handleNavigation(t) {
    if (!await Zu()) return;
    let r = 0, n;
    const o = setInterval(async () => {
      if (r++ > this.maxTries) {
        clearInterval(o);
        return;
      }
      try {
        if (n = await this.executeScript(t), n.result === null) {
          clearInterval(o);
          return;
        }
        if (n.result !== !1) {
          clearInterval(o);
          const a = n.result;
          this.processResult(a, this.initialValue);
        }
      } catch (a) {
        xA.erro(`[${this.constructor.name}] Erro ao injetar script:`, a);
      }
    }, this.intervalTime);
  }
  /**
   * Executa a função no contexto da página
   */
  async executeScript(t) {
    return (await S.scripting.executeScript({
      target: { tabId: t.tabId, frameIds: [t.frameId] },
      func: this.injectFunction,
      args: [Xt, ...this.scriptArgs],
      world: Xt ? "ISOLATED" : "MAIN"
    }))[0];
  }
}
const xA = new Ye({
  recurso: "ScriptInjectHandler"
});
function wA(...e) {
  function t(m) {
    if (m.__esModule) return m;
    var u = m.default;
    if (typeof u == "function") {
      var A = function b() {
        return this instanceof b ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
      };
      A.prototype = u.prototype;
    } else A = {};
    return Object.defineProperty(A, "__esModule", { value: !0 }), Object.keys(m).forEach(function(b) {
      var w = Object.getOwnPropertyDescriptor(m, b);
      Object.defineProperty(A, b, w.get ? w : { enumerable: !0, get: function() {
        return m[b];
      } });
    }), A;
  }
  var r = {};
  const n = t(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
  Object.defineProperty(r, "__esModule", { value: !0 }), r.obterBranchAtual = s, r.detectarGitTag = i, r.obterVersao = l, r.obterVersaoENomeExibicao = function(m = "77.777.7777", u = "PJe+R") {
    try {
      const A = i();
      console.log("📦 Determinando versão e nome para o manifest...");
      const b = l(m);
      let w;
      try {
        w = d();
      } catch {
        w = u;
      }
      const F = { version: b, displayName: w };
      return A.isTag ? A.isTester ? console.log("🧪 Configuração de tester aplicada") : console.log("🚀 Configuração de produção aplicada") : console.log("🔧 Configuração de desenvolvimento aplicada"), console.log(`   📊 Versão: ${F.version}`), console.log(`   🏷️ Nome: ${F.displayName}`), F;
    } catch (A) {
      return console.error("❌ Erro ao determinar versão e nome:", A), { version: m, displayName: u };
    }
  };
  var o = r.obterNomeExibicao = d;
  r.validarAmbiente = function(m) {
    var u;
    const A = (u = "production") === null ? void 0 : u.toLowerCase(), b = i(), w = m || { message: console.log, info: console.log, success: console.log, step: console.log, warn: console.warn, warning: console.warn, error: console.error };
    w.step("🔍 Validando ambiente de deploy"), w.info(`   🌍 NODE_ENV: ${A}`), w.info(`   🏷️ É tag Git: ${b.isTag}`), w.info(`   📋 Versão: ${b.version || "N/A"}`), b.isTag && w.info(`   🧪 É tester: ${b.isTester}`);
    let F = !1, D = "";
    switch (A) {
      case "development":
        b.isTag && b.isTester ? F = !0 : D = "❌ NODE_ENV=development requer estar numa tag tester (vx.x.x-tester)";
        break;
      case "production":
        b.isTag && !b.isTester ? F = !0 : D = "❌ NODE_ENV=production requer estar numa tag de produção (vx.x.x)";
        break;
      case "local":
        b.isTag ? D = "❌ NODE_ENV=local requer estar numa branch (não numa tag)" : F = !0;
        break;
      default:
        D = `❌ NODE_ENV inválido: ${A}. Valores aceitos: development, production, local`;
    }
    if (!F) {
      w.error("🚨 ERRO DE VALIDAÇÃO DE AMBIENTE"), w.error(D), w.warn("📋 CONDIÇÕES PARA EXECUÇÃO:"), w.info("   • NODE_ENV=development → Deve estar numa tag tester (vx.x.x-tester)"), w.info("   • NODE_ENV=production  → Deve estar numa tag de produção (vx.x.x)"), w.info("   • NODE_ENV=local       → Deve estar numa branch qualquer (não numa tag)"), w.warn("💡 SITUAÇÃO ATUAL:"), w.info(`   • NODE_ENV: ${A}`), w.info("   • Estado Git: " + (b.isTag ? `Tag: ${b.version}` : `Branch: ${s()}`)), w.error("⛔ Execução interrompida por incompatibilidade de ambiente");
      const Z = ["🚨 ERRO DE VALIDAÇÃO DE AMBIENTE", D, "CONDIÇÕES: development=tag-tester, production=tag-release, local=branch"].join(" | ");
      throw new Error(Z);
    }
    w.success("✅ Validação de ambiente aprovada!");
  };
  const a = n;
  function s() {
    try {
      return (0, a.execSync)("git branch --show-current", { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }).trim();
    } catch {
      return console.log("⚠️ Não foi possível obter a branch atual, usando fallback"), "unknown-branch";
    }
  }
  function i() {
    try {
      let m;
      try {
        m = (0, a.execSync)("git describe --exact-match --tags HEAD", { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }).trim();
      } catch {
        return { isTag: !1 };
      }
      if (!m) return { isTag: !1 };
      console.log(`🏷️ Tag detectada: ${m}`);
      const u = m.match(/^v(\d+\.\d+\.\d+)(-tester)?$/);
      return u ? { isTag: !0, version: u[1], isTester: !!u[2] } : (console.log(`⚠️ Tag não segue o padrão esperado (vx.x.x ou vx.x.x-tester): ${m}`), { isTag: !1 });
    } catch {
      return console.log("📝 Não estamos numa tag git, usando configurações de desenvolvimento"), { isTag: !1 };
    }
  }
  function l(m = "77.777.7777") {
    try {
      const u = i();
      return u.isTag ? u.version : "999.999.999";
    } catch (u) {
      return console.error("❌ Erro ao obter versão:", u), m;
    }
  }
  function d() {
    try {
      const m = i();
      return m.isTag ? m.isTester ? "PJe+R Tester" : "PJe+R" : "PJe+R (Developer)";
    } catch (m) {
      return console.error("❌ Erro ao obter nome de exibição:", m), "PJe+R (Developer)";
    }
  }
  let c = class Le {
    static estilos = { azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;", vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;", laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;", verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;", cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;" };
    static console = { assert: (...u) => {
    }, count: (...u) => {
    }, debug: (...u) => {
    }, dir: (...u) => {
    }, error: (...u) => {
    }, group: (...u) => {
    }, groupCollapsed: (...u) => {
    }, groupEnd: (...u) => {
    }, info: (...u) => {
    }, log: (...u) => {
    }, profile: (...u) => {
    }, table: (...u) => {
    }, time: (...u) => {
    }, timeEnd: (...u) => {
    }, trace: (...u) => {
    }, warn: (...u) => {
    } };
    static autorizarEmProducao = !1;
    static info(u) {
      Le.log(u, Le.estilos.azul);
    }
    static erro(u) {
      u instanceof Error ? (Le.log(u.message, Le.estilos.vermelho), console.log(u)) : Le.log(u, Le.estilos.vermelho);
    }
    static aviso(u) {
      Le.log(u, Le.estilos.laranja);
    }
    static sucesso(u) {
      Le.log(u, Le.estilos.verde);
    }
    static detalhes(u) {
      Le.log(u, Le.estilos.cinza);
    }
    static inspecionar(u, A) {
      this.autorizarEmProducao && (Le.detalhes(u), console.log(A));
    }
    static log(u, A = "") {
      this.autorizarEmProducao && console.log(`%c${u}`, A);
    }
  };
  class g {
    recurso;
    contexto_;
    adicional;
    get contexto() {
      return function(u) {
        return {}.toString.call(u).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }(this.contexto_) === "string" ? this.contexto_ : this.contexto_();
    }
    static _depurador;
    static _baseConsoleFunc = (u, ...A) => {
      const b = `[${o()}][${g._depurador.recurso}][${g._depurador.contexto}]${g._depurador.adicional ? `[${g._depurador.adicional}]` : ""}: `;
      typeof A[0] == "string" ? A[0] = A[0].startsWith("%c") ? `%c${b}${A[0].slice(2)}` : `${b}${A[0]}` : A = [b].concat(A), u(...A);
    };
    static _console = { assert: (...u) => (...A) => {
    }, count: (...u) => (...A) => {
    }, debug: (...u) => (...A) => {
    }, dir: (...u) => (...A) => {
    }, error: (...u) => (...A) => {
    }, group: (...u) => (...A) => {
    }, groupCollapsed: (...u) => (...A) => {
    }, groupEnd: (...u) => (...A) => {
    }, info: (...u) => (...A) => {
    }, log: (...u) => (...A) => {
    }, profile: (...u) => (...A) => {
    }, table: (...u) => (...A) => {
    }, time: (...u) => (...A) => {
    }, timeEnd: (...u) => (...A) => {
    }, trace: (...u) => (...A) => {
    }, warn: (...u) => (...A) => {
    } };
    constructor({ recurso: u, contexto: A, adicional: b }) {
      this.recurso = u.replace(/^_/, ""), this.contexto_ = A || "isolated", this.adicional = b;
    }
    get console() {
      return g._depurador = this, g._console;
    }
    info(u) {
      this.log(u, c.estilos.azul);
    }
    erro(u, A) {
      const b = u instanceof Error ? u.message : u;
      this.log(b, c.estilos.vermelho, A), u instanceof Error && console.log(u, A);
    }
    aviso(u) {
      this.log(u, c.estilos.laranja);
    }
    sucesso(u, A) {
      this.log(u, c.estilos.verde, A);
    }
    detalhes(u) {
      this.log(u, c.estilos.cinza);
    }
    inspecionar(u, A) {
      this.detalhes(u), this.console.log(A);
    }
    log(u, A = "", b) {
      this.console.log(`%c${u}`, A, b);
    }
  }
  const p = new g({ recurso: "pje-payload", contexto: "isolated" });
  function C(m) {
    try {
      return function(u) {
        var A, b;
        if (window.top !== window) return null;
        const w = u, F = window;
        p.log("tentativa pelo painel usuário");
        const D = w ? (A = F.wrappedJSObject) == null ? void 0 : A.pjePayload : F.pjePayload;
        if (D?.CONSTANTES.WEB_ROOT) return D;
        p.log("tentativa pelo página de login");
        const Z = w ? (b = F.wrappedJSObject) == null ? void 0 : b.WEB_ROOT : F.WEB_ROOT;
        if (Z) try {
          const P = new URL(Z);
          return { typs: "pjePayload", CONSTANTES: { WEB_ROOT: Z, PATH: P.pathname.length > 1 ? P.pathname : "" } };
        } catch (P) {
          p.erro("A url para WEB_ROOT é inválida", P);
        }
        p.log("tentativa pelo meta property e origem janela");
        const O = document.querySelector("meta[property=og\\:url]");
        if (O) {
          let P;
          try {
            P = new URL(O.content).pathname;
          } catch {
            P = O.content;
          }
          return { typs: "pjePayload", CONSTANTES: { WEB_ROOT: `${window.origin}${O.content}`, PATH: P } };
        }
        return !1;
      }(m);
    } catch (u) {
      return p.erro("Erro ao executar script isolados:", u instanceof Error ? u : new Error(String(u))), !1;
    }
  }
  return C(...e);
}
const en = new ll(null), TA = (e, t) => {
  t && Object.assign(t.CONSTANTES, e.CONSTANTES), en.next(e);
}, EA = {
  url: [
    {
      urlMatches: "pje.+(cnj|trf|tj|tre|trt).+"
    }
  ]
};
new xu(
  EA,
  wA,
  TA,
  en.getValue()
);
const SA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PJePayloadUpdateSubject: en
}, Symbol.toStringTag, { value: "Module" }));
function OA(...e) {
  function t(m) {
    if (m.__esModule) return m;
    var u = m.default;
    if (typeof u == "function") {
      var A = function b() {
        return this instanceof b ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
      };
      A.prototype = u.prototype;
    } else A = {};
    return Object.defineProperty(A, "__esModule", { value: !0 }), Object.keys(m).forEach(function(b) {
      var w = Object.getOwnPropertyDescriptor(m, b);
      Object.defineProperty(A, b, w.get ? w : { enumerable: !0, get: function() {
        return m[b];
      } });
    }), A;
  }
  var r = {};
  const n = t(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
  Object.defineProperty(r, "__esModule", { value: !0 }), r.obterBranchAtual = s, r.detectarGitTag = i, r.obterVersao = l, r.obterVersaoENomeExibicao = function(m = "77.777.7777", u = "PJe+R") {
    try {
      const A = i();
      console.log("📦 Determinando versão e nome para o manifest...");
      const b = l(m);
      let w;
      try {
        w = d();
      } catch {
        w = u;
      }
      const F = { version: b, displayName: w };
      return A.isTag ? A.isTester ? console.log("🧪 Configuração de tester aplicada") : console.log("🚀 Configuração de produção aplicada") : console.log("🔧 Configuração de desenvolvimento aplicada"), console.log(`   📊 Versão: ${F.version}`), console.log(`   🏷️ Nome: ${F.displayName}`), F;
    } catch (A) {
      return console.error("❌ Erro ao determinar versão e nome:", A), { version: m, displayName: u };
    }
  };
  var o = r.obterNomeExibicao = d;
  r.validarAmbiente = function(m) {
    var u;
    const A = (u = "production") === null ? void 0 : u.toLowerCase(), b = i(), w = m || { message: console.log, info: console.log, success: console.log, step: console.log, warn: console.warn, warning: console.warn, error: console.error };
    w.step("🔍 Validando ambiente de deploy"), w.info(`   🌍 NODE_ENV: ${A}`), w.info(`   🏷️ É tag Git: ${b.isTag}`), w.info(`   📋 Versão: ${b.version || "N/A"}`), b.isTag && w.info(`   🧪 É tester: ${b.isTester}`);
    let F = !1, D = "";
    switch (A) {
      case "development":
        b.isTag && b.isTester ? F = !0 : D = "❌ NODE_ENV=development requer estar numa tag tester (vx.x.x-tester)";
        break;
      case "production":
        b.isTag && !b.isTester ? F = !0 : D = "❌ NODE_ENV=production requer estar numa tag de produção (vx.x.x)";
        break;
      case "local":
        b.isTag ? D = "❌ NODE_ENV=local requer estar numa branch (não numa tag)" : F = !0;
        break;
      default:
        D = `❌ NODE_ENV inválido: ${A}. Valores aceitos: development, production, local`;
    }
    if (!F) {
      w.error("🚨 ERRO DE VALIDAÇÃO DE AMBIENTE"), w.error(D), w.warn("📋 CONDIÇÕES PARA EXECUÇÃO:"), w.info("   • NODE_ENV=development → Deve estar numa tag tester (vx.x.x-tester)"), w.info("   • NODE_ENV=production  → Deve estar numa tag de produção (vx.x.x)"), w.info("   • NODE_ENV=local       → Deve estar numa branch qualquer (não numa tag)"), w.warn("💡 SITUAÇÃO ATUAL:"), w.info(`   • NODE_ENV: ${A}`), w.info("   • Estado Git: " + (b.isTag ? `Tag: ${b.version}` : `Branch: ${s()}`)), w.error("⛔ Execução interrompida por incompatibilidade de ambiente");
      const Z = ["🚨 ERRO DE VALIDAÇÃO DE AMBIENTE", D, "CONDIÇÕES: development=tag-tester, production=tag-release, local=branch"].join(" | ");
      throw new Error(Z);
    }
    w.success("✅ Validação de ambiente aprovada!");
  };
  const a = n;
  function s() {
    try {
      return (0, a.execSync)("git branch --show-current", { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }).trim();
    } catch {
      return console.log("⚠️ Não foi possível obter a branch atual, usando fallback"), "unknown-branch";
    }
  }
  function i() {
    try {
      let m;
      try {
        m = (0, a.execSync)("git describe --exact-match --tags HEAD", { encoding: "utf-8", stdio: ["pipe", "pipe", "ignore"] }).trim();
      } catch {
        return { isTag: !1 };
      }
      if (!m) return { isTag: !1 };
      console.log(`🏷️ Tag detectada: ${m}`);
      const u = m.match(/^v(\d+\.\d+\.\d+)(-tester)?$/);
      return u ? { isTag: !0, version: u[1], isTester: !!u[2] } : (console.log(`⚠️ Tag não segue o padrão esperado (vx.x.x ou vx.x.x-tester): ${m}`), { isTag: !1 });
    } catch {
      return console.log("📝 Não estamos numa tag git, usando configurações de desenvolvimento"), { isTag: !1 };
    }
  }
  function l(m = "77.777.7777") {
    try {
      const u = i();
      return u.isTag ? u.version : "999.999.999";
    } catch (u) {
      return console.error("❌ Erro ao obter versão:", u), m;
    }
  }
  function d() {
    try {
      const m = i();
      return m.isTag ? m.isTester ? "PJe+R Tester" : "PJe+R" : "PJe+R (Developer)";
    } catch (m) {
      return console.error("❌ Erro ao obter nome de exibição:", m), "PJe+R (Developer)";
    }
  }
  let c = class Re {
    static estilos = { azul: "background-color: #2979FF; color: #ffffff; font-weight: bold; padding: 2px 6px;", vermelho: "background-color: #F44336; color: #ffffff; font-weight: bold; padding: 2px 6px;", laranja: "background-color: #F57F17; color: #ffffff; font-weight: bold; padding: 2px 6px;", verde: "background-color: #2E7D32; color: #ffffff; font-weight: bold; padding: 2px 6px;", cinza: "background-color: #757575; color: #ffffff; font-weight: bold; padding: 2px 6px;" };
    static console = { assert: (...u) => {
    }, count: (...u) => {
    }, debug: (...u) => {
    }, dir: (...u) => {
    }, error: (...u) => {
    }, group: (...u) => {
    }, groupCollapsed: (...u) => {
    }, groupEnd: (...u) => {
    }, info: (...u) => {
    }, log: (...u) => {
    }, profile: (...u) => {
    }, table: (...u) => {
    }, time: (...u) => {
    }, timeEnd: (...u) => {
    }, trace: (...u) => {
    }, warn: (...u) => {
    } };
    static autorizarEmProducao = !1;
    static info(u) {
      Re.log(u, Re.estilos.azul);
    }
    static erro(u) {
      u instanceof Error ? (Re.log(u.message, Re.estilos.vermelho), console.log(u)) : Re.log(u, Re.estilos.vermelho);
    }
    static aviso(u) {
      Re.log(u, Re.estilos.laranja);
    }
    static sucesso(u) {
      Re.log(u, Re.estilos.verde);
    }
    static detalhes(u) {
      Re.log(u, Re.estilos.cinza);
    }
    static inspecionar(u, A) {
      this.autorizarEmProducao && (Re.detalhes(u), console.log(A));
    }
    static log(u, A = "") {
      this.autorizarEmProducao && console.log(`%c${u}`, A);
    }
  };
  class g {
    recurso;
    contexto_;
    adicional;
    get contexto() {
      return function(u) {
        return {}.toString.call(u).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }(this.contexto_) === "string" ? this.contexto_ : this.contexto_();
    }
    static _depurador;
    static _baseConsoleFunc = (u, ...A) => {
      const b = `[${o()}][${g._depurador.recurso}][${g._depurador.contexto}]${g._depurador.adicional ? `[${g._depurador.adicional}]` : ""}: `;
      typeof A[0] == "string" ? A[0] = A[0].startsWith("%c") ? `%c${b}${A[0].slice(2)}` : `${b}${A[0]}` : A = [b].concat(A), u(...A);
    };
    static _console = { assert: (...u) => (...A) => {
    }, count: (...u) => (...A) => {
    }, debug: (...u) => (...A) => {
    }, dir: (...u) => (...A) => {
    }, error: (...u) => (...A) => {
    }, group: (...u) => (...A) => {
    }, groupCollapsed: (...u) => (...A) => {
    }, groupEnd: (...u) => (...A) => {
    }, info: (...u) => (...A) => {
    }, log: (...u) => (...A) => {
    }, profile: (...u) => (...A) => {
    }, table: (...u) => (...A) => {
    }, time: (...u) => (...A) => {
    }, timeEnd: (...u) => (...A) => {
    }, trace: (...u) => (...A) => {
    }, warn: (...u) => (...A) => {
    } };
    constructor({ recurso: u, contexto: A, adicional: b }) {
      this.recurso = u.replace(/^_/, ""), this.contexto_ = A || "isolated", this.adicional = b;
    }
    get console() {
      return g._depurador = this, g._console;
    }
    info(u) {
      this.log(u, c.estilos.azul);
    }
    erro(u, A) {
      const b = u instanceof Error ? u.message : u;
      this.log(b, c.estilos.vermelho, A), u instanceof Error && console.log(u, A);
    }
    aviso(u) {
      this.log(u, c.estilos.laranja);
    }
    sucesso(u, A) {
      this.log(u, c.estilos.verde, A);
    }
    detalhes(u) {
      this.log(u, c.estilos.cinza);
    }
    inspecionar(u, A) {
      this.detalhes(u), this.console.log(A);
    }
    log(u, A = "", b) {
      this.console.log(`%c${u}`, A, b);
    }
  }
  const p = new g({ recurso: "keycloak-identity", contexto: "isolated" });
  function C(m) {
    try {
      return function() {
        if (window.top !== window) return null;
        p.log("Tentando obter cookie KEYCLOAK_IDENTITY");
        try {
          const u = document.cookie.split(";").map((A) => A.trim()).find((A) => A.startsWith("KEYCLOAK_IDENTITY="));
          if (u) {
            const [A, b] = u.split("=");
            return p.log("Cookie KEYCLOAK_IDENTITY encontrado"), decodeURIComponent(b);
          }
          return p.log("Cookie KEYCLOAK_IDENTITY não encontrado"), !1;
        } catch (u) {
          return p.erro("Erro ao buscar cookie:", u instanceof Error ? u : new Error(String(u))), !1;
        }
      }();
    } catch (u) {
      return p.erro("Erro ao executar script isolados:", u instanceof Error ? u : new Error(String(u))), !1;
    }
  }
  return C(...e);
}
const wu = new ll(null), PA = (e, t) => {
  wu.next(e);
}, FA = {
  url: [
    {
      urlMatches: "pje.+(cnj|trf|tj|tre|trt).+"
    }
  ]
};
new xu(
  FA,
  OA,
  PA
);
let va = null, be = null;
setInterval(async () => {
  if (!be) {
    be = (await S.storage.local.get("pjeCache"))?.pjeCache ?? {};
    return;
  }
  const e = (/* @__PURE__ */ new Date()).getTime(), t = Object.keys(be);
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    be[n].expires < e && delete be[n];
  }
  S.storage.local.set({ pjeCache: be });
}, 1e3 * 30);
en.subscribe((e) => {
  e && (va = RA(e.CONSTANTES.WEB_ROOT, e.CONSTANTES.COOKIES));
});
wu.subscribe((e) => {
});
async function _A(e) {
  if (be || (be = (await S.storage.local.get("pjeCache"))?.pjeCache ?? {}), !va) return null;
  if (e.endpoint) {
    const { cache: t = "indefinido", maxAge: r = 30 } = e.opcoes ?? {};
    if (t !== "indefinido" && t !== "padrão" && t !== "não-guardar" && t !== "recarregar" && t !== "apenas-se-presente-no-cache")
      return null;
    const n = yA(JSON.stringify(e));
    if (t === "apenas-se-presente-no-cache")
      return (be ?? {})[n]?.conteudo ?? null;
    const o = /* @__PURE__ */ new Date();
    let a = !1;
    if (t === "indefinido" || t === "padrão") {
      if (be[n] && be[n].conteudo && be[n].expires > o.getTime())
        return be[n].conteudo;
      a = !0;
    }
    const s = await va[e.endpoint](
      ...e.args ?? []
    );
    if (t === "não-guardar")
      return s;
    if (t === "recarregar" || a) {
      const i = o.getTime() + r * 6e4, l = { conteudo: s, expires: i };
      return s && be && (be[n] = l, Ce.console.log({ chaveCache: n, atCache: be[n] })), s;
    }
    return s;
  }
  return null;
}
yt("requisicaoAPI", async (e) => _A(e.data));
function LA(e, t) {
  const r = `${e}/seam/resource/rest/pje-legacy`, n = new Headers({
    Cookie: t,
    "Content-Type": "application/json"
  });
  return {
    baseURL: e,
    headers: n,
    get(o) {
      return fetch(`${r}${o}`, {
        headers: n,
        method: "GET"
      });
    },
    post(o, a) {
      return fetch(`${r}${o}`, {
        headers: n,
        method: "POST",
        body: a ?? ""
      });
    }
  };
}
function RA(e, t) {
  const r = LA(e, t);
  return {
    "autosDigitais::tarefasAtuais <TParamsIdProcesso>": async (n) => {
      const o = await r.get(`/autos-digitais/processos/${n}/tarefas-atuais`);
      return ce(o);
    },
    "processo::numeroProcessoValidar <TParamsNumeroProcesso>": async (n) => ce(
      await r.get(`/processos/numero-processo/${n}/validar`)
    ),
    "painelUsuario::tarefas <TParamsCriteriosMinimos>": async (n) => {
      const o = await r.post("/painelUsuario/tarefas", JSON.stringify(n));
      return ce(o);
    },
    "painelUsuario::tarefasFavoritas <TParamsCriteriosMinimos>": async (n) => ce(
      await r.post("/painelUsuario/tarefasFavoritas", JSON.stringify(n))
    ),
    "painelUsuario::tarefasAssinatura <>": async () => ce(await r.get("/painelUsuario/tarefasAssinatura")),
    "painelUsuario::processosTarefa <TParamsProcessosTarefa>": async (n, o, a) => ce(
      await r.post(
        `/painelUsuario/recuperarProcessosTarefaPendenteComCriterios/${n}/${o}`,
        JSON.stringify(a)
      )
    ),
    "painelUsuario::inserirEtiquetaNoProcesso <TParamsTagIdProcesso>": async (n, o) => {
      const a = await r.post(
        "/painelUsuario/processoTags/inserir",
        JSON.stringify({
          tag: n,
          idProcesso: o
        })
      );
      return ce(a);
    },
    "painelUsuario::removerEtiquetaDoProcesso <TParamsIdTagIdProcesso>": async (n, o) => {
      const a = await r.post(
        "/painelUsuario/processoTags/remover",
        JSON.stringify({
          idTag: parseInt(n),
          idProcesso: parseInt(o)
        })
      );
      return ce(a);
    },
    "painelUsuario::etiquetasDoProcesso <TParamsIdProcesso>": async (n) => {
      const o = await r.get(`/painelUsuario/processoTags/listar/${n}`);
      return ce(o);
    },
    "painelUsuario::etiquetasProcessosTarefas <TParamsProcessosTarefas>": async (n, o, a) => {
      const s = await r.post(
        `/painelUsuario/recuperarEtiquetasQuantitativoProcessoTarefaPendente/${n}/${o}`,
        JSON.stringify(a || {})
      );
      return ce(s);
    },
    "painelUsuario::processoTarefaPorIdProcesso <TParamsTarefaIdProcesso>": async (n, o) => ce(
      await r.get(
        `/painelUsuario/recuperarProcessoPorTarefaIdentificador/${n}/${o}`
      )
    ),
    "painelUsuario::processoTarefaPorIdTarefa <TParamsTarefa>": async (n) => ce(await r.get(`/painelUsuario/recuperarProcesso/${n}/false`)),
    "painelUsuario::transicoesSaidaTarefa <TParamsTarefa>": async (n) => ce(await r.get(`/painelUsuario/transicoes/${n}`)),
    "painelUsuario::movimentarTarefa <TParamsTarefaTransicao>": async (n, o) => ce(
      await r.get(`/painelUsuario/movimentar/${n}/${o}`)
    ),
    "painelUsuario::movimentarTarefaIndividual <TParamsTarefaTransicao>": async (n, o) => ce(
      await r.get(`/painelUsuario/movimentarIndividual/${n}/${o}`)
    ),
    "painelUsuario::historicoTarefas <TParamsIdProcesso>": async (n) => ce(await r.get(`/painelUsuario/historicoTarefas/${n}`)),
    "processo::ultimoMovimento <TParamsIdProcesso>": async (n) => ce(
      await r.get(`/processos/${n}/ultimoMovimento`)
    ),
    "processo::cabecalho <TParamsIdProcesso>": async (n) => ce(
      await r.get(`/api/v1/processos-judiciais/${n}`)
    ),
    "processo::infoBasica <TParamsIdProcesso>": async (n) => ce(await r.get(`/processos/${n}`)),
    "documento::download <TParamsDocumento>": async (n) => ce(await r.get(`documento/download/${n}`)),
    "painelUsuario::obterTodasEtiquetas <>": async () => await ce(
      await r.post("/painelUsuario/etiquetas")
    ),
    "painelUsuario::classesJudiciais <>": async () => await ce(
      await r.get("/painelUsuario/classesJudiciais")
    ),
    "usuario::dadosAtuais <>": async () => {
      const n = await r.get("/usuario/currentUser");
      return ce(n);
    }
  };
}
async function ce(e) {
  let t;
  if (e) {
    try {
      return t = await e.text(), JSON.parse(t);
    } catch (r) {
      Ce.erro(r);
    }
    if (Ce.log(t ?? ""), t) return t;
  }
  return null;
}
async function Hr(e) {
  const t = e.args;
  if (!t) return;
  const n = await S.webNavigation.getAllFrames({ tabId: e.senderTab });
  return vA(n, t.frame);
}
async function Tt(e) {
  const t = { tabId: e.senderTab }, r = await Hr({ ...e, args: { frame: "movimentar.seam" } }) || await Hr({ ...e, args: { frame: "minutarLotePainelNovoCK.seam" } }) || await Hr({ ...e, args: { frame: "listView.seam" } });
  return r ? Object.assign(t, { tabId: e.senderTab, frameIds: [r.frameId] }) : Object.assign(t, { tabId: e.senderTab, allFrames: !0 }), t;
}
async function DA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: (r) => {
      if ("CKEDITOR" in window) {
        const n = window;
        n.CKEDITOR.instances[Object.getOwnPropertyNames(n.CKEDITOR.instances)[0]].insertHtml(r);
      } else if (window.wrappedJSObject) {
        const n = window;
        n.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(n.wrappedJSObject.CKEDITOR.instances)[0]].insertHtml(r);
      }
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function jA(e) {
  const t = e.args ?? "";
  return await S.scripting.executeScript({
    target: { tabId: e.senderTab },
    func: (r) => {
      try {
        if (r) {
          if ("tinyMCE" in window) {
            const n = window;
            n.tinyMCE.activeEditor.setContent(r), n.tinyMCE.activeEditor.focus();
          } else if (window.wrappedJSObject) {
            const n = window;
            n.wrappedJSObject.tinyMCE.activeEditor.setContent(r), n.wrappedJSObject.tinyMCE.activeEditor.focus();
          }
          setTimeout(() => {
            Array.from(document.querySelectorAll("input")).find(
              (o) => o.id.includes("update")
            )?.dispatchEvent(new Event("click", {}));
          }, 250);
        }
        if ("salvar" in window && typeof window.salvar == "function") {
          const n = window;
          window.salvar(
            n.CKEDITOR.instances[Object.getOwnPropertyNames(n.CKEDITOR.instances)[0]].getData()
          );
        } else if (window.wrappedJSObject) {
          const n = window;
          n.wrappedJSObject.salvar(
            n.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(n.wrappedJSObject.CKEDITOR.instances)[0]].getData()
          );
        }
      } catch (n) {
        console.warn(n);
      }
    },
    args: [t],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function kA(e) {
  return (await S.scripting.executeScript({
    target: { tabId: e.senderTab },
    func: () => {
      let t;
      if (window.sessionStorage.pjeLegacyUrl && typeof window.sessionStorage.pjeLegacyUrl == "string")
        try {
          const r = JSON.parse(window.sessionStorage.pjeLegacyUrl);
          r && r.value && typeof r.value == "string" && (t = r.value);
        } catch {
        }
      return t ?? window.location.href;
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  })).at(0)?.result;
}
async function MA(e) {
  return await S.webNavigation.getAllFrames({ tabId: e.senderTab });
}
async function NA(e) {
  const t = e.args;
  if (!t) return { erro: "Não foi possível obter os argumentos da requisição" };
  if (!t.url) return { erro: "Não foi possível obter a url da requisição" };
  if (!t.init) return { erro: "Não foi possível obter o init da requisição" };
  const r = await Hr({ ...e, args: { frame: "/pje/" } });
  return r ? await S.scripting.executeScript({
    target: { tabId: e.senderTab, frameIds: [r.frameId] },
    func: IA,
    args: [t.url, t.init],
    world: "ISOLATED"
  }) : { erro: "Não possível obter o frame do PJE" };
}
async function BA(e) {
  const t = e.args;
  if (!t) return { erro: "Não foi possível obter os argumentos da requisição" };
  if (!t.frame) return { erro: "Não foi possível obter o frame da requisição" };
  if (!t.evento) return { erro: "Não foi possível obter o evento da requisição" };
  const r = await Hr(e);
  return r ? await S.scripting.executeScript({
    target: { tabId: e.senderTab, frameIds: [r.frameId] },
    func: (n, o) => {
      document.dispatchEvent(new CustomEvent(n, { detail: { ...o } }));
    },
    args: [t.evento, t.detail || {}],
    world: "ISOLATED"
  }) : { erro: `Não possível obter o frame: ${t.frame}` };
}
async function UA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: () => {
      if ("CKEDITOR" in window) {
        const r = window;
        return r.CKEDITOR.instances[Object.getOwnPropertyNames(r.CKEDITOR.instances)[0]].getData();
      } else if (window.wrappedJSObject) {
        const r = window;
        return r.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(r.wrappedJSObject.CKEDITOR.instances)[0]].getData();
      }
      return "";
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function VA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: (r) => {
      if ("CKEDITOR" in window) {
        const n = window;
        n.CKEDITOR.instances[Object.getOwnPropertyNames(n.CKEDITOR.instances)[0]].setData(r);
      } else if (window.wrappedJSObject) {
        const n = window;
        n.wrappedJSObject.CKEDITOR.instances[Object.getOwnPropertyNames(n.wrappedJSObject.CKEDITOR.instances)[0]].setData(r);
      }
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function HA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: () => {
      let r, n = !1;
      const o = () => {
        setTimeout(() => {
          r = document.querySelector("iframe.cke_wysiwyg_frame")?.contentDocument?.body, r && (n ? n && r.getAttribute("pmr-ckeditor-init") !== "true" && (r.setAttribute("pmr-ckeditor-init", "true"), window.dispatchEvent(new CustomEvent("PJMR:CKEDITOR_RESET"))) : (n = !0, r.setAttribute("pmr-ckeditor-init", "true"), window.dispatchEvent(new CustomEvent("PJMR:CKEDITOR_READY")))), o();
        }, 1e3);
      };
      if ("CKEDITOR" in window) {
        const a = () => {
          setTimeout(() => {
            const s = window, i = Object.getOwnPropertyNames(s.CKEDITOR.instances)[0], l = s.CKEDITOR.instances[i].status;
            l !== "ready" && a(), l === "ready" && o();
          }, 100);
        };
        a();
      } else if (window.wrappedJSObject) {
        const a = () => {
          setTimeout(() => {
            const s = window, i = Object.getOwnPropertyNames(
              s.wrappedJSObject.CKEDITOR.instances
            )[0], l = s.wrappedJSObject.CKEDITOR.instances[i].status;
            l !== "ready" && a(), l === "ready" && o();
          }, 100);
        };
        a();
      }
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function ZA(e) {
  return e.isFirefox ? await S.storage.local.get() : await chrome.storage.local.get();
}
async function zA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: () => "tinyMCE" in window ? window.tinyMCE.activeEditor.getContent() : window.wrappedJSObject ? window.wrappedJSObject.tinyMCE.activeEditor.getContent() : "",
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function WA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: (r) => {
      "tinyMCE" in window ? window.tinyMCE.activeEditor.setContent(r) : window.wrappedJSObject && window.wrappedJSObject.tinyMCE.activeEditor.setContent(r);
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function qA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: (r) => {
      const n = window.tinyMCE || window.wrappedJSObject.tinyMCE, o = Object.values(n.editors)[0], a = o.selection.getNode(), s = ["body", "div", "blockquote", "td"], i = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
      let l = a;
      for (; l.parentElement && !s.includes(l.parentElement.tagName.toLowerCase()); )
        l = l.parentElement;
      if (l && i.forEach((d) => {
        "tagName" in l && (l = l.closest(d) || l);
      }), "tagName" in l) {
        const d = new DOMParser().parseFromString(r, "text/html");
        for (; d.body.lastChild; )
          l.insertAdjacentElement(
            "afterend",
            d.body.lastChild
          );
      } else
        o.execCommand("mceInsertContent", !1, r);
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function JA(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: () => {
      try {
        return "badonWriter" in window ? window.badonWriter.getInjectable("editor").obterConteudoNew() : window.wrappedJSObject ? window.wrappedJSObject.badonWriter.getInjectable("editor").obterConteudoNew() : "";
      } catch (r) {
        return console.warn(r), "";
      }
    },
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
async function $A(e) {
  const t = await Tt(e);
  return await S.scripting.executeScript({
    target: t,
    func: (r) => {
      const n = document.getElementById("editorEstruturadoFrame")?.contentDocument?.defaultView;
      n && "badonWriter" in n ? n.badonWriter.getInjectable("editor").insertHTML(r) : n.wrappedJSObject && n.wrappedJSObject.badonWriter.getInjectable("editor").insertHTML(r);
    },
    args: [e.args],
    world: e.isFirefox ? "ISOLATED" : "MAIN"
  });
}
function rs(e) {
  return new Promise((t, r) => {
    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error);
  });
}
function YA(e, t) {
  const r = indexedDB.open(e);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const n = rs(r);
  return (o, a) => n.then((s) => a(s.transaction(t, o).objectStore(t)));
}
let Mo;
function Tu() {
  return Mo || (Mo = YA("keyval-store", "keyval")), Mo;
}
function GA(e, t = Tu()) {
  return t("readonly", (r) => rs(r.get(e)));
}
function KA(e, t, r = Tu()) {
  return r("readwrite", (n) => (n.put(t, e), rs(n.transaction)));
}
let No = "";
const Rt = /* @__PURE__ */ new Map();
async function QA(e) {
  const { acao: t, conteudo: r, pjeLegacyUrl: n } = e.args;
  if (!n || !n.length) return;
  No = n, Rt.get("init") !== !0 && await XA() && Rt.set("init", !0);
  const o = Rt.get(No) || {};
  if (t === "obter")
    if (r) {
      const a = r;
      return typeof a == "string" && a in o ? o[a] : o;
    } else
      return o;
  else t === "definir" && (Object.assign(o, r), Rt.set(No, o), await KA("state", Rt));
  return o;
}
async function XA() {
  const e = await GA("state");
  if (Rt.size === 0 && e) {
    Rt.clear();
    for (const [t, r] of e)
      Rt.set(t, r);
  }
  return !0;
}
const Ni = {
  salvarModelo: jA,
  adicionarConteudoCkeditor: DA,
  obterUrl: kA,
  obterFrames: MA,
  enviarRequisicaoPJE: NA,
  enviarEventoFrame: BA,
  obterConteudoCkeditor: UA,
  definirConteudoCkeditor: VA,
  checarCKEditorReady: HA,
  getSessionStorage: ZA,
  obterConteudoTinyEditor: zA,
  obterConteudoBadonEditor: JA,
  adicionarConteudoBadonEditor: $A,
  definirConteudoTinyEditor: WA,
  adicionarConteudoTinyEditor: qA,
  state: QA
};
function e1(e, t, r) {
  if (e.origem !== ts.GESTOR) return !1;
  const n = !!navigator.userAgent.match(/firefox|fxios/i);
  if (t.id !== S.runtime.id) {
    const o = { resposta: "Erro desconhecido.", mensagemOriginal: e };
    if (!n && r) return r(o);
    if (n) return new Promise((a) => a(o));
  }
  if (!t.tab || !t.tab.id) {
    const o = { resposta: "Requisição sem tab ou tabId" };
    if (!n && r) return r(o);
    if (n) return new Promise((a) => a(o));
  } else if (e.mensagem in Ni) {
    const o = Ni[e.mensagem]({
      senderTab: t.tab?.id,
      args: e.conteudo,
      frameId: t.frameId,
      isFirefox: n
    });
    return n ? o : (o.then((a) => {
      r && r(a);
    }), !0);
  } else
    return !1;
}
S.webNavigation.onCompleted.addListener(
  async (e) => {
    let t = 0, r;
    const n = setInterval(async () => {
      if (t++ > 50) {
        clearInterval(n);
        return;
      }
      if (r = (await S.scripting.executeScript({
        target: { tabId: e.tabId, frameIds: [e.frameId] },
        func: (...o) => {
          if (!(window.top === window)) return null;
          const [s] = o, i = window, l = s ? i.wrappedJSObject?.pjePayload : i.pjePayload;
          return l?.CONSTANTES.WEB_ROOT ? {
            loginUsuarioSenha: !!document.querySelector(".tipo.tipo-login"),
            windowOrigin: window.location.origin,
            pjePayload: l
          } : !1;
        },
        args: [Xt],
        world: Xt ? "ISOLATED" : "MAIN"
      }))[0], r.result === null) {
        clearInterval(n);
        return;
      }
      if (r.result !== !1) {
        clearInterval(n);
        const o = r.result;
        Ge.guardarSessionStorage({ "pjemr-token-pje": o });
      }
    }, 250);
  },
  {
    url: [
      {
        urlMatches: "pje.+(cnj|trf|tj|tre|trt).+"
      }
    ]
  }
);
yt("pjemrTokenPJe", async (e) => {
  const t = await Ge.obter(
    "pularpaginavaziaOpcaoAuxiliar"
  );
  if (!t.pularpaginavaziaOpcaoAuxiliar?.criarAtaalhoPjeTokenMenuPJe)
    return Bo.console.log("Não está habilitado: ", t), !1;
  try {
    const { data: r, sender: n } = e, { tabId: o, frameId: a = 0 } = n;
    return await S.scripting.executeScript({
      target: { tabId: o, frameIds: [a] },
      func: (...s) => {
        const i = { error: () => {
        }, log: () => {
        } }, l = () => {
          const g = document.querySelectorAll('script[type="text/javascript"]');
          for (const p of g) {
            const m = p.innerHTML.match(/new window\.Menu\((.+?)\);/);
            if (m && m[1]) {
              const u = m[1].trim();
              try {
                return JSON.parse(u);
              } catch (A) {
                return i.error("[Pular página Token]: Erro ao analisar o JSON:", A), null;
              }
            }
          }
          return i.log("[Pular página Token]: JSON não encontrado em nenhum dos scripts."), null;
        }, [d] = s, c = l();
        switch (document.querySelector(".nivel > ul")?.replaceChildren(), i.log("[Pular página Token]: argumentos recebidos", { args: s, data: d }), d) {
          case "ativar-menu": {
            if (document.querySelector('[href="#/pjemr-token-pje"]')) return;
            i.log("[Pular página Token]: Menu inexistente"), new window.Menu({
              Menu: [
                ...c.Menu,
                {
                  itens: [
                    {
                      itens: [],
                      popup: !1,
                      nome: "Inserir",
                      url: "/pje/publico/usuario/token.seam#/pjemr-token-pje"
                    },
                    {
                      itens: [],
                      popup: !1,
                      nome: "Configurar Mobile",
                      url: "/pje/UsuarioMobile/listView.seam"
                    }
                  ],
                  popup: !1,
                  nome: "Token PJe",
                  url: "#/pjemr-token-pje"
                }
              ]
            }), i.log("[Pular página Token]: Adicionando detalhes PJe+R");
            const g = document.createElement("i");
            g.classList.add("fa", "fa-id-card", "icone-nav");
            const p = document.createElement("i");
            p.classList.add("fa", "fa-angle-right");
            const C = document.querySelector('[href="#/pjemr-token-pje"]');
            C && (C.insertAdjacentElement("afterbegin", g), C.insertAdjacentElement("beforeend", p), C.parentElement && (C.parentElement.style.boxShadow = "inset 0px 0px 20px 4px rgb(255 214 177)"), C.setAttribute("title", "PJe+R: Inserir Token PJe")), i.log("[Pular página Token]: Finalizado");
            break;
          }
        }
      },
      args: [r, Xt],
      world: Xt ? "ISOLATED" : "MAIN"
    }), !0;
  } catch (r) {
    return Bo.erro("Erro ao executar o script"), Bo.console.log(r), !1;
  }
});
const Bo = new Ye({ recurso: "pjemr-token-pje" }), Zr = {};
chrome.tabs.onUpdated.addListener((e, t) => {
  t.url && (Zr[e] || (Zr[e] = []), Zr[e].push(t.url));
});
chrome.tabs.onRemoved.addListener((e) => {
  delete Zr[e];
});
yt("obterHistoricoGuia", async (e) => {
  const t = e.sender.tabId;
  return t ? Zr[t] || [] : [];
});
class $t {
  static instance;
  ouvintes = /* @__PURE__ */ new Map();
  // Construtor privado para garantir que a classe seja Singleton
  constructor() {
    yt(
      "mensageriaPJemR",
      async (t) => {
        const r = t.data;
        return t1.console.log("Mensagem recebida:", r), this.transmitirMensagem(r);
      }
    );
  }
  // Método para obter a instância Singleton
  static getInstance() {
    return $t.instance || ($t.instance = new $t()), $t.instance;
  }
  // Método para adicionar novos objetos ao array
  inscrever(t) {
    this.ouvintes.set(t.tipo, t);
  }
  // Método privado para notificar objetos (exemplo de uso)
  async transmitirMensagem(t) {
    const r = this.ouvintes.get(t.tipo);
    return r ? await r.ouvirMensagem(t) : {
      ...t,
      conteudo: {
        resultado: "erro",
        texto: "Não existe ovinte para tratar a mensagem recebida"
      },
      resposta: !0
    };
  }
}
const t1 = new Ye({
  recurso: $t.name,
  adicional: "mensageria-pjemr-ts"
});
vt.getInstance();
(function() {
  S.webNavigation.onCommitted.addListener(async (t) => {
    S.scripting.executeScript({
      target: { tabId: t.tabId, frameIds: [t.frameId] },
      files: ["page-context.js"],
      world: Xt ? "ISOLATED" : "MAIN"
    });
  });
})();
S.runtime.onInstalled.addListener((e) => {
  e.reason === "install" ? (Ge.iniciar(), Ce.sucesso("Extensão instalada!")) : e.reason === "update" && (Ce.sucesso("Extensão atualizada!"), Ge.atualizar()), Ce.inspecionar("this: ", void 0), Ce.inspecionar("browser: ", S);
});
yt("guardarSessionStorage", async (e) => {
  let t;
  try {
    t = JSON.parse(e.data);
  } catch {
    return { resposta: "Erro ao converter dados para JSON" };
  }
  return await Ge.guardarSessionStorage(t), { resposta: "Dados guardados na sessionStorage" };
});
yt("obterSessionStorage", async (e) => {
  const t = await Ge.obterSessionStorage(e.data);
  return JSON.stringify({ resposta: t });
});
yt("endpoints", async ({ data: e }) => {
  switch (e.chamar) {
    case "backgroundFetchEndpoint":
      return !e.opcoes || !e.opcoes?.functionName || e.opcoes?.args ? {
        backgroundResponseWithError: !0,
        errorMessage: "Requisição mal formada"
      } : Ta.fetch(e.opcoes.functionName, e.opcoes.args);
    default:
      return {
        backgroundResponseWithError: !0,
        errorMessage: "Requisição desconhecida"
      };
  }
});
S.runtime.onMessage.addListener((e, t, r) => {
  if (e.origem === ts.GESTOR)
    return e1(e, t, r);
});
yt("intimaZapStartDownload", ({ data: e }) => {
  const t = e;
  return new Promise((r, n) => {
    chrome.downloads.download({ url: t }, (o) => {
      if (chrome.runtime.lastError) {
        n({ error: "Erro ao iniciar o download" });
        return;
      }
      const a = (s) => {
        s.id === o && s.state?.current === "complete" && (chrome.downloads.search({ id: o }, (i) => {
          if (i.length > 0) {
            const l = i[0].filename;
            r({ fullPath: l });
          } else
            n({ error: "Falha ao encontrar o arquivo baixado" });
        }), chrome.downloads.onChanged.removeListener(a));
      };
      chrome.downloads.onChanged.addListener(a);
    });
  });
});
S.runtime.onMessage.addListener((e, t, r) => {
  if (e.action === "checkWhatsAppTab")
    return S.tabs.query({ url: "*://web.whatsapp.com/*" }).then((n) => {
      if (n.length > 0) {
        const o = n[0].id;
        o !== void 0 && S.tabs.update(o, { url: e.url, active: !0 }).then(() => {
          r({ success: !0 });
        });
      } else
        S.tabs.create({ url: e.url }).then(() => {
          r({ success: !0 });
        });
    }), !0;
});
S.storage.onChanged.addListener((e, t) => {
  Ce.inspecionar(`Mudanças na área de armazenamento "${t}":`, e), e.ativada && Ku(e.ativada.newValue), (e.ativada || e.tema || e.cartaoProcesso || e.ajustesGerais || e.maisEspaco || e.ultimasEtiquetasUsadaTarefa || e.destacarLembretes || e.inativaCartao) && S.tabs.query({}).then((r) => {
    Ge.obter(null).then((n) => {
      r.forEach((o) => {
        const { url: a, id: s } = o;
        Yi(n, s, a), Gi(n, s, a);
      });
    });
  });
});
S.tabs.onUpdated.addListener((e) => {
  S.tabs.get(e).then((t) => {
    const { url: r } = t;
    Ge.obter(null).then((n) => {
      Yi(n, e, r), Gi(n, e, r);
    });
  });
});
(function() {
  $t.getInstance();
})();
export {
  Tr as P,
  ed as a,
  fd as b,
  Qu as c,
  ud as d,
  n1 as e,
  dd as f
};
