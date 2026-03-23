"use client";

import { useEffect, useState } from "react";

const words = ["alignment.", "focus.", "certainty."];

export default function WordRotator() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Word is static for ~4 seconds, plus the transition time
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-grid overflow-hidden bg-primary px-2 sm:px-3 lg:px-4 leading-[0.9] mt-0 sm:mt-2 md:mt-3 align-baseline shadow-sm text-white">
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                // The word right before the current one (with wrap-around) is the exiting word
                const isExiting = index === (currentIndex - 1 + words.length) % words.length;

                // Active stays at 0%. Exiting drops to -120% (upwards). Idle prepares at 120% (downwards).
                const yOffset = isActive ? "0%" : isExiting ? "-120%" : "120%";
                const opacity = isActive ? 1 : 0;

                return (
                    <span
                        key={word}
                        className={`row-start-1 col-start-1 text-center whitespace-nowrap leading-tight ${
                            // Only apply transition when jumping between active and exiting.
                            // When resetting from exiting to idle, it snaps without transition.
                            isActive || isExiting ? "transition-all duration-500 ease-in-out" : ""
                            }`}
                        style={{
                            transform: `translateY(${yOffset})`,
                            opacity: opacity,
                        }}
                        aria-hidden={!isActive}
                    >
                        {word}
                    </span>
                );
            })}
        </span>
    );
}
