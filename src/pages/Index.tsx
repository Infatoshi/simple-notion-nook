import { NotionEditor } from "@/components/NotionEditor";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        <AppSidebar />
        <main className="flex-1 min-w-0">
          <NotionEditor />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;