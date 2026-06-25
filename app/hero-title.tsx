"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button";


export function HeroTtile() {
    return <>
        <div className="container w-full h-full z-99">
            <div className="max-w-xl space-y-6">
                <div>
                    <p className="text-sm text-gray-400 mb-3">
                        Modern way to operate securely
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Spin Up Linux, Browsers
                        <br />
                        Dev Environments Instantly
                    </h1>

                    <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                        Create a simple workflow by clicking some button and your virtual machine is on in few seconds
                    </p>
                </div>

                <div className="flex flex-col h-16 sm:flex-row items-stretch sm:items-center gap-2 p-2 ">
                    <Button
                        variant="default"
                        size="lg"
                        className="w-full h-full sm:w-auto"
                    >
                        <Link href="/login" className="cursor-pointer">
                            Launch your workflow
                        </Link>
                    </Button>
                </div>

                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                        🔐 Secure
                    </button>

                    <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                        🌐 Local
                    </button>
                </div>
            </div>
        </div>
    </>
}