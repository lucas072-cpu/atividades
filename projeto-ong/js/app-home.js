window.ONGSingleSpa.registerPageApp({
  appName: "home-app",
  pagePath: "./pages/home.html",
  routeMatcher: (location) => {
    const hash = location.hash.replace(/\/$/, "")
    return hash === "" || hash === "#"
  },
})
