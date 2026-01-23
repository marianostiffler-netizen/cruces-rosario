"use client"

import { useEffect, useState } from "react"

export default function CrucesRosario() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
          Tu conexión con las islas del Paraná
        </p>

        {/* Botones de acción principales */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up">
          <button 
            onClick={() => scrollToSection('horarios')}
            className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10">Ver Horarios</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('tarifas')}
            className="relative overflow-hidden group bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/30"
          >
            <span className="relative z-10">Ver Tarifas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Botones secundarios */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            onClick={() => scrollToSection('paradores')}
            className="relative overflow-hidden group bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium text-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/20"
          >
            <span className="relative z-10">Paradores</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('estado')}
            className="relative overflow-hidden group bg-green-600/80 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium text-sm border border-green-400/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-green-600/90"
          >
            <span className="relative z-10">Estado del Río</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Botón de scroll */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>

      {/* Sección de Horarios */}
      <section id="horarios" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 max-w-4xl border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-8 text-balance">
            Horarios de Salida
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Taxi Lanchas - Salida Constante</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 px-4 font-semibold text-white">Taxi Lancha</th>
                    <th className="py-3 px-4 font-semibold text-white">Destino</th>
                    <th className="py-3 px-4 font-semibold text-white">Frecuencia</th>
                    <th className="py-3 px-4 font-semibold text-white">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white font-semibold">El Zapito</td>
                    <td className="py-3 px-4 text-white">Isla del Inglés</td>
                    <td className="py-3 px-4 text-white">Cada 20-30 min</td>
                    <td className="py-3 px-4 text-white">25 min</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white font-semibold">Dino</td>
                    <td className="py-3 px-4 text-white">Isla Gabriel</td>
                    <td className="py-3 px-4 text-white">Cada 20-30 min</td>
                    <td className="py-3 px-4 text-white">30 min</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white font-semibold">La Rápida</td>
                    <td className="py-3 px-4 text-white">Playa Los Maderos</td>
                    <td className="py-3 px-4 text-white">Cada 20-30 min</td>
                    <td className="py-3 px-4 text-white">35 min</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white font-semibold">Isla Verde Express</td>
                    <td className="py-3 px-4 text-white">Isla Verde</td>
                    <td className="py-3 px-4 text-white">Cada 20-30 min</td>
                    <td className="py-3 px-4 text-white">40 min</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white font-semibold">Puerto Norte</td>
                    <td className="py-3 px-4 text-white">Puerto Norte</td>
                    <td className="py-3 px-4 text-white">Cada 20-30 min</td>
                    <td className="py-3 px-4 text-white">20 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tarifas */}
      <section id="tarifas" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 max-w-4xl border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-8 text-balance">
            Tarifas de Taxi Lanchas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Pasajero</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80">Ida</span>
                  <span className="font-semibold text-white">$5.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Ida y Vuelta</span>
                  <span className="font-semibold text-amber-400 text-lg">$10.000</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Vehículo</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80">Moto</span>
                  <span className="font-semibold text-white">$8.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Auto (hasta 4m)</span>
                  <span className="font-semibold text-white">$15.000</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Servicios</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80">Bicicleta</span>
                  <span className="font-semibold text-white">$2.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Equipaje extra</span>
                  <span className="font-semibold text-white">$1.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Paradores */}
      <section id="paradores" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 max-w-4xl border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-8 text-balance">
            Paradores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Vladimir</h3>
              <p className="text-white/80 mb-4">Restaurante tradicional con vista al río. Especialidad en pescado fresco.</p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Garden</h3>
              <p className="text-white/80 mb-4">Cafetería con jardín tropical. Ideal para desayunos y meriendas.</p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla Gabriel</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">El Muelle</h3>
              <p className="text-white/80 mb-4">Bar de playa con música en vivo. Perfecto para atardeceres.</p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Playa Los Maderos</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">La Rueda</h3>
              <p className="text-white/80 mb-4">Restaurante familiar con platos regionales y postres caseros.</p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Puerto Norte</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Cabaña del Pescador</h3>
              <p className="text-white/80 mb-4">Comida casera de mar. Especialidad en pescado frito y ensaladas.</p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">Paraíso</h3>
              <p className="text-white/80 mb-4">Camping con restaurante. Ideal para grupos y familias con niños.</p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla Gabriel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estado del Río */}
      <section id="estado" className="relative z-20 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 max-w-4xl border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-8 text-balance">
            Estado del Río
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">OPERATIVO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nivel del Río</h3>
              <p className="text-white/80 mb-4">Condiciones normales para navegación</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-sm text-white/60">Actualizado hace 5 min</span>
                <span className="text-lg font-semibold text-blue-400">2.3m</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full">SOLEADO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Clima Actual</h3>
              <p className="text-white/80 mb-4">Condiciones perfectas para navegar</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-sm text-white/60">Viento</span>
                <span className="text-lg font-semibold text-yellow-400">12 km/h</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">PRÓXIMO</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Próxima Salida</h3>
              <p className="text-white/80 mb-4">Puerto Norte - Isla del Inglés</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-sm text-white/60">Capacidad</span>
                <span className="text-lg font-semibold text-cyan-400">25 pasajeros</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
