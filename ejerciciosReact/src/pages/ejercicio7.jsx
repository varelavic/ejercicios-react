import Title from "../components/Title";
import { useState } from "react";

function Ejercicio7() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charSet = lowercaseChars;
    if (includeUppercase) charSet += uppercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Ejercicio 7: generador de contraseñas</h1>
        <div className="my-4">
          <label className="block mb-2">Longitud de la contraseña: {length}</label>
          <input 
            type="range" 
            min="4" 
            max="25" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            className="w-full"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block">
            <input 
              type="checkbox" 
              checked={includeUppercase} 
              onChange={() => setIncludeUppercase(!includeUppercase)} 
              className="mr-2"
            />
            Incluir mayúsculas
          </label>

          <label className="block">
            <input 
              type="checkbox" 
              checked={includeNumbers} 
              onChange={() => setIncludeNumbers(!includeNumbers)} 
              className="mr-2"
            />  
            Incluir números
          </label>

          <label className="block">
            <input 
              type="checkbox" 
              checked={includeSymbols} 
              onChange={() => setIncludeSymbols(!includeSymbols)} 
              className="mr-2"
            />
            Incluir símbolos
          </label>
        </div>

        <button 
          onClick={generatePassword} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generar contraseña
        </button>

        {password && (<div className="mt-4">
          <h2 className="text-lg font-bold">Contraseña generada:</h2>
          <p className="mt-2 p-2 bg-gray-700 rounded break-all">{password}</p>
        </div>)}
      </div>
    </div>
  );
}
export default Ejercicio7;