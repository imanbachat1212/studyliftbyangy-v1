import { useEffect, useRef } from 'react'

interface PoemAnimationProps {
  poemHTML: string
  backgroundImageUrl?: string
  boyImageUrl?: string
}

export function PoemAnimation({ poemHTML, backgroundImageUrl, boyImageUrl }: PoemAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return
      const scale = Math.min(window.innerWidth / 1200, 1)
      containerRef.current.style.transform = `scale(${scale})`
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="poem-animation-wrapper" ref={containerRef}>
      <style>{`
        .poem-animation-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center center;
          position: relative;
        }

        .cube-scene {
          width: 320px;
          height: 320px;
          perspective: 600px;
          position: relative;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-cube 12s linear infinite;
        }

        @keyframes rotate-cube {
          0%   { transform: rotateY(0deg) rotateX(5deg); }
          25%  { transform: rotateY(90deg) rotateX(10deg); }
          50%  { transform: rotateY(180deg) rotateX(5deg); }
          75%  { transform: rotateY(270deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(5deg); }
        }

        .cube-face {
          position: absolute;
          width: 320px;
          height: 320px;
          border: 2px solid rgba(201, 151, 58, 0.3);
          background: rgba(27, 42, 94, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          backface-visibility: hidden;
        }

        .cube-face--front  { transform: translateZ(160px); }
        .cube-face--back   { transform: rotateY(180deg) translateZ(160px); }
        .cube-face--left   { transform: rotateY(-90deg) translateZ(160px); }
        .cube-face--right  { transform: rotateY(90deg) translateZ(160px); }
        .cube-face--top    { transform: rotateX(90deg) translateZ(160px); }
        .cube-face--bottom { transform: rotateX(-90deg) translateZ(160px); }

        .cube-face--top,
        .cube-face--bottom {
          background: rgba(27, 42, 94, 0.6);
        }

        .cube-text h1 {
          font-family: 'Playfair Display', Georgia, serif;
          color: #C9973A;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.75rem;
          animation: text-glow 3s ease-in-out infinite;
        }

        .cube-text p {
          color: #FDFAF4;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 8px rgba(201, 151, 58, 0.4); }
          50%       { text-shadow: 0 0 20px rgba(201, 151, 58, 0.8); }
        }

        .cube-gold-line {
          width: 60px;
          height: 2px;
          background: #C9973A;
          margin: 0.5rem auto;
        }
      `}</style>

      {backgroundImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      )}

      <div className="cube-scene">
        <div className="cube">
          {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face) => (
            <div key={face} className={`cube-face cube-face--${face}`}>
              <div className="cube-text">
                <div className="cube-gold-line" />
                <div dangerouslySetInnerHTML={{ __html: poemHTML }} />
                <div className="cube-gold-line" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {boyImageUrl && (
        <img
          src={boyImageUrl}
          alt=""
          className="absolute bottom-0 right-0 h-64 object-contain opacity-80"
        />
      )}
    </div>
  )
}
