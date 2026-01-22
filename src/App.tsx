import { HeroSection } from './components/home/HeroSection'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Bienvenido a Cruces Rosario</h2>
        <p className="text-gray-600">Tu conexión con las islas del Paraná</p>
      </main>
    </div>
  )
}

export default App
