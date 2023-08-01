import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente"
export function loader() {
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];
return clientes
}
const Index = () => {
const datos=useLoaderData()
  return (
    <>
    <h1 className="font-black text-4xl - text-blue-900">Clientes
      </h1>
      <p className="text-gray-700 text-xl">Aministrar tus clientes</p>
      {
      datos.length?(
        <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-blue-800">
        <tr className="text-white">
        <th className="w-1/5 py-2">Nombre</th>
        <th className="w-1/5 py-2">Telefono</th>
        <th className="w-1/5 py-2">Empresa</th>
        <th className="w-1/5 py-2">Email</th>
        <th className="w-1/5 py-2">Eliminar</th>
        <th className="w-1/5 py-2">Editar</th>
        </tr>
        </thead>
        <tbody className="bg-white">
        {
        datos.map(cliente=>(
          <Cliente key={cliente.id} cliente={cliente}/>
        ))
        }
        </tbody>
        </table>
        ):(
          <p className="text-center text-2xl">No hay clientes</p>

        )}

     
      
      
      </>
  )
}

export default Index