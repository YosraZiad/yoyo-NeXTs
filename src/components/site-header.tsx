"use client";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle  } from "@/components/mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { useAuth } from "./auth-provider"
import { LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import "@/app/header.css"

export function SiteHeader() {
  const { user, logout } = useAuth();

  // الحصول على الحروف الأولى من اسم المستخدم لعرضها في الأفاتار
  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(" ");
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`;
    }
    return name[0];
  };

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
            <h1 className="text-base font-medium">لوحة التحكم</h1>
          </div>
          <div className="buttons">
            <div className="ml-auto flex items-center gap-2">
              {user && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 mr-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium hidden md:inline">{user.fullName}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{user.username}</p>
                      <p className="text-xs text-muted-foreground">{user.role}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {user && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={logout}>
                        <LogOut className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>تسجيل الخروج</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
                <LanguageSwitcher />
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
