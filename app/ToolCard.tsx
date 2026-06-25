import Image from "next/image";

interface ToolCardProps {
    obj: {
        name: string;
        avatar: string;
        info: string;
    };
}

export function ToolCard({ obj }: ToolCardProps) {
    return (
        <div
            className="
        group
        flex
        items-center
        gap-4
        h-20
        w-60
        rounded-xl
        border
        border-cyan-500/10
        bg-white/[0.02]
        px-4
        transition-all
        duration-300
        hover:border-cyan-500/30
        hover:bg-white/[0.04]
      "
        >
            <div
                className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          bg-cyan-500/5
          border
          border-cyan-500/10
          shrink-0
        "
            >
                <Image
                    src={obj.avatar}
                    alt={obj.name}
                    width={24}
                    height={24}
                />
            </div>

            <div className="flex flex-col flex-1 overflow-hidden">
                <h3 className="font-medium text-white text-sm truncate">
                    {obj.name}
                </h3>

                <p className="text-xs text-zinc-500 truncate">
                    {obj.info}
                </p>
            </div>

            <div
                className="
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.8)]
        "
            />
        </div>
    );
}