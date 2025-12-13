import Title from "../components/Title";
import { useState } from "react";
import { useEffect } from "react";

function Ejercicio9() {
  const [items, setItems] = useState(() => {
    const datos = localStorage.getItem("tareas");
    return datos ? JSON.parse(datos) : ["comprar leche", "estudiar React", "hacer ejercicio"];
  });
  const [nuevoItem, setNuevoItem] = useState("");
  
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(items));
  }, [items]);

  const agregarItem = () => {
    if (nuevoItem.trim() !== "") {
      setItems([...items, nuevoItem.trim()]);
      setNuevoItem("");
    }
  };

  const eliminarItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const manejarEnter = (e) => {
    if (e.key === "Enter") {
      agregarItem();
    }
  };

  return (
    <div>
      <Title />
      <div className="p-6 bg-gray-800 text-center text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-5">
          Ejercicio 9: Lista tareas localStorage
        </h1>
        <ul className="mb-4 max-w-sm mx-auto space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center gap-4 bg-gray-700 p-2 mb-2 rounded"
            >
              {item}
              <button
                onClick={() => {
                  eliminarItem(index);
                }}
                className="ml-4 px-2 py-1 bg-red-500 rounded hover:bg-red-600"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <div>
          <input
            className="bg-gray-700 m-2 p-2 rounded"
            type="text"
            placeholder="Añade a la lista..."
            value={nuevoItem}
            onChange={(e) => setNuevoItem(e.target.value)}
            onKeyDown={manejarEnter}
          />

          <button
            onClick={() => {
              agregarItem();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ejercicio9;