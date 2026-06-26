import { FakeTerminal } from "./fake-terminal";
import { ProgressBar } from "./ProgressBar";
import { ResourceUsage } from "./ResourceUsage";
import { WorkspaceInfo } from "./WorkspaceInfo";

export function LaunchWorkspacePreview() {
    return (
        <div className="absolute inset-0 p-6">
            <div className="flex h-full flex-col justify-center gap-4">

                <FakeTerminal />

                <div className="grid grid-cols-2 gap-4">
                    <ResourceUsage />
                    <WorkspaceInfo />
                </div>

                <ProgressBar />

            </div>
        </div>
    );
}