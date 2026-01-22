export function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Professional Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white tracking-wide">CRUCES ROSARIO</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#horarios" className="text-white/80 hover:text-white transition-colors">Horarios</a>
              <a href="#tarifas" className="text-white/80 hover:text-white transition-colors">Tarifas</a>
              <a href="#paradores" className="text-white/80 hover:text-white transition-colors">Paradores</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Water Gradient */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#002147] via-[#003366] to-[#004080] flex items-center justify-center">
        {/* Water Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Animated Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)`
          }}></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            NAVEGA HACIA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              LAS ISLAS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experimenta la conexión perfecta entre la ciudad y las islas del Paraná con nuestro servicio premium de cruces fluviales
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
            Ver Horarios
          </button>
        </div>

        {/* Bottom Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* River Status Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-[#002147] text-center mb-12">Estado del Río</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* River Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full">OPERATIVO</span>
              </div>
              <h4 className="text-2xl font-bold text-[#002147] mb-3">Nivel del Río</h4>
              <p className="text-gray-600 mb-4">Condiciones normales para navegación segura</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Actualizado hace 5 min</span>
                <span className="text-lg font-semibold text-blue-600">2.3m</span>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-2 rounded-full">SOLEADO</span>
              </div>
              <h4 className="text-2xl font-bold text-[#002147] mb-3">Clima Actual</h4>
              <p className="text-gray-600 mb-4">Condiciones perfectas para navegar</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Viento</span>
                <span className="text-lg font-semibold text-orange-600">12 km/h</span>
              </div>
            </div>

            {/* Next Departure Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full">PRÓXIMO</span>
              </div>
              <h4 className="text-2xl font-bold text-[#002147] mb-3">Próxima Salida</h4>
              <p className="text-gray-600 mb-4">Puerto Norte - Isla del Inglés</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Capacidad</span>
                <span className="text-lg font-semibold text-cyan-600">25 pasajeros</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
