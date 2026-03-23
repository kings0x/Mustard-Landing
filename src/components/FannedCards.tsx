

const FannedCards = () => {
    const cards = [
        {
            title: "Community Voted",
            description: "Validated by peers",
            fundingProgress: 67,
            daysLeft: 12,
            transform: "rotate(-18deg) translateX(-85px) translateY(18px)",
            zIndex: 1,
            image: "https://picsum.photos/seed/crypto/400/200",
        },
        {
            title: "Mustard Campaign",
            description: "Funded transparently",
            fundingProgress: 84,
            daysLeft: 5,
            transform: "rotate(0deg) translateX(0px) translateY(0px)",
            zIndex: 3,
            image: "https://picsum.photos/seed/startup/400/200",
        },
        {
            title: "Milestone Locked",
            description: "Smart contract escrow",
            fundingProgress: 42,
            daysLeft: 20,
            transform: "rotate(18deg) translateX(85px) translateY(18px)",
            zIndex: 1,
            image: "https://picsum.photos/seed/tech/400/200",
        },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* LABEL ABOVE THE CARDS */}
            <div
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 'normal',
                    color: '#fbbf24',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                }}
            >
                BUILT ON LITVM . COMMUNITY GOVERNED
            </div>

            {/* FAN CONTAINER */}
            <div
                style={{
                    position: 'relative',
                    width: '210px',
                    height: '270px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            width: '165px',
                            height: '228px',
                            borderRadius: '12px',
                            background: '#ffffff',
                            border: '1px solid rgba(32, 24, 16, 0.08)',
                            boxShadow: '0 12px 24px rgba(32, 24, 16, 0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            transform: card.transform,
                            zIndex: card.zIndex,
                        }}
                    >
                        {/* Section 1: Image area */}
                        <div
                            style={{
                                height: '72px',
                                width: '100%',
                                background: 'rgba(32, 24, 16, 0.02)',
                                borderBottom: '1px solid rgba(32, 24, 16, 0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    display: 'block',
                                }}
                            />
                        </div>

                        {/* Section 2: Content area */}
                        <div
                            style={{
                                padding: '0.75rem',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    color: 'var(--color-ink)',
                                    margin: 0,
                                    marginBottom: '0.2rem',
                                    lineHeight: 1.3,
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.72rem',
                                    color: 'var(--color-muted)',
                                    margin: 0,
                                    marginBottom: '0.75rem',
                                    lineHeight: 1.5,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                } as any}
                            >
                                {card.description}
                            </p>

                            {/* Progress + Stats block */}
                            <div style={{ marginTop: 'auto' }}>
                                {/* Progress track */}
                                <div
                                    style={{
                                        height: '6px',
                                        borderRadius: '3px',
                                        background: 'rgba(32, 24, 16, 0.05)',
                                        marginBottom: '0.5rem',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {/* Progress fill */}
                                    <div
                                        style={{
                                            width: `${card.fundingProgress}%`,
                                            height: '100%',
                                            borderRadius: '3px',
                                            background: 'linear-gradient(90deg, #F88517 0%, #E0770F 100%)',
                                        }}
                                    />
                                </div>

                                {/* Stats row */}
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        fontSize: '0.62rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    <span style={{ color: '#E0770F' }}>
                                        {card.fundingProgress}% Funded
                                    </span>
                                    <span style={{ color: '#63554d' }}>
                                        {card.daysLeft}d left
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FannedCards;
