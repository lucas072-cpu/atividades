window.ONGSingleSpa.registerPageApp({
  appName: "projetos-app",
  pagePath: "./pages/projetos.html",
  routeMatcher: (location) => {
    const hash = location.hash.replace(/\/$/, "")
    return hash === "#/projetos"
  },
})
