export function HeroSection() {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Cruces Rosario</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#estado" className="hover:text-blue-100 transition-colors">Estado</a>
            <a href="#horarios" className="hover:text-blue-100 transition-colors">Horarios</a>
            <a href="#paradores" className="hover:text-blue-100 transition-colors">Paradores</a>
            <a href="#contacto" className="hover:text-blue-100 transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Status Badge Placeholder */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Cruce Operativo</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cruces Rosario
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            Descubre la magia de cruzar el río Paraná. Conectando la ciudad con las islas, 
            donde cada viaje es una aventura única.
          </p>

          {/* Weather & River Status Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Clima Actual</p>
                  <p className="font-semibold">--°C | Soleado</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Estado del Río</p>
                  <p className="font-semibold">Normal | Sin Alertas</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Ver Horarios
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 96L48 90.7C96 85 192 75 288 74.7C384 75 480 85 576 90.7C672 96 768 96 864 90.7C960 85 1056 75 1152 74.7C1248 75 1344 85 1392 90.7L1440 96V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="white" />
        </svg>
      </div>
    </header>
  );
}
