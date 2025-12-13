import Title from "../components/Title";
import { useState } from "react";

function Ejercicio4() {
const [palabras, setPalabras] = useState(
  ["manzana", "banana", "naranja", "uva", "pera", "kiwi", "mango", "fresa", "cereza", "melocotón"]);

  const [busqueda, setBusqueda] = useState("");
  
  const palabrasFiltradas = palabras.filter(palabra =>
    palabra.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Ejercicio 4: Búsqueda de palabras</h1>

        <input
          type="text"
          placeholder="Buscar palabra..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="bg-gray-700 m-2 p-2 rounded"
        />

        <ul className="mt-4 max-w-sm mx-auto space-y-2">
          {palabrasFiltradas.map((palabra, index) => (
            <li key={index} className="bg-gray-700 p-2 mb-2 rounded">
              {palabra}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default Ejercicio4;