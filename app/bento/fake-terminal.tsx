import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"
import { Spinner } from "./unicodespinner"

export function FakeTerminal() {
    return (
        <Terminal>
            <TypingAnimation>&gt; launch ubuntu</TypingAnimation>
            <AnimatedSpan className="text-green-500">
                ✔ Request received
            </AnimatedSpan>
            <AnimatedSpan className="text-green-500">
                ✔ Docker image pulled
            </AnimatedSpan>
            <AnimatedSpan className="text-green-500">
                ✔ Docker container created
            </AnimatedSpan>
            <AnimatedSpan>
                <span>
                    <Spinner /> Connecting Browser
                </span>
            </AnimatedSpan>
        </Terminal>
    )
}