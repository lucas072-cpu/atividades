const sobreApp = {
  bootstrap: async () => {},
  mount: async () => {
    // Busca a estrutura HTML realista do arquivo separado
    const response = await fetch("./pages/home.html")
    const htmlContent = await response.text()

    const container = document.getElementById("single-spa-container")
    container.innerHTML = htmlContent
  },
  unmount: async () => {
    const container = document.getElementById("single-spa-container")
    container.innerHTML = ""
  },
}

singleSpa.registerApplication(
  "home-app",
  homeApp,
  (location) => location.hash === "" || location.hash === "#/",
)
