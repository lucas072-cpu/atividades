;(function () {
  const containerId = "single-spa-container"

  function buildPageApplication({ appName, pagePath, onMount }) {
    return {
      bootstrap: async () => {},

      mount: async () => {
        const response = await fetch(pagePath, { cache: "no-cache" })

        if (!response.ok) {
          throw new Error(
            `[${appName}] Falha ao carregar ${pagePath}: ${response.status}`,
          )
        }

        const htmlContent = await response.text()

        const container = document.getElementById(containerId)

        if (!container) {
          throw new Error(
            `[${appName}] Container #${containerId} não encontrado.`,
          )
        }

        container.innerHTML = htmlContent

        // Executa a lógica específica da página
        // depois que o HTML foi inserido no DOM
        if (onMount) {
          onMount()
        }
      },

      unmount: async () => {
        const container = document.getElementById(containerId)

        if (container) {
          container.innerHTML = ""
        }
      },
    }
  }

  window.ONGSingleSpa = {
    registerPageApp({ appName, pagePath, routeMatcher, onMount }) {
      singleSpa.registerApplication(
        appName,

        buildPageApplication({
          appName,
          pagePath,
          onMount,
        }),

        routeMatcher,
      )
    },
  }
})()
