const {app, BrowserWindow, session, shell, ipcMain} = require("electron")
  , path = require("path");
let browserWindow = null;
const singleInstanceLockSucessful = app.requestSingleInstanceLock();
singleInstanceLockSucessful ? app.on("second-instance", ( () => {
    null != browserWindow && (browserWindow.isMinimized() && browserWindow.restore(),
    browserWindow.focus())
}
)) : app.quit(),
app.on("web-contents-created", ((e, n) => {
    n.setWindowOpenHandler((({url}) => {
      const allowed = [
        "https://www.kodub.com/",
        "https://www.kodub.com/terms/polytrack",
        "https://www.kodub.com/privacy/polytrack",
        "https://www.kodub.com/discord/polytrack",
        "https://cwcinc.dev/",
        "https://www.youtube.com/watch?v=jTalhVYlpIY"
      ];
      if (allowed.includes(url)) {
        setImmediate(() => shell.openExternal(url));
      }
      return { action: "deny" };
    })),
    n.on("will-navigate", ((e, n) => {
        e.preventDefault()
    }))
}));
ipcMain.on("get-argv", (e => {
    e.returnValue = process.argv
}
)),
ipcMain.on("log-message", ( (e, n) => {
    console.log(n)
}
)),
ipcMain.on("quit", ( () => {
    app.quit()
}
)),
app.on("window-all-closed", ( () => {
    app.quit()
}
)),
app.whenReady().then(( () => {
    browserWindow = new BrowserWindow({
        width: 1024,
        height: 800,
        minWidth: 320,
        minHeight: 200,
        fullscreen: !0,
        useContentSize: !0,
        autoHideMenuBar: !0,
        webPreferences: {
            devTools: !0,
            preload: path.join(__dirname, "preload.js"),
            backgroundThrottling: !1
        }
    }),
    browserWindow.removeMenu(),
    browserWindow.webContents.on("before-input-event", ((e, n) => {
        if (n.isAutoRepeat || "keyDown" != n.type) return;
        if ("F11" == n.code || (n.alt && "Enter" == n.code)) {
            browserWindow.setFullScreen(!browserWindow.isFullScreen());
            e.preventDefault();
        }
        if ("F12" == n.code) {
            browserWindow.webContents.toggleDevTools();
            e.preventDefault();
        }
    })),
    browserWindow.webContents.on("will-prevent-unload", (e => {
        e.preventDefault()
    }
    )),
    browserWindow.on("enter-full-screen", ( () => {
        browserWindow.webContents.send("fullscreen-change", !0)
    }
    )),
    browserWindow.on("leave-full-screen", ( () => {
        browserWindow.webContents.send("fullscreen-change", !1)
    }
    )),
    ipcMain.on("is-fullscreen", (e => {
        e.returnValue = browserWindow.isFullScreen()
    }
    )),
    ipcMain.on("set-fullscreen", ( (e, n) => {
        browserWindow.setFullScreen(n)
    }
    )),
    session.defaultSession.webRequest.onBeforeSendHeaders({
        urls: ["<all_urls>"]
    }, ( (e, n) => {
        e.requestHeaders.Origin = "https://app-polytrack-desktop.kodub.com",
        n({
            requestHeaders: e.requestHeaders
        })
    }
    )),
    browserWindow.loadFile("index.html")
}
));
