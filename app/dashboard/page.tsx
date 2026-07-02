"use client"
import VMCard from "./VmCards"
import { Plus , Download , LayoutTemplate , Terminal } from "lucide-react"

export default function Dashboard() {
    return (
        <div className="container h-full w-full py-2 px-4 md:p-6 flex justify-start items-start flex-col gap-4">
            <main className="w-full h-full">
                <div className="hero flex flex-col md:p-2">
                    <div className="kick-start w-full flex justify-between items-center w-full ">
                        <div className="welcome">
                            <h1 className="text-2xl font-bold">Welcome back, Dev!👋</h1>
                            <p className="text-muted-foreground">
                                Here&lsquo;s what&lsquo;s happening with your virtual machines today.
                            </p>
                        </div>
                        <div className="hot-bar h-12 hidden md:flex gap-2 items-center justify-center">
                            <button className="flex h-full  w-32 items-center bg-[#1D5EFA] justify-center gap-3 text-[#dbd9d9] font-xs rounded-md hover:bg-[#1D5EFA]/90 transition-all duration-300">
                                <Plus className="w-4 h-4 " />
                                <span className="text-sm">Create VM</span>
                            </button>
                            <button className="flex h-full bg-muted/70 w-32 items-center justify-center gap-3 text-[#dbd9d9] font-xs rounded-md hover:bg-[#1D5EFA]/90 transition-all duration-300">
                                <Download className="w-4 h-4" />
                                <span className="text-sm">Import</span>
                            </button>
                            <button className="flex h-full bg-muted/70 w-32 items-center justify-center gap-3 text-[#dbd9d9] font-xs rounded-md hover:bg-[#1D5EFA]/90 transition-all duration-300">
                                <LayoutTemplate className="w-4 h-4" />
                                <span className="text-sm">Templates</span>
                            </button>
                            <button className="flex h-full bg-muted/70 w-32 items-center justify-center gap-3 text-[#dbd9d9] font-xs rounded-md hover:bg-[#1D5EFA]/90 transition-all duration-300">
                                <Terminal className="w-4 h-4" />
                                <span className="text-sm">Terminal</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}