import AppLayout from "@/layouts/app-layout"
import type { PageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { CardHeader, Container } from "ui"

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
