import {
    Monitor,
    Globe,
    Clock3,
    ShieldCheck,
} from "lucide-react";

export function WorkspaceInfo() {
    const info = [
        {
            icon: <ShieldCheck className="h-4 w-4 text-green-400" />,
            label: "Status",
            value: "Running",
        },
        {
            icon: <Monitor className="h-4 w-4 text-sky-400" />,
            label: "OS",
            value: "Ubuntu 24.04",
        },
        {
            icon: <Globe className="h-4 w-4 text-orange-400" />,
            label: "Browser",
            value: "Firefox",
        },
        {
            icon: <Clock3 className="h-4 w-4 text-violet-400" />,
            label: "Launch",
            value: "6.4 sec",
        },
    ];

    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
            <h4 className="mb-3 text-sm font-semibold text-white">
                Workspace
            </h4>

            <div className="space-y-2">
                {info.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between text-xs"
                    >
                        <div className="flex items-center gap-2 text-zinc-300">
                            {item.icon}
                            {item.label}
                        </div>

                        <span className="text-white">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}