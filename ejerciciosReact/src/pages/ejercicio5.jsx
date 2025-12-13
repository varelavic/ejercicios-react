import Title from "../components/Title";
import { useState } from "react";

function Ejercicio5() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcularSuma = () => {
    setResultado(parseFloat(num1) + parseFloat(num2));
  };

  const calcularResta = () => {
    setResultado(parseFloat(num1) - parseFloat(num2));
  };

  const calcularMultiplicacion = () => {
    setResultado(parseFloat(num1) * parseFloat(num2));
  };

  const calcularDivision = () => {
    if (parseFloat(num2) !== 0) {
      setResultado(parseFloat(num1) / parseFloat(num2));
    } else {
      setResultado("Error: División por cero");
    }
  };

  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Ejercicio 5: Calculadora Sencilla</h1> 
      </div>

      <div className="inline-flex gap-8 mt-4 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        
        <div className="flex flex-col gap-3">
          <p className="bg-blue-600 p-2 rounded mb-7">Resultado: {resultado}</p>
          <input className="bg-gray-600 text-white p-2 rounded" type="number" placeholder="Número 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
          <input className="bg-gray-600 text-white p-2 rounded" type="number" placeholder="Número 2" value={num2} onChange={(e) => setNum2(e.target.value)} />  
        </div>
        
      
        <div className="flex flex-col gap-3">
          <button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white p-2 rounded" onClick={calcularSuma}>Sumar</button>
          <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white p-2 rounded" onClick={calcularResta}>Restar</button>
          <button className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded" onClick={calcularMultiplicacion}>Multiplicar</button>
          <button className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white p-2 rounded" onClick={calcularDivision}>Dividir</button>
        </div>
        
      </div>
        
    </div>
  );
}

export default Ejercicio5;