window.ONGSingleSpa.registerPageApp({
  appName: "cadastro-app",
  pagePath: "./pages/cadastro.html",
  routeMatcher: (location) => {
    const hash = location.hash.replace(/\/$/, "")
    return hash === "#/cadastro"
  },
})
