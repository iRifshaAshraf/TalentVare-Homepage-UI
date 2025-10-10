import { useState } from "react"
import { Link } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger, } from "@/components/ui/menubar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from '@/assets/images/logo.png';
import avatar from '@/assets/images/avatar-1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Find Jobs", path: "/" },
        { name: "Top Companies", path: "/topCompanies" },
        { name: "Job Tracker", path: "/jobTracker" },
        { name: "My Calendar", path: "/myCalendar" },
        { name: "Documents", path: "/documents" },
        { name: "Messages", path: "/messages" },
        { name: "Notifications", path: "/notifications" },
    ]

    return (
        <nav className="bg-white px-4 sm:px-6 py-4 shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                    <img
                        src={logo}
                        alt="Find Jobs Logo"
                        className="h-8 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-5 text-gray-700 font-medium">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.path}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to={link.path}
                                            className="hover:text-secondary hover:bg-transparent active:bg-transparent focus:bg-transparent active:text-secondary focus:text-secondary active:font-semibold focus:font-semibold transition whitespace-nowrap"
                                        >
                                            {link.name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>


                <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
                    {/* Search Bar will be hidden on smaller screens */}
                    <div className="relative hidden lg:block w-48 xl:w-64">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
                        <Input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-3 py-2 bg-gray-50 border-none rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>


                    <Button className="bg-secondary text-white rounded-sm px-4 lg:px-5 py-2 hover:bg-white hover:text-secondary hover:border-secondary border-1 cursor-pointer text-sm whitespace-nowrap">
                        Resume Builder
                    </Button>


                    <Menubar className="p-0 h-auto rounded-full border-0">
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer p-0">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={avatar} alt="user" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className="cursor-pointer">Profile</MenubarItem>
                                <MenubarItem className="cursor-pointer">Logout</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2">
                    {/* User Avatar - Mobile */}
                    <Menubar className="p-0 h-auto rounded-full border-0">
                        <MenubarMenu>
                            <MenubarTrigger className="cursor-pointer p-0">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={avatar} alt="user" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className="cursor-pointer">Profile</MenubarItem>
                                <MenubarItem className="cursor-pointer">Logout</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    {/* Hamburger Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-6 mt-8 p-3 text-center">
                                {/* Search Bar - Mobile */}
                                <div className="relative w-full">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary" />
                                    <Input
                                        type="text"
                                        placeholder="Search"
                                        className="pl-9 pr-3 py-2 bg-gray-50 border-none rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                                    />
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-gray-700 font-medium text-base hover:text-secondary transition py-2 border-b border-gray-100"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </nav>

                                {/* Resume Builder - Mobile */}
                                <Button className="bg-secondary text-white rounded-sm px-5 py-2 hover:bg-white hover:text-secondary hover:border-secondary border-1 cursor-pointer w-full mt-4">
                                    Resume Builder
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar