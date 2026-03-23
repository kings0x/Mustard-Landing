"use client";

interface StatCard {
    value: string;
    label: string;
}

interface HeroVisualContainerProps {
    stats: StatCard[];
}

// Card layering config: [0] back-left, [1] back-right, [2] front-center (primary)
const cardLayers = [
    {
        // Back-left card
        className: "absolute top-[4%] left-[2%] w-[75%] z-10",
        style: { transform: "scale(0.92) rotate(-2deg)" },
    },
    {
        // Back-right card
        className: "absolute top-[8%] right-[2%] w-[70%] z-20",
        style: { transform: "scale(0.95) rotate(1.5deg)" },
    },
    {
        // Primary front card (centered)
        className: "relative w-[85%] mx-auto z-30",
        style: { transform: "translateY(0)" },
    },
];

export default function HeroVisualContainer({ stats }: HeroVisualContainerProps) {
    // Render order: back cards first (absolute), then primary card (relative, sets container height)
    const renderOrder = [0, 1, 2];

    return (
        <div className="relative w-full">
            {renderOrder.map((i) => {
                const stat = stats[i];
                const layer = cardLayers[i];

                return (
                    <div
                        key={i}
                        className={`
              rounded-xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-md
              px-5 py-4 sm:px-6 sm:py-5
              flex flex-col justify-end
              transition-all duration-500 ease-out
              hover:border-primary/30 hover:bg-neutral-900/60
              hover:shadow-lg hover:shadow-primary/5
              ${layer.className}
            `}
                        style={{
                            ...layer.style,
                            boxShadow:
                                i === 2
                                    ? "0 12px 40px rgba(0,0,0,0.5)"
                                    : i === 1
                                        ? "0 6px 28px rgba(0,0,0,0.35)"
                                        : "0 4px 20px rgba(0,0,0,0.25)",
                        }}
                    >
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">
                            {stat.value}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-400 leading-snug">
                            {stat.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
