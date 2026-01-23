export function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Professional Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">CRUCES ROSARIO</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#horarios" className="text-white/90 hover:text-white transition-colors drop-shadow">Horarios</a>
              <a href="#tarifas" className="text-white/90 hover:text-white transition-colors drop-shadow">Tarifas</a>
              <a href="#paradores" className="text-white/90 hover:text-white transition-colors drop-shadow">Paradores</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section with Unsplash Background */}
      <section 
        className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Blur and Overlay Effects */}
        <div className="absolute inset-0 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Additional mist effect layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Glassmorphism Content Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              NAVEGA HACIA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 drop-shadow-lg">
                LAS ISLAS
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-lg">
              Experimenta la conexión perfecta entre la ciudad y las islas del Paraná en un viaje inolvidable
            </p>
            
            {/* Premium Buttons with Shine Effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#horarios" 
                className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Ver Horarios</span>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              
              <a 
                href="#paradores" 
                className="relative overflow-hidden group bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/30"
              >
                <span className="relative z-10">Explorar Paradores</span>
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Natural Bottom Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,90.7C672,96,768,96,864,90.7C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* River Status Section - Premium Theme */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Estado del Río</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* River Status Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full">OPERATIVO</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Nivel del Río</h4>
              <p className="text-gray-600 mb-4">Condiciones normales para navegación</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Actualizado hace 5 min</span>
                <span className="text-lg font-semibold text-blue-600">2.3m</span>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-2 rounded-full">SOLEADO</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Clima Actual</h4>
              <p className="text-gray-600 mb-4">Condiciones perfectas para navegar</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Viento</span>
                <span className="text-lg font-semibold text-orange-600">12 km/h</span>
              </div>
            </div>

            {/* Next Departure Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full">PRÓXIMO</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Próxima Salida</h4>
              <p className="text-gray-600 mb-4">Puerto Norte - Isla del Inglés</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Capacidad</span>
                <span className="text-lg font-semibold text-cyan-600">25 pasajeros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Section */}
      <section id="horarios" className="py-20 bg-gradient-to-b from-stone-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Horarios de Salida</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Taxi Lanchas - Salida Constante</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold text-gray-900">Taxi Lancha</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Destino</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Frecuencia</th>
                    <th className="py-3 px-4 font-semibold text-gray-900">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">El Zapito</td>
                    <td className="py-3 px-4">Isla del Inglés</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">25 min</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Dino</td>
                    <td className="py-3 px-4">Isla Gabriel</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">30 min</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">La Rápida</td>
                    <td className="py-3 px-4">Playa Los Maderos</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">35 min</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-semibold">Isla Verde Express</td>
                    <td className="py-3 px-4">Isla Verde</td>
                    <td className="py-3 px-4">Cada 20-30 min</td>
                    <td className="py-3 px-4">40 min</td>
                  </tr>
                  <tr className="border-b border-gray-100">
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

      {/* Tarifas Section */}
      <section id="tarifas" className="py-20 bg-gradient-to-b from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Tarifas de Taxi Lanchas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Pasajero</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ida</span>
                  <span className="font-semibold text-gray-900">$5.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ida y Vuelta</span>
                  <span className="font-semibold text-amber-600 text-lg">$10.000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Vehículo</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Moto</span>
                  <span className="font-semibold text-gray-900">$8.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto (hasta 4m)</span>
                  <span className="font-semibold text-gray-900">$15.000</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Servicios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bicicleta</span>
                  <span className="font-semibold text-gray-900">$2.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipaje extra</span>
                  <span className="font-semibold text-gray-900">$1.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradores Section */}
      <section id="paradores" className="py-20 bg-gradient-to-b from-stone-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Paradores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Vladimir</h4>
              <p className="text-gray-600 mb-4">Restaurante tradicional con vista al río. Especialidad en pescado fresco.</p>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Garden</h4>
              <p className="text-gray-600 mb-4">Cafetería con jardín tropical. Ideal para desayunos y meriendas.</p>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla Gabriel</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">El Muelle</h4>
              <p className="text-gray-600 mb-4">Bar de playa con música en vivo. Perfecto para atardeceres.</p>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Playa Los Maderos</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">La Rueda</h4>
              <p className="text-gray-600 mb-4">Restaurante familiar con platos regionales y postres caseros.</p>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Puerto Norte</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cabaña del Pescador</h4>
              <p className="text-gray-600 mb-4">Comida casera de mar. Especialidad en pescado frito y ensaladas.</p>
              <div className="flex items-center gap-2 text-sm text-amber-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Paraíso</h4>
              <p className="text-gray-600 mb-4">Camping con restaurante. Ideal para grupos y familias con niños.</p>
              <div className="flex items-center gap-2 text-sm text-amber-600">
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
