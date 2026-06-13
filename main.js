( () => {
    function t() {
        let t;
        void 0 === D ? (t = "",
        k.querySelectorAll("img").forEach(t => {
            t.style.display = "none"
        }
        )) : (t = K[D].mapName,
        k.querySelectorAll("img").forEach(t => {
            t.style.display = "block"
        }
        )),
        E.src = t,
        E.style.transform = `rotate(${R}deg)`,
        u.style.transform = `rotate(${R}deg)`
    }
    function e() {
        void 0 !== D && (R = 0,
        t())
    }
    function i() {
        clearTimeout(kt),
        Et = !0,
        kt = setTimeout( () => {
            ut || (Et = !1)
        }
        , 100)
    }
    function s() {
        vt = setTimeout(s, 1e3 / 60),
        Et && (I.clearRect(0, 0, B.width, B.height),
        N.clearRect(0, 0, A.width, A.height),
        I.globalAlpha = 1,
        I.fillStyle = "#5e7136",
        I.fillRect(40 * bt, 40 * bt, canvas.width - 40 * bt, canvas.height - 40 * bt),
        I.fillStyle = "#00fff2",
        N.textAlign = "center",
        N.font = `bold ${~~(12 * bt)}px Arial`,
        1 == yt ? P.forEach( ({x: t, y: e, itemIndex: i}) => {
            let s = i < 117 ? i % 13 : i - 104;
            if (!(s < 15))
                return;
            const n = t + 40
              , a = e + 40;
            N.globalAlpha = .7,
            N.beginPath(),
            N.lineWidth = 6 * bt * ft,
            N.strokeStyle = "#000000";
            const o = ([55, 55, 60, 60, 70, 60, 56, 60, 80, 60, 66, 60, 88, 64, 70][s] - 3) * ft;
            N.arc(n * bt, a * bt, o * bt, 0, 6.283),
            N.stroke(),
            N.beginPath(),
            N.lineWidth = 4 * bt * ft,
            N.strokeStyle = ["#C68A45", "#C68A45", "#C68A45", "#464347", "#E55C1E", "#FDD850", "#BBEFE0", "#F0E4D0", "#A8C636", "#B04DBD", "#329FA6", "#C68A45", "#C68A45", "#C68A45", "#C68A45"][s],
            N.arc(n * bt, a * bt, o * bt, 0, 6.283),
            N.stroke();
            const l = [, "Door", "Spike", , , , , , , , , "Mill", , "Boost", "Heal"][s];
            l && (N.lineWidth = 3,
            N.globalAlpha = 1,
            N.strokeStyle = "#000000",
            N.strokeText(l, n * bt, (a + 5) * bt),
            N.fillStyle = "#FFF",
            N.fillText(l, n * bt, (a + 5) * bt));
            const c = [80, 80, 87, 83, 87, 83, 81, 83, 88, 83, 86, 0, 99, null, 88][s];
            c && (I.beginPath(),
            I.arc(n * bt, a * bt, c * ft * bt, 0, 6.2832),
            I.fill())
        }
        ) : 2 == yt && P.forEach( ({x: t, y: e, itemIndex: i}) => {
            let s = i < 117 ? i % 13 : i - 104;
            if (!(s < 15))
                return;
            const n = t + 40
              , a = e + 40;
            N.globalAlpha = .7,
            N.beginPath(),
            N.lineWidth = 6 * bt * ft,
            N.strokeStyle = "#000000";
            const o = [0, 0, 0, 750, 650, 650, 650, 650, 650, 650, 650, 0, 0, 0][s] * ft;
            N.arc(n * bt, a * bt, o * bt, 0, 6.283),
            N.stroke(),
            N.beginPath(),
            N.lineWidth = 4 * bt * ft,
            N.strokeStyle = ["#C68A45", "#C68A45", "#C68A45", "#464347", "#E55C1E", "#FDD850", "#BBEFE0", "#F0E4D0", "#A8C636", "#B04DBD", "#329FA6", "#C68A45", "#C68A45", "#C68A45"][s],
            N.arc(n * bt, a * bt, o * bt, 0, 6.283),
            N.stroke()
        }
        ))
    }
    function n() {
        canvas3.height = canvas2.height = canvas.height = window.innerHeight * bt,
        canvas3.width = canvas2.width = canvas.width = window.innerWidth * bt
    }
    document.oncontextmenu = function() {
        return !1
    }
    ;
    class a {
        constructor(t, e, i) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.btnName = `mode_img/${t}-btn.png`,
            this.cursorName = `mode_img/${t}-cursor.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.addEventListener("mousedown", () => this.click()),
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            $.appendChild(this.$img)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
        click() {
            switch (a.removeActive(),
            o.removeActive(),
            this.$img.classList.add("active"),
            D = void 0,
            _ = void 0,
            R = 0,
            t(),
            this.name) {
            case "default":
                W = !1,
                u.src = "",
                p.style.cursor = "url(mode_img/default-cursor.png) 4 0, default";
                break;
            case "delete":
                W = !0,
                u.src = "",
                p.style.cursor = "url(mode_img/delete-cursor.png) 16 16, default"
            }
        }
        static removeActive() {
            z.forEach(t => t.$img.classList.remove("active")),
            p.style.cursor = "url(mode_img/default-cursor.png) 4 0, default"
        }
    }
    class o {
        constructor(t, e, i, s, n, a) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.btnIndex = s,
            this.protoName = n,
            this.colorName = a,
            this.btnName = `item_img/${t}-btn.png`,
            this.cursorName = `item_img/${t}-cursor.png`,
            this.mapName = `item_img/${t}-map.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.style.display = "block",
            this.$img.addEventListener("mousedown", () => this.click()),
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            v.appendChild(this.$img)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
        click() {
            _ = this.btnIndex,
            o.removeActive(),
            a.removeActive(),
            this.$img.classList.add("active"),
            D = this.index,
            R = 0,
            t(),
            W = !1,
            u.src = this.mapName
        }
        changeColor(t) {
            void 0 !== this.colorName && (this.colorName === t ? this.$img.style.display = "block" : this.$img.style.display = "none")
        }
        static changeColors(t) {
            o.removeActive(),
            K.forEach(e => e.changeColor(t))
        }
        static removeActive() {
            K.forEach(t => t.$img.classList.remove("active"))
        }
    }
    class l {
        constructor(t, e, i) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.btnName = `color_img/${t}-btn.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.addEventListener("mousedown", () => this.click()),
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            y.appendChild(this.$img)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
        click() {
            F = this.index,
            l.removeActive(),
            this.$img.classList.add("active"),
            o.changeColors(this.name),
            void 0 !== _ && (_ < 10 ? K[_ + 10 * F].click() : K[_ + 10 * (J.length - 1)].click())
        }
        static removeActive() {
            tt.forEach(t => t.$img.classList.remove("active"))
        }
    }
    class c {
        constructor(t, e, i) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.btnName = `biome_img/${t}-btn.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.addEventListener("mousedown", () => this.click()),
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            f.appendChild(this.$img)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
        click() {
            X = this.index,
            c.removeActive(),
            this.$img.classList.add("active"),
            this.changeBiome(),
            d.changeLogo()
        }
        changeBiome() {
            switch (this.name) {
            case "spring":
                p.style.background = "#545f33",
                g.style.background = "#5e7136";
                break;
            case "winter":
                p.style.background = "#af9f91",
                g.style.background = "#cfc2b2";
                break;
            case "darkness":
                p.style.background = "#2b2748",
                g.style.background = "#393361";
                break;
            case "desert":
                p.style.background = "#a47132",
                g.style.background = "#c18c46"
            }
        }
        static removeActive() {
            et.forEach(t => t.$img.classList.remove("active"))
        }
    }
    class h {
        constructor(t, e, i) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.btnName = `deg_img/${t}-btn.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.addEventListener("mousedown", () => this.click()),
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            w.appendChild(this.$img)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
        click() {
            if (void 0 !== D) {
                switch (this.name) {
                case "deg-left":
                    (R -= 15) < 0 && (R += 360);
                    break;
                case "deg-right":
                    (R += 15) >= 360 && (R -= 360)
                }
                t()
            }
        }
    }
    class r {
        constructor(t, e, i, s) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.url = s,
            this.btnName = `link_img/${t}-btn.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$a = document.createElement("a"),
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            this.$a.appendChild(this.$img),
            this.$a.href = this.url,
            this.$a.target = "_blank",
            x.appendChild(this.$a)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
    }
    class d {
        constructor(t, e, i) {
            this.name = t,
            this.tip = e,
            this.index = i,
            this.url = "https://taming.io/",
            this.btnName = `logo_img/${t}-btn.png`,
            this.setupBtn(),
            this.setupTip()
        }
        setupBtn() {
            this.$a = document.createElement("a"),
            this.$img = document.createElement("img"),
            this.$img.src = this.btnName,
            this.$img.addEventListener("mouseenter", () => this.enter()),
            this.$img.addEventListener("mouseleave", () => this.leave()),
            this.$a.appendChild(this.$img),
            this.$a.href = this.url,
            this.$a.target = "_blank",
            L.appendChild(this.$a)
        }
        setupTip() {
            this.$tip = document.createElement("div"),
            this.$tip.textContent = this.tip,
            this.$tip.style.width = "max-content",
            C.appendChild(this.$tip)
        }
        enter() {
            const t = this.$img.getBoundingClientRect();
            this.$tip.style.top = `${t.top}px`,
            this.$tip.classList.add("appear")
        }
        leave() {
            this.$tip.classList.remove("appear")
        }
        static changeLogo() {
            ot.forEach(t => {
                t.$img.style.display = "none"
            }
            ),
            ot[X].$img.style.display = "block"
        }
    }
    class m {
        constructor(t, e) {
            this.itemIndex = D,
            this.offsetX = 0,
            this.offsetY = 0,
            this.x = t,
            this.y = e,
            this.putItem()
        }
        putItem() {
            this.$img = document.createElement("img"),
            this.$img.src = K[this.itemIndex].mapName,
            this.$img.onload = ( () => {
                this.halfWidth = this.$img.width / 2,
                this.halfHeight = this.$img.height / 2,
                this.$img.style.left = `${this.x - this.halfWidth}px`,
                this.$img.style.top = `${this.y - this.halfHeight}px`
            }
            ),
            this.$img.style.transform = `rotate(${R}deg)`,
            document.documentElement.style.setProperty(`--${q[H]}`, `${R}deg`),
            this.$img.classList.add(q[H]),
            this.$img.style.display = "block",
            ++H >= q.length && (H = 0),
            g.appendChild(this.$img),
            this.$img.addEventListener("mousedown", t => {
                if (2 == t.button)
                    return;
                let e, i = 2500;
                if (P.forEach(s => {
                    let n = (s.x - t.clientX + 40) ** 2 + (s.y - t.clientY + 40) ** 2;
                    n < i && (i = n,
                    e = s)
                }
                ),
                e)
                    if (!0 === W)
                        e.deleteItem(),
                        xt.length > 0 && (wt = [],
                        xt = []);
                    else if (void 0 === D && !1 === M) {
                        if (xt.length > 0)
                            return;
                        e.startMovement(t),
                        M = !0,
                        Y = e
                    }
            }
            )
        }
        deleteItem() {
            if (!1 !== W) {
                for (let t = 0; t < P.length; t++)
                    if (P[t] === this) {
                        P.splice(t, 1);
                        break
                    }
                g.removeChild(this.$img)
            }
        }
        moveItem(t) {
            this.x = t.clientX + this.offsetX,
            this.y = t.clientY + this.offsetY,
            this.$img.style.top = `${this.y - this.halfHeight}px`,
            this.$img.style.left = `${this.x - this.halfWidth}px`
        }
        startMovement(t) {
            this.offsetX = this.x - t.clientX,
            this.offsetY = this.y - t.clientY
        }
    }
    const p = document.getElementById("map")
      , g = document.getElementById("map-in")
      , u = document.getElementById("map-cursor")
      , $ = document.getElementById("mode")
      , v = document.getElementById("item")
      , y = document.getElementById("color")
      , f = document.getElementById("biome")
      , k = document.querySelector(".deg-container")
      , b = document.getElementById("deg-dummy")
      , E = document.getElementById("deg-img")
      , w = document.getElementById("deg")
      , x = document.getElementById("link")
      , L = document.getElementById("logo")
      , C = document.getElementById("tooltip")
      , B = document.getElementById("canvas")
      , A = document.getElementById("canvas2")
      , I = B.getContext("2d")
      , N = A.getContext("2d")
      , T = document.getElementById("canvas3")
      , S = T.getContext("2d");
    let Y, D, _, F, X, R, W = !1, M = !1;
    const P = []
      , q = ["deg-1", "deg-2", "deg-3", "deg-4"];
    let H = 0;
    const j = ["default mode [D]", "delete mode [F]"]
      , z = [];
    ["default", "delete"].forEach( (t, e) => z.push(new a(t,j[e],e)));
    const J = ["wooden", "stone", "golden", "ruby", "amethyst", "sapphire", "amber", "diamond", "emerald"]
      , O = ["wall", "door", "spike", "turret", "fire-tower", "electric-tower", "ice-tower", "repair-tower", "plant-tower", "spectrum-tower", "water-tower", "windmill", "big-spike"]
      , Z = ["[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]", "[9]", "[0]", "[-]", "[=]", "[]]"]
      , G = []
      , K = [];
    for (let t = 0; t < J.length; t++) {
        const e = J[t];
        for (let i = 0; i < O.length; i++) {
            const s = i + t * O.length
              , n = O[i]
              , a = `${e}-${n}`;
            G.push(a);
            const l = `${n} ${Z[i]}`;
            K.push(new o(a,l,s,i,n,e))
        }
    }
    const Q = ["boost-pad", "heal-pad", "water-mask", "normal-mask", "rock-mask", "mauve", "insect-fairy", "normal-fairy", "poison-fairy", "reaper", "rabbyss", "caracal", "yeti", "bee", "player", "wisp-skill", "penguin"];
    G.push(...Q);
    const U = ["boost-pad", "heal-pad", "water-mask", "normal-mask", "rock-mask", "mauve", "insect-fairy", "normal-fairy", "poison-fairy", "reaper", "rabbyss", "caracal", "yeti", "bee", "player", "wisp-skill", "penguin"];
    Q.forEach( (t, e) => K.push(new o(t,U[e],e + G.length - Q.length,10 + e)));
    const V = ["wood", "stone", "gold", "ruby", "amethyst", "sapphire", "amber", "diamond", "emerald"]
      , tt = [];
    J.forEach( (t, e) => tt.push(new l(t,V[e],e)));
    const et = [];
    ["spring", "winter", "darkness", "desert"].forEach( (t, e) => et.push(new c(t,t,e)));
    const it = ["-15deg [E]", "+15deg [R]"]
      , st = [];
    ["deg-left", "deg-right"].forEach( (t, e) => st.push(new h(t,it[e],e)));
    const nt = ["https://www.youtube.com/@mafijaaa", "https://discord.gg/hdnNDTnZM2"]
      , at = [];
    ["youtube", "discord"].forEach( (t, e) => at.push(new r(t,t,e,nt[e])));
    const ot = [];
    ["logo", "logo2", "logo3", "logo4"].forEach( (t, e) => ot.push(new d(t,"taming.io",e)));
    const lt = document.createElement("div");
    lt.textContent = "reset deg [Space]",
    lt.style.width = "max-content",
    C.appendChild(lt),
    z[0].click(),
    tt[0].click(),
    et[0].click();
    let ct, ht, rt, dt, mt, pt, gt, ut, $t = !1;
    g.addEventListener("mousedown", t => {
        if (Et = !0,
        ut = !0,
        2 === t.button)
            pt || ($t = !0,
            ct = rt = t.clientX,
            ht = dt = t.clientY);
        else if (void 0 === D) {
            if (!pt && !$t && xt.length > 0) {
                pt = !0,
                gt = t.clientX,
                movemenStartY = t.clientY;
                for (let e of xt)
                    P[e].startMovement(t)
            }
        } else
            t.target !== g ? P.push(new m(Number(t.target.style.left.replace("px", "")) + t.offsetX,Number(t.target.style.top.replace("px", "")) + t.offsetY)) : P.push(new m(t.offsetX,t.offsetY))
    }
    ),
    window.addEventListener("mousemove", t => {
        if ($t)
            rt = t.clientX,
            dt = t.clientY,
            mt = !0;
        else if (pt) {
            const e = t.clientX - gt
              , i = t.clientY - movemenStartY;
            for (let t = 0, s = wt.length; t < s; t += 2)
                wt[t] += e,
                wt[t + 1] += i;
            for (let e of xt)
                P[e].moveItem(t);
            gt = t.clientX,
            movemenStartY = t.clientY
        }
    }
    ),
    window.addEventListener("mouseup", () => {
        $t && ($t = !1,
        mt = !1),
        pt && (pt = !1),
        i(),
        ut = !1
    }
    ),
    g.addEventListener("mouseup", () => {
        !0 === M && (M = !1)
    }
    ),
    document.addEventListener("keydown", t => {
        switch (t.key) {
        case "d":
            z[0].click();
            break;
        case "f":
            z[1].click()
        }
    }
    ),
    document.addEventListener("keydown", t => {
        switch (t.key) {
        case "1":
            K[0 + 10 * F].click();
            break;
        case "2":
            K[1 + 10 * F].click();
            break;
        case "3":
            K[2 + 10 * F].click();
            break;
        case "4":
            K[3 + 10 * F].click();
            break;
        case "5":
            K[4 + 10 * F].click();
            break;
        case "6":
            K[5 + 10 * F].click();
            break;
        case "7":
            K[6 + 10 * F].click();
            break;
        case "8":
            K[7 + 10 * F].click();
            break;
        case "9":
            K[8 + 10 * F].click();
            break;
        case "0":
            K[9 + 10 * F].click();
            break;
        case "-":
            K[10 + 10 * F].click();
            break;
        case "=":
            K[11 + 10 * F].click();
            break;
        case "F1":
            t.preventDefault(),
            K[12 + (J.length - 1) * O.length].click();
            break;
        case "F2":
            t.preventDefault(),
            K[13 + (J.length - 1) * O.length].click()
        }
    }
    ),
    document.addEventListener("keydown", t => {
        if (void 0 === _)
            return;
        if ("q" !== t.key && "w" !== t.key)
            return;
        let e = _;
        switch (t.key) {
        case "q":
            --e < 0 && (e = 13);
            break;
        case "w":
            ++e > 13 && (e = 0)
        }
        e < 12 ? K[e + 12 * F].click() : K[e + 12 * (J.length - 1)].click()
    }
    ),
    document.addEventListener("keydown", t => {
        if ("a" !== t.key && "s" !== t.key)
            return;
        let e = F;
        switch (t.key) {
        case "a":
            --e < 0 && (e = 8);
            break;
        case "s":
            ++e > 8 && (e = 0)
        }
        tt[e].click()
    }
    ),
    document.addEventListener("keydown", t => {
        switch (t.key) {
        case "e":
            st[0].click();
            break;
        case "r":
            st[1].click();
            break;
        case " ":
            e();
            break;
        case "Tab":
            t.preventDefault()
        }
    }
    ),
    document.addEventListener("keyup", t => {
        "Tab" == t.key && (yt++,
        0 == (yt %= 3) ? (B.style.display = A.style.display = "none",
        clearTimeout(vt)) : 1 == yt ? (B.style.display = A.style.display = "inline-block",
        s()) : B.style.display = "none",
        i())
    }
    ),
    E.addEventListener("mousedown", e),
    p.addEventListener("mousemove", t => {
        u.style.top = t.clientY - u.height / 2 + "px",
        u.style.left = t.clientX - u.width / 2 + "px",
        !0 === M && null != Y && Y.moveItem(t)
    }
    ),
    p.addEventListener("mouseenter", () => {
        u.style.display = "block"
    }
    ),
    p.addEventListener("mouseleave", () => {
        u.style.display = "none"
    }
    ),
    E.addEventListener("mouseenter", () => {
        const t = b.getBoundingClientRect();
        lt.style.top = `${t.top}px`,
        lt.classList.add("appear")
    }
    ),
    E.addEventListener("mouseleave", () => {
        lt.classList.remove("appear")
    }
    ),
    window.save = ( () => {
        console.log("Type the following into the console to load:"),
        console.log(`window.load(${JSON.stringify(P.map(t => [t.x, t.y, t.itemIndex]))})`)
    }
    ),
    window.load = (t => {
        let e = D;
        t.forEach( ([t,e,i]) => {
            D = i,
            P.push(new m(t,e))
        }
        ),
        D = e
    }
    );
    let vt, yt = 0;
    const ft = 108 / 301;
    let kt;
    const bt = 3;
    let Et = !1
      , wt = []
      , xt = [];
    (function t() {
        if (setTimeout(t, 1e3 / 60),
        S.clearRect(0, 0, T.width, T.height),
        S.globalAlpha = .4,
        S.lineWidth = 4,
        S.strokeStyle = "red",
        S.fillStyle = "red",
        $t && (function() {
            const t = Math.min(ct, rt) - 40
              , e = Math.max(ct, rt) - 40
              , i = Math.min(ht, dt) - 40
              , s = Math.max(ht, dt) - 40;
            wt = [],
            xt = [];
            for (let n = 0, a = P.length; n < a; n++) {
                const a = P[n].x
                  , o = P[n].y;
                a > t && a < e && o > i && o < s && (wt.push(a, o),
                xt.push(n))
            }
        }(),
        mt && (S.beginPath(),
        S.rect(ct * bt, ht * bt, (rt - ct) * bt, (dt - ht) * bt),
        S.stroke())),
        wt.length > 0)
            for (let t = 0, e = wt.length; t < e; t += 2) {
                let e = wt[t]
                  , i = wt[t + 1];
                S.beginPath(),
                S.arc((e + 40) * bt, (i + 40) * bt, 20 * bt, 0, 6.2832),
                S.fill()
            }
    }
    )(),
    window.addEventListener("resize", () => {
        n(),
        i()
    }
    ),
    n()
}
)();
