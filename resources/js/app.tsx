import "../css/app.css"

import { createInertiaApp } from "@inertiajs/react"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { createRoot } from "react-dom/client"
import { initializeTheme } from "@/utils/use-theme"
import { Providers } from "@/components/providers"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <Providers>
        <App {...props} />
      </Providers>,
    )
  },
  progress: {
    color: "#4B5563",
  },
})

initializeTheme()
