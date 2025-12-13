import Title from "../components/Title";
import { use, useState } from "react";
import { useEffect } from "react";

function Ejercicio6() {
  const [timer, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSegundos(0);
  };

  const horas = String(Math.floor(timer / 3600)).padStart(2, '0');
  const minutos = String(Math.floor((timer % 3600) / 60)).padStart(2, '0');
  const secs = String(timer % 60).padStart(2, '0');
  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Ejercicio 6: Temporizador</h1>
        <p>Tiempo transcurrido: {horas} : {minutos} : {secs}</p>

        <div className="mt-4">
          <button 
            onClick={startTimer} 
            className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Iniciar
          </button>

          <button 
            onClick={stopTimer} 
            className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Pausar
          </button>

          <button 
            onClick={resetTimer} 
            className="mx-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Reiniciar
          </button>

        </div>
      </div>
    </div>
  );
}

export default Ejercicio6;