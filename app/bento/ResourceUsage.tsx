export function ResourceUsage() {
    const resources = [
        { name: "CPU", value: "34%", width: "w-1/3" },
        { name: "Memory", value: "1.8 GB", width: "w-2/3" },
        { name: "Network", value: "2.4 MB/s", width: "w-1/2" },
    ];

    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
            <h4 className="mb-3 text-sm font-semibold text-white">
                Resource Usage
            </h4>

            <div className="space-y-3">
                {resources.map((item) => (
                    <div key={item.name}>
                        <div className="mb-1 flex justify-between text-xs text-zinc-400">
                            <span>{item.name}</span>
                            <span>{item.value}</span>
                        </div>

                        <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                            <div
                                className={`h-full rounded-full bg-violet-500 ${item.width}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}