webpackJsonp([1], {
    "2CNl": function(t, e) {},
    G69j: function(t, e) {},
    NHnr: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i("7+uW"),
            a = i("raD+"),
            n = i("tLQV"),
            r = i("TXmL"),
            o = (i("feh1"), i("Xxa5")),
            l = i.n(o),
            c = i("exGp"),
            u = i.n(c),
            v = i("tqUj"),
            h = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("vk-navbar", [i("vk-navbar-nav", [i("vk-navbar-nav-item", {
                        attrs: {
                            title: "Fast SRT Subtitle Toolkit",
                            active: "active",
                        }
                    })], 1)], 1)
                },
                staticRenderFns: []
            };
        var d = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("vk-card", {
                    staticClass: "shortcuts"
                }, [i("vk-card-title", [t._v(t._s(t.$t("shortcuts")))]), i("p", {
                    staticClass: "operation",
                    on: {
                        click: function(e) {
                            return t.$emit("operate", {
                                key: "k"
                            })
                        }
                    }
                }, [i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("K")]), i("span", {
                    staticClass: "shortcut-text"
                }, [t._v(t._s(t.$t("shortcutK")))])], 1), i("p", {
                    staticClass: "operation",
                    on: {
                        click: function(e) {
                            return t.$emit("operate", {
                                key: "l"
                            })
                        }
                    }
                }, [i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("L")]), i("span", {
                    staticClass: "shortcut-text"
                }, [t._v(t._s(t.$t("shortcutL")))])], 1), i("p", {
                    staticClass: "operation",
                    on: {
                        click: function(e) {
                            return t.$emit("operate", {
                                key: "u"
                            })
                        }
                    }
                }, [i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("U")]), i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("A")]), i("span", {
                    staticClass: "shortcut-text"
                }, [t._v(t._s(t.$t("shortcutU")))])], 1), i("p", {
                    staticClass: "operation",
                    on: {
                        click: function(e) {
                            return t.$emit("operate", {
                                key: "p"
                            })
                        }
                    }
                }, [i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("P")]), i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("D")]), i("span", {
                    staticClass: "shortcut-text"
                }, [t._v(t._s(t.$t("shortcutP")))])], 1), i("p", {
                    staticClass: "operation",
                    on: {
                        click: function(e) {
                            return t.$emit("operate", {
                                key: "i"
                            })
                        }
                    }
                }, [i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("I")]), i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("W")]), i("span", {
                    staticClass: "shortcut-text"
                }, [t._v(t._s(t.$t("shortcutI")))])], 1), i("p", {
                    staticClass: "operation",
                    on: {
                        click: function(e) {
                            return t.$emit("operate", {
                                key: "o"
                            })
                        }
                    }
                }, [i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("O")]), i("vk-label", {
                    staticClass: "shortcut-label"
                }, [t._v("S")]), i("span", {
                    staticClass: "shortcut-text"
                }, [t._v(t._s(t.$t("shortcutO")))])], 1)], 1)
            },
            staticRenderFns: []
        };
        var p = {
                name: "App",
                components: {
                    Navbar: i("VU/8")({
                        name: "Navbar"
                    }, h, !1, function(t) {
                        i("2CNl")
                    }, null, null).exports,
                    Shortcut: i("VU/8")({
                        name: "Shortcut"
                    }, d, !1, function(t) {
                        i("o/St")
                    }, "data-v-653eb533", null).exports
                },
                data: function() {
                    return {
                        modalText: "",
                        modalShow: !1,
                        stage: "prepare",
                        subtitleText: "",
                        subtitles: [],
                        subtitleStarts: [],
                        subtitleEnds: [],
                        currentLine: null,
                        nextLine: 0,
                        previousTiming: 0,
                        reactTime: .3,
                        subtitleReview: ""
                    }
                },
                computed: {
                    nextLines: function() {
                        return this.subtitles.slice(this.nextLine, this.nextLine + 4)
                    }
                },
                beforeDestroy: function() {
                    window.removeEventListener("keypress", this.keyHandler)
                },
                methods: {
                    loadText: function() {
                        this.$refs.textLoader.click()
                    },
                    loadVideo: function() {
                        this.$refs.videoLoader.click()
                    },
                    readText: function(t) {
                        var e = this,
                            i = t.target.files[0];
                        this.subtitleText = "";
                        var s = new FileReader;
                        s.onload = function() {
                            e.subtitleText = s.result
                        }, s.readAsText(i)
                    },
                    readVideo: function(t) {
                        var e = t.target.files[0],
                            i = URL.createObjectURL(e);
                        this.$refs.source.src = i, this.$refs.video.load()
                    },
                    startEdit: function() {
                        0 === this.subtitleText.length ? (this.modalShow = !0, this.modalText = this.$t("emptySubtitle")) : (this.subtitles = this.subtitleText.split("\n"), this.subtitleStarts = new Array(this.subtitles.length).fill(null), this.subtitleEnds = new Array(this.subtitles.length).fill(null), this.stage = "edit", this.$refs.video.load(), window.addEventListener("keypress", this.keyHandler))
                    },
                    startReview: function() {
                        window.removeEventListener("keypress", this.keyHandler), this.stage = "review", this.$refs.video.currentTime = 0, this.generateSubtitle(), this.updatePreview()
                    },
                    keyHandler: function(t) {
                        switch (t.key) {
                            case "k":
                                null !== this.currentLine && (this.subtitleEnds[this.currentLine] = this.$refs.video.currentTime - .01 - this.reactTime), this.currentLine = this.nextLine, this.nextLine += 1, this.currentLine < this.subtitles.length ? this.subtitleStarts[this.currentLine] = this.$refs.video.currentTime - this.reactTime : this.currentLine = null;
                                break;
                            case "l":
                                null !== this.currentLine && (this.subtitleEnds[this.currentLine] = this.$refs.video.currentTime - .01 - this.reactTime), this.currentLine = null;
                                break;
                            case "u":
                                this.$refs.video.currentTime -= 3;
                                break;
                            case "p":
                                this.$refs.video.currentTime += 3;
                                break;
                            case "i":
                                this.nextLine > 0 && (this.currentLine = this.nextLine - 2, this.nextLine = this.nextLine - 1), -1 === this.currentLine && (this.currentLine = null);
                                break;
                            case "o":
                                this.nextLine < this.subtitles.length && (this.currentLine = this.nextLine, this.nextLine = this.nextLine + 1);
                                break;
                            case "w":
                                this.keyHandler({
                                    key: "i"
                                });
                                break;
                            case "a":
                                this.keyHandler({
                                    key: "u"
                                });
                                break;
                            case "s":
                                this.keyHandler({
                                    key: "o"
                                });
                                break;
                            case "d":
                                this.keyHandler({
                                    key: "p"
                                })
                        }
                    },
                    timeFormat: function(t) {
                        return null === t ? "00:00:00,000" : ("" + Math.floor(t / 60 / 60)).padStart(2, "0") + ":" + ("" + Math.floor(t / 60 % 60)).padStart(2, "0") + ":" + ("" + Math.floor(t % 60)).padStart(2, "0") + "," + ("" + Math.floor(1e3 * t % 1e3)).padStart(3, "0")
                    },
                    generateSubtitle: function() {
                        this.subtitleReview = "";
                        for (var t = 0; t < this.subtitles.length; t += 1) this.subtitleReview += t + 1 + "\n", this.subtitleReview += this.timeFormat(this.subtitleStarts[t]) + " --> " + this.timeFormat(this.subtitleEnds[t]) + "\n", this.subtitleReview += this.subtitles[t] + "\n\n"
                    },
                    updatePreview: function() {
                        var t = this;
                        return u()(l.a.mark(function e() {
                            var i, s, a;
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = new Blob([t.subtitleReview], {
                                            type: "text/plain"
                                        }), e.prev = 1, s = new v.a(i), e.next = 5, s.getURL();
                                    case 5:
                                        a = e.sent, t.$refs.caption.src = a, t.$refs.caption.mode = "showing", t.$refs.video.load(), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), t.modalShow = !0, t.modalText = t.$t("invalidSrt");
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t, [
                                [1, 11]
                            ])
                        }))()
                    },
                    backToEdit: function() {
                        this.$refs.caption.src = "/static/empty.vtt", this.$refs.video.load(), this.stage = "edit", window.addEventListener("keypress", this.keyHandler)
                    },
                    saveSrt: function() {
                        var t = this.$refs.download,
                            e = new Blob([this.subtitleReview], {
                                type: "text/plain"
                            });
                        t.href = URL.createObjectURL(e), t.download = "result.srt", t.click()
                    },
                    saveVtt: function() {
                        var t = this;
                        return u()(l.a.mark(function e() {
                            var i, s, a, n;
                            return l.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = t.$refs.download, s = new Blob([t.subtitleReview], {
                                            type: "text/plain"
                                        }), e.prev = 2, a = new v.a(s), e.next = 6, a.getURL();
                                    case 6:
                                        n = e.sent, i.href = n, i.download = "result.vtt", i.click(), e.next = 16;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(2), t.modalShow = !0, t.modalText = t.$t("invalidSrt");
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, t, [
                                [2, 12]
                            ])
                        }))()
                    }
                }
            },
            m = {
                render: function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [i("navbar"), i("vk-modal", {
                        attrs: {
                            show: t.modalShow
                        },
                        on: {
                            "update:show": function(e) {
                                t.modalShow = e
                            }
                        }
                    }, [i("vk-modal-title", [t._v(t._s(t.$t("error")))]), i("p", [t._v(t._s(t.modalText))]), i("p", {
                        staticClass: "uk-text-right"
                    }, [i("vk-button", {
                        staticClass: "uk-margin-small-right",
                        on: {
                            click: function(e) {
                                t.modalShow = !1
                            }
                        }
                    }, [t._v(t._s(t.$t("close")))])], 1)], 1), i("div", {
                        staticClass: "container"
                    }, [i("div", {
                        staticClass: "panel"
                    }, ["prepare" === t.stage ? i("div", [i("input", {
                        ref: "textLoader",
                        staticClass: "hidden",
                        attrs: {
                            type: "file",
                            accept: "text/plain"
                        },
                        on: {
                            change: t.readText
                        }
                    }), i("vk-button", {
                        staticClass: "inline-button",
                        on: {
                            click: t.loadText
                        }
                    }, [t._v(t._s(t.$t("loadTextFile")))]), i("vk-button", {
                        staticClass: "inline-button",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.startEdit
                        }
                    }, [t._v(t._s(t.$t("startEditing")))]), i("div", {
                        staticClass: "uk-margin"
                    }, [i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.subtitleText,
                            expression: "subtitleText"
                        }],
                        staticClass: "uk-textarea",
                        attrs: {
                            rows: "20"
                        },
                        domProps: {
                            value: t.subtitleText
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.subtitleText = e.target.value)
                            }
                        }
                    })]), i("p", {
                        staticClass: "uk-margin"
                    }, [t._v(t._s(t.$tc("lines", t.subtitleText.split("\n").length)))])], 1) : t._e(), "edit" === t.stage ? i("div", [i("vk-button", {
                        staticClass: "uk-margin",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.startReview
                        }
                    }, [t._v(t._s(t.$t("startReviewing")))]), i("h4", [t._v(t._s(t.$t("reactTime")) + t._s(t.reactTime) + "s")]), i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.reactTime,
                            expression: "reactTime"
                        }],
                        staticClass: "uk-range",
                        attrs: {
                            type: "range",
                            min: "0.0",
                            max: "1.0",
                            step: "0.01"
                        },
                        domProps: {
                            value: t.reactTime
                        },
                        on: {
                            __r: function(e) {
                                t.reactTime = e.target.value
                            }
                        }
                    }), i("h2", [t._v(t._s(t.$t("currentLine")))]), null === t.currentLine ? i("h4", {
                        staticClass: "alt-text"
                    }, [t._v(t._s(t.$t("emptyHint")))]) : i("h4", [t._v(t._s(t.subtitles[t.currentLine]))]), i("h2", [t._v(t._s(t.$t("comingLines")))]), t._l(t.nextLines, function(e) {
                        return i("h4", {
                            staticClass: "alt-text"
                        }, [t._v(t._s(e))])
                    }), t.nextLines.length < 4 ? i("h4", {
                        staticClass: "alt-text"
                    }, [t._v(t._s(t.$t("eofHint")))]) : t._e()], 2) : t._e(), "review" === t.stage ? i("div", [i("vk-button", {
                        staticClass: "inline-button",
                        on: {
                            click: t.updatePreview
                        }
                    }, [t._v(t._s(t.$t("updatePreview")))]), i("vk-button", {
                        staticClass: "inline-button",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.backToEdit
                        }
                    }, [t._v("Back to Edit Mode")]), i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.subtitleReview,
                            expression: "subtitleReview"
                        }],
                        staticClass: "uk-margin uk-textarea",
                        attrs: {
                            rows: "20"
                        },
                        domProps: {
                            value: t.subtitleReview
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.subtitleReview = e.target.value)
                            }
                        }
                    }), i("vk-button", {
                        staticClass: "inline-button",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.saveSrt
                        }
                    }, [t._v(t._s(t.$t("saveSrt")))]), i("vk-button", {
                        staticClass: "inline-button",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.saveVtt
                        }
                    }, [t._v(t._s(t.$t("saveVtt")))]), i("a", {
                        ref: "download",
                        staticClass: "hidden",
                        attrs: {
                            href: ""
                        }
                    })], 1) : t._e()]), i("div", {
                        staticClass: "panel"
                    }, [i("input", {
                        ref: "videoLoader",
                        staticClass: "hidden",
                        attrs: {
                            type: "file",
                            accept: "audio/mp4, video/mp4"
                        },
                        on: {
                            change: t.readVideo
                        }
                    }), "prepare" === t.stage ? i("vk-button", {
                        on: {
                            click: t.loadVideo
                        }
                    }, [t._v(t._s(t.$t("loadVideo")))]) : t._e(), i("video", {
                        ref: "video",
                        staticClass: "video uk-margin",
                        attrs: {
                            id: "player",
                            controls: "controls"
                        }
                    }, [i("source", {
                        ref: "source",
                        attrs: {
                            type: "video/mp4",
                            src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        }
                    }), i("track", {
                        ref: "caption",
                        attrs: {
                            default: "default",
                            label: "Default",
                            src: "/static/empty.vtt"
                        }
                    })]), i("shortcut", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "edit" === t.stage,
                            expression: "stage === 'edit'"
                        }],
                        on: {
                            operate: t.keyHandler
                        }
                    })], 1)]), t._m(0)], 1)
                },
                staticRenderFns: [
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("footer", {
                        })
                    }
                ]
            };
        var b = i("VU/8")(p, m, !1, function(t) {
                i("G69j")
            }, "data-v-0133f878", null).exports,
            f = {
                en: {
                    error: "Error",
                    close: "Close",
                    loadTextFile: "Load Text File",
                    lines: "Lines of Subtitle: no line | Lines of Subtitle: {n} line | Lines of Subtitle: {n} lines",
                    startEditing: "Start Editing",
                    reactTime: "React Time: ",
                    currentLine: "Current Line",
                    emptyHint: "[Empty]",
                    comingLines: "Coming Lines",
                    eofHint: "[End of File]",
                    startReviewing: "Start Reviewing",
                    updatePreview: "Update Preview",
                    saveSrt: "Save in SRT Format",
                    saveVtt: "Save in WebVTT Format",
                    loadVideo: "Load Video",
                    emptySubtitle: "Subtitle cannot be empty",
                    invalidSrt: "SRT file is invalid",
                    shortcuts: "Operations",
                    shortcutK: "Switch to Next Line",
                    shortcutL: "Stop Current Line",
                    shortcutU: "Prev 3 Secs",
                    shortcutP: "Skip 3 Secs",
                    shortcutI: "Prev Line",
                    shortcutO: "Skip Line"
                },
                "zh-cn": {
                    error: "错误",
                    close: "关闭",
                    loadTextFile: "载入文字字幕",
                    lines: "字幕行数：{n} 行",
                    startEditing: "开始编辑",
                    reactTime: "反应时间：",
                    currentLine: "当前字幕",
                    emptyHint: "[空]",
                    comingLines: "字幕预览",
                    eofHint: "[文件结束]",
                    startReviewing: "开始审阅",
                    updatePreview: "更新预览",
                    saveSrt: "保存为 SRT 文件",
                    saveVtt: "保存为 WebVTT 文件",
                    loadVideo: "载入视频",
                    emptySubtitle: "字幕不能为空",
                    invalidSrt: "SRT 文件不合法",
                    shortcuts: "操作",
                    shortcutK: "切换至下一行",
                    shortcutL: "停止当前行",
                    shortcutU: "后退 3 秒",
                    shortcutP: "快进 3 秒",
                    shortcutI: "返回上一行",
                    shortcutO: "跳过当前行"
                },
                "zh-tw": {
                    error: "錯誤",
                    close: "關閉",
                    loadTextFile: "加載文字字幕",
                    lines: "字幕行數：{n} 行",
                    startEditing: "開始編輯",
                    reactTime: "反應時間：",
                    currentLine: "當前字幕",
                    emptyHint: "[空]",
                    comingLines: "字幕預覽",
                    eofHint: "[檔案結束]",
                    startReviewing: "開始審查",
                    updatePreview: "更新預覽",
                    saveSrt: "以 SRT 檔案存儲",
                    saveVtt: "以 WebVTT 檔案存儲",
                    saveFile: "儲藏檔案",
                    loadVideo: "加載影片",
                    emptySubtitle: "字幕不能爲空",
                    invalidSrt: "SRT 檔案不合法",
                    shortcuts: "操作",
                    shortcutK: "切換到下一行",
                    shortcutL: "停止當前行",
                    shortcutU: "倒帶 3 秒",
                    shortcutP: "快轉 3 秒",
                    shortcutI: "返回上一行",
                    shortcutO: "跳過當前行"
                }
            };
        s.a.use(a.a), s.a.use(n.a), s.a.use(r.a), s.a.config.productionTip = !1;
        var k = new r.a({
            locale: "en",
            messages: f
        });
        new s.a({
            el: "#app",
            components: {
                App: b
            },
            i18n: k,
            template: "<App/>"
        })
    },
    feh1: function(t, e) {},
    "o/St": function(t, e) {}
}, ["NHnr"]);
//# sourceMappingURL=app.90668b422c44bcff38f8.js.map