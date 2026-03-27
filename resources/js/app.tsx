import { createInertiaApp } from "@inertiajs/react"
import { Providers } from "@/components/providers"
import { initializeTheme } from "./hooks/use-theme"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createInertiaApp({
  pages: "./pages",
  title: (title) => (title ? `${title} / ${appName}` : appName),
  progress: false,
  strictMode: true,
  withApp(app) {
    return <Providers>{app}</Providers>
  },
})

initializeTheme()
