window.ONGSingleSpa.registerPageApp({
  appName: "projetos-app",
  pagePath: "./projeto-ong/html/pages/projetos.html",
  routeMatcher: (location) => {
    const hash = location.hash.replace(/\/$/, "")
    return hash === "#/projetos"
  },
})
