import { Choicebox } from "@/components/ui/choicebox"
import { IconDeviceDesktop2, IconMoon, IconSun } from "@intentui/icons"
import { type Theme, useTheme } from "@/hooks/use-theme"
import { Card } from "@/components/ui/card"

interface Themes {
  value: Theme
  icon: React.FC<React.SVGAttributes<SVGSVGElement>>
  label: string
  description: string
}

export function SwitchTheme() {
  const { theme, updateTheme } = useTheme()
  const themes: Themes[] = [
    { value: "light", icon: IconSun, label: "Light", description: "Ideal for daytime use." },
    {
      value: "dark",
      icon: IconMoon,
      label: "Dark",
      description: "Comfortable for nighttime use.",
    },
    {
      value: "system",
      icon: IconDeviceDesktop2,
      label: "System",
      description: "Automatically match the theme with your system settings.",
    },
  ]

  return (
    <div className="flex flex-col gap-y-6 py-8 sm:py-12">
      <Card.Header>
        <Card.Title>Choose theme</Card.Title>

        <p className="text-muted-fg text-sm">
          Choose the most comfortable theme to make your experience using this app more enjoyable.
        </p>
      </Card.Header>

      <Card.Content>
        <Choicebox
          selectedKeys={new Set([theme])}
          onSelectionChange={(v) => {
            // @ts-ignore
            updateTheme([...v][0])
          }}
          columns={1}
          gap={0}
          selectionMode="single"
          aria-label="Choose theme"
          items={themes}
        >
          {(item) => (
            <Choicebox.Item
              id={item.value}
              textValue={item.label}
              title={item.label}
              icon={item.icon}
              description={item.description}
            />
          )}
        </Choicebox>
      </Card.Content>
    </div>
  )
}
