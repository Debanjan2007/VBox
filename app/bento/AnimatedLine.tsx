import { useRef } from "react"
import { User } from "lucide-react"
import Image from "next/image"
import { AnimatedBeam } from "@/components/ui/animated-beam"

export function AnimatedInfa() {
    const user = useRef<HTMLDivElement>(null)
    const vbox = useRef<HTMLDivElement>(null)
    const docker = useRef<HTMLDivElement>(null)
    const window = useRef<HTMLDivElement>(null)
    const firefox = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={containerRef} className="relative flex w-full h-full p-6 justify-center items-center gap-4 md:gap-12 lg:gap-18">
            <div
                className="user h-18 md:h-20 md:w-20 w-18 rounded-full flex justify-center items-center"
                ref={user}
            >
                <User
                    size={36}
                />
            </div>
            <div
                ref={vbox}
                className="vbox h-18 md:h-20 md:w-20 w-18 rounded-full  flex justify-center items-center">
                <Image
                    src="/logo.png"
                    width={36}
                    height={36}
                    alt="vbox"
                />
            </div>
            <div className="others flex flex-col gap-4 md:gap-6">
                <div
                    ref={docker}
                    className="docker h-18 md:h-20 md:w-20 w-18 rounded-full flex justify-center items-center">
                    <Image
                        src="/docker.png"
                        width={36}
                        height={36}
                        alt="docker"
                    />
                </div>
                <div
                    ref={window}
                    className="window h-18 md:h-20 md:w-20 w-18 rounded-full  flex justify-center items-center">
                    <Image
                        src="/win-10.png"
                        width={36}
                        height={36}
                        alt="windows"
                    />
                </div>
                <div
                    ref={firefox}
                    className="firefox h-18 md:h-20 md:w-20 w-18 rounded-full  flex justify-center items-center">
                    <Image
                        src="/firefox.png"
                        width={36}
                        height={36}
                        alt="firefox"
                    />
                </div>
            </div>
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={user}
                toRef={vbox}
                repeat={Infinity}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={vbox}
                toRef={docker}
                repeat={Infinity}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={vbox}
                toRef={window}
                repeat={Infinity}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={vbox}
                toRef={firefox}
                repeat={Infinity}
            />
        </div>
    )
}