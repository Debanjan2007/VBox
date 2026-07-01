import {
    Cpu,
    HardDrive,
    MemoryStick,
    Monitor,
    Play,
    Settings,
    Square,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface VMCardProps {
    name: string;
    os: string;
    status: "running" | "stopped" | "paused";
    cpu: number;
    ram: number;
    storage: number;
}

export default function VMCard({
    name,
    os,
    status,
    cpu,
    ram,
    storage,
}: VMCardProps) {
    const running = status === "running";

    return (
        <Card className="group transition-all duration-300 hover:shadow-lg hover:border-primary/50">
            <CardContent className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <Monitor className="h-6 w-6 text-primary" />
                        </div>

                        <div className="min-w-0">
                            <h3 className="truncate text-base font-semibold">{name}</h3>

                            <p className="truncate text-sm text-muted-foreground">
                                {os}
                            </p>
                        </div>
                    </div>

                    <Badge
                        variant={running ? "default" : "secondary"}
                        className="capitalize shrink-0"
                    >
                        {status}
                    </Badge>
                </div>

                {/* Specs */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-lg border p-3 text-center">
                        <Cpu className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />

                        <p className="text-sm font-semibold">{cpu}</p>

                        <span className="text-xs text-muted-foreground">
                            CPU
                        </span>
                    </div>

                    <div className="rounded-lg border p-3 text-center">
                        <MemoryStick className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />

                        <p className="text-sm font-semibold">{ram} GB</p>

                        <span className="text-xs text-muted-foreground">
                            RAM
                        </span>
                    </div>

                    <div className="rounded-lg border p-3 text-center">
                        <HardDrive className="mx-auto mb-2 h-4 w-4 text-muted-foreground" />

                        <p className="text-sm font-semibold">{storage} GB</p>

                        <span className="text-xs text-muted-foreground">
                            Disk
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <Button
                        className="flex-1"
                        variant={running ? "destructive" : "default"}
                    >
                        {running ? (
                            <>
                                <Square className="mr-2 h-4 w-4" />
                                Stop
                            </>
                        ) : (
                            <>
                                <Play className="mr-2 h-4 w-4" />
                                Start
                            </>
                        )}
                    </Button>

                    <Button
                        variant="outline"
                        className="sm:w-11"
                    >
                        <Settings className="h-4 w-4" />
                        <span className="ml-2 sm:hidden">Settings</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}