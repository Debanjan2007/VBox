"use client"
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileNav"
import { useState, useEffect } from "react"
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
import { LaunchWorkspacePreview } from "./bento/LaunchWorkspacePreview"
import { ToolsTamplete, ToolsTampleteSmall } from "./bento/TampleteTool"
import { Safari } from "@/components/ui/safari"
import { AnimatedInfa } from "./bento/AnimatedLine"
import { IsolatedSessions } from "./bento/IsolatedSessions"
import { Globe } from "@/components/ui/globe"
import Footer from "./Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  useEffect(() => {
    (() => {
      const screen = window.innerWidth
      setScreenSize(screen)
    })()
  }, [])
  const globeConfig = {
    width: 600,
    height: 600,

    phi: 0,
    theta: 0.25,

    dark: 1,

    diffuse: 1.2,

    mapSamples: 20000,

    mapBrightness: 6,

    mapBaseBrightness: 0,

    baseColor: [0.1, 0.2, 0.55],

    markerColor: [0.3, 0.75, 1],

    glowColor: [0.15, 0.45, 1],

    opacity: 0.95,

    scale: 1,

    devicePixelRatio: 2,

    offset: [0, 0],

    markers: [
      // Mumbai
      {
        location: [19.0760, 72.8777],
        size: 0.08,
      },

      // Singapore
      {
        location: [1.3521, 103.8198],
        size: 0.08,
      },

      // Frankfurt
      {
        location: [50.1109, 8.6821],
        size: 0.08,
      },

      // Virginia
      {
        location: [37.4316, -78.6569],
        size: 0.08,
      },
    ],

    onRender: (state) => {
      state.phi += 0.0035;
    },
  };
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
        {/* bento grid */}
        <div className="featurs auto-rows-[20rem]
        md:auto-rows-[20rem]
        lg:auto-rows-[22rem]
        grid grid-cols-1 p-2 md:grid-cols-2 gap-4">
          <div className="w-full launch border-white/10 rounded-lg bg-white/[0.03] backdrop-blur-sm row-span-2">
            <LaunchWorkspacePreview />
          </div>
          <div className="templates rounded-lg w-full p-4 border-white/10 bg-white/[0.03] backdrop-blur-sm flex justify-center items-center">
            <div className="items w-full h-auto md:h-full items-center grid grid-cols-1 gap:2 place-items-center md:grid md:grid-cols-2">
              {
                screenSize > 786 ? ToolsTamplete.map((tool) => <ToolCard key={tool.name} obj={tool} className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />) : ToolsTampleteSmall.map((tool) => <ToolCard key={tool.name} obj={tool} className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />)
              }
            </div>
          </div>
          <div className="browser rounded-lg w-full border-white/10 bg-white/[0.03] backdrop-blur-sm flex justify-center items-center">
            <Safari
              url="workspace-7f42.vbox.run"
              imageSrc="/workspace-preview.png"
              className="max-w-full max-h-full"
            />
          </div>
          <div className="infrastructure relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
            <IsolatedSessions />
          </div>
          <div className="isolation w-full rounded-lg border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <AnimatedInfa />
          </div>
        </div>
        <div className="Connectivity grid auto-rows-[20rem] md:auto-rows-[36rem] grid-cols-1 gap-4 md:grid md:grid-cols-2">
          <div className="text-part flex justify-content px-4 py-8 md:px-12 lg:px-16">
            <div className="container w-full h-full mt-2 md:mt-6 lg:mt-8">
              <div className="max-w-xl space-y-6">
                <div>
                  <p className="text-sm text-gray-400 mb-3">
                    Launch Globally
                  </p>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                    Deploy isolated workspaces
                    <br />
                    close to your users.
                  </h1>

                  <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                    <ul>
                      <li>
                        <span className="text-green-400">✔ </span>
                        Lower latency
                      </li>
                      <li>
                        <span className="text-green-400">✔ </span>
                        Better performance
                      </li>
                      <li>
                        <span className="text-green-400">✔ </span>
                        Worldwide regions
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="flex flex-col h-16 sm:flex-row items-stretch sm:items-center gap-4 p-2 ">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full h-full sm:w-auto"
                  >
                    <Link href="/login" className="cursor-pointer">
                      Launch your workflow
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] block mt-20 lg:mt-2">
            <Globe config={globeConfig} />
          </div>
          <footer className="footer w-full mt-2">
            <Footer />
          </footer>

        </div>
      </main >
    </div >
  );
}
