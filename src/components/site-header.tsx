import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle  } from "@/components/mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import "@/app/header.css"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div id="header-controls">
          <div className="triggers">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">Documents</h1>
          </div>
          <div className="buttons">
          <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
          <LanguageSwitcher />
          </Button>
          <ModeToggle /> 
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
