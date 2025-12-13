import Title from "../components/Title";
import { useState } from "react";

function Ejercicio8() {
  const [countWords, setCountWords] = useState(0);
  const [countCharacters, setCountCharacters] = useState(0);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCountWords(text.trim() === "" ? 0 : text.trim().split(/\s+/).length);
    setCountCharacters(text.length);
  };

  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-7">Ejercicio 8: contador de palabras y caracteres</h1>
        <div className="max-w-md mx-auto">
          <textarea
          placeholder="Escribe aquí..."
          onChange={handleTextChange}
          className="w-full p-2 bg-gray-700 text-white rounded mb-4"
          />
          <div className="flex justify-between">
            <p>Palabras: {countWords}</p>
            <p>Caracteres: {countCharacters}</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Ejercicio8;