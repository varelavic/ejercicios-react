import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ejercicio1 from "./pages/ejercicio1"
import Ejercicio2 from './pages/ejercicio2'
import Ejercicio3 from './pages/ejercicio3'
import Ejercicio4 from './pages/ejercicio4'
import Ejercicio5 from './pages/ejercicio5'
import Ejercicio6 from './pages/ejercicio6'
import Ejercicio7 from './pages/ejercicio7'
import Ejercicio8 from './pages/ejercicio8'
import Ejercicio9 from './pages/ejercicio9'

function App() {
  return (
    <div className="w-full min-h-screen p-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ejercicio1' element={<Ejercicio1 />} />
        <Route path='/ejercicio2' element={<Ejercicio2 />} />
        <Route path='/ejercicio3' element={<Ejercicio3 />} />
        <Route path='/ejercicio4' element={<Ejercicio4 />} />
        <Route path='/ejercicio5' element={<Ejercicio5 />} />
        <Route path='/ejercicio6' element={<Ejercicio6 />} />
        <Route path='/ejercicio7' element={<Ejercicio7 />} />
        <Route path='/ejercicio8' element={<Ejercicio8 />} />
        <Route path='/ejercicio9' element={<Ejercicio9 />} />
      </Routes>
    </div>
  )
}

export default App
