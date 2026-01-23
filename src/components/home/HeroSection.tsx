"use client"

import { useEffect, useState } from "react"

export default function CrucesRosario() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-[200vh] overflow-hidden">
      {/* Fondo de bosque con lago desenfocado */}
      <div className="fixed inset-0 z-0">
        {/* Imagen de fondo con efecto blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')`,
            filter: "blur(3px)",
            transform: `scale(1.1) translateY(${scrollY * 0.3}px)`,
          }}
        />
        {/* Overlay oscuro para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-emerald-900/30 to-cyan-950/60" />
      </div>

      {/* Olas animadas en la parte inferior */}
      <div className="fixed bottom-0 left-0 right-0 z-10 pointer-events-none">
        {/* Ola 1 - más atrás */}
        <svg
          className="absolute bottom-0 w-full h-32 animate-wave-slow"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="rgba(6, 78, 59, 0.5)"
          />
        </svg>

        {/* Ola 2 - intermedia */}
        <svg
          className="absolute bottom-0 w-full h-28 animate-wave-medium"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,25 1440,50 L1440,100 L0,100 Z"
            fill="rgba(20, 83, 45, 0.6)"
          />
        </svg>

        {/* Ola 3 - más adelante */}
        <svg
          className="absolute bottom-0 w-full h-24 animate-wave-fast"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z"
            fill="rgba(22, 101, 52, 0.7)"
          />
        </svg>

        {/* Ola 4 - frontal */}
        <svg
          className="absolute bottom-0 w-full h-20 animate-wave-slower"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C120,60 240,0 360,30 C480,60 600,0 720,30 C840,60 960,0 1080,30 C1200,60 1320,0 1440,30 L1440,60 L0,60 Z"
            fill="rgba(5, 46, 22, 0.85)"
          />
        </svg>

        {/* Reflejo de luz en el agua */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-400/10 to-transparent animate-shimmer" />
      </div>

      {/* Partículas flotantes (como neblina/polvo mágico) */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo o ícono decorativo */}
        <div className="mb-8 animate-fade-in-down">
          <div className="w-24 h-24 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10">
            <svg
              className="w-12 h-12 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
              />
            </svg>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-wider animate-fade-in text-balance">
          <span className="font-serif italic">Cruces</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 tracking-widest font-extralight">
            ROSARIO
          </span>
        </h1>

        {/* Línea decorativa */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-8 animate-expand" />

        {/* Subtítulo */}
        <p className="text-white/70 text-lg md:text-xl max-w-md font-light tracking-wide animate-fade-in-up">
          Un lugar donde la naturaleza y la paz se encuentran
        </p>

        {/* Botón de scroll */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>

      {/* Segunda sección */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 max-w-2xl border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-6 text-balance">
            Bienvenidos
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Descubre la tranquilidad del bosque y la serenidad del lago. 
            Un espacio diseñado para reconectar con la naturaleza y encontrar 
            la paz interior que tanto buscas.
          </p>
        </div>
      </section>
    </main>
  )
}
