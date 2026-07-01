"use client"

import Link from 'next/link'
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { SideBaritems, SideBarItem } from "./Sidebar"
import page from '../page';

export function MobileMenu({ page }: { page: string }) {
    return <Sheet>
        <SheetTrigger asChild>
            <Button variant="ghost" size="lg">
                <Menu className='text-muted-foreground' />
            </Button>
        </SheetTrigger>
        <SheetContent side="left">
            <div className="container flex flex-col gap-2 mt-8 m-4 justify-between h-full w-full">
                <div className="flex flex-col gap-2 mt-8 m-4">
                    {SideBaritems.map((item, index) => (
                        <SideBarItem key={index} icon={item.icon} label={item.label} href={item.href} page={page} />
                    ))}
                </div>
                <div className="profile p-4 w-full mb-2">
                    <div className="page flex h-14 w-full gap-2 bg-muted border-1 border-muted-foreground/20 rounded-sm p-2 items-center justify-start">
                        <div className="avatar h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        </div>
                        <div className="userName flex flex-col">
                            <h2 className="font-semibold text-muted-foreground">Debanjan</h2>
                            <p className="text-muted-foreground/70 text-sm">example15@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </SheetContent>
    </Sheet>
}