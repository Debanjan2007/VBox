"use client"

import Image from "next/image";
import Link from "next/link";

interface WorkspaceCardProps {
    obj: {
        name: string;
        avatar: string;
        info: string;
    };
}

export function WorkspaceCard({ obj }: WorkspaceCardProps) {
    return (
        <div
            className="
        group
        h-32
        w-72
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
        p-5
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-white/[0.05]
    "
        >
            <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-4">
                    <div
                        className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-white/[0.04]
            border
            border-white/10
            "
                    >
                        <Image
                            src={obj.avatar}
                            alt={obj.name}
                            width={28}
                            height={28}
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold text-white text-lg">
                            {obj.name}
                        </h3>

                        <p className="text-xs text-zinc-400">
                            Workspace Template
                        </p>
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <p className="text-sm text-zinc-400 max-w-[180px]">
                        {obj.info}
                    </p>

                    <span
                        className="
            text-xs
            text-violet-400
            opacity-0
            transition-opacity
            group-hover:opacity-100
            "
                    >
                        <Link href="/login">
                            Launch →
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
