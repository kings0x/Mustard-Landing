"use client";

import { useEffect, useRef, useMemo } from "react";

const CAMPAIGNS = [
    { label: 'Validation Campaign', tag: 'Community · Builder', bg: '#111128' },
    { label: 'Seed Funding Round', tag: 'Funding · DeFi', bg: '#1a1500' },
    { label: 'DeSci Research Proposal', tag: 'Science · Research', bg: '#0a1a0a' },
    { label: 'Bounty Issue Board', tag: 'Execution · Dev', bg: '#1a0a0a' },
    { label: 'Milestone Roadmap', tag: 'Planning · Builder', bg: '#130a1f' },
    { label: 'Community Testing Sprint', tag: 'Testing · QA', bg: '#08141a' },
    { label: 'Open Source Bounty', tag: 'Bounty · Open Source', bg: '#1a1000' },
    { label: 'Protocol Launch', tag: 'Launch · Web3', bg: '#08081f' },
    { label: 'Ecosystem Grant', tag: 'Grant · LitVM', bg: '#081a0e' },
    { label: 'Research Participant', tag: 'DeSci · Recruitment', bg: '#1a0812' },
    { label: 'Product Validation', tag: 'PMF · Startup', bg: '#1a1500' },
    { label: 'DAO Proposal', tag: 'Governance · DAO', bg: '#09091a' },
    { label: 'Testnet Campaign', tag: 'Testing · Chain', bg: '#080f1a' },
    { label: 'Token Launch Plan', tag: 'Token · Launch', bg: '#1a0f00' },
    { label: 'Builder Showcase', tag: 'Portfolio · Builder', bg: '#141414' },
    { label: 'Impact Research', tag: 'DeSci · Impact', bg: '#0a160a' },
];

export default function ParallaxCards() {
    const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const positions = useRef([0, 0, 0]);
    const velocity = useRef(0);
    const isDragging = useRef(false);
    const rafId = useRef<number | null>(null);

    const speeds = [0.35, 0.7, 0.7];
    const directions = [1, -1, 1];

    // Duplicate data for infinite feel
    const duplicatedCampaigns = useMemo(() => [...CAMPAIGNS, ...CAMPAIGNS, ...CAMPAIGNS, ...CAMPAIGNS], []);

    const move = (dy: number) => {
        rowRefs.forEach((ref, i) => {
            if (!ref.current) return;
            const halfWidth = ref.current.scrollWidth / 2;
            const unit = halfWidth + 10; // 10 is the gap

            positions.current[i] += dy * speeds[i] * directions[i];
            // Modulo wrapping for infinite loop
            positions.current[i] = ((positions.current[i] % unit) + unit) % unit - unit;

            ref.current.style.transform = `translateX(${positions.current[i]}px)`;
        });
    };

    const coast = () => {
        if (Math.abs(velocity.current) < 0.1) {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            return;
        }
        move(velocity.current);
        velocity.current *= 0.95; // Friction
        rafId.current = requestAnimationFrame(coast);
    };

    useEffect(() => {
        // Initial offsets to prevent all rows starting at same position
        positions.current = [0, -100, -50];
        move(0);

        const handleWheel = (e: WheelEvent) => {
            move(e.deltaY * 0.5);
            velocity.current = 0; // Cancel momentum on manual wheel
        };

        let startY = 0;
        const handleStart = (y: number) => {
            isDragging.current = true;
            startY = y;
            velocity.current = 0;
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };

        const handleMove = (y: number) => {
            if (!isDragging.current) return;
            const dy = startY - y;
            velocity.current = dy;
            startY = y;
            move(dy);
        };

        const handleEnd = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            rafId.current = requestAnimationFrame(coast);
        };

        // Global listeners as requested
        window.addEventListener("wheel", handleWheel, { passive: true });

        // Mouse Events
        const onMouseDown = (e: MouseEvent) => handleStart(e.clientY);
        const onMouseMove = (e: MouseEvent) => handleMove(e.clientY);
        const onMouseUp = () => handleEnd();
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        // Touch Events
        const onTouchStart = (e: TouchEvent) => handleStart(e.touches[0].clientY);
        const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientY);
        const onTouchEnd = () => handleEnd();
        window.addEventListener("touchstart", onTouchStart, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("touchend", onTouchEnd);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <section className="bg-transparent py-24 overflow-hidden select-none">
            <div className="container-custom mb-16 text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8 tracking-tight font-barlow max-w-3xl mx-auto leading-tight">
                    Support and Fund<br /> Projects<br /> that resonate with you
                </h2>
                <button className="px-8 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 cursor-pointer">
                    Explore all projects &rarr;
                </button>
            </div>

            <div className="flex flex-col gap-3">
                {rowRefs.map((ref, i) => (
                    <div
                        key={i}
                        ref={ref}
                        className={`flex gap-3 will-change-transform w-max ${i === 2 ? "opacity-40 grayscale" : ""}`}
                    >
                        {duplicatedCampaigns.map((camp, j) => (
                            <div
                                key={`${i}-${j}`}
                                className="w-[200px] h-[100px] rounded-[6px] flex flex-col justify-end p-3 flex-shrink-0"
                                style={{
                                    backgroundColor: i === 2 ? '#e2e2e2' : camp.bg,
                                    border: i === 2 ? 'none' : '0.5px solid rgba(255,255,255,0.07)'
                                }}
                            >
                                <div className={`text-[11.5px] font-medium leading-tight ${i === 2 ? "text-ink/30" : "text-white/80"}`}>
                                    {camp.label}
                                </div>
                                <div className={`text-[10px] mt-1 ${i === 2 ? "text-ink/20" : "text-white/30"}`}>
                                    {camp.tag}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
