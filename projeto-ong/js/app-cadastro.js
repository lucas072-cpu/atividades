window.ONGSingleSpa.registerPageApp({
  appName: "cadastro-app",

  pagePath: "./pages/cadastro.html",

  routeMatcher: (location) => {
    const hash = location.hash.replace(/\/$/, "")
    return hash === "#/cadastro"
  },

  onMount: () => {
    const form = document.querySelector(".cadastro form")

    if (!form) {
      return
    }

    // Recupera os dados salvos anteriormente
    const dadosSalvos = localStorage.getItem("cadastroONG")

    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos)

      Object.keys(dados).forEach((campo) => {
        const elemento = form.elements[campo]

        if (elemento) {
          elemento.value = dados[campo]
        }
      })
    }

    // Evento input
    form.addEventListener("input", (event) => {
      const campo = event.target

      if (!campo.checkValidity()) {
        campo.classList.add("invalid")
      } else {
        campo.classList.remove("invalid")
      }
    })

    // Evento submit
    form.addEventListener("submit", (event) => {
      event.preventDefault()

      if (!form.checkValidity()) {
        form.reportValidity()
        return
      }

      // Transforma os dados do formulário em objeto
      const dados = Object.fromEntries(new FormData(form).entries())

      // Converte o objeto para string JSON e salva no navegador
      localStorage.setItem("cadastroONG", JSON.stringify(dados))

      alert("Cadastro enviado com sucesso!")
    })
  },
})
