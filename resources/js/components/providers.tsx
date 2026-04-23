import { router } from "@inertiajs/react"

import { RouterProvider } from "react-aria-components"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RouterProvider navigate={(to, options) => router.visit(to, options as any)}>
      {children}
    </RouterProvider>
  )
}
