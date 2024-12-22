import { FileText, Home, Plus, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", icon: Home, url: "#" },
  { title: "Search", icon: Search, url: "#" },
  { title: "New Page", icon: Plus, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
];

const pages = [
  { title: "Getting Started", icon: FileText, url: "#" },
  { title: "Quick Notes", icon: FileText, url: "#" },
  { title: "Projects", icon: FileText, url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-[#EBEBEA]">
      <SidebarContent className="bg-[#F7F6F3]">
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-[#37352F] hover:bg-[#EBEBEA]">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-[#37352F] hover:bg-[#EBEBEA]">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}