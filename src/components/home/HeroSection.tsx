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

      {/* Hero Section */}
      <section className="min-h-screen bg-slate-900 flex items-center justify-center pt-16">
        <div className="text-center px-6">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            NAVEGA HACIA
            <br />
            <span className="text-blue-400">LAS ISLAS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Experimenta la conexión perfecta entre la ciudad y las islas del Paraná
          </p>
          <a href="#horarios" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl">
            Ver Horarios
          </a>
        </div>
      </section>

      {/* River Status Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-slate-900 text-center mb-12">Estado del Río</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* River Status Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full">OPERATIVO</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Nivel del Río</h4>
              <p className="text-gray-600 mb-4">Condiciones normales para navegación</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Actualizado hace 5 min</span>
                <span className="text-lg font-semibold text-blue-600">2.3m</span>
              </div>
            </div>

            {/* Weather Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-2 rounded-full">SOLEADO</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Clima Actual</h4>
              <p className="text-gray-600 mb-4">Condiciones perfectas para navegar</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Viento</span>
                <span className="text-lg font-semibold text-yellow-600">12 km/h</span>
              </div>
            </div>

            {/* Next Departure Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full">PRÓXIMO</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">Próxima Salida</h4>
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
      <section id="horarios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-slate-900 text-center mb-12">Horarios de Salida</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Estación Fluvial</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-semibold text-slate-900">Destino</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Salida</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Duración</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Frecuencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Isla del Inglés</td>
                    <td className="py-3 px-4">08:00, 10:00, 14:00, 16:00</td>
                    <td className="py-3 px-4">25 min</td>
                    <td className="py-3 px-4">Cada 2 horas</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Isla Gabriel</td>
                    <td className="py-3 px-4">09:00, 13:00, 17:00</td>
                    <td className="py-3 px-4">30 min</td>
                    <td className="py-3 px-4">Cada 4 horas</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Playa Los Maderos</td>
                    <td className="py-3 px-4">07:30, 11:30, 15:30</td>
                    <td className="py-3 px-4">35 min</td>
                    <td className="py-3 px-4">Cada 4 horas</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Puerto Norte</td>
                    <td className="py-3 px-4">08:30, 12:30, 16:30</td>
                    <td className="py-3 px-4">20 min</td>
                    <td className="py-3 px-4">Cada 4 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifas Section */}
      <section id="tarifas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-slate-900 text-center mb-12">Tarifas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Pasajero</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ida</span>
                  <span className="font-semibold text-slate-900">$800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ida y Vuelta</span>
                  <span className="font-semibold text-slate-900">$1.400</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Vehículo</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Moto</span>
                  <span className="font-semibold text-slate-900">$1.200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto (hasta 4m)</span>
                  <span className="font-semibold text-slate-900">$2.500</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Servicios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bicicleta</span>
                  <span className="font-semibold text-slate-900">$400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipaje extra</span>
                  <span className="font-semibold text-slate-900">$200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradores Section */}
      <section id="paradores" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-slate-900 text-center mb-12">Paradores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Vladimir</h4>
              <p className="text-gray-600 mb-4">Restaurante tradicional con vista al río. Especialidad en pescado fresco.</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla del Inglés</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Garden</h4>
              <p className="text-gray-600 mb-4">Cafetería con jardín tropical. Ideal para desayunos y meriendas.</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Isla Gabriel</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-3">El Muelle</h4>
              <p className="text-gray-600 mb-4">Bar de playa con música en vivo. Perfecto para atardeceres.</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Playa Los Maderos</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-3">La Rueda</h4>
              <p className="text-gray-600 mb-4">Restaurante familiar con platos regionales y postres caseros.</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Puerto Norte</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Cabaña del Pescador</h4>
              <p className="text-gray-600 mb-4">Comida casera de mar. Especialidad en pescado frito y ensaladas.</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ila del Inglés</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Paraíso</h4>
              <p className="text-gray-600 mb-4">Camping con restaurante. Ideal para grupos y familias con niños.</p>
              <div className="flex items-center gap-2 text-sm text-blue-600">
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
