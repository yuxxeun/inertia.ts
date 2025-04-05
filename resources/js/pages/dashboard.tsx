import AppLayout from "@/layouts/app-layout"
import type { PageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { CardHeader } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export default function Dashboard({ auth }: PageProps) {
  return (
    <>
      <Head title="Dashboard" />

      <Container className="py-12">
        <CardHeader
          title="Dashboard"
          description={`Hello, ${auth.user.name}! This is your dashboard.`}
        />
      </Container>
    </>
  )
}

Dashboard.layout = (page: any) => <AppLayout children={page} />
