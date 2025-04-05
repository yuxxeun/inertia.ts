import type { FlashProps } from "@/types"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react"
import { toast } from "sonner"
import { Toast } from "@/components/ui/toast"

export function Flash() {
  const { flash } = usePage<{ flash: FlashProps }>().props
  useEffect(() => {
    if (flash?.message) {
      ;(toast as any)[flash.type](flash.message)
    }
  }, [flash])
  return <Toast />
}
