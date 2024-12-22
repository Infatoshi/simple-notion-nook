import { Bold, Italic, List, Type } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Toolbar() {
  return (
    <div className="flex items-center gap-1 p-1 bg-white border rounded-md shadow-sm">
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <Type className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
}