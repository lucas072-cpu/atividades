const contatoApp = {
  bootstrap: async () => {},
  mount: async () => {
    const container = document.getElementById("single-spa-container")
    container.innerHTML = `<div class="page contato"><h1>Página Contato</h1><p>Entre em contato conosco.</p></div>`
  },
  unmount: async () => {
    const container = document.getElementById("single-spa-container")
    container.innerHTML = ""
  },
}

singleSpa.registerApplication(
  "contato-app",
  contatoApp,
  (location) => location.hash === "#/contato",
)
