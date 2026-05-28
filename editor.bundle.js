"use strict";
(self.webpackChunk = self.webpackChunk || []).push([['editor'], {
    2346: (t, e, n) => { // sideToolbarStyles
        n.d(e, {
            A: () => r
        });
        var i = n(1601)
          , s = n.n(i)
          , o = n(6314)
          , a = n.n(o)()(s());
        a.push([t.id, ".editor-side-toolbar-ui {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: absolute;\n\tbottom: 40px;\n\tleft: var(--safe-area-left);\n}\n.editor-side-toolbar-ui.touch {\n\tbottom: 176px;\n}\n\n.editor-side-toolbar-ui > .accordion {\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100px;\n\toverflow: hidden; /* Use hidden if clip is not supported */\n\toverflow: clip;\n\ttransition: width 0.25s ease-out;\n}\n.editor-side-toolbar-ui.touch > .accordion {\n\twidth: 120px;\n}\n.editor-side-toolbar-ui > .accordion.open {\n\twidth: auto;\n}\n\n.editor-side-toolbar-ui button {\n\tposition: relative;\n\tflex-shrink: 0;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100px;\n\theight: 100px;\n\tbackground-color: rgba(17, 32, 82, 0.48);\n\tborder: none;\n\tpointer-events: auto;\n\tcursor: pointer;\n\ttransition: background-color 0.25s ease-out;\n}\n.editor-side-toolbar-ui button:hover {\n\tbackground-color: rgba(37, 54, 105, 0.48);\n}\n.editor-side-toolbar-ui > .accordion > button:not(:first-of-type) {\n\tbackground-color: rgba(17, 32, 82, 0.35);\n}\n.editor-side-toolbar-ui > .accordion > button:not(:first-of-type):hover {\n\tbackground-color: rgba(37, 54, 105, 0.35);\n}\n.editor-side-toolbar-ui > .accordion > button:not(:first-of-type).selected {\n\tbackground-color: rgba(17, 32, 82, 0.55);\n}\n.editor-side-toolbar-ui > .accordion > button:not(:first-of-type):active {\n\tbackground-color: rgba(17, 32, 82, 0.6);\n}\n@media (hover: none) {\n\t.editor-side-toolbar-ui button:hover {\n\t\tbackground-color: rgba(17, 32, 82, 0.48);\n\t}\n}\n.editor-side-toolbar-ui button:active {\n\tbackground-color: rgba(17, 32, 82, 0.6);\n\ttransition: none;\n}\n\n.editor-side-toolbar-ui.touch button {\n\twidth: 120px;\n\theight: 120px;\n}\n\n.editor-side-toolbar-ui button img {\n\tmargin: 0;\n\tpadding: 20%;\n\tvertical-align: top;\n\twidth: 100%;\n    height: 100%;\n\tbox-sizing: border-box;\n\tpointer-events: none;\n\ttransition: transform 0.25s ease-out;\n\tfilter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));\n}\n.editor-side-toolbar-ui button:active img {\n\ttransition: none;\n\ttransform: scale(0.9);\n}\n\n.editor-side-toolbar-ui button.rotate > span {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 1px;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: var(--text-color);\n\tfont-size: 16px;\n\ttext-shadow: 0 0 2px #000;\n\tpointer-events: none;\n\ttransition: transform 0.25s ease-out;\n}\n.editor-side-toolbar-ui button.rotate:active > span {\n\ttransition: none;\n\ttransform: scale(0.9);\n}\n", ""]);
        const r = a
    }
    ,
    4124: (t, e, n) => {
        n.d(e, {
            default: () => EditorScene
        });
        var privateMethods = n(1635)
          , get = privateMethods.get
          , set = privateMethods.set
          , s = n(5072)
          , o = n.n(s)
          , a = n(7825)
          , r = n.n(a)
          , h = n(7659)
          , l = n.n(h)
          , c = n(5056)
          , d = n.n(c)
          , g = n(540)
          , f = n.n(g)
          , p = n(1113)
          , u = n.n(p)
          , VisualCar = n(4078).A
          , editorStyles = n(6057).A
          , editorStylesConfig = {};
        editorStylesConfig.styleTagTransform = u(),
        editorStylesConfig.setAttributes = d(),
        editorStylesConfig.insert = l().bind(null, "head"),
        editorStylesConfig.domAPI = r(),
        editorStylesConfig.insertStyleElement = f();
        o()(editorStyles, editorStylesConfig);
        editorStyles && editorStyles.locals && editorStyles.locals;
        var THREE = n(4922)
          , OrbitControls = n(7024).N;
        class EditorOrbitControls extends OrbitControls {
            constructor(t, e) {
                super(t, e),
                this.screenSpacePanning = !1,
                this.mouseButtons = {
                    LEFT: THREE.MOUSE.PAN,
                    MIDDLE: THREE.MOUSE.DOLLY,
                    RIGHT: THREE.MOUSE.ROTATE
                },
                this.touches = {
                    ONE: THREE.TOUCH.PAN,
                    TWO: THREE.TOUCH.DOLLY_ROTATE
                }
            }
        }
        class FontLoader extends THREE.Loader {
            constructor(t) {
                super(t)
            }
            load(t, e, n, i) {
                const s = this
                  , o = new THREE.FileLoader(this.manager);
                o.setPath(this.path),
                o.setRequestHeader(this.requestHeader),
                o.setWithCredentials(this.withCredentials),
                o.load(t, (function(t) {
                    const n = s.parse(JSON.parse(t));
                    e && e(n)
                }
                ), n, i)
            }
            parse(t) {
                return new Font(t)
            }
        }
        class Font {
            constructor(t) {
                this.isFont = !0,
                this.type = "Font",
                this.data = t
            }
            generateShapes(t, e=100, n="ltr") {
                const i = []
                  , s = function(t, e, n, i) {
                    const s = Array.from(t)
                      , o = e / n.resolution
                      , a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * o
                      , r = [];
                    let h = 0
                      , l = 0;
                    "rtl" != i && "tb" != i || s.reverse();
                    for (let t = 0; t < s.length; t++) {
                        const e = s[t];
                        if ("\n" === e)
                            h = 0,
                            l -= a;
                        else {
                            const t = createGlyphPath(e, o, h, l, n);
                            "tb" == i ? (h = 0,
                            l += n.ascender * o) : h += t.offsetX,
                            r.push(t.path)
                        }
                    }
                    return r
                }(t, e, this.data, n);
                for (let t = 0, e = s.length; t < e; t++)
                    i.push(...s[t].toShapes());
                return i
            }
        }
        function createGlyphPath(t, e, n, i, s) {
            const o = s.glyphs[t] || s.glyphs["?"];
            if (!o)
                return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + s.familyName + ".");
            const a = new THREE.ShapePath;
            let r, h, l, c, d, g, f, p;
            if (o.o) {
                const t = o._cachedOutline || (o._cachedOutline = o.o.split(" "));
                for (let s = 0, o = t.length; s < o; ) {
                    switch (t[s++]) {
                    case "m":
                        r = t[s++] * e + n,
                        h = t[s++] * e + i,
                        a.moveTo(r, h);
                        break;
                    case "l":
                        r = t[s++] * e + n,
                        h = t[s++] * e + i,
                        a.lineTo(r, h);
                        break;
                    case "q":
                        l = t[s++] * e + n,
                        c = t[s++] * e + i,
                        d = t[s++] * e + n,
                        g = t[s++] * e + i,
                        a.quadraticCurveTo(d, g, l, c);
                        break;
                    case "b":
                        l = t[s++] * e + n,
                        c = t[s++] * e + i,
                        d = t[s++] * e + n,
                        g = t[s++] * e + i,
                        f = t[s++] * e + n,
                        p = t[s++] * e + i,
                        a.bezierCurveTo(d, g, f, p, l, c)
                    }
                }
            }
            return {
                offsetX: o.ha * e,
                path: a
            }
        }
        var A, labels3d_renderer, labels3d_meshes, labels3d_cachedCheckpoints, labels3d_font, Track = n(8971), TrackPartTransform = n(5735);
        class CheckpointLabels3D {
            constructor(t) {
                labels3d_renderer.set(this, void 0),
                labels3d_meshes.set(this, []),
                labels3d_cachedCheckpoints.set(this, []),
                set(this, labels3d_renderer, t, "f")
            }
            dispose() {
                for (const t of get(this, labels3d_meshes, "f")) {
                    if (Array.isArray(t.material))
                        for (const e of t.material)
                            e.dispose();
                    else
                        t.material.dispose();
                    t.geometry.dispose(),
                    get(this, labels3d_renderer, "f").scene.remove(t)
                }
                get(this, labels3d_meshes, "f").length = 0
            }
            refresh(t) {
                if (null == get(A, A, "f", labels3d_font))
                    throw new Error("Font is not loaded yet");
                const e = t.getCheckpoints();
                let n = !1;
                if (e.length == get(this, labels3d_cachedCheckpoints, "f").length)
                    for (let t = 0; t < e.length; t++) {
                        const s = e[t]
                          , o = get(this, labels3d_cachedCheckpoints, "f")[t];
                        if (s.x != o.x || s.y != o.y || s.z != o.z || s.rotation != o.rotation || s.rotationAxis != o.rotationAxis || s.type != o.type || s.checkpointOrder != o.checkpointOrder) {
                            n = !0;
                            break
                        }
                    }
                else
                    n = !0;
                if (n) {
                    this.dispose(),
                    set(this, labels3d_cachedCheckpoints, e, "f");
                    const t = new THREE.MeshBasicMaterial({
                        color: 16777215
                    });
                    for (const n of e) {
                        const e = TrackPartTransform.rotationAndAxisToQuaternion(n.rotation, n.rotationAxis)
                          , s = new THREE.Vector3(...n.detector.center).add(new THREE.Vector3(0,-1.3,0)).applyQuaternion(e);
                        s.add(new THREE.Vector3(n.x * Track.A.partSize,n.y * Track.A.partSize,n.z * Track.A.partSize));
                        const o = get(A, A, "f", labels3d_font).generateShapes((n.checkpointOrder + 1).toString(), 4)
                          , a = new THREE.ShapeGeometry(o);
                        a.computeBoundingBox();
                        const r = a.boundingBox;
                        if (null == r)
                            throw new Error("Bounding box is null");
                        const h = -.5 * (r.max.x - r.min.x);
                        a.translate(h, 0, 0);
                        const l = new THREE.Mesh(a,t);
                        l.position.copy(s),
                        l.quaternion.copy(e),
                        get(this, labels3d_renderer, "f").scene.add(l),
                        get(this, labels3d_meshes, "f").push(l);
                        const c = new THREE.Mesh(a,t);
                        c.position.copy(s),
                        c.quaternion.copy(e).multiply((new THREE.Quaternion).setFromEuler(new THREE.Euler(0,Math.PI,0))),
                        get(this, labels3d_renderer, "f").scene.add(c),
                        get(this, labels3d_meshes, "f").push(c)
                    }
                }
            }
            static initResources() {
                return null == get(this, A, "f", labels3d_font) ? new Promise(( (t, e) => {
                    (new FontLoader).load("forced_square.json", (e => {
                        set(this, A, e, "f", labels3d_font),
                        t()
                    }
                    ), void 0, e)
                }
                )) : Promise.resolve()
            }
        }
        A = CheckpointLabels3D,
        labels3d_renderer = new WeakMap,
        labels3d_meshes = new WeakMap,
        labels3d_cachedCheckpoints = new WeakMap,
        labels3d_font = {
            value: null
        };
        const N = CheckpointLabels3D;
        var checkpointOrderStyles = n(7296).A
          , checkpointOrderStylesConfig = {};
        checkpointOrderStylesConfig.styleTagTransform = u(),
        checkpointOrderStylesConfig.setAttributes = d(),
        checkpointOrderStylesConfig.insert = l().bind(null, "head"),
        checkpointOrderStylesConfig.domAPI = r(),
        checkpointOrderStylesConfig.insertStyleElement = f();
        o()(checkpointOrderStyles, checkpointOrderStylesConfig);
        checkpointOrderStyles && checkpointOrderStyles.locals && checkpointOrderStyles.locals;
        var q, cpOrder_parentElement, cpOrder_localization, cpOrder_inputManager, cpOrder_element, cpOrder_labelElement, cpOrder_value, cpOrder_onInputChanged, cpOrder_updateLabel, cpOrder_findNextAvailable;
        cpOrder_parentElement = new WeakMap,
        cpOrder_localization = new WeakMap,
        cpOrder_inputManager = new WeakMap,
        cpOrder_element = new WeakMap,
        cpOrder_labelElement = new WeakMap,
        cpOrder_value = new WeakMap,
        cpOrder_onInputChanged = new WeakMap,
        q = new WeakSet,
        cpOrder_updateLabel = function() {
            get(this, cpOrder_labelElement, "f").textContent = get(this, cpOrder_localization, "f").get("Checkpoint order") + ": " + (this.checkpointOrder + 1).toString()
        }
        ,
        cpOrder_findNextAvailable = function(t) {
            const e = t.getCheckpointOrders()
              , n = new Set;
            for (const t of e)
                n.add(t);
            for (let t = 0; t < 65535; t++)
                if (!n.has(t))
                    return t;
            return 65535
        }
        ;
        const CheckpointOrderEditorUI = class {
            constructor(t, e, n, s) {
                q.add(this),
                cpOrder_parentElement.set(this, void 0),
                cpOrder_localization.set(this, void 0),
                cpOrder_inputManager.set(this, void 0),
                cpOrder_element.set(this, void 0),
                cpOrder_labelElement.set(this, void 0),
                cpOrder_value.set(this, 0),
                cpOrder_onInputChanged.set(this, void 0),
                set(this, cpOrder_parentElement, t, "f"),
                set(this, cpOrder_localization, e, "f"),
                set(this, cpOrder_inputManager, s, "f"),
                set(this, cpOrder_element, document.createElement("div"), "f"),
                get(this, cpOrder_element, "f").className = "hidden",
                t.appendChild(get(this, cpOrder_element, "f")),
                get(this, cpOrder_inputManager, "f").addChangeListener(set(this, cpOrder_onInputChanged, (t => {
                    t ? get(this, cpOrder_element, "f").classList.add("touch") : get(this, cpOrder_element, "f").classList.remove("touch")
                }
                ), "f"));
                const o = document.createElement("div");
                o.className = "buttons",
                get(this, cpOrder_element, "f").appendChild(o);
                const a = document.createElement("button");
                a.addEventListener("click", ( () => {
                    n.playUIClick(),
                    this.checkpointOrder++
                }
                )),
                a.addEventListener("contextmenu", (t => {
                    t.preventDefault()
                }
                )),
                o.appendChild(a);
                const r = document.createElement("img");
                r.src = "images/arrow_up.svg",
                a.appendChild(r);
                const h = document.createElement("button");
                h.addEventListener("click", ( () => {
                    n.playUIClick(),
                    this.checkpointOrder--
                }
                )),
                h.addEventListener("contextmenu", (t => {
                    t.preventDefault()
                }
                )),
                o.appendChild(h);
                const l = document.createElement("img");
                l.src = "images/arrow_down.svg",
                h.appendChild(l),
                set(this, cpOrder_labelElement, document.createElement("p"), "f"),
                get(this, cpOrder_element, "f").appendChild(get(this, cpOrder_labelElement, "f")),
                get(this, q, "m", cpOrder_updateLabel).call(this)
            }
            dispose() {
                get(this, cpOrder_parentElement, "f").removeChild(get(this, cpOrder_element, "f")),
                get(this, cpOrder_inputManager, "f").removeChangeListener(get(this, cpOrder_onInputChanged, "f"))
            }
            hide() {
                get(this, cpOrder_element, "f").classList.add("hidden"),
                get(this, cpOrder_element, "f").classList.remove("editor-checkpoint-order-ui")
            }
            show() {
                get(this, cpOrder_element, "f").classList.remove("hidden"),
                get(this, cpOrder_element, "f").classList.add("editor-checkpoint-order-ui")
            }
            reset() {
                this.checkpointOrder = 0
            }
            get checkpointOrder() {
                return get(this, cpOrder_value, "f")
            }
            set checkpointOrder(t) {
                set(this, cpOrder_value, Math.max(0, Math.min(65535, t)), "f"),
                get(this, q, "m", cpOrder_updateLabel).call(this)
            }
            setFromExistingCheckpoints(t) {
                this.checkpointOrder = get(this, q, "m", cpOrder_findNextAvailable).call(this, t)
            }
        }
        ;
        var heightSelectorStyles = n(5298).A
          , heightSelectorStylesConfig = {};
        heightSelectorStylesConfig.styleTagTransform = u(),
        heightSelectorStylesConfig.setAttributes = d(),
        heightSelectorStylesConfig.insert = l().bind(null, "head"),
        heightSelectorStylesConfig.domAPI = r(),
        heightSelectorStylesConfig.insertStyleElement = f();
        o()(heightSelectorStyles, heightSelectorStylesConfig);
        heightSelectorStyles && heightSelectorStyles.locals && heightSelectorStyles.locals;
        var height_parentElement, height_localization, height_inputManager, height_element, height_labelElement, height_onInputChanged, height_isUpHeld, height_isDownHeld, height_onPointerUp;
        height_parentElement = new WeakMap,
        height_localization = new WeakMap,
        height_inputManager = new WeakMap,
        height_element = new WeakMap,
        height_labelElement = new WeakMap,
        height_onInputChanged = new WeakMap,
        height_isUpHeld = new WeakMap,
        height_isDownHeld = new WeakMap,
        height_onPointerUp = new WeakMap;
        const HeightSelectorUI = class {
            constructor(t, e, n, s, o) {
                height_parentElement.set(this, void 0),
                height_localization.set(this, void 0),
                height_inputManager.set(this, void 0),
                height_element.set(this, void 0),
                height_labelElement.set(this, void 0),
                height_onInputChanged.set(this, void 0),
                height_isUpHeld.set(this, !1),
                height_isDownHeld.set(this, !1),
                height_onPointerUp.set(this, void 0),
                set(this, height_parentElement, t, "f"),
                set(this, height_localization, e, "f"),
                set(this, height_inputManager, n, "f"),
                set(this, height_element, document.createElement("div"), "f"),
                get(this, height_element, "f").className = "editor-height-selector-ui",
                t.appendChild(get(this, height_element, "f")),
                get(this, height_inputManager, "f").addChangeListener(set(this, height_onInputChanged, (t => {
                    t ? get(this, height_element, "f").classList.add("touch") : get(this, height_element, "f").classList.remove("touch")
                }
                ), "f")),
                set(this, height_labelElement, document.createElement("p"), "f"),
                get(this, height_element, "f").appendChild(get(this, height_labelElement, "f"));
                const a = document.createElement("div");
                a.className = "buttons",
                get(this, height_element, "f").appendChild(a);
                const r = document.createElement("button");
                r.addEventListener("pointerdown", ( () => {
                    if (s(),
                    !get(this, height_isUpHeld, "f")) {
                        set(this, height_isUpHeld, !0, "f");
                        const t = () => {
                            get(this, height_isUpHeld, "f") && (s(),
                            setTimeout(t, 50))
                        }
                        ;
                        setTimeout(t, 500)
                    }
                }
                )),
                r.addEventListener("contextmenu", (t => {
                    t.preventDefault()
                }
                )),
                a.appendChild(r);
                const h = document.createElement("img");
                h.src = "images/arrow_up.svg",
                r.appendChild(h);
                const l = document.createElement("button");
                l.addEventListener("pointerdown", ( () => {
                    if (o(),
                    !get(this, height_isDownHeld, "f")) {
                        set(this, height_isDownHeld, !0, "f");
                        const t = () => {
                            get(this, height_isDownHeld, "f") && (o(),
                            setTimeout(t, 50))
                        }
                        ;
                        setTimeout(t, 500)
                    }
                }
                )),
                l.addEventListener("contextmenu", (t => {
                    t.preventDefault()
                }
                )),
                a.appendChild(l);
                const c = document.createElement("img");
                c.src = "images/arrow_down.svg",
                l.appendChild(c),
                set(this, height_onPointerUp, ( () => {
                    set(this, height_isUpHeld, !1, "f"),
                    set(this, height_isDownHeld, !1, "f")
                }
                ), "f"),
                window.addEventListener("pointerup", get(this, height_onPointerUp, "f"))
            }
            refresh(t) {
                get(this, height_labelElement, "f").textContent = get(this, height_localization, "f").get("Height") + ": " + t.toString()
            }
            dispose() {
                get(this, height_parentElement, "f").removeChild(get(this, height_element, "f")),
                get(this, height_inputManager, "f").removeChangeListener(get(this, height_onInputChanged, "f")),
                window.removeEventListener("pointerup", get(this, height_onPointerUp, "f"))
            }
        }
        ;
        var RenderManager = n(2825).A
          , KeyBind = n(5818).A
          , TrackExportUI = n(579).A
          , TrackPartColorId = n(4183).A
          , Part = n(2203).A
          , TrackPartRotationAxis = n(8566).A;
        var ct = n(4839)
          , dt = n(7129)
          , TrackPartDetectorType = n(2247).A
          , sideToolbarStyles = n(2346).A
          , sideToolbarStylesConfig = {};
        sideToolbarStylesConfig.styleTagTransform = u(),
        sideToolbarStylesConfig.setAttributes = d(),
        sideToolbarStylesConfig.insert = l().bind(null, "head"),
        sideToolbarStylesConfig.domAPI = r(),
        sideToolbarStylesConfig.insertStyleElement = f();
        o()(sideToolbarStyles, sideToolbarStylesConfig);
        sideToolbarStyles && sideToolbarStyles.locals && sideToolbarStyles.locals;
        var toolbar_parentElement, toolbar_inputManager, toolbar_element, toolbar_rotateIcon, toolbar_rotateLabel, toolbar_axisButton, toolbar_axisButtonPairs, toolbar_onInputChanged;
        toolbar_parentElement = new WeakMap,
        toolbar_inputManager = new WeakMap,
        toolbar_element = new WeakMap,
        toolbar_rotateIcon = new WeakMap,
        toolbar_rotateLabel = new WeakMap,
        toolbar_axisButton = new WeakMap,
        toolbar_axisButtonPairs = new WeakMap,
        toolbar_onInputChanged = new WeakMap;
        const EditorSideToolbarUI = class {
            constructor(t, e, n, s, o, a, r) {
                toolbar_parentElement.set(this, void 0),
                toolbar_inputManager.set(this, void 0),
                toolbar_element.set(this, void 0),
                toolbar_rotateIcon.set(this, void 0),
                toolbar_rotateLabel.set(this, void 0),
                toolbar_axisButton.set(this, void 0),
                toolbar_axisButtonPairs.set(this, []),
                toolbar_onInputChanged.set(this, void 0),
                set(this, toolbar_parentElement, t, "f"),
                set(this, toolbar_inputManager, n, "f"),
                set(this, toolbar_element, document.createElement("div"), "f"),
                get(this, toolbar_element, "f").className = "editor-side-toolbar-ui",
                get(this, toolbar_parentElement, "f").appendChild(get(this, toolbar_element, "f"));
                let h = !1;
                const l = document.createElement("button")
                  , c = document.createElement("img");
                c.src = "images/overlapping_disabled.svg",
                l.appendChild(c),
                l.addEventListener("click", ( () => {
                    e.playUIClick(),
                    h = !h,
                    c.src = h ? "images/overlapping_enabled.svg" : "images/overlapping_disabled.svg",
                    s(h)
                }
                )),
                get(this, toolbar_element, "f").appendChild(l);
                let d = !0;
                const g = document.createElement("button")
                  , f = document.createElement("img");
                f.src = "images/grid_large.svg",
                g.appendChild(f),
                g.addEventListener("click", ( () => {
                    e.playUIClick(),
                    d = !d,
                    f.src = d ? "images/grid_large.svg" : "images/grid_small.svg",
                    o(d)
                }
                )),
                get(this, toolbar_element, "f").appendChild(g);
                const p = document.createElement("div");
                p.className = "accordion",
                get(this, toolbar_element, "f").appendChild(p),
                set(this, toolbar_axisButton, document.createElement("button"), "f"),
                get(this, toolbar_axisButton, "f").innerHTML = '<img src="images/rotation_axis_y_positive.svg">',
                get(this, toolbar_axisButton, "f").addEventListener("click", ( () => {
                    e.playUIClick(),
                    p.classList.toggle("open");
                    for (const t of p.children)
                        t != get(this, toolbar_axisButton, "f") && t instanceof HTMLButtonElement && (p.classList.contains("open") ? (t.inert = !1,
                        t.tabIndex = 0) : (t.inert = !0,
                        t.tabIndex = -1))
                }
                )),
                p.appendChild(get(this, toolbar_axisButton, "f"));
                for (const t of [TrackPartRotationAxis.YPositive, TrackPartRotationAxis.YNegative, TrackPartRotationAxis.XPositive, TrackPartRotationAxis.XNegative, TrackPartRotationAxis.ZPositive, TrackPartRotationAxis.ZNegative]) {
                    const n = document.createElement("button");
                    switch (n.inert = !0,
                    n.tabIndex = -1,
                    t) {
                    case TrackPartRotationAxis.YPositive:
                        n.innerHTML = '<img src="images/rotation_axis_y_positive.svg">';
                        break;
                    case TrackPartRotationAxis.YNegative:
                        n.innerHTML = '<img src="images/rotation_axis_y_negative.svg">';
                        break;
                    case TrackPartRotationAxis.XPositive:
                        n.innerHTML = '<img src="images/rotation_axis_x_positive.svg">';
                        break;
                    case TrackPartRotationAxis.XNegative:
                        n.innerHTML = '<img src="images/rotation_axis_x_negative.svg">';
                        break;
                    case TrackPartRotationAxis.ZPositive:
                        n.innerHTML = '<img src="images/rotation_axis_z_positive.svg">';
                        break;
                    case TrackPartRotationAxis.ZNegative:
                        n.innerHTML = '<img src="images/rotation_axis_z_negative.svg">'
                    }
                    n.addEventListener("click", ( () => {
                        e.playUIClick(),
                        a(t)
                    }
                    )),
                    t == TrackPartRotationAxis.YPositive && n.classList.add("selected"),
                    p.appendChild(n),
                    get(this, toolbar_axisButtonPairs, "f").push([t, n])
                }
                const u = document.createElement("button");
                u.className = "rotate",
                u.addEventListener("click", ( () => {
                    e.playUIClick(),
                    r()
                }
                )),
                get(this, toolbar_element, "f").appendChild(u),
                set(this, toolbar_rotateIcon, document.createElement("div"), "f"),
                get(this, toolbar_rotateIcon, "f").innerHTML = '<img src="images/rotate.svg">',
                u.appendChild(get(this, toolbar_rotateIcon, "f")),
                set(this, toolbar_rotateLabel, document.createElement("span"), "f"),
                get(this, toolbar_rotateLabel, "f").textContent = "0°",
                u.appendChild(get(this, toolbar_rotateLabel, "f")),
                n.addChangeListener(set(this, toolbar_onInputChanged, (t => {
                    t ? get(this, toolbar_element, "f").classList.add("touch") : get(this, toolbar_element, "f").classList.remove("touch")
                }
                ), "f"))
            }
            dispose() {
                get(this, toolbar_parentElement, "f").removeChild(get(this, toolbar_element, "f")),
                get(this, toolbar_inputManager, "f").removeChangeListener(get(this, toolbar_onInputChanged, "f"))
            }
            set rotation(t) {
                get(this, toolbar_rotateIcon, "f").style.transform = `rotate(${(90 * -t).toString()}deg)`,
                get(this, toolbar_rotateLabel, "f").textContent = (90 * t).toString() + "°"
            }
            set rotationAxis(t) {
                let e;
                switch (t) {
                case TrackPartRotationAxis.YPositive:
                    e = "images/rotation_axis_y_positive.svg";
                    break;
                case TrackPartRotationAxis.YNegative:
                    e = "images/rotation_axis_y_negative.svg";
                    break;
                case TrackPartRotationAxis.XPositive:
                    e = "images/rotation_axis_x_positive.svg";
                    break;
                case TrackPartRotationAxis.XNegative:
                    e = "images/rotation_axis_x_negative.svg";
                    break;
                case TrackPartRotationAxis.ZPositive:
                    e = "images/rotation_axis_z_positive.svg";
                    break;
                case TrackPartRotationAxis.ZNegative:
                    e = "images/rotation_axis_z_negative.svg"
                }
                get(this, toolbar_axisButton, "f").innerHTML = "";
                const n = document.createElement("img");
                n.src = e,
                get(this, toolbar_axisButton, "f").appendChild(n);
                for (const [e,n] of get(this, toolbar_axisButtonPairs, "f"))
                    e == t ? n.classList.add("selected") : n.classList.remove("selected")
            }
            hide() {
                get(this, toolbar_element, "f").classList.add("hidden")
            }
            show() {
                get(this, toolbar_element, "f").classList.remove("hidden")
            }
        }
        ;
        var editorHelpStyles = n(9242).A
          , editorHelpStylesConfig = {};
        editorHelpStylesConfig.styleTagTransform = u(),
        editorHelpStylesConfig.setAttributes = d(),
        editorHelpStylesConfig.insert = l().bind(null, "head"),
        editorHelpStylesConfig.domAPI = r(),
        editorHelpStylesConfig.insertStyleElement = f();
        o()(editorHelpStyles, editorHelpStylesConfig);
        editorHelpStyles && editorHelpStyles.locals && editorHelpStyles.locals;
        var help_uiRoot, help_element, help_onKeyDown;
        help_uiRoot = new WeakMap,
        help_element = new WeakMap,
        help_onKeyDown = new WeakMap;
        const EditorHelpUI = class {
            constructor(t, e, n, s, o, a, r, h) {
                help_uiRoot.set(this, void 0),
                help_element.set(this, void 0),
                help_onKeyDown.set(this, void 0);
                const l = document.getElementById("ui");
                if (null == l)
                    throw new Error("UI element not found");
                set(this, help_uiRoot, l, "f"),
                set(this, help_element, document.createElement("div"), "f"),
                get(this, help_element, "f").className = "editor-help-ui",
                get(this, help_uiRoot, "f").appendChild(get(this, help_element, "f"));
                const c = document.createElement("div");
                c.className = "background",
                get(this, help_element, "f").appendChild(c);
                const d = document.createElement("section");
                d.className = "container",
                get(this, help_element, "f").appendChild(d);
                const g = document.createElement("h1");
                g.textContent = e.get("How to use the editor"),
                d.appendChild(g);
                const f = document.createElement("section");
                f.className = "content",
                d.appendChild(f);
                const p = document.createElement("h2");
                function u(t) {
                    const i = n.getKeyBindings(t).filter((t => null != t));
                    return 0 == i.length ? e.get("Not set") : i.map((t => "[" + t + "]")).join(" " + e.get("or") + " ")
                }
                p.textContent = e.get("Camera controls"),
                f.appendChild(p);
                let m = "";
                s.touchEnabled ? (m += e.get("The camera can be moved by dragging with one finger. Rotate the camera by dragging with two fingers. Zoom in and out by pinching.") + "\n\n",
                m += e.get("The edited height can be changed by using the height selection in the bottom left corner.")) : (m += e.get("The camera can be moved by right clicking and dragging the mouse. Rotate the camera by clicking the middle mouse button (mouse wheel) or holding the control key and right clicking and dragging the mouse. Zoom in and out by scrolling the mouse wheel.") + "\n\n",
                m += e.get("Alternatively, the camera can also be controlled using the following keyboard keys:") + "\n\n",
                m += "\t" + e.get("Move forwards:") + " " + u(KeyBind.EditorMoveForwards) + "\n",
                m += "\t" + e.get("Move backwards:") + " " + u(KeyBind.EditorMoveBackwards) + "\n",
                m += "\t" + e.get("Move left:") + " " + u(KeyBind.EditorMoveLeft) + "\n",
                m += "\t" + e.get("Move right:") + " " + u(KeyBind.EditorMoveRight) + "\n",
                m += "\t" + e.get("Rotate left:") + " " + u(KeyBind.EditorRotateViewLeft) + "\n",
                m += "\t" + e.get("Rotate right:") + " " + u(KeyBind.EditorRotateViewRight) + "\n\n",
                m += e.get("The edited height can be changed either by using the height selection in the bottom left corner, or holding the shift key and scrolling the mouse wheel. Alternatively, you can use the following keyboard keys:") + "\n\n",
                m += "\t" + e.get("Move up:") + " " + u(KeyBind.EditorMoveUp) + "\n",
                m += "\t" + e.get("Move down:") + " " + u(KeyBind.EditorMoveDown));
                const v = document.createElement("p");
                v.textContent = m,
                f.appendChild(v);
                const w = document.createElement("h2");
                w.textContent = e.get("Editing"),
                f.appendChild(w);
                let b = "";
                s.touchEnabled ? (b += e.get("Track parts can be selected in the menu on the right after which they can be placed by tapping on the screen.") + "\n\n",
                b += e.get("The selected part can then be rotated by tapping the rotate button in the bottom left corner.") + "\n\n",
                b += e.get("Track parts can be deleted by using the delete tool in the right side menu.")) : (b += e.get("Track parts can be selected in the menu on the right after which they can be placed by left clicking with the mouse.") + "\n\n",
                b += e.get("Alternatively, the track part currently hovered by the mouse can be selected with the following keyboard shortcut:") + " " + u(KeyBind.EditorPick) + "\n\n",
                b += e.get("The selected part can then be rotated using the following keyboard shortcut:") + " " + u(KeyBind.EditorRotatePart) + "\n\n",
                b += e.get("Track parts can be deleted by using the delete tool in the right side menu or by holding the following key:") + " " + u(KeyBind.EditorDelete));
                const k = document.createElement("p");
                k.textContent = b,
                f.appendChild(k);
                const G = document.createElement("h2");
                G.textContent = e.get("Starting points, checkpoints and the finish line"),
                f.appendChild(G);
                let x = e.get("Starting points, checkpoints and finish lines can all be selected in the uppermost category in the right side menu.") + "\n\n";
                x += e.get("Each track must have at least one starting point. If there are multiple starting points, the last placed one will be used.") + "\n\n",
                x += e.get("Checkpoints should be placed between the starting point and the finish line. When a checkpoint track part is selected there will be a tool in the bottom right to select the order of the checkpoint. This determines the order in which the checkpoints must be passed before driving to the finish line. Notice that it is possible to have multiple checkpoints with the same checkpoint order.") + "\n\n",
                x += e.get("The finish line is where the track ends but will only become active after all checkpoints have been passed. It is also possible to have multiple finish lines.");
                const y = document.createElement("p");
                y.textContent = x,
                f.appendChild(y);
                const A = document.createElement("div");
                A.className = "part-images",
                f.appendChild(A);
                const M = document.createElement("div");
                A.appendChild(M);
                const E = document.createElement("img");
                E.className = "loading",
                o.then((t => {
                    E.className = "",
                    E.src = t
                }
                )).catch((t => {
                    console.error(t)
                }
                )),
                M.appendChild(E);
                const C = document.createElement("span");
                C.textContent = e.get("Starting point"),
                M.appendChild(C);
                const W = document.createElement("div");
                A.appendChild(W);
                const L = document.createElement("img");
                L.className = "loading",
                a.then((t => {
                    L.className = "",
                    L.src = t
                }
                )).catch((t => {
                    console.error(t)
                }
                )),
                W.appendChild(L);
                const P = document.createElement("span");
                P.textContent = e.get("Checkpoint"),
                W.appendChild(P);
                const z = document.createElement("div");
                A.appendChild(z);
                const N = document.createElement("img");
                N.className = "loading",
                r.then((t => {
                    N.className = "",
                    N.src = t
                }
                )).catch((t => {
                    console.error(t)
                }
                )),
                z.appendChild(N);
                const S = document.createElement("span");
                S.textContent = e.get("Finish line"),
                z.appendChild(S);
                const T = document.createElement("h2");
                T.textContent = e.get("Exporting the track"),
                f.appendChild(T);
                const q = e.get("When the track is finished, a name for the track can be entered in top left after which the track can be exported using the export button. This will reveal a track code which can be sent to other users so they can import and play the track.") + "\n\n"
                  , D = document.createElement("p");
                D.textContent = q,
                f.appendChild(D);
                const O = document.createElement("div");
                O.className = "button-wrapper",
                d.appendChild(O);
                const I = document.createElement("button");
                I.className = "button",
                I.innerHTML = '<img class="button-icon" src="images/cancel.svg"> ',
                I.append(document.createTextNode(e.get("Close"))),
                I.addEventListener("click", ( () => {
                    t.playUIClick(),
                    h()
                }
                )),
                O.appendChild(I),
                window.addEventListener("keydown", set(this, help_onKeyDown, (t => {
                    "Escape" == t.code && (h(),
                    t.preventDefault())
                }
                ), "f"))
            }
            dispose() {
                get(this, help_uiRoot, "f").removeChild(get(this, help_element, "f")),
                window.removeEventListener("keydown", get(this, help_onKeyDown, "f"))
            }
        }
        ;
        var trackSettingsStyles = n(4512).A
          , trackSettingsStylesConfig = {};
        trackSettingsStylesConfig.styleTagTransform = u(),
        trackSettingsStylesConfig.setAttributes = d(),
        trackSettingsStylesConfig.insert = l().bind(null, "head"),
        trackSettingsStylesConfig.domAPI = r(),
        trackSettingsStylesConfig.insertStyleElement = f();
        o()(trackSettingsStyles, trackSettingsStylesConfig);
        trackSettingsStyles && trackSettingsStyles.locals && trackSettingsStyles.locals;
        var settings_uiRoot, settings_element, settings_saveButton, settings_onKeyDown, SunDirection = n(7680).A, TrackEnvironment = n(5169).A;
        settings_uiRoot = new WeakMap,
        settings_element = new WeakMap,
        settings_saveButton = new WeakMap,
        settings_onKeyDown = new WeakMap;
        const TrackSettingsUI = class {
            constructor(t, e, n, trackAuthorName, editorLastModified, o, a, updateTrackMetadata, updateMetadateAndSave) {
                settings_uiRoot.set(this, void 0),
                settings_element.set(this, void 0),
                settings_saveButton.set(this, null),
                settings_onKeyDown.set(this, void 0);
                const l = document.getElementById("ui");
                if (null == l)
                    throw new Error("UI element not found");
                set(this, settings_uiRoot, l, "f"),
                set(this, settings_element, document.createElement("div"), "f"),
                get(this, settings_element, "f").className = "editor-track-settings-ui",
                get(this, settings_uiRoot, "f").appendChild(get(this, settings_element, "f"));
                const c = document.createElement("div");
                c.className = "background",
                get(this, settings_element, "f").appendChild(c);
                const d = document.createElement("section");
                d.className = "container",
                get(this, settings_element, "f").appendChild(d);
                const g = document.createElement("h1");
                g.textContent = e.get("Track settings"),
                d.appendChild(g);
                const f = document.createElement("section");
                f.className = "content",
                d.appendChild(f);
                const p = document.createElement("div");
                p.className = "setting",
                f.appendChild(p);
                const u = document.createElement("label");
                u.className = "title",
                u.append(document.createTextNode(e.get("Track name"))),
                p.appendChild(u);
                const m = document.createElement("input");
                m.type = "text",
                m.maxLength = 64,
                m.spellcheck = !1,
                m.value = n ?? "",
                m.addEventListener("input", ( () => {
                    0 == m.value.trim().length ? (null != get(this, settings_saveButton, "f") && (get(this, settings_saveButton, "f").disabled = !0),
                    p.classList.add("error")) : (null != get(this, settings_saveButton, "f") && (get(this, settings_saveButton, "f").disabled = !1),
                    p.classList.remove("error"))
                }
                )),
                p.appendChild(m),
                null != n && 0 != n.length || (p.classList.add("error"),
                m.focus());

                const authorSettingDiv = document.createElement("div");
                authorSettingDiv.className = "setting",
                f.appendChild(authorSettingDiv);
                const authorSettingLabel = document.createElement("label");
                authorSettingLabel.className = "title",
                authorSettingLabel.append(document.createTextNode(e.get("Author"))),
                authorSettingDiv.appendChild(authorSettingLabel);
                const authorSettingInput = document.createElement("input");
                authorSettingInput.type = "text",
                authorSettingInput.maxLength = 64,
                authorSettingInput.spellcheck = !1,
                authorSettingInput.value = trackAuthorName ?? "",
                authorSettingInput.placeholder = e.get("Unknown"),
                authorSettingInput.addEventListener("input", ( () => {
                    const cleanAuthorInput = authorSettingInput.value.trim();
                    trackAuthorName = 0 == cleanAuthorInput.length ? null : cleanAuthorInput
                }
                )),
                authorSettingDiv.appendChild(authorSettingInput);

                const createdDateSettingDiv = document.createElement("div");
                createdDateSettingDiv.className = "setting",
                f.appendChild(createdDateSettingDiv);
                const createdDateSettingLabel = document.createElement("label");
                createdDateSettingLabel.className = "title",
                createdDateSettingLabel.append(document.createTextNode(e.get("Creation Date"))),
                createdDateSettingDiv.appendChild(createdDateSettingLabel);
                const createdDateSettingInput = document.createElement("input");
                createdDateSettingInput.type = "text",
                createdDateSettingInput.maxLength = 64,
                createdDateSettingInput.spellcheck = !1;
                editorLastModified = new Date(editorLastModified);
                const lastModifiedFormatted = editorLastModified.toLocaleDateString() + " " + editorLastModified.toLocaleTimeString(void 0, {
                    hour: "numeric",
                    minute: "2-digit"
                });
                createdDateSettingInput.value = lastModifiedFormatted ?? "",
                createdDateSettingInput.placeholder = "1/1/2000 12:00 AM",
                createdDateSettingInput.addEventListener("input", ( () => {
                    const cleancreatedDateInput = createdDateSettingInput.value.trim();
                    const newDateObj = new Date(cleancreatedDateInput);
                    if (isNaN(newDateObj.getTime())) {
                        return;
                    }
                    editorLastModified = newDateObj;
                }
                )),
                createdDateSettingInput.style.width = "420px",
                createdDateSettingDiv.appendChild(createdDateSettingInput);

                const createdDateSettingNowButton = document.createElement("button");
                createdDateSettingNowButton.className = "button now-button",
                // createdDateSettingNowButton.innerHTML = '<img class="button-icon" src="images/now.svg"> ',
                createdDateSettingNowButton.append(document.createTextNode(e.get("Now"))),
                createdDateSettingNowButton.addEventListener("click", ( () => {
                    const now = new Date();
                    editorLastModified = now;
                    const nowFormatted = now.toLocaleDateString() + " " + now.toLocaleTimeString(void 0, {
                        hour: "numeric",
                        minute: "2-digit"
                    });
                    createdDateSettingInput.value = nowFormatted;
                }
                )),
                createdDateSettingDiv.appendChild(createdDateSettingNowButton);

                const k = document.createElement("div");
                k.className = "setting",
                f.appendChild(k);
                const G = document.createElement("div");
                G.className = "title",
                G.append(document.createTextNode(e.get("Environment"))),
                k.appendChild(G);
                const x = document.createElement("button");
                x.className = "button environment-button",
                o.environment == TrackEnvironment.Summer && (x.classList.add("selected"),
                x.disabled = !0),
                x.innerHTML = '<img src="images/summer.svg"> ',
                x.append(document.createTextNode(e.get("Summer"))),
                x.addEventListener("click", ( () => {
                    t.playUIClick(),
                    a(TrackEnvironment.Summer),
                    x.classList.add("selected"),
                    y.classList.remove("selected"),
                    A.classList.remove("selected"),
                    x.disabled = !0,
                    y.disabled = !1,
                    A.disabled = !1
                }
                )),
                k.appendChild(x);
                const y = document.createElement("button");
                y.className = "button environment-button",
                o.environment == TrackEnvironment.Winter && (y.classList.add("selected"),
                y.disabled = !0),
                y.innerHTML = '<img src="images/winter.svg"> ',
                y.append(document.createTextNode(e.get("Winter"))),
                y.addEventListener("click", ( () => {
                    t.playUIClick(),
                    a(TrackEnvironment.Winter),
                    x.classList.remove("selected"),
                    y.classList.add("selected"),
                    A.classList.remove("selected"),
                    x.disabled = !1,
                    y.disabled = !0,
                    A.disabled = !1
                }
                )),
                k.appendChild(y);
                const A = document.createElement("button");
                A.className = "button environment-button",
                o.environment == TrackEnvironment.Desert && (A.classList.add("selected"),
                A.disabled = !0),
                A.innerHTML = '<img src="images/desert.svg"> ',
                A.append(document.createTextNode(e.get("Desert"))),
                A.addEventListener("click", ( () => {
                    t.playUIClick(),
                    a(TrackEnvironment.Desert),
                    x.classList.remove("selected"),
                    y.classList.remove("selected"),
                    A.classList.add("selected"),
                    x.disabled = !1,
                    y.disabled = !1,
                    A.disabled = !0
                }
                )),
                k.appendChild(A);
                const M = document.createElement("div");
                M.className = "setting",
                f.appendChild(M);
                const E = document.createElement("label");
                E.className = "title",
                E.append(document.createTextNode(e.get("Sun direction") + " (")),
                M.appendChild(E);
                const C = document.createTextNode(o.sunDirection.toDegrees().toString());
                E.appendChild(C),
                E.append(document.createTextNode("°)"));
                let W = null;
                const L = document.createElement("input");
                L.type = "range",
                L.min = "0",
                L.max = "360",
                L.step = "2",
                L.value = o.sunDirection.toDegrees().toString(),
                L.addEventListener("input", ( () => {
                    o.sunDirection = SunDirection.fromDegrees(parseInt(L.value, 10)),
                    C.textContent = L.value,
                    W ?? (W = setTimeout(( () => {
                        o.generateMeshes(),
                        W = null
                    }
                    ), 100))
                }
                )),
                M.appendChild(L);
                const P = document.createElement("div");
                P.className = "button-wrapper",
                d.appendChild(P);
                const z = document.createElement("button");
                z.className = "button",
                z.innerHTML = '<img class="button-icon" src="images/cancel.svg"> ',
                z.append(document.createTextNode(e.get("Close"))),
                z.addEventListener("click", ( () => {
                    t.playUIClick();
                    const e = m.value.trim();
                    0 == e.length ? updateTrackMetadata(null, trackAuthorName, editorLastModified) : updateTrackMetadata(e, trackAuthorName, editorLastModified)
                }
                )),
                P.appendChild(z),
                null != updateMetadateAndSave && (set(this, settings_saveButton, document.createElement("button"), "f"),
                get(this, settings_saveButton, "f").disabled = null == n || 0 == n.length,
                get(this, settings_saveButton, "f").className = "button",
                get(this, settings_saveButton, "f").innerHTML = '<img class="button-icon" src="images/save.svg"> ',
                get(this, settings_saveButton, "f").append(document.createTextNode(e.get("Save"))),
                get(this, settings_saveButton, "f").addEventListener("click", ( () => {
                    t.playUIClick();
                    const e = m.value.trim();
                    0 == e.length || updateMetadateAndSave(e, trackAuthorName, editorLastModified)
                }
                )),
                P.appendChild(get(this, settings_saveButton, "f"))),
                window.addEventListener("keydown", set(this, settings_onKeyDown, (t => {
                    if ("Escape" == t.code) {
                        const e = m.value.trim();
                        0 == e.length ? updateTrackMetadata(null, trackAuthorName, editorLastModified) : updateTrackMetadata(e, trackAuthorName, editorLastModified),
                        t.preventDefault()
                    }
                }
                ), "f"))
            }
            dispose() {
                get(this, settings_uiRoot, "f").removeChild(get(this, settings_element, "f")),
                window.removeEventListener("keydown", get(this, settings_onKeyDown, "f"))
            }
        }
        ;
        var Bt = n(9437);
        let thumbnailRenderer = null
          , thumbnailCamera = null
          , thumbnailScene = null
          , thumbnailPending = null;
        async function renderPartThumbnail(t) {
            for (; null != thumbnailPending; )
                await thumbnailPending;
            const e = function(t) {
                return new Promise((e => {
                    setTimeout(( () => {
                        if (null == thumbnailRenderer || null == thumbnailCamera || null == thumbnailScene) {
                            const t = document.createElement("canvas");
                            t.width = 128,
                            t.height = 128,
                            thumbnailRenderer = new Bt.WebGLRenderer({
                                canvas: t,
                                alpha: !0,
                                preserveDrawingBuffer: !0,
                                antialias: !0
                            }),
                            thumbnailRenderer.outputColorSpace = THREE.LinearSRGBColorSpace,
                            thumbnailScene = new THREE.Scene,
                            thumbnailCamera = new THREE.OrthographicCamera(-1,1,1,-1,.5,RenderManager.maxViewDistance),
                            thumbnailCamera.position.set(1e3, 1e3, 1e3),
                            thumbnailCamera.lookAt(0, 0, 0),
                            thumbnailScene.add(thumbnailCamera);
                            const e = new THREE.DirectionalLight(16777215,4.7);
                            e.position.set(8, 10, 10),
                            thumbnailScene.add(e)
                        }
                        t.geometry.computeBoundingSphere();
                        const n = t.geometry.boundingSphere?.clone();
                        if (null == n)
                            throw new Error("Bounding sphere is null");
                        thumbnailCamera.zoom = 1 / n.radius * .9,
                        thumbnailCamera.position.copy(n.center),
                        thumbnailCamera.position.addScalar(1e3),
                        thumbnailCamera.updateProjectionMatrix(),
                        thumbnailRenderer.clear(),
                        thumbnailScene.add(t),
                        thumbnailRenderer.render(thumbnailScene, thumbnailCamera),
                        thumbnailScene.remove(t),
                        e(thumbnailRenderer.domElement.toDataURL())
                    }
                    ), 25)
                }
                ))
            }(t);
            let n;
            thumbnailPending = e;
            try {
                n = await e
            } finally {
                thumbnailPending = null
            }
            return n
        }
        var Ft, editor_audioManager, editor_lastEditSoundTime, editor_localization, editor_renderer, editor_transitionManager, editor_track, editor_partRegistry, editor_trackStorage, editor_customTrackManager, editor_networkManager, editor_userProfileManager, editor_dialogManager, editor_inputManager, editor_settingsManager, editor_testCallback, editor_isActive, editor_containerElement, editor_topBar, editor_toastElement, editor_toastTimeout, editor_pasteButton, editor_undoButton, editor_redoButton, editor_partPanelContainer, editor_categoryBar, editor_heightSelectorUI, editor_checkpointOrderUI, editor_exportUI, editor_loadingScreen, editor_helpUI, editor_sideToolbar, editor_trackSettingsUI, editor_activeModal, editor_settingsButton, editor_onMouseMove, editor_onMouseDown, editor_onMouseUp, editor_onMouseOut, editor_onTouchStart, editor_onClick, editor_onKeyDown, editor_onKeyUp, editor_onWheel, editor_onBeforeUnload, editor_cameraRig, editor_orbitControls, editor_isHeightModifierHeld, editor_keyForward, editor_keyRight, editor_keyBackward, editor_keyLeft, editor_keyPitchUp, editor_keyPitchDown, editor_keyYawLeft, editor_keyYawRight, editor_isSaved, editor_raycaster, editor_gridPlane, editor_previewGroup, editor_ghostMaterial, editor_previewMeshes, editor_tileIndicatorMaterial, editor_tileIndicatorGeometry, editor_tileIndicatorMesh, editor_isDeleteKeyHeld, editor_isLeftMouseDown, editor_mouseNDC, editor_lastTouchTimestamp, editor_isTapPending, editor_cursorGridPos, editor_minYOffset, editor_currentRotation, editor_currentAxis, editor_isLargeGrid, editor_isDeleteMode, editor_lastPlacement, editor_lastDeletion, editor_trackName, editor_trackAuthor, editor_lastModified, editor_undoStack, editor_redoStack, editor_checkpointLabels3D, editor_partEntries, editor_selectedPartIndex, editor_selectedColor, editor_isCopyMode, editor_isCutMode, editor_selectionStart, editor_clipboard, editor_activePlacement, editor_selectionBoxMeshes, editor_lastOverlapCheckPos, editor_categoryEntries, editor_selectedCategory, editor_isTyping, updateSelectionBoxVisual, copyOrCutRegion, activatePaste, placeActiveParts, loadTrackMetadata, setTrackName, setTrackAuthor, setTrackCreationDate, confirmExit, testTrack, pickPartUnderCursor, undo, redo, showToast, initPartPalette, getEffectiveColor, setEnvironment, refreshAllThumbnails, rebuildPreviewMesh, selectCategory, selectPart, getCurrentHeight, setHeight, recalcMinYOffset, refreshTrackAfterEdit, playEditSound, getCursorGridPosition, findOverlappingParts, hasOverlappingParts, deletePartsAndRecord, updateKeyboardCamera, isKeyboardInputActive, TrackLoadError = n(6223).A, LoadingScreenUI = n(5302).A;
        editor_audioManager = new WeakMap,
        editor_lastEditSoundTime = new WeakMap,
        editor_localization = new WeakMap,
        editor_renderer = new WeakMap,
        editor_transitionManager = new WeakMap,
        editor_track = new WeakMap,
        editor_partRegistry = new WeakMap,
        editor_trackStorage = new WeakMap,
        editor_customTrackManager = new WeakMap,
        editor_networkManager = new WeakMap,
        editor_userProfileManager = new WeakMap,
        editor_dialogManager = new WeakMap,
        editor_inputManager = new WeakMap,
        editor_settingsManager = new WeakMap,
        editor_testCallback = new WeakMap,
        editor_isActive = new WeakMap,
        editor_containerElement = new WeakMap,
        editor_topBar = new WeakMap,
        editor_toastElement = new WeakMap,
        editor_toastTimeout = new WeakMap,
        editor_pasteButton = new WeakMap,
        editor_undoButton = new WeakMap,
        editor_redoButton = new WeakMap,
        editor_partPanelContainer = new WeakMap,
        editor_categoryBar = new WeakMap,
        editor_heightSelectorUI = new WeakMap,
        editor_checkpointOrderUI = new WeakMap,
        editor_exportUI = new WeakMap,
        editor_loadingScreen = new WeakMap,
        editor_helpUI = new WeakMap,
        editor_sideToolbar = new WeakMap,
        editor_trackSettingsUI = new WeakMap,
        editor_activeModal = new WeakMap,
        editor_settingsButton = new WeakMap,
        editor_onMouseMove = new WeakMap,
        editor_onMouseDown = new WeakMap,
        editor_onMouseUp = new WeakMap,
        editor_onMouseOut = new WeakMap,
        editor_onTouchStart = new WeakMap,
        editor_onClick = new WeakMap,
        editor_onKeyDown = new WeakMap,
        editor_onKeyUp = new WeakMap,
        editor_onWheel = new WeakMap,
        editor_onBeforeUnload = new WeakMap,
        editor_cameraRig = new WeakMap,
        editor_orbitControls = new WeakMap,
        editor_isHeightModifierHeld = new WeakMap,
        editor_keyForward = new WeakMap,
        editor_keyRight = new WeakMap,
        editor_keyBackward = new WeakMap,
        editor_keyLeft = new WeakMap,
        editor_keyPitchUp = new WeakMap,
        editor_keyPitchDown = new WeakMap,
        editor_keyYawLeft = new WeakMap,
        editor_keyYawRight = new WeakMap,
        editor_isSaved = new WeakMap,
        editor_raycaster = new WeakMap,
        editor_gridPlane = new WeakMap,
        editor_previewGroup = new WeakMap,
        editor_ghostMaterial = new WeakMap,
        editor_previewMeshes = new WeakMap,
        editor_tileIndicatorMaterial = new WeakMap,
        editor_tileIndicatorGeometry = new WeakMap,
        editor_tileIndicatorMesh = new WeakMap,
        editor_isDeleteKeyHeld = new WeakMap,
        editor_isLeftMouseDown = new WeakMap,
        editor_mouseNDC = new WeakMap,
        editor_lastTouchTimestamp = new WeakMap,
        editor_isTapPending = new WeakMap,
        editor_cursorGridPos = new WeakMap,
        editor_minYOffset = new WeakMap,
        editor_currentRotation = new WeakMap,
        editor_currentAxis = new WeakMap,
        editor_isLargeGrid = new WeakMap,
        editor_isDeleteMode = new WeakMap,
        editor_lastPlacement = new WeakMap,
        editor_lastDeletion = new WeakMap,
        editor_trackName = new WeakMap,
        editor_trackAuthor = new WeakMap,
        editor_lastModified = new WeakMap,
        editor_undoStack = new WeakMap,
        editor_redoStack = new WeakMap,
        editor_checkpointLabels3D = new WeakMap,
        editor_partEntries = new WeakMap,
        editor_selectedPartIndex = new WeakMap,
        editor_selectedColor = new WeakMap,
        editor_isCopyMode = new WeakMap,
        editor_isCutMode = new WeakMap,
        editor_selectionStart = new WeakMap,
        editor_clipboard = new WeakMap,
        editor_activePlacement = new WeakMap,
        editor_selectionBoxMeshes = new WeakMap,
        editor_lastOverlapCheckPos = new WeakMap,
        editor_categoryEntries = new WeakMap,
        editor_selectedCategory = new WeakMap,
        editor_isTyping = new WeakMap,
        Ft = new WeakSet,
        updateSelectionBoxVisual = function() {
            if (get(this, editor_isCopyMode, "f") || get(this, editor_isCutMode, "f")) {
                const t = get(this, Ft, "m", getCursorGridPosition).call(this);
                if (null != t) {
                    let e;
                    e = null != get(this, editor_selectionStart, "f") ? get(this, editor_selectionStart, "f") : {
                        x: t.x,
                        y: t.y,
                        z: t.z
                    };
                    let n = 0;
                    n = get(this, editor_isLargeGrid, "f") ? -2 : 0;
                    const s = Math.min(e.x + n, t.x + n)
                      , o = Math.min(e.y, t.y)
                      , a = Math.min(e.z + n, t.z + n)
                      , r = Math.max(e.x + n, t.x + n)
                      , h = Math.max(e.y, t.y)
                      , l = Math.max(e.z + n, t.z + n);
                    let c;
                    c = get(this, editor_isLargeGrid, "f") ? 4 : 1;
                    const d = (r - s + c) * Track.A.partSize
                      , g = (h - o + 1) * Track.A.partSize
                      , f = (l - a + c) * Track.A.partSize;
                    let p, u;
                    if (get(this, editor_isCopyMode, "f"))
                        p = 65280,
                        u = 21760;
                    else {
                        if (!get(this, editor_isCutMode, "f"))
                            throw new Error("Invalid copy/cut state");
                        p = 16776960,
                        u = 5592320
                    }
                    if (null == get(this, editor_selectionBoxMeshes, "f")) {
                        const t = (new THREE.BufferGeometry).setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,1), new THREE.Vector3(0,1,1), new THREE.Vector3(0,1,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,1,0), new THREE.Vector3(1,1,0), new THREE.Vector3(1,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,1), new THREE.Vector3(0,1,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(1,1,0)].map((t => t.addScalar(-.5))));
                        set(this, editor_selectionBoxMeshes, {
                            fill: new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({
                                color: p,
                                transparent: !0,
                                opacity: .25,
                                polygonOffset: !0,
                                polygonOffsetFactor: -.3,
                                depthWrite: !1
                            })),
                            outline: new THREE.Mesh(t,new THREE.MeshBasicMaterial({
                                color: u,
                                wireframe: !0,
                                polygonOffset: !0,
                                polygonOffsetFactor: -.3
                            }))
                        }, "f"),
                        get(this, editor_renderer, "f").scene.add(get(this, editor_selectionBoxMeshes, "f").fill),
                        get(this, editor_renderer, "f").scene.add(get(this, editor_selectionBoxMeshes, "f").outline)
                    } else
                        get(this, editor_selectionBoxMeshes, "f").fill.material.color.setHex(p),
                        get(this, editor_selectionBoxMeshes, "f").outline.material.color.setHex(u);
                    get(this, editor_selectionBoxMeshes, "f").fill.position.set((s + r + c) / 2 * Track.A.partSize, (o + h + 1) / 2 * Track.A.partSize, (a + l + c) / 2 * Track.A.partSize),
                    get(this, editor_selectionBoxMeshes, "f").fill.scale.set(d, g, f),
                    get(this, editor_selectionBoxMeshes, "f").fill.visible = !0,
                    get(this, editor_selectionBoxMeshes, "f").outline.position.copy(get(this, editor_selectionBoxMeshes, "f").fill.position),
                    get(this, editor_selectionBoxMeshes, "f").outline.scale.copy(get(this, editor_selectionBoxMeshes, "f").fill.scale),
                    get(this, editor_selectionBoxMeshes, "f").outline.visible = !0
                } else
                    null != get(this, editor_selectionBoxMeshes, "f") && (get(this, editor_selectionBoxMeshes, "f").fill.visible = !1,
                    get(this, editor_selectionBoxMeshes, "f").outline.visible = !1)
            } else
                null != get(this, editor_selectionBoxMeshes, "f") && (get(this, editor_renderer, "f").scene.remove(get(this, editor_selectionBoxMeshes, "f").fill),
                get(this, editor_selectionBoxMeshes, "f").fill.geometry.dispose(),
                get(this, editor_selectionBoxMeshes, "f").fill.material.dispose(),
                get(this, editor_renderer, "f").scene.remove(get(this, editor_selectionBoxMeshes, "f").outline),
                get(this, editor_selectionBoxMeshes, "f").outline.geometry.dispose(),
                get(this, editor_selectionBoxMeshes, "f").outline.material.dispose(),
                set(this, editor_selectionBoxMeshes, null, "f"))
        }
        ,
        copyOrCutRegion = function(t, e, n, s, o, a, r) {
            t > s && ([t,s] = [s, t]),
            e > o && ([e,o] = [o, e]),
            n > a && ([n,a] = [a, n]),
            get(this, editor_isLargeGrid, "f") && (t -= 2,
            n -= 2,
            s += 1,
            a += 1);
            const h = get(this, editor_track, "f").getPartsWithin(t, e, n, s, o, a);
            if (0 == h.length)
                return;
            if (r) {
                const r = get(this, editor_track, "f").deletePartsWithin(t, e, n, s, o, a);
                r.length > 0 && (get(this, editor_undoStack, "f").push({
                    removed: r,
                    added: []
                }),
                get(this, editor_redoStack, "f").length = 0,
                get(this, editor_undoButton, "f").disabled = 0 == get(this, editor_undoStack, "f").length,
                get(this, editor_redoButton, "f").disabled = 0 == get(this, editor_redoStack, "f").length),
                get(this, Ft, "m", playEditSound).call(this),
                get(this, Ft, "m", refreshTrackAfterEdit).call(this)
            }
            const l = h.reduce(( (t, e) => Math.min(t, e.x)), 1 / 0)
              , c = h.reduce(( (t, e) => Math.min(t, e.y)), 1 / 0)
              , d = h.reduce(( (t, e) => Math.min(t, e.z)), 1 / 0)
              , g = h.reduce(( (t, e) => Math.max(t, e.x)), -1 / 0)
              , f = h.reduce(( (t, e) => Math.max(t, e.y)), -1 / 0)
              , p = h.reduce(( (t, e) => Math.max(t, e.z)), -1 / 0)
              , u = 4 * Math.floor((l + g) / 2 / 4)
              , m = Math.floor((c + f) / 2)
              , v = 4 * Math.floor((d + p) / 2 / 4)
              , w = h.map((t => ({
                id: t.id,
                offset: {
                    x: t.x - u,
                    y: t.y - m,
                    z: t.z - v
                },
                rotation: t.rotation,
                rotationAxis: t.rotationAxis,
                color: t.color,
                checkpointOrder: t.checkpointOrder
            })))
              , b = [];
            for (const t of w) {
                get(this, editor_partRegistry, "f").getPart(t.id).configuration.tiles.rotated(t.rotation, t.rotationAxis).forEach(( (e, n, i) => {
                    b.push([e + t.offset.x, n + t.offset.y, i + t.offset.z])
                }
                ))
            }
            const k = new dt.A(b);
            set(this, editor_clipboard, {
                parts: w,
                tiles: k
            }, "f"),
            get(this, editor_pasteButton, "f").disabled = !1,
            get(this, Ft, "m", activatePaste).call(this)
        }
        ,
        activatePaste = function() {
            null != get(this, editor_clipboard, "f") && (get(this, Ft, "m", selectPart).call(this, null),
            set(this, editor_currentRotation, 0, "f"),
            get(this, editor_sideToolbar, "f").rotation = get(this, editor_currentRotation, "f"),
            set(this, editor_currentAxis, TrackPartRotationAxis.YPositive, "f"),
            get(this, editor_sideToolbar, "f").rotationAxis = get(this, editor_currentAxis, "f"),
            set(this, editor_activePlacement, get(this, editor_clipboard, "f"), "f"),
            get(this, Ft, "m", rebuildPreviewMesh).call(this),
            get(this, Ft, "m", recalcMinYOffset).call(this))
        }
        ,
        placeActiveParts = function() {
            if (null == get(this, editor_activePlacement, "f") || null == get(this, editor_cursorGridPos, "f"))
                return;
            const t = get(this, editor_cursorGridPos, "f")
              , e = []
              , n = [];
            if (!get(this, editor_isDeleteMode, "f")) {
                get(this, editor_activePlacement, "f").tiles.rotated(get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f")).forEach(( (n, s, o) => {
                    const a = t.x + n
                      , r = t.y + s
                      , h = t.z + o
                      , l = get(this, editor_track, "f").deletePartsAt(a, r, h);
                    for (const t of l)
                        e.push({
                            id: t.id,
                            x: t.x,
                            y: t.y,
                            z: t.z,
                            rotation: t.rotation,
                            rotationAxis: t.rotationAxis,
                            color: t.color,
                            checkpointOrder: t.checkpointOrder,
                            startOrder: t.startOrder
                        })
                }
                ))
            }
            for (const s of get(this, editor_activePlacement, "f").parts) {
                let o = null;
                null != get(this, editor_partRegistry, "f").getPart(s.id).configuration.startOffset && (o = get(this, editor_track, "f").getNextStartOrder());
                const {rotation: a, rotationAxis: r} = TrackPartTransform.combineTwoPartOrientations(s.rotation, s.rotationAxis, get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f"))
                  , h = TrackPartTransform.rotatePartOffset(s.offset.x, s.offset.y, s.offset.z, get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f"))
                  , l = t.x + h[0]
                  , c = t.y + h[1]
                  , d = t.z + h[2];
                if (get(this, editor_isDeleteMode, "f")) {
                    const t = get(this, editor_track, "f").deleteSpecificPart(s.id, l, c, d, a, r);
                    null != t && e.push({
                        id: t.id,
                        x: t.x,
                        y: t.y,
                        z: t.z,
                        rotation: t.rotation,
                        rotationAxis: t.rotationAxis,
                        color: t.color,
                        checkpointOrder: t.checkpointOrder,
                        startOrder: t.startOrder
                    })
                }
                get(this, editor_track, "f").setPart(l, c, d, s.id, a, r, s.color, s.checkpointOrder, o),
                n.push({
                    id: s.id,
                    x: l,
                    y: c,
                    z: d,
                    rotation: a,
                    rotationAxis: r,
                    color: s.color,
                    checkpointOrder: s.checkpointOrder,
                    startOrder: o
                })
            }
            get(this, Ft, "m", playEditSound).call(this),
            get(this, Ft, "m", refreshTrackAfterEdit).call(this),
            (e.length > 0 || n.length > 0) && (get(this, editor_undoStack, "f").push({
                removed: e,
                added: n
            }),
            get(this, editor_redoStack, "f").length = 0,
            get(this, editor_undoButton, "f").disabled = 0 == get(this, editor_undoStack, "f").length,
            get(this, editor_redoButton, "f").disabled = 0 == get(this, editor_redoStack, "f").length)
        }
        ,
        loadTrackMetadata = function(t) {
            get(this, Ft, "m", setTrackName).call(this, t.name),
            get(this, Ft, "m", setTrackAuthor).call(this, t.author),
            get(this, Ft, "m", setTrackCreationDate).call(this, t.lastModified);
        }
        ,
        setTrackName = function(t) {
            get(this, editor_trackName, "f") != t && (set(this, editor_trackName, t, "f"),
            // set(this, editor_lastModified, new Date, "f"),
            get(this, editor_settingsButton, "f").innerHTML = '<img class="button-icon" src="images/settings.svg"> ',
            get(this, editor_settingsButton, "f").append(document.createTextNode(get(this, editor_trackName, "f") ?? get(this, editor_localization, "f").get("Unnamed Track"))))
        }
        ,
        setTrackAuthor = function(t) {
            get(this, editor_trackAuthor, "f") != t && set(this, editor_trackAuthor, t, "f");
            // set(this, editor_lastModified, new Date, "f"))
        }
        ,
        setTrackCreationDate = function(t) {
            const newDate = new Date(t);
            if (isNaN(newDate.getTime())) {
                console.warn("Invalid creation date:", t);
                return;
            }
            if (get(this, editor_lastModified, "f").getTime() != newDate.getTime()) {
                set(this, editor_lastModified, newDate, "f");
            }
        }
        ,
        confirmExit = function(t) {
            const e = () => {
                get(this, editor_transitionManager, "f").trigger(( () => {
                    set(this, editor_isSaved, !0, "f"),
                    get(this, Ft, "m", setTrackName).call(this, null),
                    t(),
                    get(this, editor_containerElement, "f").inert = !1
                }
                ))
            }
            ;
            get(this, editor_isSaved, "f") ? e() : (get(this, editor_containerElement, "f").inert = !0,
            get(this, editor_dialogManager, "f").showConfirm(get(this, editor_localization, "f").get("Are you sure you want to exit the editor?") + "\n\n" + get(this, editor_localization, "f").get("All unsaved data will be lost!"), get(this, editor_localization, "f").get("Cancel"), get(this, editor_localization, "f").get("Confirm"), ( () => {
                get(this, editor_containerElement, "f").inert = !1
            }
            ), ( () => {
                e()
            }
            )))
        }
        ,
        testTrack = function() {
            if (null != get(this, editor_track, "f").getStartTransform()) {
                if (null == get(this, editor_testCallback, "f"))
                    throw new Error("Test callback is null");
                get(this, editor_testCallback, "f").call(this)
            } else
                get(this, Ft, "m", showToast).call(this, get(this, editor_localization, "f").get("Starting point is missing!"), !1)
        }
        ,
        pickPartUnderCursor = function() {
            if (null != get(this, editor_cursorGridPos, "f") && null != get(this, editor_selectedPartIndex, "f")) {
                const t = get(this, editor_partEntries, "f")[get(this, editor_selectedPartIndex, "f")]
                  , e = get(this, Ft, "m", findOverlappingParts).call(this, get(this, editor_cursorGridPos, "f"), t.tiles);
                if (e.length > 0) {
                    let t;
                    t = get(this, editor_isLargeGrid, "f") ? new THREE.Vector3(get(this, editor_cursorGridPos, "f").x + 2,get(this, editor_cursorGridPos, "f").y,get(this, editor_cursorGridPos, "f").z + 2) : new THREE.Vector3(get(this, editor_cursorGridPos, "f").x,get(this, editor_cursorGridPos, "f").y,Math.floor(get(this, editor_cursorGridPos, "f").z));
                    let n = e[0]
                      , s = t.distanceToSquared(new THREE.Vector3(n.x,n.y,n.z));
                    for (let i = 1; i < e.length; i++) {
                        const o = e[i]
                          , a = t.distanceToSquared(new THREE.Vector3(o.x,o.y,o.z));
                        a < s && (n = o,
                        s = a)
                    }
                    const o = n.parts[n.parts.length - 1]
                      , a = get(this, editor_partEntries, "f").findIndex((t => t.id == o.id));
                    if (a >= 0) {
                        const t = get(this, editor_partEntries, "f")[a];
                        set(this, editor_currentRotation, o.rotation, "f"),
                        get(this, editor_sideToolbar, "f").rotation = get(this, editor_currentRotation, "f"),
                        set(this, editor_currentAxis, o.rotationAxis, "f"),
                        get(this, editor_sideToolbar, "f").rotationAxis = get(this, editor_currentAxis, "f"),
                        set(this, editor_selectedColor, o.color, "f"),
                        get(this, Ft, "m", selectCategory).call(this, t.category),
                        get(this, Ft, "m", selectPart).call(this, a)
                    }
                }
            }
        }
        ,
        undo = function() {
            const t = get(this, editor_undoStack, "f").pop();
            if (null != t) {
                for (const e of t.added)
                    get(this, editor_track, "f").deleteSpecificPart(e.id, e.x, e.y, e.z, e.rotation, e.rotationAxis);
                for (const e of t.removed)
                    get(this, editor_track, "f").setPart(e.x, e.y, e.z, e.id, e.rotation, e.rotationAxis, e.color, e.checkpointOrder, e.startOrder);
                get(this, Ft, "m", refreshTrackAfterEdit).call(this),
                get(this, editor_redoStack, "f").push(t)
            }
            get(this, editor_undoButton, "f").disabled = 0 == get(this, editor_undoStack, "f").length,
            get(this, editor_redoButton, "f").disabled = 0 == get(this, editor_redoStack, "f").length
        }
        ,
        redo = function() {
            const t = get(this, editor_redoStack, "f").pop();
            if (null != t) {
                for (const e of t.added)
                    get(this, editor_track, "f").setPart(e.x, e.y, e.z, e.id, e.rotation, e.rotationAxis, e.color, e.checkpointOrder, e.startOrder);
                for (const e of t.removed)
                    get(this, editor_track, "f").deleteSpecificPart(e.id, e.x, e.y, e.z, e.rotation, e.rotationAxis);
                get(this, Ft, "m", refreshTrackAfterEdit).call(this),
                get(this, editor_undoStack, "f").push(t)
            }
            get(this, editor_undoButton, "f").disabled = 0 == get(this, editor_undoStack, "f").length,
            get(this, editor_redoButton, "f").disabled = 0 == get(this, editor_redoStack, "f").length
        }
        ,
        showToast = function(t, e) {
            null != get(this, editor_toastTimeout, "f") && (clearTimeout(get(this, editor_toastTimeout, "f")),
            set(this, editor_toastTimeout, null, "f")),
            e ? get(this, editor_toastElement, "f").classList.add("green") : get(this, editor_toastElement, "f").classList.remove("green"),
            get(this, editor_toastElement, "f").classList.remove("show"),
            get(this, editor_toastElement, "f").classList.remove("hide"),
            set(this, editor_toastTimeout, window.setTimeout(( () => {
                get(this, editor_toastElement, "f").textContent = t,
                get(this, editor_toastElement, "f").classList.add("show"),
                set(this, editor_toastTimeout, window.setTimeout(( () => {
                    get(this, editor_toastElement, "f").classList.remove("show"),
                    get(this, editor_toastElement, "f").classList.add("hide")
                }
                ), 3e3), "f")
            }
            ), 0), "f")
        }
        ,
        initPartPalette = function() {
            const t = get(this, editor_partRegistry, "f").getAllParts();
            for (let e = 0; e < t.length; e++) {
                const n = t[e];
                let s = get(this, editor_categoryEntries, "f").find((t => t.category == n.configuration.category))?.partPanel;
                if (null == s) {
                    s = document.createElement("div"),
                    s.className = "part-panel hidden",
                    get(this, editor_partPanelContainer, "f").prepend(s);
                    const t = get(this, editor_partRegistry, "f").getCategoryMesh(n.configuration.category, get(this, editor_track, "f").environment)
                      , e = document.createElement("button");
                    e.addEventListener("click", ( () => {
                        get(this, Ft, "m", selectCategory).call(this, n.configuration.category),
                        get(this, editor_audioManager, "f").playUIClick()
                    }
                    )),
                    get(this, editor_categoryBar, "f").appendChild(e);
                    const o = document.createElement("img");
                    o.className = "loading",
                    renderPartThumbnail(t).then((t => {
                        o.src = t,
                        o.className = ""
                    }
                    )),
                    e.appendChild(o),
                    get(this, editor_categoryEntries, "f").push({
                        category: n.configuration.category,
                        button: e,
                        image: o,
                        partPanel: s,
                        selectedIndex: null
                    })
                }
                const o = document.createElement("button");
                o.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, Ft, "m", selectPart).call(this, 1 + e)
                }
                )),
                s.appendChild(o);
                const a = document.createElement("img");
                a.className = "loading",
                o.appendChild(a);
                const r = [];
                let h;
                if (n.colors.size <= 1)
                    h = null;
                else {
                    h = document.createElement("div"),
                    h.className = "color-panel hidden",
                    get(this, editor_partPanelContainer, "f").prepend(h);
                    const t = [TrackPartColorId.Default].concat(Array.from(n.colors.keys()));
                    for (const e of t) {
                        const t = document.createElement("button");
                        t.addEventListener("click", ( () => {
                            get(this, editor_audioManager, "f").playUIClick(),
                            set(this, editor_selectedColor, e, "f"),
                            t.classList.add("selected");
                            const n = t.parentElement;
                            if (null == n)
                                throw new Error("Color panel not found");
                            for (const e of n.children)
                                e != t && e.classList.remove("selected")
                        }
                        )),
                        e == TrackPartColorId.Default && t.classList.add("selected"),
                        h.appendChild(t);
                        const n = document.createElement("img");
                        n.className = "loading",
                        t.appendChild(n),
                        r.push([e, t, n])
                    }
                }
                const l = {
                    id: n.configuration.id,
                    trackPartData: n,
                    button: o,
                    image: a,
                    colorPanel: h,
                    colorButtons: r,
                    tiles: n.configuration.tiles,
                    isCheckpoint: null != n.configuration.detector && n.configuration.detector.type == TrackPartDetectorType.Checkpoint,
                    isStart: null != n.configuration.startOffset,
                    category: n.configuration.category
                };
                get(this, editor_partEntries, "f").push(l)
            }
        }
        ,
        getEffectiveColor = function() {
            if (null == get(this, editor_selectedPartIndex, "f"))
                return TrackPartColorId.Default;
            return get(this, editor_partEntries, "f")[get(this, editor_selectedPartIndex, "f")].colorButtons.some(( ([t]) => t == get(this, editor_selectedColor, "f"))) ? get(this, editor_selectedColor, "f") : TrackPartColorId.Default
        }
        ,
        setEnvironment = function(t) {
            get(this, editor_track, "f").environment != t && (get(this, editor_track, "f").environment = t,
            get(this, Ft, "m", refreshAllThumbnails).call(this),
            get(this, Ft, "m", refreshTrackAfterEdit).call(this))
        }
        ,
        refreshAllThumbnails = function() {
            for (const t of get(this, editor_categoryEntries, "f")) {
                const e = get(this, editor_partRegistry, "f").getCategoryMesh(t.category, get(this, editor_track, "f").environment);
                t.image.removeAttribute("src"),
                t.image.className = "loading",
                renderPartThumbnail(e).then((e => {
                    t.image.src = e,
                    t.image.className = ""
                }
                ))
            }
            let t;
            switch (get(this, editor_track, "f").environment) {
            case TrackEnvironment.Summer:
                t = TrackPartColorId.Summer;
                break;
            case TrackEnvironment.Winter:
                t = TrackPartColorId.Winter;
                break;
            case TrackEnvironment.Desert:
                t = TrackPartColorId.Desert
            }
            for (const e of get(this, editor_partEntries, "f"))
                if (null != e.id)
                    if (e.category == get(this, editor_selectedCategory, "f")) {
                        const n = get(this, editor_partRegistry, "f").getPart(e.id).colors.get(t);
                        if (null == n)
                            throw new Error("Mesh is not loaded");
                        e.image.removeAttribute("src"),
                        e.image.className = "loading",
                        renderPartThumbnail(n).then((t => {
                            e.image.src = t,
                            e.image.className = ""
                        }
                        ))
                    } else
                        e.image.removeAttribute("src"),
                        e.image.className = "loading"
        }
        ,
        rebuildPreviewMesh = function() {
            for (const t of get(this, editor_previewMeshes, "f"))
                if (get(this, editor_previewGroup, "f").remove(t),
                t.geometry.dispose(),
                Array.isArray(t.material))
                    for (const e of t.material)
                        e.dispose();
                else
                    t.material.dispose();
            if (null != get(this, editor_tileIndicatorMesh, "f")) {
                if (get(this, editor_previewGroup, "f").remove(get(this, editor_tileIndicatorMesh, "f")),
                get(this, editor_tileIndicatorMesh, "f").geometry.dispose(),
                Array.isArray(get(this, editor_tileIndicatorMesh, "f").material))
                    for (const t of get(this, editor_tileIndicatorMesh, "f").material)
                        t.dispose();
                else
                    get(this, editor_tileIndicatorMesh, "f").material.dispose();
                get(this, editor_tileIndicatorMesh, "f").dispose(),
                set(this, editor_tileIndicatorMesh, null, "f")
            }
            if (null != get(this, editor_activePlacement, "f")) {
                const t = get(this, editor_activePlacement, "f").parts.length;
                let e = 0
                  , n = 0;
                const s = new Set;
                for (const t of get(this, editor_activePlacement, "f").parts) {
                    const o = get(this, editor_partRegistry, "f").getPart(t.id).colors.get(TrackPartColorId.Summer);
                    if (null == o)
                        throw new Error("Track part mesh has not loaded yet");
                    s.has(o.geometry) || (s.add(o.geometry),
                    e += o.geometry.attributes.position.count,
                    null != o.geometry.index && (n += o.geometry.index.count))
                }
                const o = new THREE.BatchedMesh(t,e,n,get(this, editor_ghostMaterial, "f"))
                  , a = new Map;
                for (const t of get(this, editor_activePlacement, "f").parts) {
                    const e = get(this, editor_partRegistry, "f").getPart(t.id).colors.get(TrackPartColorId.Summer);
                    if (null == e)
                        throw new Error("Track part mesh has not loaded yet");
                    let n = a.get(e.geometry);
                    null == n && (n = o.addGeometry(e.geometry),
                    a.set(e.geometry, n));
                    const s = o.addInstance(n)
                      , r = (new THREE.Matrix4).makeRotationFromQuaternion(TrackPartTransform.rotationAndAxisToQuaternion(t.rotation, t.rotationAxis)).setPosition(t.offset.x * Track.A.partSize, t.offset.y * Track.A.partSize, t.offset.z * Track.A.partSize);
                    o.setMatrixAt(s, r)
                }
                get(this, editor_previewGroup, "f").add(o),
                get(this, editor_previewMeshes, "f").push(o);
                const r = new THREE.InstancedMesh(get(this, editor_tileIndicatorGeometry, "f"),get(this, editor_tileIndicatorMaterial, "f"),get(this, editor_activePlacement, "f").tiles.length);
                get(this, editor_activePlacement, "f").tiles.forEach(( (t, e, n, i) => {
                    const s = (new THREE.Matrix4).makeTranslation(t * Track.A.partSize, e * Track.A.partSize, n * Track.A.partSize);
                    r.setMatrixAt(i, s)
                }
                )),
                get(this, editor_previewGroup, "f").add(r),
                set(this, editor_tileIndicatorMesh, r, "f")
            } else if (null != get(this, editor_selectedPartIndex, "f")) {
                const t = get(this, editor_partEntries, "f")[get(this, editor_selectedPartIndex, "f")];
                let e;
                if (null == t.trackPartData) {
                    const t = new THREE.BoxGeometry(4 * Track.A.partSize,Track.A.partSize,4 * Track.A.partSize);
                    t.translate(0, Track.A.partSize / 2, 0),
                    e = new THREE.Mesh(t,get(this, editor_ghostMaterial, "f"))
                } else if (e = t.trackPartData.colors.get(TrackPartColorId.Summer)?.clone(),
                null == e)
                    throw new Error("Track part mesh has not loaded yet");
                e.material = get(this, editor_ghostMaterial, "f"),
                get(this, editor_previewGroup, "f").add(e),
                get(this, editor_previewMeshes, "f").push(e);
                const n = new THREE.InstancedMesh(get(this, editor_tileIndicatorGeometry, "f"),get(this, editor_tileIndicatorMaterial, "f"),t.tiles.length);
                t.tiles.forEach(( (t, e, i, s) => {
                    const o = (new THREE.Matrix4).makeTranslation(t * Track.A.partSize, e * Track.A.partSize, i * Track.A.partSize);
                    n.setMatrixAt(s, o)
                }
                )),
                get(this, editor_previewGroup, "f").add(n),
                set(this, editor_tileIndicatorMesh, n, "f")
            }
        }
        ,
        selectCategory = function(t) {
            if (get(this, editor_selectedCategory, "f") != t || null == t) {
                set(this, editor_selectedCategory, t, "f");
                for (const e of get(this, editor_categoryEntries, "f"))
                    e.category == t ? (e.button.classList.add("selected"),
                    e.partPanel.classList.remove("hidden")) : (e.button.classList.remove("selected"),
                    e.partPanel.classList.add("hidden"));
                if (null == t)
                    get(this, Ft, "m", selectPart).call(this, 0);
                else {
                    let e;
                    switch (get(this, editor_track, "f").environment) {
                    case TrackEnvironment.Summer:
                        e = TrackPartColorId.Summer;
                        break;
                    case TrackEnvironment.Winter:
                        e = TrackPartColorId.Winter;
                        break;
                    case TrackEnvironment.Desert:
                        e = TrackPartColorId.Desert
                    }
                    for (const n of get(this, editor_partEntries, "f"))
                        if (n.category == t && null != n.id && !n.image.hasAttribute("src")) {
                            const t = get(this, editor_partRegistry, "f").getPart(n.id).colors.get(e);
                            if (null == t)
                                throw new Error("Mesh is not loaded");
                            n.image.className = "loading",
                            renderPartThumbnail(t).then((t => {
                                n.image.src = t,
                                n.image.className = ""
                            }
                            ))
                        }
                    let n = get(this, editor_categoryEntries, "f").find((e => e.category == t))?.selectedIndex;
                    if (null == n && (n = get(this, editor_partEntries, "f").findIndex((e => e.category == t)),
                    n < 0))
                        throw new Error("Empty category");
                    get(this, Ft, "m", selectPart).call(this, n)
                }
            }
        }
        ,
        selectPart = function(t) {
            null != t && (set(this, editor_isCopyMode, !1, "f"),
            set(this, editor_isCutMode, !1, "f"),
            set(this, editor_selectionStart, null, "f"),
            set(this, editor_activePlacement, null, "f"));
            for (let e = 0; e < get(this, editor_partEntries, "f").length; e++) {
                const {button: n, colorPanel: s} = get(this, editor_partEntries, "f")[e];
                e == t ? (n.className = "selected",
                s?.classList.remove("hidden")) : (n.className = "",
                s?.classList.add("hidden"))
            }
            set(this, editor_selectedPartIndex, t, "f");
            const e = get(this, editor_categoryEntries, "f").find((t => t.category == get(this, editor_selectedCategory, "f")));
            if (null != e && (e.selectedIndex = t),
            null != t) {
                if (t < 0 && t >= get(this, editor_partEntries, "f").length)
                    throw new Error("Part index out of bounds");
                const e = get(this, editor_partEntries, "f")[t];
                e.isCheckpoint ? get(this, editor_checkpointOrderUI, "f").show() : get(this, editor_checkpointOrderUI, "f").hide();
                const n = get(this, Ft, "m", getEffectiveColor).call(this);
                if (null != e.id)
                    for (const [t,s,o] of e.colorButtons)
                        if (t == n ? s.classList.add("selected") : s.classList.remove("selected"),
                        !o.hasAttribute("src"))
                            if (t == TrackPartColorId.Default)
                                o.src = "images/empty.svg",
                                o.className = "";
                            else {
                                const n = get(this, editor_partRegistry, "f").getPart(e.id).colors.get(t);
                                if (null == n)
                                    throw new Error("Mesh is not loaded");
                                o.className = "loading",
                                renderPartThumbnail(n).then((t => {
                                    o.src = t,
                                    o.className = ""
                                }
                                ))
                            }
            } else
                get(this, editor_checkpointOrderUI, "f").hide();
            get(this, Ft, "m", rebuildPreviewMesh).call(this),
            get(this, Ft, "m", recalcMinYOffset).call(this)
        }
        ,
        getCurrentHeight = function() {
            return Math.floor(get(this, editor_gridPlane, "f").position.y / 5)
        }
        ,
        setHeight = function(t) {
            const e = get(this, Ft, "a", getCurrentHeight);
            get(this, editor_gridPlane, "f").position.y = 5 * t,
            get(this, editor_cameraRig, "f").position.y += 5 * (t - e),
            get(this, editor_orbitControls, "f").target.y = 5 * t,
            get(this, editor_heightSelectorUI, "f").refresh(t),
            get(this, editor_gridPlane, "f").updateWorldMatrix(!0, !0),
            get(this, editor_orbitControls, "f").update()
        }
        ,
        recalcMinYOffset = function() {
            if (null != get(this, editor_activePlacement, "f"))
                set(this, editor_minYOffset, 0, "f"),
                get(this, editor_activePlacement, "f").tiles.rotated(get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f")).forEach(( (t, e) => {
                    set(this, editor_minYOffset, Math.max(get(this, editor_minYOffset, "f"), -e), "f")
                }
                ));
            else if (null != get(this, editor_selectedPartIndex, "f") && get(this, editor_selectedPartIndex, "f") >= 0 && get(this, editor_selectedPartIndex, "f") < get(this, editor_partEntries, "f").length) {
                const t = get(this, editor_partEntries, "f")[get(this, editor_selectedPartIndex, "f")];
                set(this, editor_minYOffset, 0, "f"),
                t.tiles.rotated(get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f")).forEach(( (t, e) => {
                    set(this, editor_minYOffset, Math.max(get(this, editor_minYOffset, "f"), -e), "f")
                }
                ))
            } else
                set(this, editor_minYOffset, 0, "f")
        }
        ,
        refreshTrackAfterEdit = function() {
            get(this, editor_track, "f").generateMeshes(),
            get(this, editor_checkpointLabels3D, "f")?.refresh(get(this, editor_track, "f")),
            get(this, editor_checkpointOrderUI, "f").setFromExistingCheckpoints(get(this, editor_track, "f")),
            set(this, editor_lastOverlapCheckPos, null, "f"),
            set(this, editor_lastModified, new Date, "f"),
            set(this, editor_isSaved, !1, "f")
            this.editorMinimap.initTrackPreview(get(this, editor_track, "f"));
        }
        ,
        playEditSound = function() {
            const t = performance.now();
            if (t - get(this, editor_lastEditSoundTime, "f") > 35) {
                const e = get(this, editor_audioManager, "f").getBuffer("editor_edit");
                if (null != e && null != get(this, editor_audioManager, "f").context && null != get(this, editor_audioManager, "f").destinationSfx) {
                    const t = get(this, editor_audioManager, "f").context.createBufferSource();
                    t.buffer = e,
                    t.playbackRate.value = .7;
                    const n = get(this, editor_audioManager, "f").context.createGain();
                    n.gain.value = .05,
                    t.connect(n),
                    n.connect(get(this, editor_audioManager, "f").destinationSfx),
                    t.start(0)
                }
                set(this, editor_lastEditSoundTime, t, "f")
            }
        }
        ,
        getCursorGridPosition = function() {
            let t;
            if (get(this, editor_inputManager, "f").touchEnabled)
                t = new THREE.Vector3(get(this, editor_orbitControls, "f").target.x / Track.A.partSize,get(this, editor_orbitControls, "f").target.y / Track.A.partSize,get(this, editor_orbitControls, "f").target.z / Track.A.partSize);
            else {
                let e;
                if (null != get(this, editor_mouseNDC, "f") ? (get(this, editor_raycaster, "f").setFromCamera(get(this, editor_mouseNDC, "f"), get(this, editor_renderer, "f").camera),
                e = get(this, editor_raycaster, "f").intersectObjects([get(this, editor_gridPlane, "f")])) : e = [],
                e.length > 0) {
                    const n = e[0]
                      , s = 500 + 2 * get(this, editor_orbitControls, "f").getDistance();
                    t = n.point.distanceToSquared(get(this, editor_orbitControls, "f").target) <= s ** 2 ? new THREE.Vector3(Math.round(n.point.x / Track.A.partSize),Math.floor(get(this, editor_gridPlane, "f").position.y / Track.A.partSize),Math.round(n.point.z / Track.A.partSize)) : null
                } else
                    t = null
            }
            if (null != t) {
                let e, n;
                e = get(this, editor_isLargeGrid, "f") ? 4 : 1,
                n = get(this, editor_isCutMode, "f") || get(this, editor_isCopyMode, "f") || get(this, editor_currentAxis, "f") != TrackPartRotationAxis.XPositive && get(this, editor_currentAxis, "f") != TrackPartRotationAxis.XNegative ? Math.round(t.x / e) * e : Math.round(t.x);
                const s = Math.round(t.y) + get(this, editor_minYOffset, "f");
                let o;
                return o = get(this, editor_isCutMode, "f") || get(this, editor_isCopyMode, "f") || get(this, editor_currentAxis, "f") != TrackPartRotationAxis.ZPositive && get(this, editor_currentAxis, "f") != TrackPartRotationAxis.ZNegative ? Math.round(t.z / e) * e : Math.round(t.z),
                new THREE.Vector3(n,s,o)
            }
            return null
        }
        ,
        findOverlappingParts = function(t, e) {
            const n = [];
            return e.rotated(get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f")).forEach(( (e, s, o) => {
                const a = t.x + e
                  , r = t.y + s
                  , h = t.z + o
                  , l = get(this, editor_track, "f").getPartsAt(a, r, h);
                l.length > 0 && n.push({
                    x: a,
                    y: r,
                    z: h,
                    parts: l
                })
            }
            )),
            n
        }
        ,
        hasOverlappingParts = function(t, e) {
            return e.rotated(get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f")).some(( (e, n, s) => {
                const o = t.x + e
                  , a = t.y + n
                  , r = t.z + s;
                return get(this, editor_track, "f").getPartsAt(o, a, r).length > 0
            }
            ))
        }
        ,
        deletePartsAndRecord = function(t, e) {
            let n = !1;
            for (const s of t)
                null != get(this, editor_track, "f").deleteSpecificPart(s.id, s.x, s.y, s.z, s.rotation, s.rotationAxis) && (n = !0,
                e.push({
                    id: s.id,
                    x: s.x,
                    y: s.y,
                    z: s.z,
                    rotation: s.rotation,
                    rotationAxis: s.rotationAxis,
                    color: s.color,
                    checkpointOrder: s.checkpointOrder,
                    startOrder: s.startOrder
                }));
            n && (get(this, Ft, "m", playEditSound).call(this),
            get(this, Ft, "m", refreshTrackAfterEdit).call(this))
        }
        ,
        updateKeyboardCamera = function(t) {
            const e = 4 * get(this, editor_orbitControls, "f").getDistance();
            if (get(this, editor_isActive, "f") && get(this, Ft, "m", isKeyboardInputActive).call(this)) {
                const n = new THREE.Vector3;
                if (get(this, editor_keyForward, "f") && (n.z = -1),
                get(this, editor_keyRight, "f") && (n.x = 1),
                get(this, editor_keyBackward, "f") && (n.z = 1),
                get(this, editor_keyLeft, "f") && (n.x = -1),
                0 != n.x || 0 != n.z) {
                    const s = n.applyQuaternion(get(this, editor_cameraRig, "f").quaternion)
                      , o = new THREE.Vector2(s.x,s.z).normalize()
                      , a = new THREE.Vector3(o.x,0,o.y).multiplyScalar(e * t);
                    get(this, editor_cameraRig, "f").position.add(a),
                    get(this, editor_orbitControls, "f").target.add(a)
                }
                let s = 0;
                get(this, editor_keyPitchUp, "f") && (s += 1.5 * Math.PI * t),
                get(this, editor_keyPitchDown, "f") && (s -= 1.5 * Math.PI * t);
                let o = 0;
                if (get(this, editor_keyYawLeft, "f") && (o += 1.5 * Math.PI * t),
                get(this, editor_keyYawRight, "f") && (o -= 1.5 * Math.PI * t),
                0 != s || 0 != o) {
                    const t = new THREE.Vector2(get(this, editor_cameraRig, "f").position.x,get(this, editor_cameraRig, "f").position.z).distanceTo(new THREE.Vector2(get(this, editor_orbitControls, "f").target.x,get(this, editor_orbitControls, "f").target.z))
                      , e = get(this, editor_cameraRig, "f").position.y - get(this, editor_orbitControls, "f").target.y
                      , n = Math.sqrt(t * t + e * e)
                      , a = Math.atan2(get(this, editor_cameraRig, "f").position.z - get(this, editor_orbitControls, "f").target.z, get(this, editor_cameraRig, "f").position.x - get(this, editor_orbitControls, "f").target.x) + o;
                    let r = Math.asin(e / n) + s;
                    r = Math.max(-Math.PI / 2 + .001, Math.min(Math.PI / 2 - .001, r)),
                    get(this, editor_cameraRig, "f").position.x = get(this, editor_orbitControls, "f").target.x + Math.cos(r) * Math.cos(a) * n,
                    get(this, editor_cameraRig, "f").position.y = get(this, editor_orbitControls, "f").target.y + Math.sin(r) * n,
                    get(this, editor_cameraRig, "f").position.z = get(this, editor_orbitControls, "f").target.z + Math.cos(r) * Math.sin(a) * n,
                    get(this, editor_orbitControls, "f").update()
                }
            }
        }
        ,
        isKeyboardInputActive = function() {
            return !!get(this, editor_isActive, "f") && (!get(this, editor_isTyping, "f") && (!get(this, editor_dialogManager, "f").isOpen && null == get(this, editor_helpUI, "f") && !get(this, editor_exportUI, "f").isOpen && null == get(this, editor_trackSettingsUI, "f") && null == get(this, editor_activeModal, "f")))
        }
        ;
        const TrackEditor = class {
            constructor(t, e, n, s, o, a, r, h, l, c, d, g, f, p) {
                Ft.add(this),
                editor_audioManager.set(this, void 0),
                editor_lastEditSoundTime.set(this, performance.now()),
                editor_localization.set(this, void 0),
                editor_renderer.set(this, void 0),
                editor_transitionManager.set(this, void 0),
                editor_track.set(this, void 0),
                editor_partRegistry.set(this, void 0),
                editor_trackStorage.set(this, void 0),
                editor_customTrackManager.set(this, void 0),
                editor_networkManager.set(this, void 0),
                editor_userProfileManager.set(this, void 0),
                editor_dialogManager.set(this, void 0),
                editor_inputManager.set(this, void 0),
                editor_settingsManager.set(this, void 0),
                editor_testCallback.set(this, null),
                editor_isActive.set(this, !1),
                editor_containerElement.set(this, void 0),
                editor_topBar.set(this, void 0),
                editor_toastElement.set(this, void 0),
                editor_toastTimeout.set(this, null),
                editor_pasteButton.set(this, void 0),
                editor_undoButton.set(this, void 0),
                editor_redoButton.set(this, void 0),
                editor_partPanelContainer.set(this, void 0),
                editor_categoryBar.set(this, void 0),
                editor_heightSelectorUI.set(this, void 0),
                editor_checkpointOrderUI.set(this, void 0),
                editor_exportUI.set(this, void 0),
                editor_loadingScreen.set(this, null),
                editor_helpUI.set(this, null),
                editor_sideToolbar.set(this, void 0),
                editor_trackSettingsUI.set(this, null),
                editor_activeModal.set(this, null),
                editor_settingsButton.set(this, void 0),
                editor_onMouseMove.set(this, void 0),
                editor_onMouseDown.set(this, void 0),
                editor_onMouseUp.set(this, void 0),
                editor_onMouseOut.set(this, void 0),
                editor_onTouchStart.set(this, void 0),
                editor_onClick.set(this, void 0),
                editor_onKeyDown.set(this, void 0),
                editor_onKeyUp.set(this, void 0),
                editor_onWheel.set(this, void 0),
                editor_onBeforeUnload.set(this, void 0),
                editor_cameraRig.set(this, void 0),
                editor_orbitControls.set(this, void 0),
                editor_isHeightModifierHeld.set(this, !1),
                editor_keyForward.set(this, !1),
                editor_keyRight.set(this, !1),
                editor_keyBackward.set(this, !1),
                editor_keyLeft.set(this, !1),
                editor_keyPitchUp.set(this, !1),
                editor_keyPitchDown.set(this, !1),
                editor_keyYawLeft.set(this, !1),
                editor_keyYawRight.set(this, !1),
                editor_isSaved.set(this, !0),
                editor_raycaster.set(this, void 0),
                editor_gridPlane.set(this, void 0),
                editor_previewGroup.set(this, void 0),
                editor_ghostMaterial.set(this, void 0),
                editor_previewMeshes.set(this, []),
                editor_tileIndicatorMaterial.set(this, void 0),
                editor_tileIndicatorGeometry.set(this, void 0),
                editor_tileIndicatorMesh.set(this, null),
                editor_isDeleteKeyHeld.set(this, !1),
                editor_isLeftMouseDown.set(this, !1),
                editor_mouseNDC.set(this, null),
                editor_lastTouchTimestamp.set(this, null),
                editor_isTapPending.set(this, !1),
                editor_cursorGridPos.set(this, null),
                editor_minYOffset.set(this, 0),
                editor_currentRotation.set(this, 0),
                editor_currentAxis.set(this, TrackPartRotationAxis.YPositive),
                editor_isLargeGrid.set(this, !0),
                editor_isDeleteMode.set(this, !1),
                editor_lastPlacement.set(this, null),
                editor_lastDeletion.set(this, null),
                editor_trackName.set(this, null),
                editor_trackAuthor.set(this, void 0),
                editor_lastModified.set(this, new Date),
                editor_undoStack.set(this, []),
                editor_redoStack.set(this, []),
                editor_checkpointLabels3D.set(this, null),
                editor_partEntries.set(this, []),
                editor_selectedPartIndex.set(this, null),
                editor_selectedColor.set(this, TrackPartColorId.Default),
                editor_isCopyMode.set(this, !1),
                editor_isCutMode.set(this, !1),
                editor_selectionStart.set(this, null),
                editor_clipboard.set(this, null),
                editor_activePlacement.set(this, null),
                editor_selectionBoxMeshes.set(this, null),
                editor_lastOverlapCheckPos.set(this, null),
                editor_categoryEntries.set(this, []),
                editor_selectedCategory.set(this, null),
                editor_isTyping.set(this, !1),
                this.carTrailGroup = null;

                this.editorMinimap = new Minimap(e, true);
                this.editorMinimap.setShowPlayerDots(false);

                set(this, editor_localization, t, "f"),
                set(this, editor_audioManager, e, "f"),
                set(this, editor_renderer, n, "f"),
                set(this, editor_transitionManager, s, "f"),
                set(this, editor_track, o, "f"),
                set(this, editor_partRegistry, a, "f"),
                set(this, editor_networkManager, r, "f"),
                set(this, editor_userProfileManager, h, "f"),
                set(this, editor_trackStorage, l, "f"),
                set(this, editor_customTrackManager, c, "f"),
                set(this, editor_dialogManager, d, "f"),
                set(this, editor_inputManager, g, "f"),
                set(this, editor_settingsManager, f, "f"),
                set(this, editor_cameraRig, new THREE.PerspectiveCamera(70,1,.5,RenderManager.maxViewDistance), "f"),
                get(this, editor_cameraRig, "f").position.set(40, 40, -40),
                n.scene.add(get(this, editor_cameraRig, "f")),
                set(this, editor_orbitControls, new EditorOrbitControls(get(this, editor_cameraRig, "f"),n.canvas), "f"),
                get(this, editor_orbitControls, "f").mouseButtons = {
                    MIDDLE: THREE.MOUSE.ROTATE,
                    RIGHT: THREE.MOUSE.PAN
                },
                get(this, editor_orbitControls, "f").minDistance = 4,
                get(this, editor_orbitControls, "f").maxDistance = 3e3,
                set(this, editor_raycaster, new THREE.Raycaster, "f"),
                set(this, editor_trackAuthor, h.getCurrentUserProfile().nickname, "f"),
                set(this, editor_ghostMaterial, new THREE.MeshLambertMaterial({
                    transparent: !0,
                    opacity: .3,
                    polygonOffset: !0,
                    polygonOffsetFactor: -.3,
                    depthWrite: !1
                }), "f"),
                set(this, editor_previewGroup, new THREE.Group, "f"),
                get(this, editor_previewGroup, "f").visible = !1,
                n.scene.add(get(this, editor_previewGroup, "f")),
                n.addMaterial(get(this, editor_ghostMaterial, "f")),
                set(this, editor_tileIndicatorGeometry, (new THREE.BufferGeometry).setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,1), new THREE.Vector3(0,1,1), new THREE.Vector3(0,1,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,1,0), new THREE.Vector3(1,1,0), new THREE.Vector3(1,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,1), new THREE.Vector3(0,1,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,0,1), new THREE.Vector3(1,1,1), new THREE.Vector3(1,0,0), new THREE.Vector3(1,0,0), new THREE.Vector3(1,1,0)]).scale(Track.A.partSize, Track.A.partSize, Track.A.partSize), "f"),
                set(this, editor_tileIndicatorMaterial, new THREE.MeshBasicMaterial({
                    wireframe: !0
                }), "f"),
                set(this, editor_gridPlane, new THREE.Mesh(new THREE.PlaneGeometry(1e6,1e6),new THREE.MeshBasicMaterial({
                    side: THREE.DoubleSide
                })), "f"),
                get(this, editor_gridPlane, "f").rotation.x = -Math.PI / 2,
                get(this, editor_gridPlane, "f").updateWorldMatrix(!0, !0),
                n.canvas.addEventListener("mousemove", set(this, editor_onMouseMove, (t => {
                    const e = t.clientX / window.innerWidth * 2 - 1
                      , n = -t.clientY / window.innerHeight * 2 + 1;
                    null == get(this, editor_mouseNDC, "f") ? set(this, editor_mouseNDC, new THREE.Vector2(e,n), "f") : get(this, editor_mouseNDC, "f").set(e, n)
                }
                ), "f")),
                n.canvas.addEventListener("mousedown", set(this, editor_onMouseDown, (t => {
                    0 == t.button && set(this, editor_isLeftMouseDown, !0, "f"),
                    1 == t.button && t.preventDefault()
                }
                ), "f")),
                window.addEventListener("mouseup", set(this, editor_onMouseUp, (t => {
                    0 == t.button && set(this, editor_isLeftMouseDown, !1, "f")
                }
                ), "f")),
                n.canvas.addEventListener("mouseout", set(this, editor_onMouseOut, ( () => {
                    set(this, editor_mouseNDC, null, "f")
                }
                ), "f")),
                n.canvas.addEventListener("touchstart", set(this, editor_onTouchStart, ( () => {
                    get(this, editor_inputManager, "f").touchEnabled && set(this, editor_lastTouchTimestamp, Date.now(), "f")
                }
                ), "f")),
                n.canvas.addEventListener("click", set(this, editor_onClick, ( () => {
                    if (get(this, editor_inputManager, "f").touchEnabled && null != get(this, editor_lastTouchTimestamp, "f") && Date.now() - get(this, editor_lastTouchTimestamp, "f") < 200 && (set(this, editor_lastTouchTimestamp, null, "f"),
                    set(this, editor_isTapPending, !0, "f")),
                    get(this, editor_isCopyMode, "f") || get(this, editor_isCutMode, "f")) {
                        const t = get(this, Ft, "m", getCursorGridPosition).call(this);
                        null != t && (null == get(this, editor_selectionStart, "f") ? set(this, editor_selectionStart, {
                            x: t.x,
                            y: t.y,
                            z: t.z
                        }, "f") : (get(this, Ft, "m", copyOrCutRegion).call(this, Math.min(get(this, editor_selectionStart, "f").x, t.x), Math.min(get(this, editor_selectionStart, "f").y, t.y), Math.min(get(this, editor_selectionStart, "f").z, t.z), Math.max(get(this, editor_selectionStart, "f").x, t.x), Math.max(get(this, editor_selectionStart, "f").y, t.y), Math.max(get(this, editor_selectionStart, "f").z, t.z), get(this, editor_isCutMode, "f")),
                        set(this, editor_isCopyMode, !1, "f"),
                        set(this, editor_isCutMode, !1, "f"),
                        set(this, editor_selectionStart, null, "f")))
                    } else
                        null != get(this, editor_activePlacement, "f") && get(this, Ft, "m", placeActiveParts).call(this)
                }
                ), "f")),
                window.addEventListener("keydown", set(this, editor_onKeyDown, (t => {
                    get(this, Ft, "m", isKeyboardInputActive).call(this) && ("Escape" == t.code && (get(this, editor_isCopyMode, "f") || get(this, editor_isCutMode, "f") ? (set(this, editor_isCopyMode, !1, "f"),
                    set(this, editor_isCutMode, !1, "f"),
                    set(this, editor_selectionStart, null, "f")) : null != get(this, editor_activePlacement, "f") ? (set(this, editor_activePlacement, null, "f"),
                    get(this, Ft, "m", rebuildPreviewMesh).call(this)) : get(this, Ft, "m", confirmExit).call(this, p),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorHeightModifier) && (set(this, editor_isHeightModifierHeld, !0, "f"),
                    get(this, editor_orbitControls, "f").enableZoom = !1,
                    t.preventDefault()),
                    t.ctrlKey ? ("KeyZ" == t.code && (t.shiftKey ? get(this, Ft, "m", redo).call(this) : get(this, Ft, "m", undo).call(this),
                    t.preventDefault()),
                    "KeyY" == t.code && (get(this, Ft, "m", redo).call(this),
                    t.preventDefault()),
                    "KeyX" == t.code ? (set(this, editor_isCopyMode, !1, "f"),
                    set(this, editor_isCutMode, !0, "f"),
                    set(this, editor_selectionStart, null, "f"),
                    set(this, editor_activePlacement, null, "f"),
                    get(this, Ft, "m", selectPart).call(this, null),
                    t.preventDefault()) : "KeyC" == t.code ? (set(this, editor_isCopyMode, !0, "f"),
                    set(this, editor_isCutMode, !1, "f"),
                    set(this, editor_selectionStart, null, "f"),
                    set(this, editor_activePlacement, null, "f"),
                    get(this, Ft, "m", selectPart).call(this, null),
                    t.preventDefault()) : "KeyV" == t.code && (null != get(this, editor_activePlacement, "f") ? get(this, Ft, "m", placeActiveParts).call(this) : null != get(this, editor_clipboard, "f") && get(this, Ft, "m", activatePaste).call(this),
                    get(this, Ft, "m", selectPart).call(this, null))) : (f.checkKeyBinding(t, KeyBind.EditorRotatePart) && (set(this, editor_currentRotation, (get(this, editor_currentRotation, "f") + 1) % 4, "f"),
                    get(this, editor_sideToolbar, "f").rotation = get(this, editor_currentRotation, "f"),
                    get(this, Ft, "m", recalcMinYOffset).call(this),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorDelete) && (set(this, editor_isDeleteKeyHeld, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorMoveForwards) && (set(this, editor_keyForward, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorMoveRight) && (set(this, editor_keyRight, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorMoveBackwards) && (set(this, editor_keyBackward, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorMoveLeft) && (set(this, editor_keyLeft, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewUp) && (set(this, editor_keyPitchUp, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewDown) && (set(this, editor_keyPitchDown, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewLeft) && (set(this, editor_keyYawLeft, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewRight) && (set(this, editor_keyYawRight, !0, "f"),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorMoveDown) && (set(this, Ft, Math.max(0, get(this, Ft, "a", getCurrentHeight) - 1), "a", setHeight),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorMoveUp) && (set(this, Ft, get(this, Ft, "a", getCurrentHeight) + 1, "a", setHeight),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorTest) && (get(this, Ft, "m", testTrack).call(this),
                    t.preventDefault()),
                    f.checkKeyBinding(t, KeyBind.EditorPick) && (get(this, Ft, "m", pickPartUnderCursor).call(this),
                    t.preventDefault())))
                }
                ), "f")),
                window.addEventListener("keyup", set(this, editor_onKeyUp, (t => {
                    f.checkKeyBinding(t, KeyBind.EditorHeightModifier) && (set(this, editor_isHeightModifierHeld, !1, "f"),
                    get(this, editor_orbitControls, "f").enableZoom = !0),
                    t.ctrlKey || (f.checkKeyBinding(t, KeyBind.EditorDelete) && set(this, editor_isDeleteKeyHeld, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorMoveForwards) && set(this, editor_keyForward, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorMoveRight) && set(this, editor_keyRight, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorMoveBackwards) && set(this, editor_keyBackward, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorMoveLeft) && set(this, editor_keyLeft, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewUp) && set(this, editor_keyPitchUp, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewDown) && set(this, editor_keyPitchDown, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewLeft) && set(this, editor_keyYawLeft, !1, "f"),
                    f.checkKeyBinding(t, KeyBind.EditorRotateViewRight) && set(this, editor_keyYawRight, !1, "f"))
                }
                ), "f")),
                window.addEventListener("wheel", set(this, editor_onWheel, (t => {
                    get(this, editor_isHeightModifierHeld, "f") && get(this, editor_isActive, "f") && (t.deltaY > 0 ? set(this, Ft, get(this, Ft, "a", getCurrentHeight) + 1, "a", setHeight) : t.deltaY < 0 && set(this, Ft, Math.max(0, get(this, Ft, "a", getCurrentHeight) - 1), "a", setHeight))
                }
                ), "f")),
                window.addEventListener("beforeunload", set(this, editor_onBeforeUnload, (t => !get(this, editor_isSaved, "f") && (t.preventDefault(),
                !0)), "f"));
                const u = document.getElementById("ui");
                if (null == u)
                    throw new Error("Failed to find UI element");
                set(this, editor_containerElement, document.createElement("div"), "f"),
                get(this, editor_containerElement, "f").className = "hidden",
                u.appendChild(get(this, editor_containerElement, "f"));
                const m = document.createElement("div");
                m.className = "safe-area-left",
                get(this, editor_containerElement, "f").appendChild(m);
                const v = document.createElement("div");
                v.className = "safe-area-right",
                get(this, editor_containerElement, "f").appendChild(v),
                set(this, editor_topBar, document.createElement("div"), "f"),
                get(this, editor_topBar, "f").className = "top",
                get(this, editor_containerElement, "f").appendChild(get(this, editor_topBar, "f"));
                const b = document.createElement("div");
                b.className = "button-bar",
                get(this, editor_topBar, "f").appendChild(b);
                const G = document.createElement("button");
                G.className = "button",
                G.innerHTML = '<img class="button-icon" src="images/quit.svg"> ',
                G.append(document.createTextNode(get(this, editor_localization, "f").get("Exit"))),
                G.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, Ft, "m", confirmExit).call(this, p)
                }
                )),
                b.appendChild(G);
                const x = document.createElement("button");
                x.className = "button",
                x.innerHTML = '<img class="button-icon" src="images/test.svg"> ',
                x.append(get(this, editor_localization, "f").get("Test")),
                x.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, Ft, "m", testTrack).call(this)
                }
                )),
                b.appendChild(x);

                this.editorMinimap.appendMinimap(get(this, editor_containerElement, "f"));

                const y = document.createElement("button");
                y.className = "button",
                y.innerHTML = '<img class="button-icon" src="images/random.svg"> ',
                y.append(get(this, editor_localization, "f").get("Generate")),
                y.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick();
                    const generateRandomTrack = () => {
                        !function(t) {
                            let e;
                            t.clear();
                            do {
                                let n = 0
                                  , i = 0
                                  , s = 0
                                  , direction = Math.floor(4 * Math.random());
                                Math.random() < .5 && (i = Math.floor(20 * Math.random()));
                                const a = new Map;
                                function moveForward() {
                                    switch (direction) {
                                    case 0:
                                        --s;
                                        break;
                                    case 1:
                                        --n;
                                        break;
                                    case 2:
                                        ++s;
                                        break;
                                    case 3:
                                        ++n
                                    }
                                }
                                function moveBackward() {
                                    switch (direction) {
                                    case 0:
                                        ++s;
                                        break;
                                    case 1:
                                        ++n;
                                        break;
                                    case 2:
                                        --s;
                                        break;
                                    case 3:
                                        --n
                                    }
                                }
                                function moveLeft() {
                                    switch ((direction + 1) % 4) {
                                    case 0:
                                        --s;
                                        break;
                                    case 1:
                                        --n;
                                        break;
                                    case 2:
                                        ++s;
                                        break;
                                    case 3:
                                        ++n
                                    }
                                }
                                function moveRight() {
                                    switch (((direction - 1) % 4 + 4) % 4) {
                                    case 0:
                                        --s;
                                        break;
                                    case 1:
                                        --n;
                                        break;
                                    case 2:
                                        ++s;
                                        break;
                                    case 3:
                                        ++n
                                    }
                                }
                                function placeCell(t, n, i, s, o=0) {
                                    const r = t.toString() + "|" + n.toString() + "|" + i.toString();
                                    a.has(r) && (e = !0),
                                    a.set(r, {
                                        x: t,
                                        y: n,
                                        z: i,
                                        type: s,
                                        direction: (o % 4 + 4) % 4
                                    })
                                }
                                function isCellOccupied(t, e, n) {
                                    return !!a.has(t.toString() + "|" + e.toString() + "|" + n.toString())
                                }
                                function placeSupportColumn() {
                                    let t = !1;
                                    for (let e = 0; e < i; ++e)
                                        if (isCellOccupied(n, e, s)) {
                                            t = !0;
                                            break
                                        }
                                    if (!t)
                                        for (let t = 0; t < i; ++t) {
                                            let e;
                                            e = 0 == t && t == i - 1 ? 22 : 0 == t ? 21 : t == i - 1 ? 19 : 20,
                                            placeCell(n, t, s, e, 0)
                                        }
                                }
                                function generateNarrowSegment(t) {
                                    t > 0 ? (--t,
                                    Math.random() < .2 ? transitionNarrowToWide(t) : Math.random() < .6 ? placeNarrowStraight(t) : Math.random() < .5 ? placeNarrowSlopeUp(t, i < 2 || Math.random() < .5) : Math.random() < .5 ? placeNarrowTurnRight(t) : placeNarrowTurnLeft(t)) : placeFinish()
                                }
                                function generateWideSegment(t) {
                                    t > 0 ? (--t,
                                    Math.random() < .1 ? transitionWideToNarrow(t) : Math.random() < .6 ? placeWideStraight(t) : Math.random() < .5 ? placeWideSlopeUp(t, i < 2 || Math.random() < .5) : Math.random() < .5 ? placeWideTurnRight(t) : placeWideTurnLeft(t)) : transitionWideToNarrow(t)
                                }
                                function placeNarrowStraight(t) {
                                    placeCell(n, i, s, Part.Straight, direction),
                                    placeSupportColumn(),
                                    moveForward(),
                                    generateNarrowSegment(t)
                                }
                                function placeNarrowTurnRight(t) {
                                    placeCell(n, i, s, Part.TurnSharp, direction - 1),
                                    placeSupportColumn(),
                                    direction = (direction + 1) % 4,
                                    moveForward(),
                                    t > 0 ? (--t,
                                    Math.random() < .4 ? placeNarrowStraight(t) : Math.random() < .5 ? placeNarrowTurnRight(t) : placeNarrowTurnLeft(t)) : placeFinish()
                                }
                                function placeNarrowTurnLeft(t) {
                                    placeCell(n, i, s, Part.TurnSharp, direction),
                                    placeSupportColumn(),
                                    direction = ((direction - 1) % 4 + 4) % 4,
                                    moveForward(),
                                    t > 0 ? (--t,
                                    Math.random() < .4 ? placeNarrowStraight(t) : Math.random() < .5 ? placeNarrowTurnRight(t) : placeNarrowTurnLeft(t)) : placeFinish()
                                }
                                function placeNarrowSlopeUp(t, e) {
                                    let a;
                                    a = e ? 2 : 3,
                                    e || --i,
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i, s, a, direction),
                                    moveForward(),
                                    e && ++i,
                                    t > 0 ? (--t,
                                    Math.random() < .4 || i <= 3 ? placeNarrowSlopeDown(t, e) : placeNarrowSteepSlope(t, e)) : placeNarrowSlopeDown(t, e)
                                }
                                function placeNarrowSlopeDown(t, e) {
                                    let a;
                                    e || --i,
                                    placeCell(n, i + 1, s, null),
                                    a = e ? 3 : 2,
                                    placeCell(n, i, s, a, direction + 2),
                                    moveForward(),
                                    e && ++i,
                                    t > 0 ? generateNarrowSegment(--t) : placeFinish()
                                }
                                function placeNarrowSteepSlope(t, e) {
                                    let a;
                                    e || (i -= 2),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i + 2, s, null),
                                    a = e ? direction : direction + 2,
                                    placeCell(n, i, s, Part.Slope, a),
                                    moveForward(),
                                    e && (i += 2),
                                    t > 0 ? (--t,
                                    Math.random() < .4 || i <= 3 ? placeNarrowSlopeDown(t, e) : placeNarrowSteepSlope(t, e)) : placeNarrowSlopeDown(t, e)
                                }
                                function placeFinish() {
                                    placeCell(n, i, s, Part.Finish, direction)
                                }
                                function placeStart(t) {
                                    placeCell(n, i, s, Part.Start, direction),
                                    placeSupportColumn(),
                                    moveForward(),
                                    generateNarrowSegment(t)
                                }
                                function transitionNarrowToWide(t) {
                                    Math.random() < .5 ? (placeCell(n, i, s, Part.ToWideLeft, direction),
                                    placeSupportColumn(),
                                    moveRight(),
                                    placeCell(n, i, s, Part.OuterCornerWide, direction + 2),
                                    placeSupportColumn(),
                                    moveForward()) : (placeCell(n, i, s, Part.ToWideRight, direction),
                                    placeSupportColumn(),
                                    moveLeft(),
                                    placeCell(n, i, s, Part.OuterCornerWide, direction + 1),
                                    placeSupportColumn(),
                                    moveForward(),
                                    moveRight()),
                                    generateWideSegment(t)
                                }
                                function transitionWideToNarrow(t) {
                                    Math.random() < .5 ? (placeCell(n, i, s, Part.OuterCornerWide, direction + 3),
                                    placeSupportColumn(),
                                    moveLeft(),
                                    placeCell(n, i, s, Part.ToWideRight, direction + 2),
                                    placeSupportColumn(),
                                    moveForward()) : (placeCell(n, i, s, Part.ToWideLeft, direction + 2),
                                    placeSupportColumn(),
                                    moveLeft(),
                                    placeCell(n, i, s, Part.OuterCornerWide, direction),
                                    placeSupportColumn(),
                                    moveForward(),
                                    moveRight()),
                                    generateNarrowSegment(t)
                                }
                                function placeWideStraight(t) {
                                    placeCell(n, i, s, Part.StraightWide, direction),
                                    placeSupportColumn(),
                                    moveLeft(),
                                    placeCell(n, i, s, Part.StraightWide, direction + 2),
                                    placeSupportColumn(),
                                    moveRight(),
                                    moveForward(),
                                    generateWideSegment(t)
                                }
                                function placeWideTurnRight(t) {
                                    placeCell(n, i, s, Part.StraightWide, direction),
                                    placeSupportColumn(),
                                    moveForward(),
                                    placeCell(n, i, s, Part.OuterCornerWide, direction + 3),
                                    placeSupportColumn(),
                                    moveLeft(),
                                    placeCell(n, i, s, Part.StraightWide, direction + 1),
                                    placeSupportColumn(),
                                    moveBackward(),
                                    placeCell(n, i, s, Part.InnerCornerWide, direction + 3),
                                    placeSupportColumn(),
                                    moveForward(),
                                    direction = (direction + 1) % 4,
                                    moveForward(),
                                    generateWideSegment(t)
                                }
                                function placeWideTurnLeft(t) {
                                    placeCell(n, i, s, Part.InnerCornerWide, direction),
                                    placeSupportColumn(),
                                    moveLeft(),
                                    placeCell(n, i, s, Part.StraightWide, direction + 2),
                                    placeSupportColumn(),
                                    moveForward(),
                                    placeCell(n, i, s, Part.OuterCornerWide, direction),
                                    placeSupportColumn(),
                                    moveRight(),
                                    placeCell(n, i, s, Part.StraightWide, direction + 1),
                                    placeSupportColumn(),
                                    moveBackward(),
                                    direction = ((direction - 1) % 4 + 4) % 4,
                                    moveForward(),
                                    generateWideSegment(t)
                                }
                                function placeWideSlopeUp(t, e) {
                                    let a, h;
                                    e ? (a = Part.SlopeUpLeftWide,
                                    h = Part.SlopeUpRightWide) : (a = Part.SlopeDownLeftWide,
                                    h = Part.SlopeDownRightWide),
                                    e || --i,
                                    moveLeft(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i, s, a, direction),
                                    moveRight(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i, s, h, direction),
                                    moveForward(),
                                    e && ++i,
                                    t > 0 ? (--t,
                                    Math.random() < .4 || i <= 3 ? placeWideSlopeDown(t, e) : placeWideSteepSlope(t, e)) : placeWideSlopeDown(t, e)
                                }
                                function placeWideSlopeDown(t, e) {
                                    let a, h;
                                    e || --i,
                                    e ? (a = Part.SlopeDownRightWide,
                                    h = Part.SlopeDownLeftWide) : (a = Part.SlopeUpRightWide,
                                    h = Part.SlopeUpLeftWide),
                                    moveLeft(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i, s, a, direction + 2),
                                    moveRight(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i, s, h, direction + 2),
                                    moveForward(),
                                    e && ++i,
                                    generateWideSegment(t)
                                }
                                function placeWideSteepSlope(t, e) {
                                    e || (i -= 2),
                                    e ? (moveLeft(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i + 2, s, null),
                                    placeCell(n, i, s, Part.SlopeLeftWide, direction),
                                    moveRight(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i + 2, s, null),
                                    placeCell(n, i, s, Part.SlopeRightWide, direction)) : (moveLeft(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i + 2, s, null),
                                    placeCell(n, i, s, Part.SlopeRightWide, direction + 2),
                                    moveRight(),
                                    placeCell(n, i + 1, s, null),
                                    placeCell(n, i + 2, s, null),
                                    placeCell(n, i, s, Part.SlopeLeftWide, direction + 2)),
                                    moveForward(),
                                    e && (i += 2),
                                    t > 0 ? (--t,
                                    Math.random() < .4 || i <= 3 ? placeWideSlopeDown(t, e) : placeWideSteepSlope(t, e)) : placeWideSlopeDown(t, e)
                                }
                                if (e = !1,
                                placeStart(50),
                                !e)
                                    for (const N of a.values())
                                        if (null != N.type) {
                                            let S = null;
                                            N.type == Part.Start && (S = 0),
                                            t.setPart(4 * N.x, N.y, 4 * N.z, N.type, N.direction, TrackPartRotationAxis.YPositive, TrackPartColorId.Default, null, S)
                                        }
                            } while (e)
                        }(get(this, editor_track, "f")),
                        get(this, Ft, "m", refreshTrackAfterEdit).call(this),
                        set(this, editor_isSaved, !0, "f"),
                        set(this, editor_isCopyMode, !1, "f"),
                        set(this, editor_isCutMode, !1, "f"),
                        set(this, editor_selectionStart, null, "f"),
                        get(this, editor_undoStack, "f").length = 0,
                        get(this, editor_redoStack, "f").length = 0,
                        get(this, editor_undoButton, "f").disabled = !0,
                        get(this, editor_redoButton, "f").disabled = !0
                    }
                    ;
                    get(this, editor_isSaved, "f") ? generateRandomTrack() : (get(this, editor_containerElement, "f").inert = !0,
                    get(this, editor_dialogManager, "f").showConfirm(get(this, editor_localization, "f").get("Are you sure you want to generate a new track?\n\nYour current track will be lost!"), get(this, editor_localization, "f").get("Cancel"), get(this, editor_localization, "f").get("Confirm"), ( () => {
                        get(this, editor_containerElement, "f").inert = !1
                    }
                    ), ( () => {
                        generateRandomTrack(),
                        get(this, editor_containerElement, "f").inert = !1
                    }
                    )))
                }
                )),
                b.appendChild(y),
                set(this, editor_exportUI, new ct.A(u,get(this, editor_localization, "f"),get(this, editor_audioManager, "f"),get(this, editor_trackStorage, "f"),get(this, editor_customTrackManager, "f"),get(this, editor_userProfileManager, "f"),get(this, editor_dialogManager, "f"),get(this, editor_networkManager, "f"),"cancel",!0,( () => {
                    get(this, editor_containerElement, "f").className = "editor-ui",
                    get(this, editor_exportUI, "f").hide()
                }
                ),( (t, e, n) => {
                    get(this, editor_exportUI, "f").hide(),
                    set(this, editor_isTyping, !0, "f"),
                    set(this, editor_loadingScreen, new LoadingScreenUI(!0), "f"),
                    n().then((e => {
                        const n = get(this, editor_track, "f").environment;
                        get(this, editor_track, "f").loadTrackData(e),
                        get(this, editor_track, "f").environment != n && get(this, Ft, "m", refreshAllThumbnails).call(this),
                        get(this, Ft, "m", refreshTrackAfterEdit).call(this),
                        set(this, editor_isCopyMode, !1, "f"),
                        set(this, editor_isCutMode, !1, "f"),
                        set(this, editor_selectionStart, null, "f"),
                        get(this, editor_undoStack, "f").length = 0,
                        get(this, editor_redoStack, "f").length = 0,
                        get(this, editor_undoButton, "f").disabled = !0,
                        get(this, editor_redoButton, "f").disabled = !0,
                        get(this, Ft, "m", loadTrackMetadata).call(this, t),
                        set(this, editor_isSaved, !0, "f");
                        const s = get(this, editor_track, "f").getStart();
                        if (null != s)
                            this.resetView(s.x, s.y, s.z);
                        else {
                            const t = get(this, editor_track, "f").getBounds();
                            this.resetView(t.min.x + Math.floor((t.max.x - t.min.x) / 2), 0, t.min.y + Math.floor((t.max.y - t.min.y) / 2))
                        }
                        get(this, editor_containerElement, "f").className = "editor-ui",
                        set(this, editor_isTyping, !1, "f");
                        
                        this.editorMinimap.initTrackPreview(get(this, editor_track, "f"));
                    }
                    )).catch((t => {
                        if (!(t instanceof TrackLoadError))
                            throw t;
                        get(this, editor_dialogManager, "f").show(get(this, editor_localization, "f").get("Failed to load track"), get(this, editor_localization, "f").get("Ok"), ( () => {
                            set(this, editor_isTyping, !1, "f"),
                            get(this, editor_exportUI, "f").show()
                        }
                        ))
                    }
                    )).finally(( () => {
                        get(this, editor_loadingScreen, "f")?.dispose(),
                        set(this, editor_loadingScreen, null, "f")
                    }
                    ))
                }
                )), "f"),
                set(this, editor_sideToolbar, new EditorSideToolbarUI(get(this, editor_containerElement, "f"),get(this, editor_audioManager, "f"),get(this, editor_inputManager, "f"),(t => {
                    set(this, editor_isDeleteMode, t, "f")
                }
                ),(t => {
                    set(this, editor_isLargeGrid, t, "f"),
                    set(this, editor_isCopyMode, !1, "f"),
                    set(this, editor_isCutMode, !1, "f"),
                    set(this, editor_selectionStart, null, "f")
                }
                ),(t => {
                    set(this, editor_currentAxis, t, "f"),
                    get(this, editor_sideToolbar, "f").rotationAxis = get(this, editor_currentAxis, "f"),
                    get(this, Ft, "m", recalcMinYOffset).call(this)
                }
                ),( () => {
                    set(this, editor_currentRotation, (get(this, editor_currentRotation, "f") + 1) % 4, "f"),
                    get(this, editor_sideToolbar, "f").rotation = get(this, editor_currentRotation, "f"),
                    get(this, Ft, "m", recalcMinYOffset).call(this)
                }
                )), "f");
                const A = document.createElement("button");
                A.className = "button",
                A.innerHTML = '<img class="button-icon" src="images/load.svg"> ',
                A.append(document.createTextNode(get(this, editor_localization, "f").get("Load"))),
                A.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, editor_isSaved, "f") ? (get(this, editor_exportUI, "f").show(),
                    get(this, editor_containerElement, "f").className = "hidden") : (get(this, editor_containerElement, "f").inert = !0,
                    get(this, editor_dialogManager, "f").showConfirm(get(this, editor_localization, "f").get("Are you sure you want to load a new track?\n\nYour current track will be lost!"), get(this, editor_localization, "f").get("Cancel"), get(this, editor_localization, "f").get("Confirm"), ( () => {
                        get(this, editor_containerElement, "f").inert = !1
                    }
                    ), ( () => {
                        get(this, editor_exportUI, "f").show(),
                        get(this, editor_containerElement, "f").className = "hidden",
                        get(this, editor_containerElement, "f").inert = !1
                    }
                    )))
                }
                )),
                b.appendChild(A);
                const M = document.createElement("button");
                M.className = "button",
                M.innerHTML = '<img class="button-icon" src="images/save.svg"> ',
                M.append(document.createTextNode(get(this, editor_localization, "f").get("Save"))),
                M.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick();
                    const t = t => {
                        const e = {
                            name: t,
                            author: get(this, editor_trackAuthor, "f"),
                            lastModified: get(this, editor_lastModified, "f")
                        }
                          , n = get(this, editor_track, "f").getTrackData();
                        get(this, editor_customTrackManager, "f").saveCustomTrack(e, n) ? (get(this, Ft, "m", showToast).call(this, get(this, editor_localization, "f").get("Track saved!"), !0),
                        set(this, editor_isSaved, !0, "f")) : get(this, Ft, "m", showToast).call(this, get(this, editor_localization, "f").get("Failed to save!"), !1)
                    }
                      , e = get(this, editor_trackName, "f");
                    if (null == e)
                        get(this, editor_containerElement, "f").className = "hidden",
                        set(this, editor_activeModal, new TrackSettingsUI(get(this, editor_audioManager, "f"),get(this, editor_localization, "f"),get(this, editor_trackName, "f"),get(this, editor_trackAuthor, "f"),get(this, editor_lastModified, "f"),get(this, editor_track, "f"),(t => {
                            get(this, Ft, "m", setEnvironment).call(this, t)
                        }
                        ),( (t, e, newDate) => {
                            get(this, Ft, "m", setTrackName).call(this, t),
                            get(this, Ft, "m", setTrackAuthor).call(this, e),
                            get(this, Ft, "m", setTrackCreationDate).call(this, newDate),
                            get(this, editor_activeModal, "f")?.dispose(),
                            set(this, editor_activeModal, null, "f"),
                            get(this, editor_containerElement, "f").className = "editor-ui"
                        }
                        ),( (e, n, newDate) => {
                            get(this, Ft, "m", setTrackName).call(this, e),
                            get(this, Ft, "m", setTrackAuthor).call(this, n),
                            get(this, Ft, "m", setTrackCreationDate).call(this, newDate),
                            get(this, editor_activeModal, "f")?.dispose(),
                            set(this, editor_activeModal, null, "f"),
                            t(e),
                            get(this, editor_containerElement, "f").className = "editor-ui"
                        }
                        )), "f");
                    else {
                        get(this, editor_customTrackManager, "f").checkCustomTrackNameExists(e) ? (get(this, editor_containerElement, "f").inert = !0,
                        get(this, editor_dialogManager, "f").showConfirm(get(this, editor_localization, "f").get('Are you sure you want to overwrite "{0}"?', [e]), get(this, editor_localization, "f").get("Cancel"), get(this, editor_localization, "f").get("Confirm"), ( () => {
                            get(this, editor_containerElement, "f").inert = !1
                        }
                        ), ( () => {
                            t(e),
                            get(this, editor_containerElement, "f").inert = !1
                        }
                        ))) : t(e)
                    }
                }
                )),
                b.appendChild(M);
                const E = document.createElement("button");
                E.className = "button",
                E.innerHTML = '<img class="button-icon" src="images/export.svg"> ',
                E.append(document.createTextNode(get(this, editor_localization, "f").get("Export"))),
                E.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick();
                    const t = get(this, editor_trackName, "f");
                    if (null == t)
                        get(this, editor_containerElement, "f").className = "hidden",
                        set(this, editor_activeModal, new TrackSettingsUI(get(this, editor_audioManager, "f"),get(this, editor_localization, "f"),get(this, editor_trackName, "f"),get(this, editor_trackAuthor, "f"),get(this, editor_lastModified, "f"),get(this, editor_track, "f"),(t => {
                            get(this, Ft, "m", setEnvironment).call(this, t)
                        }
                        ),( (t, e, newDate) => {
                            get(this, Ft, "m", setTrackName).call(this, t),
                            get(this, Ft, "m", setTrackAuthor).call(this, e),
                            get(this, Ft, "m", setTrackCreationDate).call(this, newDate),
                            get(this, editor_activeModal, "f")?.dispose(),
                            set(this, editor_activeModal, null, "f"),
                            get(this, editor_containerElement, "f").className = "editor-ui"
                        }
                        ),( (t, e, newDate) => {
                            get(this, Ft, "m", setTrackName).call(this, t),
                            get(this, Ft, "m", setTrackAuthor).call(this, e),
                            get(this, Ft, "m", setTrackCreationDate).call(this, newDate),
                            get(this, editor_activeModal, "f")?.dispose(),
                            set(this, editor_activeModal, null, "f");
                            const n = {
                                name: t,
                                author: get(this, editor_trackAuthor, "f"),
                                lastModified: get(this, editor_lastModified, "f")
                            }
                              , tData = get(this, editor_track, "f").getTrackData()
                              , s = tData.toExportString(n)
                              , getCwcTrackString = () => {
                                    return tData.toCwcExportString(n)
                              };
                            set(this, editor_helpUI, new TrackExportUI(s,( () => {
                                get(this, editor_helpUI, "f")?.dispose(),
                                set(this, editor_helpUI, null, "f"),
                                get(this, editor_containerElement, "f").className = "editor-ui"
                            }
                            ),null,get(this, editor_localization, "f"),get(this, editor_audioManager, "f"),get(this, editor_customTrackManager, "f"),get(this, editor_dialogManager, "f"), getCwcTrackString), "f")
                        }
                        )), "f");
                    else {
                        get(this, editor_containerElement, "f").className = "hidden";
                        const e = {
                            name: t,
                            author: get(this, editor_trackAuthor, "f"),
                            lastModified: get(this, editor_lastModified, "f")
                        }
                          , tData = get(this, editor_track, "f").getTrackData()
                          , n = tData.toExportString(e)
                          , getCwcTrackString = () => {
                                return tData.toCwcExportString(e)
                          };
                        set(this, editor_helpUI, new TrackExportUI(n,( () => {
                            get(this, editor_helpUI, "f")?.dispose(),
                            set(this, editor_helpUI, null, "f"),
                            get(this, editor_containerElement, "f").className = "editor-ui"
                        }
                        ),null,get(this, editor_localization, "f"),get(this, editor_audioManager, "f"),get(this, editor_customTrackManager, "f"),get(this, editor_dialogManager, "f"), getCwcTrackString), "f")
                    }
                }
                )),
                b.appendChild(E);

                this.editorMinimap.appendButton(b);

                this.carTrailVisible = !0;
                const toggleCarTrailButton = document.createElement("button");
                toggleCarTrailButton.className = "button";
                toggleCarTrailButton.innerHTML = '<img class="button-icon" src="images/customize.svg"> ';
                toggleCarTrailButton.append(document.createTextNode(get(this, editor_localization, "f").get("Toggle Trail")));
                toggleCarTrailButton.addEventListener("click", () => {
                    get(this, editor_audioManager, "f").playUIClick();
                    this.carTrailVisible = !this.carTrailVisible;
                    if (this.carTrailGroup) {
                        this.carTrailGroup.visible = this.carTrailVisible;
                    }
                    toggleCarTrailButton.classList.toggle("active", this.carTrailVisible);
                });
                b.appendChild(toggleCarTrailButton);

                const C = document.createElement("button");
                C.className = "button",
                C.innerHTML = '<img class="button-icon" src="images/help.svg"> ',
                C.append(document.createTextNode(get(this, editor_localization, "f").get("Help"))),
                C.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick();
                    const t = get(this, editor_partRegistry, "f").getPart(Part.Start).colors.get(TrackPartColorId.Summer);
                    if (null == t)
                        throw new Error("Starting point mesh is null");
                    const e = renderPartThumbnail(t)
                      , n = get(this, editor_partRegistry, "f").getPart(Part.Checkpoint).colors.get(TrackPartColorId.Summer);
                    if (null == n)
                        throw new Error("Checkpoint mesh is null");
                    const s = renderPartThumbnail(n)
                      , o = get(this, editor_partRegistry, "f").getPart(Part.Finish).colors.get(TrackPartColorId.Summer);
                    if (null == o)
                        throw new Error("Finish line mesh is null");
                    const a = renderPartThumbnail(o);
                    get(this, editor_containerElement, "f").className = "hidden",
                    set(this, editor_trackSettingsUI, new EditorHelpUI(get(this, editor_audioManager, "f"),get(this, editor_localization, "f"),get(this, editor_settingsManager, "f"),get(this, editor_inputManager, "f"),e,s,a,( () => {
                        get(this, editor_trackSettingsUI, "f")?.dispose(),
                        set(this, editor_trackSettingsUI, null, "f"),
                        get(this, editor_containerElement, "f").className = "editor-ui"
                    }
                    )), "f")
                }
                )),
                b.appendChild(C);
                const W = document.createElement("div");
                W.className = "track-settings-container",
                get(this, editor_topBar, "f").appendChild(W),
                set(this, editor_settingsButton, document.createElement("button"), "f"),
                get(this, editor_settingsButton, "f").className = "button",
                get(this, editor_settingsButton, "f").innerHTML = '<img class="button-icon" src="images/settings.svg"> ',
                get(this, editor_settingsButton, "f").append(document.createTextNode(get(this, editor_trackName, "f") ?? get(this, editor_localization, "f").get("Unnamed Track"))),
                get(this, editor_settingsButton, "f").addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, editor_containerElement, "f").className = "hidden",
                    set(this, editor_activeModal, new TrackSettingsUI(get(this, editor_audioManager, "f"),get(this, editor_localization, "f"),get(this, editor_trackName, "f"),get(this, editor_trackAuthor, "f"),get(this, editor_lastModified, "f"),get(this, editor_track, "f"),(t => {
                        get(this, Ft, "m", setEnvironment).call(this, t)
                    }
                    ),( (t, e, newDate) => {
                        get(this, Ft, "m", setTrackName).call(this, t),
                        get(this, Ft, "m", setTrackAuthor).call(this, e),
                        get(this, Ft, "m", setTrackCreationDate).call(this, newDate),
                        get(this, editor_activeModal, "f")?.dispose(),
                        set(this, editor_activeModal, null, "f"),
                        get(this, editor_containerElement, "f").className = "editor-ui"
                    }
                    ),null), "f")
                }
                )),
                W.appendChild(get(this, editor_settingsButton, "f")),
                set(this, editor_toastElement, document.createElement("div"), "f"),
                get(this, editor_toastElement, "f").className = "message",
                get(this, editor_containerElement, "f").appendChild(get(this, editor_toastElement, "f"));
                const P = document.createElement("side");
                P.className = "side",
                get(this, editor_containerElement, "f").appendChild(P);
                const z = document.createElement("div");
                z.className = "container",
                P.appendChild(z);
                const N = document.createElement("div");
                N.className = "mini-toolbar-container",
                z.appendChild(N);
                const S = document.createElement("button");
                S.className = "button",
                S.innerHTML = '<img class="button-icon" src="images/cut.svg">',
                S.addEventListener("click", ( () => {
                    set(this, editor_isCopyMode, !1, "f"),
                    set(this, editor_isCutMode, !0, "f"),
                    set(this, editor_selectionStart, null, "f"),
                    set(this, editor_activePlacement, null, "f"),
                    get(this, Ft, "m", selectPart).call(this, null)
                }
                )),
                N.appendChild(S);
                const T = document.createElement("button");
                T.className = "button",
                T.innerHTML = '<img class="button-icon" src="images/copy.svg">',
                T.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    set(this, editor_isCopyMode, !0, "f"),
                    set(this, editor_isCutMode, !1, "f"),
                    set(this, editor_selectionStart, null, "f"),
                    set(this, editor_activePlacement, null, "f"),
                    get(this, Ft, "m", selectPart).call(this, null)
                }
                )),
                N.appendChild(T),
                set(this, editor_pasteButton, document.createElement("button"), "f"),
                get(this, editor_pasteButton, "f").className = "button",
                get(this, editor_pasteButton, "f").disabled = !0,
                get(this, editor_pasteButton, "f").innerHTML = '<img class="button-icon" src="images/paste.svg">',
                get(this, editor_pasteButton, "f").addEventListener("click", ( () => {
                    null != get(this, editor_activePlacement, "f") ? get(this, Ft, "m", placeActiveParts).call(this) : null != get(this, editor_clipboard, "f") && get(this, Ft, "m", activatePaste).call(this),
                    get(this, Ft, "m", selectPart).call(this, null)
                }
                )),
                N.appendChild(get(this, editor_pasteButton, "f"));
                const q = document.createElement("div");
                q.className = "undo-container",
                N.appendChild(q),
                set(this, editor_undoButton, document.createElement("button"), "f"),
                get(this, editor_undoButton, "f").disabled = !0,
                get(this, editor_undoButton, "f").className = "button",
                get(this, editor_undoButton, "f").innerHTML = '<img class="button-icon" src="images/undo.svg">',
                get(this, editor_undoButton, "f").addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, Ft, "m", undo).call(this)
                }
                )),
                q.appendChild(get(this, editor_undoButton, "f")),
                set(this, editor_redoButton, document.createElement("button"), "f"),
                get(this, editor_redoButton, "f").disabled = !0,
                get(this, editor_redoButton, "f").className = "button",
                get(this, editor_redoButton, "f").innerHTML = '<img class="button-icon" src="images/redo.svg">',
                get(this, editor_redoButton, "f").addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, Ft, "m", redo).call(this)
                }
                )),
                q.appendChild(get(this, editor_redoButton, "f")),
                set(this, editor_checkpointOrderUI, new CheckpointOrderEditorUI(z,get(this, editor_localization, "f"),get(this, editor_audioManager, "f"),get(this, editor_inputManager, "f")), "f"),
                set(this, editor_partPanelContainer, document.createElement("div"), "f"),
                get(this, editor_partPanelContainer, "f").className = "side-panel",
                P.appendChild(get(this, editor_partPanelContainer, "f")),
                set(this, editor_categoryBar, document.createElement("div"), "f"),
                get(this, editor_categoryBar, "f").className = "category-panel",
                get(this, editor_partPanelContainer, "f").appendChild(get(this, editor_categoryBar, "f"));
                const D = document.createElement("button");
                D.addEventListener("click", ( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    get(this, Ft, "m", selectCategory).call(this, null)
                }
                )),
                get(this, editor_categoryBar, "f").appendChild(D);
                const O = document.createElement("img");
                O.src = "images/erase.svg",
                D.appendChild(O),
                get(this, editor_partEntries, "f").push({
                    id: null,
                    trackPartData: null,
                    button: D,
                    image: O,
                    colorPanel: null,
                    colorButtons: [],
                    tiles: new dt.A([[-2, 0, -2], [-1, 0, -2], [0, 0, -2], [1, 0, -2], [-2, 0, -1], [-1, 0, -1], [0, 0, -1], [1, 0, -1], [-2, 0, 0], [-1, 0, 0], [0, 0, 0], [1, 0, 0], [-2, 0, 1], [-1, 0, 1], [0, 0, 1], [1, 0, 1]]),
                    isCheckpoint: !1,
                    isStart: !1,
                    category: null
                }),
                set(this, editor_heightSelectorUI, new HeightSelectorUI(get(this, editor_containerElement, "f"),get(this, editor_localization, "f"),get(this, editor_inputManager, "f"),( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    set(this, Ft, get(this, Ft, "a", getCurrentHeight) + 1, "a", setHeight)
                }
                ),( () => {
                    get(this, editor_audioManager, "f").playUIClick(),
                    set(this, Ft, Math.max(0, get(this, Ft, "a", getCurrentHeight) - 1), "a", setHeight)
                }
                )), "f"),
                get(this, editor_heightSelectorUI, "f").refresh(get(this, Ft, "a", getCurrentHeight))
            }
            dispose() {
                set(this, editor_isActive, !1, "f"),
                get(this, editor_checkpointLabels3D, "f")?.dispose(),
                get(this, editor_heightSelectorUI, "f").dispose(),
                get(this, editor_checkpointOrderUI, "f").dispose(),
                get(this, editor_helpUI, "f")?.dispose(),
                set(this, editor_helpUI, null, "f"),
                get(this, editor_exportUI, "f").dispose(),
                get(this, editor_loadingScreen, "f")?.dispose(),
                set(this, editor_loadingScreen, null, "f"),
                get(this, editor_sideToolbar, "f").dispose(),
                get(this, editor_trackSettingsUI, "f")?.dispose(),
                set(this, editor_trackSettingsUI, null, "f");
                const t = document.getElementById("ui");
                if (null == t)
                    throw new Error("Failed to find UI element");
                t.removeChild(get(this, editor_containerElement, "f")),
                get(this, editor_renderer, "f").scene.remove(get(this, editor_cameraRig, "f")),
                get(this, editor_orbitControls, "f").dispose(),
                get(this, editor_renderer, "f").canvas.style.touchAction = "",
                get(this, editor_ghostMaterial, "f").dispose(),
                get(this, editor_renderer, "f").removeMaterial(get(this, editor_ghostMaterial, "f"));
                for (const t of get(this, editor_previewGroup, "f").children) {
                    if (!(t instanceof THREE.Mesh))
                        throw new Error("Object is not a mesh");
                    const e = t;
                    if (e.geometry.dispose(),
                    Array.isArray(e.material))
                        for (const t of e.material) {
                            if (!(t instanceof THREE.Material))
                                throw new Error("Material is not a THREE.Material");
                            t.dispose()
                        }
                    else
                        e.material.dispose()
                }
                if (get(this, editor_renderer, "f").scene.remove(get(this, editor_previewGroup, "f")),
                this.disposeCarTrail(),
                null != get(this, editor_tileIndicatorMesh, "f") && (get(this, editor_renderer, "f").scene.remove(get(this, editor_tileIndicatorMesh, "f")),
                get(this, editor_tileIndicatorMesh, "f").dispose(),
                get(this, editor_tileIndicatorGeometry, "f").dispose(),
                get(this, editor_tileIndicatorMaterial, "f").dispose(),
                set(this, editor_tileIndicatorMesh, null, "f")),
                null != get(this, editor_selectionBoxMeshes, "f") && (get(this, editor_renderer, "f").scene.remove(get(this, editor_selectionBoxMeshes, "f").fill),
                get(this, editor_selectionBoxMeshes, "f").fill.geometry.dispose(),
                get(this, editor_selectionBoxMeshes, "f").fill.material.dispose(),
                get(this, editor_renderer, "f").scene.remove(get(this, editor_selectionBoxMeshes, "f").outline),
                get(this, editor_selectionBoxMeshes, "f").outline.geometry.dispose(),
                get(this, editor_selectionBoxMeshes, "f").outline.material.dispose(),
                set(this, editor_selectionBoxMeshes, null, "f")),
                get(this, editor_gridPlane, "f").geometry.dispose(),
                Array.isArray(get(this, editor_gridPlane, "f").material))
                    for (const t of get(this, editor_gridPlane, "f").material) {
                        if (!(t instanceof THREE.Material))
                            throw new Error("Material is not a THREE.Material");
                        t.dispose()
                    }
                else
                    get(this, editor_gridPlane, "f").material.dispose();
                set(this, editor_isCopyMode, !1, "f"),
                set(this, editor_isCutMode, !1, "f"),
                set(this, editor_selectionStart, null, "f"),
                set(this, editor_activePlacement, null, "f"),
                get(this, Ft, "m", rebuildPreviewMesh).call(this),
                get(this, editor_undoStack, "f").length = 0,
                get(this, editor_redoStack, "f").length = 0,
                get(this, editor_undoButton, "f").disabled = !0,
                get(this, editor_redoButton, "f").disabled = !0,
                get(this, editor_renderer, "f").canvas.removeEventListener("mousemove", get(this, editor_onMouseMove, "f")),
                get(this, editor_renderer, "f").canvas.removeEventListener("mousedown", get(this, editor_onMouseDown, "f")),
                window.removeEventListener("mouseup", get(this, editor_onMouseUp, "f")),
                get(this, editor_renderer, "f").canvas.removeEventListener("mouseout", get(this, editor_onMouseOut, "f")),
                get(this, editor_renderer, "f").canvas.removeEventListener("touchstart", get(this, editor_onTouchStart, "f")),
                get(this, editor_renderer, "f").canvas.removeEventListener("click", get(this, editor_onClick, "f")),
                window.removeEventListener("keydown", get(this, editor_onKeyDown, "f")),
                window.removeEventListener("keyup", get(this, editor_onKeyUp, "f")),
                window.removeEventListener("wheel", get(this, editor_onWheel, "f")),
                window.removeEventListener("beforeunload", get(this, editor_onBeforeUnload, "f"))
            }
            loadCarTrail(savedCarPositionArray) {
                this.disposeCarTrail();
                
                const TRAIL_MODE = "continuous";
                if (!Array.isArray(savedCarPositionArray)) return;

                const carVertices = VisualCar.models.collisionShapeVertices;
                const flatVerts = Float32Array.from(carVertices.flat ? carVertices.flat() : carVertices);
                const vertCount = flatVerts.length / 3;
                const carTrailGroup = new THREE.Group();

                if (TRAIL_MODE === "continuous") {
                    const round = n => Math.round(n * 1e5) / 1e5;
                    const vKey = i => `${round(flatVerts[i*3])},${round(flatVerts[i*3+1])},${round(flatVerts[i*3+2])}`;

                    const indexToUnique = new Int32Array(vertCount);
                    const seenV = new Map();
                    for (let i = 0; i < vertCount; i++) {
                        const k = vKey(i);
                        if (!seenV.has(k)) seenV.set(k, seenV.size);
                        indexToUnique[i] = seenV.get(k);
                    }

                    const readV = i => new THREE.Vector3(flatVerts[i*3], flatVerts[i*3+1], flatVerts[i*3+2]);
                    const triNormals = [];
                    for (let t = 0; t < vertCount; t += 3) {
                        const a = readV(t), b = readV(t+1), c = readV(t+2);
                        triNormals.push(b.sub(a).cross(c.sub(a)).normalize());
                    }

                    const edgeMap = new Map();
                    for (let t = 0; t < vertCount; t += 3) {
                        for (let e = 0; e < 3; e++) {
                            const a = t + e, b = t + (e + 1) % 3;
                            const ua = indexToUnique[a], ub = indexToUnique[b];
                            const key = ua < ub ? `${ua}|${ub}` : `${ub}|${ua}`;
                            let bucket = edgeMap.get(key);
                            if (!bucket) { bucket = { a, b, tris: [] }; edgeMap.set(key, bucket); }
                            bucket.tris.push(t / 3);
                        }
                    }

                    const COPLANAR_EPS = 0.9995;
                    const silhouetteEdges = [];
                    for (const { a, b, tris } of edgeMap.values()) {
                        let isCrease = tris.length === 1;
                        for (let i = 0; i < tris.length && !isCrease; i++) {
                            for (let j = i + 1; j < tris.length && !isCrease; j++) {
                                if (Math.abs(triNormals[tris[i]].dot(triNormals[tris[j]])) < COPLANAR_EPS) isCrease = true;
                            }
                        }
                        if (isCrease) silhouetteEdges.push([a, b]);
                    }

                    const tmpMatrix = new THREE.Matrix4();
                    const tmpScale = new THREE.Vector3(1, 1, 1);
                    const tmpVec = new THREE.Vector3();
                    const frames = [];
                    for (const { position, quaternion } of savedCarPositionArray) {
                        if (!(position instanceof THREE.Vector3)) continue;
                        tmpMatrix.compose(position, quaternion, tmpScale);
                        const verts = new Float32Array(flatVerts.length);
                        for (let i = 0; i < vertCount; i++) {
                            tmpVec.set(flatVerts[i*3], flatVerts[i*3+1] + VisualCar.massOffset, flatVerts[i*3+2]).applyMatrix4(tmpMatrix);
                            verts[i*3] = tmpVec.x; verts[i*3+1] = tmpVec.y; verts[i*3+2] = tmpVec.z;
                        }
                        frames.push(verts);
                    }
                    if (frames.length < 2) return;

                    const push = (arr, frame, idx) => arr.push(frame[idx*3], frame[idx*3+1], frame[idx*3+2]);

                    const tubePositions = [];
                    const linePositions = [];
                    for (let i = 0; i < frames.length; i++) {
                        const A = frames[i];
                        for (const [a, b] of silhouetteEdges) {
                            push(linePositions, A, a);
                            push(linePositions, A, b);
                        }
                        if (i === frames.length - 1) break;
                        const B = frames[i + 1];
                        for (const [a, b] of silhouetteEdges) {
                            push(tubePositions, A, a); push(tubePositions, A, b); push(tubePositions, B, b);
                            push(tubePositions, A, a); push(tubePositions, B, b); push(tubePositions, B, a);
                        }
                    }

                    const tubeGeom = new THREE.BufferGeometry();
                    tubeGeom.setAttribute("position", new THREE.Float32BufferAttribute(tubePositions, 3));
                    carTrailGroup.add(new THREE.Mesh(tubeGeom, new THREE.MeshBasicMaterial({
                        color: 0xffffff, transparent: true, opacity: 0.2,
                        side: THREE.DoubleSide, depthWrite: false,
                    })));

                    const lineGeom = new THREE.BufferGeometry();
                    lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
                    carTrailGroup.add(new THREE.LineSegments(lineGeom, new THREE.LineBasicMaterial({
                        color: 0x000000, transparent: true, opacity: 0.5, depthWrite: false,
                    })));
                } else {
                    const baseGeom = new THREE.BufferGeometry();
                    baseGeom.setAttribute("position", new THREE.Float32BufferAttribute(flatVerts, 3));
                    const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
                    for (const { position, quaternion } of savedCarPositionArray) {
                        if (!(position instanceof THREE.Vector3)) continue;
                        const m = new THREE.Mesh(baseGeom, material);
                        m.position.copy(position);
                        m.quaternion.copy(quaternion);
                        carTrailGroup.add(m);
                    }
                }
                
                carTrailGroup.visible = this.carTrailVisible;
                get(this, editor_renderer, "f").scene.add(carTrailGroup);
                this.carTrailGroup = carTrailGroup;
            }

            disposeCarTrail() {
                if (!this.carTrailGroup) return;
                this.carTrailGroup.traverse(obj => {
                    if (obj.geometry) obj.geometry.dispose();
                    if (obj.material) {
                        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
                        for (const mat of mats) mat.dispose();
                    }
                });
                get(this, editor_renderer, "f").scene.remove(this.carTrailGroup);
                this.carTrailGroup = null;
            }
            getTrackMetadata() {
                return {
                    name: get(this, editor_trackName, "f") ?? get(this, editor_localization, "f").get("Unnamed Track"),
                    author: get(this, editor_trackAuthor, "f"),
                    lastModified: get(this, editor_lastModified, "f")
                }
            }
            setTestCallback(t) {
                set(this, editor_testCallback, t, "f")
            }
            enable() {
                set(this, editor_isActive, !0, "f"),
                1 == get(this, editor_partEntries, "f").length && get(this, Ft, "m", initPartPalette).call(this),
                get(this, editor_checkpointLabels3D, "f")?.dispose(),
                set(this, editor_checkpointLabels3D, new N(get(this, editor_renderer, "f")), "f"),
                get(this, editor_checkpointLabels3D, "f").refresh(get(this, editor_track, "f")),
                get(this, editor_sideToolbar, "f").show(),
                get(this, editor_containerElement, "f").className = "editor-ui"
            }
            disable() {
                set(this, editor_isActive, !1, "f"),
                get(this, editor_previewGroup, "f").visible = !1,
                set(this, editor_isCopyMode, !1, "f"),
                set(this, editor_isCutMode, !1, "f"),
                set(this, editor_selectionStart, null, "f"),
                get(this, Ft, "m", updateSelectionBoxVisual).call(this),
                get(this, editor_checkpointLabels3D, "f")?.dispose(),
                get(this, editor_containerElement, "f").className = "hidden",
                get(this, editor_helpUI, "f")?.dispose(),
                set(this, editor_helpUI, null, "f"),
                get(this, editor_exportUI, "f").hide(),
                get(this, editor_sideToolbar, "f").hide(),
                get(this, editor_trackSettingsUI, "f")?.dispose(),
                set(this, editor_trackSettingsUI, null, "f")
            }
            isEnabled() {
                return get(this, editor_isActive, "f")
            }
            resetView(t, e, n) {
                set(this, Ft, e, "a", setHeight);
                const s = new THREE.Vector3(t * Track.A.partSize,e * Track.A.partSize,n * Track.A.partSize);
                get(this, editor_cameraRig, "f").position.copy(s).add(new THREE.Vector3(40,40,-40)),
                get(this, editor_orbitControls, "f").target.copy(s),
                get(this, editor_orbitControls, "f").update()
            }
            get camera() {
                return get(this, editor_cameraRig, "f")
            }
            update(t) {
                if (get(this, Ft, "m", updateKeyboardCamera).call(this, t),
                get(this, editor_orbitControls, "f").enabled = get(this, Ft, "m", isKeyboardInputActive).call(this),
                get(this, editor_isActive, "f")) {
                    if (get(this, editor_cameraRig, "f").position.y < .499 && (get(this, editor_cameraRig, "f").position.y = .5,
                    get(this, editor_orbitControls, "f").update()),
                    get(this, Ft, "m", updateSelectionBoxVisual).call(this),
                    set(this, editor_cursorGridPos, get(this, Ft, "m", getCursorGridPosition).call(this), "f"),
                    null != get(this, editor_cursorGridPos, "f")) {
                        const t = TrackPartTransform.rotationAndAxisToQuaternion(get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f"))
                          , e = new THREE.Vector3(get(this, editor_cursorGridPos, "f").x * Track.A.partSize,get(this, editor_cursorGridPos, "f").y * Track.A.partSize,get(this, editor_cursorGridPos, "f").z * Track.A.partSize);
                        get(this, editor_previewGroup, "f").position.copy(e),
                        get(this, editor_previewGroup, "f").quaternion.copy(t),
                        get(this, editor_previewGroup, "f").visible = !0
                    } else
                        get(this, editor_previewGroup, "f").visible = !1;
                    const t = get(this, editor_cursorGridPos, "f");
                    if (null != t && null != get(this, editor_activePlacement, "f")) {
                        if (null == get(this, editor_lastOverlapCheckPos, "f") || get(this, editor_lastOverlapCheckPos, "f").x != t.x || get(this, editor_lastOverlapCheckPos, "f").y != t.y || get(this, editor_lastOverlapCheckPos, "f").z != t.z) {
                            let e;
                            set(this, editor_lastOverlapCheckPos, t, "f"),
                            e = !get(this, editor_isDeleteMode, "f") && get(this, Ft, "m", hasOverlappingParts).call(this, t, get(this, editor_activePlacement, "f").tiles),
                            e ? (get(this, editor_ghostMaterial, "f").color.set(12303104),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(12303104)) : (get(this, editor_ghostMaterial, "f").color.set(187),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(187))
                        }
                    } else if (null != t && null != get(this, editor_selectedPartIndex, "f")) {
                        const e = get(this, editor_partEntries, "f")[get(this, editor_selectedPartIndex, "f")]
                          , n = get(this, Ft, "m", findOverlappingParts).call(this, t, e.tiles);
                        if (null == e.id || get(this, editor_isDeleteKeyHeld, "f"))
                            n.length > 0 ? (get(this, editor_ghostMaterial, "f").color.set(12255232),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(12255232)) : (get(this, editor_ghostMaterial, "f").color.set(12263970),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(12263970));
                        else {
                            let s, o;
                            if (get(this, editor_isDeleteMode, "f"))
                                s = n.some(( ({parts: n}) => n.some((n => n.id == e.id && n.x == t.x && n.y == t.y && n.z == t.z && n.rotation == get(this, editor_currentRotation, "f") && n.rotationAxis == get(this, editor_currentAxis, "f"))))),
                                o = !1;
                            else {
                                s = !1;
                                for (const {parts: a} of n)
                                    for (const n of a) {
                                        if (!get(this, editor_partRegistry, "f").isPartCombinationAllowed({
                                            id: e.id,
                                            x: t.x,
                                            y: t.y,
                                            z: t.z,
                                            rotation: get(this, editor_currentRotation, "f"),
                                            rotationAxis: get(this, editor_currentAxis, "f")
                                        }, {
                                            id: n.id,
                                            x: n.x,
                                            y: n.y,
                                            z: n.z,
                                            rotation: n.rotation,
                                            rotationAxis: n.rotationAxis
                                        })) {
                                            s = !0;
                                            break
                                        }
                                        o = !0
                                    }
                            }
                            s ? (get(this, editor_ghostMaterial, "f").color.set(12303104),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(12303104)) : o ? (get(this, editor_ghostMaterial, "f").color.set(48059),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(48059)) : (get(this, editor_ghostMaterial, "f").color.set(187),
                            get(this, editor_tileIndicatorMaterial, "f").color.set(187))
                        }
                        const s = []
                          , o = [];
                        if (get(this, editor_isDeleteKeyHeld, "f")) {
                            if (null == get(this, editor_lastDeletion, "f") || get(this, editor_lastDeletion, "f").x != t.x || get(this, editor_lastDeletion, "f").y != t.y || get(this, editor_lastDeletion, "f").z != t.z) {
                                let o = null;
                                for (const {parts: s} of n) {
                                    for (const n of s)
                                        if (n.id == e.id && n.x == t.x && n.y == t.y && n.z == t.z && n.rotation == get(this, editor_currentRotation, "f") && n.rotationAxis == get(this, editor_currentAxis, "f")) {
                                            o = [n];
                                            break
                                        }
                                    if (null != o)
                                        break
                                }
                                get(this, Ft, "m", deletePartsAndRecord).call(this, o ?? n.flatMap(( ({parts: t}) => t)), s),
                                set(this, editor_lastDeletion, {
                                    x: t.x,
                                    y: t.y,
                                    z: t.z
                                }, "f")
                            }
                        } else if (get(this, editor_isLeftMouseDown, "f") || get(this, editor_isTapPending, "f")) {
                            if (null == e.id)
                                null != get(this, editor_lastDeletion, "f") && get(this, editor_lastDeletion, "f").x == t.x && get(this, editor_lastDeletion, "f").y == t.y && get(this, editor_lastDeletion, "f").z == t.z || (get(this, Ft, "m", deletePartsAndRecord).call(this, n.flatMap(( ({parts: t}) => t)), s),
                                set(this, editor_lastDeletion, {
                                    x: t.x,
                                    y: t.y,
                                    z: t.z
                                }, "f"));
                            else if (null == get(this, editor_lastPlacement, "f") || get(this, editor_lastPlacement, "f").x != t.x || get(this, editor_lastPlacement, "f").y != t.y || get(this, editor_lastPlacement, "f").z != t.z || get(this, editor_lastPlacement, "f").id != e.id || get(this, editor_lastPlacement, "f").rotation != get(this, editor_currentRotation, "f") || get(this, editor_lastPlacement, "f").rotationAxis != get(this, editor_currentAxis, "f")) {
                                if (get(this, editor_isDeleteMode, "f"))
                                    for (const {parts: o} of n) {
                                        const n = o.find((n => n.id == e.id && n.x == t.x && n.y == t.y && n.z == t.z && n.rotation == get(this, editor_currentRotation, "f") && n.rotationAxis == get(this, editor_currentAxis, "f")));
                                        null != n && null != get(this, editor_track, "f").deleteSpecificPart(n.id, n.x, n.y, n.z, n.rotation, n.rotationAxis) && s.push({
                                            id: n.id,
                                            x: n.x,
                                            y: n.y,
                                            z: n.z,
                                            rotation: n.rotation,
                                            rotationAxis: n.rotationAxis,
                                            color: n.color,
                                            checkpointOrder: n.checkpointOrder,
                                            startOrder: n.startOrder
                                        })
                                    }
                                else
                                    for (const {parts: o} of n)
                                        for (const n of o)
                                            get(this, editor_partRegistry, "f").isPartCombinationAllowed({
                                                id: e.id,
                                                x: t.x,
                                                y: t.y,
                                                z: t.z,
                                                rotation: get(this, editor_currentRotation, "f"),
                                                rotationAxis: get(this, editor_currentAxis, "f")
                                            }, {
                                                id: n.id,
                                                x: n.x,
                                                y: n.y,
                                                z: n.z,
                                                rotation: n.rotation,
                                                rotationAxis: n.rotationAxis
                                            }) || null != get(this, editor_track, "f").deleteSpecificPart(n.id, n.x, n.y, n.z, n.rotation, n.rotationAxis) && s.push({
                                                id: n.id,
                                                x: n.x,
                                                y: n.y,
                                                z: n.z,
                                                rotation: n.rotation,
                                                rotationAxis: n.rotationAxis,
                                                color: n.color,
                                                checkpointOrder: n.checkpointOrder,
                                                startOrder: n.startOrder
                                            });
                                let a = null;
                                e.isCheckpoint && (a = get(this, editor_checkpointOrderUI, "f").checkpointOrder);
                                let r = null;
                                e.isStart && (r = get(this, editor_track, "f").getNextStartOrder()),
                                get(this, editor_track, "f").setPart(t.x, t.y, t.z, e.id, get(this, editor_currentRotation, "f"), get(this, editor_currentAxis, "f"), get(this, Ft, "m", getEffectiveColor).call(this), a, r),
                                get(this, Ft, "m", playEditSound).call(this),
                                o.push({
                                    id: e.id,
                                    x: t.x,
                                    y: t.y,
                                    z: t.z,
                                    rotation: get(this, editor_currentRotation, "f"),
                                    rotationAxis: get(this, editor_currentAxis, "f"),
                                    color: get(this, Ft, "m", getEffectiveColor).call(this),
                                    checkpointOrder: a,
                                    startOrder: r
                                }),
                                set(this, editor_lastPlacement, {
                                    x: t.x,
                                    y: t.y,
                                    z: t.z,
                                    id: e.id,
                                    rotation: get(this, editor_currentRotation, "f"),
                                    rotationAxis: get(this, editor_currentAxis, "f")
                                }, "f"),
                                get(this, Ft, "m", refreshTrackAfterEdit).call(this)
                            }
                            set(this, editor_isTapPending, !1, "f")
                        } else
                            set(this, editor_lastPlacement, null, "f"),
                            set(this, editor_lastDeletion, null, "f");
                        (s.length > 0 || o.length > 0) && (get(this, editor_undoStack, "f").push({
                            removed: s,
                            added: o
                        }),
                        get(this, editor_redoStack, "f").length = 0,
                        get(this, editor_undoButton, "f").disabled = 0 == get(this, editor_undoStack, "f").length,
                        get(this, editor_redoButton, "f").disabled = 0 == get(this, editor_redoStack, "f").length),
                        get(this, editor_previewGroup, "f").visible = !0
                    } else
                        get(this, editor_previewGroup, "f").visible = !1,
                        set(this, editor_lastPlacement, null, "f"),
                        set(this, editor_lastDeletion, null, "f")
                }
            }
        }
        ;
        var scene_track, scene_waterRenderer, scene_skyRenderer, scene_audioManager, scene_renderer, scene_editor, Gi = n(5387);
        scene_track = new WeakMap,
        scene_waterRenderer = new WeakMap,
        scene_skyRenderer = new WeakMap,
        scene_audioManager = new WeakMap,
        scene_renderer = new WeakMap,
        scene_editor = new WeakMap;
        const EditorScene = class {
            constructor(t, e, n, s, o, a, r, h, l, c, d, g, f, p, u, m, loadIntoTrack) {
                scene_track.set(this, void 0),
                scene_waterRenderer.set(this, void 0),
                scene_skyRenderer.set(this, void 0),
                scene_audioManager.set(this, void 0),
                scene_renderer.set(this, void 0),
                scene_editor.set(this, void 0),
                set(this, scene_track, t, "f"),
                set(this, scene_waterRenderer, s, "f"),
                set(this, scene_skyRenderer, o, "f"),
                set(this, scene_audioManager, r, "f"),
                set(this, scene_renderer, h, "f"),
                set(this, scene_editor, new TrackEditor(a,r,h,c,t,e,n,d,g,f,p,u,l,m), "f"),
                get(this, scene_editor, "f").enable(),
                get(this, scene_track, "f").clear(),
                get(this, scene_track, "f").setPart(0, 0, 0, Part.Start, 0, TrackPartRotationAxis.YPositive, TrackPartColorId.Default, null, 0),
                get(this, scene_track, "f").generateMeshes(),
                h.setCamera(get(this, scene_editor, "f").camera),
                get(this, scene_editor, "f").setTestCallback(( () => {
                    get(this, scene_editor, "f").disable();
                    const t = get(this, scene_editor, "f").getTrackMetadata();
                    loadIntoTrack(t, get(this, scene_track, "f").getTrackData(), ( (savedCarPositionArray) => {
                        get(this, scene_editor, "f").enable(),
                        h.setCamera(get(this, scene_editor, "f").camera);
                        get(this, scene_editor, "f").loadCarTrail(savedCarPositionArray);
                    }
                    ))
                }
                ))
            }
            dispose() {
                get(this, scene_editor, "f").dispose(),
                get(this, scene_track, "f").clear()
            }
            update(t) {
                Gi.ip() || get(this, scene_editor, "f").update(t),
                get(this, scene_waterRenderer, "f").update(get(this, scene_track, "f")),
                get(this, scene_skyRenderer, "f").update(t, get(this, scene_renderer, "f").camera, get(this, scene_track, "f").sunDirection),
                get(this, scene_audioManager, "f").update(t, !1, get(this, scene_renderer, "f")),
                get(this, scene_renderer, "f").update(get(this, scene_track, "f").sunDirection)
            }
            static async initResources() {
                await N.initResources()
            }
        }
    }
    ,
    4512: (t, e, n) => { // trackSettingsStyles
        n.d(e, {
            A: () => r
        });
        var i = n(1601)
          , s = n.n(i)
          , o = n(6314)
          , a = n.n(o)()(s());
        a.push([t.id, '.editor-track-settings-ui > .background {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(20, 20, 30, 0.5);\n\tpointer-events: auto;\n}\n\n.editor-track-settings-ui > .container {\n\tposition: absolute;\n\tleft: calc(50% - 600px / 2);\n\ttop: 0;\n\tz-index: 2;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\twidth: 600px;\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n.editor-track-settings-ui > .container > h1 {\n\tmargin: 10px;\n\tpadding: 0;\n\tfont-weight: normal;\n\tfont-size: 38px;\n\ttext-align: center;\n\tcolor: var(--text-color);\n}\n\n.editor-track-settings-ui > .container > .content {\n\tflex-grow: 1;\n\tbackground-color: var(--surface-secondary-color);\n\toverflow-y: auto;\n\tpointer-events: auto;\n}\n\n.editor-track-settings-ui > .container > .content > .setting {\n\tmargin: 20px;\n\tpadding: 20px;\n\tbackground-color: var(--surface-color);\n\toutline: 2px solid transparent;\n\ttransition: outline 0.25s ease-in-out;\n}\n\n.editor-track-settings-ui > .container > .content > .setting.error {\n\toutline: 2px solid #e34c4c;\n}\n\n.editor-track-settings-ui > .container > .content > .setting > .title {\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 30px;\n\tcolor: var(--text-color);\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="text"] {\n\twidth: calc(100% - 20px);\n\tfont-weight: normal;\n\tfont-size: 30px;\n}\n\n.editor-track-settings-ui > .container > .content > .setting > .environment-button {\n\tdisplay: inline-block;\n\tmargin: 10px 0;\n\tpadding: 10px;\n\twidth: calc(100% / 3);\n\tcolor: var(--text-color);\n\tfont-size: 27px;\n}\n.editor-track-settings-ui > .container > .content > .setting > .environment-button.selected {\n\tbackground-color: var(--button-hover-color);\n}\n.editor-track-settings-ui > .container > .content > .setting > .environment-button > img {\n\tmargin: 0;\n\tpadding: 10px 30px;\n\twidth: calc(100% - 2 * 30px);\n\taspect-ratio: 1 / 1;\n\tpointer-events: none;\n}\n\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 64px;\n\t-webkit-appearance: none;\n\tappearance: none;\n\tbackground: transparent;\n\tcursor: pointer;\n\taccent-color: var(--text-color);\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-webkit-slider-runnable-track {\n\tbackground-color: var(--surface-tertiary-color);\n\theight: 10px;\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-moz-range-track {\n\tbackground-color: var(--surface-tertiary-color);\n\theight: 10px;\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\tborder-radius: 0;\n\tbackground: var(--text-color);\n\twidth: 32px;\n\theight: 32px;\n\tmargin: -13px 0 0 0;\n\tborder: 4px solid var(--button-color);\n\toutline: 2px solid var(--text-color);\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-webkit-slider-thumb:hover {\n\tborder: 4px solid var(--button-hover-color);\n}\n@media (hover: none) {\n\t.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-webkit-slider-thumb:hover {\n\t\tborder: 4px solid var(--button-color);\n\t}\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-webkit-slider-thumb:active {\n\tborder: 4px solid var(--button-active-color);\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-moz-range-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\tborder-radius: 0;\n\tbackground: var(--text-color);\n\twidth: 24px;\n\theight: 24px;\n\tborder: 4px solid var(--button-color);\n\toutline: 2px solid var(--text-color);\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-moz-range-thumb:hover {\n\tborder: 4px solid var(--button-hover-color);\n}\n@media (hover: none) {\n\t.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-moz-range-thumb:hover {\n\t\tborder: 4px solid var(--button-color);\n\t}\n}\n.editor-track-settings-ui > .container > .content > .setting > input[type="range"]::-moz-range-thumb:active {\n\tborder: 4px solid var(--button-active-color);\n}\n\n\n.editor-track-settings-ui > .container > .button-wrapper > button {\n\tmargin: 10px;\n}\n\n.editor-track-settings-ui > .container > .button-wrapper > button:not(:first-child) {\n\tfloat: right;\n}\n', ""]);
        const r = a
    }
    ,
    5298: (t, e, n) => { // heightSelectorStyles
        n.d(e, {
            A: () => r
        });
        var i = n(1601)
          , s = n.n(i)
          , o = n(6314)
          , a = n.n(o)()(s());
        a.push([t.id, ".editor-height-selector-ui {\n\tposition: absolute;\n\tleft: var(--safe-area-left);\n\tbottom: 0;\n\tpointer-events: auto;\n}\n\n.editor-height-selector-ui > .buttons {\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n}\n.editor-height-selector-ui > .buttons > button {\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n\tbackground-color: var(--button-color);\n\tcursor: pointer;\n}\n.editor-height-selector-ui > .buttons > button:hover {\n\tbackground-color: var(--button-hover-color);\n}\n.editor-height-selector-ui > .buttons > button:active {\n\tbackground-color: var(--button-active-color);\n}\n@media (hover: none) {\n\t.editor-height-selector-ui > .buttons > button:hover {\n\t\tbackground-color: var(--button-color);\n\t}\n}\n\n.editor-height-selector-ui > .buttons > button > img { \n\tmargin: 0;\n\tpadding: 0 6px;\n\twidth: 20px;\n\theight: 20px;\n\tvertical-align: bottom;\n\tpointer-events: none;\n}\n.editor-height-selector-ui.touch > .buttons > button > img {\n\tpadding: 24px;\n\twidth: 40px;\n\theight: 40px;\n}\n\n.editor-height-selector-ui > p {\n\tmargin: 0;\n\tpadding: 0 10px;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tline-height: 40px;\n\tmin-width: 140px;\n\tfont-size: 26px;\n\ttext-align: center;\n\tbackground-color: var(--surface-transparent-color);\n\tcolor: var(--text-color);\n}\n.editor-height-selector-ui.touch > p {\n\tline-height: calc((40px + 2 * 24px) * 2);\n}\n", ""]);
        const r = a
    }
    ,
    6057: (t, e, n) => { // editorStyles
        n.d(e, {
            A: () => r
        });
        var i = n(1601)
          , s = n.n(i)
          , o = n(6314)
          , a = n.n(o)()(s());
        a.push([t.id, ".editor-ui {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.editor-ui > .safe-area-left {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: var(--safe-area-left);\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n.editor-ui > .safe-area-right {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: var(--safe-area-right);\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n.editor-ui > .top {\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0 var(--safe-area-right) 0 var(--safe-area-left);\n\tmargin-bottom: -1px;\n}\n\n.editor-ui > .top > .button-bar {\n\tdisplay: flex;\n\tmargin: 0;\n\tpadding: 0 8px;\n\theight: 68px;\n\tbackground-color: var(--surface-color);\n\twhite-space: nowrap;\n\tpointer-events: auto;\n}\n.editor-ui > .top > .button-bar > .button {\n\tmargin: 8px 0;\n\tmin-width: 0;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.editor-ui > .top > .track-settings-container {\n\tdisplay: inline-block;\n\tmargin: -1px 0 0 0;\n\tpadding: 6px 7px;\n\tclip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);\n\tfont-size: 30px;\n\tcolor: var(--text-color);\n\tbackground: var(--surface-secondary-color);\n\tpointer-events: auto;\n}\n.editor-ui > .top > .track-settings-container > button {\n\ttext-align: left;\n\tmin-width: 267px;\n\tmax-width: 450px;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n\n.editor-ui > .side {\n\tposition: absolute;\n\ttop: 68px;\n\tright: 0;\n\tmargin: 0;\n\tpadding: 0 var(--safe-area-right) 0 0;\n\theight: calc(100% - 68px);\n\tdisplay: flex;\n\talign-items: end;\n}\n\n.editor-ui > .side > .container {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: space-between;\n\talign-items: end;\n}\n\n.editor-ui > .side > .container > .mini-toolbar-container {\n\tdisplay: flex;\n\tbackground-color: var(--surface-transparent-color);\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%);\n\tpointer-events: auto;\n}\n.editor-ui > .side > .container > .mini-toolbar-container > button {\n\tmargin: 6px 0;\n\tclip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%);\n}\n.editor-ui > .side > .container > .mini-toolbar-container > button:first-of-type {\n\tmargin-left: 7px;\n}\n.editor-ui > .side > .container > .mini-toolbar-container > button:last-of-type {\n\tmargin-right: -2px;\n}\n\n.editor-ui > .side > .container > .mini-toolbar-container > .undo-container {\n\tmargin: 0;\n\tpadding: 6px 7px;\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%);\n\tbackground: var(--surface-secondary-color);\n}\n\n.editor-ui > .side > .container > .mini-toolbar-container > .undo-container > button:first-of-type {\n\tmargin-right: 3px;\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 8px 100%);\n}\n.editor-ui > .side > .container > .mini-toolbar-container > .undo-container > button:last-of-type {\n\tmargin-left: 3px;\n\tclip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%);\n}\n\n.editor-ui > .side > .side-panel {\n\theight: 100%;\n\tbackground-color: var(--surface-secondary-color);\n\tpointer-events: auto;\n}\n\n.editor-ui > .side > .side-panel > .category-panel, .editor-ui > .side > .side-panel > .part-panel, .editor-ui > .side > .side-panel > .color-panel {\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tpadding: 2px 2px 0 2px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\tscrollbar-width: thin;\n}\n.editor-ui > .side > .side-panel > .category-panel > button > img {\n\twidth: 96px;\n\theight: 96px;\n}\n.editor-ui > .side > .side-panel > .part-panel.hidden {\n\tdisplay: none;\n}\n.editor-ui > .side > .side-panel > .color-panel.hidden {\n\tdisplay: none;\n}\n\n.editor-ui > .side > .side-panel button {\n\tdisplay: block;\n\tmargin: 0 0 2px 0;\n\tpadding: 5px;\n\tbackground-color: var(--button-color);\n\tborder: 2px solid rgb(38, 31, 88);\n\tcursor: pointer;\n}\n.editor-ui > .side > .side-panel button:hover {\n\tbackground-color: var(--button-hover-color);\n}\n@media (hover: none) {\n\t.editor-ui > .side > .side-panel button:hover {\n\t\tbackground-color: var(--button-color);\n\t}\n}\n.editor-ui > .side > .side-panel button:active {\n\tbackground-color: var(--button-active-color);\n}\n.editor-ui > .side > .side-panel button.selected {\n\tbackground-color: var(--button-hover-color);\n\tbox-shadow: inset 0 0 5px #fff;\n\tborder: 2px solid #fff;\n}\n.editor-ui > .side > .side-panel button > img {\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 64px;\n\theight: 64px;\n\t-webkit-filter: drop-shadow(0 0 2px #000);\n\tfilter: drop-shadow(0 0 2px #000);\n\tpointer-events: none;\n\ttransition: opacity 0.25s ease-out;\n}\n.editor-ui > .side > .side-panel button > img.loading {\n\topacity: 0;\n\ttransition: none;\n}\n\n.editor-ui > .message {\n\tmargin: 10px 10px 10px calc(10px + var(--safe-area-left));\n\tpadding: 0;\n\tposition: absolute;\n\tfont-size: 30px;\n\tcolor: #ff9696;\n\ttext-shadow: 0 0 5px #000;\n\tpointer-events: none;\n\n\tleft: -10px;\n\topacity: 0;\n}\n.editor-ui > .message.green {\n\tcolor: #96ff96;\n}\n.editor-ui > .message.show {\n\tleft: 0;\n\topacity: 1;\n\ttransition: opacity 0.25s ease-in-out, left 0.25s ease-in-out;\n}\n.editor-ui > .message.hide {\n\tleft: 0;\n\topacity: 0;\n\ttransition: opacity 0.25s ease-in-out, left 0.25s ease-in-out;\n}\n", ""]);
        const r = a
    }
    ,
    7296: (t, e, n) => { // checkpointOrderStyles
        n.d(e, {
            A: () => r
        });
        var i = n(1601)
          , s = n.n(i)
          , o = n(6314)
          , a = n.n(o)()(s());
        a.push([t.id, ".editor-checkpoint-order-ui {\n\tpointer-events: auto;\n}\n\n.editor-checkpoint-order-ui > .buttons {\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n}\n.editor-checkpoint-order-ui > .buttons > button {\n\tdisplay: block;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n\tbackground-color: var(--button-color);\n\tcursor: pointer;\n}\n.editor-checkpoint-order-ui > .buttons > button:hover {\n\tbackground-color: var(--button-hover-color);\n}\n.editor-checkpoint-order-ui > .buttons > button:active {\n\tbackground-color: var(--button-active-color);\n}\n@media (hover: none) {\n\t.editor-checkpoint-order-ui > .buttons > button:hover {\n\t\tbackground-color: var(--button-color);\n\t}\n}\n\n.editor-checkpoint-order-ui > .buttons > button > img {\n\tmargin: 0;\n\tpadding: 0 6px;\n\twidth: 20px;\n\theight: 20px;\n\tvertical-align: bottom;\n\tpointer-events: none;\n}\n.editor-checkpoint-order-ui.touch > .buttons > button > img {\n\tpadding: 24px;\n\twidth: 40px;\n\theight: 40px;\n}\n\n.editor-checkpoint-order-ui > p {\n\tmargin: 0;\n\tpadding: 0 10px;\n\tdisplay: inline-block;\n\tvertical-align: bottom;\n\tline-height: 40px;\n\tmin-width: 275px;\n\tfont-size: 26px;\n\ttext-align: center;\n\tbackground-color: var(--surface-transparent-color);\n\tcolor: var(--text-color);\n}\n.editor-checkpoint-order-ui.touch > p {\n\tline-height: calc((40px + 2 * 24px) * 2);\n}\n", ""]);
        const r = a
    }
    ,
    9242: (t, e, n) => { // editorHelpStyles
        n.d(e, {
            A: () => r
        });
        var i = n(1601)
          , s = n.n(i)
          , o = n(6314)
          , a = n.n(o)()(s());
        a.push([t.id, ".editor-help-ui > .background {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(20, 20, 30, 0.5);\n\tpointer-events: auto;\n}\n\n.editor-help-ui > .container {\n\tposition: absolute;\n\tleft: calc(50% - 80% / 2);\n\ttop: 0;\n\tz-index: 2;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\twidth: 80%;\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n.editor-help-ui > .container > h1 {\n\tmargin: 10px;\n\tpadding: 0;\n\tfont-weight: normal;\n\tfont-size: 38px;\n\ttext-align: center;\n\tcolor: var(--text-color);\n}\n\n.editor-help-ui > .container > .content {\n\tflex-grow: 1;\n\tpadding: 40px;\n\tbackground-color: var(--surface-secondary-color);\n\toverflow-y: auto;\n\tpointer-events: auto;\n}\n\n.editor-help-ui > .container > .content > h2 {\n\tmargin: 32px 0 16px 0;\n\tpadding: 0;\n\tfont-weight: normal;\n\tfont-size: 30px;\n\tcolor: var(--text-color);\n\tborder-bottom: 2px solid var(--text-color);\n}\n.editor-help-ui > .container > .content > h2:first-of-type {\n\tmargin-top: 0;\n}\n\n.editor-help-ui > .container > .content > p {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 20px;\n\tcolor: var(--text-color);\n\twhite-space: pre-wrap;\n}\n\n.editor-help-ui > .container > .content > .part-images {\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n\n.editor-help-ui > .container > .content > .part-images > div {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.editor-help-ui > .container > .content > .part-images > div > img {\n\twidth: 128px;\n\theight: 128px;\n\tfilter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.4));\n\tpointer-events: none;\n\ttransition: opacity 0.25s ease-out;\n}\n.editor-help-ui > .container > .content > .part-images > div > img.loading {\n\topacity: 0;\n}\n\n.editor-help-ui > .container > .content > .part-images > div > span {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-size: 20px;\n\tcolor: var(--text-color);\n\ttext-align: center;\n}\n\n.editor-help-ui > .container > .button-wrapper > button {\n\tmargin: 10px;\n}\n", ""]);
        const r = a
    }
}]);
