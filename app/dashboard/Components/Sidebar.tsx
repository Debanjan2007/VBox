"use client"

import { Home, Settings, Monitor, Camera, LayoutTemplate, Database, WifiPen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBaritems = [
    {
        icon: <Home className="w-4 h-4 text-muted-foreground" />,
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: <Monitor className="w-4 h-4 text-muted-foreground" />,
        label: "Machines",
        href: "/machines"
    },
    {
        icon: <Camera className="w-4 h-4 text-muted-foreground" />,
        label: "Snapshots",
        href: "/snapshots"
    },
    {
        icon: <LayoutTemplate className="w-4 h-4 text-muted-foreground" />,
        label: "Templates",
        href: "/templates"
    },
    {
        icon: <Database className="w-4 h-4 text-muted-foreground" />,
        label: "Storage",
        href: "/storage"
    },
    {
        icon: <WifiPen className="w-4 h-4 text-muted-foreground" />,
        label: "Networks",
        href: "/networks"
    },
    {
        icon: <Settings className="w-4 h-4 text-muted-foreground" />,
        label: "Settings",
        href: "/settings"
    },
]

export function SideBarItem({ icon, label, href , page }: { icon: React.ReactNode; label: string; href: string; page: string }) {
    const pathname = usePathname();
    return (
        <Link href={href} className={
            pathname === page && pathname === href
                ? "flex w-full h-12 items-center text-muted-foreground/90 flex gap-2 bg-[#0C1E46] p-2 pl-4 rounded-md hover:bg-muted/50 transition-all duration-300"
                :
            "flex w-full h-12 items-center text-muted-foreground flex gap-2 p-2 pl-4 rounded-md hover:bg-muted/50 transition-all duration-300"}
        >
            {icon}
            <span className="text-sm">{label}</span>
        </Link>
    )
}

export function Sidebar({page}: {page: string}) {
    return (
        <div className="container hidden md:flex flex flex-col w-1/4 h-full gap-2 border-r-1 border-muted-foreground/20">
            <div className="container hidden md:flex h-full flex-col gap-2 p-4">
                {SideBaritems.map((item, index) => (
                    <SideBarItem key={index} icon={item.icon} label={item.label} href={item.href} page={page} />
                ))}
            </div>
            <div className="profile p-4  w-full mb-2">
                <div className="page flex h-14 w-full gap-2 bg-muted border-1 border-muted-foreground/20 rounded-sm p-2 items-center justify-start cursor-pointer">
                    <div className="avatar h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    </div>
                    <div className="userName flex flex-col">
                        <h2 className="font-semibold text-muted-foreground">Debanjan</h2>
                        <p className="text-muted-foreground/70 text-sm">example15@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}