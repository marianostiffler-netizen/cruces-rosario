export function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Professional Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#002147] shadow-lg z-50">
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

      {/* Hero Section - Tropical Forest Background */}
      <section className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-emerald-900 flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Tropical Forest Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(34, 197, 94, 0.1) 50px, rgba(34, 197, 94, 0.1) 100px)`,
          }}></div>
        </div>
        
        {/* Tropical Leaves Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-green-700 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-emerald-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            NAVEGA HACIA
            <br />
            <span className="text-emerald-400">LAS ISLAS</span>
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto">
            Experimenta la conexión perfecta entre la ciudad y las islas del Paraná
          </p>
          <a href="#horarios" className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-colors shadow-xl">
            Ver Horarios
          </a>
        </div>

        {/* Tropical Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* River Status Section - Tropical Theme */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-green-900 text-center mb-12">Estado del Río</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* River Status Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full">OPERATIVO</span>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-3">Nivel del Río</h4>
              <p className="text-gray-600 mb-4">Condiciones normales para navegación</p>
              <div className="flex items-center justify-between pt-4 border-t border-green-100">
                <span className="text-sm text-gray-500">Actualizado hace 5 min</span>
                <span className="text-lg font-semibold text-emerald-600">2.3m</span>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-2 rounded-full">SOLEADO</span>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-3">Clima Actual</h4>
              <p className="text-gray-600 mb-4">Condiciones perfectas para navegar</p>
              <div className="flex items-center justify-between pt-4 border-t border-green-100">
                <span className="text-sm text-gray-500">Viento</span>
                <span className="text-lg font-semibold text-yellow-600">12 km/h</span>
              </div>
            </div>

            {/* Next Departure Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="bg-teal-100 text-teal-800 text-sm font-bold px-4 py-2 rounded-full">PRÓXIMO</span>
              </div>
              <h4 className="text-2xl font-bold text-green-900 mb-3">Próxima Salida</h4>
              <p className="text-gray-600 mb-4">Puerto Norte - Isla del Inglés</p>
              <div className="flex items-center justify-between pt-4 border-t border-green-100">
                <span className="text-sm text-gray-500">Capacidad</span>
                <span className="text-lg font-semibold text-teal-600">25 pasajeros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Section - Tropical Theme */}
      <section id="horarios" className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-green-900 text-center mb-12">Horarios de Salida</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h4 className="text-2xl font-bold text-green-900 mb-6">Taxi Lanchas - Salida Constante</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-green-200">
                    <th className="py-3 px-4 font-semibold text-green-900">Taxi Lancha</th>
                    <th className="py-3 px-4 font-semibold text-green-900">Destino</th>
                    <th className="py-3 px-4 font-semibold text-green-900">Frecuencia</th>
                    <th className="py-3 px-4 font-semibold text-green-900">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-semibold">El Zapito</td>
                    <td className="py-3 px-4">Isla del Inglés</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">25 min</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-semibold">Dino</td>
                    <td className="py-3 px-4">Isla Gabriel</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">30 min</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-semibold">La Rápida</td>
                    <td className="py-3 px-4">Playa Los Maderos</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">35 min</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-semibold">Isla Verde Express</td>
                    <td className="py-3 px-4">Isla Verde</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">40 min</td>
                  </tr>
                  <tr className="border-b border-green-100">
                    <td className="py-3 px-4 font-semibold">Puerto Norte</td>
                    <td className="py-3 px-4">Puerto Norte</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">20 min</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Paradise</td>
                    <td className="py-3 px-4">Varios destinos</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifas Section - Tropical Theme */}
      <section id="tarifas" className="py-20 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-green-900 text-center mb-12">Tarifas de Taxi Lanchas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-4">Pasajero</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ida</span>
                  <span className="font-semibold text-green-900">$5.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ida y Vuelta</span>
                  <span className="font-semibold text-emerald-600 text-lg">$10.000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-4">Vehículo</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Moto</span>
                  <span className="font-semibold text-green-900">$8.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto (hasta 4m)</span>
                  <span className="font-semibold text-green-900">$15.000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-4">Servicios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bicicleta</span>
                  <span className="font-semibold text-green-900">$2.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipaje extra</span>
                  <span className="font-semibold text-green-900">$1.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradores Section - Tropical Theme */}
      <section id="paradores" className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-green-900 text-center mb-12">Paradores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-3">Vladimir</h4>
              <p className="text-gray-600 mb-4">Restaurante tradicional con vista al río. Especialidad en pescado fresco.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-3">Garden</h4>
              <p className="text-gray-600 mb-4">Cafetería con jardín tropical. Ideal para desayunos y meriendas.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla Gabriel</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-3">El Muelle</h4>
              <p className="text-gray-600 mb-4">Bar de playa con música en vivo. Perfecto para atardeceres.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Playa Los Maderos</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-3">La Rueda</h4>
              <p className="text-gray-600 mb-4">Restaurante familiar con platos regionales y postres caseros.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Puerto Norte</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-3">Cabaña del Pescador</h4>
              <p className="text-gray-600 mb-4">Comida casera de mar. Especialidad en pescado frito y ensaladas.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-green-100">
              <h4 className="text-xl font-bold text-green-900 mb-3">Paraíso</h4>
              <p className="text-gray-600 mb-4">Camping con restaurante. Ideal para grupos y familias con niños.</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
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
    </div>
  );
}
