import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import laravel from "laravel-vite-plugin"
import { resolve } from "node:path"
import { defineConfig } from "vite"
import { run } from "vite-plugin-run"

export default defineConfig({
  plugins: [
    tailwindcss(),
    laravel({
      input: "resources/js/app.tsx",
      ssr: "resources/js/ssr.tsx",
      refresh: true,
    }),
    react(),
    run([
      {
        name: "wayfinder",
        run: ["php", "artisan", "wayfinder:generate"],
        pattern: ["routes/**/*.php", "app/**/Http/**/*.php"],
      },
    ]),
  ],
  resolve: {
    alias: {
      ui: resolve("resources/js/components/ui/index.ts"),
      "ziggy-js": resolve("vendor/tightenco/ziggy"),
    },
  },
})
