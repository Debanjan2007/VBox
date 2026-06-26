"use client"
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileNav"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { HeroTtile } from './hero-title'
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { RippleButton } from "@/components/ui/ripple-button"
import { Marquee } from "@/components/ui/marquee"
import { WorkspaceCard } from "./WorkspaceCard"
import { MarqueOS } from "./Marque-children-data"
import { ToolCard } from "./ToolCard"
import { tools } from "./Tools-children-data"


export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen items-stretch w-full justify-start bg-zinc-50 font-sans dark:bg-[#08101D] overflow-hidden">
      <nav className="h-18 w-full">
        <div className="navbar mx-auto h-full w-full px-6 flex items-center justify-between">
          <div className="logo hidden md:flex text-xl gap-2 font-bold text-white cursor-pointer">
            <Image src="/logo.png" alt="logo" width='30' height='10' className="rounded-md" />
            <p>VBox</p>
          </div>
          <div className="md:hidden z-99">
            <MobileMenu />
          </div>
          <div className="navigation hidden md:flex gap-8 items-center">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/doc">Docs</Link>
          </div>
          <div className=" action-buttons flex gap-4">
            <RippleButton className="h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2">
              <Link href="/login" className="cursor-pointer">
                Login
              </Link>
            </RippleButton>
            <Link href="/signup">
              <InteractiveHoverButton>Get started</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      </nav>
      {/* main hero section here */}
      <main className="flex flex-col">
        <AnimatedGridPattern
          className="absolute inset-0 opacity-35 text-slate-500/60 dark:text-slate-400/40"
        />
        {/* first who are we part */}
        <div
          className="hero w-full h-full flex flex-col gap-14 mt-6 px-4 py-8 md:grid md:grid-cols-2 md:px-12 lg:px-16">
          <div className="first w-full h-full flex-1">
            <HeroTtile />
          </div>
          <div
            className="scond w-full flex justify-center items-center ">
            <div className="hidden md:flex h-[500px] relative w-full items-center justify-center overflow-hidden">
              {/* Center VBox */}
              <div className="z-20 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <Image
                  src="/logo.png"
                  alt="VBox"
                  height={36}
                  width={36}
                />
              </div>

              {/* Orbiting OS logos */}
              <OrbitingCircles radius={140}>
                <Image
                  src="/ubuntu.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="ubutnu"
                />
                <Image
                  src="/win-10.png"
                  height={32}
                  width={32}
                  className="object-contain"
                  alt="wiondows"
                />
                <Image
                  src="/fedora.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="fedora"
                />
                <Image
                  src="/arch.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="arch"
                />
              </OrbitingCircles>

              {/* Second ring */}
              <OrbitingCircles radius={220} reverse duration={30}>
                <Image
                  src="/chrome.png"
                  width={32}
                  height={32}
                  alt="chrome"
                  className="object-contain"
                />
                <Image
                  src="/brave.png"
                  width={32}
                  height={32}
                  className="rounded-full"
                  alt="brave" />
                <Image
                  src="/firefox.png"
                  width={32}
                  height={32}
                  alt="feirefox" />
              </OrbitingCircles>

            </div>
            <div className="flex h-[500px] relative w-full items-center justify-center overflow-hidden md:hidden">
              {/* Center VBox */}
              <div className="z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <Image
                  src="/logo.png"
                  alt="VBox"
                  height={30}
                  width={30}
                />
              </div>

              {/* Orbiting OS logos */}
              <OrbitingCircles radius={140}>
                <Image
                  src="/ubuntu.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="ubutnu"
                />
                <Image
                  src="/win-10.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="wiondows"
                />
                <Image
                  src="/fedora.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="fedora"
                />
                <Image
                  src="/arch.png"
                  height={32}
                  width={32}
                  className="rounded"
                  alt="arch"
                />
              </OrbitingCircles>

              {/* Second ring */}
              <OrbitingCircles radius={70} reverse duration={30}>
                <Image
                  src="/chrome.png"
                  width={32}
                  height={32}
                  alt="chrome" />
                <Image
                  src="/brave.png"
                  width={32}
                  height={32}
                  className="rounded-full"
                  alt="brave" />
                <Image
                  src="/firefox.png"
                  width={32}
                  height={32}
                  alt="feirefox" />
              </OrbitingCircles>

            </div>
          </div>
        </div>
        {/* second part the marquee part */}
        <div className="marque-part w-full h-auto p-2 mt-2 mb-2 md:pt-4 md:pb-4 md:p-2">
          <Marquee pauseOnHover className="[--duration:20s]">
            {
              MarqueOS.map((os) => <WorkspaceCard key={os.name} obj={os} />)
            }
          </Marquee>
          <br />
          <Marquee pauseOnHover className="[--duration:20s]" reverse>
            {
              tools.map((os) => <ToolCard key={os.name} obj={os} />)
            }
          </Marquee>

        </div>
        <div className="featurs auto-rows-[18rem]
        md:auto-rows-[20rem]
        lg:auto-rows-[22rem]
        grid-cols-1 p-2 md:grid md:grid-cols-2 gap-4">
          <div className="w-full launch border-white/10 bg-white/[0.03] backdrop-blur-sm row-span-2">
            <div className="contain"></div>
          </div>
          <div className="templates w-full border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="contain"></div>
          </div>
          <div className="browser w-full border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="contain"></div>
          </div>
          <div className="infrustructure w-full border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="contain"></div>
          </div>
          <div className="isolation w-full border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <div className="contain"></div>
          </div>
        </div>
      </main>
    </div >
  );
}
