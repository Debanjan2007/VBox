import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { MobileMenu } from "./Components/MobileMenu"
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./Components/Search"
import { ControllPanel } from "./Components/ControllPanel"
import { Sidebar } from "./Components/Sidebar"

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>
        <div className="container h-screen w-screen flex flex-col">
            <AnimatedGridPattern className="absolute inset-0 opacity-35 text-slate-500/60 dark:text-slate-400/40" />
            <nav>
                <div className="container w-full h-14 flex justify-between items-center px-4 border-b-1 border-muted-foreground/20">
                    <div className="logo-sec flex items-center gap-2 hidden md:flex">
                        <Image src="/logo.png" alt="logo" height={36} width={36}/>
                        <h1 className="text-lg font-semibold">VBox</h1>
                    </div>
                    <div className="monbile-menu md:hidden flex items-center justify-center">
                        <MobileMenu />
                    </div>
                    <div className="search w-full md:w-1/2 h-full flex items-center justify-center">
                        <SearchBar />
                    </div>
                    <div className="controll-options flex items-center gap-2">
                        <ControllPanel />
                    </div>
                </div>
            </nav>
            <div className="children w-full h-full flex">
                <Sidebar page="/dashboard" />
                {children}
            </div>
        </div>
    </>
}