import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Profile from "./sections/Profile";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Profile section for desktop  */}
      <main className="flex pt-[80px] min-h-screen">
        <aside className="hidden lg:block w-[310px] fixed top-[80px] left-0 bottom-0 overflow-y-auto p-4">
          <Profile />
        </aside>

        {/* Profile section for mobile screen which will be hidden in desktop or large screens  */}
        <div className="lg:ml-[310px] flex-1 w-full min-w-0">
          <div className="lg:hidden p-4 pb-0">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[310px] p-4">
                <Profile />
              </SheetContent>
            </Sheet>
          </div>

          {/* Content will appear here dynamically */}
          <div className="p-4 sm:p-5">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;