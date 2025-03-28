import { IconChevronLgDown, IconDeviceDesktop2, IconMoon, IconSun } from "justd-icons"
import { Button, Menu } from "ui"
import { useTheme } from "@/utils/use-theme"

export function ThemeSwitcher({
  shape = "square",
  intent = "outline",
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { updateTheme } = useTheme()

  return (
    <Menu>
      <Button size="small" className="group" intent={intent}>
        Theme
        <IconChevronLgDown className="duration-200 group-data-pressed:rotate-180" />
      </Button>
      <Menu.Content placement="bottom end">
        <Menu.Item onAction={() => updateTheme("light")}>
          <IconSun />
          <Menu.Label>Light</Menu.Label>
        </Menu.Item>
        <Menu.Item onAction={() => updateTheme("dark")}>
          <IconMoon />
          <Menu.Label>Dark</Menu.Label>
        </Menu.Item>
        <Menu.Item onAction={() => updateTheme("system")}>
          <IconDeviceDesktop2 />
          <Menu.Label>System</Menu.Label>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
