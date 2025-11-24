import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface DashboardHeaderProps {
  onOpenSidebar?: () => void;
}

export function DashboardHeader({ onOpenSidebar }: DashboardHeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-4 flex-1">
          {/* mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={onOpenSidebar} aria-label="Open sidebar">
              <Menu size={20} />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white">R</span>
            </div>
            <span className="hidden sm:inline">Rufars Foods</span>
          </div>

          <div className="hidden md:block flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search products, orders..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
}
