import AppLayout from "@/layouts/app-layout"

import { Head } from "@inertiajs/react"
import {
  IconBrandIntentui,
  IconBrandParsinta,
  IconDuplicateFill,
  IconWindowVisitFill,
} from "@intentui/icons"
import { CardHeader } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

const items = [
  {
    name: "Intent UI",
    url: "https://intentui.com",
    icon: IconBrandIntentui,
    description:
      " Intent UI is a chill set of React components, built on top of React Aria Components, all about keeping the web accessible.",
  },
  {
    name: "Blocks",
    url: "https://blocks.intentui.com",
    icon: IconBrandIntentui,
    description:
      "Create stunning, professional-grade layouts that not only save time but also elevate the quality of your projects.",
  },
  {
    name: "Icons",
    url: "https://intentui.com/icons",
    icon: IconDuplicateFill,
    description:
      "A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user experience of your web applications.",
  },
  {
    name: "Templates",
    url: "https://blocks.intentui.com/templates",
    icon: IconWindowVisitFill,
    description: "Explore the next.js templates from web apps to design systems, all here.",
  },
  {
    name: "Parsinta",
    url: "https://parsinta.com",
    icon: IconBrandParsinta,
    description:
      "Improve your skills with Parsinta by pushing your skills to the next level, through the series here such as Laravel, Vue, React, Tailwind CSS and Much more.",
  },
]

export default function Home() {
  return (
    <>
      <Head title="Inertia Laravel Starter kit" />
      <Container className="py-12">
        <CardHeader
          title="Laravel Starter Kit"
          description="A fully-featured Laravel starter kit built with Intent UI, offering a clean foundation for modern web apps."
        />
      </Container>
    </>
  )
}

Home.layout = (page: any) => <AppLayout children={page} />
