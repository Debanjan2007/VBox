export function ProgressBar() {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3">
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                    Workspace Ready
                </span>

                <span className="text-xs text-green-400">
                    82%
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-700" />
            </div>

            <p className="mt-2 text-xs text-zinc-400">
                Initializing browser session...
            </p>
        </div>
    );
}