import { Header } from "@/components/header"
import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"
import { Container } from "@/components/ui/container"
import { UpdateProfileInformationForm } from "./partials/update-profile-information-form"
import { UpdatePasswordForm } from "./partials/update-password-form"
import { DeleteUserForm } from "./partials/delete-user-form"
import { SwitchTheme } from "@/pages/settings/partials/switch-theme"

interface Props {
  mustVerifyEmail: boolean
  status?: string
}

const title = "Profile"

export default function Profile({ mustVerifyEmail, status }: Props) {
  return (
    <>
      <Head title={title} />
      <Header title={title} />
      <Container>
        <div className="flex max-w-3xl flex-col divide-y">
          <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
          <UpdatePasswordForm />
          <DeleteUserForm />
          <SwitchTheme />
        </div>
      </Container>
    </>
  )
}

Profile.layout = (page: any) => <AppLayout children={page} />
