import Title from "../components/Title";
import { useState } from "react";

function Ejercicio2() {
const [contador, setContador] = useState(0);
  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Ejercicio 2: Contador de Clics</h1>
      <p>Haz clic en el botón para contar clics.</p>
      <div>
        <p>Clics: {contador}</p>
      </div>
        <button 
        onClick={() => {
          setContador(contador + 1);
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Haz Clic para +1
        </button>
      </div>
      
    </div>
  );
}

export default Ejercicio2;